"use strict";(self.webpackChunkharbor_portal=self.webpackChunkharbor_portal||[]).push([[795],{795:(y,u,o)=>{o.r(u),o.d(u,{OidcOnboardModule:()=>M});var c=o(6223),m=o(27),p=o(3924),r=o(5879),g=o(6306),h=o(8504),v=o(9862);let O=(()=>{var t;class i{constructor(e){this.http=e}oidcSave(e){return this.http.post("/c/oidc/onboard",e).pipe((0,g.K)(n=>(0,h._)(n)))}}return(t=i).\u0275fac=function(e){return new(e||t)(r.LFG(v.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),i})();var s=o(2787),l=o(8280),C=o(6814),Z=o(9515);function f(t,i){if(1&t){const a=r.EpF();r.TgZ(0,"div",20)(1,"div",21)(2,"div",22)(3,"div",23),r._UZ(4,"clr-icon",24),r.qZA(),r.TgZ(5,"span",25),r._uU(6),r.qZA()()(),r.TgZ(7,"button",26),r.NdJ("click",function(){r.CHM(a);const n=r.oxw();return r.KtG(n.emptyErrorMessage())}),r._UZ(8,"clr-icon",27),r.qZA()()}if(2&t){const a=r.oxw();r.xp6(6),r.Oqu(a.errorMessage)}}let U=(()=>{var t;class i{constructor(e,n,d){this.oidcOnboardService=e,this.router=n,this.route=d,this.errorMessage="",this.oidcUsername=new c.p4(""),this.errorOpen=!1}ngOnInit(){this.route.queryParams.subscribe(e=>{this.redirectUrl=e.redirect_url||"",this.oidcUsername.setValue(e.username||"")})}clickSaveBtn(){this.oidcOnboardService.oidcSave({username:this.oidcUsername.value}).subscribe(e=>{this.router.navigateByUrl(""===this.redirectUrl?m.ZB.HARBOR_DEFAULT:this.redirectUrl)},e=>{this.errorMessage=(0,p.Po)(e),this.errorOpen=!0})}emptyErrorMessage(){this.errorOpen=!1}backHarborPage(){this.router.navigate([m.ZB.HARBOR_DEFAULT])}}return(t=i).\u0275fac=function(e){return new(e||t)(r.Y36(O),r.Y36(s.F0),r.Y36(s.gz))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-oidc-onboard"]],decls:33,vars:18,consts:[[1,"modal"],["role","dialog",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"close",3,"click"],["shape","close"],[1,"modal-title","oidc-header-text"],["id","error-message"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"modal-body"],[1,"body-message"],[1,"clr-form","clr-form-horizontal"],[1,"clr-form-control"],["for","oidcUsername",1,"clr-control-label","required"],[1,"clr-control-container"],[1,"clr-input-wrapper"],["name","oidcUsername","type","text","pattern",'[^,"~#$%]+',"required","","id","oidcUsername","size","40",1,"clr-input",3,"formControl"],[1,"modal-footer"],["type","button","id","cancelButton",1,"btn","btn-outline",3,"click"],["id","saveButton","type","button",1,"btn","btn-primary",3,"disabled","click"],["role","alert",1,"alert","alert-danger"],[1,"alert-items"],[1,"alert-item","static"],[1,"alert-icon-wrapper"],["size","24","shape","exclamation-circle",1,"alert-icon"],[1,"alert-text"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true","size","16","shape","close"]],template:function(e,n){1&e&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),r.NdJ("click",function(){return n.backHarborPage()}),r._UZ(5,"clr-icon",5),r.qZA(),r.TgZ(6,"h3",6)(7,"span"),r._uU(8),r.ALo(9,"translate"),r.qZA(),r._uU(10,"\xa0 "),r.qZA()(),r.TgZ(11,"div",7),r.YNc(12,f,9,1,"div",8),r.qZA(),r.TgZ(13,"div",9)(14,"p",10),r._uU(15),r.ALo(16,"translate"),r.qZA()(),r._UZ(17,"br"),r.TgZ(18,"form",11)(19,"div",12)(20,"label",13),r._uU(21),r.ALo(22,"translate"),r.qZA(),r.TgZ(23,"div",14)(24,"div",15),r._UZ(25,"input",16),r.qZA()()()(),r.TgZ(26,"div",17)(27,"button",18),r.NdJ("click",function(){return n.backHarborPage()}),r._uU(28),r.ALo(29,"translate"),r.qZA(),r.TgZ(30,"button",19),r.NdJ("click",function(){return n.clickSaveBtn()}),r._uU(31),r.ALo(32,"translate"),r.qZA()()()()()),2&e&&(r.xp6(8),r.Oqu(r.lcZ(9,8,"CONFIG.OIDC.OIDC_SETNAME")),r.xp6(4),r.Q6J("ngIf",n.errorOpen),r.xp6(3),r.hij(" ",r.lcZ(16,10,"CONFIG.OIDC.OIDC_SETNAMECONTENT")," "),r.xp6(6),r.Oqu(r.lcZ(22,12,"CONFIG.OIDC.OIDC_USERNAME")),r.xp6(4),r.Q6J("formControl",n.oidcUsername),r.xp6(3),r.hij(" ",r.lcZ(29,14,"BUTTON.CANCEL")," "),r.xp6(2),r.Q6J("disabled",n.oidcUsername.invalid),r.xp6(1),r.hij(" ",r.lcZ(32,16,"BUTTON.SAVE")," "))},dependencies:[c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.c5,c.F,c.oH,l.I9z,l.qvL,l.VLi,l.MgK,C.O5,Z.X$],styles:[".modal[_ngcontent-%COMP%]{background-color:#505050}.modal[_ngcontent-%COMP%]   .body-message[_ngcontent-%COMP%]{margin-top:10px}.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{margin-right:.2rem}.oidc-header-text[_ngcontent-%COMP%]{color:#5e5e5e}.close-error[_ngcontent-%COMP%]{padding-right:0}"]}),i})();var A=o(4554);const T=[{path:"",component:U}];let M=(()=>{var t;class i{}return(t=i).\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({providers:[O],imports:[A.m,s.Bz.forChild(T)]}),i})()}}]);