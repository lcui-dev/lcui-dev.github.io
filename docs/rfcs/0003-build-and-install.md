# 构建和安装

- 开始日期：2023-03-28
- 目标主要版本：3.x
- 参考问题：无
- 实现 PR：无

## 概括

采用新的构建工具 XMake 取代原有的 AutoTool 和 Visual Studio 构建方式，降低构建和使用成本。新增几种基于 XMake 的安装方式说明，并提供多种新的基于 XMake 的依赖包安装方式。

## 基本示例

### 内部开发相关

构建：

```sh
xmake
```

打包：

```sh
xmake package
```

安装到指定目录：

```sh
xmake install -o path/to/your/dir
```

生成 CMakelists.txt：

```sh
xmake project -k cmakelists
```

生成 compile_commands：

```sh
xmake project -k compile_commands
```

子库都有自己的构建配置，可单独构建它们：

```sh
xmake build pandagl
xmake build yutil
xmake build libcss
xmake build libui
xmake build libplatform
```

### 从远程包安装

```lua title=xmake.lua
add_repositories("lcui-repo git@github.com:lcui-dev/xmake-repo.git")
add_requires("lcui", "pandagl", "libcss")

target("lcuiapp")
    add_packages("lcui")

target("imageeditor")
    add_packages("pandagl")

target("cssparser")
    add_packages("libcss")
```

### 从源码目录安装

假设应用程序项目目录中有个 vendor 目录专用于存放第三方库的源码，那么，我们可以手动下载 LCUI 的源码包然后解压到 vendor 目录中，再将 LCUI 的 xmake.lua 包含进来即可：

```lua title=xmake.lua
includes("vendor/LCUI/xmake.lua")

target("app")
  set_kind("binary")
  add_deps("lcui")
```

这种方式在需要升级 LCUI 版本的时候比较麻烦，可改用 git submodule 代替它：

```sh
git submodule add https://gitee.com/lc-soft/LCUI.git vendor/LCUI
git submodule update --init --recursive
```

更新版本：

```sh
git submodule sync --recursive
git submodule update --init --recursive
```

### 从已编译的文件包安装

下载 LCUI 的已编译的文件包，解压到特定的目录内，例如：vendor 目录，然后添加编译和链接配置：

```lua title=xmake.lua
target("myapp")
  add_includedirs("vendor/include")
  add_linkdirs("vendor/lib")
  add_links("lcui")
```

### 直接使用单个源文件

安装 LCUI 就像往项目目录添加源文件一样简单，你可以继续使用你熟悉的工具构建项目，例如使用 gcc：

```sh
# 编译 LCUI
gcc -c lcui.c

# 编译应用程序
gcc -c myapp.c

# 链接
gcc -o myapp myapp.o lcui.o
```

:::note
该安装方式需要解决依赖库的问题，解决方案的研究、设计和实施都比较费时间，因此暂未实现，欢迎参与改进此意见稿。
:::

## 动机

2.x 版本采用的构建工具是 AutoMake 和 VisualStudio，分别用于 Linux、Windows 平台上的构建，而包管理工具是 lcpkg，依赖 Node.js 运行环境和 vcpkg 工具。这些工具不仅增加了编译环境的搭建成本，还增加了项目维护人员的维护成本。因此，应该改用一款跨平台且自带包管理功能的构建工具代替它们。

## 详细设计

在源码根目录下添加 xmake.lua，然后参考 [XMake 文档](https://xmake.io/)完善配置。

## 缺点

需要考虑调整 debian 包的打包流程。

## 备选方案

CMake。不建议采用，无论是中文文档、包管理、配置文件编写体验都不如 XMake，遇到一些使用上的问题还需要花时间搜索资料和验证。
