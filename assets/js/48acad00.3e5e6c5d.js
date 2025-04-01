"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2316],{58462:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"driver/events","title":"\u4e8b\u4ef6\u5faa\u73af","description":"\u4e8b\u4ef6\u5faa\u73af\u7684\u6982\u5ff5\u548c\u9a71\u52a8\u5f00\u53d1\u65b9\u5f0f\u7684\u4ecb\u7ecd\u3002","source":"@site/versioned_docs/version-2.x/driver/events.md","sourceDirName":"driver","slug":"/driver/events","permalink":"/docs/2.x/driver/events","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/driver/events.md","tags":[],"version":"2.x","frontMatter":{"description":"\u4e8b\u4ef6\u5faa\u73af\u7684\u6982\u5ff5\u548c\u9a71\u52a8\u5f00\u53d1\u65b9\u5f0f\u7684\u4ecb\u7ecd\u3002"},"sidebar":"docsSidebar","previous":{"title":"\u9a71\u52a8","permalink":"/docs/2.x/driver/"},"next":{"title":"\u89c6\u9891","permalink":"/docs/2.x/driver/video"}}');var r=i(74848),d=i(28453);const t={description:"\u4e8b\u4ef6\u5faa\u73af\u7684\u6982\u5ff5\u548c\u9a71\u52a8\u5f00\u53d1\u65b9\u5f0f\u7684\u4ecb\u7ecd\u3002"},c="\u4e8b\u4ef6\u5faa\u73af",l={},o=[{value:"\u9a71\u52a8\u63a5\u53e3",id:"\u9a71\u52a8\u63a5\u53e3",level:3},{value:"\u5f00\u53d1\u65b9\u5f0f",id:"\u5f00\u53d1\u65b9\u5f0f",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u4e8b\u4ef6\u5faa\u73af",children:"\u4e8b\u4ef6\u5faa\u73af"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e8b\u4ef6\u662f\u5e94\u7528\u7a0b\u5e8f\u4e0e\u81ea\u8eab\u5404\u4e2a\u529f\u80fd\u6a21\u5757\u4ee5\u53ca\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u8fdb\u884c\u901a\u8baf\u7684\u624b\u6bb5\uff0c\u4e5f\u662f\u5b9e\u73b0\u4e8b\u4ef6\u9a71\u52a8\u7f16\u7a0b\u6a21\u578b\u7684\u57fa\u7840\uff0c\u5e94\u7528\u7a0b\u5e8f\u5982\u679c\u8981\u54cd\u5e94\u8fd9\u4e9b\u4e8b\u4ef6\uff0c\u901a\u5e38\u662f\u521b\u5efa\u4e00\u4e2a\u4e8b\u4ef6\u961f\u5217\u6765\u96c6\u4e2d\u5b58\u653e\u5b83\u4eec\uff0c\u4ece\u4e8b\u4ef6\u961f\u5217\u53d6\u51fa\u4e8b\u4ef6\u5e76\u8c03\u7528\u5bf9\u5e94\u5904\u7406\u5668\u5c31\u662f\u4e00\u6b21\u4e8b\u4ef6\u54cd\u5e94\uff0c\u800c\u5f80\u590d\u6267\u884c\u8fd9\u4e2a\u64cd\u4f5c\u7684\u8fc7\u7a0b\u5c31\u662f\u4e8b\u4ef6\u5faa\u73af\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u9a71\u52a8\u63a5\u53e3",children:"\u9a71\u52a8\u63a5\u53e3"}),"\n",(0,r.jsxs)(n.p,{children:["LCUI \u5bf9\u4e8b\u4ef6\u5faa\u73af\u7684\u64cd\u4f5c\u6709\u5904\u7406\u4e8b\u4ef6\u3001\u7ed1\u5b9a\u4e8b\u4ef6\u548c\u89e3\u7ed1\u4e8b\u4ef6\uff0c\u9a71\u52a8\u6a21\u5757\u7684\u804c\u8d23\u5c31\u662f\u57fa\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u63a5\u53e3\u5411 LCUI \u63d0\u4f9b\u5b9e\u73b0\u4e86\u8fd9\u4e9b\u64cd\u4f5c\u7684\u63a5\u53e3\u3002\u9996\u5148\u6211\u4eec\u770b\u770b ",(0,r.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/include/LCUI/main.h#L133-L142",children:"include/LCUI/main.h"})," \u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"LCUI_AppDirver"})," \u5b9a\u4e49\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"typedef enum LCUI_AppDriverId_ {\n        LCUI_APP_UNKNOWN,\n        LCUI_APP_LINUX,\n        LCUI_APP_LINUX_X11,\n        LCUI_APP_WINDOWS,\n        LCUI_APP_UWP\n} LCUI_AppDriverId;\n\ntypedef struct LCUI_AppDriverRec_ {\n        LCUI_AppDriverId id;\n        void (*ProcessEvents)(void);\n        int (*BindSysEvent)(int, LCUI_EventFunc, void *, void (*)(void *));\n        int (*UnbindSysEvent)(int, LCUI_EventFunc);\n        int (*UnbindSysEvent2)(int);\n        void *(*GetData)(void);\n} LCUI_AppDriverRec, *LCUI_AppDriver;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"id"})," \u662f\u8be5\u9a71\u52a8\u7684\u6807\u8bc6\uff0c\u5728 Linux \u7cfb\u7edf\u4e2d\uff0cLCUI \u9488\u5bf9\u5b57\u7b26\u754c\u9762\u548c X11 \u73af\u5883\u63d0\u4f9b\u4e86\u4e24\u5957\u9a71\u52a8\uff0c\u800c\u8fd9\u4e2a ",(0,r.jsx)(n.code,{children:"id"})," \u7684\u4f5c\u7528\u5c31\u662f\u7528\u6765\u51b3\u5b9a\u8be5\u4f7f\u7528\u54ea\u5957\u9a71\u52a8\uff0c\u5f53\u7136 ",(0,r.jsx)(n.code,{children:"id"})," \u4e0d\u53ea\u6709\u8fd9\u4e00\u79cd\u7528\u9014\uff0c\u4f8b\u5982\uff1a\u5728\u975e\u5b57\u7b26\u754c\u9762\u6a21\u5f0f\u4e0b\u9690\u85cf\u9f20\u6807\u5149\u6807\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ProcessEvents"})," \u51fd\u6570\u7528\u4e8e\u5904\u7406\u4e8b\u4ef6\u961f\u5217\u91cc\u7684\u6240\u6709\u4e8b\u4ef6\uff0c\u5982\u679c\u4e8b\u4ef6\u961f\u5217\u4e2d\u6ca1\u6709\u4e8b\u4ef6\u5219\u4f1a\u7acb\u523b\u9000\u51fa\uff0c\u4e0d\u9700\u8981\u963b\u585e\u7b49\u5f85\u4e8b\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"UnbindSysEvent"})," \u548c ",(0,r.jsx)(n.code,{children:"UbindSysEvent2"})," \u51fd\u6570\u90fd\u662f\u7528\u4e8e\u89e3\u7ed1\u4e8b\u4ef6\uff0c\u524d\u8005\u7684\u89e3\u7ed1\u4f9d\u636e ",(0,r.jsx)(n.code,{children:"eventId + eventHandler"})," \uff0c\u540e\u8005\u662f ",(0,r.jsx)(n.code,{children:"handlerId"})," \u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5269\u4e0b\u7684 ",(0,r.jsx)(n.code,{children:"GetData"})," \u51fd\u6570\u4e3b\u8981\u7528\u4e8e\u5411\u5176\u5b83\u9a71\u52a8\u6a21\u5757\u63d0\u4f9b\u6570\u636e\uff0c\u4f8b\u5982\u5728 Windows \u7cfb\u7edf\u4e2d\uff0c\u867d\u7136\u5404\u4e2a\u9a71\u52a8\u7684\u4ee3\u7801\u56e0\u51fa\u4e8e\u6a21\u5757\u5316\u7684\u8003\u8651\u800c\u88ab\u5206\u5272\u5230\u591a\u4e2a\u6e90\u6587\u4ef6\u4e2d\uff0c\u4f46\u5b83\u4eec\u90fd\u662f\u57fa\u4e8e\u540c\u4e00\u4e2a\u4e3b\u7a97\u53e3\u7684\u6d88\u606f\u5faa\u73af\u4e14\u90fd\u4f9d\u8d56\u4e3b\u7a97\u53e3\u53e5\u67c4\uff0c\u4e3a\u4e86\u8ba9\u8fd9\u4e9b\u9a71\u52a8\u80fd\u62ff\u5230\u4e3b\u7a97\u53e3\u53e5\u67c4\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u9760 ",(0,r.jsx)(n.code,{children:"GetData"})," \u51fd\u6570\u6765\u83b7\u53d6\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5f00\u53d1\u65b9\u5f0f",children:"\u5f00\u53d1\u65b9\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u7efc\u4e0a\u6240\u8ff0\uff0c\u5047\u8bbe\u4f60\u6dfb\u52a0\u7684\u662f\u9002\u7528\u4e8e Mac OS \u7684\u9a71\u52a8\uff0c\u90a3\u4e48\u9700\u8981\u5982\u4e0b\u6b65\u9aa4\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"LCUI_AppDriverId"})," \u4e2d\u7684\u672b\u5c3e\u6dfb\u52a0 ",(0,r.jsx)(n.code,{children:"LCUI_APP_DARWIN"})," \u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6309\u7167\u51fd\u6570\u6307\u9488\u7684\u539f\u578b\u6765\u5b9a\u4e49\u4e00\u4e9b\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5b9a\u4e49 ",(0,r.jsx)(n.code,{children:"LCUI_CreateDarwinAppDriver"})," \u51fd\u6570\uff0c\u5728\u8fd9\u4e2a\u51fd\u6570\u521b\u5efa\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"LCUI_AppDriver"})," \u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u7136\u540e\u7ed9\u5b83\u7684 ",(0,r.jsx)(n.code,{children:"id"})," \u548c\u51fd\u6570\u6307\u9488\u8bbe\u7f6e\u6b63\u786e\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/include/LCUI/platform.h",children:" include/LCUI/platform.h"})," \u4e2d\u6dfb\u52a0\u9488\u5bf9\u8be5\u64cd\u4f5c\u7cfb\u7edf\u7684\u9884\u5904\u7406\u6307\u4ee4\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"#elif __APPLE__\n        #define LCUI_CreateAppDriver LCUI_CreateDarwinAppDriver\n...\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u9700\u4e86\u89e3\u66f4\u591a\uff0c\u53ef\u53c2\u8003\u73b0\u6709\u7684 Windows \u548c Linux \u7cfb\u7edf\u7684\u9a71\u52a8\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/include/LCUI/platform/windows/windows_events.h",children:"include/LCUI/platform/windows/windows_events.h"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/include/LCUI/platform/linux/linux_events.h",children:"include/LCUI/platform/linux/linux_events.h"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/include/LCUI/platform/linux/linux_x11events.h",children:"include/LCUI/platform/linux/linux_x11events.h"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/src/platform/windows/windows_events.c",children:"src/platform/windows/windows_events.c"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/src/platform/linux/linux_events.c",children:"src/platform/linux/linux_events.c"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/src/platform/linux/linux_x11events.c",children:"src/platform/linux/linux_x11events.c"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(96540);const r={},d=s.createContext(r);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);