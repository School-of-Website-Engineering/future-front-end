if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>n(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(l(...s),u)))}}define(["./workbox-082d0e8a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/index-06850785.js",revision:null},{url:"assets/index-0d1213c4.js",revision:null},{url:"assets/index-102fe10f.js",revision:null},{url:"assets/index-24e3678b.css",revision:null},{url:"assets/index-2e632e14.js",revision:null},{url:"assets/index-5d3e9262.js",revision:null},{url:"assets/index-8d3fe13b.css",revision:null},{url:"assets/index-a35266c4.css",revision:null},{url:"assets/index-ab45fcd5.js",revision:null},{url:"assets/index-b3d50003.css",revision:null},{url:"assets/index-bb0619cc.js",revision:null},{url:"assets/index-e3034d18.css",revision:null},{url:"assets/index-e64f3398.js",revision:null},{url:"assets/NotFound-383f6438.css",revision:null},{url:"assets/NotFound-f5d82434.js",revision:null},{url:"assets/vendor-6d5d5ca5.css",revision:null},{url:"assets/vendor-7628cae1.js",revision:null},{url:"index.html",revision:"1e8bf88a5e1a4d49e8a201dd422929dc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\/api-dev\/|\/api-pro\//,new s.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(js|css|ts)/,new s.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
