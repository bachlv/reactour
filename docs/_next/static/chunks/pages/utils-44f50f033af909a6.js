(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{6303:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utils",function(){return r(4154)}])},4154:function(n,t,r){"use strict";function e(n,t,r,e,o,u,i){try{var c=n[u](i),l=c.value}catch(f){return void r(f)}c.done?t(l):Promise.resolve(l).then(e,o)}function o(n){return function(){var t=this,r=arguments;return new Promise((function(o,u){var i=n.apply(t,r);function c(n){e(i,o,u,c,l,"next",n)}function l(n){e(i,o,u,c,l,"throw",n)}c(void 0)}))}}r.r(t),r.d(t,{default:function(){return f}});var u=r(5163),i=r(2322),c=r(2784),l=r(8908);function f(){var n=(0,c.useState)(!1),t=n[0],r=n[1],e=(0,c.useState)(!1),f=e[0],a=e[1],s=(0,c.useRef)(null),d=(0,l.EL)(s,t);function v(){return(v=o((function(){var n;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return n={},[4,(0,l.ld)(s.current,n)];case 1:return t.sent(),r(!0),[2]}}))}))).apply(this,arguments)}return(0,c.useEffect)((function(){a((0,l.jF)(d))}),[d]),(0,i.jsxs)("div",{style:{borderWidth:4,borderStyle:"solid",borderColor:f?"green":"red"},children:[(0,i.jsx)("button",{onClick:function(){return v.apply(this,arguments)},children:"scroll"}),(0,i.jsx)("div",{ref:s,style:{marginTop:1e3,width:200,height:200,backgroundColor:"red"}})]})}},8908:function(n,t,r){"use strict";r.d(t,{At:function(){return g},Dz:function(){return f},EL:function(){return a},Fz:function(){return w},Jj:function(){return m},S1:function(){return v},Tw:function(){return h},XS:function(){return l},Xs:function(){return b},jF:function(){return y},ld:function(){return d},tQ:function(){return S},vq:function(){return p}});var e=r(2838),o=r(8530),u=r(2784),i=r(3771),c=r(7209),l=function(n){var t=n.mutationObservables,r=n.resizeObservables,e=n.refresh,o=function(n){var r=Array.from(n),o=!0,u=!1,i=void 0;try{for(var c,l=function(){var n=c.value;if(t){if(!n.attributes)return"continue";t.find((function(t){return n.matches(t)}))&&e(!0)}},f=r[Symbol.iterator]();!(o=(c=f.next()).done);o=!0)l()}catch(a){u=!0,i=a}finally{try{o||null==f.return||f.return()}finally{if(u)throw i}}},l=function(n){var t=Array.from(n),e=!0,o=!1,u=void 0;try{for(var i,c=function(){var n=i.value;if(r){if(!n.attributes)return"continue";r.find((function(t){return n.matches(t)}))&&s(a+1)}},l=t[Symbol.iterator]();!(e=(i=l.next()).done);e=!0)c()}catch(f){o=!0,u=f}finally{try{e||null==l.return||l.return()}finally{if(o)throw u}}},f=(0,u.useState)(0),a=f[0],s=f[1],d=(0,u.useRef)(document.documentElement||document.body);return(0,i.Z)(d,(function(n){var t=!0,r=!1,e=void 0;try{for(var u,i=n[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var c=u.value;0!==c.addedNodes.length&&(o(c.addedNodes),l(c.addedNodes)),0!==c.removedNodes.length&&(o(c.removedNodes),l(c.removedNodes))}}catch(f){r=!0,e=f}finally{try{t||null==i.return||i.return()}finally{if(r)throw e}}}),{childList:!0,subtree:!0}),(0,u.useEffect)((function(){if(r){var n=new c.Z((function(){e()})),t=!0,o=!1,u=void 0;try{for(var i,l=r[Symbol.iterator]();!(t=(i=l.next()).done);t=!0){var f=i.value,a=document.querySelector(f);a&&n.observe(a)}}catch(s){o=!0,u=s}finally{try{t||null==l.return||l.return()}finally{if(o)throw u}}return function(){n.disconnect()}}}),[r,a]),null};function f(n){var t=s;n&&(t=n.getBoundingClientRect());return t}function a(n,t){var r=(0,u.useState)(s),e=r[0],o=r[1],i=(0,u.useCallback)((function(){(null==n?void 0:n.current)&&o(f(null==n?void 0:n.current))}),[null==n?void 0:n.current]);return(0,u.useEffect)((function(){return i(),window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}}),[null==n?void 0:n.current,t]),e}var s={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0};function d(n,t){return new Promise((function(r){if(!(0,e.Z)(n,Element))throw new TypeError("Argument 1 must be an Element");var o=0,u=null,i=Object.assign({behavior:"smooth"},t);n.scrollIntoView(i),requestAnimationFrame((function t(){var e=null==n?void 0:n.getBoundingClientRect().top;if(e===u){if(o++>2)return r(null)}else o=0,u=e;requestAnimationFrame(t)}))}))}function v(n,t){var r=t.threshold,e=void 0===r?0:r,i=t.root,c=void 0===i?null:i,l=t.rootMargin,f=void 0===l?"0%":l,a=t.freezeOnceVisible,s=void 0!==a&&a,d=(0,u.useState)(),v=d[0],h=d[1],m=(null==v?void 0:v.isIntersecting)&&s,y=function(n){var t=(0,o.Z)(n,1)[0];h(t)};return(0,u.useEffect)((function(){var t=null==n?void 0:n.current;if(!!window.IntersectionObserver&&!m&&t){var r=new IntersectionObserver(y,{threshold:e,root:c,rootMargin:f});return r.observe(t),function(){return r.disconnect()}}}),[n,JSON.stringify(e),c,f,m]),v}function h(n){return n<0?0:n}function m(){return{w:Math.max(document.documentElement.clientWidth,window.innerWidth||0),h:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function y(n){var t=n.top,r=n.right,e=n.bottom,o=n.left,u=n.threshold,i=m(),c=i.w,l=i.h,f=function(n){return"object"===typeof n&&null!==n?{thresholdX:n.x||0,thresholdY:n.y||0}:{thresholdX:n||0,thresholdY:n||0}}(u),a=f.thresholdX,s=f.thresholdY;return t<0&&e-t>l||t>=0+s&&o>=0+a&&e<=l-s&&r<=c-a}var w=function(n){return/(left|right)/.test(n)},b=function(n,t){return n>t},g=function(n,t){return n>t};function p(n){return Object.keys(n).map((function(t){return{position:t,value:n[t]}})).sort((function(n,t){return t.value-n.value})).map((function(n){return n.position}))}var E=10;function S(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return Array.isArray(n)?n[0]?[n[0],n[1]?n[1]:n[0]]:[E,E]:[n,n]}}},function(n){n.O(0,[570,774,888,179],(function(){return t=6303,n(n.s=t);var t}));var t=n.O();_N_E=t}]);