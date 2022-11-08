"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8329:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:3},u="Code Grant",s={unversionedId:"products/authentication/oauth2/code-grant",id:"products/authentication/oauth2/code-grant",title:"Code Grant",description:"The code grant flow works similar to the implicit grant flow, but instead of returning the access token directly to the browser a code is returned. This code can be resolved to a token using the client_secret.",source:"@site/docs/products/authentication/oauth2/code-grant.md",sourceDirName:"products/authentication/oauth2",slug:"/products/authentication/oauth2/code-grant",permalink:"/docs/products/authentication/oauth2/code-grant",draft:!1,editUrl:"https://github.com/sesamyab/docs/blob/dev/docs/products/authentication/oauth2/code-grant.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Implicit Grant",permalink:"/docs/products/authentication/oauth2/implicit-grant"},next:{title:"Client Credentials",permalink:"/docs/products/authentication/oauth2/client-credentials"}},l={},p=[{value:"Exchange authorization code for an access token",id:"exchange-authorization-code-for-an-access-token",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code-grant"},"Code Grant"),(0,a.kt)("p",null,"The code grant flow works similar to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/products/authentication/oauth2/implicit-grant"},"implicit grant flow"),", but instead of returning the access token directly to the browser a code is returned. This code can be resolved to a token using the client_secret."),(0,a.kt)("p",null,"A authorization code grant flow is initiated by redirecting the user to the login service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://login.sesamy.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&scope=openid&state=STATE&redirect_uri=REDIRECT_URI\n")),(0,a.kt)("p",null,"The following query properties are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"client_id (required)"),(0,a.kt)("li",{parentName:"ul"},"response_type (required). Needs to be set to code."),(0,a.kt)("li",{parentName:"ul"},"scope (required). A set of scopes that the generating token will have. See ",(0,a.kt)("a",{parentName:"li",href:"/docs/products/authentication/scopes"},"scopes")," for more info."),(0,a.kt)("li",{parentName:"ul"},"redirect_uri (required). The url where the user will be redirected once the authentication is completed."),(0,a.kt)("li",{parentName:"ul"},"state (optional). Pass a state that will be returned in the redirect querystring.")),(0,a.kt)("p",null,"Once a user is authenticated the user will be redirected back to the specified redirect_uri with the code as additional query string parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://example.com/some-page?code=AUTHORIZATION_CODE\n")),(0,a.kt)("p",null,"The code is valid for 15 minutes and can only be used once."),(0,a.kt)("h2",{id:"exchange-authorization-code-for-an-access-token"},"Exchange authorization code for an access token"),(0,a.kt)("p",null,"To exchange the authorization code for an access token, the app makes a POST request to the token endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST https://token.sesamy.com/oauth/token\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&code=CODE&grant_type=authorization_code\n")),(0,a.kt)("p",null,"The request will return the following response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json\n{\n  "access_token":"eyJz93a...k4laUWw",\n  "token_type":"Bearer",\n  "expires_in":86400\n}\n')))}h.isMDXComponent=!0}}]);