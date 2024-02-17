# 样式

本章节将介绍如何为你的应用程序添加全局样式，以及几种样式编写方式：SCSS、CSS modules。

LCUI 支持使用 CSS 描述界面样式，但目前仅支持一些简单选择符和属性，网络上那些 CSS 代码片段和开源的 CSS 项目并不能直接拿来使用。

在 C 语言中，你可以使用 ui.h 头文件提供的 `ui_load_css_file()` 函数和 `ui_load_css_string()` 加载 CSS。而在 TypeScript 中，你可以使用 import 语句导入 css 文件，lcui-cli 在编译时会将 css 文件内容转译成 C 语言字符串和相应的 `ui_load_css_string()` 函数调用代码。

## 全局样式

/src 目录中有个名为 app.scss 的文件，你可以使用它将 CSS 规则添加到应用程序中的所有页面中，例如文字大小、背景色等。

## CSS Modules

CSS 的作用域是全局的，如果你担心样式冲突，则可以采用 CSS Modules 方案来创建局部作用域的 CSS 类以避免命名冲突并提高可维护性。

首先，添加 `.module.css` 后缀的文件，写入 CSS 代码：

```css
.card {
  border: 1px solid #eee;
  border-radius: 4px;
}
```

然后在 `.tsx` 文件中使用 `import` 语句导入它：

```tsx
import styles from 'path/to/file.module.css'
```

之后将 JSX 表达式中赋给 className 属性的字符串替换成 styles 的对应属性，例如：

```diff
- <div className="card" />
+ <div className={styles.card} />
```

## Sass

一个流行的 CSS 预处理器，它通过变量、嵌套规则和混合元素等功能扩展 CSS。lcui-cli 已经内置了它，在编译 `.sass` 和 `.scss` 后缀的文件时会自动调用 Sass 预处理器。
