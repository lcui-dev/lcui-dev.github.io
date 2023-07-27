"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={description:"LCUI \u7684\u5b89\u88c5\u65b9\u6cd5\u4ee5\u53ca\u7248\u672c\u66f4\u65b0\u76f8\u5173\u8bf4\u660e\u3002"},l="\u5b89\u88c5",o={unversionedId:"base/installation",id:"version-2.x/base/installation",title:"\u5b89\u88c5",description:"LCUI \u7684\u5b89\u88c5\u65b9\u6cd5\u4ee5\u53ca\u7248\u672c\u66f4\u65b0\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-2.x/base/installation.md",sourceDirName:"base",slug:"/base/installation",permalink:"/docs/base/installation",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/base/installation.md",tags:[],version:"2.x",frontMatter:{description:"LCUI \u7684\u5b89\u88c5\u65b9\u6cd5\u4ee5\u53ca\u7248\u672c\u66f4\u65b0\u76f8\u5173\u8bf4\u660e\u3002"},sidebar:"docsSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/base"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/base/introduction"}},c={},s=[{value:'\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236 <a id="&#x8BED;&#x4E49;&#x5316;&#x7248;&#x672C;&#x63A7;&#x5236;"></a>',id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236-",level:4},{value:'\u66f4\u65b0\u65e5\u5fd7 <a id="&#x66F4;&#x65B0;&#x65E5;&#x5FD7;"></a>',id:"\u66f4\u65b0\u65e5\u5fd7-",level:4},{value:"\u76f4\u63a5\u7528\u5df2\u7f16\u8bd1\u597d\u7684\u6210\u54c1",id:"\u76f4\u63a5\u7528\u5df2\u7f16\u8bd1\u597d\u7684\u6210\u54c1",level:3},{value:"LCPkg \u5305\u7ba1\u7406\u5668",id:"lcpkg-\u5305\u7ba1\u7406\u5668",level:3},{value:"\u547d\u4ee4\u884c\u5de5\u5177 (CLI)",id:"\u547d\u4ee4\u884c\u5de5\u5177-cli",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("h4",{id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236-"},"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236 ",(0,a.kt)("a",{id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236"})),(0,a.kt)("p",null,"LCUI \u5728\u5176\u6240\u6709\u9879\u76ee\u4e2d\u516c\u5e03\u7684\u529f\u80fd\u548c\u884c\u4e3a\u90fd\u9075\u5faa",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/lang/zh-CN/"},"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236"),"\u3002\u5bf9\u4e8e\u672a\u516c\u5e03\u7684\u6216\u5185\u90e8\u66b4\u9732\u7684\u884c\u4e3a\uff0c\u5176\u53d8\u66f4\u4f1a\u63cf\u8ff0\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/releases"},"\u53d1\u5e03\u8bf4\u660e"),"\u4e2d\u3002"),(0,a.kt)("h4",{id:"\u66f4\u65b0\u65e5\u5fd7-"},"\u66f4\u65b0\u65e5\u5fd7 ",(0,a.kt)("a",{id:"\u66f4\u65b0\u65e5\u5fd7"})),(0,a.kt)("p",null,"\u6700\u65b0\u7a33\u5b9a\u7248\u672c\uff1a2.2.0"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u7248\u672c\u7684\u66f4\u65b0\u65e5\u5fd7\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/releases"},"GitHub"),"\u3002"),(0,a.kt)("h3",{id:"\u76f4\u63a5\u7528\u5df2\u7f16\u8bd1\u597d\u7684\u6210\u54c1"},"\u76f4\u63a5\u7528\u5df2\u7f16\u8bd1\u597d\u7684\u6210\u54c1"),(0,a.kt)("p",null,"\u901a\u5e38\u65b0\u7248\u672c\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/releases"},"\u53d1\u5e03\u8bf4\u660e"),"\u4e2d\u90fd\u4f1a\u9644\u5e26\u5df2\u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\uff0c\u5305\u62ec\u9002\u7528\u4e8e Ubuntu \u7cfb\u7edf\u7684 deb \u5b89\u88c5\u5305\u548c\u9002\u7528\u4e8e Windows \u7cfb\u7edf\u7684 zip \u5305\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u4e0b\u8f7d\uff0c\u7136\u540e\u914d\u7f6e\u7f16\u8bd1\u5668\u7684\u5934\u6587\u4ef6\u548c\u5e93\u6587\u4ef6\u7684\u641c\u7d22\u8def\u5f84\u4ee5\u53ca\u94fe\u63a5\u5668\u53c2\u6570\u3002"),(0,a.kt)("h3",{id:"lcpkg-\u5305\u7ba1\u7406\u5668"},"LCPkg \u5305\u7ba1\u7406\u5668"),(0,a.kt)("p",null,"LCPkg \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406 C/C++ \u9879\u76ee\u4f9d\u8d56\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u76ee\u524d\u4ec5\u9002\u5408\u5728 Windows \u7cfb\u7edf\u4e0a\u4f7f\u7528\uff0c\u4f7f\u7528\u5b83\u4f60\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u4e0b\u8f7d LCUI \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6700\u65b0\u7a33\u5b9a\u7248\nlcpkg install github.com/lc-soft/LCUI\n")),(0,a.kt)("h3",{id:"\u547d\u4ee4\u884c\u5de5\u5177-cli"},"\u547d\u4ee4\u884c\u5de5\u5177 ","(","CLI",")"),(0,a.kt)("p",null,"LCUI \u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lc-ui/lcui-cli"},"\u5b98\u65b9\u7684 CLI"),"\uff0c\u4e3a LCUI \u5e94\u7528\u5feb\u901f\u642d\u5efa\u7e41\u6742\u7684\u811a\u624b\u67b6\u3002\u66f4\u591a\u8be6\u60c5\u53ef\u67e5\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lc-ui/lcui-cli"},"LCUI CLI \u7684\u6587\u6863"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u547d\u4ee4\u884c\u5de5\u5177\nnpm install -g @lcui/cli\n\n# \u521b\u5efa\u9879\u76ee\nlcui create my-lcui-app\n\n# \u8fdb\u5165\u9879\u76ee\u76ee\u5f55\ncd my-lcui-app\n\n# \u51c6\u5907\u5f00\u53d1\u73af\u5883\nlcui setup\n\n# \u6784\u5efa\u9879\u76ee\nlcui build\n\n# \u8fd0\u884c\nlcui run\n")))}d.isMDXComponent=!0}}]);