# 实现图像文件收集器

本章节将介绍如何实现图像文件收集器，它在工作线程中收集图像文件，为图像查看界面的切换功能和影片界面的缩略图列表功能提供数据支持。完成本章后你将学会：

- 线程管理和通信
- 实现一个简单的事件通知机制
- 文件遍历和路径处理

## 通信机制

影片界面与图像查看界面均具备图像切换功能，且二者都需要获取当前查看的图像信息。为实现这两个界面间的数据同步，我们可采用事件总线设计模式。具体而言，将同步流程细分为动作、事件和效果三个部分。

两个界面会共享一个图像收集器，并且都能够调用该收集器的函数来执行动作。当动作执行完成后，会触发相应的事件。影片界面和图像查看界面分别在各自的事件处理器中实现相应效果，以此达成数据同步。

以下是通信机制的流程图示：

```mermaid
graph LR
    影片界面 -->|事件| 图像收集器
    图像查看界面 -->|事件| 图像收集器
    图像收集器 -->|事件| 影片界面
    图像收集器 -->|事件| 图像查看界面
```

## 数据结构

我们先梳理一遍功能需求和所需的数据：

- **遍历目录**：主线程上运行着主循环，界面响应逻辑都在主循环中执行，为避免阻塞主循环，我们需要在工作线程中遍历目录。线程的创建和销毁都需要用到线程 id。
- **中断操作**：当用户切换目标目录时，应该能够立刻中断当前的遍历操作并开始新的遍历工作。这可以通过条件变量和互斥锁来实现。
- **存储文件列表**：yutil 库提供了 `list_t` 类型，其内部实现是一个链表，可用于存储文件列表。
- **文件列表更新**：当目录遍历完毕时，应该更新文件列表并通知图像查看界面更新切换按钮状态。这可以通过回调函数来实现。
- **线程休眠和唤醒**：当目录遍历完毕后，线程应该进入休眠状态，等待目标目录变更或需要退出线程。这些行为依赖于当前状态，因此需要用一个变量存储当前状态，并在特定阶段更新它。LCUI 的 thread 线程库可用于解决此问题，该库的内部实现只是对 Windows 和 pthread 的函数做了简单的封装，用法和 pthread 库相同。
- **事件监听**：在切换图像、找到当前图像、收集完毕时，通知图像查看界面和影片界面更新。我们需要一个列表来存储回调函数和参数。

基于这些需求，我们可以设计出以下数据结构：

```c title="src/image-collector.h"
#ifndef IMAGE_COLLECTOR_H
#define IMAGE_COLLECTOR_H

#include <yutil.h>

typedef enum {
        IMAGE_COLLECTOR_EVENT_OPEN,
        IMAGE_COLLECTOR_EVENT_FOUND,
        IMAGE_COLLECTOR_EVENT_FINISHED,
} image_collector_event_type_t;

typedef struct image_collector image_collector_t;

#endif
```

```c title="src/image-collector.c"
#include <thread.h>
#include "image-collector.h"

typedef enum {
        IMAGE_COLLECTOR_STATE_EXITED,
        IMAGE_COLLECTOR_STATE_READY,
        IMAGE_COLLECTOR_STATE_PENDING,
        IMAGE_COLLECTOR_STATE_LOADING,
        IMAGE_COLLECTOR_STATE_FINISHED,
        IMAGE_COLLECTOR_STATE_ERROR,
} image_collector_state_t;

typedef struct {
        void (*callback)(image_collector_t *, image_collector_event_type_t,
                         void *);
        void *data;
} listener_t;

struct image_collector {
        char *file;
        image_collector_state_t state;
        list_t files;
        size_t index;
        char *dirname;
        thread_t tid;
        thread_mutex_t mutex;
        thread_cond_t cond;
        list_t listeners;
};
```

收集器对象的数据结构比较复杂，依赖线程库和工具库的类型定义，且其它模块没有直接访问其内部成员的需求，因此改为在源文件内定义。

## 初始化

给成员变量赋初始值，然后创建工作线程：

