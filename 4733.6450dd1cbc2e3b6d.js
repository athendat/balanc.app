"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[4733],{86428:(G,M,a)=>{a.d(M,{B:()=>e});const e=(0,a(85094).P1)(B=>B.pagination,B=>B.pagination)},64733:(G,M,a)=>{a.r(M),a.d(M,{BoxModule:()=>Qe});var g=a(35357),J=a(17460),e=a(5e3),B=a(35265);let K=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["box"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"ath-content-menu")},dependencies:[B.p],encapsulation:2}),o})();var I=a(77579),u=a(82722),N=a(17489),x=a(85094);const S=o=>o.box,W=(0,x.P1)(S,o=>o.box),V=(0,x.P1)(S,o=>o.boxes),X=(0,x.P1)(S,o=>o.boxMovements);var l=a(93075),b=a(48966),f=a(62666),C=a(18505),Z=a(59784),j=a(38253),D=a(44066),E=a(75714),ee=a(33921),w=a(57261);let h=(()=>{class o{constructor(t,n,i){this.apolloProvider=t,this._snackBar=n,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}changeBoxStatus(t){return this._apollo.mutate({mutation:j.Km,variables:{changeBoxStatusInput:t},errorPolicy:"all"}).pipe((0,C.b)(({errors:n,data:i})=>{if(n){let r="";n.forEach(m=>r+=`\n ${m.message}.`),this._snackBar.openFromComponent(Z.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,f.uP)({box:i.changeBoxStatus}))}))}getLastBox(){return this._apollo.query({query:D.Ym,errorPolicy:"all"}).pipe((0,C.b)(({errors:t,data:n})=>{if(t){let i="";t.forEach(r=>i+=`\n ${r.message}.`),this._snackBar.openFromComponent(Z.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,f.uP)({box:n.box}))}))}createBoxMovement(t){return this._apollo.mutate({mutation:j.a1,variables:{createBoxMovementInput:t},errorPolicy:"all"}).pipe((0,C.b)(({errors:n,data:i})=>{if(n){let r="";n.forEach(m=>r+=`\n ${m.message}.`),this._snackBar.openFromComponent(Z.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,f.uP)({box:i.box}))}))}getBoxes(t=1,n=5,i="no",r="desc",m=""){return this._apollo.query({query:D.I,errorPolicy:"all",variables:{offset:n*(t-1),limit:n,sort:i,order:r,search:m}}).pipe((0,C.b)(({errors:p,data:v})=>{if(p){let _="";p.forEach(R=>_+=`\n ${R.message}.`),this._snackBar.openFromComponent(Z.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:_,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,f.KX)({boxes:v.findAllBoxes.boxes})),this.store.dispatch((0,E.Jr)({pagination:v.findAllBoxes.pagination}))}))}getBoxMovements(t=1,n=5,i="no",r="desc",m=""){return this._apollo.query({query:D.W1,errorPolicy:"all",variables:{offset:n*(t-1),limit:n,sort:i,order:r,search:m}}).pipe((0,C.b)(({errors:p,data:v})=>{if(p){let _="";p.forEach(R=>_+=`\n ${R.message}.`),this._snackBar.openFromComponent(Z.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:_,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,f.mn)({boxMovements:v.findAllBoxMovements.boxMovements})),this.store.dispatch((0,E.Jr)({pagination:v.findAllBoxMovements.pagination}))}))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(ee._M),e.LFG(w.ux),e.LFG(x.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var k=a(71683),c=a(69808),L=a(47423),te=a(74533),A=a(67322),Y=a(98833);function oe(o,s){1&o&&(e.TgZ(0,"h2",11),e._uU(1," Editar monto inicial de caja "),e.qZA())}function ne(o,s){1&o&&(e.TgZ(0,"h2",11),e._uU(1," Devoluci\xf3n de efectivo de caja "),e.qZA())}function ie(o,s){1&o&&(e.TgZ(0,"h2",11),e._uU(1," Pr\xe9stamo de efectivo de caja "),e.qZA())}function se(o,s){1&o&&(e.TgZ(0,"h2",11),e._uU(1," Gasto de efectivo de caja "),e.qZA())}function ae(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-form-field",5)(2,"mat-label"),e._uU(3,"Motivo"),e.qZA(),e._UZ(4,"textarea",12),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("formControlName","reason")("required","initial"!==t.boxMovementType)}}let re=(()=>{class o{constructor(t,n,i,r,m,p){this.data=t,this._boxService=n,this._changeDetectorRef=i,this._dialogRef=r,this._formBuilder=m,this._fuseConfirmationService=p,this._unsubscribeAll=new I.x,this.dialogMode=t.dialogMode,this.boxMovementType=this.data.boxMovementType}ngOnInit(){this.boxMovementForm=this._formBuilder.group({id:new l.NI,amount:new l.NI(null,[l.kI.required,l.kI.min(0),l.kI.maxLength(9)]),reason:new l.NI(null,[l.kI.maxLength(250)])})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createBoxMovement(){let t=this.boxMovementForm.getRawValue();t=(0,N.omit)(t,["id"]),t.movementType=this.boxMovementType,this._fuseConfirmationService.open({title:"Crear movimiento",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,u.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._boxService.createBoxMovement(t).pipe((0,u.R)(this._unsubscribeAll)).subscribe(()=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:"Movimiento creado correctamente",icon:{show:!0,name:"mat_solid:done",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck(),this.closeDialog()})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b.WI),e.Y36(h),e.Y36(e.sBO),e.Y36(b.so),e.Y36(l.qu),e.Y36(k.R))},o.\u0275cmp=e.Xpm({type:o,selectors:[["box-admin-dialog"]],decls:18,vars:12,consts:[[1,"flex","flex-col","items-start","border-b"],["class","text-xl font-semibold","mat-dialog-title","",4,"ngIf"],["mat-dialog-content","",1,"flex","flex-col","items-center","flex-auto","w-full","border-b"],[1,"flex","flex-col","w-full",3,"formGroup","autocomplete"],[1,"flex","flex-col","flex-auto","gap-4"],[1,"w-full"],["matInput","","type","number",3,"formControlName","required"],[4,"ngIf"],["mat-dialog-actions","",1,"flex","items-center","justify-between","w-full"],["mat-button","",3,"color","click"],["mat-button","",3,"disabled","color","click"],["mat-dialog-title","",1,"text-xl","font-semibold"],["matInput","","cdkTextareaAutosize","","maxlength","250","rows","4",3,"formControlName","required"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,oe,2,0,"h2",1),e.YNc(2,ne,2,0,"h2",1),e.YNc(3,ie,2,0,"h2",1),e.YNc(4,se,2,0,"h2",1),e.qZA(),e.TgZ(5,"div",2)(6,"form",3)(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),e._uU(10,"Monto"),e.qZA(),e._UZ(11,"input",6),e.qZA(),e.YNc(12,ae,5,2,"ng-container",7),e.qZA()()(),e.TgZ(13,"div",8)(14,"button",9),e.NdJ("click",function(){return n.closeDialog()}),e._uU(15,"Cancelar"),e.qZA(),e.TgZ(16,"button",10),e.NdJ("click",function(){return n.createBoxMovement()}),e._uU(17," Guardar "),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngIf","initial"===n.boxMovementType),e.xp6(1),e.Q6J("ngIf","return"===n.boxMovementType),e.xp6(1),e.Q6J("ngIf","loan"===n.boxMovementType),e.xp6(1),e.Q6J("ngIf","spent"===n.boxMovementType),e.xp6(2),e.Q6J("formGroup",n.boxMovementForm)("autocomplete","off"),e.xp6(5),e.Q6J("formControlName","amount")("required",!0),e.xp6(1),e.Q6J("ngIf","initial"!==n.boxMovementType),e.xp6(2),e.Q6J("color","warn"),e.xp6(2),e.Q6J("disabled",n.boxMovementForm.invalid)("color","primary"))},dependencies:[c.O5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.Q7,l.nD,l.sg,l.u,L.lW,b.uh,b.xY,b.H8,te.IC,A.KE,A.hX,Y.Nt],encapsulation:2}),o})();var U=(()=>{return(o=U||(U={})).abierta="abierta",o.cerrada="cerrada",U;var o})(),d=(()=>{return(o=d||(d={})).initial="initial",o.income="income",o.return="return",o.loan="loan",o.spent="spent",d;var o})(),le=a(29071),O=a(25245),y=a(92181);function ce(o,s){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",39),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changeBoxStatus("open"))}),e._UZ(2,"mat-icon",17),e._uU(3," Abrir caja "),e.qZA(),e.BQk()}2&o&&(e.xp6(2),e.Q6J("svgIcon","mat_solid:key"))}function me(o,s){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",39),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.openBoxAdminDialog("initial"))}),e._UZ(2,"mat-icon",17),e._uU(3," Editar monto inicial "),e.qZA(),e.TgZ(4,"button",39),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changeBoxStatus("close"))}),e._UZ(5,"mat-icon",17),e._uU(6," Cerrar caja "),e.qZA(),e.BQk()}2&o&&(e.xp6(2),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(3),e.Q6J("svgIcon","mat_solid:lock"))}function de(o,s){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",40)(2,"span",16),e._uU(3,"Movimientos de caja"),e.qZA(),e._UZ(4,"mat-icon",17),e.qZA(),e.TgZ(5,"mat-menu",null,41)(7,"button",39),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.openBoxAdminDialog("return"))}),e._UZ(8,"mat-icon",17),e._uU(9," Devoluci\xf3n "),e.qZA(),e.TgZ(10,"button",39),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.openBoxAdminDialog("loan"))}),e._UZ(11,"mat-icon",17),e._uU(12," Pr\xe9stamo "),e.qZA(),e.TgZ(13,"button",39),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.openBoxAdminDialog("spent"))}),e._UZ(14,"mat-icon",17),e._uU(15," Gasto "),e.qZA()(),e.BQk()}if(2&o){const t=e.MAs(6);e.xp6(1),e.Q6J("matMenuTriggerFor",t),e.xp6(3),e.Q6J("svgIcon","mat_solid:expand_more"),e.xp6(4),e.Q6J("svgIcon","mat_solid:settings_backup_restore"),e.xp6(3),e.Q6J("svgIcon","mat_solid:real_estate_agent"),e.xp6(3),e.Q6J("svgIcon","mat_solid:paid")}}function ue(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"div",47)(2,"div",48),e._UZ(3,"div",49),e.TgZ(4,"div",50),e._uU(5),e.qZA()(),e.TgZ(6,"div",51),e._uU(7),e.ALo(8,"percent"),e.qZA()(),e.BQk()),2&o){const t=s.$implicit,n=s.index,i=e.oxw(2);e.xp6(3),e.Udp("background-color",i.boxMovementDistribution.colors[n]),e.xp6(2),e.Oqu(i.data.labels[n]),e.xp6(2),e.hij(" ",e.xi3(8,4,t/i.data.total,"1.2-2")," ")}}function pe(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"div",42)(2,"div",43),e._UZ(3,"apx-chart",44),e.qZA(),e.TgZ(4,"div",45),e.YNc(5,ue,9,7,"ng-container",46),e.qZA()(),e.BQk()),2&o){const t=e.oxw();e.xp6(3),e.Q6J("chart",t.boxMovementDistribution.chart)("colors",t.boxMovementDistribution.colors)("labels",t.boxMovementDistribution.labels)("plotOptions",t.boxMovementDistribution.plotOptions)("series",t.boxMovementDistribution.series)("states",t.boxMovementDistribution.states)("tooltip",t.boxMovementDistribution.tooltip),e.xp6(2),e.Q6J("ngForOf",t.data.series)}}let ge=(()=>{class o{constructor(t,n,i,r,m,p,v){this._boxService=t,this._changeDetectorRef=n,this._dialog=i,this._fuseConfirmationService=r,this._snackBar=m,this._router=p,this.store=v,this.balance=0,this.box=null,this.data={total:0,series:[0,0,0,0,0],labels:["Monto Inicial","Ingresos","Devoluciones","Prestamos","Gastos"],colors:["#64748B","#22C55E","#EF4444","#EAB308","#06B6D4"]},this._unsubscribeAll=new I.x}ngOnInit(){window.Apex={chart:{events:{mounted:(t,n)=>{this._fixSvgFill(t.el)},updated:(t,n)=>{this._fixSvgFill(t.el)}}}},this.store.select(W).pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this.box=t,this.data.total=t.initial+t.income+t.return+t.loan+t.spent,this.data.series=[t.initial,t.income,t.return,t.loan,t.spent],this.balance=t.initial+t.income-t.return-t.loan-t.spent,this._prepareChartData(),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}changeBoxStatus(t){const n=this._fuseConfirmationService.open({title:("close"===t?"Cerrar":"Abrir")+" caja.",message:`\xbfEst\xe1 seguro que desea ${"close"===t?`cerrar la caja con un saldo de $ ${this.balance.toFixed(2)}`:"Abrir la caja"} ?`,icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}),i=(0,N.clone)(this.box);i.status="close"===t?U.cerrada:U.abierta,delete i.__typename,n.afterClosed().pipe((0,u.R)(this._unsubscribeAll)).subscribe(r=>{"confirmed"===r&&this._boxService.changeBoxStatus(i).pipe((0,u.R)(this._unsubscribeAll)).subscribe(()=>{this._snackBar.openFromComponent(Z.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:`Caja ${"close"===t?"cerrada":"abierta"} correctamente.`,title:"Confirmaci\xf3n",type:"success",appearance:"fill",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}openBoxAdminDialog(t){this._dialog.open(re,{data:{boxMovementType:t},maxWidth:"400px"})}trackByFn(t,n){return n.id||t}_fixSvgFill(t){const n=this._router.url;Array.from(t.querySelectorAll("*[fill]")).filter(i=>-1!==i.getAttribute("fill").indexOf("url(")).forEach(i=>{const r=i.getAttribute("fill");i.setAttribute("fill",`url(${n}${r.slice(r.indexOf("#"))}`)})}_prepareChartData(){this.boxMovementDistribution={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:this.data.colors,labels:this.data.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"0%"}}},series:this.data.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:t,w:n})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                     <div class="w-3 h-3 rounded-full" style="background-color: ${n.config.colors[t]};"></div>\n                                                     <div class="ml-2 text-md leading-none">${n.config.labels[t]}:</div>\n                                                     <div class="ml-2 text-md font-bold leading-none">${(n.config.series[t]/this.data.total*100).toFixed(2)}%</div>\n                                                 </div>`}}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h),e.Y36(e.sBO),e.Y36(b.uw),e.Y36(k.R),e.Y36(w.ux),e.Y36(g.F0),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["box-admin"]],decls:101,vars:47,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","flex-col","md:flex-row","gap-2"],[1,"font-mono"],[1,"px-2.5","rounded-full","bg-primary-500"],[1,"flex","flex-col","md:flex-row","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"matMenuTriggerFor"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"svgIcon"],["optionsMenu","matMenu"],[4,"ngIf"],[1,"flex","flex-auto","overflow-hidden"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-2","w-full","p-8"],[1,"flex","flex-col","divide-y","border"],[1,"grid","grid-cols-3","w-full"],[1,"flex","items-center","justify-center"],[1,"h-7","w-7","rounded-full","bg-slate-500","leading-10"],[1,"uppercase","leading-10","font-semibold"],[1,"leading-10","font-mono","text-center"],[1,"h-7","w-7","rounded-full","bg-green-500","leading-10"],[1,"h-7","w-7","rounded-full","bg-red-500","leading-10"],[1,"h-7","w-7","rounded-full","bg-yellow-500","leading-10"],[1,"h-7","w-7","rounded-full","bg-cyan-500","leading-10"],[1,"uppercase","leading-10","font-semibold","w-auto"],[1,"uppercase","leading-10","font-bold","text-green-500","w-auto","py-1","text-xl"],[1,"leading-10","font-mono","font-bold","text-green-500","text-center","py-1","text-xl"],[1,"uppercase","leading-10","font-bold","text-red-500","w-auto","py-1","text-xl"],[1,"leading-10","font-mono","font-bold","text-red-500","text-center","py-1","text-xl"],[1,"uppercase","leading-10","font-bold","dark:text-slate-500","w-auto","py-1","text-xl"],[1,"leading-10","font-mono","font-bold","dark:text-slate-500","text-center","py-1","text-xl"],["mat-menu-item","",3,"click"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"matMenuTriggerFor"],["movementsMenu","matMenu"],[1,"flex","flex-row","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden","p-6"],[1,"flex","flex-col","flex-auto","mt-6","h-44","w-1/2"],[1,"flex","flex-auto","items-center","justify-center","w-full","h-full",3,"chart","colors","labels","plotOptions","series","states","tooltip"],[1,"divide-y","w-1/2"],[4,"ngFor","ngForOf"],[1,"grid","grid-cols-2","py-3"],[1,"flex","items-center"],[1,"flex-0","w-2","h-2","rounded-full"],[1,"ml-3","truncate"],[1,"font-medium","text-right","font-mono"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Caja"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Administraci\xf3n"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Administraci\xf3n de caja "),e.qZA(),e.TgZ(18,"div",10)(19,"span",11),e._uU(20),e.ALo(21,"date"),e.qZA(),e.TgZ(22,"span",12),e._uU(23),e.ALo(24,"titlecase"),e.qZA()()()(),e.TgZ(25,"div",13)(26,"div",14)(27,"button",15)(28,"span",16),e._uU(29,"Opciones"),e.qZA(),e._UZ(30,"mat-icon",17),e.qZA(),e.TgZ(31,"mat-menu",null,18),e.YNc(33,ce,4,1,"ng-container",19),e.YNc(34,me,7,2,"ng-container",19),e.qZA()(),e.YNc(35,de,16,5,"ng-container",19),e.qZA()(),e.TgZ(36,"div",20)(37,"div",21)(38,"div",22)(39,"div",23)(40,"div",24),e._UZ(41,"div",25),e.qZA(),e.TgZ(42,"div",26),e._uU(43,"Monto inicial"),e.qZA(),e.TgZ(44,"div",27),e._uU(45),e.ALo(46,"currency"),e.qZA()(),e.TgZ(47,"div",23)(48,"div",24),e._UZ(49,"div",28),e.qZA(),e.TgZ(50,"div",26),e._uU(51,"Ingresos"),e.qZA(),e.TgZ(52,"div",27),e._uU(53),e.ALo(54,"currency"),e.qZA()(),e.TgZ(55,"div",23)(56,"div",24),e._UZ(57,"div",29),e.qZA(),e.TgZ(58,"div",26),e._uU(59,"Devoluciones"),e.qZA(),e.TgZ(60,"div",27),e._uU(61),e.ALo(62,"currency"),e.qZA()(),e.TgZ(63,"div",23)(64,"div",24),e._UZ(65,"div",30),e.qZA(),e.TgZ(66,"div",26),e._uU(67,"Pr\xe9stamos"),e.qZA(),e.TgZ(68,"div",27),e._uU(69),e.ALo(70,"currency"),e.qZA()(),e.TgZ(71,"div",23)(72,"div",24),e._UZ(73,"div",31),e.qZA(),e.TgZ(74,"div",32),e._uU(75,"Gastos"),e.qZA(),e.TgZ(76,"div",27),e._uU(77),e.ALo(78,"currency"),e.qZA()(),e.TgZ(79,"div",23),e._UZ(80,"div",14),e.TgZ(81,"div",33),e._uU(82,"Ingresos Totales "),e.qZA(),e.TgZ(83,"div",34),e._uU(84),e.ALo(85,"currency"),e.qZA()(),e.TgZ(86,"div",23),e._UZ(87,"div",14),e.TgZ(88,"div",35),e._uU(89,"Egresos Totales"),e.qZA(),e.TgZ(90,"div",36),e._uU(91),e.ALo(92,"currency"),e.qZA()(),e.TgZ(93,"div",23),e._UZ(94,"div",14),e.TgZ(95,"div",37),e._uU(96,"Saldo"),e.qZA(),e.TgZ(97,"div",38),e._uU(98),e.ALo(99,"currency"),e.qZA()()(),e.YNc(100,pe,6,8,"ng-container",19),e.qZA()()()),2&t){const i=e.MAs(32);e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.hij(" Fecha de caja: ",e.xi3(21,18,n.box.open,"dd/MM/YYYY")," "),e.xp6(3),e.hij(" ",e.lcZ(24,21,n.box.status)," "),e.xp6(4),e.Q6J("matMenuTriggerFor",i),e.xp6(3),e.Q6J("svgIcon","mat_solid:expand_more"),e.xp6(3),e.Q6J("ngIf","cerrada"===n.box.status),e.xp6(1),e.Q6J("ngIf","abierta"===n.box.status),e.xp6(1),e.Q6J("ngIf","abierta"===n.box.status),e.xp6(10),e.Oqu(e.xi3(46,23,n.data.series[0],"$ ")),e.xp6(8),e.Oqu(e.xi3(54,26,n.data.series[1],"$ ")),e.xp6(8),e.Oqu(e.xi3(62,29,n.data.series[2],"$ ")),e.xp6(8),e.Oqu(e.xi3(70,32,n.data.series[3],"$ ")),e.xp6(8),e.Oqu(e.xi3(78,35,n.data.series[4],"$ ")),e.xp6(7),e.Oqu(e.xi3(85,38,n.data.series[1],"$ ")),e.xp6(7),e.Oqu(e.xi3(92,41,n.data.series[2]+n.data.series[3]+n.data.series[4],"$ ")),e.xp6(7),e.Oqu(e.xi3(99,44,n.data.series[0]+n.data.series[1]-n.data.series[2]-n.data.series[3]-n.data.series[4],"$ ")),e.xp6(2),e.Q6J("ngIf",n.data.total>0)}},dependencies:[g.yS,c.sg,c.O5,le.PQ,L.lW,O.Hw,y.VK,y.OP,y.p6,c.Zx,c.rS,c.H9,c.uU],encapsulation:2,changeDetection:0}),o})();var q=a(86087),T=a(84847),P=a(39646),$=a(56451),z=a(78372),F=a(63900),Q=a(54004),H=a(86428);const xe=function(o,s){return{"bg-primary-500":o,"bg-red-500":s}};function fe(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"div",26)(2,"div",27),e._uU(3),e.qZA(),e.TgZ(4,"div",28),e._uU(5),e.ALo(6,"date"),e.qZA(),e.TgZ(7,"div",28),e._uU(8),e.ALo(9,"currency"),e.qZA(),e.TgZ(10,"div",28),e._uU(11),e.ALo(12,"date"),e.qZA(),e.TgZ(13,"div",28),e._uU(14),e.ALo(15,"currency"),e.qZA(),e.TgZ(16,"div",23)(17,"span",29),e._uU(18),e.ALo(19,"uppercase"),e.qZA()()(),e.BQk()),2&o){const t=s.$implicit;e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(6,7,t.open,"dd/MM/yyyy")," "),e.xp6(3),e.hij(" ",e.xi3(9,10,t.initial,"$ ")," "),e.xp6(3),e.hij(" ",e.xi3(12,13,t.close,"dd/MM/yyyy")," "),e.xp6(3),e.hij(" ",e.xi3(15,16,t.initial+t.income-t.return-t.loan-t.spent,"$ ")," "),e.xp6(3),e.Q6J("ngClass",e.WLB(21,xe,"abierta"===t.status,"cerrada"===t.status)),e.xp6(1),e.hij(" ",e.lcZ(19,19,t.status)," ")}}function he(o,s){if(1&o&&(e.ynx(0),e.YNc(1,fe,20,24,"ng-container",25),e.BQk()),2&o){const t=s.ngIf,n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",n.trackByFn)}}const ve=function(o){return{"pointer-events-none":o}},_e=function(){return[5,10,25,100]};function be(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"div",20)(2,"div",21)(3,"div",22),e._uU(4," No. "),e.qZA(),e.TgZ(5,"div",23),e._uU(6," Fecha Apertura "),e.qZA(),e.TgZ(7,"div",23),e._uU(8," Monto Apertura "),e.qZA(),e.TgZ(9,"div",23),e._uU(10," Fecha Cierre "),e.qZA(),e.TgZ(11,"div",23),e._uU(12," Monto Cierre "),e.qZA(),e.TgZ(13,"div",23),e._uU(14," Estado "),e.qZA()(),e.YNc(15,he,2,2,"ng-container",17),e.ALo(16,"async"),e.qZA(),e._UZ(17,"mat-paginator",24),e.BQk()),2&o){const t=e.oxw(2);e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(12),e.Q6J("ngIf",e.lcZ(16,8,t.boxes$)),e.xp6(2),e.Q6J("ngClass",e.VKq(10,ve,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(12,_e))("showFirstLastButtons",!0)}}function Ze(o,s){if(1&o&&(e.ynx(0),e.YNc(1,be,18,13,"ng-container",19),e.BQk()),2&o){const t=s.ngIf;e.oxw();const n=e.MAs(28);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",n)}}function Ae(o,s){1&o&&(e.TgZ(0,"div",30),e._uU(1," \xa1No se ha registrado ning\xfan cierre de caja! "),e.qZA())}let ye=(()=>{class o{constructor(t,n,i,r,m){this._boxService=t,this._changeDetectorRef=n,this._fuseConfirmationService=i,this._snackBar=r,this.store=m,this.boxes$=(0,P.of)([]),this.isLoading=!1,this.searchInputControl=new l.NI,this.isSlideLoading=!1,this.selectedSlide=null,this._unsubscribeAll=new I.x}ngOnInit(){this.boxes$=this.store.select(V),this.store.select(H.B).pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,u.R)(this._unsubscribeAll),(0,z.b)(300),(0,F.w)(t=>(this.isLoading=!0,this._boxService.getBoxes(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,Q.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,u.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,$.T)(this._sort.sortChange,this._paginator.page).pipe((0,F.w)(()=>(this.isLoading=!0,this._boxService.getBoxes(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,Q.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,f.Re)())}trackByFn(t,n){return t||n.id}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h),e.Y36(e.sBO),e.Y36(k.R),e.Y36(w.ux),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["box-history"]],viewQuery:function(t,n){if(1&t&&(e.Gf(q.NW,5),e.Gf(T.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(n._paginator=i.first),e.iGM(i=e.CRH())&&(n._sort=i.first)}},decls:29,vars:9,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,""],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noBoxes",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","boxes-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hiddem","sm:block",3,"mat-sort-header"],[1,"hiddem","sm:block","text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","boxes-grid","md:px-8"],[1,"hiddem","sm:blockfont-mono"],[1,"hiddem","sm:block","text-center","font-mono"],[1,"px-2.5","py-1","rounded-full",3,"ngClass"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Caja"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Cierres de Caja"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Cierres de Caja "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e._UZ(22,"div",14),e.qZA()(),e.TgZ(23,"div",15)(24,"div",16),e.YNc(25,Ze,2,2,"ng-container",17),e.ALo(26,"async"),e.YNc(27,Ae,2,0,"ng-template",null,18,e.W1O),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",n.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(4),e.Q6J("ngIf",e.lcZ(26,7,n.boxes$)))},dependencies:[g.yS,c.mk,c.sg,c.O5,l.Fj,l.JJ,l.oH,O.Hw,A.KE,A.qo,Y.Nt,q.NW,T.YE,T.nU,c.Ov,c.gd,c.H9,c.uU],encapsulation:2,changeDetection:0}),o})();class Te{constructor(s=10,t=1){this.size=s,this.page=t}}const Be=function(o){return{"text-red-500":o}};function Ce(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"div",33)(2,"div",34),e._uU(3),e.qZA(),e.TgZ(4,"div",34),e._uU(5),e.ALo(6,"date"),e.qZA(),e.TgZ(7,"div",35),e._uU(8),e.qZA(),e.TgZ(9,"div",34),e._uU(10),e.ALo(11,"currency"),e.qZA(),e.TgZ(12,"div",30)(13,"span",36),e._uU(14),e.qZA()()(),e.BQk()),2&o){const t=s.$implicit,n=e.oxw(4);e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(6,7,t.createdAt,"dd/MM/yyyy HH:mm:ss")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(13,Be,null===t.reason)),e.xp6(1),e.hij(" ",t.reason||"Sin motivo"," "),e.xp6(2),e.hij(" ",e.xi3(11,10,t.amount,"$ ")," "),e.xp6(3),e.Q6J("ngClass",n.movementClass(t.movementType)),e.xp6(1),e.hij(" ",n.translateMovementType(t.movementType)," ")}}function Ue(o,s){if(1&o&&(e.ynx(0),e.YNc(1,Ce,15,15,"ng-container",32),e.BQk()),2&o){const t=s.ngIf,n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",n.trackByFn)}}const Me=function(o){return{"pointer-events-none":o}},Ie=function(){return[5,10,25,100]};function we(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"div",26)(2,"div",27)(3,"div",28),e._uU(4," No. "),e.qZA(),e.TgZ(5,"div",28),e._uU(6," Fecha "),e.qZA(),e.TgZ(7,"div",29),e._uU(8," Motivo "),e.qZA(),e.TgZ(9,"div",28),e._uU(10," Monto "),e.qZA(),e.TgZ(11,"div",30),e._uU(12," Tipo de Movimiento "),e.qZA()(),e.YNc(13,Ue,2,2,"ng-container",23),e.ALo(14,"async"),e.qZA(),e._UZ(15,"mat-paginator",31),e.BQk()),2&o){const t=e.oxw(2);e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(2),e.Q6J("mat-sort-header","createdAt"),e.xp6(2),e.Q6J("mat-sort-header","reason"),e.xp6(2),e.Q6J("mat-sort-header","amount"),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,11,t.boxMovements$)),e.xp6(2),e.Q6J("ngClass",e.VKq(13,Me,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(15,Ie))("showFirstLastButtons",!0)}}function ke(o,s){if(1&o&&(e.ynx(0),e.YNc(1,we,16,16,"ng-container",25),e.BQk()),2&o){const t=s.ngIf;e.oxw();const n=e.MAs(40);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",n)}}function qe(o,s){1&o&&(e.TgZ(0,"div",37),e._uU(1," \xa1No se ha registrado ning\xfan movimiento de caja! "),e.qZA())}const Fe=[{path:"",component:K},{path:"admin",component:ge,resolve:{box:(()=>{class o{constructor(t){this._boxService=t}resolve(t,n){return this._boxService.getLastBox()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}},{path:"history",component:ye,resolve:{boxes:(()=>{class o{constructor(t){this._boxService=t}resolve(t,n){return this._boxService.getBoxes()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}},{path:"movements",component:(()=>{class o{constructor(t,n,i,r,m){this._boxService=t,this._changeDetectorRef=n,this._fuseConfirmationService=i,this._snackBar=r,this.store=m,this.boxMovements$=(0,P.of)([]),this.isLoading=!1,this.pagination=new Te,this.searchInputControl=new l.NI,this.isSlideLoading=!1,this.selectedSlide=null,this._unsubscribeAll=new I.x}ngOnInit(){this.boxMovements$=this.store.select(X),this.store.select(H.B).pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,u.R)(this._unsubscribeAll),(0,z.b)(300),(0,F.w)(t=>(this.isLoading=!0,this._boxService.getBoxMovements(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,Q.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,u.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,$.T)(this._sort.sortChange,this._paginator.page).pipe((0,F.w)(()=>(this.isLoading=!0,this._boxService.getBoxMovements(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,Q.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,f.E2)())}translateMovementType(t){switch(t){case d.initial:return"Inicial";case d.income:return"Ingreso";case d.return:return"Devoluci\xf3n";case d.loan:return"Pr\xe9stamo";case d.spent:return"Gasto"}}movementClass(t){switch(t){case d.initial:return"dark:bg-slate-500";case d.income:return"bg-green-500";case d.return:return"bg-yellow-500";case d.loan:return"bg-red-500";case d.spent:return"bg-cyan-500"}}trackByFn(t,n){return t||n.id}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h),e.Y36(e.sBO),e.Y36(k.R),e.Y36(w.ux),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["box-movements"]],viewQuery:function(t,n){if(1&t&&(e.Gf(q.NW,5),e.Gf(T.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(n._paginator=i.first),e.iGM(i=e.CRH())&&(n._sort=i.first)}},decls:41,vars:13,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"matMenuTriggerFor"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],["xPosition","before"],["itemMenu","matMenu"],["mat-menu-item",""],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noBoxMovements",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","box-movements-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hiddem","sm:block","text-center",3,"mat-sort-header"],[1,"hiddem","sm:block",3,"mat-sort-header"],[1,"hiddem","sm:block","text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","box-movements-grid","md:px-8"],[1,"hiddem","sm:block","font-mono"],[1,"hiddem","sm:block",3,"ngClass"],[1,"px-2.5","py-1","rounded-full",3,"ngClass"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Caja"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Movimientos de Caja"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Movimientos de Caja "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"div",14)(23,"button",15),e._UZ(24,"mat-icon",16),e.TgZ(25,"span",17),e._uU(26,"Imprimir Reporte"),e.qZA()(),e.TgZ(27,"mat-menu",18,19)(29,"button",20),e._UZ(30,"mat-icon",16),e._uU(31," Movimientos por mes "),e.qZA(),e.TgZ(32,"button",20),e._UZ(33,"mat-icon",16),e._uU(34," Movimientos por d\xeda "),e.qZA()()()()(),e.TgZ(35,"div",21)(36,"div",22),e.YNc(37,ke,2,2,"ng-container",23),e.ALo(38,"async"),e.YNc(39,qe,2,0,"ng-template",null,24,e.W1O),e.qZA()()()),2&t){const i=e.MAs(28);e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",n.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(2),e.Q6J("matMenuTriggerFor",i),e.xp6(1),e.Q6J("svgIcon","mat_solid:print"),e.xp6(6),e.Q6J("svgIcon","mat_solid:today"),e.xp6(3),e.Q6J("svgIcon","mat_solid:calendar_month"),e.xp6(4),e.Q6J("ngIf",e.lcZ(38,11,n.boxMovements$))}},dependencies:[g.yS,c.mk,c.sg,c.O5,l.Fj,l.JJ,l.oH,L.lW,O.Hw,A.KE,A.qo,Y.Nt,y.VK,y.OP,y.p6,q.NW,T.YE,T.nU,c.Ov,c.H9,c.uU],encapsulation:2,changeDetection:0}),o})(),resolve:{boxMovements:(()=>{class o{constructor(t){this._boxService=t}resolve(t,n){return this._boxService.getBoxMovements()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}];let Qe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(Fe),J.m]}),o})()}}]);