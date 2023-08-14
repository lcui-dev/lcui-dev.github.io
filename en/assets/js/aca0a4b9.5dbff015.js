"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={},o="\u5b9a\u65f6\u91cd\u7ed8",c={unversionedId:"tutorials/render-fabric/ui-animation",id:"tutorials/render-fabric/ui-animation",title:"\u5b9a\u65f6\u91cd\u7ed8",description:"JS \u6e90\u7801\u4e2d\u7684 update() \u51fd\u6570\u901a\u8fc7\u8c03\u7528 window.requestAnimationFrame() \u6765\u8ba9 update() \u80fd\u591f\u5728\u6bcf\u6b21\u52a8\u753b\u5e27\u88ab\u8c03\u7528\uff0c\u867d\u7136 LCUI \u4e2d\u5e76\u6ca1\u6709\u8fd9\u79cd\u51fd\u6570\uff0c\u4f46\u53ef\u4ee5\u7528\u5b9a\u65f6\u5668\u5b9e\u73b0\u7c7b\u4f3c\u7684\u6548\u679c\u3002",source:"@site/docs/tutorials/03-render-fabric/11-ui-animation.md",sourceDirName:"tutorials/03-render-fabric",slug:"/tutorials/render-fabric/ui-animation",permalink:"/en/docs/next/tutorials/render-fabric/ui-animation",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorials/03-render-fabric/11-ui-animation.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0\u4e8b\u4ef6\u54cd\u5e94",permalink:"/en/docs/next/tutorials/render-fabric/ui-events"},next:{title:"\u4f7f\u7528 cairo \u7ed8\u5236\u56fe\u5f62",permalink:"/en/docs/next/tutorials/render-fabric/cairo-rendering"}},u={},l=[],p={toc:l},d="wrapper";function s(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b9a\u65f6\u91cd\u7ed8"},"\u5b9a\u65f6\u91cd\u7ed8"),(0,i.kt)("p",null,"JS \u6e90\u7801\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"update()")," \u51fd\u6570\u901a\u8fc7\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"window.requestAnimationFrame()")," \u6765\u8ba9 ",(0,i.kt)("inlineCode",{parentName:"p"},"update()")," \u80fd\u591f\u5728\u6bcf\u6b21\u52a8\u753b\u5e27\u88ab\u8c03\u7528\uff0c\u867d\u7136 LCUI \u4e2d\u5e76\u6ca1\u6709\u8fd9\u79cd\u51fd\u6570\uff0c\u4f46\u53ef\u4ee5\u7528\u5b9a\u65f6\u5668\u5b9e\u73b0\u7c7b\u4f3c\u7684\u6548\u679c\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u7ed9\u90e8\u4ef6\u5b9a\u4e49\u79c1\u6709\u6570\u636e\u7684\u7ed3\u6784\uff0c\u91cc\u9762\u7684 timer \u6210\u5458\u7528\u4e8e\u5b58\u653e\u5b9a\u65f6\u5668\u7684\u7f16\u53f7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct ui_fabric_t {\n        int timer;\n} ui_fabric_t;\n")),(0,i.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u5b9a\u65f6\u5668\u7684\u521b\u5efa\u548c\u9500\u6bc1\u4ee3\u7801\uff0c\u4ee5\u53ca\u76f8\u5173\u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/main.c",title:"src/main.c"},"void ui_fabric_on_frame(ui_widget_t *w)\n{\n\n}\n\nvoid ui_fabric_on_init(ui_widget_t *w)\n{\n        ui_fabric_t *data;\n        ui_fabric_proto->proto->init(w);\n        data = ui_widget_add_data(w, ui_fabric_proto, sizeof(ui_fabric_t));\n        data->timer = lcui_set_interval(LCUI_MAX_FRAME_MSEC,\n                                        (timer_callback)ui_fabric_on_frame, w);\n}\n\nvoid ui_fabric_on_destroy(ui_widget_t *w)\n{\n        ui_fabric_t *data;\n        data = ui_widget_get_data(w, ui_fabric_proto);\n        lcui_destroy_timer(data->timer);\n}\n")),(0,i.kt)("p",null,"\u8fd9\u6837\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"ui_fabric_on_frame()")," \u51fd\u6570\u5c31\u80fd\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u88ab\u8c03\u7528\u3002"))}s.isMDXComponent=!0}}]);