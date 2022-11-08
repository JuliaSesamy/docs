"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3940],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,h=p["".concat(c,".").concat(f)]||p[f]||l[f]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7217:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),s=["components"],a={sidebar_position:1},c="Configuration",u={unversionedId:"products/feeds/configuration/configuration",id:"products/feeds/configuration/configuration",title:"Configuration",description:"The Sesamy Access service can be configured in a variaty of ways depending on how the premium content is stored and if Sesamy Access is serving the public feed.",source:"@site/docs/products/feeds/configuration/configuration.md",sourceDirName:"products/feeds/configuration",slug:"/products/feeds/configuration/",permalink:"/docs/products/feeds/configuration/",draft:!1,editUrl:"https://github.com/sesamyab/docs/blob/dev/docs/products/feeds/configuration/configuration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/products/feeds/api"},next:{title:"Sources",permalink:"/docs/products/feeds/configuration/sources"}},d={},l=[{value:"Proxy Mode",id:"proxy-mode",level:2},{value:"Hosting integration",id:"hosting-integration",level:2},{value:"Private feed only",id:"private-feed-only",level:2}],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The Sesamy Access service can be configured in a variaty of ways depending on how the premium content is stored and if Sesamy Access is serving the public feed."),(0,i.kt)("h2",{id:"proxy-mode"},"Proxy Mode"),(0,i.kt)("p",null,"In proxy mode the Access service put in front of another hosting service and the public feed is served through Sesamy. This is the most flexible setup as it's possible to for instance delay public access to episodes independent of the current hosting platforms capabilities."),(0,i.kt)("p",null,"As Sesamy Access has access to the complete feed it can also generate any private feeds without any futher configuration."),(0,i.kt)("p",null,"The product and pricing information can either be added to the source feed using ",(0,i.kt)("a",{parentName:"p",href:"/docs/products/feeds/configuration/xml-extension"},"xml")," of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/products/feeds/configuration/description-fallback"},"description fields")),(0,i.kt)("p",null,"Existing feeds public feeds needs to be redirected to the Sesamy Access public feed."),(0,i.kt)("p",null,"It is important that the url of the source feeds are not made publically available since they will contain premium content."),(0,i.kt)("h2",{id:"hosting-integration"},"Hosting integration"),(0,i.kt)("p",null,"If the current hosting service is comaptible with Sesamy Access the proxy mode can be enabled within the hosting service without redirect the public feed. With hosting integration there's also no risk of exposing premium content as there's no public feed containing all content."),(0,i.kt)("h2",{id:"private-feed-only"},"Private feed only"),(0,i.kt)("p",null,"If none of the options above are possible due to the current hosting service it is also possible to only deliver the private feeds with Sesamy Access. In this case the private content needs to be made available in a separate feed and can be blended with the episodes in the public feed."),(0,i.kt)("p",null,"As the public feed isn't updated by Sesamy there's no automatic way to add links in the feed to the Sesamy Checkout and these links have to be manually added in the description fields and in the audio files."),(0,i.kt)("h1",{id:"bundles"},"Bundles"),(0,i.kt)("p",null,"Several products can be combined into a bundle, for instance it is possible to create a subscription that gives access to all the feeds from a publisher. Bundles are created in the Sesamy publishing tools and can not be created as part of the xml feeds."))}f.isMDXComponent=!0}}]);