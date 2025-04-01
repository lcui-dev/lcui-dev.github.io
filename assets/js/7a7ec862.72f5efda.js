"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5454],{31058:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>h,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"graphics/drawing-simple-graphics","title":"\u7ed8\u5236\u7b80\u5355\u7684\u56fe\u5f62","description":"\u56fe\u5f62\u6e32\u67d3\u76f8\u5173 API \u548c\u6982\u5ff5\u7684\u4ecb\u7ecd\u3002","source":"@site/versioned_docs/version-2.x/graphics/drawing-simple-graphics.md","sourceDirName":"graphics","slug":"/graphics/drawing-simple-graphics","permalink":"/docs/2.x/graphics/drawing-simple-graphics","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/graphics/drawing-simple-graphics.md","tags":[],"version":"2.x","frontMatter":{"description":"\u56fe\u5f62\u6e32\u67d3\u76f8\u5173 API \u548c\u6982\u5ff5\u7684\u4ecb\u7ecd\u3002"},"sidebar":"docsSidebar","previous":{"title":"\u56fe\u5f62","permalink":"/docs/2.x/graphics/"},"next":{"title":"\u7ed8\u5236\u590d\u6742\u7684\u56fe\u5f62","permalink":"/docs/2.x/graphics/drawing-complex-graphics"}}');var i=c(74848),a=c(28453);const t={description:"\u56fe\u5f62\u6e32\u67d3\u76f8\u5173 API \u548c\u6982\u5ff5\u7684\u4ecb\u7ecd\u3002"},s="\u7ed8\u5236\u7b80\u5355\u7684\u56fe\u5f62",h={},o=[{value:"\u7ed8\u5236\u77e9\u5f62 <a></a>",id:"\u7ed8\u5236\u77e9\u5f62-",level:3},{value:"\u900f\u660e\u5ea6",id:"\u900f\u660e\u5ea6",level:3},{value:"opacity \u7684\u4f7f\u7528\u793a\u4f8b",id:"opacity-\u7684\u4f7f\u7528\u793a\u4f8b",level:4},{value:"\u534a\u900f\u660e\u8272\u7684\u4f7f\u7528\u793a\u4f8b",id:"\u534a\u900f\u660e\u8272\u7684\u4f7f\u7528\u793a\u4f8b",level:4}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u7ed8\u5236\u7b80\u5355\u7684\u56fe\u5f62",children:"\u7ed8\u5236\u7b80\u5355\u7684\u56fe\u5f62"})}),"\n",(0,i.jsxs)(e.h3,{id:"\u7ed8\u5236\u77e9\u5f62-",children:["\u7ed8\u5236\u77e9\u5f62 ",(0,i.jsx)("a",{id:"\u7ed8\u5236\u77e9\u5f62"})]}),"\n",(0,i.jsx)(e.p,{children:"\u4e0e\u5176\u5b83\u56fe\u5f62\u5e93\u4e0d\u540c\uff0cLCUI \u63d0\u4f9b\u7684\u56fe\u5f62 API \u53ea\u652f\u6301\u77e9\u5f62\u8fd9\u4e00\u79cd\u5f62\u5f0f\u7684\u56fe\u5f62\u7ed8\u5236\uff0c\u4e0d\u652f\u6301\u57fa\u4e8e\u8def\u5f84\u6765\u7ed8\u5236\u590d\u6742\u56fe\u5f62\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u5176\u5b83\u590d\u6742\u7684\u56fe\u5f62\uff0c\u4f60\u9700\u8981\u624b\u52a8\u7f16\u5199\u4ee3\u7801\u586b\u5145\u50cf\u7d20\u6765\u7ed8\u5236\u3002"}),"\n",(0,i.jsx)(e.p,{children:"LCUI \u63d0\u4f9b\u4e86\u4e00\u79cd\u7ed8\u5236\u77e9\u5f62\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"int Graph_FillRect(LCUI_Graph *graph, LCUI_Color color,\n                   LCUI_Rect *rect, LCUI_BOOL with_alpha);\n"})}),"\n",(0,i.jsx)(e.admonition,{type:"caution",children:(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff0c\u8be5\u51fd\u6570\u4f1a\u5c06\u6307\u5b9a\u533a\u57df\u5185\u7684\u50cf\u7d20\u66ff\u6362\u4e3a\u6307\u5b9a\u989c\u8272\uff0c\u800c\u4e0d\u662f\u4e0e\u539f\u6709\u989c\u8272\u6df7\u5408\u3002"})}),"\n",(0,i.jsx)(e.p,{children:"\u73b0\u5728\u5c31\u6765\u4f7f\u7528\u8fd9\u4e2a\u51fd\u6570\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/graph.h>\n#include <LCUI/image.h>\n\nint main(void)\n{\n        int i, j;\n        LCUI_Graph canvas;\n        LCUI_Color color;\n        LCUI_Rect rect;\n\n        Graph_Init(&canvas);\n        Graph_Create(&canvas, 150, 150);\n        for (i = 0; i < 6; ++i) {\n                for (j = 0; j < 6; ++j) {\n                        color.red = (unsigned char)(255 - 42.5 * i);\n                        color.green = (unsigned char)(255 - 42.5 * j);\n                        color.blue = 0;\n                        rect.x = j * 25;\n                        rect.y = i * 25;\n                        rect.width = 25;\n                        rect.height = 25;\n                        Graph_FillRect(&canvas, color, &rect, FALSE);\n                }\n        }\n        LCUI_WritePNGFile("test_fill_rect.png", &canvas);\n        Graph_Free(&canvas);\n        return 0;\n}\n\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u672c\u793a\u4f8b\u91cc\uff0c\u6211\u4eec\u7528\u4e24\u5c42 ",(0,i.jsx)(e.code,{children:"for"})," \u5faa\u73af\u6765\u7ed8\u5236\u65b9\u9635\u5217\uff0c\u6bcf\u4e2a\u65b9\u683c\u4e0d\u540c\u7684\u989c\u8272\u3002\u7ed3\u679c\u5982\u4e0b\u56fe\uff0c\u4f46\u5b9e\u73b0\u6240\u7528\u7684\u4ee3\u7801\u5374\u6ca1\u90a3\u4e48\u7eda\u4e3d\u3002\u6211\u4eec\u7528\u4e86\u4e24\u4e2a\u53d8\u91cf ",(0,i.jsx)(e.code,{children:"i"})," \u548c ",(0,i.jsx)(e.code,{children:"j"})," \u6765\u4e3a\u6bcf\u4e00\u4e2a\u65b9\u683c\u4ea7\u751f\u552f\u4e00\u7684 RGB \u8272\u5f69\u503c\uff0c\u5176\u4e2d\u4ec5\u4fee\u6539\u7ea2\u8272\u548c\u7eff\u8272\u901a\u9053\u7684\u503c\uff0c\u800c\u4fdd\u6301\u84dd\u8272\u901a\u9053\u7684\u503c\u4e0d\u53d8\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8fd9\u4e9b\u989c\u8272\u901a\u9053\u7684\u503c\u6765\u4ea7\u751f\u5404\u79cd\u5404\u6837\u7684\u8272\u677f\u3002\u901a\u8fc7\u589e\u52a0\u6e10\u53d8\u7684\u9891\u7387\uff0c\u4f60\u8fd8\u53ef\u4ee5\u7ed8\u5236\u51fa\u7c7b\u4f3c Photoshop \u91cc\u9762\u7684\u90a3\u6837\u7684\u8c03\u8272\u677f\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"test_fill_rect.png",src:c(33562).A+"",width:"150",height:"150"})}),"\n",(0,i.jsx)(e.h3,{id:"\u900f\u660e\u5ea6",children:"\u900f\u660e\u5ea6"}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u4e86\u53ef\u4ee5\u7ed8\u5236\u5b9e\u8272\u56fe\u5f62\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u7ed8\u5236\u534a\u900f\u660e\u7684\u56fe\u5f62\u3002\u901a\u8fc7\u8bbe\u7f6e\u753b\u5e03\u7684 opacity \u5c5e\u6027\u6216\u4f7f\u7528\u4e00\u4e2a\u534a\u900f\u660e\u989c\u8272\u4f5c\u4e3a\u586b\u5145\u989c\u8272\u3002"}),"\n",(0,i.jsx)(e.p,{children:"opacity \u5c5e\u6027\u5f71\u54cd\u6574\u4e2a\u56fe\u50cf\u7684\u900f\u660e\u5ea6\uff0c\u6709\u6548\u7684\u53d6\u503c\u8303\u56f4\u662f 0.0\uff08\u5b8c\u5168\u900f\u660e\uff09\u5230 1.0\uff08\u5b8c\u5168\u4e0d\u900f\u660e\uff09\uff0c\u9ed8\u8ba4\u662f 1.0\u3002"}),"\n",(0,i.jsx)(e.h4,{id:"opacity-\u7684\u4f7f\u7528\u793a\u4f8b",children:"opacity \u7684\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u91cc\uff0c\u6211\u4eec\u4f7f\u7528\u4e24\u4e2a\u56fe\u50cf\uff0c\u4e00\u4e2a\u586b\u5145\u56db\u8272\u683c\u4f5c\u4e3a\u80cc\u666f\uff0c\u53e6\u4e00\u4e2a\u7528\u4f5c\u524d\u666f\uff0c\u8bbe\u7f6e\u5176 ",(0,i.jsx)(e.code,{children:"opacity"})," \u5c5e\u6027\u4e3a ",(0,i.jsx)(e.code,{children:"0.2"}),"\uff0c\u7136\u540e\u5728\u524d\u666f\u56fe\u4e2d\u586b\u5145\u4e00\u7cfb\u5217\u5c3a\u5bf8\u9012\u589e\u7684\u534a\u900f\u660e\u77e9\u5f62\u5e76\u7528 ",(0,i.jsx)(e.code,{children:"Graph_Mix()"})," \u51fd\u6570\u5c06\u5b83\u4eec\u6df7\u5408\u5230\u80cc\u666f\u56fe\u4e0a\u3002\u6700\u7ec8\u7ed3\u679c\u662f\u4e00\u4e2a\u5f84\u5411\u6e10\u53d8\u6548\u679c\u3002\u77e9\u5f62\u53e0\u52a0\u5f97\u8d8a\u66f4\u591a\uff0c\u539f\u5148\u6240\u753b\u7684\u77e9\u5f62\u7684\u900f\u660e\u5ea6\u4f1a\u8d8a\u4f4e\u3002\u901a\u8fc7\u589e\u52a0\u5faa\u73af\u6b21\u6570\uff0c\u753b\u66f4\u591a\u7684\u77e9\u5f62\uff0c\u4ece\u4e2d\u5fc3\u5230\u8fb9\u7f18\u90e8\u5206\uff0c\u80cc\u666f\u56fe\u4f1a\u5448\u73b0\u9010\u6e10\u6d88\u5931\u7684\u6548\u679c\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/graph.h>\n#include <LCUI/image.h>\n\nint main(void)\n{\n        int i, size;\n        LCUI_Graph canvas;\n        LCUI_Graph fore_canvas;\n        LCUI_Rect rect;\n\n        Graph_Init(&canvas);\n        Graph_Init(&fore_canvas);\n        Graph_Create(&canvas, 150, 150);\n        // \u753b\u80cc\u666f\n        rect.x = 0;\n        rect.y = 0;\n        rect.width = 75;\n        rect.height = 75;\n        Graph_FillRect(&canvas, RGB(255, 221, 0), &rect, FALSE);\n        rect.x = 75;\n        Graph_FillRect(&canvas, RGB(102, 204, 0), &rect, FALSE);\n        rect.x = 0;\n        rect.y = 75;\n        Graph_FillRect(&canvas, RGB(0, 153, 255), &rect, FALSE);\n        rect.x = 75;\n        Graph_FillRect(&canvas, RGB(255, 51, 0), &rect, FALSE);\n        // \u8bbe\u7f6e\u524d\u666f\u7684 opacity \u503c\n        fore_canvas.opacity = 0.2f;\n        // \u4ec5\u5f53\u8272\u5f69\u6a21\u5f0f\u4e3a ARGB \u65f6 opacity \u5c5e\u6027\u624d\u4f1a\u751f\u6548\n        fore_canvas.color_type = LCUI_COLOR_TYPE_ARGB;\n        for (i = 0; i < 7; ++i) {\n                size = 2 * (10 + 10 * i);\n                // \u4f7f\u7528\u65b0\u5c3a\u5bf8\u91cd\u65b0\u521b\u5efa\u524d\u666f\u56fe\n                Graph_Create(&fore_canvas, size, size);\n                // \u91cd\u65b0\u586b\u5145\u989c\u8272\n                Graph_FillRect(&fore_canvas, RGB(255, 255, 255), NULL, TRUE);\n                // \u5c06\u524d\u666f\u56fe\u6df7\u5408\u5230\u80cc\u666f\u56fe\u4e2d\n                Graph_Mix(&canvas, &fore_canvas, 75 - size / 2, 75 - size / 2, FALSE);\n        }\n        LCUI_WritePNGFile("test_mix_rect_with_opacity.png", &canvas);\n        Graph_Free(&fore_canvas);\n        Graph_Free(&canvas);\n        return 0;\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"test_mix_rect_with_opacity.png",src:c(2470).A+"",width:"150",height:"150"})}),"\n",(0,i.jsx)(e.h4,{id:"\u534a\u900f\u660e\u8272\u7684\u4f7f\u7528\u793a\u4f8b",children:"\u534a\u900f\u660e\u8272\u7684\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0a\u4e2a\u4f8b\u5b50\u867d\u7136\u7528\u586b\u5145\u534a\u900f\u660e\u8272\u4ee3\u66ff opacity \u5c5e\u6027\u4e5f\u80fd\u5b9e\u73b0\u540c\u6837\u7684\u6548\u679c\uff0c\u4f46\u4e24\u4e2a\u793a\u4f8b\u90fd\u5171\u7528\u540c\u4e00\u793a\u4f8b\u4ee3\u7801\u7684\u8bdd\u672a\u514d\u6709\u4e9b\u65e0\u804a\uff0c\u6240\u4ee5\u6211\u4eec\u6362\u4e00\u79cd\u7ed8\u5236\u65b9\u5f0f\uff0c\u753b\u4e00\u4e2a\u6b63\u65b9\u5f62\uff0c\u5c06\u5b83\u5206\u6210\u56db\u4e2a\u586b\u5145\u4e0d\u540c\u989c\u8272\u7684\u957f\u65b9\u5f62\uff0c\u6bcf\u4e2a\u957f\u65b9\u5f62\u4e2d\u90fd\u753b\u4e00\u7cfb\u5217\u900f\u660e\u5ea6\u4ece\u5de6\u9012\u589e\u7684\u767d\u8272\u77e9\u5f62\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/graph.h>\n#include <LCUI/image.h>\n#include <stdio.h>\n\nint main(void)\n{\n        int i, j;\n        LCUI_Graph canvas;\n        LCUI_Graph fore_canvas;\n        LCUI_Color color;\n        LCUI_Rect rect;\n\n        Graph_Init(&canvas);\n        Graph_Init(&fore_canvas);\n        Graph_Create(&canvas, 160, 160);\n        // \u753b\u80cc\u666f\n        rect.x = 0;\n        rect.y = 0;\n        rect.width = 160;\n        rect.height = 40;\n        Graph_FillRect(&canvas, RGB(255, 221, 0), &rect, FALSE);\n        rect.y += 40;\n        Graph_FillRect(&canvas, RGB(102, 204, 0), &rect, FALSE);\n        rect.y += 40;\n        Graph_FillRect(&canvas, RGB(0, 153, 255), &rect, FALSE);\n        rect.y += 40;\n        Graph_FillRect(&canvas, RGB(255, 51, 0), &rect, FALSE);\n        color.red = 255;\n        color.green = 255;\n        color.blue = 255;\n        fore_canvas.color_type = LCUI_COLOR_TYPE_ARGB;\n        Graph_Create(&fore_canvas, 15, 30);\n        // \u753b\u534a\u900f\u660e\u77e9\u5f62\n        for (i = 0; i < 10; ++i) {\n                color.alpha = (unsigned char)(255 * (i + 1) / 10.0);\n                Graph_FillRect(&fore_canvas, color, NULL, TRUE);\n                for (j = 0; j < 4; ++j) {\n                        Graph_Mix(&canvas, &fore_canvas, 5 + i * 15, 5 + j * 40, TRUE);\n                }\n        }\n        LCUI_WritePNGFile("test_fill_rect_with_rgba.png", &canvas);\n        Graph_Free(&fore_canvas);\n        Graph_Free(&canvas);\n        return 0;\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"test_fill_rect_with_rgba.png",src:c(16978).A+"",width:"160",height:"160"})})]})}function l(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},33562:(n,e,c)=>{c.d(e,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAABiklEQVR4nO3c0QmAMAxAQZXuv52uo0sEypO7AULhkb+S832PMffcqGdu1N9fdY1NYhMJ8yTMkzBPwjwJ8yTMkzBPwjwJ8yTMkzBPwjwJ8yTMkzBPwjwJ8yTMkzBPwjwJ8yTMkzBvDX6UZQtbmCdhnoR5EuZJmCdhnoR5EuZJmCdhnoR5EuZJmCdhnoR5EuZJmCdhnoR5EuZJmCdhnoR5EuatwUO3bGEL8yTMkzBPwjwJ8yTMkzBPwjwJ8yTMkzBPwjwJ8yTMkzBPwjwJ8yTMkzBPwjwJ8yTMkzBPwjxXgfNsYZ6EeRLmSZgnYZ6EeRLmSZgnYZ6EeRLmSZgnYZ6EeRLmSZgnYZ6EeRLmSZgnYZ6EeRLmSZjnKnCeLcyTME/CPAnzJMyTME/CPAnzJMyTME/CPAnzJMyTME/CPAnzJMyTME/CPAnzJMyTME/CPAnzXAXOs4V5EuZJmCdhnoR5EuZJmCdhnoR5EuZJmCdhnoR5EuZJmCdhnoR5EuZJmCdhnoR5EuZJmCdh3gdr7AuKOauV4QAAAABJRU5ErkJggg=="},16978:(n,e,c)=>{c.d(e,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAIAAAAErfB6AAACQUlEQVR4nO3cMWobQRiAUcmSDUkgNtgGSdcIOVNypZA75QbGrTuDGzcGpdZWmWJZ6ct7ncTOaNDH3wg06+PTirCrpQ/AvASOEzhO4Ljt9I3NbmD15jDyUfu5dt6M7Ly9wJ2Hvo3nk6E1wXECxwkcJ3CcwHECxwkcJ3CcwHECxwkcJ3CcwHECxwkcJ3CcwHECxwkcJ3CcwHECxwkcJ3CcwHECxwkcJ3CcwHFrVzi0meA4geMEjhM4bvvjdekjMCcTHCdwnMBxAsdN78n6uh24J+vuZuD+ptvrgZuhbq/n2vlutp3P5Mw//7gn638icJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRw3/Xfh28fLvy8eephFmOA4geMEjhM4br36dVz6DMzIBMcJHCdwnMBx01+ydp8GFh++DDy8/zyy88jD57LzeXwbV79PXw4s5QIJHCdwnMBxAscJHCdwnMBxAscJHCdwnMBxAscJHCdwnMBxAscJHCdwnMBxAscJHCdwnMBxAscJHCdwnMBxAsdN/1348j6weOhhFmGC4wSOEzhO4Lj18dvSR2BOJjhO4DiB4wSOm/6StbrfDax+PAw8/LA/i50fLvDMQzt/PxlaExwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRznCoc4ExwncJzAcQLH/QVD0Ry+LoxW8QAAAABJRU5ErkJggg=="},2470:(n,e,c)=>{c.d(e,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAACuklEQVR4nO3dzUoCURiAYdMKiaKihGgRLVu76o66yS6glWs3wdBCAosKSyT729oPX5lz5swr77Oz0ZkTb9/mYDMr75eN5XZ2l3sFiTVzL0CLMiGeCfFMiLf69Qfr3RzLSOhoI/cKynY17s2+dArxTIhnQjwT4pkQz4R4JsQzIZ4J8b7tzsTWTtIsI6GDdu4VzO960v/7m51CPBPimRDPhHgmxDMhngnxTIhnQrw5d2d+OdlxmWcryd567hX85Pa5KOtUTiGeCfFMiGdCPBPimRDPhHgmxDMhXqm7M7HWYXXXmrG9luWyjYfpoJoLOYV4JsQzIZ4J8UyIZ0I8E+KZEM+EeBXuzsRanUQn3kz2Kz6+DFOdeh5OIZ4J8UyIZ0I8E+KZEM+EeCbEMyFebXZnYs3df390o/X/y45fAU9IcArxTIhnQjwT4pkQz4R4JsQzIZ4J8SC7M7HmVnCwHf6VTt5GJS+mck4hngnxTIhnQjwT4pkQz4R4JsQzId7qyvn77OvufvTuk53o6HG0SdI4DJ9s3QmfrLQb3tl3K7yzzOnwIjr8FB1sxFs39+HR+N+e4pvSFOHRzw90cgrxTIhnQjwT4pkQz4R4JsQzIZ4J8ZbhuzOjaXj4Cf/tmJhTiGdCPBPimRDPhHgmxDMhngnxTIjH2J25e17gwyPAvWMW4RTimRDPhHgmxDMhngnxTIhnQjwT4tVld2Y4SXbq+1o8WSkdpxDPhHgmxDMhngnxTIhnQjwT4pkQr7rdmcG4skt9Noxv8YLnFOKZEM+EeCbEMyGeCfFMiGdCPBPilbk7U9TzBi+DIvcK0nIK8UyIZ0I8E+KZEM+EeCbEMyGeCfHm253px08pqqei//t7yJxCPBPimRDPhHgmxDMhngnxTIhnQryvuzO9myzLSKnfy72CtJxCPBPimRDPhHgfp4k+N+PAr/cAAAAASUVORK5CYII="},28453:(n,e,c)=>{c.d(e,{R:()=>t,x:()=>s});var r=c(96540);const i={},a=r.createContext(i);function t(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);