"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),o=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=o(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=o(n),m=l,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||a;return n?i.createElement(k,r(r({ref:t},u),{},{components:n})):i.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:l,r[1]=d;for(var o=2;o<a;o++)r[o]=n[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var i=n(7462),l=(n(7294),n(3905));const a={description:"\u89c6\u9891\u9a71\u52a8\u7684\u6982\u5ff5\u548c\u5f00\u53d1\u65b9\u5f0f\u4ecb\u7ecd\u3002"},r="\u89c6\u9891",d={unversionedId:"guides/driver/video",id:"guides/driver/video",title:"\u89c6\u9891",description:"\u89c6\u9891\u9a71\u52a8\u7684\u6982\u5ff5\u548c\u5f00\u53d1\u65b9\u5f0f\u4ecb\u7ecd\u3002",source:"@site/docs/guides/driver/video.md",sourceDirName:"guides/driver",slug:"/guides/driver/video",permalink:"/en/docs/next/guides/driver/video",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/guides/driver/video.md",tags:[],version:"current",frontMatter:{description:"\u89c6\u9891\u9a71\u52a8\u7684\u6982\u5ff5\u548c\u5f00\u53d1\u65b9\u5f0f\u4ecb\u7ecd\u3002"},sidebar:"docsSidebar",previous:{title:"\u89e6\u63a7",permalink:"/en/docs/next/guides/driver/touchscreen"}},p={},o=[{value:"\u8868\u9762",id:"\u8868\u9762",level:3},{value:"\u663e\u793a\u6a21\u5f0f",id:"\u663e\u793a\u6a21\u5f0f",level:3},{value:"\u9a71\u52a8\u63a5\u53e3",id:"\u9a71\u52a8\u63a5\u53e3",level:3},{value:"name",id:"name",level:4},{value:"getWidth",id:"getwidth",level:4},{value:"getHeight",id:"getheight",level:4},{value:"create",id:"create",level:4},{value:"destroy",id:"destroy",level:4},{value:"close",id:"close",level:4},{value:"resize",id:"resize",level:4},{value:"move",id:"move",level:4},{value:"show",id:"show",level:4},{value:"hide",id:"hide",level:4},{value:"update",id:"update",level:4},{value:"present",id:"present",level:4},{value:"isReady",id:"isready",level:4},{value:"beginPaint",id:"beginpaint",level:4},{value:"endPaint",id:"endpaint",level:4},{value:"setCaptionW",id:"setcaptionw",level:4},{value:"setRenderMode",id:"setrendermode",level:4},{value:"getHandle",id:"gethandle",level:4},{value:"getSurfaceWidth",id:"getsurfacewidth",level:4},{value:"getSurfaceHeight",id:"getsurfaceheight",level:4},{value:"setOpacity",id:"setopacity",level:4},{value:"bindEvent",id:"bindevent",level:4},{value:"\u5f00\u53d1\u65b9\u5f0f",id:"\u5f00\u53d1\u65b9\u5f0f",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}],u={toc:o},c="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u89c6\u9891"},"\u89c6\u9891"),(0,l.kt)("p",null,"\u89c6\u9891\u9a71\u52a8\u8d1f\u8d23\u5b9e\u73b0 LCUI \u5e94\u7528\u7a0b\u5e8f\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u89c6\u7a97\u7cfb\u7edf\u7684\u4ea4\u4e92\uff0c\u8fd9\u4e9b\u4ea4\u4e92\u5305\u62ec\u5411 LCUI \u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u5c4f\u5e55\u5c3a\u5bf8\u3001\u5c06\u7ec4\u4ef6\u7684\u4fe1\u606f\u548c\u6e32\u67d3\u7ed3\u679c\u540c\u6b65\u5230\u5bf9\u5e94\u7684\u7a97\u53e3\u4e2d\uff0c\u662f LCUI \u7684\u51e0\u4e2a\u9a71\u52a8\u6a21\u5757\u4e2d\u6700\u4e3a\u590d\u6742\u7684\u4e00\u4e2a\u3002"),(0,l.kt)("h3",{id:"\u8868\u9762"},"\u8868\u9762"),(0,l.kt)("p",null,"\u8868\u9762\uff08Surface\uff09\u662f\u7a97\u53e3\u7684\u62bd\u8c61\uff0c\u4e5f\u662f LCUI \u7684\u7ec4\u4ef6\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u7684\u7a97\u53e3\u8fdb\u884c\u4ea4\u4e92\u7684\u4e2d\u95f4\u5c42\uff0c\u5b83\u5c4f\u853d\u4e86\u5404\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u89c6\u7a97\u64cd\u4f5c\u63a5\u53e3\u7684\u5dee\u5f02\u548c\u5b9e\u73b0\u7ec6\u8282\uff0c\u4f7f\u5f97 LCUI \u5e94\u7528\u7a0b\u5e8f\u53ea\u9700\u8981\u4e13\u6ce8\u4e8e\u5c06\u56fe\u5f62\u5185\u5bb9\u6e32\u67d3\u5230\u8868\u9762\u4e0a\uff0c\u5269\u4e0b\u7684\u5de5\u4f5c\u5219\u4ea4\u7ed9\u89c6\u9891\u9a71\u52a8\uff0c\u5b83\u4f1a\u5c06\u8868\u9762\u7684\u5c3a\u5bf8\u3001\u4f4d\u7f6e\u3001\u6807\u9898\u7b49\u4fe1\u606f\u4ee5\u53ca\u56fe\u5f62\u5185\u5bb9\u540c\u6b65\u5230\u5bf9\u5e94\u7684\u7a97\u53e3\u3002"),(0,l.kt)("p",null,"LCUI \u5c06\u8868\u9762\u7684\u6570\u636e\u7ed3\u6784\u4ea4\u7531\u89c6\u9891\u9a71\u52a8\u5728\u5185\u90e8\u5b9a\u4e49\uff0c\u5e94\u7528\u5c42\u4ee3\u7801\u4ec5\u9760 ",(0,l.kt)("inlineCode",{parentName:"p"},"LCUI_Surface")," \u7c7b\u578b\u7684\u6307\u9488\u6765\u5f15\u7528\u8868\u9762\uff0c\u5bf9\u8868\u9762\u7684\u64cd\u4f5c\u90fd\u662f\u9760\u8c03\u7528\u8868\u9762\u7684\u51fd\u6570\u6765\u5b9e\u73b0\u7684\u3002"),(0,l.kt)("h3",{id:"\u663e\u793a\u6a21\u5f0f"},"\u663e\u793a\u6a21\u5f0f"),(0,l.kt)("p",null,"\u6709\u4e09\u79cd\u663e\u793a\u6a21\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LCUI_DMODE_WINDOWED"),"\uff1a\u7a97\u53e3\u5316\u6a21\u5f0f\uff0c\u5c06\u6839\u7ec4\u4ef6\u7ed1\u5b9a\u5230\u8868\u9762\u4e0a\uff0c\u7ec4\u4ef6\u7684\u5bbd\u9ad8\u4e0e\u8868\u9762\u5bbd\u9ad8\u76f8\u540c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LCUI_DMODE_FULLSCREEN"),"\uff1a\u5168\u5c4f\u6a21\u5f0f\uff0c\u5c06\u6839\u7ec4\u4ef6\u7ed1\u5b9a\u5230\u8868\u9762\u4e0a\uff0c\u8868\u9762\u5bbd\u9ad8\u4e0e\u5c4f\u5e55\u5bbd\u9ad8\u76f8\u540c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LCUI_DMODE_SEAMLESS"),"\uff1a\u65e0\u7f1d\u6a21\u5f0f\uff0c\u4e3a\u6839\u7ec4\u4ef6\u7684\u6bcf\u4e2a\u76f4\u7cfb\u5b50\u7ec4\u4ef6\u7ed1\u5b9a\u4e00\u4e2a\u8868\u9762\u3002")),(0,l.kt)("p",null,"\u521d\u59cb\u663e\u793a\u6a21\u5f0f\u662f\u7a97\u53e3\u5316\u6a21\u5f0f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"LCUIDisplay_SetMode()")," \u51fd\u6570\u66f4\u6539\u663e\u793a\u6a21\u5f0f\u3002"),(0,l.kt)("h3",{id:"\u9a71\u52a8\u63a5\u53e3"},"\u9a71\u52a8\u63a5\u53e3"),(0,l.kt)("p",null,"\u89c6\u9891\u9a71\u52a8\u63a5\u53e3\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/include/LCUI/display.h#L79-L102"},"include/LCUI/display.h")," \u4e2d\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct LCUI_DisplayDriverRec_ {\n        char name[256];\n        int (*getWidth)(void);\n        int (*getHeight)(void);\n        LCUI_Surface (*create)(void);\n        void (*destroy)(LCUI_Surface);\n        void (*close)(LCUI_Surface);\n        void (*resize)(LCUI_Surface, int, int);\n        void (*move)(LCUI_Surface, int, int);\n        void (*show)(LCUI_Surface);\n        void (*hide)(LCUI_Surface);\n        void (*update)(LCUI_Surface);\n        void (*present)(LCUI_Surface);\n        LCUI_BOOL (*isReady)(LCUI_Surface);\n        LCUI_PaintContext (*beginPaint)(LCUI_Surface, LCUI_Rect *);\n        void (*endPaint)(LCUI_Surface, LCUI_PaintContext);\n        void (*setCaptionW)(LCUI_Surface, const wchar_t *);\n        void (*setRenderMode)(LCUI_Surface, int);\n        void *(*getHandle)(LCUI_Surface);\n        int (*getSurfaceWidth)(LCUI_Surface);\n        int (*getSurfaceHeight)(LCUI_Surface);\n        void (*setOpacity)(LCUI_Surface, float);\n        int (*bindEvent)(int, LCUI_EventFunc, void *, void (*)(void *));\n} LCUI_DisplayDriverRec, *LCUI_DisplayDriver;\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u8fd9\u4e2a\u7ed3\u6784\u4f53\u4e2d\u7684\u6210\u5458\u3002"),(0,l.kt)("h4",{id:"name"},"name"),(0,l.kt)("p",null,"\u89c6\u9891\u9a71\u52a8\u7684\u540d\u79f0\uff0c\u7528\u4e8e\u6807\u8bc6\u5f53\u524d\u4f7f\u7528\u7684\u662f\u54ea\u4e2a\u89c6\u9891\u9a71\u52a8\u3002"),(0,l.kt)("h4",{id:"getwidth"},"getWidth"),(0,l.kt)("p",null,"\u83b7\u53d6\u5c4f\u5e55\u7684\u5bbd\u5ea6\u3002"),(0,l.kt)("h4",{id:"getheight"},"getHeight"),(0,l.kt)("p",null,"\u83b7\u53d6\u5c4f\u5e55\u7684\u9ad8\u5ea6\u3002"),(0,l.kt)("h4",{id:"create"},"create"),(0,l.kt)("p",null,"\u521b\u5efa\u8868\u9762\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u521d\u59cb\u5316\u5e27\u7f13\u5b58\u3001\u521d\u59cb\u5316\u8868\u9762\u4fe1\u606f\u3001\u8c03\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684\u63a5\u53e3\u521b\u5efa\u7a97\u53e3\u3002"),(0,l.kt)("h4",{id:"destroy"},"destroy"),(0,l.kt)("p",null,"\u9500\u6bc1\u8868\u9762\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u91ca\u653e\u5e27\u7f13\u5b58\u3001\u91ca\u653e\u8868\u9762\u4fe1\u606f\u3001\u8c03\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684\u63a5\u53e3\u5173\u95ed\u7a97\u53e3\u3002"),(0,l.kt)("h4",{id:"close"},"close"),(0,l.kt)("p",null,"\u5173\u95ed\u8868\u9762\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u505a\u9500\u6bc1\u7a97\u53e3\u7684\u51c6\u5907\u5de5\u4f5c\u3002\u8fd9\u4e2a\u51fd\u6570\u662f\u53c2\u8003 Windows \u7684\u7a97\u53e3\u5173\u95ed\u6d41\u7a0b\u800c\u8bbe\u8ba1\u7684\uff0c\u5173\u95ed\u7a97\u53e3\u65f6\u4f1a\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"WM_CLOSE")," \u6d88\u606f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"DefWindowProc()")," \u51fd\u6570\u5bf9\u8fd9\u4e2a\u6d88\u606f\u7684\u5904\u7406\u5c31\u662f\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"DestroyWindow()")," \u9500\u6bc1\u7a97\u53e3\u3002"),(0,l.kt)("h4",{id:"resize"},"resize"),(0,l.kt)("p",null,"\u8c03\u6574\u8868\u9762\u5c3a\u5bf8\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u91cd\u65b0\u5206\u914d\u5e27\u7f13\u5b58\u3001\u8c03\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684\u63a5\u53e3\u8c03\u6574\u7a97\u53e3\u5c3a\u5bf8\u3002"),(0,l.kt)("h4",{id:"move"},"move"),(0,l.kt)("p",null,"\u79fb\u52a8\u8868\u9762\u4f4d\u7f6e\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u8c03\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684\u63a5\u53e3\u8c03\u6574\u7a97\u53e3\u4f4d\u7f6e\u3002"),(0,l.kt)("h4",{id:"show"},"show"),(0,l.kt)("p",null,"\u663e\u793a\u8868\u9762\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u8c03\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684\u63a5\u53e3\u663e\u793a\u7a97\u53e3\u3002"),(0,l.kt)("h4",{id:"hide"},"hide"),(0,l.kt)("p",null,"\u9690\u85cf\u8868\u9762\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u8c03\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684\u63a5\u53e3\u9690\u85cf\u7a97\u53e3\u3002"),(0,l.kt)("h4",{id:"update"},"update"),(0,l.kt)("p",null,"\u66f4\u65b0\u8868\u9762\u3002\u73b0\u6709\u7684\u89c6\u9891\u9a71\u52a8\u7531\u4e8e\u8003\u8651\u5230\u5728\u5176\u5b83\u7ebf\u7a0b\u4e0a\u64cd\u4f5c\u8868\u9762\u7684\u60c5\u51b5\uff0c\u6240\u4ee5\u88ab\u8bbe\u8ba1\u6210\u9700\u8981\u8c03\u7528 update \u51fd\u6570\u624d\u4f1a\u5e94\u7528\u6240\u6709\u7684\u8868\u9762\u64cd\u4f5c\u3002\u4e0d\u8fc7\u73b0\u5728\u8fd8\u6ca1\u6709\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u5ffd\u7565\u8fd9\u4e2a\u51fd\u6570\u3002"),(0,l.kt)("h4",{id:"present"},"present"),(0,l.kt)("p",null,"\u5448\u73b0\u8868\u9762\u7684\u6700\u65b0\u5185\u5bb9\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u5c06\u5e27\u7f13\u5b58\u4e2d\u7684\u5185\u5bb9\u540c\u6b65\u5230\u4e3b\u7a97\u53e3\u4e2d\u3002"),(0,l.kt)("h4",{id:"isready"},"isReady"),(0,l.kt)("p",null,"\u8868\u9762\u662f\u5426\u5df2\u7ecf\u51c6\u5907\u5c31\u7eea\u3002\u5982\u679c\u4f60\u7684\u8868\u9762\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"create()")," \u51fd\u6570\u4e2d\u56e0\u67d0\u4e9b\u539f\u56e0\u65e0\u6cd5\u7acb\u523b\u5b8c\u6210\u521d\u59cb\u5316\uff0c\u90a3\u4e48\u53ef\u4ee5\u7528\u8fd9\u4e2a\u51fd\u6570\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"FALSE")," \u544a\u77e5 LCUI \u8fd9\u4e2a\u8868\u9762\u6682\u65f6\u4e0d\u80fd\u7528\uff0c\u9700\u8981\u7b49\u5f85\u4e00\u4f1a\uff0c\u76f4\u5230\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"TRUE")," \u4e3a\u6b62\u3002"),(0,l.kt)("h4",{id:"beginpaint"},"beginPaint"),(0,l.kt)("p",null,"\u5f00\u59cb\u7ed8\u5236\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u5b8c\u6210\u7ed8\u5236\u524d\u7684\u51c6\u5907\u5de5\u4f5c\uff0c\u4f8b\u5982\u521b\u5efa\u7ed8\u5236\u7f13\u5b58\u533a\u6765\u5b58\u50a8\u63a5\u4e0b\u6765\u7ed8\u5236\u7684\u5185\u5bb9\uff0c\u7136\u540e\u8fd4\u56de\u7ed8\u5236\u4e0a\u4e0b\u6587\u3002"),(0,l.kt)("h4",{id:"endpaint"},"endPaint"),(0,l.kt)("p",null,"\u7ed3\u675f\u7ed8\u5236\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u5c06\u5df2\u7ed8\u5236\u7684\u5185\u5bb9\u66f4\u65b0\u5230\u5e27\u7f13\u5b58\u4e2d\u3002"),(0,l.kt)("h4",{id:"setcaptionw"},"setCaptionW"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u8868\u9762\u7684\u8bf4\u660e\u6587\u5b57\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u5c06\u8868\u9762\u7684\u8bf4\u660e\u6587\u5b57\u66f4\u65b0\u5230\u7a97\u53e3\u6807\u9898\u4e0a\u3002"),(0,l.kt)("h4",{id:"setrendermode"},"setRenderMode"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u8868\u9762\u7684\u6e32\u67d3\u6a21\u5f0f\u3002\u73b0\u5728\u7684\u6e32\u67d3\u6a21\u5f0f\u6709\u62c9\u4f38\u548c\u76f4\u63a5\u586b\u5145\u8fd9\u4e24\u79cd\uff0c\u4e0d\u8fc7\u81ea\u5b9a\u4e49\u6e32\u67d3\u6a21\u5f0f\u7684\u573a\u666f\u5f88\u5c11\uff0c\u4f60\u53ef\u4ee5\u5ffd\u7565\u8fd9\u4e2a\u51fd\u6570\u3002"),(0,l.kt)("h4",{id:"gethandle"},"getHandle"),(0,l.kt)("p",null,"\u83b7\u53d6\u8868\u9762\u7684\u7a97\u53e3\u53e5\u67c4\u3002\u5728 Windows \u7684\u89c6\u9891\u9a71\u52a8\u4e2d\uff0c\u8fd9\u4e2a\u51fd\u6570\u88ab\u7528\u4e8e\u5728\u4e8b\u4ef6\u5faa\u73af\u9a71\u52a8\u4e2d\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"p"},"WM_CLOSE")," \u6d88\u606f\u65f6\u5224\u65ad\u5e94\u8be5\u5173\u95ed\u54ea\u4e2a\u8868\u9762\u3002\u5728\u5176\u5b83\u7cfb\u7edf\u7684\u89c6\u9891\u9a71\u52a8\u4e2d\u5e76\u6ca1\u6709\u8fd9\u79cd\u5904\u7406\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"getHandle()")," \u7684\u8fd4\u56de\u503c\u4e3a NULL\uff0c\u5b83\u4eec\u5bf9\u7a97\u53e3\u5173\u95ed\u4e8b\u4ef6\u7684\u54cd\u5e94\u662f\u76f4\u63a5\u9000\u51fa LCUI\u3002"),(0,l.kt)("h4",{id:"getsurfacewidth"},"getSurfaceWidth"),(0,l.kt)("p",null,"\u83b7\u53d6\u8868\u9762\u5bbd\u5ea6\u3002"),(0,l.kt)("h4",{id:"getsurfaceheight"},"getSurfaceHeight"),(0,l.kt)("p",null,"\u83b7\u53d6\u8868\u9762\u9ad8\u5ea6\u3002"),(0,l.kt)("h4",{id:"setopacity"},"setOpacity"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u8868\u9762\u900f\u660e\u5ea6\u3002\u5176\u5b83\u89c6\u9891\u9a71\u52a8\u6ca1\u6709\u5b9e\u73b0\u8be5\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5ffd\u7565\u8fd9\u4e2a\u51fd\u6570\u3002"),(0,l.kt)("h4",{id:"bindevent"},"bindEvent"),(0,l.kt)("p",null,"\u7ed1\u5b9a\u4e8b\u4ef6\u3002LCUI \u4f1a\u5728\u4e3b\u7a97\u53e3\u4e3b\u52a8\u89e6\u53d1\u5c3a\u5bf8\u53d8\u5316\u3001\u91cd\u7ed8\u3001\u66f4\u65b0\u5c3a\u5bf8\u9650\u5236\u65f6\u505a\u4e00\u4e9b\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a\u5728\u7528\u6237\u4e3b\u52a8\u62d6\u62fd\u8c03\u6574\u7a97\u53e3\u5927\u5c0f\u65f6\uff0cLCUI \u4f1a\u5c06\u8868\u9762\u7684\u5c3a\u5bf8\u540c\u6b65\u5230\u4e0e\u4e4b\u7ed1\u5b9a\u7684\u7ec4\u4ef6\u4e0a\u3002"),(0,l.kt)("h3",{id:"\u5f00\u53d1\u65b9\u5f0f"},"\u5f00\u53d1\u65b9\u5f0f"),(0,l.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u5047\u8bbe\u4f60\u60f3\u6dfb\u52a0\u7684\u662f\u9002\u7528\u4e8e Mac OS \u7684\u9a71\u52a8\uff0c\u90a3\u4e48\u9700\u8981\u5982\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6309\u7167 ",(0,l.kt)("inlineCode",{parentName:"p"},"LCUI_DisplayDriver")," \u4e2d\u7684\u51fd\u6570\u6307\u9488\u7684\u539f\u578b\u6765\u5b9a\u4e49\u51fd\u6570\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"LCUI_CreateDarwinDisplayDriver")," \u51fd\u6570\uff0c\u5728\u8fd9\u4e2a\u51fd\u6570\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"LCUI_DisplayDriver")," \u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u7136\u540e\u7ed9\u5b83\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u548c\u51fd\u6570\u6307\u9488\u8bbe\u7f6e\u6b63\u786e\u7684\u503c\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/blob/master/include/LCUI/platform.h"}," include/LCUI/platform.h")," \u4e2d\u6dfb\u52a0\u9488\u5bf9\u8be5\u64cd\u4f5c\u7cfb\u7edf\u7684\u9884\u5904\u7406\u6307\u4ee4\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c"},"#elif __APPLE__\n        #define LCUI_CreateDisplayDriver LCUI_CreateDarwinDisplayDriver\n...\n")))),(0,l.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u66f4\u591a\uff0c\u53ef\u53c2\u8003\u73b0\u6709\u7684 Windows \u548c Linux \u7cfb\u7edf\u7684\u9a71\u52a8\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/blob/master/include/LCUI/platform/linux/linux_display.h"},"include/LCUI/platform/linux/linux","_","display.h")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/blob/master/include/LCUI/platform/linux/linux_fbdisplay.h"},"include/LCUI/platform/linux/linux","_","fbdisplay.h")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/blob/master/include/LCUI/platform/linux/linux_x11display.h"},"include/LCUI/platform/linux/linux","_","x11display.h")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/blob/master/include/LCUI/platform/windows/windows_display.h"},"include/LCUI/platform/windows/windows","_","display.h")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/blob/master/src/platform/linux/linux_display.c"},"src/platform/linux/linux","_","display.c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/blob/master/src/platform/linux/linux_x11display.c"},"src/platform/linux/linux","_","x11display.c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/blob/master/src/platform/linux/linux_fbdisplay.c"},"src/platform/linux/linux","_","fbdisplay.c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/blob/master/src/platform/windows/windows_display.c"},"src/platform/windows/windows","_","display.c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/blob/master/src/platform/windows/uwp_renderer.cpp"},"src/platform/windows/uwp","_","renderer.cpp"))),(0,l.kt)("h3",{id:"\u5f85\u529e\u4e8b\u9879"},"\u5f85\u529e\u4e8b\u9879"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8c03\u6574\u89c6\u9891\u9a71\u52a8\u63a5\u53e3\u6210\u5458\u7684\u547d\u540d")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getWidth")," \u83b7\u53d6\u7684\u662f\u5c4f\u5e55\u7684\u5bbd\u5ea6\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"getSurfaceWidth")," \u83b7\u53d6\u7684\u662f\u8868\u9762\u7684\u5bbd\u5ea6\uff0c\u6309\u7167\u8fd9\u79cd\u547d\u540d\u98ce\u683c\uff0c\u5bb9\u6613\u8ba9\u4eba\u4ee5\u4e3a\u4e0e\u8868\u9762\u76f8\u5173\u7684\u51fd\u6570\u6307\u9488\u7684\u547d\u540d\u5e94\u8be5\u90fd\u5e26\u6709 Surface\uff0c\u7136\u800c\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709\u3002\u6211\u4eec\u5e94\u8be5\u8003\u8651\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"getWidth")," \u6539\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"getScreenWidth"),"\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"getSurfaceWidth")," \u6539\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"getWidth"),"\uff0c\u4f46\u8fd9\u6837\u6539\u7684\u8bdd\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"LCUI_DisplayDriver")," \u662f\u4e0d\u662f\u5e94\u8be5\u91cd\u547d\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"LCUI_SurfaceDriver")," \uff1f\u6bd5\u7adf\u8fd9\u4e2a\u63a5\u53e3\u7684\u64cd\u4f5c\u96c6\u5927\u90fd\u662f\u9488\u5bf9\u8868\u9762\u7684\uff0c\u800c\u4e0d\u662f\u5c4f\u5e55\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u68c0\u9a8c\u5168\u5c4f\u6a21\u5f0f\u548c\u65e0\u7f1d\u6a21\u5f0f\u662f\u5426\u5de5\u4f5c\u6b63\u5e38")),(0,l.kt)("p",null,"\u8fd9\u4e24\u4e2a\u663e\u793a\u6a21\u5f0f\u5df2\u7ecf\u5f88\u4e45\u6ca1\u6709\u6d4b\u8bd5\u8fc7\u4e86\uff0c\u9700\u8981\u6dfb\u52a0\u6d4b\u8bd5\u7528\u4f8b\u6765\u68c0\u9a8c\u662f\u5426\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\u3002"))}s.isMDXComponent=!0}}]);