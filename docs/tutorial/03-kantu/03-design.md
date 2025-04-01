# 设计程序架构

本教程的最终目标是带领你开发一个图像查看器程序。在此之前，我们需要先弄清楚它需要具备哪些功能，并设计这些功能的实现方法。本章节将一步步带你了解如何分析需求，并将这些需求转换为具体的开发事项。通过这些步骤，我们可以更好地评估项目的整体工作量，让开发进度更加可控，每完成一项开发任务都能感受到进步，离最终目标更进一步。

## 功能需求分析

在体验过程序后我们可以知道这些细节：

- **界面切换：** 直接打开程序，显示的是介绍界面。将图像文件的打开方式设置为该程序，显示的是图像查看界面。
- **自适应比例：** 打开图像后，缩放的尺寸适应窗口内可见区域。
- **进度条：** 打开尺寸很大的图像时，会有进度条显示。
- **上下切换：** 如果有下一张图像，移动鼠标指针到右侧区域时会显示“下一张”按钮，点击可切换到下一张图像。“上一张”按钮也类似。
- **缩放比例显示：** 界面底栏上有显示当前缩放比例，缩放时会更新。
- **工具栏：** 展示图像分辨率、文件大小、缩放比例、缩放控件、全屏按钮。
- **鼠标滚轮缩放：** 滚动鼠标滚轮可以缩放图像，鼠标指针在缩放前后仍指向图像中的同一处。
- **移动可见区域：** 放大图像后按住鼠标左键可拖动浏览区域。
- **按键控制缩放：** 按下 <kbd>+</kbd> 和 <kbd>-</kbd> 可以缩放图像。
- **信息：** 展示文件名、修改时间、描述、大小信息、文件路径。
- **影片：** 展示当前目录内的图像列表，点击缩略图可快速查看。

这些需求主要集中在界面交互上，而在代码实现上，核心功能逻辑与用户界面逻辑应该分开，这有助于后续对界面进行更新、调整，甚至迁移至其它 GUI 开发库。

## 功能库

按照上述思路，图像缩放相关逻辑可划分为控制器（Controller），图像文件的收集功能和上下一张切换功能可划分为收集器（Collector），而图像的文件名、分辨率、修改时间等信息的读取功能则可划分为文件信息读取器（FileInfoReader）。

### 图像缩放控制器

控制器提供缩放比例的控制能力，包括放大、缩小、原始比例、自适应比例。同时还应记录可见区域的左上角坐标和焦点坐标，以便放大图像后能够移动可见区域，并以焦点坐标为中心进行缩放。

### 图像文件收集器

收集器提供图像文件列表和上下切换能力。它在打开图像后开始工作，先遍历图像文件所处目录内的所有文件，将包含图像后缀名的文件路径添加到列表中，然后确定当前打开的图像在列表中位置，最后通知图像查看界面启用图像切换功能。

### 文件信息读取器

文件信息读取器提供图像信息和文件信息的读取能力。在打开图像时由异步工作线程执行文件读取任务，读取的信息会在工具栏和信息面板展示。

## 用户界面

我们使用 LCUI 库为应用程序构建用户界面，这部分可细分为标记、布局、交互和图标库。

### 标记

标记（Markup）是指使用标记语言编写的文本，用于描述文档的结构和格式。它通过在文本中插入特定的标记（标签）来指示文档中的元素类型和其它相关信息。LCUI 支持在运行时从 XML 文件加载界面，借助 `@lcui/cli` 开发工具还可支持更多的格式，而且能将其编译为 C 代码，从而更高效地构建界面。

**XML**

XML 文件内容写法如下：

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

:::warning
这一功能可能会在未来的版本中移除，因为 `@lcui/cli` 能够将 XML 转译成直接构建界面的 C 代码，这比在运行时调用 libxml2 库的接口解析 XML 文档再构建界面的性能更高。
:::

**TypeScript**

LCUI 的开发工具 `@lcui/cli` 内置 TypeScript 预处理器，你可以使用 TypeScript 语言结合 JSX 语法和 React 库编写 LCUI 组件。TypeScript 预处理器在处理 TypeScript 模块时会将其转换成 JavaScript 模块再执行模块内导出的组件函数，最终将组件函数执行过程中产生的数据和返回结果转换为 C 代码。

:::note
详见 [TypeScript](https://lcui.org/docs/guide/typescript) 文档。
:::

**JSON**

@lcui/cli 编译 XML、YAML、TSX 的中间结果是 JSON 格式的数据，最终由 JSON 编译器将结果转换成 C 代码。

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

**YAML**

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

### 交互

LCUI 基于事件驱动，用户在界面上的操作会触发事件。我们可以通过处理这些事件来响应鼠标和键盘操作，同时还可以利用 LCUI 提供的操作函数更新界面，向用户反馈操作结果。

### 布局

LCUI 支持流式布局（Flow Layout）和弹性盒子布局（Flexible Box）两种布局，用法和效果与网页的布局相似，能满足一般界面的布局需求。

### 样式

LCUI 的 CSS 引擎支持基础的 CSS 规则，借助 `@lcui/cli` 工具，我们还可以使用 CSS Modules、Tailwind CSS、Sass 这几种技术来组织和管理 CSS 样式。

### 图标库

LCUI 的 `@lcui/react-icons` 图标库基于 [fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons)，与 Windows 系统应用程序用的是同一套图标库，包含大量常用图标库，已经能满足我们的程序的图标需求。

## 小结

经过上述分析和设计，我们对各个功能的需求和实现方案有了大致的了解。程序的代码划分为两大部分。核心库部分包含三个功能模块：控制器、收集器和文件信息读取器。用户界面部分较为复杂，在界面标记方式上选择使用 TypeScript 编写界面，使用 `@lcui/react-icons` 图标库中的图标来装饰界面。在界面交互上，则通过处理鼠标和键盘事件来响应用户操作。

接下来我们将进一步地开发每一个功能。
