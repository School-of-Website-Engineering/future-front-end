import{b as a,e as s,i as e,u as t,w as l,F as n,B as i,a5 as d,k as r,p as o,l as u,m as f,C as c,s as p,o as m,c as h,a4 as _,v,n as x,y as g,x as b,j as k,G as J,W as j,J as y,K as S,I as P,a7 as R,_ as w,a6 as C,a8 as D,a9 as L,aa as N,ab as A}from"./vendor-d9fce5dd.js";import{_ as F,c as I,a as $,r as U,F as T}from"./index-5ecedcfa.js";import{A as V}from"./index-8cc9fc66.js";const q=a=>(o("data-v-311d1586"),a=a(),u(),a),B=q((()=>f("span",null,[f("p",null,"JDSA Ling"),f("p",null,"#1237")],-1))),G=q((()=>f("i",{class:"fa-solid fa-microphone-slash"},null,-1))),K=q((()=>f("i",{class:"fa-solid fa-headphones"},null,-1))),W=q((()=>f("i",{class:"fa-solid fa-gear"},null,-1))),z=F(a({__name:"UserInfo",setup:o=>(a({name:"UserInfo"}),(a,o)=>{const u=i,f=d,c=r;return s(),e(n,null,[t(f,{span:12,class:"bottom-profile-avatar"},{default:l((()=>[t(u,{src:"http://39.105.229.249/ftp/ling/future/user/ling.webp",class:"bottom-profile-avatar-img"}),B])),_:1}),t(f,{span:12,class:"bottom-profile-avatar"},{default:l((()=>[t(c,{"hide-after":50,class:"box-item",effect:"dark",content:"取消静音",placement:"top"},{default:l((()=>[G])),_:1}),t(c,{"hide-after":50,class:"box-item",effect:"dark",content:"耳机静音",placement:"top"},{default:l((()=>[K])),_:1}),t(c,{"hide-after":50,class:"box-item",effect:"dark",content:"设置",placement:"top"},{default:l((()=>[W])),_:1})])),_:1})],64)})}),[["__scopeId","data-v-311d1586"]]),E=a=>(o("data-v-ae141f94"),a=a(),u(),a),H=E((()=>f("span",null,"好友",-1))),M={key:0,class:"msgNum"},O=E((()=>f("span",null,"Box",-1))),Q=E((()=>f("span",null,"私信",-1))),X=E((()=>f("span",null,"+",-1))),Y={class:"private-message-user-box-flex"},Z={class:"private-message-user-box-flex-left"},aa={class:"private-message-user-box-flex-right"},sa={class:"private-message-user-box-flex-right-top"},ea=F(a({__name:"index",setup(a){const o=I(),u=c(!1),F=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-03",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],q=p([]);m((()=>{B()}));const B=$((async()=>{const{data:a}=await V.getAsidePrivateUserList();q.push(...a.sidebarList)})),G=$((async a=>{await U.push(`/main/@me/${a.id}`)}));return(a,c)=>{const p=j,m=y,I=S,$=P,V=R,B=w,K=d,W=C,E=_,ea=r,ta=i,la=T,na=D,ia=L;return s(),h(E,null,{default:l((()=>[t(V,{class:"main-box-right-header1"},{default:l((()=>[t(p,{class:"search-btn",text:"",onClick:c[0]||(c[0]=a=>u.value=!0)},{default:l((()=>[v("寻找或开始新的对话")])),_:1}),t($,{modelValue:u.value,"onUpdate:modelValue":c[1]||(c[1]=a=>u.value=a),title:"Shipping address"},{default:l((()=>[t(I,{data:F},{default:l((()=>[t(m,{property:"date",label:"Date",width:"150"}),t(m,{property:"name",label:"Name",width:"200"}),t(m,{property:"address",label:"Address"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(ia,{class:"main-box-right-main1"},{default:l((()=>[t(E,{class:"main-box-right-main1-flex"},{default:l((()=>[t(V,{class:"Friends-private-message"},{default:l((()=>[t(E,{class:"friends-top friends-top-head"},{default:l((()=>[t(W,{class:x(["friends-top-flex","/main/@me"===a.$route.path?"is-active":""]),onClick:c[2]||(c[2]=()=>{a.$router.push("/main/@me")})},{default:l((()=>[t(K,{span:12},{default:l((()=>[t(B,null,{default:l((()=>[t(g(N))])),_:1}),H,g(o).handlePendingFriendsRequestList.length?(s(),e("i",M,b(g(o).handlePendingFriendsRequestList.length),1)):k("",!0)])),_:1})])),_:1},8,["class"]),t(W,{class:x(["friends-top-flex","/main/Store"===a.$route.path?"is-active":""]),onClick:c[3]||(c[3]=()=>{a.$router.push("/main/Store")})},{default:l((()=>[t(K,{span:12},{default:l((()=>[t(B,null,{default:l((()=>[t(g(A))])),_:1}),O])),_:1})])),_:1},8,["class"])])),_:1}),t(E,{class:"friends-top"},{default:l((()=>[t(W,{class:"friends-top-title"},{default:l((()=>[Q,t(ea,{"hide-after":50,class:"box-item",effect:"dark",content:"创建私信",placement:"top"},{default:l((()=>[X])),_:1})])),_:1}),(s(!0),e(n,null,J(q,(a=>(s(),h(W,{class:"friends-top-flex friends-list",onClick:s=>g(G)(a),key:a.id},{default:l((()=>{return[f("div",{class:x(["private-message-user-box",(s=a.id,s===U.currentRoute.value.params.id?"friendListActive":"")])},[f("div",Y,[f("div",Z,[t(ta,{src:a.avatar},null,8,["src"]),t(la,{status:a.status,statusText:a.statusText},null,8,["status","statusText"])]),f("div",aa,[f("div",sa,[f("span",null,b(a.name),1)])])])],2)];var s})),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),t(na,null,{default:l((()=>[t(W,{class:"bottom-profile"},{default:l((()=>[t(z)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-ae141f94"]]);export{ea as default};
