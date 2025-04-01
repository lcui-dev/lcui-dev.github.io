# 实现文件信息读取器

本章节将介绍如何实现文件信息读取器，它主要为工具栏和信息界面提供图像文件信息。完成本章后你将学会：

- 获取文件信息
- 获取图像信息
- 创建和取消 LCUI 的异步任务
- 将文件大小格式化成易读的字符串

## 定义数据结构

界面中要展示的信息有：文件名、路径、大小、分辨率、比特位，那么数据结构就能写成这样：

```c title="src/file-info-reader.h"
#ifndef FILE_INFO_READER_H
#define FILE_INFO_READER_H

#include <time.h>

typedef struct file_info {
        char name[256];
        char file_size[32];
        char image_size[32];
        char *path;
        time_t mtime;
        unsigned width;
        unsigned height;
        unsigned bits;
} file_info_t;

#endif
```

这是读取器产出的数据，为了实现读取功能还需要：

- `ui_image_t` 图像对象：获取图像的宽高、比特位。
- `worker_task_t` 任务对象：管理异步文件读取任务。
- 回调函数：在读取完文件信息后通知界面层代码更新界面。

这些属于文件读取器的私有数据，可以定义在源文件内不对外公开：

```c title="src/file-info-reader.c"
#include <ui.h>
#include <LCUI/worker.h>
#include "file-info-reader.h"

struct file_info_reader {
        file_info_t file_info;
        ui_image_t *image;
        worker_task_t *task;
        void (*callback)(file_info_t *, void *);
        void *callback_arg;
};
```

```c title="src/file-info-reader.h"
typedef struct file_info_reader file_info_reader_t;
```

## 初始化和销毁

```c title="src/file-info-reader.c"
file_info_reader_t *file_info_reader_create(void (*callback)(file_info_t *,
                                                             void *),
                                            void *callback_arg)
{
        file_info_reader_t *reader = malloc(sizeof(file_info_reader_t));

        reader->file_info.bits = 32;
        reader->file_info.file_size[0] = 0;
        reader->file_info.image_size[0] = 0;
        reader->file_info.name[0] = 0;
        reader->file_info.mtime = 0;
        reader->file_info.path = strdup2("");
        reader->task = NULL;
        reader->image = NULL;
        reader->callback = callback;
        reader->callback_arg = callback_arg;
        return reader;
}

void file_info_reader_destroy(file_info_reader_t *reader)
{
        if (reader->task) {
                lcui_cancel_async_task(reader->task);
        }
        if (reader->image) {
                ui_image_destroy(reader->image);
        }
        if (reader->file_info.path) {
                free(reader->file_info.path);
        }
        free(reader);
}
```

```c title="src/file-info-reader.h"
file_info_reader_t *file_info_reader_create(void (*callback)(file_info_t *,
                                                             void *),
                                            void *callback_arg);

void file_info_reader_destroy(file_info_reader_t *reader);
```

## 加载信息

文件操作容易阻塞用户界面响应，导致出现卡顿或无响应的情况，我们应将文件操作放到工作线程中执行。LCUI 提供了工作线程，我们可以调用 `lcui_post_async_task()` 创建一个异步任务以在工作线程中执行文件操作。

定义文件读取函数，更新当前存储的文件路径和文件名称，再创建异步文件读取任务和 `ui_image_t` 对象：

```c title="src/file-info-reader.c"
#include "utils.h"

void file_info_reader_load_file(file_info_reader_t *reader, const char *path)
{
        const char *ext;

        if (reader->task) {
                lcui_cancel_async_task(reader->task);
        }
        if (reader->image) {
                ui_image_destroy(reader->image);
        }
        if (reader->file_info.path) {
                free(reader->file_info.path);
        }
        reader->file_info.path = strdup2(path);
        strcpy(reader->file_info.name, path_basename(path));
        ext = str_last_char(reader->file_info.name, '.');
        if (ext) {
                *((char *)ext) = 0;
        }
        reader->image = ui_image_create(path);
        reader->task =
            lcui_post_async_task(reader, file_info_reader_on_load_file, NULL);
        ui_image_on_load(reader->image, file_info_reader_on_load_image, reader);
}
```

```c title="src/file-info-reader.h"
void file_info_reader_load_file(file_info_reader_t *reader, const char *path);
```

在异步任务的处理函数中，调用 `stat()` 函数获取文件的大小和修改时间，之后调用回调函数：

```c title="src/file-info-reader.c"
static void file_info_reader_on_load_file(void *data)
{
        struct stat st;
        file_info_reader_t *reader = data;

        reader->file_info.mtime = 0;
        strcpy(reader->file_info.file_size, u8"未知");
        if (stat(reader->image->path, &st) == 0) {
                reader->file_info.mtime = st.st_mtime;
                format_size(reader->file_info.file_size, st.st_size);
        }
        if (reader->callback) {
                reader->callback(&reader->file_info, reader->callback_arg);
        }
}
```

得到的文件大小单位是字节，我们定义 `format_size()` 函数将它格式化成易读的字符串：

```c title="src/utils.c"
int format_size(char buf[16], size_t size)
{
        const char *units[] = { "B", "KB", "MB", "GB", "TB" };
        int i = 0;

        while (size >= 1024) {
                size /= 1024;
                i++;
        }
        return snprintf(buf, 16, "%zu %s", size, units[i]);
}
```

```c title="src/utils.h"
int format_size(char buf[16], size_t size);
```

在 `ui_image_t` 对象的 load 事件处理函数中，获取图像的宽高、比特位信息，再调用回调函数：

```c title="src/fille-info-reader.c"
#include <stdio.h>

static void file_info_reader_on_load_image(ui_image_event_t *image_event)
{
        file_info_reader_t *reader = image_event->data;
        file_info_t *info = &reader->file_info;

        info->bits = 0;
        info->width = 0;
        info->height = 0;
        if (ui_image_valid(image_event->image)) {
                info->bits = image_event->image->data.bytes_per_pixel * 8;
                info->width = image_event->image->data.width;
                info->height = image_event->image->data.height;
        }
        snprintf(info->image_size, 31, "%u x %u", info->width, info->height);
        if (reader->callback) {
                reader->callback(&reader->file_info, reader->callback_arg);
        }
}
```

为了让界面层代码能够获取已读取的文件信息，定义一个信息获取函数：

```c title="src/file-info-reader.c"
file_info_t *file_info_reader_get_info(file_info_reader_t *reader)
{
        return &reader->file_info;
}
```

```c title="src/file-info-reader.h"
file_info_t *file_info_reader_get_info(file_info_reader_t *reader);
```

## 小结

我们实现了一个文件信息读取器。定义了文件信息对象和读取器对象的数据结构，以及初始化、销毁、加载和获取函数。文件信息来源于 `stat()` 函数输出结果和 `ui_image_t` 对象，我们所做的就是通过事件回调函数和异步任务获取信息，然后将文件大小和图像大小信息格式化成可读的字符串，方便界面层代码使用。
