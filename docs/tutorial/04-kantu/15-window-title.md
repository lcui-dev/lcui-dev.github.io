# 更新窗口标题

让我们学习如何将窗口标题设置为文件名。

LCUI 的默认显示模式是单窗口，该窗口与根级组件绑定，组件的宽高、标题属性的变动都会同步到窗口。这意味着你可以修改根组件的 title 属性来设置窗口标题。

窗口标题显示文件名和图片尺寸，为了避免图片尺寸因文件名过长而被挤出窗口标题可见区域，你应该限制文件名的最大长度，过长时截断它并在末尾追加省略号 `...`。

`ui_image_t` 对象中的 path 成员存储了图片文件路径，但它是 char 类型的字符串，其内容按本地编码方式编码，非英文字符会占用多个字节，直接对 char 类型字符串进行截断的话容易破坏编码并出现乱码的问题，因此，你应该将文件名解码成一个个与字符对应的码点（Code Point），然后再处理它。

解码操作可以调用 `mbstowcs()` 函数实现。先定义 wchar_t 类型数组用于存放解码后的字符串，最大长度设置为 64，然后判断解码后的实际长度，再进行相应的处理。代码如下：

```c title=image-view.c
wchar_t truncated_name[64];

len = mbstowcs(truncated_name, name, 64);
if (len > 60) {
        truncated_name[60] = '.';
        truncated_name[61] = '.';
        truncated_name[62] = '.';
        truncated_name[63] = 0;
} else {
        truncated_name[len] = 0;
}
```

`ui_image_t` 对象中有图片尺寸数据，它仅在图片正确加载完成后有效，你可以调用 `ui_image_valid()` 函数检测它。

```c title=image-view.c
if (ui_image_valid(image)) {
        swprintf(title, 80, L"%ls (%ux%u)", truncated_name,
                  image->data.width, image->data.height);
        title[79] = 0;
} else {
        wcscpy(title, truncated_name);
}
ui_widget_set_title(ui_root(), title);
```

图片尺寸要等到图片加载完后才能获取，而这时 `image_view_update()` 也会被调用，因此，你应该在 `image_view_update()` 函数里添加窗口标题更新代码。
