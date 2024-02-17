# 控制器

本章节将介绍如何设计和实现控制器。

## 数据结构

缩放比例的计算依赖图片的尺寸、可视区域的尺寸。缩放时需要做最小比例限制以避免过度缩小，这个比例应是图片在可见区域内完整显示的最大比例，简称“自适应比例”。在缩放和移动可视区域时，需要基于当前的位置和中心点位置来计算新的位置。

结合上述需求，我们可以得出以下数据结构定义：

```c title=image-controller.h
typedef struct image_controller {
        float scale;
        float min_scale;
        float width, height;
        float x, y;
        float center_x, center_y;
        ui_image_t *image;
} image_controller_t;
```

`x` 和 `y` 是图像左上角相对于可见区域左上角的位置，值都小于或等于 0。

`center_x` 和 `center_y` 是可见区域中心点相对于图像左上角的位置，值都大于 0。

`ui_image_t` 包含图片尺寸信息，它是 ui.h 头文件提供的数据结构，除此之外，该头文件还提供一系列图像加载相关的函数。

## 初始化

给结构体成员赋初始值，避免计算出错。

```c title=image-controller.c
void image_controller_init(image_controller_t *c)
{
        c->scale = 1.f;
        c->min_scale = 1.f;
        c->image = NULL;
        c->x = 0;
        c->y = 0;
        c->center_x = 0;
        c->center_y = 0;
        c->width = 0;
        c->height = 0;
}
```

## 销毁

需要主动销毁的只有 image，它由下面的文件加载函数创建。

```c title=image-controller.c
void image_controller_destroy(image_controller_t *c)
{
        if (c->image) {
                ui_image_destroy(c->image);
        }
        c->image = NULL;
}
```

## 文件加载

为了拿到图像信息，我们需要调用 ui.h 头文件中提供的 `ui_image_create()` 函数创建一个图像实例。由于图像加载是异步的，我们还需要调用 `ui_image_on_load()` 函数添加图像加载后的回调函数。

```c title=image-controller.c
void image_controller_load_file(image_controller_t *c, const char *file)
{
        if (c->image) {
                ui_image_destroy(c->image);
        }
        c->image = ui_image_create(file);
        ui_image_on_load(c->image, image_controller_on_image_load, c);
}
```

为避免当前图片仍然用上张图片的缩放比例，我们需要在图像加载完后重新计算缩放比例和可视区域位置。

```c title=image-controller.c
void image_controller_on_image_load(ui_image_event_t *e)
{
        image_controller_reset_scale(e->data);
}
```

这个操作函数命名为 `image_controller_reset_scale`，等后面再实现它。

## 设置缩放比例

设置前需要限制最大值和最小值。设置后需要根据当前可见区域缩放后的尺寸来计算新的位置，计算方法是将中心点坐标转换成相对于缩放后的图片，然后减去当前可见区域中心点位置，最后转成相对于可见区域的负数值。

```c title=image-controller.c
#define SCALE_MAX 10.f

void image_controller_set_scale(image_controller_t *c, float scale)
{
        pd_canvas_t *data = &c->image->data;

        if (scale < c->min_scale) {
                scale = c->min_scale;
        }
        if (scale > SCALE_MAX) {
                scale = SCALE_MAX;
        }
        c->scale = scale;
        image_controller_set_position(
            c, -(c->center_x * c->scale - c->width / 2.f),
            -(c->center_y * c->scale - c->height / 2.f));
}
```

## 设置可见区域位置

在设置可见区域位置时需要处理两种情况：

- 如果缩放后的图片尺寸小于可见区域，则图片应始终居中，那么位置就是可见区域相对于缩放后图片的位置。
- x 和 y 应该小于或等于 0，且加上缩放后的图片尺寸后不超出图片区域尺寸，避免可见区域超出图片区域。

设置完后，还需要重新计算中心点坐标。

