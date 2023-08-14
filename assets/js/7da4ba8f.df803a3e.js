"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7456],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(a),k=l,m=s["".concat(o,".").concat(k)]||s[k]||d[k]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:l,i[1]=u;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const r={description:"\u91c7\u7528\u65b0\u7684\u6784\u5efa\u5de5\u5177 XMake \u53d6\u4ee3\u539f\u6709\u7684 AutoTool \u548c Visual Studio \u6784\u5efa\u65b9\u5f0f\uff0c\u964d\u4f4e\u6784\u5efa\u548c\u4f7f\u7528\u6210\u672c\u3002\u65b0\u589e\u51e0\u79cd\u57fa\u4e8e XMake \u7684\u5b89\u88c5\u65b9\u5f0f\u8bf4\u660e\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u65b0\u7684\u57fa\u4e8e XMake \u7684\u4f9d\u8d56\u5305\u5b89\u88c5\u65b9\u5f0f\u3002"},i="\u6784\u5efa\u548c\u5b89\u88c5",u={unversionedId:"rfcs/lcui/build-and-install",id:"rfcs/lcui/build-and-install",title:"\u6784\u5efa\u548c\u5b89\u88c5",description:"\u91c7\u7528\u65b0\u7684\u6784\u5efa\u5de5\u5177 XMake \u53d6\u4ee3\u539f\u6709\u7684 AutoTool \u548c Visual Studio \u6784\u5efa\u65b9\u5f0f\uff0c\u964d\u4f4e\u6784\u5efa\u548c\u4f7f\u7528\u6210\u672c\u3002\u65b0\u589e\u51e0\u79cd\u57fa\u4e8e XMake \u7684\u5b89\u88c5\u65b9\u5f0f\u8bf4\u660e\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u65b0\u7684\u57fa\u4e8e XMake \u7684\u4f9d\u8d56\u5305\u5b89\u88c5\u65b9\u5f0f\u3002",source:"@site/docs/rfcs/lcui/0003-build-and-install.md",sourceDirName:"rfcs/lcui",slug:"/rfcs/lcui/build-and-install",permalink:"/docs/next/rfcs/lcui/build-and-install",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/rfcs/lcui/0003-build-and-install.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"\u91c7\u7528\u65b0\u7684\u6784\u5efa\u5de5\u5177 XMake \u53d6\u4ee3\u539f\u6709\u7684 AutoTool \u548c Visual Studio \u6784\u5efa\u65b9\u5f0f\uff0c\u964d\u4f4e\u6784\u5efa\u548c\u4f7f\u7528\u6210\u672c\u3002\u65b0\u589e\u51e0\u79cd\u57fa\u4e8e XMake \u7684\u5b89\u88c5\u65b9\u5f0f\u8bf4\u660e\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u65b0\u7684\u57fa\u4e8e XMake \u7684\u4f9d\u8d56\u5305\u5b89\u88c5\u65b9\u5f0f\u3002"},sidebar:"rfcSidebar",previous:{title:"\u67b6\u6784",permalink:"/docs/next/rfcs/lcui/architecture"},next:{title:"\u5b9e\u7528\u5de5\u5177\u5e93",permalink:"/docs/next/rfcs/lcui/lib-yutil"}},o={},c=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u5185\u90e8\u5f00\u53d1\u76f8\u5173",id:"\u5185\u90e8\u5f00\u53d1\u76f8\u5173",level:3},{value:"\u4ece\u8fdc\u7a0b\u5305\u5b89\u88c5",id:"\u4ece\u8fdc\u7a0b\u5305\u5b89\u88c5",level:3},{value:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5",id:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5",level:3},{value:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5",id:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5",level:3},{value:"\u76f4\u63a5\u4f7f\u7528\u5355\u4e2a\u6e90\u6587\u4ef6",id:"\u76f4\u63a5\u4f7f\u7528\u5355\u4e2a\u6e90\u6587\u4ef6",level:3},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6784\u5efa\u548c\u5b89\u88c5"},"\u6784\u5efa\u548c\u5b89\u88c5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u65e5\u671f\uff1a2023-03-28"),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003\u95ee\u9898\uff1a\u65e0"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 PR\uff1a\u65e0")),(0,l.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,l.kt)("p",null,"\u91c7\u7528\u65b0\u7684\u6784\u5efa\u5de5\u5177 XMake \u53d6\u4ee3\u539f\u6709\u7684 AutoTool \u548c Visual Studio \u6784\u5efa\u65b9\u5f0f\uff0c\u964d\u4f4e\u6784\u5efa\u548c\u4f7f\u7528\u6210\u672c\u3002\u65b0\u589e\u51e0\u79cd\u57fa\u4e8e XMake \u7684\u5b89\u88c5\u65b9\u5f0f\u8bf4\u660e\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u65b0\u7684\u57fa\u4e8e XMake \u7684\u4f9d\u8d56\u5305\u5b89\u88c5\u65b9\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u5185\u90e8\u5f00\u53d1\u76f8\u5173"},"\u5185\u90e8\u5f00\u53d1\u76f8\u5173"),(0,l.kt)("p",null,"\u6784\u5efa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"xmake\n")),(0,l.kt)("p",null,"\u6253\u5305\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"xmake package\n")),(0,l.kt)("p",null,"\u5b89\u88c5\u5230\u6307\u5b9a\u76ee\u5f55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"xmake install -o path/to/your/dir\n")),(0,l.kt)("p",null,"\u751f\u6210 CMakelists.txt\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"xmake project -k cmakelists\n")),(0,l.kt)("p",null,"\u751f\u6210 compile_commands\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"xmake project -k compile_commands\n")),(0,l.kt)("p",null,"\u5b50\u5e93\u90fd\u6709\u81ea\u5df1\u7684\u6784\u5efa\u914d\u7f6e\uff0c\u53ef\u5355\u72ec\u6784\u5efa\u5b83\u4eec\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"xmake build pandagl\nxmake build yutil\nxmake build libcss\nxmake build libui\nxmake build libplatform\n")),(0,l.kt)("h3",{id:"\u4ece\u8fdc\u7a0b\u5305\u5b89\u88c5"},"\u4ece\u8fdc\u7a0b\u5305\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=xmake.lua",title:"xmake.lua"},'add_repositories("lcui-repo git@github.com:lcui-dev/xmake-repo.git")\nadd_requires("lcui", "pandagl", "libcss")\n\ntarget("lcuiapp")\n    add_packages("lcui")\n\ntarget("imageeditor")\n    add_packages("pandagl")\n\ntarget("cssparser")\n    add_packages("libcss")\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u8be5\u5b89\u88c5\u65b9\u5f0f\u6682\u672a\u5b9e\u73b0\uff0c\u6b22\u8fce\u53c2\u4e0e\u6539\u8fdb\u6b64\u610f\u89c1\u7a3f\u3002")),(0,l.kt)("h3",{id:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5"},"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5"),(0,l.kt)("p",null,"\u5047\u8bbe\u5e94\u7528\u7a0b\u5e8f\u9879\u76ee\u76ee\u5f55\u4e2d\u6709\u4e2a vendor \u76ee\u5f55\u4e13\u7528\u4e8e\u5b58\u653e\u7b2c\u4e09\u65b9\u5e93\u7684\u6e90\u7801\uff0c\u90a3\u4e48\uff0c\u6211\u4eec\u53ef\u4ee5\u624b\u52a8\u4e0b\u8f7d LCUI \u7684\u6e90\u7801\u5305\u7136\u540e\u89e3\u538b\u5230 vendor \u76ee\u5f55\u4e2d\uff0c\u518d\u5c06 LCUI \u7684 xmake.lua \u5305\u542b\u8fdb\u6765\u5373\u53ef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=xmake.lua",title:"xmake.lua"},'includes("vendor/LCUI/xmake.lua")\n\ntarget("app")\n  set_kind("binary")\n  add_deps("lcui")\n')),(0,l.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u5728\u9700\u8981\u5347\u7ea7 LCUI \u7248\u672c\u7684\u65f6\u5019\u6bd4\u8f83\u9ebb\u70e6\uff0c\u53ef\u6539\u7528 git submodule \u4ee3\u66ff\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule add https://gitee.com/lc-soft/LCUI.git vendor/LCUI\ngit submodule update --init --recursive\n")),(0,l.kt)("p",null,"\u66f4\u65b0\u7248\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule sync --recursive\ngit submodule update --init --recursive\n")),(0,l.kt)("h3",{id:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5"},"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5"),(0,l.kt)("p",null,"\u4e0b\u8f7d LCUI \u7684\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\uff0c\u89e3\u538b\u5230\u7279\u5b9a\u7684\u76ee\u5f55\u5185\uff0c\u4f8b\u5982\uff1avendor \u76ee\u5f55\uff0c\u7136\u540e\u6dfb\u52a0\u7f16\u8bd1\u548c\u94fe\u63a5\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=xmake.lua",title:"xmake.lua"},'target("myapp")\n  add_includedirs("vendor/include")\n  add_linkdirs("vendor/lib")\n  add_links("lcui")\n')),(0,l.kt)("h3",{id:"\u76f4\u63a5\u4f7f\u7528\u5355\u4e2a\u6e90\u6587\u4ef6"},"\u76f4\u63a5\u4f7f\u7528\u5355\u4e2a\u6e90\u6587\u4ef6"),(0,l.kt)("p",null,"\u5b89\u88c5 LCUI \u5c31\u50cf\u5f80\u9879\u76ee\u76ee\u5f55\u6dfb\u52a0\u6e90\u6587\u4ef6\u4e00\u6837\u7b80\u5355\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u4f60\u719f\u6089\u7684\u5de5\u5177\u6784\u5efa\u9879\u76ee\uff0c\u4f8b\u5982\u4f7f\u7528 gcc\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# \u7f16\u8bd1 LCUI\ngcc -c lcui.c\n\n# \u7f16\u8bd1\u5e94\u7528\u7a0b\u5e8f\ngcc -c myapp.c\n\n# \u94fe\u63a5\ngcc -o myapp myapp.o lcui.o\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u8be5\u5b89\u88c5\u65b9\u5f0f\u9700\u8981\u89e3\u51b3\u4f9d\u8d56\u5e93\u7684\u95ee\u9898\uff0c\u89e3\u51b3\u65b9\u6848\u7684\u7814\u7a76\u3001\u8bbe\u8ba1\u548c\u5b9e\u65bd\u90fd\u6bd4\u8f83\u8d39\u65f6\u95f4\uff0c\u56e0\u6b64\u6682\u672a\u5b9e\u73b0\uff0c\u6b22\u8fce\u53c2\u4e0e\u6539\u8fdb\u6b64\u610f\u89c1\u7a3f\u3002")),(0,l.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,l.kt)("p",null,"2.x \u7248\u672c\u91c7\u7528\u7684\u6784\u5efa\u5de5\u5177\u662f AutoMake \u548c VisualStudio\uff0c\u5206\u522b\u7528\u4e8e Linux\u3001Windows \u5e73\u53f0\u4e0a\u7684\u6784\u5efa\uff0c\u800c\u5305\u7ba1\u7406\u5de5\u5177\u662f lcpkg\uff0c\u4f9d\u8d56 Node.js \u8fd0\u884c\u73af\u5883\u548c vcpkg \u5de5\u5177\u3002\u8fd9\u4e9b\u5de5\u5177\u4e0d\u4ec5\u589e\u52a0\u4e86\u7f16\u8bd1\u73af\u5883\u7684\u642d\u5efa\u6210\u672c\uff0c\u8fd8\u589e\u52a0\u4e86\u9879\u76ee\u7ef4\u62a4\u4eba\u5458\u7684\u7ef4\u62a4\u6210\u672c\u3002\u56e0\u6b64\uff0c\u5e94\u8be5\u6539\u7528\u4e00\u6b3e\u8de8\u5e73\u53f0\u4e14\u81ea\u5e26\u5305\u7ba1\u7406\u529f\u80fd\u7684\u6784\u5efa\u5de5\u5177\u4ee3\u66ff\u5b83\u4eec\u3002"),(0,l.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u5728\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0 xmake.lua\uff0c\u7136\u540e\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://xmake.io/"},"XMake \u6587\u6863"),"\u5b8c\u5584\u914d\u7f6e\u3002"),(0,l.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,l.kt)("p",null,"\u9700\u8981\u8003\u8651\u8c03\u6574 debian \u5305\u7684\u6253\u5305\u6d41\u7a0b\u3002"),(0,l.kt)("h2",{id:"\u5907\u9009\u65b9\u6848"},"\u5907\u9009\u65b9\u6848"),(0,l.kt)("p",null,"CMake\u3002\u4e0d\u5efa\u8bae\u91c7\u7528\uff0c\u65e0\u8bba\u662f\u4e2d\u6587\u6587\u6863\u3001\u5305\u7ba1\u7406\u3001\u914d\u7f6e\u6587\u4ef6\u7f16\u5199\u4f53\u9a8c\u90fd\u4e0d\u5982 XMake\uff0c\u9047\u5230\u4e00\u4e9b\u4f7f\u7528\u4e0a\u7684\u95ee\u9898\u8fd8\u9700\u8981\u82b1\u65f6\u95f4\u641c\u7d22\u8d44\u6599\u548c\u9a8c\u8bc1\u3002"))}d.isMDXComponent=!0}}]);