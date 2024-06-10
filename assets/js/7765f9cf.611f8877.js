"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6918],{7212:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>_,frontMatter:()=>t,metadata:()=>r,toc:()=>s});var c=i(4848),l=i(8453);const t={},a="\u63a7\u5236\u5668",r={id:"tutorial/kantu/controller",title:"\u63a7\u5236\u5668",description:"\u672c\u7ae0\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u8bbe\u8ba1\u548c\u5b9e\u73b0\u63a7\u5236\u5668\u3002",source:"@site/docs/tutorial/04-kantu/06-controller.md",sourceDirName:"tutorial/04-kantu",slug:"/tutorial/kantu/controller",permalink:"/docs/next/tutorial/kantu/controller",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/04-kantu/06-controller.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u8ba1",permalink:"/docs/next/tutorial/kantu/design"},next:{title:"\u6536\u96c6\u5668",permalink:"/docs/next/tutorial/kantu/collector"}},o={},s=[{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u9500\u6bc1",id:"\u9500\u6bc1",level:2},{value:"\u6587\u4ef6\u52a0\u8f7d",id:"\u6587\u4ef6\u52a0\u8f7d",level:2},{value:"\u8bbe\u7f6e\u7f29\u653e\u6bd4\u4f8b",id:"\u8bbe\u7f6e\u7f29\u653e\u6bd4\u4f8b",level:2},{value:"\u8bbe\u7f6e\u53ef\u89c1\u533a\u57df\u4f4d\u7f6e",id:"\u8bbe\u7f6e\u53ef\u89c1\u533a\u57df\u4f4d\u7f6e",level:2},{value:"\u91cd\u7f6e\u7f29\u653e\u6bd4\u4f8b",id:"\u91cd\u7f6e\u7f29\u653e\u6bd4\u4f8b",level:2},{value:"\u5feb\u6377\u7f29\u653e",id:"\u5feb\u6377\u7f29\u653e",level:2},{value:"\u72b6\u6001\u68c0\u67e5",id:"\u72b6\u6001\u68c0\u67e5",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u63a7\u5236\u5668",children:"\u63a7\u5236\u5668"}),"\n",(0,c.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u8bbe\u8ba1\u548c\u5b9e\u73b0\u63a7\u5236\u5668\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u6570\u636e\u7ed3\u6784",children:"\u6570\u636e\u7ed3\u6784"}),"\n",(0,c.jsx)(n.p,{children:"\u7f29\u653e\u6bd4\u4f8b\u7684\u8ba1\u7b97\u4f9d\u8d56\u56fe\u7247\u7684\u5c3a\u5bf8\u3001\u53ef\u89c6\u533a\u57df\u7684\u5c3a\u5bf8\u3002\u7f29\u653e\u65f6\u9700\u8981\u505a\u6700\u5c0f\u6bd4\u4f8b\u9650\u5236\u4ee5\u907f\u514d\u8fc7\u5ea6\u7f29\u5c0f\uff0c\u8fd9\u4e2a\u6bd4\u4f8b\u5e94\u662f\u56fe\u7247\u5728\u53ef\u89c1\u533a\u57df\u5185\u5b8c\u6574\u663e\u793a\u7684\u6700\u5927\u6bd4\u4f8b\uff0c\u7b80\u79f0\u201c\u81ea\u9002\u5e94\u6bd4\u4f8b\u201d\u3002\u5728\u7f29\u653e\u548c\u79fb\u52a8\u53ef\u89c6\u533a\u57df\u65f6\uff0c\u9700\u8981\u57fa\u4e8e\u5f53\u524d\u7684\u4f4d\u7f6e\u548c\u4e2d\u5fc3\u70b9\u4f4d\u7f6e\u6765\u8ba1\u7b97\u65b0\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u7ed3\u5408\u4e0a\u8ff0\u9700\u6c42\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\u4ee5\u4e0b\u6570\u636e\u7ed3\u6784\u5b9a\u4e49\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.h",children:"typedef struct image_controller {\n        float scale;\n        float min_scale;\n        float width, height;\n        float x, y;\n        float center_x, center_y;\n        ui_image_t *image;\n} image_controller_t;\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"x"})," \u548c ",(0,c.jsx)(n.code,{children:"y"})," \u662f\u56fe\u50cf\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u53ef\u89c1\u533a\u57df\u5de6\u4e0a\u89d2\u7684\u4f4d\u7f6e\uff0c\u503c\u90fd\u5c0f\u4e8e\u6216\u7b49\u4e8e 0\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"center_x"})," \u548c ",(0,c.jsx)(n.code,{children:"center_y"})," \u662f\u53ef\u89c1\u533a\u57df\u4e2d\u5fc3\u70b9\u76f8\u5bf9\u4e8e\u56fe\u50cf\u5de6\u4e0a\u89d2\u7684\u4f4d\u7f6e\uff0c\u503c\u90fd\u5927\u4e8e 0\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ui_image_t"})," \u5305\u542b\u56fe\u7247\u5c3a\u5bf8\u4fe1\u606f\uff0c\u5b83\u662f ui.h \u5934\u6587\u4ef6\u63d0\u4f9b\u7684\u6570\u636e\u7ed3\u6784\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u8be5\u5934\u6587\u4ef6\u8fd8\u63d0\u4f9b\u4e00\u7cfb\u5217\u56fe\u50cf\u52a0\u8f7d\u76f8\u5173\u7684\u51fd\u6570\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,c.jsx)(n.p,{children:"\u7ed9\u7ed3\u6784\u4f53\u6210\u5458\u8d4b\u521d\u59cb\u503c\uff0c\u907f\u514d\u8ba1\u7b97\u51fa\u9519\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.c",children:"void image_controller_init(image_controller_t *c)\n{\n        c->scale = 1.f;\n        c->min_scale = 1.f;\n        c->image = NULL;\n        c->x = 0;\n        c->y = 0;\n        c->center_x = 0;\n        c->center_y = 0;\n        c->width = 0;\n        c->height = 0;\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u9500\u6bc1",children:"\u9500\u6bc1"}),"\n",(0,c.jsx)(n.p,{children:"\u9700\u8981\u4e3b\u52a8\u9500\u6bc1\u7684\u53ea\u6709 image\uff0c\u5b83\u7531\u4e0b\u9762\u7684\u6587\u4ef6\u52a0\u8f7d\u51fd\u6570\u521b\u5efa\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.c",children:"void image_controller_destroy(image_controller_t *c)\n{\n        if (c->image) {\n                ui_image_destroy(c->image);\n        }\n        c->image = NULL;\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u6587\u4ef6\u52a0\u8f7d",children:"\u6587\u4ef6\u52a0\u8f7d"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u62ff\u5230\u56fe\u50cf\u4fe1\u606f\uff0c\u6211\u4eec\u9700\u8981\u8c03\u7528 ui.h \u5934\u6587\u4ef6\u4e2d\u63d0\u4f9b\u7684 ",(0,c.jsx)(n.code,{children:"ui_image_create()"})," \u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u56fe\u50cf\u5b9e\u4f8b\u3002\u7531\u4e8e\u56fe\u50cf\u52a0\u8f7d\u662f\u5f02\u6b65\u7684\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"ui_image_on_load()"})," \u51fd\u6570\u6dfb\u52a0\u56fe\u50cf\u52a0\u8f7d\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.c",children:"void image_controller_load_file(image_controller_t *c, const char *file)\n{\n        if (c->image) {\n                ui_image_destroy(c->image);\n        }\n        c->image = ui_image_create(file);\n        ui_image_on_load(c->image, image_controller_on_image_load, c);\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e3a\u907f\u514d\u5f53\u524d\u56fe\u7247\u4ecd\u7136\u7528\u4e0a\u5f20\u56fe\u7247\u7684\u7f29\u653e\u6bd4\u4f8b\uff0c\u6211\u4eec\u9700\u8981\u5728\u56fe\u50cf\u52a0\u8f7d\u5b8c\u540e\u91cd\u65b0\u8ba1\u7b97\u7f29\u653e\u6bd4\u4f8b\u548c\u53ef\u89c6\u533a\u57df\u4f4d\u7f6e\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.c",children:"void image_controller_on_image_load(ui_image_event_t *e)\n{\n        image_controller_reset_scale(e->data);\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u4e2a\u64cd\u4f5c\u51fd\u6570\u547d\u540d\u4e3a ",(0,c.jsx)(n.code,{children:"image_controller_reset_scale"}),"\uff0c\u7b49\u540e\u9762\u518d\u5b9e\u73b0\u5b83\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bbe\u7f6e\u7f29\u653e\u6bd4\u4f8b",children:"\u8bbe\u7f6e\u7f29\u653e\u6bd4\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:"\u8bbe\u7f6e\u524d\u9700\u8981\u9650\u5236\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u3002\u8bbe\u7f6e\u540e\u9700\u8981\u6839\u636e\u5f53\u524d\u53ef\u89c1\u533a\u57df\u7f29\u653e\u540e\u7684\u5c3a\u5bf8\u6765\u8ba1\u7b97\u65b0\u7684\u4f4d\u7f6e\uff0c\u8ba1\u7b97\u65b9\u6cd5\u662f\u5c06\u4e2d\u5fc3\u70b9\u5750\u6807\u8f6c\u6362\u6210\u76f8\u5bf9\u4e8e\u7f29\u653e\u540e\u7684\u56fe\u7247\uff0c\u7136\u540e\u51cf\u53bb\u5f53\u524d\u53ef\u89c1\u533a\u57df\u4e2d\u5fc3\u70b9\u4f4d\u7f6e\uff0c\u6700\u540e\u8f6c\u6210\u76f8\u5bf9\u4e8e\u53ef\u89c1\u533a\u57df\u7684\u8d1f\u6570\u503c\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.c",children:"#define SCALE_MAX 10.f\n\nvoid image_controller_set_scale(image_controller_t *c, float scale)\n{\n        pd_canvas_t *data = &c->image->data;\n\n        if (scale < c->min_scale) {\n                scale = c->min_scale;\n        }\n        if (scale > SCALE_MAX) {\n                scale = SCALE_MAX;\n        }\n        c->scale = scale;\n        image_controller_set_position(\n            c, -(c->center_x * c->scale - c->width / 2.f),\n            -(c->center_y * c->scale - c->height / 2.f));\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u8bbe\u7f6e\u53ef\u89c1\u533a\u57df\u4f4d\u7f6e",children:"\u8bbe\u7f6e\u53ef\u89c1\u533a\u57df\u4f4d\u7f6e"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u8bbe\u7f6e\u53ef\u89c1\u533a\u57df\u4f4d\u7f6e\u65f6\u9700\u8981\u5904\u7406\u4e24\u79cd\u60c5\u51b5\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5982\u679c\u7f29\u653e\u540e\u7684\u56fe\u7247\u5c3a\u5bf8\u5c0f\u4e8e\u53ef\u89c1\u533a\u57df\uff0c\u5219\u56fe\u7247\u5e94\u59cb\u7ec8\u5c45\u4e2d\uff0c\u90a3\u4e48\u4f4d\u7f6e\u5c31\u662f\u53ef\u89c1\u533a\u57df\u76f8\u5bf9\u4e8e\u7f29\u653e\u540e\u56fe\u7247\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,c.jsx)(n.li,{children:"x \u548c y \u5e94\u8be5\u5c0f\u4e8e\u6216\u7b49\u4e8e 0\uff0c\u4e14\u52a0\u4e0a\u7f29\u653e\u540e\u7684\u56fe\u7247\u5c3a\u5bf8\u540e\u4e0d\u8d85\u51fa\u56fe\u7247\u533a\u57df\u5c3a\u5bf8\uff0c\u907f\u514d\u53ef\u89c1\u533a\u57df\u8d85\u51fa\u56fe\u7247\u533a\u57df\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8bbe\u7f6e\u5b8c\u540e\uff0c\u8fd8\u9700\u8981\u91cd\u65b0\u8ba1\u7b97\u4e2d\u5fc3\u70b9\u5750\u6807\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.c",children:"void image_controller_set_position(image_controller_t *c, float x, float y)\n{\n        pd_canvas_t *data = &c->image->data;\n        float image_width = c->scale * data->width;\n        float image_height = c->scale * data->height;\n\n        if (image_width <= c->width) {\n                x = (c->width - image_width) / 2.f;\n        } else if (x > 0) {\n                x = 0;\n        } else if (c->width - x > image_width) {\n                x = c->width - image_width;\n        }\n        if (image_height <= c->height) {\n                y = (c->height - image_height) / 2.f;\n        } else if (y > 0) {\n                y = 0;\n        } else if (c->height - y > image_height) {\n                y = c->height - image_height;\n        }\n        c->x = x;\n        c->y = y;\n        c->center_x = (-c->x + c->width / 2.f) / c->scale;\n        c->center_y = (-c->y + c->height / 2.f) / c->scale;\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u91cd\u7f6e\u7f29\u653e\u6bd4\u4f8b",children:"\u91cd\u7f6e\u7f29\u653e\u6bd4\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:"\u6839\u636e\u56fe\u7247\u5c3a\u5bf8\u548c\u53ef\u89c1\u533a\u57df\u5c3a\u5bf8\uff0c\u8ba1\u7b97\u81ea\u9002\u5e94\u6bd4\u4f8b\u3002\u8ba1\u7b97\u65b9\u6cd5\u662f\u5206\u522b\u7b97\u51fa\u53ef\u89c1\u533a\u57df\u5bbd\u9ad8\u4e0e\u56fe\u7247\u5bbd\u9ad8\u7684\u6bd4\u4f8b\uff0c\u5c06\u4e24\u8005\u4e4b\u4e2d\u7684\u6700\u5c0f\u7684\u4f5c\u4e3a\u81ea\u9002\u5e94\u6bd4\u4f8b\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u56fe\u7247\u539f\u59cb\u5c3a\u5bf8\u5c0f\u4e8e\u53ef\u89c1\u533a\u57df\u5c3a\u5bf8\u65f6\uff0c\u5e94\u8be5\u6309 1:1 \u6bd4\u4f8b\u7f29\u653e\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.c",children:"void image_controller_reset_scale(image_controller_t *c)\n{\n        pd_canvas_t *image = &c->image->data;\n        float width_scale =\n            image->width > c->width ? c->width / image->width : 1.f;\n        float height_scale =\n            image->height > c->height ? c->height / image->height : 1.f;\n\n        c->min_scale = width_scale < height_scale ? width_scale : height_scale;\n        image_controller_set_scale(c, c->min_scale);\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5feb\u6377\u7f29\u653e",children:"\u5feb\u6377\u7f29\u653e"}),"\n",(0,c.jsx)(n.p,{children:"\u56fe\u7247\u67e5\u770b\u754c\u9762\u9700\u8981\u653e\u5927\u3001\u7f29\u5c0f\u3001\u81ea\u9002\u5e94\u8fd9\u4e09\u79cd\u5feb\u6377\u7f29\u653e\u64cd\u4f5c\u3002\u4e3a\u7b80\u5316\u754c\u9762\u5c42\u7684\u5b9e\u73b0\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u63a7\u5236\u5668\u5185\u5b9e\u73b0\u8fd9\u4e9b\u64cd\u4f5c\u51fd\u6570\uff0c\u4f9b\u754c\u9762\u5c42\u4ee3\u7801\u76f4\u63a5\u8c03\u7528\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u653e\u5927\u548c\u7f29\u5c0f\u6bd4\u8f83\u7b80\u5355\uff0c\u5b9a\u4e49\u4e00\u4e2a\u56fa\u5b9a\u7684\u9012\u589e/\u9012\u51cf\u503c\uff0c\u7136\u540e\u589e\u51cf\u8fd9\u4e2a\u503c\u5373\u53ef\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.c",children:"#define SCALE_STEP 0.2f\n\nvoid image_controller_zoom_in(image_controller_t *c)\n{\n        image_controller_set_scale(c, c->scale + SCALE_STEP);\n}\n\nvoid image_controller_zoom_out(image_controller_t *c)\n{\n        image_controller_set_scale(c, c->scale - SCALE_STEP);\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u81ea\u9002\u5e94\u6bd4\u4f8b\u7684\u8bdd\uff0c\u548c ",(0,c.jsx)(n.code,{children:"image_controller_reset_scale()"})," \u51fd\u6570\u4e2d\u7684\u7b97\u6cd5\u4e00\u6837\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8ba1\u7b97\u4ee3\u7801\u62c6\u5206\u4e3a\u72ec\u7acb\u7684\u51fd\u6570\u4ee5\u4fbf\u590d\u7528\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.c",children:"float image_controller_compute_zoom_to_fill(image_controller_t *c)\n{\n        pd_canvas_t *data = &c->image->data;\n        float width_scale =\n            data->width > c->width ? c->width / data->width : 1.f;\n        float height_scale =\n            data->height > c->height ? c->height / data->height : 1.f;\n        ;\n        return width_scale < height_scale ? width_scale : height_scale;\n}\n\nvoid image_controller_zoom_to_fill(image_controller_t *c)\n{\n        image_controller_set_scale(c,\n                                   image_controller_compute_zoom_to_fill(c));\n}\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-diff",metastring:"title=image-controller.c",children:" void image_controller_reset_scale(image_controller_t *c)\n {\n-         pd_canvas_t *image = &c->image->data;\n-         float width_scale =\n-             image->width > c->width ? c->width / image->width : 1.f;\n-         float height_scale =\n-             image->height > c->height ? c->height / image->height : 1.f;\n+         c->min_scale = image_controller_compute_zoom_to_fill(c);\n          image_controller_set_scale(c, c->min_scale);\n }\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u72b6\u6001\u68c0\u67e5",children:"\u72b6\u6001\u68c0\u67e5"}),"\n",(0,c.jsx)(n.p,{children:"\u56fe\u7247\u67e5\u770b\u754c\u9762\u4f1a\u5728\u4e00\u4e9b\u64cd\u4f5c\u4e0d\u53ef\u7528\u7684\u65f6\u5019\u7981\u7528\u5bf9\u5e94\u7684\u64cd\u4f5c\u6309\u94ae\uff0c\u4e3a\u5b9e\u73b0\u8fd9\u4e00\u529f\u80fd\uff0c\u63a7\u5236\u5668\u5e94\u63d0\u4f9b\u6bcf\u4e2a\u5feb\u6377\u7f29\u653e\u64cd\u4f5c\u7684\u53ef\u7528\u72b6\u6001\u68c0\u67e5\u51fd\u6570\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u68c0\u67e5\u65b9\u5f0f\u6bd4\u8f83\u7b80\u5355\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u80fd\u653e\u5927\uff1a\u56fe\u7247\u6709\u6548\u4e14\u7f29\u653e\u6bd4\u4f8b\u5c0f\u4e8e\u6700\u5927\u6bd4\u4f8b\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u80fd\u7f29\u5c0f\uff1a\u56fe\u7247\u6709\u6548\u4e14\u7f29\u653e\u6bd4\u4f8b\u5927\u4e8e\u6700\u5c0f\u6bd4\u4f8b\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u80fd\u81ea\u9002\u5e94\uff1a\u56fe\u7247\u6709\u6548\u4e14\u5f53\u524d\u6bd4\u4f8b\u4e0d\u7b49\u4e8e\u81ea\u9002\u5e94\u6bd4\u4f8b\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["ui.h \u5934\u6587\u4ef6\u63d0\u4f9b\u4e86 ",(0,c.jsx)(n.code,{children:"ui_image_valid()"})," \u51fd\u6570\u7528\u4e8e\u68c0\u67e5\u56fe\u7247\u662f\u5426\u6709\u6548\uff0c\u90a3\u4e48\u5269\u4e0b\u7684\u5c31\u975e\u5e38\u7b80\u5355\u4e86\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",metastring:"title=image-controller.c",children:"bool image_controller_can_zoom_in(image_controller_t *c)\n{\n        return ui_image_valid(c->image) && c->scale < SCALE_MAX;\n}\n\nbool image_controller_can_zoom_out(image_controller_t *c)\n{\n        return ui_image_valid(c->image) && c->scale > c->min_scale;\n}\n\nbool image_controller_can_zoom_to_fill(image_controller_t *c)\n{\n        return ui_image_valid(c->image) &&\n               image_controller_compute_zoom_to_fill(c) != c->scale;\n}\n"})})]})}function _(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var c=i(6540);const l={},t=c.createContext(l);function a(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);