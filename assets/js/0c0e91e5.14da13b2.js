"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8493],{45826:(e,n,i)=>{i.d(n,{Ay:()=>c,RM:()=>r});var t=i(74848),s=i(28453);const r=[];function o(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["\u60f3\u7ee7\u7eed\u5b66\u4e60\u5b8c\u6574\u6559\u7a0b\uff1f\ud83d\udc49 ",(0,t.jsx)(n.a,{href:"https://leanpub.com/c/lcui-image-viewer",children:"\u70b9\u51fb\u83b7\u53d6\u5b8c\u6574\u6559\u7a0b"})]}),(0,t.jsx)(n.p,{children:"\u8d2d\u4e70\u540e\uff1a"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"60 \u5929\u5185\u82e5\u4e0d\u6ee1\u610f\u53ef\u5168\u989d\u9000\u6b3e"}),"\n",(0,t.jsx)(n.li,{children:"\u514d\u8d39\u83b7\u53d6\u6559\u7a0b\u7684\u540e\u7eed\u66f4\u65b0\u5185\u5bb9"}),"\n",(0,t.jsxs)(n.li,{children:["\u89c9\u5f97\u5185\u5bb9\u8d28\u91cf\u4e0d\u6ee1\u610f\uff1f\u5728 ",(0,t.jsx)(n.a,{href:"http://github.com/lcui-dev/kantu/issues/new",children:"GitHub"})," \u6216 ",(0,t.jsx)(n.a,{href:"http://gitee.com/lcui-dev/kantu/issues/new",children:"Gitee"})," \u4e0a\u5411\u4f5c\u8005\u53cd\u9988"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},51179:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"tutorial/kantu/ui-viewer-display","title":"\u663e\u793a\u56fe\u50cf","description":"\u672c\u7ae0\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u56fe\u50cf\u67e5\u770b\u754c\u9762\u4e2d\u52a0\u8f7d\u548c\u663e\u793a\u56fe\u50cf\uff0c\u5e76\u8fdb\u4e00\u6b65\u96c6\u6210\u63a7\u5236\u5668\u6765\u63a7\u5236\u56fe\u50cf\u7684\u7f29\u653e\u6bd4\u4f8b\u3001\u4f4d\u7f6e\u548c\u5c3a\u5bf8\u3002\u901a\u8fc7\u9010\u6b65\u5b8c\u6210\u4ee3\u7801\u5b9e\u73b0\uff0c\u4f60\u5c06\u5b66\u4f1a\uff1a","source":"@site/versioned_docs/version-3.x/tutorial/03-kantu/09-ui-viewer-display.md","sourceDirName":"tutorial/03-kantu","slug":"/tutorial/kantu/ui-viewer-display","permalink":"/docs/tutorial/kantu/ui-viewer-display","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/tutorial/03-kantu/09-ui-viewer-display.md","tags":[],"version":"3.x","sidebarPosition":9,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6784\u5efa\u56fe\u50cf\u67e5\u770b\u754c\u9762","permalink":"/docs/tutorial/kantu/ui-viewer"},"next":{"title":"\u53cd\u9988\u52a0\u8f7d\u72b6\u6001","permalink":"/docs/tutorial/kantu/ui-viewer-status"}}');var s=i(74848),r=i(28453),o=i(45826);const c={},l="\u663e\u793a\u56fe\u50cf",a={},u=[...o.RM];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u663e\u793a\u56fe\u50cf",children:"\u663e\u793a\u56fe\u50cf"})}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u56fe\u50cf\u67e5\u770b\u754c\u9762\u4e2d\u52a0\u8f7d\u548c\u663e\u793a\u56fe\u50cf\uff0c\u5e76\u8fdb\u4e00\u6b65\u96c6\u6210\u63a7\u5236\u5668\u6765\u63a7\u5236\u56fe\u50cf\u7684\u7f29\u653e\u6bd4\u4f8b\u3001\u4f4d\u7f6e\u548c\u5c3a\u5bf8\u3002\u901a\u8fc7\u9010\u6b65\u5b8c\u6210\u4ee3\u7801\u5b9e\u73b0\uff0c\u4f60\u5c06\u5b66\u4f1a\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e2d\u52a8\u6001\u4fee\u6539 LCUI \u7ec4\u4ef6\u6837\u5f0f"}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"background-image"})," \u5c5e\u6027\u663e\u793a\u56fe\u50cf"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"background-size"})," \u548c ",(0,s.jsx)(n.code,{children:"background-position"})," \u5c5e\u6027\u63a7\u5236\u56fe\u50cf\u7684\u7f29\u653e\u6548\u679c"]}),"\n",(0,s.jsx)(n.li,{children:"\u89e3\u51b3\u5b57\u7b26\u4e32\u7f16\u7801\u95ee\u9898"}),"\n",(0,s.jsx)(n.li,{children:"\u89e3\u51b3\u5de5\u4f5c\u76ee\u5f55\u95ee\u9898"}),"\n"]}),"\n","\n",(0,s.jsx)(o.Ay,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);