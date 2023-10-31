"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[415],{90088:(I,g,e)=>{e.d(g,{I:()=>u});var c=e(5e3),d=e(14023);let u=(()=>{class l{constructor(m){this._fuelsService=m}resolve(m,f){return this._fuelsService.getFuels()}}return l.\u0275fac=function(m){return new(m||l)(c.LFG(d.f))},l.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},92690:(I,g,e)=>{e.d(g,{zt:()=>l});var c=e(85094);const d=i=>i.fuels,l=((0,c.P1)(d,i=>i.fuel),(0,c.P1)(d,i=>i.fuels))},14023:(I,g,e)=>{e.d(g,{f:()=>A});var c=e(95698),d=e(63900),u=e(18505),l=e(17489),i=e(77686),m=e(75714),f=e(92690),v=e(33921);const S=v.Ps`
    mutation CreateFuel($createFuelInput: CreateFuelInput!) {
        createFuel(createFuelInput: $createFuelInput) {

            ok
            message

            fuel {
                id
                active
                name
                slug
            }

        }
    }
`,F=v.Ps`
    mutation UpdateFuel($updateFuelInput: UpdateFuelInput!) {
        updateFuel(updateFuelInput: $updateFuelInput) {
            ok
            message

            fuel {
                id
                active
                name
                slug
            }
        }
    }
`,P=v.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateFuelStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,$=v.Ps`
    mutation RemoveFuel($removeFuelId: String!) {
        removeFuel(id: $removeFuelId) {
            ok
            message
        }
    }
`,C=v.Ps`
    query FindAllFuels($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllFuels(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            fuels {
                id
                active
                name
                slug
            }
        }
    }
`,B=v.Ps`
    query FindFuelById($findFuelByIdId: String!) {
        findFuelById(id: $findFuelByIdId) {
            ok
            message

            fuel {
                id
                active
                name
                slug
            }
        }
    }
