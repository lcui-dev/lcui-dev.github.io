"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),i=r(6010),c=r(3438),a=r(9960),o=r(3919),l=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s.cardContainer)},r)}function p(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s.cardTitle),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",s.cardDescription),title:a},a))}function d(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},7382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),c=r(2991);const a={description:"CSS \u5f15\u64ce\u7684\u5de5\u4f5c\u539f\u7406\u3001\u76f8\u5173\u6982\u5ff5\u548c\u76f8\u5173\u63a5\u53e3\u7528\u6cd5\u4ecb\u7ecd\u3002"},o="CSS",l={unversionedId:"guides/css/index",id:"guides/css/index",title:"CSS",description:"CSS \u5f15\u64ce\u7684\u5de5\u4f5c\u539f\u7406\u3001\u76f8\u5173\u6982\u5ff5\u548c\u76f8\u5173\u63a5\u53e3\u7528\u6cd5\u4ecb\u7ecd\u3002",source:"@site/docs/guides/css/index.md",sourceDirName:"guides/css",slug:"/guides/css/",permalink:"/en/docs/next/guides/css/",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/guides/css/index.md",tags:[],version:"current",frontMatter:{description:"CSS \u5f15\u64ce\u7684\u5de5\u4f5c\u539f\u7406\u3001\u76f8\u5173\u6982\u5ff5\u548c\u76f8\u5173\u63a5\u53e3\u7528\u6cd5\u4ecb\u7ecd\u3002"},sidebar:"docsSidebar",previous:{title:"\u6027\u80fd",permalink:"/en/docs/next/guides/rendering"},next:{title:"CSS \u6570\u636e\u5e93",permalink:"/en/docs/next/guides/css/library"}},s={},u=[{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"css"},"CSS"),(0,i.kt)("p",null,"CSS \u662f\u6d4f\u89c8\u5668\u4e2d\u7528\u6765\u6307\u5b9a\u6587\u6863\u5982\u4f55\u5c55\u793a\u7ed9\u7528\u6237\u7684\u4e00\u95e8\u8bed\u8a00\u2014\u2014\u5982\u7f51\u9875\u7684\u6837\u5f0f\u3001\u5e03\u5c40\u3001\u7b49\u7b49\uff0c\u4e0d\u4ec5\u9650\u4e8e\u6d4f\u89c8\u5668\uff0c\u5b83\u4e5f\u88ab\u5176\u5b83\u7684\u4e00\u4e9b UI \u5f00\u53d1\u5e93\u6240\u652f\u6301\uff0c\u800c\u51fa\u4e8e\u7814\u53d1\u548c\u5b66\u4e60\u6210\u672c\u4e0a\u7684\u8003\u8651\uff0cLCUI \u4e5f\u9009\u62e9\u91c7\u7528 CSS \u6765\u63a7\u5236\u754c\u9762\u6837\u5f0f\u3002"),(0,i.kt)("p",null,"LCUI \u5c06 CSS \u5f15\u64ce\u5212\u5206\u4e3a\u6570\u636e\u5e93\u548c\u89e3\u6790\u5668\u4e24\u6a21\u5757\uff0c\u524d\u8005\u7528\u4e8e\u5c06 CSS \u6570\u636e\u4ee5\u4fbf\u4e8e\u64cd\u4f5c\u548c\u67e5\u8be2\u7684\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\uff0c\u800c\u540e\u8005\u5219\u8d1f\u8d23\u5c06\u5305\u542b CSS \u4ee3\u7801\u7684\u5b57\u7b26\u4e32\u89e3\u6790\u6210\u9002\u5408\u8bfb\u5199\u7684\u6570\u636e\u7ed3\u6784\u5e76\u6dfb\u52a0\u5230\u6570\u636e\u5e93\u4e2d\u3002"),(0,i.kt)("p",null,"\u5728\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd CSS \u5f15\u64ce\u7684\u5de5\u4f5c\u539f\u7406\u3001\u6570\u636e\u5b58\u50a8\u3001\u67e5\u8be2\u65b9\u5f0f\u548c\u5e38\u7528\u63a5\u53e3\u7684\u7528\u6cd5\uff0c\u5e0c\u671b\u4f60\u5728\u770b\u5b8c\u540e\u80fd\u591f\u5bf9\u5b83\u6709\u66f4\u6df1\u5165\u7684\u7406\u89e3\uff0c\u5f53\u7136\uff0c\u5982\u679c\u4f60\u80fd\u591f\u53d1\u73b0\u4e00\u4e9b\u95ee\u9898\u5e76\u5411\u6211\u4eec\u63d0\u4f9b\u6539\u8fdb\u65b9\u6848\u7684\u8bdd\uff0c\u90a3\u5c31\u66f4\u597d\u4e86\u3002"),(0,i.kt)("h3",{id:"\u5f85\u529e\u4e8b\u9879"},"\u5f85\u529e\u4e8b\u9879"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u8bbe\u8ba1 CSS \u5f15\u64ce")),(0,i.kt)("p",null,"\u65b0\u7684 CSS \u5f15\u64ce\u5e94\u8be5\u89e3\u51b3\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4f5c\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u9879\u76ee\uff0c\u80fd\u88ab\u7f16\u8bd1\u4e3a\u51fd\u6570\u5e93\u4f9b\u5176\u5b83\u9879\u76ee\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u521b\u5efa\u591a\u4e2a CSS \u5e93\u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f\u73b0\u5728\u8fd9\u6837\u5168\u5c40\u5171\u7528\u540c\u4e00\u4e2a CSS \u5e93"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u8f7b\u677e\u6269\u5c55\u65b0\u7684\u8bed\u6cd5\u89e3\u6790\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u8f7b\u677e\u6dfb\u52a0\u65b0\u7684 CSS \u5c5e\u6027\u89e3\u6790\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u6709\u5b8c\u6574\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4e14\u6d4b\u8bd5\u8986\u76d6\u7387\u8fbe\u5230 80% \u4ee5\u4e0a"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/2021/WD-css-cascade-5-20210319/"},"CSS \u7684\u6807\u51c6\u6587\u6863"),"\uff0c\u91c7\u7528\u4e25\u8c28\u7684\u5355\u8bcd\u6765\u547d\u540d\u6807\u8bc6\u7b26")),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);