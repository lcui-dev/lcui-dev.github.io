# 定时重绘

JS 源码中的 `update()` 函数通过调用 `window.requestAnimationFrame()` 来让 `update()` 能够在每次动画帧被调用，虽然 LCUI 中并没有这种函数，但可以用定时器实现类似的效果。

首先给部件定义私有数据的结构，里面的 timer 成员用于存放定时器的编号：

```c
typedef struct ui_fabric_t {
        int timer;
} ui_fabric_t;
```

然后添加定时器的创建和销毁代码，以及相关函数：

```c title="src/main.c"
void ui_fabric_on_frame(ui_widget_t *w)
{

}

void ui_fabric_on_init(ui_widget_t *w)
{
        ui_fabric_t *data;
        ui_fabric_proto->proto->init(w);
        data = ui_widget_add_data(w, ui_fabric_proto, sizeof(ui_fabric_t));
        data->timer = lcui_set_interval(LCUI_MAX_FRAME_MSEC,
                                        (timer_callback)ui_fabric_on_frame, w);
}

void ui_fabric_on_destroy(ui_widget_t *w)
{
        ui_fabric_t *data;
        data = ui_widget_get_data(w, ui_fabric_proto);
        lcui_destroy_timer(data->timer);
}
```

这样，`ui_fabric_on_frame()` 函数就能每隔一段时间被调用。
