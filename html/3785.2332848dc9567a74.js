"use strict";(self.webpackChunkharbor_portal=self.webpackChunkharbor_portal||[]).push([[3785],{3344:(b,U,i)=>{i.d(U,{o:()=>C});var n=i(9862),A=i(3586),G=i(2181),f=i(7398),P=i(5879),E=i(9462);let C=(()=>{var m;class M extends A.b{constructor(e,o){super(e,o)}listUserGroupsResponse(e){let o=this.newParams(),l=new n.WM;null!=e.pageSize&&(o=o.set("page_size",e.pageSize.toString())),null!=e.page&&(o=o.set("page",e.page.toString())),null!=e.ldapGroupDn&&(o=o.set("ldap_group_dn",e.ldapGroupDn.toString())),null!=e.groupName&&(o=o.set("group_name",e.groupName.toString())),null!=e.XRequestId&&(l=l.set("X-Request-Id",e.XRequestId.toString()));let g=new n.aW("GET",this.rootUrl+"/usergroups",null,{headers:l,params:o,responseType:"json"});return this.http.request(g).pipe((0,G.h)(u=>u instanceof n.Zn),(0,f.U)(u=>u))}listUserGroups(e){return this.listUserGroupsResponse(e).pipe((0,f.U)(o=>o.body))}createUserGroupResponse(e){let o=this.newParams(),l=new n.WM,p=null;p=e.usergroup,null!=e.XRequestId&&(l=l.set("X-Request-Id",e.XRequestId.toString()));let g=new n.aW("POST",this.rootUrl+"/usergroups",p,{headers:l,params:o,responseType:"json"});return this.http.request(g).pipe((0,G.h)(u=>u instanceof n.Zn),(0,f.U)(u=>u))}createUserGroup(e){return this.createUserGroupResponse(e).pipe((0,f.U)(o=>o.body))}searchUserGroupsResponse(e){let o=this.newParams(),l=new n.WM;null!=e.groupname&&(o=o.set("groupname",e.groupname.toString())),null!=e.pageSize&&(o=o.set("page_size",e.pageSize.toString())),null!=e.page&&(o=o.set("page",e.page.toString())),null!=e.XRequestId&&(l=l.set("X-Request-Id",e.XRequestId.toString()));let g=new n.aW("GET",this.rootUrl+"/usergroups/search",null,{headers:l,params:o,responseType:"json"});return this.http.request(g).pipe((0,G.h)(u=>u instanceof n.Zn),(0,f.U)(u=>u))}searchUserGroups(e){return this.searchUserGroupsResponse(e).pipe((0,f.U)(o=>o.body))}getUserGroupResponse(e){let o=this.newParams(),l=new n.WM;null!=e.XRequestId&&(l=l.set("X-Request-Id",e.XRequestId.toString()));let g=new n.aW("GET",this.rootUrl+`/usergroups/${e.groupId}`,null,{headers:l,params:o,responseType:"json"});return this.http.request(g).pipe((0,G.h)(u=>u instanceof n.Zn),(0,f.U)(u=>u))}getUserGroup(e){return this.getUserGroupResponse(e).pipe((0,f.U)(o=>o.body))}updateUserGroupResponse(e){let o=this.newParams(),l=new n.WM,p=null;p=e.usergroup,null!=e.XRequestId&&(l=l.set("X-Request-Id",e.XRequestId.toString()));let g=new n.aW("PUT",this.rootUrl+`/usergroups/${e.groupId}`,p,{headers:l,params:o,responseType:"json"});return this.http.request(g).pipe((0,G.h)(u=>u instanceof n.Zn),(0,f.U)(u=>u))}updateUserGroup(e){return this.updateUserGroupResponse(e).pipe((0,f.U)(o=>o.body))}deleteUserGroupResponse(e){let o=this.newParams(),l=new n.WM;null!=e.XRequestId&&(l=l.set("X-Request-Id",e.XRequestId.toString()));let g=new n.aW("DELETE",this.rootUrl+`/usergroups/${e.groupId}`,null,{headers:l,params:o,responseType:"json"});return this.http.request(g).pipe((0,G.h)(u=>u instanceof n.Zn),(0,f.U)(u=>u))}deleteUserGroup(e){return this.deleteUserGroupResponse(e).pipe((0,f.U)(o=>o.body))}}return(m=M).listUserGroupsPath="/usergroups",m.createUserGroupPath="/usergroups",m.searchUserGroupsPath="/usergroups/search",m.getUserGroupPath="/usergroups/{group_id}",m.updateUserGroupPath="/usergroups/{group_id}",m.deleteUserGroupPath="/usergroups/{group_id}",m.\u0275fac=function(e){return new(e||m)(P.LFG(E.p),P.LFG(n.eN))},m.\u0275prov=P.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),M})()},3785:(b,U,i)=>{i.r(U),i.d(U,{GroupModule:()=>re});var n=i(4554),A=i(2096),G=i(9315),f=i(2181),P=i(3620),E=i(4664),C=i(4716);const M=i(1631).z;var T=i(6306),e=i(5879),o=i(27),l=i(1575),p=i(3419),g=i(6682),u=i(3344),O=i(6223),c=i(8280),R=i(6814),D=i(9515);const y=["groupForm"];function N(s,h){1&s&&(e.TgZ(0,"h3",13),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"GROUP.IMPORT_LDAP_GROUP")," "))}function Y(s,h){1&s&&(e.TgZ(0,"h3",13),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"GROUP.IMPORT_HTTP_GROUP")," "))}function J(s,h){1&s&&(e.TgZ(0,"h3",13),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"GROUP.IMPORT_OIDC_GROUP")," "))}function q(s,h){1&s&&(e.TgZ(0,"h3",13),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"GROUP.EDIT")," "))}function F(s,h){if(1&s){const d=e.EpF();e.TgZ(0,"clr-input-container")(1,"label",14),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"input",15,16),e.NdJ("ngModelChange",function(t){e.CHM(d);const a=e.oxw();return e.KtG(a.group.ldap_group_dn=t)}),e.qZA(),e.TgZ(6,"clr-control-error"),e._uU(7),e.ALo(8,"translate"),e.qZA()()}if(2&s){const d=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,4,"GROUP.GROUP_DN")),e.xp6(2),e.Q6J("disabled","create"!==d.mode)("ngModel",d.group.ldap_group_dn),e.xp6(3),e.Oqu(e.lcZ(8,6,d.dnTooltip))}}function z(s,h){1&s&&(e.TgZ(0,"div",17)(1,"label",18),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"label",19),e._uU(5),e.ALo(6,"translate"),e.qZA()()),2&s&&(e.xp6(2),e.Oqu(e.lcZ(3,2,"GROUP.TYPE")),e.xp6(3),e.Oqu(e.lcZ(6,4,"GROUP.LDAP_TYPE")))}let x=(()=>{var s;class h{constructor(r,t,a,_){this.session=r,this.msgHandler=t,this.appConfigService=a,this.groupService=_,this.opened=!1,this.mode="create",this.dnTooltip="TOOLTIP.ITEM_REQUIRED",this.submitted=!1,this.dataChange=new e.vpe}ngOnInit(){this.appConfigService.isLdapMode()&&(this.isLdapMode=!0),this.appConfigService.isHttpAuthMode()&&(this.isHttpAuthMode=!0),this.appConfigService.isOidcMode()&&(this.isOidcMode=!0),this.group={group_type:this.isLdapMode?o.YT.LDAP_TYPE:this.isHttpAuthMode?o.YT.HTTP_TYPE:o.YT.OIDC_TYPE}}get isFormValid(){return this.groupForm.valid}open(r,t=!1){this.resetGroup(),t?(this.mode="edit",Object.assign(this.group,r)):this.mode="create",this.opened=!0}close(){this.opened=!1,this.resetGroup()}save(){"create"===this.mode?this.createGroup():this.editGroup()}createGroup(){let r=Object.assign({},this.group);this.groupService.createUserGroup({usergroup:r}).pipe((0,C.x)(()=>this.close())).subscribe(t=>{this.msgHandler.showSuccess("GROUP.ADD_GROUP_SUCCESS"),this.dataChange.emit()},t=>this.msgHandler.handleError(t))}editGroup(){let r=Object.assign({},this.group);this.groupService.updateUserGroup({groupId:r.id,usergroup:r}).pipe((0,C.x)(()=>this.close())).subscribe(t=>{this.msgHandler.showSuccess("GROUP.EDIT_GROUP_SUCCESS"),this.dataChange.emit()},t=>this.msgHandler.handleError(t))}resetGroup(){this.group={group_type:this.isLdapMode?o.YT.LDAP_TYPE:this.isHttpAuthMode?o.YT.HTTP_TYPE:o.YT.OIDC_TYPE},this.groupForm.reset()}}return(s=h).\u0275fac=function(r){return new(r||s)(e.Y36(l.m),e.Y36(p.d),e.Y36(g._),e.Y36(u.o))},s.\u0275cmp=e.Xpm({type:s,selectors:[["hbr-add-group-modal"]],viewQuery:function(r,t){if(1&r&&e.Gf(y,7),2&r){let a;e.iGM(a=e.CRH())&&(t.groupForm=a.first)}},outputs:{dataChange:"dataChange"},decls:29,vars:27,consts:[[3,"clrModalOpen","clrModalStaticBackdrop","clrModalClosable","clrModalOpenChange"],["class","modal-title",4,"ngIf"],[1,"modal-body"],[1,"clr-form","clr-form-horizontal"],["groupForm","ngForm"],[4,"ngIf"],["class","clr-form-control",4,"ngIf"],["for","group_name",1,"required"],["clrInput","","type","text","id","group_name","name","group_name","required","",3,"ngModel","ngModelChange"],["groupName","ngModel"],[1,"modal-footer"],["type","button",1,"btn","btn-outline",3,"click"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"modal-title"],["for","ldap_group_dn",1,"required"],["clrInput","","type","text","id","ldap_group_dn","name","ldap_group_dn","required","",3,"disabled","ngModel","ngModelChange"],["groupDN","ngModel"],[1,"clr-form-control"],["for","type",1,"clr-control-label"],["id","type",1,"padding-left-6"]],template:function(r,t){1&r&&(e.TgZ(0,"clr-modal",0),e.NdJ("clrModalOpenChange",function(_){return t.opened=_}),e.YNc(1,N,3,3,"h3",1),e.YNc(2,Y,3,3,"h3",1),e.YNc(3,J,3,3,"h3",1),e.YNc(4,q,3,3,"h3",1),e.TgZ(5,"div",2)(6,"form",3,4)(8,"section"),e.YNc(9,F,9,8,"clr-input-container",5),e.YNc(10,z,7,6,"div",6),e.TgZ(11,"clr-input-container")(12,"label",7),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"input",8,9),e.NdJ("ngModelChange",function(_){return t.group.group_name=_}),e.qZA(),e.TgZ(17,"clr-control-error"),e._uU(18),e.ALo(19,"translate"),e.qZA()()()()(),e.TgZ(20,"div",10)(21,"button",11),e.NdJ("click",function(){return t.close()}),e._uU(22),e.ALo(23,"translate"),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"button",12),e.NdJ("click",function(){return t.save()}),e._uU(26),e.ALo(27,"translate"),e.ALo(28,"translate"),e.qZA()()()),2&r&&(e.Q6J("clrModalOpen",t.opened)("clrModalStaticBackdrop",!0)("clrModalClosable",!1),e.xp6(1),e.Q6J("ngIf","create"===t.mode&&t.isLdapMode),e.xp6(1),e.Q6J("ngIf","create"===t.mode&&t.isHttpAuthMode),e.xp6(1),e.Q6J("ngIf","create"===t.mode&&t.isOidcMode),e.xp6(1),e.Q6J("ngIf","create"!==t.mode),e.xp6(5),e.Q6J("ngIf",t.isLdapMode),e.xp6(1),e.Q6J("ngIf",t.isLdapMode),e.xp6(3),e.Oqu(e.lcZ(14,15,"GROUP.NAME")),e.xp6(2),e.Q6J("ngModel",t.group.group_name),e.xp6(3),e.Oqu(e.lcZ(19,17,t.dnTooltip)),e.xp6(4),e.hij(" ",e.lcZ(23,19,e.lcZ(24,21,"BUTTON.CANCEL"))," "),e.xp6(3),e.Q6J("disabled",!t.isFormValid),e.xp6(1),e.hij(" ",e.lcZ(27,23,e.lcZ(28,25,"BUTTON.SAVE"))," "))},dependencies:[O._Y,O.Fj,O.JJ,O.JL,O.Q7,O.On,O.F,c.qAN,c.VLi,c.MgK,c.VqA,c.xRP,c.G55,R.O5,D.X$],styles:[".padding-left-6[_ngcontent-%COMP%]{padding-left:6px}"]}),h})();var Q=i(8504),v=i(6126),H=i(3924),j=i(6266),S=i(1691),L=i(927),w=i(7546),W=i(3612);function B(s,h){1&s&&(e.TgZ(0,"clr-dg-column"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"GROUP.DN")))}function X(s,h){if(1&s&&(e.TgZ(0,"clr-dg-cell"),e._uU(1),e.qZA()),2&s){const d=e.oxw().$implicit;e.xp6(1),e.Oqu(d.ldap_group_dn)}}function K(s,h){if(1&s&&(e.TgZ(0,"clr-dg-row",19)(1,"clr-dg-cell"),e._uU(2),e.qZA(),e.TgZ(3,"clr-dg-cell"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.YNc(6,X,2,1,"clr-dg-cell",13),e.qZA()),2&s){const d=h.$implicit,r=e.oxw();e.Q6J("clrDgItem",d),e.xp6(2),e.Oqu(d.group_name),e.xp6(2),e.Oqu(e.lcZ(5,4,r.groupToSring(d.group_type))),e.xp6(2),e.Q6J("ngIf",r.isLdapMode)}}function V(s,h){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s){e.oxw();const d=e.MAs(35);e.xp6(1),e.lnq(" ",d.firstItem+1," - ",d.lastItem+1," ",e.lcZ(2,3,"GROUP.OF")," ")}}const $=function(){return[15,25,50]};let k=(()=>{var s;class h{constructor(r,t,a,_,Z,I,oe,ne){this.operationService=r,this.translate=t,this.operateDialogService=a,this.groupService=_,this.msgHandler=Z,this.session=I,this.translateService=oe,this.appConfigService=ne,this.loading=!0,this.groups=[],this.currentPage=1,this.totalCount=0,this.pageSize=(0,S.tb)(S.V2.SYSTEM_GROUP_COMPONENT),this.selectedGroups=[],this.currentTerm="",this.batchOps="idle"}ngOnInit(){this.appConfigService.isLdapMode()&&(this.isLdapMode=!0),this.delSub=this.operateDialogService.confirmationConfirm$.subscribe(r=>{r&&1===r.state&&2===r.source&&"delete"===this.batchOps&&this.deleteGroups()}),this.searchSub||(this.searchSub=this.filterComponent.filterTerms.pipe((0,f.h)(r=>!!r),(0,P.b)(500),(0,E.w)(r=>(this.currentPage=1,this.selectedGroups=[],this.loading=!0,this.groupService.listUserGroupsResponse({groupName:r,pageSize:this.pageSize,page:this.currentPage}).pipe((0,C.x)(()=>{this.loading=!1}))))).subscribe(r=>{this.totalCount=Number.parseInt(r.headers.get("x-total-count"),10),this.groups=r.body},r=>{this.msgHandler.handleError(r)}))}ngOnDestroy(){this.delSub.unsubscribe(),this.searchSub&&(this.searchSub.unsubscribe(),this.searchSub=null)}refresh(){this.currentPage=1,this.selectedGroups=[],this.currentTerm="",this.filterComponent.currentValue="",this.loadData()}loadData(r){r&&r.page&&(this.pageSize=r.page.size,(0,S.Pe)(S.V2.SYSTEM_GROUP_COMPONENT,this.pageSize)),this.loading=!0,this.currentTerm?this.groupService.searchUserGroupsResponse({groupname:encodeURIComponent(this.currentTerm),page:this.currentPage,pageSize:this.pageSize}).pipe((0,C.x)(()=>this.loading=!1)).subscribe(t=>{this.totalCount=Number.parseInt(t.headers.get("x-total-count"),10),this.groups=t.body},t=>{this.msgHandler.error(t)}):this.groupService.listUserGroupsResponse({page:this.currentPage,pageSize:this.pageSize}).pipe((0,C.x)(()=>this.loading=!1)).subscribe(t=>{this.totalCount=Number.parseInt(t.headers.get("x-total-count"),10),this.groups=t.body},t=>{this.msgHandler.error(t)})}addGroup(){this.newGroupModal.open()}editGroup(){this.newGroupModal.open(this.selectedGroups[0],!0)}openDeleteConfirmationDialog(){this.batchOps="delete";let r=[];if(this.selectedGroups.length>0){this.selectedGroups.forEach(a=>{r.push(a.group_name)});let t=new j.c("GROUP.DELETION_TITLE","GROUP.DELETION_SUMMARY",r.join(","),this.selectedGroups,2,2);this.operateDialogService.openComfirmDialog(t)}}deleteGroups(){let r=this.selectedGroups.map(t=>{let a=new v.gB;return a.name="OPERATION.DELETE_GROUP",a.data.id=t.id,a.state=v.yb.progressing,a.data.name=t.group_name,this.operationService.publishInfo(a),this.groupService.deleteUserGroup({groupId:t.id}).pipe(M(_=>this.translate.get("BATCH.DELETED_SUCCESS").pipe(M(Z=>((0,v.hm)(a,v.yb.success),(0,A.of)(Z)))))).pipe((0,T.K)(_=>{const Z=(0,H.Po)(_);return this.translateService.get(Z).subscribe(I=>(0,v.hm)(a,v.yb.failure,I)),(0,Q._)(_)}))});(0,G.D)(r).subscribe(t=>{this.selectedGroups=[],this.batchOps="idle",this.loadData()},t=>this.msgHandler.handleError(t))}groupToSring(r){return r===o.YT.LDAP_TYPE?"GROUP.LDAP_TYPE":r===o.YT.HTTP_TYPE?"GROUP.HTTP_TYPE":r===o.YT.OIDC_TYPE?"GROUP.OIDC_TYPE":"UNKNOWN"}doFilter(r){r||(this.currentTerm=r,this.loadData())}get canAddGroup(){return this.session.currentUser.has_admin_role}get canEditGroup(){return 1===this.selectedGroups.length&&this.session.currentUser.has_admin_role&&this.isLdapMode}get canDeleteGroup(){return this.selectedGroups.length>=1&&this.session.currentUser.has_admin_role}}return(s=h).\u0275fac=function(r){return new(r||s)(e.Y36(w.f9),e.Y36(D.sK),e.Y36(W.O),e.Y36(u.o),e.Y36(p.d),e.Y36(l.m),e.Y36(D.sK),e.Y36(g._))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-group"]],viewQuery:function(r,t){if(1&r&&(e.Gf(x,5),e.Gf(L.z,7)),2&r){let a;e.iGM(a=e.CRH())&&(t.newGroupModal=a.first),e.iGM(a=e.CRH())&&(t.filterComponent=a.first)}},decls:43,vars:42,consts:[[1,"row","relative"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"custom-h2"],[1,"action-panel-pos","rightPos"],["filterPlaceholder","group name",1,"filter-pos",3,"withDivider","currentValue","filterEvt"],[1,"refresh-btn"],["shape","refresh","ng-disabled","loading",3,"hidden","click"],[1,"spinner","spinner-inline",3,"hidden"],[3,"clrDgSelected","clrDgLoading","clrDgRefresh","clrDgSelectedChange"],["type","button",1,"btn","btn-secondary",3,"disabled","click"],["shape","plus","size","15"],["shape","pencil","size","15"],["shape","times","size","15"],[4,"ngIf"],[3,"clrDgItem",4,"ngFor","ngForOf"],[3,"clrDgPageSize","clrDgPage","clrDgTotalItems","clrDgPageChange"],["pagination",""],[3,"clrPageSizeOptions"],[3,"dataChange"],[3,"clrDgItem"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",3)(6,"hbr-filter",4),e.NdJ("filterEvt",function(_){return t.doFilter(_)}),e.qZA(),e.TgZ(7,"span",5)(8,"clr-icon",6),e.NdJ("click",function(){return t.refresh()}),e.qZA(),e._UZ(9,"span",7),e.qZA()(),e.TgZ(10,"div")(11,"clr-datagrid",8),e.NdJ("clrDgRefresh",function(_){return t.loadData(_)})("clrDgSelectedChange",function(_){return t.selectedGroups=_}),e.TgZ(12,"clr-dg-action-bar")(13,"button",9),e.NdJ("click",function(){return t.addGroup()}),e._UZ(14,"clr-icon",10),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"button",9),e.NdJ("click",function(){return t.editGroup()}),e._UZ(18,"clr-icon",11),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"button",9),e.NdJ("click",function(){return t.openDeleteConfirmationDialog()}),e._UZ(22,"clr-icon",12),e._uU(23),e.ALo(24,"translate"),e.qZA()(),e.TgZ(25,"clr-dg-column"),e._uU(26),e.ALo(27,"translate"),e.qZA(),e.TgZ(28,"clr-dg-column"),e._uU(29),e.ALo(30,"translate"),e.qZA(),e.YNc(31,B,3,3,"clr-dg-column",13),e.YNc(32,K,7,6,"clr-dg-row",14),e.TgZ(33,"clr-dg-footer")(34,"clr-dg-pagination",15,16),e.NdJ("clrDgPageChange",function(_){return t.currentPage=_}),e.TgZ(36,"clr-dg-page-size",17),e._uU(37),e.ALo(38,"translate"),e.qZA(),e.YNc(39,V,3,5,"span",13),e._uU(40),e.ALo(41,"translate"),e.qZA()()()(),e.TgZ(42,"hbr-add-group-modal",18),e.NdJ("dataChange",function(){return t.refresh()}),e.qZA()()()),2&r&&(e.xp6(3),e.Oqu(e.lcZ(4,25,"GROUP.GROUP")),e.xp6(3),e.Q6J("withDivider",!0)("currentValue",t.currentTerm),e.xp6(2),e.Q6J("hidden",t.loading),e.xp6(1),e.Q6J("hidden",!1===t.loading),e.xp6(2),e.Q6J("clrDgSelected",t.selectedGroups)("clrDgLoading",t.loading),e.xp6(2),e.Q6J("disabled",!t.canAddGroup),e.xp6(2),e.hij("\xa0",e.lcZ(16,27,"GROUP.ADD")," "),e.xp6(2),e.Q6J("disabled",!t.canEditGroup),e.xp6(2),e.hij("\xa0",e.lcZ(20,29,"GROUP.EDIT")," "),e.xp6(2),e.Q6J("disabled",!t.canDeleteGroup),e.xp6(2),e.hij("\xa0",e.lcZ(24,31,"GROUP.DELETE")," "),e.xp6(3),e.Oqu(e.lcZ(27,33,"GROUP.NAME")),e.xp6(3),e.Oqu(e.lcZ(30,35,"GROUP.TYPE")),e.xp6(2),e.Q6J("ngIf",t.isLdapMode),e.xp6(1),e.Q6J("ngForOf",t.groups),e.xp6(2),e.Q6J("clrDgPageSize",t.pageSize)("clrDgPage",t.currentPage)("clrDgTotalItems",t.totalCount),e.xp6(2),e.Q6J("clrPageSizeOptions",e.DdM(41,$)),e.xp6(1),e.Oqu(e.lcZ(38,37,"PAGINATION.PAGE_SIZE")),e.xp6(2),e.Q6J("ngIf",t.totalCount),e.xp6(1),e.AsE(" ",t.totalCount," ",e.lcZ(41,39,"GROUP.ITEMS")," "))},dependencies:[c.C9t,c.Gwl,c.fv_,c.m4W,c.dRQ,c.YYR,c.Ltv,c.Z4N,c.jND,c.KHL,c.PDs,c.Gcc,c.dml,c.Nh1,c.K8c,c.qvL,R.sg,R.O5,L.z,x,D.X$],styles:[".custom-add-button[_ngcontent-%COMP%]{font-size:12px;margin-left:-12px}.filter-icon[_ngcontent-%COMP%]{position:relative;right:-12px}.filter-pos[_ngcontent-%COMP%]{float:right;margin-right:24px;position:relative;top:10px}.action-panel-pos[_ngcontent-%COMP%]{position:relative;padding-left:12px;margin-top:12px}.refresh-btn[_ngcontent-%COMP%]{position:absolute;right:6px;top:17px;cursor:pointer}.refresh-btn[_ngcontent-%COMP%]:hover{color:#007cbb}.hide-create[_ngcontent-%COMP%]{visibility:hidden!important}.rightPos[_ngcontent-%COMP%]{position:absolute;right:20px;height:32px;z-index:100}.relative[_ngcontent-%COMP%]{position:relative}"]}),h})();var ee=i(2787);const te=[{path:"",component:k}];let re=(()=>{var s;class h{}return(s=h).\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[n.m,ee.Bz.forChild(te)]}),h})()},927:(b,U,i)=>{i.d(U,{z:()=>M});var n=i(5879),A=i(8645),G=i(3620),f=i(6223),P=i(6814),E=i(8280);const C=["inputElement"];function m(T,e){1&T&&n._UZ(0,"span",4)}let M=(()=>{var T;class e{set filterPlaceholder(l){this.placeHolder=l}constructor(l){this.cd=l,this.placeHolder="",this.filterTerms=new A.x,this.isExpanded=!1,this.filterEvt=new n.vpe,this.openFlag=new n.vpe,this.readonly=null,this.expandMode=!1,this.withDivider=!1}ngOnInit(){this.filterTerms.pipe((0,G.b)(500)).subscribe(l=>{this.filterEvt.emit(l)})}valueChange(){this.filterTerms.next(this.currentValue&&this.currentValue.trim())}inputFocus(){this.openFlag.emit(this.isExpanded)}onClick(){this.expandMode||(this.isExpanded=!this.isExpanded,this.isExpanded&&(this.cd.detectChanges(),this.inputElement.nativeElement.focus()),this.openFlag.emit(this.isExpanded))}get isShowSearchBox(){return this.expandMode||!this.expandMode&&this.isExpanded}}return(T=e).\u0275fac=function(l){return new(l||T)(n.Y36(n.sBO))},T.\u0275cmp=n.Xpm({type:T,selectors:[["hbr-filter"]],viewQuery:function(l,p){if(1&l&&n.Gf(C,5),2&l){let g;n.iGM(g=n.CRH())&&(p.inputElement=g.first)}},inputs:{readonly:"readonly",currentValue:"currentValue",filterPlaceholder:"filterPlaceholder",expandMode:"expandMode",withDivider:"withDivider",width:"width"},outputs:{filterEvt:"filterEvt",openFlag:"openFlag"},decls:5,vars:9,consts:[["shape","search","size","20",1,"search-btn",3,"click"],["type","text","autofocus","",1,"filter-input","clr-input",3,"hidden","placeholder","ngModel","keyup","focus","ngModelChange"],["inputElement",""],["class","filter-divider",4,"ngIf"],[1,"filter-divider"]],template:function(l,p){1&l&&(n.TgZ(0,"span")(1,"clr-icon",0),n.NdJ("click",function(){return p.onClick()}),n.qZA(),n.TgZ(2,"input",1,2),n.NdJ("keyup",function(){return p.valueChange()})("focus",function(){return p.inputFocus()})("ngModelChange",function(u){return p.currentValue=u}),n.qZA(),n.YNc(4,m,1,0,"span",3),n.qZA()),2&l&&(n.xp6(1),n.ekj("filter-icon",p.isShowSearchBox),n.xp6(1),n.Udp("width",p.width,"px"),n.s9C("placeholder",p.placeHolder),n.Q6J("hidden",!p.isShowSearchBox)("ngModel",p.currentValue),n.uIk("readOnly",p.readonly),n.xp6(2),n.Q6J("ngIf",p.withDivider))},dependencies:[f.Fj,f.JJ,f.On,P.O5,E.qvL],styles:[".filter-icon[_ngcontent-%COMP%]{position:relative;right:-20px}.filter-divider[_ngcontent-%COMP%]{display:inline-block;height:16px;width:1px;padding-top:12px;padding-bottom:12px;position:relative;top:9px;margin-right:6px;margin-left:6px}.search-btn[_ngcontent-%COMP%]{cursor:pointer}.search-btn[_ngcontent-%COMP%]:hover{color:#007cbb}.filter-input[_ngcontent-%COMP%]{padding-left:24px}"]}),e})()}}]);