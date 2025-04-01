"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4492],{72700:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>t});const l=JSON.parse('{"id":"rfc/lcui/build-and-install","title":"\u6784\u5efa\u548c\u5b89\u88c5","description":"\u91c7\u7528\u65b0\u7684\u6784\u5efa\u5de5\u5177 XMake \u53d6\u4ee3\u539f\u6709\u7684 AutoTool \u548c Visual Studio \u6784\u5efa\u65b9\u5f0f\uff0c\u964d\u4f4e\u6784\u5efa\u548c\u4f7f\u7528\u6210\u672c\u3002\u65b0\u589e\u51e0\u79cd\u57fa\u4e8e XMake \u7684\u5b89\u88c5\u65b9\u5f0f\u8bf4\u660e\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u65b0\u7684\u57fa\u4e8e XMake \u7684\u4f9d\u8d56\u5305\u5b89\u88c5\u65b9\u5f0f\u3002","source":"@site/docs/rfc/lcui/0003-build-and-install.md","sourceDirName":"rfc/lcui","slug":"/rfc/lcui/build-and-install","permalink":"/en/docs/next/rfc/lcui/build-and-install","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/docs/rfc/lcui/0003-build-and-install.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"description":"\u91c7\u7528\u65b0\u7684\u6784\u5efa\u5de5\u5177 XMake \u53d6\u4ee3\u539f\u6709\u7684 AutoTool \u548c Visual Studio \u6784\u5efa\u65b9\u5f0f\uff0c\u964d\u4f4e\u6784\u5efa\u548c\u4f7f\u7528\u6210\u672c\u3002\u65b0\u589e\u51e0\u79cd\u57fa\u4e8e XMake \u7684\u5b89\u88c5\u65b9\u5f0f\u8bf4\u660e\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u65b0\u7684\u57fa\u4e8e XMake \u7684\u4f9d\u8d56\u5305\u5b89\u88c5\u65b9\u5f0f\u3002"},"sidebar":"rfcSidebar","previous":{"title":"\u67b6\u6784","permalink":"/en/docs/next/rfc/lcui/architecture"},"next":{"title":"\u5b9e\u7528\u5de5\u5177\u5e93","permalink":"/en/docs/next/rfc/lcui/lib-yutil"}}');var a=i(74848),d=i(28453);const s={description:"\u91c7\u7528\u65b0\u7684\u6784\u5efa\u5de5\u5177 XMake \u53d6\u4ee3\u539f\u6709\u7684 AutoTool \u548c Visual Studio \u6784\u5efa\u65b9\u5f0f\uff0c\u964d\u4f4e\u6784\u5efa\u548c\u4f7f\u7528\u6210\u672c\u3002\u65b0\u589e\u51e0\u79cd\u57fa\u4e8e XMake \u7684\u5b89\u88c5\u65b9\u5f0f\u8bf4\u660e\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u65b0\u7684\u57fa\u4e8e XMake \u7684\u4f9d\u8d56\u5305\u5b89\u88c5\u65b9\u5f0f\u3002"},c="\u6784\u5efa\u548c\u5b89\u88c5",r={},t=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u5185\u90e8\u5f00\u53d1\u76f8\u5173",id:"\u5185\u90e8\u5f00\u53d1\u76f8\u5173",level:3},{value:"\u4ece\u8fdc\u7a0b\u5305\u5b89\u88c5",id:"\u4ece\u8fdc\u7a0b\u5305\u5b89\u88c5",level:3},{value:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5",id:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5",level:3},{value:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5",id:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5",level:3},{value:"\u76f4\u63a5\u4f7f\u7528\u5355\u4e2a\u6e90\u6587\u4ef6",id:"\u76f4\u63a5\u4f7f\u7528\u5355\u4e2a\u6e90\u6587\u4ef6",level:3},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u6784\u5efa\u548c\u5b89\u88c5",children:"\u6784\u5efa\u548c\u5b89\u88c5"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2023-03-28"}),"\n",(0,a.jsx)(n.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"}),"\n",(0,a.jsx)(n.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a\u65e0"}),"\n",(0,a.jsx)(n.li,{children:"\u5b9e\u73b0 PR\uff1a\u65e0"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,a.jsx)(n.p,{children:"\u91c7\u7528\u65b0\u7684\u6784\u5efa\u5de5\u5177 XMake \u53d6\u4ee3\u539f\u6709\u7684 AutoTool \u548c Visual Studio \u6784\u5efa\u65b9\u5f0f\uff0c\u964d\u4f4e\u6784\u5efa\u548c\u4f7f\u7528\u6210\u672c\u3002\u65b0\u589e\u51e0\u79cd\u57fa\u4e8e XMake \u7684\u5b89\u88c5\u65b9\u5f0f\u8bf4\u660e\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u65b0\u7684\u57fa\u4e8e XMake \u7684\u4f9d\u8d56\u5305\u5b89\u88c5\u65b9\u5f0f\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,a.jsx)(n.h3,{id:"\u5185\u90e8\u5f00\u53d1\u76f8\u5173",children:"\u5185\u90e8\u5f00\u53d1\u76f8\u5173"}),"\n",(0,a.jsx)(n.p,{children:"\u6784\u5efa\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"xmake\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6253\u5305\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"xmake package\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5b89\u88c5\u5230\u6307\u5b9a\u76ee\u5f55\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"xmake install -o path/to/your/dir\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u751f\u6210 CMakelists.txt\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"xmake project -k cmakelists\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u751f\u6210 compile_commands\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"xmake project -k compile_commands\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5b50\u5e93\u90fd\u6709\u81ea\u5df1\u7684\u6784\u5efa\u914d\u7f6e\uff0c\u53ef\u5355\u72ec\u6784\u5efa\u5b83\u4eec\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"xmake build pandagl\nxmake build yutil\nxmake build libcss\nxmake build libui\nxmake build libplatform\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u4ece\u8fdc\u7a0b\u5305\u5b89\u88c5",children:"\u4ece\u8fdc\u7a0b\u5305\u5b89\u88c5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",metastring:'title="xmake.lua"',children:'add_repositories("lcui-repo git@github.com:lcui-dev/xmake-repo.git")\nadd_requires("lcui", "pandagl", "libcss")\n\ntarget("lcuiapp")\n    add_packages("lcui")\n\ntarget("imageeditor")\n    add_packages("pandagl")\n\ntarget("cssparser")\n    add_packages("libcss")\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"\u8be5\u5b89\u88c5\u65b9\u5f0f\u6682\u672a\u5b9e\u73b0\uff0c\u6b22\u8fce\u53c2\u4e0e\u6539\u8fdb\u6b64\u610f\u89c1\u7a3f\u3002"})}),"\n",(0,a.jsx)(n.h3,{id:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5",children:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5"}),"\n",(0,a.jsx)(n.p,{children:"\u5047\u8bbe\u5e94\u7528\u7a0b\u5e8f\u9879\u76ee\u76ee\u5f55\u4e2d\u6709\u4e2a vendor \u76ee\u5f55\u4e13\u7528\u4e8e\u5b58\u653e\u7b2c\u4e09\u65b9\u5e93\u7684\u6e90\u7801\uff0c\u90a3\u4e48\uff0c\u6211\u4eec\u53ef\u4ee5\u624b\u52a8\u4e0b\u8f7d LCUI \u7684\u6e90\u7801\u5305\u7136\u540e\u89e3\u538b\u5230 vendor \u76ee\u5f55\u4e2d\uff0c\u518d\u5c06 LCUI \u7684 xmake.lua \u5305\u542b\u8fdb\u6765\u5373\u53ef\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",metastring:'title="xmake.lua"',children:'includes("vendor/LCUI/xmake.lua")\n\ntarget("app")\n  set_kind("binary")\n  add_deps("lcui")\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u79cd\u65b9\u5f0f\u5728\u9700\u8981\u5347\u7ea7 LCUI \u7248\u672c\u7684\u65f6\u5019\u6bd4\u8f83\u9ebb\u70e6\uff0c\u53ef\u6539\u7528 git submodule \u4ee3\u66ff\u5b83\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"git submodule add https://gitee.com/lc-soft/LCUI.git vendor/LCUI\ngit submodule update --init --recursive\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u66f4\u65b0\u7248\u672c\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"git submodule update --recursive --remote\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5",children:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5"}),"\n",(0,a.jsx)(n.p,{children:"\u4e0b\u8f7d LCUI \u7684\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\uff0c\u89e3\u538b\u5230\u7279\u5b9a\u7684\u76ee\u5f55\u5185\uff0c\u4f8b\u5982\uff1avendor \u76ee\u5f55\uff0c\u7136\u540e\u6dfb\u52a0\u7f16\u8bd1\u548c\u94fe\u63a5\u914d\u7f6e\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",metastring:'title="xmake.lua"',children:'target("myapp")\n  add_includedirs("vendor/include")\n  add_linkdirs("vendor/lib")\n  add_links("lcui")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u76f4\u63a5\u4f7f\u7528\u5355\u4e2a\u6e90\u6587\u4ef6",children:"\u76f4\u63a5\u4f7f\u7528\u5355\u4e2a\u6e90\u6587\u4ef6"}),"\n",(0,a.jsx)(n.p,{children:"\u5b89\u88c5 LCUI \u5c31\u50cf\u5f80\u9879\u76ee\u76ee\u5f55\u6dfb\u52a0\u6e90\u6587\u4ef6\u4e00\u6837\u7b80\u5355\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u4f60\u719f\u6089\u7684\u5de5\u5177\u6784\u5efa\u9879\u76ee\uff0c\u4f8b\u5982\u4f7f\u7528 gcc\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# \u7f16\u8bd1 LCUI\ngcc -c lcui.c\n\n# \u7f16\u8bd1\u5e94\u7528\u7a0b\u5e8f\ngcc -c myapp.c\n\n# \u94fe\u63a5\ngcc -o myapp myapp.o lcui.o\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"\u8be5\u5b89\u88c5\u65b9\u5f0f\u9700\u8981\u89e3\u51b3\u4f9d\u8d56\u5e93\u7684\u95ee\u9898\uff0c\u89e3\u51b3\u65b9\u6848\u7684\u7814\u7a76\u3001\u8bbe\u8ba1\u548c\u5b9e\u65bd\u90fd\u6bd4\u8f83\u8d39\u65f6\u95f4\uff0c\u56e0\u6b64\u6682\u672a\u5b9e\u73b0\uff0c\u6b22\u8fce\u53c2\u4e0e\u6539\u8fdb\u6b64\u610f\u89c1\u7a3f\u3002"})}),"\n",(0,a.jsx)(n.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,a.jsx)(n.p,{children:"2.x \u7248\u672c\u91c7\u7528\u7684\u6784\u5efa\u5de5\u5177\u662f AutoMake \u548c VisualStudio\uff0c\u5206\u522b\u7528\u4e8e Linux\u3001Windows \u5e73\u53f0\u4e0a\u7684\u6784\u5efa\uff0c\u800c\u5305\u7ba1\u7406\u5de5\u5177\u662f lcpkg\uff0c\u4f9d\u8d56 Node.js \u8fd0\u884c\u73af\u5883\u548c vcpkg \u5de5\u5177\u3002\u8fd9\u4e9b\u5de5\u5177\u4e0d\u4ec5\u589e\u52a0\u4e86\u7f16\u8bd1\u73af\u5883\u7684\u642d\u5efa\u6210\u672c\uff0c\u8fd8\u589e\u52a0\u4e86\u9879\u76ee\u7ef4\u62a4\u4eba\u5458\u7684\u7ef4\u62a4\u6210\u672c\u3002\u56e0\u6b64\uff0c\u5e94\u8be5\u6539\u7528\u4e00\u6b3e\u8de8\u5e73\u53f0\u4e14\u81ea\u5e26\u5305\u7ba1\u7406\u529f\u80fd\u7684\u6784\u5efa\u5de5\u5177\u4ee3\u66ff\u5b83\u4eec\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0 xmake.lua\uff0c\u7136\u540e\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://xmake.io/",children:"XMake \u6587\u6863"}),"\u5b8c\u5584\u914d\u7f6e\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,a.jsx)(n.p,{children:"\u9700\u8981\u8003\u8651\u8c03\u6574 debian \u5305\u7684\u6253\u5305\u6d41\u7a0b\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,a.jsx)(n.p,{children:"CMake\u3002\u4e0d\u5efa\u8bae\u91c7\u7528\uff0c\u65e0\u8bba\u662f\u4e2d\u6587\u6587\u6863\u3001\u5305\u7ba1\u7406\u3001\u914d\u7f6e\u6587\u4ef6\u7f16\u5199\u4f53\u9a8c\u90fd\u4e0d\u5982 XMake\uff0c\u9047\u5230\u4e00\u4e9b\u4f7f\u7528\u4e0a\u7684\u95ee\u9898\u8fd8\u9700\u8981\u82b1\u65f6\u95f4\u641c\u7d22\u8d44\u6599\u548c\u9a8c\u8bc1\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var l=i(96540);const a={},d=l.createContext(a);function s(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);