"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[64],{14232:(D,y,r)=>{r.d(y,{M_:()=>U,u4:()=>E,ug:()=>P});var I=r(4128),u=r(62843),i=r(70262),n=r(22594),o=r(5e3),c=r(86874),f=r(35357),_=r(85094);let E=(()=>{class s{constructor(a,l,d){this._customersService=a,this._router=l,this.store=d,this.store.select(n.Qs).subscribe(h=>{this.merchant=h})}resolve(a,l){return this.merchant?this._customersService.findAllCustomers(this.merchant.id).pipe((0,i.K)(d=>this._router.navigateByUrl("/desktop"))):null}}return s.\u0275fac=function(a){return new(a||s)(o.LFG(c.v),o.LFG(f.F0),o.LFG(_.yh))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),P=(()=>{class s{constructor(a,l){this._customersService=a,this._router=l}resolve(a,l){const d=a.params.customerId;return"new"===d?this._customersService.getDomains():(0,I.D)([this._customersService.findCustomerById(d),this._customersService.getDomains()]).pipe((0,i.K)(h=>{const A=l.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(A),(0,u._)(h)}))}}return s.\u0275fac=function(a){return new(a||s)(o.LFG(c.v),o.LFG(f.F0))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),U=(()=>{class s{constructor(a,l,d){this._customersService=a,this._router=l,this.store=d,this.store.select(n.Qs).subscribe(h=>{this.merchant=h})}resolve(a,l){return this.merchant?this._customersService.findAllActiveCustomers(this.merchant.id).pipe((0,i.K)(d=>this._router.navigateByUrl("/desktop"))):null}}return s.\u0275fac=function(a){return new(a||s)(o.LFG(c.v),o.LFG(f.F0),o.LFG(_.yh))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},60814:(D,y,r)=>{r.d(y,{H5:()=>i,p6:()=>n});var I=r(85094);const u=o=>o.customers,i=(0,I.P1)(u,o=>o.customer),n=(0,I.P1)(u,o=>o.customers)},86874:(D,y,r)=>{r.d(y,{v:()=>A});var I=r(61135),u=r(54004),i=r(18505),n=r(83821),o=r(75714),c=r(33921);const f=c.Ps`
    mutation CreateCustomer($createCustomerInput: CreateCustomerInput!) {
        createCustomer(createCustomerInput: $createCustomerInput) {
            ok,
            message,

            customer {
                id,
                merchantId,
                logoUrl,
                abbr,
                type,
                name,
                domain
            }
        }
    }
`,_=c.Ps`
    query FindAllCustomers($merchantId: String!, $page: Int, $size: Int! $sort: String, $order: Order, $search: String ) {
        findAllCustomers(merchantId: $merchantId, page: $page, size: $size, sort: $sort, order: $order, search: $search ) {
            ok,
            message,

            pagination {
                length,
                size,
                page,
                lastPage,
                startIndex,
                endIndex
            },

            customers {
                id,
                merchantId,
                active,
                logoUrl,
                abbr,
                type,
                name,
                domain,

                email {
                    email,
                    label
                },
                phoneNumber {
                    stateCode,
                    phoneNumber,
                    label
                },


                bankAccounts {
                    no,
                    currency
                },
            }
        }
    }
`,E=c.Ps`
    query FindAllActiveCustomers($merchantId: String!) {
        findAllActiveCustomers(merchantId: $merchantId) {
            id,
            name,
            merchantId,
            abbr,
        }
    }
`,P=c.Ps`
    query FindCustomerById($customerId: String!) {
        findCustomerById(id: $customerId ) {
            ok,
            message,

            customer {
                id,
                userId,
                merchantId,
                commercialId,
                active,
                name,

                domain,
                address,
                city,
                state,
                country,
                zip,

                email {
                    email,
                    label
                },
                phoneNumber {
                    stateCode,
                    phoneNumber,
                    label
                },

                nit,
                reupp,

                type,

                bankAccounts {
                    bank,
                    beneficiary,
                    no,
                    currency,

                    cardType {
                        _id,
                        name,
                        bank,
                        currency,
                        type
                    }
                },

                description,
                abbr,
                website,
                logoUrl,
                coverUrl,
            }
        }
    }
`,U=c.Ps`
    mutation UpdateCustomer($updateCustomerInput: UpdateCustomerInput!) {
        updateCustomer(updateCustomerInput: $updateCustomerInput) {
            ok,
            message,

            customer {
                id,
                merchantId,
                logoUrl,
                abbr,
                type,
                name,
                domain
            }
        }
    }
