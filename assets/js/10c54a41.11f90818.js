"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},l="YAML \u7f16\u8bd1\u5668",c={unversionedId:"rfcs/lcui-cli/yaml-compiler",id:"rfcs/lcui-cli/yaml-compiler",title:"YAML \u7f16\u8bd1\u5668",description:"- \u5f00\u59cb\u65e5\u671f\uff1a2023-08-14",source:"@site/docs/rfcs/lcui-cli/0003-yaml-compiler.md",sourceDirName:"rfcs/lcui-cli",slug:"/rfcs/lcui-cli/yaml-compiler",permalink:"/docs/next/rfcs/lcui-cli/yaml-compiler",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/rfcs/lcui-cli/0003-yaml-compiler.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"rfcSidebar",previous:{title:"XML \u7f16\u8bd1\u5668",permalink:"/docs/next/rfcs/lcui-cli/xml-compiler"},next:{title:"CSS \u7f16\u8bd1\u5668",permalink:"/docs/next/rfcs/lcui-cli/css-compiler"}},o={},s=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"yaml-\u7f16\u8bd1\u5668"},"YAML \u7f16\u8bd1\u5668"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u65e5\u671f\uff1a2023-08-14"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a1.x"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003\u95ee\u9898\uff1a"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 PR\uff1a")),(0,a.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,a.kt)("p",null,"\u589e\u52a0 YAML \u7f16\u8bd1\u5668\uff0c\u7528\u4e8e\u5c06 YAML \u7f16\u8bd1\u4e3a C \u4ee3\u7801\u3002"),(0,a.kt)("h2",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,a.kt)("p",null,"\u793a\u4f8b XML \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=home.yml",title:"home.yml"},'name: lcui-app\nchildren:\n  - name: resource\n    attributes:\n      type: text/css\n      src: home.css\n  - name: resource\n    attributes:\n      type: application/font-ttf\n      src: iconfont.ttf\n  - name: ui\n    children:\n      - name: text\n        children:\n          - type: text\n            text: Enter a message and save it.\n      - name: textedit\n        attributes:\n          ref: input-message\n          placeholder: "eg: hello, world!"\n      - name: button\n        attributes:\n          ref: btn-save-message\n        children:\n          - type: text\n            text: Save\n      - name: text\n        attributes:\n          ref: feedback\n          class: feedback\n        children:\n          - type: text\n            text: Message has been saved!\n')),(0,a.kt)("p",null,"\u793a\u4f8b CSS \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"title=home.css",title:"home.css"},"root {\n  background-color: #f6f8fa;\n}\n\n.feedback {\n  color: #28a745;\n  font-size: 12px;\n  margin-top: 5px;\n}\n")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"lcui compile home.yml")," \u547d\u4ee4\u540e\uff0c\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"home.yml.h")," \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=home.yml.h",title:"home.yml.h"},'/** This file is generated from home.yml */\n\n#include <ui.h>\n\ntypedef struct {\n        ui_widget_t *input_message;\n        ui_widget_t *btn_save_message;\n        ui_widget_t *feedback;\n} home_refs_t;\n\nstatic const char *css_str_0 = "\\\nroot {\\\n  background-color: #f6f8fa;\\\n}\\\n\\\n.feedback {\\\n  color: #28a745;\\\n  font-size: 12px;\\\n  margin-top: 5px;\\\n}\\\n\\\n";\n\n\nstatic void home_load_template(ui_widget_t *home_parent, home_refs_t *refs)\n{\n        ui_widget_t *w[5];\n\n        w[0] = ui_create_widget(NULL);\n        w[1] = ui_create_widget("text");\n        w[2] = ui_create_widget(NULL);\n        ui_widget_set_text(w[2], "Enter a message and save it.");\n        ui_widget_append(w[1], w[2]);\n        refs->input_message = ui_create_widget("textedit");\n        ui_widget_set_attr(refs->input_message, "placeholder", "eg: hello, world!");\n        refs->btn_save_message = ui_create_widget("button");\n        w[3] = ui_create_widget(NULL);\n        ui_widget_set_text(w[3], "Save");\n        ui_widget_append(refs->btn_save_message, w[3]);\n        refs->feedback = ui_create_widget("text");\n        ui_widget_add_class(refs->feedback, "feedback");\n        w[4] = ui_create_widget(NULL);\n        ui_widget_set_text(w[4], "Message has been saved!");\n        ui_widget_append(refs->feedback, w[4]);\n        ui_widget_append(home_parent, w[1]);\n        ui_widget_append(home_parent, refs->input_message);\n        ui_widget_append(home_parent, refs->btn_save_message);\n        ui_widget_append(home_parent, refs->feedback);\n}\n\nstatic void home_load_resources(void)\n{\n        ui_load_css_string(css_str_0, "home.css");\n        pd_font_library_load_file("iconfont.ttf");\n}\n')),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"home.c")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},'#include "home.yml.h"')," \u5373\u53ef\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,a.kt)("p",null,"YAML \u7f16\u8bd1\u5668\u548c XML \u7f16\u8bd1\u5668\u4e00\u6837\uff0c\u5b9e\u73b0\u8d77\u6765\u6bd4\u8f83\u7b80\u5355\uff0c\u89e3\u6790\u5b8c\u5185\u5bb9\u540e\u4f20\u7ed9 JSON \u7f16\u8bd1\u5668\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,a.kt)("p",null,"\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/yaml"},"yaml")," \u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,a.kt)("p",null,"\u65e0\u3002"),(0,a.kt)("h2",{id:"\u5907\u9009\u65b9\u6848"},"\u5907\u9009\u65b9\u6848"),(0,a.kt)("p",null,"\u65e0\u3002"),(0,a.kt)("h2",{id:"\u91c7\u7528\u7b56\u7565"},"\u91c7\u7528\u7b56\u7565"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u9879\u65b0\u589e\u7684\u529f\u80fd\u3002"))}d.isMDXComponent=!0}}]);