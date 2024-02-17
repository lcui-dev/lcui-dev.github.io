# YAML 编译器

- 开始日期：2023-08-14
- 目标主要版本：1.x
- 参考问题：
- 实现 PR：

## 概括

增加 YAML 编译器，用于将 YAML 编译为 C 代码。

## 基本示例

示例 XML 文件内容：

```yml title=home.yml
name: lcui-app
children:
  - name: resource
    attributes:
      type: text/css
      src: home.css
  - name: resource
    attributes:
      type: application/font-ttf
      src: iconfont.ttf
  - name: ui
    children:
      - name: text
        children:
          - type: text
            text: Enter a message and save it.
      - name: textedit
        attributes:
          ref: input-message
          placeholder: "eg: hello, world!"
      - name: button
        attributes:
          ref: btn-save-message
        children:
          - type: text
            text: Save
      - name: text
        attributes:
          ref: feedback
          class: feedback
        children:
          - type: text
            text: Message has been saved!
```

示例 CSS 文件内容：

```css title=home.css
root {
  background-color: #f6f8fa;
}

.feedback {
  color: #28a745;
  font-size: 12px;
  margin-top: 5px;
}
```

执行 `lcui compile home.yml` 命令后，生成 `home.yml.h` 文件：

```c title=home.yml.h
/** This file is generated from home.yml */

#include <ui.h>

typedef struct {
        ui_widget_t *input_message;
        ui_widget_t *btn_save_message;
        ui_widget_t *feedback;
} home_refs_t;

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


static void home_load_template(ui_widget_t *home_parent, home_refs_t *refs)
{
        ui_widget_t *w[5];

        w[0] = ui_create_widget(NULL);
        w[1] = ui_create_widget("text");
        w[2] = ui_create_widget(NULL);
        ui_widget_set_text(w[2], "Enter a message and save it.");
        ui_widget_append(w[1], w[2]);
        refs->input_message = ui_create_widget("textedit");
        ui_widget_set_attr(refs->input_message, "placeholder", "eg: hello, world!");
        refs->btn_save_message = ui_create_widget("button");
        w[3] = ui_create_widget(NULL);
        ui_widget_set_text(w[3], "Save");
        ui_widget_append(refs->btn_save_message, w[3]);
        refs->feedback = ui_create_widget("text");
        ui_widget_add_class(refs->feedback, "feedback");
        w[4] = ui_create_widget(NULL);
        ui_widget_set_text(w[4], "Message has been saved!");
        ui_widget_append(refs->feedback, w[4]);
        ui_widget_append(home_parent, w[1]);
        ui_widget_append(home_parent, refs->input_message);
        ui_widget_append(home_parent, refs->btn_save_message);
        ui_widget_append(home_parent, refs->feedback);
}

static void home_load_resources(void)
{
        ui_load_css_string(css_str_0, "home.css");
        pd_font_library_load_file("iconfont.ttf");
}
```

在 `home.c` 文件中添加 `#include "home.yml.h"` 即可使用它。

## 动机

YAML 编译器和 XML 编译器一样，实现起来比较简单，解析完内容后传给 JSON 编译器即可。

## 详细设计

基于 [yaml](https://www.npmjs.com/package/yaml) 实现。

## 缺点

无。

## 备选方案

无。

## 采用策略

这是一项新增的功能。