`,s=c.Ps`
    mutation UpdateCustomerStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCustomerStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,p=c.Ps`
    mutation UpdateCustomerImage($imageProperty: String!, $updateEntityImageInput: UpdateEntityImageInput!) {
        updateCustomerImage(imageProperty: $imageProperty, updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,a=c.Ps`
    mutation RemoveCustomer($customerId: String!) {
        removeCustomer(id: $customerId) {
            ok,
            message,

            pagination {
                length,
                size,
                page,
                lastPage,
                startIndex,
                endIndex
            },

            customers {
                id,
                merchantId,
                logoUrl,
                abbr,
                type,
                name,
                domain
            }
        }
    }
`;var l=r(5e3),d=r(40520),h=r(85094);let A=(()=>{class g{constructor(e,t,m){this._httpClient=e,this.apolloProvider=t,this.store=m,this._domains=new I.X(null),this._apollo=this.apolloProvider.use("BALANC")}get domains$(){return this._domains.asObservable()}createCustomer(e){return this._apollo.mutate({mutation:f,variables:{createCustomerInput:e},errorPolicy:"all"}).pipe((0,u.U)(({data:t})=>t?t.createCustomer:null),(0,i.b)(t=>{t&&(this.store.dispatch((0,n.wK)({customer:t.customer})),this.store.dispatch((0,n.Xg)({customer:t.customer})))}))}findAllCustomers(e,t=0,m=10,b="name",S="asc",O=null,C=!1){return this._apollo.query({query:_,variables:{merchantId:e,page:t,size:m,sort:b,order:S,search:O},errorPolicy:"all"}).pipe((0,u.U)(({data:v})=>v?v.findAllCustomers:null),(0,i.b)(v=>{v&&(this.store.dispatch(C?(0,n.AT)({customers:v.customers}):(0,n.Pb)({customers:v.customers})),this.store.dispatch((0,o.Jr)({pagination:v.pagination})))}))}findAllActiveCustomers(e){return this._apollo.query({query:E,variables:{merchantId:e},errorPolicy:"all"}).pipe((0,u.U)(({data:t})=>t?t.findAllActiveCustomers:null),(0,i.b)(t=>{t&&this.store.dispatch((0,n.Pb)({customers:t}))}))}findCustomerById(e){return this._apollo.query({query:P,variables:{customerId:e},errorPolicy:"all"}).pipe((0,u.U)(({data:t})=>t?t.findCustomerById:null),(0,i.b)(t=>{t&&this.store.dispatch((0,n.Xg)({customer:t.customer}))}))}updateCustomer(e){return this._apollo.mutate({mutation:U,variables:{updateCustomerInput:e},errorPolicy:"all"}).pipe((0,u.U)(({data:t})=>t?t.updateCustomer:null),(0,i.b)(t=>{t&&(this.store.dispatch((0,n.uG)({customer:t.customer})),this.store.dispatch((0,n.Xg)({customer:t.customer})))}))}updateCustomerStatus(e){return this._apollo.mutate({mutation:s,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,u.U)(({data:t})=>t?t.updateCustomerStatus:null),(0,i.b)(t=>{t&&this.store.dispatch((0,n.gm)(e))}))}updateCustomerImage(e,t){return this._apollo.mutate({mutation:p,variables:{imageProperty:e,updateEntityImageInput:t},errorPolicy:"all"}).pipe((0,u.U)(({data:m})=>m?m.updateCustomerImage:null),(0,i.b)(m=>{m&&this.store.dispatch((0,n.Pl)(Object.assign(Object.assign({},t),{imageProperty:e})))}))}removeCustomer(e,t=0,m=10,b="name",S="desc",O=null){return this._apollo.mutate({mutation:a,variables:{customerId:e,page:t,size:m,sort:b,order:S,search:O},errorPolicy:"all"}).pipe((0,u.U)(({data:C})=>C?C.removeCustomer:null),(0,i.b)(C=>{C&&(this.store.dispatch((0,n.PX)({id:e})),this.store.dispatch((0,o.Jr)({pagination:C.pagination})))}))}getDomains(){return this._httpClient.get("assets/data/domains.json").pipe((0,u.U)(e=>e.sort((t,m)=>t.name.toLowerCase()<m.name.toLowerCase()?-1:t.name.toLowerCase()>m.name.toLowerCase()?1:void 0)),(0,i.b)(e=>{this._domains.next(e)}))}getDomainFiltered(e){return this._httpClient.get("assets/data/domains.json").pipe((0,u.U)(t=>t.filter(m=>m.name===e)))}}return g.\u0275fac=function(e){return new(e||g)(l.LFG(d.eN),l.LFG(c._M),l.LFG(h.yh))},g.\u0275prov=l.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);