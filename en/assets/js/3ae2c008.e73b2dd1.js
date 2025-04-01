"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1115],{65558:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"rfc/lcui/lib-ui-image","title":"UI \u56fe\u50cf\u7f13\u5b58\u548c\u5f02\u6b65\u52a0\u8f7d","description":"\u65b0\u589e UIImage \u6a21\u5757\u6765\u8d1f\u8d23\u5f02\u6b65\u56fe\u50cf\u52a0\u8f7d\u3002","source":"@site/versioned_docs/version-3.x/rfc/lcui/0011-lib-ui-image.md","sourceDirName":"rfc/lcui","slug":"/rfc/lcui/lib-ui-image","permalink":"/en/docs/rfc/lcui/lib-ui-image","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/rfc/lcui/0011-lib-ui-image.md","tags":[],"version":"3.x","sidebarPosition":11,"frontMatter":{"description":"\u65b0\u589e UIImage \u6a21\u5757\u6765\u8d1f\u8d23\u5f02\u6b65\u56fe\u50cf\u52a0\u8f7d\u3002"},"sidebar":"rfcSidebar","previous":{"title":"UI \u670d\u52a1\u5668","permalink":"/en/docs/rfc/lcui/lib-ui-server"},"next":{"title":"UI \u53d8\u66f4\u89c2\u5bdf\u5668","permalink":"/en/docs/rfc/lcui/lib-ui-mutation-observer"}}');var l=n(74848),c=n(28453);const s={description:"\u65b0\u589e UIImage \u6a21\u5757\u6765\u8d1f\u8d23\u5f02\u6b65\u56fe\u50cf\u52a0\u8f7d\u3002"},r="UI \u56fe\u50cf\u7f13\u5b58\u548c\u5f02\u6b65\u52a0\u8f7d",a={},t=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"ui-\u56fe\u50cf\u7f13\u5b58\u548c\u5f02\u6b65\u52a0\u8f7d",children:"UI \u56fe\u50cf\u7f13\u5b58\u548c\u5f02\u6b65\u52a0\u8f7d"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2023-04-05"}),"\n",(0,l.jsx)(i.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"}),"\n",(0,l.jsx)(i.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a\u65e0"}),"\n",(0,l.jsx)(i.li,{children:"\u5b9e\u73b0 PR\uff1a\u65e0"}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,l.jsx)(i.p,{children:"\u65b0\u589e UIImage \u6a21\u5757\u6765\u8d1f\u8d23\u5f02\u6b65\u56fe\u50cf\u52a0\u8f7d\u3002"}),"\n",(0,l.jsx)(i.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:'#include <stdio.h>\n#include <ui/image.h>\n\nvoid on_image_load(ui_image_t *image, void *data)\n{\n        pd_canvas_t *data = (pd_canvas_t *)image;\n\n        if (data) {\n                printf("image loaded, size: (%d, %d)\\n", data->width, data->height);\n        } else {\n                printf("image loading failed!\\n");\n        }\n}\n\nvoid example(void)\n{\n        ui_image_t *image;\n\n        image = ui_image_create("/path/to/image.png");\n        ui_image_on_event(image, on_image_load, NULL);\n}\n'})}),"\n",(0,l.jsx)(i.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,l.jsx)(i.p,{children:"\u5728 2.x \u7248\u672c\u4e2d\uff0c\u90e8\u4ef6\u80cc\u666f\u56fe\u52a0\u8f7d\u529f\u80fd\u7684\u8bbe\u8ba1\u662f\uff1a\u5efa\u7acb\u4e00\u4e2a\u4ee5\u56fe\u50cf\u8def\u5f84\u4e3a\u7d22\u5f15\u7684\u7f13\u5b58\u8868\uff0c\u6bcf\u4e2a\u7f13\u5b58\u9879\u4e2d\u8bb0\u5f55\u4e86\u5f15\u7528\u8be5\u56fe\u50cf\u7684\u90e8\u4ef6\u5217\u8868\u3002\u5728\u8ba1\u7b97\u90e8\u4ef6\u80cc\u666f\u6837\u5f0f\u65f6\uff0c\u5982\u679c\u6307\u5b9a\u4e86\u56fe\u50cf\u8def\u5f84\uff0c\u5219\u4f1a\u52a0\u8f7d\u5b83\u5e76\u589e\u52a0\u8be5\u56fe\u50cf\u7684\u5f15\u7528\u8ba1\u6570\u3002\u5728\u90e8\u4ef6\u7684\u80cc\u666f\u56fe\u6837\u5f0f\u53d8\u66f4\u4ee5\u53ca\u90e8\u4ef6\u9500\u6bc1\u65f6\uff0c\u4f1a\u51cf\u5c11\u56fe\u50cf\u7684\u5f15\u7528\u8ba1\u6570\u3002\u5f53\u56fe\u50cf\u5f15\u7528\u8ba1\u6570\u4e3a 0 \u65f6\uff0c\u91ca\u653e\u56fe\u50cf\u8d44\u6e90\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u8fd9\u4e2a\u8bbe\u8ba1\u4e2d\u7684\u56fe\u50cf\u7f13\u5b58\u4f9d\u8d56\u4e8e\u90e8\u4ef6\uff0c\u800c\u56fe\u50cf\u5f02\u6b65\u52a0\u8f7d\u80fd\u529b\u5219\u4f9d\u8d56\u4e8e LCUI \u7684\u5de5\u4f5c\u7ebf\u7a0b\u3002\u6574\u4e2a\u529f\u80fd\u4ec5\u4f9b\u5185\u90e8\u4f7f\u7528\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u4e24\u4e2a\u4f9d\u8d56\u9879\u5e76\u4e0d\u662f\u5fc5\u8981\u7684\u3002\u5176\u4e2d\u5bf9 LCUI \u7684\u5de5\u4f5c\u7ebf\u7a0b\u7684\u4f9d\u8d56\u53ef\u4ee5\u901a\u8fc7\u5c06\u56fe\u50cf\u52a0\u8f7d\u51fd\u6570\u6539\u4e3a\u516c\u5171\u51fd\u6570\u6765\u89e3\u9664\uff0c\u7531\u4e0a\u5c42\u4ee3\u7801\u51b3\u5b9a\u653e\u5728\u54ea\u4e2a\u7ebf\u7a0b\u4e0a\u6267\u884c\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u6309\u7167 3.x \u7248\u672c\u7684\u67b6\u6784\u8bbe\u8ba1\u601d\u60f3\uff0c\u5b83\u53ef\u4ee5\u88ab\u8bbe\u8ba1\u6210\u8f83\u4e3a\u72ec\u7acb\u901a\u7528\u7684\u6a21\u5757\uff0c\u4ee5\u4fbf\u4e8e LCUI \u5e94\u7528\u5c42\u4ee3\u7801\u4e5f\u80fd\u4f7f\u7528\u5f02\u6b65\u56fe\u50cf\u52a0\u8f7d\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(i.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,l.jsxs)(i.p,{children:["\u8bbe\u8ba1\u7075\u611f\u6765\u81ea\uff1a",(0,l.jsx)(i.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image"})]}),"\n",(0,l.jsxs)(i.p,{children:["\u65b0\u589e ",(0,l.jsx)(i.code,{children:"ui_image_t"})," \u7c7b\u578b\uff0c\u57fa\u4e8e ",(0,l.jsx)(i.code,{children:"pd_canvas_t"})," \u6269\u5c55\u589e\u52a0\u5176\u5b83\u6210\u5458\uff0c\u5728\u4f7f\u7528\u65f6\u53ef\u5c06 ",(0,l.jsx)(i.code,{children:"ui_image_t"})," \u6307\u9488\u8f6c\u4e3a ",(0,l.jsx)(i.code,{children:"pd_canvas_t"})," \u6307\u9488\u6765\u8bbf\u95ee\u56fe\u50cf\u7684\u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(i.p,{children:"\u65b0\u589e\u4e8b\u4ef6\u7ed1\u5b9a\u51fd\u6570\uff0c\u7528\u4e8e\u76d1\u542c\u56fe\u50cf\u7684\u52a0\u8f7d\u7ed3\u679c\uff0c\u56de\u8c03\u51fd\u6570\u7684\u6307\u9488\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:"typedef void (*ui_image_event_handler_t)(ui_image_t *, void *);\n"})}),"\n",(0,l.jsx)(i.p,{children:"\u5982\u679c\u56fe\u50cf\u52a0\u8f7d\u5931\u8d25\uff0c\u56de\u8c03\u51fd\u6570\u6536\u5230\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u503c\u4f1a\u4e3a NULL\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u6a21\u5757\u5185\u90e8\u7ef4\u62a4\u7f13\u5b58\u8868\u3001\u5f85\u52a0\u8f7d\u7684\u56fe\u50cf\u5217\u8868\u3001\u4e8b\u4ef6\u5217\u8868\u3002"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"ui_image_create()"})," \u51fd\u6570\u7528\u4e8e\u521b\u5efa\u56fe\u50cf\u5bf9\u8c61\uff0c\u5f53\u6307\u5b9a\u7684\u56fe\u50cf\u8def\u5f84\u5df2\u5728\u7f13\u5b58\u8868\u4e2d\u65f6\u5219\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u4e2d\u7684\u56fe\u50cf\uff0c\u5e76\u7ed9\u8be5\u7f13\u5b58\u589e\u52a0\u5f15\u7528\u8ba1\u6570\u3002\u5426\u5219\uff0c\u5c06\u56fe\u50cf\u5bf9\u8c61\u8ffd\u52a0\u5230\u5f85\u52a0\u8f7d\u7684\u56fe\u50cf\u5217\u8868\u4e2d\u3002"]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"ui_image_add_event_listener()"})," \u548c ",(0,l.jsx)(i.code,{children:"ui_image_remove_event_listener()"})," \u7528\u4e8e\u56fe\u50cf\u4e8b\u4ef6\u7684\u7ed1\u5b9a\u4e0e\u89e3\u7ed1\uff0c\u63d0\u4f9b\u7b80\u5199\u5b8f ",(0,l.jsx)(i.code,{children:"ui_image_on_event"})," \u548c ",(0,l.jsx)(i.code,{children:"ui_image_off_event"}),"\u3002"]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"ui_load_images()"})," \u7528\u4e8e\u5904\u7406\u5f85\u52a0\u8f7d\u7684\u56fe\u50cf\u5217\u8868\uff0c\u8be5\u51fd\u6570\u5e94\u8be5\u5728 UI \u7ebf\u7a0b\u5916\u7684\u5176\u5b83\u7ebf\u7a0b\u4e2d\u8c03\u7528\u3002"]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"ui_process_image_events()"})," \u7528\u4e8e\u5904\u7406\u5df2\u52a0\u8f7d\u7684\u56fe\u50cf\u7684\u4e8b\u4ef6\uff0c\u4e0e\u56fe\u50cf\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u90fd\u4f1a\u5728\u8fd9\u65f6\u88ab\u8c03\u7528\u3002"]}),"\n",(0,l.jsx)(i.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,l.jsxs)(i.p,{children:["\u56fe\u50cf\u52a0\u8f7d\u5931\u8d25\u65f6\uff0c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u63a5\u6536\u7684 ",(0,l.jsx)(i.code,{children:"ui_image_t"})," \u6307\u9488\u503c\u4e3a NULL\uff0c\u65e0\u6cd5\u5f97\u77e5\u56fe\u50cf\u4fe1\u606f\uff0c\u53ef\u8003\u8651\u5c06\u9519\u8bef\u4fe1\u606f\u5199\u5165 ",(0,l.jsx)(i.code,{children:"ui_image_t"})," \u7ed3\u6784\u4f53\u5185\u3002"]}),"\n",(0,l.jsx)(i.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,l.jsx)(i.p,{children:"\u65e0\u3002"}),"\n",(0,l.jsx)(i.h2,{id:"\u91c7\u7528\u7b56\u7565",children:"\u91c7\u7528\u7b56\u7565"}),"\n",(0,l.jsx)(i.p,{children:"\u8fd9\u662f\u4e2a\u65b0\u589e\u7684\u529f\u80fd\uff0c\u9700\u8981\u5c06\u90e8\u4ef6\u7684\u80cc\u666f\u56fe\u7247\u52a0\u8f7d\u903b\u8f91\u6539\u4e3a\u57fa\u4e8e\u65b0\u7684 UIImage\u3002"})]})}function h(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>r});var d=n(96540);const l={},c=d.createContext(l);function s(e){const i=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),d.createElement(c.Provider,{value:i},e.children)}}}]);