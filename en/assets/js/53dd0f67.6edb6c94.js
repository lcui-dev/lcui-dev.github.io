"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3796],{3905:(e,t,A)=>{A.d(t,{Zo:()=>u,kt:()=>d});var n=A(7294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function l(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),A=t;return e&&(A="function"==typeof e?e(t):l(l({},t),e)),A},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var A=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(A),g=r,d=c["".concat(o,".").concat(g)]||c[g]||s[g]||a;return A?n.createElement(d,l(l({ref:t},u),{},{components:A})):n.createElement(d,l({ref:t},u))}));function d(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=A.length,l=new Array(a);l[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=A[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,A)}g.displayName="MDXCreateElement"},2991:(e,t,A)=>{A.d(t,{Z:()=>k});var n=A(7294),r=A(6010),a=A(3438),l=A(9960),i=A(3919),o=A(5999);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:A}=e;return n.createElement(l.Z,{href:t,className:(0,r.Z)("card padding--lg",p.cardContainer)},A)}function c(e){let{href:t,icon:A,title:a,description:l}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",p.cardTitle),title:a},A," ",a),l&&n.createElement("p",{className:(0,r.Z)("text--truncate",p.cardDescription),title:l},l))}function s(e){let{item:t}=e;const A=(0,a.Wl)(t);return A?n.createElement(c,{href:A,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const A=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return n.createElement(c,{href:t.href,icon:A,title:t.label,description:t.description??r?.description})}function d(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(s,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function m(e){let{className:t}=e;const A=(0,a.jA)();return n.createElement(k,{items:A.items,className:t})}function k(e){const{items:t,className:A}=e;if(!t)return n.createElement(m,e);const l=(0,a.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",A)},l.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},5948:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=A(7462),r=(A(7294),A(3905)),a=A(2991);const l={},i="\u5e03\u5c40",o={unversionedId:"layout/index",id:"version-2.x/layout/index",title:"\u5e03\u5c40",description:"\u5e03\u5c40\u6a21\u5f0f\uff0c\u6709\u65f6\u7b80\u79f0\u4e3a\u5e03\u5c40\uff0c\u662f\u4e00\u79cd\u57fa\u4e8e\u76d2\u5b50\u4e0e\u5176\u5144\u5f1f\u548c\u7956\u8f88\u76d2\u5b50\u7684\u4ea4\u4e92\u65b9\u5f0f\u6765\u786e\u5b9a\u76d2\u5b50\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u7684\u7b97\u6cd5\u3002\u5728 LCUI \u4e2d\u53c2\u4e0e\u5e03\u5c40\u8ba1\u7b97\u7684\u6570\u636e\u5305\u62ec display \u5c5e\u6027\u3001\u5b9a\u4f4d\u5c5e\u6027\u3001\u51e0\u4f55\u5c5e\u6027\u3001\u76d2\u6a21\u578b\u3001\u5c3a\u5bf8\u89c4\u5219\u3001\u5e03\u5c40\u89c4\u5219\u7b49\uff0c\u8fd9\u4e9b\u6570\u636e\u7684\u7528\u9014\u5927\u81f4\u5982\u4e0b\uff1a",source:"@site/versioned_docs/version-2.x/layout/index.md",sourceDirName:"layout",slug:"/layout/",permalink:"/en/docs/layout/",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/layout/index.md",tags:[],version:"2.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"CSS \u89e3\u6790\u5668",permalink:"/en/docs/css/parser"},next:{title:"\u6b63\u5e38\u6d41\u5e03\u5c40",permalink:"/en/docs/layout/normal-flow-layout"}},p={},u=[{value:"\u76d2\u6a21\u578b",id:"\u76d2\u6a21\u578b",level:3},{value:"Display \u5c5e\u6027",id:"display-\u5c5e\u6027",level:3},{value:"\u5b9a\u4f4d",id:"\u5b9a\u4f4d",level:3},{value:"\u5c3a\u5bf8\u89c4\u5219",id:"\u5c3a\u5bf8\u89c4\u5219",level:3},{value:"\u5e03\u5c40\u89c4\u5219",id:"\u5e03\u5c40\u89c4\u5219",level:3},{value:"\u6700\u5927\u5185\u5bb9\u5c3a\u5bf8",id:"\u6700\u5927\u5185\u5bb9\u5c3a\u5bf8",level:3},{value:"\u4e3b\u52a8\u4e0e\u88ab\u52a8\u5e03\u5c40",id:"\u4e3b\u52a8\u4e0e\u88ab\u52a8\u5e03\u5c40",level:3},{value:"\u5e03\u5c40\u6d41\u7a0b",id:"\u5e03\u5c40\u6d41\u7a0b",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}],c={toc:u},s="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5e03\u5c40"},"\u5e03\u5c40"),(0,r.kt)("p",null,"\u5e03\u5c40\u6a21\u5f0f\uff0c\u6709\u65f6\u7b80\u79f0\u4e3a\u5e03\u5c40\uff0c\u662f\u4e00\u79cd\u57fa\u4e8e\u76d2\u5b50\u4e0e\u5176\u5144\u5f1f\u548c\u7956\u8f88\u76d2\u5b50\u7684\u4ea4\u4e92\u65b9\u5f0f\u6765\u786e\u5b9a\u76d2\u5b50\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u7684\u7b97\u6cd5\u3002\u5728 LCUI \u4e2d\u53c2\u4e0e\u5e03\u5c40\u8ba1\u7b97\u7684\u6570\u636e\u5305\u62ec display \u5c5e\u6027\u3001\u5b9a\u4f4d\u5c5e\u6027\u3001\u51e0\u4f55\u5c5e\u6027\u3001\u76d2\u6a21\u578b\u3001\u5c3a\u5bf8\u89c4\u5219\u3001\u5e03\u5c40\u89c4\u5219\u7b49\uff0c\u8fd9\u4e9b\u6570\u636e\u7684\u7528\u9014\u5927\u81f4\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u5e03\u5c40\u5f00\u59cb\u524d\uff0c\u7ec4\u4ef6\u7684 display \u5c5e\u6027\u3001\u5b9a\u4f4d\u5c5e\u6027\u548c\u51e0\u4f55\u5c5e\u6027\u4f1a\u88ab\u7528\u4e8e\u8ba1\u7b97\u76d2\u6a21\u578b\u548c\u5c3a\u5bf8\u89c4\u5219\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5e03\u5c40\u5f00\u59cb\u65f6\uff0c\u7ec4\u4ef6\u7684 display \u5c5e\u6027\u3001\u5b9a\u4f4d\u5c5e\u6027\u548c\u5c3a\u5bf8\u89c4\u5219\u7528\u4e8e\u9009\u62e9\u5408\u9002\u7684\u5e03\u5c40\u89c4\u5219\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5e03\u5c40\u65f6\uff0c\u5e03\u5c40\u7b97\u6cd5\u4f1a\u6839\u636e\u7ec4\u4ef6\u7684\u76d2\u6a21\u578b\u8ba1\u7b97\u5176\u5144\u5f1f\u548c\u7956\u8f88\u7ec4\u4ef6\u4f4d\u7f6e\u548c\u5c3a\u5bf8\u3002")),(0,r.kt)("p",null,"\u51fa\u4e8e\u5b66\u4e60\u548c\u5f00\u53d1\u6210\u672c\u4e0a\u7684\u8003\u8651\uff0cLCUI \u7684\u5e03\u5c40\u5f15\u64ce\u4ee5\u7f51\u9875\u6d4f\u89c8\u5668\u4e3a\u53c2\u8003\u5bf9\u8c61\uff0c\u5b9e\u73b0\u4e86 CSS \u5e03\u5c40\u4e2d\u5e38\u89c1\u7684\u51e0\u79cd\u5e03\u5c40\u6a21\u5f0f\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u540c\u4e00\u79cd\u5e03\u5c40\u6a21\u5f0f\u5728 LCUI \u5e94\u7528\u7a0b\u5e8f\u548c\u7f51\u9875\u6d4f\u89c8\u5668\u4e2d\u7684\u6548\u679c\u662f\u4e00\u6837\u7684\uff0c\u56e0\u6b64\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b66\u4e60 CSS \u5e03\u5c40\u76f8\u5173\u6587\u6863\u6765\u52a0\u6df1\u5bf9\u5e03\u5c40\u7684\u7406\u89e3\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6587\u5047\u5b9a\u4f60\u5df2\u7ecf\u719f\u6089 CSS \u5e03\u5c40\u6280\u672f\uff0c\u5982\u679c\u4f60\u5bf9 CSS \u5e03\u5c40\u6280\u672f\u8fd8\u4e0d\u719f\u6089\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u9605\u8bfb MDN \u4e0a\u7684\u6587\u6863\uff1a\u300a",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout"},"CSS \u5e03\u5c40 - \u5b66\u4e60 Web \u5f00\u53d1 ","|"," MDN"),"\u300b")),(0,r.kt)("p",null,"\u5728\u4ecb\u7ecd\u5e03\u5c40\u6a21\u5f0f\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u6df1\u5165\u4e86\u89e3\u4e00\u4e0b\u8fd9\u4e9b\u6570\u636e\u7684\u6982\u5ff5\u548c\u5b9e\u73b0\u7ec6\u8282\u3002"),(0,r.kt)("h3",{id:"\u76d2\u6a21\u578b"},"\u76d2\u6a21\u578b"),(0,r.kt)("p",null,"\u76d2\u6a21\u578b\u7528\u4e8e\u5b9a\u4e49\u7ec4\u4ef6\u7684\u5e03\u5c40\u548c\u6e32\u67d3\u53c2\u6570\uff0c\u5b83\u7531\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content box"),": \u8fd9\u4e2a\u533a\u57df\u662f\u7528\u6765\u663e\u793a\u5185\u5bb9\uff0c\u5927\u5c0f\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"width")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"height")," \u5c5e\u6027\u8bbe\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Padding box"),": \u5305\u56f4\u5728\u5185\u5bb9\u533a\u57df\u5916\u90e8\u7684\u7a7a\u767d\u533a\u57df\uff0c\u5927\u5c0f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"padding")," \u76f8\u5173\u5c5e\u6027\u8bbe\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Border box"),": \u8fb9\u6846\u76d2\u5305\u88f9\u5185\u5bb9\u548c\u5185\u8fb9\u8ddd\uff0c\u5927\u5c0f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"border")," \u76f8\u5173\u5c5e\u6027\u8bbe\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Canvas box:")," \u753b\u5e03\u533a\u57df\u5305\u88f9\u4e86\u8fb9\u6846\u76d2\uff0c\u4e0e\u5916\u8fb9\u8ddd\u533a\u57df\u91cd\u53e0\uff0c\u5b83\u5b9a\u4e49\u4e86\u7ec4\u4ef6\u5728\u6e32\u67d3\u65f6\u6240\u4f7f\u7528\u7684\u753b\u5e03\u7684\u5927\u5c0f\uff0c\u7ec4\u4ef6\u7684\u9634\u5f71\u53c2\u6570\u4f1a\u5f71\u54cd\u5b83\u7684\u5927\u5c0f\uff0c\u5982\u679c\u7ec4\u4ef6\u6ca1\u6709\u9634\u5f71\uff0c\u5219\u5b83\u7684\u5927\u5c0f\u4e0e\u8fb9\u6846\u76d2\u76f8\u540c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Margin box"),": \u8fd9\u662f\u6700\u5916\u9762\u7684\u533a\u57df\uff0c\u662f\u76d2\u5b50\u548c\u5176\u4ed6\u5143\u7d20\u4e4b\u95f4\u7684\u7a7a\u767d\u533a\u57df\u3002\u5927\u5c0f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"margin")," \u76f8\u5173\u5c5e\u6027\u8bbe\u7f6e\u3002")),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d2\u6a21\u578b",src:A(7496).Z,width:"544",height:"300"})),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u7ec4\u4ef6\u5bf9\u8c61\u4e2d\u7684 box \u5c5e\u6027\u6765\u8bbf\u95ee\u8fd9\u4e9b\u533a\u57df\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'printf(\n    "content_box: (%f, %f, %f, %f)\\n",\n    w->box->content.x, w->box->content.y,\n    w->box->content.width, w->box->content.height,\n);\nprintf(\n    "border_box: (%f, %f, %f, %f)\\n",\n    w->box->border.x, w->box->border.y,\n    w->box->border.width, w->box->border.height,\n);\n\n')),(0,r.kt)("h3",{id:"display-\u5c5e\u6027"},"Display \u5c5e\u6027"),(0,r.kt)("p",null," \u5b9e\u73b0\u9875\u9762\u5e03\u5c40\u7684\u4e3b\u8981\u65b9\u6cd5\u662f\u8bbe\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"display"),"\u5c5e\u6027\u7684\u503c\uff0c\u5b83\u5141\u8bb8\u6211\u4eec\u66f4\u6539\u9ed8\u8ba4\u7684\u663e\u793a\u65b9\u5f0f\u3002LCUI \u76ee\u524d\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"display")," \u5c5e\u6027\u7684\u4e09\u79cd\u503c\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"block"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"inline-block")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"flex"),"\uff0c\u8be5\u5c5e\u6027\u7684\u9ed8\u8ba4\u503c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"block"),"\u3002"),(0,r.kt)("h3",{id:"\u5b9a\u4f4d"},"\u5b9a\u4f4d"),(0,r.kt)("p",null,"\u5b9a\u4f4d ","(","positioning",")"," \u80fd\u591f\u8ba9\u6211\u4eec\u628a\u4e00\u4e2a\u7ec4\u4ef6\u4ece\u5b83\u539f\u672c\u5728\u5e03\u5c40\u4e2d\u5e94\u8be5\u5728\u7684\u4f4d\u7f6e\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\u3002\u5b9a\u4f4d ","(","positioning",")"," \u5e76\u4e0d\u662f\u4e00\u79cd\u7528\u6765\u7ed9\u4f60\u505a\u4e3b\u8981\u754c\u9762\u5e03\u5c40\u7684\u65b9\u5f0f\uff0c\u5b83\u66f4\u50cf\u662f\u8ba9\u4f60\u53bb\u7ba1\u7406\u548c\u5fae\u8c03\u754c\u9762\u4e2d\u7684\u4e00\u4e2a\u7279\u6b8a\u9879\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"LCUI \u4ec5\u652f\u6301\u4ee5\u4e0b\u4e09\u79cd\u5b9a\u4f4d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9759\u6001\u5b9a\u4f4d\uff08Static positioning\uff09\uff1a"),"\u9ed8\u8ba4\u5b9a\u4f4d\uff0c\u8868\u793a\u4f7f\u7528\u5e03\u5c40\u5f15\u64ce\u8ba1\u7b97\u597d\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u76f8\u5bf9\u5b9a\u4f4d\uff08Relative positioning\uff09\uff1a"),"\u76f8\u5bf9\u5b9a\u4f4d\uff0c\u5b83\u5141\u8bb8\u6211\u4eec\u76f8\u5bf9\u4e8e\u5e03\u5c40\u5f15\u64ce\u8ba1\u7b97\u597d\u7684\u4f4d\u7f6e\u6765\u79fb\u52a8\u7ec4\u4ef6\uff0c\u8fd9\u5bf9\u4e8e\u5fae\u8c03\u548c\u7cbe\u51c6\u8bbe\u8ba1 ","(","design pinpointing",")"," \u975e\u5e38\u6709\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7edd\u5bf9\u5b9a\u4f4d\uff08Absolute positioning\uff09\uff1a"),"\u5c06\u7ec4\u4ef6\u4ece\u5e03\u5c40\u4e2d\u79fb\u51fa\uff0c\u4e0d\u5360\u636e\u7a7a\u95f4\uff0c\u901a\u8fc7\u6307\u5b9a\u7ec4\u4ef6\u76f8\u5bf9\u4e8e\u7236\u7ec4\u4ef6\u7684\u504f\u79fb\u6765\u786e\u5b9a\u4f4d\u7f6e\u3002\u8be5\u5b9a\u4f4d\u9002\u7528\u4e8e\u7cbe\u786e\u63a7\u5236\u7ec4\u4ef6\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1a\u8ba9\u7ec4\u4ef6\u505c\u9760\u5728\u53f3\u4e0a\u89d2\u3001\u6216\u662f\u8ba9\u7ec4\u4ef6\u968f\u7740\u9f20\u6807\u79fb\u52a8\u3002")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u7edd\u5bf9\u5b9a\u4f4d\u5728\u6d4f\u89c8\u5668\u4e2d\u662f\u76f8\u5bf9\u4e8e\u5143\u7d20\u7684\u6700\u8fd1\u88ab\u5b9a\u4f4d\u7956\u5148\u5143\u7d20 ","(","nearest positioned ancestor element",")","\uff0c\u800c\u5728 LCUI \u4e2d\u662f\u76f4\u5c5e\u7236\u7ec4\u4ef6\u3002")),(0,r.kt)("h3",{id:"\u5c3a\u5bf8\u89c4\u5219"},"\u5c3a\u5bf8\u89c4\u5219"),(0,r.kt)("p",null,"\u5c3a\u5bf8\u89c4\u5219\u5f71\u54cd\u5230\u7ec4\u4ef6\u7684\u5e03\u5c40\u89c4\u5219\u548c\u5e03\u5c40\u540e\u7684\u5b9e\u9645\u5c3a\u5bf8\uff0c\u4e5f\u4f1a\u5f71\u54cd\u5230\u5b50\u7ec4\u4ef6\u7684\u5c3a\u5bf8\u89c4\u5219\uff0c\u5b83\u5728\u7ec4\u4ef6\u7684\u6837\u5f0f\u8ba1\u7b97\u548c\u5e03\u5c40\u9636\u6bb5\u4f1a\u88ab\u91cd\u65b0\u8ba1\u7b97\u3002\u4ee5\u4e0b\u662f\u8fd9\u4e9b\u89c4\u5219\u7684\u4f5c\u7528\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FIXED\uff1a"),"\u56fa\u5b9a\u3002\u8868\u793a\u5c3a\u5bf8\u5c5e\u6027\u53ef\u5728\u5e03\u5c40\u524d\u76f4\u63a5\u8ba1\u7b97\u51fa\u786e\u5207\u7684\u503c\uff0c\u9664\u4e86\u8bbe\u7f6e 100px \u8fd9\u7c7b\u503c\u5916\uff0c\u7236\u7ec4\u4ef6\u7684\u5c3a\u5bf8\u89c4\u5219\u662f\u56fa\u5b9a\u65f6\u4e5f\u4f1a\u91c7\u7528\u8be5\u89c4\u5219\uff0c\u56e0\u4e3a\u5728\u7236\u7ec4\u4ef6\u5c3a\u5bf8\u5df2\u77e5\u7684\u60c5\u51b5\u4e0b\uff0c\u5373\u4fbf\u5b50\u7ec4\u4ef6\u7684\u5c3a\u5bf8\u662f\u767e\u5206\u6bd4\u503c\u6216 auto \u4e5f\u80fd\u76f4\u63a5\u8ba1\u7b97\u51fa\u6765\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FILL\uff1a"),"\u586b\u5145\u3002\u7ec4\u4ef6\u7684\u5c3a\u5bf8\u5c06\u586b\u6ee1\u7236\u7ec4\u4ef6\u5185\u5bb9\u533a\u57df\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u8be5\u89c4\u5219\u90fd\u4f1a\u8f6c\u6362\u4e3a\u56fa\u5b9a\uff0c\u56e0\u4e3a\u6839\u7ec4\u4ef6\u7684\u5c3a\u5bf8\u89c4\u5219\u5fc5\u5b9a\u662f\u56fa\u5b9a\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PERCENT\uff1a"),"\u767e\u5206\u6bd4\u3002\u8868\u793a\u5728\u8ba1\u7b97\u5c3a\u5bf8\u5c5e\u6027\u7684\u503c\u4e4b\u524d\u5fc5\u987b\u5148\u8ba1\u7b97\u51fa\u7236\u7ec4\u4ef6\u5c3a\u5bf8\u7684\u5b9e\u9645\u503c\uff0c\u7136\u540e\u518d\u6309\u7167\u767e\u5206\u6bd4\u8ba1\u7b97\u5b9e\u9645\u503c\u3002\u5728\u7236\u7ec4\u4ef6\u5c3a\u5bf8\u89c4\u5219\u4e0d\u4e3a\u56fa\u5b9a\u4e14\u5c3a\u5bf8\u5c5e\u6027\u4e3a 50% \u8fd9\u7c7b\u503c\u65f6\uff0c\u4f1a\u91c7\u7528\u767e\u5206\u6bd4\u89c4\u5219\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FIT","_","CONTENT\uff1a"),"\u9002\u5e94\u5185\u5bb9\u3002\u8868\u793a\u5728\u5e03\u5c40\u5b8c\u540e\u4f7f\u7528\u5185\u5bb9\u533a\u57df\u7684\u5c3a\u5bf8\u4f5c\u4e3a\u5b9e\u9645\u503c\u3002\u8be5\u89c4\u5219\u5e38\u7528\u4e8e\u7ec4\u4ef6\u7684\u9ad8\u5ea6\uff0c\u56e0\u4e3a\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u5bbd\u5ea6\u662f\u56fa\u5b9a\u7684\uff0c\u7531\u5185\u5bb9\u6491\u5f00\u9ad8\u5ea6\u3002\u5f53\u7ec4\u4ef6\u91c7\u7528\u7edd\u5bf9\u5b9a\u4f4d\u6216\u8005\u663e\u793a\u65b9\u5f0f\u4e3a\u5185\u8054\u5757\uff08inline-block\uff09\u65f6\uff0c\u5b83\u7684\u5bbd\u9ad8\u90fd\u4f1a\u91c7\u7528\u8be5\u89c4\u5219\u3002")),(0,r.kt)("h3",{id:"\u5e03\u5c40\u89c4\u5219"},"\u5e03\u5c40\u89c4\u5219"),(0,r.kt)("p",null,"\u5e03\u5c40\u89c4\u5219\u5728\u5e03\u5c40\u524d\u7531\u7ec4\u4ef6\u7684\u5b9a\u4f4d\u65b9\u5f0f\u3001\u5c3a\u5bf8\u89c4\u5219\u548c\u521d\u59cb\u5e03\u5c40\u89c4\u5219\u8ba1\u7b97\u800c\u6765\uff0c\u5b83\u544a\u8bc9\u5e03\u5c40\u5f15\u64ce\u5728\u5e03\u5c40\u524d\u5982\u4f55\u786e\u5b9a\u6700\u5927\u5185\u5bb9\u5bbd\u5ea6\u3001\u5728\u5e03\u5c40\u540e\u5982\u4f55\u8ba1\u7b97\u7ec4\u4ef6\u5b9e\u9645\u5c3a\u5bf8\u3002\u4ee5\u4e0b\u662f\u8fd9\u4e9b\u89c4\u5219\u7684\u4f5c\u7528\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AUTO"),"\uff1a\u81ea\u52a8\u3002\u8fd9\u662f\u521d\u59cb\u89c4\u5219\uff0c\u7531\u5e03\u5c40\u5f15\u64ce\u6839\u636e\u7ec4\u4ef6\u7684\u663e\u793a\u65b9\u5f0f\u548c\u5c3a\u5bf8\u89c4\u5219\u6765\u9009\u62e9\u5408\u9002\u7684\u5e03\u5c40\u89c4\u5219\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAX","_","CONTENT"),"\uff1a\u6700\u5927\u5185\u5bb9\u3002\u5728\u5e03\u5c40\u65f6\u5c3d\u53ef\u80fd\u6269\u5927\u5c3a\u5bf8\u4ee5\u5448\u73b0\u66f4\u591a\u7684\u5185\u5bb9\u3002\u5f53\u5c3a\u5bf8\u89c4\u5219\u90fd\u4e0d\u4e3a\u56fa\u5b9a\u65f6\u4f1a\u91c7\u7528\u6b64\u5e03\u5c40\u89c4\u5219\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FIXED","_","WIDTH\uff1a"),"\u56fa\u5b9a\u5bbd\u5ea6\u3002\u5728\u5e03\u5c40\u65f6\u5c06\u7ec4\u4ef6\u5185\u5bb9\u533a\u57df\u5bbd\u5ea6\u4f5c\u4e3a\u6700\u5927\u5bbd\u5ea6\uff0c\u6392\u5217\u7684\u6bcf\u884c\u5b50\u7ec4\u4ef6\u90fd\u4e0d\u4f1a\u8d85\u51fa\u8be5\u5bbd\u5ea6\u3002\u5f53\u5bbd\u5ea6\u7684\u5c3a\u5bf8\u89c4\u5219\u662f\u56fa\u5b9a\u65f6\u4f1a\u91c7\u7528\u8be5\u89c4\u5219\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FIXED","_","HEIGHT"),"\uff1a\u56fa\u5b9a\u9ad8\u5ea6\u3002\u4e0e\u56fa\u5b9a\u5bbd\u5ea6\u76f8\u4f3c\uff0c\u4f46\u5b83\u5728\u6b63\u5e38\u6d41\u5e03\u5c40\u4e0b\u4e0d\u4f1a\u5f71\u54cd\u5b50\u7ec4\u4ef6\u7684\u6392\u5217\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FIXED"),"\uff1a\u56fa\u5b9a\u3002\u5f53\u7ec4\u4ef6\u7684\u5bbd\u9ad8\u5c5e\u6027\u7684\u5c3a\u5bf8\u89c4\u5219\u90fd\u662f\u56fa\u5b9a\u65f6\u91c7\u7528\u8be5\u89c4\u5219\u3002")),(0,r.kt)("h3",{id:"\u6700\u5927\u5185\u5bb9\u5c3a\u5bf8"},"\u6700\u5927\u5185\u5bb9\u5c3a\u5bf8"),(0,r.kt)("p",null,"\u6700\u5927\u5185\u5bb9\u5c3a\u5bf8\u662f\u7ec4\u4ef6\u5728\u7a7a\u95f4\u65e0\u9650\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u5bb9\u7eb3\u5168\u90e8\u5185\u5bb9\u5e76\u907f\u514d\u5185\u5bb9\u6ea2\u51fa\u7684\u6700\u5c0f\u5c3a\u5bf8\u3002\u5b83\u5728\u7ec4\u4ef6\u4e3b\u52a8\u5e03\u5c40\u65f6\u91cd\u65b0\u8ba1\u7b97\uff0c\u4e3b\u8981\u7528\u4e8e\u5728\u5f39\u6027\u76d2\u5b50\u5e03\u5c40\u4e2d\u4e3a\u7ec4\u4ef6\u63d0\u4f9b\u521d\u59cb\u5c3a\u5bf8\u3002"),(0,r.kt)("h3",{id:"\u4e3b\u52a8\u4e0e\u88ab\u52a8\u5e03\u5c40"},"\u4e3b\u52a8\u4e0e\u88ab\u52a8\u5e03\u5c40"),(0,r.kt)("p",null,"\u56e0\u7ec4\u4ef6\u81ea\u8eab\u6837\u5f0f\u53d8\u5316\u800c\u89e6\u53d1\u7684\u5e03\u5c40\u662f\u4e3b\u52a8\u5e03\u5c40\u3002\u5728\u4e3b\u52a8\u5e03\u5c40\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u5b50\u7ec4\u4ef6\u7684\u5c3a\u5bf8\u56e0\u6b64\u53d1\u751f\u53d8\u5316\u800c\u89e6\u53d1\u7684\u5e03\u5c40\u5c31\u662f\u88ab\u52a8\u5e03\u5c40\u3002\u8fd9\u4e24\u79cd\u5e03\u5c40\u7684\u533a\u522b\u662f\uff0c\u4e3b\u52a8\u5e03\u5c40\u6709\u9009\u62e9\u5e03\u5c40\u89c4\u5219\u548c\u66f4\u65b0\u6700\u5927\u5185\u5bb9\u5c3a\u5bf8\u7684\u6743\u529b\uff0c\u800c\u88ab\u52a8\u5e03\u5c40\u6ca1\u6709\uff0c\u53ea\u80fd\u57fa\u4e8e\u7236\u7ec4\u4ef6\u7684\u5e03\u5c40\u89c4\u5219\u8fdb\u884c\u5e03\u5c40\u3002"),(0,r.kt)("p",null,"\u533a\u5206\u5e03\u5c40\u7684\u4e3b\u52a8\u548c\u88ab\u52a8\u662f\u4e3a\u4e86\u89e3\u51b3\u7236\u5b50\u7ec4\u4ef6\u5bbd\u9ad8\u90fd\u4e0d\u786e\u5b9a\u65f6\u7684\u5c3a\u5bf8\u8ba1\u7b97\u95ee\u9898\u3002\u4ee5\u4e0b\u62c9\u83dc\u5355\u4e3a\u4f8b\uff0c\u4e0b\u62c9\u83dc\u5355\u7684\u5bbd\u9ad8\u662f\u81ea\u9002\u5e94\u7684\uff0c\u91cc\u9762\u7684\u6bcf\u4e2a\u83dc\u5355\u9879\u7684\u5bbd\u5ea6\u90fd\u662f\u76f8\u540c\u7684\uff0c\u4e14\u6b63\u597d\u80fd\u5bb9\u7eb3\u5168\u90e8\u5185\u5bb9\u800c\u4e0d\u6362\u884c\u6216\u6ea2\u51fa\uff0c\u90a3\u4e48\u4e3a\u4e86\u8ba1\u7b97\u5b83\u4eec\u7684\u5c3a\u5bf8\uff0c\u6211\u4eec\u9700\u8981\u5148\u8ba1\u7b97\u6bcf\u4e2a\u83dc\u5355\u9879\u7684\u5c3a\u5bf8\uff0c\u6839\u636e\u5b83\u4eec\u7684\u5c3a\u5bf8\u8fdb\u884c\u7b80\u5355\u7684\u5e03\u5c40\u6765\u5f97\u51fa\u83dc\u5355\u7684\u5185\u5bb9\u5c3a\u5bf8\uff0c\u7136\u540e\u518d\u5bf9\u6bcf\u4e2a\u83dc\u5355\u9879\u5e03\u5c40\u4e00\u6b21\uff0c\u8ba9\u5b83\u4eec\u6839\u636e\u83dc\u5355\u7684\u5185\u5bb9\u5c3a\u5bf8\u8ba1\u7b97\u51fa\u81ea\u5df1\u7684\u5b9e\u9645\u5c3a\u5bf8\u3002\u5927\u81f4\u5e03\u5c40\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u89e6\u53d1\u6bcf\u4e2a\u83dc\u5355\u9879\u7684\u88ab\u52a8\u5e03\u5c40\uff0c\u521d\u59cb\u5e03\u5c40\u89c4\u5219\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"MAX_CONTENT"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528\u83dc\u5355\u9879\u7684\u5c3a\u5bf8\u8fdb\u884c\u5e03\u5c40\uff0c\u5f97\u5230\u83dc\u5355\u7684\u5185\u5bb9\u5c3a\u5bf8\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u518d\u6b21\u89e6\u53d1\u6bcf\u4e2a\u83dc\u5355\u9879\u7684\u88ab\u52a8\u5e03\u5c40\uff0c\u521d\u59cb\u5e03\u5c40\u89c4\u5219\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"FIXED"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u5b8c\u6210\uff0c\u6b64\u65f6\u6bcf\u4e2a\u83dc\u5355\u9879\u7684\u5bbd\u5ea6\u90fd\u7b49\u4e8e\u6700\u5927\u83dc\u5355\u9879\u7684\u5bbd\u5ea6\uff0c\u83dc\u5355\u7684\u5185\u5bb9\u5bbd\u5ea6\u7b49\u4e8e\u83dc\u5355\u9879\u7684\u5bbd\u5ea6\uff0c\u83dc\u5355\u7684\u5185\u5bb9\u9ad8\u5ea6\u7b49\u4e8e\u5168\u90e8\u83dc\u5355\u9879\u7684\u9ad8\u5ea6\u4e4b\u548c\u3002")),(0,r.kt)("h3",{id:"\u5e03\u5c40\u6d41\u7a0b"},"\u5e03\u5c40\u6d41\u7a0b"),(0,r.kt)("p",null,"\u5728 LCUI \u5f53\u524d\u7684\u5e03\u5c40\u5f15\u64ce\u8bbe\u8ba1\u4e2d\uff0c\u6b63\u5e38\u6d41\u5e03\u5c40\u548c\u5f39\u6027\u76d2\u5b50\u5e03\u5c40\u7684\u6d41\u7a0b\u662f\u76f8\u4f3c\u7684\uff0c\u90fd\u9700\u8981\u7ecf\u5386\u4ee5\u4e0b\u51e0\u4e2a\u9636\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f00\u59cb\uff1a"),"\u521b\u5efa\u5e03\u5c40\u4e0a\u4e0b\u6587\uff0c\u521d\u59cb\u5316\u5e03\u5c40\u6240\u9700\u7684\u4e00\u4e9b\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8f7d\u5165\uff1a"),"\u904d\u5386\u5b50\u7ec4\u4ef6\uff0c\u6839\u636e\u5b50\u7ec4\u4ef6\u7684\u76d2\u6a21\u578b\u5bf9\u5176\u8fdb\u884c\u5206\u7ec4\uff0c\u6bcf\u7ec4\u5b50\u7ec4\u4ef6\u5373\u4e3a\u4e00\u884c\u3002\u8f7d\u5165\u5b8c\u540e\u6839\u636e\u6bcf\u884c\u7684\u5bbd\u9ad8\u6765\u4f30\u7b97\u5185\u5bb9\u533a\u57df\u7684\u5bbd\u9ad8\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5e94\u7528\u5c3a\u5bf8\uff1a"),"\u6839\u636e\u5e03\u5c40\u89c4\u5219\u4e3a\u7ec4\u4ef6\u8bbe\u7f6e\u5408\u9002\u7684\u5c3a\u5bf8\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5e03\u5c40\uff1a"),"\u904d\u5386\u5b50\u7ec4\u4ef6\uff0c\u4e3a\u5b50\u7ec4\u4ef6\u7684\u5bbd\u9ad8\u5c5e\u6027\u8ba1\u7b97\u5b9e\u9645\u503c\u3002\u8fd9\u65f6\u5982\u679c\u5b50\u7ec4\u4ef6\u7684\u5bbd\u9ad8\u56e0\u6b64\u53d1\u751f\u53d8\u5316\u7684\u8bdd\u4f1a\u5bf9\u5b50\u7ec4\u4ef6\u8fdb\u884c\u5e03\u5c40\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5e03\u5c40\u81ea\u7531\u7ec4\u4ef6\uff1a"),"\u8ba1\u7b97\u7edd\u5bf9\u5b9a\u4f4d\u7684\u5b50\u7ec4\u4ef6\u7684\u4f4d\u7f6e\u548c\u5bbd\u9ad8\u3002\u5bf9\u4e8e\u7edd\u5bf9\u5b9a\u4f4d\u7684\u5b50\u7ec4\u4ef6\uff0c\u5b83\u4eec\u7684\u4f4d\u7f6e\u548c\u5bbd\u9ad8\u5e38\u5e38\u4f9d\u8d56\u7236\u7ec4\u4ef6\u7684\u5bbd\u9ad8\uff0c\u9700\u8981\u7b49\u5230\u8fd9\u4e2a\u9636\u6bb5\u518d\u8ba1\u7b97\u5b9e\u9645\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7ed3\u675f\uff1a"),"\u9500\u6bc1\u5e03\u5c40\u4e0a\u4e0b\u6587\u3002")),(0,r.kt)("h3",{id:"\u5f85\u529e\u4e8b\u9879"},"\u5f85\u529e\u4e8b\u9879"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u8bbe\u8ba1\u5e03\u5c40\u5f15\u64ce")),(0,r.kt)("p",null,"\u73b0\u6709\u7684\u5e03\u5c40\u5f15\u64ce\u662f\u4e0e LCUI \u7684\u7ec4\u4ef6\u7cfb\u7edf\u7ed1\u5b9a\u5728\u4e00\u8d77\u7684\uff0c\u800c\u4e14\u5e03\u5c40\u89c4\u5219\u7684\u5904\u7406\u6d41\u7a0b\u4e5f\u6bd4\u8f83\u590d\u6742\uff0c\u4e3a\u4e86\u964d\u4f4e\u7ef4\u62a4\u6210\u672c\uff0c\u7b80\u5316\u5e03\u5c40\u6d41\u7a0b\uff0c\u6211\u4eec\u5e94\u8be5\u91cd\u65b0\u8bbe\u8ba1\u5e03\u5c40\u5f15\u64ce\uff0c\u4f7f\u5b83\u80fd\u591f\u4f5c\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u9879\u76ee\u88ab\u7528\u4e8e\u5176\u4ed6\u9879\u76ee\u3002\u53ef\u4f9b\u53c2\u8003\u7684\u540c\u7c7b\u6848\u4f8b\u6709\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/yoga"},"https://github.com/facebook/yoga")),(0,r.kt)(a.Z,{mdxType:"DocCardList"}))}g.isMDXComponent=!0},7496:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiAAAAEsCAYAAAD6owj6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABxjSURBVHgB7d3LjxzV+Tfw4zcgC0uOibwADCj2xgtiCSKywNlwWQQWSIAEZAkEUJbc9rH9B4BhDeGyDCABEgvYcFtgFlixFRNLlhCOfFtZwgwyMRu/fuqnM2nG5fGUXfV45sznI7Wmq7u6uhmmz3l8zrdOrTl7TgEASPT/CgBAMgUIAJBOAQIApFOAAADpFCAAQDoFCACQTgECAKRTgAAA6RQgAEA6BQgAkE4BAgCkU4AAAOkUIABAOgUIAJBOAQIApFOAAADpFCAAQDoFCACQTgECAKRTgAAA6RQgAEA6BQgAkE4BAgCkU4AAAOl+tfOcMrG9e/eWTZs2zd8/ceLEkrZ//vnnsm/fvnLy5Mly3XXXTb49NzdXDhw4UH788ceycePGybfjfQ8ePNh9jmuvvXby7ePHj5dDhw51v+f169dPvn348OHy7bfflrVr15Z169albcd7x2PxWeKxqbfj/+VVV13V/b89cuTI5NuX8l261O2s717dzvru1e2s717dzvru1e3s717dzvru1e2s717dvpTvUr3P/6w5e04BAEhkCgYASJdSgMTwEwCsRvrAflcVABjJm2++OX//wQcf7DIwsyK78dlnn81vP/7442Vq77//fnnllVe6z/PMM88UlgcZEABGs2bNmvn7L7/88nkdfhQoTzzxxPx2Rhf00EMPdUXIXXfdVT799NPC8qAAAWA0swVIX4d/9913/2IEJKMLilGXt956qzzwwAPltttuKywPKVMwMf91++23FwBWjyg0vv/++/lpmDr9EtvxeN/+H3zwQfdcFApRMGzevHn+uc8//7zceuut3eujoNixY0f3fBw3pljidVH0/Pa3v+32vfPOO7vtOMW7vn8cd+Gx4j1DPPfYY4+VsekDL+Bsgn/9619nAWhfdCtxe/zxx7uf56Zh5p974403usfOFQXz+1XPPvvs/GP1dq64OPvdd991z+/cubN77FzBMP/8udGV7vnZx2b3ideE+lni5+yx4vgL3zOOOTZ9YL+Us2C2bdtWAFg9YnQhRPaiilGKsHCUIUYoIi8SYsrmn//8ZzcaESMWu3bt+sW+dZQj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"}}]);