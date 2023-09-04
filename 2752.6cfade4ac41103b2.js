"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[2752],{90810:(z,S,r)=>{r.d(S,{Y:()=>u,g:()=>c});var h=r(5e3),v=r(63334);let u=(()=>{class d{constructor(i){this._currenciesService=i}resolve(i,p){return this._currenciesService.getCurrencies()}}return d.\u0275fac=function(i){return new(i||d)(h.LFG(v.t))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})(),c=(()=>{class d{constructor(i){this._currenciesService=i}resolve(i,p){return this._currenciesService.getActiveCurrency()}}return d.\u0275fac=function(i){return new(i||d)(h.LFG(v.t))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},99987:(z,S,r)=>{r.d(S,{zd:()=>c});var h=r(85094);const v=d=>d.currencies,c=((0,h.P1)(v,d=>d.currency),(0,h.P1)(v,d=>d.currencies))},63334:(z,S,r)=>{r.d(S,{t:()=>O});var h=r(95698),v=r(63900),u=r(18505),c=r(45840),d=r(60230),g=r(99987),i=r(59784),p=r(33921);const C=p.Ps`
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
`,n=p.Ps`
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
`,m=p.Ps`
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
`,A=p.Ps`
    query FindAllActiveCurrencies {
        findAllActiveCurrencies {
            id
            active
            name
            iso
            symbol
        }
    }
