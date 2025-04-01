# 实现图像缩放控制器

本章节将介绍如何实现图像缩放控制器，它主要为图像查看界面提供缩放状态管理和可见区域控制能力。完成本章后你将学会：

- 根据缩放焦点计算缩放后的可见区域位置，并限制它的移动范围
- 使用 LCUI 库加载图像信息

## 数据结构

缩放比例的计算依赖图像的尺寸、可见区域的尺寸。缩放时需要做最小比例限制以避免过度缩小，这个比例应是图像在可见区域内完整显示的最大比例，简称“自适应比例”。

在缩放和移动可见区域时，需要基于当前的位置和焦点位置来计算新的位置。其中的焦点默认在可见区域中心，它的作用是在使用鼠标滚轮缩放时以鼠标指针位置为中心进行缩放，这样指针在缩放前后始终指向同一处。

结合上述需求，我们可以得出以下数据结构定义：

```c title="src/image-controller.h"
#ifndef IMAGE_CONTROLLER_H
#define IMAGE_CONTROLLER_H

#include <ui.h>

typedef struct image_controller {
        float scale;
        float focus_x, focus_y;
        float viewport_width, viewport_height;
        float image_offset_x, image_offset_y;
        ui_image_t *image;
} image_controller_t;

#endif
```

这些成员的说明如下：

- `scale` 是当前缩放比例，`min_scale` 是最小缩放比例。
- `viewport_width` 和 `viewport_height` 是可见区域的宽高。
- `image_offset_x` 和 `image_offset_y` 是图像左上角相对于可见区域左上角的位置。在图像放大超出可见区域后，值会小于等于 0。在图像缩小至可见区域内后，值都大于或等于 0。
- `focus_x` 和 `focus_y` 是缩放焦点相对于图像左上角的位置，值都大于 0。
- `ui_image_t` 类型的 image 包含图像尺寸信息，它是 ui.h 头文件提供的数据结构，除此之外，该头文件还提供一系列图像加载相关的函数。

## 初始化

定义初始化函数，给结构体成员赋初始值，避免计算出错。

```c title="src/image-controller.c"
#include "image-controller.h"

void image_controller_init(image_controller_t *c)
{
        c->scale = 1.f;
        c->image = NULL;
        c->image_offset_x = 0;
        c->image_offset_y = 0;
        c->focus_x = 0;
        c->focus_y = 0;
        c->viewport_width = 0;
        c->viewport_height = 0;
}
```

```c title="src/image-controller.h"
void image_controller_init(image_controller_t *c);
```

## 销毁

定义销毁函数。需要销毁的只有 image，它由下文的文件加载函数创建。

```c title="src/image-controller.c"
void image_controller_destroy(image_controller_t *c)
{
        if (c->image) {
                ui_image_destroy(c->image);
        }
        c->image = NULL;
}
```

```c title="src/image-controller.h"
void image_controller_destroy(image_controller_t *c);
```

## 加载图像文件

LCUI 提供异步的图像加载功能，其用法参考自 [Image() - Web API | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image)，先调用 `ui_image_create()` 函数创建一个图像实例，触发图像加载线程的加载任务，然后调用 `ui_image_on_load()` 函数添加加载（load）事件处理函数来处理加载后的图像数据。

控制器依赖图像数据，那么就由控制器来实现图像文件加载函数，传入图像文件路径，然后用 `ui_image_t` 的函数加载图像:

```c title="src/image-controller.c"
void image_controller_load_file(image_controller_t *c, const char *file)
{
        if (c->image) {
                ui_image_destroy(c->image);
        }
        c->image = ui_image_create(file);
}
```

```c title="src/image-controller.h"
void image_controller_load_file(image_controller_t *c, const char *file);
```

## 计算自适应比例

自适应比例应让缩放后的图像在可见区域内完整显示，其计算方法是分别算出可见区域宽高与图像宽高的比例，取将两者之中的最小至。需要注意的是，当图像原始尺寸小于可见区域尺寸时，应该按 1:1 比例缩放。

我们定义一个函数用于计算它：

```c title="src/image-controller.c"
float image_controller_get_fit_scale(image_controller_t *c)
{
        pd_canvas_t *data = &c->image->data;
        float width_scale = data->width > c->viewport_width
                                ? c->viewport_width / data->width
                                : 1.f;
        float height_scale = data->height > c->viewport_height
                                 ? c->viewport_height / data->height
                                 : 1.f;

        return width_scale < height_scale ? width_scale : height_scale;
}
```

```c title="src/image-controller.h"
float image_controller_get_fit_scale(image_controller_t *c);
```

## 设置缩放比例

在设置缩放比例时，我们需要先考虑一些限制条件。最小值默认为 0.1，如果自适应比例比 0.1 更小，则将其作为最小值。设置缩放比例后，还需要根据当前可见区域缩放后的尺寸来计算新的位置。具体计算方法是将焦点坐标转换成相对于缩放后的图像，然后减去当前可见区域焦点位置，最后转成相对于可见区域。

为了实现这些功能，首先定义函数用于获取最小比例：

```c title="src/image-controller.c"
float image_controller_get_min_scale(image_controller_t *c)
{
        float fit_scale = image_controller_get_fit_scale(c);
        return fit_scale < SCALE_MIN? fit_scale : SCALE_MIN;
}
```

