# 收集器

本章节将介绍如何设计和实现收集器，涉及文件目录操作、多线程编程。

## 数据结构

目录的遍历操作在工作线程中进行，避免阻塞界面响应。线程的创建和销毁都需要用到线程 id。

工作期间如果切换了目标目录，则应能立刻中断当前操作并开始新的遍历工作。这一中断能力可以靠条件变量和互斥锁实现，为了能检查目标目录是否变化还应该存储它。

当目录遍历完毕时，应该更新文件列表然后通知图片查看界面更新切换按钮状态。通知方式可以用回调函数来实现。

当目录遍历完毕后，应该进入休眠状态，等待目标目录变更或需要退出线程。这些行为都依赖当前状态才能判断，所以，需要用一个变量存储当前状态，在特定阶段更新它。

结合上述需求，我们可以得出以下数据结构定义：

```c title=image-collector.h
typedef enum {
        IMAGE_COLLECTOR_STATE_EXITED,
        IMAGE_COLLECTOR_STATE_READY,
        IMAGE_COLLECTOR_STATE_PENDING,
        IMAGE_COLLECTOR_STATE_LOADING,
        IMAGE_COLLECTOR_STATE_FINISHED,
        IMAGE_COLLECTOR_STATE_ERROR,
} image_collector_state_t;

typedef struct image_collector image_collector_t;

struct image_collector {
        char *file;
        image_collector_state_t state;
        list_t files;
        size_t index;
        char *dirname;
        thread_t tid;
        thread_mutex_t mutex;
        thread_cond_t cond;
        void *callback_arg;
        void (*callback)(image_collector_t *, void *);
};
```

`list_t` 是 yutil 库提供的类型，其内部实现是一个链表，可用于存储文件列表。

`thread_t`、`thread_mutex_t`、`thread_cond_t` 是 LCUI 的 thread 线程库库的 thread.h 头文件提供的类型，该库的内部实现只是对 windows 和 pthread 的函数做了简单的封装，用法和 pthread 库相同。

## 初始化

给成员变量赋初始值，然后创建线程：

```c title=image-collector.c
void image_collector_init(image_collector_t *c)
{
        c->file = NULL;
        c->callback = NULL;
        c->callback_arg = NULL;
        c->dirname = NULL;
        c->state = IMAGE_COLLECTOR_STATE_READY;
        list_create(&c->files);
        thread_cond_init(&c->cond);
        thread_mutex_init(&c->mutex);
        if (thread_create(&c->tid, image_collector_thread, c) != 0) {
                c->state = IMAGE_COLLECTOR_STATE_EXITED;
        }
}
```

## 销毁

先将状态改为 EXITED，再触发条件信号，等待工作线程退出后再释放其它资源。

```c title=image-collector.c
void image_collector_destroy(image_collector_t *c)
{
        thread_mutex_lock(&c->mutex);
        c->state = IMAGE_COLLECTOR_STATE_EXITED;
        thread_cond_signal(&c->cond);
        thread_mutex_unlock(&c->mutex);
        thread_join(c->tid, NULL);
        if (c->file) {
                free(c->file);
        }
        if (c->dirname) {
                free(c->dirname);
        }
        c->file = NULL;
        c->dirname = NULL;
}

```

## 工作线程

工作线程一直运行直到状态是 EXITED 时为止，那么就需要套一层循环，但一直循环会占用较高 CPU 资源，因此我们需要用到线程库提供的 `thread_cond_wait()` 函数让线程进入阻塞状态直到条件触发时再继续工作。

目录的遍历操作可以用 yutil 库来实现，用法如下：

```c
dir_t *dir = dir_create();
dir_entry_t *entry;

if (dir_open_a("/path/to/dir", dir) != 0) {
        return;
}
while ((entry = dir_read_a(dir)) != NULL) {
        file = dir_get_file_name_a(entry);
        if (dir_entry_is_regular(entry)) {
                // 如果是文件
        }
}

dir_destroy(dir);
```

在遍历的过程中，我们需要顺便找到当前打开的文件在文件列表中的位置，看上去比较简单，用 `strcmp()` 判断即可，但收集器的 file 成员存储的是文件的绝对路径，而文件列表仅存储文件名，因此，需要定义一个 `path_basename()` 函数来提取文件名。

```c title=utils.c
const char *path_basename(const char *path)
{
        const char *sep = path_last_sep(path);
        return sep == NULL ? NULL : sep + 1;
}
```

提取方式是遍历字符串，找到最后一个分隔符，以此为字符串的开头。需要注意的是，Windows 和 Linux 用的分隔符不一样，前者是 `\`，后者是 `/`。

```c title=utils.c
const char *str_last_char(const char *str, char ch)
{
        const char *p, *ch_p = NULL;

        for (p = str; *p; p++) {
                if (*p == ch) {
                        ch_p = p;
                }
        }
        return ch_p;
}

