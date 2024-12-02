# 添加数据管理

添加 src/tasklist.c 文件用于存放任务列表数据的管理代码，添加 src/tasklist.h 文件存放公共函数声明。

```c title="src/tasklist.c"
#include "tasklist.h"
#include <stdlib.h>
```

```c title="src/tasklist.h"
#include <stdbool.h>
#include <yutil.h>
```

## 定义类型

```c title="src/tasklist.h"
typedef struct task_t {
        int id;
        bool is_completed;
        wchar_t *name;
} task_t;

typedef list_t tasklist_t;
```

## 初始化

直接调用 `list_create()` 函数即可。

```c title="src/tasklist.c"
void tasklist_init(list_t *list)
{
        list_create(list);
}
```

```c title="src/tasklist.h"
void tasklist_init(list_t *list);
```

## 追加

```c title="src/tasklist.c"
task_t *tasklist_append(tasklist_t *list, const wchar_t *name,
                        bool is_completed)
{
        static int id = 1;
        task_t *task = malloc(sizeof(task_t));

        task->id = id++;
        task->name = wcsdup(name);
        task->is_completed = is_completed;
        return task;
}

```

```c title="src/tasklist.h"
task_t *tasklist_append(tasklist_t *list, const wchar_t *name,
                        bool is_completed);
```

局部变量 id 用于给每个任务分配自增的 id，自增方式就是简单的 `id++`。使用 static 关键字修饰 id 是为了让它在函数执行完后仍保留值，下次执行函数时能继续自增，而不是始终从 1 开始自增。

函数返回值类型是 `task_t`，这样设计可让界面层的代码拿到新建的任务数据去更新界面。

## 更新

更新操作由查找和修改组成，其中的修改操作仅仅是修改任务的状态，专为这种场景而为函数增加参数的话有点过度设计了，因此，只实现查找功能即可。

```c title="src/tasklist.c"
task_t *tasklist_find(tasklist_t *list, int id)
{
        task_t *task;
        list_node_t *node;

        for (list_each(node, list)) {
                task = node->data;
                if (task->id == id) {
                        return task;
                }
        }
        return NULL;
}
```

```c title="src/tasklist.h"
task_t *tasklist_find(tasklist_t *list, int id);
```
## 删除

先遍历任务列表，找到指定 id 的任务，然后调用 list 的删除函数。

```c title="src/tasklist.c"
void task_destroy(task_t *task)
{
        free(task->name);
        free(task);
}

bool tasklist_remove(tasklist_t *list, int id)
{
        list_node_t *node;

        for (list_each(node, list)) {
                if (((task_t*)node->data)->id == id) {
                        list_delete_node(list, node);
                        task_destroy(node->data);
                        return true;
                }
        }
        return false;
}
```

```c title="src/tasklist.h"
bool tasklist_remove(tasklist_t *list, int id);
```

定义 `task_destroy()` 函数是为了统一任务列表的删除和清空函数中的任务销毁方法。

## 清空

list 的 `list_destroy()` 函数可清空列表内容，给它传入 `task_destroy` 函数指针即可自定义列表项的销毁方法。

```c title="src/tasklist.c"
void tasklist_empty(tasklist_t *list)
{
        list_destroy(list, (list_item_destructor_t)task_destroy);
}
```

```c title="src/tasklist.h"
void tasklist_empty(tasklist_t *list);
```

## 筛选

筛选就是遍历列表，将其中的符合筛选条件的任务数据添加到新列表中。

筛选条件由 status 参数指定，它有三种值，含义如下：

- 0: 未完成
- 1: 已完成
- 3: 全部

```c title="src/tasklist.c"
void tasklist_filter(tasklist_t *list, int status, tasklist_t *filtered_list)
{
        list_node_t *node;

        for (list_each(node, list)) {
                if ((status == 0 && ((task_t*)node->data)->is_completed) ||
                  (status == 1 && !((task_t*)node->data)->is_completed)) {
                    continue;
                }
                list_append(filtered_list, node->data);
        }
}
```

```c title="src/tasklist.h"
void tasklist_filter(tasklist_t *list, int status, tasklist_t *filtered_list);
```