```c title=image-controller.c
void image_controller_set_position(image_controller_t *c, float x, float y)
{
        pd_canvas_t *data = &c->image->data;
        float image_width = c->scale * data->width;
        float image_height = c->scale * data->height;

        if (image_width <= c->width) {
                x = (c->width - image_width) / 2.f;
        } else if (x > 0) {
                x = 0;
        } else if (c->width - x > image_width) {
                x = c->width - image_width;
        }
        if (image_height <= c->height) {
                y = (c->height - image_height) / 2.f;
        } else if (y > 0) {
                y = 0;
        } else if (c->height - y > image_height) {
                y = c->height - image_height;
        }
        c->x = x;
        c->y = y;
        c->center_x = (-c->x + c->width / 2.f) / c->scale;
        c->center_y = (-c->y + c->height / 2.f) / c->scale;
}
```

## 重置缩放比例

根据图片尺寸和可见区域尺寸，计算自适应比例。计算方法是分别算出可见区域宽高与图片宽高的比例，将两者之中的最小的作为自适应比例。需要注意的是，当图片原始尺寸小于可见区域尺寸时，应该按 1:1 比例缩放。

```c title=image-controller.c
void image_controller_reset_scale(image_controller_t *c)
{
        pd_canvas_t *image = &c->image->data;
        float width_scale =
            image->width > c->width ? c->width / image->width : 1.f;
        float height_scale =
            image->height > c->height ? c->height / image->height : 1.f;

        c->min_scale = width_scale < height_scale ? width_scale : height_scale;
        image_controller_set_scale(c, c->min_scale);
}
```

## 快捷缩放

图片查看界面需要放大、缩小、自适应这三种快捷缩放操作。为简化界面层的实现代码，我们可以在控制器内实现这些操作函数，供界面层代码直接调用。

放大和缩小比较简单，定义一个固定的递增/递减值，然后增减这个值即可。

```c title=image-controller.c
#define SCALE_STEP 0.2f

void image_controller_zoom_in(image_controller_t *c)
{
        image_controller_set_scale(c, c->scale + SCALE_STEP);
}

void image_controller_zoom_out(image_controller_t *c)
{
        image_controller_set_scale(c, c->scale - SCALE_STEP);
}
```

自适应比例的话，和 `image_controller_reset_scale()` 函数中的算法一样，我们可以将计算代码拆分为独立的函数以便复用：

```c title=image-controller.c
float image_controller_compute_zoom_to_fill(image_controller_t *c)
{
        pd_canvas_t *data = &c->image->data;
        float width_scale =
            data->width > c->width ? c->width / data->width : 1.f;
        float height_scale =
            data->height > c->height ? c->height / data->height : 1.f;
        ;
        return width_scale < height_scale ? width_scale : height_scale;
}

void image_controller_zoom_to_fill(image_controller_t *c)
{
        image_controller_set_scale(c,
                                   image_controller_compute_zoom_to_fill(c));
}
```

```diff title=image-controller.c
 void image_controller_reset_scale(image_controller_t *c)
 {
-         pd_canvas_t *image = &c->image->data;
-         float width_scale =
-             image->width > c->width ? c->width / image->width : 1.f;
-         float height_scale =
-             image->height > c->height ? c->height / image->height : 1.f;
+         c->min_scale = image_controller_compute_zoom_to_fill(c);
          image_controller_set_scale(c, c->min_scale);
 }
```

## 状态检查

图片查看界面会在一些操作不可用的时候禁用对应的操作按钮，为实现这一功能，控制器应提供每个快捷缩放操作的可用状态检查函数。

检查方式比较简单：

- 能放大：图片有效且缩放比例小于最大比例。
- 能缩小：图片有效且缩放比例大于最小比例。
- 能自适应：图片有效且当前比例不等于自适应比例。

ui.h 头文件提供了 `ui_image_valid()` 函数用于检查图片是否有效，那么剩下的就非常简单了：

```c title=image-controller.c
bool image_controller_can_zoom_in(image_controller_t *c)
{
        return ui_image_valid(c->image) && c->scale < SCALE_MAX;
}

bool image_controller_can_zoom_out(image_controller_t *c)
{
        return ui_image_valid(c->image) && c->scale > c->min_scale;
}

bool image_controller_can_zoom_to_fill(image_controller_t *c)
{
        return ui_image_valid(c->image) &&
               image_controller_compute_zoom_to_fill(c) != c->scale;
}
```
