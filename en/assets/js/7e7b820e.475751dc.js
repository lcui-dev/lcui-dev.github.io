"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[543],{45826:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>s});var i=t(74848),r=t(28453);const s=[];function o(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["\u60f3\u7ee7\u7eed\u5b66\u4e60\u5b8c\u6574\u6559\u7a0b\uff1f\ud83d\udc49 ",(0,i.jsx)(n.a,{href:"https://leanpub.com/c/lcui-image-viewer",children:"\u70b9\u51fb\u83b7\u53d6\u5b8c\u6574\u6559\u7a0b"})]}),(0,i.jsx)(n.p,{children:"\u8d2d\u4e70\u540e\uff1a"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"60 \u5929\u5185\u82e5\u4e0d\u6ee1\u610f\u53ef\u5168\u989d\u9000\u6b3e"}),"\n",(0,i.jsx)(n.li,{children:"\u514d\u8d39\u83b7\u53d6\u6559\u7a0b\u7684\u540e\u7eed\u66f4\u65b0\u5185\u5bb9"}),"\n",(0,i.jsxs)(n.li,{children:["\u89c9\u5f97\u5185\u5bb9\u8d28\u91cf\u4e0d\u6ee1\u610f\uff1f\u5728 ",(0,i.jsx)(n.a,{href:"http://github.com/lcui-dev/kantu/issues/new",children:"GitHub"})," \u6216 ",(0,i.jsx)(n.a,{href:"http://gitee.com/lcui-dev/kantu/issues/new",children:"Gitee"})," \u4e0a\u5411\u4f5c\u8005\u53cd\u9988"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},91146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"tutorial/kantu/ui-film","title":"\u5b9e\u73b0\u5f71\u7247\u754c\u9762","description":"\u672c\u7ae0\u8282\u5c06\u6307\u5bfc\u4f60\u5b9e\u73b0\u5f71\u7247\u754c\u9762\uff0c\u8be5\u754c\u9762\u5c55\u793a\u5f53\u524d\u56fe\u50cf\u53ca\u5176\u524d\u540e\u6240\u6709\u56fe\u50cf\u7684\u7f29\u7565\u56fe\uff0c\u65b9\u4fbf\u7528\u6237\u9884\u89c8\u548c\u5feb\u901f\u8df3\u8f6c\u67e5\u770b\u5176\u5b83\u56fe\u50cf\u3002\u5b8c\u6210\u672c\u7ae0\u540e\uff0c\u4f60\u5c06\u5b66\u4f1a\uff1a","source":"@site/versioned_docs/version-3.x/tutorial/03-kantu/15-ui-film.md","sourceDirName":"tutorial/03-kantu","slug":"/tutorial/kantu/ui-film","permalink":"/en/docs/tutorial/kantu/ui-film","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/tutorial/03-kantu/15-ui-film.md","tags":[],"version":"3.x","sidebarPosition":15,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6dfb\u52a0\u6ed1\u5757\u7ec4\u4ef6","permalink":"/en/docs/tutorial/kantu/ui-slider"},"next":{"title":"\u5b9e\u73b0\u4fe1\u606f\u754c\u9762","permalink":"/en/docs/tutorial/kantu/ui-info"}}');var r=t(74848),s=t(28453),o=t(45826);const l={},c="\u5b9e\u73b0\u5f71\u7247\u754c\u9762",u={},a=[...o.RM];function d(e){const n={h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5b9e\u73b0\u5f71\u7247\u754c\u9762",children:"\u5b9e\u73b0\u5f71\u7247\u754c\u9762"})}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u5c06\u6307\u5bfc\u4f60\u5b9e\u73b0\u5f71\u7247\u754c\u9762\uff0c\u8be5\u754c\u9762\u5c55\u793a\u5f53\u524d\u56fe\u50cf\u53ca\u5176\u524d\u540e\u6240\u6709\u56fe\u50cf\u7684\u7f29\u7565\u56fe\uff0c\u65b9\u4fbf\u7528\u6237\u9884\u89c8\u548c\u5feb\u901f\u8df3\u8f6c\u67e5\u770b\u5176\u5b83\u56fe\u50cf\u3002\u5b8c\u6210\u672c\u7ae0\u540e\uff0c\u4f60\u5c06\u5b66\u4f1a\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528\u6eda\u52a8\u533a\u57df ScrollArea \u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u6eda\u52a8\u6761 ScrollBar \u7ec4\u4ef6\u7684\u6837\u5f0f\u548c\u884c\u4e3a"}),"\n",(0,r.jsx)(n.li,{children:"\u7ec4\u4ef6\u95f4\u7684\u6570\u636e\u901a\u4fe1\u65b9\u5f0f"}),"\n"]}),"\n","\n",(0,r.jsx)(o.Ay,{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);