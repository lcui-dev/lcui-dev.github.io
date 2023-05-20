# 渲染布料动画

这篇文章将通过仿制一个 JavaScript 实现的布料模拟程序，讲解如何将 JavaScript 代码转译为 C 代码并实现相同的交互和渲染效果。注意，本文只关注如何转译，不涉及布料模拟算法。

## 预设计

我们在体验过这个布料模拟程序的实际效果后，可以很容易地推测出它的工作原理就是计算布料的每一帧的状态，然后绘制到画布上，同时还能响应用户的鼠标操作并改变布料中的局部状态。

按照一般的做法，我们可以将这个程序的源码按照功能类别拆分为两个部分：

- 核心：提供布料状态相关操作接口。
- UI：负责更新布料状态、渲染布料、响应用户的操作。

然后为它们创建源文件：

```
src/
    fabric.c   - 核心部分实现
    fabric.h   - 核心部分导出的类型和函数声明
    main.c     - 应用程序入口以及 UI 部分的代码
```

## 转译全局变量

程序的 JavaScript 源码的开头处有一堆全局变量声明：

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

points 和 spans 是数组类型，分别用于存放 Point 和 Span 类型对象。对于这种可动态长度的数组，我可以使用指针实现：

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

## 转译全局执行语句

在 C 语言中，函数是的基本执行单元，不允许像 JavaScript 这样在函数外层写执行语句，因此，我们需要将全局执行语句移入到函数中。

全局执行语句如下：

```js
//creates points
for (i=0; i<vtc; i++) {
  //(assigns y values so top margin matches l/r margins)
  var y = (i*fh/(vtc-1))+(100-fw)/2;
  for (j=0; j<htc; j++) {
    //(assigns x values so fabric is centered horizontally)
    var x = (j*fw/(htc-1))+(100-fw)/2;
    addPt(x,y);
  }
}
//(pin top row)
for (i=0; i<htc; i++) { points[i].pinned = true; }

...

//create spans
for (i=0; i<points.length-1; i++) {
  if ( (i+1)%htc !== 0 ) { addSp(i,i+1); }  // horizontal spans
  if ( i < points.length-htc) { addSp(i,i+htc); }  // vertical spans
}

//initial unfurl
var rx = randNumBetween(-50,50);
for (i=0; i<points.length/4; i++) {
  var rp = randNumBetween(Math.floor(points.length/3),points.length-1);
  points[rp].px += rx;
  points[rp].py += randNumBetween(10,30);
}
for (i=vtc*htc-vtc-1; i<vtc*htc-1; i++) {
  points[i].px += rx;
  points[i].py += randNumBetween(100,300);
}

//updates frame
update();

...

///---EVENTS---///

//scaling
window.addEventListener('resize', scaleToWindow);

//interaction
document.addEventListener("mousedown", grabFabric);
document.addEventListener("mousemove", moveFabric);
document.addEventListener("mouseup", dropFabric);

document.addEventListener("touchstart", grabFabric);
document.addEventListener("touchmove", moveFabric);
document.addEventListener("touchend", dropFabric);
```

可以看出，这段代码主要由循环语句、条件判断语句和函数调用语句组成，转译成 C 语言非常简单。

其中的 `Math.floor(points.length/3)`，可以转译为 `points.length / 3`，因为在 C 语言中两个整数相除的结果也是整数，没有小数。

末尾的几行 `document.addEventListener()` 函数调用属于 UI 部分，可以忽略。

确定完初始化函数内的执行语句后，我们再确定参数列表。上文中有提到 fw、fh、htc、vtc 这四个变量是初始化函数的局部变量，而初始化函数内部调用的 `addPt()` 函数依赖 canvasWidth 和 canvasHeight，因此，我们可以得出函数需要四个参数：fw、fh、canvasWidth、 canvasHeight。

至此，我们就能得出完整的初始化函数定义代码：

