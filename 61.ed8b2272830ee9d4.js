"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[61],{4024:(B,v,t)=>{t.d(v,{J:()=>m});var l=t(5e3),c=t(40462);let m=(()=>{class n{constructor(u){this._brandsService=u}resolve(u,y){return this._brandsService.getBrands()}}return n.\u0275fac=function(u){return new(u||n)(l.LFG(c.G))},n.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},23425:(B,v,t)=>{t.d(v,{gg:()=>n});var l=t(85094);const c=a=>a.brands,n=((0,l.P1)(c,a=>a.brand),(0,l.P1)(c,a=>a.brands))},40462:(B,v,t)=>{t.d(v,{G:()=>U});var l=t(40520),c=t(18505),m=t(94813),n=t(95698),a=t(63900),u=t(54004),y=t(75714),P=t(92340),E=t(67505),O=t(23425),D=t(5e3),S=t(85094);const C=P.N.API_URL;let U=(()=>{class f{constructor(g,M){this._httpClient=g,this.store=M}getBrands(g=1,M=10,_="name",I="asc",$=""){const s=(new l.LE).append("offset",M*(g-1)).append("limit",M).append("sort",_).append("order",I).append("search",$);return this._httpClient.get(`${C}/brands/`,{params:s}).pipe((0,c.b)(({pagination:d,brands:e})=>{this.store.dispatch((0,y.Jr)({pagination:d})),this.store.dispatch((0,E.dk)({brands:e}))}))}getBrandById(g){return this._httpClient.get(`${C}/brands/${g}`).pipe((0,m.j)("brand"),(0,c.b)(M=>{this.store.dispatch((0,E.HB)({brand:M}))}))}createBrand(g){return this.store.select(O.gg).pipe((0,n.q)(1),(0,a.w)(M=>this._httpClient.post(`${C}/brands/`,g).pipe((0,c.b)(_=>{this.store.dispatch((0,E.dk)({brands:[_.brand,...M]}))}))))}updateBrand(g){return this.store.select(O.gg).pipe((0,n.q)(1),(0,a.w)(M=>this._httpClient.patch(`${C}/brands/${g.id}`,g).pipe((0,u.U)(_=>{const I=[...M];return I[M.findIndex(s=>s.id===g.id)]=_.brand,this.store.dispatch((0,E.dk)({brands:I})),_}))))}deleteBrand(g){return this.store.select(O.gg).pipe((0,n.q)(1),(0,a.w)(M=>this._httpClient.delete(`${C}/brands/${g}`).pipe((0,u.U)(_=>{const I=M.findIndex(s=>s.id===g),$=[...M];return $.splice(I,1),this.store.dispatch((0,E.dk)({brands:$})),_}))))}}return f.\u0275fac=function(g){return new(g||f)(D.LFG(l.eN),D.LFG(S.yh))},f.\u0275prov=D.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},1520:(B,v,t)=>{t.d(v,{K:()=>m});var l=t(5e3),c=t(15978);let m=(()=>{class n{constructor(u){this._multipliersService=u}resolve(u,y){return this._multipliersService.getMultipliers()}}return n.\u0275fac=function(u){return new(u||n)(l.LFG(c.e))},n.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},6062:(B,v,t)=>{t.d(v,{Af:()=>n});var l=t(85094);const c=a=>a.multipliers,n=((0,l.P1)(c,a=>a.multiplier),(0,l.P1)(c,a=>a.multipliers))},15978:(B,v,t)=>{t.d(v,{e:()=>_});var l=t(95698),c=t(63900),m=t(18505),n=t(17489),a=t(25863),u=t(75714),y=t(6062),P=t(33921);const E=P.Ps`
    mutation CreateMultiplier($createMultiplierInput: CreateMultiplierInput!) {
        createMultiplier(createMultiplierInput: $createMultiplierInput) {

            ok
            message

            multiplier {
                id
                active
                value
            }

        }
    }
