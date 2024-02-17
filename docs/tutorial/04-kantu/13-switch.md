# 切换图片

到现在为止，你的应用还只能查看单张图片，接下来我们将引入之前写的收集器，让界面能够利用已收集的图片列表实现图片切换。

首先修改私有数据定义，添加收集器对象：

```diff title=image-view.c
  typedef struct image_view {
          float mouse_x, mouse_y;
          float mouse_offset_x, mouse_offset_y;
          bool dragging;

          image_view_refs_t refs;
          image_controller_t controller;
+         image_collector_t collector;
  } image_view_t;
```

然后初始化收集器，设置回调函数，给切换按钮添加点击事件绑定。

```c title=image-view.c
image_collector_init(&view->collector);
view->collector.callback = image_view_on_load_siblings;
view->collector.callback_arg = w;
ui_widget_on(view->refs.prev, "click", image_view_on_prev, w);
ui_widget_on(view->refs.next, "click", image_view_on_next, w);
```

收集器占用的资源是需要主动销毁的，你应该在组件销毁时销毁收集器：

```c title=image-view.c
image_collector_destroy(&view->collector);
```

之后在事件处理函数里调用收集器的方法获取上一张/下一张图片的路径并加载它。

```c title=image-view.c
void image_view_on_next(ui_widget_t *w, ui_event_t *e, void *arg)
{
        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);
        image_view_load_file(e->data, image_collector_next(&view->collector));
}

void image_view_on_prev(ui_widget_t *w, ui_event_t *e, void *arg)
{
        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);
        image_view_load_file(e->data, image_collector_prev(&view->collector));
}
```

除了点击事件，你也可以在按键事件处理函数中添加快捷键支持：

```c title=image-view.c
case KEY_LEFT:
        file = image_collector_prev(&view->collector);
        image_view_load_file(w, file);
        free(file);
        break;
case KEY_RIGHT:
        file = image_collector_next(&view->collector);
        image_view_load_file(w, file);
        free(file);
        break;
```

在收集器收集完全部图片后，你需要在回调函数里更新界面状态：

```c title=image-view.c
void image_view_on_load_siblings(image_collector_t *c, void *arg)
{
        image_view_update(arg);
}
```

更新的内容也就是根据结果显示/隐藏切换按钮：

```c title=image-view.c
if (image_collector_has_prev(&view->collector)) {
        ui_widget_show(view->refs.prev);
} else {
        ui_widget_hide(view->refs.prev);
}
if (image_collector_has_next(&view->collector)) {
        ui_widget_show(view->refs.next);
} else {
        ui_widget_hide(view->refs.next);
}
```

最后，在 `image_view_load_file()` 函数中调用收集器的文件加载函数以让收集器开始工作。

```c title=image-view.c
image_collector_load_file(&view->collector, file);
```
