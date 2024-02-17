# XML 编译器

- 开始日期：2023-08-14
- 目标主要版本：1.x
- 参考问题：
- 实现 PR：

## 概括

增加 XML 编译器，用于将 XML 编译为 C 代码。

## 基本示例

示例 XML 文件内容：

```xml title=home.xml
<?xml version="1.0" encoding="UTF-8" ?>
<lcui-app>
  <resource type="text/css" src="home.css"/>
  <resource type="application/font-ttf" src="iconfont.ttf"/>
  <ui>
    <text>Enter a message and save it.</text>
    <textedit ref="input-message" placeholder="eg: hello, world!" />
    <button ref="btn-save-message">Save</button>
    <text ref="feedback" class="feedback">Message has been saved!</text>
  </ui>
</lcui-app>
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

执行 `lcui compile home.xml` 命令后，生成 `home.xml.h` 文件：

```c title=home.xml.h
/** This file is generated from home.xml */

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

在 `home.c` 文件中添加 `#include "home.xml.h"` 即可使用它。

## 动机

LCUI 的 XML 文件解析功能依赖 libxml2 库，该库的体积较大，如果 LCUI CLI 能预先将 XML 文件编译为 C 代码，那么就可以默认禁用甚至删除 XML 文件解析功能，以减少 LCUI 的库文件体积。

另一方面，后续可以基于 XML 添加 ref 收集、CSS 字符串内嵌等新特性，提高开发效率。

## 详细设计

XML 解析器基于 [xml-js](https://www.npmjs.com/package/xml-js) 实现，参考其文档设置解析器配置项以将结点的数据结构转换为：

```js
{
  type: "element",
  name: "widget",
  attributes: {
    attr: "value"
  },
  text: "",
  children: []
}
```

然后调用已有的 json 编译器将它编译为 C 代码。

## 缺点

无。

## 备选方案

无。

## 采用策略

这是一项新增的功能。
