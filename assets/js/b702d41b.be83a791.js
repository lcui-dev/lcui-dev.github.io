"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3073],{52472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"rfc/lcui-cli/yaml-compiler","title":"YAML \u7f16\u8bd1\u5668","description":"- \u5f00\u59cb\u65e5\u671f\uff1a2023-08-14","source":"@site/versioned_docs/version-3.x/rfc/lcui-cli/0003-yaml-compiler.md","sourceDirName":"rfc/lcui-cli","slug":"/rfc/lcui-cli/yaml-compiler","permalink":"/docs/rfc/lcui-cli/yaml-compiler","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/rfc/lcui-cli/0003-yaml-compiler.md","tags":[],"version":"3.x","sidebarPosition":3,"frontMatter":{},"sidebar":"rfcSidebar","previous":{"title":"XML \u7f16\u8bd1\u5668","permalink":"/docs/rfc/lcui-cli/xml-compiler"},"next":{"title":"CSS \u7f16\u8bd1\u5668","permalink":"/docs/rfc/lcui-cli/css-compiler"}}');var s=t(74848),r=t(28453);const c={},a="YAML \u7f16\u8bd1\u5668",l={},d=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"yaml-\u7f16\u8bd1\u5668",children:"YAML \u7f16\u8bd1\u5668"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2023-08-14"}),"\n",(0,s.jsx)(n.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a1.x"}),"\n",(0,s.jsx)(n.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a"}),"\n",(0,s.jsx)(n.li,{children:"\u5b9e\u73b0 PR\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,s.jsx)(n.p,{children:"\u589e\u52a0 YAML \u7f16\u8bd1\u5668\uff0c\u7528\u4e8e\u5c06 YAML \u7f16\u8bd1\u4e3a C \u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b XML \u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",metastring:'title="home.yml"',children:'name: lcui-app\nchildren:\n  - name: resource\n    attributes:\n      type: text/css\n      src: home.css\n  - name: resource\n    attributes:\n      type: application/font-ttf\n      src: iconfont.ttf\n  - name: ui\n    children:\n      - name: text\n        children:\n          - type: text\n            text: Enter a message and save it.\n      - name: textedit\n        attributes:\n          ref: input-message\n          placeholder: "eg: hello, world!"\n      - name: button\n        attributes:\n          ref: btn-save-message\n        children:\n          - type: text\n            text: Save\n      - name: text\n        attributes:\n          ref: feedback\n          class: feedback\n        children:\n          - type: text\n            text: Message has been saved!\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b CSS \u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="home.css"',children:"root {\n  background-color: #f6f8fa;\n}\n\n.feedback {\n  color: #28a745;\n  font-size: 12px;\n  margin-top: 5px;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c ",(0,s.jsx)(n.code,{children:"lcui compile home.yml"})," \u547d\u4ee4\u540e\uff0c\u751f\u6210 ",(0,s.jsx)(n.code,{children:"home.yml.h"})," \u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",metastring:'title="home.yml.h"',children:'/** This file is generated from home.yml */\n\n#include <ui.h>\n\ntypedef struct {\n        ui_widget_t *input_message;\n        ui_widget_t *btn_save_message;\n        ui_widget_t *feedback;\n} home_refs_t;\n\nstatic const char *css_str_0 = "\\\nroot {\\\n  background-color: #f6f8fa;\\\n}\\\n\\\n.feedback {\\\n  color: #28a745;\\\n  font-size: 12px;\\\n  margin-top: 5px;\\\n}\\\n\\\n";\n\n\nstatic void home_load_template(ui_widget_t *home_parent, home_refs_t *refs)\n{\n        ui_widget_t *w[5];\n\n        w[0] = ui_create_widget(NULL);\n        w[1] = ui_create_widget("text");\n        w[2] = ui_create_widget(NULL);\n        ui_widget_set_text(w[2], "Enter a message and save it.");\n        ui_widget_append(w[1], w[2]);\n        refs->input_message = ui_create_widget("textedit");\n        ui_widget_set_attr(refs->input_message, "placeholder", "eg: hello, world!");\n        refs->btn_save_message = ui_create_widget("button");\n        w[3] = ui_create_widget(NULL);\n        ui_widget_set_text(w[3], "Save");\n        ui_widget_append(refs->btn_save_message, w[3]);\n        refs->feedback = ui_create_widget("text");\n        ui_widget_add_class(refs->feedback, "feedback");\n        w[4] = ui_create_widget(NULL);\n        ui_widget_set_text(w[4], "Message has been saved!");\n        ui_widget_append(refs->feedback, w[4]);\n        ui_widget_append(home_parent, w[1]);\n        ui_widget_append(home_parent, refs->input_message);\n        ui_widget_append(home_parent, refs->btn_save_message);\n        ui_widget_append(home_parent, refs->feedback);\n}\n\nstatic void home_load_resources(void)\n{\n        ui_load_css_string(css_str_0, "home.css");\n        pd_font_library_load_file("iconfont.ttf");\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"home.c"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:'#include "home.yml.h"'})," \u5373\u53ef\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,s.jsx)(n.p,{children:"YAML \u7f16\u8bd1\u5668\u548c XML \u7f16\u8bd1\u5668\u4e00\u6837\uff0c\u5b9e\u73b0\u8d77\u6765\u6bd4\u8f83\u7b80\u5355\uff0c\u89e3\u6790\u5b8c\u5185\u5bb9\u540e\u4f20\u7ed9 JSON \u7f16\u8bd1\u5668\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,s.jsxs)(n.p,{children:["\u57fa\u4e8e ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/yaml",children:"yaml"})," \u5b9e\u73b0\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u91c7\u7528\u7b56\u7565",children:"\u91c7\u7528\u7b56\u7565"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u9879\u65b0\u589e\u7684\u529f\u80fd\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);