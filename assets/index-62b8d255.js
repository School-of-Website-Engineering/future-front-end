import{o as e,c as t,r as n,d as r,a as o,b as s,e as i,f as a,s as l,i as c}from"./vendor-3c4ca9fb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const u=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const d=u({},[["render",function(r,o){const s=n("router-view");return e(),t(s)}]]),m=r("user",{persist:{storage:sessionStorage},state:()=>({name:"张三"}),getters:{nameLength:e=>e.name.length,fullName:e=>e.name+"丰"},actions:{updateName(e){this.name=e}}});r("menu",{state:()=>({isCollapse:!0}),getters:{},actions:{updateCollapse(){this.isCollapse=!this.isCollapse}}});const p=o(),f={},_=function(e,t,n){if(!t||0===t.length)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/future/"+e}(e))in f)return;f[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(!!n)for(let n=r.length-1;n>=0;n--){const o=r[n];if(o.href===e&&(!t||"stylesheet"===o.rel))return}else if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((t,n)=>{s.addEventListener("load",t),s.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))},h=[{path:"/login",name:"login",component:()=>_((()=>import("./index-1d57e29a.js")),["assets/index-1d57e29a.js","assets/vendor-3c4ca9fb.js","assets/vendor-1d4fc69b.css","assets/index-c7fb143c.css"])},{path:"/home",name:"home",component:()=>_((()=>import("./index-9394c90c.js")),["assets/index-9394c90c.js","assets/vendor-3c4ca9fb.js","assets/vendor-1d4fc69b.css"]),children:[{path:"/index",name:"index",component:()=>_((()=>import("./index-9394c90c.js")),["assets/index-9394c90c.js","assets/vendor-3c4ca9fb.js","assets/vendor-1d4fc69b.css"])}]},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>_((()=>import("./NotFound-833d61db.js")),["assets/NotFound-833d61db.js","assets/vendor-3c4ca9fb.js","assets/vendor-1d4fc69b.css","assets/NotFound-383f6438.css"])}],E=s({history:i({VITE_APP_TITLE:"鸡你太美",VITE_APP_API_BASE_URL:"/api-pro",VITE_BUILD_SOURCEMAP:"false",VITE_BUILD_DROP_CONSOLE:"true",VITE_BUILD_VCONSOLE:"false",VITE_USER_NODE_ENV:"production"}.BASE_URL),routes:h,scrollBehavior:()=>({left:0,top:0})}),g=a(d),L=o();L.use(l),g.use(c),g.use(L),g.use(p),g.use(E),g.mount("#app");export{u as _,E as r,m as u};
