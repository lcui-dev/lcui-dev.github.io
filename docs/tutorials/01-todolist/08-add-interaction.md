# 添加交互

交互是指用户与计算机程序之间的双向通信过程。它涉及用户通过鼠标、键盘或其他输入设备与程序进行互动，以便执行特定的操作或获取所需的信息。

现在的待办清单程序只是通过图形界面向用户展示一些信息，并不会响应用户的鼠标和按键操作，而 LCUI 的图形界面是由事件驱动的，因此我们需要添加事件处理器来完成交互。

## 初始化

和 main 函数类似，界面相关交互的初始化最好是集中在一个函数中执行。我们可以将任务列表界面的初始化函数命名为 `ui_tasklist_init`，然后补充相关代码：

```c title=src/ui_tasklist.c
#include "ui_tasklist.h"

static tasklist_t *tasklist;
static ui_widget_t *ui_tasklist;

void ui_tasklist_init(ui_widget_t *w, tasklist_t *data)
{
        ui_tasklist = w;
        tasklist = data;
}
```

```c title=src/ui_tasklist.h
#include <ui.h>
#include "tasklist.h"

void ui_tasklist_init(ui_widget_t *w, tasklist_t *data);
```

将传入的部件转存到全局的目的是为了方便后续的函数使用它，因为整个程序中只有一个任务列表。

## 动态创建任务

筛选和新建都需要创建任务部件并插入到列表中，因此定义一个任务部件创建函数：

```c title=src/ui_tasklist.c
ui_widget_t *ui_taskitem_create(task_t *task)
{
        char id[32] = { 0 };
        ui_widget_t *item = ui_create_widget("text");
        ui_widget_t *status = ui_create_widget(NULL);
        ui_widget_t *del = ui_create_widget(NULL);
        ui_widget_t *name = ui_create_widget("text");
        snprintf(id, 32, "%u", task->id);
        ui_text_set_content_w(name, task->name);
        ui_widget_set_attr(item, "data-id", id);
        ui_widget_add_class(item, "task-item");
        if (task->is_completed) == 0) {
                ui_widget_add_class(item, "is-completed");
        }
        ui_widget_add_class(status, "task-status");
        ui_widget_add_class(del, "task-delete");
        ui_widget_append(item, status);
        ui_widget_append(item, name);
        ui_widget_append(item, del);
        return item;
}
```

## 筛选任务列表

由于数据管理模块已经提供了筛选函数，界面层的代码只需要遍历筛选结果然后重新创建任务列表即可。

```c title=src/ui_tasklist.c
void ui_tasklist_filter(ui_widget_t *w, int status)
{
        list_node_t *node;
        list_t filtered_list;
        tasklist_init(&filtered_list);
        tasklist_filter(tasklist, status, &filtered_list);
        ui_widget_empty(ui_tasklist);
        for (list_each(node, &filtered_list)) {
                ui_widget_append(ui_tasklist, ui_taskitem_create(node->data));
        }
        tasklist_destroy(&filtered_list);
}
```

## 响应输入框的按键事件

## 自动更新任务数量
