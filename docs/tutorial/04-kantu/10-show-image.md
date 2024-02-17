# 显示图片

让我们学习如何在界面上显示图片。

## 设置背景图

最简单的方式是设置组件的 `background-image` 属性，LCUI 会自动加载图片并显示它。我们可以定义一个函数来负责设置背景图：

```c title=image-view.c
void image_view_load_file(ui_widget_t *w, const char *file)
{
        char *url;
        image_view_t *view = ui_widget_get_data(w, image_view_proto);

        url = malloc(sizeof(char) * (strlen(file) + 10));
        sprintf(url, "url(%s)", file);
        ui_widget_set_style_string(view->refs.content, "background-image", url);
        free(url);
}
```

这个函数将文件路径转换成 `url()` 格式的字符串，用 C 语言实现这种操作需要先根据路径长度分配合适的空间，然后调用 `snprintf()` 格式化字符串。得到字符串后，调用 `ui_widget_set_style_string()` 函数将它设置为图片区的 background-image 属性的值。

然后，修改 main.c 文件，在 `main()` 函数中调用该函数打开指定路径的图片文件。

```diff title=main.c
  int main(int argc, char **argv)
  {
          ui_widget_t *w;

          lcui_init();
          ui_register_image_view();
          w = ui_create_widget("ImageView");
+         image_view_load_file("图片路径");
          ui_root_append(w);
          return lcui_main();
}
```

:::note
请将 `"图片路径"` 替换为图片文件的绝对路径，例如：`"E:\\workspace\\code\\kantu\\app\\dog.jpg"`
:::

编译并运行项目，你会看到这样的效果：

（图片）

## 集成控制器

现在还只是显示图片，我们需要将控制器集成到组件内，以便控制缩放比例、图片位置和尺寸。

首先，修改私有数据类型，增加控制器：

```diff
  #include "image-view.tsx.h"
+ #include "image-controller.h

  typedef struct image_view {
          image_view_refs_t refs;
+         image_controller_t controller;
  } image_view_t;
```

修改组件的初始化函数，增加控制器的初始化：

```diff title=image-view.c
  void image_view_init(ui_widget_t *w)
  {
          image_view_t *view;

          view = ui_widget_add_data(w, image_view_proto, sizeof(image_view_t));
          image_view_load_template(w, &view->refs);
+         image_controller_init(&view->controller);
  }
```

修改组件的销毁函数，增加控制器的销毁操作：

```diff title=image-view.c
  void image_view_destroy(ui_widget_t *w)
  {
+         image_view_t *view = ui_widget_get_data(w, image_view_proto);

+         image_controller_destroy(&view->controller);
  }
```

修改文件加载函数，增加图片的加载事件处理，在图片加载完后重置缩放比例并更新图片尺寸：

```diff title=image-view.c
+ void image_view_on_image_event(ui_image_event_t *e)
+ {
+         image_view_reset(e->data);
+ }

  void image_view_load_file(ui_widget_t *w, const char *file)
  {
          char *url;
          image_view_t *view = ui_widget_get_data(w, image_view_proto);

+         if (view->controller.image) {
+                 ui_image_off_load(view->controller.image,
+                                   image_view_on_image_event, w);
+         }
+         image_controller_load_file(&view->controller, file);
+         ui_image_on_load(view->controller.image, image_view_on_image_event, w);

          url = malloc(sizeof(char) * (strlen(file) + 10));
          sprintf(url, "url(%s)", file);
          ui_widget_set_style_string(view->refs.content, "background-image", url);
          free(url);
  }
```

在重置函数中，我们需要更新控制器的可视区域尺寸，重置缩放比例，之后更新界面样式。

```c image-view.c
void image_view_reset(ui_widget_t *w)
{
        image_view_t *view = ui_widget_get_data(w, image_view_proto);

        view->controller.width = view->refs.content->padding_box.width;
        view->controller.height = view->refs.content->padding_box.height;
        image_controller_reset_scale(&view->controller);
        image_view_update(w);
}
```

在界面更新函数中，根据缩放比例计算出图片缩放后的尺寸，然后将其设置为 background-size 属性的值。除此之外，还得将控制器中记录的可视区域位置同步给 background-position-x 和 background-position-y 属性。

```c title=image-view.c
void image_view_update(ui_widget_t *w)
{
        char size_str[64];
        image_view_t *view = ui_widget_get_data(w, image_view_proto);
        ui_image_t *image = view->controller.image;

        snprintf(size_str, 31, "%gpx %gpx",
                 view->controller.scale * image->data.width,
                 view->controller.scale * image->data.height);
        ui_widget_set_style_string(view->refs.content, "background-size",
                                   size_str);
        ui_widget_set_style_unit_value(view->refs.content,
                                       css_prop_background_position_x,
                                       view->controller.x, CSS_UNIT_PX);
        ui_widget_set_style_unit_value(view->refs.content,
                                       css_prop_background_position_y,
                                       view->controller.y, CSS_UNIT_PX);
}
```

`ui_widget_set_style_string()` 函数适合给属性值设置字符串类型的值，我们给 background-position-x 和 background-position-y 属性设置的值属于带单位的值（unit value），转成字符串的话比较麻烦，因此，我们可以使用 `ui_widget_set_style_unit_value()` 函数来直接设置带单位的值。

## 小结

我们学会了如何使用 background-image、background-position 和 background-size 这三个 CSS 属性来控制组件背景的图片、位置和大小。
