# 分析需求

按照网页版待办清单程序的展示效果，我们构建的待办清单程序界面应该包含以下内容：

- 标题，显示当前时间
- 任务数量
- All、Active、Completed 三种筛选按钮
- 任务输入框
- 任务列表
  - 状态图标
  - 任务名称
  - 删除图标

界面的布局是：

- 标题独占一行
- 任务数量和三个状态筛选按钮占一行，筛选按钮靠右对齐
- 输入框独占一行
- 每个任务占一行，包含状态图标、名称和删除按钮
- 状态图标和删除图标位于两端且尺寸固定，任务名称在中间，宽度占满剩余空间
- 主界面水平居中、垂直居中

界面的交互效果是：

- 点击 All 时显示全部状态的任务
- 点击 Active 时显示未完成的任务
- 点击 Completed 时显示已完成的任务
- 当前任务总数会随着筛选条件自动更新
- 在输入框中输入文本按回车后，向任务列表追加该任务，并清空输入框
- 点击任务名称左边的状态图标会切换任务状态，已完成是绿色背景的勾，未完成则是圆圈
- 点击任务名称右边的删除图标，会删除该任务

结合上述需求，程序内部记录的任务列表应该包含每个任务的状态和名称。为了满足交互需求，还需要实现任务列表数据的增删操作。
