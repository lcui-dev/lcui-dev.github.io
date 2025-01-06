"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3063],{1227:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"rfc/lcui/style-guide","title":"\u7f16\u7801\u89c4\u8303","description":"\u53c2\u8003\u5176\u5b83 C \u5f00\u6e90\u9879\u76ee\uff0c\u91cd\u65b0\u5236\u5b9a\u7edf\u4e00\u7684\u7f16\u7801\u89c4\u8303\u3002","source":"@site/docs/rfc/lcui/0001-style-guide.md","sourceDirName":"rfc/lcui","slug":"/rfc/lcui/style-guide","permalink":"/docs/next/rfc/lcui/style-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/docs/rfc/lcui/0001-style-guide.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"\u53c2\u8003\u5176\u5b83 C \u5f00\u6e90\u9879\u76ee\uff0c\u91cd\u65b0\u5236\u5b9a\u7edf\u4e00\u7684\u7f16\u7801\u89c4\u8303\u3002"},"sidebar":"rfcSidebar","previous":{"title":"LCUI","permalink":"/docs/next/category/lcui"},"next":{"title":"\u67b6\u6784","permalink":"/docs/next/rfc/lcui/architecture"}}');var t=r(4848),c=r(8453);const i={description:"\u53c2\u8003\u5176\u5b83 C \u5f00\u6e90\u9879\u76ee\uff0c\u91cd\u65b0\u5236\u5b9a\u7edf\u4e00\u7684\u7f16\u7801\u89c4\u8303\u3002"},l="\u7f16\u7801\u89c4\u8303",d={},a=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u547d\u540d",id:"\u547d\u540d",level:3},{value:"\u6ce8\u91ca",id:"\u6ce8\u91ca",level:3},{value:"\u7f29\u8fdb",id:"\u7f29\u8fdb",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u7f16\u7801\u89c4\u8303",children:"\u7f16\u7801\u89c4\u8303"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2023-03-26"}),"\n",(0,t.jsx)(n.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"}),"\n",(0,t.jsx)(n.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a\u65e0"}),"\n",(0,t.jsx)(n.li,{children:"\u5b9e\u73b0 PR\uff1a\u65e0"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,t.jsx)(n.p,{children:"\u53c2\u8003\u5176\u5b83 C \u5f00\u6e90\u9879\u76ee\uff0c\u91cd\u65b0\u5236\u5b9a\u7edf\u4e00\u7684\u7f16\u7801\u89c4\u8303\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"typedef enum {\n        PARSER_STATE_START,\n        PARSER_STATE_DATA_BEGIN,\n        PARSER_STATE_DATA_END,\n        PARSER_STATE_ERROR\n} parser_state_t;\n\ntypedef struct parser {\n        /** \u89e3\u6790\u5668\u72b6\u6001 */\n        parser_state_t state;\n\n        /** \u5f53\u524d\u5b57\u7b26 */\n        char *cur;\n} parser_t;\n\nparser_t *parser_create(void)\n{\n        parser_t *parser;\n\n        parser = malloc(sizeof(parser_t));\n        parser->state = PARSER_STATE_START;\n        parser->cur = NULL;\n        return parser;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,t.jsx)(n.p,{children:"2.x \u7248\u672c\u7684\u4ee3\u7801\u98ce\u683c\u4e0d\u4e00\u81f4\uff0c\u5305\u542b\u4e86\u9a7c\u5cf0\u3001\u5c0f\u5199\u4e0b\u5212\u7ebf\u98ce\u683c\u4ee5\u53ca\u5404\u79cd\u547d\u540d\u89c4\u5219\uff0c\u5bfc\u81f4\u6e90\u7801\u9605\u8bfb\u4f53\u9a8c\u548c\u63a5\u53e3\u4f7f\u7528\u4f53\u9a8c\u8f83\u5dee\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 clang-format \u5de5\u5177\u5bf9\u6e90\u7801\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u5176\u914d\u7f6e\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:".clang-format"})," \u5b58\u653e\u4e8e\u6e90\u7801\u6839\u76ee\u5f55\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u9884\u8bbe\u7684\u683c\u5f0f\u5316\u89c4\u5219\u5df2\u7ecf\u6ee1\u8db3\u6b64\u7f16\u7801\u89c4\u8303\u7684\u5927\u90e8\u5206\u8981\u6c42\uff0c\u4ee5\u4e0b\u4ec5\u5bf9\u9700\u8981\u5728\u7f16\u7801\u65f6\u6ce8\u610f\u7684\u89c4\u8303\u8fdb\u884c\u7b80\u5355\u8bf4\u660e\uff0c\u4e0d\u518d\u8be6\u7ec6\u8bf4\u660e\u89c4\u8303\u7684\u5168\u90e8\u5185\u5bb9\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u547d\u540d",children:"\u547d\u540d"}),"\n",(0,t.jsxs)(n.p,{children:["\u5e38\u89c1\u7684 C \u8bed\u8a00\u5f00\u6e90\u5e93\u7684\u7f16\u7801\u98ce\u683c\u5927\u90fd\u662f\u86c7\u5f62\u547d\u540d\u6cd5(",(0,t.jsx)(n.code,{children:"snake_case"}),")\uff0c\u4f8b\u5982\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/libgit2/libgit2",children:"libgit2"}),"\u3001",(0,t.jsx)(n.a,{href:"https://www.cairographics.org/",children:"cairo"}),"\u3001",(0,t.jsx)(n.a,{href:"https://github.com/google/leveldb/blob/main/include/leveldb/c.h",children:"leveldb"}),"\uff0c\u56e0\u6b64\uff0cLCUI \u9879\u76ee\u4e5f\u91c7\u7528\u8be5\u7f16\u7801\u98ce\u683c\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e LCUI \u5df2\u88ab\u62c6\u5206\u4e3a\u591a\u4e2a\u5b50\u5e93\uff0c\u8fd9\u4e9b\u5e93\u5185\u7684\u6807\u8bc6\u7b26\u4e0d\u518d\u9700\u8981\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"LCUI_"})," \u524d\u7f00\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7c7b\u578b\u540d\u4ee5 ",(0,t.jsx)(n.code,{children:"_t"})," \u7ed3\u5c3e\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"typedef struct foo {\n        int bar;\n} foo_t;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b8f\u5b9a\u4e49\u548c\u679a\u4e3e\u91c7\u7528\u5927\u5199\u4e0b\u5212\u7ebf\u547d\u540d\u6cd5\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'typedef enum {\n\t    PD_COLOR_TYPE_INDEX8,\n\t    PD_COLOR_TYPE_GRAY8,\n\t    PD_COLOR_TYPE_RGB323,\n\t    PD_COLOR_TYPE_ARGB2222,\n\t    PD_COLOR_TYPE_RGB555,\n\t    PD_COLOR_TYPE_RGB565,\n\t    PD_COLOR_TYPE_RGB888,\n\t    PD_COLOR_TYPE_ARGB8888\n} pd_color_type_t;\n\n#define PANDAGL_VERSION "0.1.0"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6ce8\u91ca",children:"\u6ce8\u91ca"}),"\n",(0,t.jsx)(n.p,{children:"\u63a8\u8350\u5199\u5728\u4ee3\u7801\u884c\u4e0a\u9762\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"struct foo {\n        /** comment */\n        int bar;\n\n        /** string */\n        char *str;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u63a8\u8350\u5199\u5728\u53f3\u4fa7\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"struct foo {\n        int bar;    /**< comment */\n        char *str;  /**< string */\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u7f29\u8fdb",children:"\u7f29\u8fdb"}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u786e\u4fdd\u4ee3\u7801\u5728\u7f51\u9875\u7aef\u548c\u7f16\u8f91\u5668\u5185\u7684\u663e\u793a\u6548\u679c\u4e00\u81f4\uff0c\u4ee5\u516b\u4e2a\u7a7a\u683c\u4e3a\u4e00\u4e2a\u7f29\u8fdb\u5c42\u7ea7\uff0c\u4e0d\u4f7f\u7528\u5236\u8868\u7b26\u7f29\u8fdb\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,t.jsx)(n.p,{children:"\u6539\u52a8\u5f88\u5927\uff0c\u6d89\u53ca\u51e0\u4e4e\u6240\u6709\u4ee3\u7801\uff0c\u4ece 2.x \u7248\u672c\u8fc1\u79fb\u5230 3.x \u7248\u672c\u9700\u8981\u53c2\u7167\u5934\u6587\u4ef6\u5185\u5bb9\u5bf9\u65e7\u7684\u6807\u8bc6\u7b26\u8fdb\u884c\u5168\u5c40\u66ff\u6362\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,t.jsx)(n.p,{children:"\u5168\u90e8\u91c7\u7528\u9a7c\u5cf0\u547d\u540d\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(6540);const t={},c=s.createContext(t);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);