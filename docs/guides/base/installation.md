---
description: LCUI 的安装方法以及版本更新相关说明。
sidebar_position: 0
---

# 安装

## 语义化版本控制 <a id="&#x8BED;&#x4E49;&#x5316;&#x7248;&#x672C;&#x63A7;&#x5236;"></a>

LCUI 在其所有项目中公布的功能和行为都遵循[语义化版本控制](https://semver.org/lang/zh-CN/)。对于未公布的或内部暴露的行为，其变更会描述在[发布说明](https://github.com/lc-soft/LCUI/releases)中。

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

## 从已编译的文件包安装

通常新版本的[发布说明](https://github.com/lc-soft/LCUI/releases)中都会附带已编译的二进制文件包，你可以根据自己的需求下载，然后配置编译器的头文件和库文件的搜索路径以及链接器参数。

以 XMake 为例，将二进制文件包解压到特定的目录内（例如：vendor），然后添加编译和链接配置：

```lua title=xmake.lua
target("myapp")
  add_includedirs("vendor/include")
  add_linkdirs("vendor/lib")
  add_links("lcui")
```
