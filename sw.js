if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>n(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(l(...s),u)))}}define(["./workbox-082d0e8a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/index-10543ba9.js",revision:null},{url:"assets/index-279a2697.js",revision:null},{url:"assets/index-5dfa29d4.js",revision:null},{url:"assets/index-622ea0bb.js",revision:null},{url:"assets/index-74c1f3e4.css",revision:null},{url:"assets/index-82fdba46.js",revision:null},{url:"assets/index-8d6955b3.css",revision:null},{url:"assets/index-8fe0dd0d.js",revision:null},{url:"assets/index-94c34ac0.css",revision:null},{url:"assets/index-9d2a6f56.css",revision:null},{url:"assets/index-b3a5e7a5.js",revision:null},{url:"assets/index-c4890446.js",revision:null},{url:"assets/index-d437a465.js",revision:null},{url:"assets/index-eda37b00.js",revision:null},{url:"assets/index-f0fd7216.css",revision:null},{url:"assets/index-fc7febe0.css",revision:null},{url:"assets/NotFound-1836d769.js",revision:null},{url:"assets/NotFound-383f6438.css",revision:null},{url:"assets/vendor-10670a35.js",revision:null},{url:"assets/vendor-56a91924.css",revision:null},{url:"index.html",revision:"512226c9f0535c2fcf8fe76ec7a49211"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\/api-dev\/|\/api-pro\//,new s.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(js|css|ts)/,new s.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
