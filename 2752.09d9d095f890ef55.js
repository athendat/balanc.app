"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[2752],{90810:(D,S,r)=>{r.d(S,{Y:()=>d});var g=r(5e3),P=r(63334);let d=(()=>{class n{constructor(l){this._currenciesService=l}resolve(l,m){return this._currenciesService.getCurrencies()}}return n.\u0275fac=function(l){return new(l||n)(g.LFG(P.t))},n.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},99987:(D,S,r)=>{r.d(S,{zd:()=>n});var g=r(85094);const P=v=>v.currencies,n=((0,g.P1)(P,v=>v.currency),(0,g.P1)(P,v=>v.currencies))},63334:(D,S,r)=>{r.d(S,{t:()=>O});var g=r(95698),P=r(63900),d=r(18505),n=r(45840),v=r(60230),l=r(99987),m=r(59784),p=r(33921);const y=p.Ps`
    mutation CreateCurrency($createCurrencyInput: CreateCurrencyInput!) {
        createCurrency(createCurrencyInput: $createCurrencyInput) {

            ok
            message

            currency {
                id
                active
                name
                iso
                symbol
            }

        }
    }
`,G=p.Ps`
mutation UpdateCurrency($updateCurrencyInput: UpdateCurrencyInput!) {
    updateCurrency(updateCurrencyInput: $updateCurrencyInput) {
        ok
        message

        currency {
            id
            active
            name
            iso
            symbol
        }
    }
}
`,i=p.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCurrencyStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok
            message
        }
    }
`,_=p.Ps`
mutation RemoveCurrency($removeCurrencyId: String!) {
    removeCurrency(id: $removeCurrencyId) {
        ok,
        message
    }
}
`,u=p.Ps`
    query FindAllCurrencies {
        findAllCurrencies {
            ok
            message

            currencies {
                id
                active
                name
                iso
                symbol
            }
        }
    }
`,k=p.Ps`
    query FindCurrencyById($findCurrencyByIdId: String!) {
        findCurrencyById(id: $findCurrencyByIdId) {
            ok
            message

            currency {
                id
                active
                name
                iso
                symbol
            }
        }
    }
`;var B=r(5e3),F=r(57261),M=r(85094);let O=(()=>{class A{constructor(I,E,C){this.apolloProvider=I,this._snackBar=E,this.store=C,this._apollo=this.apolloProvider.use("BALANC")}createCurrency(I){return this.store.select(l.zd).pipe((0,g.q)(1),(0,P.w)(E=>this._apollo.mutate({mutation:y,variables:{createCurrencyInput:I},errorPolicy:"all"}).pipe((0,d.b)(({errors:C,data:T})=>{if(C){let b="";C.forEach($=>b+=`\n ${$.message}.`),this._snackBar.openFromComponent(m.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:b,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const R=(0,n.Z)(E);R.push(T.createCurrency.currency),this.store.dispatch((0,v.HC)({currencies:R}))}))))}getCurrencies(){return this._apollo.query({query:u,errorPolicy:"all"}).pipe((0,d.b)(({errors:I,data:E})=>{if(I){let C="";I.forEach(T=>C+=`\n ${T.message}.`),this._snackBar.openFromComponent(m.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:C,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,v.HC)({currencies:E.findAllCurrencies.currencies}))}))}getCurrencyById(I){return this._apollo.query({query:k,variables:{findCurrencyByIdId:I},errorPolicy:"all"}).pipe((0,d.b)(({errors:E,data:C})=>{if(E){let T="";E.forEach(R=>T+=`\n ${R.message}.`),this._snackBar.openFromComponent(m.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:T,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,v.NW)({currency:C.findCurrencyById.currency}))}))}updateCurrency(I){return this.store.select(l.zd).pipe((0,g.q)(1),(0,P.w)(E=>this._apollo.mutate({mutation:G,variables:{updateCurrencyInput:I},errorPolicy:"all"}).pipe((0,d.b)(({errors:C,data:T})=>{if(C){let $="";C.forEach(L=>$+=`\n ${L.message}.`),this._snackBar.openFromComponent(m.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:$,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const R=(0,n.Z)(E);R[E.findIndex($=>$.id===I.id)]=T.updateCurrency.currency,this.store.dispatch((0,v.HC)({currencies:R}))}))))}updateCurrencyStatus(I){return this.store.select(l.zd).pipe((0,g.q)(1),(0,P.w)(E=>this._apollo.mutate({mutation:i,variables:{updateEntityStatusInput:I},errorPolicy:"all"}).pipe((0,d.b)(({errors:C})=>{if(C){let b="";C.forEach($=>b+=`\n ${$.message}.`),this._snackBar.openFromComponent(m.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:b,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const T=(0,n.Z)(E);T[E.findIndex(b=>b.id===I.id)].active=I.active,this.store.dispatch((0,v.HC)({currencies:T}))}))))}removeCurrency(I){return this.store.select(l.zd).pipe((0,g.q)(1),(0,P.w)(E=>this._apollo.mutate({mutation:_,variables:{removeCurrencyId:I},errorPolicy:"all"}).pipe((0,d.b)(({errors:C})=>{if(C){let b="";C.forEach($=>b+=`\n ${$.message}.`),this._snackBar.openFromComponent(m.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:b,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const T=(0,n.Z)(E),R=E.findIndex(b=>b.id===I);T.splice(R,1),this.store.dispatch((0,v.HC)({currencies:T}))}))))}}return A.\u0275fac=function(I){return new(I||A)(B.LFG(p._M),B.LFG(F.ux),B.LFG(M.yh))},A.\u0275prov=B.Yz7({token:A,factory:A.\u0275fac,providedIn:"root"}),A})()},95259:(D,S,r)=>{r.d(S,{M6:()=>l,Nj:()=>p,SE:()=>m,am:()=>G,hz:()=>y});var g=r(70262),P=r(62843),d=r(5e3),n=r(66929),v=r(35357);let l=(()=>{class i{constructor(u,k){this._productsService=u,this._router=k}resolve(u,k){const B=u.paramMap.get("productId");return this._productsService.getProductById(B).pipe((0,g.K)(F=>{console.error(F);const M=k.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(M),(0,P._)(F)}))}}return i.\u0275fac=function(u){return new(u||i)(d.LFG(n.s),d.LFG(v.F0))},i.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),m=(()=>{class i{constructor(u){this._productsService=u}resolve(u,k){return this._productsService.getProductsByMerchant()}}return i.\u0275fac=function(u){return new(u||i)(d.LFG(n.s))},i.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),p=(()=>{class i{constructor(u){this._productsService=u}resolve(u,k){return this._productsService.getTags()}}return i.\u0275fac=function(u){return new(u||i)(d.LFG(n.s))},i.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),y=(()=>{class i{constructor(u){this._productsService=u}resolve(u,k){return this._productsService.getPerishableProducts()}}return i.\u0275fac=function(u){return new(u||i)(d.LFG(n.s))},i.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),G=(()=>{class i{constructor(u){this._productsService=u}resolve(u,k){return this._productsService.getProductsAvailableInStock()}}return i.\u0275fac=function(u){return new(u||i)(d.LFG(n.s))},i.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},17264:(D,S,r)=>{r.d(S,{Fn:()=>d,K2:()=>l,a0:()=>v,nR:()=>n});var g=r(85094);const P=m=>m.products,d=(0,g.P1)(P,m=>m.product),n=(0,g.P1)(P,m=>m.products),v=(0,g.P1)(P,m=>m.tags),l=(0,g.P1)(P,m=>m.productsInStock)},66929:(D,S,r)=>{r.d(S,{s:()=>Y});var g=r(45840),P=r(95698),d=r(63900),n=r(18505),v=r(75714),l=r(91421),m=r(17264),p=r(59784),y=r(33921);const G=y.Ps`
    mutation CreateProduct($createProductInput: CreateProductInput!) {
        createProduct(createProductInput: $createProductInput) {

            ok
            message

            product {
                id
                active
                name
                price
                stock
                thumbnail
            }
        }
    }
`,i=y.Ps`
    mutation UpdateProduct($updateProductInput: UpdateProductInput!) {
        updateProduct(updateProductInput: $updateProductInput) {

            ok
            message

            product {
                id
                active

                type
                categoryId

                brandId
                brand {
                    name
                }

                currencyId
                currency {
                    name
                }


                uomId
                uom {
                    name
                    abbr
                }

                tags

                name
                description
                specifications
                guaranty

                sku
                upc

                cost
                discount
                tax
                price

                stock
                stockMin

                isDigital
                isService
                expiration

                thumbnail
                thumbnailCode

                images
                imagesCode

                variants {
                    color
                    cost
                    description
                    name
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`,_=y.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateProductStatus(updateEntityStatusInput: $updateEntityStatusInput){
            ok
            message
        }
    }
`,u=y.Ps`
    mutation RemoveProduct($removeProductId: String!) {
        removeProduct(id: $removeProductId) {
            ok
            message
        }
    }
`,k=y.Ps`
    query FindAllProducts($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllProducts(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            products {
                id
                active
                parentId
                type
                code
                upc
                cost
                name
                brand {
                    name
                }
                uom {
                    name
                    abbr
                }
                price
                stock
                salesQty
                thumbnail
                uomId

                variants {
                    id
                    name
                    description
                    color
                    cost
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`,B=y.Ps`
    query FindAllProductsByMerchant($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllProductsByMerchant(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            products {
                id
                active
                parentId
                type
                code
                upc
                cost
                name
                brand {
                    name
                }
                uom {
                    name
                    abbr
                }
                price
                stock
                salesQty
                thumbnail
                uomId

                variants {
                    id
                    name
                    description
                    color
                    cost
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`,F=y.Ps`
    query GetProductsActive {
        productsActive {
            code
            upc
            cost
            name
            brand {
                name
            }
            uom {
                abbr
            }
            price
            stock
        }
    }
`,M=y.Ps`
    query GetProductsInactive {
        productsInactive {
            code
            upc
            cost
            name
            brand {
                name
            }
            uom {
                abbr
            }
            price
            stock
        }
    }
`,O=y.Ps`
    query GetProductsExhausted {
        productsExhausted {
            name
            code
            cost
            price
            upc
            brand
            uom
            stock
        }
    }
`,A=y.Ps`
    query GetProductsInStock {
        productsInStock {
            productId
            name
            upc
            categoryId
            brand
            uom
            price
            quantity
        }
    }
`,x=y.Ps`
    query GetProductsAvailables {
        productsAvailables {
            name
            code
            cost
            price
            upc
            brand
            uom
            stock
        }
    }
`,I=y.Ps`
    query FindPerishableProducts($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findPerishableProducts(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            products {
                id
                active
                code
                upc
                cost
                expiration
                name
                brand {
                    name
                }
                uom {
                    name
                    abbr
                }
                price
                stock
                salesQty
                thumbnail
                uomId
                # wholesaler
            }
        }
    }
`,E=y.Ps`
    query FindProductById($findProductByIdId: String!) {
        findProductById(id: $findProductByIdId) {
            ok
            message

            product {
                id
                active

                type
                categoryId

                brandId
                brand {
                    name
                }

                currencyId
                currency {
                    name
                }


                uomId
                uom {
                    name
                    abbr
                }

                tags

                name
                description
                specifications
                guaranty

                sku
                upc

                cost
                discount
                tax
                price

                stock
                stockMin

                isDigital
                isService
                expiration

                thumbnail
                thumbnailCode

                images
                imagesCode

                variants {
                    color
                    cost
                    description
                    name
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`,C=y.Ps`
    mutation CreateTag($createTagInput: CreateTagInput!) {
        createTag(createTagInput: $createTagInput) {

            ok
            message

            tag {
                id
                name
                active
            }
        }
    }
`,T=y.Ps`
    mutation UpdateTag($updateTagInput: UpdateTagInput!) {
        updateTag(updateTagInput: $updateTagInput) {
            ok
            message

            tag {
                id
                name
                active
            }
        }
    }
`,R=y.Ps`
    mutation RemoveTag($removeTagId: String!) {
        removeTag(id: $removeTagId) {
            ok
            message
        }
    }
`,b=y.Ps`
    query FindAllTags($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllTags(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            tags {
                id
                name
                active
            }
        }
    }
`;var $=r(5e3),L=r(57261),q=r(85094);let Y=(()=>{class z{constructor(e,o,t){this.apolloProvider=e,this._snackBar=o,this.store=t,this._apollo=this.apolloProvider.use("BALANC")}createProduct(e){return this.store.select(m.nR).pipe((0,P.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:G,variables:{createProductInput:e},errorPolicy:"all"}).pipe((0,n.b)(({errors:t,data:s})=>{if(t){let a="";t.forEach(c=>{c.extensions.originalError.message.forEach(U=>a+=`\n ${U.message}.`)}),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const h=(0,g.Z)(o);h.push(s.createProduct.product),this.store.dispatch((0,l.RU)({products:h}))}))))}getProducts(e=1,o=10,t="name",s="asc",h=""){return this._apollo.query({query:k,errorPolicy:"all",variables:{offset:o*(e-1),limit:o,sort:t,order:s,search:h}}).pipe((0,n.b)(({errors:a,data:c})=>{if(a){let f="";a.forEach(U=>f+=`\n ${U.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:f,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,l.RU)({products:c.findAllProducts.products})),this.store.dispatch((0,v.Jr)({pagination:c.findAllProducts.pagination}))}))}getProductsByMerchant(e=1,o=10,t="name",s="asc",h=""){return this._apollo.query({query:B,errorPolicy:"all",variables:{offset:o*(e-1),limit:o,sort:t,order:s,search:h}}).pipe((0,n.b)(({errors:a,data:c})=>{if(a){let f="";a.forEach(U=>f+=`\n ${U.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:f,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,l.RU)({products:c.findAllProductsByMerchant.products})),this.store.dispatch((0,v.Jr)({pagination:c.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:F,errorPolicy:"all"}).pipe((0,n.b)(({errors:e})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsInactive(){return this._apollo.query({query:M,errorPolicy:"all"}).pipe((0,n.b)(({errors:e})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsExhausted(){return this._apollo.query({query:O,errorPolicy:"all"}).pipe((0,n.b)(({errors:e})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsAvailable(){return this._apollo.query({query:A,errorPolicy:"all"}).pipe((0,n.b)(({errors:e})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getPerishableProducts(e=1,o=10,t="name",s="asc",h=""){return this._apollo.query({query:I,errorPolicy:"all",variables:{offset:o*(e-1),limit:o,sort:t,order:s,search:h}}).pipe((0,n.b)(({errors:a,data:c})=>{if(a){let f="";a.forEach(U=>f+=`\n ${U.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:f,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,l.RU)({products:c.findPerishableProducts.products})),this.store.dispatch((0,v.Jr)({pagination:c.findPerishableProducts.pagination}))}))}getProductById(e){return this._apollo.query({query:E,variables:{findProductByIdId:e},errorPolicy:"all"}).pipe((0,n.b)(({errors:o,data:t})=>{if(o){let s="";o.forEach(h=>s+=`\n ${h.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,l.Gr)({product:t.findProductById.product}))}))}updateProduct(e){return this.store.select(m.nR).pipe((0,P.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:i,variables:{updateProductInput:e},errorPolicy:"all"}).pipe((0,n.b)(({errors:t,data:s})=>{if(t){let c="";t.forEach(f=>c+=`\n ${f.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:c,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const h=(0,g.Z)(o);h[o.findIndex(c=>c.id===e.id)]=s.updateProduct.product,this.store.dispatch((0,l.RU)({products:h})),this.store.dispatch((0,l.Gr)({product:s.updateProduct.product}))}))))}updateProductStatus(e){return this.store.select(m.nR).pipe((0,P.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:_,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,n.b)(({errors:t})=>{if(t){let a="";t.forEach(c=>a+=`\n ${c.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,g.Z)(o);s[o.findIndex(a=>a.id===e.id)].active=e.active,this.store.dispatch((0,l.RU)({products:s}))}))))}removeProduct(e){return this.store.select(m.nR).pipe((0,P.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:u,variables:{removeProductId:e},errorPolicy:"all"}).pipe((0,n.b)(({errors:t})=>{if(t){let a="";t.forEach(c=>a+=`\n ${c.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,g.Z)(o),h=o.findIndex(a=>a.id===e);s.splice(h,1),this.store.dispatch((0,l.RU)({products:s}))}))))}getTags(e=1,o=10,t="name",s="asc",h=""){return this._apollo.query({query:b,errorPolicy:"all",variables:{offset:o*(e-1),limit:o,sort:t,order:s,search:h}}).pipe((0,n.b)(({errors:a,data:c})=>{if(a){let f="";a.forEach(U=>f+=`\n ${U.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:f,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,l.mG)({tags:c.findAllTags.tags}))}))}createTag(e){return this.store.select(m.a0).pipe((0,P.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:C,variables:{createTagInput:e},errorPolicy:"all"}).pipe((0,n.b)(({errors:t,data:s})=>{if(t){let a="";t.forEach(c=>{c.extensions.originalError.message.forEach(U=>a+=`\n ${U.message}.`)}),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const h=(0,g.Z)(o);h.push(s.createTag.tag),this.store.dispatch((0,l.mG)({tags:h}))}))))}updateTag(e){return this.store.select(m.a0).pipe((0,P.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:T,variables:{updateTagInput:e},errorPolicy:"all"}).pipe((0,n.b)(({errors:t,data:s})=>{if(t){let c="";t.forEach(f=>c+=`\n ${f.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:c,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const h=(0,g.Z)(o);h[o.findIndex(c=>c.id===e.id)]=s.updateTag.tag,this.store.dispatch((0,l.mG)({tags:h}))}))))}deleteTag(e){return this.store.select(m.a0).pipe((0,P.q)(1),(0,d.w)(o=>this._apollo.mutate({mutation:R,variables:{removeTagId:e},errorPolicy:"all"}).pipe((0,n.b)(({errors:t})=>{if(t){let a="";t.forEach(c=>a+=`\n ${c.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,g.Z)(o),h=o.findIndex(a=>a.id===e);s.splice(h,1),this.store.dispatch((0,l.mG)({tags:s}))}))))}getProductsAvailables(){return this._apollo.query({query:x,errorPolicy:"all"}).pipe((0,n.b)(({errors:e})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsAvailableInStock(){return this._apollo.query({query:A,errorPolicy:"all"}).pipe((0,n.b)(({errors:e,data:o})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,l.Pj)({productsInStock:o.productsInStock}))}))}}return z.\u0275fac=function(e){return new(e||z)($.LFG(y._M),$.LFG(L.ux),$.LFG(q.yh))},z.\u0275prov=$.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})()}}]);