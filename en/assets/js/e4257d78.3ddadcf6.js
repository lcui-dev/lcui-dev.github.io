"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5163],{91198:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"base/installation","title":"\u5b89\u88c5","description":"LCUI \u7684\u5b89\u88c5\u65b9\u6cd5\u4ee5\u53ca\u7248\u672c\u66f4\u65b0\u76f8\u5173\u8bf4\u660e\u3002","source":"@site/versioned_docs/version-2.x/base/installation.md","sourceDirName":"base","slug":"/base/installation","permalink":"/en/docs/2.x/base/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/base/installation.md","tags":[],"version":"2.x","frontMatter":{"description":"LCUI \u7684\u5b89\u88c5\u65b9\u6cd5\u4ee5\u53ca\u7248\u672c\u66f4\u65b0\u76f8\u5173\u8bf4\u660e\u3002"},"sidebar":"docsSidebar","previous":{"title":"\u57fa\u7840","permalink":"/en/docs/2.x/base"},"next":{"title":"\u4ecb\u7ecd","permalink":"/en/docs/2.x/base/introduction"}}');var t=s(74848),l=s(28453);const c={description:"LCUI \u7684\u5b89\u88c5\u65b9\u6cd5\u4ee5\u53ca\u7248\u672c\u66f4\u65b0\u76f8\u5173\u8bf4\u660e\u3002"},r="\u5b89\u88c5",a={},d=[{value:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236 <a></a>",id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236-",level:4},{value:"\u66f4\u65b0\u65e5\u5fd7 <a></a>",id:"\u66f4\u65b0\u65e5\u5fd7-",level:4},{value:"\u76f4\u63a5\u7528\u5df2\u7f16\u8bd1\u597d\u7684\u6210\u54c1",id:"\u76f4\u63a5\u7528\u5df2\u7f16\u8bd1\u597d\u7684\u6210\u54c1",level:3},{value:"LCPkg \u5305\u7ba1\u7406\u5668",id:"lcpkg-\u5305\u7ba1\u7406\u5668",level:3},{value:"\u547d\u4ee4\u884c\u5de5\u5177 (CLI)",id:"\u547d\u4ee4\u884c\u5de5\u5177-cli",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"})}),"\n",(0,t.jsxs)(n.h4,{id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236-",children:["\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236 ",(0,t.jsx)("a",{id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236"})]}),"\n",(0,t.jsxs)(n.p,{children:["LCUI \u5728\u5176\u6240\u6709\u9879\u76ee\u4e2d\u516c\u5e03\u7684\u529f\u80fd\u548c\u884c\u4e3a\u90fd\u9075\u5faa",(0,t.jsx)(n.a,{href:"https://semver.org/lang/zh-CN/",children:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236"}),"\u3002\u5bf9\u4e8e\u672a\u516c\u5e03\u7684\u6216\u5185\u90e8\u66b4\u9732\u7684\u884c\u4e3a\uff0c\u5176\u53d8\u66f4\u4f1a\u63cf\u8ff0\u5728",(0,t.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/releases",children:"\u53d1\u5e03\u8bf4\u660e"}),"\u4e2d\u3002"]}),"\n",(0,t.jsxs)(n.h4,{id:"\u66f4\u65b0\u65e5\u5fd7-",children:["\u66f4\u65b0\u65e5\u5fd7 ",(0,t.jsx)("a",{id:"\u66f4\u65b0\u65e5\u5fd7"})]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u65b0\u7a33\u5b9a\u7248\u672c\uff1a2.2.0"}),"\n",(0,t.jsxs)(n.p,{children:["\u6bcf\u4e2a\u7248\u672c\u7684\u66f4\u65b0\u65e5\u5fd7\u89c1 ",(0,t.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/releases",children:"GitHub"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u76f4\u63a5\u7528\u5df2\u7f16\u8bd1\u597d\u7684\u6210\u54c1",children:"\u76f4\u63a5\u7528\u5df2\u7f16\u8bd1\u597d\u7684\u6210\u54c1"}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u5e38\u65b0\u7248\u672c\u7684",(0,t.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/releases",children:"\u53d1\u5e03\u8bf4\u660e"}),"\u4e2d\u90fd\u4f1a\u9644\u5e26\u5df2\u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\uff0c\u5305\u62ec\u9002\u7528\u4e8e Ubuntu \u7cfb\u7edf\u7684 deb \u5b89\u88c5\u5305\u548c\u9002\u7528\u4e8e Windows \u7cfb\u7edf\u7684 zip \u5305\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u4e0b\u8f7d\uff0c\u7136\u540e\u914d\u7f6e\u7f16\u8bd1\u5668\u7684\u5934\u6587\u4ef6\u548c\u5e93\u6587\u4ef6\u7684\u641c\u7d22\u8def\u5f84\u4ee5\u53ca\u94fe\u63a5\u5668\u53c2\u6570\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"lcpkg-\u5305\u7ba1\u7406\u5668",children:"LCPkg \u5305\u7ba1\u7406\u5668"}),"\n",(0,t.jsx)(n.p,{children:"LCPkg \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406 C/C++ \u9879\u76ee\u4f9d\u8d56\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u76ee\u524d\u4ec5\u9002\u5408\u5728 Windows \u7cfb\u7edf\u4e0a\u4f7f\u7528\uff0c\u4f7f\u7528\u5b83\u4f60\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u4e0b\u8f7d LCUI \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u6700\u65b0\u7a33\u5b9a\u7248\nlcpkg install github.com/lc-soft/LCUI\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u547d\u4ee4\u884c\u5de5\u5177-cli",children:"\u547d\u4ee4\u884c\u5de5\u5177 (CLI)"}),"\n",(0,t.jsxs)(n.p,{children:["LCUI \u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,t.jsx)(n.a,{href:"https://github.com/lc-ui/lcui-cli",children:"\u5b98\u65b9\u7684 CLI"}),"\uff0c\u4e3a LCUI \u5e94\u7528\u5feb\u901f\u642d\u5efa\u7e41\u6742\u7684\u811a\u624b\u67b6\u3002\u66f4\u591a\u8be6\u60c5\u53ef\u67e5\u9605 ",(0,t.jsx)(n.a,{href:"https://github.com/lc-ui/lcui-cli",children:"LCUI CLI \u7684\u6587\u6863"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u5b89\u88c5\u547d\u4ee4\u884c\u5de5\u5177\nnpm install -g @lcui/cli\n\n# \u521b\u5efa\u9879\u76ee\nlcui create my-lcui-app\n\n# \u8fdb\u5165\u9879\u76ee\u76ee\u5f55\ncd my-lcui-app\n\n# \u51c6\u5907\u5f00\u53d1\u73af\u5883\nlcui setup\n\n# \u6784\u5efa\u9879\u76ee\nlcui build\n\n# \u8fd0\u884c\nlcui run\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var i=s(96540);const t={},l=i.createContext(t);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);