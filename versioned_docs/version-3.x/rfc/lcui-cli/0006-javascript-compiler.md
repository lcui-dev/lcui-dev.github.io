# CSS 编译器

- 开始日期：2023-08-14
- 目标主要版本：1.x
- 参考问题：
- 实现 PR：

## 概括

增加 JavaScript 编译器，用于执行 JavaScript 文件并将其返回的 JSON 数据编译为 C 代码。

## 基本示例

示例 JavaScript 文件内容：

```js title="home.js"
module.exports = {
  name: "lcui-app",
  children: [
    {
      name: "resource",
      attributes: { type: "text/css", src: "home.css" },
    },
    {
      name: "resource",
      attributes: {
        type: "application/font-ttf",
        src: "iconfont.ttf",
      },
    },
    {
      name: "ui",
      children: [
        {
          name: "text",
          children: [{ type: "text", text: "Enter a message and save it." }],
        },
        {
          name: "textedit",
          attributes: {
            ref: "input-message",
            placeholder: "eg: hello, world!",
          },
        },
        {
          name: "button",
          attributes: { ref: "btn-save-message" },
          children: [{ type: "text", text: "Save" }],
        },
        {
          name: "text",
          attributes: { ref: "feedback", class: "feedback" },
          children: [{ type: "text", text: "Message has been saved!" }],
        },
      ],
    },
  ],
};
```

示例 CSS 文件内容：

```css title="home.css"
root {
  background-color: #f6f8fa;
}

.feedback {
  color: #28a745;
  font-size: 12px;
  margin-top: 5px;
}
```

执行 `lcui compile home.js` 命令后，生成 `home.js.h` 文件：

```c title="home.js.h"
/** This file is generated from home.js */

#include <ui.h>

typedef struct {
        ui_widget_t *input_message;
        ui_widget_t *btn_save_message;
        ui_widget_t *feedback;
} Home_refs_t;

static const char *css_str_0 = "\
root {\
  background-color: #f6f8fa;\
}\
\
.feedback {\
  color: #28a745;\
  font-size: 12px;\
  margin-top: 5px;\
}\
\
";


static void Home_load_template(ui_widget_t *Home_parent, Home_refs_t *refs)
{
        ui_widget_t *w[4];

        w[0] = ui_create_widget("text");
        w[1] = ui_create_widget(NULL);
        ui_widget_set_text(w[1], "Enter a message and save it.");
        ui_widget_append(w[0], w[1]);
        refs->input_message = ui_create_widget("textedit");
        ui_widget_set_attr(refs->input_message, "placeholder", "eg: hello, world!");
        refs->btn_save_message = ui_create_widget("button");
        w[2] = ui_create_widget(NULL);
        ui_widget_set_text(w[2], "Save");
        ui_widget_append(refs->btn_save_message, w[2]);
        refs->feedback = ui_create_widget("text");
        ui_widget_add_class(refs->feedback, "feedback");
        w[3] = ui_create_widget(NULL);
        ui_widget_set_text(w[3], "Message has been saved!");
        ui_widget_append(refs->feedback, w[3]);
        ui_widget_append(Home_parent, w[0]);
        ui_widget_append(Home_parent, refs->input_message);
        ui_widget_append(Home_parent, refs->btn_save_message);
        ui_widget_append(Home_parent, refs->feedback);
}

static void Home_load_resources(void)
{
        ui_load_css_string(css_str_0, "home.css");
        pd_font_library_load_file("iconfont.ttf");
}

```

在 `home.c` 文件中添加 `#include "home.js.h"` 即可使用它。

## 动机

一些前端开发相关工具支持 js 格式的配置文件，有一定的适用场景，可以加上。

## 详细设计

读取 js 文件内容，然后调用 eval() 函数执行，将返回值传给 JSON 编译器。

## 缺点

无。

## 备选方案

无。

## 采用策略

这是一项新增的功能。