```c
/**
 * @brief init fabirc
 *
 * @param fw fabric width (as percentage of canvas width)
 * @param fh fabric height (as percentage of canvas height)
 */
void Fabric_init(int fw, int fh, int canvaswidth, int canvasHeight)
{
        int i, j, x, y;
        int htc = fw;    // fabric horizontal thread count
        int vtc = fh;    // fabric vertical thread count

        Fabric_resize(canvaswidth, canvasHeight);
        grabRadius = canvasWidth / 25;

        // creates points
        for (i = 0; i < vtc; i++) {
                //(assigns y values so top margin matches l/r margins)
                y = (i * fh / (vtc - 1)) + (100 - fw) / 2;
                for (j = 0; j < htc; j++) {
                        //(assigns x values so fabric is centered horizontally)
                        x = (j * fw / (htc - 1)) + (100 - fw) / 2;
                        addPt(x, y);
                }
        }
        //(pin top row)
        for (i = 0; i < htc; i++) {
                points[i]->pinned = true;
        }

        // create spans
        for (i = 0; i < pointCount; i++) {
                if ((i + 1) % htc != 0) {
                        addSp(i, i + 1);
                }    // horizontal spans
                if (i < pointCount - htc) {
                        addSp(i, i + htc);
                }    // vertical spans
        }

        // initial unfurl
        double rx = randNumBetween(-50, 50);
        for (i = 0; i < pointCount / 4; i++) {
                int rp = randNumBetween(pointCount / 3, pointCount - 1);
                points[rp]->px += rx;
                points[rp]->py += randNumBetween(10, 30);
        }
        for (i = vtc * htc - vtc - 1; i < vtc * htc - 1; i++) {
                points[i]->px += rx;
                points[i]->py += randNumBetween(100, 300);
        }
}
```

## 转译构造函数

参与布料计算的对象有 Point 和 Span，它们的构造函数如下：

```js
//point constructor
function Point(current_x, current_y) {
  this.cx = current_x;
  this.cy = current_y;
  this.px = this.cx;  // previous x value
  this.py = this.cy;  // previous y value
  this.pinned = false;
  this.grabbed = false;
  this.mxd = null;  // mouse x distance (upon grab)
  this.myd = null;  // mouse y distance (upon grab)
  this.id = pointCount;
  pointCount += 1;
}

//span constructor
function Span(point_1, point_2, visibility="visible") {
  this.p1 = point_1;
  this.p2 = point_2;
  this.l = distanceBetween(this.p1,this.p2); // length
  this.visibility = visibility;
}
```

根据构造函数内部用到的属性，我们可以比较容易地写出这两个对象的结构体定义：

```c
// fabric.h

typedef struct PointRec_ {
        double cx;
        double cy;
        double px;
        double py;
        bool pinned;
        bool grabbed;
        double mxd;
        double myd;
        int id;
} PointRec, *Point;

typedef struct SpanRec_ {
        Point p1;
        Point p2;
        double l;
        bool visible;
} SpanRec, *Span;
```

鉴于坐标相关的计算代码涉及除法运算和浮点数类型变量，为确保精度，坐标相关的成员变量都使用 double 类型。

接下来是构造函数，我们在 C 中也需要为这两个对象定义构造函数，以便于创建并初始化它们。Point 的构造函数比较简单，内部都是赋值语句，调用 `malloc()` 分配内存然后给每个成员变量赋值即可：

```c
// point constructor
Point createPoint(double current_x, double current_y)
{
        Point pt = malloc(sizeof(PointRec));
        pt->cx = current_x;
        pt->cy = current_y;
        pt->px = pt->cx;    // previous x value
        pt->py = pt->cy;    // previous y value
        pt->pinned = false;
        pt->grabbed = false;
        pt->mxd = 0;    // mouse x distance (upon grab)
        pt->myd = 0;    // mouse y distance (upon grab)
        pt->id = pointCount;
        pointCount += 1;
        return pt;
}
```

Span 的构造函数的第三个参数 visibility 是可选参数，其默认值是 `"visible"`，由于实现参数默认值和字符串对比会需要多写一点点代码，我们可以先检查它的具体使用情况，然后再确定是否真的需要这么做。

Span 的构造函数只在 `addSp()` 函数中调用，`addSp()` 两处调用都没有传入 visibility 参数，而唯一一处使用 visibility 属性的地方是判断它的值是否为 `'visible'`： `if (s.visibility == "visible") {`，由此可见 visibility 属性没有实际意义，可以删除它。

那么，Span 的构造函数就可以写成这样：

```c
// span constructor
Span createSpan(Point p1, Point p2)
{
        Span span = malloc(sizeof(SpanRec));
        span->p1 = p1;
        span->p2 = p2;
        span->l = distanceBetween(span->p1, span->p2);    // length
        spanCount++;
        return span;
}
```

## 转译函数定义

部分函数内部的代码只是一些简单的语句，基本上只需要声明局部变量即可完成转译，没必要占用过多的篇幅讲解它们，因此，下文只挑选几个较为复杂的函数进行讲解。

### addPt()

`addPt()` 的功能是向 points 数组追加新的 Point 对象：

```js
//creates a point object instance
function addPt(xp,yp) {
  points.push( new Point( xPct(xp), yPct(yp) ) );
}
```

