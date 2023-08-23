"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[5033],{97231:(Ze,R,c)=>{c.d(R,{C:()=>j});var C=c(40520),G=c(92340),E=c(5e3);const e=G.N.API_URL;let j=(()=>{class s{constructor(d){this._httpClient=d}uploadImage(d,T){const b=new FormData;return b.append("image",T,T.name),this._httpClient.post(`${e}/cloudinary/upload/${d}`,b)}removeImage(d){let T=d.slice(d.indexOf("upload"),d.length).split(".")[0];T=T.split("/").splice(2,T.length).join("/");const b=(new C.LE).set("public_id",T);return this._httpClient.delete(`${e}/cloudinary/remove`,{params:b})}}return s.\u0275fac=function(d){return new(d||s)(E.LFG(C.eN))},s.\u0275prov=E.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},15888:(Ze,R,c)=>{c.r(R),c.d(R,{SalesModule:()=>Io});var C=c(35357),G=c(83877),E=c(17460),e=c(5e3);let j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sales"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"router-outlet")},dependencies:[C.lC],encapsulation:2}),n})();var s=c(93075),B=c(77579),d=c(82722),T=c(68675),b=c(54004),L=c(17489),ce=c(99987),me=c(6062),Ie=c(87136),Ae=c(96008),q=c(71683),x=c(18505),h=c(59784),f=c(33921);const Fe=f.Ps`
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
                    lastname
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
`,Se=f.Ps`
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
                    lastname
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
`,Be=f.Ps`
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
`,ke=f.Ps`
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
`,we=f.Ps`
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
`,Pe=f.Ps`
    mutation RemoveBill($removeBillId: String!) {
        removeBill(id: $removeBillId)
    }
`;var Z=c(57261);let Ue=(()=>{class n{constructor(t,o){this.apolloProvider=t,this._snackBar=o,this._apollo=this.apolloProvider.use("BALANC")}createBill(t){return this._apollo.mutate({mutation:ke,variables:{createBillInput:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:o})=>{if(o){let r="";o.forEach(l=>r+=`\n ${l.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f._M),e.LFG(Z.ux))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var de=c(11641),ue=c(60814),pe=c(17264),v=c(85094),p=c(69808),z=c(91079),H=c(90508),P=c(47423),I=c(86856),N=c(25245),g=c(67322),U=c(98833),K=c(74107);const qe=["billNgForm"];function Oe(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"mat-option",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.addProductToBill(r))}),e._uU(1),e.qZA()}if(2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function Je(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",40)(2,"div"),e._uU(3),e.qZA(),e.TgZ(4,"div",41),e._uU(5),e.qZA(),e.TgZ(6,"div",38),e._uU(7," U "),e.qZA(),e.TgZ(8,"div",38)(9,"div",42)(10,"button",43),e.NdJ("click",function(){const i=e.CHM(t),r=i.index,l=i.$implicit,m=e.oxw(2);return e.KtG(m.decrementProductQty(r,l))}),e._UZ(11,"mat-icon",44),e.qZA(),e.TgZ(12,"mat-form-field",45)(13,"input",46),e.NdJ("ngModelChange",function(i){const l=e.CHM(t).$implicit;return e.KtG(l.quantity=i)}),e.qZA()(),e.TgZ(14,"button",43),e.NdJ("click",function(){const i=e.CHM(t),r=i.index,l=i.$implicit,m=e.oxw(2);return e.KtG(m.incrementProductQty(r,l))}),e._UZ(15,"mat-icon",44),e.qZA()()(),e.TgZ(16,"div",47),e._uU(17),e.ALo(18,"number"),e.qZA(),e.TgZ(19,"div",47),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"div",48)(23,"button",49),e.NdJ("click",function(){const r=e.CHM(t).index,l=e.oxw(2);return e.KtG(l.removeProductToBill(r))}),e._UZ(24,"mat-icon",44),e.qZA()()(),e.BQk()}if(2&n){const t=a.$implicit,o=a.index,i=e.oxw(2);e.xp6(3),e.hij(" ",o+1," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(6),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(2),e.Q6J("ngModel",t.quantity),e.xp6(2),e.Q6J("svgIcon","mat_solid:add"),e.xp6(2),e.hij(" ",e.xi3(18,8,t.price*i.billingForm.get("multiplier").value,"1.2-2")," "),e.xp6(3),e.hij(" ",e.xi3(21,11,t.quantity*t.price*i.billingForm.get("multiplier").value,"1.2-2")," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function Qe(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"div",35)(2,"div",36),e._UZ(3,"div"),e.TgZ(4,"div",37),e._uU(5," Producto "),e.qZA(),e.TgZ(6,"div",38),e._uU(7," Presentaci\xf3n "),e.qZA(),e.TgZ(8,"div",38),e._uU(9," Cantidad "),e.qZA(),e.TgZ(10,"div",38),e._uU(11," Precio "),e.qZA(),e.TgZ(12,"div",38),e._uU(13," Total "),e.qZA(),e.TgZ(14,"div",38),e._uU(15," Quitar "),e.qZA()(),e.YNc(16,Je,25,14,"ng-container",39),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(16),e.Q6J("ngForOf",t.billProducts)("ngForTrackBy",t.trackByFn)}}function Ne(n,a){1&n&&(e.TgZ(0,"div",50),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}function De(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"mat-option",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.selectCustomer(r))}),e._uU(1),e.qZA()}if(2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function $e(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," La fecha de la factura es obligatoria "),e.qZA())}function Me(n,a){if(1&n&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.no),e.xp6(1),e.hij(" ",t.name," ")}}function Re(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," El concepto es obligatorio "),e.qZA())}function Ee(n,a){if(1&n&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" x",t.value," ")}}function Le(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," El multiplicador es obligatorio "),e.qZA())}function ze(n,a){if(1&n&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function Ye(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de comprobante es obligatorio "),e.qZA())}function Ge(n,a){if(1&n&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function je(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," El tipo de operaci\xf3n es obligatorio "),e.qZA())}function He(n,a){if(1&n&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.iso," ")}}let Ke=(()=>{class n{constructor(t,o,i){this._changeDetectorRef=t,this._formBuilder=o,this.store=i,this.audio=new Audio("./assets/sounds/caja.mp3"),this.bill=new de.n2,this.billProducts=[],this.concepts=[],this.currencies=[],this.customers=[],this.customerSelected="",this.maxDate=new Date,this.multipliers=[],this.paymentMethods=[],this.operationTypes=[],this.products=[],this.searchCustomerControl=new s.NI(""),this.searchProductControl=new s.NI(""),this.total=0,this._unsubscribeAll=new B.x,this._fuseConfirmationService=(0,e.f3M)(q.R),this._billingService=(0,e.f3M)(Ue),this.concepts=[{id:"1",no:"0001",name:"Entidades"},{id:"2",no:"0002",name:"Otras Formas de GE"},{id:"3",no:"0003",name:"Personas Naturales"},{id:"4",no:"0004",name:"Fuera del pa\xeds"}]}ngOnInit(){this.billingForm=this._formBuilder.group({id:new s.NI,billDate:new s.NI(new Date,[s.kI.required]),multiplier:new s.NI(1,[s.kI.required,s.kI.min(1)]),concept:new s.NI(null,[s.kI.required]),currencyId:new s.NI(null,[s.kI.required]),customerId:new s.NI(this.customerSelected,[s.kI.required]),operationTypeId:new s.NI(null,[s.kI.required]),paymentMethodId:new s.NI(null,[s.kI.required]),products:new s.Oe([])}),this.store.select(ce.zd).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()}),this.store.select(me.Af).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.multipliers=t,this._changeDetectorRef.markForCheck()}),this.store.select(ue.p6).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.customers=t,this._changeDetectorRef.markForCheck()}),this.store.select(pe.K2).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.products=t,this._changeDetectorRef.markForCheck()}),this.store.select(Ae.VS).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.paymentMethods=t,this._changeDetectorRef.markForCheck()}),this.store.select(Ie.pU).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.operationTypes=t,this._changeDetectorRef.markForCheck()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,T.O)(""),(0,b.U)(t=>{const o="string"==typeof t?t:null==t?void 0:t.name;return o?this._filterProducts(o):this.products.slice()})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,T.O)(""),(0,b.U)(t=>{const o="string"==typeof t?t:null==t?void 0:t.name;return o?this._filterCustomers(o):this.customers.slice()}))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}selectCustomer(t){this.billingForm.get("customerId").setValue(t.id)}addProductToBill(t){if(this.billProducts.findIndex(r=>r.productId===t.productId)>-1)return void this.searchProductControl.reset();const i=this._mapProductToBill(t);this.billProducts.push(i),this.searchProductControl.reset(),this._calculateBillTotal()}incrementProductQty(t,o){const i=o;i.quantity++,this.billProducts[t]=i,this._calculateBillTotal()}decrementProductQty(t,o){const i=o;i.quantity--,this.billProducts[t]=i,this._calculateBillTotal()}removeProductToBill(t){this.billProducts.splice(t,1),this._calculateBillTotal()}createBill(){let t=this.billingForm.getRawValue();t=(0,L.omit)(t,["id"]),t.products=this.billProducts,t.total=this.total,this._fuseConfirmationService.open({title:"Registrar venta",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,d.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._billingService.createBill(t).pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:"Factura registrada correctamente",icon:{show:!0,name:"mat_solid:done",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.audio.play(),this.searchProductControl.reset(),this.searchCustomerControl.reset(),this.billingForm.reset(),this.billProducts=[],this.total=0,this.customerSelected="",this._changeDetectorRef.markForCheck()})})}_mapProductToBill(t){const{productId:o,name:i,uom:r,price:l}=t;return new de.vr(o,i,r,l,1)}_filterProducts(t){const o=t.toLowerCase();return this.products.filter(i=>i.name.toLowerCase().includes(o))}_filterCustomers(t){const o=t.toLowerCase();return this.customers.filter(i=>i.name.toLowerCase().includes(o))}_calculateBillTotal(){this.total=Number(this.billProducts.reduce((t,o)=>o.price*o.quantity+t,0).toFixed(2))*this.billingForm.get("multiplier").value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(s.qu),e.Y36(v.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sales-billing"]],viewQuery:function(t,o){if(1&t&&e.Gf(qe,5),2&t){let i;e.iGM(i=e.CRH())&&(o.billNgForm=i.first)}},decls:78,vars:52,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","items-center","p-6"],[1,"flex","flex-col","w-full"],[1,"text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"grid","grid-flow-row","grid-cols-1","mt-8","sm:grid-cols-6","gap-y-12","sm:gap-x-4","sm:mt-12"],[1,"col-span-4","p-6","shadow","rounded-2xl","bg-card"],[1,"w-full"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[3,"displayWith"],["productsAutocomplete","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],[1,"flex","flex-col","flex-auto","mt-2","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf","ngIfElse"],["noBillProducts",""],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"flex","items-center","justify-center","w-full","gap-2","p-6","mb-2","font-mono","text-3xl","font-semibold","leading-7","text-white","rounded-t-2xl","bg-gradient-to-r","from-primary-500","to-primary-700"],[1,"p-6","space-y-3",3,"formGroup"],["billNgForm","ngForm"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],["customerAutocomplete","matAutocomplete"],[1,"flex","flex-col","gap-2","md:flex-row"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["billDate",""],[4,"ngIf"],[3,"formControlName","required"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"formControlName","required","placeholder"],[1,"flex","items-center","justify-end"],["mat-flat-button","",1,"w-full","text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[3,"value","click"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"hidden","text-left","sm:block"],[1,"hidden","text-center","sm:block"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"hidden","truncate","md:block"],[1,"flex","flex-row","items-center","justify-center","gap-2"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded"],["matInput","","type","text","pattern","^[0-9]+$","name","quantity",1,"font-mono","font-semibold","text-center",3,"ngModel","ngModelChange"],[1,"hidden","font-mono","text-center","sm:block"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4," Facturar "),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"form",6)(8,"mat-form-field",7),e._UZ(9,"mat-icon",8)(10,"input",9),e.TgZ(11,"mat-autocomplete",10,11),e.YNc(13,Oe,2,2,"mat-option",12),e.ALo(14,"async"),e.qZA()()(),e.TgZ(15,"div",13),e.YNc(16,Qe,17,2,"ng-container",14),e.YNc(17,Ne,2,0,"ng-template",null,15,e.W1O),e.qZA()(),e.TgZ(19,"div",16)(20,"div",17),e._uU(21),e.ALo(22,"number"),e.qZA(),e.TgZ(23,"form",18,19)(25,"mat-form-field",7),e._UZ(26,"mat-icon",8)(27,"input",20),e.TgZ(28,"mat-autocomplete",10,21),e.YNc(30,De,2,2,"mat-option",12),e.ALo(31,"async"),e.qZA()(),e.TgZ(32,"div",22)(33,"mat-form-field",23)(34,"mat-label"),e._uU(35,"Fecha de la factura"),e.qZA(),e._UZ(36,"input",24),e.TgZ(37,"mat-hint"),e._uU(38,"DD/MM/YYYY"),e.qZA(),e._UZ(39,"mat-datepicker-toggle",25)(40,"mat-datepicker",null,26),e.YNc(42,$e,2,0,"mat-error",27),e.qZA(),e.TgZ(43,"mat-form-field",23)(44,"mat-label"),e._uU(45,"Concepto"),e.qZA(),e.TgZ(46,"mat-select",28),e.YNc(47,Me,2,2,"mat-option",29),e.qZA(),e.YNc(48,Re,2,0,"mat-error",27),e.qZA(),e.TgZ(49,"mat-form-field",23)(50,"mat-label"),e._uU(51,"Multiplicador"),e.qZA(),e.TgZ(52,"mat-select",28)(53,"mat-option",30),e._uU(54," x1 "),e.qZA(),e.YNc(55,Ee,2,2,"mat-option",29),e.qZA(),e.YNc(56,Le,2,0,"mat-error",27),e.qZA()(),e.TgZ(57,"div",22)(58,"mat-form-field",23)(59,"mat-label"),e._uU(60,"M\xe9todo de pago"),e.qZA(),e.TgZ(61,"mat-select",28),e.YNc(62,ze,2,2,"mat-option",29),e.qZA(),e.YNc(63,Ye,2,0,"mat-error",27),e.qZA(),e.TgZ(64,"mat-form-field",23)(65,"mat-label"),e._uU(66,"Tipo de Operaci\xf3n"),e.qZA(),e.TgZ(67,"mat-select",28),e.YNc(68,Ge,2,2,"mat-option",29),e.qZA(),e.YNc(69,je,2,0,"mat-error",27),e.qZA(),e.TgZ(70,"mat-form-field",23)(71,"mat-label"),e._uU(72,"Moneda"),e.qZA(),e.TgZ(73,"mat-select",31),e.YNc(74,He,2,2,"mat-option",29),e.qZA()()(),e.TgZ(75,"div",32)(76,"button",33),e.NdJ("click",function(){return o.createBill()}),e._uU(77," Confirmar "),e.qZA()()()()()()()()),2&t){const i=e.MAs(12),r=e.MAs(18),l=e.MAs(29),m=e.MAs(41);e.xp6(9),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",o.searchProductControl)("matAutocomplete",i)("placeholder","Buscar productos"),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(14,45,o.productsFiltered)),e.xp6(3),e.Q6J("ngIf",o.billProducts.length>0)("ngIfElse",r),e.xp6(5),e.hij(" ",e.xi3(22,47,o.total*o.billingForm.get("multiplier").value,"1.2-2")," "),e.xp6(2),e.Q6J("formGroup",o.billingForm),e.xp6(3),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",o.searchCustomerControl)("matAutocomplete",l)("placeholder","Buscar cliente")("required",!0),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(31,50,o.customersFiltered)),e.xp6(6),e.Q6J("matDatepicker",m)("formControlName","billDate")("max",o.maxDate)("required",!0),e.xp6(3),e.Q6J("for",m),e.xp6(3),e.Q6J("ngIf",o.billingForm.get("billDate").hasError("required")),e.xp6(4),e.Q6J("formControlName","concept")("required",!0),e.xp6(1),e.Q6J("ngForOf",o.concepts),e.xp6(1),e.Q6J("ngIf",o.billingForm.get("concept").hasError("required")),e.xp6(4),e.Q6J("formControlName","multiplier")("required",!0),e.xp6(1),e.Q6J("value",1),e.xp6(2),e.Q6J("ngForOf",o.multipliers),e.xp6(1),e.Q6J("ngIf",o.billingForm.get("multiplier").hasError("required")),e.xp6(5),e.Q6J("formControlName","paymentMethodId")("required",!0),e.xp6(1),e.Q6J("ngForOf",o.paymentMethods),e.xp6(1),e.Q6J("ngIf",o.billingForm.get("paymentMethodId").hasError("required")),e.xp6(4),e.Q6J("formControlName","operationTypeId")("required",!0),e.xp6(1),e.Q6J("ngForOf",o.operationTypes),e.xp6(1),e.Q6J("ngIf",o.billingForm.get("operationTypeId").hasError("required")),e.xp6(4),e.Q6J("formControlName","currencyId")("required",!0)("placeholder","Moneda"),e.xp6(1),e.Q6J("ngForOf",o.currencies),e.xp6(2),e.Q6J("disabled",o.billingForm.pristine||o.billingForm.invalid||0===o.billProducts.length)}},dependencies:[p.sg,p.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.c5,s.On,s.F,s.oH,s.sg,s.u,z.XC,z.ZL,H.ey,P.lW,I.Mq,I.hl,I.nW,N.Hw,g.TO,g.KE,g.bx,g.hX,g.qo,U.Nt,K.gD,p.Ov,p.JJ],encapsulation:2,changeDetection:0}),n})();var O=c(86087),A=c(84847),W=c(39646),V=c(56451),F=c(95698),X=c(78372),y=c(63900),J=c(15439),ee=c(58493),S=c(54641),D=c(2315);const fe=n=>n.bills,te=((0,v.P1)(fe,n=>n.bill),(0,v.P1)(fe,n=>n.bills));var oe=c(86428),ne=c(54787),k=c(48966);let We=(()=>{class n{constructor(t){this._dialogRef=t,this.dateControl=new s.NI(null,[s.kI.required])}closeDialog(){this._dialogRef.close()}selectDate(){const t=new Date(this.dateControl.value);this._dialogRef.close(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(k.so))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sales-bills-date-dialog-select"]],decls:19,vars:7,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],[1,"text-2xl","text-gray-400"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","py-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],["appearance","fill"],["matInput","",3,"matDatepicker","formControl"],["matIconSuffix","",3,"for"],["dp",""],[1,"flex","items-center","px-6","py-4","space-x-3","justify-between","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3," Seleccione la fecha de las facturas que desea exportar "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"mat-form-field",6),e._UZ(8,"input",7),e.TgZ(9,"mat-hint"),e._uU(10,"DD/MM/YYYY"),e.qZA(),e._UZ(11,"mat-datepicker-toggle",8)(12,"mat-datepicker",null,9),e.qZA()()()(),e.TgZ(14,"div",10)(15,"button",11),e._uU(16," Cancelar "),e.qZA(),e.TgZ(17,"button",12),e.NdJ("click",function(){return o.selectDate()}),e._uU(18," Aceptar "),e.qZA()()()),2&t){const i=e.MAs(13);e.xp6(8),e.Q6J("matDatepicker",i)("formControl",o.dateControl),e.xp6(3),e.Q6J("for",i),e.xp6(4),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("color","primary")("disabled",o.dateControl.invalid)("matDialogClose","confirmed")}},dependencies:[s.Fj,s.JJ,s.oH,P.lW,I.Mq,I.hl,I.nW,k.ZT,g.KE,g.bx,U.Nt],encapsulation:2}),n})();var ie=c(22594),w=c(45840),re=c(75714);let ge=(()=>{class n{constructor(t,o,i){this.apolloProvider=t,this._snackBar=o,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}getBills(t=1,o=5,i="no",r="desc",l=""){return this._apollo.query({query:Fe,errorPolicy:"all",variables:{offset:o*(t-1),limit:o,sort:i,order:r,search:l}}).pipe((0,x.b)(({errors:m,data:u})=>{if(m){let _="";m.forEach(M=>_+=`\n ${M.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:_,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,D.Im)({bills:u.findAllBills.bills})),this.store.dispatch((0,re.Jr)({pagination:u.findAllBills.pagination}))}))}getBillsByDate(t){return this._apollo.query({query:Se,errorPolicy:"all",variables:{date:t}}).pipe((0,x.b)(({errors:o})=>{if(o){let i="";o.forEach(r=>i+=`\n ${r.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getBillById(t){return this._apollo.query({query:Be,variables:{findBillByIdId:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:o,data:i})=>{if(o){let r="";o.forEach(l=>r+=`\n ${l.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,D.QG)({bill:i.bill}))}))}updateBill(t){return this.store.select(te).pipe((0,F.q)(1),(0,y.w)(o=>this._apollo.mutate({mutation:we,variables:{updateBillInput:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:i,data:r})=>{if(i){let u="";i.forEach(_=>u+=`\n ${_.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:u,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=(0,w.Z)(o);l[o.findIndex(u=>u.id===t.id)]=r.updatedBill,this.store.dispatch((0,D.Im)({bills:l}))}))))}removeBill(t){return this.store.select(te).pipe((0,F.q)(1),(0,y.w)(o=>this._apollo.mutate({mutation:Pe,variables:{removeBillId:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:i})=>{if(i){let m="";i.forEach(u=>m+=`\n ${u.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,w.Z)(o),l=o.findIndex(m=>m.id===t);r.splice(l,1),this.store.dispatch((0,D.Im)({bills:r}))}))))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f._M),e.LFG(Z.ux),e.LFG(v.yh))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Ve=c(51927),Xe=c(40520),ae=c(92181),he=c(87238);function et(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",33)(2,"div",34),e._uU(3),e.qZA(),e.TgZ(4,"div",34),e._uU(5),e.ALo(6,"date"),e.qZA(),e.TgZ(7,"div",29),e._uU(8),e.qZA(),e.TgZ(9,"div",30),e._uU(10),e.qZA(),e.TgZ(11,"div",34),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"div",30),e._uU(15),e.qZA(),e.TgZ(16,"div",35)(17,"button",36),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("open",r))}),e._UZ(18,"mat-icon",37),e.qZA(),e.TgZ(19,"button",38),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("print",r))}),e._UZ(20,"mat-icon",37),e.qZA(),e.TgZ(21,"button",39),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("download",r))}),e._UZ(22,"mat-icon",37),e.qZA(),e.TgZ(23,"button",40),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.exportVersat(r))}),e._UZ(24,"mat-icon",37),e.qZA()()(),e.BQk()}if(2&n){const t=a.$implicit;e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",e.xi3(6,10,t.createdAt,"dd/MM/yyyy")," "),e.xp6(3),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(13,13,t.total,"1.2-2")," "),e.xp6(3),e.hij(" ",t.status," "),e.xp6(3),e.Q6J("svgIcon","mat_solid:visibility"),e.xp6(2),e.Q6J("svgIcon","mat_solid:print"),e.xp6(2),e.Q6J("svgIcon","mat_solid:download"),e.xp6(2),e.Q6J("svgIcon","mat_solid:upload")}}function tt(n,a){if(1&n&&(e.ynx(0),e.YNc(1,et,25,16,"ng-container",32),e.BQk()),2&n){const t=a.ngIf,o=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",o.trackByFn)}}const ot=function(n){return{"pointer-events-none":n}},nt=function(){return[5,10,25,100]};function it(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"div",26)(2,"div",27)(3,"div",28),e._uU(4," N\xfamero "),e.qZA(),e.TgZ(5,"div",28),e._uU(6," Fecha "),e.qZA(),e.TgZ(7,"div",29),e._uU(8," Cliente "),e.qZA(),e.TgZ(9,"div",30),e._uU(10," Moneda "),e.qZA(),e.TgZ(11,"div",28),e._uU(12," Importe "),e.qZA(),e.TgZ(13,"div",30),e._uU(14," Estado "),e.qZA(),e.TgZ(15,"div",30),e._uU(16," Acciones "),e.qZA()(),e.YNc(17,tt,2,2,"ng-container",23),e.ALo(18,"async"),e.qZA(),e._UZ(19,"mat-paginator",31),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(2),e.Q6J("mat-sort-header","createdAt"),e.xp6(6),e.Q6J("mat-sort-header","total"),e.xp6(6),e.Q6J("ngIf",e.lcZ(18,10,t.bills$)),e.xp6(2),e.Q6J("ngClass",e.VKq(12,ot,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(14,nt))("showFirstLastButtons",!0)}}function rt(n,a){if(1&n&&(e.ynx(0),e.YNc(1,it,20,15,"ng-container",25),e.BQk()),2&n){const t=a.ngIf;e.oxw();const o=e.MAs(39);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",o)}}function at(n,a){1&n&&(e.TgZ(0,"div",41),e._uU(1," \xa1No se ha registrado ninguna factura! "),e.qZA())}const st=function(){return["/sales/billing"]};S.vfs=ee.I.vfs;let lt=(()=>{class n{constructor(t,o,i,r,l,m,u,_){this._billsService=t,this._changeDetectorRef=o,this._dialog=i,this._fileSaverService=r,this._fuseConfirmationService=l,this._httpClient=m,this._snackBar=u,this.store=_,this.bills$=(0,W.of)([]),this.isLoading=!1,this.isSlideLoading=!1,this.merchant=null,this.merchantLogo=null,this.searchInputControl=new s.NI,this.selectedSlide=null,this.user=null,this._unsubscribeAll=new B.x}ngOnInit(){this.store.select(ne.rk).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ie.Qs).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.bills$=this.store.select(te),this.store.select(oe.B).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,d.R)(this._unsubscribeAll),(0,X.b)(300),(0,y.w)(t=>(this.isLoading=!0,this._billsService.getBills(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,b.U)(()=>{this.isLoading=!1})).subscribe(),this.merchant.logoUrl&&this._httpClient.get(this.merchant.logoUrl,{responseType:"blob"}).subscribe(t=>{const o=new FileReader;o.onloadend=()=>{this.merchantLogo=o.result},o.readAsDataURL(t)})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,V.T)(this._sort.sortChange,this._paginator.page).pipe((0,y.w)(()=>(this.isLoading=!0,this._billsService.getBills(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,b.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,D.Hl)())}generatePDF(t="open",o){const i={content:[{table:{widths:["*","*"],body:[[{image:this.merchantLogo,width:150},{text:"FACTURA: "+o.no,fontSize:18,bold:!0,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{table:{body:[[{text:this.merchant.name,fontSize:18,bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:`${this.merchant.address}, municipio ${this.merchant.city}, provincia ${this.merchant.state}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`NIT: ${this.merchant.nit}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Tel.: ${this.merchant.phoneNumbers.length>0?this.merchant.phoneNumbers[0].phoneNumber:""}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`@: ${this.merchant.emails.length>0?this.merchant.emails[0].email:""}`,fontSize:10,fontFeatures:["c2sc"]}],[{text:`Moneda${o.currenciesPercents.cup>0&&o.currenciesPercents.cup<1?"s :":":"} ${o.currenciesPercents.cup>0&&o.currenciesPercents.cup<=1?"CUP":""}${o.currenciesPercents.cup>0&&o.currenciesPercents.cup<1?",":"."} ${o.currenciesPercents.usd>0&&o.currenciesPercents.usd<=1?"USD":""}`,fontSize:12,fontFeatures:["c2sc","smcp"]}]]},layout:"noBorders"},{table:{body:[[{text:o.customer.name,fontSize:18,alignment:"right",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:`${o.customer.address}, municipio ${o.customer.city}, provincia ${o.customer.state}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{text:`NIT: ${o.customer.nit}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{text:`Tel.: ${o.customer.phoneNumber?o.customer.phoneNumber.phoneNumber:""}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{text:`@: ${o.customer.email?o.customer.email.email:""}`,fontSize:10,alignment:"right",fontFeatures:["c2sc"]}]]},layout:"noBorders"}]]},layout:"noBorders"},{table:{headerRows:1,widths:["*","*"],body:[[{text:"Datos del Veh\xedculo",style:"table_header",alignment:"left"},{text:"",fontFeatures:["c2sc","smcp"]}],[{text:"Matr\xedcula",style:"table_header",alignment:"left"},{text:o.vehicle.registrationNumber,fontFeatures:["c2sc","smcp"]}],[{text:"Marca/Modelo",style:"table_header",alignment:"left"},{text:`${o.vehicle.brand.name}/${o.vehicle.model}`,fontFeatures:["c2sc","smcp"]}]]},layout:{hLineWidth:(r,l)=>.7,vLineWidth:(r,l)=>.7},marginTop:20},{table:{headerRows:1,widths:[30,"*",35,60,60,60,60,60],body:[[{text:"Item",style:"table_header"},{text:"Producto o Servicio",style:"table_header",alignment:"left"},{text:"Unidad",style:"table_header"},{text:"Cantidad",style:"table_header"},{text:"Precio CUP",style:"table_header"},{text:"Total CUP",style:"table_header"},{text:"Precio USD",style:"table_header"},{text:"Total USD",style:"table_header"}],...o.productsInBill.map(r=>[{text:o.productsInBill.indexOf(r)+1,alignment:"center",style:"table_body"},{text:r.name,style:"table_body"},{text:r.uom.abbr,alignment:"center",style:"table_body"},{text:this._getProductQuantity(o.products,r.id),alignment:"center",style:"table_body"},{text:(r.price*o.currenciesPercents.cup).toFixed(2),alignment:"center",style:"table_body"},{text:(this._getProductQuantity(o.products,r.id)*r.price*o.currenciesPercents.cup).toFixed(2),alignment:"center",style:"table_body"},{text:(r.price*o.currenciesPercents.usd/o.rate.value).toFixed(2),alignment:"center",style:"table_body"},{text:(this._getProductQuantity(o.products,r.id)*r.price*o.currenciesPercents.usd/o.rate.value).toFixed(2),alignment:"center",style:"table_body"}]),...o.servicesInBill.map(r=>[{text:o.productsInBill.length+o.servicesInBill.indexOf(r)+1,alignment:"center",style:"table_body"},{text:r.description,style:"table_body"},{},{},{text:(r.minPrice*o.currenciesPercents.cup).toFixed(2),alignment:"center",style:"table_body"},{text:(r.minPrice*o.currenciesPercents.cup).toFixed(2),alignment:"center",style:"table_body"},{text:(r.minPrice*o.currenciesPercents.usd/o.rate.value).toFixed(2),alignment:"center",style:"table_body"},{text:(r.minPrice*o.currenciesPercents.usd/o.rate.value).toFixed(2),alignment:"center",style:"table_body"}]),[{rowSpan:3,colSpan:4,text:""},"","","",{text:"Subtotal CUP",style:"totals_name"},{text:o.totalCup.toFixed(2),style:"totals_value"},{text:"Subtotal USD",style:"totals_name"},{text:o.totalUsd.toFixed(2),style:"totals_value"}],[{colSpan:4,text:""},"","","",{text:"Descuento CUP",style:"totals_name"},{text:Number(0).toFixed(2),style:"totals_value"},{text:"Descuento USD",style:"totals_name"},{text:Number(0).toFixed(2),style:"totals_value"}],[{colSpan:4,text:""},"","","",{text:"Total CUP",style:"totals_name"},{text:o.totalCup.toFixed(2),style:"totals_value"},{text:"Total USD",style:"totals_name"},{text:o.totalUsd.toFixed(2),style:"totals_value"}]]},layout:{hLineWidth:(r,l)=>.7,vLineWidth:(r,l)=>.7},marginTop:20},{marginTop:20,layout:{hLineWidth:(r,l)=>.7,vLineWidth:(r,l)=>.7},table:{headerRows:1,widths:["*","*"],body:[[{style:"table_header",text:"elaborado"},{style:"table_header",text:"recibido"}],[{text:"Nombre y apellidos:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:"Nombre y apellidos:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]}],[{text:"Cargo:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:"Cargo:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]}],[{text:"Firma:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:"Firma:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]}],[{},{text:"Carnet de Identidad:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]}],[{text:"Fecha:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]},{text:"Fecha:",bold:!0,fontSize:10,fontFeatures:["c2sc","smcp"]}]]}}],footer:(r,l)=>({table:{widths:["*","*"],body:[[{text:`Factura: ${o.no} generada para ${o.customer.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${r.toString()}/${l} - Fecha de impresi\xf3n ${J().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:`Factura: ${o.no}`,author:`${this.user.name} ${this.user.lastname}`,creationDate:J().toDate(),modDate:J().toDate(),producer:this.merchant.name}};switch(t){case t="download":S.createPdf(i).download();break;case t="open":S.createPdf(i).open();break;case t="print":S.createPdf(i).print()}}exportVersat(t){this._fileSaverService.exportAsFacFile(t,this.user,this._getBankAccountMC(this.merchant),this._getBankAccountOM(this.merchant,t))}trackByFn(t,o){return t||o.id}exportBillsByDateToVersat(){this._dialog.open(We,{panelClass:"ath-dialog-panel",maxWidth:"500px"}).afterClosed().subscribe(o=>{this._billsService.getBillsByDate(o.toISOString()).pipe((0,F.q)(1)).subscribe(({data:i})=>{const l=(0,L.groupBy)(i.findAllBillsByDate.bills,"paymentMethod.name");(0,L.groupBy)(l,"operationType.name")})})}_getBankAccountMC(t){return t.bankAccounts.find(i=>"CUP"===i.currency).no}_getBankAccountOM(t,o){return t.bankAccounts.find(i=>i.currency===o.currency.iso).no}_getProductQuantity(t,o){return t.find(i=>i.productId===o).quantity}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(ge),e.Y36(e.sBO),e.Y36(k.uw),e.Y36(Ve.m),e.Y36(q.R),e.Y36(Xe.eN),e.Y36(Z.ux),e.Y36(v.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sales-bills"]],viewQuery:function(t,o){if(1&t&&(e.Gf(O.NW,5),e.Gf(A.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(o._paginator=i.first),e.iGM(i=e.CRH())&&(o._sort=i.first)}},decls:40,vars:15,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,""],["mat-icon-button","",1,"",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noBills",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","bills-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hiddem","sm:block",3,"mat-sort-header"],[1,"hiddem","sm:block"],[1,"hiddem","sm:block","text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","bills-grid","md:px-8"],[1,"hiddem","sm:block","font-mono"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Imprimir factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Descargar factura",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Exportar a Versat",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Facturas"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Facturas "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Registrar Factura"),e.qZA()(),e.TgZ(26,"div",17)(27,"button",18),e._UZ(28,"mat-icon",15),e.qZA(),e.TgZ(29,"mat-menu",null,19)(31,"button",20),e.NdJ("click",function(){return o.exportBillsByDateToVersat()}),e._UZ(32,"mat-icon",15),e._uU(33," Exportar facturas por d\xeda para Versat "),e.qZA()()()()(),e.TgZ(34,"div",21)(35,"div",22),e.YNc(36,rt,2,2,"ng-container",23),e.ALo(37,"async"),e.YNc(38,at,2,0,"ng-template",null,24,e.W1O),e.qZA()()()),2&t){const i=e.MAs(30);e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",o.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(1),e.Q6J("routerLink",e.DdM(14,st)),e.xp6(1),e.Q6J("svgIcon","mat_solid:edit"),e.xp6(4),e.Q6J("matMenuTriggerFor",i),e.xp6(1),e.Q6J("svgIcon","mat_solid:more_vert"),e.xp6(4),e.Q6J("svgIcon","mat_solid:upload"),e.xp6(4),e.Q6J("ngIf",e.lcZ(37,12,o.bills$))}},dependencies:[C.rH,C.yS,p.mk,p.sg,p.O5,s.Fj,s.JJ,s.oH,P.lW,N.Hw,g.KE,g.qo,U.Nt,ae.VK,ae.OP,ae.p6,O.NW,A.YE,A.nU,he.gM,p.Ov,p.JJ,p.uU],encapsulation:2,changeDetection:0}),n})();const ct=f.Ps`
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

`,mt=f.Ps`
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
`,dt=f.Ps`
    mutation RemoveOffer($removeOfferId: String!) {
        removeOffer(id: $removeOfferId)
    }
`,ut=f.Ps`
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
                    lastname
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
`,pt=f.Ps`
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
`;let ft=(()=>{class n{constructor(t,o){this.apolloProvider=t,this._snackBar=o,this._apollo=this.apolloProvider.use("BALANC")}createOffer(t){return this._apollo.mutate({mutation:ct,variables:{createOfferInput:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:o})=>{if(o){let r="";o.forEach(l=>r+=`\n ${l.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f._M),e.LFG(Z.ux))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();class gt{}class ht{constructor(a,t,o,i,r){this.productId=a,this.name=t,this.uom=o,this.price=i,this.quantity=r}}const _t=["offerNgForm"];function xt(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"mat-option",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.addProductToOffer(r))}),e._uU(1),e.qZA()}if(2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function bt(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",40)(2,"div"),e._uU(3),e.qZA(),e.TgZ(4,"div",41),e._uU(5),e.qZA(),e.TgZ(6,"div",38),e._uU(7," U "),e.qZA(),e.TgZ(8,"div",38)(9,"div",42)(10,"button",43),e.NdJ("click",function(){const i=e.CHM(t),r=i.index,l=i.$implicit,m=e.oxw(2);return e.KtG(m.decrementProductQty(r,l))}),e._UZ(11,"mat-icon",44),e.qZA(),e.TgZ(12,"mat-form-field",45)(13,"input",46),e.NdJ("ngModelChange",function(i){const l=e.CHM(t).$implicit;return e.KtG(l.quantity=i)}),e.qZA()(),e.TgZ(14,"button",43),e.NdJ("click",function(){const i=e.CHM(t),r=i.index,l=i.$implicit,m=e.oxw(2);return e.KtG(m.incrementProductQty(r,l))}),e._UZ(15,"mat-icon",44),e.qZA()()(),e.TgZ(16,"div",47),e._uU(17),e.ALo(18,"number"),e.qZA(),e.TgZ(19,"div",47),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"div",48)(23,"button",49),e.NdJ("click",function(){const r=e.CHM(t).index,l=e.oxw(2);return e.KtG(l.removeProductToOffer(r))}),e._UZ(24,"mat-icon",44),e.qZA()()(),e.BQk()}if(2&n){const t=a.$implicit,o=a.index,i=e.oxw(2);e.xp6(3),e.hij(" ",o+1," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(6),e.Q6J("svgIcon","mat_solid:remove"),e.xp6(2),e.Q6J("ngModel",t.quantity),e.xp6(2),e.Q6J("svgIcon","mat_solid:add"),e.xp6(2),e.hij(" ",e.xi3(18,8,t.price*i.bidForm.get("multiplier").value,"1.2-2")," "),e.xp6(3),e.hij(" ",e.xi3(21,11,t.quantity*t.price*i.bidForm.get("multiplier").value,"1.2-2")," "),e.xp6(4),e.Q6J("svgIcon","mat_solid:close")}}function vt(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"div",35)(2,"div",36),e._UZ(3,"div"),e.TgZ(4,"div",37),e._uU(5," Producto "),e.qZA(),e.TgZ(6,"div",38),e._uU(7," Presentaci\xf3n "),e.qZA(),e.TgZ(8,"div",38),e._uU(9," Cantidad "),e.qZA(),e.TgZ(10,"div",38),e._uU(11," Precio "),e.qZA(),e.TgZ(12,"div",38),e._uU(13," Total "),e.qZA(),e.TgZ(14,"div",38),e._uU(15," Quitar "),e.qZA()(),e.YNc(16,bt,25,14,"ng-container",39),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(16),e.Q6J("ngForOf",t.offerProducts)("ngForTrackBy",t.trackByFn)}}function yt(n,a){1&n&&(e.TgZ(0,"div",50),e._uU(1," \xa1No ha seleccionado ning\xfan producto a\xfan! "),e.qZA())}function Tt(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"mat-option",34),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.selectCustomer(r))}),e._uU(1),e.qZA()}if(2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," ")}}function Ct(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," La fecha de la oferta es obligatoria "),e.qZA())}function Zt(n,a){if(1&n&&(e.TgZ(0,"mat-option",31),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.iso," ")}}function It(n,a){if(1&n&&(e.TgZ(0,"mat-option",31),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" x",t.value," ")}}function At(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," El multiplicador es obligatorio "),e.qZA())}let Ft=(()=>{class n{constructor(t,o,i){this._changeDetectorRef=t,this._formBuilder=o,this.store=i,this.currencies=[],this.customers=[],this.customerSelected="",this.maxDate=new Date,this.multipliers=[],this.offer=new gt,this.offerProducts=[],this.products=[],this.searchCustomerControl=new s.NI(""),this.searchProductControl=new s.NI(""),this.total=0,this._unsubscribeAll=new B.x,this._fuseConfirmationService=(0,e.f3M)(q.R),this._bidService=(0,e.f3M)(ft)}ngOnInit(){this.bidForm=this._formBuilder.group({id:new s.NI,multiplier:new s.NI(1,[s.kI.required,s.kI.min(1)]),currencyId:new s.NI(null,[s.kI.required]),customerId:new s.NI(this.customerSelected,[s.kI.required]),offerDate:new s.NI(new Date,[s.kI.required]),products:new s.Oe([])}),this.store.select(me.Af).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.multipliers=t,this._changeDetectorRef.markForCheck()}),this.store.select(ce.zd).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.currencies=t,this._changeDetectorRef.markForCheck()}),this.store.select(ue.p6).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.customers=t,this._changeDetectorRef.markForCheck()}),this.store.select(pe.K2).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.products=t,this._changeDetectorRef.markForCheck()}),this.productsFiltered=this.searchProductControl.valueChanges.pipe((0,T.O)(""),(0,b.U)(t=>{const o="string"==typeof t?t:null==t?void 0:t.name;return o?this._filterProducts(o):this.products.slice()})),this.customersFiltered=this.searchCustomerControl.valueChanges.pipe((0,T.O)(""),(0,b.U)(t=>{const o="string"==typeof t?t:null==t?void 0:t.name;return o?this._filterCustomers(o):this.customers.slice()}))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}displayFn(t){return t&&t.name?t.name:""}selectCustomer(t){this.bidForm.get("customerId").setValue(t.id)}addProductToOffer(t){if(this.offerProducts.findIndex(r=>r.productId===t.productId)>-1)return void this.searchProductControl.reset();const i=this._mapProductToOffer(t);this.offerProducts.push(i),this.searchProductControl.reset(),this._calculateOfferTotal()}incrementProductQty(t,o){const i=o;i.quantity++,this.offerProducts[t]=i,this._calculateOfferTotal()}decrementProductQty(t,o){const i=o;i.quantity--,this.offerProducts[t]=i,this._calculateOfferTotal()}removeProductToOffer(t){this.offerProducts.splice(t,1),this._calculateOfferTotal()}createOffer(){let t=this.bidForm.getRawValue();t=(0,L.omit)(t,["id"]),t.products=this.offerProducts,t.total=this.total,console.log({offer:t}),this._fuseConfirmationService.open({title:"Registrar venta",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,d.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._bidService.createOffer(t).pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:"Oferta creada correctamente",icon:{show:!0,name:"mat_solid:done",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.searchProductControl.reset(),this.searchCustomerControl.reset(),this.bidForm.reset(),this.offerProducts=[],this.total=0,this._changeDetectorRef.markForCheck()})})}_mapProductToOffer(t){const{productId:o,name:i,uom:r,price:l}=t;return new ht(o,i,r,l,1)}_filterProducts(t){const o=t.toLowerCase();return this.products.filter(i=>i.name.toLowerCase().includes(o))}_filterCustomers(t){const o=t.toLowerCase();return this.customers.filter(i=>i.name.toLowerCase().includes(o))}_calculateOfferTotal(){this.total=Number(this.offerProducts.reduce((t,o)=>o.price*o.quantity+t,0).toFixed(2))*this.bidForm.get("multiplier").value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(s.qu),e.Y36(v.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sales-bid"]],viewQuery:function(t,o){if(1&t&&e.Gf(_t,5),2&t){let i;e.iGM(i=e.CRH())&&(o.offerNgForm=i.first)}},decls:60,vars:40,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","items-center","p-6"],[1,"flex","flex-col","w-full"],[1,"text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"grid","grid-cols-1","sm:grid-cols-6","grid-flow-row","gap-y-12","sm:gap-x-4","mt-8","sm:mt-12"],[1,"col-span-4","p-6","shadow","rounded-2xl","bg-card"],[1,"w-full"],["appearance","fill",1,"w-full","fuse-mat-dense"],["matPrefix","",3,"svgIcon"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder"],[3,"displayWith"],["productsAutocomplete","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],[1,"flex","flex-col","mt-2","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf","ngIfElse"],["noOfferProducts",""],[1,"col-span-2","shadow","rounded-2xl","bg-card"],[1,"flex","justify-center","rounded-t-2xl","gap-2","font-mono","mb-2","items-center","leading-7","text-3xl","text-white","font-semibold","w-full","p-6","bg-gradient-to-r","from-primary-500","to-primary-700"],[1,"space-y-3","p-6",3,"formGroup"],["billNgForm","ngForm"],["type","text","matInput","",3,"formControl","matAutocomplete","placeholder","required"],["customerAutocomplete","matAutocomplete"],[1,"flex","flex-col","md:flex-row","gap-2"],[1,"w-full","fuse-mat-dense"],["matInput","",3,"matDatepicker","formControlName","max","required"],["matIconSuffix","",3,"for"],["offerDate",""],[4,"ngIf"],[3,"formControlName","required","placeholder"],[3,"value",4,"ngFor","ngForOf"],[3,"formControlName","required"],[3,"value"],[1,"flex","items-center","justify-end"],["mat-flat-button","",1,"w-full","text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"disabled","click"],[3,"value","click"],[1,"grid"],[1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","billing-products-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-primary","dark:bg-opacity-5"],[1,"text-left","hidden","sm:block"],[1,"text-center","hidden","sm:block"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","billing-products-grid","md:px-8"],[1,"hidden","truncate","md:block"],[1,"flex","flex-row","gap-2","justify-center","items-center"],["mat-stroked-button","",1,"p-2","leading-6","min-w-7","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"fuse-mat-dense","fuse-mat-rounded"],["matInput","","type","number","name","quantity","disabled","",1,"text-center","font-semibold","font-mono",3,"ngModel","ngModelChange"],[1,"text-center","hidden","sm:block","font-mono"],[1,"flex","justify-center"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4," Ofertar "),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"form",6)(8,"mat-form-field",7),e._UZ(9,"mat-icon",8)(10,"input",9),e.TgZ(11,"mat-autocomplete",10,11),e.YNc(13,xt,2,2,"mat-option",12),e.ALo(14,"async"),e.qZA()()(),e.TgZ(15,"div",13),e.YNc(16,vt,17,2,"ng-container",14),e.YNc(17,yt,2,0,"ng-template",null,15,e.W1O),e.qZA()(),e.TgZ(19,"div",16)(20,"div",17),e._uU(21),e.ALo(22,"number"),e.qZA(),e.TgZ(23,"form",18,19)(25,"mat-form-field",7),e._UZ(26,"mat-icon",8)(27,"input",20),e.TgZ(28,"mat-autocomplete",10,21),e.YNc(30,Tt,2,2,"mat-option",12),e.ALo(31,"async"),e.qZA()(),e.TgZ(32,"div",22)(33,"mat-form-field",23)(34,"mat-label"),e._uU(35,"Fecha de la oferta"),e.qZA(),e._UZ(36,"input",24),e.TgZ(37,"mat-hint"),e._uU(38,"DD/MM/YYYY"),e.qZA(),e._UZ(39,"mat-datepicker-toggle",25)(40,"mat-datepicker",null,26),e.YNc(42,Ct,2,0,"mat-error",27),e.qZA()(),e.TgZ(43,"div",22)(44,"mat-form-field",23)(45,"mat-label"),e._uU(46,"Moneda"),e.qZA(),e.TgZ(47,"mat-select",28),e.YNc(48,Zt,2,2,"mat-option",29),e.qZA()(),e.TgZ(49,"mat-form-field",23)(50,"mat-label"),e._uU(51,"Multiplicador"),e.qZA(),e.TgZ(52,"mat-select",30)(53,"mat-option",31),e._uU(54," x1 "),e.qZA(),e.YNc(55,It,2,2,"mat-option",29),e.qZA(),e.YNc(56,At,2,0,"mat-error",27),e.qZA()(),e.TgZ(57,"div",32)(58,"button",33),e.NdJ("click",function(){return o.createOffer()}),e._uU(59," Crear Oferta "),e.qZA()()()()()()()()),2&t){const i=e.MAs(12),r=e.MAs(18),l=e.MAs(29),m=e.MAs(41);e.xp6(9),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",o.searchProductControl)("matAutocomplete",i)("placeholder","Buscar productos"),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(14,33,o.productsFiltered)),e.xp6(3),e.Q6J("ngIf",o.offerProducts.length>0)("ngIfElse",r),e.xp6(5),e.hij(" ",e.xi3(22,35,o.total*o.bidForm.get("multiplier").value,"1.2-2")," "),e.xp6(2),e.Q6J("formGroup",o.bidForm),e.xp6(3),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",o.searchCustomerControl)("matAutocomplete",l)("placeholder","Buscar cliente")("required",!0),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(31,38,o.customersFiltered)),e.xp6(6),e.Q6J("matDatepicker",m)("formControlName","offerDate")("max",o.maxDate)("required",!0),e.xp6(3),e.Q6J("for",m),e.xp6(3),e.Q6J("ngIf",o.bidForm.get("offerDate").hasError("required")),e.xp6(5),e.Q6J("formControlName","currencyId")("required",!0)("placeholder","Moneda"),e.xp6(1),e.Q6J("ngForOf",o.currencies),e.xp6(4),e.Q6J("formControlName","multiplier")("required",!0),e.xp6(1),e.Q6J("value",1),e.xp6(2),e.Q6J("ngForOf",o.multipliers),e.xp6(1),e.Q6J("ngIf",o.bidForm.get("multiplier").hasError("required")),e.xp6(2),e.Q6J("disabled",o.bidForm.pristine||o.bidForm.invalid||0===o.offerProducts.length)}},dependencies:[p.sg,p.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.On,s.F,s.oH,s.sg,s.u,z.XC,z.ZL,H.ey,P.lW,I.Mq,I.hl,I.nW,N.Hw,g.TO,g.KE,g.bx,g.hX,g.qo,U.Nt,K.gD,p.Ov,p.JJ],encapsulation:2,changeDetection:0}),n})();const _e=n=>n.offers,se=((0,v.P1)(_e,n=>n.offer),(0,v.P1)(_e,n=>n.offers));var Y=c(34231);let xe=(()=>{class n{constructor(t,o,i){this.apolloProvider=t,this._snackBar=o,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}getOffers(t=1,o=5,i="no",r="desc",l=""){return this._apollo.query({query:ut,errorPolicy:"all",variables:{offset:o*(t-1),limit:o,sort:i,order:r,search:l}}).pipe((0,x.b)(({errors:m,data:u})=>{if(m){let _="";m.forEach(M=>_+=`\n ${M.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:_,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,Y.Zu)({offers:u.findAllOffers.offers})),this.store.dispatch((0,re.Jr)({pagination:u.findAllOffers.pagination}))}))}getOfferById(t){return this._apollo.query({query:pt,variables:{findOfferByIdId:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:o,data:i})=>{if(o){let r="";o.forEach(l=>r+=`\n ${l.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,Y.FK)({offer:i.offer}))}))}updateOffer(t){return this.store.select(se).pipe((0,F.q)(1),(0,y.w)(o=>this._apollo.mutate({mutation:mt,variables:{updateOfferInput:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:i,data:r})=>{if(i){let u="";i.forEach(_=>u+=`\n ${_.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:u,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=(0,w.Z)(o);l[o.findIndex(u=>u.id===t.id)]=r.updatedOffer,this.store.dispatch((0,Y.Zu)({offers:l}))}))))}removeOffer(t){return this.store.select(se).pipe((0,F.q)(1),(0,y.w)(o=>this._apollo.mutate({mutation:dt,variables:{removeOfferId:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:i})=>{if(i){let m="";i.forEach(u=>m+=`\n ${u.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,w.Z)(o),l=o.findIndex(m=>m.id===t);r.splice(l,1),this.store.dispatch((0,Y.Zu)({offers:r}))}))))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f._M),e.LFG(Z.ux),e.LFG(v.yh))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function St(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",30)(2,"div",31),e._uU(3),e.qZA(),e.TgZ(4,"div",26),e._uU(5),e.qZA(),e.TgZ(6,"div",27),e._uU(7),e.qZA(),e.TgZ(8,"div",31),e._uU(9),e.ALo(10,"number"),e.qZA(),e.TgZ(11,"div",27),e._uU(12),e.qZA(),e.TgZ(13,"div",32)(14,"button",33),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("open",r))}),e._UZ(15,"mat-icon",34),e.qZA(),e.TgZ(16,"button",35),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("print",r))}),e._UZ(17,"mat-icon",34),e.qZA(),e.TgZ(18,"button",36),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.generatePDF("download",r))}),e._UZ(19,"mat-icon",34),e.qZA()()(),e.BQk()}if(2&n){const t=a.$implicit;e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.customer.name," "),e.xp6(2),e.hij(" ",t.currency.iso," "),e.xp6(2),e.hij(" ",e.xi3(10,8,t.total,"1.2-2")," "),e.xp6(3),e.hij(" ",t.status," "),e.xp6(3),e.Q6J("svgIcon","mat_solid:visibility"),e.xp6(2),e.Q6J("svgIcon","mat_solid:print"),e.xp6(2),e.Q6J("svgIcon","mat_solid:download")}}function Bt(n,a){if(1&n&&(e.ynx(0),e.YNc(1,St,20,11,"ng-container",29),e.BQk()),2&n){const t=a.ngIf,o=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",o.trackByFn)}}const kt=function(n){return{"pointer-events-none":n}},wt=function(){return[5,10,25,100]};function Pt(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"div",23)(2,"div",24)(3,"div",25),e._uU(4," N\xfamero "),e.qZA(),e.TgZ(5,"div",26),e._uU(6," Cliente "),e.qZA(),e.TgZ(7,"div",27),e._uU(8," Moneda "),e.qZA(),e.TgZ(9,"div",25),e._uU(10," Importe "),e.qZA(),e.TgZ(11,"div",27),e._uU(12," Estado "),e.qZA(),e.TgZ(13,"div",27),e._uU(14," Acciones "),e.qZA()(),e.YNc(15,Bt,2,2,"ng-container",20),e.ALo(16,"async"),e.qZA(),e._UZ(17,"mat-paginator",28),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(6),e.Q6J("mat-sort-header","total"),e.xp6(6),e.Q6J("ngIf",e.lcZ(16,9,t.offers$)),e.xp6(2),e.Q6J("ngClass",e.VKq(11,kt,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(13,wt))("showFirstLastButtons",!0)}}function Ut(n,a){if(1&n&&(e.ynx(0),e.YNc(1,Pt,18,14,"ng-container",22),e.BQk()),2&n){const t=a.ngIf;e.oxw();const o=e.MAs(32);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",o)}}function qt(n,a){1&n&&(e.TgZ(0,"div",37),e._uU(1," \xa1No se ha registrado ninguna oferta! "),e.qZA())}const Ot=function(){return["/sales/bid"]};S.vfs=ee.I.vfs;let Jt=(()=>{class n{constructor(t,o,i,r,l){this._offersService=t,this._changeDetectorRef=o,this._fuseConfirmationService=i,this._snackBar=r,this.store=l,this.offers$=(0,W.of)([]),this.isLoading=!1,this.searchInputControl=new s.NI,this.isSlideLoading=!1,this.selectedSlide=null,this.user=null,this.merchant=null,this._unsubscribeAll=new B.x}ngOnInit(){this.store.select(ne.rk).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ie.Qs).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.offers$=this.store.select(se),this.store.select(oe.B).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,d.R)(this._unsubscribeAll),(0,X.b)(300),(0,y.w)(t=>(this.isLoading=!0,this._offersService.getOffers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,b.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"desc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,V.T)(this._sort.sortChange,this._paginator.page).pipe((0,y.w)(()=>(this.isLoading=!0,this._offersService.getOffers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,b.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}generatePDF(t="open",o){const i={header:{text:o.no,fontSize:18,bold:!0,alignment:"right",fontFeatures:["c2sc","smcp"],marginTop:10,marginRight:40},content:[{table:{widths:["*","*"],body:[[{table:{body:[[{text:this.merchant.name,fontSize:18,bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:`${this.merchant.address}, municipio ${this.merchant.city}, provincia ${this.merchant.state}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Tel.: ${this.merchant.phoneNumbers.length>0?this.merchant.phoneNumbers[0].phoneNumber:""}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`@: ${this.merchant.emails.length>0?this.merchant.emails[0].email:""}`,fontSize:10,fontFeatures:["c2sc"]}],[{text:`NIT: ${this.merchant.nit}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Cotizado por: ${o.user.name} ${o.user.lastname}`,fontSize:12,fontFeatures:["c2sc","smcp"]}],[{text:`Moneda: ${this.merchant.currency[0].iso}`,fontSize:12,fontFeatures:["c2sc","smcp"]}]]},layout:"noBorders"},{table:{body:[[{text:o.customer.name,fontSize:18,alignment:"right",bold:!0,fontFeatures:["c2sc","smcp"]}],[{text:`${o.customer.address}, municipio ${o.customer.city}, provincia ${o.customer.state}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}],[{text:`NIT: ${o.customer.nit}`,fontSize:12,alignment:"right",fontFeatures:["c2sc","smcp"]}]]},layout:"noBorders"}]]},layout:"noBorders"},{table:{headerRows:1,widths:[30,"*",60,60,60,60],body:[[{text:"Item",style:"table_header"},{text:"Producto",style:"table_header",alignment:"left"},{text:"Unidad",style:"table_header"},{text:"Cantidad",style:"table_header"},{text:"Precio",style:"table_header"},{text:"Total",style:"table_header"}],...o.products.map(r=>[{text:o.products.indexOf(r)+1,alignment:"center",style:"table_body"},{text:r.name,style:"table_body"},{text:r.uom,alignment:"center",style:"table_body"},{text:r.quantity,alignment:"center",style:"table_body"},{text:r.price.toFixed(2),alignment:"center",style:"table_body"},{text:(r.quantity*r.price).toFixed(2),alignment:"center",style:"table_body"}]),[{rowSpan:3,colSpan:4,text:""},"","","",{text:"Subtotal",style:"totals_name"},{text:o.total.toFixed(2),style:"totals_value"}],[{colSpan:4,text:""},"","","",{text:"Descuento",style:"totals_name"},{text:Number(0).toFixed(2),style:"totals_value"}],[{colSpan:4,text:""},"","","",{text:"Total",style:"totals_name"},{text:o.total.toFixed(2),style:"totals_value"}]]},layout:{hLineWidth:(r,l)=>.7,vLineWidth:(r,l)=>.7},marginTop:20}],footer:(r,l)=>({table:{widths:["*","*"],body:[[{text:`Oferta: ${o.no} generada para ${o.customer.name}`,bold:!0,fontSize:8},{text:`P\xe1gina ${r.toString()}/${l} - Fecha de impresi\xf3n ${J().format("DD/MM/yyyy HH:mm:ss")}`,bold:!0,fontSize:8,alignment:"right"}]]},margin:[30,0,30,0],layout:"noBorders",italics:!0}),defaultStyle:{fontSize:12},styles:{header:{fontSize:18,bold:!0,marginBottom:5,alignment:"center",fontFeatures:["c2sc","smcp"]},table_header:{fontSize:11,bold:!0,alignment:"center",fontFeatures:["c2sc","smcp"],fillColor:"#eeeeee"},table_body:{fontSize:10},totals_name:{bold:!0,fillColor:"#eeeeee",alignment:"right",fontFeatures:["c2sc","smcp"]},totals_value:{alignment:"center",fontFeatures:["c2sc","smcp"]}},pageOrientation:"portrait",pageSize:"LETTER",watermark:{text:this.merchant.name,color:"#fff",opacity:.07,angle:-35,bold:!0,italics:!1},info:{title:`Oferta: ${o.no}`,author:`${this.user.name} ${this.user.lastname}`,creationDate:J().toDate(),modDate:J().toDate(),producer:this.merchant.name}};switch(t){case t="download":S.createPdf(i).download();break;case t="open":S.createPdf(i).open();break;case t="print":S.createPdf(i).print()}}trackByFn(t,o){return t||o.id}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(xe),e.Y36(e.sBO),e.Y36(q.R),e.Y36(Z.ux),e.Y36(v.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sales-offers"]],viewQuery:function(t,o){if(1&t&&(e.Gf(O.NW,5),e.Gf(A.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(o._paginator=i.first),e.iGM(i=e.CRH())&&(o._sort=i.first)}},decls:33,vars:12,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","gap-2","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,""],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"routerLink"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noOffers",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","offers-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[1,"hiddem","sm:block",3,"mat-sort-header"],[1,"hiddem","sm:block"],[1,"text-center","hiddem","sm:block"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","offers-grid","md:px-8"],[1,"font-mono","hiddem","sm:block"],[1,"flex","flex-row","justify-center","gap-2"],["mat-stroked-button","","matTooltip","Ver oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","matTooltip","Imprimir oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Descargar oferta",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Ofertas"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Ofertas "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e._UZ(22,"div",14),e.TgZ(23,"button",15),e._UZ(24,"mat-icon",16),e.TgZ(25,"span",17),e._uU(26,"Crear oferta"),e.qZA()()()(),e.TgZ(27,"div",18)(28,"div",19),e.YNc(29,Ut,2,2,"ng-container",20),e.ALo(30,"async"),e.YNc(31,qt,2,0,"ng-template",null,21,e.W1O),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",o.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(2),e.Q6J("routerLink",e.DdM(11,Ot)),e.xp6(1),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.Q6J("ngIf",e.lcZ(30,9,o.offers$)))},dependencies:[C.rH,C.yS,p.mk,p.sg,p.O5,s.Fj,s.JJ,s.oH,P.lW,N.Hw,g.KE,g.qo,U.Nt,O.NW,A.YE,A.nU,he.gM,p.Ov,p.JJ],encapsulation:2,changeDetection:0}),n})();const be=n=>n.terminals,$=((0,v.P1)(be,n=>n.terminal),(0,v.P1)(be,n=>n.terminals));var Qt=c(89116),Nt=c(23425),Dt=c(8035),Q=c(57838);const $t=f.Ps`
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
`,Mt=f.Ps`
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
`,Rt=f.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateTerminalStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`,Et=f.Ps`
    mutation RemoveTerminal($removeTerminalId: String!) {
        removeTerminal(id: $removeTerminalId) {
            ok
            message
        }
    }
`,Lt=f.Ps`
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
`,zt=f.Ps`
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
`;let le=(()=>{class n{constructor(t,o,i){this.apolloProvider=t,this._snackBar=o,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createTerminal(t){return this.store.select($).pipe((0,F.q)(1),(0,y.w)(o=>this._apollo.mutate({mutation:$t,variables:{createTerminalInput:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:i,data:r})=>{if(i){let m="";i.forEach(u=>m+=`\n ${u.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=(0,w.Z)(o);l.push(r.createTerminal.terminal),this.store.dispatch((0,Q.Pl)({terminals:l}))}))))}getTerminals(t=1,o=20,i="code",r="asc",l=""){return this._apollo.query({query:Lt,errorPolicy:"all",variables:{offset:o*(t-1),limit:o,sort:i,order:r,search:l}}).pipe((0,x.b)(({errors:m,data:u})=>{if(m){let _="";m.forEach(M=>_+=`\n ${M.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:_,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,Q.Pl)({terminals:u.findAllTerminals.terminals})),this.store.dispatch((0,re.Jr)({pagination:u.findAllTerminals.pagination}))}))}getTerminalById(t){return this._apollo.query({query:zt,variables:{findTerminalByIdId:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:o,data:i})=>{if(o){let r="";o.forEach(l=>r+=`\n ${l.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,Q.mz)({terminal:i.findTerminalById.terminal}))}))}updateTerminal(t){return this.store.select($).pipe((0,F.q)(1),(0,y.w)(o=>this._apollo.mutate({mutation:Mt,variables:{updateTerminalInput:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:i,data:r})=>{if(i){let u="";i.forEach(_=>u+=`\n ${_.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:u,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const l=(0,w.Z)(o);l[o.findIndex(u=>u.id===t.id)]=r.updateTerminal.terminal,this.store.dispatch((0,Q.Pl)({terminals:l}))}))))}updateTerminalStatus(t){return this.store.select($).pipe((0,F.q)(1),(0,y.w)(o=>this._apollo.mutate({mutation:Rt,variables:{updateEntityStatusInput:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:i})=>{if(i){let m="";i.forEach(u=>m+=`\n ${u.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,w.Z)(o);r[o.findIndex(m=>m.id===t.id)].active=t.active,this.store.dispatch((0,Q.Pl)({terminals:r}))}))))}removeTerminal(t){return this.store.select($).pipe((0,F.q)(1),(0,y.w)(o=>this._apollo.mutate({mutation:Et,variables:{removeTerminalId:t},errorPolicy:"all"}).pipe((0,x.b)(({errors:i})=>{if(i){let m="";i.forEach(u=>m+=`\n ${u.message}.`),this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,w.Z)(o),l=o.findIndex(m=>m.id===t);r.splice(l,1),this.store.dispatch((0,Q.Pl)({terminals:r}))}))))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f._M),e.LFG(Z.ux),e.LFG(v.yh))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Yt=c(36538),Gt=c(68922);function jt(n,a){1&n&&(e.TgZ(0,"h2",6),e._uU(1," Agregar Terminal "),e.qZA())}function Ht(n,a){1&n&&(e.TgZ(0,"h2",6),e._uU(1," Editar Terminal "),e.qZA())}function Kt(n,a){if(1&n&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function Wt(n,a){if(1&n&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.fullname," ")}}function Vt(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"form",9)(3,"mat-form-field",10)(4,"mat-label"),e._uU(5,"Marca"),e.qZA(),e.TgZ(6,"mat-select",11),e.YNc(7,Kt,2,2,"mat-option",12),e.TgZ(8,"mat-option",13),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createBrand())}),e._uU(9," Agregar marca "),e.qZA()()(),e.TgZ(10,"mat-form-field",10)(11,"mat-label"),e._uU(12,"Modelo"),e.qZA(),e._UZ(13,"input",14),e.qZA(),e.TgZ(14,"mat-form-field",10)(15,"mat-label"),e._uU(16,"N\xfamero de serie"),e.qZA(),e._UZ(17,"input",14),e.qZA(),e.TgZ(18,"mat-form-field",10)(19,"mat-label"),e._uU(20,"Asignar a:"),e.qZA(),e.TgZ(21,"mat-select",11),e.YNc(22,Wt,2,2,"mat-option",12),e.qZA()(),e.TgZ(23,"mat-form-field",10)(24,"mat-label"),e._uU(25,"PIN"),e.qZA(),e._UZ(26,"input",15),e.TgZ(27,"mat-hint"),e._uU(28,"Solo 4 d\xedgitos"),e.qZA()()()()()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("formGroup",t.terminalForm)("autocomplete","off"),e.xp6(4),e.Q6J("formControlName","brandId")("required",!0),e.xp6(1),e.Q6J("ngForOf",t.brands),e.xp6(6),e.Q6J("formControlName","model")("placeholder","Modelo del terminal"),e.xp6(4),e.Q6J("formControlName","sn")("placeholder","Serie del terminal"),e.xp6(4),e.Q6J("formControlName","employeeId")("required",!0),e.xp6(1),e.Q6J("ngForOf",t.employees),e.xp6(4),e.Q6J("formControlName","pin")("placeholder","0000")}}function Xt(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.updateTerminal())}),e._uU(2," Actualizar "),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("color","primary")("disabled",t.terminalForm.invalid)("matDialogClose","confirmed")}}function eo(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.createTerminal())}),e._uU(2," Agregar "),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("color","primary")("disabled",t.terminalForm.invalid)("matDialogClose","confirmed")}}function to(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"div",17),e.ynx(2),e.TgZ(3,"button",18),e._uU(4," Cancelar "),e.qZA(),e.BQk(),e.YNc(5,Xt,3,3,"ng-container",5),e.YNc(6,eo,3,3,"ng-container",5),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("matDialogClose","cancelled"),e.xp6(2),e.Q6J("ngIf","edit"===t.data.dialogMode),e.xp6(1),e.Q6J("ngIf","add"===t.data.dialogMode)}}let oo=(()=>{class n{constructor(t,o,i,r,l,m,u){this.data=t,this._changeDetectorRef=o,this._dialog=i,this._dialogRef=r,this._formBuilder=l,this._snackBar=m,this.store=u,this.dialogMode="view",this.imageChangedEvent="",this.croppedImage="",this._unsubscribeAll=new B.x,this._terminalsService=(0,e.f3M)(le),this._fuseConfirmationService=(0,e.f3M)(q.R),this.dialogMode=t.dialogMode,this.terminal=t.terminal}ngOnInit(){this.terminalForm=this._formBuilder.group({id:new s.NI(null),employeeId:new s.NI(null,[s.kI.required,s.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),brandId:new s.NI(null,[s.kI.pattern(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)]),model:new s.NI(null,[s.kI.minLength(1),s.kI.maxLength(255)]),sn:new s.NI(null,[s.kI.minLength(1),s.kI.maxLength(255)]),pin:new s.NI(null,[s.kI.required,s.kI.minLength(4),s.kI.maxLength(4)])}),"edit"===this.dialogMode&&this.terminalForm.patchValue(this.terminal),this.store.select(Nt.gg).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.brands=t,this._changeDetectorRef.markForCheck()}),this.store.select(Dt.ri).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.employees=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createTerminal(){let t=this.terminalForm.getRawValue();t=(0,Qt.Z)(t,["id"]),this._fuseConfirmationService.open({title:"Crear Terminal",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._terminalsService.createTerminal(t).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:r})=>{this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.createTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}})}),this._changeDetectorRef.markForCheck()})}updateTerminal(){const t=this.terminalForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar Terminal",message:"\xbfEsta seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"mat_solid:question_mark",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._terminalsService.updateTerminal(t).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:r})=>{this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.updateTerminal.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})})}createBrand(){this._dialog.open(Gt.C,{data:{brand:new Yt.H,dialogMode:"add"},panelClass:"ath-dialog-panel",disableClose:!0})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(k.WI),e.Y36(e.sBO),e.Y36(k.uw),e.Y36(k.so),e.Y36(s.qu),e.Y36(Z.ux),e.Y36(v.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sales-terminal-dialog"]],decls:9,vars:4,consts:[[1,"relative","flex","flex-col","w-full","max-h-screenl"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["class","text-2xl text-gray-400",4,"ngIf"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],["class","w-full overflow-hidden",4,"ngIf"],[4,"ngIf"],[1,"text-2xl","text-gray-400"],[1,"w-full","overflow-hidden"],[1,"flex","flex-col"],[1,"flex","flex-col","w-full","mt-1",3,"formGroup","autocomplete"],[1,"w-full","fuse-mat-dense"],[3,"formControlName","required"],[3,"value",4,"ngFor","ngForOf"],[3,"click"],["matInput","","type","text","maxlength","250",3,"formControlName","placeholder"],["matInput","","type","number","minlength","4","max","9999","required","",3,"formControlName","placeholder"],[3,"value"],[1,"flex","items-center","justify-center","px-6","py-4","space-x-3","sm:justify-between","bg-gray-50","dark:bg-black","dark:bg-opacity-10"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","disabled","matDialogClose","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.ynx(1),e.TgZ(2,"div",1),e.YNc(3,jt,2,0,"h2",2),e.YNc(4,Ht,2,0,"h2",2),e.qZA(),e.BQk(),e.TgZ(5,"div",3),e.ynx(6),e.YNc(7,Vt,29,14,"div",4),e.BQk(),e.qZA(),e.YNc(8,to,7,3,"ng-container",5),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf","add"===o.data.dialogMode),e.xp6(1),e.Q6J("ngIf","edit"===o.data.dialogMode),e.xp6(3),e.Q6J("ngIf","edit"===o.data.dialogMode||"add"),e.xp6(1),e.Q6J("ngIf","view"!==o.data.dialogMode))},dependencies:[p.sg,p.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.Q7,s.wO,s.nD,s.Fd,s.sg,s.u,H.ey,P.lW,k.ZT,g.KE,g.bx,g.hX,U.Nt,K.gD],encapsulation:2}),n})();class no{}var io=c(20773),ro=c(32368);function ao(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-slide-toggle",33),e.NdJ("change",function(i){e.CHM(t);const r=e.oxw(),l=r.$implicit,m=r.index,u=e.oxw(4);return e.KtG(u.updateTerminalStatus(i,l,m))}),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("checked",t.active)("color","primary")}}function so(n,a){1&n&&(e.ynx(0),e._UZ(1,"mat-spinner",34),e.BQk()),2&n&&(e.xp6(1),e.Q6J("diameter",20)("color","primary"))}function lo(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",28)(2,"div",29),e._uU(3),e.qZA(),e.TgZ(4,"div",29),e._uU(5),e.qZA(),e.TgZ(6,"div",29),e._uU(7),e.qZA(),e.TgZ(8,"div",29),e._uU(9),e.qZA(),e.TgZ(10,"div",29),e._uU(11),e.qZA(),e.TgZ(12,"div",30),e.YNc(13,ao,2,2,"ng-container",19),e.YNc(14,so,2,2,"ng-container",19),e.qZA(),e.TgZ(15,"div")(16,"button",31),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw(4);return e.KtG(l.updateTerminal(r))}),e._UZ(17,"mat-icon",32),e.qZA()()(),e.BQk()}if(2&n){const t=a.$implicit,o=a.index,i=e.oxw(4);e.xp6(3),e.hij(" ",t.no," "),e.xp6(2),e.hij(" ",t.employee.fullname," "),e.xp6(2),e.hij(" ",t.brand.name," "),e.xp6(2),e.hij(" ",t.model," "),e.xp6(2),e.hij(" ",t.sn," "),e.xp6(2),e.Q6J("ngIf",!(i.isSlideLoading&&i.selectedSlide===o)),e.xp6(1),e.Q6J("ngIf",i.isSlideLoading&&i.selectedSlide===o),e.xp6(3),e.Q6J("svgIcon","mat_solid:edit")}}function co(n,a){if(1&n&&(e.ynx(0),e.YNc(1,lo,18,8,"ng-container",27),e.BQk()),2&n){const t=a.ngIf,o=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",o.trackByFn)}}const mo=function(n){return{"pointer-events-none":n}},uo=function(){return[5,10,25,100]};function po(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"div",22)(2,"div",23)(3,"div",24),e._uU(4,"No."),e.qZA(),e.TgZ(5,"div",25),e._uU(6," Asignado a "),e.qZA(),e.TgZ(7,"div",25),e._uU(8," Marca "),e.qZA(),e.TgZ(9,"div",25),e._uU(10," Modelo "),e.qZA(),e.TgZ(11,"div",25),e._uU(12," N\xfamero de serie "),e.qZA(),e.TgZ(13,"div",25),e._uU(14,"Detalles"),e.qZA()(),e.YNc(15,co,2,2,"ng-container",19),e.ALo(16,"async"),e.qZA(),e._UZ(17,"mat-paginator",26),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("mat-sort-header","no"),e.xp6(12),e.Q6J("ngIf",e.lcZ(16,8,t.terminals$)),e.xp6(2),e.Q6J("ngClass",e.VKq(10,mo,t.isLoading))("length",t.pagination.length)("page",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(12,uo))("showFirstLastButtons",!0)}}function fo(n,a){if(1&n&&(e.ynx(0),e.YNc(1,po,18,13,"ng-container",21),e.BQk()),2&n){const t=a.ngIf;e.oxw();const o=e.MAs(31);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",o)}}function go(n,a){1&n&&(e.TgZ(0,"div",35),e._uU(1,"\xa1No se ha creado ninguna terminal!"),e.qZA())}S.vfs=ee.I.vfs;let ho=(()=>{class n{constructor(t,o,i,r){this._changeDetectorRef=t,this._dialog=o,this._snackBar=i,this.store=r,this.flashMessage=null,this.terminals$=(0,W.of)([]),this.terminals=[],this.merchantInputControl=new s.NI,this.isLoading=!1,this.searchInputControl=new s.NI,this.user=null,this.merchant=null,this.selectedSlide=null,this.isSlideLoading=!1,this._unsubscribeAll=new B.x,this._terminalsService=(0,e.f3M)(le),this._fuseConfirmationService=(0,e.f3M)(q.R)}ngOnInit(){this.store.select(ne.rk).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.store.select(ie.Qs).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.merchant=t,this._changeDetectorRef.markForCheck()}),this.terminals$=this.store.select($),this.terminals$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.terminals=t,this._changeDetectorRef.markForCheck()}),this.store.select(oe.B).pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,d.R)(this._unsubscribeAll),(0,X.b)(300),(0,y.w)(t=>(this.isLoading=!0,this._terminalsService.getTerminals(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,t))),(0,b.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"no",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,d.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,V.T)(this._sort.sortChange,this._paginator.page).pipe((0,y.w)(()=>(this.isLoading=!0,this._terminalsService.getTerminals(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,b.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createTerminal(){this._openDialog(new no,"add")}updateTerminal(t){this._openDialog(t,"edit")}updateTerminalStatus(t,o,i){this.isSlideLoading=!0,this.selectedSlide=i,this._terminalsService.updateTerminalStatus({id:o.id,active:t.checked}).subscribe(({data:r})=>{this._snackBar.openFromComponent(h.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:r.updateTerminalStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}trackByFn(t,o){return t||o.id}_openDialog(t,o){this._dialog.open(oo,{data:{terminal:t,dialogMode:o},panelClass:"ath-dialog-panel",disableClose:!0})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(k.uw),e.Y36(Z.ux),e.Y36(v.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sales-terminals"]],viewQuery:function(t,o){if(1&t&&(e.Gf(O.NW,5),e.Gf(A.YE,5)),2&t){let i;e.iGM(i=e.CRH())&&(o._paginator=i.first),e.iGM(i=e.CRH())&&(o._sort=i.first)}},decls:32,vars:10,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/dashboard",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4","gap-2"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-raised-button","",1,"text-white","bg-gradient-to-r","from-primary-500","to-primary-700",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noTerminals",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","terminals-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-slate-900"],[3,"mat-sort-header"],[1,""],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","terminals-grid","md:px-8"],[1,"truncate"],[1,"hidden","lg:block"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon"],[3,"checked","color","change"],[3,"diameter","color"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Ventas"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14,"Terminales"),e.qZA()()(),e.TgZ(15,"div",8)(16,"h2",9),e._uU(17," Terminales "),e.qZA()()(),e.TgZ(18,"div",10)(19,"mat-form-field",11),e._UZ(20,"mat-icon",12)(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e.NdJ("click",function(){return o.createTerminal()}),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Agregar"),e.qZA()()()(),e.TgZ(26,"div",17)(27,"div",18),e.YNc(28,fo,2,2,"ng-container",19),e.ALo(29,"async"),e.YNc(30,go,2,0,"ng-template",null,20,e.W1O),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(4),e.Q6J("svgIcon","mat_solid:chevron_right"),e.xp6(8),e.Q6J("svgIcon","mat_solid:search"),e.xp6(1),e.Q6J("formControl",o.searchInputControl)("autocomplete","off")("placeholder","Escriba para filtrar..."),e.xp6(2),e.Q6J("svgIcon","mat_solid:add"),e.xp6(5),e.Q6J("ngIf",e.lcZ(29,8,o.terminals$)))},dependencies:[C.yS,p.mk,p.sg,p.O5,s.Fj,s.JJ,s.oH,P.lW,N.Hw,g.KE,g.qo,U.Nt,O.NW,io.Ou,ro.Rr,A.YE,A.nU,p.Ov],encapsulation:2,changeDetection:0}),n})(),_o=(()=>{class n{constructor(t){this._billsService=t}resolve(t,o){return this._billsService.getBills()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(ge))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var ve=c(90810),xo=c(31278),bo=c(23077),ye=c(95259),Te=c(1520);let vo=(()=>{class n{constructor(t){this._offersService=t}resolve(t,o){return this._offersService.getOffers()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(xe))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Ce=c(14232),yo=c(4024),To=c(84271);const Zo=[{path:"",component:j,children:[{path:"bid",component:Ft,resolve:{currencies:ve.Y,customers:Ce.M_,multipliers:Te.K,products:ye.am}},{path:"billing",component:Ke,resolve:{currencies:ve.Y,customers:Ce.M_,multipliers:Te.K,operationTypes:xo.Z,paymentMethods:bo.p,products:ye.am}},{path:"bills",component:lt,resolve:{bills:_o}},{path:"offers",component:Jt,resolve:{offers:vo}},{path:"terminals",component:ho,resolve:{brands:yo.J,employees:To.Q,terminals:(()=>{class n{constructor(t){this._terminalService=t}resolve(t,o){return this._terminalService.getTerminals()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(le))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]}];let Io=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[G.QG,C.Bz.forChild(Zo),E.m]}),n})()}}]);