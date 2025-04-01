# 添加样式

JS 源码中的 `scaleToWindow()` 函数负责调整容器和画布的宽高，它会在窗口尺寸变化时调用。

```js
//scaling
function scaleToWindow() {
  if (window.innerWidth > window.innerHeight) {
    container.style.height = window.innerHeight*0.8+"px";
    container.style.width = container.style.height;
  } else {
    container.style.width = window.innerWidth*0.8+"px";
    container.style.height = container.style.width;
  }
  canvas.width = document.getElementById("canvas_div").clientWidth;
  canvas.height = document.getElementById("canvas_div").clientHeight;
}
```

这个函数的存在必要性不高，用 C 语言实现的话会需要多花一点时间，因此，简单起见，我们给部件设置一个固定的宽高。

那么接下来就是定义一个用于存储 CSS 代码字符串的变量，然后简单设置布局、背景、边框等样式：

```c title="src/main.c"
const char *app_css = "\
root {\
        display: flex;\
        align-items: center;\
        justify-content: center;\
        background: #f2f4f5;\
        width: 800px;\
        height: 600px;\
}\
fabric {\
        width: 800px;\
        height: 600px;\
        border: 1px solid #697b8c;\
        box-sizing: border-box;\
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\
}";
```

之后，在 main() 中添加 CSS 字符串的加载代码：

```c title="src/main.c"
ui_load_css_string(app_css, __FILE__);
```
