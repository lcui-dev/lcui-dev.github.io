# 创建界面

LCUI 支持使用 XML 描述界面，相比用 C 语言这种编程语言创建界面，无论是编写还是阅读都更简单。

LCUI 对 XML 内容的要求是外层必须有 `<lcui-app>` 标签，界面相关部件的标签必须写在在 `<ui>` 标签内。示例如下：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<lcui-app>
  <ui>
    <!-- 界面相关部件的标签 -->
  </ui>
</lcui-app>
```

## 主界面

主界面是最外层的容器，包含整个界面的所有部件。

在 `<ui>` 标签内添加部件：

```diff
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
    <ui>
+     <w class="app"></w>
    </ui>
  </lcui-app>
```

w 是部件 widget 的简写别名，指定的 class 属性值 app 是用来为该部件添加样式的标识符。

## 头部

头部包含标题、任务数、筛选按钮，它存在的意义在于布局，使其内部的部件与边界间距相同。

在主界面内添加部件：

```diff
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
    <ui>
-     <w class="app"></w>
+     <w class="app">
+       <w class="header"></w>
+     </w>
    </ui>
  </lcui-app>
```

## 标题

在头部添加部件：

```diff
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
    <ui>
      <w class="app">
        <w class="header">
+         <text id="title" class="title" />
        </w>
      </w>
    </ui>
  </lcui-app>
```

标题内容是当前日期，需要在运行时执行相关代码来生成，因此设置 id 属性以便于直接操作它。又由于它属于文本内容，使用 `<text>` 标签来显示文本。

## 工具区

工具区包含任务数和筛选按钮，用于实现将它们两端对齐的布局。


```diff
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
    <ui>
      <w class="app">
        <w class="header">
          <text id="title" class="title" />
+         <w class="tools"></w>
        </w>
      </w>
    </ui>
  </lcui-app>
```

## 任务数

与标题类似，它需要在运行时根据任务列表长度更新内容，那么写法也是类似的：

```diff
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
    <ui>
      <w class="app">
        <w class="header">
          <text id="title" class="title" />
-         <w class="tools"></w>
+         <w class="tools">
+           <text id="count" class="count" />
+         </w>
        </w>
      </w>
    </ui>
  </lcui-app>
```

## 筛选按钮组

筛选按钮组包含 All、Active、Completed 这三个按钮，它的作用除了布局外，还用于事件代理和筛选按钮的操作，因此，为其设置 id 属性。

为了方便在响应点击事件时确定应该切换到哪个状态，每个筛选按钮都有设置 `data-value` 属性，该属性的 `data-` 前缀只是标识它属于附加的数据，并没有其它特殊作用，你也可以命名为 `value`。

```diff
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
    <ui>
      <w class="app">
        <w class="header">
          <text id="title" class="title" />
          <w class="tools">
            <text id="count" class="count" />
+           <w id="filters" class="task-filters">
+             <text class="task-filter" data-value="all">All</text>
+             <text class="task-filter" data-value="active">Active</text>
+             <text class="task-filter" data-value="completed">Completed</text>
            </w>
          </w>
        </w>
      </w>
    </ui>
  </lcui-app>
```

## 输入框

TextEdit 部件提供了文本输入能力，为了能够获取它保存的文本内容，需要为其设置 id 属性。文本框在无内容的时候需要显示 `Add a new task...` 文本，这个可以靠 `placeholder` 属性实现。

```diff
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
    <ui>
      <w class="app">
        <w class="header">
          <text class="title">Todo list</text>
          <w class="tools">
            <text id="count" class="count" />
            <w id="filters" class="task-filters">
              <text class="task-filter" data-value="all">All</text>
              <text class="task-filter" data-value="active">Active</text>
              <text class="task-filter" data-value="completed">Completed</text>
            </w>
          </w>
        </w>
+       <textedit id="input" class="task-input" placeholder="Add a new task..." />
      </w>
    </ui>
  </lcui-app>
```

## 任务列表

任务列表是在运行时创建的，因此只需指定 id 属性和 class 属性。

```diff
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
    <ui>
      <w class="app">
        <w class="header">
          <text class="title">Todo list</text>
          <w class="tools">
            <text id="count" class="count" />
            <w id="filters" class="task-filters">
              <text class="task-filter" data-value="all">All</text>
              <text class="task-filter" data-value="active">Active</text>
              <text class="task-filter" data-value="completed">Completed</text>
            </w>
          </w>
        </w>
        <textedit id="input" class="task-input" placeholder="Add a new task..." />
+       <w id="list" class="task-list" />
      </w>
    </ui>
  </lcui-app>
```
