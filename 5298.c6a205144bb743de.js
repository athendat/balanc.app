"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[5298],{2491:(I,A,n)=>{n.d(A,{L:()=>y});var p=n(93075);class y{static isEmptyInputValue(s){return null==s||0===s.length}static mustMatch(s,i){return r=>{const u=r.get(s),o=r.get(i);if(!u||!o||(o.hasError("mustMatch")&&(delete o.errors.mustMatch,o.updateValueAndValidity()),this.isEmptyInputValue(o.value)||u.value===o.value))return null;const m={mustMatch:"Las contrase\xf1a no coinciden."};return o.setErrors(m),m}}static strongPassWord(s,i,r,u,o){return m=>{const a=m.value;if(!a)return null;const w=!s||/[A-Z]+/.test(a),P=!i||/[a-z]+/.test(a),Z=!r||/[0-9]+/.test(a),C=!u||!/^[a-zA-Z0-9]+$/.test(a);return w&&P&&Z&&C&&a.length>=o?null:{password:"La contrase\xf1a no cumple con los est\xe1ndares de seguridad requeridos"}}}static onlyNumber(s){return i=>{const r=i.get(s);if(!r||!r.value||(r.hasError("onlyNumber")&&(delete r.errors.onlyNumber,r.updateValueAndValidity()),/^[a-zA-Z0-9]+$/.test(r.value.toString())))return null;const o={onlyNumber:"Solo se admiten n\xfameros."};return console.log(o),r.setErrors(o),o}}static strongPasWordPattern(){return p.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)}static emailPattern(){return p.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")}static onlyNumbersPattern(){return p.kI.pattern("^[0-9]*$")}static numbersAndDecimalsPattern(){return p.kI.pattern(/^-?\d*[.,]?\d{0,2}$/)}static onlyAlphabetsWithAccentPattern(){return p.kI.pattern("^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\xfc\xdc]*$")}static onlyAlphabetsPattern(){return p.kI.pattern("^[a-zA-Z ]*$")}static validateIdNumber(){return s=>{if(!s)return null;let i=s.value;if(!i)return null;void 0!==s.value.idNumber&&(i=s.value.idNumber);const r=parseInt(i.substring(0,2),10),u=parseInt(i.substring(2,4),10)-1,o=parseInt(i.substring(4,6),10),m=new Date(r,u,o);if(m.getFullYear().toString().substring(2,4)===r.toString()&&m.getMonth()===u&&m.getDate()===o)return null;const w={validateIdNumber:"El n\xfamero de identidad introducido es incorrecto"};return s.setErrors(w),w}}static validFullName(s){return i=>{const r=i.get(s);if(!r||!s||(r.hasError("validFullName")&&(delete r.errors.validFullName,r.updateValueAndValidity()),this._isEmptyInputValue(r.value))||r.value.trim().split(" ").length>1)return null;const u={validFullName:"El nombre completo deber\xe1 tener al menos un nombre y un apellido"};return r.setErrors(u),u}}static checkOnSaleQty(s,i){return r=>{const u=r.get(s),o=r.get(i);if(!u||!o||(o.hasError("invalid")&&(delete o.errors.invalid,o.updateValueAndValidity()),u.value>=o.value))return null;const m={invalid:"La cantidad en venta no debe ser mayor a la disponible"};return o.setErrors(m),m}}static luhnValidator(){return s=>s.value?this.luhnCheck(s.value)?null:{luhnCheck:"Formato no v\xe1lido"}:null}static _isEmptyInputValue(s){return null==s||0===s.length}static luhnCheck(s){if(!s||!s.length)return!1;s=s.replace(/\s/g,"");const i=Number(s[s.length-1]),r=s.slice(0,s.length-1).split("").reverse().map(o=>Number(o));let u=0;for(let o=0;o<=r.length-1;o+=2)r[o]=2*r[o],r[o]>9&&(r[o]=r[o]-9);return u=r.reduce((o,m)=>o+m,0),(u+i)%10==0}}},35298:(I,A,n)=>{n.r(A),n.d(A,{AuthResetPasswordModule:()=>z});var p=n(35357),y=n(47423),g=n(67322),s=n(25245),i=n(98833),r=n(20773),u=n(85804),o=n(77775),m=n(17460),a=n(93075),w=n(95698),P=n(28746),Z=n(63844),C=n(2491),t=n(5e3),F=n(88951),x=n(12494),b=n(69808);const N=["resetPasswordNgForm"];function T(e,d){if(1&e&&(t.TgZ(0,"fuse-alert",23),t._uU(1),t.qZA()),2&e){const l=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",l.alert.type)("@shake","error"===l.alert.type),t.xp6(1),t.hij(" ",l.alert.message," ")}}function R(e,d){1&e&&t._UZ(0,"mat-icon",24),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function J(e,d){1&e&&t._UZ(0,"mat-icon",24),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function E(e,d){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 20 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),t.qZA())}function Q(e,d){1&e&&t._UZ(0,"mat-icon",24),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function _(e,d){1&e&&t._UZ(0,"mat-icon",24),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function U(e,d){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La confirmaci\xf3n de la contrase\xf1a es obligatoria "),t.qZA())}function M(e,d){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Las contrase\xf1as deben coincidir "),t.qZA())}function L(e,d){1&e&&(t.TgZ(0,"span"),t._uU(1," Actualizar Contrase\xf1a "),t.qZA())}function V(e,d){1&e&&t._UZ(0,"mat-progress-spinner",25),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const Y=function(){return["/sign-in"]},k=[{path:":forgotCode",component:(()=>{class e{constructor(l,c,f){this._activatedRoute=l,this._authService=c,this._formBuilder=f,this.alert={type:"success",message:""},this.showAlert=!1,this.forgotCode=""}ngOnInit(){this._activatedRoute.params.pipe((0,w.q)(1)).subscribe(l=>this.forgotCode=l.forgotCode),this.resetPasswordForm=this._formBuilder.group({password:["",[a.kI.required,a.kI.minLength(8),a.kI.maxLength(255),C.L.strongPasWordPattern()]],passwordConfirm:["",a.kI.required]},{validators:C.L.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword(this.resetPasswordForm.get("password").value,this.forgotCode).pipe((0,P.x)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm()})).subscribe(l=>{this.showAlert=!0,this.alert={type:"success",message:l.message}},l=>{this.showAlert=!1}))}}return e.\u0275fac=function(l){return new(l||e)(t.Y36(p.gz),t.Y36(F.e),t.Y36(a.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-reset-password"]],viewQuery:function(l,c){if(1&l&&t.Gf(N,5),2&l){let f;t.iGM(f=t.CRH())&&(c.resetPasswordNgForm=f.first)}},decls:42,vars:19,consts:[[1,"flex","flex-col","items-center","flex-auto","min-w-0","sm:flex-row","md:items-start","sm:justify-center","md:justify-start"],[1,"relative","items-center","justify-center","flex-auto","hidden","w-2/3","h-full","p-16","overflow-hidden","bg-gray-800","bg-center","bg-cover","md:flex","lg:px-28","dark:border-l",2,"background-image","url('assets/images/auth/auth.webp')"],[1,"w-full","px-4","py-8","overflow-auto","sm:w-auto","sm:p-12","md:p-16",2,"height","100vh !important"],[1,"w-full","mx-auto","max-w-80","sm:w-80","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["resetPasswordNgForm","ngForm"],[1,"w-full","fuse-mat-dense"],["id","password","matInput","","type","password","required","",3,"formControlName","minlength","maxlength"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[4,"ngIf"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["passwordConfirmField",""],["mat-flat-button","",1,"w-full","mt-3","fuse-mat-button-large",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","font-medium","text-md","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(l,c){if(1&l){const f=t.EpF();t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6),t._uU(7,"Renueve su contrase\xf1a"),t.qZA(),t.TgZ(8,"div",7),t._uU(9,"Cree una nueva contrase\xf1a para su cuenta"),t.qZA(),t.YNc(10,T,2,5,"fuse-alert",8),t.TgZ(11,"form",9,10)(13,"mat-form-field",11)(14,"mat-label"),t._uU(15,"Contrase\xf1a"),t.qZA(),t._UZ(16,"input",12,13),t.TgZ(18,"button",14),t.NdJ("click",function(){t.CHM(f);const h=t.MAs(17);return t.KtG(h.type="password"===h.type?"text":"password")}),t.YNc(19,R,1,1,"mat-icon",15),t.YNc(20,J,1,1,"mat-icon",15),t.qZA(),t.TgZ(21,"mat-error"),t._uU(22," La contrase\xf1a es obligatoria "),t.qZA(),t.YNc(23,E,2,0,"mat-error",16),t.qZA(),t.TgZ(24,"mat-form-field",11)(25,"mat-label"),t._uU(26,"Contrase\xf1a (Confirme)"),t.qZA(),t._UZ(27,"input",17,18),t.TgZ(29,"button",14),t.NdJ("click",function(){t.CHM(f);const h=t.MAs(28);return t.KtG(h.type="password"===h.type?"text":"password")}),t.YNc(30,Q,1,1,"mat-icon",15),t.YNc(31,_,1,1,"mat-icon",15),t.qZA(),t.YNc(32,U,2,0,"mat-error",16),t.YNc(33,M,2,0,"mat-error",16),t.qZA(),t.TgZ(34,"button",19),t.NdJ("click",function(){return c.resetPassword()}),t.YNc(35,L,2,0,"span",16),t.YNc(36,V,1,2,"mat-progress-spinner",20),t.qZA(),t.TgZ(37,"div",21)(38,"span"),t._uU(39,"Regresar a"),t.qZA(),t.TgZ(40,"a",22),t._uU(41,"Iniciar Sesi\xf3n "),t.qZA()()()()()()}if(2&l){const f=t.MAs(17),v=t.MAs(28);t.xp6(10),t.Q6J("ngIf",c.showAlert),t.xp6(1),t.Q6J("formGroup",c.resetPasswordForm),t.xp6(5),t.Q6J("formControlName","password")("minlength",8)("maxlength",255),t.xp6(3),t.Q6J("ngIf","password"===f.type),t.xp6(1),t.Q6J("ngIf","text"===f.type),t.xp6(3),t.Q6J("ngIf",c.resetPasswordForm.get("password").hasError("pattern")||c.resetPasswordForm.get("password").hasError("minlength")),t.xp6(4),t.Q6J("formControlName","passwordConfirm"),t.xp6(3),t.Q6J("ngIf","password"===v.type),t.xp6(1),t.Q6J("ngIf","text"===v.type),t.xp6(1),t.Q6J("ngIf",c.resetPasswordForm.get("passwordConfirm").hasError("required")),t.xp6(1),t.Q6J("ngIf",c.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")),t.xp6(1),t.Q6J("color","primary")("disabled",c.resetPasswordForm.disabled),t.xp6(1),t.Q6J("ngIf",!c.resetPasswordForm.disabled),t.xp6(1),t.Q6J("ngIf",c.resetPasswordForm.disabled),t.xp6(4),t.Q6J("routerLink",t.DdM(18,Y))}},dependencies:[p.yS,y.lW,g.TO,g.KE,g.hX,g.R9,s.Hw,i.Nt,r.Ou,x.W,b.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.sg,a.u],encapsulation:2,data:{animation:Z.L}}),e})()}];let z=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(k),y.ot,g.lN,s.Ps,i.c,r.Cq,u.J,o.fC,m.m]}),e})()}}]);