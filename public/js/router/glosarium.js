!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var a,u,c=0,s=[];c<e.length;c++)u=e[c],o[u]&&s.push(o[u][0]),o[u]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);for(n&&n(e,r,i);s.length;)s.shift()()};var r={},o={4:0};e.e=function(t){function n(){a.onerror=a.onload=null,clearTimeout(u);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}if(0===o[t])return Promise.resolve();if(o[t])return o[t][2];var r=new Promise(function(e,n){o[t]=[e,n]});o[t][2]=r;var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,e.nc&&a.setAttribute("nonce",e.nc),a.src=e.p+"js/"+({}[t]||t)+".js";var u=setTimeout(n,12e4);return a.onerror=a.onload=n,i.appendChild(a),r},e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw t},e(e.s=278)}({1:function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var c=Object.create(u.computed||null);Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}}),u.computed=c}return{esModule:o,exports:i,options:u}}},15:function(t,e,n){"use strict";function r(t){return function(e){n.e(1).then(function(){var r=[n(39)("./"+t+".vue")];e.apply(null,r)}.bind(this)).catch(n.oe)}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3);Vue.component("glosarium-word-latest",n(34)),Vue.component("glosarium-category-all",n(33)),Object.defineProperty(Vue.prototype,"$bus",{get:function(){return this.$root.bus}}),window.bus=new Vue({}),Vue.use(o.a);var i=[{path:"/",name:"index",component:r("glosarium/word/index")},{path:"/category/:slug",name:"glosarium.category.show",component:r("glosarium/category/show")},{path:"/:category/:word",name:"glosarium.word.show",component:r("glosarium/word/show")},{path:"/category",name:"glosarium.category",component:r("glosarium/category/index")},{path:"/contact",name:"contact",component:r("contact/form")}],a=new o.a({routes:i});new Vue({router:a,data:{bus:bus,app:{search:!1,auth:Laravel.auth}}}).$mount("#app")},278:function(t,e,n){t.exports=n(15)},3:function(t,e,n){"use strict";function r(t,e){}function o(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:r(!1,'props in "'+t.path+'" is a '+typeof e+", expecting an object, function or boolean.")}}function i(t,e){if(void 0===e&&(e={}),t){var n;try{n=a(t)}catch(t){n={}}for(var r in e)n[r]=e[r];return n}return e}function a(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=$t(n.shift()),o=n.length>0?$t(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function u(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return At(e);if(Array.isArray(n)){var r=[];return n.slice().forEach(function(t){void 0!==t&&(null===t?r.push(At(e)):r.push(At(e)+"="+At(t)))}),r.join("&")}return At(e)+"="+At(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function c(t,e,n){var r={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:e.query||{},params:e.params||{},fullPath:p(e),matched:t?s(t):[]};return n&&(r.redirectedFrom=p(n)),Object.freeze(r)}function s(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function p(t){var e=t.path,n=t.query;void 0===n&&(n={});var r=t.hash;return void 0===r&&(r=""),(e||"/")+u(n)+r}function f(t,e){return e===Pt?t===e:!!e&&(t.path&&e.path?t.path.replace(Tt,"")===e.path.replace(Tt,"")&&t.hash===e.hash&&h(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&h(t.query,e.query)&&h(t.params,e.params)))}function h(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){return String(t[n])===String(e[n])})}function l(t,e){return 0===t.path.replace(Tt,"/").indexOf(e.path.replace(Tt,"/"))&&(!e.hash||t.hash===e.hash)&&d(t.query,e.query)}function d(t,e){for(var n in e)if(!(n in t))return!1;return!0}function y(t){if(!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.target&&t.target.getAttribute){var e=t.target.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function v(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=v(e.children)))return e}}function m(t){if(!m.installed){m.installed=!0,Et=t,Object.defineProperty(t.prototype,"$router",{get:function(){return this.$root._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this.$root._route}}),t.mixin({beforeCreate:function(){this.$options.router&&(this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current))}}),t.component("router-view",Rt),t.component("router-link",qt);var e=t.config.optionMergeStrategies;e.beforeRouteEnter=e.beforeRouteLeave=e.created}}function g(t,e,n){if("/"===t.charAt(0))return t;if("?"===t.charAt(0)||"#"===t.charAt(0))return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var o=t.replace(/^\//,"").split("/"),i=0;i<o.length;i++){var a=o[i];"."!==a&&(".."===a?r.pop():r.push(a))}return""!==r[0]&&r.unshift(""),r.join("/")}function w(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function b(t){return t.replace(/\/\//g,"/")}function x(t,e,n){var r=e||Object.create(null),o=n||Object.create(null);return t.forEach(function(t){k(r,o,t)}),{pathMap:r,nameMap:o}}function k(t,e,n,r,o){var i=n.path,a=n.name,u={path:_(i,r),components:n.components||{default:n.component},instances:{},name:a,parent:r,matchAs:o,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach(function(n){var r=o?b(o+"/"+n.path):void 0;k(t,e,n,u,r)}),void 0!==n.alias)if(Array.isArray(n.alias))n.alias.forEach(function(o){var i={path:o,children:n.children};k(t,e,i,r,u.path)});else{var c={path:n.alias,children:n.children};k(t,e,c,r,u.path)}t[u.path]||(t[u.path]=u),a&&(e[a]||(e[a]=u))}function _(t,e){return t=t.replace(/\/$/,""),"/"===t[0]?t:null==e?t:b(e.path+"/"+t)}function O(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=Jt.exec(t));){var c=n[0],s=n[1],p=n.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],y=n[5],v=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===v||"*"===v,b="?"===v||"*"===v,x=n[2]||u,k=d||y;r.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?$(k):m?".*":"[^"+A(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function j(t,e){return C(O(t,e))}function E(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function C(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?E:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var p,f=i[s.name];if(null==f){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(Vt(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[c].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?R(f):u(f),!e[c].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+p+'"');o+=s.prefix+p}}else o+=s}return o}}function A(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function $(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function T(t,e){return t.keys=e,t}function P(t){return t.sensitive?"":"i"}function L(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return T(t,e)}function S(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(M(t[o],e,n).source);return T(new RegExp("(?:"+r.join("|")+")",P(n)),e)}function q(t,e,n){return U(O(t,n),e,n)}function U(t,e,n){Vt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=A(u);else{var c=A(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var p=A(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",T(new RegExp("^"+i,P(n)),e)}function M(t,e,n){return Vt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?L(t,e):Vt(t)?S(t,e,n):q(t,e,n)}function V(t){var e,n,r=Nt[t];return r?(e=r.keys,n=r.regexp):(e=[],n=Ft(t,e),Nt[t]={keys:e,regexp:n}),{keys:e,regexp:n}}function F(t,e,n){try{return(Dt[t]||(Dt[t]=Ft.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function z(t,e,n){var r="string"==typeof t?{path:t}:t;if(r.name||r._normalized)return r;if(!r.path&&r.params&&e){r=B({},r),r._normalized=!0;var o=B(B({},e.params),r.params);if(e.name)r.name=e.name,r.params=o;else if(e.matched){var a=e.matched[e.matched.length-1].path;r.path=F(a,o,"path "+e.path)}return r}var u=w(r.path||""),c=e&&e.path||"/",s=u.path?g(u.path,c,n||r.append):e&&e.path||"/",p=i(u.query,r.query),f=r.hash||u.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:s,query:p,hash:f}}function B(t,e){for(var n in e)t[n]=e[n];return t}function I(t){function e(t){x(t,s,p)}function n(t,e,n){var r=z(t,e),o=r.name;if(o){var i=p[o],u=V(i.path).keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof r.params&&(r.params={}),e&&"object"==typeof e.params)for(var c in e.params)!(c in r.params)&&u.indexOf(c)>-1&&(r.params[c]=e.params[c]);if(i)return r.path=F(i.path,r.params,'named route "'+o+'"'),a(i,r,n)}else if(r.path){r.params={};for(var f in s)if(H(f,r.params,r.path))return a(s[f],r,n)}return a(null,r)}function o(t,e){var o=t.redirect,i="function"==typeof o?o(c(t,e)):o;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return a(null,e);var u=i,s=u.name,f=u.path,h=e.query,l=e.hash,d=e.params;if(h=u.hasOwnProperty("query")?u.query:h,l=u.hasOwnProperty("hash")?u.hash:l,d=u.hasOwnProperty("params")?u.params:d,s){p[s];return n({_normalized:!0,name:s,query:h,hash:l,params:d},void 0,e)}if(f){var y=J(f,t);return n({_normalized:!0,path:F(y,d,'redirect route with path "'+y+'"'),query:h,hash:l},void 0,e)}return r(!1,"invalid redirect option: "+JSON.stringify(i)),a(null,e)}function i(t,e,r){var o=F(r,e.params,'aliased route with path "'+r+'"'),i=n({_normalized:!0,path:o});if(i){var u=i.matched,c=u[u.length-1];return e.params=i.params,a(c,e)}return a(null,e)}function a(t,e,n){return t&&t.redirect?o(t,n||e):t&&t.matchAs?i(t,e,t.matchAs):c(t,e,n)}var u=x(t),s=u.pathMap,p=u.nameMap;return{match:n,addRoutes:e}}function H(t,e,n){var r=V(t),o=r.regexp,i=r.keys,a=n.match(o);if(!a)return!1;if(!e)return!0;for(var u=1,c=a.length;u<c;++u){var s=i[u-1],p="string"==typeof a[u]?decodeURIComponent(a[u]):a[u];s&&(e[s.name]=p)}return!0}function J(t,e){return g(t,e.parent?e.parent.path:"/",!0)}function N(){window.addEventListener("popstate",function(t){K(),t.state&&t.state.key&&et(t.state.key)})}function D(t,e,n,r){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=W(),i=o(e,n,r?t:null);if(i){var a="object"==typeof i;if(a&&"string"==typeof i.selector){var u=document.querySelector(i.selector);u?t=X(u):Y(i)&&(t=G(i))}else a&&Y(i)&&(t=G(i));t&&window.scrollTo(t.x,t.y)}})}}function K(){var t=tt();t&&(Kt[t]={x:window.pageXOffset,y:window.pageYOffset})}function W(){var t=tt();if(t)return Kt[t]}function X(t){var e=document.documentElement,n=e.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-n.left,y:r.top-n.top}}function Y(t){return Q(t.x)||Q(t.y)}function G(t){return{x:Q(t.x)?t.x:window.pageXOffset,y:Q(t.y)?t.y:window.pageYOffset}}function Q(t){return"number"==typeof t}function Z(){return Xt.now().toFixed(3)}function tt(){return Yt}function et(t){Yt=t}function nt(t,e){K();var n=window.history;try{e?n.replaceState({key:Yt},"",t):(Yt=Z(),n.pushState({key:Yt},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function rt(t){nt(t,!0)}function ot(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function it(t){if(!t)if(Ut){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/"}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function at(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ut(t,e,n,r){var o=vt(t,function(t,r,o,i){var a=ct(t,e);if(a)return Array.isArray(a)?a.map(function(t){return n(t,r,o,i)}):n(a,r,o,i)});return mt(r?o.reverse():o)}function ct(t,e){return"function"!=typeof t&&(t=Et.extend(t)),t.options[e]}function st(t){return ut(t,"beforeRouteLeave",ft,!0)}function pt(t){return ut(t,"beforeRouteUpdate",ft)}function ft(t,e){return function(){return t.apply(e,arguments)}}function ht(t,e,n){return ut(t,"beforeRouteEnter",function(t,r,o,i){return lt(t,o,i,e,n)})}function lt(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&r.push(function(){dt(t,e.instances,n,o)})})}}function dt(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){dt(t,e,n,r)},16)}function yt(t){return vt(t,function(t,e,n,o){if("function"==typeof t&&!t.options)return function(e,i,a){var u=gt(function(t){n.components[o]=t,a()}),c=gt(function(t){r(!1,"Failed to resolve async component "+o+": "+t),a(!1)}),s=t(u,c);s&&"function"==typeof s.then&&s.then(u,c)}})}function vt(t,e){return mt(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function mt(t){return Array.prototype.concat.apply([],t)}function gt(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}function wt(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function bt(t){var e=wt(t);if(!/^\/#/.test(e))return window.location.replace(b(t+"/#"+e)),!0}function xt(){var t=kt();return"/"===t.charAt(0)||(Ot("/"+t),!1)}function kt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function _t(t){window.location.hash=t}function Ot(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)}function jt(t,e,n){var r="hash"===n?"#"+e:e;return t?b(t+"/"+r):r}var Et,Rt={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,i=e.parent,a=e.data;a.routerView=!0;for(var u=n.name,c=i.$route,s=i._routerViewCache||(i._routerViewCache={}),p=0,f=!1;i;)i.$vnode&&i.$vnode.data.routerView&&p++,i._inactive&&(f=!0),i=i.$parent;if(a.routerViewDepth=p,f)return t(s[u],a,r);var h=c.matched[p];if(!h)return s[u]=null,t();var l=s[u]=h.components[u],d=a.hook||(a.hook={});return d.init=function(t){h.instances[u]=t.child},d.prepatch=function(t,e){h.instances[u]=e.child},d.destroy=function(t){h.instances[u]===t.child&&(h.instances[u]=void 0)},a.props=o(c,h.props&&h.props[u]),t(l,a,r)}},Ct=function(t){return"%"+t.charCodeAt(0).toString(16)},At=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,Ct).replace(/%2C/g,",")},$t=decodeURIComponent,Tt=/\/?$/,Pt=c(null,{path:"/"}),Lt=[String,Object],St=[String,Array],qt={name:"router-link",props:{to:{type:Lt,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,event:{type:St,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,a=o.route,u=o.href,s={},p=this.activeClass||n.options.linkActiveClass||"router-link-active",h=i.path?c(null,i):a;s[p]=this.exact?f(r,h):l(r,h);var d=function(t){y(t)&&(e.replace?n.replace(i):n.push(i))},m={click:y};Array.isArray(this.event)?this.event.forEach(function(t){m[t]=d}):m[this.event]=d;var g={class:s};if("a"===this.tag)g.on=m,g.attrs={href:u};else{var w=v(this.$slots.default);if(w){w.isStatic=!1;var b=Et.util.extend;(w.data=b({},w.data)).on=m;(w.data.attrs=b({},w.data.attrs)).href=u}else g.on=m}return t(this.tag,g,this.$slots.default)}},Ut="undefined"!=typeof window,Mt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Vt=Mt,Ft=M,zt=O,Bt=j,It=C,Ht=U,Jt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Ft.parse=zt,Ft.compile=Bt,Ft.tokensToFunction=It,Ft.tokensToRegExp=Ht;var Nt=Object.create(null),Dt=Object.create(null),Kt=Object.create(null),Wt=Ut&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),Xt=Ut&&window.performance&&window.performance.now?window.performance:Date,Yt=Z(),Gt=function(t,e){this.router=t,this.base=it(e),this.current=Pt,this.pending=null,this.ready=!1,this.readyCbs=[]};Gt.prototype.listen=function(t){this.cb=t},Gt.prototype.onReady=function(t){this.ready?t():this.readyCbs.push(t)},Gt.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach(function(t){t(o)}))},n)},Gt.prototype.confirmTransition=function(t,e,n){var r=this,o=this.current,i=function(){n&&n()};if(f(t,o)&&t.matched.length===o.matched.length)return this.ensureURL(),i();var a=at(this.current.matched,t.matched),u=a.updated,c=a.deactivated,s=a.activated,p=[].concat(st(c),this.router.beforeHooks,pt(u),s.map(function(t){return t.beforeEnter}),yt(s));this.pending=t;var h=function(e,n){if(r.pending!==t)return i();e(t,o,function(t){!1===t?(r.ensureURL(!0),i()):"string"==typeof t||"object"==typeof t?("object"==typeof t&&t.replace?r.replace(t):r.push(t),i()):n(t)})};ot(p,h,function(){var n=[];ot(ht(s,n,function(){return r.current===t}),h,function(){if(r.pending!==t)return i();r.pending=null,e(t),r.router.app&&r.router.app.$nextTick(function(){n.forEach(function(t){return t()})})})})},Gt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var Qt=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;o&&N(),window.addEventListener("popstate",function(t){r.transitionTo(wt(r.base),function(t){o&&D(e,t,r.current,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){nt(b(r.base+t.fullPath)),D(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){rt(b(r.base+t.fullPath)),D(r.router,t,i,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(wt(this.base)!==this.current.fullPath){var e=b(this.base+this.current.fullPath);t?nt(e):rt(e)}},e.prototype.getCurrentLocation=function(){return wt(this.base)},e}(Gt),Zt=function(t){function e(e,n,r){t.call(this,e,n),r&&bt(this.base)||xt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;window.addEventListener("hashchange",function(){xt()&&t.transitionTo(kt(),function(t){Ot(t.fullPath)})})},e.prototype.push=function(t,e,n){this.transitionTo(t,function(t){_t(t.fullPath),e&&e(t)},n)},e.prototype.replace=function(t,e,n){this.transitionTo(t,function(t){Ot(t.fullPath),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;kt()!==e&&(t?_t(e):Ot(e))},e.prototype.getCurrentLocation=function(){return kt()},e}(Gt),te=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Gt),ee=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.afterHooks=[],this.matcher=I(t.routes||[]);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Wt,this.fallback&&(e="hash"),Ut||(e="abstract"),this.mode=e,e){case"history":this.history=new Qt(this,t.base);break;case"hash":this.history=new Zt(this,t.base,this.fallback);break;case"abstract":this.history=new te(this,t.base)}},ne={currentRoute:{}};ee.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},ne.currentRoute.get=function(){return this.history&&this.history.current},ee.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var n=this.history;if(n instanceof Qt)n.transitionTo(n.getCurrentLocation());else if(n instanceof Zt){var r=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},ee.prototype.beforeEach=function(t){this.beforeHooks.push(t)},ee.prototype.afterEach=function(t){this.afterHooks.push(t)},ee.prototype.onReady=function(t){this.history.onReady(t)},ee.prototype.push=function(t,e,n){this.history.push(t,e,n)},ee.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},ee.prototype.go=function(t){this.history.go(t)},ee.prototype.back=function(){this.go(-1)},ee.prototype.forward=function(){this.go(1)},ee.prototype.getMatchedComponents=function(t){var e=t?this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},ee.prototype.resolve=function(t,e,n){var r=z(t,e||this.history.current,n),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:jt(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},ee.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==Pt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(ee.prototype,ne),ee.install=m,ee.version="2.3.1",Ut&&window.Vue&&window.Vue.use(ee),e.a=ee},33:function(t,e,n){var r=n(1)(n(35),n(37),null,null);t.exports=r.exports},34:function(t,e,n){var r=n(1)(n(36),n(38),null,null);t.exports=r.exports},35:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"glosariumCategoryAll",data:function(){return{loading:!1,url:"/category/all",categories:[]}},mounted:function(){var t=this;axios.get(this.url).then(function(e){t.categories=e.data}).catch(function(t){})},filters:{url:function(t){return{name:"glosarium.category.show",params:{slug:t.slug}}}}}},36:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{limit:{type:Number,default:10}},data:function(){return{loading:!1,words:[]}},mounted:function(){var t=this,e={limit:this.limit};axios.post(routes.glosariumWordLatest,e).then(function(e){t.words=e.data.words})},filters:{url:function(t){return{name:"glosarium.word.show",params:{category:t.category.slug,word:t.slug}}}}}},37:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.categories?n("div",{staticClass:"collapse in",attrs:{id:"category"}},[n("div",{staticClass:"list-area"},[n("ul",{staticClass:"list-unstyled"},t._l(t.categories,function(e){return n("li",[n("router-link",{attrs:{to:t._f("url")(e)}},[n("i",{class:[e.metadata.icon,"fa-fw"]}),t._v("\n            "+t._s(e.name)+" ("+t._s(e.words_count.toLocaleString("id-Id"))+")\n            ")])],1)}))])]):t._e()},staticRenderFns:[]}},38:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block-section",attrs:{id:"affix-box"}},[n("h5",{staticClass:"no-margin-top font-bold margin-b-20 "},[n("a",{attrs:{href:"#latest-words","data-toggle":"collapse"}},[t._v("Kata Terbaru "),n("loader",{attrs:{show:t.loading}}),t._v(" "),n("i",{staticClass:"fa ic-arrow-toogle fa-angle-right pull-right"})],1)]),t._v(" "),t.words?n("div",{staticClass:"collapse in",attrs:{id:"latest-words"}},[n("div",{staticClass:"list-area"},[n("ul",{staticClass:"list-unstyled"},t._l(t.words,function(e){return n("li",[n("router-link",{attrs:{to:t._f("url")(e)}},[e.category.metadata?n("i",{class:[e.category.metadata.icon,"fa-fw"]}):t._e(),t._v("\n                   \t"+t._s(e.origin)+" ("+t._s(e.locale)+")\n                   ")])],1)}))])]):t._e()])},staticRenderFns:[]}}});