"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2046],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,m=s["".concat(l,".").concat(u)]||s[u]||f[u]||i;return r?t.createElement(m,p(p({ref:n},d),{},{components:r})):t.createElement(m,p({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[s]="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1972:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const i={description:"\u4ecb\u7ecd\u56fe\u50cf\u6587\u4ef6\u64cd\u4f5c\u51fd\u6570\u7684\u7528\u6cd5\u3002",sidebar_position:2},p="\u56fe\u50cf\u6587\u4ef6\u64cd\u4f5c",o={unversionedId:"guides/graphics/image-file-operation",id:"guides/graphics/image-file-operation",title:"\u56fe\u50cf\u6587\u4ef6\u64cd\u4f5c",description:"\u4ecb\u7ecd\u56fe\u50cf\u6587\u4ef6\u64cd\u4f5c\u51fd\u6570\u7684\u7528\u6cd5\u3002",source:"@site/docs/guides/graphics/image-file-operation.md",sourceDirName:"guides/graphics",slug:"/guides/graphics/image-file-operation",permalink:"/docs/next/guides/graphics/image-file-operation",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/guides/graphics/image-file-operation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"\u4ecb\u7ecd\u56fe\u50cf\u6587\u4ef6\u64cd\u4f5c\u51fd\u6570\u7684\u7528\u6cd5\u3002",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"\u7ed8\u5236\u590d\u6742\u7684\u56fe\u5f62",permalink:"/docs/next/guides/graphics/drawing-complex-graphics"},next:{title:"\u50cf\u7d20\u64cd\u4f5c",permalink:"/docs/next/guides/graphics/pixel-operation"}},l={},c=[{value:"\u8bfb\u53d6\u56fe\u50cf\u6587\u4ef6\u4fe1\u606f",id:"\u8bfb\u53d6\u56fe\u50cf\u6587\u4ef6\u4fe1\u606f",level:3},{value:"\u8bfb\u53d6\u56fe\u50cf\u6570\u636e",id:"\u8bfb\u53d6\u56fe\u50cf\u6570\u636e",level:3},{value:"\u5728\u8bfb\u53d6\u65f6\u53cd\u9988\u8fdb\u5ea6",id:"\u5728\u8bfb\u53d6\u65f6\u53cd\u9988\u8fdb\u5ea6",level:3},{value:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u6d41",id:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u6d41",level:3},{value:"\u5c06\u56fe\u50cf\u6570\u636e\u5199\u5165\u6587\u4ef6",id:"\u5c06\u56fe\u50cf\u6570\u636e\u5199\u5165\u6587\u4ef6",level:3}],d={toc:c},s="wrapper";function f(e){let{components:n,...r}=e;return(0,a.kt)(s,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u56fe\u50cf\u6587\u4ef6\u64cd\u4f5c"},"\u56fe\u50cf\u6587\u4ef6\u64cd\u4f5c"),(0,a.kt)("h3",{id:"\u8bfb\u53d6\u56fe\u50cf\u6587\u4ef6\u4fe1\u606f"},"\u8bfb\u53d6\u56fe\u50cf\u6587\u4ef6\u4fe1\u606f"),(0,a.kt)("p",null,"\u4f7f\u7528\u56fe\u50cf\u8bfb\u53d6\u5668\u8bfb\u53d6\u6587\u4ef6\u5934\u4e2d\u7684\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <LCUI/LCUI.h>\n#include <LCUI/image.h>\n\nint main(int argc, char *argv[])\n{\n    FILE *fp;\n    LCUI_ImageReaderRec reader = { 0 };\n    \n    if (argc != 2) {\n        printf("Please specify the image file path");\n        return -1;\n    }\n    fp = fopen(argv[1], "rb");\n    if (!fp) {\n        printf("Cannot open file");\n        return -2;\n    }\n    LCUI_SetImageReaderForFile(&reader, fp);\n        if (LCUI_InitImageReader(&reader) != 0) {\n            printf("Unsupported image format");\n        fclose(fp);\n        return -3;\n        }\n        printf("image type: %d\\n", reader.header.type);\n        printf("image color type: %d\\n", reader.header.color_type);\n        printf("image size: %ux%u", reader.header.width, reader.header.height);\n    LCUI_DestroyImageReader(&reader);\n    fclose(fp);\n    return 0;\n}\n')),(0,a.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u6253\u5f00\u53c2\u6570\u4e2d\u6307\u5b9a\u7684\u6587\u4ef6\uff0c\u7136\u540e\u521d\u59cb\u5316\u56fe\u50cf\u8bfb\u53d6\u5668\uff0c\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u4fe1\u606f\u5e76\u5728\u6700\u540e\u6253\u5370\u56fe\u50cf\u7684\u7c7b\u578b\u3001\u8272\u5f69\u7c7b\u578b\u548c\u5c3a\u5bf8\u5230\u5c4f\u5e55\u4e0a\u3002"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"fopen()")," \u6253\u5f00\u6587\u4ef6\u540e\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"LCUI_SetImageReaderForFile()")," \u5c06\u56fe\u50cf\u8bfb\u53d6\u5668\u7684\u8bfb\u53d6\u76ee\u6807\u8bbe\u7f6e\u4e3a\u6807\u51c6\u6587\u4ef6\u6d41\uff0c\u7136\u540e\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"LCUI_InitImageReader()")," \u521d\u59cb\u5316\u6587\u4ef6\u8bfb\u53d6\u5668\uff0c\u521d\u59cb\u5316\u65f6\u4f1a\u5c1d\u8bd5\u8c03\u7528\u9884\u7f6e\u7684\u56fe\u50cf\u8bfb\u53d6\u63a5\u53e3\u68c0\u6d4b\u8be5\u6587\u4ef6\u7684\u683c\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u8bfb\u53d6\u56fe\u50cf\u6570\u636e"},"\u8bfb\u53d6\u56fe\u50cf\u6570\u636e"),(0,a.kt)("p",null,"LCUI \u63d0\u4f9b\u4e86\u4e24\u4e2a\u7528\u4e8e\u8bfb\u53d6\u56fe\u50cf\u6570\u636e\u7684\u63a5\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int LCUI_ReadImage(LCUI_ImageReader reader, LCUI_Graph *out);\n\nint LCUI_ReadImageFile(const char *filepath, LCUI_Graph *out);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LCUI_ReadImage()")," \u9002\u7528\u4e8e\u4ece\u81ea\u5b9a\u4e49\u7684\u6587\u4ef6\u6d41\u4e2d\u8bfb\u53d6\u56fe\u50cf\u6570\u636e\uff0c\u5728\u4f7f\u7528\u5b83\u4e4b\u524d\u4f60\u9700\u8981\u4e3a\u56fe\u50cf\u8bfb\u53d6\u5668\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u6587\u4ef6\u6d41\u7684\u53e5\u67c4\u548c\u64cd\u4f5c\u51fd\u6570\u3002\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"LCUI_ReadImageFile()")," \u5219\u9002\u7528\u4e8e\u4ece\u6807\u51c6\u6587\u4ef6\u6d41\u4e2d\u8bfb\u53d6\u56fe\u50cf\u6570\u636e\uff0c\u4f60\u53ea\u9700\u8981\u4f20\u5165\u6587\u4ef6\u8def\u5f84\uff0c\u5b83\u5c31\u80fd\u57fa\u4e8e\u6807\u51c6\u5e93\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"fopen()"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"fread()")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"fclose()")," \u7b49\u6587\u4ef6\u8bfb\u53d6\u51fd\u6570\u5b8c\u6210\u56fe\u50cf\u6570\u636e\u8bfb\u53d6\u3002"),(0,a.kt)("h3",{id:"\u5728\u8bfb\u53d6\u65f6\u53cd\u9988\u8fdb\u5ea6"},"\u5728\u8bfb\u53d6\u65f6\u53cd\u9988\u8fdb\u5ea6"),(0,a.kt)("p",null,"\u56fe\u50cf\u8bfb\u53d6\u5668\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/include/LCUI/image.h#L76"},(0,a.kt)("inlineCode",{parentName:"a"},"fn_prog"))," \u6210\u5458\u53d8\u91cf\u662f\u4e2a\u51fd\u6570\u6307\u9488\uff0c\u5b83\u4f1a\u5728\u6bcf\u6b21\u8bfb\u53d6\u5b8c\u4e00\u884c\u56fe\u50cf\u6570\u636e\u540e\u8c03\u7528\uff0c\u4f60\u53ea\u9700\u8981\u5c06\u8be5\u6307\u9488\u6307\u5411\u81ea\u5b9a\u4e49\u51fd\u6570\u5373\u53ef\u83b7\u5f97\u8fdb\u5ea6\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u57fa\u4e8e\u4e0a\u4e2a\u793a\u4f8b\u4ee3\u7801\uff0c\u9700\u8981\u505a\u8fd9\u4e9b\u6539\u52a8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <LCUI/LCUI.h>\n#include <LCUI/image.h>\n\nvoid on_progress(void *data, float percent)\n{\n    printf("read %s: %.2f%%\\n", data, percent);\n}\n\nint main(int argc, char *argv[])\n{\n    FILE *fp;\n    LCUI_ImageReaderRec reader = { 0 };\n    \n    if (argc != 2) {\n        printf("Please specify the image file path");\n        return -1;\n    }\n    fp = fopen(argv[1], "rb");\n    if (!fp) {\n        printf("Cannot open file");\n        return -2;\n    }\n    LCUI_SetImageReaderForFile(&reader, fp);\n        if (LCUI_InitImageReader(&reader) != 0) {\n            printf("Unsupported image format");\n        fclose(fp);\n        return -3;\n        }\n        reader.fn_prog = on_progress;\n        reader.prog_arg = argv[1];\n        printf("image type: %d\\n", reader.header.type);\n        printf("image color type: %d\\n", reader.header.color_type);\n        printf("image size: %ux%u", reader.header.width, reader.header.height);\n    LCUI_DestroyImageReader(&reader);\n    fclose(fp);\n    return 0;\n}\n')),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u6d41"},"\u81ea\u5b9a\u4e49\u6587\u4ef6\u6d41"),(0,a.kt)("p",null,"\u56fe\u50cf\u8bfb\u53d6\u5668\u7684\u8bfb\u53d6\u529f\u80fd\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"fn_read")," \u3001",(0,a.kt)("inlineCode",{parentName:"p"},"fn_rewind")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"fn_skip")," \u8fd9\u4e09\u4e2a\u51fd\u6570\u6307\u9488\u6765\u5b9e\u73b0\uff0c\u53ef\u4f9b\u53c2\u8003\u7684\u6700\u7b80\u5355\u7684\u4f8b\u5b50\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/src/image/reader.c#L61-L83"},"src/image/reader.c")," \u6587\u4ef6\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"LCUI_SetImageReaderForFile()")," \u51fd\u6570\uff0c\u5b83\u5bf9\u6807\u51c6\u5e93\u7684\u6587\u4ef6\u64cd\u4f5c\u51fd\u6570\u505a\u4e86\u4e00\u5c42\u7b80\u5355\u5305\u88c5\u3002\u5982\u679c\u4f60\u9700\u8981\u66f4\u52a0\u9ad8\u7ea7\u7684\u7528\u6cd5\uff0c\u53ef\u4ee5\u53c2\u8003 LC Finder \u9879\u76ee\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LC-Finder/blob/573f200698e2604450665716ebc6608837b4b73a/UWP/FileService.cpp#L611-L678"},"UWP/FileService.cpp")," \u6587\u4ef6\u4e2d\u7684\u56fe\u50cf\u6587\u4ef6\u8bfb\u53d6\u5668\u76f8\u5173\u5b9e\u73b0\u4ee3\u7801\uff0c\u5b83\u9488\u5bf9 UWP \u7684\u5f02\u6b65\u6587\u4ef6\u6d41\u505a\u4e86\u9002\u914d\u3002"),(0,a.kt)("h3",{id:"\u5c06\u56fe\u50cf\u6570\u636e\u5199\u5165\u6587\u4ef6"},"\u5c06\u56fe\u50cf\u6570\u636e\u5199\u5165\u6587\u4ef6"),(0,a.kt)("p",null,"\u7531\u4e8e\u56fe\u50cf\u5199\u5165\u529f\u80fd\u5f88\u5c11\u7528\uff0c\u56e0\u6b64\u5e76\u672a\u62e5\u6709\u56fe\u50cf\u8bfb\u53d6\u529f\u80fd\u4e00\u822c\u7684\u5b8c\u6210\u5ea6\uff0c\u76ee\u524d\u80fd\u7528\u7684\u53ea\u6709\u8fd9\u4e00\u4e2a\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int LCUI_WritePNGFile(const char *file_name, const LCUI_Graph *graph);\n")))}f.isMDXComponent=!0}}]);