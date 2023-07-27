"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||c;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),i=r(6010),c=r(3438),o=r(9960),a=r(3919),s=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:c},r," ",c),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:o},o))}function p(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},8917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),i=(r(7294),r(3905)),c=r(2991);const o={description:"\u9a71\u52a8\u7684\u5de5\u4f5c\u65b9\u5f0f\u548c\u5f00\u53d1\u65b9\u5f0f\u7684\u4ecb\u7ecd\u3002"},a="\u9a71\u52a8",s={unversionedId:"guides/driver/index",id:"guides/driver/index",title:"\u9a71\u52a8",description:"\u9a71\u52a8\u7684\u5de5\u4f5c\u65b9\u5f0f\u548c\u5f00\u53d1\u65b9\u5f0f\u7684\u4ecb\u7ecd\u3002",source:"@site/docs/guides/driver/index.md",sourceDirName:"guides/driver",slug:"/guides/driver/",permalink:"/en/docs/next/guides/driver/",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/guides/driver/index.md",tags:[],version:"current",frontMatter:{description:"\u9a71\u52a8\u7684\u5de5\u4f5c\u65b9\u5f0f\u548c\u5f00\u53d1\u65b9\u5f0f\u7684\u4ecb\u7ecd\u3002"},sidebar:"docsSidebar",previous:{title:"\u6587\u672c\u6392\u7248\u4e0e\u6e32\u67d3",permalink:"/en/docs/next/guides/font/textlayer"},next:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/en/docs/next/guides/driver/events"}},l={},d=[],u={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9a71\u52a8"},"\u9a71\u52a8"),(0,i.kt)("p",null,"\u9a71\u52a8\u662f\u4e00\u4e2a\u5141\u8bb8 LCUI \u5e94\u7528\u7a0b\u5e8f\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u63a5\u53e3\u4ea4\u4e92\u7684\u6a21\u5757\uff0c\u5b83\u9488\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u7684\u63a5\u53e3\u505a\u4e86\u4e00\u5c42\u62bd\u8c61\uff0c\u63d0\u4f9b\u4e86\u4e00\u5957\u9002\u5408 LCUI \u8fd0\u884c\u673a\u5236\u7684\u63a5\u53e3\uff0c\u4f7f\u6211\u4eec\u5728\u7f16\u5199 LCUI \u5e94\u7528\u7a0b\u5e8f\u65f6\u65e0\u9700\u8003\u8651\u64cd\u4f5c\u7cfb\u7edf\u9002\u914d\u95ee\u9898\u5373\u53ef\u5b9e\u73b0\u8de8\u5e73\u53f0\u7f16\u8bd1\u8fd0\u884c\u3002"),(0,i.kt)("p",null,"\u8ba9 LCUI \u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\u7684\u9a71\u52a8\u6709\u4e8b\u4ef6\u5faa\u73af\u9a71\u52a8\u3001\u952e\u76d8\u9a71\u52a8\u3001\u9f20\u6807\u9a71\u52a8\u3001\u89c6\u9891\u9a71\u52a8\u548c\u89e6\u63a7\u9a71\u52a8\uff0c\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u8fd9\u4e9b\u9a71\u52a8\u7684\u5de5\u4f5c\u65b9\u5f0f\u548c\u5f00\u53d1\u65b9\u5f0f\u3002"),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);