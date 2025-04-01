"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2092],{47988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"rfc/lcui/lib-pandagl","title":"PandaGL \u56fe\u5f62\u5e93","description":"\u5c06\u5b57\u4f53\u3001\u6587\u5b57\u5904\u7406\u3001\u56fe\u50cf\u8bfb\u5199\u3001\u56fe\u5f62\u7ed8\u5236\u7b49\u529f\u80fd\u6a21\u5757\u6574\u5408\u4e3a PandaGL \u56fe\u5f62\u5e93\u3002","source":"@site/versioned_docs/version-3.x/rfc/lcui/0008-lib-pandagl.md","sourceDirName":"rfc/lcui","slug":"/rfc/lcui/lib-pandagl","permalink":"/docs/rfc/lcui/lib-pandagl","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/rfc/lcui/0008-lib-pandagl.md","tags":[],"version":"3.x","sidebarPosition":8,"frontMatter":{"description":"\u5c06\u5b57\u4f53\u3001\u6587\u5b57\u5904\u7406\u3001\u56fe\u50cf\u8bfb\u5199\u3001\u56fe\u5f62\u7ed8\u5236\u7b49\u529f\u80fd\u6a21\u5757\u6574\u5408\u4e3a PandaGL \u56fe\u5f62\u5e93\u3002"},"sidebar":"rfcSidebar","previous":{"title":"CSS \u5df2\u8ba1\u7b97\u6837\u5f0f","permalink":"/docs/rfc/lcui/lib-css-computed-style"},"next":{"title":"UI \u6838\u5fc3\u5e93","permalink":"/docs/rfc/lcui/lib-ui"}}');var d=t(74848),l=t(28453);const s={description:"\u5c06\u5b57\u4f53\u3001\u6587\u5b57\u5904\u7406\u3001\u56fe\u50cf\u8bfb\u5199\u3001\u56fe\u5f62\u7ed8\u5236\u7b49\u529f\u80fd\u6a21\u5757\u6574\u5408\u4e3a PandaGL \u56fe\u5f62\u5e93\u3002"},r="PandaGL \u56fe\u5f62\u5e93",c={},a=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2},{value:"\u672a\u89e3\u51b3\u7684\u95ee\u9898",id:"\u672a\u89e3\u51b3\u7684\u95ee\u9898",level:2}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"pandagl-\u56fe\u5f62\u5e93",children:"PandaGL \u56fe\u5f62\u5e93"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2022-04-11"}),"\n",(0,d.jsx)(n.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"}),"\n",(0,d.jsx)(n.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a\u65e0"}),"\n",(0,d.jsxs)(n.li,{children:["\u5b9e\u73b0 PR\uff1a",(0,d.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/pull/292",children:"#292"}),", ",(0,d.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/pull/281",children:"#281"})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,d.jsx)(n.p,{children:"\u5c06\u5b57\u4f53\u3001\u6587\u5b57\u5904\u7406\u3001\u56fe\u50cf\u8bfb\u5199\u3001\u56fe\u5f62\u7ed8\u5236\u7b49\u529f\u80fd\u6a21\u5757\u6574\u5408\u4e3a PandaGL \u56fe\u5f62\u5e93\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:'#include <pandagl.h>\n\nint main(void)\n{\n\tint ret;\n\tpd_canvas_t img;\n\tpd_pos_t pos = { 0, 80 };\n\tpd_rect_t area = { 0, 0, 320, 240 };\n\tpd_text_t *text = pd_text_create();\n\tpd_text_style_t style;\n\n\t/* \u521d\u59cb\u5316\u5b57\u4f53\u5904\u7406\u529f\u80fd */\n\tpd_font_library_init();\n\n\t/* \u521b\u5efa\u4e00\u4e2a\u56fe\u50cf\uff0c\u5e76\u4f7f\u7528\u7070\u8272\u586b\u5145 */\n\tpd_canvas_init(&img);\n\tpd_canvas_create(&img, 320, 240);\n\tpd_canvas_fill(&img, RGB(240, 240, 240));\n\n\t/* \u8bbe\u7f6e\u6587\u672c\u7684\u5b57\u4f53\u5927\u5c0f */\n\tpd_text_style_init(&style);\n\tstyle.pixel_size = 24;\n\tstyle.has_pixel_size = TRUE;\n\n\t/* \u8bbe\u7f6e\u6587\u672c\u56fe\u5c42\u7684\u56fa\u5b9a\u5c3a\u5bf8\u3001\u6587\u672c\u6837\u5f0f\u3001\u6587\u672c\u5185\u5bb9\u3001\u5bf9\u9f50\u65b9\u5f0f */\n\tpd_text_set_fixed_size(text, 320, 240);\n\tpd_text_set_style(text, &style);\n\tpd_text_set_align(text, PD_TEXT_ALIGN_CENTER);\n\tpd_text_write(text, L"\u8fd9\u662f\u4e00\u6bb5\u6d4b\u8bd5\u6587\u672c\\nHello, World!", NULL);\n\tpd_text_update(text, NULL);\n\n\t/* \u5c06\u6587\u672c\u56fe\u5c42\u7ed8\u5236\u5230\u56fe\u50cf\u4e2d\uff0c\u7136\u540e\u5c06\u56fe\u50cf\u5199\u5165\u81f3 png \u6587\u4ef6\u4e2d */\n\tpd_text_render_to(text, area, pos, &img);\n\tret = pd_write_png_file("test_string_render.png", &img);\n\tpd_canvas_destroy(&img);\n\n\t/* \u91ca\u653e\u5b57\u4f53\u5904\u7406\u529f\u80fd\u76f8\u5173\u8d44\u6e90 */\n\tpd_font_library_destroy();\n\treturn ret;\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,d.jsx)(n.p,{children:"2.x \u7248\u672c\u4e2d\u7684\u56fe\u5f62\u5904\u7406\u76f8\u5173\u6e90\u6587\u4ef6\u6bd4\u8f83\u5206\u6563\uff0c\u4e0d\u5229\u4e8e\u67e5\u627e\u548c\u7ef4\u62a4\uff0c\u800c\u4e14\u6309\u7167 3.x \u7248\u672c\u7684\u67b6\u6784\u8bbe\u8ba1\u601d\u60f3\uff0c\u5b83\u4eec\u5e94\u8be5\u88ab\u6574\u7406\u4e3a\u901a\u7528\u7684\u56fe\u5f62\u5e93\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5e38\u89c1\u7684\u5f00\u6e90\u56fe\u5f62\u5e93\u9664\u4e86\u5177\u5907\u57fa\u672c\u7684\u56fe\u5f62\u7ed8\u5236\u80fd\u529b\u5916\uff0c\u5927\u90fd\u8fd8\u5177\u5907\u6587\u5b57\u6e32\u67d3\u3001\u56fe\u50cf\u8bfb\u5199\u80fd\u529b\uff0c\u56e0\u6b64\uff0c\u65b0\u7684\u56fe\u5f62\u5e93\u4e5f\u5e94\u8be5\u5177\u5907\u8fd9\u4e9b\u80fd\u529b\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,d.jsxs)(n.p,{children:["\u56fe\u5f62\u5e93\u547d\u540d\u4e3a PandaGL\uff0c\u6807\u8bc6\u7b26\u547d\u540d\u4ee5 ",(0,d.jsx)(n.code,{children:"pd_"})," \u5f00\u5934\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u6a21\u5757\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u753b\u5e03\uff08Canvas\uff09\uff1a\u63d0\u4f9b\u50cf\u7d20\u6570\u636e\u64cd\u4f5c\u548c\u57fa\u672c\u56fe\u5f62\u7ed8\u5236\u80fd\u529b\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u5b57\u4f53\u5e93\uff08FontLibrary\uff09\uff1a\u63d0\u4f9b\u5b57\u4f53\u6587\u4ef6\u52a0\u8f7d\u3001\u5b57\u5f62\u6e32\u67d3\u80fd\u529b\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u6587\u5b57\uff08Text\uff09\uff1a\u63d0\u4f9b\u6587\u5b57\u6392\u7248\u548c\u6e32\u67d3\u80fd\u529b\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u56fe\u50cf\uff08Image\uff09\uff1a\u63d0\u4f9b\u56fe\u50cf\u6587\u4ef6\u8bfb\u5199\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u7531\u4e8e\u5b57\u4f53\u5e93\u548c\u56fe\u50cf\u6a21\u5757\u90fd\u4f9d\u8d56\u7b2c\u4e09\u65b9\u5e93\uff0c\u51fa\u4e8e\u53ef\u88c1\u526a\u6027\u548c\u5e93\u4f53\u79ef\u4e0a\u7684\u8003\u8651\uff0c\u5728\u6784\u5efa\u914d\u7f6e\u4e2d\u5c06\u5b83\u4eec\u914d\u7f6e\u4e3a\u53ef\u9009\u6a21\u5757\uff0c\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"# \u7981\u7528\u56fe\u50cf\u6a21\u5757\nxmake config --with-pandagl-image=n\n\n# \u7981\u7528\u5b57\u4f53\u5e93\u6a21\u5757\nxmake config --with-pandagl-font=n\n\n# \u7981\u7528\u6587\u5b57\u6a21\u5757\nxmake config --with-pandagl-text=n\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"LCUI_TextLayer"})," \u91cd\u547d\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"pd_text_t"}),"\uff0c\u5220\u9664 UTF-8 \u548c ANSI \u7248\u672c\u7684\u6587\u672c\u64cd\u4f5c\u51fd\u6570\uff0c\u4ec5\u4fdd\u7559\u5bbd\u5b57\u7b26\u7248\u672c\uff0c\u793a\u4f8b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-diff",children:"- /** \u63d2\u5165\u6587\u672c\u5185\u5bb9\uff08UTF-8\u7248\uff09 */\n- LCUI_API int TextLayer_InsertText(LCUI_TextLayer layer, const char *utf8_str);\n-\n- /** \u8ffd\u52a0\u6587\u672c\u5185\u5bb9\uff08\u5bbd\u5b57\u7b26\u7248\uff09 */\n- LCUI_API int TextLayer_AppendTextW(LCUI_TextLayer layer, const wchar_t *wstr,\n- \t\t\t\t   LinkedList *tag_stack);\n-\n- /** \u8ffd\u52a0\u6587\u672c\u5185\u5bb9 */\n- LCUI_API int TextLayer_AppendTextA(LCUI_TextLayer layer,\n- \t\t\t\t   const char *ascii_text);\n+ PD_PUBLIC int pd_text_append(pd_text_t *text, const wchar_t *wstr, list_t *tag_stack);\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,d.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,d.jsx)(n.p,{children:"\u5220\u9664\u56fe\u5f62\u5904\u7406\u76f8\u5173\u6a21\u5757\uff0c\u76f4\u63a5\u7528\u6210\u719f\u7684\u5f00\u6e90\u56fe\u5f62\u5e93\u3002\u4e0d\u5efa\u8bae\u91c7\u7528\u6b64\u65b9\u6848\uff0c\u56e0\u4e3a\u5de5\u4f5c\u91cf\u8f83\u5927\uff0c\u8fd8\u9700\u8981\u6295\u5165\u6210\u672c\u53bb\u5b66\u4e60\u5176\u5b83\u56fe\u5f62\u5e93\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u91c7\u7528\u7b56\u7565",children:"\u91c7\u7528\u7b56\u7565"}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u662f\u4e2a\u7834\u574f\u6027\u6539\u52a8\uff0c\u9700\u8981\u5bf9\u6240\u6709\u7528\u5230 PandaGL \u529f\u80fd\u7684\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\u3002\u7531\u4e8e\u4e3b\u8981\u6539\u52a8\u90fd\u5728\u547d\u540d\u4e0a\uff0c\u8fd9\u4e9b\u6587\u4ef6\u901a\u5e38\u53ea\u9700\u8981\u5168\u5c40\u66ff\u6362\u540d\u79f0\u5373\u53ef\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u672a\u89e3\u51b3\u7684\u95ee\u9898",children:"\u672a\u89e3\u51b3\u7684\u95ee\u9898"}),"\n",(0,d.jsxs)(n.p,{children:["\u51fa\u4e8e\u51fd\u6570\u53c2\u6570\u590d\u6742\u5ea6\u95ee\u9898\u4e0a\u7684\u8003\u8651\uff0c",(0,d.jsx)(n.code,{children:"pd_text_write()"}),"\u3001",(0,d.jsx)(n.code,{children:"pd_text_append()"}),"\u3001",(0,d.jsx)(n.code,{children:"pd_text_insert()"})," \u7684\u7b2c\u4e09\u4e2a\u53c2\u6570 ",(0,d.jsx)(n.code,{children:"tag_stack"})," \u7528\u5904\u4e0d\u5927\uff0c\u5e94\u8be5\u91cd\u65b0\u8003\u8651 ",(0,d.jsx)(n.code,{children:"tag_stack"})," \u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4f8b\u5982\uff1a\u5185\u7f6e\u5728 ",(0,d.jsx)(n.code,{children:"pd_text_t"})," \u4e2d\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5b57\u4f53\u5e93\u548c\u6587\u5b57\u6a21\u5757\u7684\u63a5\u53e3\u6709\u5f85\u91cd\u65b0\u8bbe\u8ba1\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const d={},l=i.createContext(d);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);