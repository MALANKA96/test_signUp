(this.webpackJsonpsignup=this.webpackJsonpsignup||[]).push([[0],{135:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(13),s=a.n(r),i=(a(135),a(26)),c=a(286),o=a(285),l=a(287),d=a(281),m=a(283),j=a(282),u=a(241),b=a(280),p=a(121),h=a.n(p),O=a(122),f=a.n(O),x=a(7),g=function(e){var t,a;switch(e.score\u0421omplexityPassword){case 1:t="red",a="25%";break;case 2:t="orange",a="50%";break;case 3:t="yellow",a="75%";break;case 4:t="#5cff47",a="100%"}var n={backgroundColor:t,height:"5px",marginTop:"10px",width:a,transition:"all 300ms ease-in-out"};return Object(x.jsx)("div",{style:n,children:" "})},w=a(71),v=a(123),y=a(284),k=function(e){var t=e.input,a=e.meta,n=Object(v.a)(e,["input","meta"]),r=a.touched&&a.error;return Object(x.jsx)(y.a,Object(w.a)(Object(w.a)(Object(w.a)({},t),n),{},{autoComplete:"off",variant:"outlined",fullWidth:!0,required:!0,error:!!r,helperText:r}))},S=a(18),A=function(e,t){var a=e.login;if(a){for(var n,r=a.length,s=(n={},Object(S.a)(n,r<4,"login must be more than 4 characters"),Object(S.a)(n,r>15,"login must be 15 characters or less"),Object(S.a)(n,!/^[\w]{0,}$/i.test(a),"login should not contain spaces and other special characters. use: az, AZ, 0-9"),n),c=0,o=Object.entries(s);c<o.length;c++){var l=Object(i.a)(o[c],2),d=l[0],m=l[1];if("true"===d)return t.login=m}return t}return t.login="create a login",t},_=function(e,t){return e.email?/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.email)||(t.email="invalid email address"):t.email="enter a valid email address to which a confirmation email will be sent",t},N=function(e,t){var a=e.password;if(a){for(var n,r=a.length,s=(n={},Object(S.a)(n,/\s/.test(a),"don't use space"),Object(S.a)(n,/(?=.*[\u0410-\u044f])/.test(a),"do not use letters \u0430\u044f, \u0410\u042f"),Object(S.a)(n,r<8,"password is short, minimum number of characters 8"),Object(S.a)(n,!/(?=.*[A-Z])/.test(a),"at least one uppercase is required"),Object(S.a)(n,!/(?=.*[a-z])/.test(a),"at least one lower case is required"),Object(S.a)(n,!/(?=.*[!@#$%^&*()_=+{}:<.>-])/.test(a),"at least one special character is required ! @ # $ % ^ & * ( ) _ = + { } : < . > -"),Object(S.a)(n,!/(?=.*[0-9])/.test(a),"at least one number is required"),n),c=0,o=Object.entries(s);c<o.length;c++){var l=Object(i.a)(o[c],2),d=l[0],m=l[1];if("true"===d)return t.password=m}return t}return t.password="\u0441reate a password",t},P=function(e,t){var a=e.password,n=e.confirm_password;if(n){for(var r,s=n.length,c=(r={},Object(S.a)(r,n&&n!==a,"password confirmation doesn't match"),Object(S.a)(r,s<1,"password confirmation doesn't match"),r),o=0,l=Object.entries(c);o<l.length;o++){var d=Object(i.a)(l[o],2),m=d[0],j=d[1];if("true"===m)return t.confirm_password=j}return t}return t.confirm_password="enter confirm password",t},q=function(e){var t={};return A(e,t),_(e,t),N(e,t),P(e,t),t},z=a(279),Z=Object(z.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},buttonPass:{height:"56px",margin:"0",minWidth:"42px",padding:"0",width:"100%"},weak:{textAlign:"center"},strong:{textAlign:"center"},complexityPassword:{display:"flex"}}})),$=Object(o.a)({form:"singUp",validate:q})((function(e){var t=e.handleSubmit,a=n.useState("password"),r=Object(i.a)(a,2),s=r[0],o=r[1],p=n.useState(!1),O=Object(i.a)(p,2),w=O[0],v=O[1],y=n.useState(!1),S=Object(i.a)(y,2),A=S[0],_=S[1],N=n.useState(0),P=Object(i.a)(N,2),q=P[0],z=P[1],$=/(?=.*[a-z])/,C=/(?=.*[A-Z])/,T=/(?=.*[!@#$%^&*()_=+{}:<.>-])/,W=/(?=.*[0-9])/,B=Z();return Object(x.jsxs)(b.a,{component:"main",maxWidth:"xs",children:[Object(x.jsx)(d.a,{}),Object(x.jsxs)("div",{className:B.paper,children:[Object(x.jsx)(u.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(x.jsxs)("form",{className:B.form,noValidate:!0,onSubmit:t,children:[Object(x.jsxs)(j.a,{container:!0,spacing:1,children:[Object(x.jsx)(j.a,{item:!0,xs:12,children:Object(x.jsx)(c.a,{placeholder:"login",name:"login",id:"login",label:"login",component:k,title:"enter your login"})}),Object(x.jsx)(j.a,{item:!0,xs:12,children:Object(x.jsx)(c.a,{placeholder:"email",name:"email",id:"email",label:"email",component:k,type:"email",title:"enter your email"})}),Object(x.jsx)(j.a,{item:!0,xs:10,sm:10,children:Object(x.jsx)(c.a,{placeholder:"password",name:"password",id:"password",label:"password",component:k,type:s,title:"enter a strong password",onChange:function(e){_(!0);var t=e.target.value.split(""),a=t.some((function(e){return $.test(e)})),n=t.some((function(e){return C.test(e)})),r=t.some((function(e){return T.test(e)})),s=t.some((function(e){return W.test(e)}));z([a,n,r,s].filter(Boolean).length),""===e.target.value&&(z(0),_(!1))}})}),Object(x.jsx)(j.a,{item:!0,xs:2,sm:2,children:Object(x.jsxs)(l.a,{type:"button",variant:"contained",color:"primary",className:B.buttonPass,onClick:function(){"password"===s?(o("text"),v(!0)):(o("password"),v(!1))},children:[w&&Object(x.jsx)(h.a,{}),!w&&Object(x.jsx)(f.a,{})]})}),A&&Object(x.jsxs)(j.a,{item:!0,xs:12,className:B.complexityPassword,children:[Object(x.jsx)(j.a,{item:!0,xs:2,className:B.weak,children:"weak"}),Object(x.jsx)(j.a,{item:!0,xs:8,children:Object(x.jsx)(g,{"score\u0421omplexityPassword":q})}),Object(x.jsx)(j.a,{item:!0,xs:2,className:B.strong,children:"strong"})]}),Object(x.jsx)(j.a,{item:!0,xs:12,children:Object(x.jsx)(c.a,{placeholder:"confirm password",name:"confirm_password",id:"confirm_password",label:"confirm password",component:k,type:s,title:"confirm password"})})]}),Object(x.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:B.submit,children:"Submit"}),Object(x.jsx)(j.a,{container:!0,justify:"flex-end",children:Object(x.jsx)(j.a,{item:!0,children:Object(x.jsx)(m.a,{href:"#",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})),C=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)($,{onSubmit:function(e){console.log(e)}})})},T=a(44),W=a(14),B=a(288),I=Object(W.b)({form:B.a}),J=Object(W.c)(I);window.store=J;var D=J,E=function(){return Object(x.jsx)(T.a,{store:D,children:Object(x.jsx)(C,{})})},F=function(){s.a.render(Object(x.jsx)(E,{}),document.getElementById("root"))};F(),D.subscribe((function(){F()}))}},[[239,1,2]]]);
//# sourceMappingURL=main.8033f405.chunk.js.map