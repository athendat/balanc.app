"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[7500],{97500:(bi,he,d)=>{d.r(he),d.d(he,{WorkshopModule:()=>xi});var y=d(35357),Qe=d(17460),e=d(5e3),Je=d(35265);let Ve=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-workshop"]],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"ath-content-menu")},dependencies:[Je.p],encapsulation:2}),o})();var c=d(93075),O=d(86087),Z=d(84847),H=d(39646),F=d(77579),G=d(56451),m=d(82722),v=d(63900),A=d(54004),x=d(85094);const ge=o=>o.workshops,R=((0,x.P1)(ge,o=>o.workshop),(0,x.P1)(ge,o=>o.workshops));var j=d(86428),S=d(48966),fe=d(89116),u=d(59784),k=d(95698),_=d(18505),I=d(17489),Q=d(31982),J=d(75714),h=d(33921);const Le=h.Ps`
    mutation CreateWorkshop($createWorkshopInput: CreateWorkshopInput!) {
        createWorkshop(createWorkshopInput: $createWorkshopInput) {

            ok
            message

            workshop {
                id
                active
                name
                slug
            }

        }
    }
`,$e=h.Ps`
    mutation UpdateWorkshop($updateWorkshopInput: UpdateWorkshopInput!) {
        updateWorkshop(updateWorkshopInput: $updateWorkshopInput) {
            ok
            message

            workshop {
                id
                active
                name
                slug
            }
        }
    }
`,Be=h.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateWorkshopStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,ze=h.Ps`
    mutation RemoveWorkshop($removeWorkshopId: String!) {
        removeWorkshop(id: $removeWorkshopId) {
            ok
            message
        }
    }
`,Me=h.Ps`
    query FindAllWorkshops($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllWorkshops(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            workshops {
                id
                active
                name
                slug
            }
        }
    }
`,Ye=h.Ps`
    query FindWorkshopById($findWorkshopByIdId: String!) {
        findWorkshopById(id: $findWorkshopByIdId) {
            ok
            message

            workshop {
                id
                active
                name
                slug
            }
        }
    }
`;var C=d(57261);let ae=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createWorkshop(t){return this.store.select(R).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:Le,variables:{createWorkshopInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a.push(s.createWorkshop.workshop),this.store.dispatch((0,Q.aA)({workshops:a}))}))))}getWorkshops(t=1,r=20,i="code",s="asc",a=""){return this._apollo.query({query:Me,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,_.b)(({errors:l,data:p})=>{if(l){let g="";l.forEach(T=>g+=`\n ${T.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,J.Jr)({pagination:p.findAllWorkshops.pagination})),this.store.dispatch((0,Q.aA)({workshops:p.findAllWorkshops.workshops}))}))}getWorkshopById(t){return this._apollo.query({query:Ye,variables:{findWorkshopByIdId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:r,data:i})=>{if(r){let s="";r.forEach(a=>s+=`\n ${a.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,Q.Md)({workshop:i.findWorkshopById.workshop}))}))}updateWorkshop(t){return this.store.select(R).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:$e,variables:{updateWorkshopInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let p="";i.forEach(g=>p+=`\n ${g.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a[r.findIndex(p=>p.id===t.id)]=s.updateWorkshop.workshop,this.store.dispatch((0,Q.aA)({workshops:a}))}))))}updateWorkshopStatus(t){return this.store.select(R).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:Be,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,I.cloneDeep)(r);s[r.findIndex(l=>l.id===t.id)].active=t.active,this.store.dispatch((0,Q.aA)({workshops:s}))}))))}removeWorkshop(t){return this.store.select(R).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:ze,variables:{removeWorkshopId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,I.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,Q.aA)({workshops:s}))}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h._M),e.LFG(C.ux),e.LFG(x.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var w=d(71683),f=d(69808),W=d(47423),b=d(67322),U=d(98833);function He(o,n){1&o&&(e.TgZ(0,"h2",7),e._uU(1," Agregar Taller "),e.qZA())}function Ge(o,n){1&o&&(e.TgZ(0,"h2",7),e._uU(1," Editar Taller "),e.qZA())}function je(o,n){if(1&o&&(e.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"span",14),e._uU(8),e.qZA()()()()()()),2&o){const t=e.oxw();e.xp6(8),e.Oqu(t.data.workshop.name||"Sin nombre")}}function Ke(o,n){if(1&o&&(e.TgZ(0,"div",15)(1,"div",16)(2,"form",17)(3,"mat-form-field",18)(4,"mat-label"),e._uU(5,"Nombre"),e.qZA(),e._UZ(6,"input",19),e.qZA()()()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.workshopForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","name")("placeholder","Ejemplo: Taller de mec\xe1nica")}}function Xe(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",22),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.updateWorkshop())}),e._uU(2," Actualizar "),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("color","primary")("disabled",t.workshopForm.invalid)("matDialogClose","confirmed")}}function et(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",22),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createWorkshop())}),e._uU(2," Agregar "),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("color","primary")("disabled",t.workshopForm.invalid)("matDialogClose","confirmed")}}function tt(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",20),e.ynx(2),e.TgZ(3,"button",21),e._uU(4," Cancelar "),e.qZA(),e.BQk(),e.YNc(5,Xe,3,3,"ng-container",6),e.YNc(6,et,3,3,"ng-container",6),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(3),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("ngIf","edit"===t.data.dialogMode),e.xp6(1),e.Q6J("ngIf","add"===t.data.dialogMode)}}let ot=(()=>{class o{constructor(t,r,i,s,a,l,p){this.data=t,this._workshopsService=r,this._changeDetectorRef=i,this._formBuilder=s,this._fuseConfirmationService=a,this._dialogRef=l,this._snackBar=p,this.dialogMode="view",this._unsubscribeAll=new F.x,this.dialogMode=t.dialogMode,this.workshop=t.workshop}ngOnInit(){this.workshopForm=this._formBuilder.group({id:new c.NI(null),name:new c.NI(null,[c.kI.maxLength(100)])}),"edit"===this.dialogMode&&this.workshopForm.patchValue(this.workshop)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createWorkshop(){let t=this.workshopForm.getRawValue();t=(0,fe.Z)(t,["id"]),this._fuseConfirmationService.open({title:"Crear taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._workshopsService.createWorkshop(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.createWorkshop.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateWorkshop(){const t=this.workshopForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._workshopsService.updateWorkshop(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateWorkshop.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(S.WI),e.Y36(ae),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(w.R),e.Y36(S.so),e.Y36(C.ux))},o.\u0275cmp=e.Xpm({type:o,selectors:[["lists-workshop-dialog"]],decls:11,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400",4,"ngIf"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto",4,"ngIf"],["class","w-full overflow-hidden",4,"ngIf"],[4,"ngIf"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-3","gap-5",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-no-subscript"],["matInput","","type","text","required","","maxlength","50",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.ynx(1),e.TgZ(2,"div",1),e.YNc(3,He,2,0,"h2",2),e.YNc(4,Ge,2,0,"h2",2),e.qZA(),e.BQk(),e.TgZ(5,"div",3),e.ynx(6),e.YNc(7,je,9,1,"div",4),e.BQk(),e.ynx(8),e.YNc(9,Ke,7,4,"div",5),e.BQk(),e.qZA(),e.YNc(10,tt,7,3,"ng-container",6),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf","add"===r.data.dialogMode),e.xp6(1),e.Q6J("ngIf","edit"===r.data.dialogMode),e.xp6(3),e.Q6J("ngIf","view"===r.data.dialogMode),e.xp6(2),e.Q6J("ngIf","edit"===r.data.dialogMode||"add"),e.xp6(1),e.Q6J("ngIf","view"!==r.data.dialogMode))},dependencies:[f.O5,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.nD,c.sg,c.u,W.lW,S.ZT,b.KE,b.hX,U.Nt],encapsulation:2}),o})();class rt{}var P=d(25245),_e=d(20773),ve=d(32368);function it(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-slide-toggle",31),e.NdJ("change",function(i){e.CHM(t);const s=e.oxw(),a=s.$implicit,l=s.index,p=e.oxw(4);return e.KtG(p.updateWorkshopStatus(i,a,l))}),e.qZA(),e.BQk()}if(2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("checked",t.active)("color","primary")}}function st(o,n){1&o&&(e.ynx(0),e._UZ(1,"mat-spinner",32),e.BQk()),2&o&&(e.xp6(1),e.Q6J("diameter",20)("color","primary"))}function nt(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",26)(2,"div",21),e._uU(3),e.qZA(),e.TgZ(4,"div",27),e._uU(5),e.qZA(),e.TgZ(6,"div",23),e.YNc(7,it,2,2,"ng-container",16),e.YNc(8,st,2,2,"ng-container",16),e.qZA(),e.TgZ(9,"div",28)(10,"button",29),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(4);return e.KtG(a.openDialog(s,"edit","80%"))}),e._UZ(11,"mat-icon",30),e.qZA(),e.TgZ(12,"button",29),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(4);return e.KtG(a.deleteWorkshop(s))}),e._UZ(13,"mat-icon",30),e.qZA()()(),e.BQk()}if(2&o){const t=n.$implicit,r=n.index,i=e.oxw(4);e.xp6(3),e.hij(" ",r+1," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("ngIf",!(i.isSlideLoading&&i.selectedSlide===r)),e.xp6(1),e.Q6J("ngIf",i.isSlideLoading&&i.selectedSlide===r),e.xp6(3),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}function at(o,n){if(1&o&&(e.ynx(0),e.YNc(1,nt,14,6,"ng-container",25),e.BQk()),2&o){const t=n.ngIf,r=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",r.trackByFn)}}const ct=function(o){return{"pointer-events-none":o}},lt=function(){return[5,10,25,100]};function pt(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",19)(2,"div",20),e._UZ(3,"div",21),e.TgZ(4,"div",22),e._uU(5," Nombre "),e.qZA(),e.TgZ(6,"div",23),e._uU(7," Activo "),e.qZA(),e.TgZ(8,"div",23),e._uU(9," Acciones "),e.qZA()(),e.YNc(10,at,2,2,"ng-container",16),e.ALo(11,"async"),e._UZ(12,"mat-paginator",24),e.qZA(),e.BQk()),2&o){const t=e.oxw(2);e.xp6(4),e.Q6J("mat-sort-header","name"),e.xp6(6),e.Q6J("ngIf",e.lcZ(11,8,t.workshops$)),e.xp6(2),e.Q6J("ngClass",e.VKq(10,ct,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(12,lt))("showFirstLastButtons",!0)}}function dt(o,n){if(1&o&&(e.ynx(0),e.YNc(1,pt,13,13,"ng-container",18),e.BQk()),2&o){const t=n.ngIf;e.oxw();const r=e.MAs(28);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",r)}}function mt(o,n){1&o&&(e.TgZ(0,"div",33),e._uU(1," \xa1No hay talleres creados para el negocio!"),e.qZA())}let ut=(()=>{class o{constructor(t,r,i,s,a,l){this._workshopsService=t,this._changeDetectorRef=r,this._dialog=i,this._fuseConfirmationService=s,this._snackBar=a,this.store=l,this.workshop=new rt,this.workshops$=(0,H.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.searchInputControl=new c.NI,this.selectedSlide=null,this._unsubscribeAll=new F.x}ngOnInit(){this.workshops$=this.store.select(R),this.store.select(j.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,G.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._workshopsService.getWorkshops(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,A.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteWorkshop(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la taller: ${t.name}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._workshopsService.removeWorkshop(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeWorkshop.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}updateWorkshopStatus(t,r,i){this.isSlideLoading=!0,this.selectedSlide=i,this._workshopsService.updateWorkshopStatus({id:r.id,active:t.checked}).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateWorkshopStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}trackByFn(t,r){return r.id||t}openDialog(t,r){this._dialog.open(ot,{data:{workshop:t,dialogMode:r},panelClass:"ath-dialog-panel"})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(ae),e.Y36(e.sBO),e.Y36(S.uw),e.Y36(w.R),e.Y36(C.ux),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-workshops"]],viewQuery:function(t,r){if(1&t&&(e.Gf(O.NW,5),e.Gf(Z.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(r._paginator=i.first),e.iGM(i=e.CRH())&&(r._sort=i.first)}},decls:29,vars:6,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noWorkshops",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","overflow-x-auto","font-semibold","shadow","lists-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block"],[3,"mat-sort-header"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","lists-grid","md:px-8","overflow-auto"],[1,"truncate"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"checked","color","change"],[3,"diameter","color"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Taller"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Talleres"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Talleres "),e.qZA()()(),e.TgZ(18,"div",10)(19,"button",11),e.NdJ("click",function(){return r.openDialog(r.workshop,"add")}),e._UZ(20,"mat-icon",12),e.TgZ(21,"span",13),e._uU(22,"Agregar"),e.qZA()()()(),e.TgZ(23,"div",14)(24,"div",15),e.YNc(25,dt,2,2,"ng-container",16),e.ALo(26,"async"),e.YNc(27,mt,2,0,"ng-template",null,17,e.W1O),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.Q6J("ngIf",e.lcZ(26,4,r.workshops$)))},dependencies:[f.mk,f.sg,f.O5,y.yS,W.lW,P.Hw,O.NW,_e.Ou,ve.Rr,Z.YE,Z.nU,f.Ov],encapsulation:2,changeDetection:0}),o})();const xe=o=>o.vehicles,ht=(0,x.P1)(xe,o=>o.vehicle),V=(0,x.P1)(xe,o=>o.vehicles);class be{}var K=d(93222);const gt=h.Ps`
    mutation CreateVehicle($createVehicleInput: CreateVehicleInput!) {
        createVehicle(createVehicleInput: $createVehicleInput) {

            ok
            message

            vehicle {
                id
                userId

                customerId
                customer {
                    name
                }

                brandId
                brand {
                    name
                }

                fuelId
                fuel{
                    name
                }

                registrationNumber
                vin
                engineNumber
                bodyNumber
                color
                battery
                carPlayer
            }

        }
    }
`,ft=h.Ps`
    mutation UpdateVehicle($updateVehicleInput: UpdateVehicleInput!) {
        updateVehicle(updateVehicleInput: $updateVehicleInput) {
            ok
            message

            vehicle {
id
                userId

                customerId
                customer {
                    name
                }

                brandId
                brand {
                    name
                }

                fuelId
                fuel{
                    name
                }

                registrationNumber
                vin
                engineNumber
                bodyNumber
                color
                battery
                carPlayer
            }
        }
    }
`,_t=(h.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVehicleStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,h.Ps`
    mutation RemoveVehicle($removeVehicleId: String!) {
        removeVehicle(id: $removeVehicleId) {
            ok
            message
        }
    }
`),vt=h.Ps`
    query FindAllVehicles($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllVehicles(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            vehicles {
                id
                userId

                customerId
                customer {
                    name
                }

                brandId
                brand {
                    name
                }

                fuelId
                fuel{
                    name
                }

                registrationNumber
            }
        }
    }
`,xt=h.Ps`
    query FindVehicleById($findVehicleByIdId: String!) {
        findVehicleById(id: $findVehicleByIdId) {
            ok
            message

            vehicle {
                id
                userId

                customerId
                customer {
                    name
                }

                brandId
                brand {
                    name
                }

                fuelId
                fuel{
                    name
                }

                registrationNumber
                vin
                engineNumber
                bodyNumber
                color
                battery
                carPlayer
            }
        }
    }
`;let ie=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createVehicle(t){return this.store.select(V).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:gt,variables:{createVehicleInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a.push(s.createVehicle.vehicle),this.store.dispatch((0,K.ln)({vehicles:a}))}))))}getVehicles(t=1,r=20,i="code",s="asc",a=""){return this._apollo.query({query:vt,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,_.b)(({errors:l,data:p})=>{if(l){let g="";l.forEach(T=>g+=`\n ${T.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,J.Jr)({pagination:p.findAllVehicles.pagination})),this.store.dispatch((0,K.ln)({vehicles:p.findAllVehicles.vehicles}))}))}getVehicleById(t){return this._apollo.query({query:xt,variables:{findVehicleByIdId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:r,data:i})=>{if(r){let s="";r.forEach(a=>s+=`\n ${a.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,K.QD)({vehicle:i.findVehicleById.vehicle}))}))}updateVehicle(t){return this.store.select(V).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:ft,variables:{updateVehicleInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let p="";i.forEach(g=>p+=`\n ${g.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a[r.findIndex(p=>p.id===t.id)]=s.updateVehicle.vehicle,this.store.dispatch((0,K.ln)({vehicles:a}))}))))}removeVehicle(t){return this.store.select(V).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:_t,variables:{removeVehicleId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,I.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,K.ln)({vehicles:s}))}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h._M),e.LFG(C.ux),e.LFG(x.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var X=d(29071);const bt=function(o){return[o]};function kt(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",29)(2,"div",24),e._uU(3),e.qZA(),e.TgZ(4,"div",30),e._uU(5),e.qZA(),e.TgZ(6,"div",26),e._uU(7),e.qZA(),e.TgZ(8,"div",26),e._uU(9),e.qZA(),e.TgZ(10,"div",26),e._uU(11),e.qZA(),e.TgZ(12,"div",31)(13,"button",32),e._UZ(14,"mat-icon",33),e.qZA(),e.TgZ(15,"button",34),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(4);return e.KtG(a.deleteVehicle(s))}),e._UZ(16,"mat-icon",33),e.qZA()()(),e.BQk()}if(2&o){const t=n.$implicit,r=n.index;e.xp6(3),e.hij(" ",r+1," "),e.xp6(2),e.hij(" ",t.registrationNumber," "),e.xp6(2),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.brand.name," "),e.xp6(2),e.hij(" ",t.fuel.name," "),e.xp6(2),e.Q6J("routerLink",e.VKq(8,bt,t.id)),e.xp6(1),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}function It(o,n){if(1&o&&(e.ynx(0),e.YNc(1,kt,17,10,"ng-container",28),e.BQk()),2&o){const t=n.ngIf,r=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",r.trackByFn)}}const yt=function(o){return{"pointer-events-none":o}},Ct=function(){return[5,10,25,100]};function At(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",22)(2,"div",23),e._UZ(3,"div",24),e.TgZ(4,"div",25),e._uU(5," Chapa "),e.qZA(),e.TgZ(6,"div",26),e._uU(7," Cliente "),e.qZA(),e.TgZ(8,"div",26),e._uU(9," Marca "),e.qZA(),e.TgZ(10,"div",26),e._uU(11," Combustible "),e.qZA(),e.TgZ(12,"div",26),e._uU(13," Acciones "),e.qZA()(),e.YNc(14,It,2,2,"ng-container",19),e.ALo(15,"async"),e._UZ(16,"mat-paginator",27),e.qZA(),e.BQk()),2&o){const t=e.oxw(2);e.xp6(4),e.Q6J("mat-sort-header","registrationNumber"),e.xp6(10),e.Q6J("ngIf",e.lcZ(15,8,t.vehicles$)),e.xp6(2),e.Q6J("ngClass",e.VKq(10,yt,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(12,Ct))("showFirstLastButtons",!0)}}function Zt(o,n){if(1&o&&(e.ynx(0),e.YNc(1,At,17,13,"ng-container",21),e.BQk()),2&o){const t=n.ngIf;e.oxw();const r=e.MAs(31);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",r)}}function St(o,n){1&o&&(e.TgZ(0,"div",35),e._uU(1," \xa1No hay veh\xedculos de clientes registrados!"),e.qZA())}const Tt=function(){return["new"]};let Ft=(()=>{class o{constructor(t,r,i,s,a,l){this._vehiclesService=t,this._changeDetectorRef=r,this._dialog=i,this._fuseConfirmationService=s,this._snackBar=a,this.store=l,this.vehicle=new be,this.vehicles$=(0,H.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.searchInputControl=new c.NI,this.selectedSlide=null,this._unsubscribeAll=new F.x}ngOnInit(){this.vehicles$=this.store.select(V),this.store.select(j.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,G.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._vehiclesService.getVehicles(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,A.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteVehicle(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la taller: ${t.registrationNumber}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._vehiclesService.removeVehicle(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeVehicle.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(t,r){return r.id||t}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(ie),e.Y36(e.sBO),e.Y36(S.uw),e.Y36(w.R),e.Y36(C.ux),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["vehicle-vehicles"]],viewQuery:function(t,r){if(1&t&&(e.Gf(O.NW,5),e.Gf(Z.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(r._paginator=i.first),e.iGM(i=e.CRH())&&(r._sort=i.first)}},decls:32,vars:12,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-auto"],[4,"ngIf"],["noVehicles",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","vehicles-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block"],[3,"mat-sort-header"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","vehicles-grid","md:px-8"],[1,"truncate"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Taller"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Veh\xedculos"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Veh\xedculos "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Agregar"),e.qZA()()()(),e.TgZ(26,"div",17)(27,"div",18),e.YNc(28,Zt,2,2,"ng-container",19),e.ALo(29,"async"),e.YNc(30,St,2,0,"ng-template",null,20,e.W1O),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(1),e.Q6J("routerLink",e.DdM(11,Tt)),e.xp6(1),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.Q6J("ngIf",e.lcZ(29,9,r.vehicles$)))},dependencies:[f.mk,f.sg,f.O5,c.Fj,c.JJ,c.oH,y.rH,y.yS,X.PQ,W.lW,P.Hw,b.KE,b.qo,U.Nt,O.NW,Z.YE,Z.nU,f.Ov],encapsulation:2,changeDetection:0}),o})();var q=d(68675),wt=d(23425),Wt=d(92690),Et=d(60814),L=d(91079),ee=d(90508),Ot=d(74533);const ke=function(o){return{"cursor-not-allowed":o}};function qt(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",35),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createVehicle())}),e._UZ(2,"mat-icon",36),e.TgZ(3,"span",37),e._uU(4,"Guardar"),e.qZA()(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.vehicleForm.invalid)("ngClass",e.VKq(3,ke,t.vehicleForm.invalid)),e.xp6(1),e.Q6J("svgIcon","mat_solid:save")}}function Ut(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",35),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.updateVehicle())}),e._UZ(2,"mat-icon",36),e.TgZ(3,"span",37),e._uU(4,"Actualizar"),e.qZA()(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.vehicleForm.invalid)("ngClass",e.VKq(3,ke,t.vehicleForm.invalid)),e.xp6(1),e.Q6J("svgIcon","mat_solid:refresh")}}function Dt(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero de registro (chapa) es obligatorio. "),e.qZA())}function Pt(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero de registro (chapa) debe tener 7 caracteres. "),e.qZA())}function Nt(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",38),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectCustomer(s))}),e._uU(1),e.qZA()}if(2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function Rt(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",38),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectBrand(s))}),e._uU(1),e.qZA()}if(2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function Qt(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El modelo no debe tener m\xe1s de 50 caracteres. "),e.qZA())}function Jt(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",38),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectFuel(s))}),e._uU(1),e.qZA()}if(2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function Vt(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero vin debe tener 17 caracteres. "),e.qZA())}function Lt(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero del motor no debe tener m\xe1s de 50 caracteres. "),e.qZA())}function $t(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El n\xfamero de la carrocer\xeda no debe tener m\xe1s de 50 caracteres. "),e.qZA())}function Bt(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El color no debe tener m\xe1s de 100 caracteres. "),e.qZA())}function zt(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El comentario sobre la bater\xeda no debe tener m\xe1s de 1000000 caracteres. "),e.qZA())}function Mt(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El comentario sobre la reproductora no debe tener m\xe1s de 1000000 caracteres. "),e.qZA())}let Yt=(()=>{class o{constructor(t,r,i,s,a,l){this._activatedRoute=t,this._changeDetectorRef=r,this._formBuilder=i,this._snackBar=s,this._router=a,this.store=l,this.brandSelected="",this.customers=[],this.customerSelected="",this.editMode=!1,this.fuelSelected="",this.isLoading=!1,this.isLoadingData=!0,this.searchBrandControl=new c.NI(""),this.searchCustomerControl=new c.NI(""),this.searchFuelControl=new c.NI(""),this.selectedVehicle=new be,this.vehicles$=(0,H.of)([]),this._unsubscribeAll=new F.x,this._fuseConfirmationService=(0,e.f3M)(w.R),this._vehiclesService=(0,e.f3M)(ie)}ngOnInit(){this.store.select(Et.p6).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.customers=t,this._changeDetectorRef.markForCheck()}),this.customersFiltered$=this.searchCustomerControl.valueChanges.pipe((0,q.O)(""),(0,A.U)(t=>{const r="string"==typeof t?t:null==t?void 0:t.name;return r?this._filterCustomers(r):this.customers.slice()})),this.store.select(wt.gg).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.brands=t,this._changeDetectorRef.markForCheck()}),this.brandsFiltered$=this.searchBrandControl.valueChanges.pipe((0,q.O)(""),(0,A.U)(t=>{const r="string"==typeof t?t:null==t?void 0:t.name;return r?this._filterBrands(r):this.brands.slice()})),this.store.select(Wt.zt).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.fuels=t,this._changeDetectorRef.markForCheck()}),this.fuelsFiltered$=this.searchFuelControl.valueChanges.pipe((0,q.O)(""),(0,A.U)(t=>{const r="string"==typeof t?t:null==t?void 0:t.name;return r?this._filterFuels(r):this.fuels.slice()})),this.vehicleForm=this._formBuilder.group({id:new c.NI(null),customerId:new c.NI(null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i),c.kI.maxLength(255)]),brandId:new c.NI(null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i),c.kI.maxLength(255)]),model:new c.NI(null,[c.kI.maxLength(50)]),fuelId:new c.NI(null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i),c.kI.maxLength(255)]),registrationNumber:new c.NI(null,[c.kI.required,c.kI.minLength(7),c.kI.maxLength(7)]),vin:new c.NI(null,[c.kI.minLength(17),c.kI.maxLength(17)]),engineNumber:new c.NI(null,[c.kI.maxLength(50)]),bodyNumber:new c.NI(null,[c.kI.maxLength(50)]),color:new c.NI(null,[c.kI.maxLength(100)]),battery:new c.NI(null,[c.kI.maxLength(1e6)]),carPlayer:new c.NI(null,[c.kI.maxLength(1e6)])}),this._activatedRoute.params.pipe((0,m.R)(this._unsubscribeAll)).subscribe(({vehicleId:t})=>{"new"!==t&&(this.editMode=!0,this.store.select(ht).pipe((0,m.R)(this._unsubscribeAll)).subscribe(r=>{this.selectedVehicle=r,this.isLoadingData=!1,this.vehicleForm.patchValue(r),this.isLoadingData=!1})),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createVehicle(){let t=this.vehicleForm.getRawValue();t=(0,I.omit)(t,["id","code"]),this._fuseConfirmationService.open({title:"Crear Veh\xedculo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._vehiclesService.createVehicle(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.createVehicle.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck(),this._router.navigateByUrl("/workshop/vehicles")}),this._changeDetectorRef.markForCheck()})}updateVehicle(){let t=this.vehicleForm.getRawValue();t=(0,I.omit)(t,["code"]),this._fuseConfirmationService.open({title:"Actualizar Veh\xedculo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._vehiclesService.updateVehicle(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateVehicle.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/vehicles")}),this._changeDetectorRef.markForCheck()})}selectBrand(t){this.vehicleForm.get("brandId").setValue(t.id)}selectCustomer(t){this.vehicleForm.get("customerId").setValue(t.id)}selectFuel(t){this.vehicleForm.get("fuelId").setValue(t.id)}displayFn(t){return t&&t.name?t.name:""}_filterBrands(t){const r=t.toLowerCase();return this.customers.filter(i=>i.name.toLowerCase().includes(r))}_filterCustomers(t){const r=t.toLowerCase();return this.customers.filter(i=>i.name.toLowerCase().includes(r))}_filterFuels(t){const r=t.toLowerCase();return this.customers.filter(i=>i.name.toLowerCase().includes(r))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y.gz),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(C.ux),e.Y36(y.F0),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-vehicle-details"]],decls:104,vars:53,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","bg-card","dark:bg-transparent","overflow-y-auto"],[1,"z-20","flex","flex-col","p-6","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:py-8","sm:px-10","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/workshop/vehicles",1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[4,"ngIf"],[1,"flex","flex-auto"],[1,"flex","flex-col","w-full","divide-y","divide-dashed",3,"formGroup","autocomplete"],[1,"grid","grid-cols-1","p-10"],[1,"flex","flex-col"],[1,"text-xl","font-semibold"],[1,"flex","flex-col","p-6","mt-5","border","shadow-md","sm:flex-row","bg-card","rounded-2xl"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-5","w-full"],[1,"w-full","fuse-mat-dense"],["matInput","","type","text","minlength","7","maxlength","7","required","",3,"formControlName"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[3,"displayWith"],["customerAutocomplete","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],["brandAutocomplete","matAutocomplete"],["matInput","","type","text","maxlength","50",3,"formControlName"],["fuelAutocomplete","matAutocomplete"],["matInput","","type","text","minlength","17","maxlength","17",3,"formControlName"],["matInput","","type","text","maxlength","100",3,"formControlName"],[1,"w-full","fuse-mat-dense","sm:col-span-3"],["matInput","","cdkTextareaAutosize","","maxlength","1000000","rows","2",3,"formControlName"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","ngClass","click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"value","click"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div")(6,"a",4),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Taller"),e.qZA()(),e.TgZ(12,"div",5),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",8),e._uU(15,"Veh\xedculos"),e.qZA()(),e.TgZ(16,"div",5),e._UZ(17,"mat-icon",6),e.TgZ(18,"a",7),e._uU(19),e.qZA()()()(),e.TgZ(20,"div",9)(21,"h2",10),e._uU(22),e.qZA()()(),e.TgZ(23,"div",11),e.YNc(24,qt,5,5,"ng-container",12),e.YNc(25,Ut,5,5,"ng-container",12),e.qZA()(),e.TgZ(26,"div",13)(27,"form",14)(28,"div",15)(29,"div",16)(30,"span",17),e._uU(31,"Generales"),e.qZA(),e.TgZ(32,"span"),e._uU(33,"Ingrese la informaci\xf3n necesaria para describir e identificar el veh\xedculo"),e.qZA()(),e.TgZ(34,"div",18)(35,"div",19)(36,"mat-form-field",20)(37,"mat-label"),e._uU(38,"Chapa"),e.qZA(),e._UZ(39,"input",21),e.YNc(40,Dt,2,0,"mat-error",12),e.YNc(41,Pt,2,0,"mat-error",12),e.qZA(),e.TgZ(42,"mat-form-field",22)(43,"mat-label"),e._uU(44,"Cliente"),e.qZA(),e._UZ(45,"mat-icon",23)(46,"input",24),e.TgZ(47,"mat-autocomplete",25,26),e.YNc(49,Nt,2,2,"mat-option",27),e.ALo(50,"async"),e.qZA()(),e.TgZ(51,"mat-form-field",22)(52,"mat-label"),e._uU(53,"Marca"),e.qZA(),e._UZ(54,"mat-icon",23)(55,"input",24),e.TgZ(56,"mat-autocomplete",25,28),e.YNc(58,Rt,2,2,"mat-option",27),e.ALo(59,"async"),e.qZA()(),e.TgZ(60,"mat-form-field",20)(61,"mat-label"),e._uU(62,"Modelo"),e.qZA(),e._UZ(63,"input",29),e.YNc(64,Qt,2,0,"mat-error",12),e.qZA(),e.TgZ(65,"mat-form-field",22)(66,"mat-label"),e._uU(67,"Tipo de combustible"),e.qZA(),e._UZ(68,"mat-icon",23)(69,"input",24),e.TgZ(70,"mat-autocomplete",25,30),e.YNc(72,Jt,2,2,"mat-option",27),e.ALo(73,"async"),e.qZA()(),e.TgZ(74,"mat-form-field",20)(75,"mat-label"),e._uU(76,"VIN"),e.qZA(),e._UZ(77,"input",31),e.YNc(78,Vt,2,0,"mat-error",12),e.qZA(),e.TgZ(79,"mat-form-field",20)(80,"mat-label"),e._uU(81,"N\xfamero del motor"),e.qZA(),e._UZ(82,"input",29),e.YNc(83,Lt,2,0,"mat-error",12),e.qZA(),e.TgZ(84,"mat-form-field",20)(85,"mat-label"),e._uU(86,"N\xfamero de la carrocer\xeda"),e.qZA(),e._UZ(87,"input",29),e.YNc(88,$t,2,0,"mat-error",12),e.qZA(),e.TgZ(89,"mat-form-field",20)(90,"mat-label"),e._uU(91,"Color"),e.qZA(),e._UZ(92,"input",32),e.YNc(93,Bt,2,0,"mat-error",12),e.qZA(),e.TgZ(94,"mat-form-field",33)(95,"mat-label"),e._uU(96,"Sobre la bater\xeda"),e.qZA(),e._UZ(97,"textarea",34),e.YNc(98,zt,2,0,"mat-error",12),e.qZA(),e.TgZ(99,"mat-form-field",33)(100,"mat-label"),e._uU(101,"Sobre la reproductora"),e.qZA(),e._UZ(102,"textarea",34),e.YNc(103,Mt,2,0,"mat-error",12),e.qZA()()()()()()()),2&t){const i=e.MAs(48),s=e.MAs(57),a=e.MAs(71);e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(2),e.hij(" ",r.editMode?r.selectedVehicle.registrationNumber:"Nuevo"," "),e.xp6(3),e.hij(" ",r.editMode?r.selectedVehicle.registrationNumber:"Nuevo"," "),e.xp6(2),e.Q6J("ngIf",!r.editMode),e.xp6(1),e.Q6J("ngIf",r.editMode),e.xp6(2),e.Q6J("formGroup",r.vehicleForm)("autocomplete","off"),e.xp6(12),e.Q6J("formControlName","registrationNumber"),e.xp6(1),e.Q6J("ngIf",r.vehicleForm.get("registrationNumber").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.vehicleForm.get("registrationNumber").hasError("minlength")),e.xp6(4),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchCustomerControl)("matAutocomplete",i)("placeholder","Buscar cliente")("required",!0),e.xp6(1),e.Q6J("displayWith",r.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(50,47,r.customersFiltered$)),e.xp6(5),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchBrandControl)("matAutocomplete",s)("placeholder","Buscar marca")("required",!0),e.xp6(1),e.Q6J("displayWith",r.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(59,49,r.brandsFiltered$)),e.xp6(5),e.Q6J("formControlName","model"),e.xp6(1),e.Q6J("ngIf",r.vehicleForm.get("model").hasError("maxlength")),e.xp6(4),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchFuelControl)("matAutocomplete",a)("placeholder","Buscar combustible")("required",!0),e.xp6(1),e.Q6J("displayWith",r.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(73,51,r.fuelsFiltered$)),e.xp6(5),e.Q6J("formControlName","vin"),e.xp6(1),e.Q6J("ngIf",r.vehicleForm.get("vin").hasError("minlength")),e.xp6(4),e.Q6J("formControlName","engineNumber"),e.xp6(1),e.Q6J("ngIf",r.vehicleForm.get("engineNumber").hasError("maxlength")),e.xp6(4),e.Q6J("formControlName","bodyNumber"),e.xp6(1),e.Q6J("ngIf",r.vehicleForm.get("bodyNumber").hasError("maxlength")),e.xp6(4),e.Q6J("formControlName","color"),e.xp6(1),e.Q6J("ngIf",r.vehicleForm.get("color").hasError("maxlength")),e.xp6(4),e.Q6J("formControlName","battery"),e.xp6(1),e.Q6J("ngIf",r.vehicleForm.get("carPlayer").hasError("maxlength")),e.xp6(4),e.Q6J("formControlName","carPlayer"),e.xp6(1),e.Q6J("ngIf",r.vehicleForm.get("carPlayer").hasError("maxlength"))}},dependencies:[f.mk,f.sg,f.O5,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.wO,c.nD,c.oH,c.sg,c.u,y.yS,X.PQ,L.XC,L.ZL,ee.ey,W.lW,P.Hw,Ot.IC,b.TO,b.KE,b.hX,b.qo,U.Nt,f.Ov],encapsulation:2,changeDetection:0}),o})();const Ie=o=>o.vehicleInspections,Ht=(0,x.P1)(Ie,o=>o.vehicleInspection),te=(0,x.P1)(Ie,o=>o.vehicleInspections);class ye{}var oe=d(52587);const Gt=h.Ps`
    mutation CreateVehicleInspection($createVehicleInspectionInput: CreateVehicleInspectionInput!) {
        createVehicleInspection(createVehicleInspectionInput: $createVehicleInspectionInput) {

            ok
            message

            vehicleInspection {
                id
                userId
                no
                date
                locationId
                employeeId
                vehicleId
                tank_cover_fuel
                tank_cover_brake_fluid
                tank_cover_coolant_liquid
                tank_cover_windshield_water
                tank_cover_Oil
                radiator_cover
                oil_stick
                wheel_trim
                front_brushes
                tail_brush
                emblems
                inside_mirror
                outside_left_mirrors
                outside_right_mirrors
                cigar_lighter
                clock
                radio_player
                speakers
                bonnet_hydraulic_arm
                tailgate_hydraulic_arm
                rugs
                horn
                front_lights
                tail_lights
                third_stop
                cat
                wheel_wrench
                antenna
                air_conditioning
                engine_grill
                obs
            }

        }
    }
`,jt=h.Ps`
    mutation UpdateVehicleInspection($updateVehicleInspectionInput: UpdateVehicleInspectionInput!) {
        updateVehicleInspection(updateVehicleInspectionInput: $updateVehicleInspectionInput) {
            ok
            message

            vehicleInspection {
                id
                userId
                no
                date
                locationId
                employeeId
                vehicleId
                tank_cover_fuel
                tank_cover_brake_fluid
                tank_cover_coolant_liquid
                tank_cover_windshield_water
                tank_cover_Oil
                radiator_cover
                oil_stick
                wheel_trim
                front_brushes
                tail_brush
                emblems
                inside_mirror
                outside_left_mirrors
                outside_right_mirrors
                cigar_lighter
                clock
                radio_player
                speakers
                bonnet_hydraulic_arm
                tailgate_hydraulic_arm
                rugs
                horn
                front_lights
                tail_lights
                third_stop
                cat
                wheel_wrench
                antenna
                air_conditioning
                engine_grill
                obs
            }
        }
    }
`,Kt=(h.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateVehicleInspectionStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,h.Ps`
    mutation RemoveVehicleInspection($removeVehicleInspectionId: String!) {
        removeVehicleInspection(id: $removeVehicleInspectionId) {
            ok
            message
        }
    }
`),Xt=h.Ps`
    query FindAllVehicleInspections($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllVehicleInspections(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            vehicleInspections {
                id
                no
                date

                locationId
                location {
                    name
                }

                employeeId
                employee {
                    fullname
                }

                vehicleId
                vehicle {
                    registrationNumber
                    customerId
                    customer {
                        id
                        name
                    }
                }
            }
        }
    }
`,eo=h.Ps`
    query FindVehicleInspectionById($findVehicleInspectionByIdId: String!) {
        findVehicleInspectionById(id: $findVehicleInspectionByIdId) {
            ok
            message

            vehicleInspection {
                id
                userId
                no
                date
                locationId
                location {
                    name
                }

                employeeId
                employee {
                    fullname
                }

                vehicleId
                vehicle {
                    registrationNumber
                }

                tank_cover_fuel
                tank_cover_brake_fluid
                tank_cover_coolant_liquid
                tank_cover_windshield_water
                tank_cover_Oil
                radiator_cover
                oil_stick
                wheel_trim
                front_brushes
                tail_brush
                emblems
                inside_mirror
                outside_left_mirrors
                outside_right_mirrors
                cigar_lighter
                clock
                radio_player
                speakers
                bonnet_hydraulic_arm
                tailgate_hydraulic_arm
                rugs
                horn
                front_lights
                tail_lights
                third_stop
                cat
                wheel_wrench
                antenna
                air_conditioning
                engine_grill
                obs
            }
        }
    }
`;let se=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createVehicleInspection(t){return this.store.select(te).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:Gt,variables:{createVehicleInspectionInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a.push(s.createVehicleInspection.vehicleInspection),this.store.dispatch((0,oe.SR)({vehicleInspections:a}))}))))}getVehicleInspections(t=1,r=20,i="code",s="asc",a=""){return this._apollo.query({query:Xt,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,_.b)(({errors:l,data:p})=>{if(l){let g="";l.forEach(T=>g+=`\n ${T.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,J.Jr)({pagination:p.findAllVehicleInspections.pagination})),this.store.dispatch((0,oe.SR)({vehicleInspections:p.findAllVehicleInspections.vehicleInspections}))}))}getVehicleInspectionById(t){return this._apollo.query({query:eo,variables:{findVehicleInspectionByIdId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:r,data:i})=>{if(r){let s="";r.forEach(a=>s+=`\n ${a.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,oe.k6)({vehicleInspection:i.findVehicleInspectionById.vehicleInspection}))}))}updateVehicleInspection(t){return this.store.select(te).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:jt,variables:{updateVehicleInspectionInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let p="";i.forEach(g=>p+=`\n ${g.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a[r.findIndex(p=>p.id===t.id)]=s.updateVehicleInspection.vehicleInspection,this.store.dispatch((0,oe.SR)({vehicleInspections:a}))}))))}removeVehicleInspection(t){return this.store.select(te).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:Kt,variables:{removeVehicleInspectionId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,I.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,oe.SR)({vehicleInspections:s}))}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h._M),e.LFG(C.ux),e.LFG(x.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const to=function(o){return[o]};function oo(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",28)(2,"div",29),e._uU(3),e.qZA(),e.TgZ(4,"div",30),e._uU(5),e.qZA(),e.TgZ(6,"div",25),e._uU(7),e.qZA(),e.TgZ(8,"div",25),e._uU(9),e.qZA(),e.TgZ(10,"div",31),e._uU(11),e.ALo(12,"date"),e.qZA(),e.TgZ(13,"div",32)(14,"button",33),e._UZ(15,"mat-icon",34),e.qZA(),e.TgZ(16,"button",35),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(4);return e.KtG(a.deleteVehicle(s))}),e._UZ(17,"mat-icon",34),e.qZA()()(),e.BQk()}if(2&o){const t=n.$implicit,r=n.index;e.xp6(3),e.hij(" ",r+1," "),e.xp6(2),e.hij(" ",t.vehicle.registrationNumber," "),e.xp6(2),e.hij(" ",t.vehicle.customer.name," "),e.xp6(2),e.hij(" ",t.employee.fullname," "),e.xp6(2),e.hij(" ",e.xi3(12,8,t.date,"dd/MM/yyyy")," "),e.xp6(3),e.Q6J("routerLink",e.VKq(11,to,t.id)),e.xp6(1),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}function ro(o,n){if(1&o&&(e.ynx(0),e.YNc(1,oo,18,13,"ng-container",27),e.BQk()),2&o){const t=n.ngIf,r=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",r.trackByFn)}}const io=function(o){return{"pointer-events-none":o}},so=function(){return[5,10,25,100]};function no(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",22)(2,"div",23),e._UZ(3,"div",24),e.TgZ(4,"div"),e._uU(5," Veh\xedculo "),e.qZA(),e.TgZ(6,"div",25),e._uU(7," Cliente "),e.qZA(),e.TgZ(8,"div",25),e._uU(9," Empleado "),e.qZA(),e.TgZ(10,"div",25),e._uU(11," Fecha "),e.qZA(),e.TgZ(12,"div",25),e._uU(13," Acciones "),e.qZA()(),e.YNc(14,ro,2,2,"ng-container",19),e.ALo(15,"async"),e._UZ(16,"mat-paginator",26),e.qZA(),e.BQk()),2&o){const t=e.oxw(2);e.xp6(14),e.Q6J("ngIf",e.lcZ(15,7,t.vehicleInspections$)),e.xp6(2),e.Q6J("ngClass",e.VKq(9,io,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(11,so))("showFirstLastButtons",!0)}}function ao(o,n){if(1&o&&(e.ynx(0),e.YNc(1,no,17,12,"ng-container",21),e.BQk()),2&o){const t=n.ngIf;e.oxw();const r=e.MAs(31);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",r)}}function co(o,n){1&o&&(e.TgZ(0,"div",36),e._uU(1," \xa1No se ha registrado ninguna inspecci\xf3n!"),e.qZA())}const lo=function(){return["new"]};let po=(()=>{class o{constructor(t,r,i,s,a,l){this._vehicleInspectionsService=t,this._changeDetectorRef=r,this._dialog=i,this._fuseConfirmationService=s,this._snackBar=a,this.store=l,this.vehicleInspection=new ye,this.vehicleInspections$=(0,H.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.searchInputControl=new c.NI,this.selectedSlide=null,this._unsubscribeAll=new F.x}ngOnInit(){this.vehicleInspections$=this.store.select(te),this.store.select(j.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,G.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._vehicleInspectionsService.getVehicleInspections(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,A.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteVehicleInspection(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la inspecci\xf3n: ${t.vehicle.registrationNumber}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._vehicleInspectionsService.removeVehicleInspection(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeVehicleInspection.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}trackByFn(t,r){return r.id||t}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(se),e.Y36(e.sBO),e.Y36(S.uw),e.Y36(w.R),e.Y36(C.ux),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-vehicle-inspections"]],viewQuery:function(t,r){if(1&t&&(e.Gf(O.NW,5),e.Gf(Z.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(r._paginator=i.first),e.iGM(i=e.CRH())&&(r._sort=i.first)}},decls:32,vars:12,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-auto"],[4,"ngIf"],["noVehicles",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","inspections-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","inspections-grid","md:px-8"],[1,"hidden","sm:block","font-mono"],[1,"truncate","font-mono"],[1,"text-center","font-mono"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Taller"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Inspecciones"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Inspecciones "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Agregar"),e.qZA()()()(),e.TgZ(26,"div",17)(27,"div",18),e.YNc(28,ao,2,2,"ng-container",19),e.ALo(29,"async"),e.YNc(30,co,2,0,"ng-template",null,20,e.W1O),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(1),e.Q6J("routerLink",e.DdM(11,lo)),e.xp6(1),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.Q6J("ngIf",e.lcZ(29,9,r.vehicleInspections$)))},dependencies:[f.mk,f.sg,f.O5,c.Fj,c.JJ,c.oH,y.rH,y.yS,X.PQ,W.lW,P.Hw,b.KE,b.qo,U.Nt,O.NW,Z.YE,f.Ov,f.uU],encapsulation:2,changeDetection:0}),o})();var Ce=d(8035),mo=d(77446),$=d(86856);const Ae=function(o){return{"cursor-not-allowed":o}};function uo(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",31),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createVehicleInspection())}),e._UZ(2,"mat-icon",32),e.TgZ(3,"span",33),e._uU(4,"Guardar"),e.qZA()(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.inspectionForm.invalid)("ngClass",e.VKq(3,Ae,t.inspectionForm.invalid)),e.xp6(1),e.Q6J("svgIcon","mat_solid:save")}}function ho(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",31),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.updateVehicleInspection())}),e._UZ(2,"mat-icon",32),e.TgZ(3,"span",33),e._uU(4,"Actualizar"),e.qZA()(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.inspectionForm.invalid)("ngClass",e.VKq(3,Ae,t.inspectionForm.invalid)),e.xp6(1),e.Q6J("svgIcon","mat_solid:refresh")}}function go(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",34),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectEmployee(s))}),e._uU(1),e.qZA()}if(2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.fullname," ")}}function fo(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",34),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectVehicle(s))}),e._uU(1),e.qZA()}if(2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.registrationNumber," ")}}let _o=(()=>{class o{constructor(t,r,i,s,a,l,p,g){this._activatedRoute=t,this._changeDetectorRef=r,this._formBuilder=i,this._fuseConfirmationService=s,this._vehicleInspectionsService=a,this._snackBar=l,this._router=p,this.store=g,this.maxDate=new Date,this.editMode=!1,this.employees=[],this.employeeSelected="",this.inspections$=(0,H.of)([]),this.searchEmployeeControl=new c.NI(""),this.searchInputControl=new c.NI,this.searchVehicleControl=new c.NI(""),this.selectedVehicleInspection=new ye,this.vehicleInspectionId=null,this.vehicles=[],this.vehicleSelected="",this._unsubscribeAll=new F.x}ngOnInit(){this.store.select(V).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.vehicles=t,this._changeDetectorRef.markForCheck()}),this.vehiclesFiltered$=this.searchVehicleControl.valueChanges.pipe((0,q.O)(""),(0,A.U)(t=>{const r="string"==typeof t?t:null==t?void 0:t.registrationNumber;return r?this._filterVehicles(r):this.vehicles.slice()})),this.store.select(Ce.ri).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.employees=t,this._changeDetectorRef.markForCheck()}),this.employeesFiltered$=this.searchEmployeeControl.valueChanges.pipe((0,q.O)(""),(0,A.U)(t=>{const r="string"==typeof t?t:null==t?void 0:t.name;return r?this._filterEmployees(r):this.employees.slice()})),this.inspectionForm=this._formBuilder.group({id:[""],employeeId:[null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],vehicleId:[null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],date:[null,[c.kI.required]],tank_cover_fuel:[!1],tank_cover_brake_fluid:[!1],tank_cover_coolant_liquid:[!1],tank_cover_windshield_water:[!1],tank_cover_oil:[!1],radiator_cover:[!1],oil_stick:[!1],wheel_trim:[!1],front_brushes:[!1],tail_brush:[!1],emblems:[!1],inside_mirror:[!1],outside_left_mirrors:[!1],outside_right_mirrors:[!1],cigar_lighter:[!1],clock:[!1],radio_player:[!1],speakers:[!1],bonnet_hydraulic_arm:[!1],tailgate_hydraulic_arm:[!1],rugs:[!1],horn:[!1],front_lights:[!1],tail_lights:[!1],third_stop:[!1],cat:[!1],wheel_wrench:[!1],antenna:[!1],air_conditioning:[!1],engine_grill:[!1],obs:[null,[c.kI.maxLength(1e4)]]}),this._activatedRoute.params.pipe((0,m.R)(this._unsubscribeAll)).subscribe(({vehicleInspectionId:t})=>{this.vehicleInspectionId=t,"new"!==this.vehicleInspectionId&&(this.editMode=!0,this.store.select(Ht).pipe((0,m.R)(this._unsubscribeAll)).subscribe(r=>{this.selectedVehicleInspection=r,this.inspectionForm.patchValue(r),this.searchEmployeeControl.patchValue(r.employee),this.searchVehicleControl.patchValue(r.vehicle)})),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createVehicleInspection(){const t=this.inspectionForm.getRawValue();delete t.id,"generic"===t.type&&(delete t.stock,delete t.price),this._fuseConfirmationService.open({title:"Crear inspecci\xf3n",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._vehicleInspectionsService.createVehicleInspection(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:s.createVehicleInspection.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/vehicles-inspections")}),this._changeDetectorRef.markForCheck()})}updateVehicleInspection(){const t=this.inspectionForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Inspecci\xf3n",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._vehicleInspectionsService.updateVehicleInspection(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:s.updateVehicleInspection.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/vehicles-inspections")}),this._changeDetectorRef.markForCheck()})}selectEmployee(t){this.inspectionForm.get("employeeId").setValue(t.id)}selectVehicle(t){this.inspectionForm.get("vehicleId").setValue(t.id)}trackByFn(t,r){return r.id||t}displayFnEmployee(t){return t&&t.fullname?t.fullname:""}displayFnVehicle(t){return t&&t.registrationNumber?t.registrationNumber:""}_filterEmployees(t){const r=t.toLowerCase();return this.employees.filter(i=>i.name.toLowerCase().includes(r))}_filterVehicles(t){const r=t.toLowerCase();return this.vehicles.filter(i=>i.registrationNumber.toLowerCase().includes(r))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y.gz),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(w.R),e.Y36(se),e.Y36(C.ux),e.Y36(y.F0),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-vehicle-inspection-details"]],decls:125,vars:63,consts:[["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","gap-5","p-3","overflow-y-auto","bg-cover","sm:absolute","sm:inset-0","dark:bg-transparent"],[1,"z-20","flex","flex-col","bg-transparent","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:px-5"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/workshop/vehicles-inspections",1,"ml-1","text-primary-500"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[4,"ngIf"],[1,"flex","flex-auto"],[1,"w-full",3,"formGroup","autocomplete"],[1,"flex","flex-col","gap-3","p-3","rounded-md","shadow-md","bg-card"],[1,"text-xl","font-semibold"],[1,"grid","grid-cols-1","gap-3","mt-5","sm:grid-cols-2","md:grid-cols-3"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[3,"displayWith"],["employeeAutocomplete","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],["vehicleAutocomplete","matAutocomplete"],["matInput","",3,"formControlName","max","matDatepicker","placeholder"],["matIconSuffix","",3,"for"],["picker",""],[1,"col-span-3","mt-3","text-xl","font-semibold"],[1,"flex","flex-col","gap-3"],[3,"formControlName"],[1,"w-full","sm:col-span-3"],["matInput","","matTextareaAutosize","","maxlength","10000",3,"formControlName","rows"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","ngClass","click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"value","click"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div")(6,"a",4),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Taller"),e.qZA()(),e.TgZ(12,"div",5),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",8),e._uU(15,"Inspecciones"),e.qZA()(),e.TgZ(16,"div",5),e._UZ(17,"mat-icon",6),e.TgZ(18,"a",7),e._uU(19),e.qZA()()()()(),e.TgZ(20,"div",9),e.YNc(21,uo,5,5,"ng-container",10),e.YNc(22,ho,5,5,"ng-container",10),e.qZA()(),e.TgZ(23,"div",11)(24,"form",12)(25,"div",13)(26,"div",14),e._uU(27," Informaci\xf3n de la inspecci\xf3n "),e.qZA(),e.TgZ(28,"div",15)(29,"mat-form-field",16)(30,"mat-label"),e._uU(31,"Empleado"),e.qZA(),e._UZ(32,"mat-icon",17)(33,"input",18),e.TgZ(34,"mat-autocomplete",19,20),e.YNc(36,go,2,2,"mat-option",21),e.ALo(37,"async"),e.qZA()(),e.TgZ(38,"mat-form-field",16)(39,"mat-label"),e._uU(40,"Veh\xedculo"),e.qZA(),e._UZ(41,"mat-icon",17)(42,"input",18),e.TgZ(43,"mat-autocomplete",19,22),e.YNc(45,fo,2,2,"mat-option",21),e.ALo(46,"async"),e.qZA()(),e.TgZ(47,"mat-form-field",16)(48,"mat-label"),e._uU(49,"Fecha de la inspecci\xf3n"),e.qZA(),e._UZ(50,"input",23)(51,"mat-datepicker-toggle",24)(52,"mat-datepicker",null,25),e.qZA(),e.TgZ(54,"div",26),e._uU(55," Inventario del veh\xedculo "),e.qZA(),e.TgZ(56,"div",27)(57,"mat-checkbox",28),e._uU(58,"Tapa dep. combustible"),e.qZA(),e.TgZ(59,"mat-checkbox",28),e._uU(60,"Tapa dep. L. Freno"),e.qZA(),e.TgZ(61,"mat-checkbox",28),e._uU(62,"Tapa dep. L. Refrig."),e.qZA(),e.TgZ(63,"mat-checkbox",28),e._uU(64,"Tapa dep. Parabrisas"),e.qZA(),e.TgZ(65,"mat-checkbox",28),e._uU(66,"Tapa dep. Aceite"),e.qZA(),e.TgZ(67,"mat-checkbox",28),e._uU(68,"Tapa radiador"),e.qZA(),e.TgZ(69,"mat-checkbox",28),e._uU(70,"Varilla aceite"),e.qZA(),e.TgZ(71,"mat-checkbox",28),e._uU(72,"Embellecedor ruedas"),e.qZA(),e.TgZ(73,"mat-checkbox",28),e._uU(74,"Escobillas delanteras"),e.qZA(),e.TgZ(75,"mat-checkbox",28),e._uU(76,"Escobilla trasera"),e.qZA()(),e.TgZ(77,"div",27)(78,"mat-checkbox",28),e._uU(79,"Emblemas"),e.qZA(),e.TgZ(80,"mat-checkbox",28),e._uU(81,"Retrovisor interior"),e.qZA(),e.TgZ(82,"mat-checkbox",28),e._uU(83,"Retrovisores Ext Izq."),e.qZA(),e.TgZ(84,"mat-checkbox",28),e._uU(85,"Retrovisores Ext Der."),e.qZA(),e.TgZ(86,"mat-checkbox",28),e._uU(87,"Encendedor cigarros"),e.qZA(),e.TgZ(88,"mat-checkbox",28),e._uU(89,"Reloj"),e.qZA(),e.TgZ(90,"mat-checkbox",28),e._uU(91,"Radio Reproductora"),e.qZA(),e.TgZ(92,"mat-checkbox",28),e._uU(93,"Parlantes"),e.qZA(),e.TgZ(94,"mat-checkbox",28),e._uU(95,"Hidr\xe1ulicos Capot"),e.qZA(),e.TgZ(96,"mat-checkbox",28),e._uU(97,"Hidr\xe1ulicos Port\xf3n Tras."),e.qZA()(),e.TgZ(98,"div",27)(99,"mat-checkbox",28),e._uU(100,"Alfombras"),e.qZA(),e.TgZ(101,"mat-checkbox",28),e._uU(102,"Claxon"),e.qZA(),e.TgZ(103,"mat-checkbox",28),e._uU(104,"Luces Del."),e.qZA(),e.TgZ(105,"mat-checkbox",28),e._uU(106,"Luces Tras."),e.qZA(),e.TgZ(107,"mat-checkbox",28),e._uU(108,"3er stop"),e.qZA(),e.TgZ(109,"mat-checkbox",28),e._uU(110,"Gato"),e.qZA(),e.TgZ(111,"mat-checkbox",28),e._uU(112,"Llave Rueda"),e.qZA(),e.TgZ(113,"mat-checkbox",28),e._uU(114,"Antena"),e.qZA(),e.TgZ(115,"mat-checkbox",28),e._uU(116,"Aire Acondicionado"),e.qZA(),e.TgZ(117,"mat-checkbox",28),e._uU(118,"Parrilla Motor"),e.qZA()(),e.TgZ(119,"div",26),e._uU(120," Detalles resultantes en la inspecci\xf3n "),e.qZA(),e.TgZ(121,"mat-form-field",29)(122,"mat-label"),e._uU(123,"Observaciones"),e.qZA(),e._UZ(124,"textarea",30),e.qZA()()()()()()),2&t){const i=e.MAs(35),s=e.MAs(44),a=e.MAs(53);e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(2),e.Oqu("new"===r.vehicleInspectionId?"Registrar Inspecci\xf3n":r.selectedVehicleInspection.vehicle.registrationNumber),e.xp6(2),e.Q6J("ngIf",!r.editMode),e.xp6(1),e.Q6J("ngIf",r.editMode),e.xp6(2),e.Q6J("formGroup",r.inspectionForm)("autocomplete","off"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchEmployeeControl)("matAutocomplete",i)("placeholder","Buscar empleado")("required",!0),e.xp6(1),e.Q6J("displayWith",r.displayFnEmployee),e.xp6(2),e.Q6J("ngForOf",e.lcZ(37,59,r.employeesFiltered$)),e.xp6(5),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchVehicleControl)("matAutocomplete",s)("placeholder","Buscar veh\xedculo")("required",!0),e.xp6(1),e.Q6J("displayWith",r.displayFnVehicle),e.xp6(2),e.Q6J("ngForOf",e.lcZ(46,61,r.vehiclesFiltered$)),e.xp6(5),e.Q6J("formControlName","date")("max",r.maxDate)("matDatepicker",a)("placeholder","MM/DD/YYYY"),e.xp6(1),e.Q6J("for",a),e.xp6(6),e.Q6J("formControlName","tank_cover_fuel"),e.xp6(2),e.Q6J("formControlName","tank_cover_brake_fluid"),e.xp6(2),e.Q6J("formControlName","tank_cover_coolant_liquid"),e.xp6(2),e.Q6J("formControlName","tank_cover_windshield_water"),e.xp6(2),e.Q6J("formControlName","tank_cover_oil"),e.xp6(2),e.Q6J("formControlName","radiator_cover"),e.xp6(2),e.Q6J("formControlName","oil_stick"),e.xp6(2),e.Q6J("formControlName","wheel_trim"),e.xp6(2),e.Q6J("formControlName","front_brushes"),e.xp6(2),e.Q6J("formControlName","tail_brush"),e.xp6(3),e.Q6J("formControlName","emblems"),e.xp6(2),e.Q6J("formControlName","inside_mirror"),e.xp6(2),e.Q6J("formControlName","outside_left_mirrors"),e.xp6(2),e.Q6J("formControlName","outside_right_mirrors"),e.xp6(2),e.Q6J("formControlName","cigar_lighter"),e.xp6(2),e.Q6J("formControlName","clock"),e.xp6(2),e.Q6J("formControlName","radio_player"),e.xp6(2),e.Q6J("formControlName","speakers"),e.xp6(2),e.Q6J("formControlName","bonnet_hydraulic_arm"),e.xp6(2),e.Q6J("formControlName","tailgate_hydraulic_arm"),e.xp6(3),e.Q6J("formControlName","rugs"),e.xp6(2),e.Q6J("formControlName","horn"),e.xp6(2),e.Q6J("formControlName","front_lights"),e.xp6(2),e.Q6J("formControlName","tail_lights"),e.xp6(2),e.Q6J("formControlName","third_stop"),e.xp6(2),e.Q6J("formControlName","cat"),e.xp6(2),e.Q6J("formControlName","wheel_wrench"),e.xp6(2),e.Q6J("formControlName","antenna"),e.xp6(2),e.Q6J("formControlName","air_conditioning"),e.xp6(2),e.Q6J("formControlName","engine_grill"),e.xp6(7),e.Q6J("formControlName","obs")("rows",2)}},dependencies:[f.mk,f.sg,f.O5,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.nD,c.oH,c.sg,c.u,y.yS,X.PQ,L.XC,L.ZL,ee.ey,W.lW,mo.oG,$.Mq,$.hl,$.nW,P.Hw,b.KE,b.hX,b.qo,U.Nt,f.Ov],encapsulation:2,changeDetection:0}),o})();var D=d(15439),Ze=d(58493),E=d(54641),Se=d(54787);const Te=o=>o.workshopOrders,vo=(0,x.P1)(Te,o=>o.workshopOrder),B=(0,x.P1)(Te,o=>o.workshopOrders);var Fe=d(22594),we=d(78372),xo=d(87136),bo=d(96008),ko=d(65359),N=d(91270);const Io=h.Ps`
    mutation CreateWorkshopOrder($createWorkshopOrderInput: CreateWorkshopOrderInput!) {
        createWorkshopOrder(createWorkshopOrderInput: $createWorkshopOrderInput) {

            ok
            message

            workshopOrder {
                id
                status
                userId
                bossId
                locationId
                employeeId
                customerId
                serviceTypesId
                vehicleId
                inspectionId
                workshopId
                no
                products{
                    productId
                    quantity
                }
                comments
                obs
                estimatedTime
                initDate
                closeDate
            }

        }
    }
`,yo=h.Ps`
    mutation UpdateWorkshopOrder($updateWorkshopOrderInput: UpdateWorkshopOrderInput!) {
        updateWorkshopOrder(updateWorkshopOrderInput: $updateWorkshopOrderInput) {
            ok
            message

            workshopOrder {
                id
                status
                userId
                bossId
                locationId
                employeeId
                customerId
                serviceTypesId
                vehicleId
                inspectionId
                workshopId
                no
                products {
                    productId
                    quantity
                }
                comments
                obs
                estimatedTime
                initDate
                closeDate
            }
        }
    }
`,Co=h.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateWorkshopOrderStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,Ao=h.Ps`
    mutation CloseWorkshopOrder($closeWorkshopOrderInput: CloseWorkshopOrderInput!) {
        closeWorkshopOrder(closeWorkshopOrderInput: $closeWorkshopOrderInput) {
            ok
            message

            workshopOrder {
                id
                userId
                bossId
                status
                locationId

                employeeId
                employee {
                    fullname
                }

                customerId
                customer {
                    name
                    fullname
                    phoneNumber {
                        stateCode
                        phoneNumber
                    }
                }

                serviceTypesId
                serviceTypes {
                    name
                }

                vehicleId
                vehicle {
                    registrationNumber
                    brand {
                        name
                    }
                    fuel {
                        name
                    }
                }

                inspectionId
                inspection {
                    no
                    tank_cover_fuel
                    tank_cover_brake_fluid
                    tank_cover_coolant_liquid
                    tank_cover_windshield_water
                    tank_cover_Oil
                    radiator_cover
                    oil_stick
                    wheel_trim
                    front_brushes
                    tail_brush
                    emblems
                    inside_mirror
                    outside_left_mirrors
                    outside_right_mirrors
                    cigar_lighter
                    clock
                    radio_player
                    speakers
                    bonnet_hydraulic_arm
                    tailgate_hydraulic_arm
                    rugs
                    horn
                    front_lights
                    tail_lights
                    third_stop
                    cat
                    wheel_wrench
                    antenna
                    air_conditioning
                    engine_grill
                    obs
                }

                workshopId
                workshop {
                    name
                }

                products {
                    productId
                    quantity
                }
                productsInOrder {
                    id
                    name
                    uom {
                        abbr
                    }
                    price
                }


                services {
                    serviceId
                    quantity
                }
                servicesInOrder {
                    id
                    description
                    maxPrice
                    minPrice
                }

                no
                status
            }
        }
    }
`,Zo=h.Ps`
    mutation RemoveWorkshopOrder($removeWorkshopOrderId: String!) {
        removeWorkshopOrder(id: $removeWorkshopOrderId) {
            ok
            message
        }
    }
`,So=h.Ps`
    query FindAllWorkshopOrders($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllWorkshopOrders(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            workshopOrders {
                id
                userId
                bossId
                status
                locationId

                employeeId
                employee {
                    fullname
                }

                customerId
                customer {
                    name
                    fullname
                    phoneNumber {
                        stateCode
                        phoneNumber
                    }
                }

                serviceTypesId
                serviceTypes {
                    name
                }

                vehicleId
                vehicle {
                    registrationNumber
                    brand {
                        name
                    }
                    fuel {
                        name
                    }
                }

                inspectionId
                inspection {
                    no
                    tank_cover_fuel
                    tank_cover_brake_fluid
                    tank_cover_coolant_liquid
                    tank_cover_windshield_water
                    tank_cover_Oil
                    radiator_cover
                    oil_stick
                    wheel_trim
                    front_brushes
                    tail_brush
                    emblems
                    inside_mirror
                    outside_left_mirrors
                    outside_right_mirrors
                    cigar_lighter
                    clock
                    radio_player
                    speakers
                    bonnet_hydraulic_arm
                    tailgate_hydraulic_arm
                    rugs
                    horn
                    front_lights
                    tail_lights
                    third_stop
                    cat
                    wheel_wrench
                    antenna
                    air_conditioning
                    engine_grill
                    obs
                }

                workshopId
                workshop {
                    name
                }

                products {
                    productId
                    quantity
                }
                productsInOrder {
                    id
                    name
                    uom {
                        abbr
                    }
                    price
                }

                services {
                    serviceId
                    quantity
                }
                servicesInOrder {
                    id
                    description
                    maxPrice
                    minPrice
                }

                no
                status
            }
        }
    }
`,To=h.Ps`
    query FindWorkshopOrderById($findWorkshopOrderByIdId: String!) {
        findWorkshopOrderById(id: $findWorkshopOrderByIdId) {
            ok
            message

            workshopOrder {
                id
                userId
                bossId
                status
                locationId
                employeeId
                customerId

                serviceTypesId
                serviceTypes {
                    name
                }

                vehicleId
                vehicle {
                    id
                    customerId
                }

                inspectionId
                inspection {
                    id
                    no
                }

                workshopId
                no

                products {
                    productId
                    quantity
                }
                productsInOrder {
                    id
                    name
                    uom {
                        abbr
                    }
                    price
                }

                comments
                obs
                estimatedTime
                initDate
                closeDate
            }
        }
    }
`;let re=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createWorkshopOrder(t){return this.store.select(B).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:Io,variables:{createWorkshopOrderInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a.push(s.createWorkshopOrder.workshopOrder),this.store.dispatch((0,N.tM)({workshopOrders:a}))}))))}getWorkshopOrders(t=1,r=20,i="code",s="asc",a=""){return this._apollo.query({query:So,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,_.b)(({errors:l,data:p})=>{if(l){let g="";l.forEach(T=>g+=`\n ${T.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,J.Jr)({pagination:p.findAllWorkshopOrders.pagination})),this.store.dispatch((0,N.tM)({workshopOrders:p.findAllWorkshopOrders.workshopOrders}))}))}getWorkshopOrderById(t){return this._apollo.query({query:To,variables:{findWorkshopOrderByIdId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:r,data:i})=>{if(r){let s="";r.forEach(a=>s+=`\n ${a.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,N.Xh)({workshopOrder:i.findWorkshopOrderById.workshopOrder}))}))}updateWorkshopOrder(t){return this.store.select(B).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:yo,variables:{updateWorkshopOrderInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let p="";i.forEach(g=>p+=`\n ${g.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a[r.findIndex(p=>p.id===t.id)]=s.updateWorkshopOrder.workshopOrder,this.store.dispatch((0,N.tM)({workshopOrders:a}))}))))}updateWorkshopOrderStatus(t){return this.store.select(B).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:Co,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,I.cloneDeep)(r);s[r.findIndex(l=>l.id===t.id)].active=t.active,this.store.dispatch((0,N.tM)({workshopOrders:s}))}))))}removeWorkshopOrder(t){return this.store.select(B).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:Zo,variables:{removeWorkshopOrderId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,I.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,N.tM)({workshopOrders:s}))}))))}closeWorkshopOrder(t){return this.store.select(B).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:Ao,variables:{closeWorkshopOrderInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let p="";i.forEach(g=>p+=`\n ${g.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a[r.findIndex(p=>p.id===t.workshopOrderId)]=s.closeWorkshopOrder.workshopOrder,this.store.dispatch((0,N.tM)({workshopOrders:a}))}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h._M),e.LFG(C.ux),e.LFG(x.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Fo=d(6062),ce=d(74107);function wo(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",9),e._uU(2),e.qZA(),e.BQk()),2&o){const t=n.$implicit;e.xp6(1),e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function Wo(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Debe seleccionar un m\xe9todo de pago. "),e.qZA())}function Eo(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",9),e._uU(2),e.qZA(),e.BQk()),2&o){const t=n.$implicit;e.xp6(1),e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function Oo(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Debe seleccionar un tipo de operaci\xf3n. "),e.qZA())}function qo(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",9),e._uU(2),e.qZA(),e.BQk()),2&o){const t=n.$implicit;e.xp6(1),e.Q6J("value",t.id),e.xp6(1),e.AsE(" ",t.name," ",t.value," ")}}function Uo(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Debe seleccionar un tipo de cambio. "),e.qZA())}function Do(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",9),e._uU(2),e.qZA(),e.BQk()),2&o){const t=n.$implicit;e.xp6(1),e.Q6J("value",t.value),e.xp6(1),e.hij("x",t.value,"")}}function Po(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Debe seleccionar un tipo de cambio. "),e.qZA())}function No(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," 'La suma del valor de los porcentajes en ambas monedas debe ser 1' "),e.qZA())}function Ro(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," 'La suma del valor de los porcentajes en ambas monedas debe ser 1' "),e.qZA())}let Qo=(()=>{class o{constructor(t,r,i,s,a,l){this.data=t,this._changeDetectorRef=r,this._formBuilder=i,this._dialogRef=s,this._snackBar=a,this.store=l,this.multipliers=[],this.operationTypes=[],this.paymentMethods=[],this.rates=[],this._unsubscribeAll=new F.x,this._fuseConfirmationService=(0,e.f3M)(w.R),this._workshopOrdersService=(0,e.f3M)(re),this.workshopOrder=t.workshopOrder}ngOnInit(){this.closeWorkshopOrderDataForm=this._formBuilder.group({workshopOrderId:new c.NI(this.workshopOrder.id,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),paymentMethodId:new c.NI(null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),operationTypeId:new c.NI(null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),rateId:new c.NI(null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),multiplier:new c.NI(1,[c.kI.required,c.kI.min(1)]),currenciesPercents:this._formBuilder.group({cup:new c.NI(1,[c.kI.required,c.kI.min(0),c.kI.max(1)]),usd:new c.NI(0,[c.kI.required,c.kI.min(0),c.kI.max(1)])},{validators:this.validatePercentages("cup","usd")})}),this.store.select(Fo.Af).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.multipliers=t,this._changeDetectorRef.markForCheck()}),this.store.select(xo.pU).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.operationTypes=t,this._changeDetectorRef.markForCheck()}),this.store.select(bo.VS).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.paymentMethods=t,this._changeDetectorRef.markForCheck()}),this.store.select(ko.I).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.rates=t,this._changeDetectorRef.markForCheck()}),this.closeWorkshopOrderDataForm.get("currenciesPercents.cup").valueChanges.pipe((0,we.b)(700)).subscribe(t=>{this.closeWorkshopOrderDataForm.get("currenciesPercents.usd").setValue(1-t),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}closeWorkshopOrder(){const t=this.closeWorkshopOrderDataForm.getRawValue();this._fuseConfirmationService.open({title:"Cerrar orden de trabajo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?\nSe crear\xe1 una factura inmediatamente.",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._workshopOrdersService.closeWorkshopOrder(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.closeWorkshopOrder.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}validatePercentages(t,r){return i=>{const s=i.get(t),a=i.get(r);if(!(s&&t&&a&&r&&(s.hasError("validPercentages")&&(delete s.errors.controlCup,s.updateValueAndValidity()),a.hasError("validPercentages")&&(delete a.errors.controlUsd,a.updateValueAndValidity()),s.value+a.value!==1)))return null;const l={validPercentages:"La suma del valor de los porcentajes en ambas monedas debe ser 1"};return s.setErrors(l),a.setErrors(l),l}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(S.WI),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(S.so),e.Y36(C.ux),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-order-close-dialog"]],decls:48,vars:27,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"w-full","p-8"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-5","w-full",3,"formGroup","autocomplete"],[1,"fuse-mat-dense"],[3,"formControlName"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-5","sm:col-span-2",3,"formGroupName"],["matInput","","type","number","required","","min","0","max","1","step",".1",3,"formControlName","placeholder"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3)(5,"form",4)(6,"mat-form-field",5)(7,"mat-label"),e._uU(8,"M\xe9todo de pago"),e.qZA(),e.TgZ(9,"mat-select",6),e.YNc(10,wo,3,2,"ng-container",7),e.qZA(),e.YNc(11,Wo,2,0,"mat-error",8),e.qZA(),e.TgZ(12,"mat-form-field",5)(13,"mat-label"),e._uU(14,"Tipo de operaci\xf3n"),e.qZA(),e.TgZ(15,"mat-select",6),e.YNc(16,Eo,3,2,"ng-container",7),e.qZA(),e.YNc(17,Oo,2,0,"mat-error",8),e.qZA(),e.TgZ(18,"mat-form-field",5)(19,"mat-label"),e._uU(20,"Tipo de cambio"),e.qZA(),e.TgZ(21,"mat-select",6),e.YNc(22,qo,3,3,"ng-container",7),e.qZA(),e.YNc(23,Uo,2,0,"mat-error",8),e.qZA(),e.TgZ(24,"mat-form-field",5)(25,"mat-label"),e._uU(26,"Multiplicador"),e.qZA(),e.TgZ(27,"mat-select",6)(28,"mat-option",9),e._uU(29,"x1"),e.qZA(),e.YNc(30,Do,3,2,"ng-container",7),e.qZA(),e.YNc(31,Po,2,0,"mat-error",8),e.qZA(),e.TgZ(32,"form",10)(33,"mat-form-field",5)(34,"mat-label"),e._uU(35,"Por ciento a facturar en CUP"),e.qZA(),e._UZ(36,"input",11),e.YNc(37,No,2,0,"mat-error",8),e.qZA(),e.TgZ(38,"mat-form-field",5)(39,"mat-label"),e._uU(40,"Por ciento a facturar en USD"),e.qZA(),e._UZ(41,"input",11),e.YNc(42,Ro,2,0,"mat-error",8),e.qZA()()()(),e.TgZ(43,"div",12)(44,"button",13),e._uU(45," Cancelar "),e.qZA(),e.TgZ(46,"button",14),e.NdJ("click",function(){return r.closeWorkshopOrder()}),e._uU(47," Agregar "),e.qZA()()()),2&t&&(e.xp6(3),e.hij(" Cerrar orden de trabajo ",r.workshopOrder.no," "),e.xp6(2),e.Q6J("formGroup",r.closeWorkshopOrderDataForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","paymentMethodId"),e.xp6(1),e.Q6J("ngForOf",r.paymentMethods),e.xp6(1),e.Q6J("ngIf",r.closeWorkshopOrderDataForm.get("paymentMethodId").hasError("required")),e.xp6(4),e.Q6J("formControlName","operationTypeId"),e.xp6(1),e.Q6J("ngForOf",r.operationTypes),e.xp6(1),e.Q6J("ngIf",r.closeWorkshopOrderDataForm.get("operationTypeId").hasError("required")),e.xp6(4),e.Q6J("formControlName","rateId"),e.xp6(1),e.Q6J("ngForOf",r.rates),e.xp6(1),e.Q6J("ngIf",r.closeWorkshopOrderDataForm.get("rateId").hasError("required")),e.xp6(4),e.Q6J("formControlName","multiplier"),e.xp6(1),e.Q6J("value",1),e.xp6(2),e.Q6J("ngForOf",r.multipliers),e.xp6(1),e.Q6J("ngIf",r.closeWorkshopOrderDataForm.get("multiplier").hasError("required")),e.xp6(1),e.Q6J("formGroupName","currenciesPercents"),e.xp6(4),e.Q6J("formControlName","cup")("placeholder","Ejemplo: 0.5"),e.xp6(1),e.Q6J("ngIf",r.closeWorkshopOrderDataForm.get("currenciesPercents.cup").hasError("validPercentages")),e.xp6(4),e.Q6J("formControlName","usd")("placeholder","Ejemplo: 0.5"),e.xp6(1),e.Q6J("ngIf",r.closeWorkshopOrderDataForm.get("currenciesPercents.usd").hasError("validPercentages")),e.xp6(2),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("color","primary")("disabled",r.closeWorkshopOrderDataForm.invalid)("matDialogClose","confirmed"))},dependencies:[f.sg,f.O5,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.Q7,c.qQ,c.Fd,c.F,c.sg,c.u,c.x0,ee.ey,W.lW,S.ZT,b.TO,b.KE,b.hX,U.Nt,ce.gD],encapsulation:2}),o})();class We{}class Jo{constructor(n,t){this.productId=n,this.quantity=t}}const Vo=function(o){return[o]};function Lo(o,n){if(1&o&&(e.TgZ(0,"button",33),e._UZ(1,"mat-icon",30),e.qZA()),2&o){const t=e.oxw().$implicit;e.Q6J("routerLink",e.VKq(2,Vo,t.id)),e.xp6(1),e.Q6J("svgIcon","mat_solid:edit")}}function $o(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.deleteWorkshopOrder(i))}),e._UZ(1,"mat-icon",30),e.qZA()}2&o&&(e.xp6(1),e.Q6J("svgIcon","mat_solid:delete"))}function Bo(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.closeWorkshopOrderDialog(i))}),e._UZ(1,"mat-icon",30),e.qZA()}2&o&&(e.xp6(1),e.Q6J("svgIcon","mat_solid:beenhere"))}const zo=function(o,n){return{"bg-yellow-600":o,"bg-emerald-600":n}};function Mo(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",25)(2,"div",26),e._uU(3),e.qZA(),e.TgZ(4,"div",22),e._uU(5),e.qZA(),e.TgZ(6,"div",22),e._uU(7),e.qZA(),e.TgZ(8,"div",22),e._uU(9),e.qZA(),e.TgZ(10,"div",22),e._uU(11),e.qZA(),e.TgZ(12,"div",22),e._uU(13),e.qZA(),e.TgZ(14,"div",22)(15,"span",27),e._uU(16),e.qZA()(),e.TgZ(17,"div",28)(18,"button",29),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.printWorkshopOrder(s))}),e._UZ(19,"mat-icon",30),e.qZA(),e.YNc(20,Lo,2,4,"button",31),e.YNc(21,$o,2,1,"button",32),e.YNc(22,Bo,2,1,"button",32),e.qZA()(),e.BQk()}if(2&o){const t=n.$implicit;e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.vehicle.registrationNumber," "),e.xp6(2),e.hij(" ",t.customer.fullname," "),e.xp6(2),e.hij(" ",t.employee.fullname," "),e.xp6(2),e.hij(" ",t.inspection.no," "),e.xp6(2),e.hij(" ",t.workshop.name," "),e.xp6(2),e.Q6J("ngClass",e.WLB(12,zo,"open"===t.status,"close"===t.status)),e.xp6(1),e.hij(" ","open"===t.status?"ABIERTA":"CERRADA"," "),e.xp6(3),e.Q6J("svgIcon","mat_solid:print"),e.xp6(1),e.Q6J("ngIf","open"===t.status),e.xp6(1),e.Q6J("ngIf","open"===t.status),e.xp6(1),e.Q6J("ngIf","open"===t.status)}}const Yo=function(o){return{"pointer-events-none":o}},Ho=function(){return[5,10,25,100]};function Go(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",19)(2,"div",20)(3,"div",21),e._uU(4," NO "),e.qZA(),e.TgZ(5,"div",22),e._uU(6," Veh\xedculo "),e.qZA(),e.TgZ(7,"div",22),e._uU(8," Cliente "),e.qZA(),e.TgZ(9,"div",22),e._uU(10," Empleado "),e.qZA(),e.TgZ(11,"div",22),e._uU(12," Inspecci\xf3n "),e.qZA(),e.TgZ(13,"div",22),e._uU(14," Taller "),e.qZA(),e.TgZ(15,"div",22),e._uU(16," Estado "),e.qZA(),e.TgZ(17,"div",22),e._uU(18," Acciones "),e.qZA()(),e.YNc(19,Mo,23,15,"ng-container",23),e._UZ(20,"mat-paginator",24),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(16),e.Q6J("ngForOf",t.workshopOrders)("ngForTrackBy",t.trackByFn),e.xp6(1),e.Q6J("ngClass",e.VKq(9,Yo,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(11,Ho))("showFirstLastButtons",!0)}}function jo(o,n){1&o&&(e.TgZ(0,"div",34),e._uU(1," \xa1No hay \xf3rdenes de trabajo creados para el negocio!"),e.qZA())}const Ko=function(){return["new"]};E.vfs=Ze.I.vfs;let Xo=(()=>{class o{constructor(t,r,i,s){this._changeDetectorRef=t,this._dialog=r,this._snackBar=i,this.store=s,this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.searchInputControl=new c.NI,this.selectedSlide=null,this.user=null,this.workshopOrder=new We,this.workshopOrders=[],this._unsubscribeAll=new F.x,this._workshopOrdersService=(0,e.f3M)(re),this._fuseConfirmationService=(0,e.f3M)(w.R)}ngOnInit(){this.store.select(Se.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(Fe.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.workshopOrders=t,this._changeDetectorRef.markForCheck()}),this.store.select(j.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"code",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,G.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._workshopOrdersService.getWorkshopOrders(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,A.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteWorkshopOrder(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la orden de trabajo: ${t.no}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._workshopOrdersService.removeWorkshopOrder(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeWorkshopOrder.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}generateOsPDF(t="open"){const r={content:[{table:{widths:["*","*","*"],headerRows:1,body:[[{text:"",border:[!0,!0,!1,!0]},{alignment:"center",text:"MODELO DE ORDEN DE TRABAJO",bold:!0,border:[!1,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{text:"No OT:",border:[!1,!0,!0,!0],bold:!0,fontFeatures:["c2sc","smcp"]}],[{alignment:"left",text:"DATOS DEL CLIENTE",bold:!0,border:[!0,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"DATOS DEL VEH\xcdCULO",bold:!0,border:[!1,!0,!0,!0],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{alignment:"left",text:"NOMBRE DE LA EMPRESA",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"MARCA",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"center",text:"SERVICIOS",bold:!0,fontFeatures:["c2sc","smcp"]}],[{rowSpan:2,text:""},{alignment:"left",text:"MODELO",bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"MEC\xc1NICA",bold:!0,fontFeatures:["c2sc","smcp"]}],[{},{alignment:"left",text:"MATR\xcdCULA",bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"CHAPISTER\xcdA",bold:!0,fontFeatures:["c2sc","smcp"]}],[{alignment:"left",text:"NOMBRE DEL CLIENTE",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"COLOR",bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"PINTURA",bold:!0,fontFeatures:["c2sc","smcp"]}],[{rowSpan:2,text:""},{alignment:"left",text:"BATER\xcdA",bold:!0,border:[!1,!1,!0,!1],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{},{alignment:"left",text:"REPRODUCTORA",bold:!0,border:[!1,!1,!0,!1],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{alignment:"left",text:"TEL\xc9FONO",bold:!0,fontFeatures:["c2sc","smcp"]},{alignment:"left",text:"COMBUSTIBLE",bold:!0,border:[!1,!1,!0,!0],colSpan:2,fontFeatures:["c2sc","smcp"]},{}],[{alignment:"center",text:"INVENTARIO DEL VEH\xcdCULO",bold:!0,colSpan:3,fontFeatures:["c2sc","smcp"]},{},{}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:"Tapa dep. combustible",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Emblemas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Alfombras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. L. Freno",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Retrovisor interior",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Claxon",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. L. Refrig.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Retrovisores Ext Izq.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Luces Del.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. Parabrisas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Retrovisores Ext Der.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Luces Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa dep. Aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Encendedor cigarros",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"3er stop",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Tapa radiador",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Reloj",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Gato",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Varilla aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Radio Reproductora",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Llave Rueda",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Embellecedor ruedas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Parlantes",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Antena",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Escobillas delanteras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Hidr\xe1ulicos Capot",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Aire Acondicionado",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Escobilla trasera",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Hidr\xe1ulicos Port\xf3n Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:"Parrilla Motor",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"Solicitud del cliente",colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{alignment:"center",text:"MATERIALES",bold:!0,colSpan:6,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""},{text:" ",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:""}],[{text:"observaciones",colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:"elaborado",colSpan:4,border:[!0,!1,!1,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{},{},{},{text:"aprobado",colSpan:2,border:[!1,!1,!0,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{}]]}}],footer:(i,s)=>({table:{widths:["*","*"],body:[[{text:"MODELO DE ORDEN DE TRABAJO",bold:!0,fontSize:8},{text:`P\xe1gina ${i.toString()}/${s} - Fecha de impresi\xf3n ${D().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",info:{title:"MODELO DE ORDEN DE TRABAJO",author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:D().toDate(),modDate:D().toDate(),producer:this.merchant.name}};switch(t){case t="download":E.createPdf(r).download();break;case t="open":E.createPdf(r).open();break;case t="print":E.createPdf(r).print()}}printWorkshopOrder(t,r="open"){const i={content:[{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{colSpan:2,text:"",border:[!0,!0,!1,!0]},{text:""},{colSpan:2,alignment:"center",text:"MODELO DE ORDEN DE TRABAJO",bold:!0,border:[!1,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:2,color:"red",text:`No OT: ${t.no}`,border:[!1,!0,!0,!0],bold:!0,fontFeatures:["c2sc","smcp"]},{text:""}],[{colSpan:2,alignment:"left",text:"DATOS DEL CLIENTE",bold:!0,border:[!0,!0,!1,!0],fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:4,alignment:"left",text:"DATOS DEL VEH\xcdCULO",bold:!0,border:[!1,!0,!0,!0],fontFeatures:["c2sc","smcp"]},{text:""},{text:"",colSpan:2},{text:""}],[{colSpan:2,alignment:"left",text:"NOMBRE DE LA EMPRESA",bold:!0,fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:2,color:"red",alignment:"left",text:`MARCA: ${t.vehicle.brand.name}`,bold:!0,fontFeatures:["c2sc","smcp"],border:[!0,!0,!0,!1]},{text:""},{colSpan:2,alignment:"center",text:"SERVICIOS",bold:!0,fontFeatures:["c2sc","smcp"]},{text:""}],[{colSpan:2,color:"red",rowSpan:2,text:`${t.customer.name}`},{text:""},{colSpan:2,color:"red",alignment:"left",text:`MODELO: ${t.vehicle.model}`,bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{text:""},{alignment:"left",text:"MEC\xc1NICA",bold:!0,fontFeatures:["c2sc","smcp"]},{color:"red",alignment:"center",text:t.serviceTypes.findIndex(s=>"mec\xe1nica"===s.name.trim().toLocaleLowerCase())>-1?"X":""}],[{text:"",colSpan:2},{text:""},{colSpan:2,color:"red",alignment:"left",text:`MATR\xcdCULA: ${t.vehicle.registrationNumber}`,bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{text:""},{alignment:"left",text:"CHAPISTER\xcdA",bold:!0,fontFeatures:["c2sc","smcp"]},{color:"red",alignment:"center",text:t.serviceTypes.findIndex(s=>"chapister\xeda"===s.name.trim().toLocaleLowerCase())>-1?"X":""}],[{colSpan:2,alignment:"left",text:"NOMBRE DEL CLIENTE",bold:!0,fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:2,color:"red",alignment:"left",text:`COLOR: ${t.vehicle.color}`,bold:!0,border:[!1,!1,!1,!1],fontFeatures:["c2sc","smcp"]},{text:""},{alignment:"left",text:"PINTURA",bold:!0,fontFeatures:["c2sc","smcp"]},{color:"red",alignment:"center",text:t.serviceTypes.findIndex(s=>"pintura"===s.name.trim().toLocaleLowerCase())>-1?"X":""}],[{colSpan:2,color:"red",rowSpan:2,text:`${t.customer.name}`},{text:""},{colSpan:4,color:"red",alignment:"left",text:`BATER\xcdA: ${t.vehicle.battery}`,bold:!0,border:[!1,!1,!0,!1],fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""}],[{},{text:""},{color:"red",alignment:"left",text:`REPRODUCTORA: ${t.vehicle.carPlayer}`,bold:!0,border:[!1,!1,!0,!1],colSpan:4,fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""}],[{colSpan:2,color:"red",alignment:"left",text:`TEL\xc9FONO: ${t.customer.phoneNumber.phoneNumber}`,bold:!0,fontFeatures:["c2sc","smcp"]},{text:""},{colSpan:4,color:"red",alignment:"left",text:`COMBUSTIBLE: ${t.vehicle.fuel.name}`,bold:!0,border:[!1,!1,!0,!0],fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""}],[{alignment:"center",text:"INVENTARIO DEL VEH\xcdCULO",bold:!0,colSpan:5,fontFeatures:["c2sc","smcp"]},{text:""},{},{text:""},{},{text:""}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"elemento",bold:!0,fontFeatures:["c2sc","smcp"]},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:"Tapa dep. combustible",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_fuel?"X":"",alignment:"center"},{text:"Emblemas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.emblems?"X":"",alignment:"center"},{text:"Alfombras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.rugs?"X":"",alignment:"center"}],[{text:"Tapa dep. L. Freno",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_brake_fluid?"X":"",alignment:"center"},{text:"Retrovisor interior",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.inside_mirror?"X":"",alignment:"center"},{text:"Claxon",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.horn?"X":"",alignment:"center"}],[{text:"Tapa dep. L. Refrig.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_coolant_liquid?"X":"",alignment:"center"},{text:"Retrovisores Ext Izq.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.outside_left_mirrors?"X":"",alignment:"center"},{text:"Luces Del.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.front_lights?"X":"",alignment:"center"}],[{text:"Tapa dep. Parabrisas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_windshield_water?"X":"",alignment:"center"},{text:"Retrovisores Ext Der.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.outside_right_mirrors?"X":"",alignment:"center"},{text:"Luces Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tail_lights?"X":"",alignment:"center"}],[{text:"Tapa dep. Aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tank_cover_oil?"X":"",alignment:"center"},{text:"Encendedor cigarros",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.cigar_lighter?"X":"",alignment:"center"},{text:"3er stop",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.third_stop?"X":"",alignment:"center"}],[{text:"Tapa radiador",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.radiator_cover?"X":"",alignment:"center"},{text:"Reloj",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.clock?"X":"",alignment:"center"},{text:"Gato",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.cat?"X":"",alignment:"center"}],[{text:"Varilla aceite",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.oil_stick?"X":"",alignment:"center"},{text:"Radio Reproductora",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.radio_player?"X":"",alignment:"center"},{text:"Llave Rueda",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.wheel_wrench?"X":"",alignment:"center"}],[{text:"Embellecedor ruedas",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.wheel_trim?"X":"",alignment:"center"},{text:"Parlantes",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.speakers?"X":"",alignment:"center"},{text:"Antena",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.antenna?"X":"",alignment:"center"}],[{text:"Escobillas delanteras",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tail_brush?"X":"",alignment:"center"},{text:"Hidr\xe1ulicos Capot",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.bonnet_hydraulic_arm?"X":"",alignment:"center"},{text:"Aire Acondicionado",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.air_conditioning?"X":"",alignment:"center"}],[{text:"Escobilla trasera",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tail_brush?"X":"",alignment:"center"},{text:"Hidr\xe1ulicos Port\xf3n Tras.",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.tailgate_hydraulic_arm?"X":"",alignment:"center"},{text:"Parrilla Motor",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{color:"red",text:t.inspection.engine_grill?"X":"",alignment:"center"}],[{color:"red",text:`Solicitud del cliente: ${t.comments}`,colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}]]}},{table:{widths:["*",30,"*",30,"*",30],headerRows:1,body:[[{alignment:"center",text:"MATERIALES",bold:!0,colSpan:6,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{colSpan:5,text:"descripci\xf3n",bold:!0,fontFeatures:["c2sc","smcp"]},{},{},{},{},{text:"cant",bold:!0,fontFeatures:["c2sc","smcp"]}],...t.productsInOrder.map(s=>[{color:"red",colSpan:5,text:s.name,bold:!0,fontFeatures:["c2sc","smcp"]},{},{},{},{},{color:"red",text:this._getProductQuantity(t.products,s.id),alignment:"center",bold:!0,fontFeatures:["c2sc","smcp"]}]),[{alignment:"center",text:"SERVICIOS",bold:!0,colSpan:6,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],...t.servicesInOrder.map(s=>[{color:"red",colSpan:6,text:s.description,bold:!0,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}]),[{color:"red",text:`observaciones: ${t.inspection.obs}`,colSpan:6,bold:!0,border:[!0,!0,!0,!1],fontSize:10,fontFeatures:["c2sc","smcp"]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{text:" ",colSpan:6,border:[!0,!1,!0,!1]},{},{},{},{},{}],[{color:"red",text:`elaborado: ${t.employee.fullname}`,colSpan:4,border:[!0,!1,!1,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{},{},{},{text:"aprobado",colSpan:2,border:[!1,!1,!0,!0],bold:!0,fontSize:12,fontFeatures:["c2sc","smcp"]},{}]]}}],footer:(s,a)=>({table:{widths:["*","*"],body:[[{text:"MODELO DE ORDEN DE TRABAJO",bold:!0,fontSize:8},{text:`P\xe1gina ${s.toString()}/${a} - Fecha de impresi\xf3n ${D().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",info:{title:"MODELO DE ORDEN DE TRABAJO",author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:D().toDate(),modDate:D().toDate(),producer:this.merchant.name}};switch(r){case r="download":E.createPdf(i).download();break;case r="open":E.createPdf(i).open();break;case r="print":E.createPdf(i).print()}}trackByFn(t,r){return r.id||t}closeWorkshopOrderDialog(t){this._dialog.open(Qo,{data:{workshopOrder:t},panelClass:"ath-dialog-panel"})}_getProductQuantity(t,r){return t.find(i=>i.productId===r).quantity}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(S.uw),e.Y36(C.ux),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-orders"]],viewQuery:function(t,r){if(1&t&&(e.Gf(O.NW,5),e.Gf(Z.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(r._paginator=i.first),e.iGM(i=e.CRH())&&(r._sort=i.first)}},decls:32,vars:8,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],[4,"ngIf","ngIfElse"],["noWorkshops",""],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","workshops-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[3,"mat-sort-header"],[1,"text-center"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","workshops-grid","md:px-8"],[1,"truncate"],[1,"rounded-full","py-0.5","px-2.5",3,"ngClass"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["class","px-2 leading-6 min-w-10 min-h-7 h-7","mat-stroked-button","",3,"routerLink",4,"ngIf"],["class","px-2 leading-6 min-w-10 min-h-7 h-7","mat-stroked-button","",3,"click",4,"ngIf"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"routerLink"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Taller"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"\xd3rdenes de Trabajo"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," \xd3rdenes de Trabajo "),e.qZA()()(),e.TgZ(18,"div",10)(19,"button",11),e.NdJ("click",function(){return r.generateOsPDF()}),e._UZ(20,"mat-icon",12),e.TgZ(21,"span",13),e._uU(22,"Descargar Modelo"),e.qZA()(),e.TgZ(23,"button",14),e._UZ(24,"mat-icon",12),e.TgZ(25,"span",13),e._uU(26,"Agregar"),e.qZA()()()(),e.TgZ(27,"div",15)(28,"div",16),e.YNc(29,Go,21,12,"ng-container",17),e.YNc(30,jo,2,0,"ng-template",null,18,e.W1O),e.qZA()()()),2&t){const i=e.MAs(31);e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:file_download"),e.xp6(3),e.Q6J("routerLink",e.DdM(7,Ko)),e.xp6(1),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.Q6J("ngIf",r.workshopOrders.length>0)("ngIfElse",i)}},dependencies:[f.mk,f.sg,f.O5,y.rH,y.yS,W.lW,P.Hw,O.NW,Z.YE,Z.nU],encapsulation:2,changeDetection:0}),o})();var er=d(58066);const Ee=o=>o.workshopServices,z=((0,x.P1)(Ee,o=>o.workshopService),(0,x.P1)(Ee,o=>o.workshopServices));var tr=d(17264),Oe=d(11641),or=d(87238);const qe=function(o){return{"cursor-not-allowed":o}};function rr(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",42),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createWorkshopOrder())}),e._UZ(2,"mat-icon",43),e.TgZ(3,"span",44),e._uU(4,"Guardar"),e.qZA()(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.workshopOrderForm.invalid)("ngClass",e.VKq(3,qe,t.workshopOrderForm.invalid)),e.xp6(1),e.Q6J("svgIcon","mat_solid:save")}}function ir(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",42),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.updateWorkshopOrder())}),e._UZ(2,"mat-icon",43),e.TgZ(3,"span",44),e._uU(4,"Actualizar"),e.qZA()(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.workshopOrderForm.invalid)("ngClass",e.VKq(3,qe,t.workshopOrderForm.invalid)),e.xp6(1),e.Q6J("svgIcon","mat_solid:refresh")}}function sr(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",45),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.selectVehicleInspection(s))}),e._uU(1),e.qZA()}if(2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.no," ")}}function nr(o,n){if(1&o&&(e.TgZ(0,"mat-option",46),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function ar(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El taller del servicio es obligatorio "),e.qZA())}function cr(o,n){if(1&o&&(e.TgZ(0,"mat-option",46),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function lr(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de servicio es obligatorio "),e.qZA())}function pr(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",45),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.addWorkshopServiceToOrder(s))}),e._uU(1),e.qZA()}if(2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.description," ")}}function dr(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",52)(2,"div"),e._uU(3),e.qZA(),e.TgZ(4,"div",53),e._uU(5),e.qZA(),e.TgZ(6,"div",54),e._uU(7),e.ALo(8,"number"),e.qZA(),e.TgZ(9,"div",54),e._uU(10),e.ALo(11,"number"),e.qZA(),e.TgZ(12,"div",55)(13,"button",56),e.NdJ("click",function(){const s=e.CHM(t).index,a=e.oxw(2);return e.KtG(a.removeServiceToOrder(s))}),e._UZ(14,"mat-icon",57),e.qZA()()(),e.BQk()}if(2&o){const t=n.$implicit,r=n.index;e.xp6(3),e.hij(" ",r+1," "),e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",e.xi3(8,5,t.minPrice,"1.2-2")," "),e.xp6(3),e.hij(" ",e.xi3(11,8,t.maxPrice,"1.2-2")," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function mr(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",47)(2,"div",48),e._UZ(3,"div"),e.TgZ(4,"div",49),e._uU(5," Descripci\xf3n "),e.qZA(),e.TgZ(6,"div",50),e._uU(7," Precio M\xednimo "),e.qZA(),e.TgZ(8,"div",50),e._uU(9," Precio M\xe1ximo "),e.qZA(),e.TgZ(10,"div",50),e._uU(11," Quitar "),e.qZA()(),e.YNc(12,dr,15,11,"ng-container",51),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(12),e.Q6J("ngForOf",t.orderServices)("ngForTrackBy",t.trackByFn)}}function ur(o,n){1&o&&(e.TgZ(0,"div",58),e._uU(1," \xa1No ha seleccionado ning\xfan servicio a\xfan! "),e.qZA())}function hr(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",45),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.addProductToOrder(s))}),e._uU(1),e.qZA()}if(2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function gr(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",52)(2,"div"),e._uU(3),e.qZA(),e.TgZ(4,"div",53),e._uU(5),e.qZA(),e.TgZ(6,"div",50),e._uU(7),e.qZA(),e.TgZ(8,"div",50)(9,"div",59)(10,"button",60),e.NdJ("click",function(){const i=e.CHM(t),s=i.index,a=i.$implicit,l=e.oxw(2);return e.KtG(l.decrementProductQty(s,a))}),e._UZ(11,"mat-icon",57),e.qZA(),e.TgZ(12,"mat-form-field",61)(13,"input",62),e.NdJ("ngModelChange",function(i){const a=e.CHM(t).$implicit;return e.KtG(a.quantity=i)}),e.qZA()(),e.TgZ(14,"button",60),e.NdJ("click",function(){const i=e.CHM(t),s=i.index,a=i.$implicit,l=e.oxw(2);return e.KtG(l.incrementProductQty(s,a))}),e._UZ(15,"mat-icon",57),e.qZA()()(),e.TgZ(16,"div",54),e._uU(17),e.ALo(18,"number"),e.qZA(),e.TgZ(19,"div",54),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"div",55)(23,"button",56),e.NdJ("click",function(){const s=e.CHM(t).index,a=e.oxw(2);return e.KtG(a.removeProductToOrder(s))}),e._UZ(24,"mat-icon",57),e.qZA()()(),e.BQk()}if(2&o){const t=n.$implicit,r=n.index;e.xp6(3),e.hij(" ",r+1," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.uom," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(2),e.Q6J("ngModel",t.quantity),e.xp6(2),e.Q6J("svgIcon","mat_solid:add"),e.xp6(2),e.hij(" ",e.xi3(18,9,t.price,"1.2-2")," "),e.xp6(3),e.hij(" ",e.xi3(21,12,t.quantity*t.price,"1.2-2")," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function fr(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",47)(2,"div",48),e._UZ(3,"div"),e.TgZ(4,"div",49),e._uU(5," Producto "),e.qZA(),e.TgZ(6,"div",50),e._uU(7," Presentaci\xf3n "),e.qZA(),e.TgZ(8,"div",50),e._uU(9," Cantidad "),e.qZA(),e.TgZ(10,"div",50),e._uU(11," Precio "),e.qZA(),e.TgZ(12,"div",50),e._uU(13," Total "),e.qZA(),e.TgZ(14,"div",50),e._uU(15," Quitar "),e.qZA()(),e.YNc(16,gr,25,15,"ng-container",51),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(16),e.Q6J("ngForOf",t.orderProducts)("ngForTrackBy",t.trackByFn)}}function _r(o,n){1&o&&(e.TgZ(0,"div",58),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}let vr=(()=>{class o{constructor(t,r,i,s,a,l){this._activatedRoute=t,this._changeDetectorRef=r,this._formBuilder=i,this._snackBar=s,this._router=a,this.store=l,this.editMode=!1,this.employees=[],this.employeeSelected="",this.maxDate=new Date,this.orderProducts=[],this.orderServices=[],this.products=[],this.searchEmployeeControl=new c.NI(""),this.searchInputControl=new c.NI,this.searchProductControl=new c.NI(""),this.searchVehicleControl=new c.NI(""),this.searchVehicleInspectionControl=new c.NI(""),this.searchWorkshopServiceControl=new c.NI(""),this.selectedWorkshopOrder=new We,this.serviceTypes=[],this.total=0,this.vehicleInspections=[],this.vehicleInspectionSelected="",this.vehicles=[],this.vehicleSelected="",this.workshopOrderId=null,this.workshops=[],this.workshopServices=[],this._unsubscribeAll=new F.x,this._fuseConfirmationService=(0,e.f3M)(w.R),this._workshopOrdersService=(0,e.f3M)(re)}ngOnInit(){this.store.select(er.Fr).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.serviceTypes=t,this._changeDetectorRef.markForCheck()}),this.store.select(R).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.workshops=t,this._changeDetectorRef.markForCheck()}),this.store.select(z).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.workshopServices=t,this._changeDetectorRef.markForCheck()}),this.workshopServicesFiltered$=this.searchWorkshopServiceControl.valueChanges.pipe((0,q.O)(""),(0,A.U)(t=>{const r="string"==typeof t?t:null==t?void 0:t.description;return r?this._filterWorkshopServices(r):this.workshopServices.slice()})),this.store.select(V).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.vehicles=t,this._changeDetectorRef.markForCheck()}),this.vehiclesFiltered$=this.searchVehicleControl.valueChanges.pipe((0,q.O)(""),(0,A.U)(t=>{const r="string"==typeof t?t:null==t?void 0:t.registrationNumber;return r?this._filterVehicles(r):this.vehicles.slice()})),this.store.select(te).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.vehicleInspections=t,this._changeDetectorRef.markForCheck()}),this.vehicleInspectionsFiltered$=this.searchVehicleInspectionControl.valueChanges.pipe((0,q.O)(""),(0,A.U)(t=>{const r="string"==typeof t?t:null==t?void 0:t.no;return r?this._filterVehicleInspections(r):this.vehicleInspections.slice()})),this.store.select(Ce.ri).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.employees=t,this._changeDetectorRef.markForCheck()}),this.employeesFiltered$=this.searchEmployeeControl.valueChanges.pipe((0,q.O)(""),(0,A.U)(t=>{const r="string"==typeof t?t:null==t?void 0:t.name;return r?this._filterEmployees(r):this.employees.slice()})),this.store.select(tr.K2).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.products=t,this._changeDetectorRef.markForCheck()}),this.productsFiltered$=this.searchProductControl.valueChanges.pipe((0,q.O)(""),(0,A.U)(t=>{const r="string"==typeof t?t:null==t?void 0:t.name;return r?this._filterProducts(r):this.products.slice()})),this.workshopOrderForm=this._formBuilder.group({id:[""],customerId:[null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],employeeId:[null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],inspectionId:[null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],serviceTypesId:[[],[c.kI.required]],vehicleId:[null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],workshopId:[null,[c.kI.required,c.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]],initDate:[null],closeDate:[null],products:[[]],services:[[]],comments:[null,[c.kI.maxLength(1e4)]]}),this._activatedRoute.params.pipe((0,m.R)(this._unsubscribeAll)).subscribe(({workshopOrderId:t})=>{this.workshopOrderId=t,"new"!==this.workshopOrderId&&(this.editMode=!0,this.store.select(vo).pipe((0,m.R)(this._unsubscribeAll)).subscribe(r=>{this.selectedWorkshopOrder=r,this.workshopOrderForm.patchValue(r),this.searchEmployeeControl.patchValue(r.employee),this.searchVehicleInspectionControl.patchValue(r.inspection),this.selectVehicleInspection(r.inspection),this.orderProducts=this._mapProductFromProductInOrder(r.productsInOrder,r.products)})),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createWorkshopOrder(){const t=this.workshopOrderForm.getRawValue();delete t.id;const r=[];for(const a of this.orderProducts)r.push(this._mapProductToWorkshopOrder(a));t.products=r;const i=[];if(this.orderServices.length>0)for(const a of this.orderServices)i.push({serviceId:a.id,quantity:1});t.services=i,this._fuseConfirmationService.open({title:"Crear orden de trabajo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(a=>{"confirmed"===a&&this._workshopOrdersService.createWorkshopOrder(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:l})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:l.createWorkshopOrder.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/workshop-orders")}),this._changeDetectorRef.markForCheck()})}updateWorkshopOrder(){const t=this.workshopOrderForm.getRawValue(),r=[];for(const a of this.orderProducts)r.push(this._mapProductToWorkshopOrder(a));t.products=r;const i=[];if(this.orderServices.length>0)for(const a of this.orderServices)i.push({serviceId:a.id,quantity:1});t.services=i,this._fuseConfirmationService.open({title:"Actualizar orden de trabajo",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(a=>{"confirmed"===a&&this._workshopOrdersService.updateWorkshopOrder(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:l})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Confirmaci\xf3n",message:l.updateWorkshopOrder.message,type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/workshop/workshop-orders")}),this._changeDetectorRef.markForCheck()})}selectEmployee(t){this.workshopOrderForm.get("employeeId").setValue(t.id)}selectVehicle(t){this.workshopOrderForm.get("vehicleId").setValue(t.id)}selectVehicleInspection(t){this.workshopOrderForm.get("inspectionId").setValue(t.id),this.workshopOrderForm.get("employeeId").setValue(t.employeeId),this.editMode||this.workshopOrderForm.get("customerId").setValue(t.vehicle.customerId),this.workshopOrderForm.get("vehicleId").setValue(t.vehicleId),this._changeDetectorRef.markForCheck()}addWorkshopServiceToOrder(t){this.orderServices.findIndex(i=>i.id===t.id)>-1?this.searchWorkshopServiceControl.reset():(this.orderServices.push(t),this.searchWorkshopServiceControl.reset(),this._calculateOrderTotal())}addProductToOrder(t){if(this.orderProducts.findIndex(s=>s.productId===t.productId)>-1)return void this.searchProductControl.reset();const i=this._mapProductToOrder(t);this.orderProducts.push(i),this.searchProductControl.reset(),this._calculateOrderTotal()}incrementProductQty(t,r){const i=r;i.quantity++,this.orderProducts[t]=i,this._calculateOrderTotal()}decrementProductQty(t,r){const i=r;i.quantity--,this.orderProducts[t]=i,this._calculateOrderTotal()}removeProductToOrder(t){this.orderProducts.splice(t,1),this._calculateOrderTotal()}removeServiceToOrder(t){this.orderServices.splice(t,1),this._calculateOrderTotal()}trackByFn(t,r){return r.id||t}displayFnEmployee(t){return t&&t.fullname?t.fullname:""}displayFnVehicle(t){return t&&t.registrationNumber?t.registrationNumber:""}displayFnVehicleInspection(t){return t&&t.no?t.no:""}displayFnWorkshopService(t){return t&&t.description?t.description:""}displayFnProduct(t){return t&&t.name?t.name:""}_filterEmployees(t){const r=t.toLowerCase();return this.employees.filter(i=>i.name.toLowerCase().includes(r))}_filterVehicles(t){const r=t.toLowerCase();return this.vehicles.filter(i=>i.registrationNumber.toLowerCase().includes(r))}_filterVehicleInspections(t){const r=t.toLowerCase();return this.vehicleInspections.filter(i=>i.no.toLowerCase().includes(r))}_filterProducts(t){const r=t.toLowerCase();return this.products.filter(i=>i.name.toLowerCase().includes(r))}_filterWorkshopServices(t){const r=t.toLowerCase();return this.workshopServices.filter(i=>i.description.toLowerCase().includes(r))}_mapProductToOrder(t){const{productId:r,name:i,uom:s,price:a}=t;return new Oe.vr(r,i,s,a,1)}_mapProductFromProductInOrder(t,r){const i=[];for(const s of t)i.push(new Oe.vr(s.id,s.name,s.uom.abbr,s.price,this._getProductQuantity(r,s.id)));return i}_calculateOrderTotal(){const t=Number(this.orderProducts.reduce((i,s)=>s.price*s.quantity+i,0).toFixed(2));this.total=t+Number(()=>this.orderServices.reduce((i,s)=>s.maxPrice+i,0))}_mapProductToWorkshopOrder(t){const{productId:r,quantity:i}=t;return new Jo(r,i)}_getProductQuantity(t,r){return t.find(i=>i.productId===r).quantity}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y.gz),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(C.ux),e.Y36(y.F0),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-order-details"]],decls:96,vars:55,consts:[["cdkScrollable","",1,"flex","flex-col","p-3","flex-auto","min-w-0","sm:absolute","sm:inset-0","bg-cover","dark:bg-transparent","overflow-y-auto","gap-5"],[1,"z-20","flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:px-5","bg-transparent"],[1,"flex-1","min-w-0"],[1,"overflow-hidden","items-center","font-medium","flex","overflow-ellipsis"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],["routerLink","/workshop/workshop-orders",1,"ml-1","text-primary-500"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[4,"ngIf"],[1,"flex","flex-auto"],[1,"flex","flex-col","bg-card","shadow-md","rounded-md","p-3","gap-3","w-full"],[1,"w-full","flex","flex-col","gap-3",3,"formGroup","autocomplete"],[1,"font-semibold","text-xl"],[1,"flex","flex-col","mt-5","gap-3"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-5","mt-5","gap-3"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],[3,"displayWith"],["inspectionAutocomplete","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],["svgIcon","mat_solid:help","matTooltip","Taller donde se realizar\xe1 el servicio",1,"icon-size-4"],[3,"formControlName","required"],[3,"value",4,"ngFor","ngForOf"],["multiple","",3,"formControlName","required"],["matInput","",3,"formControlName","matDatepicker","placeholder"],["matIconSuffix","",3,"for"],["initDatePicker",""],["closeDatePicker",""],[1,"font-semibold","text-xl","mt-3"],[1,"w-full","fuse-mat-dense"],["matInput","","matTextareaAutosize","","maxlength","10000",3,"formControlName","rows"],["type","text","matInput","","autocomplete","off",3,"formControl","matAutocomplete","placeholder"],["workshopServicesAutocomplete","matAutocomplete"],[1,"flex","flex-col","mt-2","flex-auto","overflow-hidden","sm:overflow-y-auto","col-span-3"],[4,"ngIf","ngIfElse"],["noOrderServices",""],["productsAutocomplete","matAutocomplete"],[1,"flex","flex-col","mt-2","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto","col-span-3"],["noOrderProducts",""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","ngClass","click"],[3,"svgIcon"],[1,"ml-2","mr-1","text-white"],[3,"value","click"],[3,"value"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left","hidden","sm:block"],[1,"text-center","hidden","sm:block"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"hidden","truncate","md:block"],[1,"text-center","hidden","sm:block","font-mono"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t"],[1,"flex","flex-row","gap-2","justify-center","items-center"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],[1,"fuse-mat-dense","fuse-mat-rounded"],["matInput","","type","text","pattern","^[0-9]+$","name","quantity",1,"text-center","font-semibold","font-mono",3,"ngModel","ngModelChange"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div")(6,"a",4),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Taller"),e.qZA()(),e.TgZ(12,"div",5),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",8),e._uU(15,"\xd3rdenes de Servicios"),e.qZA()(),e.TgZ(16,"div",5),e._UZ(17,"mat-icon",6),e.TgZ(18,"a",7),e._uU(19),e.qZA()()()()(),e.TgZ(20,"div",9),e.YNc(21,rr,5,5,"ng-container",10),e.YNc(22,ir,5,5,"ng-container",10),e.qZA()(),e.TgZ(23,"div",11)(24,"div",12)(25,"form",13)(26,"div",14),e._uU(27," Informaci\xf3n de la inspecci\xf3n "),e.qZA(),e.TgZ(28,"div",15)(29,"div",16)(30,"mat-form-field",17)(31,"mat-label"),e._uU(32,"Inspecci\xf3n"),e.qZA(),e._UZ(33,"mat-icon",18)(34,"input",19),e.TgZ(35,"mat-autocomplete",20,21),e.YNc(37,sr,2,2,"mat-option",22),e.ALo(38,"async"),e.qZA()(),e.TgZ(39,"mat-form-field",17)(40,"mat-label"),e._uU(41,"Taller del servicio "),e._UZ(42,"mat-icon",23),e.qZA(),e.TgZ(43,"mat-select",24),e.YNc(44,nr,2,2,"mat-option",25),e.qZA(),e.YNc(45,ar,2,0,"mat-error",10),e.qZA(),e.TgZ(46,"mat-form-field",17)(47,"mat-label"),e._uU(48,"Tipo de servicio"),e.qZA(),e.TgZ(49,"mat-select",26),e.YNc(50,cr,2,2,"mat-option",25),e.qZA(),e.YNc(51,lr,2,0,"mat-error",10),e.qZA(),e.TgZ(52,"mat-form-field",17)(53,"mat-label"),e._uU(54,"Fecha de inicio del servicio"),e.qZA(),e._UZ(55,"input",27)(56,"mat-datepicker-toggle",28)(57,"mat-datepicker",null,29),e.qZA(),e.TgZ(59,"mat-form-field",17)(60,"mat-label"),e._uU(61,"Fecha de fin del servicio"),e.qZA(),e._UZ(62,"input",27)(63,"mat-datepicker-toggle",28)(64,"mat-datepicker",null,30),e.qZA()(),e.TgZ(66,"div",31),e._uU(67," Comentarios del cliente en la solicitud "),e.qZA(),e.TgZ(68,"mat-form-field",32),e._UZ(69,"textarea",33),e.qZA(),e.TgZ(70,"div",14),e._uU(71," Servicios a realizar "),e.qZA(),e.TgZ(72,"mat-form-field",17),e._UZ(73,"mat-icon",18)(74,"input",34),e.TgZ(75,"mat-autocomplete",20,35),e.YNc(77,pr,2,2,"mat-option",22),e.ALo(78,"async"),e.qZA()(),e.TgZ(79,"div",36),e.YNc(80,mr,13,2,"ng-container",37),e.YNc(81,ur,2,0,"ng-template",null,38,e.W1O),e.qZA(),e.TgZ(83,"div",31),e._uU(84," Materiales necesarios "),e.qZA(),e.TgZ(85,"mat-form-field",17),e._UZ(86,"mat-icon",18)(87,"input",34),e.TgZ(88,"mat-autocomplete",20,39),e.YNc(90,hr,2,2,"mat-option",22),e.ALo(91,"async"),e.qZA()()()(),e.TgZ(92,"div",40),e.YNc(93,fr,17,2,"ng-container",37),e.YNc(94,_r,2,0,"ng-template",null,41,e.W1O),e.qZA()()()()),2&t){const i=e.MAs(36),s=e.MAs(58),a=e.MAs(65),l=e.MAs(76),p=e.MAs(82),g=e.MAs(89),T=e.MAs(95);e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(2),e.hij(" ","new"===r.workshopOrderId?"Registrar Inspecci\xf3n":r.selectedWorkshopOrder.no," "),e.xp6(2),e.Q6J("ngIf",!r.editMode),e.xp6(1),e.Q6J("ngIf",r.editMode),e.xp6(3),e.Q6J("formGroup",r.workshopOrderForm)("autocomplete","off"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchVehicleInspectionControl)("matAutocomplete",i)("placeholder","Buscar inspecci\xf3n")("required",!0),e.xp6(1),e.Q6J("displayWith",r.displayFnVehicleInspection),e.xp6(2),e.Q6J("ngForOf",e.lcZ(38,49,r.vehicleInspectionsFiltered$)),e.xp6(6),e.Q6J("formControlName","workshopId")("required",!0),e.xp6(1),e.Q6J("ngForOf",r.workshops),e.xp6(1),e.Q6J("ngIf",r.workshopOrderForm.get("workshopId").hasError("required")),e.xp6(4),e.Q6J("formControlName","serviceTypesId")("required",!0),e.xp6(1),e.Q6J("ngForOf",r.serviceTypes),e.xp6(1),e.Q6J("ngIf",r.workshopOrderForm.get("serviceTypesId").hasError("required")),e.xp6(4),e.Q6J("formControlName","initDate")("matDatepicker",s)("placeholder","MM/DD/YYYY"),e.xp6(1),e.Q6J("for",s),e.xp6(6),e.Q6J("formControlName","closeDate")("matDatepicker",a)("placeholder","MM/DD/YYYY"),e.xp6(1),e.Q6J("for",a),e.xp6(6),e.Q6J("formControlName","comments")("rows",2),e.xp6(4),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchWorkshopServiceControl)("matAutocomplete",l)("placeholder","Buscar servicios de taller"),e.xp6(1),e.Q6J("displayWith",r.displayFnWorkshopService),e.xp6(2),e.Q6J("ngForOf",e.lcZ(78,51,r.workshopServicesFiltered$)),e.xp6(3),e.Q6J("ngIf",r.orderServices.length>0)("ngIfElse",p),e.xp6(6),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchProductControl)("matAutocomplete",g)("placeholder","Buscar productos"),e.xp6(1),e.Q6J("displayWith",r.displayFnProduct),e.xp6(2),e.Q6J("ngForOf",e.lcZ(91,53,r.productsFiltered$)),e.xp6(3),e.Q6J("ngIf",r.orderProducts.length>0)("ngIfElse",T)}},dependencies:[f.mk,f.sg,f.O5,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.nD,c.c5,c.On,c.oH,c.sg,c.u,y.yS,X.PQ,L.XC,L.ZL,ee.ey,W.lW,$.Mq,$.hl,$.nW,P.Hw,b.TO,b.KE,b.hX,b.qo,U.Nt,ce.gD,or.gM,f.Ov,f.JJ],encapsulation:2,changeDetection:0}),o})();var xr=d(99987),M=d(78171);const br=h.Ps`
    mutation CreateWorkshopService($createWorkshopServiceInput: CreateWorkshopServiceInput!) {
        createWorkshopService(createWorkshopServiceInput: $createWorkshopServiceInput) {

            ok
            message

            workshopService {
                id
                active
                no
                userId
                description
                minPrice
                maxPrice
                currencyId
                currency {
                    id
                    name
                    iso
                }
            }

        }
    }
`,kr=h.Ps`
    mutation UpdateWorkshopService($updateWorkshopServiceInput: UpdateWorkshopServiceInput!) {
        updateWorkshopService(updateWorkshopServiceInput: $updateWorkshopServiceInput) {
            ok
            message

            workshopService {
                id
                active
                no
                userId
                description
                minPrice
                maxPrice
                currencyId
                currency {
                    id
                    name
                    iso
                }
            }
        }
    }
`,Ir=h.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateWorkshopServiceStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,yr=h.Ps`
    mutation RemoveWorkshopService($removeWorkshopServiceId: String!) {
        removeWorkshopService(id: $removeWorkshopServiceId) {
            ok
            message
        }
    }
`,Cr=h.Ps`
    query FindWorkshopServices($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findWorkshopServices(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            workshopServices {
                id
                active
                no
                userId
                description
                minPrice
                maxPrice
                currencyId
                currency {
                    id
                    name
                    iso
                }
            }
        }
    }
`,Ar=h.Ps`
    query FindAllWorkshopServices {
        findAllWorkshopServices {
            ok
            message

            workshopServices {
                no
                description
                minPrice
                maxPrice
                currency {
                    iso
                }
            }
        }
    }
`,Zr=h.Ps`
    query FindWorkshopServiceById($findWorkshopServiceByIdId: String!) {
        findWorkshopServiceById(id: $findWorkshopServiceByIdId) {
            ok
            message

            workshopService {
                id
                active
                no
                userId
                description
                minPrice
                maxPrice
                currencyId
                currency {
                    id
                    name
                    iso
                }
            }
        }
    }
`;let le=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createWorkshopService(t){return this.store.select(z).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:br,variables:{createWorkshopServiceInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a.push(s.createWorkshopService.workshopService),this.store.dispatch((0,M.l1)({workshopServices:a}))}))))}getWorkshopServices(t=1,r=20,i="no",s="asc",a=""){return this._apollo.query({query:Cr,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,_.b)(({errors:l,data:p})=>{if(l){let g="";l.forEach(T=>g+=`\n ${T.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,J.Jr)({pagination:p.findWorkshopServices.pagination})),this.store.dispatch((0,M.l1)({workshopServices:p.findWorkshopServices.workshopServices}))}))}getAllWorkshopServices(){return this._apollo.query({query:Ar,errorPolicy:"all"}).pipe((0,_.b)(({errors:t})=>{if(t){let r="";t.forEach(i=>r+=`\n ${i.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getWorkshopServiceById(t){return this._apollo.query({query:Zr,variables:{findWorkshopServiceByIdId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:r,data:i})=>{if(r){let s="";r.forEach(a=>s+=`\n ${a.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,M.H6)({workshopService:i.findWorkshopServiceById.workshopService}))}))}updateWorkshopService(t){return this.store.select(z).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:kr,variables:{updateWorkshopServiceInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let p="";i.forEach(g=>p+=`\n ${g.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a[r.findIndex(p=>p.id===t.id)]=s.updateWorkshopService.workshopService,this.store.dispatch((0,M.l1)({workshopServices:a}))}))))}updateWorkshopServiceStatus(t){return this.store.select(z).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:Ir,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,I.cloneDeep)(r);s[r.findIndex(l=>l.id===t.id)].active=t.active,this.store.dispatch((0,M.l1)({workshopServices:s}))}))))}removeWorkshopService(t){return this.store.select(z).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:yr,variables:{removeWorkshopServiceId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,I.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,M.l1)({workshopServices:s}))}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h._M),e.LFG(C.ux),e.LFG(x.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function Sr(o,n){1&o&&(e.TgZ(0,"h2",7),e._uU(1," Agregar servicio de taller "),e.qZA())}function Tr(o,n){1&o&&(e.TgZ(0,"h2",7),e._uU(1," Editar servicio de taller "),e.qZA())}function Fr(o,n){if(1&o&&(e.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"h6",13),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"span",14),e._uU(8),e.qZA()()()()()()),2&o){const t=e.oxw();e.xp6(8),e.Oqu(t.data.workshopService.name||"Sin nombre")}}function wr(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La descripci\xf3n del es obligatoria "),e.qZA())}function Wr(o,n){if(1&o&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.iso," ")}}function Er(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La moneda es obligatoria "),e.qZA())}function Or(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El precio m\xednimo es obligatorio "),e.qZA())}function qr(o,n){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El precio m\xe1ximo es obligatorio "),e.qZA())}function Ur(o,n){if(1&o&&(e.TgZ(0,"div",15)(1,"div",16)(2,"form",17)(3,"mat-form-field",18)(4,"mat-label"),e._uU(5,"Descripci\xf3n"),e.qZA(),e._UZ(6,"input",19),e.TgZ(7,"mat-hint"),e._uU(8,"Ejemplo: Monte y desmonte de caja"),e.qZA(),e.YNc(9,wr,2,0,"mat-error",6),e.qZA(),e.TgZ(10,"mat-form-field",20)(11,"mat-label"),e._uU(12,"Moneda"),e.qZA(),e.TgZ(13,"mat-select",21),e.YNc(14,Wr,2,2,"mat-option",22),e.qZA(),e.YNc(15,Er,2,0,"mat-error",6),e.qZA(),e.TgZ(16,"mat-form-field",20)(17,"mat-label"),e._uU(18,"Precio M\xednimo"),e.qZA(),e._UZ(19,"input",23),e.YNc(20,Or,2,0,"mat-error",6),e.qZA(),e.TgZ(21,"mat-form-field",20)(22,"mat-label"),e._uU(23,"Precio M\xe1ximo"),e.qZA(),e._UZ(24,"input",24),e.YNc(25,qr,2,0,"mat-error",6),e.qZA()()()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.workshopServiceForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","description")("placeholder","Ejemplo: Monte y desmonte de caja"),e.xp6(3),e.Q6J("ngIf",t.workshopServiceForm.get("description").hasError("required")),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0),e.xp6(1),e.Q6J("ngForOf",t.currencies),e.xp6(1),e.Q6J("ngIf",t.workshopServiceForm.get("currencyId").hasError("required")),e.xp6(4),e.Q6J("formControlName","minPrice")("placeholder","0.00"),e.xp6(1),e.Q6J("ngIf",t.workshopServiceForm.get("minPrice").hasError("required")),e.xp6(4),e.Q6J("formControlName","maxPrice")("min",t.workshopServiceForm.get("minPrice").value)("placeholder","0.00"),e.xp6(1),e.Q6J("ngIf",t.workshopServiceForm.get("maxPrice").hasError("required"))}}function Dr(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",28),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.updateWorkshopService())}),e._uU(2," Actualizar "),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("color","primary")("disabled",t.workshopServiceForm.invalid)("matDialogClose","confirmed")}}function Pr(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",28),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createWorkshopService())}),e._uU(2," Agregar "),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("color","primary")("disabled",t.workshopServiceForm.invalid)("matDialogClose","confirmed")}}function Nr(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",26),e.ynx(2),e.TgZ(3,"button",27),e._uU(4," Cancelar "),e.qZA(),e.BQk(),e.YNc(5,Dr,3,3,"ng-container",6),e.YNc(6,Pr,3,3,"ng-container",6),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(3),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("ngIf","edit"===t.data.dialogMode),e.xp6(1),e.Q6J("ngIf","add"===t.data.dialogMode)}}let Rr=(()=>{class o{constructor(t,r,i,s,a,l,p){this.data=t,this._changeDetectorRef=r,this._formBuilder=i,this._fuseConfirmationService=s,this._dialogRef=a,this._snackBar=l,this.store=p,this.currencies=[],this.maxDate=new Date,this.dialogMode="view",this._unsubscribeAll=new F.x,this._workshopServicesService=(0,e.f3M)(le),this.dialogMode=t.dialogMode,this.workshopService=t.workshopService}ngOnInit(){this.workshopServiceForm=this._formBuilder.group({id:new c.NI(null),description:new c.NI(null,[c.kI.required,c.kI.maxLength(1e5)]),minPrice:new c.NI(0,[c.kI.required,c.kI.min(0)]),maxPrice:new c.NI(0,[c.kI.required]),currencyId:new c.NI(null,[c.kI.required,c.kI.maxLength(100)])}),"edit"===this.dialogMode&&this.workshopServiceForm.patchValue(this.workshopService),this.store.select(xr.zd).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createWorkshopService(){let t=this.workshopServiceForm.getRawValue();t=(0,fe.Z)(t,["id"]),this._fuseConfirmationService.open({title:"Crear servicio de taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._workshopServicesService.createWorkshopService(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.createWorkshopService.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateWorkshopService(){const t=this.workshopServiceForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar servicio de taller",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._workshopServicesService.updateWorkshopService(t).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateWorkshopService.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(S.WI),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(w.R),e.Y36(S.so),e.Y36(C.ux),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-service-dialog"]],decls:11,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400",4,"ngIf"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","flex-auto",4,"ngIf"],["class","w-full overflow-hidden",4,"ngIf"],[4,"ngIf"],[1,"text-2xl","text-gray-400"],[1,"flex-auto"],[1,"flex"],[1,"flex","flex-col","w-full","mt-5"],[1,"flex","flex-col","p-8","pb-0","sm:flex-row"],[1,"w-full","py-10","my-10"],[1,"mb-2","font-medium"],[1,"border-sm"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"grid","grid-cols-1","sm:grid-cols-3","w-full","mt-3","gap-5",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense","sm:col-span-3"],["matInput","","type","text","required","","maxlength","50",3,"formControlName","placeholder"],[1,"w-full","fuse-mat-dense"],[3,"formControlName","required"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","number","required","","min","0",3,"formControlName","placeholder"],["matInput","","type","number","required","",3,"formControlName","min","placeholder"],[3,"value"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-end","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.ynx(1),e.TgZ(2,"div",1),e.YNc(3,Sr,2,0,"h2",2),e.YNc(4,Tr,2,0,"h2",2),e.qZA(),e.BQk(),e.TgZ(5,"div",3),e.ynx(6),e.YNc(7,Fr,9,1,"div",4),e.BQk(),e.ynx(8),e.YNc(9,Ur,26,16,"div",5),e.BQk(),e.qZA(),e.YNc(10,Nr,7,3,"ng-container",6),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf","add"===r.data.dialogMode),e.xp6(1),e.Q6J("ngIf","edit"===r.data.dialogMode),e.xp6(3),e.Q6J("ngIf","view"===r.data.dialogMode),e.xp6(2),e.Q6J("ngIf","edit"===r.data.dialogMode||"add"),e.xp6(1),e.Q6J("ngIf","view"!==r.data.dialogMode))},dependencies:[f.sg,f.O5,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.Q7,c.nD,c.qQ,c.sg,c.u,ee.ey,W.lW,S.ZT,b.TO,b.KE,b.bx,b.hX,U.Nt,ce.gD],encapsulation:2}),o})();var Qr=d(51927);class Jr{}var pe=d(92181);function Vr(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-slide-toggle",40),e.NdJ("change",function(i){e.CHM(t);const s=e.oxw(),a=s.$implicit,l=s.index,p=e.oxw(2);return e.KtG(p.updateRateStatus(i,a,l))}),e.qZA(),e.BQk()}if(2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("checked",t.active)("color","primary")}}function Lr(o,n){1&o&&(e.ynx(0),e._UZ(1,"mat-spinner",41),e.BQk()),2&o&&(e.xp6(1),e.Q6J("diameter",20)("color","primary"))}function $r(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",32)(2,"div",33),e._uU(3),e.qZA(),e.TgZ(4,"div",34),e._uU(5),e.qZA(),e.TgZ(6,"div",35),e._uU(7),e.ALo(8,"currency"),e.qZA(),e.TgZ(9,"div",35),e._uU(10),e.ALo(11,"currency"),e.qZA(),e.TgZ(12,"div",29),e.YNc(13,Vr,2,2,"ng-container",36),e.YNc(14,Lr,2,2,"ng-container",36),e.qZA(),e.TgZ(15,"div",37)(16,"button",38),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.openDialog(s,"edit","80%"))}),e._UZ(17,"mat-icon",39),e.qZA(),e.TgZ(18,"button",38),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.deleteWorkshopService(s))}),e._UZ(19,"mat-icon",39),e.qZA()()(),e.BQk()}if(2&o){const t=n.$implicit,r=n.index,i=e.oxw(2);e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",e.Dn7(8,8,t.minPrice,t.currency.iso+" ","symbol")," "),e.xp6(3),e.hij(" ",e.Dn7(11,12,t.maxPrice,t.currency.iso+" ","symbol")," "),e.xp6(3),e.Q6J("ngIf",!(i.isSlideLoading&&i.selectedSlide===r)),e.xp6(1),e.Q6J("ngIf",i.isSlideLoading&&i.selectedSlide===r),e.xp6(3),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(2),e.Q6J("svgIcon","mat_solid:delete")}}const Br=function(o){return{"pointer-events-none":o}},zr=function(){return[5,10,25,100]};function Mr(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",25)(2,"div",26)(3,"div",27),e._uU(4," No "),e.qZA(),e.TgZ(5,"div",28),e._uU(6," Descripci\xf3n "),e.qZA(),e.TgZ(7,"div",29),e._uU(8," Precio M\xednimo "),e.qZA(),e.TgZ(9,"div",29),e._uU(10," Precio M\xe1ximo "),e.qZA(),e.TgZ(11,"div",29),e._uU(12," Estado "),e.qZA(),e.TgZ(13,"div",29),e._uU(14," Acciones "),e.qZA()(),e.YNc(15,$r,20,16,"ng-container",30),e._UZ(16,"mat-paginator",31),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(12),e.Q6J("ngForOf",t.workshopServices)("ngForTrackBy",t.trackByFn),e.xp6(1),e.Q6J("ngClass",e.VKq(9,Br,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(11,zr))("showFirstLastButtons",!0)}}function Yr(o,n){1&o&&(e.TgZ(0,"div",42),e._uU(1," \xa1No hay servicios creados para el taller!"),e.qZA())}E.vfs=Ze.I.vfs;let Hr=(()=>{class o{constructor(t,r,i,s){this._changeDetectorRef=t,this._dialog=r,this._snackBar=i,this.store=s,this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.searchInputControl=new c.NI(""),this.selectedSlide=null,this.user=null,this.workshopService=new Jr,this.workshopServices=[],this._unsubscribeAll=new F.x,this._workshopServicesService=(0,e.f3M)(le),this._fuseConfirmationService=(0,e.f3M)(w.R),this._fileSaverService=(0,e.f3M)(Qr.m)}ngOnInit(){this.store.select(Se.rk).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(Fe.Qs).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.store.select(z).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.workshopServices=t,this._changeDetectorRef.markForCheck()}),this.store.select(j.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,we.b)(300),(0,v.w)(t=>(this.isLoading=!0,this._workshopServicesService.getWorkshopServices(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,A.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,G.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._workshopServicesService.getWorkshopServices(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,A.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}deleteWorkshopService(t){this._fuseConfirmationService.open({title:"Cuidado",message:`\xbfEst\xe1 seguro que desea eliminar la orden de trabajo: ${t.no}?`,icon:{show:!0,name:"mat_solid:question_mark",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,m.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._workshopServicesService.removeWorkshopService(t.id).pipe((0,m.R)(this._unsubscribeAll)).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.removeWorkshopService.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}updateRateStatus(t,r,i){this.isSlideLoading=!0,this.selectedSlide=i,this._workshopServicesService.updateWorkshopServiceStatus({id:r.id,active:t.checked}).subscribe(({data:s})=>{this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:s.updateWorkshopServiceStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}openDialog(t,r){this._dialog.open(Rr,{data:{workshopService:t,dialogMode:r},panelClass:"ath-dialog-panel"})}printWorkshopServicesList(t="open"){this._workshopServicesService.getAllWorkshopServices().pipe((0,k.q)(1)).subscribe(({data:r})=>{const i={header:{text:"Listado de servicios",style:"header",marginTop:5},content:[{lineHeight:1.3,table:{headerRows:1,widths:[60,"*",120,120],body:[[{text:"No.",style:"table_header"},{text:"Descripci\xf3n",style:"table_header",alignment:"left"},{text:"Precio M\xednimo",style:"table_header"},{text:"Precio M\xe1ximo",style:"table_header"}],...r.findAllWorkshopServices.workshopServices.map(s=>[{style:"table_body",text:s.no,alignment:"center"},{style:"table_body",text:s.description,alignment:"left"},{style:"table_body",text:s.currency.iso+" "+s.minPrice.toFixed(2),alignment:"right"},{style:"table_body",text:s.currency.iso+" "+s.maxPrice.toFixed(2),alignment:"right"}])]},layout:"lightHorizontalLines"}],footer:(s,a)=>({table:{widths:["*","*"],body:[[{text:`Reporte generador por: ${this.user.name} ${this.user.lastname1} ${this.user.lastname2} | Esta informaci\xf3n es exclusiva de ${this.merchant.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${s.toString()}/${a} - Fecha de impresi\xf3n ${D().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"]},table_body:{fontSize:10}},pageOrientation:"landscape",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:"Listado de servicios",author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:D().toDate(),modDate:D().toDate(),producer:this.merchant.name}};switch(t){case t="download":E.createPdf(i).download();break;case t="open":E.createPdf(i).open();break;case t="print":E.createPdf(i).print()}})}exportWorkshopServicesListToExcel(){this._workshopServicesService.getAllWorkshopServices().pipe((0,k.q)(1)).subscribe(({data:t})=>{this._fileSaverService.exportAsExcelFile(t.findAllWorkshopServices.workshopServices,"Listado de servicios")})}trackByFn(t,r){return r.id||t}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(S.uw),e.Y36(C.ux),e.Y36(x.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["workshop-services"]],viewQuery:function(t,r){if(1&t&&(e.Gf(O.NW,5),e.Gf(Z.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(r._paginator=i.first),e.iGM(i=e.CRH())&&(r._sort=i.first)}},decls:43,vars:14,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-yellow-500","to-yellow-600",3,"matMenuTriggerFor"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[3,"xPosition"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-auto","sm:mb-18"],[4,"ngIf","ngIfElse"],["noWorkshops",""],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","workshops-services-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,"text-left"],[1,"text-center"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","workshops-services-grid","md:px-8"],[1,"hidden","sm:block","font-mono"],[1,"text-left","truncate"],[1,"text-center","font-mono"],[4,"ngIf"],[1,"flex","items-center","justify-start","gap-1","flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"checked","color","change"],[3,"diameter","color"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Taller"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Servicios"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Servicios "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Reportes"),e.qZA()(),e.TgZ(26,"mat-menu",17,18)(28,"button",19),e.NdJ("click",function(){return r.printWorkshopServicesList()}),e._UZ(29,"mat-icon",15),e._uU(30," Imprimir listado de servicios "),e.qZA(),e.TgZ(31,"button",19),e.NdJ("click",function(){return r.exportWorkshopServicesListToExcel()}),e._UZ(32,"mat-icon",15),e._uU(33," Exportar listado de servicios "),e.qZA()(),e.TgZ(34,"button",20),e.NdJ("click",function(){return r.openDialog(r.workshopService,"add")}),e._UZ(35,"mat-icon",15),e.TgZ(36,"span",16),e._uU(37,"Agregar"),e.qZA()()()(),e.TgZ(38,"div",21)(39,"div",22),e.YNc(40,Mr,17,12,"ng-container",23),e.YNc(41,Yr,2,0,"ng-template",null,24,e.W1O),e.qZA()()()),2&t){const i=e.MAs(27),s=e.MAs(42);e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",r.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),e.xp6(1),e.Q6J("matMenuTriggerFor",i),e.xp6(1),e.Q6J("svgIcon","mat_solid:expand_more"),e.xp6(3),e.Q6J("xPosition","before"),e.xp6(3),e.Q6J("svgIcon","mat_solid:description"),e.xp6(3),e.Q6J("svgIcon","mat_solid:description"),e.xp6(3),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.Q6J("ngIf",r.workshopServices.length>0)("ngIfElse",s)}},dependencies:[f.mk,f.sg,f.O5,c.Fj,c.JJ,c.oH,y.yS,W.lW,P.Hw,b.KE,b.qo,U.Nt,pe.VK,pe.OP,pe.p6,O.NW,_e.Ou,ve.Rr,Z.YE,Z.nU,f.H9],encapsulation:2,changeDetection:0}),o})();var Gr=d(4024),jr=d(90810),Kr=d(90088),Xr=d(1520),ei=d(31278),ti=d(23077),oi=d(24213),ri=d(293),de=d(70262),me=d(62843);let ii=(()=>{class o{constructor(t,r){this._vehicleInspectionsService=t,this._router=r}resolve(t,r){const i=t.paramMap.get("vehicleInspectionId");if("new"!==i)return this._vehicleInspectionsService.getVehicleInspectionById(i).pipe((0,de.K)(s=>{console.error(s);const a=r.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,me._)(s)}))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(se),e.LFG(y.F0))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),Ue=(()=>{class o{constructor(t){this._vehicleInspectionsService=t}resolve(t,r){return this._vehicleInspectionsService.getVehicleInspections()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(se))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),si=(()=>{class o{constructor(t,r){this._vehiclesService=t,this._router=r}resolve(t,r){const i=t.paramMap.get("vehicleId");if("new"!==i)return this._vehiclesService.getVehicleById(i).pipe((0,de.K)(s=>{console.error(s);const a=r.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,me._)(s)}))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(ie),e.LFG(y.F0))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),ue=(()=>{class o{constructor(t){this._vehiclesService=t}resolve(t,r){return this._vehiclesService.getVehicles()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(ie))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),ni=(()=>{class o{constructor(t){this._workshopOrdersService=t}resolve(t,r){return this._workshopOrdersService.getWorkshopOrders()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(re))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),ai=(()=>{class o{constructor(t,r){this._workshopOrdersService=t,this._router=r}resolve(t,r){const i=t.paramMap.get("workshopOrderId");if("new"!==i)return this._workshopOrdersService.getWorkshopOrderById(i).pipe((0,de.K)(s=>{console.error(s);const a=r.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,me._)(s)}))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(re),e.LFG(y.F0))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),De=(()=>{class o{constructor(t){this._workshopServicesService=t}resolve(t,r){return this._workshopServicesService.getWorkshopServices()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(le))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),Pe=(()=>{class o{constructor(t){this._workshopsService=t}resolve(t,r){return this._workshopsService.getWorkshops()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(ae))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var ci=d(14232),Ne=d(84271),Y=d(21783);const Re=o=>o.locations,ne=((0,x.P1)(Re,o=>o.location),(0,x.P1)(Re,o=>o.locations)),li=h.Ps`
    mutation CreateLocation($createLocationInput: CreateLocationInput!) {
        createLocation(createLocationInput: $createLocationInput) {

            ok
            message

            location {
                id
                active
                managerId
                # manager {
                #     name
                # }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }

        }
    }
`,pi=h.Ps`
    mutation UpdateLocation($updateLocationInput: UpdateLocationInput!) {
        updateLocation(updateLocationInput: $updateLocationInput) {
            ok
            message

            location {
                id
                active
                managerId
                # manager {
                #     name
                # }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }
        }
    }
`,di=h.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateLocationStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,mi=h.Ps`
    mutation RemoveLocation($removeLocationId: String!) {
        removeLocation(id: $removeLocationId) {
            ok
            message
        }
    }
`,ui=h.Ps`
    query FindAllLocations($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllLocations(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            locations {
                id
                active
                managerId
                # manager {
                #     name
                # }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }
        }
    }
`,hi=h.Ps`
    query FindLocationById($findLocationByIdId: String!) {
        findLocationById(id: $findLocationByIdId) {
            ok
            message

            location {
                id
                active
                managerId
                # manager {
                #     name
                # }
                name
                slug
                phone
                address
                country
                state
                city
                zip
            }
        }
    }
`;let gi=(()=>{class o{constructor(t,r,i){this.apolloProvider=t,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createLocation(t){return this.store.select(ne).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:li,variables:{createLocationInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a.push(s.createLocation.location),this.store.dispatch((0,Y.vB)({locations:a}))}))))}getLocations(t=1,r=20,i="code",s="asc",a=""){return this._apollo.query({query:ui,errorPolicy:"all",variables:{offset:r*(t-1),limit:r,sort:i,order:s,search:a}}).pipe((0,_.b)(({errors:l,data:p})=>{if(l){let g="";l.forEach(T=>g+=`\n ${T.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:g,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,J.Jr)({pagination:p.findAllLocations.pagination})),this.store.dispatch((0,Y.vB)({locations:p.findAllLocations.locations}))}))}getLocationById(t){return this._apollo.query({query:hi,variables:{findLocationByIdId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:r,data:i})=>{if(r){let s="";r.forEach(a=>s+=`\n ${a.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,Y.l6)({location:i.findLocationById.location}))}))}updateLocation(t){return this.store.select(ne).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:pi,variables:{updateLocationInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:s})=>{if(i){let p="";i.forEach(g=>p+=`\n ${g.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,I.cloneDeep)(r);a[r.findIndex(p=>p.id===t.id)]=s.updateLocation.location,this.store.dispatch((0,Y.vB)({locations:a}))}))))}updateLocationStatus(t){return this.store.select(ne).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:di,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,I.cloneDeep)(r);s[r.findIndex(l=>l.id===t.id)].active=t.active,this.store.dispatch((0,Y.vB)({locations:s}))}))))}removeLocation(t){return this.store.select(ne).pipe((0,k.q)(1),(0,v.w)(r=>this._apollo.mutate({mutation:mi,variables:{removeLocationId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let l="";i.forEach(p=>l+=`\n ${p.message}.`),this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,I.cloneDeep)(r),a=r.findIndex(l=>l.id===t);s.splice(a,1),this.store.dispatch((0,Y.vB)({locations:s}))}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h._M),e.LFG(C.ux),e.LFG(x.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),fi=(()=>{class o{constructor(t){this._locationsService=t}resolve(t,r){return this._locationsService.getLocations()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(gi))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var _i=d(95259);const vi=[{path:"",component:Ve},{path:"vehicles",component:Ft,resolve:{vehicles:ue}},{path:"vehicles/:vehicleId",component:Yt,resolve:{brands:Gr.J,customers:ci.u4,fuels:Kr.I,vehicle:si}},{path:"vehicles-inspections",component:po,resolve:{vehicles:Ue}},{path:"vehicles-inspections/:vehicleInspectionId",component:_o,resolve:{employees:Ne.Q,vehicles:ue,locations:fi,inspection:ii}},{path:"workshops",component:ut,resolve:{workshops:Pe}},{path:"workshop-orders",component:Xo,resolve:{multiplier:Xr.K,operationTypes:ei.Z,paymentMethods:ti.p,rates:oi.L,workshopOrders:ni}},{path:"workshop-orders/:workshopOrderId",component:vr,resolve:{employees:Ne.Q,inspection:Ue,products:_i.am,serviceTypes:ri.P,vehicles:ue,workshopOrder:ai,workshops:Pe,workshopServices:De}},{path:"services",component:Hr,resolve:{currencies:jr.Y,workshopServices:De}}];let xi=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[Qe.m,y.Bz.forChild(vi)]}),o})()}}]);