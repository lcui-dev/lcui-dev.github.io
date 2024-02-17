# 初始化图形界面程序

在 `main.c` 中添加头文件包含代码和 `main()` 函数，然后在 `main()` 函数中初始化 LCUi 和布料模拟相关数据：

```c title=src/main.c
#include <LCUI.h>
#include <LCUI/main.h>
#include "fabric.h"

int main(int argc, char **argv)
{
        // 初始化 LCUI
        lcui_init();

        // 初始化布料模拟相关数据
        Fabric_init(66, 55, 800, 600);

        // 设置主窗口标题为 Fabric
        ui_widget_set_title(ui_root(), L"Fabric");

        // 执行主循环
        return lcui_main();
}
```
