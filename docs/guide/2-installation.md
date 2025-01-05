# 安装

本章节将为你介绍多种安装方式，帮助你完成 LCUI 项目的设置。

## 先决条件

在开始安装之前，你需要准备以下条件：

- **操作系统：** 推荐使用 Windows。因为 LCUI 主要在 Windows 中开发和测试，所以对 Windows 的支持度更高。
- **终端：** 用于执行命令。
- **文本编辑器:** 推荐使用 [Visual Studio Code](https://code.visualstudio.com/)。
- [Node.js](https://nodejs.org/zh-cn)：JavaScript 运行时环境，用于运行开发工具。
- [XMake](https://xmake.io/#/zh-cn/getting_started?id=%e5%ae%89%e8%a3%85)：C/C++ 构建工具。
- [Git](https://git-scm.com/downloads)：代码库版本管理工具，用于下载和管理代码库。

## 使用命令行工具安装

:::note
本方法适合创建一个新的 LCUI 项目。
:::

首先，打开一个终端（如果你使用的是 [Visual Studio Code](https://code.visualstudio.com/), 则可以打开[集成终端](https://code.visualstudio.com/docs/editor/integrated-terminal)），然后运行以下命令安装 LCUI 的命令行开发工具。

```bash
npm install -g @lcui/cli
```

安装完成后，运行 `lcui create` 命令并指定项目名称。在下面的示例中，我们将使用示例项目名称 `my-lcui-app` 。

```bash
lcui create <项目名称>
```

你应该会看到以下信息：

```text
正在下载项目模板：https://gitee.com/lcui-dev/lcui-quick-start.git
正在为项目初始化 Git 仓库
正在安装依赖项
已成功创建项目 my-lcui-app
使用以下命令开始体验：

 $ cd my-lcui-app
 $ lcui build
 $ xmake run app
```

现在，你已经创建了 LCUI 项目，执行上面信息中给出的命令即可构建和运行它。

## 从源码目录安装

:::note
这种方法适合为已有的项目安装 LCUI，不过该项目使用的构建工具必须是 [XMake](https://xmake.io)。
:::

假设你的项目目录中有个 `vendor` 目录专用于存放第三方库的源码，那么你可以手动[下载 LCUI 的源码包](https://gitee.com/lc-soft/LCUI/repository/archive/develop.zip)然后解压到 vendor 目录中，再将 LCUI 的 xmake.lua 文件包含进来：

```lua title="xmake.lua"
add_rules("mode.debug", "mode.release")
-- highlight-next-line
includes("vendor/LCUI/xmake.lua")

target("app")
  set_kind("binary")
  -- highlight-next-line
  add_deps("lcui")
  add_files("src/*.c")
```

这种方式在需要升级 LCUI 版本的时候比较麻烦，推荐用 Git 子模块代替它：

```sh
git submodule add https://gitee.com/lc-soft/LCUI.git vendor/LCUI
git submodule update --init --recursive
```

在需要更新版本的时候，执行以下命令：

```sh
git submodule update --recursive --remote
```

## 从已编译的文件包安装

:::note
本方法能让你使用自己熟悉的构建工具来管理对 LCUI 库的依赖，但由于 LCUI 的依赖库较多，相关配置可能会比较繁琐。
:::

我们假设你已经熟练掌握一种构建工具，能够配置依赖库的编译参数和链接参数，并能解决常见的编译和链接错误。

首先，访问 [LCUI 的发行版页面](https://gitee.com/lc-soft/LCUI/releases) 下载已编译的文件包，然后解压到特定的目录内，再添加相关编译和链接配置。之后安装 LCUI 的依赖库：

- libyaml
- libpng
- libjpeg
- freetype
- fontconfig (仅在 Linux 系统中使用)
- libx11 (仅在  Linux 系统中使用) 
- libomp
- libxml2

## 有其它建议？

欢迎参与改进《[RFC0003: 构建和安装](../rfc/lcui/build-and-install)》意见征集稿。
