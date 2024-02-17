# 构建界面

让我们学习如何编译 TSX 代码，以及如何使用它为我们的应用程序构建界面。

## 编译 TSX

运行以下命令让 lcui-cli 编译 src 目录内的所有文件：

```terminal
lcui compile src
```

运行完后会产生 `.tsx.h` 后缀名的文件，查看这些文件的内容可知它包含了组件的构建和资源加载函数。

## 补全组件实现

我们需要编写代码调用这些函数才能补全组件的完整实现，这些代码可写在图片查看界面的源文件中，如下所示：

```c title=image-view.c
#include "image-view.tsx.h"

typedef struct image_view {
        image_view_refs_t refs;
} image_view_t;

void image_view_init(ui_widget_t *w)
{
        image_view_t *view;

        view = ui_widget_add_data(w, image_view_proto, sizeof(image_view_t));
        image_view_load_template(w, &view->refs);
}

void image_view_destroy(ui_widget_t *w)
{
}

void ui_register_image_view(void)
{
        image_view_load_resources();
        image_view_init_prototype();
        image_view_proto->init = image_view_init;
        image_view_proto->destroy = image_view_destroy;
}
```

我们定义了组件的私有数据类型、初始化函数、销毁函数和注册函数。

`image_view_t` 是组件的私有数据类型，目前还只有一个 refs 成员，它的类型是 `image_view_refs_t`，包含 tsx 代码中各个元素的 `$ref` 属性所引用的组件实例。

在初始化函数中，为组件添加了类型为 `image_view_t` 的私有数据，然后调用 tsx 中的 `image_view_load_template()` 函数来构建组件的内容。该函数会修改传入的 refs 参数，将其中的各个组件指针指向对应的组件实例。

注册函数负责资源加载和组件原型初始化，`image_view_proto` 指向组件原型，我们需要将其中的 init 和 destroy 函数指针指向组件的初始化和销毁函数，以让 LCUI 在创建和销毁组件时调用它们。

## 使用组件

app.c 和 app.tsx 包含的是演示代码，对我们的程序并没有用，所以我们另外新建一个 `main.c` 文件：

```c title=main.c
#include <LCUI.h>
#include <LCUI/main.h>
#include "image-view.h"

int main(int argc, char **argv)
{
        ui_widget_t *w;

        lcui_init();
        ui_register_image_view();
        w = ui_create_widget("ImageView");
        ui_root_append(w);
        return lcui_main();
}
```

在 `main()` 函数中，我们先初始化了 LCUI，然后注册了 ImageView 组件，之后创建它并将其追加到根组件内，最后进入 LCUI 的主循环。
