# CSS Modules 编译器

- 开始日期：2023-08-14
- 目标主要版本：1.x
- 参考问题：
- 实现 PR：

## 概括

增加 CSS Modules 编译器，用于将 .module.css 后缀的文件编译为 C 代码。

## 基本示例

与 tsx 结合使用，详见 [React TSX 编译器](./react-tsx-compiler)中的示例。

## 动机

CSS Modules 提供了一种更加模块化和可维护的方式来管理 CSS 样式，避免了全局命名冲突的问题，提高了样式的复用性，并且与组件之间的关系更加紧密。

## 详细设计

需要用到的库有：[postcss](https://www.npmjs.com/package/postcss)、[postcss-modules](https://www.npmjs.com/package/postcss-modules)、[postcss-sass](https://www.npmjs.com/package/postcss-sass) 。

当文件后缀名是 `.sass` 或 `.scss` 时，启用 postcss-sass 插件，当文件二级后缀名是 `.module` 时启用 postcss-modules 插件。

## 缺点

无。

## 备选方案

无。

## 采用策略

这是一项新增的功能。
