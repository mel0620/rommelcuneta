(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["db1d5634"],{2781:function(t,e,i){"use strict";function n(t,e,i){return e>t?e:i<t?i:t}function s(t){return+(t>0)-+(t<0)}function a(t){return Math.round(1e4*t)/1e4}var r={};function o(t){return r[t]||(r[t]=t.replace(/([A-Z])/g,c))}function c(t){return"-"+t[0].toLowerCase()}var l=window,u=document.documentElement;function d(t,e){return t&&0!==t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(e||u).querySelectorAll(t)):[]}var f,m=function(t,e){for(var i in e)t.setAttribute("data-"+o(i),e[i])},v=function(t){return function(e,i){for(var n in i)(!0===t||t[n])&&e.style.setProperty("--"+o(n),a(i[n]))}},p=[];function h(t){return p.push(t),f||g(),function(){p=p.filter((function(e){return e!==t})),!p.length&&f&&(f=0,cancelAnimationFrame(f))}}function g(){var t=p.slice();t.forEach((function(t){return t()})),f=p.length?requestAnimationFrame(g):0}function w(){}var b="scroll",y="resize",C="addEventListener",_="removeEventListener",k=0;function q(t){t=t||{};var e,i,a,r,o,c=t.onChange||w,f=t.onHidden||w,p=t.onShown||w,g=t.cssProps?v(t.cssProps):w,q=t.scrollingElement,x=q?d(q)[0]:l,E=q?d(q)[0]:u,L=++k,S=function(t,e,i){return t[e+L]!==(t[e+L]=JSON.stringify(i))},A=function(){a=!0},H=function(){a&&(a=!1,i=d(t.targets||"[data-scroll]",d(t.scope||E)[0]).map((function(t){return{$:t,ctx:{}}})));var c=E.clientWidth,u=E.clientHeight,f=s(-r+(r=E.scrollLeft||l.pageXOffset)),m=s(-o+(o=E.scrollTop||l.pageYOffset)),v=E.scrollLeft/(E.scrollWidth-c||1),p=E.scrollTop/(E.scrollHeight-u||1);e={scrollDirX:f,scrollDirY:m,scrollPercentX:v,scrollPercentY:p},i.forEach((function(e){var i=e.$,a=i,l=0,d=0;do{l+=a.offsetLeft,d+=a.offsetTop,a=a.offsetParent}while(a&&a!==x);var f=i.clientWidth||i.offsetWidth||0,m=i.clientHeight||i.offsetHeight||0,v=(n(l+f,r,r+c)-n(l,r,r+c))/f,p=(n(d+m,o,o+u)-n(d,o,o+u))/m,h=n((r-(f/2+l-c/2))/(c/2),-1,1),g=n((o-(m/2+d-u/2))/(u/2),-1,1),w=+(t.offset?t.offset<=o:(t.threshold||0)<v*p);e.ctx={elementHeight:m,elementWidth:f,intersectX:1===v?0:s(l-r),intersectY:1===p?0:s(d-o),offsetX:l,offsetY:d,viewportX:h,viewportY:g,visible:w,visibleX:v,visibleY:p}}))},X=function(){if(i){var n={scrollDirX:e.scrollDirX,scrollDirY:e.scrollDirY};S(E,"_SA",n)&&m(E,n),S(E,"_S",e)&&g(E,e);for(var s=i.length,a=s-1;a>-1;a--){var r=i[a],o=r.$,l=r.ctx,u=l.visible;S(o,"_SO",l)&&g(o,l),S(o,"_SV",u)&&(m(o,{scroll:u?"in":"out"}),l.index=a,c(o,l,E),(u?p:f)(o,l,E)),u&&t.once&&i.splice(a,1)}}},Y=h(X);return A(),H(),l[C](y,H),x[C](b,H),{index:A,teardown:function(){Y(),l[_](y,H),x[_](b,H)},update:H}}t.exports=q},"5fad":function(t,e,i){"use strict";var n=i("8f45"),s=i.n(n);s.a},"8f45":function(t,e,i){},f241:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("header",{staticClass:"my-header my-header--sticky"},[i("div",{staticClass:"container"},[i("nav",{staticClass:"my-nav"},[i("div",{staticClass:"brand",on:{click:function(e){return t.$router.push("/")}}},[i("img",{staticClass:"brand-mobile img-fluid",attrs:{width:"30",src:"statics/rc.svg",alt:""}})]),i("q-space"),i("button",{staticClass:"nav-cta nav-cta--open"},[i("q-icon",{staticClass:"flip",attrs:{name:"mdi-text"}})],1)],1)])]),i("div",{staticClass:"my-drawer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"close-wrapper"},[i("button",{staticClass:"nav-cta nav-cta--close"},[i("q-icon",{staticClass:"flip",attrs:{name:"mdi-close"}})],1)]),i("div",{staticClass:"links-wrapper"},[i("div",{staticClass:"links",attrs:{id:"navlink"}},[i("a",{staticClass:"links__item",attrs:{title:"Home",href:"#home"}},[t._v("Home")]),i("a",{staticClass:"links__item",attrs:{title:"About",href:"#aboutme"}},[t._v("About Me")]),i("a",{staticClass:"links__item",attrs:{title:"Education",href:"#education"}},[t._v("Education and Experience")]),i("a",{staticClass:"links__item",attrs:{title:"Skills",href:"#skills"}},[t._v("My Skills")])])])])]),i("q-page-container",[i("router-view")],1)],1)},s=[],a=i("2781"),r=i.n(a),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("q-btn",{staticClass:"flip",attrs:{flat:"",dense:"",round:"",icon:"mdi-text","aria-label":"Menu"},on:{click:function(e){t.dialog=!0}}}),i("q-dialog",{attrs:{maximized:"",position:"left"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("q-card",{staticClass:"full-width full-height"},[i("div",{staticClass:"row justify-end"},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"mdi-close",flat:"",round:""}})],1),i("div",{staticClass:"text-white"},[t._v("\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque consectetur eos veniam. Enim a autem commodi repellendus iste eaque eligendi placeat saepe iure! Itaque cum sapiente, iusto incidunt sunt maiores omnis iure sed obcaecati eum culpa saepe animi, nobis necessitatibus! Temporibus porro debitis quasi enim autem veniam repellendus illum.\n            ")])])],1)],1)},c=[],l={data:function(){return{dialog:!1}}},u=l,d=i("2877"),f=Object(d["a"])(u,o,c,!1,null,null,null),m=f.exports,v=i("109c"),p={name:"MyLayout",components:{FullNav:m},data:function(){return{leftDrawerOpen:!1}},methods:{navAction:function(){var t=document.querySelector(".nav-cta--open"),e=document.querySelector(".nav-cta--close"),i=new v["a"]({paused:!0,reversed:!0});i.to(".my-header",.3,{opacity:0}).to(".my-drawer",.3,{width:"100%",zIndex:101}).from(".nav-cta--close",.3,{opacity:0}).staggerFrom(".links__item",.3,{opacity:0,y:-5},.1),t.addEventListener("click",(function(){i.play()})),e.addEventListener("click",(function(){i.reverse()}))},toggleTween:function(t){t.reversed()?t.play():t.reverse()}},mounted:function(){r()({targets:".my-header--sticky",offset:960}),this.navAction()}},h=p,g=(i("5fad"),Object(d["a"])(h,n,s,!1,null,null,null));e["default"]=g.exports}}]);