"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6294],{3905:(n,t,e)=>{e.d(t,{Zo:()=>l,kt:()=>m});var r=e(7294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var s=r.createContext({}),p=function(n){var t=r.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},l=function(n){var t=p(n.components);return r.createElement(s.Provider,{value:t},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(n,t){var e=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),d=p(e),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return e?r.createElement(m,o(o({ref:t},l),{},{components:e})):r.createElement(m,o({ref:t},l))}));function m(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var a=e.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=n,c[d]="string"==typeof n?n:i,o[1]=c;for(var p=2;p<a;p++)o[p]=e[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},5066:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=e(7462),i=(e(7294),e(3905));const a={},o="\u8f6c\u8bd1\u5168\u5c40\u6267\u884c\u8bed\u53e5",c={unversionedId:"tutorials/render-fabric/global-statements",id:"tutorials/render-fabric/global-statements",title:"\u8f6c\u8bd1\u5168\u5c40\u6267\u884c\u8bed\u53e5",description:"\u5728 C \u8bed\u8a00\u4e2d\uff0c\u51fd\u6570\u662f\u57fa\u672c\u6267\u884c\u5355\u5143\uff0c\u4e0d\u50cf JavaScript \u90a3\u6837\u5141\u8bb8\u5728\u51fd\u6570\u5916\u90e8\u7f16\u5199\u6267\u884c\u8bed\u53e5\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5168\u5c40\u6267\u884c\u8bed\u53e5\u79fb\u5165\u51fd\u6570\u4e2d\u3002",source:"@site/docs/tutorials/03-render-fabric/04-global-statements.md",sourceDirName:"tutorials/03-render-fabric",slug:"/tutorials/render-fabric/global-statements",permalink:"/zh-Hans/docs/next/tutorials/render-fabric/global-statements",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorials/03-render-fabric/04-global-statements.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8f6c\u8bd1\u5168\u5c40\u53d8\u91cf",permalink:"/zh-Hans/docs/next/tutorials/render-fabric/global-variables"},next:{title:"\u8f6c\u8bd1\u6784\u9020\u51fd\u6570",permalink:"/zh-Hans/docs/next/tutorials/render-fabric/constructors"}},s={},p=[],l={toc:p},d="wrapper";function u(n){let{components:t,...e}=n;return(0,i.kt)(d,(0,r.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8f6c\u8bd1\u5168\u5c40\u6267\u884c\u8bed\u53e5"},"\u8f6c\u8bd1\u5168\u5c40\u6267\u884c\u8bed\u53e5"),(0,i.kt)("p",null,"\u5728 C \u8bed\u8a00\u4e2d\uff0c\u51fd\u6570\u662f\u57fa\u672c\u6267\u884c\u5355\u5143\uff0c\u4e0d\u50cf JavaScript \u90a3\u6837\u5141\u8bb8\u5728\u51fd\u6570\u5916\u90e8\u7f16\u5199\u6267\u884c\u8bed\u53e5\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5168\u5c40\u6267\u884c\u8bed\u53e5\u79fb\u5165\u51fd\u6570\u4e2d\u3002"),(0,i.kt)("p",null,"\u5168\u5c40\u6267\u884c\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'//creates points\nfor (i=0; i<vtc; i++) {\n  //(assigns y values so top margin matches l/r margins)\n  var y = (i*fh/(vtc-1))+(100-fw)/2;\n  for (j=0; j<htc; j++) {\n    //(assigns x values so fabric is centered horizontally)\n    var x = (j*fw/(htc-1))+(100-fw)/2;\n    addPt(x,y);\n  }\n}\n//(pin top row)\nfor (i=0; i<htc; i++) { points[i].pinned = true; }\n\n...\n\n//create spans\nfor (i=0; i<points.length-1; i++) {\n  if ( (i+1)%htc !== 0 ) { addSp(i,i+1); }  // horizontal spans\n  if ( i < points.length-htc) { addSp(i,i+htc); }  // vertical spans\n}\n\n//initial unfurl\nvar rx = randNumBetween(-50,50);\nfor (i=0; i<points.length/4; i++) {\n  var rp = randNumBetween(Math.floor(points.length/3),points.length-1);\n  points[rp].px += rx;\n  points[rp].py += randNumBetween(10,30);\n}\nfor (i=vtc*htc-vtc-1; i<vtc*htc-1; i++) {\n  points[i].px += rx;\n  points[i].py += randNumBetween(100,300);\n}\n\n//updates frame\nupdate();\n\n...\n\n///---EVENTS---///\n\n//scaling\nwindow.addEventListener(\'resize\', scaleToWindow);\n\n//interaction\ndocument.addEventListener("mousedown", grabFabric);\ndocument.addEventListener("mousemove", moveFabric);\ndocument.addEventListener("mouseup", dropFabric);\n\ndocument.addEventListener("touchstart", grabFabric);\ndocument.addEventListener("touchmove", moveFabric);\ndocument.addEventListener("touchend", dropFabric);\n')),(0,i.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u7531\u5faa\u73af\u8bed\u53e5\u3001\u6761\u4ef6\u5224\u65ad\u8bed\u53e5\u548c\u51fd\u6570\u8c03\u7528\u8bed\u53e5\u7ec4\u6210\uff0c\u8f6c\u8bd1\u6210 C \u8bed\u8a00\u975e\u5e38\u7b80\u5355\u3002"),(0,i.kt)("p",null,"\u5176\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Math.floor(points.length/3)"),"\uff0c\u53ef\u4ee5\u8f6c\u8bd1\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"points.length / 3"),"\uff0c\u56e0\u4e3a\u5728 C \u8bed\u8a00\u4e2d\u4e24\u4e2a\u6574\u6570\u76f8\u9664\u7684\u7ed3\u679c\u4e5f\u662f\u6574\u6570\uff0c\u65e0\u9700\u518d\u53d6\u6574\u3002"),(0,i.kt)("p",null,"\u672b\u5c3e\u7684\u51e0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"document.addEventListener()")," \u51fd\u6570\u8c03\u7528\u5c5e\u4e8e UI \u90e8\u5206\uff0c\u53ef\u4ee5\u5ffd\u7565\u3002"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u53c2\u6570\u5217\u8868\uff0c\u4e0a\u6587\u4e2d\u6709\u63d0\u5230 fw\u3001fh\u3001htc\u3001vtc \u8fd9\u56db\u4e2a\u53d8\u91cf\u662f\u521d\u59cb\u5316\u51fd\u6570\u7684\u5c40\u90e8\u53d8\u91cf\uff0c\u800c\u521d\u59cb\u5316\u51fd\u6570\u5185\u90e8\u8c03\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"addPt()")," \u51fd\u6570\u4f9d\u8d56 canvasWidth \u548c canvasHeight\uff0c\u56e0\u6b64\uff0c\u8be5\u51fd\u6570\u9700\u8981\u56db\u4e2a\u53c2\u6570\uff1afw\u3001fh\u3001canvasWidth\u3001 canvasHeight\u3002"),(0,i.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u5c31\u80fd\u5f97\u51fa\u5b8c\u6574\u7684\u521d\u59cb\u5316\u51fd\u6570\u7684\u5b9e\u73b0\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"/**\n * @brief init fabirc\n *\n * @param fw fabric width (as percentage of canvas width)\n * @param fh fabric height (as percentage of canvas height)\n */\nvoid Fabric_init(int fw, int fh, int canvaswidth, int canvasHeight)\n{\n        int i, j, x, y;\n        int htc = fw;    // fabric horizontal thread count\n        int vtc = fh;    // fabric vertical thread count\n\n        Fabric_resize(canvaswidth, canvasHeight);\n        grabRadius = canvasWidth / 25;\n\n        // creates points\n        for (i = 0; i < vtc; i++) {\n                //(assigns y values so top margin matches l/r margins)\n                y = (i * fh / (vtc - 1)) + (100 - fw) / 2;\n                for (j = 0; j < htc; j++) {\n                        //(assigns x values so fabric is centered horizontally)\n                        x = (j * fw / (htc - 1)) + (100 - fw) / 2;\n                        addPt(x, y);\n                }\n        }\n        //(pin top row)\n        for (i = 0; i < htc; i++) {\n                points[i]->pinned = true;\n        }\n\n        // create spans\n        for (i = 0; i < pointCount; i++) {\n                if ((i + 1) % htc != 0) {\n                        addSp(i, i + 1);\n                }    // horizontal spans\n                if (i < pointCount - htc) {\n                        addSp(i, i + htc);\n                }    // vertical spans\n        }\n\n        // initial unfurl\n        double rx = randNumBetween(-50, 50);\n        for (i = 0; i < pointCount / 4; i++) {\n                int rp = randNumBetween(pointCount / 3, pointCount - 1);\n                points[rp]->px += rx;\n                points[rp]->py += randNumBetween(10, 30);\n        }\n        for (i = vtc * htc - vtc - 1; i < vtc * htc - 1; i++) {\n                points[i]->px += rx;\n                points[i]->py += randNumBetween(100, 300);\n        }\n}\n")))}u.isMDXComponent=!0}}]);