# 转译全局变量

JS 源码开头处有一堆全局变量声明：

```js
///---INITIATION---///

//canvas variables
var container = document.getElementById("container_div");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//fabric components
var pointCount = 0;
var points = [];
var spans = [];

//settings
var displayPoints = false;
var displaySpans = true;
var fw = 66;  // fabric width (as percentage of canvas width)
var fh = 55;  // fabric height (as percentage of canvas height)
var htc = fw;  // fabric horizontal thread count
var vtc = fh;  // fabric vertical thread count
var rigidity = 15;  // (iterations of position-accuracy refinement)
var gravity = 0.5;  // (rate of y-velocity increase per frame)
var friction = 0.999;  // (proportion of previous velocity after frame refresh)
var wallBounceLoss = 0.9;  // (proportion of previous velocity after bouncing)
var skidLoss = 0.8;  // (proportion of previous velocity if touching the ground)

//scaling
scaleToWindow();
var canvasPositionLeft = canvas.getBoundingClientRect().left + window.scrollX;
var canvasPositionTop = canvas.getBoundingClientRect().top + window.scrollY;

//interaction
var mouseCanvasX;
var mouseCanvasY;
var grabRadius = canvas.width/25;
var fabricStrength = 25;  // (number of times a span's length can stretch before breaking)

```

其中的 container、canvas、ctx、displayPoints、displaySpans、canvasPositionLeft、canvasPositionTop、mouseCanvasX、mouseCanvasY 变量属于 UI 部分，我们先忽略它们，因为下文中确定的 UI 部分的实现方案并不一定需要这些变量。

fw、fh、htc、vtc 这四个变量仅在下面的全局执行语句中使用，应该移动到初始化函数中作为局部变量使用。

grabRadius 依赖 canvas.width，而 canvas.width 在其它地方也有用到，因此，我们可以先定义全局变量 canvasWidth，然后将 canvas.width 全部替换为 canvasWidth，以解除对 UI 部分的依赖。canvas.height 亦是如此。

points 和 spans 是数组类型，分别用于存放 Point 和 Span 类型对象。对于这种可动态长度的数组，我们可以使用指针实现：

```c
// fabric.c

Point *points = NULL;
Span *spans = NULL;
```

类型的话，我们可以先在 fabric.h 里为它们定义空的结构体，等后面我们调查清楚它们的具体成员后再补全结构体。

```c
// fabric.h

typedef struct PointRec_ {
        // TODO: 补全结构体成员
} PointRec, *Point;

typedef struct SpanRec_ {
        // TODO: 补全结构体成员
} SpanRec, *Span;

```

剩下的全局变量声明语句都比较简单，根据它们的初始值可以很容易的得出它们在 C 语言中的类型和声明方式，以下是转译后的 C 代码：

```c
// fabric.c

double canvasWidth = 0;
double canvasHeight = 0;

// fabric components
int pointCount = 0;
int spanCount = 0;
Point *points = NULL;
Span *spans = NULL;

// settings

// (iterations of position-accuracy refinement)
int rigidity = 15;

// (rate of y-velocity increase per frame)
double gravity = 0.5;

// (proportion of previous velocity after frame refresh)
double friction = 0.999;

// (proportion of previous velocity after bouncing)
double wallBounceLoss = 0.9;

// (proportion of previous velocity if touching the ground)
double skidLoss = 0.8;

// interaction
double grabRadius = 0;

// (number of times a span's length can stretch before breaking)
double fabricStrength = 25;
```
