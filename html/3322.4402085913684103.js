"use strict";(self.webpackChunkharbor_portal=self.webpackChunkharbor_portal||[]).push([[3322],{3322:(ve,f,a)=>{a.r(f),a.d(f,{ProjectRobotAccountModule:()=>Ee});var C=a(2787),D=a(4554),r=a(8280),A=a(3620),S=a(3997),E=a(4664),b=a(4716),M=a(7398),Y=a(6306),Z=a(9315),y=a(2096),m=a(2141),p=a(8245),h=a(1691),x=a(9265),P=a(927),J=a(9862),d=a(6126),e=a(5879),z=a(2181),q=a(8645),N=a(208),T=a(3924),O=a(9576),v=a(7229),I=a(3419),U=a(7546),u=a(6223),_=a(6814),j=a(625),R=a(9515),w=a(4410);const Q=["robotBasicForm"],W=["wizard"];function F(n,l){1&n&&(e.TgZ(0,"h3",36),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"SYSTEM_ROBOT.CREATE_PROJECT_ROBOT")," "))}function G(n,l){1&n&&(e.TgZ(0,"h3",36),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"SYSTEM_ROBOT.EDIT_PROJECT_ROBOT")," "))}function H(n,l){1&n&&(e.TgZ(0,"p",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"SYSTEM_ROBOT.CREATE_PROJECT_ROBOT_SUMMARY")," "))}function k(n,l){1&n&&(e.TgZ(0,"p",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"SYSTEM_ROBOT.EDIT_PROJECT_ROBOT_SUMMARY")," "))}function K(n,l){1&n&&(e._uU(0),e.ALo(1,"translate")),2&n&&e.Oqu(e.lcZ(1,1,"ROBOT_ACCOUNT.BASIC_INFO"))}function $(n,l){1&n&&(e.TgZ(0,"clr-tooltip-content",38)(1,"span"),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&n&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"SYSTEM_ROBOT.FINAL_PROJECT_NAME_TIP")))}function V(n,l){1&n&&(e.TgZ(0,"clr-tooltip"),e._UZ(1,"clr-icon",24),e.YNc(2,$,4,3,"clr-tooltip-content",25),e.qZA())}function X(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"ROBOT_ACCOUNT.ACCOUNT_EXISTING")))}function ee(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"SYSTEM_ROBOT.NAME_TOOLTIP")))}function te(n,l){if(1&n&&(e.TgZ(0,"clr-control-error"),e.YNc(1,X,3,3,"span",13),e.YNc(2,ee,3,3,"span",13),e.qZA()),2&n){const s=e.oxw(),o=e.MAs(32);e.xp6(1),e.Q6J("ngIf",!((o.dirty||o.touched)&&o.invalid)&&s.isNameExisting),e.xp6(1),e.Q6J("ngIf",(o.dirty||o.touched)&&o.invalid)}}function oe(n,l){1&n&&(e.TgZ(0,"clr-tooltip-content",38)(1,"span"),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&n&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"SYSTEM_ROBOT.EXPIRATION_TIME_EXPLAIN")))}function ne(n,l){1&n&&e._UZ(0,"clr-icon",41)}const ie=function(n){return{showWarning:n}};function se(n,l){if(1&n&&(e.TgZ(0,"clr-control-helper")(1,"span",39),e.YNc(2,ne,1,0,"clr-icon",40),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e._uU(6,": "),e.TgZ(7,"span"),e._uU(8),e.ALo(9,"harborDatetime"),e.qZA()()()),2&n){const s=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(9,ie,s.shouldShowWarning())),e.xp6(1),e.Q6J("ngIf",s.shouldShowWarning()),e.xp6(2),e.Oqu(e.lcZ(5,4,"SYSTEM_ROBOT.EXPIRES_AT")),e.xp6(4),e.Oqu(e.xi3(9,6,s.calculateExpiresAt(),"short"))}}function re(n,l){1&n&&(e.TgZ(0,"clr-control-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"SYSTEM_ROBOT.EXPIRATION_REQUIRED")," "))}function ae(n,l){1&n&&(e._uU(0),e.ALo(1,"translate")),2&n&&e.Oqu(e.lcZ(1,1,"ROBOT_ACCOUNT.SELECT_PERMISSIONS"))}const ce=function(){return{standalone:!0}};let L=(()=>{var n;class l{constructor(o,t,i){this.robotService=o,this.msgHandler=t,this.operationService=i,this.isEditMode=!1,this.addSuccess=new e.vpe,this.addRobotOpened=!1,this.robot=(0,h.d9)(p.ye),this.expirationType=p.I1.DAYS,this.isNameExisting=!1,this.loading=!1,this.checkNameOnGoing=!1,this.saveBtnState=r.xp5.DEFAULT,this._nameSubject=new q.x,this.PermissionSelectPanelModes=O.L}ngOnInit(){this.subscribeName()}ngOnDestroy(){this._nameSubscription&&(this._nameSubscription.unsubscribe(),this._nameSubscription=null)}subscribeName(){this._nameSubscription||(this._nameSubscription=this._nameSubject.pipe((0,S.x)(),(0,z.h)(o=>(!this.isEditMode||!this.originalRobotForEdit||this.originalRobotForEdit.name!==o)&&o?.length>0),(0,M.U)(o=>(this.checkNameOnGoing=!!o,o)),(0,A.b)(500),(0,E.w)(o=>(this.isNameExisting=!1,this.checkNameOnGoing=!0,this.robotService.ListRobot({q:encodeURIComponent(`Level=${p.sC.PROJECT},ProjectID=${this.projectId},name=${this.projectName}+${o}`)}).pipe((0,b.x)(()=>this.checkNameOnGoing=!1))))).subscribe(o=>{o&&o.length>0&&(this.isNameExisting=!0)}))}isExpirationInvalid(){return this.robot.duration<-1}inputExpiration(){this.expirationType=-1==+this.robot.duration?p.I1.NEVER:p.I1.DAYS}changeExpirationType(){this.expirationType===p.I1.DAYS&&(this.robot.duration=null),this.expirationType===p.I1.NEVER&&(this.robot.duration=-1)}inputName(){this._nameSubject.next(this.robot.name)}cancel(){this.wizard.reset(),this.reset(),this.addRobotOpened=!1}reset(){this.open(!1),this.robot=(0,h.d9)(p.ye),this.robotBasicForm.reset(),this.expirationType=p.I1.DAYS}resetForEdit(o){this.open(!0),this.originalRobotForEdit=(0,h.d9)(o),this.robot=(0,h.d9)(o),this.expirationType=-1===o.duration?p.I1.NEVER:p.I1.DAYS,this.robotBasicForm.reset({name:this.robot.name,expiration:this.robot.duration,description:this.robot.description})}open(o){this.isEditMode=o,this.addRobotOpened=!0,this.inlineAlertComponent.close(),this.isNameExisting=!1,this._nameSubject.next("")}disabled(){return this.isEditMode?!this.canEdit():!this.canAdd()}canAdd(){return this.robot?.permissions[0]?.access?.length>0&&!this.robotBasicForm.invalid}canEdit(){return!(!this.canAdd()||this.robot.duration==this.originalRobotForEdit.duration&&this.robot.description==this.originalRobotForEdit.description&&(0,h.eD)(this.robot.permissions[0].access,this.originalRobotForEdit.permissions[0].access))}save(){const o=(0,h.d9)(this.robot);if(o.disable=!1,o.level=p.sC.PROJECT,o.duration=+this.robot.duration,o.permissions[0].kind=p.sC.PROJECT,o.permissions[0].namespace=this.projectName,(0,p.Ji)(o.permissions[0].access))this.inlineAlertComponent.showInlineError("SYSTEM_ROBOT.PUSH_PERMISSION_TOOLTIP");else if(this.saveBtnState=r.xp5.LOADING,this.isEditMode){o.disable=this.robot.disable;const t=new d.gB;t.name="SYSTEM_ROBOT.UPDATE_ROBOT",t.data.id=o.id,t.state=d.yb.progressing,t.data.name=o.name,this.operationService.publishInfo(t),this.robotService.UpdateRobot({robotId:this.originalRobotForEdit.id,robot:o}).subscribe(i=>{this.saveBtnState=r.xp5.SUCCESS,this.addSuccess.emit(null),this.cancel(),(0,d.hm)(t,d.yb.success),this.msgHandler.showSuccess("SYSTEM_ROBOT.UPDATE_ROBOT_SUCCESSFULLY")},i=>{this.saveBtnState=r.xp5.ERROR,(0,d.hm)(t,d.yb.failure,(0,T.Po)(i)),this.inlineAlertComponent.showInlineError(i)})}else{const t=new d.gB;t.name="SYSTEM_ROBOT.ADD_ROBOT",t.data.id=o.id,t.state=d.yb.progressing,t.data.name=`${this.projectName}+${o.name}`,this.operationService.publishInfo(t),this.robotService.CreateRobot({robot:o}).subscribe(i=>{this.saveBtnState=r.xp5.SUCCESS,this.saveBtnState=r.xp5.SUCCESS,this.addSuccess.emit(i),this.cancel(),(0,d.hm)(t,d.yb.success)},i=>{this.saveBtnState=r.xp5.ERROR,this.inlineAlertComponent.showInlineError(i),(0,d.hm)(t,d.yb.failure,(0,T.Po)(i))})}}calculateExpiresAt(){return this.robot&&this.robot.creation_time&&this.robot.duration>0?new Date(new Date(this.robot.creation_time).getTime()+864e5*this.robot.duration):null}shouldShowWarning(){return new Date>=this.calculateExpiresAt()}clrWizardPageOnLoad(){this.inlineAlertComponent.close()}}return(n=l).\u0275fac=function(o){return new(o||n)(e.Y36(v.b),e.Y36(I.d),e.Y36(U.f9))},n.\u0275cmp=e.Xpm({type:n,selectors:[["add-robot"]],viewQuery:function(o,t){if(1&o&&(e.Gf(N.l,5),e.Gf(Q,7),e.Gf(W,5)),2&o){let i;e.iGM(i=e.CRH())&&(t.inlineAlertComponent=i.first),e.iGM(i=e.CRH())&&(t.robotBasicForm=i.first),e.iGM(i=e.CRH())&&(t.wizard=i.first)}},inputs:{projectId:"projectId",projectName:"projectName",robotMetadata:"robotMetadata"},outputs:{addSuccess:"addSuccess"},decls:70,vars:60,consts:[[3,"clrWizardOpen","clrWizardSize","clrWizardOpenChange","clrWizardOnCancel"],["wizard",""],["class","modal-title",4,"ngIf"],["class","mt-0",4,"ngIf"],[3,"type"],[3,"clrLoading","type"],[3,"clrWizardPageNextDisabled"],["clrPageTitle",""],[1,"clr-form","clr-form-horizontal","mt-1"],["robotBasicForm","ngForm"],[1,"form-block"],[1,"clr-form-control"],["for","name",1,"clr-control-label","required"],[4,"ngIf"],[1,"clr-control-container"],[1,"clr-input-wrapper"],["type","text","id","name","required","","pattern","^[a-z0-9]+(?:[._-][a-z0-9]+)*$","maxLengthExt","255","autocomplete","off","size","30","name","name",1,"clr-input","input-width",3,"disabled","ngModel","ngModelChange","keyup"],["name","ngModel"],["shape","exclamation-circle",1,"clr-validate-icon"],[1,"spinner","spinner-inline",3,"hidden"],[1,"mt-2"],["clrTextarea","","type","text","id","description","name","description",1,"input-width",3,"ngModel","ngModelChange"],[1,"clr-form-control","mt-2"],[1,"clr-control-label","required"],["clrTooltipTrigger","","shape","info-circle","size","24"],["clrPosition","top-right","clrSize","lg",4,"clrIfOpen"],[1,"input-width","flex"],[1,"clr-select-wrapper"],["id","expiration-type",1,"clr-select",3,"ngModelOptions","ngModel","change","ngModelChange"],["value","days"],["value","never"],[1,"clr-input-wrapper","expiration"],["name","expiration","type","text","autocomplete","off","required","","pattern","^[\\-1-9]{1}[0-9]*$","id","robotTokenExpiration","size","20",1,"clr-input",3,"ngModel","input","ngModelChange"],["expiration","ngModel"],[3,"clrWizardPagePreventDefaultNext","clrWizardPageNextDisabled","clrWizardPageOnLoad","clrWizardPageOnCommit"],[3,"mode","permissionsModel","candidatePermissions","permissionsModelChange"],[1,"modal-title"],[1,"mt-0"],["clrPosition","top-right","clrSize","lg"],[3,"ngClass"],["class","alert-icon","shape","exclamation-triangle",4,"ngIf"],["shape","exclamation-triangle",1,"alert-icon"]],template:function(o,t){if(1&o&&(e.TgZ(0,"clr-wizard",0,1),e.NdJ("clrWizardOpenChange",function(c){return t.addRobotOpened=c})("clrWizardOnCancel",function(){return t.cancel()}),e.TgZ(2,"clr-wizard-title"),e.YNc(3,F,3,3,"h3",2),e.YNc(4,G,3,3,"h3",2),e.YNc(5,H,3,3,"p",3),e.YNc(6,k,3,3,"p",3),e.qZA(),e.TgZ(7,"clr-wizard-button",4),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"clr-wizard-button",4),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"clr-wizard-button",4),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"clr-wizard-button",5),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"clr-wizard-page",6),e.YNc(20,K,2,3,"ng-template",7),e.TgZ(21,"form",8,9)(23,"section",10)(24,"div",11)(25,"label",12),e._uU(26),e.ALo(27,"translate"),e.YNc(28,V,3,0,"clr-tooltip",13),e.qZA(),e.TgZ(29,"div",14)(30,"div",15)(31,"input",16,17),e.NdJ("ngModelChange",function(c){return t.robot.name=c})("keyup",function(){return t.inputName()}),e.qZA(),e._UZ(33,"clr-icon",18)(34,"span",19),e.qZA(),e.YNc(35,te,3,2,"clr-control-error",13),e.qZA()(),e.TgZ(36,"clr-textarea-container",20)(37,"label"),e._uU(38),e.ALo(39,"translate"),e.qZA(),e.TgZ(40,"textarea",21),e.NdJ("ngModelChange",function(c){return t.robot.description=c}),e.qZA()(),e.TgZ(41,"div",22)(42,"label",23),e._uU(43),e.ALo(44,"translate"),e.TgZ(45,"clr-tooltip"),e._UZ(46,"clr-icon",24),e.YNc(47,oe,4,3,"clr-tooltip-content",25),e.qZA()(),e.TgZ(48,"div",14)(49,"div",26)(50,"div",27)(51,"select",28),e.NdJ("change",function(){return t.changeExpirationType()})("ngModelChange",function(c){return t.expirationType=c}),e.TgZ(52,"option",29),e._uU(53),e.ALo(54,"translate"),e.qZA(),e.TgZ(55,"option",30),e._uU(56),e.ALo(57,"translate"),e.qZA()()(),e.TgZ(58,"div",31)(59,"input",32,33),e.NdJ("input",function(){return t.inputExpiration()})("ngModelChange",function(c){return t.robot.duration=c}),e.qZA(),e._UZ(61,"clr-icon",18),e.qZA()(),e.YNc(62,se,10,11,"clr-control-helper",13),e.YNc(63,re,3,3,"clr-control-error",13),e.qZA()()()()(),e.TgZ(64,"clr-wizard-page",34),e.NdJ("clrWizardPageOnLoad",function(){return t.clrWizardPageOnLoad()})("clrWizardPageOnCommit",function(){return t.save()}),e.YNc(65,ae,2,3,"ng-template",7),e._UZ(66,"inline-alert"),e.TgZ(67,"form",8)(68,"section",10)(69,"robot-permissions-panel",35),e.NdJ("permissionsModelChange",function(c){return t.robot.permissions[0].access=c}),e.qZA()()()()()),2&o){const i=e.MAs(22),c=e.MAs(32),g=e.MAs(60);e.Q6J("clrWizardOpen",t.addRobotOpened)("clrWizardSize","lg"),e.xp6(3),e.Q6J("ngIf",!t.isEditMode),e.xp6(1),e.Q6J("ngIf",t.isEditMode),e.xp6(1),e.Q6J("ngIf",!t.isEditMode),e.xp6(1),e.Q6J("ngIf",t.isEditMode),e.xp6(1),e.Q6J("type","cancel"),e.xp6(1),e.Oqu(e.lcZ(9,41,"BUTTON.CANCEL")),e.xp6(2),e.Q6J("type","previous"),e.xp6(1),e.Oqu(e.lcZ(12,43,"ROBOT_ACCOUNT.BACK")),e.xp6(2),e.Q6J("type","next"),e.xp6(1),e.Oqu(e.lcZ(15,45,"ROBOT_ACCOUNT.NEXT")),e.xp6(2),e.Q6J("clrLoading",t.saveBtnState)("type","finish"),e.xp6(1),e.Oqu(e.lcZ(18,47,"ROBOT_ACCOUNT.FINISH")),e.xp6(2),e.Q6J("clrWizardPageNextDisabled",!i.valid||t.checkNameOnGoing||t.isNameExisting),e.xp6(7),e.hij("",e.lcZ(27,49,"P2P_PROVIDER.NAME")," "),e.xp6(2),e.Q6J("ngIf",!t.isEditMode),e.xp6(1),e.ekj("clr-error",(c.dirty||c.touched)&&c.invalid||t.isNameExisting),e.xp6(2),e.Q6J("disabled",t.loading||t.isEditMode)("ngModel",t.robot.name),e.xp6(3),e.Q6J("hidden",!t.checkNameOnGoing),e.xp6(1),e.Q6J("ngIf",(c.dirty||c.touched)&&c.invalid||t.isNameExisting),e.xp6(3),e.Oqu(e.lcZ(39,51,"DISTRIBUTION.DESCRIPTION")),e.xp6(2),e.Q6J("ngModel",t.robot.description),e.xp6(3),e.hij("",e.lcZ(44,53,"SYSTEM_ROBOT.EXPIRATION_TIME")," "),e.xp6(5),e.ekj("clr-error",(g.dirty||g.touched)&&g.invalid||t.isExpirationInvalid()),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(59,ce))("ngModel",t.expirationType),e.xp6(2),e.hij(" ",e.lcZ(54,55,"SYSTEM_ROBOT.EXPIRATION_DAYS")," "),e.xp6(3),e.hij(" ",e.lcZ(57,57,"SYSTEM_ROBOT.EXPIRATION_NEVER")," "),e.xp6(3),e.Q6J("ngModel",t.robot.duration),e.xp6(3),e.Q6J("ngIf",t.isEditMode&&(null==t.robot?null:t.robot.duration)>0&&!((g.dirty||g.touched)&&g.invalid)||t.isExpirationInvalid()),e.xp6(1),e.Q6J("ngIf",(g.dirty||g.touched)&&g.invalid||t.isExpirationInvalid()),e.xp6(1),e.Q6J("clrWizardPagePreventDefaultNext",!0)("clrWizardPageNextDisabled",t.disabled()),e.xp6(5),e.Q6J("mode",t.PermissionSelectPanelModes.NORMAL)("permissionsModel",t.robot.permissions[0].access)("candidatePermissions",null==t.robotMetadata?null:t.robotMetadata.project)}},dependencies:[u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.Q7,u.c5,u.On,u.F,r.qvL,r.cCV,r.nqY,r.MgK,r.VqA,r.CM6,r.XE5,r.LAP,r.Jmj,r.bMv,r.zDF,r.rQy,r.XyT,r.$ER,r.VWQ,r.CkG,_.mk,_.O5,j.GA,N.l,O.T,R.X$,w.Z],styles:[".padding-left-0[_ngcontent-%COMP%]{padding-left:0}.no-margin[_ngcontent-%COMP%]{margin:0}.permission[_ngcontent-%COMP%]{padding-top:.1rem;color:#000}.padding-left-120[_ngcontent-%COMP%]{padding-left:126px}.w-90[_ngcontent-%COMP%]{width:90%}.date[_ngcontent-%COMP%]{margin-top:-.9rem}.input-width-date[_ngcontent-%COMP%]{width:265px}.flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.input-width[_ngcontent-%COMP%]{width:16rem}.expiration[_ngcontent-%COMP%]{margin-left:1rem}.showWarning[_ngcontent-%COMP%]{color:#b3a000}.icon[_ngcontent-%COMP%]{margin-top:3px}.align-center[_ngcontent-%COMP%]{align-items:center}[_nghost-%COMP%]  .modal-dialog{width:46.2rem}"]}),l})();var B=a(6266),de=a(3612),pe=a(6593),he=a(4167),ge=a(8105),ue=a(7681);function me(n,l){if(1&n){const s=e.EpF();e.TgZ(0,"button",32),e.NdJ("click",function(){e.CHM(s);const t=e.oxw(2);return e.KtG(t.disableOrEnable())}),e._UZ(1,"clr-icon",33),e._uU(2,"\xa0 "),e.TgZ(3,"span",34),e._uU(4),e.ALo(5,"translate"),e.qZA()()}if(2&n){const s=e.oxw(2);e.Q6J("disabled",!s.hasRobotUpdatePermission||!(s.selectedRows&&1===s.selectedRows.length&&s.selectedRows[0].disable)||!s.selectedRows[0].editable),e.xp6(4),e.Oqu(e.lcZ(5,2,"WEBHOOK.ENABLED_BUTTON"))}}function _e(n,l){if(1&n){const s=e.EpF();e.TgZ(0,"button",32),e.NdJ("click",function(){e.CHM(s);const t=e.oxw(2);return e.KtG(t.disableOrEnable())}),e._UZ(1,"clr-icon",35),e._uU(2,"\xa0 "),e.TgZ(3,"span",36),e._uU(4),e.ALo(5,"translate"),e.qZA()()}if(2&n){const s=e.oxw(2);e.Q6J("disabled",!s.hasRobotUpdatePermission||!(s.selectedRows&&1===s.selectedRows.length&&!s.selectedRows[0].disable)||!s.selectedRows[0].editable),e.xp6(4),e.Oqu(e.lcZ(5,2,"WEBHOOK.DISABLED_BUTTON"))}}function Te(n,l){if(1&n){const s=e.EpF();e.TgZ(0,"clr-dropdown-menu")(1,"button",23),e.NdJ("click",function(){e.CHM(s);const t=e.oxw();return e.KtG(t.openTokenModal())}),e._UZ(2,"clr-icon",24),e._uU(3,"\xa0 "),e.TgZ(4,"span",25),e._uU(5),e.ALo(6,"translate"),e.qZA()(),e.TgZ(7,"button",23),e.NdJ("click",function(){e.CHM(s);const t=e.oxw();return e.KtG(t.openNewRobotModal(!0))}),e._UZ(8,"clr-icon",26),e._uU(9,"\xa0 "),e.TgZ(10,"span",27),e._uU(11),e.ALo(12,"translate"),e.qZA()(),e.YNc(13,me,6,4,"button",28),e.YNc(14,_e,6,4,"button",28),e._UZ(15,"div",29),e.TgZ(16,"button",23),e.NdJ("click",function(){e.CHM(s);const t=e.oxw();return e.KtG(t.openDeleteRobotsDialog())}),e._UZ(17,"clr-icon",30),e._uU(18,"\xa0 "),e.TgZ(19,"span",31),e._uU(20),e.ALo(21,"translate"),e.qZA()()()}if(2&n){const s=e.oxw();e.xp6(1),e.Q6J("disabled",!s.hasRobotUpdatePermission||!(s.selectedRows&&1===s.selectedRows.length)||!s.selectedRows[0].editable),e.xp6(4),e.Oqu(e.lcZ(6,8,"SYSTEM_ROBOT.VIEW_SECRET")),e.xp6(2),e.Q6J("disabled",!s.hasRobotUpdatePermission||!(s.selectedRows&&1===s.selectedRows.length)||!s.selectedRows[0].editable),e.xp6(4),e.Oqu(e.lcZ(12,10,"BUTTON.EDIT")),e.xp6(2),e.Q6J("ngIf",s.selectedRows&&1===s.selectedRows.length&&s.selectedRows[0].disable),e.xp6(1),e.Q6J("ngIf",!(s.selectedRows&&1===s.selectedRows.length&&s.selectedRows[0].disable)),e.xp6(2),e.Q6J("disabled",!s.hasRobotDeletePermission||!(s.selectedRows&&s.selectedRows.length>=1)),e.xp6(4),e.Oqu(e.lcZ(21,12,"BUTTON.DELETE"))}}function be(n,l){1&n&&(e.TgZ(0,"span",46),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"SYSTEM_ROBOT.LEGACY")))}function Oe(n,l){1&n&&e._UZ(0,"clr-icon",47)}function Re(n,l){1&n&&e._UZ(0,"clr-icon",48)}function fe(n,l){if(1&n&&(e.TgZ(0,"clr-dg-row",37)(1,"clr-dg-cell"),e._uU(2),e.YNc(3,be,3,3,"span",38),e.qZA(),e.TgZ(4,"clr-dg-cell",39),e.YNc(5,Oe,1,0,"clr-icon",40),e.YNc(6,Re,1,0,"clr-icon",41),e.qZA(),e.TgZ(7,"clr-dg-cell")(8,"robot-permissions-panel",42)(9,"button",43),e._uU(10),e.ALo(11,"translate"),e._UZ(12,"clr-icon",44),e.qZA()()(),e.TgZ(13,"clr-dg-cell"),e._uU(14),e.ALo(15,"harborDatetime"),e.qZA(),e.TgZ(16,"clr-dg-cell"),e._UZ(17,"app-remaining-time",45),e.qZA(),e.TgZ(18,"clr-dg-cell"),e._uU(19),e.qZA()()),2&n){const s=l.$implicit,o=e.oxw();e.Q6J("clrDgItem",s),e.xp6(2),e.hij(" ",s.name," "),e.xp6(1),e.Q6J("ngIf",!s.editable),e.xp6(1),e.Q6J("ngSwitch",s.disable),e.xp6(1),e.Q6J("ngSwitchCase",!1),e.xp6(1),e.Q6J("ngSwitchCase",!0),e.xp6(2),e.Q6J("mode",o.PermissionSelectPanelModes.MODAL)("permissionsModel",s.permissions[0].access)("candidatePermissions",s.permissions[0].access),e.xp6(2),e.AsE(" ",null==s.permissions[0]||null==s.permissions[0].access?null:s.permissions[0].access.length," ",e.lcZ(11,15,"SYSTEM_ROBOT.PERMISSIONS")," "),e.xp6(4),e.Oqu(e.xi3(15,17,s.creation_time,"short")),e.xp6(3),e.Q6J("deadline",null==s?null:s.expires_at)("timeDiff",o.deltaTime),e.xp6(2),e.Oqu(s.description)}}function Ce(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){e.oxw();const s=e.MAs(47);e.xp6(1),e.lnq("",s.firstItem+1," - ",s.lastItem+1," ",e.lcZ(2,3,"ROBOT_ACCOUNT.OF")," ")}}const Ae=function(){return[15,25,50]},Se=[{path:"",component:(()=>{var n;class l{constructor(o,t,i,c,g,Me,Ze,xe,Pe,Ne){this.robotService=o,this.msgHandler=t,this.operateDialogService=i,this.operationService=c,this.userPermissionService=g,this.route=Me,this.translate=Ze,this.sanitizer=xe,this.systemInfoService=Pe,this.permissionService=Ne,this.pageSize=(0,h.tb)(h.V2.PROJECT_ROBOT_COMPONENT),this.currentPage=1,this.total=0,this.robots=[],this.selectedRows=[],this.loading=!0,this.addBtnState=r.xp5.DEFAULT,this.loadingMetadata=!1,this.PermissionSelectPanelModes=O.L}ngOnInit(){this.getCurrenTime(),this.projectId=+this.route.snapshot.parent.parent.params.id;let o=this.route.snapshot.parent.parent.data;o&&(this.projectName=o.projectResolver.name),this.getPermissionsList(),this.searchSub||(this.searchSub=this.filterComponent.filterTerms.pipe((0,A.b)(500),(0,S.x)(),(0,E.w)(t=>{this.currentPage=1,this.selectedRows=[];const i={page:this.currentPage,pageSize:this.pageSize};return this.searchKey=t,i.q=this.searchKey?encodeURIComponent(`Level=${p.sC.PROJECT},ProjectID=${this.projectId},name=~${this.searchKey}`):encodeURIComponent(`Level=${p.sC.PROJECT},ProjectID=${this.projectId}`),this.loading=!0,this.robotService.ListRobotResponse(i).pipe((0,b.x)(()=>{this.loading=!1}))})).subscribe(t=>{this.total=Number.parseInt(t.headers.get("x-total-count"),10),this.robots=t.body},t=>{this.msgHandler.handleError(t)})),this.subscription||(this.subscription=this.operateDialogService.confirmationConfirm$.subscribe(t=>{t&&1===t.state&&22===t.source&&this.deleteRobots(t.data),1===t.state&&23===t.source&&this.operateRobot()}))}getRobotPermissions(){this.loadingMetadata=!0,this.permissionService.getPermissions().pipe((0,b.x)(()=>this.loadingMetadata=!1)).subscribe(o=>{this.robotMetadata=o})}getCurrenTime(){this.systemInfoService.getSystemInfo().subscribe(o=>{o?.current_time&&(this.deltaTime=(new Date).getTime()-new Date(o?.current_time).getTime())})}getPermissionsList(){let o=[];o.push(this.userPermissionService.getPermission(this.projectId,m._W.ROBOT.KEY,m._W.ROBOT.VALUE.CREATE)),o.push(this.userPermissionService.getPermission(this.projectId,m._W.ROBOT.KEY,m._W.ROBOT.VALUE.UPDATE)),o.push(this.userPermissionService.getPermission(this.projectId,m._W.ROBOT.KEY,m._W.ROBOT.VALUE.DELETE)),o.push(this.userPermissionService.getPermission(this.projectId,m._W.ROBOT.KEY,m._W.ROBOT.VALUE.READ)),(0,Z.D)(...o).subscribe(t=>{this.hasRobotCreatePermission=t[0],this.hasRobotCreatePermission&&this.getRobotPermissions(),this.hasRobotUpdatePermission=t[1],this.hasRobotDeletePermission=t[2],this.hasRobotReadPermission=t[3]},t=>this.msgHandler.error(t))}ngOnDestroy(){this.searchSub&&(this.searchSub.unsubscribe(),this.searchSub=null),this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}clrLoad(o){o&&o.page&&o.page.size&&(this.pageSize=o.page.size,(0,h.Pe)(h.V2.PROJECT_ROBOT_COMPONENT,this.pageSize)),this.selectedRows=[];const t={page:this.currentPage,pageSize:this.pageSize,sort:(0,h.td)(o),q:encodeURIComponent(`Level=${p.sC.PROJECT},ProjectID=${this.projectId}`)};this.searchKey&&(t.q+=encodeURIComponent(`,name=~${this.searchKey}`)),this.loading=!0,this.robotService.ListRobotResponse(t).pipe((0,b.x)(()=>this.loading=!1)).subscribe(i=>{this.total=Number.parseInt(i.headers.get("x-total-count"),10),this.robots=i.body},i=>{this.msgHandler.error(i)})}openNewRobotModal(o){o?this.newRobotComponent.resetForEdit((0,h.d9)(this.selectedRows[0])):this.newRobotComponent.reset()}openTokenModal(){this.viewTokenComponent.open(),this.viewTokenComponent.robot=(0,h.d9)(this.selectedRows[0])}refresh(){this.currentPage=1,this.selectedRows=[],this.clrLoad()}deleteRobots(o){let t=[];o&&o.length&&(o.forEach(i=>{t.push(this.deleteRobot(i))}),(0,Z.D)(...t).subscribe(i=>{let c;i&&i.length&&i.forEach(g=>{g instanceof J.UA&&(c=(0,T.Po)(g))}),c?this.msgHandler.handleError(c):this.msgHandler.showSuccess("SYSTEM_ROBOT.DELETE_ROBOT_SUCCESS"),this.refresh()}))}deleteRobot(o){let t=new d.gB;return t.name="SYSTEM_ROBOT.DELETE_ROBOT",t.data.id=o.id,t.state=d.yb.progressing,t.data.name=o.name,this.operationService.publishInfo(t),this.robotService.DeleteRobot({robotId:o.id}).pipe((0,M.U)(()=>{(0,d.hm)(t,d.yb.success)}),(0,Y.K)(i=>{const c=(0,T.Po)(i);return(0,d.hm)(t,d.yb.failure,c),(0,y.of)(i)}))}openDeleteRobotsDialog(){const o=this.selectedRows.map(i=>i.name).join(","),t=new B.c("ROBOT_ACCOUNT.DELETION_TITLE","ROBOT_ACCOUNT.DELETION_SUMMARY",o,this.selectedRows,22,2);this.operateDialogService.openComfirmDialog(t)}disableOrEnable(){const i=new B.c(this.selectedRows[0].disable?"SYSTEM_ROBOT.ENABLE_TITLE":"SYSTEM_ROBOT.DISABLE_TITLE",this.selectedRows[0].disable?"SYSTEM_ROBOT.ENABLE_SUMMARY":"SYSTEM_ROBOT.DISABLE_SUMMARY",this.selectedRows[0].name,this.selectedRows[0],23,this.selectedRows[0].disable?4:5);this.operateDialogService.openComfirmDialog(i)}operateRobot(){const o=(0,h.d9)(this.selectedRows[0]),t=o.disable?"SYSTEM_ROBOT.ENABLE_ROBOT_SUCCESSFULLY":"SYSTEM_ROBOT.DISABLE_ROBOT_SUCCESSFULLY";o.disable=!o.disable,delete o.secret;const i=new d.gB;i.name=o.disable?"SYSTEM_ROBOT.DISABLE_TITLE":"SYSTEM_ROBOT.ENABLE_TITLE",i.data.id=o.id,i.state=d.yb.progressing,i.data.name=o.name,this.operationService.publishInfo(i),this.robotService.UpdateRobot({robot:o,robotId:o.id}).subscribe(c=>{(0,d.hm)(i,d.yb.success),this.msgHandler.showSuccess(t),this.refresh()},c=>{(0,d.hm)(i,d.yb.failure,(0,T.Po)(c)),this.msgHandler.showSuccess(c)})}addSuccess(o){if(o){this.viewTokenComponent.open(),this.viewTokenComponent.tokenModalOpened=!1,this.viewTokenComponent.robot=(0,h.d9)(o),this.viewTokenComponent.copyToken=!0,this.translate.get("ROBOT_ACCOUNT.CREATED_SUCCESS",{param:o.name}).subscribe(i=>{this.viewTokenComponent.createSuccess=i});const t=`data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(o))}`;this.viewTokenComponent.downLoadHref=this.sanitizer.bypassSecurityTrustUrl(t),this.viewTokenComponent.downLoadFileName=`${o.name}.json`}this.refresh()}}return(n=l).\u0275fac=function(o){return new(o||n)(e.Y36(v.b),e.Y36(I.d),e.Y36(de.O),e.Y36(U.f9),e.Y36(m.Hx),e.Y36(C.gz),e.Y36(R.sK),e.Y36(pe.H7),e.Y36(he.e),e.Y36(ge.q))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-robot-account"]],viewQuery:function(o,t){if(1&o&&(e.Gf(L,5),e.Gf(x.N,5),e.Gf(P.z,7)),2&o){let i;e.iGM(i=e.CRH())&&(t.newRobotComponent=i.first),e.iGM(i=e.CRH())&&(t.viewTokenComponent=i.first),e.iGM(i=e.CRH())&&(t.filterComponent=i.first)}},decls:56,vars:56,consts:[[1,"row","robot-space"],[1,"row","flex-items-xs-between","rightPos"],[1,"flex-xs-middle","option-left"],[1,"flex-xs-middle","option-right"],[3,"width","withDivider","filterPlaceholder"],[1,"refresh-btn",3,"click"],["shape","refresh"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"btn","btn-secondary",3,"disabled","clrLoading","click"],["shape","plus","size","16"],["clrDropdownTrigger","",1,"btn","btn-link",3,"clrCloseMenuOnItemClick"],["shape","caret\n            down"],[4,"clrIfOpen"],[3,"clrDgLoading","clrDgSelected","clrDgRefresh","clrDgSelectedChange"],[3,"clrDgSortBy"],[1,"permission-col"],[3,"clrDgItem",4,"ngFor","ngForOf"],[3,"clrDgPageSize","clrDgPage","clrDgTotalItems","clrDgPageChange"],["pagination",""],[3,"clrPageSizeOptions"],[4,"ngIf"],[3,"robotMetadata","projectId","projectName","addSuccess"],[3,"refreshSuccess"],["clrDropdownItem","",3,"disabled","click"],["shape","details","size","16"],["id","system-robot-token"],["shape","edit","size","16"],["id","system-robot-edit"],["type","button","class","btn btn-secondary",3,"disabled","click",4,"ngIf"],[1,"dropdown-divider"],["shape","window-close","size","16"],["id","system-robot-delete"],["type","button",1,"btn","btn-secondary",3,"disabled","click"],["size","16","shape","success-standard"],["id","distribution-enable"],["size","16","shape","ban"],["id","distribution-disable"],[3,"clrDgItem"],["class","label label-warning ml-1",4,"ngIf"],[3,"ngSwitch"],["shape","check-circle","size","20","class","color-green",4,"ngSwitchCase"],["shape","times-circle","size","16","class","color-red red-position",4,"ngSwitchCase"],[3,"mode","permissionsModel","candidatePermissions"],["modal","",1,"btn","btn-link","btn-sm","m-0","p-0"],["size","12","shape","caret down",1,"icon"],[3,"deadline","timeDiff"],[1,"label","label-warning","ml-1"],["shape","check-circle","size","20",1,"color-green"],["shape","times-circle","size","16",1,"color-red","red-position"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div")(2,"div",1),e._UZ(3,"div",2),e.TgZ(4,"div",3),e._UZ(5,"hbr-filter",4),e.ALo(6,"translate"),e.TgZ(7,"span",5),e.NdJ("click",function(){return t.refresh()}),e._UZ(8,"clr-icon",6),e.qZA()()()(),e.TgZ(9,"div",7)(10,"clr-dg-action-bar")(11,"button",8),e.NdJ("click",function(){return t.openNewRobotModal(!1)}),e.TgZ(12,"span"),e._UZ(13,"clr-icon",9),e._uU(14),e.ALo(15,"translate"),e.qZA()(),e.TgZ(16,"clr-dropdown",10)(17,"span"),e._uU(18),e.ALo(19,"translate"),e._UZ(20,"clr-icon",11),e.qZA(),e.YNc(21,Te,22,14,"clr-dropdown-menu",12),e.qZA()(),e.TgZ(22,"clr-datagrid",13),e.NdJ("clrDgRefresh",function(c){return t.clrLoad(c)})("clrDgSelectedChange",function(c){return t.selectedRows=c}),e.TgZ(23,"clr-dg-column",14),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"clr-dg-column"),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"clr-dg-column",15),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"clr-dg-column",14),e._uU(33),e.ALo(34,"translate"),e.qZA(),e.TgZ(35,"clr-dg-column"),e._uU(36),e.ALo(37,"translate"),e.qZA(),e.TgZ(38,"clr-dg-column"),e._uU(39),e.ALo(40,"translate"),e.qZA(),e.TgZ(41,"clr-dg-placeholder"),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.YNc(44,fe,20,20,"clr-dg-row",16),e.TgZ(45,"clr-dg-footer")(46,"clr-dg-pagination",17,18),e.NdJ("clrDgPageChange",function(c){return t.currentPage=c}),e.TgZ(48,"clr-dg-page-size",19),e._uU(49),e.ALo(50,"translate"),e.qZA(),e.YNc(51,Ce,3,5,"span",20),e._uU(52),e.ALo(53,"translate"),e.qZA()()()()(),e.TgZ(54,"add-robot",21),e.NdJ("addSuccess",function(c){return t.addSuccess(c)}),e.qZA(),e.TgZ(55,"view-token",22),e.NdJ("refreshSuccess",function(){return t.refresh()}),e.qZA()),2&o&&(e.xp6(5),e.s9C("filterPlaceholder",e.lcZ(6,31,"SYSTEM_ROBOT.SEARCH_BY_NAME")),e.Q6J("width",240)("withDivider",!0),e.xp6(6),e.Q6J("disabled",!t.hasRobotCreatePermission||t.loadingMetadata)("clrLoading",t.addBtnState),e.xp6(3),e.hij("\xa0",e.lcZ(15,33,"ROBOT_ACCOUNT.NEW_ROBOT_ACCOUNT")," "),e.xp6(2),e.Q6J("clrCloseMenuOnItemClick",!1),e.xp6(2),e.Oqu(e.lcZ(19,35,"MEMBER.ACTION")),e.xp6(4),e.Q6J("clrDgLoading",t.loading)("clrDgSelected",t.selectedRows),e.xp6(1),e.Q6J("clrDgSortBy","name"),e.xp6(1),e.Oqu(e.lcZ(25,37,"ROBOT_ACCOUNT.NAME")),e.xp6(3),e.Oqu(e.lcZ(28,39,"ROBOT_ACCOUNT.ENABLED_STATE")),e.xp6(3),e.Oqu(e.lcZ(31,41,"SYSTEM_ROBOT.PERMISSION_COLUMN")),e.xp6(2),e.Q6J("clrDgSortBy","creation_time"),e.xp6(1),e.Oqu(e.lcZ(34,43,"ROBOT_ACCOUNT.CREATION")),e.xp6(3),e.Oqu(e.lcZ(37,45,"SYSTEM_ROBOT.EXPIRES_IN")),e.xp6(3),e.Oqu(e.lcZ(40,47,"ROBOT_ACCOUNT.DESCRIPTION")),e.xp6(3),e.Oqu(e.lcZ(43,49,"SYSTEM_ROBOT.NOT_FOUND")),e.xp6(2),e.Q6J("ngForOf",t.robots),e.xp6(2),e.Q6J("clrDgPageSize",t.pageSize)("clrDgPage",t.currentPage)("clrDgTotalItems",t.total),e.xp6(2),e.Q6J("clrPageSizeOptions",e.DdM(55,Ae)),e.xp6(1),e.Oqu(e.lcZ(50,51,"PAGINATION.PAGE_SIZE")),e.xp6(2),e.Q6J("ngIf",t.total),e.xp6(1),e.AsE(" ",t.total," ",e.lcZ(53,53,"ROBOT_ACCOUNT.ITEMS")," "),e.xp6(2),e.Q6J("robotMetadata",t.robotMetadata)("projectId",t.projectId)("projectName",t.projectName))},dependencies:[r.C9t,r.Gwl,r.fv_,r.m4W,r.dRQ,r.YYR,r.Ltv,r.F7K,r.Z4N,r.jND,r.KHL,r.PDs,r.Gcc,r.dml,r.Nh1,r.K8c,r.qvL,r.cCV,r.nqY,r.MPb,r.f_W,r.zwp,r.ZUS,r.lU3,_.sg,_.O5,_.RF,_.n9,P.z,x.N,ue.h,O.T,L,R.X$,w.Z],styles:[".robot-space[_ngcontent-%COMP%]{margin-top:28px;position:relative}.robot-space[_ngcontent-%COMP%]   clr-icon.red-position[_ngcontent-%COMP%]{margin-left:2px}.robot-space[_ngcontent-%COMP%]   .rightPos[_ngcontent-%COMP%]{position:absolute;z-index:100;right:35px;margin-top:4px}.robot-space[_ngcontent-%COMP%]   .rightPos[_ngcontent-%COMP%]   .option-left[_ngcontent-%COMP%]{padding-left:16px;position:relative;top:10px}.robot-space[_ngcontent-%COMP%]   .rightPos[_ngcontent-%COMP%]   .option-right[_ngcontent-%COMP%]{padding-right:16px}.robot-space[_ngcontent-%COMP%]   .rightPos[_ngcontent-%COMP%]   .option-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]{cursor:pointer}.icon[_ngcontent-%COMP%]{margin-top:3px}.permission-col[_ngcontent-%COMP%]{min-width:8rem!important}"]}),l})()}];let Ee=(()=>{var n;class l{}return(n=l).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[C.Bz.forChild(Se),D.m]}),l})()}}]);