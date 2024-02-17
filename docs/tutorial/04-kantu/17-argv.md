# 处理主函数的参数

让我们学习如何让程序能够打开用户指定的图片。

## 获取图片文件路径

当用户将我们的程序设置为图片打开方式后再打开任意图片文件，操作系统会启动我们的程序并将文件路径以参数的形式传递给 `main()` 函数，该函数的第一个参数 argc 是参数数量，第二个参数 argv 则包含各个参数。

如果参数数量为 2，则创建图片查看界面去加载参数指定的图片路径，否则创建主界面。

```c title=main.c
int main(int argc, char **argv)
{
        ui_widget_t *w;

        lcui_init();
        ui_register_home();
        ui_register_image_view();
        if (argc == 2) {
                w = ui_create_widget("ImageView");
                image_view_load_file(w, argv[1]);
                ui_root_append(w);
        } else {
                ui_root_append(ui_create_widget("Home"));
                ui_widget_set_title(ui_root(), APP_NAME);
        }
        return lcui_main();
}
```

为方便调试，你可以使用预处理指令来添加仅在调试模式下启用的代码，就像下面这样：

```c
int main(int argc, char **argv)
{
        ui_widget_t *w;

        lcui_init();
        ui_register_home();
        ui_register_image_view();
#ifdef DEBUG
        if (true) {
#else
        if (argc == 2) {
#endif
                w = ui_create_widget("ImageView");
#ifdef DEBUG
                image_view_load_file(
                    w, "E:\\workspace\\code\\kantu\\app\\dog.jpg");
#else
                image_view_load_file(w, argv[1]);
#endif
                ui_root_append(w);
        } else {
                ui_root_append(ui_create_widget("Home"));
                ui_widget_set_title(ui_root(), APP_NAME);
        }
        return lcui_main();
}
```

当我们需要调试特定图片文件的加载效果时，只需要定义 `DEBUG` 宏再重新编译运行。

## 切换当前工作目录

重新编译运行程序，你会发现界面中的图标都显示成方框了，这是因为程序加载资源文件所使用的路径都是相对于工作目录，而程序当前的工作目录并不是可执行文件所在目录，所以你需要再编写代码切换工作目录。

通常第一个参数就是可执行文件的路径，你只需要从中提取出目录路径即可，而工作目录的切换则可以调用 `chdir()` 函数实现（在 Windows 系统中你可以调用 `_chdir()`）。为了让 `main()` 函数保持简单，我们可以单独定义一个函数实现工作目录初始化，像下面这样：

```c title=utils.c
#ifdef _WIN32
#include <direct.h>
#else
#include <unistd.h>
#endif

void init_cwd(const char *exec_file)
{
        char *dirname = path_dirname(exec_file);
#ifdef _WIN32
        _chdir(dirname);
#else
        chdir(dirname);
#endif
}
```

然后在 `main()` 中调用它：

```c title=main.c
#ifdef DEBUG
init_cwd(argv[0]);
#endif
```

在调试模式下，我们使用 `xmake run app` 命令运行程序，xmake 配置文件中已经预先设置了工作目录，因此，仅在非调试模式下启用这块代码。
