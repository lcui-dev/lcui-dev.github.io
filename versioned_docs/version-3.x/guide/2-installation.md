# 安装

有多种方法安装 LCUI，但在此之前你需要安装以下工具：

- [XMake](https://xmake.io/#/zh-cn/getting_started?id=%e5%ae%89%e8%a3%85)
- [Git](https://git-scm.com/downloads)

## 从源码目录安装

假设应用程序项目目录中有个 vendor 目录专用于存放第三方库的源码，那么我们可以手动下载 LCUI 的源码包然后解压到 vendor 目录中，再将 LCUI 的 xmake.lua 包含进来即可：

```lua title="xmake.lua"
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

## 从已编译的文件包安装

下载 LCUI 的已编译的文件包，解压到特定的目录内，例如：vendor 目录，然后添加编译和链接配置：

```lua title="xmake.lua"
target("myapp")
  add_includedirs("vendor/include")
  add_linkdirs("vendor/lib")
  add_links("lcui")
```

## 有其它建议？

欢迎参与改进《[RFC0003: 构建和安装](../rfc/lcui/build-and-install)》意见征集稿。
