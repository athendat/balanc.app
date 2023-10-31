"use strict";(self.webpackChunkatherp=self.webpackChunkatherp||[]).push([[732],{86428:(_,y,t)=>{t.d(y,{B:()=>n});const n=(0,t(85094).P1)(a=>a.pagination,a=>a.pagination)},84271:(_,y,t)=>{t.d(y,{HB:()=>A,Q:()=>f,ci:()=>P});var p=t(62843),s=t(70262),n=t(22594),a=t(5e3),l=t(91172),v=t(35357),g=t(85094);let f=(()=>{class r{constructor(i,m,u){this._employeesService=i,this._router=m,this.store=u,this.store.select(n.Qs).subscribe(E=>{this.merchant=E})}resolve(i,m){return this.merchant?this._employeesService.findAllEmployees(this.merchant.id).pipe((0,s.K)(u=>this._router.navigateByUrl("/desktop"))):null}}return r.\u0275fac=function(i){return new(i||r)(a.LFG(l.M),a.LFG(v.F0),a.LFG(g.yh))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),P=(()=>{class r{constructor(i,m){this._employeesService=i,this._router=m}resolve(i,m){const u=i.params.employeeId;return"new"===u?null:this._employeesService.findEmployeeById(u).pipe((0,s.K)(E=>{const c=m.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(c),(0,p._)(E)}))}}return r.\u0275fac=function(i){return new(i||r)(a.LFG(l.M),a.LFG(v.F0))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),A=(()=>{class r{constructor(i,m,u){this._employeesService=i,this._router=m,this.store=u,this.store.select(n.Qs).subscribe(E=>{this.merchant=E})}resolve(i,m){return this.merchant?this._employeesService.findAllActiveEmployees(this.merchant.id).pipe((0,s.K)(u=>this._router.navigateByUrl("/desktop"))):null}}return r.\u0275fac=function(i){return new(i||r)(a.LFG(l.M),a.LFG(v.F0),a.LFG(g.yh))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},8035:(_,y,t)=>{t.d(y,{hf:()=>n,ri:()=>a});var p=t(85094);const s=l=>l.employees,n=(0,p.P1)(s,l=>l.employee),a=(0,p.P1)(s,l=>l.employees)},91172:(_,y,t)=>{t.d(y,{M:()=>E});var p=t(54004),s=t(18505),n=t(86954),a=t(75714),l=t(33921);const v=l.Ps`
    mutation CreateEmployee($createEmployeeInput: CreateEmployeeInput!) {
        createEmployee(createEmployeeInput: $createEmployeeInput) {
            ok,
            message,

            employee {
                id,
                merchantId,
                code,
                departmentId,
                chargeId,
            }
        }
    }
`,g=l.Ps`
    query FindAllEmployees($merchantId: String!, $page: Int, $size: Int! $sort: String, $order: Order, $search: String ) {
        findAllEmployees(merchantId: $merchantId, page: $page, size: $size, sort: $sort, order: $order, search: $search ) {
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

            employees {
                id,
                name,
                lastname1,
                lastname2,
                fullname,
                code,
                active,
                imageUrl,

                departmentId,
                department {
                    id,
                    name
                },

                chargeId,
                charge {
                    id,
                    name
                }

                emails {
                    email
                },
                phoneNumbers {
                    stateCode,
                    phoneNumber
                },

                bankAccounts {
                    no,
                    currency,
                },

            }
        }
    }
`,f=l.Ps`
    query FindAllActiveEmployees($merchantId: String!) {
        findAllActiveEmployees(merchantId: $merchantId) {
            id,
            name,
            lastname1,
            lastname2
        }
    }
`,P=l.Ps`
    query FindEmployeeById($employeeId: String!) {
        findEmployeeById(id: $employeeId ) {
            ok,
            message,

            employee {
                id,
                merchantId,

                name,
                lastname1,
                lastname2,
                fullname,
                gender,
                idNumber,

                emails {
                    email,
                    label
                },
                phoneNumbers {
                    stateCode,
                    phoneNumber,
                    label
                },

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


                merchant {
                    id,
                    name
                },

                charge {
                    id,
                    name
                },

                address,
                country,
                state,
                city,
                zip,

                dateOfJoining,
                typeOfContract,
                contractEndDate,
                contractTime,

                departmentId,
                chargeId,
                scholarship,

                salaryFreq,
                salaryMethod,
                salaryLevel,
                imageUrl,
            }
        }
    }
`,A=l.Ps`
    mutation UpdateEmployee($updateEmployeeInput: UpdateEmployeeInput!) {
        updateEmployee(updateEmployeeInput: $updateEmployeeInput) {
            ok,
            message,

            employee {
                id,
                merchantId,
                code,
                departmentId,
                chargeId,
            }
        }
    }
`,r=l.Ps`
    mutation UpdateEmployeeStatus($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateEmployeeStatus(updateEntityStatusInput: $updateEntityStatusInput) {
            ok,
            message
        }
    }
`,d=l.Ps`
    mutation UpdateEmployeeImage($updateEntityImageInput: UpdateEntityImageInput!) {
        updateEmployeeImage(updateEntityImageInput: $updateEntityImageInput) {
            ok,
            message
        }
    }
`,i=l.Ps`
    mutation RemoveEmployee($employeeId: String!) {
        removeEmployee(id: $employeeId) {
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

            employees {
                id,

                code,

                departmentId,
                department {
                    id,
                    name
                },

                chargeId,
                charge {
                    id,
                    name
                }

            }
        }
    }
`;var m=t(5e3),u=t(85094);let E=(()=>{class c{constructor(o,e){this.apolloProvider=o,this.store=e,this._apollo=this.apolloProvider.use("BALANC")}createEmployee(o){return this._apollo.mutate({mutation:v,variables:{createEmployeeInput:o},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.createEmployee:null),(0,s.b)(e=>{e&&(this.store.dispatch((0,n.r8)({employee:e.employee})),this.store.dispatch((0,n.Y6)({employee:e.employee})))}))}findAllEmployees(o,e=0,M=10,L="name",U="asc",O=null,h=!1){return this._apollo.query({query:g,variables:{merchantId:o,page:e,size:M,sort:L,order:U,search:O},errorPolicy:"all"}).pipe((0,p.U)(({data:I})=>I?I.findAllEmployees:null),(0,s.b)(I=>{I&&(this.store.dispatch(h?(0,n.uO)({employees:I.employees}):(0,n.Jq)({employees:I.employees})),this.store.dispatch((0,a.Jr)({pagination:I.pagination})))}))}findAllActiveEmployees(o){return this._apollo.query({query:f,variables:{merchantId:o},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.findAllActiveEmployees:null),(0,s.b)(e=>{e&&this.store.dispatch((0,n.Jq)({employees:e}))}))}findEmployeeById(o){return this._apollo.query({query:P,variables:{employeeId:o},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.findEmployeeById:null),(0,s.b)(e=>{e&&this.store.dispatch((0,n.Y6)({employee:e.employee}))}))}updateEmployee(o){return this._apollo.mutate({mutation:A,variables:{updateEmployeeInput:o},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.updateEmployee:null),(0,s.b)(e=>{e&&(this.store.dispatch((0,n.HG)({employee:e.employee})),this.store.dispatch((0,n.Y6)({employee:e.employee})))}))}updateEmployeeStatus(o){return this._apollo.mutate({mutation:r,variables:{updateEntityStatusInput:o},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.updateEmployeeStatus:null),(0,s.b)(e=>{e&&this.store.dispatch((0,n.F8)(o))}))}updateEmployeeImage(o){return this._apollo.mutate({mutation:d,variables:{updateEntityImageInput:o},errorPolicy:"all"}).pipe((0,p.U)(({data:e})=>e?e.updateEmployeeImage:null),(0,s.b)(e=>{e&&this.store.dispatch((0,n.E4)(o))}))}removeEmployee(o,e=0,M=10,L="name",U="desc",O=null){return this._apollo.mutate({mutation:i,variables:{employeeId:o,page:e,size:M,sort:L,order:U,search:O},errorPolicy:"all"}).pipe((0,p.U)(({data:h})=>h?h.removeEmployee:null),(0,s.b)(h=>{h&&(this.store.dispatch((0,n.jw)({id:o})),this.store.dispatch((0,a.Jr)({pagination:h.pagination})))}))}}return c.\u0275fac=function(o){return new(o||c)(m.LFG(l._M),m.LFG(u.yh))},c.\u0275prov=m.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);