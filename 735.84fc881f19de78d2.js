"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[735],{67235:(y,f,l)=>{l.d(f,{e:()=>u,g:()=>s});var d=l(5e3),g=l(34617);let u=(()=>{class n{constructor(p){this._categoryService=p}resolve(p,c){return this._categoryService.getRootCategoryNodes()}}return n.\u0275fac=function(p){return new(p||n)(d.LFG(g.H))},n.\u0275prov=d.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),s=(()=>{class n{constructor(p){this._categoryService=p}resolve(p,c){return this._categoryService.findAllWithOutChildCategories()}}return n.\u0275fac=function(p){return new(p||n)(d.LFG(g.H))},n.\u0275prov=d.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},54206:(y,f,l)=>{l.d(f,{u:()=>u});const u=(0,l(85094).P1)(s=>s.categories,s=>s.categories)},34617:(y,f,l)=>{l.d(f,{H:()=>N});var d=l(17489),g=l(61135),u=l(54004),s=l(18505),n=l(95698),h=l(63900),p=l(53402),c=l(33921);const I=c.Ps`
    mutation CreateCategory($createCategoryInput: CreateCategoryInput!) {
        createCategory(createCategoryInput: $createCategoryInput) {
            ok,
            message,

            category {
                id,
                parentId,
                active,
                name,
                icon,
                imageUrl,
                imageCode,
                level,
                position
            }
        }
    }
`,E=c.Ps`
    query FindAllCategories {
        findAllCategories {

            categoriesNode {
                item {
                id
                parentId
                active
                name
                icon
                imageUrl
                imageCode
                level
                position
            },

            children {

                item {
                    id
                    parentId
                    active
                    name
                    icon
                    imageUrl
                    imageCode
                    level
                    position
                },

                children {

                    item {
                        id,
                        parentId,
                        active,
                        name,
                        icon,
                        imageUrl,
                        imageCode,
                        level,
                        position
                    },

                    children {

                        item {
                                id,
                                parentId,
                                active,
                                name,
                                icon,
                                imageUrl,
                                imageCode,
                                level,
                                position
                        }

                    }
                }
            }
            }
        }
    }
`,A=c.Ps`
    query FindAllWithOutChildCategories {
        findAllWithOutChildCategories {
            id
            name
            parentId
            active

            children {
                id
                name
                parentId
            }
        }
    }
`,O=c.Ps`
    mutation UpdateCategory($updateCategoryInput: UpdateCategoryInput!) {
        updateCategory(updateCategoryInput: $updateCategoryInput) {
            ok,
            message,

            category {
                id,
                parentId,
                active,
                name,
                icon,
                imageUrl,
                imageCode,
                level,
                position
            }
        }
    }
`,U=c.Ps`
    mutation UpdateCategoryStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateCategoryStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,P=c.Ps`
    mutation UpdateCategoryImage($updateEntityImageInput: UpdateEntityImageInput!) {
        updateCategoryImage(updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,R=c.Ps`
    mutation RemoveCategory($categoryId: String!) {
        removeCategory(id: $categoryId) {
            ok,
            message,

            category {
                id,
                parentId,
                active,
                name,
                icon,
                imageUrl,
                imageCode,
                level,
                position
            }
        }
    }