`,O=P.Ps`
    mutation UpdateMultiplier($updateMultiplierInput: UpdateMultiplierInput!) {
        updateMultiplier(updateMultiplierInput: $updateMultiplierInput) {
            ok
            message

            multiplier {
                id
                active
                value
            }
        }
    }
`,D=P.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateMultiplierStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,S=P.Ps`
    mutation RemoveMultiplier($removeMultiplierId: String!) {
        removeMultiplier(id: $removeMultiplierId) {
            ok
            message
        }
    }
`,C=P.Ps`
    query FindAllMultipliers($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllMultipliers(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            multipliers {
                id
                active
                value
            }
        }
    }
`,U=P.Ps`
    query FindMultiplierById($findMultiplierByIdId: String!) {
        findMultiplierById(id: $findMultiplierByIdId) {
            ok
            message

            multiplier {
                id
                active
                value
            }
        }
    }
`;var f=t(59784),A=t(5e3),g=t(57261),M=t(85094);let _=(()=>{class I{constructor(s,d,e){this.apolloProvider=s,this._snackBar=d,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createMultiplier(s){return this.store.select(y.Af).pipe((0,l.q)(1),(0,c.w)(d=>this._apollo.mutate({mutation:E,variables:{createMultiplierInput:s},errorPolicy:"all"}).pipe((0,m.b)(({errors:e,data:r})=>{if(e){let o="";e.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,n.cloneDeep)(d);i.push(r.createMultiplier.multiplier),this.store.dispatch((0,a.hd)({multipliers:i}))}))))}getMultipliers(s=1,d=20,e="code",r="asc",i=""){return this._apollo.query({query:C,errorPolicy:"all",variables:{offset:d*(s-1),limit:d,sort:e,order:r,search:i}}).pipe((0,m.b)(({errors:o,data:p})=>{if(o){let h="";o.forEach(T=>h+=`\n ${T.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,u.Jr)({pagination:p.findAllMultipliers.pagination})),this.store.dispatch((0,a.hd)({multipliers:p.findAllMultipliers.multipliers}))}))}getMultiplierById(s){return this._apollo.query({query:U,variables:{findMultiplierByIdId:s},errorPolicy:"all"}).pipe((0,m.b)(({errors:d,data:e})=>{if(d){let r="";d.forEach(i=>r+=`\n ${i.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,a.Yq)({multiplier:e.findMultiplierById.multiplier}))}))}updateMultiplier(s){return this.store.select(y.Af).pipe((0,l.q)(1),(0,c.w)(d=>this._apollo.mutate({mutation:O,variables:{updateMultiplierInput:s},errorPolicy:"all"}).pipe((0,m.b)(({errors:e,data:r})=>{if(e){let p="";e.forEach(h=>p+=`\n ${h.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,n.cloneDeep)(d);i[d.findIndex(p=>p.id===s.id)]=r.updateMultiplier.multiplier,this.store.dispatch((0,a.hd)({multipliers:i}))}))))}updateMultiplierStatus(s){return this.store.select(y.Af).pipe((0,l.q)(1),(0,c.w)(d=>this._apollo.mutate({mutation:D,variables:{updateEntityStatusInput:s},errorPolicy:"all"}).pipe((0,m.b)(({errors:e})=>{if(e){let o="";e.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,n.cloneDeep)(d);r[d.findIndex(o=>o.id===s.id)].active=s.active,this.store.dispatch((0,a.hd)({multipliers:r}))}))))}removeMultiplier(s){return this.store.select(y.Af).pipe((0,l.q)(1),(0,c.w)(d=>this._apollo.mutate({mutation:S,variables:{removeMultiplierId:s},errorPolicy:"all"}).pipe((0,m.b)(({errors:e})=>{if(e){let o="";e.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(f.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,n.cloneDeep)(d),i=d.findIndex(o=>o.id===s);r.splice(i,1),this.store.dispatch((0,a.hd)({multipliers:r}))}))))}}return I.\u0275fac=function(s){return new(s||I)(A.LFG(P._M),A.LFG(g.ux),A.LFG(M.yh))},I.\u0275prov=A.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"}),I})()},31278:(B,v,t)=>{t.d(v,{Z:()=>m});var l=t(5e3),c=t(63001);let m=(()=>{class n{constructor(u){this._operationTypesService=u}resolve(u,y){return this._operationTypesService.getOperationTypes()}}return n.\u0275fac=function(u){return new(u||n)(l.LFG(c.X))},n.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},87136:(B,v,t)=>{t.d(v,{pU:()=>n});var l=t(85094);const c=a=>a.operationTypes,n=((0,l.P1)(c,a=>a.operationType),(0,l.P1)(c,a=>a.operationTypes))},63001:(B,v,t)=>{t.d(v,{X:()=>_});var l=t(95698),c=t(63900),m=t(18505),n=t(45840),a=t(75714),u=t(9683),y=t(87136),P=t(59784),E=t(33921);const O=E.Ps`
   query FindAllOperationTypes($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllOperationTypes(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            operationTypes {
                id
                active
                name
            }
        }
    }
