# 响应滚轮和拖动

## 拖动图片

当用户按住鼠标左键并移动时，图片应该同步移动，直到用户松开按键为止。鼠标的按键按下、移动、松开按键触发的事件分别是 mousedown、 mouseup、mousemove，图片的移动距离等于当前鼠标指针位置与按下左键时的位置的距离。由此我们可以得出大致的实现思路：

- 在 mousedown 事件处理函数中记录当前鼠标指针相对于图片的位置，并设置拖动状态
- 在 mousemove 事件处理函数中更新图片位置
- 在 mouseup 事件处理函数中取消拖动状态

这些数据属于组件的私有数据，你应该更改 `image_view_t` 类型定义：

```diff title=image-view.c
  typedef struct image_view {
+         float mouse_offset_x, mouse_offset_y;
+         bool dragging;

          image_view_refs_t refs;
          image_controller_t controller;
} image_view_t;
```

然后，添加事件绑定：

```c title=image-view.c
ui_widget_on(view->refs.content, "mouseup", image_view_on_mouseup, w);
ui_widget_on(view->refs.content, "mousedown", image_view_on_mousedown, w);
ui_widget_on(view->refs.content, "mousemove", image_view_on_mousemove, w);
```

以及事件处理函数：

```c title=image-view.c
void image_view_on_mousedown(ui_widget_t *w, ui_event_t *e, void *arg)
{
        float offset_x, offset_y;
        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);

        ui_widget_get_offset(w, NULL, &offset_x, &offset_y);
        ui_widget_set_mouse_capture(w);
        view->mouse_offset_x = e->mouse.x - offset_x - view->controller.x;
        view->mouse_offset_y = e->mouse.y - offset_y - view->controller.y;
        view->dragging = true;
}

void image_view_on_mousemove(ui_widget_t *w, ui_event_t *e, void *arg)
{
        float offset_x, offset_y;
        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);

        ui_widget_get_offset(w, NULL, &offset_x, &offset_y);
        if (view->dragging) {
                image_controller_set_position(
                    &view->controller, e->mouse.x - offset_x - view->mouse_offset_x,
                    e->mouse.y - offset_y - view->mouse_offset_y);
                image_view_update(e->data);
        }
}

void image_view_on_mouseup(ui_widget_t *w, ui_event_t *e, void *arg)
{
        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);
        view->dragging = false;
        ui_widget_release_mouse_capture(w);
}
```

图片随鼠标指针移动，指针始终指向图片中的同一位置，这表明鼠标指针相对于图片的位置是不变的，那么我们只需要在拖动开始时计算并存储这个相对位置，然后在指针移动过程中将指针位置减去该相对位置就能得出移动后的图片位置。

事件结构体中的鼠标指针位置是相对于根组件的，为了计算出它相对于图片的位置，你需要先调用 `ui_widget_get_offset()` 获取组件相对于根组件的位置，然后将鼠标指针位置减去该位置，再减去图片位置。

为了避免在拖动过程中因鼠标移出窗口而失去事件响应，你应该在开始拖动时调用 `ui_widget_set_mouse_capture()` 函数独占鼠标事件，直到拖动结束时调用 `ui_widget_release_mouse_capture()` 解除独占。

## 滚轮缩放

鼠标滚轮事件是 mousewheel，结合前几章的练习，再查看 `ui_event_t` 的定义，相信你会很容易地写出事件处理函数：

```c image-view.c
void image_view_on_mousewheel(ui_widget_t *w, ui_event_t *e, void *arg)
{
        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);

        if (e->wheel.delta_y > 0) {
                image_controller_zoom_in(&view->controller);
        } else {
                image_controller_zoom_out(&view->controller);
        }
        image_view_update(e->data);
}
```

实际体验后你会发现图片是基于可视区域的中心进行缩放的，而不是鼠标指针所处位置。要解决这个问题，你需要在缩放前计算出鼠标指针相对于原始尺寸图片的位置，然后按比例缩放该位置，再在缩放后将其设置为图片位置。

由于 mousewheel 事件结构体中不包含鼠标指针位置，你需要单独编写代码去记录它：

```diff title=image-view.c
  typedef struct image_view {
+         float mouse_x, mouse_y;
          float mouse_offset_x, mouse_offset_y;
          bool dragging;

          image_view_refs_t refs;
          image_controller_t controller;
} image_view_t;
```

```diff title=image-view.c
  void image_view_on_mousemove(ui_widget_t *w, ui_event_t *e, void *arg)
  {
          float offset_x, offset_y;
          image_view_t *view = ui_widget_get_data(e->data, image_view_proto);

          ui_widget_get_offset(w, NULL, &offset_x, &offset_y);
+         view->mouse_x = e->mouse.x - offset_x;
+         view->mouse_y = e->mouse.y - offset_y;
          if (view->dragging) {
                  image_controller_set_position(
                      &view->controller, e->mouse.x - offset_x - view->mouse_offset_x,
                      e->mouse.y - offset_y - view->mouse_offset_y);
                  image_view_update(e->data);
          }
  }
```

之后就是补充图片位置的计算和设置代码了：

```diff title=image-view.c
  void image_view_on_mousewheel(ui_widget_t *w, ui_event_t *e, void *arg)
  {
          image_view_t *view = ui_widget_get_data(e->data, image_view_proto);
+         float scale = view->controller.scale;
+         float center_x = (-view->controller.x + view->mouse_x) / scale;
+         float center_y = (-view->controller.y + view->mouse_y) / scale;

          if (e->wheel.delta_y > 0) {
                  image_controller_zoom_in(&view->controller);
          } else {
                  image_controller_zoom_out(&view->controller);
          }
+         image_controller_set_position(
+             &view->controller,
+             -(center_x * view->controller.scale - view->mouse_x),
+             -(center_y * view->controller.scale - view->mouse_y));
          image_view_update(e->data);
}
```
