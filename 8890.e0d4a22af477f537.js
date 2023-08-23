"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[8890],{2491:(F,v,l)=>{l.d(v,{L:()=>Z});var d=l(93075);class Z{static isEmptyInputValue(r){return null==r||0===r.length}static mustMatch(r,m){return n=>{const p=n.get(r),o=n.get(m);if(!p||!o||(o.hasError("mustMatch")&&(delete o.errors.mustMatch,o.updateValueAndValidity()),this.isEmptyInputValue(o.value)||p.value===o.value))return null;const c={mustMatch:"Las contrase\xf1a no coinciden."};return o.setErrors(c),c}}static strongPassWord(r,m,n,p,o){return c=>{const f=c.value;if(!f)return null;const i=!r||/[A-Z]+/.test(f),y=!m||/[a-z]+/.test(f),U=!n||/[0-9]+/.test(f),t=!p||!/^[a-zA-Z0-9]+$/.test(f);return i&&y&&U&&t&&f.length>=o?null:{password:"La contrase\xf1a no cumple con los est\xe1ndares de seguridad requeridos"}}}static onlyNumber(r){return m=>{const n=m.get(r);if(!n||!n.value||(n.hasError("onlyNumber")&&(delete n.errors.onlyNumber,n.updateValueAndValidity()),/^[a-zA-Z0-9]+$/.test(n.value.toString())))return null;const o={onlyNumber:"Solo se admiten n\xfameros."};return console.log(o),n.setErrors(o),o}}static strongPasWordPattern(){return d.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)}static emailPattern(){return d.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")}static onlyNumbersPattern(){return d.kI.pattern("^[0-9]*$")}static numbersAndDecimalsPattern(){return d.kI.pattern(/^-?\d*[.,]?\d{0,2}$/)}static onlyAlphabetsWithAccentPattern(){return d.kI.pattern("^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\xfc\xdc]*$")}static onlyAlphabetsPattern(){return d.kI.pattern("^[a-zA-Z ]*$")}static validateIdNumber(){return r=>{if(!r)return null;let m=r.value;if(!m)return null;void 0!==r.value.idNumber&&(m=r.value.idNumber);const n=parseInt(m.substring(0,2),10),p=parseInt(m.substring(2,4),10)-1,o=parseInt(m.substring(4,6),10),c=new Date(n,p,o);if(c.getFullYear().toString().substring(2,4)===n.toString()&&c.getMonth()===p&&c.getDate()===o)return null;const i={validateIdNumber:"El n\xfamero de identidad introducido es incorrecto"};return r.setErrors(i),i}}static validFullName(r){return m=>{const n=m.get(r);if(!n||!r||(n.hasError("validFullName")&&(delete n.errors.validFullName,n.updateValueAndValidity()),this._isEmptyInputValue(n.value))||n.value.trim().split(" ").length>1)return null;const p={validFullName:"El nombre completo deber\xe1 tener al menos un nombre y un apellido"};return n.setErrors(p),p}}static checkOnSaleQty(r,m){return n=>{const p=n.get(r),o=n.get(m);if(!p||!o||(o.hasError("invalid")&&(delete o.errors.invalid,o.updateValueAndValidity()),p.value>=o.value))return null;const c={invalid:"La cantidad en venta no debe ser mayor a la disponible"};return o.setErrors(c),c}}static luhnValidator(){return r=>r.value?this.luhnCheck(r.value)?null:{luhnCheck:"Formato no v\xe1lido"}:null}static _isEmptyInputValue(r){return null==r||0===r.length}static luhnCheck(r){if(!r||!r.length)return!1;r=r.replace(/\s/g,"");const m=Number(r[r.length-1]),n=r.slice(0,r.length-1).split("").reverse().map(o=>Number(o));let p=0;for(let o=0;o<=n.length-1;o+=2)n[o]=2*n[o],n[o]>9&&(n[o]=n[o]-9);return p=n.reduce((o,c)=>o+c,0),(p+m)%10==0}}},8890:(F,v,l)=>{l.r(v),l.d(v,{AuthSignUpModule:()=>W});var d=l(35357),Z=l(47423),_=l(77446),r=l(67322),m=l(25245),n=l(98833),p=l(20773),o=l(85804),c=l(77775),f=l(17460),i=l(93075),y=l(63844),U=l(2491),t=l(5e3),x=l(88951),C=l(69808);const I=["signUpNgForm"];function b(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre y apellidos son obligatorios. "),t.qZA())}function T(e,s){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const u=t.oxw();t.xp6(1),t.hij(" ",u.signUpForm.get("fullname").getError("validFullName")," ")}}function N(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre y apellidos no deben superar los 250 caracteres. "),t.qZA())}function S(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre y apellidos no deben poseer n\xfameros. "),t.qZA())}function E(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El correo electr\xf3nico es obligatorio "),t.qZA())}function w(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor ingrese un correo electr\xf3nico v\xe1lido "),t.qZA())}function J(e,s){1&e&&t._UZ(0,"mat-icon",26),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function Q(e,s){1&e&&t._UZ(0,"mat-icon",26),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function q(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),t.qZA())}function Y(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La contrase\xf1a es obligatoria "),t.qZA())}function k(e,s){1&e&&t._UZ(0,"mat-icon",26),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function M(e,s){1&e&&t._UZ(0,"mat-icon",26),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function L(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La contrase\xf1a es obligatoria "),t.qZA())}function V(e,s){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const u=t.oxw();t.xp6(1),t.hij(" ",u.signUpForm.get("pwd2").getError("mustMatch")," ")}}function P(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Debe aceptar los t\xe9rminos y condiciones del servicio. "),t.qZA())}function D(e,s){1&e&&(t.TgZ(0,"span"),t._uU(1," Crear cuenta "),t.qZA())}function z(e,s){1&e&&t._UZ(0,"mat-progress-spinner",27),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const O=function(){return["/sign-in"]},$=[{path:"",component:(()=>{class e{constructor(u,a,g){this._authService=u,this._formBuilder=a,this._router=g,this.showAlert=!1,this.signUpFormSubmitted=!1,this.date=(new Date).valueOf()}ngOnInit(){this.signUpForm=this._formBuilder.group({fullname:["",[i.kI.required,i.kI.maxLength(255),U.L.onlyAlphabetsWithAccentPattern()]],email:["",[i.kI.required,i.kI.email]],pwd:["",[i.kI.required,i.kI.minLength(8),i.kI.maxLength(100),U.L.strongPasWordPattern()]],pwd2:["",[i.kI.required]],agreements:[!0,i.kI.requiredTrue],gender:["None"],imageUrl:[""],address:[""],city:[""],state:[""]},{validators:[U.L.mustMatch("pwd","pwd2"),U.L.validFullName("fullname")]})}signUp(){if(this.signUpFormSubmitted=!0,this.signUpForm.invalid)return;const u=this.signUpForm.getRawValue(),a=u.fullname.split(" "),g=u.email.split("@",2),A={name:a.length>3?a[0].trim()+" "+a[1].trim():a[0].trim(),lastname:a.length>3?a[2].trim()+" "+a[3].trim():2===a.length?a[1].trim():a[1].trim()+" "+a[2].trim(),email:u.email.trim(),username:g[0]+this.date,pwd:u.pwd.trim(),agreements:u.agreements};this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(A).subscribe(h=>{this._router.navigateByUrl("/confirmation-required")},()=>{this.signUpForm.enable(),this.signUpForm.reset(),this.showAlert=!0})}acceptAgreements(){return!this.signUpForm.get("agreements").value&&this.signUpFormSubmitted}}return e.\u0275fac=function(u){return new(u||e)(t.Y36(x.e),t.Y36(i.qu),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-up"]],viewQuery:function(u,a){if(1&u&&t.Gf(I,5),2&u){let g;t.iGM(g=t.CRH())&&(a.signUpNgForm=g.first)}},decls:62,vars:31,consts:[[1,"flex","flex-col","items-center","flex-auto","min-w-0","sm:flex-row","md:items-start","sm:justify-center","md:justify-start"],[1,"relative","items-center","justify-center","flex-auto","hidden","w-2/3","h-full","p-16","overflow-hidden","bg-gray-800","bg-center","bg-cover","md:flex","lg:px-28","dark:border-l",2,"background-image","url('assets/images/auth/auth.webp')"],[1,"w-full","px-4","py-8","overflow-auto","sm:w-auto","sm:p-12","md:p-16",2,"height","100vh !important"],[1,"w-full","mx-auto","max-w-80","sm:w-80","sm:mx-0"],[1,""],["src","assets/images/logo/logo-text.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"formGroup"],[1,"w-full","fuse-mat-dense"],["id","fullname","matInput","","required","",3,"formControlName","maxlength"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","pwd","matInput","","type","password","required","",3,"formControlName","minlength","maxlength"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","pwd2","matInput","","type","password","required","",3,"formControlName"],["passwordField2",""],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["href","https://athendat.site/#/terms","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["href","https://athendat.site/#/privacy","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["mat-flat-button","",1,"w-full","mt-6","fuse-mat-button-large",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(u,a){if(1&u){const g=t.EpF();t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6),t._uU(7,"Registro"),t.qZA(),t.TgZ(8,"div",7)(9,"div"),t._uU(10,"\xbfYa tiene un cuenta?"),t.qZA(),t.TgZ(11,"a",8),t._uU(12," Iniciar Sesi\xf3n "),t.qZA()(),t.TgZ(13,"form",9)(14,"mat-form-field",10)(15,"mat-label"),t._uU(16,"Nombre y Apellidos"),t.qZA(),t._UZ(17,"input",11),t.YNc(18,b,2,0,"mat-error",12),t.YNc(19,T,2,1,"mat-error",12),t.YNc(20,N,2,0,"mat-error",12),t.YNc(21,S,2,0,"mat-error",12),t.qZA(),t.TgZ(22,"mat-form-field",10)(23,"mat-label"),t._uU(24,"Correo electr\xf3nico"),t.qZA(),t._UZ(25,"input",13),t.YNc(26,E,2,0,"mat-error",12),t.YNc(27,w,2,0,"mat-error",12),t.qZA(),t.TgZ(28,"mat-form-field",10)(29,"mat-label"),t._uU(30,"Contrase\xf1a"),t.qZA(),t._UZ(31,"input",14,15),t.TgZ(33,"button",16),t.NdJ("click",function(){t.CHM(g);const h=t.MAs(32);return t.KtG(h.type="password"===h.type?"text":"password")}),t.YNc(34,J,1,1,"mat-icon",17),t.YNc(35,Q,1,1,"mat-icon",17),t.qZA(),t.YNc(36,q,2,0,"mat-error",12),t.YNc(37,Y,2,0,"mat-error",12),t.qZA(),t.TgZ(38,"mat-form-field",10)(39,"mat-label"),t._uU(40,"Repita la contrase\xf1a"),t.qZA(),t._UZ(41,"input",18,19),t.TgZ(43,"button",16),t.NdJ("click",function(){t.CHM(g);const h=t.MAs(42);return t.KtG(h.type="password"===h.type?"text":"password")}),t.YNc(44,k,1,1,"mat-icon",17),t.YNc(45,M,1,1,"mat-icon",17),t.qZA(),t.YNc(46,L,2,0,"mat-error",12),t.YNc(47,V,2,1,"mat-error",12),t.qZA(),t.TgZ(48,"div",20)(49,"mat-checkbox",21)(50,"span"),t._uU(51,"Estoy de acuerdo con los"),t.qZA(),t.TgZ(52,"a",22),t._uU(53,"T\xe9rminos de Uso "),t.qZA(),t.TgZ(54,"span"),t._uU(55,"y la"),t.qZA(),t.TgZ(56,"a",23),t._uU(57,"Pol\xedtica de Privacidad "),t.qZA(),t.YNc(58,P,2,0,"mat-error",12),t.qZA()(),t.TgZ(59,"button",24),t.NdJ("click",function(){return a.signUp()}),t.YNc(60,D,2,0,"span",12),t.YNc(61,z,1,2,"mat-progress-spinner",25),t.qZA()()()()()}if(2&u){const g=t.MAs(32),A=t.MAs(42);t.xp6(11),t.Q6J("routerLink",t.DdM(30,O)),t.xp6(2),t.Q6J("formGroup",a.signUpForm),t.xp6(4),t.Q6J("formControlName","fullname")("maxlength",255),t.xp6(1),t.Q6J("ngIf",a.signUpForm.get("fullname").hasError("required")),t.xp6(1),t.Q6J("ngIf",a.signUpForm.get("fullname").hasError("validFullName")),t.xp6(1),t.Q6J("ngIf",a.signUpForm.get("fullname").hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",a.signUpForm.get("fullname").hasError("pattern")),t.xp6(4),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",a.signUpForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",a.signUpForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","pwd")("minlength",8)("maxlength",100),t.xp6(3),t.Q6J("ngIf","password"===g.type),t.xp6(1),t.Q6J("ngIf","text"===g.type),t.xp6(1),t.Q6J("ngIf",a.signUpForm.get("pwd").hasError("pattern")||a.signUpForm.get("pwd").hasError("minlength")),t.xp6(1),t.Q6J("ngIf",a.signUpForm.get("pwd").hasError("required")),t.xp6(4),t.Q6J("formControlName","pwd2"),t.xp6(3),t.Q6J("ngIf","password"===A.type),t.xp6(1),t.Q6J("ngIf","text"===A.type),t.xp6(1),t.Q6J("ngIf",a.signUpForm.get("pwd2").hasError("required")),t.xp6(1),t.Q6J("ngIf",a.signUpForm.get("pwd2").hasError("mustMatch")),t.xp6(2),t.Q6J("color","primary")("formControlName","agreements"),t.xp6(9),t.Q6J("ngIf",a.acceptAgreements()),t.xp6(1),t.Q6J("color","primary")("disabled",a.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",!a.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",a.signUpForm.disabled)}},dependencies:[d.yS,Z.lW,_.oG,r.TO,r.KE,r.hX,r.R9,m.Hw,n.Nt,p.Ou,C.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.wO,i.nD,i.sg,i.u],encapsulation:2,data:{animation:y.L}}),e})()}];let W=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild($),Z.ot,_.p9,r.lN,m.Ps,n.c,p.Cq,o.J,c.fC,f.m]}),e})()}}]);