接下来，将缩放比例限制在有效范围内并更新位置，代码如下：

```c title="src/image-controller.c"
void image_controller_set_scale(image_controller_t *c, float scale)
{
        float min_scale = image_controller_get_min_scale(c);
        if (scale < min_scale) {
                scale = min_scale;
        }
        if (scale > SCALE_MAX) {
                scale = SCALE_MAX;
        }
        c->scale = scale;
        image_controller_set_position(
            c, -(c->focus_x * c->scale - c->viewport_width / 2.f),
            -(c->focus_y * c->scale - c->viewport_height / 2.f));
}
```

```c title="src/image-controller.h"
#define SCALE_MIN 0.1f
#define SCALE_MAX 8.f

void image_controller_set_scale(image_controller_t *c, float scale);
```

## 设置可见区域位置

在设置可见区域位置时我们需要处理两种情况：

- 如果缩放后的图像尺寸小于可见区域尺寸，则图像应始终居中，那么位置就是可见区域相对于缩放后图像的位置。
- 否则，`image_offset_x` 和 `image_offset_y` 的值都应该小于或等于 0，且加上缩放后的图像尺寸后不超出图像区域尺寸，避免图像位于可见区域之外。

设置完后，还需要重新计算焦点坐标。

```c title="src/image-controller.c"
void image_controller_set_position(image_controller_t *c, float image_offset_x,
                                   float image_offset_y)
{
        pd_canvas_t *data = &c->image->data;
        float image_width = c->scale * data->width;
        float image_height = c->scale * data->height;

        if (image_width <= c->viewport_width) {
                image_offset_x = (c->viewport_width - image_width) / 2.f;
        } else if (image_offset_x > 0) {
                image_offset_x = 0;
        } else if (c->viewport_width - image_offset_x > image_width) {
                image_offset_x = c->viewport_width - image_width;
        }
        if (image_height <= c->viewport_height) {
                image_offset_y = (c->viewport_height - image_height) / 2.f;
        } else if (image_offset_y > 0) {
                image_offset_y = 0;
        } else if (c->viewport_height - image_offset_y > image_height) {
                image_offset_y = c->viewport_height - image_height;
        }
        c->image_offset_x = image_offset_x;
        c->image_offset_y = image_offset_y;
        c->focus_x = (-c->image_offset_x + c->viewport_width / 2.f) / c->scale;
        c->focus_y = (-c->image_offset_y + c->viewport_height / 2.f) / c->scale;
}
```

```c title="src/image-controller.h"
void image_controller_set_position(image_controller_t *c, float image_offset_x,
                                   float image_offset_y);
```

## 快捷缩放

图像查看界面需要放大、缩小、自适应这三种快捷缩放操作。为简化界面层的实现代码，我们应在控制器内实现这些操作函数，供界面层代码直接调用。

放大和缩小比较简单，定义一个固定的递增/递减值，然后增减这个值即可。

```c title="src/image-controller.h"
#define SCALE_STEP 0.2f

inline void image_controller_zoom_in(image_controller_t *c)
{
        image_controller_set_scale(c, c->scale + SCALE_STEP);
}

inline void image_controller_zoom_out(image_controller_t *c)
{
        image_controller_set_scale(c, c->scale - SCALE_STEP);
}
```

设为自适应时，可跳过 `image_controller_set_scale()` 中的判断和计算，直接设置缩放比例并重置位置：

```c title="src/image-controller.c"
void image_controller_zoom_to_fit(image_controller_t *c)
{
        c->scale = image_controller_get_fit_scale(c);
        image_controller_set_position(c, 0, 0);
}
```

```c title="src/image-controller.h"
void image_controller_zoom_to_fit(image_controller_t *c);
```

## 状态检查

图像查看界面会在一些操作不可用的时候禁用对应的操作按钮，为实现这一功能，控制器应提供每个快捷缩放操作的可用状态检查函数。

检查方式比较简单：

- 能放大：图像有效且缩放比例小于最大比例。
- 能缩小：图像有效且缩放比例大于最小比例。
- 能自适应：图像有效且当前比例不等于自适应比例。

ui.h 头文件提供了 `ui_image_valid()` 函数用于检查图像是否有效，那么剩下的就非常简单了：

```c title="src/image-controller.c"
bool image_controller_can_zoom_in(image_controller_t *c)
{
        return ui_image_valid(c->image) && c->scale < SCALE_MAX;
}

bool image_controller_can_zoom_out(image_controller_t *c)
{
        return ui_image_valid(c->image) &&
               c->scale > image_controller_get_min_scale(c);
}

bool image_controller_can_zoom_to_fit(image_controller_t *c)
{
        return ui_image_valid(c->image) &&
               image_controller_get_fit_scale(c) != c->scale;
}
```

```c title="src/image-controller.h"
bool image_controller_can_zoom_in(image_controller_t *c);

bool image_controller_can_zoom_out(image_controller_t *c);

bool image_controller_can_zoom_to_fit(image_controller_t *c);
```

## 小结

在本章节中，我们实现了控制器，它存储了图像缩放和移动操作所需的状态，提供了便捷的操作函数和状态检查函数，方便用户界面层的代码调用。控制器的设计考虑了图像和可见区域的尺寸关系，确保在缩放时图片不会过大或过小，并且位置不会超出可见区域。