```c title="src/image-collector.c"
image_collector_t *image_collector_create(void)
{
        image_collector_t *c = malloc(sizeof(image_collector_t));
        c->file = NULL;
        c->dirname = NULL;
        c->state = IMAGE_COLLECTOR_STATE_READY;
        list_create(&c->files);
        list_create(&c->listeners);
        thread_cond_init(&c->cond);
        thread_mutex_init(&c->mutex);
        if (thread_create(&c->tid, image_collector_thread, c) != 0) {
                c->state = IMAGE_COLLECTOR_STATE_EXITED;
        }
        return c;
}
```

```c title="src/image-collector.h"
image_collector_t *image_collector_create(void);
```

`image_collector_thread` 是工作线程执行的函数，我们将在下文中实现它。

## 销毁

将状态改为 `EXITED`，触发条件信号，等待工作线程退出后再释放其它资源。

```c title="src/image-collector.c"
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
        list_destroy(&c->files, free);
        list_destroy(&c->listeners, free);
        c->file = NULL;
        c->dirname = NULL;
        free(c);
}
```

```c title="src/image-collector.h"
void image_collector_destroy(image_collector_t *c);
```

## 事件通知

我们已经定义了三个事件：

- `OPEN`：打开文件时触发。影片界面和图像查看界面可在这个时候切换至当前图像。
- `FOUND`：找到当前图像时触发。影片界面可更新选中的缩略图，图像查看界面可更新切换按钮的状态。
- `FINISHED`：收集完全部图像时触发。影片界面可在加载下一批缩略图后停止更新，图像查看界面可更新切换按钮的状态。

接下来添加事件监听函数，将传入的回调函数和参数追加到事件监听器列表中：

```c title="src/image-collector.c"
void image_collector_listen(image_collector_t *c,
                            void (*callback)(image_collector_t *,
                                             image_collector_event_type_t,
                                             void *),
                            void *data)
{
        listener_t *listener = malloc(sizeof(listener_t));

        listener->callback = callback;
        listener->data = data;
        list_append(&c->listeners, listener);
}
```

```c title="src/image-collector.h"
void image_collector_listen(image_collector_t *c,
                            void (*callback)(image_collector_t *,
                                             image_collector_event_type_t,
                                             void *),
                            void *data);
```

添加通知函数，调用指定事件的全部回调函数：

```c title="src/image-collector.c"
void image_collector_notify(image_collector_t *c,
                            image_collector_event_type_t type)
{
        list_node_t *node;

        for (list_each(node, &c->listeners)) {
                listener_t *listener = node->data;
                listener->callback(c, type, listener->data);
        }
}
```

```c title="src/image-collector.h
void image_collector_notify(image_collector_t *c,
                            image_collector_event_type_t type);
```

## 工作线程

工作线程一直运行直到状态是 EXITED 时为止，较为简单的实现方式是使用循环，但一直循环会占用较高 CPU 资源，因此我们需要用到线程库提供的 `thread_cond_wait()` 函数让线程进入阻塞状态直到条件触发时再继续工作。

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

yutil 库提供的目录操作接口中，涉及字符串的接口有 ANSI 和 UNICODE 两个版本，命名上以 `_a` 和 `_w` 后缀名区分。

在遍历的过程中，我们需要顺便找到当前打开的文件在文件列表中的位置。这个问题看上去比较简单，用 `strcmp()` 判断即可，但收集器的 file 成员存储的是文件的绝对路径，而文件列表仅存储文件名，因此，我们需要定义一个 `path_basename()` 函数来提取文件名。

路径处理类的函数比较通用，所以我们将它们定义在 utils.c 源文件中：

```c title="src/utils.c"
#include <string.h> 
#include "utils.h"

const char *path_basename(const char *path)
{
        const char *sep = path_last_sep(path);
        return sep == NULL ? path : sep + 1;
}
```

```c title="src/utils.h"
const char *path_basename(const char *path);
```

文件名的提取方式是遍历字符串，找到最后一个分隔符，以此为字符串的开头。需要注意的是，Windows 和 Linux 用的分隔符不一样，前者是 `\`，后者是 `/`。

```c title="src/utils.c"
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

```c title="src/utils.h"
const char *str_last_char(const char *str, char ch);

const char *path_last_sep(const char *path);
```

