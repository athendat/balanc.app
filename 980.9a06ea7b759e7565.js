"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[980],{97231:(he,N,c)=>{c.d(N,{C:()=>j});var T=c(40520),G=c(92340),M=c(5e3);const e=G.N.API_URL;let j=(()=>{class s{constructor(d){this._httpClient=d}uploadImage(d,Z){const y=new FormData;return y.append("image",Z,Z.name),this._httpClient.post(`${e}/cloudinary/upload/${d}`,y)}removeImage(d){let Z=d.slice(d.indexOf("upload"),d.length).split(".")[0];Z=Z.split("/").splice(2,Z.length).join("/");const y=(new T.LE).set("public_id",Z);return this._httpClient.delete(`${e}/cloudinary/remove`,{params:y})}}return s.\u0275fac=function(d){return new(d||s)(M.LFG(T.eN))},s.\u0275prov=M.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},84681:(he,N,c)=>{c.d(N,{aw:()=>e,bG:()=>T});var T=(()=>{return(h=T||(T={})).pendiente="pendiente",h.parcial="parcial",h.pagada="pagada",h.cancelado="cancelado",h.fallido="fallido",h.expirado="expirado",h.devuelto="devuelto",h.dPendiente="devoluci\xf3n pendiente",h.dFallida="devoluci\xf3n fallida",T;var h})(),e=(()=>{return(h=e||(e={})).total="total",h.partial="partial",e;var h})()},70068:(he,N,c)=>{c.r(N),c.d(N,{SalesModule:()=>po});var T=c(35357),G=c(83877),M=c(17460),e=c(5e3);let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["sales"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},dependencies:[T.lC],encapsulation:2}),o})();var s=c(93075),F=c(77579),d=c(82722),Z=c(68675),y=c(54004),E=c(17489),h=c(99987),_e=c(6062),qe=c(87136),Ue=c(96008),R=c(71683),_=c(18505),x=c(59784),g=c(33921);const Pe=g.Ps`
    query FindAllBills($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllBills(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            bills {
                id
                no
                concept
                createdAt
                currencyId
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }
                operationTypeId
                operationType {
                    name
                }
                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                rateId
                rate {
                    value
                }

                status
                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phoneNumber {
                        stateCode,
                        phoneNumber,
                    }
                    email {
                        email
                    }
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }

                total
                totalCup
                totalUsd

                billDate
                user {
                    name
                    lastname1
                    lastname2
                }
                products {
                    productId
                    quantity
                }
                productsInBill {
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
                servicesInBill {
                    id
                    description
                    minPrice
                    maxPrice
                }

                vehicle {
                    brand {
                        name
                    }
                    model
                    registrationNumber
                }
            }
        }
    }
