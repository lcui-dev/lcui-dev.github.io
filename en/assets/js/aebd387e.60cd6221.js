"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[870],{39867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tutorial/render-fabric/ui-style","title":"\u6dfb\u52a0\u6837\u5f0f","description":"JS \u6e90\u7801\u4e2d\u7684 scaleToWindow() \u51fd\u6570\u8d1f\u8d23\u8c03\u6574\u5bb9\u5668\u548c\u753b\u5e03\u7684\u5bbd\u9ad8\uff0c\u5b83\u4f1a\u5728\u7a97\u53e3\u5c3a\u5bf8\u53d8\u5316\u65f6\u8c03\u7528\u3002","source":"@site/docs/tutorial/02-render-fabric/09-ui-style.md","sourceDirName":"tutorial/02-render-fabric","slug":"/tutorial/render-fabric/ui-style","permalink":"/en/docs/next/tutorial/render-fabric/ui-style","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/02-render-fabric/09-ui-style.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u90e8\u4ef6","permalink":"/en/docs/next/tutorial/render-fabric/ui-widget"},"next":{"title":"\u6dfb\u52a0\u4e8b\u4ef6\u54cd\u5e94","permalink":"/en/docs/next/tutorial/render-fabric/ui-events"}}');var r=t(74848),s=t(28453);const c={},o="\u6dfb\u52a0\u6837\u5f0f",a={},d=[];function l(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6dfb\u52a0\u6837\u5f0f",children:"\u6dfb\u52a0\u6837\u5f0f"})}),"\n",(0,r.jsxs)(n.p,{children:["JS \u6e90\u7801\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"scaleToWindow()"})," \u51fd\u6570\u8d1f\u8d23\u8c03\u6574\u5bb9\u5668\u548c\u753b\u5e03\u7684\u5bbd\u9ad8\uff0c\u5b83\u4f1a\u5728\u7a97\u53e3\u5c3a\u5bf8\u53d8\u5316\u65f6\u8c03\u7528\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'//scaling\nfunction scaleToWindow() {\n  if (window.innerWidth > window.innerHeight) {\n    container.style.height = window.innerHeight*0.8+"px";\n    container.style.width = container.style.height;\n  } else {\n    container.style.width = window.innerWidth*0.8+"px";\n    container.style.height = container.style.width;\n  }\n  canvas.width = document.getElementById("canvas_div").clientWidth;\n  canvas.height = document.getElementById("canvas_div").clientHeight;\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u51fd\u6570\u7684\u5b58\u5728\u5fc5\u8981\u6027\u4e0d\u9ad8\uff0c\u7528 C \u8bed\u8a00\u5b9e\u73b0\u7684\u8bdd\u4f1a\u9700\u8981\u591a\u82b1\u4e00\u70b9\u65f6\u95f4\uff0c\u56e0\u6b64\uff0c\u7b80\u5355\u8d77\u89c1\uff0c\u6211\u4eec\u7ed9\u90e8\u4ef6\u8bbe\u7f6e\u4e00\u4e2a\u56fa\u5b9a\u7684\u5bbd\u9ad8\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u90a3\u4e48\u63a5\u4e0b\u6765\u5c31\u662f\u5b9a\u4e49\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8 CSS \u4ee3\u7801\u5b57\u7b26\u4e32\u7684\u53d8\u91cf\uff0c\u7136\u540e\u7b80\u5355\u8bbe\u7f6e\u5e03\u5c40\u3001\u80cc\u666f\u3001\u8fb9\u6846\u7b49\u6837\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:'title="src/main.c"',children:'const char *app_css = "\\\nroot {\\\n        display: flex;\\\n        align-items: center;\\\n        justify-content: center;\\\n        background: #f2f4f5;\\\n        width: 800px;\\\n        height: 600px;\\\n}\\\nfabric {\\\n        width: 800px;\\\n        height: 600px;\\\n        border: 1px solid #697b8c;\\\n        box-sizing: border-box;\\\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\\\n}";\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4e4b\u540e\uff0c\u5728 main() \u4e2d\u6dfb\u52a0 CSS \u5b57\u7b26\u4e32\u7684\u52a0\u8f7d\u4ee3\u7801\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:'title="src/main.c"',children:"ui_load_css_string(app_css, __FILE__);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);