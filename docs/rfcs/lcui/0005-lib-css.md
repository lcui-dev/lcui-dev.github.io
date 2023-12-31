---
description: 将 CSS 相关的功能模块整合为独立的子库，重新设计部分接口，移除对 UI 库、线程库、字体库的依赖。
---

# CSS 解析器和选择引擎库

- 开始日期：2023-05-01
- 目标主要版本：3.x
- 参考问题：无
- 实现 PR：无

## 概括

将 CSS 相关的功能模块整合为独立的子库，重新设计部分接口，移除对 UI 库、线程库、字体库的依赖。

## 基本示例

```c
#include <stdio.h>
#include <css.h>

char css_str[] = "\
* {\
    box-sizing: border-box;\
}\
.btn {\
    font-size: 14px;\
}\
";

int main(void)
{
    css_prop_t *prop;
    css_selector_t *selector;
    css_style_decl_t *style;

    css_init();
    css_load_from_string(css_str);
    selector = css_selector_create(".btn");
    style = css_select_style(selector);
    prop = css_style_decl_find(style, css_key_font_size);
    if (prop != NULL) {
        printf("font-size: %fpx\n", prop->value.unit_value.value);
    }
    css_selector_destroy(selector);
    css_style_decl_destroy(style);
    css_destroy();
    return 0;
}
```

## 动机

- **减少依赖项：** 样式数据库操作依赖线程库的互斥锁、font-family 属性解析器依赖字体库、@font-face 规则解析器依赖 UI 库的 TextView 部件。
- **纠正 CSS 相关数据类型的命名：** 部分 CSS 相关数据类型命名并不正确，例如：样式表（StyleeSheet）是包含了 CSS 规则集的对象，然而 `LCUI_StyleSheet` 里面却是 CSS 属性列表，正确的命名是 `StyleDeclaration`。

## 详细设计

### 调整命名

为提升辨识度，所有标识符命名以 `css_` 开头。

参考 LibCSS 库和 MDN 中的 [CSS 对象模型](https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Object_Model)相关的文章，确定 CSS 库中的对象类型名和释义：

<table>
<thead>
<tr>
  <td width="120">对象</td>
  <td width="160">CSSOM 中的名称</td>
  <td width="160">CSS 库中的名称</td>
  <td>含义</td>
</tr>
</thead>
<tbody>
  <tr>
    <td>
      样式表
    </td>
    <td>
      CSSStyleSheet
    </td>
    <td>
      css_stylesheet_t
    </td>
    <td>各种规则的集合</td>
  </tr>
  <tr>
    <td>
      样式声明
    </td>
    <td>
      CSSStyleDeclaration
    </td>
    <td>
      css_style_decl_t
    </td>
    <td>CSS 属性键值对的集合</td>
  </tr>
  <tr>
    <td>
      规则
    </td>
    <td>
      CSSRule
    </td>
    <td>
      css_rule_t
    </td>
    <td>
     （字面意思）
    </td>
  </tr>
  <tr>
    <td>
      样式规则
    </td>
    <td>
      CSSStyleRule
    </td>
    <td>
      css_style_rule_t
    </td>
    <td>
      定义了一组属性和值，以及应用这些属性和值的元素。
    </td>
  </tr>
</tbody>
</table>

主要标识符命名改动如下：

- `LCUI_StyleSheet` -> `css_style_decl_t`，StyleSheet 保存了所有 CSS 属性，数组下标既是属性编号。为节省内存占用，改用 `css_style_decl_t`。
- `LCUI_StyleList` -> `css_style_decl_t`，StyleList 是一个链表，仅存储了使用的 CSS 属性。
- `LCUI_Style` -> `css_style_value_t`
- `LCUI_Selector` -> `css_selector_t`
- `LCUI_SelectorNode` -> `css_selector_node_t`
- `LCUI_LoadCSSFile()` -> `css_load_from_file()`
- `LCUI_LoadCSSString()` -> `css_load_from_string()`
- `CSSParser_Begin()` -> `css_parser_create()`
- `CSSParser_End()` -> `css_parser_destroy()`
- `LCUI_GetStyleSheet()` -> `css_select_style()`

其它改动是相似的，不再赘述。

### 调整数据结构

参考 [CSS Typed Object Model API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API#cssstylevalue_interfaces) 文档中的各种值类型接口，将 `LCUI_Style` 中的 `px`、`sp`、`style`、`val_string`、`val_image` 等成员改为如下所示的几类成员：

```c
struct css_style_value_t {
        css_style_value_type_t type;
        union {
                css_private_value_t value;
                css_numeric_value_t numeric_value;
                css_integer_value_t integer_value;
                css_string_value_t string_value;
                css_unit_value_t unit_value;
                css_color_value_t color_value;
                css_image_value_t image_value;
                css_unparsed_value_t unparsed_value;
                css_keyword_value_t keyword_value;
                css_style_array_value_t array_value;
                css_boolean_value_t boolean_value;
        };
};
```

### 移除线程库依赖

删除 `LCUI_Mutex` 和相关函数调用。

### 移除字体库和 UI 库依赖

`css_font_face_parser_t` 内新增 callback 函数指针成员，新增 `css_font_face_parser_on_load()` 函数用于设置 callback，由 UI 库调用它来响应字体加载。

### 调整 UI 库的样式操作方法

取消 `Widget_SetStyle()` 函数宏，新增几个函数用于操作不同类型的属性值，命名以 `ui_widget_set_style_` 开头，后面接 CSS 属性值类型名，例如：

```c
void ui_widget_set_style_unit_value(ui_widget_t *w, int key,
                                    css_numeric_value_t value,
                                    css_unit_t unit);
void ui_widget_set_style_keyword_value(ui_widget_t *w, int key,
                                       css_keyword_value_t value);
void ui_widget_set_style_color_value(ui_widget_t *w, int key,
                                     css_color_value_t value);
void ui_widget_set_style_numeric_value(ui_widget_t *w, int key,
                                       css_numeric_value_t value);
```

用法对比：

```c
// 之前
Widget_SetStyle(widget, key_width, 100, px);

// 之后
ui_widget_set_style_unit_value(widget, css_prop_width, 100, CSS_UNIT_PX);
```

## 缺点

无。

## 备选方案

参考 LibCSS 的设计，更改数据类型和函数的命名，使 CSS 库的用法与 LibCSS 库高度相似。这个方案成本太高，暂不考虑。

## 采用策略

这是个破坏性改动，需要对所有用到 CSS 功能的代码进行修改，由于主要改动都在命名上，这些文件通常只需要全局替换名称即可。
