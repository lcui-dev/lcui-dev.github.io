"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,d=c["".concat(o,".").concat(m)]||c[m]||k[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={description:"\u4ecb\u7ecd UI \u7684\u6e32\u67d3\u6d41\u7a0b\u548c\u6e32\u67d3\u6027\u80fd\u4f18\u5316\u65b9\u6cd5\u3002"},i="\u6027\u80fd",p={unversionedId:"rendering",id:"version-2.x/rendering",title:"\u6027\u80fd",description:"\u4ecb\u7ecd UI \u7684\u6e32\u67d3\u6d41\u7a0b\u548c\u6e32\u67d3\u6027\u80fd\u4f18\u5316\u65b9\u6cd5\u3002",source:"@site/versioned_docs/version-2.x/rendering.md",sourceDirName:".",slug:"/rendering",permalink:"/en/docs/rendering",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/rendering.md",tags:[],version:"2.x",frontMatter:{description:"\u4ecb\u7ecd UI \u7684\u6e32\u67d3\u6d41\u7a0b\u548c\u6e32\u67d3\u6027\u80fd\u4f18\u5316\u65b9\u6cd5\u3002"},sidebar:"docsSidebar",previous:{title:"\u7ed8\u5236\u6d41\u7a0b",permalink:"/en/docs/widget/painting"},next:{title:"CSS",permalink:"/en/docs/css/"}},o={},u=[{value:"\u50cf\u7d20\u7ba1\u9053",id:"\u50cf\u7d20\u7ba1\u9053",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:3},{value:"\u6837\u5f0f\u8ba1\u7b97",id:"\u6837\u5f0f\u8ba1\u7b97",level:3},{value:"\u5e03\u5c40",id:"\u5e03\u5c40",level:3},{value:"\u7ed8\u5236",id:"\u7ed8\u5236",level:3},{value:"\u5408\u6210",id:"\u5408\u6210",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}],s={toc:u},c="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6027\u80fd"},"\u6027\u80fd"),(0,l.kt)("p",null,"\u7528\u6237\u5e0c\u671b\u4ed6\u4eec\u4f7f\u7528\u7684\u56fe\u5f62\u754c\u9762\u5177\u6709\u4ea4\u4e92\u6027\u548c\u6d41\u7545\u6027\uff0c\u800c\u8fd9\u6b63\u662f\u4f60\u9700\u8981\u8d8a\u6765\u8d8a\u591a\u5730\u96c6\u4e2d\u65f6\u95f4\u548c\u7cbe\u529b\u7684\u5730\u65b9\u3002 \u754c\u9762\u4e0d\u4ec5\u8981\u52a0\u8f7d\u5feb\uff0c\u8fd8\u8981\u8fd0\u884c\u826f\u597d\uff0c \u6eda\u52a8\u5e94\u8be5\u5f88\u5feb\uff0c\u52a8\u753b\u548c\u4ea4\u4e92\u5e94\u8be5\u5982\u4e1d\u822c\u6d41\u7545\u3002"),(0,l.kt)("p",null,"\u8981\u7f16\u5199\u9ad8\u6027\u80fd\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u9700\u8981\u4e86\u89e3 LCUI \u5982\u4f55\u6e32\u67d3\u754c\u9762\uff0c\u5e76\u786e\u4fdd\u4f60\u7f16\u5199\u7684\u4ee3\u7801\u4ee5\u53ca\u7b2c\u4e09\u65b9\u4ee3\u7801\u5c3d\u53ef\u80fd\u9ad8\u6548\u5730\u8fd0\u884c\u3002"),(0,l.kt)("h3",{id:"\u50cf\u7d20\u7ba1\u9053"},"\u50cf\u7d20\u7ba1\u9053"),(0,l.kt)("p",null," \u201c\u6e32\u67d3\u201d\u5c31\u662f\u5c06\u7ec4\u4ef6\u6570\u636e\u8f6c\u53d8\u4e3a\u50cf\u7d20\u6570\u636e\uff0c\u8fd9\u4e2a\u8f6c\u53d8\u5982\u540c\u4e00\u6761\u5305\u542b\u5f88\u591a\u533a\u57df\u7684\u5355\u5411\u7ba1\u9053\uff0c\u7ec4\u4ef6\u6570\u636e\u7ecf\u8fc7\u7ba1\u9053\u4e2d\u7684\u6bcf\u4e2a\u533a\u57df\u7684\u5904\u7406\u6700\u7ec8\u53d8\u6210\u50cf\u7d20\u6570\u636e\u3002\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u7ba1\u9053\u79f0\u4e3a\u50cf\u7d20\u7ba1\u9053\uff0c\u5b83\u7684\u7ed3\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u50cf\u7d20\u7ba1\u9053\u7684\u5404\u4e2a\u533a\u57df",src:n(3669).Z,width:"786",height:"94"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4e8b\u4ef6\uff1a"),"\u754c\u9762\u7684\u66f4\u65b0\u662f\u7531\u4e8b\u4ef6\u9a71\u52a8\u7684\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u5728\u4e8b\u4ef6\u5904\u7406\u5668\u4e2d\u5b9e\u73b0\u4e00\u4e9b\u64cd\u4f5c\u548c\u89c6\u89c9\u53d8\u5316\u7684\u6548\u679c\u3002\u6bd4\u5982\u663e\u793a\u4e00\u4e2a\u52a0\u8f7d\u4e2d\u52a8\u753b\u3001\u5207\u6362\u5230\u53e6\u4e00\u4e2a\u754c\u9762\u3001\u6216\u8005\u5f80\u754c\u9762\u91cc\u6dfb\u52a0\u4e00\u4e9b\u5185\u5bb9\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6837\u5f0f\u8ba1\u7b97\uff1a"),"\u6b64\u8fc7\u7a0b\u662f\u6839\u636e\u5339\u914d\u9009\u62e9\u5668\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},".button")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},".list .list-item"),"\uff09\u8ba1\u7b97\u51fa\u54ea\u4e9b\u7ec4\u4ef6\u5e94\u7528\u54ea\u4e9b CSS \u89c4\u5219\u7684\u8fc7\u7a0b\u3002\u4ece\u4e2d\u77e5\u9053\u89c4\u5219\u4e4b\u540e\uff0c\u5c06\u5e94\u7528\u89c4\u5219\u5e76\u8ba1\u7b97\u6bcf\u4e2a\u5143\u7d20\u7684\u6700\u7ec8\u6837\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5e03\u5c40\uff1a")," \u5728\u77e5\u9053\u5bf9\u4e00\u4e2a\u7ec4\u4ef6\u5e94\u7528\u54ea\u4e9b\u89c4\u5219\u4e4b\u540e\uff0cLCUI \u5373\u53ef\u5f00\u59cb\u8ba1\u7b97\u5b83\u8981\u5360\u636e\u7684\u7a7a\u95f4\u5927\u5c0f\u53ca\u5176\u5728\u5c4f\u5e55\u7684\u4f4d\u7f6e\u3002LCUI \u6240\u91c7\u7528\u7684\u7c7b\u4f3c\u4e8e\u7f51\u9875\u7684\u5e03\u5c40\u6a21\u5f0f\u610f\u5473\u7740\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u80fd\u5f71\u54cd\u5176\u4ed6\u7ec4\u4ef6\uff0c\u4f8b\u5982\u66f4\u6539\u7ec4\u4ef6\u7684\u5bbd\u5ea6\u4f1a\u5f71\u54cd\u5230\u5b50\u7ec4\u4ef6\u7684\u4f4d\u7f6e\u548c\u5bbd\u5ea6\u4ee5\u53ca\u7ec4\u4ef6\u6811\u4e2d\u5404\u5904\u7684\u8282\u70b9\uff0c\u56e0\u6b64\u5e03\u5c40\u8fc7\u7a0b\u662f\u7ecf\u5e38\u53d1\u751f\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7ed8\u5236\uff1a"),"\u7ed8\u5236\u662f\u586b\u5145\u50cf\u7d20\u7684\u8fc7\u7a0b\u3002\u5b83\u6d89\u53ca\u7ed8\u51fa\u6587\u672c\u3001\u989c\u8272\u3001\u56fe\u50cf\u3001\u8fb9\u6846\u548c\u9634\u5f71\uff0c\u57fa\u672c\u4e0a\u5305\u62ec\u5143\u7d20\u7684\u6bcf\u4e2a\u53ef\u89c6\u90e8\u5206\u3002\u7ed8\u5236\u4e00\u822c\u662f\u5728\u591a\u4e2a\u8868\u9762\uff08\u901a\u5e38\u79f0\u4e3a\u5c42\uff09\u4e0a\u5b8c\u6210\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5408\u6210\uff1a"),"\u7531\u4e8e\u9875\u9762\u7684\u5404\u90e8\u5206\u53ef\u80fd\u88ab\u7ed8\u5236\u5230\u591a\u5c42\uff0c\u7531\u6b64\u5b83\u4eec\u9700\u8981\u6309\u6b63\u786e\u987a\u5e8f\u7ed8\u5236\u5230\u5c4f\u5e55\u4e0a\uff0c\u4ee5\u4fbf\u6b63\u786e\u6e32\u67d3\u754c\u9762\u3002\u5bf9\u4e8e\u4e0e\u53e6\u4e00\u5143\u7d20\u91cd\u53e0\u7684\u5143\u7d20\u6765\u8bf4\uff0c\u8fd9\u70b9\u7279\u522b\u91cd\u8981\uff0c\u56e0\u4e3a\u4e00\u4e2a\u9519\u8bef\u53ef\u80fd\u4f7f\u4e00\u4e2a\u5143\u7d20\u9519\u8bef\u5730\u51fa\u73b0\u5728\u53e6\u4e00\u4e2a\u5143\u7d20\u7684\u4e0a\u5c42\u3002")),(0,l.kt)("p",null,"\u7ba1\u9053\u7684\u6bcf\u4e2a\u90e8\u5206\u90fd\u6709\u673a\u4f1a\u4ea7\u751f\u5361\u987f\uff0c\u56e0\u6b64\u52a1\u5fc5\u51c6\u786e\u4e86\u89e3\u4f60\u7684\u4ee3\u7801\u89e6\u53d1\u7ba1\u9053\u7684\u54ea\u4e9b\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u4e0d\u4e00\u5b9a\u6bcf\u5e27\u90fd\u603b\u662f\u4f1a\u7ecf\u8fc7\u7ba1\u9053\u6bcf\u4e2a\u90e8\u5206\u7684\u5904\u7406\u3002\u5728\u5b9e\u73b0\u89c6\u89c9\u53d8\u5316\u65f6\uff0c\u7ba1\u9053\u9488\u5bf9\u6307\u5b9a\u5e27\u7684\u8fd0\u884c\u901a\u5e38\u6709\u4e09\u79cd\u65b9\u5f0f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. \u4e8b\u4ef6 ",">"," \u6837\u5f0f ",">"," \u5e03\u5c40 ",">"," \u7ed8\u5236 ",">"," \u5408\u6210")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3669).Z,width:"786",height:"94"})),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4fee\u6539\u4e86\u7ec4\u4ef6\u7684\u5e03\u5c40\u5c5e\u6027\uff0c\u5373\u6539\u53d8\u4e86\u7ec4\u4ef6\u7684\u51e0\u4f55\u5c5e\u6027\uff08\u4f8b\u5982\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u3001\u5de6\u4fa7\u6216\u9876\u90e8\u4f4d\u7f6e\u7b49\uff09\uff0c\u90a3\u4e48 LCUI \u5c06\u5fc5\u987b\u68c0\u67e5\u6240\u6709\u5176\u5b83\u7ec4\u4ef6\uff0c\u7136\u540e\u5bf9\u754c\u9762\u8fdb\u884c\u91cd\u65b0\u5e03\u5c40\u3002\u4efb\u4f55\u53d7\u5f71\u54cd\u7684\u90e8\u5206\u90fd\u9700\u8981\u91cd\u65b0\u7ed8\u5236\uff0c\u800c\u4e14\u6700\u7ec8\u7ed8\u5236\u7684\u5143\u7d20\u9700\u8fdb\u884c\u5408\u6210\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. \u4e8b\u4ef6 ",">"," \u6837\u5f0f ",">"," \u7ed8\u5236 ",">"," \u5408\u6210")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(528).Z,width:"786",height:"94"})),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4fee\u6539\u4e86\u7ec4\u4ef6\u7684\u7ed8\u5236\u5c5e\u6027\uff0c\u5373\u4e0d\u4f1a\u5f71\u54cd\u754c\u9762\u5e03\u5c40\u7684\u5c5e\u6027\uff08\u4f8b\u5982\u80cc\u666f\u56fe\u7247\u3001\u6587\u5b57\u989c\u8272\u6216\u9634\u5f71\u7b49\uff09\uff0c\u5219 LCUI \u4f1a\u8df3\u8fc7\u5e03\u5c40\uff0c\u4f46\u4ecd\u5c06\u6267\u884c\u7ed8\u5236\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. \u4e8b\u4ef6 ",">"," \u6837\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3560).Z,width:"786",height:"94"})),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u66f4\u6539\u7ec4\u4ef6\u7684\u4e00\u4e2a\u65e2\u4e0d\u8981\u5e03\u5c40\u4e5f\u4e0d\u8981\u7ed8\u5236\u7684\u5c5e\u6027\uff08\u4f8b\u5982\uff1apointer-events\uff09\uff0c\u5219 LCUI \u5c06\u5728\u8ba1\u7b97\u5b8c\u6837\u5f0f\u540e\u8df3\u8fc7\u5269\u4e0b\u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u6b64\u7ba1\u9053\u7684\u5404\u4e2a\u4e0d\u540c\u90e8\u5206\u3002\u6211\u4eec\u4f1a\u4ee5\u4e00\u4e9b\u5e38\u89c1\u95ee\u9898\u4e3a\u4f8b\uff0c\u9610\u8ff0\u5982\u4f55\u8bca\u65ad\u548c\u4fee\u6b63\u5b83\u4eec\u3002"),(0,l.kt)("h3",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u4e8b\u4ef6\u5904\u7406\u5668\u7ecf\u5e38\u4f1a\u89e6\u53d1\u89c6\u89c9\u53d8\u5316\u3002\u6709\u65f6\u662f\u76f4\u63a5\u901a\u8fc7\u6837\u5f0f\u64cd\u4f5c\uff0c\u6709\u65f6\u662f\u4f1a\u4ea7\u751f\u89c6\u89c9\u53d8\u5316\u7684\u8ba1\u7b97\uff0c\u4f8b\u5982\u641c\u7d22\u6570\u636e\u6216\u5c06\u5176\u6392\u5e8f\u3002\u65f6\u673a\u4e0d\u5f53\u6216\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u4ee3\u7801\u53ef\u80fd\u662f\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\u7684\u5e38\u89c1\u539f\u56e0\u3002\u60a8\u5e94\u5f53\u8bbe\u6cd5\u5c3d\u53ef\u80fd\u51cf\u5c11\u5176\u5f71\u54cd\u3002"),(0,l.kt)("p",null,"\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u5c06\u4e8b\u4ef6\u5904\u7406\u5668\u4e2d\u7684\u8017\u65f6\u957f\u7684\u4ee3\u7801\u4ece\u4e3b\u7ebf\u7a0b\u79fb\u52a8\u5230\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u8be6\u89c1",(0,l.kt)("a",{parentName:"p",href:"/en/docs/app/worker"},"\u5de5\u4f5c\u7ebf\u7a0b"),"\u7ae0\u8282\u3002\u4e0d\u8fc7\u5728\u5de5\u4f5c\u7ebf\u7a0b\u4e0a\u4f60\u5fc5\u987b\u786e\u4fdd\u8fd9\u4e9b\u4ee3\u7801\u4e0d\u4f1a\u64cd\u4f5c UI \u76f8\u5173\u8d44\u6e90\uff0c \u5982\u679c\u4f60\u7684\u5de5\u4f5c\u5fc5\u987b\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u6267\u884c\uff0c\u8bf7\u8003\u8651\u4e00\u79cd\u5206\u6279\u5904\u7406\u7684\u65b9\u6cd5\uff0c\u5c06\u5927\u4efb\u52a1\u5206\u5272\u4e3a\u5c0f\u4efb\u52a1\uff0c\u6bcf\u4e2a\u5c0f\u4efb\u52a1\u6240\u5360\u65f6\u95f4\u4e0d\u8d85\u8fc7\u51e0\u6beb\u79d2\uff0c\u7136\u540e\u4f7f\u7528\u5b9a\u65f6\u5668\u9010\u4e2a\u6267\u884c\u8fd9\u4e9b\u4efb\u52a1\u3002"),(0,l.kt)("h3",{id:"\u6837\u5f0f\u8ba1\u7b97"},"\u6837\u5f0f\u8ba1\u7b97"),(0,l.kt)("p",null,"\u901a\u8fc7\u6dfb\u52a0\u548c\u5220\u9664\u7ec4\u4ef6\uff0c\u66f4\u6539\u5c5e\u6027\u3001\u7c7b\u6765\u66f4\u6539\u7ec4\u4ef6\uff0c\u90fd\u4f1a\u5bfc\u81f4 LCUI \u91cd\u65b0\u8ba1\u7b97\u7ec4\u4ef6\u6837\u5f0f\uff0c\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\u8fd8\u4f1a\u5bf9\u6574\u4e2a\u754c\u9762\u6216\u754c\u9762\u7684\u4e00\u90e8\u5206\u8fdb\u884c\u5e03\u5c40\u3002"),(0,l.kt)("p",null,"\u8ba1\u7b97\u6837\u5f0f\u7684\u7b2c\u4e00\u90e8\u5206\u662f\u521b\u5efa\u4e00\u7ec4\u5339\u914d\u9009\u62e9\u5668\uff0c\u4e5f\u5c31\u662f\u8ba1\u7b97\u51fa\u7ed9\u6307\u5b9a\u5143\u7d20\u5e94\u7528\u54ea\u4e9b\u7c7b\u3001\u4f2a\u9009\u62e9\u5668\u548c ID\u3002\u7b2c\u4e8c\u90e8\u5206\u6d89\u53ca\u4ece\u5339\u914d\u9009\u62e9\u5668\u4e2d\u83b7\u53d6\u6240\u6709\u6837\u5f0f\u89c4\u5219\uff0c\u5e76\u8ba1\u7b97\u51fa\u6b64\u5143\u7d20\u7684\u6700\u7ec8\u6837\u5f0f\u3002"),(0,l.kt)("p",null,"\u6982\u8981\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u9009\u62e9\u5668\u7684\u590d\u6742\u5ea6\uff1b\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"http://getbem.com/introduction/"},"BEM")," \u8fd9\u79cd\u4ee5\u7c7b\u4e3a\u4e2d\u5fc3\u7684\u65b9\u6cd5\u8bba\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u6570\u91cf\u591a\u4e14\u6837\u5f0f\u76f8\u540c\u7684\u7ec4\u4ef6\u9884\u5148\u751f\u6210\u6837\u5f0f\u54c8\u5e0c\u503c\uff0c\u4ee5\u51cf\u5c11\u91cd\u590d\u7684\u6837\u5f0f\u5339\u914d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u542b\u6709\u5927\u91cf\u5b50\u7ec4\u4ef6\u7684\u5bb9\u5668\u7ec4\u4ef6\u8bbe\u7f6e\u66f4\u65b0\u89c4\u5219\uff0c\u544a\u8bc9 LCUI \u662f\u5426\u9700\u8981\u7f13\u5b58\u6837\u5f0f\u8868\u3001\u662f\u5426\u4ec5\u66f4\u65b0\u53ef\u89c1\u7684\u5b50\u7ec4\u4ef6\u3001\u54ea\u4e9b\u53d8\u52a8\u53ef\u4ee5\u5ffd\u7565\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u9700\u8981\u8ba1\u7b97\u5176\u6837\u5f0f\u7684\u7ec4\u4ef6\u6570\u91cf\u3002")),(0,l.kt)("h3",{id:"\u5e03\u5c40"},"\u5e03\u5c40"),(0,l.kt)("p",null,"\u5e03\u5c40\u662f\u8ba1\u7b97\u5404\u7ec4\u4ef6\u51e0\u4f55\u4fe1\u606f\u7684\u8fc7\u7a0b\uff1a\u7ec4\u4ef6\u7684\u5927\u5c0f\u4ee5\u53ca\u5728\u754c\u9762\u4e2d\u7684\u4f4d\u7f6e\u3002\u6839\u636e\u6240\u7528\u7684 CSS\u3001\u7ec4\u4ef6\u7684\u5185\u5bb9\u6216\u7236\u7ea7\u7ec4\u4ef6\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u5c06\u6709\u663e\u5f0f\u6216\u9690\u542b\u7684\u5927\u5c0f\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u4e0e\u6837\u5f0f\u8ba1\u7b97\u76f8\u4f3c\uff0c\u5e03\u5c40\u5f00\u9500\u7684\u76f4\u63a5\u8003\u8651\u56e0\u7d20\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9700\u8981\u5e03\u5c40\u7684\u5143\u7d20\u6570\u91cf\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8fd9\u4e9b\u5e03\u5c40\u7684\u590d\u6742\u5ea6\u3002")),(0,l.kt)("p",null,"\u6982\u8981\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u7684\u6570\u91cf\u5c06\u5f71\u54cd\u6027\u80fd\uff1b\u5e94\u5c3d\u53ef\u80fd\u907f\u514d\u89e6\u53d1\u91cd\u65b0\u5e03\u5c40\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8bc4\u4f30\u5e03\u5c40\u6a21\u578b\u7684\u6027\u80fd\uff1b\u5f39\u6027\u76d2\u5b50\uff08Flexbox\uff09\u4e00\u822c\u6bd4\u5757\uff08Block\uff09\u5e03\u5c40\u6a21\u578b\u66f4\u6162\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bbd\u9ad8\u4e3a\u56fa\u5b9a\u503c\u7684\u7ec4\u4ef6\u6709\u7740\u8f83\u4f4e\u7684\u91cd\u65b0\u5e03\u5c40\u6210\u672c\uff1b\u8fd9\u79cd\u7ec4\u4ef6\u5728\u91cd\u65b0\u5e03\u5c40\u65f6\u65e0\u9700\u518d\u904d\u5386\u5b50\u7ec4\u4ef6\u6811\u6765\u8ba1\u7b97\u5185\u5bb9\u5bbd\u9ad8\uff0c\u800c\u4e14\u80fd\u51cf\u5c11\u56e0\u5176\u7236\u7ec4\u4ef6\u548c\u5b50\u7ec4\u4ef6\u7684\u51e0\u4f55\u5c5e\u6027\u53d8\u5316\u800c\u89e6\u53d1\u7684\u91cd\u65b0\u5e03\u5c40\u6b21\u6570\u3002")),(0,l.kt)("h3",{id:"\u7ed8\u5236"},"\u7ed8\u5236"),(0,l.kt)("p",null,"\u7ed8\u5236\u662f\u586b\u5145\u50cf\u7d20\u7684\u8fc7\u7a0b\uff0c\u50cf\u7d20\u6700\u7ec8\u5408\u6210\u5230\u7528\u6237\u7684\u5c4f\u5e55\u4e0a\u3002 \u5b83\u5f80\u5f80\u662f\u7ba1\u9053\u4e2d\u8fd0\u884c\u65f6\u95f4\u6700\u957f\u7684\u4efb\u52a1\uff0c\u5e94\u5c3d\u53ef\u80fd\u907f\u514d\u6b64\u4efb\u52a1\u3002"),(0,l.kt)("p",null,"\u6982\u8981\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u66f4\u6539\u4efb\u4f55\u5c5e\u6027\u59cb\u90fd\u4f1a\u89e6\u53d1\u7ed8\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7ed8\u5236\u901a\u5e38\u662f\u50cf\u7d20\u7ba1\u9053\u4e2d\u5f00\u9500\u6700\u5927\u7684\u90e8\u5206\uff1b\u5e94\u5c3d\u53ef\u80fd\u907f\u514d\u7ed8\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u91cf\u4e14\u5c3a\u5bf8\u5c0f\u7684\u7ed8\u5236\u533a\u57df\u4f1a\u964d\u4f4e\u7ed8\u5236\u6027\u80fd\uff0c\u4f46\u597d\u5728 LCUI \u5df2\u7ecf\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u4e86\u533a\u57df\u5408\u5e76\u548c\u591a\u4e2a\u533a\u57df\u5e76\u884c\u7ed8\u5236\u7b49\u4f18\u5316\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4f60\u4e0d\u7528\u8003\u8651\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e opacity \u548c box-shadow \u5c5e\u6027\u4f1a\u89e6\u53d1\u4f7f\u7528\u72ec\u7acb\u6e32\u67d3\u5c42\uff0c\u7ec4\u4ef6\u53ca\u5176\u5b50\u7ec4\u4ef6\u90fd\u88ab\u5728\u8be5\u6e32\u67d3\u5c42\u4e2d\u7ed8\u5236\uff0c\u5728\u5168\u90e8\u7ed8\u5236\u5b8c\u540e\uff0c\u8be5\u6e32\u67d3\u5c42\u7684\u5185\u5bb9\u624d\u4f1a\u88ab\u5408\u6210\u5230\u76ee\u6807\u9762\u4e0a\u3002")),(0,l.kt)("h3",{id:"\u5408\u6210"},"\u5408\u6210"),(0,l.kt)("p",null,"\u7531\u4e8e LCUI \u8fd8\u672a\u5f15\u5165\u52a8\u753b\u548c\u53d8\u6362\u7cfb\u7edf\uff0c\u6211\u4eec\u5148\u6682\u65f6\u8df3\u8fc7\u8fd9\u65b9\u9762\u7684\u8bb2\u89e3\u3002"),(0,l.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,"\u672c\u6587\u7684\u5185\u5bb9\u7ed3\u6784\u548c\u8868\u8fbe\u65b9\u5f0f\u53c2\u8003\u81ea\u300a",(0,l.kt)("a",{parentName:"p",href:"https://developers.google.cn/web/fundamentals/performance/rendering"},"\u6e32\u67d3\u6027\u80fd ","|"," Web ","|"," Google Developer"),"\u300b\u3002"),(0,l.kt)("h3",{id:"\u5f85\u529e\u4e8b\u9879"},"\u5f85\u529e\u4e8b\u9879"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6dfb\u52a0")," ",(0,l.kt)("inlineCode",{parentName:"p"},"LCUI_RequestAnimationFrame()")," ",(0,l.kt)("strong",{parentName:"p"},"\u51fd\u6570")),(0,l.kt)("p",null,"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame"},"window.requestAnimationFrame")," \u7684\u8bbe\u8ba1\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u6e32\u67d3\u6027\u80fd\u76d1\u89c6\u5668")),(0,l.kt)("p",null,"\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lc-soft/LCUI/issues/192"},"#","192")," \u4e2d\u7684\u5185\u5bb9\u3002"))}k.isMDXComponent=!0},3669:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pixel-pipe-1-b699897e688af5cb94cc1a86a1c3ab64.png"},528:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pixel-pipe-2-503b77f027a6bf044d507d902f39c418.png"},3560:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pixel-pipe-3-035f4d4f5016fdd55eb532b50b4155c2.png"}}]);