遍历目录是为了收集图像文件，而检测图像文件的简单方式就是判断文件后缀名，但 LCUI 支持的图像格式仅包括 BMP、PNG、JPEG，因此，我们需要检测的后缀名只有 `.jpg`、`.jpeg`、`.bmp`、`.png`。

实现方法是先从文件名中提取出文件后缀名，然后判断它是否在支持后缀名列表内。或许你会立刻想到将后缀名列表定义为数组，然后在 for 循环中用 `strcmp()` 逐个判断。这种方法代码量比较多，我们可以将后缀名列表定义为字符串，再将提取到的后缀名转换为小写，然后用 `strstr()` 函数判断，就像这样：

```c title="src/image-collector.c"
#include "utils.h"

static bool is_image_file(const char *path)
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

:::note
`strdup2()` 是 yutil 库提供的字符串复制函数，用于解决 Windows 的编译器对 `strdup` 的警告，因为 `strdup` 不是标准库的函数。
:::

解决完上述问题后，我们就可以写出以下代码：

```c title="src/image-collector.c"
static void image_collector_thread(void *arg)
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
                                image_collector_notify(
                                    c, IMAGE_COLLECTOR_EVENT_FINISHED);
                                break;
                        }
                        file = dir_get_file_name_a(entry);
                        if (strcmp(file, current_file) == 0) {
                                c->index = files.length;
                                image_collector_notify(
                                    c, IMAGE_COLLECTOR_EVENT_FOUND);
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

工作线程在加载文件时开始工作，我们需要定义一个函数在加载文件时调用，它应能完成以下事项：

- 触发 `OPEN` 事件。
- 仅在文件所在目录路径与上个文件不同时通知工作线程重新收集文件。
- 如果要加载的文件已位于文件列表中，则触发 `FOUND` 事件。

那么转换成代码就是这样：

```c title="src/image-collector.c"
void image_collector_load_file(image_collector_t *c, const char *file)
{
        size_t i = 0;
        list_node_t *node;
        char *dirname = path_dirname(file);

        if (c->file) {
                free(c->file);
        }
        c->file = strdup2(file);
        image_collector_notify(c, IMAGE_COLLECTOR_EVENT_OPEN);
        if (!c->dirname || strcmp(c->dirname, dirname) != 0) {
                if (c->dirname) {
                        free(c->dirname);
                }
                c->dirname = dirname;
                c->state = IMAGE_COLLECTOR_STATE_PENDING;
                return;
        }
        for (list_each(node, &c->files)) {
                if (strcmp(node->data, path_basename(file)) == 0) {
                        c->index = i;
                        image_collector_notify(c, IMAGE_COLLECTOR_EVENT_FOUND);
                        break;
                }
                i++;
        }
}
```

```c title="src/image-collector.h"
void image_collector_load_file(image_collector_t *c, const char *file);
```

`path_dirname()` 函数用于从路径中提取目录路径，它的实现与文件名的提取方法相似，找到最后一个分隔符，更改为字符串的终止符。

```c title="src/utils.c"
char *path_dirname(const char *path)
{
        size_t len;
        char *dirname;
        const char *sep = path_last_sep(path);

        if (!sep) {
                sep = path;
        }
        len = sep - path;
        dirname = malloc(sizeof(char) * (len + 1));
        strncpy(dirname, path, len);
        dirname[len] = 0;
        return dirname;
}
```

收集器结构体中的 file 和 dirname 成员在工作线程中也会用到，为避免线程安全问题，我们需要在操作它们前锁上互斥锁，操作完后将状态设为 PENDING，最后触发条件信号并解开互斥锁。

```c title="src/image-collector.c"
void image_collector_load_file(image_collector_t *c, const char *file)
{
        size_t i = 0;
        list_node_t *node;
        char *dirname = path_dirname(file);

        // highlight-next-line
        thread_mutex_lock(&c->mutex);
        if (c->file) {
                free(c->file);
        }
        c->file = strdup2(file);
        image_collector_notify(c, IMAGE_COLLECTOR_EVENT_OPEN);
        if (!c->dirname || strcmp(c->dirname, dirname) != 0) {
                if (c->dirname) {
                        free(c->dirname);
                }
                c->dirname = dirname;
                c->state = IMAGE_COLLECTOR_STATE_PENDING;
                // highlight-next-line
                thread_cond_signal(&c->cond);
                // highlight-next-line
                thread_mutex_unlock(&c->mutex);
                return;
        }
        for (list_each(node, &c->files)) {
                if (strcmp(node->data, path_basename(file)) == 0) {
                        c->index = i;
                        image_collector_notify(c, IMAGE_COLLECTOR_EVENT_FOUND);
                        break;
                }
                i++;
        }
        // highlight-next-line
        thread_mutex_unlock(&c->mutex);
}
```

## 状态检测

当文件列表未收集完毕时，禁止切换。当文件位于列表首位时，禁止切换到上一个文件。当文件位于列表末尾时，禁止切换到下一个文件。

```c title="src/image-collector.c"
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

```c title="src/image-collector.h"
bool image_collector_has_next(image_collector_t *c);

bool image_collector_has_prev(image_collector_t *c);
```

## 文件切换

切换到上一个或下一个文件，本质上就是对当前位置进行 +1 和 -1 再获取该位置的文件名。但由于界面中用的图像路径是绝对路径，在拿到文件名后我们还需要将它与目录路径拼接在一起成为绝对路径。这种拼接操作属于路径处理，我们先在 utils.c 中定义它：

```c title="src/utils.c"
#include <stdio.h>
#include <yutil.h>

#ifdef _WIN32
#define PATH_SEP '\\'
#else
#define PATH_SEP '/'
#endif

char *path_join(const char *dir, const char *name)
{
        size_t len;
        char *path;

        if (dir == NULL) {
                return strdup2(name);
        }
        len = strlen(dir) + strlen(name) + 1;
        path = malloc(sizeof(char) * (len + 1));
        snprintf(path, len + 1, "%s%c%s", dir, PATH_SEP, name);
        return path;
}
```

```c title="src/utils.h"
char *path_join(const char *dir, const char *name);
```

然后定义跳转函数，获取指定下标的文件名，将它拼接成绝对路径去加载：

```c title="src/image-collector.c"
static void image_collector_goto(image_collector_t *c, size_t index)
{
        char *file;
        char *name = list_get(&c->files, index);

        if (!name || !c->dirname) {
                return;
        }
        file = path_join(c->dirname, name);
        c->index = index;
        image_collector_load_file(c, file);
        free(file);
}
```

定义获取当前文件和下标的函数，以及上下切换函数：

```c title="src/image-collector.c"
void image_collector_next(image_collector_t *c)
{
        if (image_collector_has_next(c)) {
                image_collector_goto(c, c->index + 1);
        }
}

void image_collector_prev(image_collector_t *c)
{
        if (image_collector_has_prev(c)) {
                image_collector_goto(c, c->index - 1);
        }
}
```

```c title="src/image-collector.h"
void image_collector_next(image_collector_t *c);

void image_collector_prev(image_collector_t *c);
```

## 数据获取

UI 层代码需要用到收集器的文件列表、当前文件路径和下标，那么就定义以下函数：

```c title="src/image-collector.c"
const char *image_collector_get_file(image_collector_t *c)
{
        return c->file;
}

size_t image_collector_get_index(image_collector_t *c)
{
        return c->index;
}

void image_collector_get_files(image_collector_t *c, list_t *files,
                               size_t index)
{
        list_node_t *node;

        thread_mutex_lock(&c->mutex);
        for (node = list_get_node(&c->files, index); node; node = node->next) {
                list_append(files, path_join(c->dirname, node->data));
        }
        thread_mutex_unlock(&c->mutex);
}
```

```c title="src/image-collector.h"
const char *image_collector_get_file(image_collector_t *c);

void image_collector_get_files(image_collector_t *c, list_t *files,
                               size_t index);

size_t image_collector_get_index(image_collector_t *c);
```

## 小结

我们实现了一个图片文件收集器，其中最复杂的部分是工作线程的实现。工作线程在收集器创建时被创建，使用互斥锁来确保多线程访问数据时的线程安全。为了通知工作线程开始工作，我们使用了条件变量，使工作线程在条件满足前保持阻塞状态。文件遍历功能则是通过调用 yutil 库提供的函数来实现的。剩下的部分是文件路径的处理，本质上是在处理字符串，比较简单。