由于我们在 C 语言中是用指针实现数组的，需要先调用 `realloc()` 扩展数组空间，然后插入新元素。代码如下：

```c
// creates a point object instance
void addPt(double xp, double yp)
{
        Point pt = createPoint(xPct(xp), yPct(yp));
        Point *newPoints = realloc(points, sizeof(Point) * (pointCount + 1));
        if (newPoints == NULL || pt == NULL) {
                return;
        }
        newPoints[pointCount] = pt;
        points = newPoints;
}
```

### addSp()

`addSp()` 的功能是向 spans 数组追加新的 Span 对象。它的转译方法与 `addPt()` 是相似的，因此，此处不再赘述。

### randNumBetween()

`randNumBetween()` 的功能是生成指定范围内的随机数：

```js
//generates random number between a minimum and maximum value
function randNumBetween(min,max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}
```

在 C 语言中可以使用 `stdlib.h` 提供的 `rand()` 函数获取随机数，配合 `%` 取模运算符可以限定数值范围。

```c
// generates random number between a minimum and maximum value
int randNumBetween(int min, int max)
{
        return (int)(rand() % (max - min + 1)) + min;
}
```

通常我们会在用 `rand()` 之前用 `srand()` 初始化随机数种子，那么，这种初始化操作就可以写入 `Fabric_init()` 中：

```diff
 void Fabric_init(int fw, int fh, int canvaswidth, int canvasHeight)
 {
         int i, j, x, y;
         int htc = fw;    // fabric horizontal thread count
         int vtc = fh;    // fabric vertical thread count

+        srand((unsigned)time(NULL));
         Fabric_resize(canvaswidth, canvasHeight);
```

### updateSpans()

`updateSpans()` 的功能是更新两点之间的间距，代码如下：

```js
// sets spans between points
function updateSpans() {
  for (var i=0; i<spans.length; i++) {
    var s = spans[i];
    var dx = s.p2.cx - s.p1.cx;  // distance between x values
    var	dy = s.p2.cy - s.p1.cy;  // distance between y values
    var d = Math.sqrt( dx*dx + dy*dy);  // distance between the points
    if (d > s.l*fabricStrength) { spans.splice(i,1); }  // tear if over-stretched
    var	r = s.l / d;	// ratio (span length over distance between points)
    var	mx = s.p1.cx + dx / 2;  // midpoint between x values
    var my = s.p1.cy + dy / 2;  // midpoint between y values
    var ox = dx / 2 * r;  // offset of each x value (compared to span length)
    var oy = dy / 2 * r;  // offset of each y value (compared to span length)
    if (s.p1.pinned === false) {
      s.p1.cx = mx - ox;  // updates span's first point x value
      s.p1.cy = my - oy;  // updates span's first point y value
    }
    if (s.p2.pinned === false) {
      s.p2.cx = mx + ox;  // updates span's second point x value
      s.p2.cy = my + oy;  // updates span's second point y value
    }
  }
}
```

它的内部会调用数组操作方法 `splice()` 删除 spans 数组中的元素，如果用 C 语言实现与之相同的功能的话会需要多写一点代码，我们不妨简单点，先释放数组内指定下标的元素，然后赋值为 NULL，使用数组元素前先判断是否 NULL。完整的实现代码如下：

```c
// sets spans between points
void Fabric_updateSpans(void)
{
        int i;
        for (i = 0; i < spanCount; i++) {
                Span s = spans[i];
                if (!s) {
                        continue;
                }
                // distance between x values
                double dx = s->p2->cx - s->p1->cx;
                // distance between y values
                double dy = s->p2->cy - s->p1->cy;
                // distance between the points
                double d = sqrt(dx * dx + dy * dy);
                // tear if over-stretched
                if (d > s->l * fabricStrength) {
                        free(spans[i]);
                        spans[i] = NULL;
                }
                // ratio (span length over distance between points) midpoint
                // between x values
                double r = s->l / d;
                double mx = s->p1->cx + dx / 2;
                // midpoint between y values
                double my = s->p1->cy + dy / 2;
                // offset of each x value (compared to span length)
                double ox = dx / 2 * r;
                // offset of each y value (compared to span length)
                double oy = dy / 2 * r;
                if (!s->p1->pinned) {
                        // updates span's first point x value
                        s->p1->cx = mx - ox;
                        // updates span's first point y value
                        s->p1->cy = my - oy;
                }
                if (!s->p2->pinned) {
                        // updates span's second point x value
                        s->p2->cx = mx + ox;
                        // updates span's second point y value
                        s->p2->cy = my + oy;
                }
        }
}
```

## 实现 UI 部分

## 总结
