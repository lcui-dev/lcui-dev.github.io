"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6975],{4969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var s=t(4848),i=t(8453);const c={},r="\u6807\u8bb0",a={id:"tutorial/kantu/markup",title:"\u6807\u8bb0",description:"\u6807\u8bb0\uff08Markup\uff09\u662f\u6307\u4f7f\u7528\u6807\u8bb0\u8bed\u8a00\u7f16\u5199\u7684\u6587\u672c\uff0c\u7528\u4e8e\u63cf\u8ff0\u6587\u6863\u7684\u7ed3\u6784\u548c\u683c\u5f0f\u3002\u5b83\u901a\u8fc7\u5728\u6587\u672c\u4e2d\u63d2\u5165\u7279\u5b9a\u7684\u6807\u8bb0\uff08\u6807\u7b7e\uff09\u6765\u6307\u793a\u6587\u6863\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u548c\u5176\u5b83\u76f8\u5173\u4fe1\u606f\u3002",source:"@site/docs/tutorial/04-kantu/03-markup.md",sourceDirName:"tutorial/04-kantu",slug:"/tutorial/kantu/markup",permalink:"/docs/next/tutorial/kantu/markup",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/04-kantu/03-markup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb",permalink:"/docs/next/tutorial/kantu/get-started"},next:{title:"\u6837\u5f0f",permalink:"/docs/next/tutorial/kantu/styling"}},l={},o=[{value:"TypeScript",id:"typescript",level:2},{value:"XML",id:"xml",level:2},{value:"JSON",id:"json",level:2},{value:"YAML",id:"yaml",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u6807\u8bb0",children:"\u6807\u8bb0"}),"\n",(0,s.jsx)(n.p,{children:"\u6807\u8bb0\uff08Markup\uff09\u662f\u6307\u4f7f\u7528\u6807\u8bb0\u8bed\u8a00\u7f16\u5199\u7684\u6587\u672c\uff0c\u7528\u4e8e\u63cf\u8ff0\u6587\u6863\u7684\u7ed3\u6784\u548c\u683c\u5f0f\u3002\u5b83\u901a\u8fc7\u5728\u6587\u672c\u4e2d\u63d2\u5165\u7279\u5b9a\u7684\u6807\u8bb0\uff08\u6807\u7b7e\uff09\u6765\u6307\u793a\u6587\u6863\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u548c\u5176\u5b83\u76f8\u5173\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u501f\u52a9 lcui-cli\uff0c\u4f60\u6709\u591a\u79cd\u7f16\u5199\u754c\u9762\u7684\u65b9\u5f0f\uff1a\u4f7f\u7528 XML \u8fd9\u79cd\u6807\u8bb0\u8bed\u8a00\uff0c\u6216\u662f\u7528 YAML \u548c JSON \u683c\u5f0f\u7684\u6587\u4ef6\uff0c\u53c8\u6216\u662f\u5728 JavaScript \u6216 TypeScript \u4ee3\u7801\u4e2d\u4f7f\u7528 JSX \u8bed\u6cd5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,s.jsxs)(n.p,{children:["\u9879\u76ee\u4e2d\u7684\u754c\u9762\u90e8\u5206\u662f\u4f7f\u7528 TypeScript \u8bed\u8a00\u63cf\u8ff0\u7684\uff0c\u6e90\u6587\u4ef6\u662f ",(0,s.jsx)(n.code,{children:".tsx"})," \u540e\u7f00\uff0c\u5b83\u4eec\u7ecf\u8fc7 lcui-cli \u5de5\u5177\u7f16\u8bd1\u540e\u4f1a\u751f\u6210\u540c\u540d\u7684 ",(0,s.jsx)(n.code,{children:".tsx.h"})," \u540e\u7f00\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0d\u7528\u62c5\u5fc3\uff0c\u4f60\u65e0\u9700\u5b66\u4e60 TypeScript \u8bed\u8a00\uff0c\u4ee3\u7801\u4e2d\u53ea\u7528\u5230 TypeScript \u7684\u57fa\u672c\u7684\u8bed\u6cd5\uff0c\n\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4f60\u53ea\u9700\u8981\u53c2\u8003\u4ee5\u4e0b\u4ee3\u7801\u7247\u6bb5\u6765\u7f16\u5199\u5373\u53ef\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'// \u5f15\u5165 LCUI \u7684\u9884\u7f6e\u7ec4\u4ef6\nimport React, { Text, TextInput, Button } from "@lcui/react";\n// \u4ece\u56fe\u6807\u5e93\u4e2d\u5f15\u5165\u56fe\u6807\nimport { EmojiSparkle } from "@lcui/react-icons";\n// \u5f15\u5165\u56fe\u6807\u5e93\u7684\u6837\u5f0f\u6587\u4ef6\nimport "@lcui/react-icons/dist/style.css";\n// \u5f15\u5165\u5176\u5b83\u7ec4\u4ef6\nimport About from "../components/about";\n\nexport default function Home() {\n  return (\n    <div className="container">\n      <EmojiSparkle />\n      <About />\n      <div className="input-group">\n        <Text>Enter a message and save it.</Text>\n        <TextInput $ref="input_message" placeholder="eg: hello, world!" />\n        <Button $ref="btn_save_message">Save</Button>\n      </div>\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"import"})," \u8bed\u53e5\u7528\u4e8e\u5bfc\u5165\u7531\u53e6\u4e00\u4e2a\u6a21\u5757\u5bfc\u51fa\u7684",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Binding",children:"\u7ed1\u5b9a"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://gitee.com/lcui-dev/react",children:"@lcui/react"})," \u662f\u4e00\u4e2a\u7528\u4e8e LCUI \u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u7684 React \u5e93\uff0c\u63d0\u4f9b TypeScript \u7c7b\u578b\u58f0\u660e\u3001React \u7248\u9884\u7f6e\u7ec4\u4ef6\uff08\u4f8b\u5982\uff1aText\uff0cTextInput\uff0cButton\uff09\uff0c\u914d\u5408 @lcui/cli \u4f7f\u7528\u3002\u4e0e React \u5e93\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u5b83\u4ec5\u5141\u8bb8\u4f7f\u7528 JSX \u7684\u57fa\u672c\u7279\u6027\uff0c\u4e0d\u63d0\u4f9b ",(0,s.jsx)(n.code,{children:"useState()"}),"\u3001",(0,s.jsx)(n.code,{children:"useEffect()"})," \u7b49\u51fd\u6570\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ea\u80fd\u5c06 JSX \u5f53\u6210",(0,s.jsx)(n.strong,{children:"\u9759\u6001"}),"\u7684 XML \u6216 HTML \u8fd9\u7c7b\u6807\u8bb0\u8bed\u8a00\u6765\u5199\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://gitee.com/lcui-dev/fluent-ui-system-icons",children:"@lcui/react-icons"})," \u662f\u4e13\u4e3a LCUI \u9002\u914d\u7684\u56fe\u6807\u5e93\uff0c\u56fe\u6807\u90fd\u6765\u81ea ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/fluentui-system-icons",children:"Fluent UI \u7cfb\u7edf\u56fe\u6807"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"export default"})," \u8bed\u53e5\u7528\u4e8e\u5bfc\u51fa\u9ed8\u8ba4\u7ed1\u5b9a\uff0c\u540e\u9762\u63a5\u7684\u662f ",(0,s.jsx)(n.code,{children:"function Home"}),"\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u5bfc\u51fa Home \u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"function Home() { ... }"})," \u662f\u51fd\u6570\u58f0\u660e\uff0c\u5176\u4e2d\u51fd\u6570\u540d\u79f0 Home \u5c06\u4f1a\u4f5c\u4e3a C \u4ee3\u7801\u4e2d\u6ce8\u518c\u7ec4\u4ef6\u65f6\u4f7f\u7528\u7684\u540d\u79f0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u51fd\u6570\u5185\u90e8\u8fd4\u56de\u7684\u662f JSX \u8868\u8fbe\u5f0f\u3002JSX \u4e0e HTML \u5199\u6cd5\u76f8\u4f3c\uff0c\u4f46\u6bd4\u5b83\u66f4\u4e25\u683c\u3002\u4f60\u5fc5\u987b\u5173\u95ed\u6807\u7b7e\uff0c\u5982 ",(0,s.jsx)(n.code,{children:"<br/>"}),"\u3002\u4f60\u7684\u7ec4\u4ef6\u4e5f\u4e0d\u80fd\u8fd4\u56de\u591a\u4e2a JSX \u6807\u8bb0\u3002\u4f60\u5fc5\u987b\u5c06\u5b83\u4eec\u5c01\u88c5\u5230\u4e00\u4e2a\u5171\u4eab\u7684\u7236\u7ea7\u4e2d\uff0c\u5982 ",(0,s.jsx)(n.code,{children:"<div></div>"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["JSX \u5143\u7d20\u7684 ",(0,s.jsx)(n.code,{children:"$ref"})," \u5c5e\u6027\u7528\u4e8e\u521b\u5efa\u5f15\u7528\uff0c\u7f16\u8bd1\u540e\u4f1a\u5728 refs \u7ed3\u6784\u4f53\u4e2d\u521b\u5efa\u540c\u540d\u6210\u5458\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5b83\u76f4\u63a5\u8bbf\u95ee ",(0,s.jsx)(n.code,{children:"ui_widget_t"})," \u7ec4\u4ef6\u5b9e\u4f8b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["lcui-cli \u5bf9 tsx \u6587\u4ef6\u7684\u7f16\u8bd1\u8fc7\u7a0b\u662f\u5148\u5c06 tsx \u6587\u4ef6\u53ca\u5176\u4f9d\u8d56\u7684\u6240\u6709\u6a21\u5757\u7f16\u8bd1\u4e3a js \u6587\u4ef6\u5e76\u8f93\u51fa\u5230 ",(0,s.jsx)(n.code,{children:".lcui"})," \u76ee\u5f55\u4e2d\uff0c\u4e4b\u540e\u6267\u884c\u6a21\u5757\u4e2d\u5bfc\u51fa\u7684\u7ec4\u4ef6\u51fd\u6570\uff0c\u5c06\u8fd4\u56de\u7ed3\u679c\u8f6c\u8bd1\u6210 C \u4ee3\u7801\uff0c\u6700\u7ec8\u8f93\u51fa\u4e3a\u540c\u540d\u7684 ",(0,s.jsx)(n.code,{children:".h"})," \u540e\u7f00\u7684\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"xml",children:"XML"}),"\n",(0,s.jsx)(n.p,{children:"LCUI \u652f\u6301\u4ece XML \u6587\u4ef6\u4e2d\u52a0\u8f7d\u754c\u9762\u3002XML \u6587\u4ef6\u5185\u5bb9\u5199\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<lcui-app>\n  <resource type="text/css" src="home.css"/>\n  <resource type="application/font-ttf" src="iconfont.ttf"/>\n  <ui>\n    <text>Enter a message and save it.</text>\n    <textedit ref="input-message" placeholder="eg: hello, world!" />\n    <button ref="btn-save-message">Save</button>\n    <text ref="feedback" class="feedback">Message has been saved!</text>\n  </ui>\n</lcui-app>\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ui_xml.h"})," \u5934\u6587\u4ef6\u63d0\u4f9b\u7684 ",(0,s.jsx)(n.code,{children:"ui_load_xml_file()"})," \u51fd\u6570\u52a0\u8f7d XML \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <ui_xml.h>\n\n...\n\nui_widget_t *wrapper = ui_load_xml_file("path/to/file.xml");\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e00\u529f\u80fd\u53ef\u80fd\u4f1a\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\u79fb\u9664\uff0c\u56e0\u4e3a lcui-cli \u80fd\u591f\u5c06 XML \u8f6c\u8bd1\u6210\u76f4\u63a5\u6784\u5efa\u754c\u9762\u7684 C \u4ee3\u7801\uff0c\u8fd9\u6bd4\u5728\u8fd0\u884c\u65f6\u8c03\u7528 libxml2 \u5e93\u7684\u63a5\u53e3\u89e3\u6790 XML \u6587\u6863\u518d\u6784\u5efa\u754c\u9762\u7684\u6027\u80fd\u66f4\u9ad8\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"json",children:"JSON"}),"\n",(0,s.jsx)(n.p,{children:"lcui-cli \u7f16\u8bd1 XML\u3001YAML\u3001TSX \u7684\u4e2d\u95f4\u7ed3\u679c\u662f JSON \u683c\u5f0f\u7684\u6570\u636e\uff0c\u6700\u7ec8\u90fd\u662f\u7531 JSON \u7f16\u8bd1\u5668\u5c06\u7ed3\u679c\u8f6c\u6362\u6210 C \u4ee3\u7801\u7684\u3002"}),"\n",(0,s.jsx)(n.p,{children:"JSON \u5199\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "lcui-app",\n  "children": [\n    {\n      "name": "resource",\n      "attributes": { "type": "text/css", "src": "home.css" }\n    },\n    {\n      "name": "resource",\n      "attributes": {\n        "type": "application/font-ttf",\n        "src": "iconfont.ttf"\n      }\n    },\n    {\n      "name": "ui",\n      "children": [\n        {\n          "name": "text",\n          "children": [\n            { "type": "text", "text": "Enter a message and save it." }\n          ]\n        },\n        {\n          "name": "textinput",\n          "attributes": {\n            "ref": "input-message",\n            "placeholder": "eg: hello, world!"\n          }\n        },\n        {\n          "name": "button",\n          "attributes": { "ref": "btn-save-message" },\n          "children": [{ "type": "text", "text": "Save" }]\n        },\n        {\n          "name": "text",\n          "attributes": { "ref": "feedback", "class": "feedback" },\n          "children": [{ "type": "text", "text": "Message has been saved!" }]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"yaml",children:"YAML"}),"\n",(0,s.jsx)(n.p,{children:"YAML \u7684\u5199\u6cd5\u6bd4 JSON \u66f4\u7cbe\u7b80\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'name: lcui-app\nchildren:\n  - name: resource\n    attributes:\n      type: text/css\n      src: home.css\n  - name: resource\n    attributes:\n      type: application/font-ttf\n      src: iconfont.ttf\n  - name: ui\n    children:\n      - name: text\n        children:\n          - type: text\n            text: Enter a message and save it.\n      - name: textinput\n        attributes:\n          ref: input-message\n          placeholder: "eg: hello, world!"\n      - name: button\n        attributes:\n          ref: btn-save-message\n        children:\n          - type: text\n            text: Save\n      - name: text\n        attributes:\n          ref: feedback\n          class: feedback\n        children:\n          - type: text\n            text: Message has been saved!\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);