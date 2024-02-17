# 开始

学习如何创建和构建 LCUI 应用程序。

## 创建新项目

要创建 LCUI 应用程序，先打开你的命令行窗口，使用 [cd](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) 命令进入到你要保存项目的目录，然后运行以下命令：

```terminal
lcui create my-lcui-app
```

执行完毕后，按照命令提示的内容继续操作。

## 浏览项目

在你的代码编辑器中打开该项目的目录，让我们花点时间探讨一下这个项目。

### 目录结构

你会注意到该项目具有以下文件夹结构：

- **`/include`**: 包含头文件。
- **`/src`**: 包含源码。
- **`/src/assets`**: 包含应用程序用到的静态资源文件，例如图片。
- **`/src/components`**: 包含公共组件的源码。
- **`/src/lib`**: 包含基础功能库的源码。
- **`/src/pages`**: 包含各个页面的源码。
- **`/vendor`**: 包含第三方库的源码。
- **`/xmake.lua`**: XMake 的配置文件。
- **`/package.json`**: 项目的配置文件，包含项目的基本信息、脚本、依赖项信息。

## 构建和打包项目

lcui-cli 创建的项目所使用的构建工具是 xmake，运行 `xmake` 命令即可编译整个项目。

如需将已编译的程序打包成压缩包并发布，则可运行以下命令先将文件安装到 dist 目录：

```terminal
xmake install -o dist
```

然后将 dist/bin 目录内的二进制文件复制到 app 目录内，此时 app 目录内的文件就包含应用程序的所需的全部文件，你可以使用 7zip 之类的压缩管理工具打包该目录。
