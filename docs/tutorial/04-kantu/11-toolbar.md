# 工具栏交互

让我们学习如何给工具栏中的按钮添加事件响应。

## 响应点击事件

当用户点击工具栏中的按钮时，你需要让程序执行与按钮对应的操作并更新界面。

LCUI 是基于事件驱动的，像按下按键、鼠标点击等操作都会产生事件。LCUI 在处理事件时会调用与之绑定的事件处理函数，你可以调用 `ui.h` 头文件中的 `ui_widget_on()` 函数给组件绑定事件处理函数。

事件响应能力是自组件创建以来就具备的，那么我们就在 `image_view_init()` 函数中添加事件绑定：

```c title=image-view.c
ui_widget_on(view->refs.zoom_in, "click", image_view_on_zoom_in, w);
ui_widget_on(view->refs.zoom_out, "click", image_view_on_zoom_out, w);
ui_widget_on(view->refs.original, "click", image_view_on_zoom_to_1, w);
ui_widget_on(view->refs.fill, "click", image_view_on_zoom_to_fill, w);
```

然后，实现这些事件处理函数：

```c title=image-view.c
void image_view_on_zoom_in(ui_widget_t *w, ui_event_t *e, void *arg)
{
        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);
        image_controller_zoom_in(&view->controller);
        image_view_update(e->data);
}

void image_view_on_zoom_out(ui_widget_t *w, ui_event_t *e, void *arg)
{
        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);
        image_controller_zoom_out(&view->controller);
        image_view_update(e->data);
}

void image_view_on_zoom_to_1(ui_widget_t *w, ui_event_t *e, void *arg)
{
        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);
        image_controller_set_scale(&view->controller, 1.0f);
        image_view_update(e->data);
}

void image_view_on_zoom_to_fill(ui_widget_t *w, ui_event_t *e, void *arg)
{
        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);
        image_controller_zoom_to_fill(&view->controller);
        image_view_update(e->data);
}

```

代码比较简单，都是先调用对应的控制器的函数，然后调用 `image_view_update()` 函数更新界面。

## 更新缩放比例文本

你应该能看到，在点击任意按钮后，工具栏中的缩放比例并不会更新。

文本（Text）组件提供文本显示能力，`ui_text_set_content()` 函数可修改它的内容。让我们在 `image_view_update()` 函数中调用它来将最新的缩放比例更新到界面上：

```c title=image-view.c
char percentage_str[8];
image_view_t *view = ui_widget_get_data(w, image_view_proto);
ui_image_t *image = view->controller.image;
bool image_valid = ui_image_valid(view->controller.image);

snprintf(percentage_str, 7, "%d%%",
        image_valid ? (int)(view->controller.scale * 100) : 100);
ui_text_set_content(view->refs.percentage, percentage_str);
```

## 自动禁用按钮

有些操作在特定条件下是不可用的，你的程序应该禁用它们，并且在界面上也应该体现出禁用效果。

你可以调用 `ui_widget_set_disabled()` 函数给组件添加禁用（disabled）状态，然后在 CSS 代码中使用 `:disabled` 选择器为它设置 CSS 规则。但请注意，禁用状态并不会阻止组件的事件响应，你需要在事件处理器中判断组件是否被禁用。

让我们在 `image_view_update()` 函数中添加代码更新各个按钮的状态：

```c title=image-view.c
image_controller_t *c = &view->controller;

ui_widget_set_disabled(view->refs.zoom_in,
                       !image_controller_can_zoom_in(c));
ui_widget_set_disabled(view->refs.zoom_out,
                       !image_controller_can_zoom_out(c));
ui_widget_set_disabled(view->refs.fill,
                       !image_controller_can_zoom_to_fill(c));
ui_widget_set_disabled(view->refs.original,
                       !ui_image_valid(image) || c->scale == 1.f);
```

## 响应快捷键

当用户按下键盘的按键时会产生 keydown 事件，如果当前没有获得焦点的组件，则该事件触发目标是根组件，所以，你应该监听根组件的事件。

先在 `image_view_init()` 函数中添加事件绑定：

```c title=image-view.c
ui_widget_on(ui_root(), "keydown", image_view_on_keydown, w);
```

然后定义事件处理函数，如果按键是 <kbd>-</kbd> 和 <kbd>=</kbd> 则执行缩放操作。

```c title=image-view.c
void image_view_on_keydown(ui_widget_t *root, ui_event_t *e, void *arg)
{
        ui_widget_t *w = e->data;
        image_view_t *view = ui_widget_get_data(w, image_view_proto);

        switch (e->key.code) {
        case KEY_EQUAL:
                image_controller_zoom_in(&view->controller);
                image_view_update(w);
                break;
        case KEY_MINUS:
                image_controller_zoom_out(&view->controller);
                image_view_update(w);
                break;
        default:
                break;
        }
}
```

LCUI 的 platform 库的头文件提供了常用按键的键码宏，`KEY_MINUS` 和 `KEY_EQUAL` 分别是按键 <kbd>-</kbd> 和 <kbd>=</kbd> 的键码。

## 全屏模式切换

在 LCUI 的实现中，全屏是一种显示模式，你可以调用 `lcui_set_ui_display_mode()` 函数更改显示模式。

进入全屏模式后，界面中应该隐藏工具栏。这个效果可以用 CSS 实现，通过添加和移除 maximize 类来更改样式。

首先定义窗口最大化和恢复函数：

```c title=image-view.c
void image_view_maximize(ui_widget_t *w)
{
        image_view_t *view = ui_widget_get_data(w, image_view_proto);

        ui_widget_add_class(w, "maximize");
        lcui_set_ui_display_mode(LCUI_DISPLAY_MODE_FULLSCREEN);
}

void image_view_restore(ui_widget_t *w)
{
        image_view_t *view = ui_widget_get_data(w, image_view_proto);

        ui_widget_remove_class(w, "maximize");
        lcui_set_ui_display_mode(LCUI_DISPLAY_MODE_DEFAULT);
}
```

然后定义事件处理函数：

```c
void image_view_on_maximize(ui_widget_t *w, ui_event_t *e, void *arg)
{
        image_view_maximize(e->data);
}
```

接着在 `image_view_init()` 函数中添加事件绑定：

```c title=image-view.c
ui_widget_on(view->refs.maximize, "click", image_view_on_maximize, w);
```

全屏模式下，应允许用户按下 <kbd>ESC</kbd> 键退出全屏，那么就在 `image_view_on_keydown()` 函数内添加 ESC 键的事件处理。

```c title=image-view.c
case KEY_ESCAPE:
        if (ui_widget_has_class(w, "maximize")) {
                image_view_restore(w);
        }
        break;
```