`,De=g.Ps`
    query FindAllBillsByDate($date: String!) {
        findAllBillsByDate(date: $date) {
            ok
            message

            bills {
                id
                no
                concept
                createdAt
                currencyId
                currency {
                    iso
                    namev
                }
                currenciesPercents {
                    cup
                    usd
                }

                operationTypeId
                operationType {
                    name
                }

                paymentMethodId
                paymentMethod {
                    name
                }
                paymentStatus

                rateId
                rate {
                    value
                }
                status
                customerId
                customer {
                    name
                    code
                    address
                    city
                    state
                    phoneNumber {
                        stateCode,
                        phoneNumber,
                    }
                    email {
                        email
                    }
                    nit
                }
                commercial {
                    name
                    lastname1
                    lastname2
                }
                total
                totalCup
                totalUsd
                billDate
                user {
                    name
                    lastname1
                    lastname2
                }
                products {
                    productId
                    quantity
                }
                productsInBill {
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
                servicesInBill {
                    id
                    description
                    minPrice
                    maxPrice
                }

                vehicle {
                    model
                    registrationNumber
                }
            }
        }
    }
`,Oe=g.Ps`
query FindBillById($findBillById: String!) {
    bill(id: $findBillById) {
        id
        no
        createdAt
        currencyId
        paymentMethodId
        paymentStatus
        products {
            productId
            quantity
        }
        productsInBill {
            id
            name
            uom {
                abbr
            }
            price
        }
        status
        customerId
        total
        billDate
    }
}
`,Je=g.Ps`
    mutation CreatedBill($createBillInput: CreateBillInput!) {
        createdBill(createBillInput: $createBillInput) {
            id
            no
            createdAt
            currencyId
            paymentMethodId
            paymentStatus
            products {
                productId
                quantity
            }
            productsInBill {
                id
                name
                uom {
                    abbr
                }
                price
            }
            status
            customerId
            total
            userId
            billDate
        }
    }
`,Qe=g.Ps`
    mutation UpdateBill($updateBillInput: UpdateBillInput!) {
        updatedBill(updateBillInput: $updateBillInput) {
            id
            no
            createdAt
            currencyId
            paymentMethodId
            paymentStatus
            products {
                productId
                quantity
            }
            productsInBill {
                id
                name
                uom {
                    abbr
                }
                price
            }
            status
            customerId
            total
            userId
            billDate
        }
    }
`,Ne=g.Ps`
    mutation RemoveBill($removeBillId: String!) {
        removeBill(id: $removeBillId)
    }
`;var B=c(57261);let Re=(()=>{class o{constructor(t,n){this.apolloProvider=t,this._snackBar=n,this._apollo=this.apolloProvider.use("BALANC")}createBill(t){return this._apollo.mutate({mutation:Je,variables:{createBillInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:n})=>{if(n){let r="";n.forEach(l=>r+=`\n ${l.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(g._M),e.LFG(B.ux))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var xe=c(11641),be=c(60814),ve=c(17264),C=c(85094),p=c(69808),H=c(91079),se=c(90508),w=c(47423),q=c(86856),J=c(25245),f=c(67322),U=c(98833),le=c(74107);const $e=["billNgForm"];function Me(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.addProductToBill(r))}),e._uU(1),e.qZA()}if(2&o){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function Ee(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",40)(2,"div"),e._uU(3),e.qZA(),e.TgZ(4,"div",41),e._uU(5),e.qZA(),e.TgZ(6,"div",38),e._uU(7," U "),e.qZA(),e.TgZ(8,"div",38)(9,"div",42)(10,"button",43),e.NdJ("click",function(){const i=e.CHM(t),r=i.index,l=i.$implicit,m=e.oxw(2);return e.KtG(m.decrementProductQty(r,l))}),e._UZ(11,"mat-icon",44),e.qZA(),e.TgZ(12,"mat-form-field",45)(13,"input",46),e.NdJ("ngModelChange",function(i){const l=e.CHM(t).$implicit;return e.KtG(l.quantity=i)}),e.qZA()(),e.TgZ(14,"button",43),e.NdJ("click",function(){const i=e.CHM(t),r=i.index,l=i.$implicit,m=e.oxw(2);return e.KtG(m.incrementProductQty(r,l))}),e._UZ(15,"mat-icon",44),e.qZA()()(),e.TgZ(16,"div",47),e._uU(17),e.ALo(18,"number"),e.qZA(),e.TgZ(19,"div",47),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"div",48)(23,"button",49),e.NdJ("click",function(){const r=e.CHM(t).index,l=e.oxw(2);return e.KtG(l.removeProductToBill(r))}),e._UZ(24,"mat-icon",44),e.qZA()()(),e.BQk()}if(2&o){const t=a.$implicit,n=a.index,i=e.oxw(2);e.xp6(3),e.hij(" ",n+1," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(6),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(2),e.Q6J("ngModel",t.quantity),e.xp6(2),e.Q6J("svgIcon","mat_solid:add"),e.xp6(2),e.hij(" ",e.xi3(18,8,t.price*i.billingForm.get("multiplier").value,"1.2-2")," "),e.xp6(3),e.hij(" ",e.xi3(21,11,t.quantity*t.price*i.billingForm.get("multiplier").value,"1.2-2")," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function Le(o,a){if(1&o&&(e.ynx(0),e.TgZ(1,"div",35)(2,"div",36),e._UZ(3,"div"),e.TgZ(4,"div",37),e._uU(5," Producto "),e.qZA(),e.TgZ(6,"div",38),e._uU(7," Presentaci\xf3n "),e.qZA(),e.TgZ(8,"div",38),e._uU(9," Cantidad "),e.qZA(),e.TgZ(10,"div",38),e._uU(11," Precio "),e.qZA(),e.TgZ(12,"div",38),e._uU(13," Total "),e.qZA(),e.TgZ(14,"div",38),e._uU(15," Quitar "),e.qZA()(),e.YNc(16,Ee,25,14,"ng-container",39),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(16),e.Q6J("ngForOf",t.billProducts)("ngForTrackBy",t.trackByFn)}}function ze(o,a){1&o&&(e.TgZ(0,"div",50),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}function Ye(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.selectCustomer(r))}),e._uU(1),e.qZA()}if(2&o){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function Ge(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La fecha de la factura es obligatoria "),e.qZA())}function je(o,a){if(1&o&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.no),e.xp6(1),e.hij(" ",t.name," ")}}function He(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El concepto es obligatorio "),e.qZA())}function Ke(o,a){if(1&o&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" x",t.value," ")}}function We(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El multiplicador es obligatorio "),e.qZA())}function Ve(o,a){if(1&o&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function Xe(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de comprobante es obligatorio "),e.qZA())}function et(o,a){if(1&o&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function tt(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de operaci\xf3n es obligatorio "),e.qZA())}function nt(o,a){if(1&o&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.iso," ")}}let ot=(()=>{class o{constructor(t,n,i){this._changeDetectorRef=t,this._formBuilder=n,this.store=i,this.audio=new Audio("./assets/sounds/caja.mp3"),this.bill=new xe.n2,this.billProducts=[],this.concepts=[],this.currencies=[],this.customers=[],this.customerSelected="",this.maxDate=new Date,this.multipliers=[],this.paymentMethods=[],this.operationTypes=[],this.products=[],this.searchCustomerControl=new s.NI(""),this.searchProductControl=new s.NI(""),this.total=0,this._unsubscribeAll=new F.x,this._fuseConfirmationService=(0,e.f3M)(R.R),this._billingService=(0,e.f3M)(Re),this.concepts=[{id:"1",no:"0001",name:"Entidades"},{id:"2",no:"0002",name:"Otras Formas de GE"},{id:"3",no:"0003",name:"Personas Naturales"},{id:"4",no:"0004",name:"Fuera del pa\xeds"}]}ngOnInit(){this.billingForm=this._formBuilder.group({id:new s.NI,billDate:new s.NI(new Date,[s.kI.required]),multiplier:new s.NI(1,[s.kI.required,s.kI.min(1)]),concept:new s.NI(null,[s.kI.required]),currencyId:new s.NI(null,[s.kI.required]),customerId:new s.NI(this.customerSelected,[s.kI.required]),operationTypeId:new s.NI(null,[s.kI.required]),paymentMethodId:new s.NI(null,[s.kI.required]),products:new s.Oe([])}),this.store.select(h.zd).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()}),this.store.select(_e.Af).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.multipliers=t,this._changeDetectorRef.markForCheck()}),this.store.select(be.p6).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.customers=t,this._changeDetectorRef.markForCheck()}),this.store.select(ve.K2).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.products=t,this._changeDetectorRef.markForCheck()}),this.store.select(Ue.VS).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.paymentMethods=t,this._changeDetectorRef.markForCheck()}),this.store.select(qe.pU).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.operationTypes=t,this._changeDetectorRef.markForCheck()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,Z.O)(""),(0,y.U)(t=>{const n="string"==typeof t?t:null==t?void 0:t.name;return n?this._filterProducts(n):this.products.slice()})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,Z.O)(""),(0,y.U)(t=>{const n="string"==typeof t?t:null==t?void 0:t.name;return n?this._filterCustomers(n):this.customers.slice()}))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}selectCustomer(t){this.billingForm.get("customerId").setValue(t.id)}addProductToBill(t){if(this.billProducts.findIndex(r=>r.productId===t.productId)>-1)return void this.searchProductControl.reset();const i=this._mapProductToBill(t);this.billProducts.push(i),this.searchProductControl.reset(),this._calculateBillTotal()}incrementProductQty(t,n){const i=n;i.quantity++,this.billProducts[t]=i,this._calculateBillTotal()}decrementProductQty(t,n){const i=n;i.quantity--,this.billProducts[t]=i,this._calculateBillTotal()}removeProductToBill(t){this.billProducts.splice(t,1),this._calculateBillTotal()}createBill(){let t=this.billingForm.getRawValue();t=(0,E.omit)(t,["id"]),t.products=this.billProducts,t.total=this.total,this._fuseConfirmationService.open({title:"Registrar venta",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,d.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._billingService.createBill(t).pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:"Factura registrada correctamente",icon:{show:!0,name:"mat_solid:done",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.audio.play(),this.searchProductControl.reset(),this.searchCustomerControl.reset(),this.billingForm.reset(),this.billProducts=[],this.total=0,this.customerSelected="",this._changeDetectorRef.markForCheck()})})}_mapProductToBill(t){const{productId:n,name:i,uom:r,price:l}=t;return new xe.vr(n,i,r,l,1)}_filterProducts(t){const n=t.toLowerCase();return this.products.filter(i=>i.name.toLowerCase().includes(n))}_filterCustomers(t){const n=t.toLowerCase();return this.customers.filter(i=>i.name.toLowerCase().includes(n))}_calculateBillTotal(){this.total=Number(this.billProducts.reduce((t,n)=>n.price*n.quantity+t,0).toFixed(2))*this.billingForm.get("multiplier").value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(s.qu),e.Y36(C.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["sales-billing"]],viewQuery:function(t,n){if(1&t&&e.Gf($e,5),2&t){let i;e.iGM(i=e.CRH())&&(n.billNgForm=i.first)}},decls:78,vars:52,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","items-center","p-6"],[1,"flex","flex-col","w-full"],[1,"text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-6","gap-y-12","sm:gap-x-4","sm:mt-12"],[1,"col-span-4","p-6","shadow","rounded-2xl","bg-card"],[1,"w-full"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[3,"displayWith"],["productsAutocomplete","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],[1,"flex","flex-col","flex-auto","mt-2","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf","ngIfElse"],["noBillProducts",""],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"flex","items-center","justify-center","w-full","gap-2","p-6","mb-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-t-2xl","bg-gradient-to-r","from-primary-500","to-primary-700"],[1,"p-6","space-y-3",3,"formGroup"],["billNgForm","ngForm"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],["customerAutocomplete","matAutocomplete"],[1,"flex","flex-col","gap-2","md:flex-row"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["billDate",""],[4,"ngIf"],[3,"formControlName","required"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"formControlName","required","placeholder"],[1,"flex","items-center","justify-end"],["mat-flat-button","",1,"w-full","text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[3,"value","click"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"hidden","text-left","sm:block"],[1,"hidden","text-center","sm:block"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"hidden","truncate","md:block"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded"],["matInput","","type","text","pattern","^[0-9]+$","name","quantity",1,"font-mono","font-semibold","text-center",3,"ngModel","ngModelChange"],[1,"hidden","font-mono","text-center","sm:block"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4," Facturar "),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"form",6)(8,"mat-form-field",7),e._UZ(9,"mat-icon",8)(10,"input",9),e.TgZ(11,"mat-autocomplete",10,11),e.YNc(13,Me,2,2,"mat-option",12),e.ALo(14,"async"),e.qZA()()(),e.TgZ(15,"div",13),e.YNc(16,Le,17,2,"ng-container",14),e.YNc(17,ze,2,0,"ng-template",null,15,e.W1O),e.qZA()(),e.TgZ(19,"div",16)(20,"div",17),e._uU(21),e.ALo(22,"number"),e.qZA(),e.TgZ(23,"form",18,19)(25,"mat-form-field",7),e._UZ(26,"mat-icon",8)(27,"input",20),e.TgZ(28,"mat-autocomplete",10,21),e.YNc(30,Ye,2,2,"mat-option",12),e.ALo(31,"async"),e.qZA()(),e.TgZ(32,"div",22)(33,"mat-form-field",23)(34,"mat-label"),e._uU(35,"Fecha de la factura"),e.qZA(),e._UZ(36,"input",24),e.TgZ(37,"mat-hint"),e._uU(38,"DD/MM/YYYY"),e.qZA(),e._UZ(39,"mat-datepicker-toggle",25)(40,"mat-datepicker",null,26),e.YNc(42,Ge,2,0,"mat-error",27),e.qZA(),e.TgZ(43,"mat-form-field",23)(44,"mat-label"),e._uU(45,"Concepto"),e.qZA(),e.TgZ(46,"mat-select",28),e.YNc(47,je,2,2,"mat-option",29),e.qZA(),e.YNc(48,He,2,0,"mat-error",27),e.qZA(),e.TgZ(49,"mat-form-field",23)(50,"mat-label"),e._uU(51,"Multiplicador"),e.qZA(),e.TgZ(52,"mat-select",28)(53,"mat-option",30),e._uU(54," x1 "),e.qZA(),e.YNc(55,Ke,2,2,"mat-option",29),e.qZA(),e.YNc(56,We,2,0,"mat-error",27),e.qZA()(),e.TgZ(57,"div",22)(58,"mat-form-field",23)(59,"mat-label"),e._uU(60,"M\xe9todo de pago"),e.qZA(),e.TgZ(61,"mat-select",28),e.YNc(62,Ve,2,2,"mat-option",29),e.qZA(),e.YNc(63,Xe,2,0,"mat-error",27),e.qZA(),e.TgZ(64,"mat-form-field",23)(65,"mat-label"),e._uU(66,"Tipo de Operaci\xf3n"),e.qZA(),e.TgZ(67,"mat-select",28),e.YNc(68,et,2,2,"mat-option",29),e.qZA(),e.YNc(69,tt,2,0,"mat-error",27),e.qZA(),e.TgZ(70,"mat-form-field",23)(71,"mat-label"),e._uU(72,"Moneda"),e.qZA(),e.TgZ(73,"mat-select",31),e.YNc(74,nt,2,2,"mat-option",29),e.qZA()()(),e.TgZ(75,"div",32)(76,"button",33),e.NdJ("click",function(){return n.createBill()}),e._uU(77," Confirmar "),e.qZA()()()()()()()()),2&t){const i=e.MAs(12),r=e.MAs(18),l=e.MAs(29),m=e.MAs(41);e.xp6(9),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",n.searchProductControl)("matAutocomplete",i)("placeholder","Buscar productos"),e.xp6(1),e.Q6J("displayWith",n.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(14,45,n.productsFiltered)),e.xp6(3),e.Q6J("ngIf",n.billProducts.length>0)("ngIfElse",r),e.xp6(5),e.hij(" ",e.xi3(22,47,n.total*n.billingForm.get("multiplier").value,"1.2-2")," "),e.xp6(2),e.Q6J("formGroup",n.billingForm),e.xp6(3),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",n.searchCustomerControl)("matAutocomplete",l)("placeholder","Buscar cliente")("required",!0),e.xp6(1),e.Q6J("displayWith",n.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(31,50,n.customersFiltered)),e.xp6(6),e.Q6J("matDatepicker",m)("formControlName","billDate")("max",n.maxDate)("required",!0),e.xp6(3),e.Q6J("for",m),e.xp6(3),e.Q6J("ngIf",n.billingForm.get("billDate").hasError("required")),e.xp6(4),e.Q6J("formControlName","concept")("required",!0),e.xp6(1),e.Q6J("ngForOf",n.concepts),e.xp6(1),e.Q6J("ngIf",n.billingForm.get("concept").hasError("required")),e.xp6(4),e.Q6J("formControlName","multiplier")("required",!0),e.xp6(1),e.Q6J("value",1),e.xp6(2),e.Q6J("ngForOf",n.multipliers),e.xp6(1),e.Q6J("ngIf",n.billingForm.get("multiplier").hasError("required")),e.xp6(5),e.Q6J("formControlName","paymentMethodId")("required",!0),e.xp6(1),e.Q6J("ngForOf",n.paymentMethods),e.xp6(1),e.Q6J("ngIf",n.billingForm.get("paymentMethodId").hasError("required")),e.xp6(4),e.Q6J("formControlName","operationTypeId")("required",!0),e.xp6(1),e.Q6J("ngForOf",n.operationTypes),e.xp6(1),e.Q6J("ngIf",n.billingForm.get("operationTypeId").hasError("required")),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0)("placeholder","Moneda"),e.xp6(1),e.Q6J("ngForOf",n.currencies),e.xp6(2),e.Q6J("disabled",n.billingForm.pristine||n.billingForm.invalid||0===n.billProducts.length)}},dependencies:[p.sg,p.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.c5,s.On,s.F,s.oH,s.sg,s.u,H.XC,H.ZL,se.ey,w.lW,q.Mq,q.hl,q.nW,J.Hw,f.TO,f.KE,f.bx,f.hX,f.qo,U.Nt,le.gD,p.Ov,p.JJ],encapsulation:2,changeDetection:0}),o})();var P=c(86087),I=c(84847),K=c(39646),W=c(56451),A=c(95698),V=c(78372),v=c(63900),Q=c(15439),X=c(58493),k=c(54641),L=c(2315);const ye=o=>o.bills,ce=((0,C.P1)(ye,o=>o.bill),(0,C.P1)(ye,o=>o.bills));var ee=c(86428),te=c(54787),S=c(48966);let it=(()=>{class o{constructor(t){this._dialogRef=t,this.dateControl=new s.NI(null,[s.kI.required])}closeDialog(){this._dialogRef.close()}selectDate(){const t=new Date(this.dateControl.value);this._dialogRef.close(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(S.so))},o.\u0275cmp=e.Xpm({type:o,selectors:[["sales-bills-date-dialog-select"]],decls:19,vars:7,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","py-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],["appearance","fill"],["matInput","",3,"matDatepicker","formControl"],["matIconSuffix","",3,"for"],["dp",""],[1,"flex","items-center","px-6","py-4","space-x-3","justify-between","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3," Seleccione la fecha de las facturas que desea exportar "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"mat-form-field",6),e._UZ(8,"input",7),e.TgZ(9,"mat-hint"),e._uU(10,"DD/MM/YYYY"),e.qZA(),e._UZ(11,"mat-datepicker-toggle",8)(12,"mat-datepicker",null,9),e.qZA()()()(),e.TgZ(14,"div",10)(15,"button",11),e._uU(16," Cancelar "),e.qZA(),e.TgZ(17,"button",12),e.NdJ("click",function(){return n.selectDate()}),e._uU(18," Aceptar "),e.qZA()()()),2&t){const i=e.MAs(13);e.xp6(8),e.Q6J("matDatepicker",i)("formControl",n.dateControl),e.xp6(3),e.Q6J("for",i),e.xp6(4),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("color","primary")("disabled",n.dateControl.invalid)("matDialogClose","confirmed")}},dependencies:[s.Fj,s.JJ,s.oH,w.lW,q.Mq,q.hl,q.nW,S.ZT,f.KE,f.bx,U.Nt],encapsulation:2}),o})();var ne=c(22594),D=c(45840),oe=c(75714);let Ce=(()=>{class o{constructor(t,n,i){this.apolloProvider=t,this._snackBar=n,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}getBills(t=1,n=5,i="no",r="desc",l=""){return this._apollo.query({query:Pe,errorPolicy:"all",variables:{offset:n*(t-1),limit:n,sort:i,order:r,search:l}}).pipe((0,_.b)(({errors:m,data:u})=>{if(m){let b="";m.forEach(O=>b+=`\n ${O.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:b,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,L.Im)({bills:u.findAllBills.bills})),this.store.dispatch((0,oe.Jr)({pagination:u.findAllBills.pagination}))}))}getBillsByDate(t){return this._apollo.query({query:De,errorPolicy:"all",variables:{date:t}}).pipe((0,_.b)(({errors:n})=>{if(n){let i="";n.forEach(r=>i+=`\n ${r.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getBillById(t){return this._apollo.query({query:Oe,variables:{findBillByIdId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:n,data:i})=>{if(n){let r="";n.forEach(l=>r+=`\n ${l.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,L.QG)({bill:i.bill}))}))}updateBill(t){return this.store.select(ce).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:Qe,variables:{updateBillInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:r})=>{if(i){let u="";i.forEach(b=>u+=`\n ${b.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:u,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=(0,D.Z)(n);l[n.findIndex(u=>u.id===t.id)]=r.updatedBill,this.store.dispatch((0,L.Im)({bills:l}))}))))}removeBill(t){return this.store.select(ce).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:Ne,variables:{removeBillId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let m="";i.forEach(u=>m+=`\n ${u.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,D.Z)(n),l=n.findIndex(m=>m.id===t);r.splice(l,1),this.store.dispatch((0,L.Im)({bills:r}))}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(g._M),e.LFG(B.ux),e.LFG(C.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var rt=c(51927),Te=c(40520),me=c(92181),de=c(87238);function at(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",33)(2,"div",34),e._uU(3),e.qZA(),e.TgZ(4,"div",34),e._uU(5),e.ALo(6,"date"),e.qZA(),e.TgZ(7,"div",29),e._uU(8),e.qZA(),e.TgZ(9,"div",30),e._uU(10),e.qZA(),e.TgZ(11,"div",34),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"div",30),e._uU(15),e.qZA(),e.TgZ(16,"div",35)(17,"button",36),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("open",r))}),e._UZ(18,"mat-icon",37),e.qZA(),e.TgZ(19,"button",38),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("print",r))}),e._UZ(20,"mat-icon",37),e.qZA(),e.TgZ(21,"button",39),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("download",r))}),e._UZ(22,"mat-icon",37),e.qZA(),e.TgZ(23,"button",40),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.exportVersat(r))}),e._UZ(24,"mat-icon",37),e.qZA()()(),e.BQk()}if(2&o){const t=a.$implicit;e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(6,10,t.createdAt,"dd/MM/yyyy")," "),e.xp6(3),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(13,13,t.total,"1.2-2")," "),e.xp6(3),e.hij(" ",t.status," "),e.xp6(3),e.Q6J("svgIcon","mat_solid:visibility"),e.xp6(2),e.Q6J("svgIcon","mat_solid:print"),e.xp6(2),e.Q6J("svgIcon","mat_solid:download"),e.xp6(2),e.Q6J("svgIcon","mat_solid:upload")}}function st(o,a){if(1&o&&(e.ynx(0),e.YNc(1,at,25,16,"ng-container",32),e.BQk()),2&o){const t=a.ngIf,n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",n.trackByFn)}}const lt=function(o){return{"pointer-events-none":o}},ct=function(){return[5,10,25,100]};function mt(o,a){if(1&o&&(e.ynx(0),e.TgZ(1,"div",26)(2,"div",27)(3,"div",28),e._uU(4," N\xfamero "),e.qZA(),e.TgZ(5,"div",28),e._uU(6," Fecha "),e.qZA(),e.TgZ(7,"div",29),e._uU(8," Cliente "),e.qZA(),e.TgZ(9,"div",30),e._uU(10," Moneda "),e.qZA(),e.TgZ(11,"div",28),e._uU(12," Importe "),e.qZA(),e.TgZ(13,"div",30),e._uU(14," Estado "),e.qZA(),e.TgZ(15,"div",30),e._uU(16," Acciones "),e.qZA()(),e.YNc(17,st,2,2,"ng-container",23),e.ALo(18,"async"),e.qZA(),e._UZ(19,"mat-paginator",31),e.BQk()),2&o){const t=e.oxw(2);e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(2),e.Q6J("mat-sort-header","createdAt"),e.xp6(6),e.Q6J("mat-sort-header","total"),e.xp6(6),e.Q6J("ngIf",e.lcZ(18,10,t.bills$)),e.xp6(2),e.Q6J("ngClass",e.VKq(12,lt,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(14,ct))("showFirstLastButtons",!0)}}function dt(o,a){if(1&o&&(e.ynx(0),e.YNc(1,mt,20,15,"ng-container",25),e.BQk()),2&o){const t=a.ngIf;e.oxw();const n=e.MAs(39);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",n)}}function ut(o,a){1&o&&(e.TgZ(0,"div",41),e._uU(1," \xa1No se ha registrado ninguna factura! "),e.qZA())}const pt=function(){return["/sales/billing"]};k.vfs=X.I.vfs;let gt=(()=>{class o{constructor(t,n,i,r,l,m,u,b){this._billsService=t,this._changeDetectorRef=n,this._dialog=i,this._fileSaverService=r,this._fuseConfirmationService=l,this._httpClient=m,this._snackBar=u,this.store=b,this.bills$=(0,K.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.merchantLogo=null,this.searchInputControl=new s.NI,this.selectedSlide=null,this.user=null,this._unsubscribeAll=new F.x}ngOnInit(){this.store.select(te.rk).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ne.Qs).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.bills$=this.store.select(ce),this.store.select(ee.B).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,d.R)(this._unsubscribeAll),(0,V.b)(300),(0,v.w)(t=>(this.isLoading=!0,this._billsService.getBills(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,y.U)(()=>{this.isLoading=!1})).subscribe(),this.merchant.logoUrl&&this._httpClient.get(this.merchant.logoUrl,{responseType:"blob"}).subscribe(t=>{const n=new FileReader;n.onloadend=()=>{this.merchantLogo=n.result},n.readAsDataURL(t)})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,W.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._billsService.getBills(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,y.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,L.Hl)())}generatePDF(t="open",n){const i={content:[{table:{widths:["*","*"],body:[[{image:this.merchantLogo,width:150},{text:"FACTURA: "+n.no,fontSize:18,bold:!0,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{table:{body:[[{text:this.merchant.name,fontSize:18,bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:`${this.merchant.address}, municipio ${this.merchant.city}, provincia ${this.merchant.state}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`NIT: ${this.merchant.nit}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Tel.: ${this.merchant.phoneNumbers.length>0?this.merchant.phoneNumbers[0].phoneNumber:""}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`@: ${this.merchant.emails.length>0?this.merchant.emails[0].email:""}`,fontSize:10,fontFeatures:["c2sc"]}],[{text:`Moneda${n.currenciesPercents.cup>0&&n.currenciesPercents.cup<1?"s :":":"} ${n.currenciesPercents.cup>0&&n.currenciesPercents.cup<=1?"CUP":""}${n.currenciesPercents.cup>0&&n.currenciesPercents.cup<1?",":"."} ${n.currenciesPercents.usd>0&&n.currenciesPercents.usd<=1?"USD":""}`,fontSize:12,fontFeatures:["c2sc","smcp"]}]]},layout:"noBorders"},{table:{body:[[{text:n.customer.name,fontSize:18,alignment:"right",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:`${n.customer.address}, municipio ${n.customer.city}, provincia ${n.customer.state}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{text:`NIT: ${n.customer.nit}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{text:`Tel.: ${n.customer.phoneNumber?n.customer.phoneNumber.phoneNumber:""}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{text:`@: ${n.customer.email?n.customer.email.email:""}`,fontSize:10,alignment:"right",fontFeatures:["c2sc"]}]]},layout:"noBorders"}]]},layout:"noBorders"},{table:{headerRows:1,widths:["*","*"],body:[[{text:"Datos del Veh\xedculo",style:"table_header",alignment:"left"},{text:"",fontFeatures:["c2sc","smcp"]}],[{text:"Matr\xedcula",style:"table_header",alignment:"left"},{text:n.vehicle.registrationNumber,fontFeatures:["c2sc","smcp"]}],[{text:"Marca/Modelo",style:"table_header",alignment:"left"},{text:`${n.vehicle.brand.name}/${n.vehicle.model}`,fontFeatures:["c2sc","smcp"]}]]},layout:{hLineWidth:(r,l)=>.7,vLineWidth:(r,l)=>.7},marginTop:20},{table:{headerRows:1,widths:[30,"*",35,60,60,60,60,60],body:[[{text:"Item",style:"table_header"},{text:"Producto o Servicio",style:"table_header",alignment:"left"},{text:"Unidad",style:"table_header"},{text:"Cantidad",style:"table_header"},{text:"Precio CUP",style:"table_header"},{text:"Total CUP",style:"table_header"},{text:"Precio USD",style:"table_header"},{text:"Total USD",style:"table_header"}],...n.productsInBill.map(r=>[{text:n.productsInBill.indexOf(r)+1,alignment:"center",style:"table_body"},{text:r.name,style:"table_body"},{text:r.uom.abbr,alignment:"center",style:"table_body"},{text:this._getProductQuantity(n.products,r.id),alignment:"center",style:"table_body"},{text:(r.price*n.currenciesPercents.cup).toFixed(2),alignment:"center",style:"table_body"},{text:(this._getProductQuantity(n.products,r.id)*r.price*n.currenciesPercents.cup).toFixed(2),alignment:"center",style:"table_body"},{text:(r.price*n.currenciesPercents.usd/n.rate.value).toFixed(2),alignment:"center",style:"table_body"},{text:(this._getProductQuantity(n.products,r.id)*r.price*n.currenciesPercents.usd/n.rate.value).toFixed(2),alignment:"center",style:"table_body"}]),...n.servicesInBill.map(r=>[{text:n.productsInBill.length+n.servicesInBill.indexOf(r)+1,alignment:"center",style:"table_body"},{text:r.description,style:"table_body"},{},{},{text:(r.minPrice*n.currenciesPercents.cup).toFixed(2),alignment:"center",style:"table_body"},{text:(r.minPrice*n.currenciesPercents.cup).toFixed(2),alignment:"center",style:"table_body"},{text:(r.minPrice*n.currenciesPercents.usd/n.rate.value).toFixed(2),alignment:"center",style:"table_body"},{text:(r.minPrice*n.currenciesPercents.usd/n.rate.value).toFixed(2),alignment:"center",style:"table_body"}]),[{rowSpan:3,colSpan:4,text:""},"","","",{text:"Subtotal CUP",style:"totals_name"},{text:n.totalCup.toFixed(2),style:"totals_value"},{text:"Subtotal USD",style:"totals_name"},{text:n.totalUsd.toFixed(2),style:"totals_value"}],[{colSpan:4,text:""},"","","",{text:"Descuento CUP",style:"totals_name"},{text:Number(0).toFixed(2),style:"totals_value"},{text:"Descuento USD",style:"totals_name"},{text:Number(0).toFixed(2),style:"totals_value"}],[{colSpan:4,text:""},"","","",{text:"Total CUP",style:"totals_name"},{text:n.totalCup.toFixed(2),style:"totals_value"},{text:"Total USD",style:"totals_name"},{text:n.totalUsd.toFixed(2),style:"totals_value"}]]},layout:{hLineWidth:(r,l)=>.7,vLineWidth:(r,l)=>.7},marginTop:20},{marginTop:20,layout:{hLineWidth:(r,l)=>.7,vLineWidth:(r,l)=>.7},table:{headerRows:1,widths:["*","*"],body:[[{style:"table_header",text:"elaborado"},{style:"table_header",text:"recibido"}],[{text:"Nombre y apellidos:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:"Nombre y apellidos:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]}],[{text:"Cargo:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:"Cargo:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]}],[{text:"Firma:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:"Firma:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]}],[{},{text:"Carnet de Identidad:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]}],[{text:"Fecha:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:"Fecha:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]}]]}}],footer:(r,l)=>({table:{widths:["*","*"],body:[[{text:`Factura: ${n.no} generada para ${n.customer.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${r.toString()}/${l} - Fecha de impresi\xf3n ${Q().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:`Factura: ${n.no}`,author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:Q().toDate(),modDate:Q().toDate(),producer:this.merchant.name}};switch(t){case t="download":k.createPdf(i).download();break;case t="open":k.createPdf(i).open();break;case t="print":k.createPdf(i).print()}}exportVersat(t){this._fileSaverService.exportAsFacFile(t,this.user,this._getBankAccountMC(this.merchant),this._getBankAccountOM(this.merchant,t))}trackByFn(t,n){return t||n.id}exportBillsByDateToVersat(){this._dialog.open(it,{panelClass:"ath-dialog-panel",maxWidth:"500px"}).afterClosed().subscribe(n=>{this._billsService.getBillsByDate(n.toISOString()).pipe((0,A.q)(1)).subscribe(({data:i})=>{const l=(0,E.groupBy)(i.findAllBillsByDate.bills,"paymentMethod.name");(0,E.groupBy)(l,"operationType.name")})})}_getBankAccountMC(t){return t.bankAccounts.find(i=>"CUP"===i.currency).no}_getBankAccountOM(t,n){return t.bankAccounts.find(i=>i.currency===n.currency.iso).no}_getProductQuantity(t,n){return t.find(i=>i.productId===n).quantity}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Ce),e.Y36(e.sBO),e.Y36(S.uw),e.Y36(rt.m),e.Y36(R.R),e.Y36(Te.eN),e.Y36(B.ux),e.Y36(C.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["sales-bills"]],viewQuery:function(t,n){if(1&t&&(e.Gf(P.NW,5),e.Gf(I.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(n._paginator=i.first),e.iGM(i=e.CRH())&&(n._sort=i.first)}},decls:40,vars:15,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,""],["mat-icon-button","",1,"",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noBills",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","bills-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hiddem","sm:block",3,"mat-sort-header"],[1,"hiddem","sm:block"],[1,"hiddem","sm:block","text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","bills-grid","md:px-8"],[1,"hiddem","sm:block","font-mono"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Imprimir factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Descargar factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Exportar a Versat",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Facturas"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Facturas "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Registrar Factura"),e.qZA()(),e.TgZ(26,"div",17)(27,"button",18),e._UZ(28,"mat-icon",15),e.qZA(),e.TgZ(29,"mat-menu",null,19)(31,"button",20),e.NdJ("click",function(){return n.exportBillsByDateToVersat()}),e._UZ(32,"mat-icon",15),e._uU(33," Exportar facturas por d\xeda para Versat "),e.qZA()()()()(),e.TgZ(34,"div",21)(35,"div",22),e.YNc(36,dt,2,2,"ng-container",23),e.ALo(37,"async"),e.YNc(38,ut,2,0,"ng-template",null,24,e.W1O),e.qZA()()()),2&t){const i=e.MAs(30);e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",n.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(1),e.Q6J("routerLink",e.DdM(14,pt)),e.xp6(1),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(4),e.Q6J("matMenuTriggerFor",i),e.xp6(1),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(4),e.Q6J("svgIcon","mat_solid:upload"),e.xp6(4),e.Q6J("ngIf",e.lcZ(37,12,n.bills$))}},dependencies:[T.rH,T.yS,p.mk,p.sg,p.O5,s.Fj,s.JJ,s.oH,w.lW,J.Hw,f.KE,f.qo,U.Nt,me.VK,me.OP,me.p6,P.NW,I.YE,I.nU,de.gM,p.Ov,p.JJ,p.uU],encapsulation:2,changeDetection:0}),o})();const ft=g.Ps`
    mutation CreatedOffer($createOfferInput: CreateOfferInput!) {
        createdOffer(createOfferInput: $createOfferInput) {
            id
            no
            createdAt
            currencyId
            products {
                productId
                name
                uom
                quantity
                price
            }
            status
            customerId
            total
            userId
            offerDate
        }
    }

`,ht=g.Ps`
    mutation UpdateOffer($updateOfferInput: UpdateOfferInput!) {
        updatedOffer(updateOfferInput: $updateOfferInput) {
            id
            no
            createdAt
            currencyId
            products {
                productId
                name
                uom
                quantity
                price
            }
            status
            customerId
            total
            userId
            offerDate
        }
    }
`,_t=g.Ps`
    mutation RemoveOffer($removeOfferId: String!) {
        removeOffer(id: $removeOfferId)
    }
`,xt=g.Ps`
    query FindAllOffers($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllOffers(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            offers {
                id
                no
                user {
                    name
                    lastname1
                    lastname2
                }
                createdAt
                currencyId
                currency {
                    iso
                }
                status
                customerId
                customer {
                    name
                    address
                    city
                    state
                    nit
                }
                products {
                    name
                    # brand
                    uom
                    quantity
                    price
                }
                total
                offerDate
            }
        }
    }
`,bt=g.Ps`
    query FindOfferById($findOfferById: String!) {
        offer(id: $findOfferById) {
            id
            no
            createdAt
            currencyId
            products
            status
            customerId
            total
            offerDate
        }
    }
`;let vt=(()=>{class o{constructor(t,n){this.apolloProvider=t,this._snackBar=n,this._apollo=this.apolloProvider.use("BALANC")}createOffer(t){return this._apollo.mutate({mutation:ft,variables:{createOfferInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:n})=>{if(n){let r="";n.forEach(l=>r+=`\n ${l.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(g._M),e.LFG(B.ux))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();class yt{}class Ct{constructor(a,t,n,i,r){this.productId=a,this.name=t,this.uom=n,this.price=i,this.quantity=r}}const Tt=["offerNgForm"];function Zt(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.addProductToOffer(r))}),e._uU(1),e.qZA()}if(2&o){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function It(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",40)(2,"div"),e._uU(3),e.qZA(),e.TgZ(4,"div",41),e._uU(5),e.qZA(),e.TgZ(6,"div",38),e._uU(7," U "),e.qZA(),e.TgZ(8,"div",38)(9,"div",42)(10,"button",43),e.NdJ("click",function(){const i=e.CHM(t),r=i.index,l=i.$implicit,m=e.oxw(2);return e.KtG(m.decrementProductQty(r,l))}),e._UZ(11,"mat-icon",44),e.qZA(),e.TgZ(12,"mat-form-field",45)(13,"input",46),e.NdJ("ngModelChange",function(i){const l=e.CHM(t).$implicit;return e.KtG(l.quantity=i)}),e.qZA()(),e.TgZ(14,"button",43),e.NdJ("click",function(){const i=e.CHM(t),r=i.index,l=i.$implicit,m=e.oxw(2);return e.KtG(m.incrementProductQty(r,l))}),e._UZ(15,"mat-icon",44),e.qZA()()(),e.TgZ(16,"div",47),e._uU(17),e.ALo(18,"number"),e.qZA(),e.TgZ(19,"div",47),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"div",48)(23,"button",49),e.NdJ("click",function(){const r=e.CHM(t).index,l=e.oxw(2);return e.KtG(l.removeProductToOffer(r))}),e._UZ(24,"mat-icon",44),e.qZA()()(),e.BQk()}if(2&o){const t=a.$implicit,n=a.index,i=e.oxw(2);e.xp6(3),e.hij(" ",n+1," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(6),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(2),e.Q6J("ngModel",t.quantity),e.xp6(2),e.Q6J("svgIcon","mat_solid:add"),e.xp6(2),e.hij(" ",e.xi3(18,8,t.price*i.bidForm.get("multiplier").value,"1.2-2")," "),e.xp6(3),e.hij(" ",e.xi3(21,11,t.quantity*t.price*i.bidForm.get("multiplier").value,"1.2-2")," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function At(o,a){if(1&o&&(e.ynx(0),e.TgZ(1,"div",35)(2,"div",36),e._UZ(3,"div"),e.TgZ(4,"div",37),e._uU(5," Producto "),e.qZA(),e.TgZ(6,"div",38),e._uU(7," Presentaci\xf3n "),e.qZA(),e.TgZ(8,"div",38),e._uU(9," Cantidad "),e.qZA(),e.TgZ(10,"div",38),e._uU(11," Precio "),e.qZA(),e.TgZ(12,"div",38),e._uU(13," Total "),e.qZA(),e.TgZ(14,"div",38),e._uU(15," Quitar "),e.qZA()(),e.YNc(16,It,25,14,"ng-container",39),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(16),e.Q6J("ngForOf",t.offerProducts)("ngForTrackBy",t.trackByFn)}}function St(o,a){1&o&&(e.TgZ(0,"div",50),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}function Ft(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"mat-option",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.selectCustomer(r))}),e._uU(1),e.qZA()}if(2&o){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function kt(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," La fecha de la oferta es obligatoria "),e.qZA())}function Bt(o,a){if(1&o&&(e.TgZ(0,"mat-option",31),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.iso," ")}}function wt(o,a){if(1&o&&(e.TgZ(0,"mat-option",31),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" x",t.value," ")}}function qt(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El multiplicador es obligatorio "),e.qZA())}let Ut=(()=>{class o{constructor(t,n,i){this._changeDetectorRef=t,this._formBuilder=n,this.store=i,this.currencies=[],this.customers=[],this.customerSelected="",this.maxDate=new Date,this.multipliers=[],this.offer=new yt,this.offerProducts=[],this.products=[],this.searchCustomerControl=new s.NI(""),this.searchProductControl=new s.NI(""),this.total=0,this._unsubscribeAll=new F.x,this._fuseConfirmationService=(0,e.f3M)(R.R),this._bidService=(0,e.f3M)(vt)}ngOnInit(){this.bidForm=this._formBuilder.group({id:new s.NI,multiplier:new s.NI(1,[s.kI.required,s.kI.min(1)]),currencyId:new s.NI(null,[s.kI.required]),customerId:new s.NI(this.customerSelected,[s.kI.required]),offerDate:new s.NI(new Date,[s.kI.required]),products:new s.Oe([])}),this.store.select(_e.Af).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.multipliers=t,this._changeDetectorRef.markForCheck()}),this.store.select(h.zd).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()}),this.store.select(be.p6).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.customers=t,this._changeDetectorRef.markForCheck()}),this.store.select(ve.K2).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.products=t,this._changeDetectorRef.markForCheck()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,Z.O)(""),(0,y.U)(t=>{const n="string"==typeof t?t:null==t?void 0:t.name;return n?this._filterProducts(n):this.products.slice()})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,Z.O)(""),(0,y.U)(t=>{const n="string"==typeof t?t:null==t?void 0:t.name;return n?this._filterCustomers(n):this.customers.slice()}))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}selectCustomer(t){this.bidForm.get("customerId").setValue(t.id)}addProductToOffer(t){if(this.offerProducts.findIndex(r=>r.productId===t.productId)>-1)return void this.searchProductControl.reset();const i=this._mapProductToOffer(t);this.offerProducts.push(i),this.searchProductControl.reset(),this._calculateOfferTotal()}incrementProductQty(t,n){const i=n;i.quantity++,this.offerProducts[t]=i,this._calculateOfferTotal()}decrementProductQty(t,n){const i=n;i.quantity--,this.offerProducts[t]=i,this._calculateOfferTotal()}removeProductToOffer(t){this.offerProducts.splice(t,1),this._calculateOfferTotal()}createOffer(){let t=this.bidForm.getRawValue();t=(0,E.omit)(t,["id"]),t.products=this.offerProducts,t.total=this.total,console.log({offer:t}),this._fuseConfirmationService.open({title:"Registrar venta",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,d.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._bidService.createOffer(t).pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:"Oferta creada correctamente",icon:{show:!0,name:"mat_solid:done",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.searchProductControl.reset(),this.searchCustomerControl.reset(),this.bidForm.reset(),this.offerProducts=[],this.total=0,this._changeDetectorRef.markForCheck()})})}_mapProductToOffer(t){const{productId:n,name:i,uom:r,price:l}=t;return new Ct(n,i,r,l,1)}_filterProducts(t){const n=t.toLowerCase();return this.products.filter(i=>i.name.toLowerCase().includes(n))}_filterCustomers(t){const n=t.toLowerCase();return this.customers.filter(i=>i.name.toLowerCase().includes(n))}_calculateOfferTotal(){this.total=Number(this.offerProducts.reduce((t,n)=>n.price*n.quantity+t,0).toFixed(2))*this.bidForm.get("multiplier").value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(s.qu),e.Y36(C.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["sales-bid"]],viewQuery:function(t,n){if(1&t&&e.Gf(Tt,5),2&t){let i;e.iGM(i=e.CRH())&&(n.offerNgForm=i.first)}},decls:60,vars:40,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","items-center","p-6"],[1,"flex","flex-col","w-full"],[1,"text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"grid","grid-cols-1","sm:grid-cols-6","grid-flow-row","gap-y-12","sm:gap-x-4","mt-8","sm:mt-12"],[1,"col-span-4","p-6","shadow","rounded-2xl","bg-card"],[1,"w-full"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[3,"displayWith"],["productsAutocomplete","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],[1,"flex","flex-col","mt-2","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf","ngIfElse"],["noOfferProducts",""],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"flex","justify-center","rounded-t-2xl","gap-2","font-mono","mb-2","items-center","leading-7","text-3xl","text-white","font-semibold","w-full","p-6","bg-gradient-to-r","from-primary-500","to-primary-700"],[1,"space-y-3","p-6",3,"formGroup"],["billNgForm","ngForm"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],["customerAutocomplete","matAutocomplete"],[1,"flex","flex-col","md:flex-row","gap-2"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["offerDate",""],[4,"ngIf"],[3,"formControlName","required","placeholder"],[3,"value",4,"ngFor","ngForOf"],[3,"formControlName","required"],[3,"value"],[1,"flex","items-center","justify-end"],["mat-flat-button","",1,"w-full","text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[3,"value","click"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left","hidden","sm:block"],[1,"text-center","hidden","sm:block"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"hidden","truncate","md:block"],[1,"flex","flex-row","gap-2","justify-center","items-center"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded"],["matInput","","type","number","name","quantity","disabled","",1,"text-center","font-semibold","font-mono",3,"ngModel","ngModelChange"],[1,"text-center","hidden","sm:block","font-mono"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4," Ofertar "),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"form",6)(8,"mat-form-field",7),e._UZ(9,"mat-icon",8)(10,"input",9),e.TgZ(11,"mat-autocomplete",10,11),e.YNc(13,Zt,2,2,"mat-option",12),e.ALo(14,"async"),e.qZA()()(),e.TgZ(15,"div",13),e.YNc(16,At,17,2,"ng-container",14),e.YNc(17,St,2,0,"ng-template",null,15,e.W1O),e.qZA()(),e.TgZ(19,"div",16)(20,"div",17),e._uU(21),e.ALo(22,"number"),e.qZA(),e.TgZ(23,"form",18,19)(25,"mat-form-field",7),e._UZ(26,"mat-icon",8)(27,"input",20),e.TgZ(28,"mat-autocomplete",10,21),e.YNc(30,Ft,2,2,"mat-option",12),e.ALo(31,"async"),e.qZA()(),e.TgZ(32,"div",22)(33,"mat-form-field",23)(34,"mat-label"),e._uU(35,"Fecha de la oferta"),e.qZA(),e._UZ(36,"input",24),e.TgZ(37,"mat-hint"),e._uU(38,"DD/MM/YYYY"),e.qZA(),e._UZ(39,"mat-datepicker-toggle",25)(40,"mat-datepicker",null,26),e.YNc(42,kt,2,0,"mat-error",27),e.qZA()(),e.TgZ(43,"div",22)(44,"mat-form-field",23)(45,"mat-label"),e._uU(46,"Moneda"),e.qZA(),e.TgZ(47,"mat-select",28),e.YNc(48,Bt,2,2,"mat-option",29),e.qZA()(),e.TgZ(49,"mat-form-field",23)(50,"mat-label"),e._uU(51,"Multiplicador"),e.qZA(),e.TgZ(52,"mat-select",30)(53,"mat-option",31),e._uU(54," x1 "),e.qZA(),e.YNc(55,wt,2,2,"mat-option",29),e.qZA(),e.YNc(56,qt,2,0,"mat-error",27),e.qZA()(),e.TgZ(57,"div",32)(58,"button",33),e.NdJ("click",function(){return n.createOffer()}),e._uU(59," Crear Oferta "),e.qZA()()()()()()()()),2&t){const i=e.MAs(12),r=e.MAs(18),l=e.MAs(29),m=e.MAs(41);e.xp6(9),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",n.searchProductControl)("matAutocomplete",i)("placeholder","Buscar productos"),e.xp6(1),e.Q6J("displayWith",n.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(14,33,n.productsFiltered)),e.xp6(3),e.Q6J("ngIf",n.offerProducts.length>0)("ngIfElse",r),e.xp6(5),e.hij(" ",e.xi3(22,35,n.total*n.bidForm.get("multiplier").value,"1.2-2")," "),e.xp6(2),e.Q6J("formGroup",n.bidForm),e.xp6(3),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",n.searchCustomerControl)("matAutocomplete",l)("placeholder","Buscar cliente")("required",!0),e.xp6(1),e.Q6J("displayWith",n.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(31,38,n.customersFiltered)),e.xp6(6),e.Q6J("matDatepicker",m)("formControlName","offerDate")("max",n.maxDate)("required",!0),e.xp6(3),e.Q6J("for",m),e.xp6(3),e.Q6J("ngIf",n.bidForm.get("offerDate").hasError("required")),e.xp6(5),e.Q6J("formControlName","currencyId")("required",!0)("placeholder","Moneda"),e.xp6(1),e.Q6J("ngForOf",n.currencies),e.xp6(4),e.Q6J("formControlName","multiplier")("required",!0),e.xp6(1),e.Q6J("value",1),e.xp6(2),e.Q6J("ngForOf",n.multipliers),e.xp6(1),e.Q6J("ngIf",n.bidForm.get("multiplier").hasError("required")),e.xp6(2),e.Q6J("disabled",n.bidForm.pristine||n.bidForm.invalid||0===n.offerProducts.length)}},dependencies:[p.sg,p.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.On,s.F,s.oH,s.sg,s.u,H.XC,H.ZL,se.ey,w.lW,q.Mq,q.hl,q.nW,J.Hw,f.TO,f.KE,f.bx,f.hX,f.qo,U.Nt,le.gD,p.Ov,p.JJ],encapsulation:2,changeDetection:0}),o})();var Pt=c(15861);const ie=(0,C.P1)(o=>o.collections,o=>o.collections);var Ot=c(63844),Jt=c(28746),re=c(39202);const Qt=g.Ps`
    query FindCollections(
        $page: Int
        $size: Int!
        $sort: String
        $order: Order
        $search: String
        $initDate: DateTime
        $endDate: DateTime
    ) {
        findCollections(
            page: $page
            size: $size
            sort: $sort
            order: $order
            search: $search
            initDate: $initDate
            endDate: $endDate
        ) {
            ok
            message

            pagination {
                length
                size
                page
            }

            collections {
                id
                merchantId
                userId
                no
                total

                paymentGatewayId
                paymentGateway {
                    name
                    logo
                }

                currencyId
                currency {
                    iso
                }

                createdAt
                paymentStatus
                qrCode

                # user {
                #     name
                #     lastname1
                #     lastname2
                #     fullname
                # }
                userId
            }
        }
    }
`,Nt=g.Ps`
    query FindAllCollectionsByDate($date: String!) {
        findAllCollectionsByDate(date: $date) {
            ok
            message

            collections {
                canceledAt
                createdAt
                currency {
                    iso
                }
                # expiredAt
                # failedAt
                id
                merchantId
                no
                paymentAt
                paymentGatewayId
                paymentStatus
                qrCode
                refundedAt

                refunds {
                    id
                    type
                    amount
                    description
                    refundedAt
                }

                total
                # user {
                #     name
                #     lastname1
                #     lastname2
                #     fullname
                # }
                userId
            }
        }
    }
`,Rt=g.Ps`
    mutation UpdateCollection($updateCollectionInput: UpdateCollectionInput!) {
        updateCollection(updateCollectionInput: $updateCollectionInput) {
            ok
            message

            collections {
                canceledAt
                createdAt
                currency {
                    iso
                }
                # expiredAt
                # failedAt
                id
                merchantId
                no
                paymentAt
                paymentGatewayId
                paymentStatus
                qrCode
                refundedAt

                refunds {
                    id
                    type
                    amount
                    description
                    refundedAt
                }

                total
                # user {
                #     name
                #     lastname1
                #     lastname2
                #     fullname
                # }
                userId
            }
        }
    }
`,$t=g.Ps`
    mutation RemoveCollection($removeCollectionId: String!) {
        removeCollection(id: $removeCollectionId) {
            ok
            message
        }
    }
`,Mt=g.Ps`
    mutation RefundCollection($refundPaymentOrderInput: RefundPaymentOrderInput!) {
        refundCollectionsOrder(refundPaymentOrderInput: $refundPaymentOrderInput) {

            ok
            message

            collection {
                id
                merchantId
                userId
                no
                total

                paymentGatewayId
                paymentGateway {
                    name
                    logo
                }

                currencyId
                currency {
                    iso
                }

                createdAt
                paymentStatus
                qrCode

                # user {
                #     name
                #     lastname1
                #     lastname2
                #     fullname
                # }
                userId
            }
        }
    }
`;let ue=(()=>{class o{constructor(t,n){this.apolloProvider=t,this.store=n,this._apollo=this.apolloProvider.use("BALANC")}getCollections(t=1,n=50,i="no",r="desc",l="",m=new Date((new Date).getDate()-30),u=new Date,b=""){return this._apollo.query({query:Qt,errorPolicy:"all",variables:{page:t,size:n,sort:i,order:r,search:l,initDate:m,endDate:u,status:b}}).pipe((0,_.b)(({data:O})=>{this.store.dispatch((0,re.cv)({collections:O.findCollections.collections})),this.store.dispatch((0,oe.Jr)({pagination:O.findCollections.pagination}))}))}getCollectionsByDate(t){return this._apollo.query({query:Nt,errorPolicy:"all",variables:{date:t}}).pipe((0,_.b)(({})=>{}))}updateCollection(t){return this.store.select(ie).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:Rt,variables:{updateCollectionInput:t},errorPolicy:"all"}).pipe((0,_.b)(({data:i})=>{const r=structuredClone(n);r[n.findIndex(m=>m.id===t.id)]=i.updatedCollection.collection,this.store.dispatch((0,re.cv)({collections:r}))}))))}removeCollection(t){return this.store.select(ie).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:$t,variables:{removeCollectionId:t},errorPolicy:"all"}).pipe((0,_.b)(()=>{const i=structuredClone(n),r=n.findIndex(l=>l.id===t);i.splice(r,1),this.store.dispatch((0,re.cv)({collections:i}))}))))}refundCollection(t){return this.store.select(ie).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:Mt,variables:{refundPaymentOrderInput:t},errorPolicy:"all"}).pipe((0,_.b)(({})=>{const r=structuredClone(n);r[n.findIndex(m=>m.no===t.no)].paymentStatus="dPendiente",this.store.dispatch((0,re.cv)({collections:r}))}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(g._M),e.LFG(C.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var z=c(84681),pe=c(20773),Ze=c(79814);function Et(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," EL importe a reembolsar es obligatorio "),e.qZA())}function Lt(o,a){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" El monto a reembolsar debe ser mayor que 0.01 y menor o igual que ",t.data.invoice.amount,". ")}}function zt(o,a){if(1&o&&(e.TgZ(0,"mat-form-field",25)(1,"mat-label"),e._uU(2,"Importe"),e.qZA(),e._UZ(3,"mat-icon",26)(4,"input",27),e.YNc(5,Et,2,0,"mat-error",20),e.YNc(6,Lt,2,1,"mat-error",20),e.qZA()),2&o){const t=e.oxw();e.xp6(3),e.Q6J("svgIcon","mat_outline:attach_money"),e.xp6(1),e.Q6J("placeholder",t.data.invoice.amount)("formControlName","amount")("min",.01)("max",t.data.invoice.amount),e.xp6(1),e.Q6J("ngIf",t.refundForm.get("amount").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.refundForm.get("amount").hasError("min")||t.refundForm.get("amount").hasError("max"))}}function Yt(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," EL motivo del rechazo es obligatorio "),e.qZA())}function Gt(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," EL motivo del rechazo debe contener entre 3 y 200 caracteres. "),e.qZA())}function jt(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Aceptar "),e.qZA())}function Ht(o,a){1&o&&e._UZ(0,"mat-progress-spinner",28),2&o&&e.Q6J("diameter",24)("mode","indeterminate")}const Kt=function(o){return{"cursor-not-allowed":o}};let Wt=(()=>{class o{constructor(t){this.data=t,this.isLoading=!1,this.refundType=z.aw.total,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._collectionsService=(0,e.f3M)(ue),this._dialogRef=(0,e.f3M)(S.so),this._formBuilder=(0,e.f3M)(s.qu),this._snackBar=(0,e.f3M)(B.ux),this._unsubscribeAll=new F.x}ngOnInit(){this.refundForm=this._formBuilder.group({amount:[this.data.invoice.amount,[s.kI.required,s.kI.min(.01),s.kI.max(this.data.invoice.amount)]],refundReason:["",[s.kI.required,s.kI.maxLength(1e3)]]})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}refundTypeChange(t){t.value===z.aw.total&&this.refundForm.get("amount").setValue(this.data.invoice.amount)}refund(){const t={no:this.data.invoice.no,amount:this.refundForm.get("amount").value,description:this.refundForm.get("refundReason").value.trim(),refundType:this.refundType};this.refundType===z.aw.total&&(t.amount=this.data.invoice.amount),this._collectionsService.refundCollection(t).pipe((0,d.R)(this._unsubscribeAll),(0,Jt.x)(()=>{this.isLoading=!1,this._changeDetectorRef.markForCheck()})).subscribe(({data:n})=>{this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:n.refundCollectionsOrder.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck(),this._dialogRef.close()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(S.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["collection-refund-dialog"]],decls:38,vars:24,consts:[[1,"h-full","ng-star-inserted"],[1,"relative","flex","flex-col","w-full","h-full"],[1,"flex","items-center","h-full"],[1,"block","w-full"],[1,"flex","flex-col","items-center","flex-auto","p-8","pb-4","sm:flex-row","sm:items-start","sm:pb-6"],[1,"flex","items-center","justify-center","w-10","h-10","text-blue-600","bg-blue-100","rounded-full","flex-0","sm:mr-4","dark:text-blue-50","dark:bg-blue-600","ng-star-inserted"],[3,"src"],[1,"flex","flex-col","items-center","mt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left","ng-star-inserted"],[1,"text-xl","font-medium","leading-6","ng-star-inserted"],[1,"text-secondary","ng-star-inserted"],["aria-label","Select an option",1,"flex","flex-wrap","justify-around","gap-2","pl-8","pr-8","mt-4","mb-6","sm:mt-2","sm:mb-10","sm:pl-22",3,"ngModel","color","change","ngModelChange"],["value","total"],["value","partial"],[1,"pb-6","pl-8","pr-8","mt-10","sm:mt-0","sm:pl-22",3,"formGroup","autocomplete"],["class","w-full mat-fuse-dense",4,"ngIf"],[1,"w-full","mat-fuse-dense","fuse-mat-textarea"],["matPrefix","","svgIcon","heroicons_solid:menu-alt-2",1,"hidden","sm:flex","icon-size-5"],["matInput","",3,"formControlName","placeholder","minLength","maxLength","required"],["refundT",""],[1,"text-right"],[4,"ngIf"],[1,"flex","flex-wrap","justify-center","px-6","py-4","space-x-3","tems-center","bg-gray-50","dark:bg-black","dark:bg-opacity-10","ng-star-inserted"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","","mat-button","",3,"color","disabled","ngClass","click"],[3,"diameter","mode",4,"ngIf"],[1,"w-full","mat-fuse-dense"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["type","number","required","","matInput","",3,"placeholder","formControlName","min","max"],[3,"diameter","mode"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"div",7)(8,"div",8),e._uU(9,"Reembolso"),e.qZA(),e.TgZ(10,"div",9),e._uU(11),e.qZA()()(),e.TgZ(12,"mat-radio-group",10),e.NdJ("change",function(r){return n.refundTypeChange(r)})("ngModelChange",function(r){return n.refundType=r}),e.TgZ(13,"mat-radio-button",11),e._uU(14,"Total"),e.qZA(),e.TgZ(15,"span"),e._uU(16,"......Tipo......"),e.qZA(),e.TgZ(17,"mat-radio-button",12),e._uU(18,"Parcial"),e.qZA()(),e.TgZ(19,"form",13)(20,"div"),e.YNc(21,zt,7,7,"mat-form-field",14),e.TgZ(22,"mat-form-field",15)(23,"mat-label"),e._uU(24,"Motivo"),e.qZA(),e._UZ(25,"mat-icon",16)(26,"textarea",17,18),e.TgZ(28,"mat-hint",19),e._uU(29),e.qZA(),e.YNc(30,Yt,2,0,"mat-error",20),e.YNc(31,Gt,2,0,"mat-error",20),e.qZA()()()()(),e.TgZ(32,"div",21)(33,"button",22),e._uU(34,"Cancelar"),e.qZA(),e.TgZ(35,"button",23),e.NdJ("click",function(){return n.refund()}),e.YNc(36,jt,2,0,"span",20),e.YNc(37,Ht,1,2,"mat-progress-spinner",24),e.qZA()()()()),2&t){const i=e.MAs(27);e.xp6(6),e.Q6J("src",n.data.invoice.paymentGateway.logo,e.LSH),e.xp6(5),e.hij("\xbfEsta seguro que desea efectuar el reembolso del pago a la factura # ",n.data.invoice.no," ?"),e.xp6(1),e.Q6J("ngModel",n.refundType)("color","primary"),e.xp6(7),e.Q6J("formGroup",n.refundForm)("autocomplete","off"),e.xp6(2),e.Q6J("ngIf","partial"===n.refundType),e.xp6(5),e.Q6J("formControlName","refundReason")("placeholder","Escriba el motivo del rechazo")("minLength",3)("maxLength",200)("required",!0),e.xp6(3),e.hij("Total de caracteres ",i.value.length," / 1000"),e.xp6(1),e.Q6J("ngIf",n.refundForm.get("refundReason").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.refundForm.get("refundReason").hasError("maxlength")||n.refundForm.get("refundReason").hasError("minlength")),e.xp6(2),e.Q6J("matDialogClose",!0),e.xp6(2),e.Q6J("color","primary")("disabled",n.refundForm.invalid)("ngClass",e.VKq(22,Kt,n.refundForm.invalid||n.isLoading))("disabled",n.refundForm.invalid||n.isLoading),e.xp6(1),e.Q6J("ngIf",!n.isLoading),e.xp6(1),e.Q6J("ngIf",n.isLoading)}},dependencies:[p.mk,p.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.qQ,s.Fd,s.On,s.sg,s.u,w.lW,S.ZT,J.Hw,f.TO,f.KE,f.bx,f.hX,f.qo,U.Nt,pe.Ou,Ze.VQ,Ze.U0],encapsulation:2,changeDetection:0}),o})(),Vt=(()=>{class o{constructor(t){this._httpClient=t,this.merchantLogo=null,k.vfs=X.I.vfs}generateTicketCollectionDocument(t,n,i){const m={content:[{text:n.name,style:"header"},{text:n.address,style:"header"},{text:`NIT: ${n.nit}`,style:"body"},{text:`Ticket #. ${t.no}`,style:"body"},{text:"---------------------------------------",style:"line"},{text:`Cobrado por: ${t.paymentGateway.name}`,style:"body"},{text:`${t.currency.iso}: ${t.total.toFixed(2)}`,style:"amount"},{text:"---------------------------------------",style:"line"},{text:`Fecha ${Q(t.createdAt).format("DD/MM/yyyy hh:mm:ss a")}`,style:"body"},{text:"\xa1Gracias por su comprar en nuestro negocio, disfrute su compra!",style:"body"},{text:" ",style:"body"},{text:"Este cobro fue procesado por el m\xf3dulo de cobros de balanc.app",style:"body"}],styles:{header:{alignment:"center",fontSize:8,bold:!0},subheader:{alignment:"center",fontSize:7,bold:!0,margin:[0,5,0,5]},body:{alignment:"center",bold:!1,fontSize:6,margin:[0,0,0,0]},line:{margin:[0,3,0,3]},amount:{alignment:"center",bold:!1,fontSize:15,margin:[0,3,0,0]}},pageSize:{width:150,height:300},pageMargins:[10,20,10,20]};k.createPdf(m).open()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(Te.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Xt=c(29071);function en(o,a){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"uppercase"),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,t.paymentGateway.name))}}function tn(o,a){1&o&&(e.ynx(0),e._UZ(1,"mat-spinner",32),e.BQk()),2&o&&(e.xp6(1),e.Q6J("diameter",20)("color","primary"))}function nn(o,a){1&o&&e.GkF(0)}const on=function(o){return{$implicit:o}};function rn(o,a){if(1&o&&(e.ynx(0),e.YNc(1,nn,1,0,"ng-container",33),e.BQk()),2&o){const t=e.oxw(3),n=e.MAs(25);e.xp6(1),e.Q6J("ngTemplateOutlet",n)("ngTemplateOutletContext",e.VKq(2,on,t.paymentStatusData))}}const an=function(o,a,t,n,i,r){return{"text-teal-800 bg-teal-100 dark:text-teal-50 dark:bg-teal-500":o,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":a,"text-blue-800 bg-blue-100 dark:text-white dark:bg-blue-500":t,"text-violet-800 bg-violet-100 dark:text-violet-50 dark:bg-violet-500":n,"text-red-800 bg-red-100 dark:text-red-50 dark:bg-red-500":i,"text-amber-800 bg-amber-100 dark:text-black dark:bg-amber-500":r}};function sn(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",21)(2,"div",22),e._uU(3),e.qZA(),e.TgZ(4,"div",23),e._uU(5),e.ALo(6,"date"),e.qZA(),e.TgZ(7,"div",19),e._uU(8),e.qZA(),e.TgZ(9,"div",19),e._uU(10),e.ALo(11,"number"),e.qZA(),e.TgZ(12,"div",19),e.YNc(13,en,3,3,"span",24),e.qZA(),e.TgZ(14,"div",25)(15,"span",26),e._uU(16),e.ALo(17,"uppercase"),e.qZA()(),e.TgZ(18,"div",27)(19,"button",28),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.generateTicketCollectionDocument(r))}),e._UZ(20,"mat-icon",29),e.qZA(),e.TgZ(21,"button",30),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.refund(r))}),e._UZ(22,"mat-icon",31),e.qZA(),e.YNc(23,tn,2,2,"ng-container",24),e.qZA()(),e.TgZ(24,"div",16),e.YNc(25,rn,2,4,"ng-container",24),e.qZA(),e.BQk()}if(2&o){const t=a.$implicit,n=a.index,i=e.oxw(2);e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(6,11,t.createdAt,"dd/MM/YY hh:mm a")," "),e.xp6(3),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(11,14,t.total,"1.2-2")," "),e.xp6(3),e.Q6J("ngIf",t.paymentGateway),e.xp6(2),e.Q6J("ngClass",e.HTZ(19,an,"parcial"===t.paymentStatus,"pagada"===t.paymentStatus,"pendiente"===t.paymentStatus,"devuelto"===t.paymentStatus,"cancelado"===t.paymentStatus,"dPendiente"===t.paymentStatus)),e.xp6(1),e.hij(" ",e.lcZ(17,17,t.paymentStatus)," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:visibility"),e.xp6(1),e.Q6J("disabled",i.isLoading||"pagada"!==t.paymentStatus),e.xp6(2),e.Q6J("ngIf",i.isMarkAsPayedLoading&&i.selectedSlide===n),e.xp6(2),e.Q6J("ngIf",(null==i.selectedCollection?null:i.selectedCollection.id)===t.id)}}function ln(o,a){if(1&o&&(e.ynx(0),e.TgZ(1,"div",16)(2,"div",17)(3,"div",18),e._uU(4," No "),e.qZA(),e.TgZ(5,"div",19),e._uU(6," Fecha "),e.qZA(),e.TgZ(7,"div",18),e._uU(8," Moneda "),e.qZA(),e.TgZ(9,"div",18),e._uU(10," Importe "),e.qZA(),e.TgZ(11,"div",19),e._uU(12," M\xe9todo de pago "),e.qZA(),e.TgZ(13,"div",19),e._uU(14," Estado "),e.qZA(),e.TgZ(15,"div",19),e._uU(16," Acciones "),e.qZA()(),e.YNc(17,sn,26,26,"ng-container",20),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(4),e.Q6J("mat-sort-header","currencyId"),e.xp6(2),e.Q6J("mat-sort-header","total"),e.xp6(8),e.Q6J("ngForOf",t.collections)("ngForTrackBy",t.trackByFn)}}function cn(o,a){if(1&o&&(e.ynx(0),e.TgZ(1,"div",39)(2,"div",19),e._uU(3),e.ALo(4,"uppercase"),e.qZA(),e.TgZ(5,"div",19),e._uU(6),e.qZA(),e.TgZ(7,"div",19),e._uU(8),e.ALo(9,"date"),e.qZA(),e.TgZ(10,"div",19),e._uU(11),e.ALo(12,"uppercase"),e.qZA(),e.TgZ(13,"div",37),e._uU(14),e.qZA()(),e.BQk()),2&o){const t=a.$implicit;e.xp6(3),e.hij(" ",e.lcZ(4,5,t.paymentStatus)," "),e.xp6(3),e.hij(" ",t.amount," "),e.xp6(2),e.hij(" ",e.xi3(9,7,t.statusChangeAt,"dd/MM/yyyy HH:mm")," "),e.xp6(3),e.hij(" ",e.lcZ(12,10,t.type)," "),e.xp6(3),e.hij(" ",t.description," ")}}function mn(o,a){if(1&o&&(e.TgZ(0,"div",34)(1,"div",35)(2,"div",19),e._uU(3," Estado "),e.qZA(),e.TgZ(4,"div",19),e._uU(5," Monto "),e.qZA(),e.TgZ(6,"div",19),e._uU(7," Fecha "),e.qZA(),e.TgZ(8,"div",36),e._uU(9," T.Devoluci\xf3n "),e.qZA(),e.TgZ(10,"div",37),e._uU(11," Descripci\xf3n "),e.qZA()(),e.YNc(12,cn,15,12,"ng-container",38),e.qZA()),2&o){const t=e.oxw();e.xp6(12),e.Q6J("ngForOf",t.paymentStatusData)}}function dn(o,a){if(1&o&&(e.TgZ(0,"div",40),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",t.searchInputControl.value?"\xa1No se han encontrado facturas!":"\xa1No se ha generado ninguna factura a una suscripci\xf3n a\xfan!","")}}const un=function(o){return{"pointer-events-none":o}},pn=function(){return[10,25,50,100]};function gn(o,a){if(1&o&&e._UZ(0,"mat-paginator",41),2&o){const t=e.oxw();e.Q6J("ngClass",e.VKq(6,un,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(8,pn))("showFirstLastButtons",!0)}}let fn=(()=>{class o{constructor(){this.searchInputControl=new s.NI(null),this.isMarkAsPayedLoading=!1,this.selectedSlide=null,this.user=null,this.merchantControl=new s.p4,this.paymentStatusData=[],this.selectedCollection=null,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._collectionsService=(0,e.f3M)(ue),this._documentsService=(0,e.f3M)(Vt),this._dialog=(0,e.f3M)(S.uw),this._unsubscribeAll=new F.x,this.store=(0,e.f3M)(C.yh)}ngOnInit(){this.store.select(ie).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.collections=t,this._changeDetectorRef.markForCheck()}),this.store.select(ee.B).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.store.select(te.rk).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ne.Qs).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.currentMerchant=t}),this.searchInputControl.valueChanges.pipe((0,d.R)(this._unsubscribeAll),(0,V.b)(300),(0,Z.O)(null),(0,v.w)(t=>null!==t?(this.isLoading=!0,this._collectionsService.getCollections(1,10,"createdAt","desc",t)):(0,K.of)()),(0,y.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,W.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._collectionsService.getCollections(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,y.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}refund(t){t.paymentGateway&&this._dialog.open(Wt,{data:{invoice:{id:t.id,no:t.no,amount:t.total,paymentGateway:t.paymentGateway}},panelClass:"ath-reject-dialog-panel",maxWidth:"520px"})}generateTicketCollectionDocument(t){var n=this;return(0,Pt.Z)(function*(){n._documentsService.generateTicketCollectionDocument(t,n.currentMerchant,n.user)})()}trackByFn(t,n){return n.id||t}togglePaymentStatusData(t){this.paymentStatusData=[],t.paymentAt&&this.paymentStatusData.push({paymentStatus:z.bG.pagada,amount:t.total,type:"",description:"",statusChangeAt:t.paymentAt});for(const n of t.refunds.map(i=>({paymentStatus:z.bG.devuelto,amount:i.amount,type:i.type,description:i.description,statusChangeAt:i.refundedAt})))this.paymentStatusData.push(n);this.selectedCollection&&this.selectedCollection.id===t.id?this.closeDetails():(this.selectedCollection=t,this._changeDetectorRef.markForCheck())}closeDetails(){this.selectedCollection=null,this.paymentStatusData=[],this._changeDetectorRef.markForCheck()}showRefund(t){return!!(t.refunds.map(i=>i.amount).reduce((i,r)=>i+r,0)<t.total&&t.paymentAt)}displayFn(t){return(t&&t.name?t.name:"").trim()}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["sales-collections"]],viewQuery:function(t,n){if(1&t&&(e.Gf(P.NW,5),e.Gf(I.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(n._paginator=i.first),e.iGM(i=e.CRH())&&(n._sort=i.first)}},decls:29,vars:7,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","flex-auto","min-w-0","overflow-x-auto","overflow-y-auto","bg-card","dark:bg-transparent","lg:overflow-x-hidden"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],["routerLink","/desktop",1,"ml-1","text-primary-500","hover:underline"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"flex","flex-col","flex-auto"],[4,"ngIf","ngIfElse"],["rowPaymentStatusDataTemplate",""],["noCollections",""],["class","z-10 border-b sm:inset-x-0 sm:bottom-0 sm:border-t sm:border-b-0 bg-gray-50 dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons",4,"ngIf"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","collections-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"text-center",3,"mat-sort-header"],[1,"text-center"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","collections-grid","md:px-8"],[1,"truncate"],[1,"text-center","truncate"],[4,"ngIf"],[1,"flex","justify-center"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold","uppercase",3,"ngClass"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver ticket",1,"hidden","px-2","leading-6","sm:flex","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["matTooltip","Hacer devoluci\xf3n","mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"disabled","click"],["svgIcon","mat_solid:undo",1,"icon-size-5"],[1,"self-center","ml-2",3,"diameter","color"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","flex-col","w-full","overflow-hidden","border-b"],[1,"z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","subscription-collections-status-detail-table","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],["matTooltip","Tipo de devoluci\xf3n",1,"text-center"],[1,"text-left"],[4,"ngFor","ngForOf"],[1,"grid","items-center","w-full","gap-4","px-6","py-3","border-b","subscription-collections-status-detail-table","md:px-8"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"],[1,"z-10","border-b","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Ventas"),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"mat-icon",6),e.TgZ(14,"a",7),e._uU(15,"Cobros"),e.qZA()()(),e.TgZ(16,"div",8)(17,"a",9),e._UZ(18,"mat-icon",6),e.TgZ(19,"span",10),e._uU(20,"Regresar"),e.qZA()()()()()(),e.TgZ(21,"div",11)(22,"div",11),e.YNc(23,ln,18,5,"ng-container",12),e.YNc(24,mn,13,1,"ng-template",null,13,e.W1O),e.YNc(26,dn,2,1,"ng-template",null,14,e.W1O),e.qZA(),e.YNc(28,gn,1,9,"mat-paginator",15),e.qZA()()),2&t){const i=e.MAs(27);e.xp6(9),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("routerLink","./.."),e.xp6(1),e.Q6J("svgIcon","mat_solid:chevron_left"),e.xp6(5),e.Q6J("ngIf",n.collections.length>0)("ngIfElse",i),e.xp6(5),e.Q6J("ngIf",n.collections.length>0)}},dependencies:[T.yS,p.mk,p.sg,p.O5,p.tP,Xt.PQ,w.lW,J.Hw,P.NW,pe.Ou,I.YE,I.nU,de.gM,p.gd,p.JJ,p.uU],encapsulation:2,data:{animation:Ot.L},changeDetection:0}),o})();const Ie=o=>o.offers,ge=((0,C.P1)(Ie,o=>o.offer),(0,C.P1)(Ie,o=>o.offers));var ae=c(34231);let Ae=(()=>{class o{constructor(t,n,i){this.apolloProvider=t,this._snackBar=n,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}getOffers(t=1,n=5,i="no",r="desc",l=""){return this._apollo.query({query:xt,errorPolicy:"all",variables:{offset:n*(t-1),limit:n,sort:i,order:r,search:l}}).pipe((0,_.b)(({errors:m,data:u})=>{if(m){let b="";m.forEach(O=>b+=`\n ${O.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:b,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ae.Zu)({offers:u.findAllOffers.offers})),this.store.dispatch((0,oe.Jr)({pagination:u.findAllOffers.pagination}))}))}getOfferById(t){return this._apollo.query({query:bt,variables:{findOfferByIdId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:n,data:i})=>{if(n){let r="";n.forEach(l=>r+=`\n ${l.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,ae.FK)({offer:i.offer}))}))}updateOffer(t){return this.store.select(ge).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:ht,variables:{updateOfferInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:r})=>{if(i){let u="";i.forEach(b=>u+=`\n ${b.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:u,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=(0,D.Z)(n);l[n.findIndex(u=>u.id===t.id)]=r.updatedOffer,this.store.dispatch((0,ae.Zu)({offers:l}))}))))}removeOffer(t){return this.store.select(ge).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:_t,variables:{removeOfferId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let m="";i.forEach(u=>m+=`\n ${u.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,D.Z)(n),l=n.findIndex(m=>m.id===t);r.splice(l,1),this.store.dispatch((0,ae.Zu)({offers:r}))}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(g._M),e.LFG(B.ux),e.LFG(C.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function hn(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",30)(2,"div",31),e._uU(3),e.qZA(),e.TgZ(4,"div",26),e._uU(5),e.qZA(),e.TgZ(6,"div",27),e._uU(7),e.qZA(),e.TgZ(8,"div",31),e._uU(9),e.ALo(10,"number"),e.qZA(),e.TgZ(11,"div",27),e._uU(12),e.qZA(),e.TgZ(13,"div",32)(14,"button",33),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("open",r))}),e._UZ(15,"mat-icon",34),e.qZA(),e.TgZ(16,"button",35),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("print",r))}),e._UZ(17,"mat-icon",34),e.qZA(),e.TgZ(18,"button",36),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("download",r))}),e._UZ(19,"mat-icon",34),e.qZA()()(),e.BQk()}if(2&o){const t=a.$implicit;e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(10,8,t.total,"1.2-2")," "),e.xp6(3),e.hij(" ",t.status," "),e.xp6(3),e.Q6J("svgIcon","mat_solid:visibility"),e.xp6(2),e.Q6J("svgIcon","mat_solid:print"),e.xp6(2),e.Q6J("svgIcon","mat_solid:download")}}function _n(o,a){if(1&o&&(e.ynx(0),e.YNc(1,hn,20,11,"ng-container",29),e.BQk()),2&o){const t=a.ngIf,n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",n.trackByFn)}}const xn=function(o){return{"pointer-events-none":o}},bn=function(){return[5,10,25,100]};function vn(o,a){if(1&o&&(e.ynx(0),e.TgZ(1,"div",23)(2,"div",24)(3,"div",25),e._uU(4," N\xfamero "),e.qZA(),e.TgZ(5,"div",26),e._uU(6," Cliente "),e.qZA(),e.TgZ(7,"div",27),e._uU(8," Moneda "),e.qZA(),e.TgZ(9,"div",25),e._uU(10," Importe "),e.qZA(),e.TgZ(11,"div",27),e._uU(12," Estado "),e.qZA(),e.TgZ(13,"div",27),e._uU(14," Acciones "),e.qZA()(),e.YNc(15,_n,2,2,"ng-container",20),e.ALo(16,"async"),e.qZA(),e._UZ(17,"mat-paginator",28),e.BQk()),2&o){const t=e.oxw(2);e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(6),e.Q6J("mat-sort-header","total"),e.xp6(6),e.Q6J("ngIf",e.lcZ(16,9,t.offers$)),e.xp6(2),e.Q6J("ngClass",e.VKq(11,xn,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(13,bn))("showFirstLastButtons",!0)}}function yn(o,a){if(1&o&&(e.ynx(0),e.YNc(1,vn,18,14,"ng-container",22),e.BQk()),2&o){const t=a.ngIf;e.oxw();const n=e.MAs(32);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",n)}}function Cn(o,a){1&o&&(e.TgZ(0,"div",37),e._uU(1," \xa1No se ha registrado ninguna oferta! "),e.qZA())}const Tn=function(){return["/sales/bid"]};k.vfs=X.I.vfs;let Zn=(()=>{class o{constructor(t,n,i,r,l){this._offersService=t,this._changeDetectorRef=n,this._fuseConfirmationService=i,this._snackBar=r,this.store=l,this.offers$=(0,K.of)([]),this.isLoading=!1,this.searchInputControl=new s.NI,this.isSlideLoading=!1,this.selectedSlide=null,this.user=null,this.merchant=null,this._unsubscribeAll=new F.x}ngOnInit(){this.store.select(te.rk).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ne.Qs).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.offers$=this.store.select(ge),this.store.select(ee.B).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,d.R)(this._unsubscribeAll),(0,V.b)(300),(0,v.w)(t=>(this.isLoading=!0,this._offersService.getOffers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,y.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,W.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._offersService.getOffers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,y.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}generatePDF(t="open",n){const i={header:{text:n.no,fontSize:18,bold:!0,alignment:"right",fontFeatures:["c2sc","smcp"],marginTop:10,marginRight:40},content:[{table:{widths:["*","*"],body:[[{table:{body:[[{text:this.merchant.name,fontSize:18,bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:`${this.merchant.address}, municipio ${this.merchant.city}, provincia ${this.merchant.state}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Tel.: ${this.merchant.phoneNumbers.length>0?this.merchant.phoneNumbers[0].phoneNumber:""}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`@: ${this.merchant.emails.length>0?this.merchant.emails[0].email:""}`,fontSize:10,fontFeatures:["c2sc"]}],[{text:`NIT: ${this.merchant.nit}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Cotizado por: ${n.user.name} ${n.user.lastname1} ${n.user.lastname2}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Moneda: ${this.merchant.currency[0].iso}`,fontSize:12,fontFeatures:["c2sc","smcp"]}]]},layout:"noBorders"},{table:{body:[[{text:n.customer.name,fontSize:18,alignment:"right",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:`${n.customer.address}, municipio ${n.customer.city}, provincia ${n.customer.state}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{text:`NIT: ${n.customer.nit}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}]]},layout:"noBorders"}]]},layout:"noBorders"},{table:{headerRows:1,widths:[30,"*",60,60,60,60],body:[[{text:"Item",style:"table_header"},{text:"Producto",style:"table_header",alignment:"left"},{text:"Unidad",style:"table_header"},{text:"Cantidad",style:"table_header"},{text:"Precio",style:"table_header"},{text:"Total",style:"table_header"}],...n.products.map(r=>[{text:n.products.indexOf(r)+1,alignment:"center",style:"table_body"},{text:r.name,style:"table_body"},{text:r.uom,alignment:"center",style:"table_body"},{text:r.quantity,alignment:"center",style:"table_body"},{text:r.price.toFixed(2),alignment:"center",style:"table_body"},{text:(r.quantity*r.price).toFixed(2),alignment:"center",style:"table_body"}]),[{rowSpan:3,colSpan:4,text:""},"","","",{text:"Subtotal",style:"totals_name"},{text:n.total.toFixed(2),style:"totals_value"}],[{colSpan:4,text:""},"","","",{text:"Descuento",style:"totals_name"},{text:Number(0).toFixed(2),style:"totals_value"}],[{colSpan:4,text:""},"","","",{text:"Total",style:"totals_name"},{text:n.total.toFixed(2),style:"totals_value"}]]},layout:{hLineWidth:(r,l)=>.7,vLineWidth:(r,l)=>.7},marginTop:20}],footer:(r,l)=>({table:{widths:["*","*"],body:[[{text:`Oferta: ${n.no} generada para ${n.customer.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${r.toString()}/${l} - Fecha de impresi\xf3n ${Q().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:`Oferta: ${n.no}`,author:`${this.user.name} ${this.user.lastname1} ${this.user.lastname2}`,creationDate:Q().toDate(),modDate:Q().toDate(),producer:this.merchant.name}};switch(t){case t="download":k.createPdf(i).download();break;case t="open":k.createPdf(i).open();break;case t="print":k.createPdf(i).print()}}trackByFn(t,n){return t||n.id}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Ae),e.Y36(e.sBO),e.Y36(R.R),e.Y36(B.ux),e.Y36(C.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["sales-offers"]],viewQuery:function(t,n){if(1&t&&(e.Gf(P.NW,5),e.Gf(I.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(n._paginator=i.first),e.iGM(i=e.CRH())&&(n._sort=i.first)}},decls:33,vars:12,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noOffers",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","offers-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hiddem","sm:block",3,"mat-sort-header"],[1,"hiddem","sm:block"],[1,"text-center","hiddem","sm:block"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","offers-grid","md:px-8"],[1,"font-mono","hiddem","sm:block"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Imprimir oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Descargar oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Ofertas"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Ofertas "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e._UZ(22,"div",14),e.TgZ(23,"button",15),e._UZ(24,"mat-icon",16),e.TgZ(25,"span",17),e._uU(26,"Crear oferta"),e.qZA()()()(),e.TgZ(27,"div",18)(28,"div",19),e.YNc(29,yn,2,2,"ng-container",20),e.ALo(30,"async"),e.YNc(31,Cn,2,0,"ng-template",null,21,e.W1O),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",n.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(2),e.Q6J("routerLink",e.DdM(11,Tn)),e.xp6(1),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.Q6J("ngIf",e.lcZ(30,9,n.offers$)))},dependencies:[T.rH,T.yS,p.mk,p.sg,p.O5,s.Fj,s.JJ,s.oH,w.lW,J.Hw,f.KE,f.qo,U.Nt,P.NW,I.YE,I.nU,de.gM,p.Ov,p.JJ],encapsulation:2,changeDetection:0}),o})();const Se=o=>o.terminals,Y=((0,C.P1)(Se,o=>o.terminal),(0,C.P1)(Se,o=>o.terminals));var In=c(89116),An=c(23425),Sn=c(8035),$=c(57838);const Fn=g.Ps`
    mutation CreateTerminal($createTerminalInput: CreateTerminalInput!) {
        createTerminal(createTerminalInput: $createTerminalInput) {
            ok
            message

            terminal {
                id
                active
                no
                userId
                brandId
                brand {
                    name
                }
                sn
                model
                employeeId
                employee {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                pin
            }
        }
    }
`,kn=g.Ps`
    mutation UpdateTerminal($updateTerminalInput: UpdateTerminalInput!) {
        updateTerminal(updateTerminalInput: $updateTerminalInput) {
            ok
            message

            terminal {
                id
                active
                no
                userId
                brandId
                brand {
                    name
                }
                sn
                model
                employeeId
                employee {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                pin
            }
        }
    }
`,Bn=g.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateTerminalStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`,wn=g.Ps`
    mutation RemoveTerminal($removeTerminalId: String!) {
        removeTerminal(id: $removeTerminalId) {
            ok
            message
        }
    }
`,qn=g.Ps`
    query FindAllTerminals($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllTerminals(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            terminals {
                id
                active
                no
                userId
                brandId
                brand {
                    name
                }
                sn
                model
                employeeId
                employee {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                pin
            }
        }
    }
`,Un=g.Ps`
    query FindTerminalById($findTerminalById: String!) {
        findTerminalById(id: $findTerminalById) {
            ok
            message

            terminal {
                id
                active
                no
                userId
                brandId
                brand {
                    name
                }
                sn
                model
                employeeId
                employee {
                    name
                    lastname1
                    lastname2
                    fullname
                }
                pin
            }
        }
    }
`;let fe=(()=>{class o{constructor(t,n,i){this.apolloProvider=t,this._snackBar=n,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createTerminal(t){return this.store.select(Y).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:Fn,variables:{createTerminalInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:r})=>{if(i){let m="";i.forEach(u=>m+=`\n ${u.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=(0,D.Z)(n);l.push(r.createTerminal.terminal),this.store.dispatch((0,$.Pl)({terminals:l}))}))))}getTerminals(t=1,n=20,i="code",r="asc",l=""){return this._apollo.query({query:qn,errorPolicy:"all",variables:{offset:n*(t-1),limit:n,sort:i,order:r,search:l}}).pipe((0,_.b)(({errors:m,data:u})=>{if(m){let b="";m.forEach(O=>b+=`\n ${O.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:b,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,$.Pl)({terminals:u.findAllTerminals.terminals})),this.store.dispatch((0,oe.Jr)({pagination:u.findAllTerminals.pagination}))}))}getTerminalById(t){return this._apollo.query({query:Un,variables:{findTerminalByIdId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:n,data:i})=>{if(n){let r="";n.forEach(l=>r+=`\n ${l.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,$.mz)({terminal:i.findTerminalById.terminal}))}))}updateTerminal(t){return this.store.select(Y).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:kn,variables:{updateTerminalInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i,data:r})=>{if(i){let u="";i.forEach(b=>u+=`\n ${b.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:u,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=(0,D.Z)(n);l[n.findIndex(u=>u.id===t.id)]=r.updateTerminal.terminal,this.store.dispatch((0,$.Pl)({terminals:l}))}))))}updateTerminalStatus(t){return this.store.select(Y).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:Bn,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let m="";i.forEach(u=>m+=`\n ${u.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,D.Z)(n);r[n.findIndex(m=>m.id===t.id)].active=t.active,this.store.dispatch((0,$.Pl)({terminals:r}))}))))}removeTerminal(t){return this.store.select(Y).pipe((0,A.q)(1),(0,v.w)(n=>this._apollo.mutate({mutation:wn,variables:{removeTerminalId:t},errorPolicy:"all"}).pipe((0,_.b)(({errors:i})=>{if(i){let m="";i.forEach(u=>m+=`\n ${u.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,D.Z)(n),l=n.findIndex(m=>m.id===t);r.splice(l,1),this.store.dispatch((0,$.Pl)({terminals:r}))}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(g._M),e.LFG(B.ux),e.LFG(C.yh))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Pn=c(36538),Dn=c(68922);function On(o,a){1&o&&(e.TgZ(0,"h2",6),e._uU(1," Agregar Terminal "),e.qZA())}function Jn(o,a){1&o&&(e.TgZ(0,"h2",6),e._uU(1," Editar Terminal "),e.qZA())}function Qn(o,a){if(1&o&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function Nn(o,a){if(1&o&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.fullname," ")}}function Rn(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"form",9)(3,"mat-form-field",10)(4,"mat-label"),e._uU(5,"Marca"),e.qZA(),e.TgZ(6,"mat-select",11),e.YNc(7,Qn,2,2,"mat-option",12),e.TgZ(8,"mat-option",13),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createBrand())}),e._uU(9," Agregar marca "),e.qZA()()(),e.TgZ(10,"mat-form-field",10)(11,"mat-label"),e._uU(12,"Modelo"),e.qZA(),e._UZ(13,"input",14),e.qZA(),e.TgZ(14,"mat-form-field",10)(15,"mat-label"),e._uU(16,"N\xfamero de serie"),e.qZA(),e._UZ(17,"input",14),e.qZA(),e.TgZ(18,"mat-form-field",10)(19,"mat-label"),e._uU(20,"Asignar a:"),e.qZA(),e.TgZ(21,"mat-select",11),e.YNc(22,Nn,2,2,"mat-option",12),e.qZA()(),e.TgZ(23,"mat-form-field",10)(24,"mat-label"),e._uU(25,"PIN"),e.qZA(),e._UZ(26,"input",15),e.TgZ(27,"mat-hint"),e._uU(28,"Solo 4 d\xedgitos"),e.qZA()()()()()}if(2&o){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.terminalForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","brandId")("required",!0),e.xp6(1),e.Q6J("ngForOf",t.brands),e.xp6(6),e.Q6J("formControlName","model")("placeholder","Modelo del terminal"),e.xp6(4),e.Q6J("formControlName","sn")("placeholder","Serie del terminal"),e.xp6(4),e.Q6J("formControlName","employeeId")("required",!0),e.xp6(1),e.Q6J("ngForOf",t.employees),e.xp6(4),e.Q6J("formControlName","pin")("placeholder","0000")}}function $n(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.updateTerminal())}),e._uU(2," Actualizar "),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("color","primary")("disabled",t.terminalForm.invalid)("matDialogClose","confirmed")}}function Mn(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createTerminal())}),e._uU(2," Agregar "),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("color","primary")("disabled",t.terminalForm.invalid)("matDialogClose","confirmed")}}function En(o,a){if(1&o&&(e.ynx(0),e.TgZ(1,"div",17),e.ynx(2),e.TgZ(3,"button",18),e._uU(4," Cancelar "),e.qZA(),e.BQk(),e.YNc(5,$n,3,3,"ng-container",5),e.YNc(6,Mn,3,3,"ng-container",5),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(3),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("ngIf","edit"===t.data.dialogMode),e.xp6(1),e.Q6J("ngIf","add"===t.data.dialogMode)}}let Ln=(()=>{class o{constructor(t,n,i,r,l,m,u){this.data=t,this._changeDetectorRef=n,this._dialog=i,this._dialogRef=r,this._formBuilder=l,this._snackBar=m,this.store=u,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this._unsubscribeAll=new F.x,this._terminalsService=(0,e.f3M)(fe),this._fuseConfirmationService=(0,e.f3M)(R.R),this.dialogMode=t.dialogMode,this.terminal=t.terminal}ngOnInit(){this.terminalForm=this._formBuilder.group({id:new s.NI(null),employeeId:new s.NI(null,[s.kI.required,s.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),brandId:new s.NI(null,[s.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),model:new s.NI(null,[s.kI.minLength(1),s.kI.maxLength(255)]),sn:new s.NI(null,[s.kI.minLength(1),s.kI.maxLength(255)]),pin:new s.NI(null,[s.kI.required,s.kI.minLength(4),s.kI.maxLength(4)])}),"edit"===this.dialogMode&&this.terminalForm.patchValue(this.terminal),this.store.select(An.gg).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.brands=t,this._changeDetectorRef.markForCheck()}),this.store.select(Sn.ri).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.employees=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createTerminal(){let t=this.terminalForm.getRawValue();t=(0,In.Z)(t,["id"]),this._fuseConfirmationService.open({title:"Crear Terminal",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._terminalsService.createTerminal(t).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:r})=>{this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.createTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateTerminal(){const t=this.terminalForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Terminal",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._terminalsService.updateTerminal(t).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:r})=>{this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.updateTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}createBrand(){this._dialog.open(Dn.C,{data:{brand:new Pn.H,dialogMode:"add"},panelClass:"ath-dialog-panel",disableClose:!0})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(S.WI),e.Y36(e.sBO),e.Y36(S.uw),e.Y36(S.so),e.Y36(s.qu),e.Y36(B.ux),e.Y36(C.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["sales-terminal-dialog"]],decls:9,vars:4,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400",4,"ngIf"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","w-full overflow-hidden",4,"ngIf"],[4,"ngIf"],[1,"text-2xl","text-gray-400"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense"],[3,"formControlName","required"],[3,"value",4,"ngFor","ngForOf"],[3,"click"],["matInput","","type","text","maxlength","250",3,"formControlName","placeholder"],["matInput","","type","number","minlength","4","max","9999","required","",3,"formControlName","placeholder"],[3,"value"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-between","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.ynx(1),e.TgZ(2,"div",1),e.YNc(3,On,2,0,"h2",2),e.YNc(4,Jn,2,0,"h2",2),e.qZA(),e.BQk(),e.TgZ(5,"div",3),e.ynx(6),e.YNc(7,Rn,29,14,"div",4),e.BQk(),e.qZA(),e.YNc(8,En,7,3,"ng-container",5),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf","add"===n.data.dialogMode),e.xp6(1),e.Q6J("ngIf","edit"===n.data.dialogMode),e.xp6(3),e.Q6J("ngIf","edit"===n.data.dialogMode||"add"),e.xp6(1),e.Q6J("ngIf","view"!==n.data.dialogMode))},dependencies:[p.sg,p.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.wO,s.nD,s.Fd,s.sg,s.u,se.ey,w.lW,S.ZT,f.KE,f.bx,f.hX,U.Nt,le.gD],encapsulation:2}),o})();class zn{}var Yn=c(32368);function Gn(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-slide-toggle",33),e.NdJ("change",function(i){e.CHM(t);const r=e.oxw(),l=r.$implicit,m=r.index,u=e.oxw(4);return e.KtG(u.updateTerminalStatus(i,l,m))}),e.qZA(),e.BQk()}if(2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("checked",t.active)("color","primary")}}function jn(o,a){1&o&&(e.ynx(0),e._UZ(1,"mat-spinner",34),e.BQk()),2&o&&(e.xp6(1),e.Q6J("diameter",20)("color","primary"))}function Hn(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",28)(2,"div",29),e._uU(3),e.qZA(),e.TgZ(4,"div",29),e._uU(5),e.qZA(),e.TgZ(6,"div",29),e._uU(7),e.qZA(),e.TgZ(8,"div",29),e._uU(9),e.qZA(),e.TgZ(10,"div",29),e._uU(11),e.qZA(),e.TgZ(12,"div",30),e.YNc(13,Gn,2,2,"ng-container",19),e.YNc(14,jn,2,2,"ng-container",19),e.qZA(),e.TgZ(15,"div")(16,"button",31),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.updateTerminal(r))}),e._UZ(17,"mat-icon",32),e.qZA()()(),e.BQk()}if(2&o){const t=a.$implicit,n=a.index,i=e.oxw(4);e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.employee.fullname," "),e.xp6(2),e.hij(" ",t.brand.name," "),e.xp6(2),e.hij(" ",t.model," "),e.xp6(2),e.hij(" ",t.sn," "),e.xp6(2),e.Q6J("ngIf",!(i.isSlideLoading&&i.selectedSlide===n)),e.xp6(1),e.Q6J("ngIf",i.isSlideLoading&&i.selectedSlide===n),e.xp6(3),e.Q6J("svgIcon","mat_solid:edit")}}function Kn(o,a){if(1&o&&(e.ynx(0),e.YNc(1,Hn,18,8,"ng-container",27),e.BQk()),2&o){const t=a.ngIf,n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",n.trackByFn)}}const Wn=function(o){return{"pointer-events-none":o}},Vn=function(){return[5,10,25,100]};function Xn(o,a){if(1&o&&(e.ynx(0),e.TgZ(1,"div",22)(2,"div",23)(3,"div",24),e._uU(4,"No."),e.qZA(),e.TgZ(5,"div",25),e._uU(6," Asignado a "),e.qZA(),e.TgZ(7,"div",25),e._uU(8," Marca "),e.qZA(),e.TgZ(9,"div",25),e._uU(10," Modelo "),e.qZA(),e.TgZ(11,"div",25),e._uU(12," N\xfamero de serie "),e.qZA(),e.TgZ(13,"div",25),e._uU(14,"Detalles"),e.qZA()(),e.YNc(15,Kn,2,2,"ng-container",19),e.ALo(16,"async"),e.qZA(),e._UZ(17,"mat-paginator",26),e.BQk()),2&o){const t=e.oxw(2);e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(12),e.Q6J("ngIf",e.lcZ(16,8,t.terminals$)),e.xp6(2),e.Q6J("ngClass",e.VKq(10,Wn,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(12,Vn))("showFirstLastButtons",!0)}}function eo(o,a){if(1&o&&(e.ynx(0),e.YNc(1,Xn,18,13,"ng-container",21),e.BQk()),2&o){const t=a.ngIf;e.oxw();const n=e.MAs(31);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",n)}}function to(o,a){1&o&&(e.TgZ(0,"div",35),e._uU(1,"\xa1No se ha creado ninguna terminal!"),e.qZA())}k.vfs=X.I.vfs;let no=(()=>{class o{constructor(t,n,i,r){this._changeDetectorRef=t,this._dialog=n,this._snackBar=i,this.store=r,this.flashMessage=null,this.terminals$=(0,K.of)([]),this.terminals=[],this.merchantInputControl=new s.NI,this.isLoading=!1,this.searchInputControl=new s.NI,this.user=null,this.merchant=null,this.selectedSlide=null,this.isSlideLoading=!1,this._unsubscribeAll=new F.x,this._terminalsService=(0,e.f3M)(fe),this._fuseConfirmationService=(0,e.f3M)(R.R)}ngOnInit(){this.store.select(te.rk).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ne.Qs).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.terminals$=this.store.select(Y),this.terminals$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.terminals=t,this._changeDetectorRef.markForCheck()}),this.store.select(ee.B).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,d.R)(this._unsubscribeAll),(0,V.b)(300),(0,v.w)(t=>(this.isLoading=!0,this._terminalsService.getTerminals(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,y.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,W.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._terminalsService.getTerminals(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,y.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createTerminal(){this._openDialog(new zn,"add")}updateTerminal(t){this._openDialog(t,"edit")}updateTerminalStatus(t,n,i){this.isSlideLoading=!0,this.selectedSlide=i,this._terminalsService.updateTerminalStatus({id:n.id,active:t.checked}).subscribe(({data:r})=>{this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.updateTerminalStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}trackByFn(t,n){return t||n.id}_openDialog(t,n){this._dialog.open(Ln,{data:{terminal:t,dialogMode:n},panelClass:"ath-dialog-panel",disableClose:!0})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(S.uw),e.Y36(B.ux),e.Y36(C.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["sales-terminals"]],viewQuery:function(t,n){if(1&t&&(e.Gf(P.NW,5),e.Gf(I.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(n._paginator=i.first),e.iGM(i=e.CRH())&&(n._sort=i.first)}},decls:32,vars:10,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noTerminals",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","terminals-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[3,"mat-sort-header"],[1,""],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","terminals-grid","md:px-8"],[1,"truncate"],[1,"hidden","lg:block"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"checked","color","change"],[3,"diameter","color"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Terminales"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Terminales "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e.NdJ("click",function(){return n.createTerminal()}),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Agregar"),e.qZA()()()(),e.TgZ(26,"div",17)(27,"div",18),e.YNc(28,eo,2,2,"ng-container",19),e.ALo(29,"async"),e.YNc(30,to,2,0,"ng-template",null,20,e.W1O),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",n.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(2),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.Q6J("ngIf",e.lcZ(29,8,n.terminals$)))},dependencies:[T.yS,p.mk,p.sg,p.O5,s.Fj,s.JJ,s.oH,w.lW,J.Hw,f.KE,f.qo,U.Nt,P.NW,pe.Ou,Yn.Rr,I.YE,I.nU,p.Ov],encapsulation:2,changeDetection:0}),o})();var Fe=c(14232);let oo=(()=>{class o{constructor(t){this._billsService=t}resolve(t,n){return this._billsService.getBills()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(Ce))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var io=c(4024);let ro=(()=>{class o{constructor(t){this._collectionsService=t}resolve(t,n){return this._collectionsService.getCollections()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(ue))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var ke=c(90810),ao=c(84271),Be=c(1520);let so=(()=>{class o{constructor(t){this._offersService=t}resolve(t,n){return this._offersService.getOffers()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(Ae))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var lo=c(31278),co=c(23077),we=c(95259);const uo=[{path:"",component:j,children:[{path:"bid",component:Ut,resolve:{currencies:ke.Y,customers:Fe.M_,multipliers:Be.K,products:we.am}},{path:"billing",component:ot,resolve:{currencies:ke.Y,customers:Fe.M_,multipliers:Be.K,operationTypes:lo.Z,paymentMethods:co.p,products:we.am}},{path:"bills",component:gt,resolve:{bills:oo}},{path:"collections",component:fn,resolve:{collections:ro}},{path:"offers",component:Zn,resolve:{offers:so}},{path:"terminals",component:no,resolve:{brands:io.J,employees:ao.Q,terminals:(()=>{class o{constructor(t){this._terminalService=t}resolve(t,n){return this._terminalService.getTerminals()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(fe))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]}];let po=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[G.QG,T.Bz.forChild(uo),M.m]}),o})()}}]);