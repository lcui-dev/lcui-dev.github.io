"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3738],{9880:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"rfc/lcui-cli/react-tsx-compiler","title":"React TSX \u7f16\u8bd1\u5668","description":"- \u5f00\u59cb\u65e5\u671f\uff1a2023-08-14","source":"@site/versioned_docs/version-3.x/rfc/lcui-cli/0007-react-tsx-compiler.md","sourceDirName":"rfc/lcui-cli","slug":"/rfc/lcui-cli/react-tsx-compiler","permalink":"/en/docs/rfc/lcui-cli/react-tsx-compiler","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/rfc/lcui-cli/0007-react-tsx-compiler.md","tags":[],"version":"3.x","sidebarPosition":7,"frontMatter":{},"sidebar":"rfcSidebar","previous":{"title":"JavaScript \u7f16\u8bd1\u5668","permalink":"/en/docs/rfc/lcui-cli/javascript-compiler"},"next":{"title":"CSS Modules \u7f16\u8bd1\u5668","permalink":"/en/docs/rfc/lcui-cli/css-modules-compiler"}}');var s=i(4848),c=i(8453);const l={},r="React TSX \u7f16\u8bd1\u5668",d={},o=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"react-tsx-\u7f16\u8bd1\u5668",children:"React TSX \u7f16\u8bd1\u5668"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2023-08-14"}),"\n",(0,s.jsx)(n.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a1.x"}),"\n",(0,s.jsx)(n.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a"}),"\n",(0,s.jsx)(n.li,{children:"\u5b9e\u73b0 PR\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,s.jsx)(n.p,{children:"\u589e\u52a0 React TSX \u7f16\u8bd1\u5668\uff0c\u7528\u4e8e\u5c06 TypeScript \u7f16\u5199\u7684 React \u65e0\u72b6\u6001\u7ec4\u4ef6\u7f16\u8bd1\u4e3a C \u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b tsx \u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="home.tsx"',children:'import React from "react";\nimport styles from "./home.module.css";\n\nexport default function Home() {\n  return (\n    <div className="home">\n      <text className={styles.text}>Hello, World!</text>\n      <button className={styles.button}>Ok</button>\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b CSS \u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="home.module.css"',children:":global(.home) {\n  padding: 20px;\n}\n\n.button {\n  padding: 5px 10px;\n  text-align: center;\n  border: 1px solid #eee;\n  border-radius: 4px;\n}\n\n.text {\n  color: #f00;\n  font-size: 24px;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c ",(0,s.jsx)(n.code,{children:"lcui compile home.tsx"})," \u547d\u4ee4\u540e\uff0c\u751f\u6210 ",(0,s.jsx)(n.code,{children:"home.tsx.h"})," \u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",metastring:'title="home.tsx.h"',children:'/** This file is generated from home.tsx */\n\n#include <ui.h>\n\n/** This css code string is compiled from file home.module.css */\nstatic const char *css_str_0 = "\\\n.home {\\\n  padding: 20px;\\\n}\\\n\\\n._button_1ayu2_9 {\\\n  padding: 5px 10px;\\\n  text-align: center;\\\n  border: 1px solid #eee;\\\n  border-radius: 4px;\\\n}\\\n\\\n._text_1ayu2_23 {\\\n  color: #f00;\\\n  font-size: 24px;\\\n}\\\n\\\n";\n\n\nstatic void home_load_template(ui_widget_t *home_parent)\n{\n        ui_widget_t *w[5];\n\n        w[0] = ui_create_widget(NULL);\n        ui_widget_add_class(w[0], "home");\n        w[1] = ui_create_widget(NULL);\n        ui_widget_add_class(w[1], "_text_1ayu2_23");\n        w[2] = ui_create_widget("text");\n        ui_widget_set_text(w[2], "Hello, World!");\n        ui_widget_append(w[1], w[2]);\n        w[3] = ui_create_widget(NULL);\n        ui_widget_add_class(w[3], "_button_1ayu2_9");\n        w[4] = ui_create_widget("text");\n        ui_widget_set_text(w[4], "Ok");\n        ui_widget_append(w[3], w[4]);\n        ui_widget_append(w[0], w[1]);\n        ui_widget_append(w[0], w[3]);\n}\n\nstatic void home_load_resources(void)\n{\n        ui_load_css_string(css_str_0, "home.tsx");\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"home.c"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:'#include "home.tsx.h"'})," \u5373\u53ef\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,s.jsx)(n.p,{children:"React \u662f Web \u524d\u7aef\u9886\u57df\u4e2d\u6bd4\u8f83\u6d41\u884c\u7684\u5f00\u53d1\u6280\u672f\u3002\u5bf9\u4e8e\u6709 React \u5f00\u53d1\u7ecf\u9a8c\u7684\u4eba\uff0c\u66f4\u6613\u4e8e\u4e0a\u624b LCUI \u7684\u7ec4\u4ef6\u5f00\u53d1\u3002\u5bf9\u4e8e\u5176\u4ed6\u4eba\uff0c\u591a\u4e86\u4e00\u79cd\u53ef\u4ee5\u5c1d\u8bd5\u7684\u5f00\u53d1\u65b9\u5f0f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,s.jsxs)(n.p,{children:["\u57fa\u4e8e typescript \u5e93\u63d0\u4f9b\u7684 ",(0,s.jsx)(n.code,{children:"transpileModule()"})," \u5b9e\u73b0\u5bf9 TypeScript \u4ee3\u7801\u7684\u89e3\u6790\u548c\u7f16\u8bd1\uff0c\u7f16\u8bd1\u6d41\u7a0b\u5927\u81f4\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"transpileModule()"})," \u4f20\u5165\u81ea\u5b9a\u4e49\u7684 transformer \u51fd\u6570\uff0c\u8bb0\u5f55\u6240\u6709\u901a\u8fc7 import \u8bed\u53e5\u5f15\u5165\u7684 css \u6587\u4ef6\u8def\u5f84\u53ca\u4ee3\u7801\u8d77\u6b62\u4f4d\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5c06 TypeScript \u6e90\u7801\u4e2d\u7684 css \u6587\u4ef6\u76f8\u5173\u7684 import \u8bed\u53e5\u66ff\u6362\u6210 ",(0,s.jsx)(n.code,{children:"const xxx = {}"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"transpileModule()"})," \u5c06 TypeScript \u4ee3\u7801\u7f16\u8bd1\u4e3a JavaScript \u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5c06 JavaScript \u4ee3\u7801\u5199\u5165\u5230 js \u6587\u4ef6\u4e2d\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"import()"})," \u51fd\u6570\u52a0\u8f7d js \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c js \u6587\u4ef6\u9ed8\u8ba4\u5bfc\u51fa\u7684\u7ec4\u4ef6\u51fd\u6570\uff0c\u5f97\u5230 JSX \u5143\u7d20\u6811\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8f6c\u6362 JSX \u5143\u7d20\u6811\u4e3a JSON \u7f16\u8bd1\u5668\u652f\u6301\u7684\u683c\u5f0f\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5c06\u8bb0\u5f55\u7684 css \u6587\u4ef6\u8f6c\u6362\u4e3a resource \u5143\u7d20\u5408\u5e76\u5230 JSON \u6570\u636e\u4e2d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8c03\u7528 JSON \u7f16\u8bd1\u5668\u7f16\u8bd1 JSON \u6570\u636e\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u91c7\u7528\u7b56\u7565",children:"\u91c7\u7528\u7b56\u7565"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u9879\u65b0\u589e\u7684\u529f\u80fd\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(6540);const s={},c=t.createContext(s);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);