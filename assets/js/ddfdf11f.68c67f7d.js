"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="\u5f00\u59cb",c={unversionedId:"tutorials/render-fabric/intro",id:"tutorials/render-fabric/intro",title:"\u5f00\u59cb",description:"\u672c\u6559\u7a0b\u5c06\u4ee5\u4e00\u4e2a JavaScript \u5b9e\u73b0\u7684\u5e03\u6599\u6a21\u62df\u7a0b\u5e8f\u4e3a\u53c2\u8003\u5bf9\u8c61\uff0c\u8bb2\u89e3\u5982\u4f55\u5c06\u5b83\u7684 JavaScript \u4ee3\u7801\u8f6c\u8bd1\u4e3a C \u4ee3\u7801\uff0c\u5e76\u4f7f\u7528 LCUI \u5b9e\u73b0\u76f8\u540c\u7684\u4ea4\u4e92\u548c\u6e32\u67d3\u6548\u679c\u3002\u6ce8\u610f\uff0c\u672c\u6587\u53ea\u5173\u6ce8\u5982\u4f55\u8f6c\u8bd1\uff0c\u4e0d\u6d89\u53ca\u5e03\u6599\u6a21\u62df\u7b97\u6cd5\u3002",source:"@site/docs/tutorials/03-render-fabric/01-intro.md",sourceDirName:"tutorials/03-render-fabric",slug:"/tutorials/render-fabric/intro",permalink:"/docs/next/tutorials/render-fabric/intro",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorials/03-render-fabric/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6e32\u67d3\u5e03\u6599\u52a8\u753b",permalink:"/docs/next/tutorials/render-fabric"},next:{title:"\u8bbe\u8ba1\u76ee\u5f55\u7ed3\u6784",permalink:"/docs/next/tutorials/render-fabric/design"}},l={},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u5c06\u4ee5\u4e00\u4e2a JavaScript \u5b9e\u73b0\u7684\u5e03\u6599\u6a21\u62df\u7a0b\u5e8f\u4e3a\u53c2\u8003\u5bf9\u8c61\uff0c\u8bb2\u89e3\u5982\u4f55\u5c06\u5b83\u7684 JavaScript \u4ee3\u7801\u8f6c\u8bd1\u4e3a C \u4ee3\u7801\uff0c\u5e76\u4f7f\u7528 LCUI \u5b9e\u73b0\u76f8\u540c\u7684\u4ea4\u4e92\u548c\u6e32\u67d3\u6548\u679c\u3002\u6ce8\u610f\uff0c\u672c\u6587\u53ea\u5173\u6ce8\u5982\u4f55\u8f6c\u8bd1\uff0c\u4e0d\u6d89\u53ca\u5e03\u6599\u6a21\u62df\u7b97\u6cd5\u3002"),(0,a.kt)("p",null,"\u4e3a\u65b9\u4fbf\u4e66\u5199\uff0c\u672c\u6559\u7a0b\u4f7f\u7528\u201cJS \u6e90\u7801\u201d\u6307\u4ee3\u5e03\u6599\u6a21\u62df\u7a0b\u5e8f\u7684 JavaScript \u6e90\u7801\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u5728\u4e0b\u65b9\u4f53\u9a8c\u8be5\u7a0b\u5e8f\u7684\u64cd\u4f5c\u65b9\u5f0f\u548c\u6e32\u67d3\u6548\u679c\uff0c\u540c\u65f6\u7b80\u8981\u6d4f\u89c8 JS \u6e90\u7801\u3002"),(0,a.kt)("iframe",{height:"600",style:{width:"100%"},scrolling:"no",title:"Delicate Fabric",src:"https://codepen.io/matthewmain/embed/oyyadr?default-tab=js%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/matthewmain/pen/oyyadr"},"Delicate Fabric")," by Matthew Main (",(0,a.kt)("a",{href:"https://codepen.io/matthewmain"},"@matthewmain"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("p",null,"\u4e0d\u96be\u770b\u51fa\uff0c\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u662f\u8ba1\u7b97\u6bcf\u4e00\u5e27\u5e03\u6599\u7684\u72b6\u6001\uff0c\u5e76\u5c06\u5176\u7ed8\u5236\u5230\u753b\u5e03\u4e0a\u3002\u540c\u65f6\uff0c\u5b83\u8fd8\u80fd\u591f\u54cd\u5e94\u7528\u6237\u7684\u9f20\u6807\u64cd\u4f5c\uff0c\u5e76\u6539\u53d8\u5e03\u6599\u7684\u5c40\u90e8\u72b6\u6001\u3002"))}f.isMDXComponent=!0}}]);