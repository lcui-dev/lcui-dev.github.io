"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=l,d=u["".concat(a,".").concat(f)]||u[f]||m[f]||c;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,i=new Array(c);i[0]=f;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const c={},i="CSS \u7f16\u8bd1\u5668",o={unversionedId:"rfcs/lcui-cli/css-compiler",id:"rfcs/lcui-cli/css-compiler",title:"CSS \u7f16\u8bd1\u5668",description:"- \u5f00\u59cb\u65e5\u671f\uff1a2023-08-14",source:"@site/docs/rfcs/lcui-cli/0004-css-compiler.md",sourceDirName:"rfcs/lcui-cli",slug:"/rfcs/lcui-cli/css-compiler",permalink:"/en/docs/next/rfcs/lcui-cli/css-compiler",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/rfcs/lcui-cli/0004-css-compiler.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"rfcSidebar",previous:{title:"YAML \u7f16\u8bd1\u5668",permalink:"/en/docs/next/rfcs/lcui-cli/yaml-compiler"},next:{title:"SASS \u7f16\u8bd1\u5668",permalink:"/en/docs/next/rfcs/lcui-cli/sass-compiler"}},a={},s=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"css-\u7f16\u8bd1\u5668"},"CSS \u7f16\u8bd1\u5668"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u65e5\u671f\uff1a2023-08-14"),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a1.x"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003\u95ee\u9898\uff1a"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 PR\uff1a")),(0,l.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,l.kt)("p",null,"\u589e\u52a0 CSS \u7f16\u8bd1\u5668\uff0c\u7528\u4e8e\u5c06 CSS \u7f16\u8bd1\u4e3a C \u4ee3\u7801\u3002"),(0,l.kt)("h2",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,l.kt)("p",null,"\u793a\u4f8b CSS \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:"title=home.css",title:"home.css"},"root {\n  background-color: #f6f8fa;\n}\n\n.feedback {\n  color: #28a745;\n  font-size: 12px;\n  margin-top: 5px;\n}\n")),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"lcui compile home.css")," \u547d\u4ee4\u540e\uff0c\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"home.css.h")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=home.yml.h",title:"home.yml.h"},'static const char *css_str_0 = "\\\nroot {\\\n  background-color: #f6f8fa;\\\n}\\\n\\\n.feedback {\\\n  color: #28a745;\\\n  font-size: 12px;\\\n  margin-top: 5px;\\\n}\\\n\\\n";\n')),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"home.c")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},'#include "home.css.h"')," \u5373\u53ef\u4f7f\u7528\u5b83\u3002"),(0,l.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,l.kt)("p",null,"\u5c06 CSS \u5b57\u7b26\u4e32\u5185\u5d4c\u5230\u4ee3\u7801\u4e2d\u4f7f\u7528\uff0c\u7701\u53bb\u6587\u4ef6\u8bfb\u53d6\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u672c\u8d28\u4e0a\u5c31\u662f\u8f6c\u6362\u5b57\u7b26\u4e32\uff0c\u5f88\u7b80\u5355\u3002"),(0,l.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,l.kt)("p",null,"\u65e0\u3002"),(0,l.kt)("h2",{id:"\u5907\u9009\u65b9\u6848"},"\u5907\u9009\u65b9\u6848"),(0,l.kt)("p",null,"\u65e0\u3002"),(0,l.kt)("h2",{id:"\u91c7\u7528\u7b56\u7565"},"\u91c7\u7528\u7b56\u7565"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u9879\u65b0\u589e\u7684\u529f\u80fd\u3002"))}m.isMDXComponent=!0}}]);