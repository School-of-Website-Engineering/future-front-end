import{d as s,h as e,l as r,M as o,v as i,i as a,y as t,N as l,n as m,s as n,w as d,O as u,o as c,u as g,p,k as h}from"./vendor-c838bb38.js";import{h as _,c as F,_ as v}from"./index-4efc55bd.js";var w=Object.defineProperty,y=Object.getOwnPropertyDescriptor;let C=class{async getLogin(s){const{username:e,password:r,userEmail:o,smsCode:i}=s;return await _.post("/auth/login",{username:e,password:r,userEmail:o,smsCode:i})}async getSmsCode(s){return await _.post("/auth/verify-code",{email:s})}async getLogout(){return await _.post("/auth/logout")}async getRegister(s){const{username:e,password:r,email:o,smsCode:i,role:a}=s;return await _.post("/auth/register",{username:e,password:r,email:o,smsCode:i,role:a})}};C=((s,e,r,o)=>{for(var i,a=o>1?void 0:o?y(e,r):e,t=s.length-1;t>=0;t--)(i=s[t])&&(a=(o?i(e,r,a):i(a))||a);return o&&a&&w(e,r,a),a})([F],C);const b=new C,f=s("user",{state:()=>({user:{}}),getters:{getUserId(){return this.user.id}},actions:{async userLogin(s){const{code:e,data:r}=await b.getLogin(s);200===e&&(this.user=r)}}}),L={name:"LoginBox",data:()=>({isLogin:!0,loginForm:{username:"admin",userEmail:"1960638223@qq.com",password:"123456789o",smsCode:"123456"},registerForm:{name:"adi",email:"1960638223@qq.com",password:"123456",smsCode:"123456",role:"man"},isLoding:!1,getSms:"获取验证码",errors:{username:"",email:"",password:"",smsCode:""},rules:{username:{required:!0,message:"请输入用户名"},email:{required:!0,type:"email",message:"请输入正确的邮箱地址"},password:{required:!0,message:"请输入密码"},smsCode:{required:!0,message:"请输入验证码"}}}),methods:{async login(){const{code:s,reason:e}=await f.userLogin(this.loginForm);200===s?(this.$message.success(e),this.$router.push("./main")):this.$message.error(e)},async register(){const{code:s,reason:e}=await b.getRegister(this.registerForm);200===s?(this.$message.success(e),this.$router.push("./main")):this.$message.error(e)},async getEmailSms(){if(this.isLoding)return;this.isLoding=!0;let s=60;this.getSms=`${s}s`;const e=setInterval((()=>{s--,this.getSms=`${s}s`,s<=0&&(clearInterval(e),this.getSms="获取验证码",this.isLoding=!1)}),1e3),{data:r,reason:o,code:i}=await b.getSmsCode(this.loginForm.email);200===i?this.$message.success(o):this.$message.error(o)},validateForm(){let s=!0;this.errors={};for(let e in this.rules)this.rules[e].required&&!this.loginForm[e]?(this.errors[e]=this.rules[e].message,s=!1):"email"!==this.rules[e].type||this.validateEmail(this.loginForm[e])||(this.errors[e]=this.rules[e].message,s=!1);return s},validateFormRegister(){let s=!0;this.errors={};for(let e in this.rules)this.rules[e].required&&!this.registerForm[e]?(this.errors[e]=this.rules[e].message,s=!1):"email"!==this.rules[e].type||this.validateEmail(this.registerForm[e])||(this.errors[e]=this.rules[e].message,s=!1);return s},validateEmail:s=>/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(s),submitForm(){this.validateForm()&&this.login()},submitFormRegister(){this.validateFormRegister()&&this.register()},isErrorShow(){this.isLogin=!this.isLogin,this.loginForm={username:"",email:"",password:"",smsCode:""},this.registerForm={name:"",email:"",password:""},this.errors={username:"",email:"",password:"",smsCode:""}}}},x=s=>(p("data-v-a4348998"),s=s(),h(),s),k={class:"main-box"},S=x((()=>r("h2",{class:"title"},"创建帐户",-1))),E=x((()=>r("span",{class:"text"},"或使用电子邮件进行注册",-1))),q={class:"input-box"},$={key:0,class:"error__message"},R={class:"input-box"},U={key:0,class:"error__message"},V={class:"input-box"},j={key:0,class:"error__message"},z={class:"sms-code"},I={key:0,class:"error__message"},O=x((()=>r("h2",{class:"title"},"登录网站",-1))),A=x((()=>r("span",{class:"text"},"或在左侧进行注册",-1))),Z={class:"input-box"},P={key:0,class:"error__message"},B={class:"input-box"},D={key:0,class:"error__message"},M={class:"input-box"},N={key:0,class:"error__message"},G={class:"sms-code"},H={key:0,class:"error__message"},J=x((()=>r("div",{class:"switch__circle"},null,-1))),K=x((()=>r("div",{class:"switch__circle switch__circle_top"},null,-1))),Q={class:"switch__container"};const T=v(L,[["render",function(s,p){const h=u;return c(),e("div",k,[r("div",{class:m(["container","container-register",{"is-txl":s.isLogin}])},[r("form",{class:"register-form",onSubmit:p[9]||(p[9]=o(((...e)=>s.submitFormRegister&&s.submitFormRegister(...e)),["prevent"]))},[S,E,r("div",q,[s.errors.username?(c(),e("div",$,i(s.errors.username),1)):a("",!0),t(r("input",{class:m(["form__input",{input__error:s.errors.username}]),type:"text",placeholder:"用户名","onUpdate:modelValue":p[0]||(p[0]=e=>s.registerForm.username=e),onFocus:p[1]||(p[1]=e=>s.errors.username="")},null,34),[[l,s.registerForm.username]])]),r("div",R,[s.errors.email?(c(),e("div",U,i(s.errors.email),1)):a("",!0),t(r("input",{class:m(["form__input",{input__error:s.errors.email}]),type:"text",placeholder:"邮箱","onUpdate:modelValue":p[2]||(p[2]=e=>s.registerForm.email=e),onFocus:p[3]||(p[3]=e=>s.errors.email="")},null,34),[[l,s.registerForm.email]])]),r("div",V,[s.errors.password?(c(),e("div",j,i(s.errors.password),1)):a("",!0),t(r("input",{class:m(["form__input",{input__error:s.errors.password}]),type:"password",placeholder:"密码","onUpdate:modelValue":p[4]||(p[4]=e=>s.registerForm.password=e),onFocus:p[5]||(p[5]=e=>s.errors.password="")},null,34),[[l,s.registerForm.password]])]),r("div",z,[s.errors.smsCode?(c(),e("div",I,i(s.errors.smsCode),1)):a("",!0),t(r("input",{class:m(["form__input",{input__error:s.errors.smsCode}]),type:"text",placeholder:"验证码","onUpdate:modelValue":p[6]||(p[6]=e=>s.registerForm.smsCode=e),onFocus:p[7]||(p[7]=e=>s.errors.smsCode="")},null,34),[[l,s.registerForm.smsCode]]),n(h,{onClick:s.getEmailSms,disabled:s.isLoding,class:"primary-btn"},{default:d((()=>[g(i(s.getSms),1)])),_:1},8,["onClick","disabled"])]),r("div",{class:"primary-btn",onClick:p[8]||(p[8]=(...e)=>s.submitFormRegister&&s.submitFormRegister(...e))},"立即注册")],32)],2),r("div",{class:m(["container","container-login",{"is-txl is-z200":s.isLogin}])},[r("form",{class:"login-form",onSubmit:p[19]||(p[19]=o(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"]))},[O,A,r("div",Z,[s.errors.username?(c(),e("div",P,i(s.errors.username),1)):a("",!0),t(r("input",{class:m(["form__input",{input__error:s.errors.username}]),type:"text",placeholder:"用户名","onUpdate:modelValue":p[10]||(p[10]=e=>s.loginForm.username=e),onFocus:p[11]||(p[11]=e=>s.errors.username="")},null,34),[[l,s.loginForm.username]])]),r("div",B,[s.errors.email?(c(),e("div",D,i(s.errors.email),1)):a("",!0),t(r("input",{class:m(["form__input",{input__error:s.errors.email}]),type:"text",placeholder:"邮箱","onUpdate:modelValue":p[12]||(p[12]=e=>s.loginForm.userEmail=e),onFocus:p[13]||(p[13]=e=>s.errors.email="")},null,34),[[l,s.loginForm.userEmail]])]),r("div",M,[s.errors.password?(c(),e("div",N,i(s.errors.password),1)):a("",!0),t(r("input",{class:m(["form__input",{input__error:s.errors.password}]),type:"password",placeholder:"密码","onUpdate:modelValue":p[14]||(p[14]=e=>s.loginForm.password=e),onFocus:p[15]||(p[15]=e=>s.errors.password="")},null,34),[[l,s.loginForm.password]])]),r("div",G,[s.errors.smsCode?(c(),e("div",H,i(s.errors.smsCode),1)):a("",!0),t(r("input",{class:m(["form__input",{input__error:s.errors.smsCode}]),type:"text",placeholder:"验证码","onUpdate:modelValue":p[16]||(p[16]=e=>s.loginForm.smsCode=e),onFocus:p[17]||(p[17]=e=>s.errors.smsCode="")},null,34),[[l,s.loginForm.smsCode]]),n(h,{onClick:s.getEmailSms,disabled:s.isLoding,class:"primary-btn"},{default:d((()=>[g(i(s.getSms),1)])),_:1},8,["onClick","disabled"])]),r("div",{class:"primary-btn",onClick:p[18]||(p[18]=(...e)=>s.submitForm&&s.submitForm(...e))},"立即登录")],32)],2),r("div",{class:m(["switch",{login:s.isLogin}])},[J,K,r("div",Q,[r("h2",null,i(s.isLogin?"你好，陌生人 !":"欢迎回来 !"),1),r("p",null,i(s.isLogin?"输入您的个人详细信息并开始我们的旅程":"要与我们保持联系，请使用您的个人信息登录"),1),r("div",{class:"primary-btn",onClick:p[20]||(p[20]=(...e)=>s.isErrorShow&&s.isErrorShow(...e))},i(s.isLogin?"立即注册":"立即登录"),1)])],2)])}],["__scopeId","data-v-a4348998"]]);export{T as default};
