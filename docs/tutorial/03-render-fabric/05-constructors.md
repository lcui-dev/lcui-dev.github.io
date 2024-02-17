# 转译构造函数

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
