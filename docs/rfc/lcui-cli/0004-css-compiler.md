# CSS 编译器

- 开始日期：2023-08-14
- 目标主要版本：1.x
- 参考问题：
- 实现 PR：

## 概括

增加 CSS 编译器，用于将 CSS 编译为 C 代码。

## 基本示例

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

执行 `lcui compile home.css` 命令后，生成 `home.css.h` 文件：

```c title="home.yml.h"
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
```

在 `home.c` 文件中添加 `#include "home.css.h"` 即可使用它。

## 动机

将 CSS 字符串内嵌到代码中使用，省去文件读取操作。

## 详细设计

本质上就是转换字符串，很简单。

## 缺点

无。

## 备选方案

无。

## 采用策略

这是一项新增的功能。
