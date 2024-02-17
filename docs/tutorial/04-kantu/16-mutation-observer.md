# 响应窗口尺寸变化

让我们学习如何使用 `ui_mutation_observer` 接口监听窗口变化。

在上一章节中我们有了解到 LCUI 在默认显示模式下根组件是与窗口绑定的，窗口尺寸变化后根组件尺寸也会改变，那么我们可以通过监听根组件的尺寸变化来间接监听窗口尺寸变化。

LCUI 提供了 `ui_mutation_observer` 接口用于监听组件的变化，接口设计参考自 [Web API MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver/MutationObserver)，用法也与之类似：先定义 `ui_mutation_observer_init_t` 类型参数设置观察目标，然后传给 `ui_mutation_observer_create()` 函数创建观察器，再将之与回调函数连接。具体的实现代码像下面这样：

```c title=image-view.c
void image_view_on_mutation(ui_mutation_list_t *list,
                            ui_mutation_observer_t *observer, void *arg)
{
        image_view_reset(arg);
}

```

```c title=image-view.c
ui_mutation_observer_t *observer;
ui_mutation_observer_init_t options = { .properties = true };
observer = ui_mutation_observer_create(image_view_on_mutation, w);
ui_mutation_observer_observe(observer, w, options);
```
