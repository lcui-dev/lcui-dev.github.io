"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5248],{7896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var i=t(4848),d=t(8453);const c={description:"\u4e00\u4e9b\u57fa\u672c\u7528\u6cd5\u3001\u6838\u5fc3\u6982\u5ff5\u7684\u4ecb\u7ecd\u3002"},l="\u4ecb\u7ecd",r={id:"base/introduction",title:"\u4ecb\u7ecd",description:"\u4e00\u4e9b\u57fa\u672c\u7528\u6cd5\u3001\u6838\u5fc3\u6982\u5ff5\u7684\u4ecb\u7ecd\u3002",source:"@site/versioned_docs/version-2.x/base/introduction.md",sourceDirName:"base",slug:"/base/introduction",permalink:"/en/docs/2.x/base/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/base/introduction.md",tags:[],version:"2.x",frontMatter:{description:"\u4e00\u4e9b\u57fa\u672c\u7528\u6cd5\u3001\u6838\u5fc3\u6982\u5ff5\u7684\u4ecb\u7ecd\u3002"},sidebar:"docsSidebar",previous:{title:"\u5b89\u88c5",permalink:"/en/docs/2.x/base/installation"},next:{title:"\u7ea6\u5b9a",permalink:"/en/docs/2.x/base/convention"}},s={},o=[{value:"LCUI \u662f\u4ec0\u4e48",id:"lcui-\u662f\u4ec0\u4e48",level:3},{value:"\u8d77\u6b65",id:"\u8d77\u6b65",level:3},{value:"\u521b\u5efa\u57fa\u672c\u5e94\u7528\u7a0b\u5e8f",id:"\u521b\u5efa\u57fa\u672c\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"\u6e32\u67d3\u6587\u672c",id:"\u6e32\u67d3\u6587\u672c",level:3},{value:"\u5904\u7406\u7528\u6237\u8f93\u5165",id:"\u5904\u7406\u7528\u6237\u8f93\u5165",level:3},{value:"\u8bbe\u7f6e\u6587\u672c\u6837\u5f0f",id:"\u8bbe\u7f6e\u6587\u672c\u6837\u5f0f",level:3},{value:"\u7528 XML \u548c CSS \u63cf\u8ff0 UI",id:"\u7528-xml-\u548c-css-\u63cf\u8ff0-ui",level:3},{value:"\u4ee5\u58f0\u660e\u5f0f\u7f16\u5199 UI",id:"\u4ee5\u58f0\u660e\u5f0f\u7f16\u5199-ui",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3},{value:"\u53d6\u4e00\u4e2a\u65b0\u540d\u5b57",id:"\u53d6\u4e00\u4e2a\u65b0\u540d\u5b57",level:4},{value:"\u4e3a LCUI CLI \u6dfb\u52a0 XML \u7f16\u8bd1\u5668",id:"\u4e3a-lcui-cli-\u6dfb\u52a0-xml-\u7f16\u8bd1\u5668",level:4},{value:"\u4e3a LCUI CLI \u6dfb\u52a0 CSS \u7f16\u8bd1\u5668",id:"\u4e3a-lcui-cli-\u6dfb\u52a0-css-\u7f16\u8bd1\u5668",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.h3,{id:"lcui-\u662f\u4ec0\u4e48",children:"LCUI \u662f\u4ec0\u4e48"}),"\n",(0,i.jsx)(n.p,{children:"LCUI \u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 C \u5e93\u3002\u5176\u5b9a\u4f4d\u662f\u63a2\u7d22\u548c\u5b9e\u8df5\u65b0\u7684\u7528\u6237\u754c\u9762\u5f00\u53d1\u65b9\u5f0f\uff0c\u4ee5\u4f53\u79ef\u5c0f\u3001\u6613\u4e8e\u4f7f\u7528\u3001\u63d0\u4f9b\u4fbf\u6377\u7684\u5f00\u53d1\u5de5\u5177\u4e3a\u7279\u70b9\uff0c\u5e2e\u52a9 C \u5f00\u53d1\u8005\u5feb\u901f\u5f00\u53d1\u5e26\u6709\u56fe\u5f62\u7528\u6237\u754c\u9762\u7684\u684c\u9762\u7aef\u5e94\u7528\u7a0b\u5e8f\u3002\u4e0d\u8fc7\u7531\u4e8e\u4eba\u529b\u6709\u9650\uff0c\u76ee\u524d LCUI \u5728\u7528\u6237\u754c\u9762\u5f00\u53d1\u65b9\u5f0f\u7684\u63a2\u7d22\u548c\u5b9e\u8df5\u8fd8\u53ea\u505c\u7559\u5728\u7b80\u5355\u5b9e\u73b0\u4e86\u7c7b\u4f3c\u4e8e\u7f51\u9875\u7684\u63cf\u8ff0\u98ce\u683c\u548c\u6e32\u67d3\u6548\u679c\u7684\u7a0b\u5ea6\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u8d77\u6b65",children:"\u8d77\u6b65"}),"\n",(0,i.jsxs)(n.p,{children:["\u5c1d\u8bd5 LCUI \u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"https://github.com/lc-ui/lcui-quick-start",children:"lcui-quick-start"})," \u4f8b\u5b50\u3002\u4f60\u53ef\u4ee5\u4e0b\u8f7d\u5b83\u7136\u540e\u6309\u7167 README.md \u4e2d\u63cf\u8ff0\u7684\u6b65\u9aa4\u7f16\u8bd1\u5e76\u8fd0\u884c\u5b83\uff0c\u8ddf\u7740\u4f8b\u5b50\u5b66\u4e60\u4e00\u4e9b\u57fa\u7840\u7528\u6cd5\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u521b\u5efa\u57fa\u672c\u5e94\u7528\u7a0b\u5e8f",children:"\u521b\u5efa\u57fa\u672c\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,i.jsx)(n.p,{children:"\u5148\u4ece\u6700\u7b80\u5355\u7684\u4ee3\u7801\u5f00\u59cb\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#include <LCUI.h>\n\nint main(void)\n{\n    LCUI_Init();\n    return LCUI_Main();\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u5b8c\u6210\u4e86\u4e00\u4e2a LCUI \u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u57fa\u7840\u4e14\u5fc5\u8981\u7684\u5de5\u4f5c\uff1a\u521d\u59cb\u5316 LCUI \u7684\u5404\u4e2a\u529f\u80fd\u7136\u540e\u5c06\u4e3b\u7ebf\u7a0b\u63a7\u5236\u6743\u4ea4\u7ed9 LCUI \u7684\u4e3b\u5faa\u73af\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8bd1\u8fd9\u6bb5\u4ee3\u7801\u6765\u68c0\u67e5 LCUI \u662f\u5426\u6b63\u786e\u5b89\u88c5\uff0c\u5982\u679c\u7f16\u8bd1\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f16\u8bd1\u5668\u7684\u5934\u6587\u4ef6\u548c\u5e93\u6587\u4ef6\u641c\u7d22\u8def\u5f84\u662f\u5426\u914d\u7f6e\u6b63\u786e\u3001LCUI \u7684\u5934\u6587\u4ef6\u548c\u5e93\u6587\u4ef6\u7684\u5b58\u653e\u4f4d\u7f6e\u662f\u5426\u6b63\u786e\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6e32\u67d3\u6587\u672c",children:"\u6e32\u67d3\u6587\u672c"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u4e00\u6bb5\u4ee3\u7801\u53ea\u662f\u8ba9\u7a0b\u5e8f\u4fdd\u6301\u8fd0\u884c\uff0c\u5e76\u4e0d\u4f1a\u5728\u5c4f\u5e55\u4e0a\u8f93\u51fa\u4efb\u4f55\u5185\u5bb9\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u518d\u8865\u5145\u4e00\u4e9b\u4ee3\u7801\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/gui/widget.h>\n#include <LCUI/gui/widget/textview.h>\n\nint main(void)\n{\n    LCUI_Widget root;\n    LCUI_Widget text;\n\n    LCUI_Init();\n    root = LCUIWidget_GetRoot();\n    text = LCUIWidget_New("textview");\n    TextView_SetTextW(text, L"Hello, World!");\n    Widget_Append(root, text);\n    return LCUI_Main();\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["TextView \u662f\u4e00\u4e2a\u63d0\u4f9b\u6587\u672c\u6e32\u67d3\u529f\u80fd\u7684\u9884\u7f6e\u7ec4\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5b83\u5c06 ",(0,i.jsx)(n.code,{children:"Hello, World!"})," \u6587\u672c\u6e32\u67d3\u5230\u5c4f\u5e55\u4e0a\u3002\u5728\u4f7f\u7528 TextView \u7ec4\u4ef6\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"LCUIWidget_New()"})," \u51fd\u6570\u6765\u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u5176\u4e2d ",(0,i.jsx)(n.code,{children:'"textview"'})," \u53c2\u6570\u662f TextView \u5728\u7ec4\u4ef6\u539f\u578b\u5e93\u4e2d\u6ce8\u518c\u7684\u540d\u5b57\uff0c ",(0,i.jsx)(n.code,{children:"LCUIWidget_New()"})," \u51fd\u6570\u6839\u636e\u8fd9\u4e2a\u540d\u5b57\u627e\u5230\u5bf9\u5e94\u7684\u7ec4\u4ef6\u539f\u578b\u540e\uff0c\u4f1a\u8c03\u7528\u539f\u578b\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"init"})," \u51fd\u6570\u5bf9\u7ec4\u4ef6\u5b9e\u4f8b\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u7c7b\u4f3c\u4e8e C++ \u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"new Class()"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u7ec4\u4ef6\u7cfb\u7edf\u7684\u5e95\u5c42\u5b9e\u73b0\u4e2d\uff0c\u6240\u6709\u7c7b\u578b\u7684\u7ec4\u4ef6\u90fd\u5171\u7528\u540c\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ea\u9700\u8981\u7528 ",(0,i.jsx)(n.code,{children:"LCUI_Widget"})," \u8fd9\u4e00\u79cd\u7c7b\u578b\u7684\u6307\u9488\u6765\u5f15\u7528\u7ec4\u4ef6\u5b9e\u4f8b\u3002\u4ece ",(0,i.jsx)(n.code,{children:"LCUIWdget_New()"})," \u51fd\u6570\u62ff\u5230\u7ec4\u4ef6\u5b9e\u4f8b\u540e\uff0c\u6211\u4eec\u8c03\u7528\u4e86\u4e00\u4e9b\u51fd\u6570\u8bbe\u7f6e\u5b83\u7684\u6587\u672c\u5185\u5bb9\u5e76\u5c06\u5b83\u8ffd\u52a0\u5230\u6839\u7ec4\u4ef6\u5185\uff0c\u5176\u4e2d ",(0,i.jsx)(n.code,{children:"Widget_"})," \u524d\u7f00\u7684\u51fd\u6570\u662f\u6240\u6709\u7ec4\u4ef6\u901a\u7528\u7684\u51fd\u6570\uff0c\u53ef\u4ee5\u7528\u4e8e\u64cd\u4f5c\u7ec4\u4ef6\u7684\u57fa\u672c\u5c5e\u6027\u3001\u6837\u5f0f\u3001\u5e03\u5c40\u7b49\uff0c\u800c ",(0,i.jsx)(n.code,{children:"TextView_"})," \u524d\u7f00\u7684\u51fd\u6570\u5219\u662f TextView \u7ec4\u4ef6\u4e13\u7528\u7684\u51fd\u6570\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5904\u7406\u7528\u6237\u8f93\u5165",children:"\u5904\u7406\u7528\u6237\u8f93\u5165"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u8ba9\u7528\u6237\u548c\u4f60\u7684\u5e94\u7528\u8fdb\u884c\u4ea4\u4e92\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 ",(0,i.jsx)(n.code,{children:"Widget_BindEvent()"}),"\u51fd\u6570\u7ed1\u5b9a\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u5728\u7528\u6237\u70b9\u51fb\u65f6\u8c03\u7528\u81ea\u5b9a\u4e49\u51fd\u6570\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/gui/widget.h>\n#include <LCUI/gui/widget/textview.h>\n#include <LCUI/gui/widget/button.h>\n\nvoid OnButtonClick(LCUI_Widget self, LCUI_WidgetEvent e, void *arg)\n{\n    LCUI_Widget text = e->data;\n    \n    TextView_SetText(text, "Hello, LCUI!");\n}\n\nint main(void)\n{\n    LCUI_Widget root;\n    LCUI_Widget text;\n    LCUI_Widget button;\n\n    LCUI_Init();\n    root = LCUIWidget_GetRoot();\n    text = LCUIWidget_New("textview");\n    button = LCUIWidget_New("button");\n    TextView_SetTextW(text, L"Hello, World!");\n    Button_SetTextW(button, L"Change");\n    Widget_BindEvent(button, "click", OnButtonClick, text, NULL);\n    Widget_Append(root, text);\n    Widget_Append(root, button);\n    return LCUI_Main();\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u6211\u4eec\u7528\u5230\u4e86\u9884\u7f6e\u7684 Button \u7ec4\u4ef6\uff0c\u5b83\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u4ea4\u4e92\u53cd\u9988\u6548\u679c\uff0c\u7528\u4e8e\u544a\u77e5\u7528\u6237\u70b9\u51fb\u5b83\u53ef\u4ee5\u89e6\u53d1\u76f8\u5e94\u7684\u64cd\u4f5c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"Widget_BindEvent()"})," \u51fd\u6570\u8c03\u7528\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u6307\u5b9a\u4e86\u4e8b\u4ef6\u540d\u79f0 ",(0,i.jsx)(n.code,{children:'"click"'})," \u3001\u4e8b\u4ef6\u5904\u7406\u5668 ",(0,i.jsx)(n.code,{children:"OnButtonClick"})," \u4ee5\u53ca\u4f20\u7ed9\u5b83\u7684 ",(0,i.jsx)(n.code,{children:"text"})," \u7ec4\u4ef6\u6307\u9488\u3002\u5f53\u7528\u6237\u70b9\u51fb\u6309\u94ae\u65f6\u4f1a\u89e6\u53d1 click \u4e8b\u4ef6\uff0c\u7136\u540e\u8c03\u7528\u4e0e\u4e4b\u7ed1\u5b9a\u7684 ",(0,i.jsx)(n.code,{children:"OnButtonClick()"})," \u51fd\u6570\uff0c\u8be5\u51fd\u6570\u4ece\u4e8b\u4ef6\u6570\u636e\u7ed3\u6784\u4f53\u4e2d\u7684 data \u6210\u5458\u62ff\u5230\u7ed1\u5b9a\u65f6\u6307\u5b9a\u7684 text \u7ec4\u4ef6\uff0c\u7136\u540e\u5c06\u6587\u672c\u5185\u5bb9\u66f4\u6539\u4e3a",(0,i.jsx)(n.code,{children:'"Hello, LCUI!"'})," \u3002"]}),"\n",(0,i.jsx)(n.p,{children:"LCUI \u8fd8\u63d0\u4f9b\u4e86 TextEdit \u7ec4\u4ef6\uff0c\u5b83\u80fd\u54cd\u5e94\u5e76\u5b58\u50a8\u7528\u6237\u8f93\u5165\u7684\u6587\u672c\u5185\u5bb9\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/gui/widget.h>\n#include <LCUI/gui/widget/textview.h>\n#include <LCUI/gui/widget/textedit.h>\n#include <LCUI/gui/widget/button.h>\n\nvoid OnButtonClick(LCUI_Widget self, LCUI_WidgetEvent e, void *arg)\n{\n    wchar_t str[256] = { 0 };\n    LCUI_Widget text = ((LCUI_Widget*)e->data)[0];\n    LCUI_Widget input = ((LCUI_Widget*)e->data)[1];\n    \n    TextEdit_GetTextW(input, 0, 255, str);\n    TextView_SetText(text, str);\n}\n\nint main(void)\n{\n    LCUI_Widget root;\n    LCUI_Widget text;\n    LCUI_Widget button;\n    LCUI_Widget input;\n    LCUI_Widget button_data[2];\n\n    LCUI_Init();\n    root = LCUIWidget_GetRoot();\n    text = LCUIWidget_New("textview");\n    input = LCUIWidget_New("textedit");\n    button = LCUIWidget_New("button");\n    button_data[0] = text;\n    button_data[1] = input;\n    TextView_SetTextW(text, L"Hello, World!");\n    TextEdit_SetPlaceholderW(input, L"Please input...");\n    Button_SetTextW(button, "Change");\n    Widget_BindEvent(button, "click", OnButtonClick, button_data, NULL);\n    Widget_Append(root, text);\n    Widget_Append(root, input);\n    Widget_Append(root, button);\n    return LCUI_Main();\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e8b\u4ef6\u5904\u7406\u5668 ",(0,i.jsx)(n.code,{children:"OnButtonClick()"})," \u7684\u5de5\u4f5c\u662f\u4ece TextEdit \u7ec4\u4ef6\u4e2d\u8bfb\u53d6\u7528\u6237\u8f93\u5165\u7684\u5185\u5bb9\u7136\u540e\u5199\u5165\u5230 TextView \u7ec4\u4ef6\u4e2d\uff0c\u4e3a\u4e86\u8ba9\u5b83\u80fd\u591f\u83b7\u5f97 TextView \u548c TextEdit \u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u6211\u4eec\u5728 ",(0,i.jsx)(n.code,{children:"main()"})," \u51fd\u6570\u4e2d\u5b9a\u4e49\u4e86 ",(0,i.jsx)(n.code,{children:"button_data"})," \u6570\u7ec4\u6765\u4fdd\u5b58\u5b83\u4eec\u7684\u5f15\u7528\uff0c\u7136\u540e\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Widget_BindEvent()"})," \u7684\u7b2c\u56db\u4e2a\u53c2\u6570\u5c06\u8be5\u6570\u7ec4\u7ed1\u5b9a\u5230 ",(0,i.jsx)(n.code,{children:"e->data"})," \u6210\u5458\u4ee5\u4f9b\u4e8b\u4ef6\u5904\u7406\u5668\u8bbf\u95ee\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4f7f\u7528\u5c40\u90e8\u53d8\u91cf\u5411\u4e8b\u4ef6\u5904\u7406\u5668\u4f20\u9012\u6570\u636e\u524d\uff0c\u6211\u4eec\u9700\u8981\u6ce8\u610f\u53d8\u91cf\u7684\u751f\u547d\u5468\u671f\uff0c\u4ee5\u907f\u514d\u51fa\u73b0\u5185\u5b58\u8bbf\u95ee\u8d8a\u754c\u7684\u95ee\u9898\u3002\u7531\u4e8e\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"main()"})," \u53d7\u5230 ",(0,i.jsx)(n.code,{children:"LCUI_Main()"})," \u51fd\u6570\u7684\u963b\u585e\uff0c\u5b83\u7684\u5c40\u90e8\u53d8\u91cf\u7684\u751f\u547d\u5468\u671f\u8981\u7b49\u5230 ",(0,i.jsx)(n.code,{children:"LCUI_Main()"})," \u51fd\u6570\u8fd4\u56de\u540e\u624d\u4f1a\u7ed3\u675f\uff0c\u4e5f\u5c31\u662f\u8bf4 ",(0,i.jsx)(n.code,{children:"main()"})," \u51fd\u6570\u7684\u5c40\u90e8\u53d8\u91cf\u5728 LCUI \u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u4e2d\u90fd\u662f\u6709\u6548\u7684\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u8bbe\u7f6e\u6587\u672c\u6837\u5f0f",children:"\u8bbe\u7f6e\u6587\u672c\u6837\u5f0f"}),"\n",(0,i.jsxs)(n.p,{children:["\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u7a0b\u5e8f\u8f93\u51fa\u7684\u6587\u672c\u7684\u5927\u5c0f\u548c\u989c\u8272\u90fd\u662f\u9ed8\u8ba4\u7684\uff0c\u672a\u514d\u6709\u4e9b\u8fc7\u4e8e\u7b80\u964b\uff0c\u6211\u4eec\u53ef\u4ee5\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"Widget_SetStyle()"})," \u51fd\u6570\u5f0f\u5b8f\u5c06\u81ea\u5b9a\u4e49\u6837\u5f0f\u6dfb\u52a0\u5230\u7ec4\u4ef6\u7684 ",(0,i.jsx)(n.code,{children:"custom_style"})," \u6837\u5f0f\u8868\u4e2d\u6765\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u6e32\u67d3\u6548\u679c\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/gui/widget.h>\n#include <LCUI/gui/widget/textview.h>\n#include <LCUI/gui/widget/textedit.h>\n#include <LCUI/gui/widget/button.h>\n\nvoid OnButtonClick(LCUI_Widget self, LCUI_WidgetEvent e, void *arg)\n{\n    wchar_t str[256] = { 0 };\n    LCUI_Widget text = ((LCUI_Widget*)e->data)[0];\n    LCUI_Widget input = ((LCUI_Widget*)e->data)[1];\n    \n    TextEdit_GetTextW(input, 0, 255, str);\n    TextView_SetText(text, str);\n}\n\nint main(void)\n{\n    LCUI_Widget root;\n    LCUI_Widget text;\n    LCUI_Widget button;\n    LCUI_Widget input;\n    LCUI_Color blue = RGB(56, 132, 255);\n    static LCUI_Widget button_data[2];\n\n    LCUI_Init();\n    root = LCUIWidget_GetRoot();\n    text = LCUIWidget_New("textview");\n    input = LCUIWidget_New("textedit");\n    button = LCUIWidget_New("button");\n    button_data[0] = text;\n    button_data[1] = input;\n    Widget_SetStyle(text, key_color, blue, color);\n    Widget_SetStyle(text, key_font_size, 24, px);\n    Widget_SetPadding(text, 16, 16, 16, 16);\n    Widget_SetBorder(text, 1, SV_SOLID, color);\n    TextView_SetTextW(text, L"Hello, World!");\n    TextEdit_SetPlaceholderW(input, L"Please input...");\n    Button_SetTextW(button, "Change");\n    Widget_BindEvent(button, "click", OnButtonClick, button_data, NULL);\n    Widget_Append(root, text);\n    Widget_Append(root, input);\n    Widget_Append(root, button);\n    return LCUI_Main();\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u6bb5\u4ee3\u7801\u5c06\u6587\u672c\u989c\u8272\u548c\u5b57\u4f53\u5927\u5c0f\u5206\u522b\u8bbe\u7f6e\u6210\u4e86\u84dd\u8272\u548c 24px\uff0c\u5e76\u589e\u52a0\u4e86\u8fb9\u6846\u548c\u5185\u95f4\u8ddd\uff0c\u5176\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"Widget_SetPadding()"})," \u548c ",(0,i.jsx)(n.code,{children:"Widget_SetBorder()"})," \u90fd\u662f\u7528\u4e8e\u7b80\u5316\u6837\u5f0f\u4fee\u6539\u64cd\u4f5c\u7684\u8f85\u52a9\u51fd\u6570\uff0c\u800c ",(0,i.jsx)(n.code,{children:"key_"})," \u524d\u7f00\u7684\u6807\u8bc6\u7b26\u5f15\u7528\u7684\u662f ",(0,i.jsx)(n.code,{children:"LCUI_StyleKeyName"})," \u7c7b\u578b\u7684\u679a\u4e3e\u503c\uff0c\u547d\u540d\u4e0e CSS \u5c5e\u6027\u76f8\u540c\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b ",(0,i.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/include/LCUI/gui/css_library.h#L44",children:"css_library.h"})," \u6587\u4ef6\u6765\u4e86\u89e3 LCUI \u652f\u6301\u54ea\u4e9b CSS \u5c5e\u6027\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7528-xml-\u548c-css-\u63cf\u8ff0-ui",children:"\u7528 XML \u548c CSS \u63cf\u8ff0 UI"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u5e94\u7528\u7a0b\u5e8f\u7684\u754c\u9762\u53d8\u5f97\u590d\u6742\u540e\uff0c\u6df7\u5408\u7740\u754c\u9762\u5e03\u5c40\u548c\u6837\u5f0f\u4ee5\u53ca\u4ea4\u4e92\u903b\u8f91\u7684\u4ee3\u7801\u4e5f\u4f1a\u53d8\u5f97\u96be\u4ee5\u7406\u89e3\u548c\u7ef4\u62a4\uff0c\u9762\u5bf9\u6ee1\u5c4f\u7684 ",(0,i.jsx)(n.code,{children:"Widget_"})," \u51fd\u6570\u8c03\u7528\u548c\u8d4b\u503c\u8bed\u53e5\uff0c\u6211\u4eec\u8be5\u5982\u4f55\u5feb\u901f\u627e\u5230\u9700\u8981\u4fee\u6539\u7684\u6837\u5f0f\uff0c\u53c8\u8be5\u5982\u4f55\u5feb\u901f\u8c03\u6574\u754c\u9762\u7684\u5e03\u5c40\u7ed3\u6784\uff1f"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 XML \u548c CSS \u4ee3\u66ff C \u4ee3\u7801\u6765\u63cf\u8ff0\u754c\u9762\u7684\u7ed3\u6784\u548c\u6837\u5f0f\uff0c\u5bf9\u4e0a\u4e2a\u7a0b\u5e8f\u7684\u4ee3\u7801\u8fdb\u884c\u6539\u5199\u540e\u53ef\u5f97\u5230\u8fd9\u4e09\u4e2a\u6587\u4ef6\uff1a"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"main.css"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"textview {\n    color: #3884ff;\n    font-size: 24px;\n    padding: 16px;\n    border: 2px solid #3884ff;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"main.xml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markup",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<lcui-app>\n  <resource type="text/css" src="main.css"/>\n  <ui>\n    <textview id="text" type="textview">\n      Hello, World!\n    </textview>\n    <textedit id="input" placeholder="Please input..."></textedit>\n    <button id="button">Change</button>\n  </ui>\n</lcui-app>\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"main.c"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/gui/builder.h>\n#include <LCUI/gui/widget.h>\n\nvoid OnButtonClick(LCUI_Widget self, LCUI_WidgetEvent e, void *arg)\n{\n    wchar_t str[256] = { 0 };\n    text = LCUIWidget_GetById("text");\n    input = LCUIWidget_GetById("input");\n    \n    TextEdit_GetTextW(input, 0, 255, str);\n    TextView_SetText(text, str);\n}\n\nint main(void)\n{\n    LCUI_Widget root;\n    LCUI_Widget pack;\n    LCUI_Widget button;\n\n    LCUI_Init();\n    pack = LCUIBuilder_LoadFile("main.xml");\n    if (!pack) {\n        return -1;\n    }\n    Widget_Append(root, pack);\n    Widget_Unwrap(pack);\n    root = LCUIWidget_GetRoot();\n    button = LCUIWidget_GetById("button");\n    Widget_BindEvent(button, "click", OnButtonClick, NULL, NULL);\n    return LCUI_Main();\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u7ecf\u8fc7\u6539\u5199\u540e\u7684",(0,i.jsx)(n.code,{children:"main.c"})," \u53ea\u4fdd\u7559\u4e86\u5904\u7406\u754c\u9762\u4ea4\u4e92\u903b\u8f91\u7684\u4ee3\u7801\uff0c\u901a\u8fc7\u5bf9\u6bd4\u6539\u5199\u524d\u7684 C \u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u51fa CSS \u548c XML \u80fd\u4ee5\u66f4\u5c11\u91cf\u7684\u4ee3\u7801\u8868\u8fbe\u66f4\u591a\u7684\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"main.c"})," \u6587\u4ef6\u4e2d\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"LCUIBuilder_LoadFile()"})," \u51fd\u6570\u52a0\u8f7d ",(0,i.jsx)(n.code,{children:"main.xml"})," \u6587\u4ef6\u5185\u5bb9\u5e76\u6784\u5efa\u6210\u7ec4\u4ef6\u6811\uff0c\u7531\u4e8e\u8fd9\u9897\u7ec4\u4ef6\u6811\u7684\u6839\u8282\u70b9\u662f\u4e2a\u53ea\u7528\u4e8e\u5305\u88c5\u5b50\u7ec4\u4ef6\u7684\u5bb9\u5668\u7ec4\u4ef6\uff0c\u6211\u4eec\u9700\u8981\u5148\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"Widget_Append()"})," \u51fd\u6570\u5c06\u5b83\u8ffd\u52a0\u5230\u6839\u7ec4\u4ef6\u91cc\u7136\u540e\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"Widget_Unwrap()"})," \u51fd\u6570\u79fb\u9664\u5305\u88c5\u7ec4\u4ef6\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4ee5\u58f0\u660e\u5f0f\u7f16\u5199-ui",children:"\u4ee5\u58f0\u660e\u5f0f\u7f16\u5199 UI"}),"\n",(0,i.jsx)(n.p,{children:" \u4f7f\u7528 XML \u548c CSS \u6765\u63cf\u8ff0 UI \u4ee5\u8fbe\u5230\u7ed3\u6784\u3001\u8868\u73b0\u548c\u884c\u4e3a\u76f8\u5206\u79bb\u7684\u76ee\u7684\uff0c\u8fd9\u79cd\u505a\u6cd5\u548c\u4f7f\u7528 HTML + CSS + JavaScript \u5f00\u53d1\u7f51\u9875\u4e00\u6837\uff0c\u662f\u6570\u5341\u5e74\u524d\u5c31\u6709\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u7b97\u4e0d\u4e0a\u6709\u591a\u5148\u8fdb\uff0cLCUI \u7684\u5b58\u5728\u76ee\u7684\u5982\u679c\u53ea\u662f\u4e3a\u4e86\u6a21\u4eff\u6d4f\u89c8\u5668\u7684\u8bdd\u90a3\u4e5f\u6ca1\u4ec0\u4e48\u610f\u4e49\uff0c\u76ee\u524d LCUI \u5728\u65b0\u7684 UI \u5f00\u53d1\u65b9\u5f0f\u7684\u63a2\u7d22\u548c\u5b9e\u8df5\u6210\u679c\u4e2d\uff0c\u80fd\u503c\u5f97\u4e00\u63d0\u7684\u662f\u5b9e\u9a8c\u6027\u7684\u7f16\u7a0b\u8bed\u8a00 \u2014\u2014Trad\uff0c\u6211\u4eec\u5728\u7528 C \u8bed\u8a00\u5f00\u53d1 UI \u65f6\u6216\u8bb8\u5df2\u7ecf\u610f\u8bc6\u5230\u4e00\u4e9b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9e\u73b0\u5f02\u6b65\u64cd\u4f5c\u65f6\uff0c\u8981\u5199\u4e00\u4e9b\u590d\u6742\u7684\u4ee3\u7801\u89e3\u51b3\u4f20\u53c2\u548c\u540c\u6b65\u95ee\u9898"}),"\n",(0,i.jsx)(n.li,{children:"\u9879\u76ee\u7684\u6e90\u7801\u6587\u4ef6\u591a\u4e86\u540e\uff0c\u9700\u8981\u82b1\u65f6\u95f4\u7ef4\u62a4 Makefile \u548c\u6784\u5efa\u811a\u672c"}),"\n",(0,i.jsx)(n.li,{children:"\u7528 C \u8bed\u8a00\u4ee5\u9762\u5411\u5bf9\u8c61\u65b9\u5f0f\u7f16\u7a0b\u7684\u4f53\u9a8c\u8f83\u5dee"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Trad \u8bed\u8a00\u8bde\u751f\u7684\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u9996\u5148\u6211\u4eec\u770b\u770b\u4e0a\u9762\u7684\u793a\u4f8b\u5e94\u7528\u662f\u5982\u4f55\u4ee5 Trad \u8bed\u8a00\u8868\u8fbe\u7684\uff1a "}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import {\n  App,\n  Widget,\n  Button,\n  TextView,\n  TextEdit\n} from 'lcui';\nimport './main.css';\n\nclass MyApp extends App {\n  constructor() {\n    super();\n\n    this.state = {\n      text: 'Hello, World!',\n      input: ''\n    };\n  }\n\n  template() {\n    return (\n      <Widget>\n        <TextView>{this.state.text}!</TextView>\n        <Widget class=\"form-control\">\n          <TextEdit\n            ref=\"input\"\n            value={this.state.input}\n            placeholder=\"Please input...\"\n          />\n          <Button onClick={this.onBtnChangeClick}>Change</Button>\n        </Widget>\n      </Widget>\n    );\n  }\n\n  onBtnChangeClick() {\n    this.state.text = this.refs.input.value.toString();\n  }\n}\n\nexport function main() {\n  const app = new MyApp();\n\n  return app.run();\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Trad \u8bed\u8a00\u4e2d\uff0cLCUI \u5e94\u7528\u7684 UI \u7f16\u5199\u65b9\u5f0f\u53c2\u8003\u4e86 ",(0,i.jsx)(n.a,{href:"https://reactjs.org",children:"React"}),"\uff0c\u4e0d\u518d\u662f\u91c7\u7528\u5c06\u6807\u8bb0\u4e0e\u903b\u8f91\u5206\u79bb\u5230\u4e0d\u540c\u6587\u4ef6\u8fd9\u79cd\u4eba\u4e3a\u5730\u5206\u79bb\u65b9\u5f0f\uff0c\u800c\u662f\u901a\u8fc7\u5c06\u4e8c\u8005\u5171\u540c\u5b58\u653e\u5728\u4e00\u4e2a\u677e\u6563\u8026\u5408\u5355\u5143\u4e4b\u4e2d\uff0c\u6765\u5b9e\u73b0",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Separation_of_concerns",children:"\u5173\u6ce8\u70b9\u5206\u79bb"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u7f16\u8bd1\u5b83\uff0c\u6211\u4eec\u9700\u8981\u4e0b\u8f7d\u5b89\u88c5 Trad \u8bed\u8a00\u7684\u7f16\u8bd1\u5668\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install tradlang\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\uff0c\u4f7f\u7528 tradc \u547d\u4ee4\u5c06 trad \u8bed\u8a00\u4ee3\u7801\u7f16\u8bd1\u4e3a C \u4ee3\u7801\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"tradc main.jsx\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e4b\u540e\u4f7f\u7528 C \u7684\u7f16\u8bd1\u5668\u5c06\u5b83\u7f16\u8bd1\u4e3a\u53ef\u6267\u884c\u6587\u4ef6\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"gcc -o main main.jsx.c -lLCUI\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Trad \u7684\u4ee3\u7801\u5e93\u7684 ",(0,i.jsx)(n.a,{href:"https://github.com/lc-soft/trad/tree/master/example",children:"example"})," \u76ee\u5f55\u4e2d\u8fd8\u6709\u53e6\u4e00\u4e2a\u793a\u4f8b\u53ef\u4f9b\u4f53\u9a8c\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5f85\u529e\u4e8b\u9879",children:"\u5f85\u529e\u4e8b\u9879"}),"\n",(0,i.jsx)(n.h4,{id:"\u53d6\u4e00\u4e2a\u65b0\u540d\u5b57",children:"\u53d6\u4e00\u4e2a\u65b0\u540d\u5b57"}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\u7684\u540d\u5b57\u662f\u5f53\u521d\u4f5c\u8005\u4e00\u65f6\u60f3\u4e0d\u51fa\u5408\u9002\u7684\u540d\u5b57\u800c\u4e34\u65f6\u53d6\u7684\uff0c\u56db\u4e2a\u5b57\u6bcd\u8bfb\u8d77\u6765\u6ca1\u5355\u8bcd\u987a\u53e3\uff0c\u800c\u4e14\u5168\u5927\u5199\u7684\u56db\u4e2a\u5b57\u6bcd\u5728\u4ee3\u7801\u4e2d\u770b\u8d77\u6765\u4e5f\u4e0d\u592a\u7f8e\u89c2\u3002\u65b0\u7684\u540d\u5b57\u9664\u4e86\u89e3\u51b3\u8fd9\u4e24\u4e2a\u95ee\u9898\u5916\uff0c\u8fd8\u5e94\u8be5\u5177\u5907\u8fd9\u51e0\u4e2a\u7279\u70b9\uff1a\u65e0\u6b67\u4e49\u3001\u957f\u5ea6\u77ed\u3001\u53ef\u7f29\u5199\u4e3a\u4e24\u4e2a\u5b57\u6bcd\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u4e3a-lcui-cli-\u6dfb\u52a0-xml-\u7f16\u8bd1\u5668",children:"\u4e3a LCUI CLI \u6dfb\u52a0 XML \u7f16\u8bd1\u5668"}),"\n",(0,i.jsx)(n.p,{children:"LCUI \u7684 xml \u6587\u4ef6\u89e3\u6790\u529f\u80fd\u662f\u7531 libxml \u5e93\u63d0\u4f9b\u652f\u6301\u7684\uff0c\u4e3a\u4e86\u7f29\u51cf LCUI \u7684\u5e93\u6587\u4ef6\u4f53\u79ef\u3001\u63d0\u5347\u7528\u6237\u754c\u9762\u7684\u52a0\u8f7d\u901f\u5ea6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u7f16\u8bd1\u9636\u6bb5\u5c06 xml \u6587\u4ef6\u9884\u5148\u8f6c\u6362\u4e3a C \u4ee3\u7801\u6765\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u4e3a-lcui-cli-\u6dfb\u52a0-css-\u7f16\u8bd1\u5668",children:"\u4e3a LCUI CLI \u6dfb\u52a0 CSS \u7f16\u8bd1\u5668"}),"\n",(0,i.jsxs)(n.p,{children:["\u96c6\u6210 SASS \u9884\u5904\u7406\u5668\uff0c\u652f\u6301\u5bf9\u591a\u4e2a scss \u6216 css \u6587\u4ef6\u8fdb\u884c\u5904\u7406\u3001\u5408\u5e76\u548c\u7f16\u8bd1\uff0c\u5176\u4e2d\u7684\u7f16\u8bd1\u53ea\u662f\u7b80\u5355\u7684\u5c06\u5904\u7406\u540e\u7684\u7ed3\u679c\u8f6c\u6362\u6210 C \u4e2d\u7684\u5b57\u7b26\u4e32\u4ee3\u7801\uff0c\u65e0\u9700\u751f\u6210 ",(0,i.jsx)(n.code,{children:"LCUI_StyleSheet"})," \u5bf9\u8c61\u7684\u6784\u9020\u4ee3\u7801\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u652f\u6301\u7f16\u8bd1\u4e3a  WebAssembly \u5e76\u5728\u6d4f\u89c8\u5668\u7aef\u8fd0\u884c"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be6\u89c1 ",(0,i.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/issues/207",children:"#207"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u91cd\u5199 Trad \u7684\u7f16\u8bd1\u5668"})}),"\n",(0,i.jsxs)(n.p,{children:[" Trad \u7684\u7f16\u8bd1\u5668\u7684\u8bed\u6cd5\u6811\u548c\u751f\u6210\u5668\u7684\u5b9e\u73b0\u4ee3\u7801\u662f\u6df7\u5728\u4e00\u8d77\u7684\uff0c\u4ee3\u7801\u4e2d\u5927\u91cf\u4f7f\u7528\u4e86 class \u7ee7\u627f\u7279\u6027\uff0c\u5bfc\u81f4\u529f\u80fd\u6a21\u5757\u95f4\u7684\u8026\u5408\u5ea6\u8f83\u9ad8\uff0c\u6dfb\u52a0\u65b0\u8bed\u6cd5\u89e3\u6790\u652f\u6301\u7684\u96be\u5ea6\u8f83\u5927\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://github.com/babel/babel/tree/master/packages",children:"babel"})," \u7f16\u8bd1\u5668\u7684\u505a\u6cd5\uff0c\u5c06\u4ee3\u7801\u5212\u5206\u4e3a\u8bed\u6cd5\u6811\uff08AST\uff09\u3001\u89e3\u6790\u5668\uff08Parser\uff09\u3001\u751f\u6210\u5668\uff08Generator\uff09\u3002 \u5bf9\u4e8e\u8bed\u6cd5\u6811\u7684\u4ee3\u7801\u5212\u5206\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://github.com/babel/babel/tree/master/packages/babel-types",children:"babel-types"})," \u548c ",(0,i.jsx)(n.a,{href:"https://github.com/babel/babel/tree/master/packages/babel-traverse",children:"babel-traverse"}),"\uff0c\u524d\u8005\u7528\u4e8e\u8bed\u6cd5\u6811\u7ed3\u70b9\u7684\u5de5\u5177\u5e93\uff0c\u540e\u8005\u7528\u4e8e\u7ef4\u62a4\u6574\u68f5\u6811\u7684\u72b6\u6001\uff0c\u5305\u62ec\u66ff\u6362\u3001\u79fb\u9664\u548c\u6dfb\u52a0\u7ed3\u70b9\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[" ",(0,i.jsx)(n.strong,{children:"\u5236\u5b9a Trad \u7684\u8bed\u8a00\u89c4\u8303\u6587\u6863"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u6587\u6863\u7684\u5185\u5bb9\u7ec4\u7ec7\u65b9\u5f0f\u53ef\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript/blob/master/doc/spec-ARCHIVED.md",children:"TypeScript \u7684\u8bed\u8a00\u89c4\u8303\u6587\u6863"}),"\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const d={},c=i.createContext(d);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);