`;var v=l(5e3),S=l(85094);let N=(()=>{class m{constructor(e,o){this.apolloProvider=e,this.store=o,this.dataChange=new g.X([]),this._apollo=this.apolloProvider.use("BALANC")}get data$(){return this.dataChange.asObservable()}getRootCategoryNodes(){return this._apollo.query({query:E,errorPolicy:"all"}).pipe((0,u.U)(({data:e})=>e?e.findAllCategories:null),(0,s.b)(e=>{e&&this.dataChange.next(e.categoriesNode)}))}findAllWithOutChildCategories(){return this._apollo.query({query:A,errorPolicy:"all"}).pipe((0,u.U)(({data:e})=>e?e.findAllWithOutChildCategories:null),(0,s.b)(e=>{e&&this.store.dispatch((0,p.DG)({categories:e}))}))}createCategory(e){return this.data$.pipe((0,n.q)(1),(0,h.w)(o=>this._apollo.mutate({mutation:I,variables:{createCategoryInput:e},errorPolicy:"all"}).pipe((0,u.U)(({data:t})=>t?t.createCategory:null),(0,s.b)(t=>{if(t){const i=(0,d.cloneDeep)(o);if(t.category.parentId){for(const r of i)if(this.addChildren(r,t.category))break}else{for(let a=t.category.position;a<i.length;a++)i[a].item.position++;i.push({item:t.category,children:[]}),i.sort((a,C)=>a.item.position-C.item.position)}this.dataChange.next(i)}}))))}updateCategory(e){return this.data$.pipe((0,n.q)(1),(0,h.w)(o=>this._apollo.mutate({mutation:O,variables:{updateCategoryInput:e},errorPolicy:"all"}).pipe((0,u.U)(({data:t})=>t?t.updateCategory:null),(0,s.b)(t=>{if(t){const i=(0,d.cloneDeep)(o);this.updateChildren(i,t.category),this.dataChange.next(i)}}))))}updateCategoryStatus(e,o){return this.data$.pipe((0,n.q)(1),(0,h.w)(t=>this._apollo.mutate({mutation:U,variables:{updateEntityStatusInput:e},errorPolicy:"all"}).pipe((0,u.U)(({data:i})=>i?i.updateCategoryStatus:null),(0,s.b)(i=>{if(i){const r=(0,d.cloneDeep)(t);this.updateChildrenNode(r,Object.assign(Object.assign({},o),e)),this.dataChange.next(r)}}))))}updateCategoryImage(e,o){return this.data$.pipe((0,n.q)(1),(0,h.w)(t=>this._apollo.mutate({mutation:P,variables:{updateEntityImageInput:e},errorPolicy:"all"}).pipe((0,u.U)(({data:i})=>i?i.updateCategoryImage:null),(0,s.b)(i=>{if(i){const r=(0,d.cloneDeep)(t);this.updateChildrenNode(r,Object.assign(Object.assign({},o),e)),this.dataChange.next(r)}}))))}removeCategory(e){return this.data$.pipe((0,n.q)(1),(0,h.w)(o=>this._apollo.mutate({mutation:R,variables:{categoryId:e},errorPolicy:"all"}).pipe((0,u.U)(({data:t})=>t?t.removeCategory:null),(0,s.b)(t=>{if(t){const i=(0,d.cloneDeep)(o);let r=!1;for(const a of i)if(this.removeChildrenNode(a,e)){r=!0;break}if(!r)for(let a=0;a<i.length;a++)i[a].item.id===e&&i.splice(a,1);this.dataChange.next(i)}}))))}addChildren(e,o){if(e.item.id===o.parentId){const t={item:o,children:[]};for(let i=o.position;i<e.children.length;i++)e.children[i].item.position++;return e.children.push(t),e.children.sort((i,r)=>i.item.position-r.item.position),!0}for(const t of e.children)if(this.addChildren(t,o))return!0;return!1}addChildrenNode(e,o){if(e.item.id===o.item.parentId){for(let t=o.item.position;t<e.children.length;t++)e.children[t].item.position++;return e.children.push(o),e.children.sort((t,i)=>t.item.position-i.item.position),!0}for(const t of e.children)if(this.addChildrenNode(t,o))return!0;return!1}updateChildren(e,o){let t=null;for(const r of e)if(t=this.removeChildrenNode(r,o.id),t){t.item=o;break}let i=!1;if(t)for(const r of e)if(this.addChildrenNode(r,t)){i=!0;break}if(!i){for(let r=0;r<e.length;r++)e[r].item.id===o.id&&(t=e[r],t.item=o,e.splice(r,1));if(t)for(const r of e)if(this.addChildrenNode(r,t)){i=!0;break}if(!i){for(let r=o.position;r<e.length;r++)e[r].item.position++;e.push(t),e.sort((r,a)=>r.item.position-a.item.position)}}}updateChildrenNode(e,o){for(const t of e){if(t.item.id===o.id)return t.item=o,!0;if(this.updateChildrenNode(t.children,o))return!0}}removeChildrenNode(e,o){for(let t=0;t<e.children.length;t++){const i=e.children[t];if(i.item.id===o){const a=e.children[t];e.children.splice(t,1);for(let C=0;C<e.children.length;C++)e.children[C].item.position=C;return a}const r=this.removeChildrenNode(i,o);if(r)return r}return null}}return m.\u0275fac=function(e){return new(e||m)(v.LFG(c._M),v.LFG(S.yh))},m.\u0275prov=v.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);