`,D=E.Ps`
    query FindOperationTypeById($findOperationTypeById: String!) {
        findOperationTypeById(id: $findOperationTypeById) {
            ok
            message

            operationType {
                id
                active
                name
            }
        }
    }
`,S=E.Ps`
    mutation CreateOperationType($createOperationTypeInput: CreateOperationTypeInput!) {
        createOperationType(createOperationTypeInput: $createOperationTypeInput) {
            ok
            message

            operationType {
                id
                active
                name
            }
        }
    }
`,C=E.Ps`
    mutation UpdateOperationType($updateOperationTypeInput: UpdateOperationTypeInput!) {
        updateOperationType(updateOperationTypeInput: $updateOperationTypeInput) {
            ok
            message

            operationType {
                id
                active
                name
            }
        }
    }
`,U=E.Ps`
    mutation RemoveOperationType($removeOperationTypeId: String!) {
        removeOperationType(id: $removeOperationTypeId) {
            ok
            message
        }
    }
`,f=E.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateOperationTypeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var A=t(5e3),g=t(57261),M=t(85094);let _=(()=>{class I{constructor(s,d,e){this.apolloProvider=s,this._snackBar=d,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createOperationType(s){return this.store.select(y.pU).pipe((0,l.q)(1),(0,c.w)(d=>this._apollo.mutate({mutation:S,variables:{createOperationTypeInput:s},errorPolicy:"all"}).pipe((0,m.b)(({errors:e,data:r})=>{if(e){let o="";e.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(P.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,n.Z)(d);i.push(r.createOperationType.operationType),this.store.dispatch((0,u.f8)({operationTypes:i}))}))))}getOperationTypes(s=1,d=10,e="name",r="asc",i=""){return this._apollo.query({query:O,errorPolicy:"all",variables:{offset:d*(s-1),limit:d,sort:e,order:r,search:i}}).pipe((0,m.b)(({errors:o,data:p})=>{if(o){let h="";o.forEach(T=>h+=`\n ${T.message}.`),this._snackBar.openFromComponent(P.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,u.f8)({operationTypes:p.findAllOperationTypes.operationTypes})),this.store.dispatch((0,a.Jr)({pagination:p.findAllOperationTypes.pagination}))}))}getOperationTypeById(s){return this._apollo.query({query:D,variables:{findOperationTypeByIdId:s},errorPolicy:"all"}).pipe((0,m.b)(({errors:d,data:e})=>{if(d){let r="";d.forEach(i=>r+=`\n ${i.message}.`),this._snackBar.openFromComponent(P.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:r,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,u.Ll)({operationType:e.findOneOperationTypeById.operationType}))}))}updateOperationType(s){return this.store.select(y.pU).pipe((0,l.q)(1),(0,c.w)(d=>this._apollo.mutate({mutation:C,variables:{updateOperationTypeInput:s},errorPolicy:"all"}).pipe((0,m.b)(({errors:e,data:r})=>{if(e){let p="";e.forEach(h=>p+=`\n ${h.message}.`),this._snackBar.openFromComponent(P.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:p,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,n.Z)(d);i[d.findIndex(p=>p.id===s.id)]=r.updateOperationType.operationType,this.store.dispatch((0,u.f8)({operationTypes:i}))}))))}updateOperationTypeStatus(s){return this.store.select(y.pU).pipe((0,l.q)(1),(0,c.w)(d=>this._apollo.mutate({mutation:f,variables:{updateEntityStatusInput:s},errorPolicy:"all"}).pipe((0,m.b)(({errors:e})=>{if(e){let o="";e.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(P.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,n.Z)(d);r[d.findIndex(o=>o.id===s.id)].active=s.active,this.store.dispatch((0,u.f8)({operationTypes:r}))}))))}removeOperationType(s){return this.store.select(y.pU).pipe((0,l.q)(1),(0,c.w)(d=>this._apollo.mutate({mutation:U,variables:{removeOperationTypeId:s},errorPolicy:"all"}).pipe((0,m.b)(({errors:e})=>{if(e){let o="";e.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(P.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const r=(0,n.Z)(d),i=d.findIndex(o=>o.id===s);r.splice(i,1),this.store.dispatch((0,u.f8)({operationTypes:r}))}))))}}return I.\u0275fac=function(s){return new(s||I)(A.LFG(E._M),A.LFG(g.ux),A.LFG(M.yh))},I.\u0275prov=A.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"}),I})()},23077:(B,v,t)=>{t.d(v,{p:()=>m});var l=t(5e3),c=t(7903);let m=(()=>{class a{constructor(y){this._paymentMethodsService=y}resolve(y,P){return this._paymentMethodsService.getPaymentMethods()}}return a.\u0275fac=function(y){return new(y||a)(l.LFG(c.o))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},96008:(B,v,t)=>{t.d(v,{VS:()=>n});var l=t(85094);const c=a=>a.paymentMethods,n=((0,l.P1)(c,a=>a.paymentMethod),(0,l.P1)(c,a=>a.paymentMethods))},7903:(B,v,t)=>{t.d(v,{o:()=>$});var l=t(95698),c=t(63900),m=t(18505),n=t(54004),a=t(45840),u=t(75714),y=t(55936),P=t(96008),E=t(59784),O=t(33921);const D=O.Ps`
    query FindAllPaymentMethods($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllPaymentMethods(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            paymentMethods {
                id
                active
                name
                useGateway
            }
        }
    }