`,D=p.Ps`
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
`;var U=r(5e3),M=r(57261),x=r(85094);let O=(()=>{class B{constructor(y,b,f){this.apolloProvider=y,this._snackBar=b,this.store=f,this._apollo=this.apolloProvider.use("BALANC")}createCurrency(y){return this.store.select(g.zd).pipe((0,h.q)(1),(0,v.w)(b=>this._apollo.mutate({mutation:C,variables:{createCurrencyInput:y},errorPolicy:"all"}).pipe((0,u.b)(({errors:f,data:T})=>{if(f){let I="";f.forEach(R=>I+=`\n ${R.message}.`),this._snackBar.openFromComponent(i.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const $=(0,c.Z)(b);$.push(T.createCurrency.currency),this.store.dispatch((0,d.HC)({currencies:$}))}))))}getCurrencies(){return this._apollo.query({query:m,errorPolicy:"all"}).pipe((0,u.b)(({errors:y,data:b})=>{if(y){let f="";y.forEach(T=>f+=`\n ${T.message}.`),this._snackBar.openFromComponent(i.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:f,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,d.HC)({currencies:b.findAllCurrencies.currencies}))}))}getActiveCurrency(){return this._apollo.query({query:A,errorPolicy:"all"}).pipe((0,u.b)(({data:y})=>{y&&this.store.dispatch((0,d.HC)({currencies:y.findAllActiveCurrencies}))}))}getCurrencyById(y){return this._apollo.query({query:D,variables:{findCurrencyByIdId:y},errorPolicy:"all"}).pipe((0,u.b)(({errors:b,data:f})=>{if(b){let T="";b.forEach($=>T+=`\n ${$.message}.`),this._snackBar.openFromComponent(i.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:T,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,d.NW)({currency:f.findCurrencyById.currency}))}))}updateCurrency(y){return this.store.select(g.zd).pipe((0,h.q)(1),(0,v.w)(b=>this._apollo.mutate({mutation:G,variables:{updateCurrencyInput:y},errorPolicy:"all"}).pipe((0,u.b)(({errors:f,data:T})=>{if(f){let R="";f.forEach(q=>R+=`\n ${q.message}.`),this._snackBar.openFromComponent(i.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:R,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const $=(0,c.Z)(b);$[b.findIndex(R=>R.id===y.id)]=T.updateCurrency.currency,this.store.dispatch((0,d.HC)({currencies:$}))}))))}updateCurrencyStatus(y){return this.store.select(g.zd).pipe((0,h.q)(1),(0,v.w)(b=>this._apollo.mutate({mutation:n,variables:{updateEntityStatusInput:y},errorPolicy:"all"}).pipe((0,u.b)(({errors:f})=>{if(f){let I="";f.forEach(R=>I+=`\n ${R.message}.`),this._snackBar.openFromComponent(i.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const T=(0,c.Z)(b);T[b.findIndex(I=>I.id===y.id)].active=y.active,this.store.dispatch((0,d.HC)({currencies:T}))}))))}removeCurrency(y){return this.store.select(g.zd).pipe((0,h.q)(1),(0,v.w)(b=>this._apollo.mutate({mutation:_,variables:{removeCurrencyId:y},errorPolicy:"all"}).pipe((0,u.b)(({errors:f})=>{if(f){let I="";f.forEach(R=>I+=`\n ${R.message}.`),this._snackBar.openFromComponent(i.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:I,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const T=(0,c.Z)(b),$=b.findIndex(I=>I.id===y);T.splice($,1),this.store.dispatch((0,d.HC)({currencies:T}))}))))}}return B.\u0275fac=function(y){return new(y||B)(U.LFG(p._M),U.LFG(M.ux),U.LFG(x.yh))},B.\u0275prov=U.Yz7({token:B,factory:B.\u0275fac,providedIn:"root"}),B})()},95259:(z,S,r)=>{r.d(S,{M6:()=>g,Nj:()=>p,SE:()=>i,am:()=>G,hz:()=>C});var h=r(70262),v=r(62843),u=r(5e3),c=r(66929),d=r(35357);let g=(()=>{class n{constructor(m,A){this._productsService=m,this._router=A}resolve(m,A){const D=m.paramMap.get("productId");return this._productsService.getProductById(D).pipe((0,h.K)(U=>{console.error(U);const M=A.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(M),(0,v._)(U)}))}}return n.\u0275fac=function(m){return new(m||n)(u.LFG(c.s),u.LFG(d.F0))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),i=(()=>{class n{constructor(m){this._productsService=m}resolve(m,A){return this._productsService.getProductsByMerchant()}}return n.\u0275fac=function(m){return new(m||n)(u.LFG(c.s))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),p=(()=>{class n{constructor(m){this._productsService=m}resolve(m,A){return this._productsService.getTags()}}return n.\u0275fac=function(m){return new(m||n)(u.LFG(c.s))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),C=(()=>{class n{constructor(m){this._productsService=m}resolve(m,A){return this._productsService.getPerishableProducts()}}return n.\u0275fac=function(m){return new(m||n)(u.LFG(c.s))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),G=(()=>{class n{constructor(m){this._productsService=m}resolve(m,A){return this._productsService.getProductsAvailableInStock()}}return n.\u0275fac=function(m){return new(m||n)(u.LFG(c.s))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},17264:(z,S,r)=>{r.d(S,{Fn:()=>u,K2:()=>g,a0:()=>d,nR:()=>c});var h=r(85094);const v=i=>i.products,u=(0,h.P1)(v,i=>i.product),c=(0,h.P1)(v,i=>i.products),d=(0,h.P1)(v,i=>i.tags),g=(0,h.P1)(v,i=>i.productsInStock)},66929:(z,S,r)=>{r.d(S,{s:()=>Y});var h=r(45840),v=r(95698),u=r(63900),c=r(18505),d=r(75714),g=r(91421),i=r(17264),p=r(59784),C=r(33921);const G=C.Ps`
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
`,n=C.Ps`
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
`,_=C.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateProductStatus(updateEntityStatusInput: $updateEntityStatusInput){
            ok
            message
        }
    }
`,m=C.Ps`
    mutation RemoveProduct($removeProductId: String!) {
        removeProduct(id: $removeProductId) {
            ok
            message
        }
    }
`,A=C.Ps`
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
`,D=C.Ps`
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
`,U=C.Ps`
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
`,M=C.Ps`
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
`,x=C.Ps`
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
`,O=C.Ps`
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
`,B=C.Ps`
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
`,L=C.Ps`
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
`,y=C.Ps`
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
`,b=C.Ps`
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
`,f=C.Ps`
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
`,T=C.Ps`
    mutation RemoveTag($removeTagId: String!) {
        removeTag(id: $removeTagId) {
            ok
            message
        }
    }
`,$=C.Ps`
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
`;var I=r(5e3),R=r(57261),q=r(85094);let Y=(()=>{class F{constructor(e,o,t){this.apolloProvider=e,this._snackBar=o,this.store=t,this._apollo=this.apolloProvider.use("BALANC")}createProduct(e){return this.store.select(i.nR).pipe((0,v.q)(1),(0,u.w)(o=>this._apollo.mutate({mutation:G,variables:{createProductInput:e},errorPolicy:"all"}).pipe((0,c.b)(({errors:t,data:s})=>{if(t){let a="";t.forEach(l=>{l.extensions.originalError.message.forEach(k=>a+=`\n ${k.message}.`)}),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const P=(0,h.Z)(o);P.push(s.createProduct.product),this.store.dispatch((0,g.RU)({products:P}))}))))}getProducts(e=1,o=10,t="name",s="asc",P=""){return this._apollo.query({query:A,errorPolicy:"all",variables:{offset:o*(e-1),limit:o,sort:t,order:s,search:P}}).pipe((0,c.b)(({errors:a,data:l})=>{if(a){let E="";a.forEach(k=>E+=`\n ${k.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,g.RU)({products:l.findAllProducts.products})),this.store.dispatch((0,d.Jr)({pagination:l.findAllProducts.pagination}))}))}getProductsByMerchant(e=1,o=10,t="name",s="asc",P=""){return this._apollo.query({query:D,errorPolicy:"all",variables:{offset:o*(e-1),limit:o,sort:t,order:s,search:P}}).pipe((0,c.b)(({errors:a,data:l})=>{if(a){let E="";a.forEach(k=>E+=`\n ${k.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,g.RU)({products:l.findAllProductsByMerchant.products})),this.store.dispatch((0,d.Jr)({pagination:l.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:U,errorPolicy:"all"}).pipe((0,c.b)(({errors:e})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsInactive(){return this._apollo.query({query:M,errorPolicy:"all"}).pipe((0,c.b)(({errors:e})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsExhausted(){return this._apollo.query({query:x,errorPolicy:"all"}).pipe((0,c.b)(({errors:e})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsAvailable(){return this._apollo.query({query:O,errorPolicy:"all"}).pipe((0,c.b)(({errors:e})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getPerishableProducts(e=1,o=10,t="name",s="asc",P=""){return this._apollo.query({query:L,errorPolicy:"all",variables:{offset:o*(e-1),limit:o,sort:t,order:s,search:P}}).pipe((0,c.b)(({errors:a,data:l})=>{if(a){let E="";a.forEach(k=>E+=`\n ${k.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,g.RU)({products:l.findPerishableProducts.products})),this.store.dispatch((0,d.Jr)({pagination:l.findPerishableProducts.pagination}))}))}getProductById(e){return this._apollo.query({query:y,variables:{findProductByIdId:e},errorPolicy:"all"}).pipe((0,c.b)(({errors:o,data:t})=>{if(o){let s="";o.forEach(P=>s+=`\n ${P.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:s,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,g.Gr)({product:t.findProductById.product}))}))}updateProduct(e){return this.store.select(i.nR).pipe((0,v.q)(1),(0,u.w)(o=>this._apollo.mutate({mutation:n,variables:{updateProductInput:e},errorPolicy:"all"}).pipe((0,c.b)(({errors:t,data:s})=>{if(t){let l="";t.forEach(E=>l+=`\n ${E.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const P=(0,h.Z)(o);P[o.findIndex(l=>l.id===e.id)]=s.updateProduct.product,this.store.dispatch((0,g.RU)({products:P})),this.store.dispatch((0,g.Gr)({product:s.updateProduct.product}))}))))}updateProductStatus(e){return this.store.select(i.nR).pipe((0,v.q)(1),(0,u.w)(o=>this._apollo.mutate({mutation:_,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,c.b)(({errors:t})=>{if(t){let a="";t.forEach(l=>a+=`\n ${l.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,h.Z)(o);s[o.findIndex(a=>a.id===e.id)].active=e.active,this.store.dispatch((0,g.RU)({products:s}))}))))}removeProduct(e){return this.store.select(i.nR).pipe((0,v.q)(1),(0,u.w)(o=>this._apollo.mutate({mutation:m,variables:{removeProductId:e},errorPolicy:"all"}).pipe((0,c.b)(({errors:t})=>{if(t){let a="";t.forEach(l=>a+=`\n ${l.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,h.Z)(o),P=o.findIndex(a=>a.id===e);s.splice(P,1),this.store.dispatch((0,g.RU)({products:s}))}))))}getTags(e=1,o=10,t="name",s="asc",P=""){return this._apollo.query({query:$,errorPolicy:"all",variables:{offset:o*(e-1),limit:o,sort:t,order:s,search:P}}).pipe((0,c.b)(({errors:a,data:l})=>{if(a){let E="";a.forEach(k=>E+=`\n ${k.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:E,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,g.mG)({tags:l.findAllTags.tags}))}))}createTag(e){return this.store.select(i.a0).pipe((0,v.q)(1),(0,u.w)(o=>this._apollo.mutate({mutation:b,variables:{createTagInput:e},errorPolicy:"all"}).pipe((0,c.b)(({errors:t,data:s})=>{if(t){let a="";t.forEach(l=>{l.extensions.originalError.message.forEach(k=>a+=`\n ${k.message}.`)}),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const P=(0,h.Z)(o);P.push(s.createTag.tag),this.store.dispatch((0,g.mG)({tags:P}))}))))}updateTag(e){return this.store.select(i.a0).pipe((0,v.q)(1),(0,u.w)(o=>this._apollo.mutate({mutation:f,variables:{updateTagInput:e},errorPolicy:"all"}).pipe((0,c.b)(({errors:t,data:s})=>{if(t){let l="";t.forEach(E=>l+=`\n ${E.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const P=(0,h.Z)(o);P[o.findIndex(l=>l.id===e.id)]=s.updateTag.tag,this.store.dispatch((0,g.mG)({tags:P}))}))))}deleteTag(e){return this.store.select(i.a0).pipe((0,v.q)(1),(0,u.w)(o=>this._apollo.mutate({mutation:T,variables:{removeTagId:e},errorPolicy:"all"}).pipe((0,c.b)(({errors:t})=>{if(t){let a="";t.forEach(l=>a+=`\n ${l.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const s=(0,h.Z)(o),P=o.findIndex(a=>a.id===e);s.splice(P,1),this.store.dispatch((0,g.mG)({tags:s}))}))))}getProductsAvailables(){return this._apollo.query({query:B,errorPolicy:"all"}).pipe((0,c.b)(({errors:e})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsAvailableInStock(){return this._apollo.query({query:O,errorPolicy:"all"}).pipe((0,c.b)(({errors:e,data:o})=>{if(e){let t="";e.forEach(s=>t+=`\n ${s.message}.`),this._snackBar.openFromComponent(p.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:t,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,g.Pj)({productsInStock:o.productsInStock}))}))}}return F.\u0275fac=function(e){return new(e||F)(I.LFG(C._M),I.LFG(R.ux),I.LFG(q.yh))},F.\u0275prov=I.Yz7({token:F,factory:F.\u0275fac,providedIn:"root"}),F})()}}]);