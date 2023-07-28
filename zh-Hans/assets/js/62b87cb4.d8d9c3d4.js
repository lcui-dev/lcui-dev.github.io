"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[820],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=o(t),f=l,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[s]="string"==typeof e?e:l,i[1]=c;for(var o=2;o<a;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2313:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=t(7462),l=(t(7294),t(3905));const a={},i="\u67b6\u6784",c={unversionedId:"rfcs/architecture",id:"rfcs/architecture",title:"\u67b6\u6784",description:"- \u5f00\u59cb\u65e5\u671f\uff1a2023-03-26",source:"@site/docs/rfcs/0002-architecture.md",sourceDirName:"rfcs",slug:"/rfcs/architecture",permalink:"/zh-Hans/docs/next/rfcs/architecture",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/rfcs/0002-architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"rfcSidebar",previous:{title:"\u7f16\u7801\u89c4\u8303",permalink:"/zh-Hans/docs/next/rfcs/style-guide"},next:{title:"\u6784\u5efa\u548c\u5b89\u88c5",permalink:"/zh-Hans/docs/next/rfcs/build-and-install"}},u={},o=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}],p={toc:o},s="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u65e5\u671f\uff1a2023-03-26"),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003\u95ee\u9898\uff1a\u65e0"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 PR\uff1a\u65e0")),(0,l.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,l.kt)("p",null,"\u91cd\u65b0\u8bbe\u8ba1\u6e90\u7801\u76ee\u5f55\u7ed3\u6784\uff0c\u5c06 LCUI \u62c6\u5206\u4e3a\u591a\u4e2a\u5b50\u5e93\uff0c\u91cd\u6784\u90e8\u5206\u6a21\u5757\u4ee5\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u8026\u5408\u3002"),(0,l.kt)("h2",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,l.kt)("p",null,"\u65b0\u7684\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"docs/\nexamples/\ninclude/\nlib/\n    css/\n    pandagl/\n    platform/\n    thread/\n    timer/\n    ui/\n    ui-cursor/\n    ui-server/\n    ui-widgets/\n    ui-xml/\n    worker/\n    yutil/\nsrc/\ntests/\n")),(0,l.kt)("p",null,"\u66f4\u7cbe\u7b80\u7684\u5934\u6587\u4ef6\u8def\u5f84\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// \u4e4b\u524d\n#include <LCUI/util.h>\n#include <LCUI/display.h>\n#include <LCUI/graph.h>\n#include <LCUI/widget.h>\n#include <LCUI/css.h>\n\n// \u4e4b\u540e\n#include <yutil.h>\n#include <platform.h>\n#include <pandagl.h>\n#include <ui.h>\n#include <css.h>\n")),(0,l.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,l.kt)("p",null,"\u56fe\u5f62\u5904\u7406\u3001\u7cfb\u7edf\u7a97\u53e3\u7ba1\u7406\u3001\u8f93\u5165\u8f93\u51fa\u7ba1\u7406\u7b49\u529f\u80fd\u5df2\u7ecf\u6709\u66f4\u597d\u7684\u5f00\u6e90\u5b9e\u73b0\uff0c\u7ee7\u7eed\u7ef4\u62a4\u548c\u6539\u8fdb\u5b83\u4eec\u53ea\u662f\u5728\u6d6a\u8d39\u65f6\u95f4\uff0c\u800c\u4e14 LCUI \u9879\u76ee\u7ef4\u62a4\u4eba\u5458\u7684\u5174\u8da3\u5e76\u4e0d\u5728\u5e95\u5c42\u529f\u80fd\u6a21\u5757\u4e0a\u9762\u3002\u56e0\u6b64\uff0cLCUI \u5e94\u8be5\u88ab\u62c6\u5206\u6210\u591a\u4e2a\u8f83\u4e3a\u72ec\u7acb\u3001\u901a\u7528\u7684\u5b50\u5e93\uff0c\u4ee5\u4fbf\u4e8e\u4ed6\u4eba\u6839\u636e\u81ea\u8eab\u7684\u9700\u8981\uff0c\u5bf9 LCUI \u8fdb\u884c\u5b9a\u5236\u3001\u88c1\u526a\uff0c\u53c8\u6216\u662f\u53ea\u4f7f\u7528\u90e8\u5206\u5b50\u5e93\u3002\u5178\u578b\u7684\u9002\u7528\u573a\u666f\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5355\u72ec\u6784\u5efa PandaGL \u56fe\u5f62\u5e93\uff0c\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8c03\u7528\u5b83\u7684\u63a5\u53e3\u5b9e\u73b0\u7b80\u5355\u7684\u56fe\u50cf\u7f16\u8f91\u548c\u6587\u5b57\u6e32\u67d3\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e SDL \u5b9e\u73b0\u4e00\u7cfb\u5217\u4e0e\u5e73\u53f0\u5e93 libplatform \u76f8\u540c\u7684\u63a5\u53e3\uff0c\u4f7f LCUI \u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u5c06 SDL \u4f5c\u4e3a\u540e\u7aef\u6765\u4e3a\u56fe\u5f62\u754c\u9762\u7684\u5404\u9879\u80fd\u529b\u63d0\u4f9b\u66f4\u597d\u7684\u652f\u6301\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5176\u5b83 UI \u5e93\u4e2d\u4f7f\u7528 LCUI \u7684\u81ea\u7ed8\u7ec4\u4ef6\u3002")),(0,l.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0c\u8fd9\u662f\u4e3a\u4e86\u6269\u5927 LCUI \u7684\u53d7\u4f17\u8303\u56f4\uff0c\u4f7f\u5176\u4ece\u9762\u5411\u5355\u4e00 UI \u5f00\u53d1\u9700\u6c42\u7684 UI \u5e93\u9879\u76ee\uff0c\u8f6c\u53d8\u4e3a\u9762\u5411\u591a\u79cd\u9700\u6c42\u7684\u9879\u76ee\u96c6\u3002"),(0,l.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u65b0\u589e lib \u76ee\u5f55\u7528\u4e8e\u5b58\u653e\u5b50\u5e93\uff0c\u5b50\u5e93\u7684\u76ee\u5f55\u547d\u540d\u548c\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[libname]/\n    include/\n        [libname]/\n            config.h\n            foo.h\n            bar.h\n        [libname].h\n    src/\n        config.h.in\n        foo.c\n        foo.h\n        bar.c\n        bar.h\n    xmake.lua\n")),(0,l.kt)("p",null,"\u6e90\u6587\u4ef6\u7684\u79c1\u6709\u63a5\u53e3\u58f0\u660e\u5728\u540c\u76ee\u5f55\u540c\u540d\u5934\u6587\u4ef6\u4e2d\uff0c\u800c\u516c\u5f00\u63a5\u53e3\u5219\u58f0\u660e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"include/[libname]")," \u76ee\u5f55\u4e2d\u7684\u540c\u540d\u5934\u6587\u4ef6\u5185\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e2d\u5b58\u653e\u8fd9\u4e9b\u5b50\u5e93\u5171\u540c\u8fd0\u4f5c\u6240\u9700\u7684\u4ee3\u7801\uff0c\u5305\u62ec\u521d\u59cb\u5316\u5e94\u7528\u7a0b\u5e8f\u8d44\u6e90\u3001\u5b57\u4f53\u3001\u4e3b\u5faa\u73af\u3001\u7a97\u53e3\u7ba1\u7406\u7b49\u3002"),(0,l.kt)("p",null,"\u4e3a\u660e\u786e\u4f9d\u8d56\u5173\u7cfb\uff0c\u5b50\u5e93\u7684\u4f9d\u8d56\u5e93\u90fd\u7531\u5b83\u7684 xmake.lua \u914d\u7f6e\u5f15\u5165\u3002"),(0,l.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,l.kt)("p",null,"\u65e0\u3002"),(0,l.kt)("h2",{id:"\u5907\u9009\u65b9\u6848"},"\u5907\u9009\u65b9\u6848"),(0,l.kt)("p",null,"\u65e0\u3002"),(0,l.kt)("h2",{id:"\u91c7\u7528\u7b56\u7565"},"\u91c7\u7528\u7b56\u7565"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e2a\u7834\u574f\u6027\u6539\u52a8\uff0c\u4ece 2.x \u7248\u672c\u8fc1\u79fb\u5230 3.x \u7248\u672c\u9700\u8981\u66f4\u65b0\u5934\u6587\u4ef6\u5305\u542b\u4ee3\u7801\u3002"))}d.isMDXComponent=!0}}]);