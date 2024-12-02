# 创建界面

界面由部件组成，部件彼此之间都有关系，这些关系如同一颗树。在实际编程中，这些部件的存储方式也是树形结构。那么，创建界面就是将需要展示的元素组织成树形结构然后用特定的语言描述出来。

LCUI 支持使用 XML 标记语言描述界面，相比用 C 语言这种编程语言创建界面，无论是编写还是阅读都更简单。LCUI 对 XML 内容的要求是第一行必须是 `<?xml version="1.0" encoding="UTF-8" ?>`，最外层必须有 `<lcui-app>` 标签，界面相关部件的标签必须写在在 `<ui>` 标签内。

首先，在 app 目录下新建 `todolist.xml` 文件，内容如下：

```xml title="app/todolist.xml"
<?xml version="1.0" encoding="UTF-8" ?>
<lcui-app>
  <ui>
  </ui>
</lcui-app>
```

然后，在 src 目录内新建 main.c 文件，内容如下：

```c title="src/main.c"
#include <LCUI.h>
#include <LCUI/main.h>

int main(int argc, char **argv)
{
        ui_widget_t *pack;

        lcui_init();
        pack = ui_load_xml_file("todolist.xml");
        if (!pack) {
                return -1;
        }
        ui_root_append(pack);
        ui_widget_unwrap(pack);
        ui_widget_set_title(ui_root(), L"Todo list");
        return lcui_main();
}
```

第一行包含 LCUI 的头文件。第二行的 `LCUI/main.h` 提供了跨平台的入口函数实现代码，让 main 函数始终程序的入口。

在 main 函数中，先是初始化了 LCUI，让 LCUI 的各项功能准备工作。然后加载 xml 文件，对加载结果做判断，无效时返回 -1。之后将加载的部件追加到根部件，由于该部件仅充当容器，其内部的子部件才是我们需要的，还需要调用 `ui_widget_unwrap()` 展开该容器部件以将其内部的子部件追加到根部件内。接着设置根部件的标题，该标题会同步到主窗口上。最后调用 `lcui_main()` 运行主循环，让程序进入持续工作的状态。

结合之前分析的界面需求，界面中的所有元素可被组织成以下树形结构：

- 主界面
  - 标题
  - 任务数
  - 三个状态筛选按钮
  - 输入框
  - 任务列表

看上去非常简单，似乎剩下的工作就是将它转换成 XML 代码。然而根据实际的布局需求、交互需求以及编程便利性上的考虑，这个树形结构还需要调整。接下来将会讲述如何调整树形结构，以及如何使用标签描述每个界面元素。

## 主界面

主界面是最外层的容器，包含整个界面的所有部件。

在 `<ui>` 标签内添加部件：

```diff title="app/todolist.xml"
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
    <ui>
+     <w class="app"></w>
    </ui>
  </lcui-app>
```

w 是部件 widget 的简写别名，指定的 class 属性值 `app` 是用来为该部件添加样式的标识符。

## 头部

头部包含标题、任务数、筛选按钮，它存在的意义在于布局，使其内部的部件与边界间距相同。

在主界面内添加部件：

```diff title="app/todolist.xml"
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

```diff title="app/todolist.xml"
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

```diff title="app/todolist.xml"
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

```diff title="app/todolist.xml"
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

```diff title="app/todolist.xml"
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
+           </w>
          </w>
        </w>
      </w>
    </ui>
  </lcui-app>
```

## 输入框

TextEdit 部件提供了文本输入能力，为了能够获取它保存的文本内容，需要为其设置 id 属性。文本框在无内容的时候需要显示 `Add a new task...` 文本，这个可以靠 `placeholder` 属性实现。

```diff title="app/todolist.xml"
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

任务列表是在运行时创建的，因此 XML 中只声明用于容纳所有任务的容器布局，指定 id 属性是便于操作内容。

```diff title="app/todolist.xml"
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
