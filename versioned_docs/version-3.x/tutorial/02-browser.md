# 浏览器

## 前言

本教程将通过一个简单的仿浏览器界面的程序，向你介绍关于构建图形界面程序的基础知识，掌握这些知识后，你将会对图形界面开发有更加深刻的理解。
<!-- more -->

你可以提前预览我们要写的程序的最终效果，它的源代码已经上传到了 [GitHub](https://github.com/lc-ui/lcui-router-app) 和[码云](https://gitee.com/lc-ui/lcui-router-app)上，你可以试着下载、编译和运行它。如果你看不懂其中的代码，或不知道它是被如何设计出来的，别担心！接下来的教程会一步一步帮助你理解图形界面程序的开发方式。

## 需求分析

相较于其它开发库或框架的示例程序而言，我们开发的程序更加复杂一些，因此，我们有必要在开发前花点时间思考这个程序具体需要什么功能，又该怎么实现这些功能。

以 Chrome 浏览器为参考对象，我们需要实现以下功能：

- 路由导航：能够前进、后退、主页、刷新、输入地址直接跳转，如果未找到与地址匹配的页面则展示 404 页面
- 多标签页：每个标签页都能够独立导航，可以新建和关闭，点击选项卡可切换到对应标签页面
- 示例页面：由于我们开发的程序侧重点在图形界面开发上，不具备网络通信功能，因此需要添加几个示例页面作为浏览对象，来模拟实现 Chrome 浏览器的页面浏览功能。示例页面有：
  - 新标签页：打开新标签后展示的页面，提供其它示例页面的快捷入口
  - 欢迎页：展示简单的内容，作为主页
  - 关于页：展示关于这个程序的名称、图标、版本号等信息
  - 文件页：展示当前目录内的文件列表，包括文件名、修改时间和大小，点击目录后展示该目录内的文件列表
  - 404 页：提示当前页面无法访问，并引导用户返回主页

我们的程序的图形界面需要包含以下元素：

- 选项卡栏：每个选项卡对应一个标签页，选项卡包含图标、页面标题、关闭按钮，最右侧有个新建标签页按钮
- 导航栏：包含前进、后退、刷新和主页这四个导航按钮，以及地址输入框、设置菜单按钮
- 内区域：展示当前浏览的页面的内容

## 设计与实现

由于我们开发的程序的大部分源代码都是用于实现图形界面的，因此，这里主要讲述图形界面上的设计与实现方法。

### 组件化

在研究过 Chrome 浏览器的界面后，我们可以知道它的界面结构如下：

- 主界面
  - 选项卡栏
  - 导航栏
  - 内容区

考虑到每个标签页都有自己的选项卡、导航栏和内容区，我们应该将导航栏和内容区域移入到标签页中，结果如下图所示：

![组件化](02-browser/components.png)

那么，我们需要开发的组件有如下几个：

- 主界面 (Browser)：负责管理和切换标签页，实现选项卡与标签页之间的通信
- 选项卡 (FrameTab)：负责展示对应标签页的标题和状态，在点击关闭按钮后通知主界面销毁标签页
- 标签页 (Frame)：负责呈现导航栏和页面内容，实现路由导航功能以及界面交互

按照常规做法，把标签页拆分成导航栏和内容区似乎会更好一些，但考虑到组件之间的通信成本和开发成本，组件化到标签页已经足够，因为标签页除了导航栏外已经没有值得组件化的东西了。选项卡栏亦是如此。

### 布局

接下来我们再试着找出界面元素的排列规则：

![布局](02-browser/layout.png)

如上图所示，红色边框标记的元素是横向布局，而绿色边框标记的元素则是纵向布局。从中可知，主界面布局方向为纵向，选项卡栏和标签页从上到下排列，选项卡栏高度固定，标签页面高度自动占满剩余空间。标签页内的导航栏和内容区也是如此。导航栏中的元素布局方向为横向，按钮宽度固定，地址栏输入框的宽度自动占满剩余空间。

### 数据结构

**如何存储多个标签页的数据？**

正常情况下，标签页数量是比较少的，对读写性能要求很低，因此可以选择用链表来存放。

**标签页的数据应该包含什么？**

为了便于管理标签页数据、展示页面标题和状态、实现组件间的通信，标签页的数据应该包含编号、标题、状态、标签页和主界面的 UI 元素对象的引用。伪代码如下：

```c
struct Page {
    number id;
    string title;
    boolean loading;
    UIElement tab;
    UIElement frame;
    UIElement browser;
};
```

## 选型

在准备开发前，我们可以花一些时间调查和研究开源社区上是否有其他开发者开发的库可供使用，选择合适的开发库有助于提升开发效率和降低开发成本。

**图形界面开发库：**

[LCUI](https://github.com/lc-soft/LCUI)，C 语言编写的图形界面开发库，支持 CSS 样式和 Flex 布局。以它现有的功能足以实现我们的程序的图形界面。

**路由管理器：**

[LCUI Router](https://github.com/lc-soft/lcui-router)，LCUI 的官方路由管理器，用于解决 LCUI 应用内多视图的切换和状态管理问题。我们可以用它实现浏览器的路由导航功能。

**组件库：**

[LC Design](https://github.com/lc-ui/lc-design)，专为 LCUI 设计的组件库，提供基础排版样式、布局系统和实用工具 CSS 类，以及图标、按钮、下拉菜单等组件。

**开发工具：**

- [LCPkg](https://github.com/lc-soft/lcpkg) —— 包管理工具，可以用来下载安装 LCUI 及相关库的二进制包。
- [LCUI CLI](https://github.com/lc-ui/lcui-cli) —— LCUI 的命令行开发工具，用于简化 LCUI 应用程序项目的开发。
- [CMake](https://www.cmake.org) —— 跨平台构建工具，用于构建我们的程序。

## 开发

### 准备开发环境

> 注：这里假设你使用的是 Windows 系统，如果不是，请自行处理环境搭建和编译上的问题

在开发前，你需要在你的计算机上安装以下软件：

- [Node.js](https://nodejs.org/en/)
- [CMake](https://cmake.org/download/)
- [Git](https://git-scm.com/downloads)

之后，打开命令行窗口，输入以下命令安装 lcui-cli 和 lcpkg：

```bash
npm install -g @lcui/cli lcpkg
```

设置 lcpkg，让它安装相关依赖工具：

```bash
lcpkg setup
```

### 创建项目

使用 lcui 命令创建一个名为 lcui-router-app 的项目：

```bash
lcui create lcui-router-app
```

这个命令会替你完成以下工作：

- 初始化 git 代码库
- 安装必要的依赖工具
- 创建适合 LCUI 应用程序项目的目录结构
- 添加最小 LCUI 应用程序的源文件
- 添加 CMake 和 XMake 的配置文件

注意，受限于国内的网络环境，部分资源下载比较慢，建议先使用以下命令添加国内源：

```bash
npm config set registry https://registry.npm.taobao.org
set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/
```

进入项目目录，安装 lcui-router 和 lc-design 依赖包：

```bash
cd lcui-router-app
lcpkg install github.com/lc-soft/lcui-router github.com/lc-ui/lc-design  --arch x64
```

修改 `CMakeLists.txt.in` 文件，添加依赖项：

```diff
  ...
  if(WIN32)
      set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} /SUBSYSTEM:WINDOWS")
      target_link_libraries(
          app
          AppUI
          AppUIViews
          AppUIComponents
          AppLib
          optimized LCUI
          optimized LCUIMain
+         optimized LCUIRouter
+         optimized LCDesign
          debug "${LCPKG_DIR}/debug/lib/LCUI.lib"
          debug "${LCPKG_DIR}/debug/lib/LCUIMain.lib"
+         debug "${LCPKG_DIR}/debug/lib/LCUIRouter.lib"
+         debug "${LCPKG_DIR}/debug/lib/LCDesign.lib"
      )
  else()
      target_link_libraries(
          app
          AppUI
          AppUIViews
          AppUIComponents
          AppLib
          debug "${LCPKG_DIR}/debug/lib/LCUI"
+         debug "${LCPKG_DIR}/debug/lib/LCUIRouter"
+         debug "${LCPKG_DIR}/debug/lib/LCDesign"
          optimized LCUI
+         optimized LCUIRouter
+         optimized LCDesign
      )
  endif(WIN32)
  ...
```

修改 `app/assets/views/app.xml` 文件，引入 LC Design 组件库的 CSS 样式文件：

```diff
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
+   <resource type="text/css" src="assets/stylesheets/lc-design.css"/>
    <resource type="text/css" src="assets/stylesheets/app.css"/>
    <ui>
      <resource type="text/xml" src="assets/views/home.xml"/>
    </ui>
  </lcui-app>
```

编辑 `src/ui.c` 文件，添加 LC Design 组件库的初始化代码：

```diff
  #include <LCUI.h>
+ #include <LCDesign.h>
  #include <LCUI/gui/widget.h>
  #include <LCUI/gui/builder.h>
  #include "ui/views/browser.h"
  #include "version.h"
  #include "ui.h"

  int UI_Init(void)
  {
          LCUI_Widget root;
          LCUI_Widget wrapper;
          LCUI_Widget browser;

          LCUI_Init();
+         LCDesign_Init();
          UI_InitComponents();
          UI_InitViews();
          wrapper = LCUIBuilder_LoadFile("assets/views/app.xml");
          if (!wrapper) {
                return -1;
         }
  ...
```

更新构建配置：

```bash
npm run configure
```

运行这个项目，看看效果：

```bash
npm start
```

### 配置路由

新建 config 目录，在里面新建一个 LCUI Router 的路由配置文件，命名为 `router.js`，内容如下：

```js
module.exports = [
  {
    name: 'home',
    path: '/',
    component: 'home'
  },
  {
    name: 'welcome',
    path: '/welcome',
    component: 'welcome'
  },
  {
    name: 'help',
    path: '/help',
    component: 'help'
  },
  {
    path: '/file',
    component: 'file'
  },
  {
    name: 'file',
    path: '/file/*',
    component: 'file'
  },
  {
    path: '*',
    component: 'notfound'
  }
]
```

配置文件采用 JavaScript 语言来描述是为了便于编写和维护，免去用 C 代码来配置 LCUI Router 的麻烦。该文件内容描述了路径 (Path) 与组件 (Component) 的映射关系，LCUI Router 会在路由变化时渲染与路径匹配的组件。要让它能够在我们的程序中生效，还需要使用以下命令将它转译为 C 代码：

```bash
lcui compile router
```

该命令会在 `src/lib` 目录中生成 `router.c` 和 `router.h` 文件，并在 `src/ui/components.c` 文件中追加 `router-link` 和 `router-view` 组件的注册代码。

### 添加界面组件

lcui-cli 提供了视图 (View) 和组件 (Widget) 两种生成器，视图与组件的区别主要在于复杂度和可复用性，你可以根据实际情况来选择。

首先，我们使用以下命令添加视图：

```bash
# 浏览器主界面
lcui generate view browser

# 标签页
lcui generate view frame

# 新标签页的引导页面
lcui generate view home

# 欢迎页面
lcui generate view welcome

# 文件页面
lcui generate view file

# 关于页面
lcui generate view help

# 404 页面
lcui generate view notfound
```

然后，添加组件：

```bash
# 选项卡
lcui generate widget frame-tab
```

### 实现主界面

在开始前，我们需要先删除 `app/assets/views/browser.xml` 文件，因为主界面的内容都是在运行时动态生成的，并不需要借助 xml 文件来描述。

然后，编辑 `app/assets/views/app.xml` 文件，添加浏览器视图：

```diff
  <?xml version="1.0" encoding="UTF-8" ?>
  <lcui-app>
    <resource type="text/css" src="assets/stylesheets/lc-design.css"/>
    <resource type="text/css" src="assets/stylesheets/app.css"/>
    <ui>
-     <resource type="text/xml" src="assets/views/home.xml"/>
+     <browser id="browser" />
    </ui>
  </lcui-app>
```

编辑 `src/ui.c` 文件，添加主界面的操作代码，让我们的程序在启动时打开一个新标签页。

```diff
  ...
  int UI_Init(void)
  {
          LCUI_Widget root;
          LCUI_Widget wrapper;
+         LCUI_Widget browser;

          LCUI_Init();
          LCDesign_Init();
          UI_InitComponents();
          UI_InitViews();
          wrapper = LCUIBuilder_LoadFile("assets/views/app.xml");
          if (!wrapper) {
                  return -1;
          }
          root = LCUIWidget_GetRoot();
+         browser = LCUIWidget_GetById("browser");
+         BrowserView_Active(browser, BrowserView_Load(browser, "/"));
+         Widget_SetTitleW(root, L"Browser demo");
          Widget_Append(root, wrapper);
          Widget_Unwrap(wrapper);
          return 0;
  }
```

考虑到大量的代码片段会影响文章的阅读体验，从这里开始，我们将尽量只关注功能的大致实现原理，具体实现代码请查看相关文件。

主界面有以下功能：

- 初始化：构造标签页链表、选项卡栏、标签页的新建按钮
- 销毁：释放标签页链表占用的资源
- 加载：创建一个标签页示例，并为之绑定相关事件处理器
- 激活：将指定标签页设为当前展示的标签页面
- 关闭：关闭指定标签页，并释放它占用的资源

为了实现与用户的交互，我们需要添加以下事件处理器：

- PageTabClose: 在点击页面选项卡的关闭按钮时，关闭对应的标签页
- PageLoad: 在页面加载时，将选项卡的状态切换为加载中
- PageLoaded: 在页面加载完毕时，将页面的标题更新到选项卡上，并取消选项卡的加载中状态
- CommandQuit: 关闭主程序
- CommandOpenNewTab: 创建新的标签页面

主界面的功能实现后，我们再设计它的布局和样式:

- 主界面采用 flex 布局，方向为纵向 (column)，高度等于根部件的高度
- 选项卡栏采用 flex 部件，方向为默认的横向 (row)
- 标签页新建按钮的采用固定的尺寸，禁止拉伸和收缩

相关文件：

- [src/ui/views/browser.c](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/browser.c)
- [src/ui/views/browser.h](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/browser.h)
- [src/ui/stylesheets/views/_browser.scss](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/stylesheets/views/_browser.scss)

### 实现选项卡组件

选项卡组件由图标、文字和关闭按钮组成，在标签页处于加载中状态的时候，我们可以用 LC Design 组件库提供的 Spinner 组件来表达。

该组件提供以下方法：

- SetActive: 设置是否为激活状态，本质上是增加/移除 active 类
- SetLoading: 设置是否为加载中状态，本质上是增加/移除 loading 类
- SetText: 设置文本内容

布局与样式：

- 最大宽度为容器内容区宽度的 25%，最小宽度 60px
- 采用 flex 布局，文字宽度自动占满剩余空间，其它元素宽度固定
- 如果处于加载中状态，显示 Spinner 组件并隐藏图标，否则显示图标并隐藏 Spinner 组件

相关文件：

- [src/ui/components/frame-tab.c](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/frame-tab.c)
- [src/ui/components/frame-tab.h](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/frame-tab.h)
- [src/ui/stylesheets/components/_frame-tab.scss](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/stylesheets/views/_frame-tab.scss)

### 实现标签页

LCUI Router 提供了 `router-view` 组件用于渲染与当前路由匹配的组件，我们可以将它作为标签页的内容区域，这样我们只需要为导航栏添加相应的事件处理器，然后调用 LCUI Router 的接口来实现路由导航功能。

标签页面的功能有：

- 初始化：创建路由管理器实例，添加路由监听器，构造导航按钮、地址输入框和设置菜单
- 销毁：销毁路由管理器实例
- 加载：导航至指定的路径
- 更新导航栏：根据路由管理器实例中记录路由位置，更新前进和后退按钮的禁用状态

事件处理器：

- BtnBackClick: 在后退按钮被点击时，导航至上一个页面
- BtnForwardClick: 在前进按钮被点击时，导航至下一个页面
- BtnRefreshClick: 在刷新按钮被点击时，刷新当前页面
- BtnHomeClick: 在主页按钮被点击时，导航至主页
- InputKeyDown: 在地址输入框接受按键输入时，如果按的是回车键，则导航至该路径
- RouteUpdate：在当前路由更新时，将路由的路径更新到地址输入框，并触发 PageLoad 事件让主界面更新选项卡
- CommandOpenNewTab: 通知主界面打开新标签页
- CommandQuit: 通知主界面退出程序
- OpenHelp: 导航至关于页面

样式与布局：

- 标签页采用 flex 布局，方向为纵向 (column)，自动占满剩余空间
- 导航栏采用 flex 布局，高度固定，导航按钮尺寸固定，地址输入框宽度自动占满剩余空间

相关文件：

- [src/ui/views/frame.c](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/frame.c)
- [src/ui/views/frame.h](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/frame.h)
- [src/ui/stylesheets/views/_frame.scss](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/stylesheets/views/_frame.scss)
- [src/ui/stylesheets/components/_navbar.scss](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/stylesheets/components/_navbar.scss)

### 实现新标签页面

新标签页面提供欢迎页、关于页、文件浏览页的快捷入口，效果与 Chrome 浏览器一致：

![新标签页](02-browser/newtab.png)

编辑 `app/assets/views/home.xml` 文件，添加以下内容：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<lcui-app>
  <ui>
    <w class=" container">
      <w class="v-home__cards d-flex justify-content-center align-items-center">
        <router-link class="v-home__card" to="/welcome">
          <icon class="v-home__card-icon text-pink" name="emoticon-cool-outline" />
          <text class="v-home__card-title">Welcome!</text>
        </router-link>
        <router-link class="v-home__card" to="/file">
          <icon class="v-home__card-icon text-orange" name="folder-search" />
          <text class="v-home__card-title">File</text>
        </router-link>
        <router-link class="v-home__card" to="/help">
          <icon class="v-home__card-icon text-blue" name="help-box" />
          <text class="v-home__card-title">About</text>
        </router-link>
      </w>
      </w>
  </ui>
</lcui-app>
```

编辑 `src/ui/views/home.c` 文件，用以下内容覆盖：

```c
#include <LCUI.h>
#include <LCUI/gui/widget.h>
#include <LCUI/gui/builder.h>
#include <LCUI/timer.h>
#include "home.h"

static LCUI_WidgetPrototype home_proto;

static void HomeView_OnTimer(void *arg)
{
        LCUI_WidgetEventRec e;

        LCUI_InitWidgetEvent(&e, "PageLoaded");
        e.cancel_bubble = FALSE;
        Widget_TriggerEvent(arg, &e, NULL);
}

static void HomeView_OnInit(LCUI_Widget w)
{
        LCUI_Widget wrapper;

        wrapper = LCUIBuilder_LoadFile("assets/views/home.xml");
        if (wrapper) {
                Widget_Append(w, wrapper);
                Widget_Unwrap(wrapper);
        }
        Widget_AddData(w, home_proto, 0);
        Widget_AddClass(w, "v-home");
        Widget_SetTitleW(w, L"New tab");
        LCUI_SetTimeout(0, HomeView_OnTimer, w);
}

void UI_InitHomeView(void)
{
        home_proto = LCUIWidget_NewPrototype("home", NULL);
        home_proto->init = HomeView_OnInit;
}
```

> 注：该页面的代码同样适用于关于页面、欢迎页面、404 页面，在下面的教程中将不再重复说明，你只需要复制粘贴这段代码到对应的文件然后做点修改即可。

新标签页面由 `home` 组件呈现，与该组件绑定的路径是 `/`，当导航到该路径时 LCUI Router 会将新标签页面挂载到 `router-view` 组件内。

为了通知主界面当前页面已经加载完成，我们在 `home` 组件初始化时创建一个定时器，等下一帧更新开始时触发 PageLoaded 事件。如果你想让选项卡中的 Spinner 组件的转圈动画多转一段时间，可以将定时器的超时时间设长一点。

样式与布局：

- 页面采用 flex 布局，高度与内容区域相同，内部元素垂直居中
- 容器采用 flex 布局，最大宽度为四个卡片的宽度，内部元素水平居中
- 卡片尺寸固定，从上到下分别为页面的图标和标题

相关文件：

- [src/ui/views/home.c](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/home.c)
- [src/ui/views/home.h](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/home.h)
- [src/ui/stylesheets/views/_home.scss](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/stylesheets/views/_home.scss)
- [app/assets/views/home.xml](https://github.com/lc-ui/lcui-router-app/blob/master/app/assets/views/home.xml)

### 实现文件浏览页面

其它示例页面的内容都是静态的，如果我们开发的程序的功能只是在这些页面之间切换的话，未免有些过于简单，为了进一步展示图形界面编程的例子，并充分利用 LCUI Router 的特性，我们有必要开发一个更为复杂的页面，而文件浏览页面恰好是最为合适的选择。

以 Chrome 浏览器的文件浏览页面作为参考对象：

![文件浏览](02-browser/files.png)

页面标题包含了当前目录的路径，文件列表项由图标、文件名、大小和日期组成，在点击文件名后会跳转到该文件路径，如果是目录，则会渲染该目录的文件列表。

对于文件列表的呈现，我们可以在视图初始化后遍历当前路径下的文件列表，然后获取它们的名称、大小和修改日期。由于文件操作比较耗时且容易阻塞 UI 线程而导致界面卡顿，我们应该将这些操作放在工作线程上执行，等文件列表生成后再转到主线程上渲染。

文件名点击跳转功能可以用 LCUI Router 提供的 `router-link` 组件来实现。在构造文件列表项时，构造 `router-link` 组件来呈现文件名，然后将它的 `to` 属性设为目录路径，这样在点击文件名后 `router-link` 组件会自动导航到该路径，从而使得位于标签页内容区内的 `router-view` 组件响应路由更新并重新渲染文件浏览页面。

文件浏览页面的功能有：

- 初始化：绑定 ready 事件，等视图准备完毕后再继续下一步
- 准备完毕：读取当前路由中通配符匹配的路径，将它作为当前浏览的目录路径，然后将文件列表的加载任务发送到工作线程
- 加载文件列表：遍历当前目录下的文件，获取文件信息，然后构造文件列表项，在遍历完后，发送渲染任务到 UI 线程
- 渲染文件列表：将生成的文件列表追加到视图中，并触发 PageLoaded 事件通知主界面当前标签页已加载完毕

布局与样式：

- 文件列表项采用 flex 布局
- 文件名宽度占满剩余空间，文件大小和修改时间的为固定宽度
- 如果文件列表项是目录，则在 hover 时会高亮文件名

相关文件：

- [src/ui/views/file.c](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/file.c)
- [src/ui/views/file.h](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/file.h)
- [src/ui/stylesheets/views/_file.scss](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/stylesheets/views/_file.scss)

### 实现关于页面

Chrome 浏览器的关于页面展示了它的名称、版本号、帮助链接、版权声明：

![关于页](02-browser/about.png)

lcui-cli 为我们创建的项目已经预置了用于展示程序信息的 about 组件，我们只需要在 help.xml 文件中引入它即可，代码如下：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<lcui-app>
  <ui>
    <w class="container">
      <text class="v-help__title">About this app</text>
      <about />
    </w>
  </ui>
</lcui-app>
```

相关文件：

- [src/ui/views/help.c](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/help.c)
- [src/ui/views/help.h](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/views/help.h)
- [src/ui/stylesheets/views/_help.scss](https://github.com/lc-ui/lcui-router-app/blob/master/src/ui/stylesheets/views/_help.scss)
- [app/assets/views/help.xml](https://github.com/lc-ui/lcui-router-app/blob/master/app/assets/views/help.xml)


### 实现欢迎页面和 404 页面

欢迎页面和 404 页面是纯信息展示页面，与其它页面类似，内容可由你自由发挥，这里就不再详细说明了。

## 完成

至此，你已经完成了第一个基于 LCUI 的图形界面程序！你已经了解了 LCUI 的基础知识：组件、SCSS 和 XML 语法。你还学习了多个视图如何切换，以及组件如何相互通信。

接下来我们运行以下命令来更新构建配置：

```bash
npm run configure
```

构建并运行程序，体验一下最终效果。

```bash
npm start
```

如果一切正常的话，程序的运行效果会是这样：

[![LCUI Router App](02-browser/lcui-router-app.gif "LCUI Router App")](./02-browser/lcui-router-app.gif)

## 结语

如果你发现这篇文章有错别字、病句，或者某些内容令人费解，可以在 [GitHub](https://github.com/lc-soft/lc-soft.io/tree/master/_posts) 上改进此文章。
