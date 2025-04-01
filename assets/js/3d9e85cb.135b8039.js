"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[858],{91460:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tutorial/render-fabric/cairo-rendering","title":"\u4f7f\u7528 cairo \u7ed8\u5236\u56fe\u5f62","description":"JS \u6e90\u7801\u4e2d\u6709\u4e24\u4e2a\u51fd\u6570\u5206\u522b\u7528\u4e8e\u6e32\u67d3\u70b9\u548c\u683c\u5b50\uff1a","source":"@site/versioned_docs/version-3.x/tutorial/02-render-fabric/12-cairo-rendering.md","sourceDirName":"tutorial/02-render-fabric","slug":"/tutorial/render-fabric/cairo-rendering","permalink":"/docs/tutorial/render-fabric/cairo-rendering","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/tutorial/02-render-fabric/12-cairo-rendering.md","tags":[],"version":"3.x","sidebarPosition":12,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u5b9a\u65f6\u91cd\u7ed8","permalink":"/docs/tutorial/render-fabric/ui-animation"},"next":{"title":"\u603b\u7ed3","permalink":"/docs/tutorial/render-fabric/end"}}');var c=i(74848),s=i(28453);const t={},a="\u4f7f\u7528 cairo \u7ed8\u5236\u56fe\u5f62",o={},d=[];function l(n){const e={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"\u4f7f\u7528-cairo-\u7ed8\u5236\u56fe\u5f62",children:"\u4f7f\u7528 cairo \u7ed8\u5236\u56fe\u5f62"})}),"\n",(0,c.jsx)(e.p,{children:"JS \u6e90\u7801\u4e2d\u6709\u4e24\u4e2a\u51fd\u6570\u5206\u522b\u7528\u4e8e\u6e32\u67d3\u70b9\u548c\u683c\u5b50\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:'// displays points\nfunction renderPoints() {\n  for (var i=0; i<points.length; i++) {\n    var p = points[i];\n    ctx.beginPath();\n    ctx.arc(p.cx,p.cy,3,0,2*Math.PI);\n    ctx.fillStyle="green";\n    ctx.fill();\n  }\n}\n\n// displays spans\nfunction renderSpans() {\n  ctx.beginPath();\n  for (var i=0; i<spans.length; i++) {\n    var s = spans[i];\n    if (s.visibility == "visible") {\n      ctx.strokeStyle = "#552500";\n      ctx.lineWidth = ".66";\n      ctx.moveTo(s.p1.cx, s.p1.cy);\n      ctx.lineTo(s.p2.cx, s.p2.cy);\n    }\n  }\n  ctx.stroke();\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u7528\u5230\u7684\u7ed8\u5236\u65b9\u6cd5\u6709 ",(0,c.jsx)(e.code,{children:"beginPath()"}),"\u3001",(0,c.jsx)(e.code,{children:"fill()"}),"\u3001",(0,c.jsx)(e.code,{children:"arc()"}),"\u3001",(0,c.jsx)(e.code,{children:"moveTo()"}),"\u3001",(0,c.jsx)(e.code,{children:"lineTo()"}),"\uff0c",(0,c.jsx)(e.code,{children:"stroke()"}),"\uff0c\u8fd9\u4e9b\u90fd\u662f\u57fa\u672c\u7684\u56fe\u5f62\u7ed8\u5236\u65b9\u6cd5\uff0c\u5927\u90e8\u5206\u56fe\u5f62\u5e93\u90fd\u5177\u5907\uff0c\u6211\u4eec\u901a\u8fc7\u67e5\u9605 cairo \u7684",(0,c.jsx)(e.a,{href:"https://www.cairographics.org/tutorial/",children:"\u6559\u7a0b"})," \u5373\u53ef\u627e\u5230\u76f8\u4f3c\u7684\u5b9e\u73b0\u65b9\u6cd5\uff1a"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"ctx.fillStyle"}),"\uff1a",(0,c.jsx)(e.code,{children:"cairo_set_source_rgb()"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"ctx.strokeStyle"}),"\uff1a",(0,c.jsx)(e.code,{children:"cairo_set_source_rgb()"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"ctx.lineWidth"}),"\uff1a",(0,c.jsx)(e.code,{children:"cairo_set_line_width()"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"ctx.moveTo()"}),"\uff1a",(0,c.jsx)(e.code,{children:"cairo_move_to()"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"ctx.lineTo()"}),"\uff1a",(0,c.jsx)(e.code,{children:"cairo_line_to()"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"ctx.arc()"}),"\uff1a",(0,c.jsx)(e.code,{children:"cairo_arc()"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"ctx.fill()"}),"\uff1a",(0,c.jsx)(e.code,{children:"cairo_fill()"})]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u7531\u6b64\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5199\u51fa\u5b8c\u6574\u7684\u7ed8\u5236\u4ee3\u7801\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",metastring:'title="src/main.c"',children:"// displays points\nvoid render_points(cairo_t *cr)\n{\n        int i, count;\n        Point p, *points;\n\n        Fabric_getPoints(&points, &count);\n        cairo_set_source_rgb(cr, 0, 1, 0);\n        for (i = 0; i < count; i++) {\n                p = points[i];\n                cairo_arc(cr, p->cx, p->cy, 3, 0, 2 * M_PI);\n        }\n        cairo_fill(cr);\n}\n\n// displays spans\nvoid render_spans(cairo_t *cr)\n{\n        int i, count;\n        Span s, *spans;\n\n        Fabric_getSpans(&spans, &count);\n        cairo_set_source_rgb(cr, 0.33, 0.15, 0);\n        cairo_set_line_width(cr, 0.66);\n        for (i = 0; i < count; i++) {\n                s = spans[i];\n                if (s != NULL) {\n                        cairo_move_to(cr, s->p1->cx, s->p1->cy);\n                        cairo_line_to(cr, s->p2->cx, s->p2->cy);\n                }\n        }\n        cairo_stroke(cr);\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u7136\u540e\uff0c\u8f6c\u8bd1 ",(0,c.jsx)(e.code,{children:"update()"})," \u51fd\u6570\u53ca\u76f8\u5173\u5168\u5c40\u53d8\u91cf\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"var displayPoints = false;\nvar displaySpans = true;\n\n...\n\n//updates coordinates and renders new frames continuously\nfunction update() {\n  updatePoints();\n  //(refines point positions for position accuracy & shape rigidity)\n  for (var i=0; i<rigidity; i++) {\n    wallBounce();\n    updateSpans();\n  }\n  clearCanvas();  // clears previous frame\n  if (displayPoints) { renderPoints(); }\n  if (displaySpans) { renderSpans(); }\n  window.requestAnimationFrame(update);\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"clearCanvas()"})," \u4e0a\u9762\u7684\u51e0\u884c\u4ee3\u7801\u662f\u66f4\u65b0\u5e03\u6599\u76f8\u5173\u6570\u636e\uff0c\u4e0e\u6e32\u67d3\u5173\u7cfb\u4e0d\u5927\uff0c\u53ef\u5212\u5206\u4e3a\u6838\u5fc3\u90e8\u5206\u7684\u4ee3\u7801\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u628a\u5b83\u4eec\u79fb\u52a8\u5230 ",(0,c.jsx)(e.code,{children:"fabric.c"})," \u6587\u4ef6\u4e2d\uff0c\u5b9a\u4e49\u6210 ",(0,c.jsx)(e.code,{children:"Fabric_update()"})," \u51fd\u6570\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",metastring:'title="src/fabric.c"',children:"void Fabric_update(void)\n{\n        int i;\n\n        Fabric_updatePoints();\n        //(refines point positions for position accuracy & shape rigidity)\n        for (i = 0; i < rigidity; i++) {\n                Fabric_wallBounce();\n                Fabric_updateSpans();\n        }\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5269\u4e0b\u4ee3\u7801\u53ef\u4ee5\u79fb\u5165 ",(0,c.jsx)(e.code,{children:"ui_fabric_on_frame()"})," \u51fd\u6570\u4e2d\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",metastring:'title="src/main.c"',children:"void ui_fabric_on_frame(ui_widget_t *w)\n{\n        ui_canvas_context_t *ctx = ui_canvas_get_context(w);\n        cairo_surface_t *surface = cairo_image_surface_create_for_data(\n            ctx->buffer.bytes, CAIRO_FORMAT_RGB24, ctx->buffer.width,\n            ctx->buffer.height, ctx->buffer.bytes_per_row);\n        cairo_t *cr = cairo_create(surface);\n\n        Fabric_update();\n        // clears previous frame\n        ctx->fill_color = pd_color(255, 255, 255, 255);\n        ctx->fill_rect(ctx, 0, 0, ctx->width, ctx->height);\n        if (displayPoints) {\n                render_points(cr);\n        }\n        if (displaySpans) {\n                render_spans(cr);\n        }\n        cairo_destroy(cr);\n        cairo_surface_destroy(surface);\n        ui_widget_mark_dirty_rect(w, NULL, UI_BOX_TYPE_GRAPH_BOX);\n        ctx->release(ctx);\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"ui_canvas_get_context()"})," \u51fd\u6570\u7528\u4e8e\u83b7\u53d6\u7ed8\u5236\u4e0a\u4e0b\u6587\uff0c\u5b83\u5305\u542b\u753b\u5e03\u7684\u5bbd\u9ad8\u548c\u50cf\u7d20\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["cairo \u63d0\u4f9b ",(0,c.jsx)(e.code,{children:"cairo_image_surface_create_for_data()"})," \u51fd\u6570\u7528\u4e8e\u4ece\u50cf\u7d20\u6570\u636e\u521b\u5efa surface\uff0c\u8fd9\u4f7f\u5f97\u6211\u4eec\u53ef\u4ee5\u7528 cairo \u6765\u64cd\u4f5c LCUI \u90e8\u4ef6\u7684\u50cf\u7d20\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u7ed8\u5236\u5b8c\u540e\uff0c\u8c03\u7528 ",(0,c.jsx)(e.code,{children:"ui_widget_mark_dirty_rect()"})," \u51fd\u6570\u6807\u8bb0\u6574\u4e2a\u90e8\u4ef6\u9700\u8981\u91cd\u7ed8\u3002"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(l,{...n})}):l(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>a});var r=i(96540);const c={},s=r.createContext(c);function t(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);