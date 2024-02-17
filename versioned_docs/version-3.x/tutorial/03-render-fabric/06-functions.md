# 转译函数定义

部分函数内部的代码只是一些简单的语句，基本上只需要声明局部变量即可完成转译，没必要占用过多的篇幅讲解它们，因此，下文只挑选几个较为复杂的函数进行讲解。

## addPt

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

## addSp

`addSp()` 的功能是向 spans 数组追加新的 Span 对象。它的转译方法与 `addPt()` 是相似的，因此，此处不再赘述。

## randNumBetween

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

## updateSpans

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

至此，布料模拟算法的核心部分已经转译完成，接下来让我们为其构造一个图形界面，以让渲染结果输出到屏幕上并能够响应鼠标操作。
