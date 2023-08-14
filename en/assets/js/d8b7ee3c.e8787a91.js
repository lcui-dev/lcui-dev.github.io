"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={},s="CSS \u7f16\u8bd1\u5668",l={unversionedId:"rfcs/lcui-cli/javascript-compiler",id:"rfcs/lcui-cli/javascript-compiler",title:"CSS \u7f16\u8bd1\u5668",description:"- \u5f00\u59cb\u65e5\u671f\uff1a2023-08-14",source:"@site/docs/rfcs/lcui-cli/0006-javascript-compiler.md",sourceDirName:"rfcs/lcui-cli",slug:"/rfcs/lcui-cli/javascript-compiler",permalink:"/en/docs/next/rfcs/lcui-cli/javascript-compiler",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/rfcs/lcui-cli/0006-javascript-compiler.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"rfcSidebar",previous:{title:"SASS \u7f16\u8bd1\u5668",permalink:"/en/docs/next/rfcs/lcui-cli/sass-compiler"},next:{title:"React TSX \u7f16\u8bd1\u5668",permalink:"/en/docs/next/rfcs/lcui-cli/react-tsx-compiler"}},c={},o=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}],p={toc:o},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css-\u7f16\u8bd1\u5668"},"CSS \u7f16\u8bd1\u5668"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u65e5\u671f\uff1a2023-08-14"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a1.x"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003\u95ee\u9898\uff1a"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 PR\uff1a")),(0,a.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,a.kt)("p",null,"\u589e\u52a0 JavaScript \u7f16\u8bd1\u5668\uff0c\u7528\u4e8e\u6267\u884c JavaScript \u6587\u4ef6\u5e76\u5c06\u5176\u8fd4\u56de\u7684 JSON \u6570\u636e\u7f16\u8bd1\u4e3a C \u4ee3\u7801\u3002"),(0,a.kt)("h2",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,a.kt)("p",null,"\u793a\u4f8b JavaScript \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=home.js",title:"home.js"},'module.exports = {\n  name: "lcui-app",\n  children: [\n    {\n      name: "resource",\n      attributes: { type: "text/css", src: "home.css" },\n    },\n    {\n      name: "resource",\n      attributes: {\n        type: "application/font-ttf",\n        src: "iconfont.ttf",\n      },\n    },\n    {\n      name: "ui",\n      children: [\n        {\n          name: "text",\n          children: [{ type: "text", text: "Enter a message and save it." }],\n        },\n        {\n          name: "textedit",\n          attributes: {\n            ref: "input-message",\n            placeholder: "eg: hello, world!",\n          },\n        },\n        {\n          name: "button",\n          attributes: { ref: "btn-save-message" },\n          children: [{ type: "text", text: "Save" }],\n        },\n        {\n          name: "text",\n          attributes: { ref: "feedback", class: "feedback" },\n          children: [{ type: "text", text: "Message has been saved!" }],\n        },\n      ],\n    },\n  ],\n};\n')),(0,a.kt)("p",null,"\u793a\u4f8b CSS \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"title=home.css",title:"home.css"},"root {\n  background-color: #f6f8fa;\n}\n\n.feedback {\n  color: #28a745;\n  font-size: 12px;\n  margin-top: 5px;\n}\n")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"lcui compile home.js")," \u547d\u4ee4\u540e\uff0c\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"home.js.h")," \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=home.js.h",title:"home.js.h"},'/** This file is generated from home.js */\n\n#include <ui.h>\n\ntypedef struct {\n        ui_widget_t *input_message;\n        ui_widget_t *btn_save_message;\n        ui_widget_t *feedback;\n} Home_refs_t;\n\nstatic const char *css_str_0 = "\\\nroot {\\\n  background-color: #f6f8fa;\\\n}\\\n\\\n.feedback {\\\n  color: #28a745;\\\n  font-size: 12px;\\\n  margin-top: 5px;\\\n}\\\n\\\n";\n\n\nstatic void Home_load_template(ui_widget_t *Home_parent, Home_refs_t *refs)\n{\n        ui_widget_t *w[4];\n\n        w[0] = ui_create_widget("text");\n        w[1] = ui_create_widget(NULL);\n        ui_widget_set_text(w[1], "Enter a message and save it.");\n        ui_widget_append(w[0], w[1]);\n        refs->input_message = ui_create_widget("textedit");\n        ui_widget_set_attr(refs->input_message, "placeholder", "eg: hello, world!");\n        refs->btn_save_message = ui_create_widget("button");\n        w[2] = ui_create_widget(NULL);\n        ui_widget_set_text(w[2], "Save");\n        ui_widget_append(refs->btn_save_message, w[2]);\n        refs->feedback = ui_create_widget("text");\n        ui_widget_add_class(refs->feedback, "feedback");\n        w[3] = ui_create_widget(NULL);\n        ui_widget_set_text(w[3], "Message has been saved!");\n        ui_widget_append(refs->feedback, w[3]);\n        ui_widget_append(Home_parent, w[0]);\n        ui_widget_append(Home_parent, refs->input_message);\n        ui_widget_append(Home_parent, refs->btn_save_message);\n        ui_widget_append(Home_parent, refs->feedback);\n}\n\nstatic void Home_load_resources(void)\n{\n        ui_load_css_string(css_str_0, "home.css");\n        pd_font_library_load_file("iconfont.ttf");\n}\n\n')),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"home.c")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},'#include "home.js.h"')," \u5373\u53ef\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,a.kt)("p",null,"\u4e00\u4e9b\u524d\u7aef\u5f00\u53d1\u76f8\u5173\u5de5\u5177\u652f\u6301 js \u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6709\u4e00\u5b9a\u7684\u9002\u7528\u573a\u666f\uff0c\u53ef\u4ee5\u52a0\u4e0a\u3002"),(0,a.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,a.kt)("p",null,"\u8bfb\u53d6 js \u6587\u4ef6\u5185\u5bb9\uff0c\u7136\u540e\u8c03\u7528 eval() \u51fd\u6570\u6267\u884c\uff0c\u5c06\u8fd4\u56de\u503c\u4f20\u7ed9 JSON \u7f16\u8bd1\u5668\u3002"),(0,a.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,a.kt)("p",null,"\u65e0\u3002"),(0,a.kt)("h2",{id:"\u5907\u9009\u65b9\u6848"},"\u5907\u9009\u65b9\u6848"),(0,a.kt)("p",null,"\u65e0\u3002"),(0,a.kt)("h2",{id:"\u91c7\u7528\u7b56\u7565"},"\u91c7\u7528\u7b56\u7565"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u9879\u65b0\u589e\u7684\u529f\u80fd\u3002"))}d.isMDXComponent=!0}}]);