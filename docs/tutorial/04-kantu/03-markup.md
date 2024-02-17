# 标记

标记（Markup）是指使用标记语言编写的文本，用于描述文档的结构和格式。它通过在文本中插入特定的标记（标签）来指示文档中的元素类型和其它相关信息。

借助 lcui-cli，你有多种编写界面的方式：使用 XML 这种标记语言，或是用 YAML 和 JSON 格式的文件，又或是在 JavaScript 或 TypeScript 代码中使用 JSX 语法。

## TypeScript

项目中的界面部分是使用 TypeScript 语言描述的，源文件是 `.tsx` 后缀，它们经过 lcui-cli 工具编译后会生成同名的 `.tsx.h` 后缀文件。

不用担心，你无需学习 TypeScript 语言，代码中只用到 TypeScript 的基本的语法，
大多数情况下你只需要参考以下代码片段来编写即可：

```tsx
// 引入 LCUI 的预置组件
import React, { Text, TextInput, Button } from "@lcui/react";
// 从图标库中引入图标
import { EmojiSparkle } from "@lcui/react-icons";
// 引入图标库的样式文件
import "@lcui/react-icons/dist/style.css";
// 引入其它组件
import About from "../components/about";

export default function Home() {
  return (
    <div className="container">
      <EmojiSparkle />
      <About />
      <div className="input-group">
        <Text>Enter a message and save it.</Text>
        <TextInput $ref="input_message" placeholder="eg: hello, world!" />
        <Button $ref="btn_save_message">Save</Button>
      </div>
    </div>
  );
}
```

`import` 语句用于导入由另一个模块导出的[绑定](https://developer.mozilla.org/en-US/docs/Glossary/Binding)。

[@lcui/react](https://gitee.com/lcui-dev/react) 是一个用于 LCUI 应用程序开发的 React 库，提供 TypeScript 类型声明、React 版预置组件（例如：Text，TextInput，Button），配合 @lcui/cli 使用。与 React 库的不同之处在于，它仅允许使用 JSX 的基本特性，不提供 `useState()`、`useEffect()` 等函数。这意味着你只能将 JSX 当成**静态**的 XML 或 HTML 这类标记语言来写。

[@lcui/react-icons](https://gitee.com/lcui-dev/fluent-ui-system-icons) 是专为 LCUI 适配的图标库，图标都来自 [Fluent UI 系统图标](https://github.com/microsoft/fluentui-system-icons)。

`export default` 语句用于导出默认绑定，后面接的是 `function Home`，也就是默认导出 Home 函数。

`function Home() { ... }` 是函数声明，其中函数名称 Home 将会作为 C 代码中注册组件时使用的名称。

函数内部返回的是 JSX 表达式。JSX 与 HTML 写法相似，但比它更严格。你必须关闭标签，如 `<br/>`。你的组件也不能返回多个 JSX 标记。你必须将它们封装到一个共享的父级中，如 `<div></div>`。

JSX 元素的 `$ref` 属性用于创建引用，编译后会在 refs 结构体中创建同名成员，我们可以通过它直接访问 `ui_widget_t` 组件实例。

lcui-cli 对 tsx 文件的编译过程是先将 tsx 文件及其依赖的所有模块编译为 js 文件并输出到 `.lcui` 目录中，之后执行模块中导出的组件函数，将返回结果转译成 C 代码，最终输出为同名的 `.h` 后缀的文件。

## XML

LCUI 支持从 XML 文件中加载界面。XML 文件内容写法如下：

```xml
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

你可以使用 `ui_xml.h` 头文件提供的 `ui_load_xml_file()` 函数加载 XML 文件。

```c
#include <ui_xml.h>

...

ui_widget_t *wrapper = ui_load_xml_file("path/to/file.xml");
```

需要注意的是，这一功能可能会在未来的版本中移除，因为 lcui-cli 能够将 XML 转译成直接构建界面的 C 代码，这比在运行时调用 libxml2 库的接口解析 XML 文档再构建界面的性能更高。

## JSON

lcui-cli 编译 XML、YAML、TSX 的中间结果是 JSON 格式的数据，最终都是由 JSON 编译器将结果转换成 C 代码的。

JSON 写法如下：

```json
{
  "name": "lcui-app",
  "children": [
    {
      "name": "resource",
      "attributes": { "type": "text/css", "src": "home.css" }
    },
    {
      "name": "resource",
      "attributes": {
        "type": "application/font-ttf",
        "src": "iconfont.ttf"
      }
    },
    {
      "name": "ui",
      "children": [
        {
          "name": "text",
          "children": [
            { "type": "text", "text": "Enter a message and save it." }
          ]
        },
        {
          "name": "textinput",
          "attributes": {
            "ref": "input-message",
            "placeholder": "eg: hello, world!"
          }
        },
        {
          "name": "button",
          "attributes": { "ref": "btn-save-message" },
          "children": [{ "type": "text", "text": "Save" }]
        },
        {
          "name": "text",
          "attributes": { "ref": "feedback", "class": "feedback" },
          "children": [{ "type": "text", "text": "Message has been saved!" }]
        }
      ]
    }
  ]
}
```

## YAML

YAML 的写法比 JSON 更精简：

```yaml
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
      - name: textinput
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
