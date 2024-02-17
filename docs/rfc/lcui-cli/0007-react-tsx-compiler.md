# React TSX 编译器

- 开始日期：2023-08-14
- 目标主要版本：1.x
- 参考问题：
- 实现 PR：

## 概括

增加 React TSX 编译器，用于将 TypeScript 编写的 React 无状态组件编译为 C 代码。

## 基本示例

示例 tsx 文件内容：

```tsx title=home.tsx
import React from "react";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className="home">
      <text className={styles.text}>Hello, World!</text>
      <button className={styles.button}>Ok</button>
    </div>
  );
}
```

示例 CSS 文件内容：

```css title=home.module.css
:global(.home) {
  padding: 20px;
}

.button {
  padding: 5px 10px;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 4px;
}

.text {
  color: #f00;
  font-size: 24px;
}
```

执行 `lcui compile home.tsx` 命令后，生成 `home.tsx.h` 文件：

```c title=home.tsx.h
/** This file is generated from home.tsx */

#include <ui.h>

/** This css code string is compiled from file home.module.css */
static const char *css_str_0 = "\
.home {\
  padding: 20px;\
}\
\
._button_1ayu2_9 {\
  padding: 5px 10px;\
  text-align: center;\
  border: 1px solid #eee;\
  border-radius: 4px;\
}\
\
._text_1ayu2_23 {\
  color: #f00;\
  font-size: 24px;\
}\
\
";


static void home_load_template(ui_widget_t *home_parent)
{
        ui_widget_t *w[5];

        w[0] = ui_create_widget(NULL);
        ui_widget_add_class(w[0], "home");
        w[1] = ui_create_widget(NULL);
        ui_widget_add_class(w[1], "_text_1ayu2_23");
        w[2] = ui_create_widget("text");
        ui_widget_set_text(w[2], "Hello, World!");
        ui_widget_append(w[1], w[2]);
        w[3] = ui_create_widget(NULL);
        ui_widget_add_class(w[3], "_button_1ayu2_9");
        w[4] = ui_create_widget("text");
        ui_widget_set_text(w[4], "Ok");
        ui_widget_append(w[3], w[4]);
        ui_widget_append(w[0], w[1]);
        ui_widget_append(w[0], w[3]);
}

static void home_load_resources(void)
{
        ui_load_css_string(css_str_0, "home.tsx");
}
```

在 `home.c` 文件中添加 `#include "home.tsx.h"` 即可使用它。

## 动机

React 是 Web 前端领域中比较流行的开发技术。对于有 React 开发经验的人，更易于上手 LCUI 的组件开发。对于其他人，多了一种可以尝试的开发方式。

## 详细设计

基于 typescript 库提供的 `transpileModule()` 实现对 TypeScript 代码的解析和编译，编译流程大致如下：

1. 调用 `transpileModule()` 传入自定义的 transformer 函数，记录所有通过 import 语句引入的 css 文件路径及代码起止位置。
1. 将 TypeScript 源码中的 css 文件相关的 import 语句替换成 `const xxx = {}`。
1. 调用 `transpileModule()` 将 TypeScript 代码编译为 JavaScript 代码。
1. 将 JavaScript 代码写入到 js 文件中。
1. 使用 `import()` 函数加载 js 文件。
1. 执行 js 文件默认导出的组件函数，得到 JSX 元素树。
1. 转换 JSX 元素树为 JSON 编译器支持的格式。
1. 将记录的 css 文件转换为 resource 元素合并到 JSON 数据中。
1. 调用 JSON 编译器编译 JSON 数据。

## 缺点

无。

## 备选方案

无。

## 采用策略

这是一项新增的功能。
