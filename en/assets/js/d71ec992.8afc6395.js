"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1387],{75365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tutorial/render-fabric/intro","title":"\u5f00\u59cb","description":"\u672c\u6559\u7a0b\u5c06\u4ee5\u4e00\u4e2a JavaScript \u5b9e\u73b0\u7684\u5e03\u6599\u6a21\u62df\u7a0b\u5e8f\u4e3a\u53c2\u8003\u5bf9\u8c61\uff0c\u8bb2\u89e3\u5982\u4f55\u5c06\u5b83\u7684 JavaScript \u4ee3\u7801\u8f6c\u8bd1\u4e3a C \u4ee3\u7801\uff0c\u5e76\u4f7f\u7528 LCUI \u5b9e\u73b0\u76f8\u540c\u7684\u4ea4\u4e92\u548c\u6e32\u67d3\u6548\u679c\u3002\u6ce8\u610f\uff0c\u672c\u6587\u53ea\u5173\u6ce8\u5982\u4f55\u8f6c\u8bd1\uff0c\u4e0d\u6d89\u53ca\u5e03\u6599\u6a21\u62df\u7b97\u6cd5\u3002","source":"@site/docs/tutorial/02-render-fabric/01-intro.md","sourceDirName":"tutorial/02-render-fabric","slug":"/tutorial/render-fabric/intro","permalink":"/en/docs/next/tutorial/render-fabric/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/02-render-fabric/01-intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6e32\u67d3\u5e03\u6599\u52a8\u753b","permalink":"/en/docs/next/tutorials/render-fabric"},"next":{"title":"\u8bbe\u8ba1\u76ee\u5f55\u7ed3\u6784","permalink":"/en/docs/next/tutorial/render-fabric/design"}}');var i=r(74848),a=r(28453);const o={},c="\u5f00\u59cb",s={},d=[];function l(e){const t={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\u5f00\u59cb",children:"\u5f00\u59cb"})}),"\n",(0,i.jsx)(t.p,{children:"\u672c\u6559\u7a0b\u5c06\u4ee5\u4e00\u4e2a JavaScript \u5b9e\u73b0\u7684\u5e03\u6599\u6a21\u62df\u7a0b\u5e8f\u4e3a\u53c2\u8003\u5bf9\u8c61\uff0c\u8bb2\u89e3\u5982\u4f55\u5c06\u5b83\u7684 JavaScript \u4ee3\u7801\u8f6c\u8bd1\u4e3a C \u4ee3\u7801\uff0c\u5e76\u4f7f\u7528 LCUI \u5b9e\u73b0\u76f8\u540c\u7684\u4ea4\u4e92\u548c\u6e32\u67d3\u6548\u679c\u3002\u6ce8\u610f\uff0c\u672c\u6587\u53ea\u5173\u6ce8\u5982\u4f55\u8f6c\u8bd1\uff0c\u4e0d\u6d89\u53ca\u5e03\u6599\u6a21\u62df\u7b97\u6cd5\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u4e3a\u65b9\u4fbf\u4e66\u5199\uff0c\u672c\u6559\u7a0b\u4f7f\u7528\u201cJS \u6e90\u7801\u201d\u6307\u4ee3\u5e03\u6599\u6a21\u62df\u7a0b\u5e8f\u7684 JavaScript \u6e90\u7801\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u5728\u4e0b\u65b9\u4f53\u9a8c\u8be5\u7a0b\u5e8f\u7684\u64cd\u4f5c\u65b9\u5f0f\u548c\u6e32\u67d3\u6548\u679c\uff0c\u540c\u65f6\u7b80\u8981\u6d4f\u89c8 JS \u6e90\u7801\u3002"}),"\n",(0,i.jsx)("iframe",{height:"600",style:{width:"100%"},scrolling:"no",title:"Delicate Fabric",src:"https://codepen.io/matthewmain/embed/oyyadr?default-tab=js%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true",children:(0,i.jsxs)(t.p,{children:["See the Pen ",(0,i.jsx)("a",{href:"https://codepen.io/matthewmain/pen/oyyadr",children:"\nDelicate Fabric"})," by Matthew Main (",(0,i.jsx)("a",{href:"https://codepen.io/matthewmain",children:"@matthewmain"}),")\non ",(0,i.jsx)("a",{href:"https://codepen.io",children:"CodePen"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"\u4e0d\u96be\u770b\u51fa\uff0c\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u662f\u8ba1\u7b97\u6bcf\u4e00\u5e27\u5e03\u6599\u7684\u72b6\u6001\uff0c\u5e76\u5c06\u5176\u7ed8\u5236\u5230\u753b\u5e03\u4e0a\u3002\u540c\u65f6\uff0c\u5b83\u8fd8\u80fd\u591f\u54cd\u5e94\u7528\u6237\u7684\u9f20\u6807\u64cd\u4f5c\uff0c\u5e76\u6539\u53d8\u5e03\u6599\u7684\u5c40\u90e8\u72b6\u6001\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);