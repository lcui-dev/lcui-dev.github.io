"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1013],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(f,s(s({ref:n},l),{},{components:t})):a.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={},s="\u8f6c\u8bd1\u51fd\u6570\u5b9a\u4e49",o={unversionedId:"tutorials/render-fabric/functions",id:"tutorials/render-fabric/functions",title:"\u8f6c\u8bd1\u51fd\u6570\u5b9a\u4e49",description:"\u90e8\u5206\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\u53ea\u662f\u4e00\u4e9b\u7b80\u5355\u7684\u8bed\u53e5\uff0c\u57fa\u672c\u4e0a\u53ea\u9700\u8981\u58f0\u660e\u5c40\u90e8\u53d8\u91cf\u5373\u53ef\u5b8c\u6210\u8f6c\u8bd1\uff0c\u6ca1\u5fc5\u8981\u5360\u7528\u8fc7\u591a\u7684\u7bc7\u5e45\u8bb2\u89e3\u5b83\u4eec\uff0c\u56e0\u6b64\uff0c\u4e0b\u6587\u53ea\u6311\u9009\u51e0\u4e2a\u8f83\u4e3a\u590d\u6742\u7684\u51fd\u6570\u8fdb\u884c\u8bb2\u89e3\u3002",source:"@site/docs/tutorials/03-render-fabric/06-functions.md",sourceDirName:"tutorials/03-render-fabric",slug:"/tutorials/render-fabric/functions",permalink:"/docs/next/tutorials/render-fabric/functions",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorials/03-render-fabric/06-functions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8f6c\u8bd1\u6784\u9020\u51fd\u6570",permalink:"/docs/next/tutorials/render-fabric/constructors"},next:{title:"\u521d\u59cb\u5316\u56fe\u5f62\u754c\u9762\u7a0b\u5e8f",permalink:"/docs/next/tutorials/render-fabric/ui-init"}},p={},d=[{value:"addPt",id:"addpt",level:2},{value:"addSp",id:"addsp",level:2},{value:"randNumBetween",id:"randnumbetween",level:2},{value:"updateSpans",id:"updatespans",level:2}],l={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8f6c\u8bd1\u51fd\u6570\u5b9a\u4e49"},"\u8f6c\u8bd1\u51fd\u6570\u5b9a\u4e49"),(0,r.kt)("p",null,"\u90e8\u5206\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\u53ea\u662f\u4e00\u4e9b\u7b80\u5355\u7684\u8bed\u53e5\uff0c\u57fa\u672c\u4e0a\u53ea\u9700\u8981\u58f0\u660e\u5c40\u90e8\u53d8\u91cf\u5373\u53ef\u5b8c\u6210\u8f6c\u8bd1\uff0c\u6ca1\u5fc5\u8981\u5360\u7528\u8fc7\u591a\u7684\u7bc7\u5e45\u8bb2\u89e3\u5b83\u4eec\uff0c\u56e0\u6b64\uff0c\u4e0b\u6587\u53ea\u6311\u9009\u51e0\u4e2a\u8f83\u4e3a\u590d\u6742\u7684\u51fd\u6570\u8fdb\u884c\u8bb2\u89e3\u3002"),(0,r.kt)("h2",{id:"addpt"},"addPt"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"addPt()")," \u7684\u529f\u80fd\u662f\u5411 points \u6570\u7ec4\u8ffd\u52a0\u65b0\u7684 Point \u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//creates a point object instance\nfunction addPt(xp,yp) {\n  points.push( new Point( xPct(xp), yPct(yp) ) );\n}\n")),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u5728 C \u8bed\u8a00\u4e2d\u662f\u7528\u6307\u9488\u5b9e\u73b0\u6570\u7ec4\u7684\uff0c\u9700\u8981\u5148\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"realloc()")," \u6269\u5c55\u6570\u7ec4\u7a7a\u95f4\uff0c\u7136\u540e\u63d2\u5165\u65b0\u5143\u7d20\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// creates a point object instance\nvoid addPt(double xp, double yp)\n{\n        Point pt = createPoint(xPct(xp), yPct(yp));\n        Point *newPoints = realloc(points, sizeof(Point) * (pointCount + 1));\n        if (newPoints == NULL || pt == NULL) {\n                return;\n        }\n        newPoints[pointCount] = pt;\n        points = newPoints;\n}\n")),(0,r.kt)("h2",{id:"addsp"},"addSp"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"addSp()")," \u7684\u529f\u80fd\u662f\u5411 spans \u6570\u7ec4\u8ffd\u52a0\u65b0\u7684 Span \u5bf9\u8c61\u3002\u5b83\u7684\u8f6c\u8bd1\u65b9\u6cd5\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"addPt()")," \u662f\u76f8\u4f3c\u7684\uff0c\u56e0\u6b64\uff0c\u6b64\u5904\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,r.kt)("h2",{id:"randnumbetween"},"randNumBetween"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"randNumBetween()")," \u7684\u529f\u80fd\u662f\u751f\u6210\u6307\u5b9a\u8303\u56f4\u5185\u7684\u968f\u673a\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//generates random number between a minimum and maximum value\nfunction randNumBetween(min,max) {\n  return Math.floor(Math.random()*(max-min+1))+min;\n}\n")),(0,r.kt)("p",null,"\u5728 C \u8bed\u8a00\u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"stdlib.h")," \u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"rand()")," \u51fd\u6570\u83b7\u53d6\u968f\u673a\u6570\uff0c\u914d\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," \u53d6\u6a21\u8fd0\u7b97\u7b26\u53ef\u4ee5\u9650\u5b9a\u6570\u503c\u8303\u56f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// generates random number between a minimum and maximum value\nint randNumBetween(int min, int max)\n{\n        return (int)(rand() % (max - min + 1)) + min;\n}\n")),(0,r.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u4f1a\u5728\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"rand()")," \u4e4b\u524d\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"srand()")," \u521d\u59cb\u5316\u968f\u673a\u6570\u79cd\u5b50\uff0c\u90a3\u4e48\uff0c\u8fd9\u79cd\u521d\u59cb\u5316\u64cd\u4f5c\u5c31\u53ef\u4ee5\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"Fabric_init()")," \u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"}," void Fabric_init(int fw, int fh, int canvaswidth, int canvasHeight)\n {\n         int i, j, x, y;\n         int htc = fw;    // fabric horizontal thread count\n         int vtc = fh;    // fabric vertical thread count\n\n+        srand((unsigned)time(NULL));\n         Fabric_resize(canvaswidth, canvasHeight);\n")),(0,r.kt)("h2",{id:"updatespans"},"updateSpans"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"updateSpans()")," \u7684\u529f\u80fd\u662f\u66f4\u65b0\u4e24\u70b9\u4e4b\u95f4\u7684\u95f4\u8ddd\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// sets spans between points\nfunction updateSpans() {\n  for (var i=0; i<spans.length; i++) {\n    var s = spans[i];\n    var dx = s.p2.cx - s.p1.cx;  // distance between x values\n    var dy = s.p2.cy - s.p1.cy;  // distance between y values\n    var d = Math.sqrt( dx*dx + dy*dy);  // distance between the points\n    if (d > s.l*fabricStrength) { spans.splice(i,1); }  // tear if over-stretched\n    var r = s.l / d;    // ratio (span length over distance between points)\n    var mx = s.p1.cx + dx / 2;  // midpoint between x values\n    var my = s.p1.cy + dy / 2;  // midpoint between y values\n    var ox = dx / 2 * r;  // offset of each x value (compared to span length)\n    var oy = dy / 2 * r;  // offset of each y value (compared to span length)\n    if (s.p1.pinned === false) {\n      s.p1.cx = mx - ox;  // updates span's first point x value\n      s.p1.cy = my - oy;  // updates span's first point y value\n    }\n    if (s.p2.pinned === false) {\n      s.p2.cx = mx + ox;  // updates span's second point x value\n      s.p2.cy = my + oy;  // updates span's second point y value\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u5b83\u7684\u5185\u90e8\u4f1a\u8c03\u7528\u6570\u7ec4\u64cd\u4f5c\u65b9\u6cd5 ",(0,r.kt)("inlineCode",{parentName:"p"},"splice()")," \u5220\u9664 spans \u6570\u7ec4\u4e2d\u7684\u5143\u7d20\uff0c\u5982\u679c\u7528 C \u8bed\u8a00\u5b9e\u73b0\u4e0e\u4e4b\u76f8\u540c\u7684\u529f\u80fd\u7684\u8bdd\u4f1a\u9700\u8981\u591a\u5199\u4e00\u70b9\u4ee3\u7801\uff0c\u6211\u4eec\u4e0d\u59a8\u7b80\u5355\u70b9\uff0c\u5148\u91ca\u653e\u6570\u7ec4\u5185\u6307\u5b9a\u4e0b\u6807\u7684\u5143\u7d20\uff0c\u7136\u540e\u8d4b\u503c\u4e3a NULL\uff0c\u4f7f\u7528\u6570\u7ec4\u5143\u7d20\u524d\u5148\u5224\u65ad\u662f\u5426 NULL\u3002\u5b8c\u6574\u7684\u5b9e\u73b0\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// sets spans between points\nvoid Fabric_updateSpans(void)\n{\n        int i;\n        for (i = 0; i < spanCount; i++) {\n                Span s = spans[i];\n                if (!s) {\n                        continue;\n                }\n                // distance between x values\n                double dx = s->p2->cx - s->p1->cx;\n                // distance between y values\n                double dy = s->p2->cy - s->p1->cy;\n                // distance between the points\n                double d = sqrt(dx * dx + dy * dy);\n                // tear if over-stretched\n                if (d > s->l * fabricStrength) {\n                        free(spans[i]);\n                        spans[i] = NULL;\n                }\n                // ratio (span length over distance between points) midpoint\n                // between x values\n                double r = s->l / d;\n                double mx = s->p1->cx + dx / 2;\n                // midpoint between y values\n                double my = s->p1->cy + dy / 2;\n                // offset of each x value (compared to span length)\n                double ox = dx / 2 * r;\n                // offset of each y value (compared to span length)\n                double oy = dy / 2 * r;\n                if (!s->p1->pinned) {\n                        // updates span's first point x value\n                        s->p1->cx = mx - ox;\n                        // updates span's first point y value\n                        s->p1->cy = my - oy;\n                }\n                if (!s->p2->pinned) {\n                        // updates span's second point x value\n                        s->p2->cx = mx + ox;\n                        // updates span's second point y value\n                        s->p2->cy = my + oy;\n                }\n        }\n}\n")),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u5e03\u6599\u6a21\u62df\u7b97\u6cd5\u7684\u6838\u5fc3\u90e8\u5206\u5df2\u7ecf\u8f6c\u8bd1\u5b8c\u6210\uff0c\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u4e3a\u5176\u6784\u9020\u4e00\u4e2a\u56fe\u5f62\u754c\u9762\uff0c\u4ee5\u8ba9\u6e32\u67d3\u7ed3\u679c\u8f93\u51fa\u5230\u5c4f\u5e55\u4e0a\u5e76\u80fd\u591f\u54cd\u5e94\u9f20\u6807\u64cd\u4f5c\u3002"))}u.isMDXComponent=!0}}]);