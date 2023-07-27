"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={description:"LCUI \u7684\u5b89\u88c5\u65b9\u6cd5\u4ee5\u53ca\u7248\u672c\u66f4\u65b0\u76f8\u5173\u8bf4\u660e\u3002",sidebar_position:0},l="\u5b89\u88c5",o={unversionedId:"guides/base/installation",id:"guides/base/installation",title:"\u5b89\u88c5",description:"LCUI \u7684\u5b89\u88c5\u65b9\u6cd5\u4ee5\u53ca\u7248\u672c\u66f4\u65b0\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/docs/guides/base/installation.md",sourceDirName:"guides/base",slug:"/guides/base/installation",permalink:"/docs/next/guides/base/installation",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/guides/base/installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{description:"LCUI \u7684\u5b89\u88c5\u65b9\u6cd5\u4ee5\u53ca\u7248\u672c\u66f4\u65b0\u76f8\u5173\u8bf4\u660e\u3002",sidebar_position:0},sidebar:"docsSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/next/base"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/next/guides/base/introduction"}},s={},u=[{value:'\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236 <a id="&#x8BED;&#x4E49;&#x5316;&#x7248;&#x672C;&#x63A7;&#x5236;"></a>',id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236-",level:2},{value:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5",id:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5",level:3},{value:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5",id:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("h2",{id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236-"},"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236 ",(0,a.kt)("a",{id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236"})),(0,a.kt)("p",null,"LCUI \u5728\u5176\u6240\u6709\u9879\u76ee\u4e2d\u516c\u5e03\u7684\u529f\u80fd\u548c\u884c\u4e3a\u90fd\u9075\u5faa",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/lang/zh-CN/"},"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236"),"\u3002\u5bf9\u4e8e\u672a\u516c\u5e03\u7684\u6216\u5185\u90e8\u66b4\u9732\u7684\u884c\u4e3a\uff0c\u5176\u53d8\u66f4\u4f1a\u63cf\u8ff0\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/releases"},"\u53d1\u5e03\u8bf4\u660e"),"\u4e2d\u3002"),(0,a.kt)("h3",{id:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5"},"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5"),(0,a.kt)("p",null,"\u5047\u8bbe\u5e94\u7528\u7a0b\u5e8f\u9879\u76ee\u76ee\u5f55\u4e2d\u6709\u4e2a vendor \u76ee\u5f55\u4e13\u7528\u4e8e\u5b58\u653e\u7b2c\u4e09\u65b9\u5e93\u7684\u6e90\u7801\uff0c\u90a3\u4e48\uff0c\u6211\u4eec\u53ef\u4ee5\u624b\u52a8\u4e0b\u8f7d LCUI \u7684\u6e90\u7801\u5305\u7136\u540e\u89e3\u538b\u5230 vendor \u76ee\u5f55\u4e2d\uff0c\u518d\u5c06 LCUI \u7684 xmake.lua \u5305\u542b\u8fdb\u6765\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=xmake.lua",title:"xmake.lua"},'includes("vendor/LCUI/xmake.lua")\n\ntarget("app")\n  set_kind("binary")\n  add_deps("lcui")\n')),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u5728\u9700\u8981\u5347\u7ea7 LCUI \u7248\u672c\u7684\u65f6\u5019\u6bd4\u8f83\u9ebb\u70e6\uff0c\u53ef\u6539\u7528 git submodule \u4ee3\u66ff\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule add https://gitee.com/lc-soft/LCUI.git vendor/LCUI\ngit submodule update --init --recursive\n")),(0,a.kt)("p",null,"\u66f4\u65b0\u7248\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule sync --recursive\ngit submodule update --init --recursive\n")),(0,a.kt)("h2",{id:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5"},"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5"),(0,a.kt)("p",null,"\u901a\u5e38\u65b0\u7248\u672c\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/releases"},"\u53d1\u5e03\u8bf4\u660e"),"\u4e2d\u90fd\u4f1a\u9644\u5e26\u5df2\u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u4e0b\u8f7d\uff0c\u7136\u540e\u914d\u7f6e\u7f16\u8bd1\u5668\u7684\u5934\u6587\u4ef6\u548c\u5e93\u6587\u4ef6\u7684\u641c\u7d22\u8def\u5f84\u4ee5\u53ca\u94fe\u63a5\u5668\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u4ee5 XMake \u4e3a\u4f8b\uff0c\u5c06\u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\u89e3\u538b\u5230\u7279\u5b9a\u7684\u76ee\u5f55\u5185\uff08\u4f8b\u5982\uff1avendor\uff09\uff0c\u7136\u540e\u6dfb\u52a0\u7f16\u8bd1\u548c\u94fe\u63a5\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=xmake.lua",title:"xmake.lua"},'target("myapp")\n  add_includedirs("vendor/include")\n  add_linkdirs("vendor/lib")\n  add_links("lcui")\n')))}d.isMDXComponent=!0}}]);