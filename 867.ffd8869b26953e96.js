"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[867],{20867:(rt,G,a)=>{a.r(G),a.d(G,{default:()=>ot});var e=a(54438),v=a(51188),B=a(55542),s=a(89417),d=a(88834),b=a(82765),_=a(9454),m=a(32102),p=a(99213),u=a(59042),V=a(86600),L=a(82798),k=a(30450),w=a(95416),R=a(60177),y=a(21413),c=a(56977),I=a(82341),U=a(59640),P=a(63729),T=a(15887),M=a(3999),j=a(87122),E=a(46601),f=a(94794),g=a(87932),h=a(55364);const z=(t,r)=>r.id,S=t=>({"cursor-not-allowed":t});function Q(t,r){1&t&&(e.j41(0,"a",9),e.EFF(1,"Nuevo"),e.k0s())}function W(t,r){if(1&t&&(e.j41(0,"a",9),e.EFF(1),e.k0s()),2&t){const o=e.XpG();e.R7$(),e.JRh(o.selectedUser.fullname)}}function O(t,r){1&t&&e.EFF(0," Nuevo ")}function J(t,r){if(1&t&&e.EFF(0),2&t){const o=e.XpG();e.SpI(" ",o.selectedUser.fullname," ")}}function H(t,r){if(1&t){const o=e.RV6();e.j41(0,"button",36),e.bIt("click",function(){e.eBV(o);const i=e.XpG();return e.Njj(i.createUser())}),e.nrm(1,"mat-icon",37),e.j41(2,"span",38),e.EFF(3,"Guardar"),e.k0s()()}if(2&t){const o=e.XpG();e.Y8G("ngClass",e.eq3(3,S,o.userForm.invalid))("disabled",o.userForm.invalid),e.R7$(),e.Y8G("svgIcon","mat_solid:save_alt")}}function Z(t,r){if(1&t){const o=e.RV6();e.j41(0,"button",39),e.bIt("click",function(){e.eBV(o);const i=e.XpG();return e.Njj(i.updateUser())}),e.nrm(1,"mat-icon",37),e.j41(2,"span",38),e.EFF(3,"Actualizar"),e.k0s()()}if(2&t){const o=e.XpG();e.Y8G("disabled",o.userForm.invalid)("ngClass",e.eq3(3,S,o.userForm.invalid)),e.R7$(),e.Y8G("svgIcon","mat_solid:refresh")}}function q(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," El nombre es obligatorio. "),e.k0s())}function K(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," El nombre debe contener entre 3 y 255 caracteres. "),e.k0s())}function ee(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," El nombre no debe poseer n\xfameros. "),e.k0s())}function te(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Los apellidos son obligatorios. "),e.k0s())}function oe(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Los apellidos deben contener entre 3 y 255 caracteres. "),e.k0s())}function ie(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," los apellidos no deben poseer n\xfameros. "),e.k0s())}function ne(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Los apellidos deben contener entre 3 y 255 caracteres. "),e.k0s())}function re(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," los apellidos no deben poseer n\xfameros. "),e.k0s())}function se(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," El correo electr\xf3nico es obligatorio. "),e.k0s())}function ae(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," El correo no posee un formato v\xe1lido. "),e.k0s())}function le(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," El tel\xe9fono no posee un formato v\xe1lido. "),e.k0s())}function ce(t,r){1&t&&e.nrm(0,"mat-icon",43),2&t&&e.Y8G("svgIcon","mat_solid:visibility")}function me(t,r){1&t&&e.nrm(0,"mat-icon",43),2&t&&e.Y8G("svgIcon","mat_solid:visibility_off")}function de(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," La contrase\xf1a es obligatoria. "),e.k0s())}function pe(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),e.k0s())}function ue(t,r){1&t&&e.nrm(0,"mat-icon",43),2&t&&e.Y8G("svgIcon","mat_solid:visibility")}function fe(t,r){1&t&&e.nrm(0,"mat-icon",43),2&t&&e.Y8G("svgIcon","mat_solid:visibility_off")}function he(t,r){1&t&&(e.j41(0,"mat-error",45),e.EFF(1," La contrase\xf1a es obligatoria "),e.k0s())}function _e(t,r){if(1&t&&(e.j41(0,"mat-error"),e.EFF(1),e.k0s()),2&t){const o=e.XpG(2);e.R7$(),e.SpI(" ",o.userForm.get("pwd2").getError("mustMatch")," ")}}function ge(t,r){if(1&t){const o=e.RV6();e.j41(0,"mat-expansion-panel",34)(1,"mat-expansion-panel-header",23)(2,"mat-panel-title",24)(3,"div",25),e.EFF(4," Contrase\xf1a "),e.k0s()()(),e.j41(5,"div",40)(6,"div",27)(7,"mat-form-field",28)(8,"mat-label"),e.EFF(9,"Contrase\xf1a"),e.k0s(),e.nrm(10,"input",41,0),e.j41(12,"button",42),e.bIt("click",function(){e.eBV(o);const i=e.sdS(11);return e.Njj(i.type="password"===i.type?"text":"password")}),e.DNE(13,ce,1,1,"mat-icon",43)(14,me,1,1,"mat-icon",43),e.k0s(),e.DNE(15,de,2,0,"mat-error")(16,pe,2,0,"mat-error"),e.k0s()(),e.j41(17,"div",27)(18,"mat-form-field",28)(19,"mat-label"),e.EFF(20,"Confirmar contrase\xf1a"),e.k0s(),e.nrm(21,"input",44,1),e.j41(23,"button",42),e.bIt("click",function(){e.eBV(o);const i=e.sdS(22);return e.Njj(i.type="password"===i.type?"text":"password")}),e.DNE(24,ue,1,1,"mat-icon",43)(25,fe,1,1,"mat-icon",43),e.k0s(),e.DNE(26,he,2,0,"mat-error",45)(27,_e,2,1,"mat-error"),e.k0s()()()()}if(2&t){const o=e.sdS(11),n=e.sdS(22),i=e.XpG();e.Y8G("expanded",!0),e.R7$(),e.Y8G("collapsedHeight","56px"),e.R7$(9),e.Y8G("formControlName","pwd")("minlength",8)("maxlength",100),e.R7$(3),e.vxM(13,"password"===o.type?13:-1),e.R7$(),e.vxM(14,"text"===o.type?14:-1),e.R7$(),e.vxM(15,i.userForm.get("pwd").hasError("required")?15:-1),e.R7$(),e.vxM(16,i.userForm.get("pwd").hasError("pattern")||i.userForm.get("pwd").hasError("minlength")?16:-1),e.R7$(5),e.Y8G("formControlName","pwd2"),e.R7$(3),e.vxM(24,"password"===n.type?24:-1),e.R7$(),e.vxM(25,"text"===n.type?25:-1),e.R7$(),e.vxM(26,i.userForm.get("pwd2").hasError("required")?26:-1),e.R7$(),e.vxM(27,i.userForm.get("pwd2").hasError("mustMatch")?27:-1)}}function xe(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",53),e.bIt("click",function(){e.eBV(o);const i=e.XpG().$implicit,l=e.XpG(2);return e.Njj(l.markRole(i.id,!i.checked))}),e.j41(1,"div",54),e.EFF(2),e.k0s()()}if(2&t){const o=e.XpG().$implicit;e.R7$(2),e.SpI(" ",o.description," ")}}function ve(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",49)(1,"mat-checkbox",50),e.bIt("change",function(i){const l=e.eBV(o).$implicit,x=e.XpG(2);return e.Njj(x.markRole(l.id,i.checked))}),e.j41(2,"span",51),e.EFF(3),e.k0s()(),e.DNE(4,xe,3,1,"div",52),e.k0s()}if(2&t){const o=r.$implicit;e.R7$(),e.Y8G("color","primary")("color","primary")("checked",o.checked),e.R7$(2),e.SpI(" ",o.name," "),e.R7$(),e.vxM(4,o.description?4:-1)}}function be(t,r){if(1&t&&(e.j41(0,"mat-expansion-panel",35)(1,"mat-expansion-panel-header",23)(2,"mat-panel-title",24)(3,"div",25),e.EFF(4," Roles "),e.k0s()()(),e.j41(5,"div",46)(6,"div",47)(7,"div",48),e.Z7z(8,ve,5,5,"div",49,z),e.k0s()()()()),2&t){const o=e.XpG();e.R7$(),e.Y8G("collapsedHeight","56px"),e.R7$(7),e.Dyx(o.roles)}}let Ce=(()=>{class t{constructor(){this.merchants=[],this.roles=[],this.windowMode="new",this._activatedRoute=(0,e.WQX)(v.nX),this._changeDetectorRef=(0,e.WQX)(e.gRc),this._formBuilder=(0,e.WQX)(s.ok),this._fuseConfirmationService=(0,e.WQX)(E.G),this._router=(0,e.WQX)(v.Ix),this._snackBar=(0,e.WQX)(w.UG),this._unsubscribeAll=new y.B,this._usersService=(0,e.WQX)(g.g),this.store=(0,e.WQX)(U.il)}ngOnInit(){this.store.select(P.SW).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(o=>{this.authUser=o,this._changeDetectorRef.markForCheck()}),this.store.select(M.mB).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(o=>{this.selectedUser=o,this._changeDetectorRef.markForCheck()}),this.userForm=this._formBuilder.group({id:[null],name:["",[s.k0.required,s.k0.maxLength(255),h.t.onlyAlphabetsWithAccentPattern()]],lastname1:["",[s.k0.required,s.k0.maxLength(255),h.t.onlyAlphabetsWithAccentPattern()]],lastname2:["",[s.k0.maxLength(255),h.t.onlyAlphabetsWithAccentPattern()]],email:["",[s.k0.email,s.k0.required]],phone:[""],pwd:["",[s.k0.minLength(8),s.k0.maxLength(100),h.t.strongPasWordPattern()]],pwd2:[""],roleId:[null,[s.k0.required]]},{validators:h.t.mustMatch("pwd","pwd2")}),this._activatedRoute.params.pipe((0,c.Q)(this._unsubscribeAll)).subscribe(({userId:o})=>{this.windowMode="new"===o?"new":"edit",this._fillUserData(),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createUser(){const o=this.userForm.getRawValue();delete o.id,delete o.pwd2,console.log({user:o}),this._fuseConfirmationService.open({title:"Crear usuario",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,c.Q)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._usersService.createUser(o).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(({data:l})=>{l&&(this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Usuario creado correctamente",title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/users"))})}),this._changeDetectorRef.markForCheck()}updateUser(){const o=this.userForm.getRawValue();delete o.pwd,delete o.pwd2,this._fuseConfirmationService.open({title:"Actualizar datos del usuario",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._usersService.updateUser(o).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(({data:l})=>{l&&(this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Usuario actualizado correctamente",title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/users"))})}),this._changeDetectorRef.markForCheck()}trackByFn(o,n){return n.id||o}markRole(o,n){for(const i of this.roles)i.id===o&&n?(i.checked=!0,this.userForm.get("roleId").setValue(i.id)):i.checked=!1;this.roles.some(i=>i.checked)||this.userForm.get("roleId").setValue(null),this._changeDetectorRef.markForCheck()}_fillUserData(){"edit"===this.windowMode&&(this.userForm.patchValue(this.selectedUser),this.userForm.get("pwd").removeValidators([s.k0.required]),this.userForm.get("pwd2").removeValidators([s.k0.required])),"new"===this.windowMode&&(this.userForm.get("pwd").setValidators([s.k0.required]),this.userForm.get("pwd2").setValidators([s.k0.required]),this.store.select(T.y3).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(o=>{this.roles=structuredClone(o.filter(n=>!n.isCoreRole)),this._changeDetectorRef.markForCheck()}))}static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["ath-user-detail"]],standalone:!0,features:[e.aNF],decls:77,vars:48,consts:[["passwordField1",""],["passwordField2",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-mine-50","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","text-primary-700",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-700"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-3xl","font-extrabold","leading-tight","tracking-tight","sm:text-3xl"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],["mat-raised-button","","mat-button","",1,"ml-4","text-white","bg-primary-500","hover:shadow-lg",3,"ngClass","disabled"],["mat-raised-button","","mat-button","",1,"ml-4","text-white","bg-primary-500","hover:shadow-lg",3,"disabled","ngClass"],[1,"flex-auto","p-4","shadow","sm:p-6","bg-mine-200","rounded-t-2xl"],[1,"flex","flex-col","flex-auto","min-w-0"],[3,"formGroup","autocomplete"],["multi","",1,"w-full","bg-transparent"],[2,"border-top-left-radius","0.5rem !important","border-top-right-radius","0.5rem !important",3,"expanded"],[3,"collapsedHeight"],[1,"flex","items-center"],[1,"text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"grid","w-full","px-4","py-8","border-t-2","gap-y-3","gap-x-6","sm:grid-cols-4"],[1,"sm:col-span-2"],[1,"w-full","fuse-mat-dense"],["matInput","","required","",3,"type","formControlName","placeholder","minlength","maxlength"],["matInput","","required","",3,"type","formControlName","maxlength"],["matInput","",3,"type","formControlName","maxlength"],["matInput","","required","",3,"type","formControlName","placeholder"],["matInput","",3,"type","formControlName","placeholder"],[2,"border-bottom-left-radius","0.5rem !important","border-bottom-right-radius","0.5rem !important",3,"expanded"],[2,"border-bottom-left-radius","0.5rem !important","border-bottom-right-radius","0.5rem !important"],["mat-raised-button","","mat-button","",1,"ml-4","text-white","bg-primary-500","hover:shadow-lg",3,"click","ngClass","disabled"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],["mat-raised-button","","mat-button","",1,"ml-4","text-white","bg-primary-500","hover:shadow-lg",3,"click","disabled","ngClass"],[1,"grid","w-full","pt-8","pb-8","pl-4","pr-4","border-t-2","gap-y-3","gap-x-6","sm:grid-cols-2","md:grid-cols-4"],["type","password","placeholder","Contrase\xf1a","matInput","","required","",3,"formControlName","minlength","maxlength"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["type","password","placeholder","Repita la contrase\xf1a","matInput","","required","",3,"formControlName"],[1,"pb-5"],[1,"flex","flex-col","w-full","px-4","pt-8","pb-8","border-t-2"],[1,"flex","flex-col"],[1,"flex","flex-wrap","w-full","gap-4","sm:grid","sm:grid-cols-3","md:grid-cols-4"],[1,"relative","w-full","p-3","overflow-hidden","border","border-dashed","rounded-sm","cursor-pointer","sm:w-auto","border-primary-700","max-h-30"],[1,"absolute","top-2.5","left-3",3,"change","color","checked"],[1,"font-medium","truncate"],[1,"h-full","mt-8"],[1,"h-full","mt-8",3,"click"],[1,"whitespace-pre-line","text-md","text-hint","line-clamp-3"]],template:function(n,i){1&n&&(e.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"div")(4,"div",5)(5,"div",6)(6,"a",7),e.EFF(7,"Inicio"),e.k0s()(),e.j41(8,"div",6),e.nrm(9,"mat-icon",8),e.j41(10,"a",7),e.EFF(11,"Usuarios"),e.k0s()(),e.j41(12,"div",6),e.nrm(13,"mat-icon",8),e.DNE(14,Q,2,0,"a",9)(15,W,2,1,"a",9),e.k0s()(),e.j41(16,"div",10)(17,"a",11),e.nrm(18,"mat-icon",8),e.j41(19,"span",12),e.EFF(20,"Regresar"),e.k0s()()()(),e.j41(21,"div",13)(22,"div",14),e.DNE(23,O,1,0)(24,J,1,1),e.k0s()()(),e.j41(25,"div",15),e.DNE(26,H,4,5,"button",16)(27,Z,4,5,"button",17),e.k0s()(),e.j41(28,"div",18)(29,"div",19)(30,"form",20)(31,"mat-accordion",21)(32,"mat-expansion-panel",22)(33,"mat-expansion-panel-header",23)(34,"mat-panel-title",24)(35,"div",25),e.EFF(36," Informaci\xf3n General "),e.k0s()()(),e.j41(37,"div",26)(38,"div",27)(39,"mat-form-field",28)(40,"mat-label"),e.EFF(41,"Nombre"),e.k0s(),e.nrm(42,"input",29),e.DNE(43,q,2,0,"mat-error")(44,K,2,0,"mat-error")(45,ee,2,0,"mat-error"),e.k0s()(),e.j41(46,"div",27)(47,"mat-form-field",28)(48,"mat-label"),e.EFF(49,"Primer apellidos"),e.k0s(),e.nrm(50,"input",30),e.DNE(51,te,2,0,"mat-error")(52,oe,2,0,"mat-error")(53,ie,2,0,"mat-error"),e.k0s()(),e.j41(54,"div",27)(55,"mat-form-field",28)(56,"mat-label"),e.EFF(57,"Segundo apellidos"),e.k0s(),e.nrm(58,"input",31),e.DNE(59,ne,2,0,"mat-error")(60,re,2,0,"mat-error"),e.k0s()(),e.nrm(61,"div"),e.j41(62,"div",27)(63,"mat-form-field",28)(64,"mat-label"),e.EFF(65,"Correo electr\xf3nico"),e.k0s(),e.nrm(66,"input",32),e.DNE(67,se,2,0,"mat-error")(68,ae,2,0,"mat-error"),e.k0s()(),e.j41(69,"div",27)(70,"mat-form-field",28)(71,"mat-label"),e.EFF(72,"Tel\xe9fono"),e.k0s(),e.nrm(73,"input",33),e.DNE(74,le,2,0,"mat-error"),e.k0s()()()(),e.DNE(75,ge,28,14,"mat-expansion-panel",34)(76,be,10,1,"mat-expansion-panel",35),e.k0s()()()()()),2&n&&(e.R7$(6),e.Y8G("routerLink","/dashboard"),e.R7$(3),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(),e.Y8G("routerLink","/modules/users"),e.R7$(3),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(),e.vxM(14,"new"===i.windowMode?14:-1),e.R7$(),e.vxM(15,"new"!==i.windowMode?15:-1),e.R7$(2),e.Y8G("routerLink","./.."),e.R7$(),e.Y8G("svgIcon","mat_solid:chevron_left"),e.R7$(5),e.vxM(23,"new"===i.windowMode?23:-1),e.R7$(),e.vxM(24,"new"!==i.windowMode?24:-1),e.R7$(2),e.vxM(26,"new"===i.windowMode?26:-1),e.R7$(),e.vxM(27,"new"!==i.windowMode?27:-1),e.R7$(3),e.Y8G("formGroup",i.userForm)("autocomplete","off"),e.R7$(2),e.xc7("border-bottom-left-radius","new"!==i.windowMode?"0.5rem !important":""),e.Y8G("expanded",!0),e.R7$(),e.Y8G("collapsedHeight","56px"),e.R7$(9),e.Y8G("type","text")("formControlName","name")("placeholder","Nombre")("minlength",3)("maxlength",255),e.R7$(),e.vxM(43,i.userForm.get("name").hasError("required")?43:-1),e.R7$(),e.vxM(44,i.userForm.get("name").hasError("maxlength")?44:-1),e.R7$(),e.vxM(45,i.userForm.get("name").hasError("pattern")?45:-1),e.R7$(5),e.Y8G("type","text")("formControlName","lastname1")("maxlength",255),e.R7$(),e.vxM(51,i.userForm.get("lastname1").hasError("required")?51:-1),e.R7$(),e.vxM(52,i.userForm.get("lastname1").hasError("maxlength")?52:-1),e.R7$(),e.vxM(53,i.userForm.get("lastname1").hasError("pattern")?53:-1),e.R7$(5),e.Y8G("type","text")("formControlName","lastname2")("maxlength",255),e.R7$(),e.vxM(59,i.userForm.get("lastname2").hasError("maxlength")?59:-1),e.R7$(),e.vxM(60,i.userForm.get("lastname2").hasError("pattern")?60:-1),e.R7$(6),e.Y8G("type","email")("formControlName","email")("placeholder","Correo electr\xf3nico"),e.R7$(),e.vxM(67,i.userForm.get("email").hasError("required")?67:-1),e.R7$(),e.vxM(68,i.userForm.get("email").hasError("email")?68:-1),e.R7$(5),e.Y8G("type","phone")("formControlName","phone")("placeholder","+53........"),e.R7$(),e.vxM(74,i.userForm.get("phone").hasError("pattern")?74:-1),e.R7$(),e.vxM(75,"edit"!==i.windowMode?75:-1),e.R7$(),e.vxM(76,"edit"!==i.windowMode?76:-1))},dependencies:[B.uv,s.YN,s.qT,s.me,s.BC,s.cb,s.YS,s.xh,s.tU,d.Hl,d.$z,d.iY,b.g7,b.So,_.MY,_.BS,_.GK,_.Z2,_.WN,m.RG,m.rl,m.nJ,m.TL,m.yw,p.m_,p.An,u.fS,u.fg,V.Sy,L.Ve,k.mV,R.YU,I.Ov,s.X1,s.j4,s.JD,v.Wk],encapsulation:2,data:{animation:j.X},changeDetection:0})}return t})();var Fe=a(10467),D=a(75351),$=a(96695),C=a(2042),N=a(9183),F=a(14823),Y=a(25558),ke=a(57786),we=a(70152),Re=a(96354),ye=a(47413);const X=t=>({"cursor-not-allowed":t});function Ue(t,r){1&t&&e.nrm(0,"mat-icon",22),2&t&&e.Y8G("svgIcon","mat_solid:visibility")}function je(t,r){1&t&&e.nrm(0,"mat-icon",22),2&t&&e.Y8G("svgIcon","mat_solid:visibility_off")}function Ee(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," La contrase\xf1a es obligatoria "),e.k0s())}function De(t,r){1&t&&e.nrm(0,"mat-icon",22),2&t&&e.Y8G("svgIcon","mat_solid:visibility")}function $e(t,r){1&t&&e.nrm(0,"mat-icon",22),2&t&&e.Y8G("svgIcon","mat_solid:visibility_off")}function Ge(t,r){1&t&&(e.j41(0,"mat-error"),e.EFF(1," La contrase\xf1a es obligatoria "),e.k0s())}function Ie(t,r){if(1&t&&(e.j41(0,"mat-error"),e.EFF(1),e.k0s()),2&t){const o=e.XpG(2);e.R7$(),e.SpI(" ",o.userPasswordForm.get("pwd2").getError("mustMatch")," ")}}function Te(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",11)(1,"div",15)(2,"div",16)(3,"form",17)(4,"div",18)(5,"mat-form-field",19)(6,"mat-label"),e.EFF(7,"Contrase\xf1a"),e.k0s(),e.nrm(8,"input",20,0),e.j41(10,"button",21),e.bIt("click",function(){e.eBV(o);const i=e.sdS(9);return e.Njj(i.type="password"===i.type?"text":"password")}),e.DNE(11,Ue,1,1,"mat-icon",22)(12,je,1,1,"mat-icon",22),e.k0s(),e.DNE(13,Ee,2,0,"mat-error"),e.k0s(),e.j41(14,"mat-form-field",19)(15,"mat-label"),e.EFF(16,"Confirmar contrase\xf1a "),e.k0s(),e.nrm(17,"input",23,1),e.j41(19,"button",21),e.bIt("click",function(){e.eBV(o);const i=e.sdS(18);return e.Njj(i.type="password"===i.type?"text":"password")}),e.DNE(20,De,1,1,"mat-icon",22)(21,$e,1,1,"mat-icon",22),e.k0s(),e.DNE(22,Ge,2,0,"mat-error")(23,Ie,2,1,"mat-error"),e.k0s()()()()()()}if(2&t){const o=e.sdS(9),n=e.sdS(18),i=e.XpG();e.R7$(3),e.Y8G("formGroup",i.userPasswordForm)("autocomplete","off"),e.R7$(5),e.Y8G("formControlName","pwd")("minlength",8)("maxlength",100),e.R7$(3),e.vxM(11,"password"===o.type?11:-1),e.R7$(),e.vxM(12,"text"===o.type?12:-1),e.R7$(),e.vxM(13,i.userPasswordForm.get("pwd").hasError("required")?13:-1),e.R7$(4),e.Y8G("formControlName","pwd2"),e.R7$(3),e.vxM(20,"password"===n.type?20:-1),e.R7$(),e.vxM(21,"text"===n.type?21:-1),e.R7$(),e.vxM(22,i.userPasswordForm.get("pwd2").hasError("required")?22:-1),e.R7$(),e.vxM(23,i.userPasswordForm.get("pwd2").hasError("mustMatch")?23:-1)}}function Me(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",31),e.bIt("click",function(){e.eBV(o);const i=e.XpG(2).$implicit,l=e.XpG(2);return e.Njj(l.markRole(i.id,!i.checked))}),e.j41(1,"div",32),e.EFF(2),e.k0s()()}if(2&t){const o=e.XpG(2).$implicit;e.R7$(2),e.SpI(" ",o.description," ")}}function Se(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",27)(1,"mat-checkbox",28),e.bIt("change",function(i){e.eBV(o);const l=e.XpG().$implicit,x=e.XpG(2);return e.Njj(x.markRole(l.id,i.checked))}),e.j41(2,"span",29),e.EFF(3),e.k0s()(),e.DNE(4,Me,3,1,"div",30),e.k0s()}if(2&t){const o=e.XpG().$implicit;e.R7$(),e.Y8G("color","primary")("color","primary")("checked",o.checked),e.R7$(2),e.SpI(" ",o.name," "),e.R7$(),e.vxM(4,o.description?4:-1)}}function Ne(t,r){1&t&&e.DNE(0,Se,5,5,"div",27),2&t&&e.vxM(0,r.$implicit.isCoreRole?-1:0)}function Ye(t,r){if(1&t&&(e.j41(0,"div",11)(1,"div",15)(2,"div",24)(3,"div",25)(4,"div",26),e.Z7z(5,Ne,1,1,null,null,e.fX1),e.k0s()()()()()),2&t){const o=e.XpG();e.R7$(5),e.Dyx(o.roles)}}function Xe(t,r){if(1&t){const o=e.RV6();e.j41(0,"button",33),e.bIt("click",function(){e.eBV(o);const i=e.XpG();return e.Njj(i.updateUser())}),e.EFF(1," Actualizar Rol "),e.k0s()}if(2&t){const o=e.XpG();e.Y8G("disabled",!o.selectedRoleId)("matTooltip","Actualizar")("ngClass",e.eq3(3,X,!o.selectedRoleId))}}function Ae(t,r){if(1&t){const o=e.RV6();e.j41(0,"button",33),e.bIt("click",function(){e.eBV(o);const i=e.XpG();return e.Njj(i.updateUserPassword())}),e.EFF(1," Actualizar Contrase\xf1a "),e.k0s()}if(2&t){const o=e.XpG();e.Y8G("disabled",o.userPasswordForm.invalid)("matTooltip","Actualizar")("ngClass",e.eq3(3,X,o.userPasswordForm.invalid))}}let Be=(()=>{class t{constructor(o){this.data=o,this.dialogRef=(0,e.WQX)(D.CP),this.dialogMode="edit",this.roles=[],this.selectedRoleId="",this._changeDetectorRef=(0,e.WQX)(e.gRc),this._formBuilder=(0,e.WQX)(s.ze),this._fuseConfirmationService=(0,e.WQX)(E.G),this._snackBar=(0,e.WQX)(w.UG),this._unsubscribeAll=new y.B,this._usersService=(0,e.WQX)(g.g),this.store=(0,e.WQX)(U.il),this.dialogMode=o.dialogMode,this.selectedUser=o.user}ngOnInit(){"editPass"===this.dialogMode&&(this.userPasswordForm=this._formBuilder.group({id:[this.selectedUser.id,[s.k0.required]],pwd:[null,[s.k0.required,s.k0.minLength(8),s.k0.maxLength(100)]],pwd2:[null,[s.k0.required]]},{validators:h.t.mustMatch("pwd","pwd2")})),"edit"===this.dialogMode&&this.store.select(T.y3).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(o=>{const n=structuredClone(o);n.forEach(i=>{i.checked=this.selectedUser.roleId===i.id,i.checked&&(this.selectedRoleId=i.id)}),this.roles=n,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this.dialogRef.close()}updateUser(){this._fuseConfirmationService.open({title:"Actualizar roles de usuario",message:"\xbfEsta seguro que todos los datos son correctos?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this._usersService.updateUser({id:this.selectedUser.id,roleId:this.selectedRoleId,email:this.selectedUser.email,name:this.selectedUser.name,lastname1:this.selectedUser.lastname1,lastname2:this.selectedUser.lastname2}).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(({})=>{this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Rol actualizado correctamente",title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}}),this.closeDialog()})})}updateUserPassword(){const o=this.userPasswordForm.getRawValue();delete o.pwd2,this._fuseConfirmationService.open({title:"Actualizar contrase\xf1a",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._usersService.updateUserPwd({id:o.id,newPwd:o.pwd}).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(({data:l})=>{l&&(this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:l.updateUserPwd,title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}}),this.closeDialog())})})}markRole(o,n){for(const i of this.roles)i.id===o&&n?(i.checked=!0,this.selectedRoleId=i.id):i.checked=!1;this.roles.some(i=>i.checked)||(this.selectedRoleId=null),this._changeDetectorRef.markForCheck()}static#e=this.\u0275fac=function(n){return new(n||t)(e.rXU(D.Vh))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["user-role-dialog"]],standalone:!0,features:[e.aNF],decls:18,vars:9,consts:[["passwordUpdateField1",""],["passwordUpdateField2",""],[1,"relative","flex","flex-col","w-full","max-h-screen"],[1,"flex","flex-col","items-center","flex-auto","w-full"],[1,"w-full","px-12","py-5"],[1,"flex","w-full"],[1,"flex","flex-col","justify-end","w-4/5","my-2"],[1,"text-2xl","font-bold","truncate","sm:text-2xl"],[1,"flex","text-xl","font-normal","text-red-900","truncate","cursor-pointer","hover:underline"],[1,"mr-2.5","text-mine-900",3,"svgIcon"],["target","_blank",1,"text-primary-900","hover:text-primary-700",3,"href"],[1,"flex","flex-col","border-t","gap-y-5"],[1,"flex","items-center","w-full","px-8","py-4","space-x-3","sm:justify-end","sm:px-12","bg-gray-50","dark:bg-transparent"],["mat-stroked-button","",3,"click","matTooltip"],["mat-flat-button","",1,"text-white","bg-primary-500",3,"disabled","matTooltip","ngClass"],[1,"flex","flex-col","w-full","gap-8","md:flex-row"],[1,"flex","flex-col","w-full","space-y-4"],[1,"flex","flex-col",3,"formGroup","autocomplete"],[1,"flex","flex-col","w-full","gap-4","mt-5","mb-2"],[1,"w-full"],["id","pwd","matInput","","type","password","placeholder","Contrase\xf1a","required","",3,"formControlName","minlength","maxlength"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["type","password","matInput","","placeholder","Repita la contrase\xf1a","required","",3,"formControlName"],[1,"flex","flex-col","w-full","pt-6","space-y-4","sm:mt-4","sm:space-y-8"],[1,"flex","flex-col","mb-10"],[1,"flex","flex-wrap","w-full","gap-4","sm:grid","sm:grid-cols-2"],[1,"relative","w-full","p-3","overflow-hidden","border","border-dashed","rounded-sm","cursor-pointer","sm:w-auto","border-primary-700","max-h-30"],[1,"absolute","top-2.5","left-3",3,"change","color","checked"],[1,"font-medium","truncate"],[1,"h-full","mt-8"],[1,"h-full","mt-8",3,"click"],[1,"whitespace-pre-line","text-md","text-hint","line-clamp-3"],["mat-flat-button","",1,"text-white","bg-primary-500",3,"click","disabled","matTooltip","ngClass"]],template:function(n,i){1&n&&(e.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"span",7),e.EFF(6),e.k0s(),e.j41(7,"span",8),e.nrm(8,"mat-icon",9),e.j41(9,"a",10),e.EFF(10),e.k0s()()()(),e.DNE(11,Te,24,13,"div",11)(12,Ye,7,0,"div",11),e.k0s(),e.j41(13,"div",12)(14,"button",13),e.bIt("click",function(){return i.closeDialog()}),e.EFF(15," Cancelar "),e.k0s(),e.DNE(16,Xe,2,5,"button",14)(17,Ae,2,5,"button",14),e.k0s()()()),2&n&&(e.R7$(6),e.SpI(" ",i.selectedUser.fullname," "),e.R7$(2),e.Y8G("svgIcon","mat_solid:email"),e.R7$(),e.Y8G("href","mailto:"+i.selectedUser.email,e.B4B),e.R7$(),e.JRh(i.selectedUser.email),e.R7$(),e.vxM(11,"editPass"===i.dialogMode?11:-1),e.R7$(),e.vxM(12,"edit"===i.dialogMode?12:-1),e.R7$(2),e.Y8G("matTooltip","Cancelar"),e.R7$(2),e.vxM(16,"edit"===i.data.dialogMode?16:-1),e.R7$(),e.vxM(17,"editPass"===i.data.dialogMode?17:-1))},dependencies:[p.m_,p.An,s.YN,s.qT,s.me,s.BC,s.cb,s.YS,s.xh,s.tU,s.X1,s.j4,s.JD,m.RG,m.rl,m.nJ,m.TL,m.yw,u.fS,u.fg,d.Hl,d.$z,d.iY,b.g7,b.So,F.uc,F.oV,R.YU],encapsulation:2,data:{animation:j.X},changeDetection:0})}return t})();const Ve=(t,r)=>r.id,Le=()=>["new"],Pe=t=>[t],ze=t=>({"pointer-events-none":t}),Qe=()=>[10,25,50,100];function We(t,r){if(1&t){const o=e.RV6();e.j41(0,"mat-slide-toggle",39),e.bIt("change",function(i){e.eBV(o);const l=e.XpG(),x=l.$implicit,it=l.$index,nt=e.XpG(2);return e.Njj(nt.updateUserStatus(i,x,it))}),e.k0s()}if(2&t){const o=e.XpG().$implicit;e.Y8G("checked",o.active)("color","primary")}}function Oe(t,r){1&t&&e.nrm(0,"mat-spinner",40),2&t&&e.Y8G("diameter",20)("color","primary")}function Je(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",28)(1,"div",29),e.EFF(2),e.k0s(),e.j41(3,"div",30),e.EFF(4),e.k0s(),e.j41(5,"div",30),e.EFF(6),e.k0s(),e.j41(7,"div",25),e.EFF(8),e.k0s(),e.j41(9,"div",31),e.DNE(10,We,1,2,"mat-slide-toggle",32)(11,Oe,1,2),e.k0s(),e.j41(12,"div",33)(13,"button",34),e.nrm(14,"mat-icon",35),e.k0s(),e.j41(15,"button",36),e.bIt("click",function(){const i=e.eBV(o).$implicit,l=e.XpG(2);return e.Njj(l.openDialog(i,"editPass","720px"))}),e.nrm(16,"mat-icon",35),e.k0s(),e.j41(17,"button",37),e.bIt("click",function(){const i=e.eBV(o).$implicit,l=e.XpG(2);return e.Njj(l.openDialog(i,"edit","720px"))}),e.nrm(18,"mat-icon",35),e.k0s(),e.j41(19,"button",38),e.bIt("click",function(){const i=e.eBV(o).$implicit,l=e.XpG(2);return e.Njj(l.deleteUser(i))}),e.nrm(20,"mat-icon",35),e.k0s()()()}if(2&t){const o=r.$implicit,n=r.$index,i=e.XpG(2);e.R7$(2),e.SpI(" ",o.fullname," "),e.R7$(2),e.SpI(" ",o.email," "),e.R7$(2),e.SpI(" ",o.phone," "),e.R7$(2),e.SpI(" ",o.role.name," "),e.R7$(2),e.vxM(10,i.isLoading&&i.selectedSlide===n?11:10),e.R7$(3),e.Y8G("routerLink",e.eq3(10,Pe,o.id)),e.R7$(),e.Y8G("svgIcon","mat_solid:edit"),e.R7$(2),e.Y8G("svgIcon","mat_solid:password"),e.R7$(2),e.Y8G("svgIcon","mat_solid:admin_panel_settings"),e.R7$(2),e.Y8G("svgIcon","mat_solid:delete")}}function He(t,r){if(1&t&&(e.j41(0,"div",21)(1,"div",23)(2,"div",24),e.EFF(3," Nombre y Apellidos "),e.k0s(),e.j41(4,"div",24)(5,"span"),e.EFF(6,"Correo electr\xf3nico"),e.k0s()(),e.j41(7,"div",25),e.EFF(8," Tel\xe9fono "),e.k0s(),e.j41(9,"div",25),e.EFF(10," Rol "),e.k0s(),e.j41(11,"div",26)(12,"span"),e.EFF(13,"Activo"),e.k0s()(),e.j41(14,"div",27),e.EFF(15," Acciones "),e.k0s()(),e.Z7z(16,Je,21,12,"div",28,Ve),e.k0s()),2&t){const o=e.XpG();e.R7$(2),e.Y8G("mat-sort-header","name"),e.R7$(2),e.Y8G("mat-sort-header","email"),e.R7$(7),e.Y8G("mat-sort-header","active"),e.R7$(5),e.Dyx(o.users)}}function Ze(t,r){if(1&t&&(e.j41(0,"div",41),e.EFF(1),e.k0s()),2&t){const o=e.XpG();e.R7$(),e.SpI(" ",o.searchInputControl.value?"\xa1No se han encontrado usuarios!":"\xa1No se ha creado ning\xfan usuario a\xfan!"," ")}}function qe(t,r){if(1&t&&e.nrm(0,"mat-paginator",22),2&t){const o=e.XpG();e.Y8G("ngClass",e.eq3(6,ze,o.isLoading))("length",o.pagination.length)("pageIndex",o.pagination.page)("pageSize",o.pagination.size)("pageSizeOptions",e.lJ4(8,Qe))("showFirstLastButtons",!0)}}let Ke=(()=>{class t{constructor(){this.isLoading=!1,this.searchInputControl=new s.MJ,this.selectedSlide=null,this.users=[],this._unsubscribeAll=new y.B,this._changeDetectorRef=(0,e.WQX)(e.gRc),this._fuseConfirmationService=(0,e.WQX)(E.G),this._userDialog=(0,e.WQX)(D.bZ),this._usersService=(0,e.WQX)(g.g),this._snackBar=(0,e.WQX)(w.UG),this.store=(0,e.WQX)(U.il)}ngOnInit(){this.store.select(M.VR).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(o=>{this.users=o,this._changeDetectorRef.markForCheck()}),this.store.select(ye.D).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(o=>{this.pagination=o,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,c.Q)(this._unsubscribeAll),(0,we.B)(300),(0,Y.n)(o=>(this.isLoading=!0,this._usersService.getUsers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,o))),(0,Re.T)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this.waitForPaginatorLoad().then(()=>{this._sort&&this._paginator&&(this._sort.sort({id:"name",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,c.Q)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,ke.h)(this._sort.sortChange,this._paginator.page).pipe((0,Y.n)(()=>this._usersService.getUsers(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))).subscribe())})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}updateUserStatus(o,n,i){this.isLoading=!0,this.selectedSlide=i,this._usersService.updateUserStatus({id:n.id,active:o.checked}).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(l=>{l&&(this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:"Estado Actualizado correctamente",title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isLoading=!1,this.selectedSlide=-1,this._changeDetectorRef.markForCheck())})}deleteUser(o){this._fuseConfirmationService.open({title:"Eliminar Usuario",message:`\xbfEst\xe1 seguro que desea eliminar el usuario ${o.fullname}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._usersService.removeUser(o.id).pipe((0,c.Q)(this._unsubscribeAll)).subscribe(({data:l})=>{l&&this._snackBar.openFromComponent(f.p,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:`Usuario ${o.fullname} eliminado correctamente`,title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(o,n){return n.id||o}openDialog(o,n,i){this._userDialog.open(Be,{data:{user:o,dialogMode:n},width:i,panelClass:"ath-dialog-panel"})}waitForPaginatorLoad(){var o=this;return(0,Fe.A)(function*(){for(;!o._paginator||void 0===o._paginator;)yield new Promise(n=>{setTimeout(n,200)});return o._paginator})()}static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["ath-users"]],viewQuery:function(n,i){if(1&n&&(e.GBs($.iy,5),e.GBs(C.B4,5)),2&n){let l;e.mGM(l=e.lsd())&&(i._paginator=l.first),e.mGM(l=e.lsd())&&(i._sort=l.first)}},standalone:!0,features:[e.aNF],decls:33,vars:14,consts:[[1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","overflow-x-auto","overflow-y-auto","bg-card","dark:bg-transparent","lg:overflow-x-hidden"],[1,"relative","flex","flex-col","px-6","py-8","border-b","lg:flex-row","flex-0","lg:items-center","lg:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","text-primary-700",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-700"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2","text-2xl","font-extrabold","leading-tight","tracking-tight"],[1,"flex","flex-wrap","items-center","mt-2","sm:mt-0","shrink-0","sm:ml-4"],[1,"mt-4","mr-4","sm:mt-0","fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"mt-4","text-white","sm:mt-0","bg-gradient-to-r","from-primary-500","to-primary-600","hover:to-primary-900","hover:shadow-lg",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-col","flex-auto"],[1,"flex","flex-col","justify-between","flex-auto"],[1,"grid"],[1,"z-10","border-b","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5","users-table"],[3,"mat-sort-header"],[1,"text-center","truncate"],[1,"flex","items-center","justify-center",3,"mat-sort-header"],[1,"pr-10","mr-6","text-right"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","md:px-8","users-table"],[1,"flex","truncate"],[1,"truncate"],[1,"flex","justify-center","mr-4","text-center"],[3,"checked","color"],[1,"flex","flex-row","justify-end","gap-2"],["mat-stroked-button","","matTooltip","Editar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Cambiar contrase\xf1a",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Asignar Roles",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Eliminar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[3,"change","checked","color"],[3,"diameter","color"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","sm:p-16"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e.EFF(7,"Inicio"),e.k0s()(),e.j41(8,"div",4),e.nrm(9,"mat-icon",6),e.j41(10,"a",7),e.EFF(11,"Usuarios"),e.k0s()()(),e.j41(12,"div",8)(13,"a",9),e.nrm(14,"mat-icon",6),e.j41(15,"span",10),e.EFF(16,"Regresar"),e.k0s()()()(),e.j41(17,"div",11),e.EFF(18," Listado de usuarios "),e.k0s()(),e.j41(19,"div",12)(20,"mat-form-field",13),e.nrm(21,"mat-icon",14)(22,"input",15),e.k0s(),e.j41(23,"button",16),e.nrm(24,"mat-icon",17),e.j41(25,"span",18),e.EFF(26,"Nuevo"),e.k0s()()()(),e.j41(27,"div",19)(28,"div",20),e.DNE(29,He,18,3,"div",21)(30,Ze,2,1),e.qex(31),e.DNE(32,qe,1,9,"mat-paginator",22),e.bVm(),e.k0s()()()),2&n&&(e.R7$(6),e.Y8G("routerLink","/dashboard"),e.R7$(3),e.Y8G("svgIcon","mat_solid:chevron_right"),e.R7$(4),e.Y8G("routerLink","./.."),e.R7$(),e.Y8G("svgIcon","mat_solid:chevron_left"),e.R7$(6),e.Y8G("subscriptSizing","dynamic"),e.R7$(),e.Y8G("svgIcon","mat_solid:search"),e.R7$(),e.Y8G("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.R7$(),e.Y8G("routerLink",e.lJ4(13,Le)),e.R7$(),e.Y8G("svgIcon","mat_solid:add"),e.R7$(5),e.vxM(29,i.users.length>0?29:30),e.R7$(3),e.vxM(32,i.pagination.length>0?32:-1))},dependencies:[s.YN,s.me,s.BC,d.Hl,d.$z,m.RG,m.rl,m.JW,p.m_,p.An,u.fS,u.fg,$.Ou,$.iy,N.D6,N.LG,k.mV,k.sG,C.NQ,C.B4,C.aE,F.uc,F.oV,R.YU,I.Ov,s.X1,s.l_,v.Wk],encapsulation:2,data:{animation:j.X},changeDetection:0})}return t})(),et=(()=>{class t{constructor(o){this._usersService=o}resolve(o,n){return this._usersService.getUsers()}static#e=this.\u0275fac=function(n){return new(n||t)(e.KVO(g.g))};static#t=this.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tt=(()=>{class t{constructor(o){this._usersService=o}resolve(o,n){const i=o.params.userId;if("new"!==i)return this._usersService.getUser(i)}static#e=this.\u0275fac=function(n){return new(n||t)(e.KVO(g.g))};static#t=this.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var A=a(72831);const ot=[{path:"",component:Ke,resolve:{users:et,roles:A.ed}},{path:":userId",component:Ce,resolve:{user:tt,roles:A.ed}}]}}]);