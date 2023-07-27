"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,d=m["".concat(o,".").concat(s)]||m[s]||k[s]||i;return n?l.createElement(d,a(a({ref:t},c),{},{components:n})):l.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const i={description:"\u7ec4\u4ef6\u4ece\u521b\u5efa\u5230\u66f4\u65b0\u518d\u5230\u9500\u6bc1\u7684\u8fc7\u7a0b\u3002"},a="\u751f\u547d\u5468\u671f",p={unversionedId:"widget/lifecycle",id:"version-2.x/widget/lifecycle",title:"\u751f\u547d\u5468\u671f",description:"\u7ec4\u4ef6\u4ece\u521b\u5efa\u5230\u66f4\u65b0\u518d\u5230\u9500\u6bc1\u7684\u8fc7\u7a0b\u3002",source:"@site/versioned_docs/version-2.x/widget/lifecycle.md",sourceDirName:"widget",slug:"/widget/lifecycle",permalink:"/docs/widget/lifecycle",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/widget/lifecycle.md",tags:[],version:"2.x",frontMatter:{description:"\u7ec4\u4ef6\u4ece\u521b\u5efa\u5230\u66f4\u65b0\u518d\u5230\u9500\u6bc1\u7684\u8fc7\u7a0b\u3002"},sidebar:"docsSidebar",previous:{title:"\u4e8b\u4ef6",permalink:"/docs/widget/events"},next:{title:"\u7ed8\u5236\u6d41\u7a0b",permalink:"/docs/widget/painting"}},o={},u=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:3},{value:"\u6302\u8f7d\u9636\u6bb5",id:"\u6302\u8f7d\u9636\u6bb5",level:3},{value:"\u66f4\u65b0\u9636\u6bb5",id:"\u66f4\u65b0\u9636\u6bb5",level:3},{value:"\u5378\u8f7d\u9636\u6bb5",id:"\u5378\u8f7d\u9636\u6bb5",level:3},{value:"\u72b6\u6001",id:"\u72b6\u6001",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}],c={toc:u},m="wrapper";function k(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,l.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,r.kt)("h3",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff1a\u6302\u8f7d\u3001\u6e32\u67d3\u3001\u5378\u8f7d\uff0c\u4e0b\u56fe\u5c55\u793a\u4e86\u89e3\u7ec4\u4ef6\u5728\u6574\u4e2a\u751f\u547d\u5468\u671f\u4e2d\u6240\u6d89\u53ca\u5230\u7684\u65b9\u6cd5\u8c03\u7528\u3001\u539f\u578b\u65b9\u6cd5\u8c03\u7528\u548c\u72b6\u6001\u53d8\u5316\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2779).Z,width:"725",height:"850"})),(0,r.kt)("h3",{id:"\u6302\u8f7d\u9636\u6bb5"},"\u6302\u8f7d\u9636\u6bb5"),(0,r.kt)("p",null,"\u4ece\u7ec4\u4ef6\u5b9e\u4f8b\u88ab\u521b\u5efa\u518d\u5230\u88ab\u63d2\u5165\u6839\u7ec4\u4ef6\u6811\u4e2d\uff0c\u6240\u7ecf\u5386\u7684\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u7ec4\u4ef6\u5b9e\u4f8b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e\u7ec4\u4ef6\u7c7b\u578b\u7ed1\u5b9a\u5bf9\u5e94\u7684\u539f\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"proto->init()")," \u539f\u578b\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u7ec4\u4ef6\u9700\u8981\u5237\u65b0\u5168\u90e8\u6837\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u7236\u7ec4\u4ef6\u53d8\u4e3a\u53e6\u5916\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u89e6\u53d1 link \u4e8b\u4ef6\u3002")),(0,r.kt)("h3",{id:"\u66f4\u65b0\u9636\u6bb5"},"\u66f4\u65b0\u9636\u6bb5"),(0,r.kt)("p",null,"\u5f53\u7ec4\u4ef6\u88ab\u63d2\u5165\u5230\u6839\u7ec4\u4ef6\u6811\u4e2d\u540e\uff0c\u5728\u4e3b\u5faa\u73af\u4e2d\u8fd0\u884c\u7684\u7ec4\u4ef6\u66f4\u65b0\u673a\u5236\u4f1a\u8d1f\u8d23\u5b83\u7684\u66f4\u65b0\uff0c\u6bcf\u5f53\u6837\u5f0f\u53d1\u751f\u53d8\u5316\u65f6\u90fd\u4f1a\u89e6\u53d1\u66f4\u65b0\uff0c\u76f8\u5173\u64cd\u4f5c\u7684\u6267\u884c\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u66f4\u65b0\u4e0a\u4e0b\u6587\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u904d\u5386\u7236\u7ea7\u7ec4\u4ef6\u7684\u66f4\u65b0\u4e0a\u4e0b\u6587\uff0c\u5982\u679c\u91cc\u9762\u6709\u6837\u5f0f\u7f13\u5b58\u5219\u4f7f\u7528\u5b83\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u6837\u5f0f\u7f13\u5b58\u4e14\u7ec4\u4ef6\u81ea\u8eab\u6709\u8bbe\u7f6e\u6837\u5f0f\u7279\u5f81\u7801\uff0c\u5219\u4ee5\u8be5\u7279\u5f81\u7801\u4f5c\u4e3a\u7d22\u5f15\u952e\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u5339\u914d\u7684\u6837\u5f0f\u8868\uff0c\u5426\u5219\u4e3a\u7ec4\u4ef6\u751f\u6210\u4e34\u65f6\u7684\u6837\u5f0f\u9009\u62e9\u5668\u7136\u540e\u4ece\u5168\u5c40\u6837\u5f0f\u7f13\u5b58\u67e5\u8be2\u5339\u914d\u7684\u6837\u5f0f\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u66f4\u65b0\u4e0a\u4e0b\u6587\u4e2d\u7684\u5e03\u5c40\u5dee\u5f02\u5bf9\u6bd4\u7f13\u5b58\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u88ab\u6807\u8bb0\u4e3a\u9700\u8981\u66f4\u65b0\u81ea\u8eab\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u66f4\u65b0\u4e0a\u4e0b\u6587\u4e2d\u7684\u6837\u5f0f\u5bf9\u6bd4\u7f13\u5b58\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u904d\u5386\u4efb\u52a1\u5217\u8868\uff0c\u66f4\u65b0\u81ea\u8eab\u6837\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u6bd4\u66f4\u65b0\u524d\u540e\u7684\u6837\u5f0f\uff0c\u6839\u636e\u5bf9\u6bd4\u7ed3\u679c\u6765\u51b3\u5b9a\u662f\u5426\u9700\u8981\u6807\u8bb0\u65e0\u6548\u533a\u57df\u3001\u89e6\u53d1\u81ea\u8eab\u91cd\u65b0\u5e03\u5c40\u3001\u89e6\u53d1\u7236\u7ec4\u4ef6\u91cd\u65b0\u5e03\u5c40\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u66f4\u65b0\u5b50\u7ec4\u4ef6\uff0c\u5219\u904d\u5386\u5b50\u7ec4\u4ef6\u5217\u8868\u4e3a\u6bcf\u4e2a\u5b50\u7ec4\u4ef6\u8dd1\u4e00\u904d\u4e0a\u8ff0\u6d41\u7a0b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u6bd4\u66f4\u65b0\u524d\u540e\u7684\u5e03\u5c40\u5dee\u5f02\uff0c\u6839\u636e\u81ea\u8eab\u7684\u4f4d\u7f6e\u548c\u5c3a\u5bf8\u7684\u53d8\u5316\u60c5\u51b5\u6765\u51b3\u5b9a\u662f\u5426\u9700\u8981\u6807\u8bb0\u65e0\u6548\u533a\u57df\u3001\u89e6\u53d1\u7236\u7ec4\u4ef6\u7684\u91cd\u65b0\u5e03\u5c40\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7ed3\u675f\u66f4\u65b0\uff0c\u9500\u6bc1\u66f4\u65b0\u4e0a\u4e0b\u6587\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u5b50\u7ec4\u4ef6\u7684\u663e\u793a\u987a\u5e8f\u3002")),(0,r.kt)("p",null,"\u6574\u4e2a\u66f4\u65b0\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2814).Z,width:"525",height:"1158"})),(0,r.kt)("h3",{id:"\u5378\u8f7d\u9636\u6bb5"},"\u5378\u8f7d\u9636\u6bb5"),(0,r.kt)("p",null,"\u5f53\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Widget_Destroy()")," \u51fd\u6570\u9500\u6bc1\u7ec4\u4ef6\u65f6\uff0c\u7ec4\u4ef6\u4f1a\u88ab\u79fb\u52a8\u5230\u5783\u573e\u5217\u8868\u4e2d\u7b49\u5f85\u5220\u9664\u3002\u8fd9\u4e2a\u9636\u6bb5\u5185\u7684\u76f8\u5173\u64cd\u4f5c\u7684\u6267\u884c\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u72b6\u6001\u88ab\u5207\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETED")," \u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ece\u7236\u7ec4\u4ef6\u7684\u5b50\u7ec4\u4ef6\u5217\u8868\u4e2d\u79fb\u9664\u81ea\u5df1\uff0c\u89e6\u53d1 unlink \u4e8b\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8ffd\u52a0\u5230\u5783\u573e\u5217\u8868\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9500\u6bc1\u7ec4\u4ef6\u7684\u5b50\u7ec4\u4ef6\u5217\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6e05\u9664\u539f\u578b\u6570\u636e\uff0c\u8fd9\u65f6\u4f1a\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"proto->destroy()")," \u539f\u578b\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9500\u6bc1\u7ec4\u4ef6\u5b9e\u4f8b\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5783\u573e\u5217\u8868\u4e2d\u7684\u7ec4\u4ef6\u4f1a\u5728\u8fd9\u4e00\u5e27\u5185\u6240\u6709\u7ec4\u4ef6\u66f4\u65b0\u5b8c\u540e\u88ab\u5220\u9664\u3002\u91c7\u7528\u8fd9\u79cd\u5ef6\u8fdf\u6279\u91cf\u5220\u9664\u7ec4\u4ef6\u7684\u65b9\u5f0f\u662f\u4e3a\u4e86\u5e94\u5bf9\u540c\u4e00\u5e27\u5185\u8fd8\u6709\u5176\u5b83\u4e8b\u4ef6\u548c\u5b9a\u65f6\u5668\u7684\u5904\u7406\u5668\u9700\u8981\u64cd\u4f5c\u8be5\u7ec4\u4ef6\u7684\u60c5\u51b5\u3002")),(0,r.kt)("h3",{id:"\u72b6\u6001"},"\u72b6\u6001"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u7684\u72b6\u6001\u5171\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CREATED:")," \u7ec4\u4ef6\u521b\u5efa\u540e\u7684\u521d\u59cb\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UPDTED:")," \u7ec4\u4ef6\u7ecf\u7b2c\u4e00\u6b21\u66f4\u65b0\u540e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LAYOUTED:")," \u7ec4\u4ef6\u7ecf\u7b2c\u4e00\u6b21\u5e03\u5c40\u540e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"READY:")," \u7ec4\u4ef6\u5df2\u66f4\u65b0\u4e14\u5df2\u88ab\u5e03\u5c40\u3002\u8fd9\u65f6\u4f1a\u89e6\u53d1 READY \u4e8b\u4ef6\u5e76\u76f4\u63a5\u5207\u6362\u5230 NORMAL \u72b6\u6001\u3002\u5728 READY \u72b6\u6001\u4e4b\u524d\uff0c\u7ec4\u4ef6\u7684\u4f4d\u7f6e\u548c\u5c3a\u5bf8\u90fd\u662f\u4e0d\u51c6\u786e\u7684\uff0c\u5982\u679c\u4f60\u7ec4\u4ef6\u7684\u4e00\u4e9b\u64cd\u4f5c\u4f9d\u8d56\u8fd9\u4e9b\u5c5e\u6027\uff0c\u4f8b\u5982\uff1a\u5728\u521d\u6b21\u663e\u793a\u65f6\u5c06\u7ec4\u4ef6\u5b9a\u4f4d\u5728\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u7684\u9644\u8fd1\uff0c\u5219\u53ef\u4ee5\u5c06\u4e4b\u653e\u5230 READY \u4e8b\u4ef6\u5904\u7406\u5668\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NORMAL:")," \u7ec4\u4ef6\u6b63\u5e38\u53ef\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DELETED:")," \u7ec4\u4ef6\u5df2\u4ece\u6839\u7ec4\u4ef6\u6811\u4e2d\u5220\u9664\uff0c\u5373\u5c06\u88ab\u9500\u6bc1\u3002")),(0,r.kt)("p",null,"\u5176\u4e2d LAYOUTED \u548c READY \u662f\u8fc7\u6e21\u72b6\u6001\uff0c\u4e0e\u7ec4\u4ef6\u5f53\u524d\u72b6\u6001\u6df7\u5408\u540e\u4f1a\u53d8\u4e3a\u4e0b\u4e00\u4e2a\u72b6\u6001\u3002"),(0,r.kt)("h3",{id:"\u5f85\u529e\u4e8b\u9879"},"\u5f85\u529e\u4e8b\u9879"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u8bbe\u8ba1\u7ec4\u4ef6\u751f\u547d\u5468\u671f")),(0,r.kt)("p",null,"\u8003\u8651\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"link \u548c unlink \u4e8b\u4ef6\u4f3c\u4e4e\u7528\u5904\u4e0d\u5927\uff0c\u662f\u5426\u9700\u8981\u79fb\u9664\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u4e2d\u7684\u67d0\u4e9b\u9636\u6bb5\u662f\u901a\u8fc7\u89e6\u53d1\u4e8b\u4ef6\u6765\u901a\u77e5\u7ec4\u4ef6\u7684\uff0c\u662f\u5426\u9700\u8981\u7edf\u4e00\u6210\u51fd\u6570\u8c03\u7528\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981\u6dfb\u52a0\u66f4\u591a\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff1f\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Mounted()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"BeforeUnmount()"))))}k.isMDXComponent=!0},2779:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/widget-lifecircle-84e9a0dbfd77481b38aeb5132385f149.png"},2814:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/widget-update-a87663765c81f3cce557b2af1ea46a54.png"}}]);