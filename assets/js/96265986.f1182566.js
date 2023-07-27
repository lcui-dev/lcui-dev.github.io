"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9243],{3905:(t,e,s)=>{s.d(e,{Zo:()=>d,kt:()=>m});var a=s(7294);function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function r(t,e){if(null==t)return{};var s,a,n=function(t,e){if(null==t)return{};var s,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)s=l[a],e.indexOf(s)>=0||(n[s]=t[s]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)s=l[a],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}var o=a.createContext({}),c=function(t){var e=a.useContext(o),s=e;return t&&(s="function"==typeof t?t(e):i(i({},e),t)),s},d=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},k="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var s=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),k=c(s),u=n,m=k["".concat(o,".").concat(u)]||k[u]||p[u]||l;return s?a.createElement(m,i(i({ref:e},d),{},{components:s})):a.createElement(m,i({ref:e},d))}));function m(t,e){var s=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=s.length,i=new Array(l);i[0]=u;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=t,r[k]="string"==typeof t?t:n,i[1]=r;for(var c=2;c<l;c++)i[c]=s[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,s)}u.displayName="MDXCreateElement"},2157:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=s(7462),n=(s(7294),s(3905));const l={},i="\u6dfb\u52a0\u6570\u636e\u7ba1\u7406",r={unversionedId:"tutorials/todolist/data-operation",id:"tutorials/todolist/data-operation",title:"\u6dfb\u52a0\u6570\u636e\u7ba1\u7406",description:"\u6dfb\u52a0 src/tasklist.c \u6587\u4ef6\u7528\u4e8e\u5b58\u653e\u4efb\u52a1\u5217\u8868\u6570\u636e\u7684\u7ba1\u7406\u4ee3\u7801\uff0c\u6dfb\u52a0 src/tasklist.h \u6587\u4ef6\u5b58\u653e\u516c\u5171\u51fd\u6570\u58f0\u660e\u3002",source:"@site/docs/tutorials/01-todolist/07-data-operation.md",sourceDirName:"tutorials/01-todolist",slug:"/tutorials/todolist/data-operation",permalink:"/docs/next/tutorials/todolist/data-operation",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorials/01-todolist/07-data-operation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0\u6837\u5f0f",permalink:"/docs/next/tutorials/todolist/add-style"},next:{title:"\u6dfb\u52a0\u4ea4\u4e92",permalink:"/docs/next/tutorials/todolist/add-interaction"}},o={},c=[{value:"\u5b9a\u4e49\u7c7b\u578b",id:"\u5b9a\u4e49\u7c7b\u578b",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u8ffd\u52a0",id:"\u8ffd\u52a0",level:2},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2},{value:"\u5220\u9664",id:"\u5220\u9664",level:2},{value:"\u6e05\u7a7a",id:"\u6e05\u7a7a",level:2},{value:"\u7b5b\u9009",id:"\u7b5b\u9009",level:2}],d={toc:c},k="wrapper";function p(t){let{components:e,...s}=t;return(0,n.kt)(k,(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6dfb\u52a0\u6570\u636e\u7ba1\u7406"},"\u6dfb\u52a0\u6570\u636e\u7ba1\u7406"),(0,n.kt)("p",null,"\u6dfb\u52a0 src/tasklist.c \u6587\u4ef6\u7528\u4e8e\u5b58\u653e\u4efb\u52a1\u5217\u8868\u6570\u636e\u7684\u7ba1\u7406\u4ee3\u7801\uff0c\u6dfb\u52a0 src/tasklist.h \u6587\u4ef6\u5b58\u653e\u516c\u5171\u51fd\u6570\u58f0\u660e\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.c",title:"src/tasklist.c"},'#include "tasklist.h"\n#include <stdlib.h>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.h",title:"src/tasklist.h"},"#include <stdbool.h>\n#include <yutil.h>\n")),(0,n.kt)("h2",{id:"\u5b9a\u4e49\u7c7b\u578b"},"\u5b9a\u4e49\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.h",title:"src/tasklist.h"},"typedef struct task_t {\n        int id;\n        bool is_completed;\n        wchar_t *name;\n} task_t;\n\ntypedef list_t tasklist_t;\n")),(0,n.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,n.kt)("p",null,"\u76f4\u63a5\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"list_create()")," \u51fd\u6570\u5373\u53ef\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.c",title:"src/tasklist.c"},"void tasklist_init(list_t *list)\n{\n        list_create(list);\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.h",title:"src/tasklist.h"},"void tasklist_init(list_t *list);\n")),(0,n.kt)("h2",{id:"\u8ffd\u52a0"},"\u8ffd\u52a0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.c",title:"src/tasklist.c"},"task_t *tasklist_append(tasklist_t *list, const wchar_t *name,\n                        bool is_completed)\n{\n        static int id = 1;\n        task_t *task = malloc(sizeof(task_t));\n\n        task->id = id++;\n        task->name = wcsdup(name);\n        task->is_completed = is_completed;\n        return task;\n}\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.h",title:"src/tasklist.h"},"task_t *tasklist_append(tasklist_t *list, const wchar_t *name,\n                        bool is_completed);\n")),(0,n.kt)("p",null,"\u5c40\u90e8\u53d8\u91cf id \u7528\u4e8e\u7ed9\u6bcf\u4e2a\u4efb\u52a1\u5206\u914d\u81ea\u589e\u7684 id\uff0c\u81ea\u589e\u65b9\u5f0f\u5c31\u662f\u7b80\u5355\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"id++"),"\u3002\u4f7f\u7528 static \u5173\u952e\u5b57\u4fee\u9970 id \u662f\u4e3a\u4e86\u8ba9\u5b83\u5728\u51fd\u6570\u6267\u884c\u5b8c\u540e\u4ecd\u4fdd\u7559\u503c\uff0c\u4e0b\u6b21\u6267\u884c\u51fd\u6570\u65f6\u80fd\u7ee7\u7eed\u81ea\u589e\uff0c\u800c\u4e0d\u662f\u59cb\u7ec8\u4ece 1 \u5f00\u59cb\u81ea\u589e\u3002"),(0,n.kt)("p",null,"\u51fd\u6570\u8fd4\u56de\u503c\u7c7b\u578b\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"task_t"),"\uff0c\u8fd9\u6837\u8bbe\u8ba1\u53ef\u8ba9\u754c\u9762\u5c42\u7684\u4ee3\u7801\u62ff\u5230\u65b0\u5efa\u7684\u4efb\u52a1\u6570\u636e\u53bb\u66f4\u65b0\u754c\u9762\u3002"),(0,n.kt)("h2",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,n.kt)("p",null,"\u66f4\u65b0\u64cd\u4f5c\u7531\u67e5\u627e\u548c\u4fee\u6539\u7ec4\u6210\uff0c\u5176\u4e2d\u7684\u4fee\u6539\u64cd\u4f5c\u4ec5\u4ec5\u662f\u4fee\u6539\u4efb\u52a1\u7684\u72b6\u6001\uff0c\u4e13\u4e3a\u8fd9\u79cd\u573a\u666f\u800c\u4e3a\u51fd\u6570\u589e\u52a0\u53c2\u6570\u7684\u8bdd\u6709\u70b9\u8fc7\u5ea6\u8bbe\u8ba1\u4e86\uff0c\u56e0\u6b64\uff0c\u53ea\u5b9e\u73b0\u67e5\u627e\u529f\u80fd\u5373\u53ef\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.c",title:"src/tasklist.c"},"task_t *tasklist_find(tasklist_t *list, int id)\n{\n        task_t *task;\n        list_node_t *node;\n\n        for (list_each(node, list)) {\n                task = node->data;\n                if (task->id == id) {\n                        return task;\n                }\n        }\n        return NULL;\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.h",title:"src/tasklist.h"},"task_t *tasklist_find(tasklist_t *list, int id);\n")),(0,n.kt)("h2",{id:"\u5220\u9664"},"\u5220\u9664"),(0,n.kt)("p",null,"\u5148\u904d\u5386\u4efb\u52a1\u5217\u8868\uff0c\u627e\u5230\u6307\u5b9a id \u7684\u4efb\u52a1\uff0c\u7136\u540e\u8c03\u7528 list \u7684\u5220\u9664\u51fd\u6570\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.c",title:"src/tasklist.c"},"void task_destroy(task_t *task)\n{\n        free(task->name);\n        free(task);\n}\n\nbool tasklist_remove(tasklist_t *list, int id)\n{\n        list_node_t *node;\n\n        for (list_each(node, list)) {\n                if (((task_t*)node->data)->id == id) {\n                        list_delete_node(list, node);\n                        task_destroy(node->data);\n                        return true;\n                }\n        }\n        return false;\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.h",title:"src/tasklist.h"},"bool tasklist_remove(tasklist_t *list, int id);\n")),(0,n.kt)("p",null,"\u5b9a\u4e49 ",(0,n.kt)("inlineCode",{parentName:"p"},"task_destroy()")," \u51fd\u6570\u662f\u4e3a\u4e86\u7edf\u4e00\u4efb\u52a1\u5217\u8868\u7684\u5220\u9664\u548c\u6e05\u7a7a\u51fd\u6570\u4e2d\u7684\u4efb\u52a1\u9500\u6bc1\u65b9\u6cd5\u3002"),(0,n.kt)("h2",{id:"\u6e05\u7a7a"},"\u6e05\u7a7a"),(0,n.kt)("p",null,"list \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"list_destroy()")," \u51fd\u6570\u53ef\u6e05\u7a7a\u5217\u8868\u5185\u5bb9\uff0c\u7ed9\u5b83\u4f20\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"task_destroy")," \u51fd\u6570\u6307\u9488\u5373\u53ef\u81ea\u5b9a\u4e49\u5217\u8868\u9879\u7684\u9500\u6bc1\u65b9\u6cd5\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.c",title:"src/tasklist.c"},"void tasklist_empty(tasklist_t *list)\n{\n        list_destroy(list, (list_item_destructor_t)task_destroy);\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.h",title:"src/tasklist.h"},"void tasklist_empty(tasklist_t *list);\n")),(0,n.kt)("h2",{id:"\u7b5b\u9009"},"\u7b5b\u9009"),(0,n.kt)("p",null,"\u7b5b\u9009\u5c31\u662f\u904d\u5386\u5217\u8868\uff0c\u5c06\u5176\u4e2d\u7684\u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u7684\u4efb\u52a1\u6570\u636e\u6dfb\u52a0\u5230\u65b0\u5217\u8868\u4e2d\u3002"),(0,n.kt)("p",null,"\u7b5b\u9009\u6761\u4ef6\u7531 status \u53c2\u6570\u6307\u5b9a\uff0c\u5b83\u6709\u4e09\u79cd\u503c\uff0c\u542b\u4e49\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"0: \u672a\u5b8c\u6210"),(0,n.kt)("li",{parentName:"ul"},"1: \u5df2\u5b8c\u6210"),(0,n.kt)("li",{parentName:"ul"},"3: \u5168\u90e8")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.c",title:"src/tasklist.c"},"void tasklist_filter(tasklist_t *list, int status, tasklist_t *filtered_list)\n{\n        list_node_t *node;\n\n        for (list_each(node, list)) {\n                if ((status == 0 && ((task_t*)node->data)->is_completed) ||\n                  (status == 1 && !((task_t*)node->data)->is_completed)) {\n                    continue;\n                }\n                list_append(filtered_list, node->data);\n        }\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=src/tasklist.h",title:"src/tasklist.h"},"void tasklist_filter(tasklist_t *list, int status, tasklist_t *filtered_list);\n")))}p.isMDXComponent=!0}}]);