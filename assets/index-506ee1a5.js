import{g as a,B as s,q as e,Q as t,c as l,w as i,_ as n,o as d,s as o,u as r,n as u,x as f,h as c,v as p,i as m,D as h,l as _,F as x,P as b,a1 as v,a2 as g,a3 as k,a4 as j,U as J,$ as P,a0 as S,j as y,A as D,a5 as N,a6 as R,a7 as w,a8 as $,p as A,k as F}from"./vendor-7f21fd24.js";import{b as L,a as q,d as C,_ as T}from"./index-fedaebf0.js";import{A as U}from"./index-282b692a.js";const V=a=>(A("data-v-41af0e33"),a=a(),F(),a),B=V((()=>_("span",null,"好友",-1))),z={key:0,class:"msgNum"},I=V((()=>_("span",null,"Box",-1))),Q=V((()=>_("span",null,"私信",-1))),E=V((()=>_("span",null,"+",-1))),G={class:"private-message-user-box"},H={class:"private-message-user-box-flex"},K={class:"private-message-user-box-flex-left"},M={class:"private-message-user-box-flex-right"},O={class:"private-message-user-box-flex-right-top"},W=V((()=>_("span",null,[_("p",null,"鸡你太美"),_("p",null,"#1237")],-1))),X=V((()=>_("i",{class:"fa-solid fa-microphone-slash"},null,-1))),Y=V((()=>_("i",{class:"fa-solid fa-headphones"},null,-1))),Z=V((()=>_("i",{class:"fa-solid fa-gear"},null,-1))),aa=T(a({__name:"index",setup(a){const A=L(),F=s(!1),T=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-03",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],V=e([]);t((()=>{aa()}));const aa=q((async()=>{const{data:a}=await U.getAsidePrivateUserList();V.push(...a.sidebarList)}));return(a,s)=>{const e=b,t=v,L=g,q=k,U=j,aa=J,sa=P,ea=S,ta=n,la=y,ia=D,na=C,da=N,oa=R;return d(),l(ta,null,{default:i((()=>[o(U,{class:"main-box-right-header1"},{default:i((()=>[o(e,{class:"search-btn",text:"",onClick:s[0]||(s[0]=a=>F.value=!0)},{default:i((()=>[r("寻找或开始新的对话")])),_:1}),o(q,{modelValue:F.value,"onUpdate:modelValue":s[1]||(s[1]=a=>F.value=a),title:"Shipping address"},{default:i((()=>[o(L,{data:T},{default:i((()=>[o(t,{property:"date",label:"Date",width:"150"}),o(t,{property:"name",label:"Name",width:"200"}),o(t,{property:"address",label:"Address"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),o(oa,{class:"main-box-right-main1"},{default:i((()=>[o(ta,{class:"main-box-right-main1-flex"},{default:i((()=>[o(U,{class:"Friends-private-message"},{default:i((()=>[o(ta,{class:"friends-top friends-top-head"},{default:i((()=>[o(ea,{class:u(["friends-top-flex","/main/@me"===a.$route.path?"is-active":""]),onClick:s[2]||(s[2]=()=>{a.$router.push("/main/@me")})},{default:i((()=>[o(sa,{span:12},{default:i((()=>[o(aa,null,{default:i((()=>[o(f(w))])),_:1}),B,f(A).handlePendingFriendsRequestList.length?(d(),c("i",z,p(f(A).handlePendingFriendsRequestList.length),1)):m("",!0)])),_:1})])),_:1},8,["class"]),o(ea,{class:u(["friends-top-flex","/main/Store"===a.$route.path?"is-active":""]),onClick:s[3]||(s[3]=()=>{a.$router.push("/main/Store")})},{default:i((()=>[o(sa,{span:12},{default:i((()=>[o(aa,null,{default:i((()=>[o(f($))])),_:1}),I])),_:1})])),_:1},8,["class"])])),_:1}),o(ta,{class:"friends-top"},{default:i((()=>[o(ea,{class:"friends-top-title"},{default:i((()=>[Q,o(la,{"hide-after":50,class:"box-item",effect:"dark",content:"创建私信",placement:"top"},{default:i((()=>[E])),_:1})])),_:1}),(d(!0),c(x,null,h(V,(a=>(d(),l(ea,{class:"friends-top-flex",key:a.id},{default:i((()=>[_("div",G,[_("div",H,[_("div",K,[o(ia,{src:a.avatar},null,8,["src"]),o(na,{status:a.status,statusText:a.statusText},null,8,["status","statusText"])]),_("div",M,[_("div",O,[_("span",null,p(a.name),1)])])])])])),_:2},1024)))),128))])),_:1})])),_:1}),o(da,null,{default:i((()=>[o(ea,{class:"bottom-profile"},{default:i((()=>[o(sa,{span:12,class:"bottom-profile-avatar"},{default:i((()=>[o(ia,{src:"https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48",class:"bottom-profile-avatar-img"}),W])),_:1}),o(sa,{span:12,class:"bottom-profile-avatar"},{default:i((()=>[o(la,{"hide-after":50,class:"box-item",effect:"dark",content:"取消静音",placement:"top"},{default:i((()=>[X])),_:1}),o(la,{"hide-after":50,class:"box-item",effect:"dark",content:"耳机静音",placement:"top"},{default:i((()=>[Y])),_:1}),o(la,{"hide-after":50,class:"box-item",effect:"dark",content:"设置",placement:"top"},{default:i((()=>[Z])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-41af0e33"]]);export{aa as default};
