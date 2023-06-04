# 添加事件响应

我们可以在 JS 源码末尾处看到事件绑定代码：

```js
///---EVENTS---///

//scaling
window.addEventListener('resize', scaleToWindow);

//interaction
document.addEventListener("mousedown", grabFabric);
document.addEventListener("mousemove", moveFabric);
document.addEventListener("mouseup", dropFabric);

document.addEventListener("touchstart", grabFabric);
document.addEventListener("touchmove", moveFabric);
document.addEventListener("touchend", dropFabric);
```

这块代码添加了鼠标事件和触控事件的处理器，尽管 LCUI 支持处理这些事件，但其中的触控事件的数据结构和使用方式并不相同。为了减少代码量，我们仅绑定鼠标事件。

首先，在部件的初始化函数 `ui_fabric_on_init()` 中添加事件绑定：

```c
ui_widget_on(w, "mousedown", ui_fabric_on_mousedown, NULL);
ui_widget_on(w, "mousemove", ui_fabric_on_mousemove, NULL);
ui_widget_on(w, "mouseup", ui_fabric_on_mouseup, NULL);
```

然后添加事件处理函数：

```c title=src/main.c
static void ui_fabric_on_mousedown(ui_widget_t *w, ui_event_t *e, void *arg)
{
        float x, y;

        ui_widget_get_offset(w, NULL, &x, &y);
        Fabric_grab(e->mouse.x - x, e->mouse.y - y);
        ui_widget_set_mouse_capture(w);
}

static void ui_fabric_on_mousemove(ui_widget_t *w, ui_event_t *e, void *arg)
{
        float x, y;

        ui_widget_get_offset(w, NULL, &x, &y);
        Fabric_move(e->mouse.x - x, e->mouse.y - y);
}

static void ui_fabric_on_mouseup(ui_widget_t *w, ui_event_t *e, void *arg)
{
        Fabric_drop();
        ui_widget_release_mouse_capture(w);
}
```

与 JS 源码类似，mousedown 和 mousemove 事件处理函数中都会转换鼠标指针坐标，也就是从相对于根部件转换为相对于布料区域。

转换方法是调用 `ui_widget_get_offset()` 获取部件相对于根部件的坐标，然后用鼠标坐标减去该坐标即可得到相对坐标。

为了避免鼠标移出窗口后失去 mousemove 和 mouseup 事件响应，我们在 mousedown 事件处理函数中调用了 `ui_widget_set_mouse_capture()` 来独占鼠标事件。在鼠标按键释放后，我们再调用 `ui_widget_release_mouse_capture()` 来取消独占。
