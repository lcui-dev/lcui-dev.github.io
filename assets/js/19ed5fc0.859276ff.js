"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8712],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>_});var i=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=i.createContext({}),c=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):d(d({},e),n)),t},u=function(n){var e=c(n.components);return i.createElement(l.Provider,{value:e},n.children)},p="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,l=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),p=c(t),g=o,_=p["".concat(l,".").concat(g)]||p[g]||s[g]||r;return t?i.createElement(_,d(d({ref:e},u),{},{components:t})):i.createElement(_,d({ref:e},u))}));function _(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,d=new Array(r);d[0]=g;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a[p]="string"==typeof n?n:o,d[1]=a;for(var c=2;c<r;c++)d[c]=t[c];return i.createElement.apply(null,d)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2762:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>s,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const r={description:"\u7ec4\u4ef6\u4e8b\u4ef6\u7684\u76f8\u5173\u6982\u5ff5\u548c\u7528\u6cd5\u4ecb\u7ecd\u3002",sidebar_position:3},d="\u4e8b\u4ef6",a={unversionedId:"guides/widget/events",id:"guides/widget/events",title:"\u4e8b\u4ef6",description:"\u7ec4\u4ef6\u4e8b\u4ef6\u7684\u76f8\u5173\u6982\u5ff5\u548c\u7528\u6cd5\u4ecb\u7ecd\u3002",source:"@site/docs/guides/widget/events.md",sourceDirName:"guides/widget",slug:"/guides/widget/events",permalink:"/docs/next/guides/widget/events",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/guides/widget/events.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"\u7ec4\u4ef6\u4e8b\u4ef6\u7684\u76f8\u5173\u6982\u5ff5\u548c\u7528\u6cd5\u4ecb\u7ecd\u3002",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"\u539f\u578b",permalink:"/docs/next/guides/widget/prototype"},next:{title:"\u751f\u547d\u5468\u671f",permalink:"/docs/next/guides/widget/lifecycle"}},l={},c=[{value:"\u4e8b\u4ef6\u5bf9\u8c61",id:"\u4e8b\u4ef6\u5bf9\u8c61",level:3},{value:"\u4e8b\u4ef6\u5192\u6ce1",id:"\u4e8b\u4ef6\u5192\u6ce1",level:3},{value:"\u4e8b\u4ef6\u59d4\u6258",id:"\u4e8b\u4ef6\u59d4\u6258",level:3},{value:"\u89e6\u63a7\u4e8b\u4ef6",id:"\u89e6\u63a7\u4e8b\u4ef6",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}],u={toc:c},p="wrapper";function s(n){let{components:e,...r}=n;return(0,o.kt)(p,(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,o.kt)("p",null,"\u7ec4\u4ef6\u4e8b\u4ef6\u6765\u6e90\u4e8e LCUI \u7684\u6838\u5fc3\u4e8b\u4ef6\uff0c\u5f53\u6838\u5fc3\u4e8b\u4ef6\u89e6\u53d1\u65f6\uff0c\u7ec4\u4ef6\u7cfb\u7edf\u4e2d\u7684\u76f8\u5173\u4e8b\u4ef6\u5904\u7406\u5668\u4f1a\u5bf9\u5176\u8fdb\u884c\u5904\u7406\uff0c\u7136\u540e\u8f6c\u6362\u6210\u7ec4\u4ef6\u4e8b\u4ef6\u6d3e\u53d1\u7ed9\u5bf9\u5e94\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u7ec4\u4ef6\u4e8b\u4ef6\u4e0e\u6838\u5fc3\u4e8b\u4ef6\u7684\u533a\u522b\u5728\u4e8e\u4e8b\u4ef6\u7684\u79cd\u7c7b\u548c\u4e8b\u4ef6\u5bf9\u8c61\u7684\u5185\u5bb9\uff0c\u4e8b\u4ef6\u79cd\u7c7b\u5305\u62ec\u60ac\u505c\u3001\u5355\u51fb\u3001\u53cc\u51fb\u3001\u7126\u70b9\u7b49\u4e8b\u4ef6\uff0c\u800c\u4e8b\u4ef6\u5bf9\u8c61\u5219\u5305\u542b\u4e86\u5173\u8054\u7684\u7ec4\u4ef6\u548c\u4e8b\u4ef6\u5192\u6ce1\u63a7\u5236\u3002"),(0,o.kt)("h3",{id:"\u4e8b\u4ef6\u5bf9\u8c61"},"\u4e8b\u4ef6\u5bf9\u8c61"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u7ec4\u4ef6\u4e8b\u4ef6\u5bf9\u8c61\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/include/LCUI/gui/widget_event.h#L81-L95"}," include/LCUI/gui/widget","_","event.h")," \u6587\u4ef6\u4e2d\u7684\u5b9a\u4e49\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct LCUI_WidgetEventRec_ {\n        uint32_t type;\n        void *data;\n        LCUI_Widget target;\n        LCUI_BOOL cancel_bubble;\n        union {\n                LCUI_WidgetMouseMotionEvent motion;\n                LCUI_WidgetMouseButtonEvent button;\n                LCUI_WidgetMouseWheelEvent wheel;\n                LCUI_WidgetKeyboardEvent key;\n                LCUI_WidgetTouchEvent touch;\n                LCUI_WidgetTextInputEvent text;\n        };\n} LCUI_WidgetEventRec, *LCUI_WidgetEvent;\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff0c\u7ec4\u4ef6\u4e8b\u4ef6\u5bf9\u8c61\u4e0e\u6838\u5fc3\u4e8b\u4ef6\u5bf9\u8c61\u7684\u7ed3\u6784\u76f8\u4f3c\uff0c\u53ea\u662f\u591a\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"cacnel_buble")," \u6210\u5458\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target")," \u6210\u5458\u6307\u5411\u7684\u662f\u4e8b\u4ef6\u89e6\u53d1\u65f6\u7684\u7ec4\u4ef6\uff0c\u5f53\u4f60\u60f3\u8ba9\u591a\u4e2a\u7ec4\u4ef6\u5728\u4e8b\u4ef6\u53d1\u751f\u65f6\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\u800c\u7ed9\u5b83\u4eec\u8bbe\u7f6e\u76f8\u540c\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"target")," \u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982\uff0c\u6709 16 \u4e2a\u6309\u94ae\uff0c\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\u4f1a\u66f4\u6539\u6587\u672c\uff0c\u90a3\u4e48\u5728\u4e8b\u4ef6\u5904\u7406\u5668\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"target")," \u6307\u5411\u7684\u5c31\u662f\u5f53\u524d\u88ab\u70b9\u51fb\u7684\u6309\u94ae\uff0c\u4f60\u53ea\u9700\u8981\u4fee\u6539\u5b83\u7684\u6587\u672c\u5373\u53ef\uff0c\u65e0\u9700\u7528\u590d\u6742\u7684\u65b9\u5f0f\u53bb\u83b7\u53d6\u5b83\u3002"),(0,o.kt)("li",{parentName:"ul"}," ",(0,o.kt)("inlineCode",{parentName:"li"},"cancel_bubble")," \u6210\u5458\u7528\u4e8e\u6807\u8bc6\u662f\u5426\u53d6\u6d88\u8be5\u4e8b\u4ef6\u7684\u5192\u6ce1\uff0c\u5c06\u5b83\u8d4b\u503c\u4e3a TRUE \u65f6\uff0c\u8be5\u4e8b\u4ef6\u5bf9\u8c61\u4e0d\u4f1a\u5192\u6ce1\u5230\u7236\u7ea7\u7ec4\u4ef6\u3002")),(0,o.kt)("h3",{id:"\u4e8b\u4ef6\u5192\u6ce1"},"\u4e8b\u4ef6\u5192\u6ce1"),(0,o.kt)("p",null,"\u4e8b\u4ef6\u4ece\u89e6\u53d1\u5b83\u7684\u7ec4\u4ef6\u5411\u4e0a\u7ea7\u7ec4\u4ef6\u9010\u5c42\u4f20\u9012\u7684\u8fc7\u7a0b\u5c31\u662f\u4e8b\u4ef6\u5192\u6ce1\u3002"),(0,o.kt)("h3",{id:"\u4e8b\u4ef6\u59d4\u6258"},"\u4e8b\u4ef6\u59d4\u6258"),(0,o.kt)("p",null,"\u5229\u7528\u4e8b\u4ef6\u5192\u6ce1\u673a\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u4e8b\u4ef6\u59d4\u6258\uff0c\u4e5f\u5c31\u662f\u5c06\u5b50\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u59d4\u6258\u7ed9\u7236\u7ec4\u4ef6\u5904\u7406\uff0c\u8fd9\u79cd\u505a\u6cd5\u9002\u7528\u4e8e\u9700\u8981\u4e3a\u5927\u91cf\u7ec4\u4ef6\u8bbe\u7f6e\u4e8b\u4ef6\u5904\u7406\u5668\u7684\u573a\u666f\uff0c\u80fd\u907f\u514d\u56e0\u8bbe\u7f6e\u5927\u91cf\u4e8b\u4ef6\u5904\u7406\u5668\u800c\u5bfc\u81f4\u7684\u6027\u80fd\u964d\u4f4e\u548c\u5185\u5b58\u5360\u7528\u589e\u52a0\u7684\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"\u89e6\u63a7\u4e8b\u4ef6"},"\u89e6\u63a7\u4e8b\u4ef6"),(0,o.kt)("p",null,"\u89e6\u63a7\u4e8b\u4ef6\u76ee\u524d\u4ec5\u5728 Windows \u7cfb\u7edf\u4e2d\u6709\u6548\uff0c\u4e8b\u4ef6\u5bf9\u8c61\u7684\u6570\u636e\u7ed3\u6784\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct LCUI_TouchPointRec_ {\n        int x;\n        int y;\n        int id;\n        int state;\n        LCUI_BOOL is_primary;\n} LCUI_TouchPointRec, *LCUI_TouchPoint;\n\ntypedef struct LCUI_TouchEvent_ {\n        int n_points;\n        LCUI_TouchPoint points;\n} LCUI_TouchEvent;\n\ntypedef LCUI_TouchEvent LCUI_WidgetTouchEvent;\n")),(0,o.kt)("p",null,"\u89e6\u63a7\u4e8b\u4ef6\u7684\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1\u53c2\u8003\u81ea Windows API\uff0c\u53ea\u4fdd\u7559\u4e86\u4e3b\u8981\u7684\u6210\u5458\u53d8\u91cf\u3002LCUI \u5185\u90e8\u7684\u89e6\u63a7\u4e8b\u4ef6\u548c\u7ec4\u4ef6\u7684\u89e6\u63a7\u4e8b\u4ef6\u662f\u4e00\u6837\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,o.kt)("p",null,"\u4ece\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u7406\u89e3\u5230\uff1a\u89e6\u63a7\u4e8b\u4ef6\u5305\u542b\u591a\u4e2a\u89e6\u70b9\u7684\u4fe1\u606f\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"n_points")," \u8868\u793a\u5f53\u524d\u5171\u6709\u591a\u5c11\u4e2a\u89e6\u70b9\uff0c\u6bcf\u4e2a\u89e6\u70b9\u90fd\u6709\u81ea\u5df1\u7684 x\u3001y \u5750\u6807\uff0c\u5e76\u4e14\u6709\u4e2a id \u7528\u4e8e\u6807\u8bc6\u8be5\u89e6\u70b9\uff0c\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u8868\u793a\u8be5\u89e6\u70b9\u7684\u72b6\u6001\uff0c\u5b83\u7684\u503c\u6709\u4e09\u79cd\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"LCUI_WEVENT_TOUCHDOWN"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"LCUI_WEVENT_TOUCHUP"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"LCUI_WEVENT_TOUCHMOVE"),"\uff0c\u8fd9\u4e9b\u503c\u5206\u522b\u5bf9\u5e94\uff1a\u89e6\u70b9\u6309\u4e0b\u3001\u89e6\u70b9\u91ca\u653e\u3001\u89e6\u70b9\u79fb\u52a8\u8fd9\u4e09\u4e2a\u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u6d4b\u8bd5\u89e6\u63a7\u4e8b\u4ef6\u7684\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/** test_touch.c -- test touch support */\n\n#include <stdio.h>\n#include <stdlib.h>\n#include <LCUI.h>\n#include <LCUI/graph.h>\n#include <LCUI/display.h>\n#include <LCUI/gui/widget.h>\n\n/** \u89e6\u70b9\u7ed1\u5b9a\u8bb0\u5f55 */\ntypedef struct TouchPointBindingRec_ {\n        int point_id;        /**< \u89e6\u70b9 ID */\n        LCUI_Widget widget;  /**< \u7ec4\u4ef6 */\n        LinkedListNode node; /**< \u5728\u94fe\u8868\u4e2d\u7684\u7ed3\u70b9 */\n        LCUI_BOOL is_valid;  /**< \u662f\u5426\u6709\u6548 */\n} TouchPointBindingRec, *TouchPointBinding;\n\n/** \u89e6\u70b9\u7ed1\u5b9a\u8bb0\u5f55\u5217\u8868 */\nstatic LinkedList touch_bindings;\n\nstatic void OnTouchWidget(LCUI_Widget w, LCUI_WidgetEvent e, void *arg)\n{\n        LCUI_TouchPoint point;\n        TouchPointBinding binding;\n\n        if (e->touch.n_points == 0) {\n                return;\n        }\n        binding = e->data;\n        point = &e->touch.points[0];\n        switch (point->state) {\n        case LCUI_WEVENT_TOUCHMOVE:\n                Widget_Move(w, point->x - 32.0f, point->y - 32.0f);\n                break;\n        case LCUI_WEVENT_TOUCHUP:\n                if (!binding->is_valid) {\n                        break;\n                }\n                /* \u5f53\u89e6\u70b9\u91ca\u653e\u540e\u9500\u6bc1\u7ec4\u4ef6\u53ca\u7ed1\u5b9a\u8bb0\u5f55 */\n                Widget_ReleaseTouchCapture(w, -1);\n                LinkedList_Unlink(&touch_bindings, &binding->node);\n                binding->is_valid = FALSE;\n                Widget_Destroy(w);\n                free(binding);\n                break;\n        case LCUI_WEVENT_TOUCHDOWN:\n        default:\n                break;\n        }\n}\n\nstatic void OnTouch(LCUI_SysEvent e, void *arg)\n{\n        int i;\n        LCUI_Widget w;\n        LinkedListNode *node;\n        LCUI_TouchPoint point;\n        LCUI_Color bgcolor = RGB(255, 0, 0);\n\n        for (i = 0; i < e->touch.n_points; ++i) {\n                TouchPointBinding binding;\n                LCUI_BOOL is_existed = FALSE;\n                point = &e->touch.points[i];\n                _DEBUG_MSG("point: %d\\n", point->id);\n                /* \u68c0\u67e5\u8be5\u89e6\u70b9\u662f\u5426\u5df2\u7ecf\u88ab\u7ed1\u5b9a */\n                for (LinkedList_Each(node, &touch_bindings)) {\n                        binding = node->data;\n                        if (binding->point_id == point->id) {\n                                is_existed = TRUE;\n                        }\n                }\n                if (is_existed) {\n                        continue;\n                }\n                w = LCUIWidget_New(NULL);\n                /* \u65b0\u5efa\u7ed1\u5b9a\u8bb0\u5f55 */\n                binding = NEW(TouchPointBindingRec, 1);\n                binding->point_id = point->id;\n                binding->node.data = binding;\n                binding->is_valid = TRUE;\n                binding->widget = w;\n                Widget_Resize(w, 64, 64);\n                Widget_Move(w, point->x - 32.0f, point->y - 32.0f);\n                /* \u8bbe\u7f6e\u8ba9\u8be5\u7ec4\u4ef6\u6355\u83b7\u5f53\u524d\u89e6\u70b9 */\n                Widget_SetTouchCapture(w, binding->point_id);\n                Widget_BindEvent(w, "touch", OnTouchWidget, binding, NULL);\n                Widget_SetStyle(w, key_position, SV_ABSOLUTE, style);\n                Widget_SetStyle(w, key_background_color, bgcolor, color);\n                LinkedList_AppendNode(&touch_bindings, &binding->node);\n                Widget_Top(w);\n        }\n}\n\nint main(int argc, char **argv)\n{\n        LCUI_Init();\n        LinkedList_Init(&touch_bindings);\n        LCUI_BindEvent(LCUI_TOUCH, OnTouch, NULL, NULL);\n        return LCUI_Main();\n}\n\n')),(0,o.kt)("p",null,"\u7f16\u8bd1\u540e\u8fd0\u884c\uff0c\u5982\u679c\u4f60\u7684\u8ba1\u7b97\u673a\u81ea\u5e26\u89e6\u5c4f\uff0c\u5219\u53ef\u4ee5\u7528\u624b\u6307\u5728\u7a0b\u5e8f\u7a97\u53e3\u5185\u70b9\u51fb\u548c\u79fb\u52a8\uff0c\u7136\u540e\u4f1a\u770b\u5230\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u56fe\u6240\u793a\u7684\u6548\u679c\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u8fd0\u884c\u6548\u679c",src:t(1281).Z,width:"611",height:"493"})),(0,o.kt)("p",null,"\u8fd9\u4e2a\u7a0b\u5e8f\u5b9e\u73b0\u7684\u529f\u80fd\u662f\u6355\u83b7\u5404\u4e2a\u89e6\u70b9\u5e76\u7528\u5bf9\u5e94\u7684\u7ea2\u8272\u65b9\u5757\u8868\u793a\u89e6\u70b9\u7684\u4f4d\u7f6e\uff0c\u6709\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"touch_bindings")," \u5168\u5c40\u53d8\u91cf\u7528\u4e8e\u4fdd\u5b58\u5404\u4e2a\u89e6\u70b9\u548c\u7ec4\u4ef6\u7684\u7ed1\u5b9a\u8bb0\u5f55\uff0c\u5728\u54cd\u5e94\u89e6\u63a7\u4e8b\u4ef6\u65f6\u4f1a\u904d\u5386\u6bcf\u4e2a\u89e6\u70b9\uff0c\u6839\u636e\u89e6\u70b9\u7684 id \u5728\u7ed1\u5b9a\u8bb0\u5f55\u4e2d\u627e\u5bf9\u5e94\u7684\u7ec4\u4ef6\uff0c\u627e\u5230\u540e\u4f1a\u6839\u636e\u89e6\u70b9\u7684\u5750\u6807\u6765\u66f4\u65b0\u7ec4\u4ef6\u7684\u5750\u6807\u3002\u4e3a\u4e86\u8ba9\u7ec4\u4ef6\u80fd\u591f\u6355\u83b7\u89e6\u70b9\u5728\u5b83\u5916\u9762\u4ea7\u751f\u7684\u89e6\u63a7\u4e8b\u4ef6\uff0c\u5e76\u4e14\u4e0d\u88ab\u5176\u5b83\u7ec4\u4ef6\u6355\u83b7\u5230\uff0c\u8c03\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Widget_SetTouchCapture()")," \u51fd\u6570\u5b9e\u73b0\u5bf9\u8be5\u89e6\u70b9\u7684\u72ec\u5360\uff0c\u5728\u89e6\u70b9\u91ca\u653e\u540e\uff0c\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Widget_ReleaseTouchCapture()")," \u51fd\u6570\u89e3\u9664\u5bf9\u89e6\u70b9\u7684\u72ec\u5360\u3002"),(0,o.kt)("h3",{id:"\u5f85\u529e\u4e8b\u9879"},"\u5f85\u529e\u4e8b\u9879"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5b8c\u5584\u7126\u70b9\u7ba1\u7406")),(0,o.kt)("p",null,"\u9700\u6c42\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u652f\u6301\u7528 Tab \u952e\u548c Shift+Tab \u7ec4\u5408\u952e\u4e0a\u4e0b\u79fb\u52a8\u7126\u70b9\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5df2\u83b7\u5f97\u7126\u70b9\u7684\u7ec4\u4ef6\u5e94\u8be5\u6709\u663e\u773c\u7684\u5916\u8fb9\u6846\u3002")),(0,o.kt)("p",null,"\u5173\u4e8e\u5916\u8fb9\u6846\u7684\u5b9e\u73b0\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u4e3a CSS \u89e3\u6790\u5668\u6dfb\u52a0  outline \u5c5e\u6027\u89e3\u6790\u652f\u6301\uff0c\u7136\u540e\u5728\u7ec4\u4ef6\u6e32\u67d3\u6d41\u7a0b\u4e2d\u589e\u52a0\u4e00\u4e2a\u5916\u8fb9\u6846\u7ed8\u5236\u64cd\u4f5c\u3002"))}s.isMDXComponent=!0},1281:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/gui_events_touch-97f6f838402f24cb5ac678a538582990.gif"}}]);