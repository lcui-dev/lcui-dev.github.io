"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={},i="\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",a={unversionedId:"guides/layout/flexbox",id:"guides/layout/flexbox",title:"\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",description:"\u5f39\u6027\u76d2\u5b50\uff08Flexible Box\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u6309\u884c\u6216\u6309\u5217\u5e03\u5c40\u5143\u7d20\u7684\u4e00\u7ef4\u5e03\u5c40\u65b9\u6cd5\uff0c\u4f7f\u7528\u8be5\u5e03\u5c40\u7684\u7ec4\u4ef6\u5373\u4e3a\u5f39\u6027\u5bb9\u5668\uff08flex container\uff09\uff0c\u5bb9\u5668\u5185\u7684\u76f4\u7cfb\u5b50\u7ec4\u4ef6\u5219\u662f\u5f39\u6027\u9879\u76ee\uff08flex item\uff09\uff0c\u4ed6\u4eec\u53ef\u4ee5\u81a8\u80c0\u4ee5\u586b\u5145\u989d\u5916\u7684\u7a7a\u95f4\uff0c\u6536\u7f29\u4ee5\u9002\u5e94\u66f4\u5c0f\u7684\u7a7a\u95f4\uff0c\u5b83\u4eec\u5728 CSS \u5c5e\u6027\u90fd\u4e3a\u521d\u59cb\u7684\u60c5\u51b5\u4e0b\u90fd\u4f1a\u6709\u4e0b\u5217\u884c\u4e3a\uff1a",source:"@site/docs/guides/layout/flexbox.md",sourceDirName:"guides/layout",slug:"/guides/layout/flexbox",permalink:"/en/docs/next/guides/layout/flexbox",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/guides/layout/flexbox.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u5e03\u5c40",permalink:"/en/docs/next/guides/layout/"},next:{title:"\u6b63\u5e38\u6d41\u5e03\u5c40",permalink:"/en/docs/next/guides/layout/normal-flow-layout"}},p={},c=[],s={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5f39\u6027\u76d2\u5b50\u5e03\u5c40"},"\u5f39\u6027\u76d2\u5b50\u5e03\u5c40"),(0,o.kt)("p",null,"\u5f39\u6027\u76d2\u5b50\uff08Flexible Box\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u6309\u884c\u6216\u6309\u5217\u5e03\u5c40\u5143\u7d20\u7684\u4e00\u7ef4\u5e03\u5c40\u65b9\u6cd5\uff0c\u4f7f\u7528\u8be5\u5e03\u5c40\u7684\u7ec4\u4ef6\u5373\u4e3a\u5f39\u6027\u5bb9\u5668\uff08flex container\uff09\uff0c\u5bb9\u5668\u5185\u7684\u76f4\u7cfb\u5b50\u7ec4\u4ef6\u5219\u662f\u5f39\u6027\u9879\u76ee\uff08flex item\uff09\uff0c\u4ed6\u4eec\u53ef\u4ee5\u81a8\u80c0\u4ee5\u586b\u5145\u989d\u5916\u7684\u7a7a\u95f4\uff0c\u6536\u7f29\u4ee5\u9002\u5e94\u66f4\u5c0f\u7684\u7a7a\u95f4\uff0c\u5b83\u4eec\u5728 CSS \u5c5e\u6027\u90fd\u4e3a\u521d\u59cb\u7684\u60c5\u51b5\u4e0b\u90fd\u4f1a\u6709\u4e0b\u5217\u884c\u4e3a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9879\u76ee\u6392\u5217\u6210\u4e00\u884c\u3002\uff08\u5bb9\u5668\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"flex-direction")," \u5c5e\u6027\u7684\u521d\u59cb\u503c\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"row"),"\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u9879\u76ee\u4ece\u4e3b\u8f74\u7684\u8d77\u59cb\u7ebf\u5f00\u59cb\u3002\uff08\u5bb9\u5668\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"justify-content")," \u5c5e\u6027\u7684\u521d\u59cb\u503c\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"flex-start"),"\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u9879\u76ee\u4e0d\u4f1a\u5728\u4e3b\u8f74\u7ef4\u5ea6\u65b9\u5411\u62c9\u4f38\uff0c\u4f46\u53ef\u4ee5\u7f29\u5c0f\u3002\uff08\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"flex-grow")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"flex-shirnk")," \u5c5e\u6027\u7684\u521d\u59cb\u503c\u5206\u522b\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),"\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5143\u7d20\u88ab\u62c9\u5347\u6765\u586b\u5145\u4ea4\u53c9\u8f74\u5927\u5c0f\u3002\uff08\u5bb9\u5668\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"align-items")," \u5c5e\u6027\u521d\u59cb\u503c\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"stretch"),"\uff09")),(0,o.kt)("p",null,"\u8be5\u5e03\u5c40\u4e2d\u5b58\u5728\u4e3b\u8f74\uff08main axis\uff09\u548c\u4ea4\u53c9\u8f74\uff08cross axis\uff09\uff0c\u4e3b\u8f74\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-direction")," \u5b9a\u4e49\uff0c\u4ea4\u53c9\u8f74\u5782\u76f4\u4e8e\u4e3b\u8f74\uff0c\u5bb9\u5668\u5185\u7684\u9879\u76ee\u6cbf\u7740\u4e3b\u8f74\u6392\u5217\uff0c\u5f53\u4e3b\u8f74\u6392\u6ee1\u9879\u76ee\u540e\uff0c\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-wrap")," \u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," \u5219\u4f1a\u6cbf\u7740\u4ea4\u53c9\u8f74\u8ffd\u52a0\u65b0\u7684\u4e3b\u8f74\u5e76\u5728\u65b0\u4e3b\u8f74\u4e0a\u7ee7\u7eed\u6392\u5217\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5f39\u6027\u76d2\u5b50\u5e03\u5c40\u7684\u6982\u5ff5\u548c\u7528\u6cd5\uff0c\u53ef\u53c2\u8003 MDN \u4e0a\u7684\u6587\u6863\uff1a\u300a",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"},"flex \u5e03\u5c40\u7684\u57fa\u672c\u6982\u5ff5 - CSS\uff08\u5c42\u53e0\u6837\u5f0f\u8868\uff09 ","|"," MDN"),"\u300b")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"test/test_flex_layout.c")," \u5c55\u793a\u4e86\u5e38\u89c1\u5e03\u5c40\u7684\u5b9e\u73b0\u65b9\u6cd5\uff0c\u6548\u679c\u4e0e\u4e0b\u9762\u7684\u5728\u7ebf\u793a\u4f8b\u4e00\u81f4\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7f16\u8bd1\u5e76\u8fd0\u884c\u5b83\u6765\u4f53\u9a8c\u5b9e\u9645\u6548\u679c\u3002"),(0,o.kt)("iframe",{height:"600",style:{width:"100%"},scrolling:"no",title:"Flexbox",src:"https://codepen.io/lc-soft/embed/XWNObPw?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,o.kt)("a",{href:"https://codepen.io/lc-soft/pen/XWNObPw"},"Flexbox")," by Liu (",(0,o.kt)("a",{href:"https://codepen.io/lc-soft"},"@lc-soft"),") on ",(0,o.kt)("a",{href:"https://codepen.io"},"CodePen"),"."))}f.isMDXComponent=!0}}]);