`,S=O.Ps`
    query FindPaymentMethodById($findPaymentMethodById: String!) {
        findPaymentMethodById(id: $findPaymentMethodById) {
            ok
            message

            paymentMethod {
                id
                active
                name
                useGateway
            }
        }
    }
`,C=O.Ps`
    query FindAllActivePaymentMethods {
        findAllActivePaymentMethods {
            id
            active
            name
            useGateway
        }
    }
`,U=O.Ps`
    mutation CreatePaymentMethod($createPaymentMethodInput: CreatePaymentMethodInput!) {
        createPaymentMethod(createPaymentMethodInput: $createPaymentMethodInput) {
            ok
            message

            paymentMethod {
                id
                active
                name
                useGateway
            }
        }
    }
`,f=O.Ps`
    mutation UpdatePaymentMethod($updatePaymentMethodInput: UpdatePaymentMethodInput!) {
        updatePaymentMethod(updatePaymentMethodInput: $updatePaymentMethodInput) {
            ok
            message

            paymentMethod {
                id
                active
                name
                useGateway
            }
        }
    }
`,A=O.Ps`
    mutation RemovePaymentMethod($removePaymentMethodId: String!) {
        removePaymentMethod(id: $removePaymentMethodId) {
            ok
            message
        }
    }
`,g=O.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updatePaymentMethodStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`;var M=t(5e3),_=t(57261),I=t(85094);let $=(()=>{class s{constructor(e,r,i){this.apolloProvider=e,this._snackBar=r,this.store=i,this._apollo=this.apolloProvider.use("BALANC")}createPaymentMethod(e){return this.store.select(P.VS).pipe((0,l.q)(1),(0,c.w)(r=>this._apollo.mutate({mutation:U,variables:{createPaymentMethodInput:e},errorPolicy:"all"}).pipe((0,m.b)(({errors:i,data:o})=>{if(i){let h="";i.forEach(T=>h+=`\n ${T.message}.`),this._snackBar.openFromComponent(E.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const p=(0,a.Z)(r);p.push(o.createPaymentMethod.paymentMethod),this.store.dispatch((0,y.DA)({paymentMethods:p}))}))))}getPaymentMethods(e=1,r=10,i="name",o="asc",p=""){return this._apollo.query({query:D,errorPolicy:"all",variables:{offset:r*(e-1),limit:r,sort:i,order:o,search:p}}).pipe((0,m.b)(({errors:h,data:T})=>{if(h){let R="";h.forEach(L=>R+=`\n ${L.message}.`),this._snackBar.openFromComponent(E.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:R,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,y.DA)({paymentMethods:T.findAllPaymentMethods.paymentMethods})),this.store.dispatch((0,u.Jr)({pagination:T.findAllPaymentMethods.pagination}))}))}findAllActivePaymentMethods(){return this._apollo.query({query:C,errorPolicy:"all"}).pipe((0,n.U)(({data:e})=>e?e.findAllActivePaymentMethods:null),(0,m.b)(e=>{e&&this.store.dispatch((0,y.DA)({paymentMethods:e}))}))}getPaymentMethodById(e){return this._apollo.query({query:S,variables:{findPaymentMethodByIdId:e},errorPolicy:"all"}).pipe((0,m.b)(({errors:r,data:i})=>{if(r){let o="";r.forEach(p=>o+=`\n ${p.message}.`),this._snackBar.openFromComponent(E.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:o,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,y.$P)({paymentMethod:i.findPaymentMethodById.paymentMethod}))}))}updatePaymentMethod(e){return this.store.select(P.VS).pipe((0,l.q)(1),(0,c.w)(r=>this._apollo.mutate({mutation:f,variables:{updatePaymentMethodInput:e},errorPolicy:"all"}).pipe((0,m.b)(({errors:i,data:o})=>{if(i){let T="";i.forEach(R=>T+=`\n ${R.message}.`),this._snackBar.openFromComponent(E.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:T,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const p=(0,a.Z)(r);p[r.findIndex(T=>T.id===e.id)]=o.updatePaymentMethod.paymentMethod,this.store.dispatch((0,y.DA)({paymentMethods:p}))}))))}updatePaymentMethodStatus(e){return this.store.select(P.VS).pipe((0,l.q)(1),(0,c.w)(r=>this._apollo.mutate({mutation:g,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,m.b)(({errors:i})=>{if(i){let h="";i.forEach(T=>h+=`\n ${T.message}.`),this._snackBar.openFromComponent(E.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const o=(0,a.Z)(r);o[r.findIndex(h=>h.id===e.id)].active=e.active,this.store.dispatch((0,y.DA)({paymentMethods:o}))}))))}removePaymentMethod(e){return this.store.select(P.VS).pipe((0,l.q)(1),(0,c.w)(r=>this._apollo.mutate({mutation:A,variables:{removePaymentMethodId:e},errorPolicy:"all"}).pipe((0,m.b)(({errors:i})=>{if(i){let h="";i.forEach(T=>h+=`\n ${T.message}.`),this._snackBar.openFromComponent(E.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const o=(0,a.Z)(r),p=r.findIndex(h=>h.id===e);o.splice(p,1),this.store.dispatch((0,y.DA)({paymentMethods:o}))}))))}}return s.\u0275fac=function(e){return new(e||s)(M.LFG(O._M),M.LFG(_.ux),M.LFG(I.yh))},s.\u0275prov=M.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);