const char *path_last_sep(const char *path)
{
        const char *sep1 = str_last_char(path, '\\');
        const char *sep2 = str_last_char(path, '/');

        if (sep1) {
                if (sep2) {
                        return sep1 > sep2 ? sep1 : sep2;
                }
                return sep1;
        }
        return sep2;
}
```

遍历目录是为了收集图片文件，而 LCUI 支持的图片格式是 BMP、PNG、JPEG，那么判断是否为图片文件的方法就是先从文件名中提取出文件后缀名，然后判断后缀名是否为`.jpg`、`.jpeg`、`.bmp`、`.png`。

```c title=image-collector.c
bool is_image_file(const char *path)
{
        char *ext;
        const char *ext_src = str_last_char(path, '.');

        if (ext_src == NULL) {
                return false;
        }
        ext = strdup2(ext_src);
        strtolower(ext, ext);
        if (strstr(".jpg.jpeg.bmp.png", ext) != NULL) {
                free(ext);
                return true;
        }
        free(ext);
        return false;
}
```

好了，解决完上述问题后，我们就可以写出以下代码：

```c title=image-collector.c
void image_collector_thread(void *arg)
{
        dir_t *dir;
        char *file;
        char *current_file = NULL;
        list_t files;
        dir_entry_t *entry;
        image_collector_t *c = arg;

        dir = dir_create();
        list_create(&files);
        while (c->state != IMAGE_COLLECTOR_STATE_EXITED) {
                thread_mutex_lock(&c->mutex);
                while (c->state != IMAGE_COLLECTOR_STATE_PENDING &&
                       c->state != IMAGE_COLLECTOR_STATE_EXITED) {
                        thread_cond_wait(&c->cond, &c->mutex);
                }
                if (c->state == IMAGE_COLLECTOR_STATE_EXITED) {
                        thread_mutex_unlock(&c->mutex);
                        break;
                }
                if (dir_open_a(c->dirname, dir) != 0) {
                        c->state = IMAGE_COLLECTOR_STATE_ERROR;
                        logger_error(
                            "[image-collector] cannot open directory: %ls",
                            c->dirname);
                        continue;
                }
                c->index = 0;
                c->state = IMAGE_COLLECTOR_STATE_LOADING;
                if (current_file) {
                  free(current_file);
                }
                current_file = strdup2(path_basename(c->file));
                thread_mutex_unlock(&c->mutex);
                while (c->state != IMAGE_COLLECTOR_STATE_PENDING &&
                       c->state != IMAGE_COLLECTOR_STATE_EXITED) {
                        entry = dir_read_a(dir);
                        if (entry == NULL) {
                                list_destroy(&c->files, free);
                                list_concat(&c->files, &files);
                                c->state = IMAGE_COLLECTOR_STATE_FINISHED;
                                if (c->callback) {
                                        c->callback(c, c->callback_arg);
                                }
                                break;
                        }
                        file = dir_get_file_name_a(entry);
                        if (strcmp(file, current_file) == 0) {
                                c->index = files.length;
                        }
                        if (dir_entry_is_regular(entry) &&
                            is_image_file(file)) {
                                list_append(&files, strdup2(file));
                        }
                }
                list_destroy(&files, free);
        }
        if (current_file) {
                free(current_file);
        }
        dir_destroy(dir);
        thread_exit(NULL);
}
```

## 加载文件

file 和 dirname 在工作线程中也会用到，为避免线程安全问题，我们需要在操作它们前锁上互斥锁，操作完后将状态设为 PENDING，最后触发条件信号并解开互斥锁。如果新加载的文件与上个文件位于同一个目录内，则无需通知工作线程重新收集文件。

```c title=image-collector.c
void image_collector_load_file(image_collector_t *c, const char *file)
{
        char *dirname = path_dirname(file);

        thread_mutex_lock(&c->mutex);
        if (c->file) {
                free(c->file);
        }
        c->file = strdup2(file);
        if (c->dirname && strcmp(c->dirname, dirname) == 0) {
                thread_mutex_unlock(&c->mutex);
                return;
        }
        if (c->dirname) {
                free(c->dirname);
        }
        c->dirname = dirname;
        c->state = IMAGE_COLLECTOR_STATE_PENDING;
        thread_cond_signal(&c->cond);
        thread_mutex_unlock(&c->mutex);
}
```

## 状态检测

当文件列表未收集完毕时，禁止切换。当文件位于列表首位时，禁止切换到上一个文件。当文件位于列表末尾时，禁止切换到下一个文件。

```c title=image-collector.c
bool image_collector_has_next(image_collector_t *c)
{
        return c->state == IMAGE_COLLECTOR_STATE_FINISHED &&
               c->index + 1 < c->files.length;
}

bool image_collector_has_prev(image_collector_t *c)
{
        return c->state == IMAGE_COLLECTOR_STATE_FINISHED && c->index > 0;
}
```

## 文件切换

切换到上一个或下一个文件，本质上就是对位置进行 +1 和 -1，然后获取该位置的文件名。由于界面中用的图片路径是绝对路径，在拿到文件名后还得将它与目录路径拼接在一起成为绝对路径。

```c title=image-collector.c
char *image_collector_get_file(image_collector_t *c)
{
        size_t len;
        char *file;
        const char *name = list_get(&c->files, c->index);

        if (!name || !c->dirname) {
                return c->file ? strdup2(c->file) : NULL;
        }
        len = strlen(c->dirname) + strlen(name) + 1;
        file = malloc(sizeof(char) * (len + 1));
        snprintf(file, len + 1, "%s%c%s", c->dirname, PATH_SEP, name);
        file[len] = 0;
        return file;
}

char *image_collector_next(image_collector_t *c)
{
        if (image_collector_has_next(c)) {
                c->index++;
        }
        return image_collector_get_file(c);
}

char *image_collector_prev(image_collector_t *c)
{
        if (image_collector_has_prev(c)) {
                c->index--;
        }
        return image_collector_get_file(c);
}
```
