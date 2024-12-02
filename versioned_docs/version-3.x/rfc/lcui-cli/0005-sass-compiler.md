# SASS 编译器

- 开始日期：2023-08-14
- 目标主要版本：1.x
- 参考问题：
- 实现 PR：

## 概括

增加 SASS 编译器，用于将 SASS 和 SCSS 文件内容编译为 C 代码。

## 基本示例

示例 SCSS 文件内容：

```scss title="home.scss"
$bg: #f6f8fa;
$color: #28a745;

root {
  background-color: $bg;
}

.feedback {
  color: $color;
  font-size: 12px;
  margin-top: 5px;
}
```

执行 `lcui compile home.scss` 命令后，生成 `home.scss.h` 文件：

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

SASS 对 CSS 做了扩展，可以让 CSS 更易于维护。

## 详细设计

调用 [sass](https://www.npmjs.com/package/sass) 库提供的 `compileString()` 函数实现编译，自定义它的 `importer.findFileUrl` 以解决文件引入的问题。

## 缺点

无。

## 备选方案

无。

## 采用策略

这是一项新增的功能。
