(function(e){function n(n){for(var r,o,u=n[0],c=n[1],s=n[2],l=0,f=[];l<u.length;l++)o=u[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(f.length)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"101a6d41","chunk-52d7f079":"e19cfc8d"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={about:1,"chunk-52d7f079":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"fbeb53db","chunk-52d7f079":"67e7cd11"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],d.parentNode.removeChild(d),t(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(function(n,t){r=a[e]=[n,t]});n.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e),s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"367c":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("c194");var r=t("7744"),o=(t("e7e5"),t("d399")),a=(t("66b9"),t("b650")),i=(t("be7f"),t("565f")),u=(t("ab71"),t("58e6")),c=(t("c3a6"),t("ad06")),s=(t("cadf"),t("551c"),t("f751"),t("097d"),t("2b0e")),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},f=[],d=(t("5c0b"),t("2877")),p={},h=Object(d["a"])(p,l,f,!1,null,null,null),m=h.exports,v=t("8c4f"),g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("router-link",{attrs:{to:"/sass"}},[e._v("到sass页面")])],1)},b=[],w={name:"BEM"},y=w,k=Object(d["a"])(y,g,b,!1,null,null,null),E=k.exports;s["a"].use(v["a"]);var _=new v["a"]({routes:[{path:"/",name:"BEM",component:E},{path:"/sass",name:"sass",component:function(){return t.e("about").then(t.bind(null,"a220"))}},{path:"/talking",name:"talking",component:function(){return t.e("chunk-52d7f079").then(t.bind(null,"99ea"))}}]}),j=t("2f62");s["a"].use(j["a"]);var S=new j["a"].Store({state:{},mutations:{},actions:{}}),O=t("9483");Object(O["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("7f7f"),t("4917");(function(e,n){var t=window._rootFontSize||100,r="undefined"!==typeof window._remMetaScalable&&!!window._remMetaScalable,o=e.documentElement,a=navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=a?Math.min(n.devicePixelRatio,3):1,u=1/i,c="orientationchange"in window?"orientationchange":"resize";i=window.top===window.self?i:1;var s=e.createElement("meta");s.name="viewport";var l="width=device-width, ";l+=r?"initial-scale="+u:"initial-scale="+u+",maximum-scale="+u+", minimum-scale="+u+", user-scalable=no";var f=function(){var e=o.clientWidth;o.style.fontSize=t*(e/750)+"px"};f(),e.addEventListener&&n.addEventListener(c,f,!1)})(document,window);t("367c");s["a"].use(c["a"]),s["a"].use(u["a"]),s["a"].use(i["a"]),s["a"].use(a["a"]),s["a"].use(o["a"]),s["a"].use(r["a"]),s["a"].config.productionTip=!1,console.log(_),_.beforeEach(function(e,n,t){console.log(e),e.path&&(_hmt.push(["_trackPageview","/#"+e.fullPath]),t())}),new s["a"]({router:_,store:S,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("5e27"),o=t.n(r);o.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.1375fdc9.js.map