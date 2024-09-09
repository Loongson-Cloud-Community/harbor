"use strict";(self.webpackChunkharbor_portal=self.webpackChunkharbor_portal||[]).push([[9546],{9546:(hn,_,s)=>{s.r(_),s.d(_,{AccountModule:()=>pn});var u=s(2787),b=s(4554),Z=s(3109),f=s(9221),d=s(27),n=s(5879),C=s(1575),N=s(6682),x=s(2930),U=s(5948),I=s(2141),g=s(6223),c=s(8280),m=s(6814),w=s(2300),y=s(7969),P=s(8488),v=s(5284),T=s(208),L=s(2824),M=s(9515);let G=(()=>{var i;class a{constructor(e,t){this.session=e,this.userService=t,this.opened=!1,this.staticBackdrop=!0,this.onGoing=!1,this.formValueChanged=!1,this.userCreation=new n.vpe}getNewUser(){return this.newUserForm.getData()}get inProgress(){return this.onGoing}get isValid(){return this.newUserForm.isValid&&null==this.error}formValueChange(e){e&&(this.formValueChanged=!0),null!=this.error&&(this.error=null),this.inlineAlert.close()}open(){this.newUserForm.reset(),this.formValueChanged=!1,this.error=null,this.onGoing=!1,this.inlineAlert.close(),this.modal.open()}close(){this.formValueChanged?this.newUserForm.isEmpty()?this.opened=!1:this.inlineAlert.showInlineConfirmation({message:"ALERT.FORM_CHANGE_CONFIRMATION"}):this.opened=!1}confirmCancel(e){this.opened=!1,this.modal.close()}create(){if(!this.isValid)return;let e=this.getNewUser();e&&(this.onGoing=!0,this.userService.addUser(e).subscribe(()=>{this.onGoing=!1,this.opened=!1,this.modal.close(),this.userCreation.emit(e)},t=>{this.onGoing=!1,this.error=t,this.inlineAlert.showInlineError(t)}))}}return(i=a).\u0275fac=function(e){return new(e||i)(n.Y36(C.m),n.Y36(L.K))},i.\u0275cmp=n.Xpm({type:i,selectors:[["sign-up"]],viewQuery:function(e,t){if(1&e&&(n.Gf(v.T,7),n.Gf(T.l,5),n.Gf(I.u_,5)),2&e){let r;n.iGM(r=n.CRH())&&(t.newUserForm=r.first),n.iGM(r=n.CRH())&&(t.inlineAlert=r.first),n.iGM(r=n.CRH())&&(t.modal=r.first)}},outputs:{userCreation:"userCreation"},decls:15,vars:14,consts:[[3,"clrModalOpen","clrModalStaticBackdrop","clrModalClosable","clrModalOpenChange"],[1,"modal-title"],[1,"modal-title",3,"confirmEvt"],[1,"modal-body","body-format"],["isSelfRegistration","true",3,"valueChange"],[1,"modal-footer"],[1,"spinner","spinner-inline","loading-top",3,"hidden"],["type","button","id","close-btn",1,"btn","btn-outline",3,"click"],["id","sign-up","type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(e,t){1&e&&(n.TgZ(0,"clr-modal",0),n.NdJ("clrModalOpenChange",function(l){return t.opened=l}),n.TgZ(1,"h3",1),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"inline-alert",2),n.NdJ("confirmEvt",function(l){return t.confirmCancel(l)}),n.qZA(),n.TgZ(5,"div",3)(6,"new-user-form",4),n.NdJ("valueChange",function(l){return t.formValueChange(l)}),n.qZA()(),n.TgZ(7,"div",5),n._UZ(8,"span",6),n.TgZ(9,"button",7),n.NdJ("click",function(){return t.close()}),n._uU(10),n.ALo(11,"translate"),n.qZA(),n.TgZ(12,"button",8),n.NdJ("click",function(){return t.create()}),n._uU(13),n.ALo(14,"translate"),n.qZA()()()),2&e&&(n.Q6J("clrModalOpen",t.opened)("clrModalStaticBackdrop",t.staticBackdrop)("clrModalClosable",!1),n.xp6(2),n.Oqu(n.lcZ(3,8,"SIGN_UP.TITLE")),n.xp6(6),n.Q6J("hidden",!1===t.inProgress),n.xp6(2),n.hij(" ",n.lcZ(11,10,"BUTTON.CANCEL")," "),n.xp6(2),n.Q6J("disabled",!t.isValid||t.inProgress),n.xp6(1),n.hij(" ",n.lcZ(14,12,"BUTTON.SIGN_UP")," "))},dependencies:[c.qAN,c.VLi,T.l,v.T,M.X$],styles:[".form-group-override[_ngcontent-%COMP%]{padding-left:170px!important}.form-group-label-override[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.sub-label-for-input[_ngcontent-%COMP%]{position:absolute;top:26px;font-size:10px;font-weight:400;line-height:12px;left:170px}.body-format[_ngcontent-%COMP%]{overflow-y:hidden}.loading-top[_ngcontent-%COMP%]{top:8px}"]}),a})();const k=["signInForm"],E=["signupDialog"],J=["forgotPwdDialog"];function B(i,a){if(1&i){const o=n.EpF();n.TgZ(0,"span",12),n.NdJ("click",function(){n.CHM(o);const t=n.oxw();return n.KtG(t.steps=1)}),n._UZ(1,"clr-icon",13),n.TgZ(2,"div",14),n._uU(3),n.ALo(4,"translate"),n.qZA()()}2&i&&(n.xp6(3),n.Oqu(n.lcZ(4,1,"SEARCH.BACK")))}const D=function(i){return{providerName:i}};function F(i,a){if(1&i&&(n.ynx(0),n._uU(1),n.ALo(2,"translate"),n.BQk()),2&i){const o=n.oxw(2);n.xp6(1),n.hij(" ",n.xi3(2,1,"BUTTON.LOG_IN_OIDC_WITH_PROVIDER_NAME",n.VKq(4,D,o.getOIDCProviderName()))," ")}}function R(i,a){1&i&&(n._uU(0),n.ALo(1,"translate")),2&i&&n.hij(" ",n.lcZ(1,1,"BUTTON.LOG_IN_OIDC")," ")}function Q(i,a){if(1&i){const o=n.EpF();n.ynx(0),n.TgZ(1,"a",15)(2,"button",16)(3,"span"),n.YNc(4,F,3,6,"ng-container",17),n.YNc(5,R,2,3,"ng-template",null,18,n.W1O),n.qZA()()(),n.TgZ(7,"div",19),n._UZ(8,"hr",20),n.TgZ(9,"h4",21)(10,"span"),n._uU(11),n.ALo(12,"translate"),n.qZA()(),n._UZ(13,"hr",20),n.qZA(),n.TgZ(14,"a",22),n.NdJ("click",function(){n.CHM(o);const t=n.oxw();return n.KtG(t.steps=2)}),n.TgZ(15,"button",23)(16,"span"),n._uU(17),n.ALo(18,"translate"),n.qZA()()(),n.BQk()}if(2&i){const o=n.MAs(6),e=n.oxw();n.xp6(1),n.MGl("href","/c/oidc/login?redirect_url=",e.redirectUrl,"",n.LSH),n.xp6(3),n.Q6J("ngIf",e.getOIDCProviderName())("ngIfElse",o),n.xp6(7),n.Oqu(n.lcZ(12,5,"SIGN_IN.OR")),n.xp6(6),n.Oqu(n.lcZ(18,7,"SIGN_IN.VIA_LOCAL_DB"))}}function H(i,a){if(1&i){const o=n.EpF();n.TgZ(0,"clr-icon",42),n.NdJ("click",function(){n.CHM(o);const t=n.oxw(2);return n.KtG(t.showPwd=!t.showPwd)}),n.qZA()}}function V(i,a){if(1&i){const o=n.EpF();n.TgZ(0,"clr-icon",43),n.NdJ("click",function(){n.CHM(o);const t=n.oxw(2);return n.KtG(t.showPwd=!t.showPwd)}),n.qZA()}}function Y(i,a){1&i&&(n.TgZ(0,"clr-control-error"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&i&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"TOOLTIP.SIGN_IN_PWD")," "))}function q(i,a){1&i&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&i&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"SIGN_IN.INVALID_MSG")))}function K(i,a){1&i&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&i&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"SIGN_IN.CORE_SERVICE_NOT_AVAILABLE")))}function j(i,a){if(1&i&&(n.TgZ(0,"div",44),n.YNc(1,q,3,3,"span",7),n.YNc(2,K,3,3,"span",7),n.qZA()),2&i){const o=n.oxw(2);n.xp6(1),n.Q6J("ngIf",o.isCoreServiceAvailable),n.xp6(1),n.Q6J("ngIf",!o.isCoreServiceAvailable)}}function z(i,a){if(1&i){const o=n.EpF();n.TgZ(0,"a",45),n.NdJ("click",function(){n.CHM(o);const t=n.oxw(2);return n.KtG(t.signUp())}),n._uU(1),n.ALo(2,"translate"),n.qZA()}2&i&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"BUTTON.SIGN_UP_LINK")))}function W(i,a){if(1&i){const o=n.EpF();n.ynx(0),n.TgZ(1,"clr-input-container",24)(2,"input",25,26),n.NdJ("ngModelChange",function(t){n.CHM(o);const r=n.oxw();return n.KtG(r.signInCredential.principal=t)}),n.ALo(4,"translate"),n.qZA(),n.TgZ(5,"clr-control-error"),n._uU(6),n.ALo(7,"translate"),n.qZA()(),n.TgZ(8,"div",27)(9,"div",28)(10,"div",29)(11,"input",30,31),n.NdJ("ngModelChange",function(t){n.CHM(o);const r=n.oxw();return n.KtG(r.signInCredential.password=t)}),n.ALo(13,"translate"),n.qZA(),n.YNc(14,H,1,0,"clr-icon",32),n.YNc(15,V,1,0,"clr-icon",33),n._UZ(16,"clr-icon",34),n.qZA(),n.YNc(17,Y,3,3,"clr-control-error",7),n.qZA()(),n.TgZ(18,"div",35)(19,"clr-checkbox-wrapper")(20,"input",36,37),n.NdJ("click",function(t){n.CHM(o);const r=n.oxw();return n.KtG(r.clickRememberMe(t))}),n.qZA(),n.TgZ(22,"label",38),n._uU(23),n.ALo(24,"translate"),n.qZA()()(),n.YNc(25,j,3,2,"div",39),n.TgZ(26,"button",40),n.NdJ("click",function(){n.CHM(o);const t=n.oxw();return n.KtG(t.signIn())}),n._uU(27),n.ALo(28,"translate"),n.qZA(),n.YNc(29,z,3,3,"a",41),n.BQk()}if(2&i){const o=n.MAs(12),e=n.oxw();n.xp6(2),n.s9C("placeholder",n.lcZ(4,17,"PLACEHOLDER.SIGN_IN_NAME")),n.Q6J("ngModel",e.signInCredential.principal),n.xp6(4),n.Oqu(n.lcZ(7,19,"TOOLTIP.SIGN_IN_USERNAME")),n.xp6(3),n.ekj("clr-error",o.invalid&&(o.dirty||o.touched)),n.xp6(2),n.s9C("placeholder",n.lcZ(13,21,"PLACEHOLDER.SIGN_IN_PWD")),n.Q6J("type",e.showPwd?"text":"password")("ngModel",e.signInCredential.password),n.xp6(3),n.Q6J("ngIf",!e.showPwd),n.xp6(1),n.Q6J("ngIf",e.showPwd),n.xp6(2),n.Q6J("ngIf",o.invalid&&(o.dirty||o.touched)),n.xp6(3),n.Q6J("checked",e.rememberMe),n.xp6(3),n.Oqu(n.lcZ(24,23,"SIGN_IN.REMEMBER")),n.xp6(2),n.Q6J("ngIf",e.isError),n.xp6(1),n.Q6J("disabled",e.isOnGoing||!e.isValid),n.xp6(1),n.hij(" ",n.lcZ(28,25,"BUTTON.LOG_IN")," "),n.xp6(2),n.Q6J("ngIf",e.selfSignUp)}}const X=function(i){return{"background-image":i}},$=function(i){return{"pt-1":i}},h="rem-username";let en=(()=>{var i;class a{constructor(e,t,r,l,dn,un,mn){this.router=e,this.session=t,this.route=r,this.appConfigService=l,this.cookie=dn,this.skinableConfig=un,this.userPermissionService=mn,this.showPwd=!1,this.redirectUrl="",this.rememberMe=!1,this.rememberedName="",this.signInStatus=0,this.signInCredential={principal:"",password:""},this.isCoreServiceAvailable=!0,this.steps=1,this.hasLoadedAppConfig=!1}ngOnInit(){let e=this.skinableConfig.getSkinConfig();e&&(e.loginBgImg&&(this.customLoginBgImg=e.loginBgImg),e.loginTitle&&(this.customAppTitle=e.loginTitle)),this.route.queryParams.subscribe(r=>{this.redirectUrl=r.redirect_url||"",""!==(r.sign_up||"")&&this.signUp()});let t=this.cookie.get(h);t=t?t.trim():"",t&&(this.signInCredential.principal=t,this.rememberMe=!0,this.rememberedName=t)}get appTitle(){return"APP_TITLE.VMW_HARBOR"}get isError(){return-1===this.signInStatus}get isOnGoing(){return 1===this.signInStatus}get isValid(){return this.currentForm.form.valid}get selfSignUp(){return this.appConfigService.getConfig()&&this.appConfigService.getConfig().auth_mode===d.Au.DB_AUTH&&this.appConfigService.getConfig().self_registration}get isOidcLoginMode(){return this.appConfigService.getConfig()&&this.appConfigService.getConfig().auth_mode===d.Au.OIDC_AUTH}getOIDCProviderName(){return this.appConfigService.getConfig()?.oidc_provider_name||null}clickRememberMe(e){e&&e.target&&(this.rememberMe=e.target.checked,this.rememberMe||(this.cookie.remove(h),this.rememberedName=""))}remeberMe(){if(this.rememberMe&&this.rememberedName!==this.signInCredential.principal){let e=864e6,r={path:"/",expires:new Date(Date.now()+e)};this.cookie.put(h,this.signInCredential.principal,r)}}handleError(e){this.signInStatus=-1,console.error("An error occurred when signing in:",e.status?e.status+":"+e.statusText:e)}formChanged(){this.currentForm!==this.signInForm&&(this.signInForm=this.currentForm,this.signInForm&&this.signInForm.valueChanges.subscribe(e=>{this.updateState()}))}handleUserCreation(e){e&&this.currentForm.setValue({login_username:e.username,login_password:""})}ngAfterViewChecked(){-1===this.signInStatus&&this.formChanged()}updateState(){-1===this.signInStatus&&(this.signInStatus=0)}signIn(){this.isValid?this.isOnGoing||(this.signInStatus=1,this.session.signIn(this.signInCredential).subscribe(()=>{this.userPermissionService.clearPermissionCache(),this.remeberMe(),!this.redirectUrl||this.redirectUrl.startsWith(d.ZB.EMBEDDED_SIGN_IN)?this.router.navigateByUrl(d.ZB.HARBOR_DEFAULT):this.router.navigateByUrl(this.redirectUrl),this.isCoreServiceAvailable=!0,this.appConfigService.load().subscribe()},e=>{if(this.isOidcLoginMode&&e&&403===e.status)try{let t="";return t=e.error&&e.error.redirect_location?e.error.redirect_location:JSON.parse(e.error).redirect_location,void(window.location.href=t)}catch{}e&&/5[0-9][0-9]/.test(e.status)&&(this.isCoreServiceAvailable=!1),this.handleError(e)})):this.signInStatus=-1}signUp(){this.signUpDialog.open()}forgotPassword(){this.forgotPwdDialog.open()}openModal(e){e.modalName===Z.D.ABOUT&&this.aboutDialog.open()}}return(i=a).\u0275fac=function(e){return new(e||i)(n.Y36(u.F0),n.Y36(C.m),n.Y36(u.gz),n.Y36(N._),n.Y36(x.N_),n.Y36(U.s),n.Y36(I.Hx))},i.\u0275cmp=n.Xpm({type:i,selectors:[["sign-in"]],viewQuery:function(e,t){if(1&e&&(n.Gf(k,7),n.Gf(E,5),n.Gf(J,5),n.Gf(f.f,5)),2&e){let r;n.iGM(r=n.CRH())&&(t.currentForm=r.first),n.iGM(r=n.CRH())&&(t.signUpDialog=r.first),n.iGM(r=n.CRH())&&(t.forgotPwdDialog=r.first),n.iGM(r=n.CRH())&&(t.aboutDialog=r.first)}},inputs:{signInCredential:"signInCredential"},decls:21,vars:15,consts:[[3,"showDialogModalAction"],[1,"login-wrapper",3,"ngStyle"],[1,"login"],["signInForm","ngForm"],["class","back-icon",3,"click",4,"ngIf"],[1,"title"],[1,"login-group"],[4,"ngIf"],[1,"more-info",3,"ngClass"],["rel","noopener noreferrer","href","https://github.com/goharbor/harbor","target","_blank"],[3,"userCreation"],["signupDialog",""],[1,"back-icon",3,"click"],["shape","angle left"],[1,"margin-left-3"],[3,"href"],["type","button","id","log_oidc",1,"btn","btn-primary","btn-block","oidc-login-button"],[4,"ngIf","ngIfElse"],["ProviderName",""],[1,"divider-container","mt-1","mb-1"],["size","1","noshade","",1,"divider"],[1,"m-0"],["href","javascript:void(0)",3,"click"],["type","button","id","login-db",1,"btn","btn-primary","btn-block","mt-0"],[1,"mt-3"],["clrInput","","type","text","required","","name","login_username","id","login_username",1,"username",3,"ngModel","placeholder","ngModelChange"],["userNameInput","ngModel"],[1,"clr-form-control"],[1,"clr-control-container"],[1,"clr-input-wrapper"],["required","","name","login_password","id","login_password",1,"clr-input","pwd-input",3,"type","ngModel","placeholder","ngModelChange"],["passwordInput","ngModel"],["shape","eye","class","pw-eye",3,"click",4,"ngIf"],["shape","eye-hide","class","pw-eye",3,"click",4,"ngIf"],["shape","exclamation-circle",1,"clr-validate-icon"],[1,"display-flex"],["clrCheckbox","","type","checkbox","id","rememberme",3,"checked","click"],["rememberMeBox",""],["for","rememberme",1,"reset-label"],["class","error active",4,"ngIf"],["type","submit","id","log_in",1,"btn","btn-primary","mt-2",3,"disabled","click"],["href","javascript:void(0)","class","signup",3,"click",4,"ngIf"],["shape","eye",1,"pw-eye",3,"click"],["shape","eye-hide",1,"pw-eye",3,"click"],[1,"error","active"],["href","javascript:void(0)",1,"signup",3,"click"]],template:function(e,t){1&e&&(n.TgZ(0,"clr-main-container"),n._UZ(1,"app-app-level-alerts"),n.TgZ(2,"navigator",0),n.NdJ("showDialogModalAction",function(l){return t.openModal(l)}),n.qZA(),n._UZ(3,"search-result"),n.TgZ(4,"div",1)(5,"form",2,3),n.YNc(7,B,5,3,"span",4),n.TgZ(8,"label",5),n._uU(9),n.ALo(10,"translate"),n.qZA(),n.TgZ(11,"div",6),n.YNc(12,Q,19,9,"ng-container",7),n.YNc(13,W,30,27,"ng-container",7),n.TgZ(14,"div",8)(15,"a",9),n._uU(16),n.ALo(17,"translate"),n.qZA()()()()()(),n.TgZ(18,"sign-up",10,11),n.NdJ("userCreation",function(l){return t.handleUserCreation(l)}),n.qZA(),n._UZ(20,"about-dialog")),2&e&&(n.xp6(4),n.Q6J("ngStyle",n.VKq(11,X,t.customLoginBgImg?"url(/images/"+t.customLoginBgImg+")":"")),n.xp6(3),n.Q6J("ngIf",t.isOidcLoginMode&&2===t.steps),n.xp6(2),n.hij(" ",t.customAppTitle?t.customAppTitle:n.lcZ(10,7,t.appTitle)," "),n.xp6(3),n.Q6J("ngIf",t.isOidcLoginMode&&1===t.steps),n.xp6(1),n.Q6J("ngIf",!t.isOidcLoginMode&&1===t.steps||t.isOidcLoginMode&&2===t.steps),n.xp6(1),n.Q6J("ngClass",n.VKq(13,$,!t.isOidcLoginMode&&1===t.steps||t.isOidcLoginMode&&2===t.steps)),n.xp6(2),n.Oqu(n.lcZ(17,9,"BUTTON.MORE_INFO")))},dependencies:[g._Y,g.Fj,g.JJ,g.JL,g.Q7,g.On,g.F,c.qvL,c.MgK,c.VqA,c.KKC,c.PEh,c.xRP,c.G55,c.QoI,c.zuD,m.mk,m.O5,m.PC,w.S,y.B,f.f,P.y,G,M.X$],styles:[".progress-size-small[_ngcontent-%COMP%]{height:.5em!important}.visibility-hidden[_ngcontent-%COMP%]{visibility:hidden}.forgot-password-link[_ngcontent-%COMP%]{position:relative;line-height:36px;font-size:14px;float:right;top:-5px}.tm-font[_ngcontent-%COMP%]{font-size:14px!important;position:relative;top:-9px}.bg[_ngcontent-%COMP%]{position:absolute;top:60px;right:0;width:100%;height:100%;background-size:cover}.login-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap}.login-wrapper[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{background:transparent}.reset-label[_ngcontent-%COMP%]{font-size:inherit;color:inherit;font-family:inherit}.display-flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.pw-eye[_ngcontent-%COMP%]{margin-left:-20px;margin-right:8px;cursor:pointer}.pwd-input[_ngcontent-%COMP%]{padding-right:26px}.divider-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.divider[_ngcontent-%COMP%]{margin:0;width:8.5rem}.login[_ngcontent-%COMP%]{padding-bottom:180px}.back-icon[_ngcontent-%COMP%]{position:absolute;top:1rem;display:flex;align-items:center;color:#007cbb;font-size:16px;cursor:pointer}.margin-left-3[_ngcontent-%COMP%]{margin-left:3px}.title[_ngcontent-%COMP%]{position:absolute;top:10rem}.login-group[_ngcontent-%COMP%]{width:70%;position:absolute;top:10rem}.more-info[_ngcontent-%COMP%]{text-align:right;padding-top:2rem}.oidc-login-button[_ngcontent-%COMP%]{text-transform:unset!important}"]}),a})();var tn=s(9829),on=s(7398),rn=s(6306),sn=s(8504),O=s(1691),an=s(9862);const ln=O.S$+"/repositories/top";let cn=(()=>{var i;class a{constructor(e){this.http=e}getTopRepos(){return this.http.get(ln,O.EX).pipe((0,on.U)(e=>e),(0,rn.K)(e=>(0,sn._)(e)))}}return(i=a).\u0275fac=function(e){return new(e||i)(n.LFG(an.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac}),a})();const gn=[{path:"sign-in",canActivate:[tn.$],component:en}];let pn=(()=>{var i;class a{}return(i=a).\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({providers:[cn],imports:[u.Bz.forChild(gn),b.m]}),a})()}}]);