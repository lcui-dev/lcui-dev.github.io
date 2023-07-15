# 创建项目

## 环境需求

- [Git](https://git-scm.com/download/)：版本管理工具
- [XMake](https://xmake.io/#/zh-cn/?id=%e5%ae%89%e8%a3%85)：构建工具

:::note
本教程假定你的计算机上已经安装了构建 C/C++ 项目所需的环境
:::

:::note
本教程假定你已经知道什么是命令行、如何打开命令行窗口、如何在窗口内执行命令
:::

## 下载

使用 Git 下载示例项目的代码库：

```sh
git clone https://github.com/lcui-dev/lcui-quick-start.git

# 或改用国内的源
git clone https://gitee.com/lcui-dev/lcui-quick-start.git
```

## 安装和构建

进入项目源码目录后，使用 XMake：

```sh
xmake
```

之后 XMake 会提示是否安装依赖包，安装完后会开始构建。

## 运行

用 XMake 的快捷命令：

```sh
xmake run app
```

如果一切正常，你会看到这个示例项目的运行效果。