`;var y=e(59784),E=e(5e3),U=e(57261),b=e(85094);let A=(()=>{class h{constructor(s,o,r){this.apolloProvider=s,this._snackBar=o,this.store=r,this._apollo=this.apolloProvider.use("BALANC")}createFuel(s){return this.store.select(f.zt).pipe((0,c.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:S,variables:{createFuelInput:s},errorPolicy:"all"}).pipe((0,u.b)(({errors:r,data:a})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const p=(0,l.cloneDeep)(o);p.push(a.createFuel.fuel),this.store.dispatch((0,i.fQ)({fuels:p}))}))))}getFuels(s=1,o=20,r="code",a="asc",p=null){return this._apollo.query({query:C,errorPolicy:"all",variables:{offset:o*(s-1),limit:o,sort:r,order:a,search:p}}).pipe((0,u.b)(({errors:t,data:n})=>{if(t){let T="";t.forEach(R=>T+=`\n ${R.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:T,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,m.Jr)({pagination:n.findAllFuels.pagination})),this.store.dispatch((0,i.fQ)({fuels:n.findAllFuels.fuels}))}))}getFuelById(s){return this._apollo.query({query:B,variables:{findFuelByIdId:s},errorPolicy:"all"}).pipe((0,u.b)(({errors:o,data:r})=>{if(o){let a="";o.forEach(p=>a+=`\n ${p.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,i.no)({fuel:r.findFuelById.fuel}))}))}updateFuel(s){return this.store.select(f.zt).pipe((0,c.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:F,variables:{updateFuelInput:s},errorPolicy:"all"}).pipe((0,u.b)(({errors:r,data:a})=>{if(r){let n="";r.forEach(T=>n+=`\n ${T.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:n,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const p=(0,l.cloneDeep)(o);p[o.findIndex(n=>n.id===s.id)]=a.updateFuel.fuel,this.store.dispatch((0,i.fQ)({fuels:p}))}))))}updateFuelStatus(s){return this.store.select(f.zt).pipe((0,c.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:P,variables:{updateEntityStatusInput:s},errorPolicy:"all"}).pipe((0,u.b)(({errors:r})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,l.cloneDeep)(o);a[o.findIndex(t=>t.id===s.id)].active=s.active,this.store.dispatch((0,i.fQ)({fuels:a}))}))))}removeFuel(s){return this.store.select(f.zt).pipe((0,c.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:$,variables:{removeFuelId:s},errorPolicy:"all"}).pipe((0,u.b)(({errors:r})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,l.cloneDeep)(o),p=o.findIndex(t=>t.id===s);a.splice(p,1),this.store.dispatch((0,i.fQ)({fuels:a}))}))))}}return h.\u0275fac=function(s){return new(s||h)(E.LFG(v._M),E.LFG(U.ux),E.LFG(b.yh))},h.\u0275prov=E.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},293:(I,g,e)=>{e.d(g,{P:()=>u});var c=e(5e3),d=e(32121);let u=(()=>{class l{constructor(m){this._serviceTypesService=m}resolve(m,f){return this._serviceTypesService.getServiceTypes()}}return l.\u0275fac=function(m){return new(m||l)(c.LFG(d.k))},l.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},58066:(I,g,e)=>{e.d(g,{Fr:()=>l});var c=e(85094);const d=i=>i.serviceTypes,l=((0,c.P1)(d,i=>i.serviceType),(0,c.P1)(d,i=>i.serviceTypes))},32121:(I,g,e)=>{e.d(g,{k:()=>A});var c=e(95698),d=e(63900),u=e(18505),l=e(17489),i=e(63398),m=e(75714),f=e(58066),v=e(33921);const S=v.Ps`
    mutation CreateServiceType($createServiceTypeInput: CreateServiceTypeInput!) {
        createServiceType(createServiceTypeInput: $createServiceTypeInput) {

            ok
            message

            serviceType {
                id
                active
                name
                slug
            }

        }
    }
`,F=v.Ps`
    mutation UpdateServiceType($updateServiceTypeInput: UpdateServiceTypeInput!) {
        updateServiceType(updateServiceTypeInput: $updateServiceTypeInput) {
            ok
            message

            serviceType {
                id
                active
                name
                slug
            }
        }
    }
`,P=v.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateServiceTypeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }

    }
`,$=v.Ps`
    mutation RemoveServiceType($removeServiceTypeId: String!) {
        removeServiceType(id: $removeServiceTypeId) {
            ok
            message
        }
    }
`,C=v.Ps`
    query FindAllServiceTypes($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllServiceTypes(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            serviceTypes {
                id
                active
                name
                slug
            }
        }
    }
`,B=v.Ps`
    query FindServiceTypeById($findServiceTypeByIdId: String!) {
        findServiceTypeById(id: $findServiceTypeByIdId) {
            ok
            message

            serviceType {
                id
                active
                name
                slug
            }
        }
    }
`;var y=e(59784),E=e(5e3),U=e(57261),b=e(85094);let A=(()=>{class h{constructor(s,o,r){this.apolloProvider=s,this._snackBar=o,this.store=r,this._apollo=this.apolloProvider.use("BALANC")}createServiceType(s){return this.store.select(f.Fr).pipe((0,c.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:S,variables:{createServiceTypeInput:s},errorPolicy:"all"}).pipe((0,u.b)(({errors:r,data:a})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const p=(0,l.cloneDeep)(o);p.push(a.createServiceType.serviceType),this.store.dispatch((0,i.jn)({serviceTypes:p}))}))))}getServiceTypes(s=1,o=20,r="code",a="asc",p=null){return this._apollo.query({query:C,errorPolicy:"all",variables:{offset:o*(s-1),limit:o,sort:r,order:a,search:p}}).pipe((0,u.b)(({errors:t,data:n})=>{if(t){let T="";t.forEach(R=>T+=`\n ${R.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:T,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,m.Jr)({pagination:n.findAllServiceTypes.pagination})),this.store.dispatch((0,i.jn)({serviceTypes:n.findAllServiceTypes.serviceTypes}))}))}getServiceTypeById(s){return this._apollo.query({query:B,variables:{findServiceTypeByIdId:s},errorPolicy:"all"}).pipe((0,u.b)(({errors:o,data:r})=>{if(o){let a="";o.forEach(p=>a+=`\n ${p.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,i.oM)({serviceType:r.findServiceTypeById.serviceType}))}))}updateServiceType(s){return this.store.select(f.Fr).pipe((0,c.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:F,variables:{updateServiceTypeInput:s},errorPolicy:"all"}).pipe((0,u.b)(({errors:r,data:a})=>{if(r){let n="";r.forEach(T=>n+=`\n ${T.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:n,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const p=(0,l.cloneDeep)(o);p[o.findIndex(n=>n.id===s.id)]=a.updateServiceType.serviceType,this.store.dispatch((0,i.jn)({serviceTypes:p}))}))))}updateServiceTypeStatus(s){return this.store.select(f.Fr).pipe((0,c.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:P,variables:{updateEntityStatusInput:s},errorPolicy:"all"}).pipe((0,u.b)(({errors:r})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,l.cloneDeep)(o);a[o.findIndex(t=>t.id===s.id)].active=s.active,this.store.dispatch((0,i.jn)({serviceTypes:a}))}))))}removeServiceType(s){return this.store.select(f.Fr).pipe((0,c.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:$,variables:{removeServiceTypeId:s},errorPolicy:"all"}).pipe((0,u.b)(({errors:r})=>{if(r){let t="";r.forEach(n=>t+=`\n ${n.message}.`),this._snackBar.openFromComponent(y.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,l.cloneDeep)(o),p=o.findIndex(t=>t.id===s);a.splice(p,1),this.store.dispatch((0,i.jn)({serviceTypes:a}))}))))}}return h.\u0275fac=function(s){return new(s||h)(E.LFG(v._M),E.LFG(U.ux),E.LFG(b.yh))},h.\u0275prov=E.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);