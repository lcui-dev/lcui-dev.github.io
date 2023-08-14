"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[328],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,b=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(b,a(a({ref:r},u),{},{components:t})):n.createElement(b,a({ref:r},u))}));function b(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7753:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const o={},a="\u8bbe\u8ba1\u76ee\u5f55\u7ed3\u6784",c={unversionedId:"tutorials/render-fabric/design",id:"tutorials/render-fabric/design",title:"\u8bbe\u8ba1\u76ee\u5f55\u7ed3\u6784",description:"\u6309\u7167\u4e00\u822c\u7684\u505a\u6cd5\uff0c\u6211\u4eec\u5c06\u8fd9\u4e2a\u7a0b\u5e8f\u7684\u6e90\u7801\u6309\u7167\u529f\u80fd\u7c7b\u522b\u5212\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a",source:"@site/docs/tutorials/03-render-fabric/02-design.md",sourceDirName:"tutorials/03-render-fabric",slug:"/tutorials/render-fabric/design",permalink:"/en/docs/next/tutorials/render-fabric/design",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorials/03-render-fabric/02-design.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb",permalink:"/en/docs/next/tutorials/render-fabric/intro"},next:{title:"\u8f6c\u8bd1\u5168\u5c40\u53d8\u91cf",permalink:"/en/docs/next/tutorials/render-fabric/global-variables"}},l={},s=[],u={toc:s},p="wrapper";function f(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8bbe\u8ba1\u76ee\u5f55\u7ed3\u6784"},"\u8bbe\u8ba1\u76ee\u5f55\u7ed3\u6784"),(0,i.kt)("p",null,"\u6309\u7167\u4e00\u822c\u7684\u505a\u6cd5\uff0c\u6211\u4eec\u5c06\u8fd9\u4e2a\u7a0b\u5e8f\u7684\u6e90\u7801\u6309\u7167\u529f\u80fd\u7c7b\u522b\u5212\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6838\u5fc3\uff1a\u63d0\u4f9b\u5e03\u6599\u72b6\u6001\u76f8\u5173\u64cd\u4f5c\u63a5\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},"UI\uff1a\u8d1f\u8d23\u66f4\u65b0\u5e03\u6599\u72b6\u6001\u3001\u6e32\u67d3\u5e03\u6599\u3001\u54cd\u5e94\u7528\u6237\u7684\u64cd\u4f5c\u3002")),(0,i.kt)("p",null,"\u7136\u540e\u4e3a\u5b83\u4eec\u521b\u5efa\u6e90\u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"src/\n    fabric.c   - \u6838\u5fc3\u90e8\u5206\u5b9e\u73b0\n    fabric.h   - \u6838\u5fc3\u90e8\u5206\u5bfc\u51fa\u7684\u7c7b\u578b\u548c\u51fd\u6570\u58f0\u660e\n    main.c     - \u5e94\u7528\u7a0b\u5e8f\u5165\u53e3\u4ee5\u53ca UI \u90e8\u5206\u7684\u4ee3\u7801\n")))}f.isMDXComponent=!0}}]);