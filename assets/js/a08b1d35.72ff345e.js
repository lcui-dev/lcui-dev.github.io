"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3882],{3905:(t,e,l)=>{l.d(e,{Zo:()=>c,kt:()=>k});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function i(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function r(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?i(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function s(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var p=n.createContext({}),o=function(t){var e=n.useContext(p),l=e;return t&&(l="function"==typeof t?t(e):r(r({},e),t)),l},c=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=o(l),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return l?n.createElement(k,r(r({ref:e},c),{},{components:l})):n.createElement(k,r({ref:e},c))}));function k(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=l.length,r=new Array(i);r[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:a,r[1]=s;for(var o=2;o<i;o++)r[o]=l[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},5798:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=l(7462),a=(l(7294),l(3905));const i={},r="\u521b\u5efa\u754c\u9762",s={unversionedId:"tutorials/todolist/create-ui",id:"tutorials/todolist/create-ui",title:"\u521b\u5efa\u754c\u9762",description:"\u754c\u9762\u7531\u90e8\u4ef6\u7ec4\u6210\uff0c\u90e8\u4ef6\u5f7c\u6b64\u4e4b\u95f4\u90fd\u6709\u5173\u7cfb\uff0c\u8fd9\u4e9b\u5173\u7cfb\u5982\u540c\u4e00\u9897\u6811\u3002\u5728\u5b9e\u9645\u7f16\u7a0b\u4e2d\uff0c\u8fd9\u4e9b\u90e8\u4ef6\u7684\u5b58\u50a8\u65b9\u5f0f\u4e5f\u662f\u6811\u5f62\u7ed3\u6784\u3002\u90a3\u4e48\uff0c\u521b\u5efa\u754c\u9762\u5c31\u662f\u5c06\u9700\u8981\u5c55\u793a\u7684\u5143\u7d20\u7ec4\u7ec7\u6210\u6811\u5f62\u7ed3\u6784\u7136\u540e\u7528\u7279\u5b9a\u7684\u8bed\u8a00\u63cf\u8ff0\u51fa\u6765\u3002",source:"@site/docs/tutorials/01-todolist/05-create-ui.md",sourceDirName:"tutorials/01-todolist",slug:"/tutorials/todolist/create-ui",permalink:"/docs/next/tutorials/todolist/create-ui",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorials/01-todolist/05-create-ui.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u9879\u76ee",permalink:"/docs/next/tutorials/todolist/create-project"},next:{title:"\u6dfb\u52a0\u6837\u5f0f",permalink:"/docs/next/tutorials/todolist/add-style"}},p={},o=[{value:"\u4e3b\u754c\u9762",id:"\u4e3b\u754c\u9762",level:2},{value:"\u5934\u90e8",id:"\u5934\u90e8",level:2},{value:"\u6807\u9898",id:"\u6807\u9898",level:2},{value:"\u5de5\u5177\u533a",id:"\u5de5\u5177\u533a",level:2},{value:"\u4efb\u52a1\u6570",id:"\u4efb\u52a1\u6570",level:2},{value:"\u7b5b\u9009\u6309\u94ae\u7ec4",id:"\u7b5b\u9009\u6309\u94ae\u7ec4",level:2},{value:"\u8f93\u5165\u6846",id:"\u8f93\u5165\u6846",level:2},{value:"\u4efb\u52a1\u5217\u8868",id:"\u4efb\u52a1\u5217\u8868",level:2}],c={toc:o},u="wrapper";function d(t){let{components:e,...l}=t;return(0,a.kt)(u,(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u521b\u5efa\u754c\u9762"},"\u521b\u5efa\u754c\u9762"),(0,a.kt)("p",null,"\u754c\u9762\u7531\u90e8\u4ef6\u7ec4\u6210\uff0c\u90e8\u4ef6\u5f7c\u6b64\u4e4b\u95f4\u90fd\u6709\u5173\u7cfb\uff0c\u8fd9\u4e9b\u5173\u7cfb\u5982\u540c\u4e00\u9897\u6811\u3002\u5728\u5b9e\u9645\u7f16\u7a0b\u4e2d\uff0c\u8fd9\u4e9b\u90e8\u4ef6\u7684\u5b58\u50a8\u65b9\u5f0f\u4e5f\u662f\u6811\u5f62\u7ed3\u6784\u3002\u90a3\u4e48\uff0c\u521b\u5efa\u754c\u9762\u5c31\u662f\u5c06\u9700\u8981\u5c55\u793a\u7684\u5143\u7d20\u7ec4\u7ec7\u6210\u6811\u5f62\u7ed3\u6784\u7136\u540e\u7528\u7279\u5b9a\u7684\u8bed\u8a00\u63cf\u8ff0\u51fa\u6765\u3002"),(0,a.kt)("p",null,"LCUI \u652f\u6301\u4f7f\u7528 XML \u6807\u8bb0\u8bed\u8a00\u63cf\u8ff0\u754c\u9762\uff0c\u76f8\u6bd4\u7528 C \u8bed\u8a00\u8fd9\u79cd\u7f16\u7a0b\u8bed\u8a00\u521b\u5efa\u754c\u9762\uff0c\u65e0\u8bba\u662f\u7f16\u5199\u8fd8\u662f\u9605\u8bfb\u90fd\u66f4\u7b80\u5355\u3002LCUI \u5bf9 XML \u5185\u5bb9\u7684\u8981\u6c42\u662f\u7b2c\u4e00\u884c\u5fc5\u987b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},'<?xml version="1.0" encoding="UTF-8" ?>'),"\uff0c\u6700\u5916\u5c42\u5fc5\u987b\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"<lcui-app>")," \u6807\u7b7e\uff0c\u754c\u9762\u76f8\u5173\u90e8\u4ef6\u7684\u6807\u7b7e\u5fc5\u987b\u5199\u5728\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ui>")," \u6807\u7b7e\u5185\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5728 app \u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"todolist.xml")," \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=app/todolist.xml",title:"app/todolist.xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<lcui-app>\n  <ui>\n  </ui>\n</lcui-app>\n')),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u5728 src \u76ee\u5f55\u5185\u65b0\u5efa main.c \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/main.c",title:"src/main.c"},'#include <LCUI.h>\n#include <LCUI/main.h>\n\nint main(int argc, char **argv)\n{\n        ui_widget_t *pack;\n\n        lcui_init();\n        pack = ui_load_xml_file("todolist.xml");\n        if (!pack) {\n                return -1;\n        }\n        ui_root_append(pack);\n        ui_widget_unwrap(pack);\n        ui_widget_set_title(ui_root(), L"Todo list");\n        return lcui_main();\n}\n')),(0,a.kt)("p",null,"\u7b2c\u4e00\u884c\u5305\u542b LCUI \u7684\u5934\u6587\u4ef6\u3002\u7b2c\u4e8c\u884c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"LCUI/main.h")," \u63d0\u4f9b\u4e86\u8de8\u5e73\u53f0\u7684\u5165\u53e3\u51fd\u6570\u5b9e\u73b0\u4ee3\u7801\uff0c\u8ba9 main \u51fd\u6570\u59cb\u7ec8\u7a0b\u5e8f\u7684\u5165\u53e3\u3002"),(0,a.kt)("p",null,"\u5728 main \u51fd\u6570\u4e2d\uff0c\u5148\u662f\u521d\u59cb\u5316\u4e86 LCUI\uff0c\u8ba9 LCUI \u7684\u5404\u9879\u529f\u80fd\u51c6\u5907\u5de5\u4f5c\u3002\u7136\u540e\u52a0\u8f7d xml \u6587\u4ef6\uff0c\u5bf9\u52a0\u8f7d\u7ed3\u679c\u505a\u5224\u65ad\uff0c\u65e0\u6548\u65f6\u8fd4\u56de -1\u3002\u4e4b\u540e\u5c06\u52a0\u8f7d\u7684\u90e8\u4ef6\u8ffd\u52a0\u5230\u6839\u90e8\u4ef6\uff0c\u7531\u4e8e\u8be5\u90e8\u4ef6\u4ec5\u5145\u5f53\u5bb9\u5668\uff0c\u5176\u5185\u90e8\u7684\u5b50\u90e8\u4ef6\u624d\u662f\u6211\u4eec\u9700\u8981\u7684\uff0c\u8fd8\u9700\u8981\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ui_widget_unwrap()")," \u5c55\u5f00\u8be5\u5bb9\u5668\u90e8\u4ef6\u4ee5\u5c06\u5176\u5185\u90e8\u7684\u5b50\u90e8\u4ef6\u8ffd\u52a0\u5230\u6839\u90e8\u4ef6\u5185\u3002\u63a5\u7740\u8bbe\u7f6e\u6839\u90e8\u4ef6\u7684\u6807\u9898\uff0c\u8be5\u6807\u9898\u4f1a\u540c\u6b65\u5230\u4e3b\u7a97\u53e3\u4e0a\u3002\u6700\u540e\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"lcui_main()")," \u8fd0\u884c\u4e3b\u5faa\u73af\uff0c\u8ba9\u7a0b\u5e8f\u8fdb\u5165\u6301\u7eed\u5de5\u4f5c\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u7ed3\u5408\u4e4b\u524d\u5206\u6790\u7684\u754c\u9762\u9700\u6c42\uff0c\u754c\u9762\u4e2d\u7684\u6240\u6709\u5143\u7d20\u53ef\u88ab\u7ec4\u7ec7\u6210\u4ee5\u4e0b\u6811\u5f62\u7ed3\u6784\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u754c\u9762",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6807\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u4e09\u4e2a\u72b6\u6001\u7b5b\u9009\u6309\u94ae"),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6846"),(0,a.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u5217\u8868")))),(0,a.kt)("p",null,"\u770b\u4e0a\u53bb\u975e\u5e38\u7b80\u5355\uff0c\u4f3c\u4e4e\u5269\u4e0b\u7684\u5de5\u4f5c\u5c31\u662f\u5c06\u5b83\u8f6c\u6362\u6210 XML \u4ee3\u7801\u3002\u7136\u800c\u6839\u636e\u5b9e\u9645\u7684\u5e03\u5c40\u9700\u6c42\u3001\u4ea4\u4e92\u9700\u6c42\u4ee5\u53ca\u7f16\u7a0b\u4fbf\u5229\u6027\u4e0a\u7684\u8003\u8651\uff0c\u8fd9\u4e2a\u6811\u5f62\u7ed3\u6784\u8fd8\u9700\u8981\u8c03\u6574\u3002\u63a5\u4e0b\u6765\u5c06\u4f1a\u8bb2\u8ff0\u5982\u4f55\u8c03\u6574\u6811\u5f62\u7ed3\u6784\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u6807\u7b7e\u63cf\u8ff0\u6bcf\u4e2a\u754c\u9762\u5143\u7d20\u3002"),(0,a.kt)("h2",{id:"\u4e3b\u754c\u9762"},"\u4e3b\u754c\u9762"),(0,a.kt)("p",null,"\u4e3b\u754c\u9762\u662f\u6700\u5916\u5c42\u7684\u5bb9\u5668\uff0c\u5305\u542b\u6574\u4e2a\u754c\u9762\u7684\u6240\u6709\u90e8\u4ef6\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ui>")," \u6807\u7b7e\u5185\u6dfb\u52a0\u90e8\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=app/todolist.xml",title:"app/todolist.xml"},'  <?xml version="1.0" encoding="UTF-8" ?>\n  <lcui-app>\n    <ui>\n+     <w class="app"></w>\n    </ui>\n  </lcui-app>\n')),(0,a.kt)("p",null,"w \u662f\u90e8\u4ef6 widget \u7684\u7b80\u5199\u522b\u540d\uff0c\u6307\u5b9a\u7684 class \u5c5e\u6027\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," \u662f\u7528\u6765\u4e3a\u8be5\u90e8\u4ef6\u6dfb\u52a0\u6837\u5f0f\u7684\u6807\u8bc6\u7b26\u3002"),(0,a.kt)("h2",{id:"\u5934\u90e8"},"\u5934\u90e8"),(0,a.kt)("p",null,"\u5934\u90e8\u5305\u542b\u6807\u9898\u3001\u4efb\u52a1\u6570\u3001\u7b5b\u9009\u6309\u94ae\uff0c\u5b83\u5b58\u5728\u7684\u610f\u4e49\u5728\u4e8e\u5e03\u5c40\uff0c\u4f7f\u5176\u5185\u90e8\u7684\u90e8\u4ef6\u4e0e\u8fb9\u754c\u95f4\u8ddd\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u5728\u4e3b\u754c\u9762\u5185\u6dfb\u52a0\u90e8\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=app/todolist.xml",title:"app/todolist.xml"},'  <?xml version="1.0" encoding="UTF-8" ?>\n  <lcui-app>\n    <ui>\n-     <w class="app"></w>\n+     <w class="app">\n+       <w class="header"></w>\n+     </w>\n    </ui>\n  </lcui-app>\n')),(0,a.kt)("h2",{id:"\u6807\u9898"},"\u6807\u9898"),(0,a.kt)("p",null,"\u5728\u5934\u90e8\u6dfb\u52a0\u90e8\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=app/todolist.xml",title:"app/todolist.xml"},'  <?xml version="1.0" encoding="UTF-8" ?>\n  <lcui-app>\n    <ui>\n      <w class="app">\n        <w class="header">\n+         <text id="title" class="title" />\n        </w>\n      </w>\n    </ui>\n  </lcui-app>\n')),(0,a.kt)("p",null,"\u6807\u9898\u5185\u5bb9\u662f\u5f53\u524d\u65e5\u671f\uff0c\u9700\u8981\u5728\u8fd0\u884c\u65f6\u6267\u884c\u76f8\u5173\u4ee3\u7801\u6765\u751f\u6210\uff0c\u56e0\u6b64\u8bbe\u7f6e id \u5c5e\u6027\u4ee5\u4fbf\u4e8e\u76f4\u63a5\u64cd\u4f5c\u5b83\u3002\u53c8\u7531\u4e8e\u5b83\u5c5e\u4e8e\u6587\u672c\u5185\u5bb9\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<text>")," \u6807\u7b7e\u6765\u663e\u793a\u6587\u672c\u3002"),(0,a.kt)("h2",{id:"\u5de5\u5177\u533a"},"\u5de5\u5177\u533a"),(0,a.kt)("p",null,"\u5de5\u5177\u533a\u5305\u542b\u4efb\u52a1\u6570\u548c\u7b5b\u9009\u6309\u94ae\uff0c\u7528\u4e8e\u5b9e\u73b0\u5c06\u5b83\u4eec\u4e24\u7aef\u5bf9\u9f50\u7684\u5e03\u5c40\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=app/todolist.xml",title:"app/todolist.xml"},'  <?xml version="1.0" encoding="UTF-8" ?>\n  <lcui-app>\n    <ui>\n      <w class="app">\n        <w class="header">\n          <text id="title" class="title" />\n+         <w class="tools"></w>\n        </w>\n      </w>\n    </ui>\n  </lcui-app>\n')),(0,a.kt)("h2",{id:"\u4efb\u52a1\u6570"},"\u4efb\u52a1\u6570"),(0,a.kt)("p",null,"\u4e0e\u6807\u9898\u7c7b\u4f3c\uff0c\u5b83\u9700\u8981\u5728\u8fd0\u884c\u65f6\u6839\u636e\u4efb\u52a1\u5217\u8868\u957f\u5ea6\u66f4\u65b0\u5185\u5bb9\uff0c\u90a3\u4e48\u5199\u6cd5\u4e5f\u662f\u7c7b\u4f3c\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=app/todolist.xml",title:"app/todolist.xml"},'  <?xml version="1.0" encoding="UTF-8" ?>\n  <lcui-app>\n    <ui>\n      <w class="app">\n        <w class="header">\n          <text id="title" class="title" />\n-         <w class="tools"></w>\n+         <w class="tools">\n+           <text id="count" class="count" />\n+         </w>\n        </w>\n      </w>\n    </ui>\n  </lcui-app>\n')),(0,a.kt)("h2",{id:"\u7b5b\u9009\u6309\u94ae\u7ec4"},"\u7b5b\u9009\u6309\u94ae\u7ec4"),(0,a.kt)("p",null,"\u7b5b\u9009\u6309\u94ae\u7ec4\u5305\u542b All\u3001Active\u3001Completed \u8fd9\u4e09\u4e2a\u6309\u94ae\uff0c\u5b83\u7684\u4f5c\u7528\u9664\u4e86\u5e03\u5c40\u5916\uff0c\u8fd8\u7528\u4e8e\u4e8b\u4ef6\u4ee3\u7406\u548c\u7b5b\u9009\u6309\u94ae\u7684\u64cd\u4f5c\uff0c\u56e0\u6b64\uff0c\u4e3a\u5176\u8bbe\u7f6e id \u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5728\u54cd\u5e94\u70b9\u51fb\u4e8b\u4ef6\u65f6\u786e\u5b9a\u5e94\u8be5\u5207\u6362\u5230\u54ea\u4e2a\u72b6\u6001\uff0c\u6bcf\u4e2a\u7b5b\u9009\u6309\u94ae\u90fd\u6709\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"data-value")," \u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"data-")," \u524d\u7f00\u53ea\u662f\u6807\u8bc6\u5b83\u5c5e\u4e8e\u9644\u52a0\u7684\u6570\u636e\uff0c\u5e76\u6ca1\u6709\u5176\u5b83\u7279\u6b8a\u4f5c\u7528\uff0c\u4f60\u4e5f\u53ef\u4ee5\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=app/todolist.xml",title:"app/todolist.xml"},'  <?xml version="1.0" encoding="UTF-8" ?>\n  <lcui-app>\n    <ui>\n      <w class="app">\n        <w class="header">\n          <text id="title" class="title" />\n          <w class="tools">\n            <text id="count" class="count" />\n+           <w id="filters" class="task-filters">\n+             <text class="task-filter" data-value="all">All</text>\n+             <text class="task-filter" data-value="active">Active</text>\n+             <text class="task-filter" data-value="completed">Completed</text>\n+           </w>\n          </w>\n        </w>\n      </w>\n    </ui>\n  </lcui-app>\n')),(0,a.kt)("h2",{id:"\u8f93\u5165\u6846"},"\u8f93\u5165\u6846"),(0,a.kt)("p",null,"TextEdit \u90e8\u4ef6\u63d0\u4f9b\u4e86\u6587\u672c\u8f93\u5165\u80fd\u529b\uff0c\u4e3a\u4e86\u80fd\u591f\u83b7\u53d6\u5b83\u4fdd\u5b58\u7684\u6587\u672c\u5185\u5bb9\uff0c\u9700\u8981\u4e3a\u5176\u8bbe\u7f6e id \u5c5e\u6027\u3002\u6587\u672c\u6846\u5728\u65e0\u5185\u5bb9\u7684\u65f6\u5019\u9700\u8981\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"Add a new task...")," \u6587\u672c\uff0c\u8fd9\u4e2a\u53ef\u4ee5\u9760 ",(0,a.kt)("inlineCode",{parentName:"p"},"placeholder")," \u5c5e\u6027\u5b9e\u73b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=app/todolist.xml",title:"app/todolist.xml"},'  <?xml version="1.0" encoding="UTF-8" ?>\n  <lcui-app>\n    <ui>\n      <w class="app">\n        <w class="header">\n          <text class="title">Todo list</text>\n          <w class="tools">\n            <text id="count" class="count" />\n            <w id="filters" class="task-filters">\n              <text class="task-filter" data-value="all">All</text>\n              <text class="task-filter" data-value="active">Active</text>\n              <text class="task-filter" data-value="completed">Completed</text>\n            </w>\n          </w>\n        </w>\n+       <textedit id="input" class="task-input" placeholder="Add a new task..." />\n      </w>\n    </ui>\n  </lcui-app>\n')),(0,a.kt)("h2",{id:"\u4efb\u52a1\u5217\u8868"},"\u4efb\u52a1\u5217\u8868"),(0,a.kt)("p",null,"\u4efb\u52a1\u5217\u8868\u662f\u5728\u8fd0\u884c\u65f6\u521b\u5efa\u7684\uff0c\u56e0\u6b64 XML \u4e2d\u53ea\u58f0\u660e\u7528\u4e8e\u5bb9\u7eb3\u6240\u6709\u4efb\u52a1\u7684\u5bb9\u5668\u5e03\u5c40\uff0c\u6307\u5b9a id \u5c5e\u6027\u662f\u4fbf\u4e8e\u64cd\u4f5c\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=app/todolist.xml",title:"app/todolist.xml"},'  <?xml version="1.0" encoding="UTF-8" ?>\n  <lcui-app>\n    <ui>\n      <w class="app">\n        <w class="header">\n          <text class="title">Todo list</text>\n          <w class="tools">\n            <text id="count" class="count" />\n            <w id="filters" class="task-filters">\n              <text class="task-filter" data-value="all">All</text>\n              <text class="task-filter" data-value="active">Active</text>\n              <text class="task-filter" data-value="completed">Completed</text>\n            </w>\n          </w>\n        </w>\n        <textedit id="input" class="task-input" placeholder="Add a new task..." />\n+       <w id="list" class="task-list" />\n      </w>\n    </ui>\n  </lcui-app>\n')))}d.isMDXComponent=!0}}]);