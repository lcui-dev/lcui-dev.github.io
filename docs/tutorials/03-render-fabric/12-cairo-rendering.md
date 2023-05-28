# 使用 cairo 绘制图形

JS 源码中有两个函数分别用于渲染点和格子：

```js
// displays points
function renderPoints() {
  for (var i=0; i<points.length; i++) {
    var p = points[i];
    ctx.beginPath();
    ctx.arc(p.cx,p.cy,3,0,2*Math.PI);
    ctx.fillStyle="green";
    ctx.fill();
  }
}

// displays spans
function renderSpans() {
  ctx.beginPath();
  for (var i=0; i<spans.length; i++) {
    var s = spans[i];
    if (s.visibility == "visible") {
      ctx.strokeStyle = "#552500";
      ctx.lineWidth = ".66";
      ctx.moveTo(s.p1.cx, s.p1.cy);
      ctx.lineTo(s.p2.cx, s.p2.cy);
    }
  }
  ctx.stroke();
}
```

用到的绘制方法有 `beginPath()`、`fill()`、`arc()`、`moveTo()`、`lineTo()`，`stroke()`，这些都是基本的图形绘制方法，大部分图形库都具备，我们通过查阅 cairo 的[教程](https://www.cairographics.org/tutorial/) 即可找到相似的实现方法：

- `ctx.fillStyle`：`cairo_set_source_rgb()`
- `ctx.strokeStyle`：`cairo_set_source_rgb()`
- `ctx.lineWidth`：`cairo_set_line_width()`
- `ctx.moveTo()`：`cairo_move_to()`
- `ctx.lineTo()`：`cairo_line_to()`
- `ctx.arc()`：`cairo_arc()`
- `ctx.fill()`：`cairo_fill()`

由此，我们就可以写出完整的绘制代码：

```c
// displays points
void render_points(cairo_t *cr)
{
        int i, count;
        Point p, *points;

        Fabric_getPoints(&points, &count);
        cairo_set_source_rgb(cr, 0, 1, 0);
        for (i = 0; i < count; i++) {
                p = points[i];
                cairo_arc(cr, p->cx, p->cy, 3, 0, 2 * M_PI);
        }
        cairo_fill(cr);
}

// displays spans
void render_spans(cairo_t *cr)
{
        int i, count;
        Span s, *spans;

        Fabric_getSpans(&spans, &count);
        cairo_set_source_rgb(cr, 0.33, 0.15, 0);
        cairo_set_line_width(cr, 0.66);
        for (i = 0; i < count; i++) {
                s = spans[i];
                if (s != NULL) {
                        cairo_move_to(cr, s->p1->cx, s->p1->cy);
                        cairo_line_to(cr, s->p2->cx, s->p2->cy);
                }
        }
        cairo_stroke(cr);
}
```

然后，是转译 `update()` 函数及相关全局变量：

```js
var displayPoints = false;
var displaySpans = true;

...

//updates coordinates and renders new frames continuously
function update() {
  updatePoints();
  //(refines point positions for position accuracy & shape rigidity)
  for (var i=0; i<rigidity; i++) {
    wallBounce();
    updateSpans();
  }
  clearCanvas();  // clears previous frame
  if (displayPoints) { renderPoints(); }
  if (displaySpans) { renderSpans(); }
  window.requestAnimationFrame(update);
}
```

`clearCanvas()` 上面的几行代码是更新布料相关数据，与渲染关系不大，可划分为核心部分的代码，因此，我们把它们移动到 `fabric.c` 文件中，定义成 `Fabric_update()` 函数：

```c title=src/fabric.c
void Fabric_update(void)
{
        int i;

        Fabric_updatePoints();
        //(refines point positions for position accuracy & shape rigidity)
        for (i = 0; i < rigidity; i++) {
                Fabric_wallBounce();
                Fabric_updateSpans();
        }
}
```

剩下代码可以移入 `ui_fabric_on_frame()` 函数中：

```c
void ui_fabric_on_frame(ui_widget_t *w)
{
        ui_canvas_context_t *ctx = ui_canvas_get_context(w);
        cairo_surface_t *surface = cairo_image_surface_create_for_data(
            ctx->buffer.bytes, CAIRO_FORMAT_RGB24, ctx->buffer.width,
            ctx->buffer.height, ctx->buffer.bytes_per_row);
        cairo_t *cr = cairo_create(surface);

        Fabric_update();
        // clears previous frame
        ctx->fill_color = pd_color(255, 255, 255, 255);
        ctx->fill_rect(ctx, 0, 0, ctx->width, ctx->height);
        if (displayPoints) {
                render_points(cr);
        }
        if (displaySpans) {
                render_spans(cr);
        }
        cairo_destroy(cr);
        cairo_surface_destroy(surface);
        ui_widget_mark_dirty_rect(w, NULL, UI_BOX_TYPE_GRAPH_BOX);
        ctx->release(ctx);
}
```

`ui_canvas_get_context()` 函数用于获取绘制上下文，它包含画布的宽高和像素数据。

cairo 提供 `cairo_image_surface_create_for_data()` 函数用于从像素数据创建 surface，这使得我们可以用 cairo 来操作 LCUI 部件的像素数据。

绘制完后，调用 `ui_widget_mark_dirty_rect()` 函数标记整个部件需要重绘。
