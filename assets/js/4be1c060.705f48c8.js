"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9268],{97112:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"rfc/lcui-cli/css-compiler","title":"CSS \u7f16\u8bd1\u5668","description":"- \u5f00\u59cb\u65e5\u671f\uff1a2023-08-14","source":"@site/versioned_docs/version-3.x/rfc/lcui-cli/0004-css-compiler.md","sourceDirName":"rfc/lcui-cli","slug":"/rfc/lcui-cli/css-compiler","permalink":"/docs/rfc/lcui-cli/css-compiler","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/rfc/lcui-cli/0004-css-compiler.md","tags":[],"version":"3.x","sidebarPosition":4,"frontMatter":{},"sidebar":"rfcSidebar","previous":{"title":"YAML \u7f16\u8bd1\u5668","permalink":"/docs/rfc/lcui-cli/yaml-compiler"},"next":{"title":"SASS \u7f16\u8bd1\u5668","permalink":"/docs/rfc/lcui-cli/sass-compiler"}}');var s=c(74848),l=c(28453);const r={},o="CSS \u7f16\u8bd1\u5668",t={},d=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"css-\u7f16\u8bd1\u5668",children:"CSS \u7f16\u8bd1\u5668"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2023-08-14"}),"\n",(0,s.jsx)(n.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a1.x"}),"\n",(0,s.jsx)(n.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a"}),"\n",(0,s.jsx)(n.li,{children:"\u5b9e\u73b0 PR\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,s.jsx)(n.p,{children:"\u589e\u52a0 CSS \u7f16\u8bd1\u5668\uff0c\u7528\u4e8e\u5c06 CSS \u7f16\u8bd1\u4e3a C \u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b CSS \u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="home.css"',children:"root {\n  background-color: #f6f8fa;\n}\n\n.feedback {\n  color: #28a745;\n  font-size: 12px;\n  margin-top: 5px;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c ",(0,s.jsx)(n.code,{children:"lcui compile home.css"})," \u547d\u4ee4\u540e\uff0c\u751f\u6210 ",(0,s.jsx)(n.code,{children:"home.css.h"})," \u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",metastring:'title="home.yml.h"',children:'static const char *css_str_0 = "\\\nroot {\\\n  background-color: #f6f8fa;\\\n}\\\n\\\n.feedback {\\\n  color: #28a745;\\\n  font-size: 12px;\\\n  margin-top: 5px;\\\n}\\\n\\\n";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"home.c"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:'#include "home.css.h"'})," \u5373\u53ef\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,s.jsx)(n.p,{children:"\u5c06 CSS \u5b57\u7b26\u4e32\u5185\u5d4c\u5230\u4ee3\u7801\u4e2d\u4f7f\u7528\uff0c\u7701\u53bb\u6587\u4ef6\u8bfb\u53d6\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u8d28\u4e0a\u5c31\u662f\u8f6c\u6362\u5b57\u7b26\u4e32\uff0c\u5f88\u7b80\u5355\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u91c7\u7528\u7b56\u7565",children:"\u91c7\u7528\u7b56\u7565"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u9879\u65b0\u589e\u7684\u529f\u80fd\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>o});var i=c(96540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);