"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[890],{2491:(I,Z,l)=>{l.d(Z,{L:()=>_});var g=l(93075);class _{static isEmptyInputValue(r){return null==r||0===r.length}static mustMatch(r,m){return n=>{const u=n.get(r),o=n.get(m);if(!u||!o||(o.hasError("mustMatch")&&(delete o.errors.mustMatch,o.updateValueAndValidity()),this.isEmptyInputValue(o.value)||u.value===o.value))return null;const c={mustMatch:"Las contrase\xf1a no coinciden."};return o.setErrors(c),c}}static strongPassWord(r,m,n,u,o){return c=>{const h=c.value;if(!h)return null;const a=!r||/[A-Z]+/.test(h),x=!m||/[a-z]+/.test(h),f=!n||/[0-9]+/.test(h),t=!u||!/^[a-zA-Z0-9]+$/.test(h);return a&&x&&f&&t&&h.length>=o?null:{password:"La contrase\xf1a no cumple con los est\xe1ndares de seguridad requeridos"}}}static onlyNumber(r){return m=>{const n=m.get(r);if(!n||!n.value||(n.hasError("onlyNumber")&&(delete n.errors.onlyNumber,n.updateValueAndValidity()),/^[a-zA-Z0-9]+$/.test(n.value.toString())))return null;const o={onlyNumber:"Solo se admiten n\xfameros."};return console.log(o),n.setErrors(o),o}}static strongPasWordPattern(){return g.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)}static emailPattern(){return g.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")}static onlyNumbersPattern(){return g.kI.pattern("^[0-9]*$")}static numbersAndDecimalsPattern(){return g.kI.pattern(/^-?\d*[.,]?\d{0,2}$/)}static onlyAlphabetsWithAccentPattern(){return g.kI.pattern("^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\xfc\xdc]*$")}static onlyAlphabetsPattern(){return g.kI.pattern("^[a-zA-Z ]*$")}static validateIdNumber(){return r=>{if(!r)return null;let m=r.value;if(!m)return null;void 0!==r.value.idNumber&&(m=r.value.idNumber);const n=parseInt(m.substring(0,2),10),u=parseInt(m.substring(2,4),10)-1,o=parseInt(m.substring(4,6),10),c=new Date(n,u,o);if(c.getFullYear().toString().substring(2,4)===n.toString()&&c.getMonth()===u&&c.getDate()===o)return null;const a={validateIdNumber:"El n\xfamero de identidad introducido es incorrecto"};return r.setErrors(a),a}}static validFullName(r){return m=>{const n=m.get(r);if(!n||!r||(n.hasError("validFullName")&&(delete n.errors.validFullName,n.updateValueAndValidity()),this._isEmptyInputValue(n.value))||n.value.trim().split(" ").length>1)return null;const u={validFullName:"El nombre completo deber\xe1 tener al menos un nombre y un apellido"};return n.setErrors(u),u}}static checkOnSaleQty(r,m){return n=>{const u=n.get(r),o=n.get(m);if(!u||!o||(o.hasError("invalid")&&(delete o.errors.invalid,o.updateValueAndValidity()),u.value>=o.value))return null;const c={invalid:"La cantidad en venta no debe ser mayor a la disponible"};return o.setErrors(c),c}}static luhnValidator(){return r=>r.value?this.luhnCheck(r.value)?null:{luhnCheck:"Formato no v\xe1lido"}:null}static _isEmptyInputValue(r){return null==r||0===r.length}static luhnCheck(r){if(!r||!r.length)return!1;r=r.replace(/\s/g,"");const m=Number(r[r.length-1]),n=r.slice(0,r.length-1).split("").reverse().map(o=>Number(o));let u=0;for(let o=0;o<=n.length-1;o+=2)n[o]=2*n[o],n[o]>9&&(n[o]=n[o]-9);return u=n.reduce((o,c)=>o+c,0),(u+m)%10==0}}},8890:(I,Z,l)=>{l.r(Z),l.d(Z,{AuthSignUpModule:()=>B});var g=l(35357),_=l(47423),v=l(77446),r=l(67322),m=l(25245),n=l(98833),u=l(20773),o=l(85804),c=l(77775),h=l(17460),a=l(93075),x=l(63844),f=l(2491),t=l(5e3),y=l(88951),C=l(69808);const b=["signUpNgForm"];function T(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre son obligatorios. "),t.qZA())}function F(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre no deben superar los 250 caracteres. "),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El Primer Apellido son obligatorios. "),t.qZA())}function S(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El Primer Apellido no deben superar los 250 caracteres. "),t.qZA())}function E(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El Segundo Apellido no deben superar los 250 caracteres. "),t.qZA())}function J(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El correo electr\xf3nico es obligatorio "),t.qZA())}function w(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor ingrese un correo electr\xf3nico v\xe1lido "),t.qZA())}function q(e,i){1&e&&t._UZ(0,"mat-icon",28),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function Q(e,i){1&e&&t._UZ(0,"mat-icon",28),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function k(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),t.qZA())}function L(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La contrase\xf1a es obligatoria "),t.qZA())}function Y(e,i){1&e&&t._UZ(0,"mat-icon",28),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function M(e,i){1&e&&t._UZ(0,"mat-icon",28),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function P(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La contrase\xf1a es obligatoria "),t.qZA())}function V(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const p=t.oxw();t.xp6(1),t.hij(" ",p.signUpForm.get("pwd2").getError("mustMatch")," ")}}function D(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Debe aceptar los t\xe9rminos y condiciones del servicio. "),t.qZA())}function z(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1," Crear cuenta "),t.qZA())}function W(e,i){1&e&&t._UZ(0,"mat-progress-spinner",29),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const O=function(){return["/sign-in"]},$=[{path:"",component:(()=>{class e{constructor(p,s,d){this._authService=p,this._formBuilder=s,this._router=d,this.showAlert=!1,this.signUpFormSubmitted=!1,this.date=(new Date).valueOf()}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",[a.kI.required,a.kI.minLength(3),a.kI.maxLength(255),f.L.onlyAlphabetsWithAccentPattern()]],lastname1:["",[a.kI.required,a.kI.maxLength(255),f.L.onlyAlphabetsWithAccentPattern()]],lastname2:["",[a.kI.minLength(3),a.kI.maxLength(255),f.L.onlyAlphabetsWithAccentPattern()]],email:["",[a.kI.required,a.kI.email]],pwd:["",[a.kI.required,a.kI.minLength(8),a.kI.maxLength(100),f.L.strongPasWordPattern()]],pwd2:["",[a.kI.required]],agreements:[!0,a.kI.requiredTrue]},{validators:[f.L.mustMatch("pwd","pwd2"),f.L.validFullName("fullname")]})}signUp(){if(this.signUpFormSubmitted=!0,this.signUpForm.invalid)return;const p=this.signUpForm.getRawValue();delete p.pwd2,this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(p).subscribe(s=>{this._router.navigateByUrl("/confirmation-required")},()=>{this.signUpForm.enable(),this.signUpForm.reset(),this.showAlert=!0})}acceptAgreements(){return!this.signUpForm.get("agreements").value&&this.signUpFormSubmitted}}return e.\u0275fac=function(p){return new(p||e)(t.Y36(y.e),t.Y36(a.qu),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-up"]],viewQuery:function(p,s){if(1&p&&t.Gf(b,5),2&p){let d;t.iGM(d=t.CRH())&&(s.signUpNgForm=d.first)}},decls:71,vars:36,consts:[[1,"flex","flex-col","items-center","flex-auto","min-w-0","sm:flex-row","md:items-start","sm:justify-center","md:justify-start"],[1,"relative","items-center","justify-center","flex-auto","hidden","w-2/3","h-full","p-16","overflow-hidden","bg-gray-800","bg-center","bg-cover","md:flex","lg:px-28","dark:border-l",2,"background-image","url('assets/images/auth/auth.webp')"],[1,"w-full","px-4","py-8","overflow-auto","sm:w-auto","sm:p-12","md:p-16",2,"height","100vh !important"],[1,"w-full","mx-auto","max-w-80","sm:w-80","sm:mx-0"],[1,""],["src","assets/images/logo/logo-text.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"formGroup"],[1,"w-full","fuse-mat-dense"],["id","name","matInput","","required","",3,"formControlName","maxlength"],[4,"ngIf"],["id","lastname1","matInput","","required","",3,"formControlName","maxlength"],["id","lastname2","matInput","",3,"formControlName","maxlength"],["id","email","matInput","",3,"formControlName"],["id","pwd","matInput","","type","password","required","",3,"formControlName","minlength","maxlength"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","pwd2","matInput","","type","password","required","",3,"formControlName"],["passwordField2",""],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["href","https://athendat.site/#/terms","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["href","https://athendat.site/#/privacy","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["mat-flat-button","",1,"w-full","mt-6","fuse-mat-button-large",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(p,s){if(1&p){const d=t.EpF();t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6),t._uU(7,"Registro"),t.qZA(),t.TgZ(8,"div",7)(9,"div"),t._uU(10,"\xbfYa tiene un cuenta?"),t.qZA(),t.TgZ(11,"a",8),t._uU(12," Iniciar Sesi\xf3n "),t.qZA()(),t.TgZ(13,"form",9)(14,"mat-form-field",10)(15,"mat-label"),t._uU(16,"Nombre"),t.qZA(),t._UZ(17,"input",11),t.YNc(18,T,2,0,"mat-error",12),t.YNc(19,F,2,0,"mat-error",12),t.qZA(),t.TgZ(20,"mat-form-field",10)(21,"mat-label"),t._uU(22,"Primer Apellido"),t.qZA(),t._UZ(23,"input",13),t.YNc(24,N,2,0,"mat-error",12),t.YNc(25,S,2,0,"mat-error",12),t.qZA(),t.TgZ(26,"mat-form-field",10)(27,"mat-label"),t._uU(28,"Segundo Apellido"),t.qZA(),t._UZ(29,"input",14),t.YNc(30,E,2,0,"mat-error",12),t.qZA(),t.TgZ(31,"mat-form-field",10)(32,"mat-label"),t._uU(33,"Correo electr\xf3nico"),t.qZA(),t._UZ(34,"input",15),t.YNc(35,J,2,0,"mat-error",12),t.YNc(36,w,2,0,"mat-error",12),t.qZA(),t.TgZ(37,"mat-form-field",10)(38,"mat-label"),t._uU(39,"Contrase\xf1a"),t.qZA(),t._UZ(40,"input",16,17),t.TgZ(42,"button",18),t.NdJ("click",function(){t.CHM(d);const A=t.MAs(41);return t.KtG(A.type="password"===A.type?"text":"password")}),t.YNc(43,q,1,1,"mat-icon",19),t.YNc(44,Q,1,1,"mat-icon",19),t.qZA(),t.YNc(45,k,2,0,"mat-error",12),t.YNc(46,L,2,0,"mat-error",12),t.qZA(),t.TgZ(47,"mat-form-field",10)(48,"mat-label"),t._uU(49,"Repita la contrase\xf1a"),t.qZA(),t._UZ(50,"input",20,21),t.TgZ(52,"button",18),t.NdJ("click",function(){t.CHM(d);const A=t.MAs(51);return t.KtG(A.type="password"===A.type?"text":"password")}),t.YNc(53,Y,1,1,"mat-icon",19),t.YNc(54,M,1,1,"mat-icon",19),t.qZA(),t.YNc(55,P,2,0,"mat-error",12),t.YNc(56,V,2,1,"mat-error",12),t.qZA(),t.TgZ(57,"div",22)(58,"mat-checkbox",23)(59,"span"),t._uU(60,"Estoy de acuerdo con los"),t.qZA(),t.TgZ(61,"a",24),t._uU(62,"T\xe9rminos de Uso "),t.qZA(),t.TgZ(63,"span"),t._uU(64,"y la"),t.qZA(),t.TgZ(65,"a",25),t._uU(66,"Pol\xedtica de Privacidad "),t.qZA(),t.YNc(67,D,2,0,"mat-error",12),t.qZA()(),t.TgZ(68,"button",26),t.NdJ("click",function(){return s.signUp()}),t.YNc(69,z,2,0,"span",12),t.YNc(70,W,1,2,"mat-progress-spinner",27),t.qZA()()()()()}if(2&p){const d=t.MAs(41),U=t.MAs(51);t.xp6(11),t.Q6J("routerLink",t.DdM(35,O)),t.xp6(2),t.Q6J("formGroup",s.signUpForm),t.xp6(4),t.Q6J("formControlName","name")("maxlength",255),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("name").hasError("required")),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("name").hasError("maxlength")),t.xp6(4),t.Q6J("formControlName","lastname1")("maxlength",255),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("lastname1").hasError("required")),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("lastname1").hasError("maxlength")),t.xp6(4),t.Q6J("formControlName","lastname2")("maxlength",255),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("lastname2").hasError("maxlength")),t.xp6(4),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","pwd")("minlength",8)("maxlength",100),t.xp6(3),t.Q6J("ngIf","password"===d.type),t.xp6(1),t.Q6J("ngIf","text"===d.type),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("pwd").hasError("pattern")||s.signUpForm.get("pwd").hasError("minlength")),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("pwd").hasError("required")),t.xp6(4),t.Q6J("formControlName","pwd2"),t.xp6(3),t.Q6J("ngIf","password"===U.type),t.xp6(1),t.Q6J("ngIf","text"===U.type),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("pwd2").hasError("required")),t.xp6(1),t.Q6J("ngIf",s.signUpForm.get("pwd2").hasError("mustMatch")),t.xp6(2),t.Q6J("color","primary")("formControlName","agreements"),t.xp6(9),t.Q6J("ngIf",s.acceptAgreements()),t.xp6(1),t.Q6J("color","primary")("disabled",s.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",!s.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",s.signUpForm.disabled)}},dependencies:[g.yS,_.lW,v.oG,r.TO,r.KE,r.hX,r.R9,m.Hw,n.Nt,u.Ou,C.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.sg,a.u],encapsulation:2,data:{animation:x.L}}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild($),_.ot,v.p9,r.lN,m.Ps,n.c,u.Cq,o.J,c.fC,h.m]}),e})()}}]);