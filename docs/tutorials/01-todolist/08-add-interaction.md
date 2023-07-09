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

之后修改在 main.c 中增加调用代码：

```diff title=src/main.c
+ #include "ui_tasklist.h"
  ...
+ static tasklist_t tasks;
  ...
  int main(int argc, char **argv)
  {
  ...
+         ui_tasklist_init(ui_get_widget("list"), &tasks);
          return lcui_main();
  }
```

:::note
将传入的部件转存到全局的目的是为了方便后续的函数使用它，因为整个程序中只有一个任务列表。
:::

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
        if (task->is_completed) {
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

## 追加任务

先更新数据，后更新部件：

```c title=src/ui_tasklist.c
void ui_tasklist_append(const wchar_t *name, bool is_completed)
{
        ui_widget_append(ui_tasklist, ui_taskitem_create(tasklist_append(
                                          tasklist, name, is_completed)));
}

```

```c title=src/ui_tasklist.h
void ui_tasklist_append(const wchar_t *name, bool is_completed);
```

## 筛选任务列表

由于数据管理模块已经提供了筛选函数，界面层的代码只需要遍历筛选结果然后重新创建任务列表即可。

```c title=src/ui_tasklist.c
void ui_tasklist_filter(int status)
{
        list_node_t *node;
        tasklist_t filtered_list;
        tasklist_init(&filtered_list);
        tasklist_filter(tasklist, status, &filtered_list);
        ui_widget_empty(ui_tasklist);
        for (list_each(node, &filtered_list)) {
                ui_widget_append(ui_tasklist, ui_taskitem_create(node->data));
        }
        tasklist_empty(&filtered_list);
}
```

```c title=src/ui_tasklist.h
void ui_tasklist_filter(int status);
```

## 更新标题

定义标题更新函数，获取当前时间，将其转换成字符串，然后更新到部件中。

```c title=src/main.c
void update_title(void)
{
        char str[64];
        time_t t = time(NULL);
        struct tm *tm = localtime(&t);

        strftime(str, 64, "%a %b %d %Y", tm);
        ui_text_set_content(ui_get_widget("title"), str);
}
```

增加头文件包含和函数调用：

```diff title=src/main.c
+ #include <time.h>
  ...
  int main(int argc, char **argv)
  {
  ...
+         update_title();
          return lcui_main();
  }
```

## 更新任务数量

定义任务数量更新函数，将当前的任务总数转换成文本，然后更新到部件中。

```c title=src/main.c
void update_count(void)
{
        wchar_t text[32];

        swprintf(text, 32, tasks.length > 1 ? L"%u tasks" : L"%u task",
                 tasks.length);
        ui_text_set_content_w(ui_get_widget("count"), text);
}
```

更新初始数量：

```diff title=src/main.c
  ...
  int main(int argc, char **argv)
  {
  ...
+         update_count();
          return lcui_main();
  }
```

在后续的增加和删除任务操作中，都需要调用该函数。

## 点击状态图标切换状态

定义点击事件处理函数，先找到事件目标所属任务部件，然后获取 id 字符串，将其转换成 int 类型后再更新任务列表中的对应任务状态。

```c title=src/ui_tasklist.c
void ui_tasklist_on_click(ui_widget_t *w, ui_event_t *e, void *arg)
{
        int id;
        const char *id_str;
        task_t *task;
        ui_widget_t *item;
        ui_event_t ev;

        // 找到当前事件目标所属的任务部件
        for (item = e->target; !ui_widget_has_class(item, "task-item");
             item = item->parent)
                ;
        id_str = ui_widget_get_attr(item, "data-id");
        if (!id_str || sscanf(id_str, "%d", &id) != 1) {
                return;
        }
        if (ui_widget_has_class(e->target, "task-status")) {
                task = tasklist_find(tasklist, id);
                if (task != NULL) {
                        task->is_completed = !task->is_completed;
                        if (task->is_completed) {
                                ui_widget_remove_class(item, "is-completed");
                        } else {
                                ui_widget_add_class(item, "is-completed");
                        }
                }
        } else if (ui_widget_has_class(e->target, "task-delete")) {
                ui_widget_remove(item);
                tasklist_remove(tasklist, id);
                ui_event_init(&ev, "update");
                ui_widget_emit_event(item->parent, ev, NULL);
        }
}
```

将之与 click 事件绑定。

```diff title=src/ui_tasklist.c
  void ui_tasklist_init(ui_widget_t *w, tasklist_t *data)
  {
          ui_tasklist = w;
          tasklist = data;
+         ui_widget_on(w, "click", ui_tasklist_on_click, NULL);
  }
```

## 点击 X 图标删除任务

流程和状态图标的一样， 因此复用 `ui_tasklist_on_click()`，在里面添加任务部件和数据的删除代码。

```diff title=src/ui_tasklist.c
  void ui_tasklist_on_click(ui_widget_t *w, ui_event_t *e, void *arg)
  {
          int id;
          const char *id_str;
          task_t *task;
          ui_widget_t *item;
+         ui_event_t ev;

          if (ui_widget_has_class(e->target, "task-status")) {
  ...
-         }
+         } else if (ui_widget_has_class(e->target, "task-delete")) {
+                 ui_widget_remove(item);
+                 tasklist_remove(tasklist, id);
+                 ui_event_init(&ev, "update");
+                 ui_widget_emit_event(item->parent, ev, NULL);
+         }
  }
```

删除任务后，触发 update 事件以通知主界面更新任务数量。主界面这边需要再添加 update 事件绑定：

```diff title=src/main.c
  ...
  int main(int argc, char **argv)
  {
  ...
          ui_root_append(pack);
          ui_widget_unwrap(pack);
          ui_widget_set_title(ui_root(), L"Todo list");
          ui_tasklist_init(ui_get_widget("list"), &tasks);
          ui_widget_on(ui_get_widget("input"), "keydown", on_input_keydown, NULL);
          ui_widget_on(ui_get_widget("filters"), "click", on_filter_click, NULL);
+         ui_widget_on(ui_get_widget("list"), "update",
+                      (ui_event_handler_t)update_count, NULL);
  ...
          return lcui_main();
  }
```
## 输入框内按下回车键添加新任务

定义按键事件处理函数，当按下的是回车键时，获取输入框的内容，将其创建为任务，然后添加到任务列表中。

```c title=src/main.c
void on_input_keydown(ui_widget_t *w, ui_event_t *e, void *arg)
{
        wchar_t name[256];

        if (e->key.code == KEY_ENTER) {
                ui_textedit_get_text_w(w, 0, 255, name);
                ui_tasklist_append(name, false);
                ui_textedit_clear_text(w);
                update_count();
        }
}
```

调用 `ui_widget_on()` 为输入框添加按键事件绑定处理函数。

```diff title=src/main.c
  ...
  int main(int argc, char **argv)
  {
  ...
+         ui_widget_on(ui_get_widget("input"), "keydown", on_input_keydown, NULL);
          return lcui_main();
  }
```

## 点击筛选按钮筛选任务列表

定义筛选按钮的点击事件处理函数，根据事件目标的 `data-value` 属性值来筛选任务列表，然后更新任务数量和按钮状态，其中的按钮状态更新方法是遍历每个按钮，移除其它筛选按钮的激活状态，给当前按钮添加激活状态。

```c title=src/main.c
void on_filter_click(ui_widget_t *w, ui_event_t *e, void *arg)
{
        const char *status = ui_widget_get_attr(e->target, "data-value");

        if (status == NULL) {
                return;
        }
        if (strcmp(status, "active") == 0) {
                ui_tasklist_filter(0);
        } else if (strcmp(status, "completed") == 0) {
                ui_tasklist_filter(1);
        } else {
                ui_tasklist_filter(3);
        }
        update_count();
        ui_widget_each(ui_get_widget("filters"), ui_widget_remove_class,
                       (void *)"is-active");
        ui_widget_add_class(e->target, "is-active");
}
```

在 `main()` 函数中将该函数与 `click` 事件绑定。

```diff title=src/main.c
  ...
  int main(int argc, char **argv)
  {
  ...
          ui_root_append(pack);
          ui_widget_unwrap(pack);
          ui_widget_set_title(ui_root(), L"Todo list");
          ui_tasklist_init(ui_get_widget("list"), &tasks);
          ui_widget_on(ui_get_widget("input"), "keydown", on_input_keydown, NULL);
+         ui_widget_on(ui_get_widget("filters"), "click", on_filter_click, NULL);
  ...
          return lcui_main();
  }
```

## 预添加几个任务

调用 `tasklist_append()` 函数往任务列表添加几条任务：

```diff title=src/main.c
+ #include <time.h>
  ...
  int main(int argc, char **argv)
  {
  ...
+         tasklist_append(&tasks, L"Download LCUI source code", true);
+         tasklist_append(&tasks, L"Build LCUI", true);
+         tasklist_append(&tasks, L"Read LCUI tutorials", false);
+         tasklist_append(&tasks, L"Create my LCUI application", false);
+
          ui_root_append(pack);
          ui_widget_unwrap(pack);
          ui_widget_set_title(ui_root(), L"Todo list");
          ui_tasklist_init(ui_get_widget("list"), &tasks);
          ui_widget_on(ui_get_widget("input"), "keydown", on_input_keydown, NULL);

          update_title();
          update_count();
          return lcui_main();
  }
```
