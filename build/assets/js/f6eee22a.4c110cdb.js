"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9003],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return n?o.createElement(y,a(a({ref:t},l),{},{components:n})):o.createElement(y,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9195:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var o=n(3117),r=n(102),s=(n(7294),n(3905)),a=["components"],c={sidebar_position:6},i="sesamy-locked-content-container",p={unversionedId:"products/web-components/sesamy-locked-content-container",id:"products/web-components/sesamy-locked-content-container",title:"sesamy-locked-content-container",description:"Usage",source:"@site/docs/products/web-components/sesamy-locked-content-container.md",sourceDirName:"products/web-components",slug:"/products/web-components/sesamy-locked-content-container",permalink:"/docs/products/web-components/sesamy-locked-content-container",draft:!1,editUrl:"https://github.com/sesamyab/docs/blob/dev/docs/products/web-components/sesamy-locked-content-container.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"sesamy-button-container",permalink:"/docs/products/web-components/sesamy-button-container"},next:{title:"Javascript API",permalink:"/docs/products/web-components/javascript-api"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Basic usage",id:"basic-usage",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sesamy-locked-content-container"},"sesamy-locked-content-container"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"sesamy-locked-content-container")," component is used for wrapping a block that should only be available once the item is locked."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head></head>\n  <body>\n    <sesamy-locked-content-container\n      item-src="https://www-realtid-se-news-demo.vercel.app/artikel/112273"\n    >\n      <span>This content will appear only when the item is locked</span>\n      <sesamy-button\n        item-src="https://www-realtid-se-news-demo.vercel.app/artikel/112273"\n      ></sesamy-button>\n    </sesamy-locked-content-container>\n\n    <script\n      defer\n      src="https://assets.sesamy.com/scripts/web-components/sesamy-button-container.min.js"\n    ><\/script>\n    <script\n      defer\n      src="https://assets.sesamy.com/scripts/web-components/sesamy-button.min.js"\n    ><\/script>\n  </body>\n</html>\n')),(0,s.kt)("p",null,"You can pass the ",(0,s.kt)("inlineCode",{parentName:"p"},"item-src")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"pass")," attributes to it, or you can get those values from the ",(0,s.kt)("inlineCode",{parentName:"p"},"sesamy-content-data")," conmponent:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<sesamy-content-data id="123" item-src="https://www-realtid-se-news-demo.vercel.app/artikel/112273"></sesamy-content-data>\n    <sesamy-locked-content-container publisher-content-id="123">\n      <span>This content will appear only when the item is locked</span>\n      <sesamy-button></sesamy-button publisher-content-id="123">\n    </sesamy-locked-content-container>\n')))}d.isMDXComponent=!0}}]);