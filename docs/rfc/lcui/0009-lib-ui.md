---
description: 将 UI 相关的功能模块整合为独立的子库，不依赖主循环、窗口等系统相关接口，能被单独编译、使用。
---

# UI 核心库

- 开始日期：2023-04-02
- 目标主要版本：3.x
- 参考问题：无
- 实现 PR：[#277](https://github.com/lc-soft/LCUI/pull/277)

## 概括

将 UI 相关的功能模块整合为独立的子库，不依赖主循环、窗口等系统相关接口，能被单独编译、使用。

## 基本示例

```c
#include <ui.h>

void on_btn_click(ui_widget_t *w, ui_event_t *e, void *arg)
{
        // ...
}

int main(void)
{
        ui_widget_t *btn;

        ui_init();
        ui_load_css_string(".button {\
                display: inline-block;\
                border: 1px solid #ddd;\
                background: #fff;\
                padding: 4px 8px;\
                font-size: 14px;\
        }");

        btn = ui_create_widget();
        ui_root_append(btn);

        ui_widget_move(btn, 50, 50);
        ui_widget_set_style_string(btn, "border-color", "#f00");
        ui_widget_on(btn, "click", on_btn_click, NULL, NULL);

        ui_update();
        ui_destroy();
}
```

## 动机

增强 UI 相关功能模块的通用性、可替代性和可维护性。

## 详细设计

### 命名

子库命名为 ui，所有标识符名称以 `ui_` 开头。

将 `LCUI_RectF` 重命名为 `ui_rect_t`，相关操作函数移入 `ui_rect.c` 文件内。

### 根部件

根级部件由 `ui_root()` 函数获取，对根追加新部件可靠 `ui_root_append()` 函数完成。

### 属性操作

将属性操作函数名称中的 attribute 单词简写为 attr，即：

- `ui_widget_set_attr()`
- `ui_widget_get_attr()`

### 解除对系统事件的依赖

移除系统事件监听代码，解除 UI 库对平台库的依赖。

新增 `ui_dispatch_event()` 函数，用于派发 UI 事件。该函数使得上层代码可以自由监听和处理系统事件，无需与平台库强绑定。只需根据系统事件创建对应的 UI 事件，然后将其传入`ui_dispatch_event()` 函数即可让 UI 库处理事件。

### 解除对线程库的依赖

移除事件系统和部件 id 映射表中的互斥锁操作。

## 缺点

无。

## 备选方案

无。

## 采用策略

这是个破坏性改动，需要对所有用到 UI 功能的代码进行修改。由于主要改动都在命名上，这些文件通常只需要全局替换名称即可。

## 未解决的问题

是否应该都用更精简的命名？例如：

- `ui_load_css_string` -> `ui_load_css_str`
- `ui_widget_collect_references` -> `ui_widget_collect_refs`

UI 库可以拆分得更彻底：拆分出布局引擎库，解除对 css 库和 pandagl 库的依赖。

直接用全局变量 `ui_root` 访问根级部件是不是更好些？
