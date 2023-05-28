# 转译全局执行语句

在 C 语言中，函数是基本执行单元，不像 JavaScript 那样允许在函数外部编写执行语句。因此，我们需要将全局执行语句移入函数中。

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

这段代码由循环语句、条件判断语句和函数调用语句组成，转译成 C 语言非常简单。

其中的 `Math.floor(points.length/3)`，可以转译为 `points.length / 3`，因为在 C 语言中两个整数相除的结果也是整数，没有小数。

末尾的几行 `document.addEventListener()` 函数调用属于 UI 部分，可以忽略。

接下来是参数列表，上文中有提到 fw、fh、htc、vtc 这四个变量是初始化函数的局部变量，而初始化函数内部调用的 `addPt()` 函数依赖 canvasWidth 和 canvasHeight，因此，该函数需要四个参数：fw、fh、canvasWidth、 canvasHeight。

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
