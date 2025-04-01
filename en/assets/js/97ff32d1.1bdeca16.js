"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4801],{18107:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>_,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"rfc/lcui/lib-css-computed-style","title":"CSS \u5df2\u8ba1\u7b97\u6837\u5f0f","description":"\u91cd\u65b0\u8bbe\u8ba1 CSS \u6837\u5f0f\u8ba1\u7b97\u6d41\u7a0b\u548c\u76f8\u5173\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\uff0c\u5c06 UI \u5e93\u4e2d\u7684\u90e8\u5206\u6837\u5f0f\u8ba1\u7b97\u903b\u8f91\u79fb\u5165 CSS \u5e93\u4e2d\u5b9e\u73b0\u3002","source":"@site/versioned_docs/version-3.x/rfc/lcui/0007-lib-css-computed-style.md","sourceDirName":"rfc/lcui","slug":"/rfc/lcui/lib-css-computed-style","permalink":"/en/docs/rfc/lcui/lib-css-computed-style","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/rfc/lcui/0007-lib-css-computed-style.md","tags":[],"version":"3.x","sidebarPosition":7,"frontMatter":{"description":"\u91cd\u65b0\u8bbe\u8ba1 CSS \u6837\u5f0f\u8ba1\u7b97\u6d41\u7a0b\u548c\u76f8\u5173\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\uff0c\u5c06 UI \u5e93\u4e2d\u7684\u90e8\u5206\u6837\u5f0f\u8ba1\u7b97\u903b\u8f91\u79fb\u5165 CSS \u5e93\u4e2d\u5b9e\u73b0\u3002"},"sidebar":"rfcSidebar","previous":{"title":"CSS \u503c\u5b9a\u4e49\u8bed\u6cd5","permalink":"/en/docs/rfc/lcui/lib-css-value-definition-syntax"},"next":{"title":"PandaGL \u56fe\u5f62\u5e93","permalink":"/en/docs/rfc/lcui/lib-pandagl"}}');var c=t(74848),i=t(28453);const l={description:"\u91cd\u65b0\u8bbe\u8ba1 CSS \u6837\u5f0f\u8ba1\u7b97\u6d41\u7a0b\u548c\u76f8\u5173\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\uff0c\u5c06 UI \u5e93\u4e2d\u7684\u90e8\u5206\u6837\u5f0f\u8ba1\u7b97\u903b\u8f91\u79fb\u5165 CSS \u5e93\u4e2d\u5b9e\u73b0\u3002"},d="CSS \u5df2\u8ba1\u7b97\u6837\u5f0f",_={},r=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}];function u(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.header,{children:(0,c.jsx)(s.h1,{id:"css-\u5df2\u8ba1\u7b97\u6837\u5f0f",children:"CSS \u5df2\u8ba1\u7b97\u6837\u5f0f"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2023-04-08"}),"\n",(0,c.jsx)(s.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"}),"\n",(0,c.jsx)(s.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a\u65e0"}),"\n",(0,c.jsxs)(s.li,{children:["\u5b9e\u73b0 PR\uff1a",(0,c.jsx)(s.a,{href:"https://github.com/lc-soft/LCUI/pull/287",children:"#287"})]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,c.jsx)(s.p,{children:"\u91cd\u65b0\u8bbe\u8ba1 CSS \u6837\u5f0f\u8ba1\u7b97\u6d41\u7a0b\u548c\u76f8\u5173\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\uff0c\u5c06 UI \u5e93\u4e2d\u7684\u90e8\u5206\u6837\u5f0f\u8ba1\u7b97\u903b\u8f91\u79fb\u5165 CSS \u5e93\u4e2d\u5b9e\u73b0\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,c.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f UI \u90e8\u4ef6\u7684\u8ba1\u7b97\u6d41\u7a0b\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-c",children:"css_computed_style_t *s = &w->specified_style;\ncss_style_decl_t *style;\n\ncss_computed_style_destroy(s);\nif (w->custom_style) {\n        style = css_style_decl_create();\n        css_style_decl_merge(style, w->custom_style);\n        css_style_decl_merge(style, w->matched_style);\n        css_cascade_style(style, s);\n        css_style_decl_destroy(style);\n} else {\n        css_cascade_style(w->matched_style, s);\n}\nw->computed_style = *s;\nui_widget_compute_style(w);\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u5148\u6e05\u7a7a\u4e4b\u524d\u7684\u8ba1\u7b97\u7ed3\u679c\uff0c\u7136\u540e\u5c42\u53e0\uff08Cascade\uff09\u5df2\u5339\u914d\u6837\u5f0f\u548c\u81ea\u5b9a\u4e49\u6837\u5f0f\uff0c\u6700\u540e\u5bf9\u5c42\u53e0\u7ed3\u679c\u8fdb\u884c\u8ba1\u7b97\uff0c\u5f97\u51fa\u5df2\u8ba1\u7b97\u6837\u5f0f\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["2.x \u7248\u672c\u4e2d\u7684 ",(0,c.jsx)(s.code,{children:"LCUI_Widget"})," \u7ed3\u6784\u4f53\u6210\u5458 ",(0,c.jsx)(s.code,{children:"style"})," \u548c ",(0,c.jsx)(s.code,{children:"computed_style"})," \u5df2\u7edf\u4e00\u6539\u7528 ",(0,c.jsx)(s.code,{children:"css_computed_style_t"})," \u7c7b\u578b\uff0c\u5e76\u91cd\u547d\u540d\u4e3a ",(0,c.jsx)(s.code,{children:"specified_style"})," \u548c ",(0,c.jsx)(s.code,{children:"computed_style"}),"\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,c.jsx)(s.p,{children:"UI \u5e93\u4e2d\u5305\u542b\u4e86\u90e8\u5206 CSS \u8ba1\u7b97\u903b\u8f91\uff0c\u4f8b\u5982\uff1awidth\u3001height\u3001flex-grow \u7b49\u5c5e\u6027\u7684\u5e94\u7528\u503c\u8ba1\u7b97\uff0c\u8fd9\u6709\u8fdd\u5355\u4e00\u8d23\u4efb\u539f\u5219\uff0c\u5e94\u8be5\u5c06 CSS \u5c5e\u6027\u8ba1\u7b97\u79fb\u52a8\u5230 CSS \u5e93\u5185\uff0c\u4ee5\u8ba9 CSS \u5e93\u7684\u529f\u80fd\u66f4\u5b8c\u5907\u3002"}),"\n",(0,c.jsx)(s.p,{children:"CSS \u5c5e\u6027\u7ee7\u627f\u662f\u5e38\u89c1\u7684\u7279\u6027\uff0c\u4f46\u5f53\u524d\u7684 CSS \u5e93\u4e0d\u652f\u6301\u8be5\u529f\u80fd\uff0c\u56e0\u6b64\u5728\u4fee\u6539\u5168\u5c40\u6216\u7279\u5b9a\u6587\u672c\u7684\u5b57\u4f53\u6837\u5f0f\u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u6240\u6709\u6587\u672c\u90e8\u4ef6\uff0c\u5341\u5206\u7e41\u7410\u3002\u56e0\u6b64\uff0c\u5728\u8fd9\u6b21\u7684\u6539\u52a8\u4e2d\uff0c\u5e94\u8003\u8651\u5230\u5982\u4f55\u5e94\u5bf9\u672a\u6765\u53ef\u80fd\u4f1a\u52a0\u5165\u7684\u5c5e\u6027\u7ee7\u627f\u7279\u6027\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u53e6\u4e00\u4e2a\u65b9\u9762\uff0cUI \u90e8\u4ef6\u7684 ",(0,c.jsx)(s.code,{children:"computed_style"})," \u548c ",(0,c.jsx)(s.code,{children:"style"})," \u6210\u5458\u7684\u5185\u5b58\u5360\u7528\u6bd4\u8f83\u5927\uff1a",(0,c.jsx)(s.code,{children:"computed_style"})," \u5360\u7528 336 \u5b57\u8282\uff0c",(0,c.jsx)(s.code,{children:"style"})," \u6210\u5458\u5360\u7528 8 \u5b57\u8282\uff0c\u5176\u4e2d\u6bcf\u4e2a CSS \u5c5e\u6027\u503c\u5360\u7528 16 \u5b57\u8282\uff0c\u5171\u6709 68 \u4e2a\u5c5e\u6027\u503c\uff0c\u4e5f\u5c31\u662f\u5171\u5360\u7528 336 + 8 + 16 * 68 = 1432 \u5b57\u8282\uff0c\u9700\u8981\u4f18\u5316\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,c.jsxs)(s.p,{children:["\u53c2\u8003 ",(0,c.jsx)(s.a,{href:"http://www.netsurf-browser.org/projects/libcss/",children:"LibCSS"})," \u7684\u8bbe\u8ba1\uff0c\u66f4\u6539\u6837\u5f0f\u8ba1\u7b97\u6d41\u7a0b\u4e3a\uff1a"]}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\u5c42\u53e0\u5df2\u5339\u914d\u7684\u6837\u5f0f\u548c\u81ea\u5b9a\u4e49\u6837\u5f0f\uff0c\u8ba1\u7b97\u6bcf\u4e2a\u5c5e\u6027\u7684\u6307\u5b9a\u503c\uff0c\u5f97\u51fa\u6307\u5b9a\u6837\u5f0f\uff08",(0,c.jsx)(s.code,{children:"specified_style"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(s.li,{children:["\u8ba1\u7b97\u6bcf\u4e2a\u5c5e\u6027\u7684\u5b9e\u9645\u503c\uff0c\u5f97\u51fa\u5df2\u8ba1\u7b97\u6837\u5f0f\uff08",(0,c.jsx)(s.code,{children:"computed_style"}),"\uff09\u3002"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u5185\u5b58\u4f18\u5316\u65b9\u9762\uff0c\u8c03\u6574\u5df2\u8ba1\u7b97\u6837\u5f0f\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4ee5\u6bd4\u7279\u4f4d\u4e3a\u6700\u5c0f\u7c92\u5ea6\u4e3a CSS \u5c5e\u6027\u503c\u5206\u914d\u5b58\u50a8\u7a7a\u95f4\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-c",children:"typedef struct css_computed_style_t {\n\tstruct css_type_bits_t {\n\t\tuint8_t display : 5;\n\t\tuint8_t box_sizing : 2;\n\t\tuint8_t visibility : 4;\n\t\tuint8_t vertical_align : 4;\n\t\tuint8_t pointer_events : 2;\n\t\tuint8_t position : 3;\n                ...\n        } type_bits;\n\n\tstruct css_unit_bits_t {\n\t\tcss_unit_t left : 4;\n\t\tcss_unit_t right : 4;\n\t\tcss_unit_t top : 4;\n\t\tcss_unit_t bottom : 4;\n\t\tcss_unit_t width : 4;\n\t\tcss_unit_t height : 4;\n                ...\n        } unit_bits;\n\n\tcss_numeric_value_t z_index;\n\tcss_numeric_value_t opacity;\n\n\tcss_numeric_value_t left;\n\tcss_numeric_value_t right;\n\tcss_numeric_value_t top;\n\tcss_numeric_value_t bottom;\n        ...\n}\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4ee5\u76ee\u524d\u7684 CSS \u5c5e\u6027\u6570\u91cf\uff0c",(0,c.jsx)(s.code,{children:"css_computed_style_t"})," \u5360\u7528 288 \u5b57\u8282\uff0c\u76f8\u6bd4\u4fee\u6539\u524d\u51cf\u5c11\u4e86 ",(0,c.jsx)(s.code,{children:"1432 - 288 * 2 = 856"})," \u5b57\u8282\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4e3a\u65b9\u4fbf\u4f7f\u7528\u5c5e\u6027\u503c\uff0c\u53ef\u4e3a\u90e8\u5206 CSS \u5c5e\u6027\u63d0\u4f9b ",(0,c.jsx)(s.code,{children:"css_computed_"})," \u5f00\u5934\u7684\u8f85\u52a9\u51fd\u6570\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-c",children:"LIBCSS_PUBLIC uint8_t css_computed_display(const css_computed_style_t *s);\n\nLIBCSS_PUBLIC uint8_t css_computed_width(const css_computed_style_t *s,\n                                         css_numeric_value_t *value,\n                                         css_unit_t *unit);\n\nLIBCSS_PUBLIC uint8_t css_computed_height(const css_computed_style_t *s,\n                                          css_numeric_value_t *value,\n                                          css_unit_t *unit);\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u7528\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-c",children:"css_number_value_t value;\ncss_unit_t unit;\n\nswitch (css_computed_width(&style, &value, &unit)) {\ncase CSS_WIDTH_AUTO:\n        // ...\n        break;\ncase CSS_WIDTH_SET:\n        if (unit == CSS_UNIT_PERCENT) {\n                // ...\n        }\n        break;\ndefault:\n        break;\n}\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u8fd8\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e9b\u5e38\u7528\u7684 CSS \u503c\u64cd\u4f5c\u76f8\u5173\u7684\u5de5\u5177\u51fd\u6570\u5b8f\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-c",children:"#define IS_CSS_LENGTH(S, PROP_KEY) (S)->type_bits.PROP_KEY == CSS_LENGTH_SET\n\n#define IS_CSS_FIXED_LENGTH(S, PROP_KEY)              \\\n\t((S)->type_bits.PROP_KEY == CSS_LENGTH_SET && \\\n\t (S)->unit_bits.PROP_KEY == CSS_UNIT_PX)\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,c.jsx)(s.p,{children:"\u6bcf\u6b21\u6837\u5f0f\u8ba1\u7b97\u90fd\u662f\u8ba1\u7b97\u5168\u90e8\u5c5e\u6027\u7684\u503c\uff0c\u5f71\u54cd\u6027\u80fd\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,c.jsx)(s.p,{children:"\u6539\u7528 libcss \u5e93\u3002\u4e0d\u5efa\u8bae\u91c7\u7528\u6b64\u65b9\u6848\uff0c\u56e0\u4e3a libcss \u7684\u7528\u6cd5\u4e0e LCUI \u73b0\u6709\u7684 CSS \u5e93\u7684\u7528\u6cd5\u76f8\u5dee\u8f83\u5927\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u91c7\u7528\u7b56\u7565",children:"\u91c7\u7528\u7b56\u7565"}),"\n",(0,c.jsx)(s.p,{children:"\u8fd9\u662f\u4e2a\u7834\u574f\u6027\u6539\u52a8\uff0c\u5305\u542b\u6570\u636e\u7ed3\u6784\u548c\u51fd\u6570\u7684\u6539\u52a8\uff0c\u6d89\u53ca UI \u5e93\u548c CSS \u5e93\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u6570\u636e\u7ed3\u6784\u7684\u6539\u52a8\u4e3b\u8981\u662f ",(0,c.jsx)(s.code,{children:"LCUI_Widget"}),"\uff1a"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-diff",children:"- LCUI_StyleList custom_style;\n- LCUI_CachedStyleSheet inherited_style;\n- LCUI_WidgetStyle computed_style;\n+ css_style_decl_t *custom_style;\n+ const css_style_decl_t *matched_style;\n+ css_computed_style_t specified_style;\n+ css_computed_style_t computed_style;\n"})}),"\n",(0,c.jsx)(s.p,{children:"UI \u5e93\u5185\u6d89\u53ca\u6837\u5f0f\u8bfb\u5199\u7684\u4ee3\u7801\u90fd\u9700\u8981\u91cd\u6784\uff0c\u5305\u62ec\u5e03\u5c40\u8ba1\u7b97\u3001\u7ed8\u5236\u3001\u9f20\u6807\u4e8b\u4ef6\u7b49\u3002"})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>d});var n=t(96540);const c={},i=n.createContext(c);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);