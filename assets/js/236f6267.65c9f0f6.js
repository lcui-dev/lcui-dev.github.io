"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4135],{91831:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"tutorial/render-fabric/constructors","title":"\u8f6c\u8bd1\u6784\u9020\u51fd\u6570","description":"\u53c2\u4e0e\u5e03\u6599\u8ba1\u7b97\u7684\u5bf9\u8c61\u6709 Point \u548c Span\uff0c\u5b83\u4eec\u7684\u6784\u9020\u51fd\u6570\u5982\u4e0b\uff1a","source":"@site/docs/tutorial/02-render-fabric/05-constructors.md","sourceDirName":"tutorial/02-render-fabric","slug":"/tutorial/render-fabric/constructors","permalink":"/docs/next/tutorial/render-fabric/constructors","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/02-render-fabric/05-constructors.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u8f6c\u8bd1\u5168\u5c40\u6267\u884c\u8bed\u53e5","permalink":"/docs/next/tutorial/render-fabric/global-statements"},"next":{"title":"\u8f6c\u8bd1\u51fd\u6570\u5b9a\u4e49","permalink":"/docs/next/tutorial/render-fabric/functions"}}');var s=t(74848),r=t(28453);const o={},c="\u8f6c\u8bd1\u6784\u9020\u51fd\u6570",a={},p=[];function l(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u8f6c\u8bd1\u6784\u9020\u51fd\u6570",children:"\u8f6c\u8bd1\u6784\u9020\u51fd\u6570"})}),"\n",(0,s.jsx)(e.p,{children:"\u53c2\u4e0e\u5e03\u6599\u8ba1\u7b97\u7684\u5bf9\u8c61\u6709 Point \u548c Span\uff0c\u5b83\u4eec\u7684\u6784\u9020\u51fd\u6570\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'//point constructor\nfunction Point(current_x, current_y) {\n  this.cx = current_x;\n  this.cy = current_y;\n  this.px = this.cx;  // previous x value\n  this.py = this.cy;  // previous y value\n  this.pinned = false;\n  this.grabbed = false;\n  this.mxd = null;  // mouse x distance (upon grab)\n  this.myd = null;  // mouse y distance (upon grab)\n  this.id = pointCount;\n  pointCount += 1;\n}\n\n//span constructor\nfunction Span(point_1, point_2, visibility="visible") {\n  this.p1 = point_1;\n  this.p2 = point_2;\n  this.l = distanceBetween(this.p1,this.p2); // length\n  this.visibility = visibility;\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u636e\u6784\u9020\u51fd\u6570\u5185\u90e8\u7528\u5230\u7684\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u6bd4\u8f83\u5bb9\u6613\u5730\u5199\u51fa\u8fd9\u4e24\u4e2a\u5bf9\u8c61\u7684\u7ed3\u6784\u4f53\u5b9a\u4e49\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"// fabric.h\n\ntypedef struct PointRec_ {\n        double cx;\n        double cy;\n        double px;\n        double py;\n        bool pinned;\n        bool grabbed;\n        double mxd;\n        double myd;\n        int id;\n} PointRec, *Point;\n\ntypedef struct SpanRec_ {\n        Point p1;\n        Point p2;\n        double l;\n        bool visible;\n} SpanRec, *Span;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u9274\u4e8e\u5750\u6807\u76f8\u5173\u7684\u8ba1\u7b97\u4ee3\u7801\u6d89\u53ca\u9664\u6cd5\u8fd0\u7b97\u548c\u6d6e\u70b9\u6570\u7c7b\u578b\u53d8\u91cf\uff0c\u4e3a\u786e\u4fdd\u7cbe\u5ea6\uff0c\u5750\u6807\u76f8\u5173\u7684\u6210\u5458\u53d8\u91cf\u90fd\u4f7f\u7528 double \u7c7b\u578b\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u63a5\u4e0b\u6765\u662f\u6784\u9020\u51fd\u6570\uff0c\u6211\u4eec\u5728 C \u4e2d\u4e5f\u9700\u8981\u4e3a\u8fd9\u4e24\u4e2a\u5bf9\u8c61\u5b9a\u4e49\u6784\u9020\u51fd\u6570\uff0c\u4ee5\u4fbf\u4e8e\u521b\u5efa\u5e76\u521d\u59cb\u5316\u5b83\u4eec\u3002Point \u7684\u6784\u9020\u51fd\u6570\u6bd4\u8f83\u7b80\u5355\uff0c\u5185\u90e8\u90fd\u662f\u8d4b\u503c\u8bed\u53e5\uff0c\u8c03\u7528 ",(0,s.jsx)(e.code,{children:"malloc()"})," \u5206\u914d\u5185\u5b58\u7136\u540e\u7ed9\u6bcf\u4e2a\u6210\u5458\u53d8\u91cf\u8d4b\u503c\u5373\u53ef\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"// point constructor\nPoint createPoint(double current_x, double current_y)\n{\n        Point pt = malloc(sizeof(PointRec));\n        pt->cx = current_x;\n        pt->cy = current_y;\n        pt->px = pt->cx;    // previous x value\n        pt->py = pt->cy;    // previous y value\n        pt->pinned = false;\n        pt->grabbed = false;\n        pt->mxd = 0;    // mouse x distance (upon grab)\n        pt->myd = 0;    // mouse y distance (upon grab)\n        pt->id = pointCount;\n        pointCount += 1;\n        return pt;\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Span \u7684\u6784\u9020\u51fd\u6570\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570 visibility \u662f\u53ef\u9009\u53c2\u6570\uff0c\u5176\u9ed8\u8ba4\u503c\u662f ",(0,s.jsx)(e.code,{children:'"visible"'}),"\uff0c\u7531\u4e8e\u5b9e\u73b0\u53c2\u6570\u9ed8\u8ba4\u503c\u548c\u5b57\u7b26\u4e32\u5bf9\u6bd4\u4f1a\u9700\u8981\u591a\u5199\u4e00\u70b9\u70b9\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u68c0\u67e5\u5b83\u7684\u5177\u4f53\u4f7f\u7528\u60c5\u51b5\uff0c\u7136\u540e\u518d\u786e\u5b9a\u662f\u5426\u771f\u7684\u9700\u8981\u8fd9\u4e48\u505a\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["Span \u7684\u6784\u9020\u51fd\u6570\u53ea\u5728 ",(0,s.jsx)(e.code,{children:"addSp()"})," \u51fd\u6570\u4e2d\u8c03\u7528\uff0c",(0,s.jsx)(e.code,{children:"addSp()"})," \u4e24\u5904\u8c03\u7528\u90fd\u6ca1\u6709\u4f20\u5165 visibility \u53c2\u6570\uff0c\u800c\u552f\u4e00\u4e00\u5904\u4f7f\u7528 visibility \u5c5e\u6027\u7684\u5730\u65b9\u662f\u5224\u65ad\u5b83\u7684\u503c\u662f\u5426\u4e3a ",(0,s.jsx)(e.code,{children:"'visible'"}),"\uff1a ",(0,s.jsx)(e.code,{children:'if (s.visibility == "visible") {'}),"\uff0c\u7531\u6b64\u53ef\u89c1 visibility \u5c5e\u6027\u6ca1\u6709\u5b9e\u9645\u610f\u4e49\uff0c\u53ef\u4ee5\u5220\u9664\u5b83\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u90a3\u4e48\uff0cSpan \u7684\u6784\u9020\u51fd\u6570\u5c31\u53ef\u4ee5\u5199\u6210\u8fd9\u6837\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"// span constructor\nSpan createSpan(Point p1, Point p2)\n{\n        Span span = malloc(sizeof(SpanRec));\n        span->p1 = p1;\n        span->p2 = p2;\n        span->l = distanceBetween(span->p1, span->p2);    // length\n        spanCount++;\n        return span;\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);