"use strict";(self.webpackChunkharbor_portal=self.webpackChunkharbor_portal||[]).push([[4529],{4529:(B,S,a)=>{a.r(S),a.d(S,{MemberModule:()=>ce});var d=a(2787),I=a(4554),O=a(4716),C=a(7398),x=a(6306),U=a(8504),Z=a(9315),A=a(3620),v=a(4664),e=a(5879),_=a(8645),M=a(2096),u=a(208),i=a(8280),g=a(8577),L=a(1695),y=a(3419),h=a(6223),T=a(6814),P=a(9515);const j=["memberForm"];function F(l,c){if(1&l){const o=e.EpF();e.TgZ(0,"li",30),e.NdJ("click",function(){const n=e.CHM(o).$implicit,s=e.oxw();return e.KtG(s.selectedName(n.username))}),e._uU(1),e.qZA()}if(2&l){const o=c.$implicit;e.xp6(1),e.hij(" ",o.username," ")}}function q(l,c){if(1&l&&(e.TgZ(0,"clr-control-error",31),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&l){const o=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,o.memberTooltip)," ")}}let w=(()=>{var l;class c{constructor(r,t,n,s){this.memberService=r,this.userService=t,this.messageHandlerService=n,this.route=s,this.member={},this.addMemberOpened=!1,this.staticBackdrop=!0,this.closable=!1,this.added=new e.vpe,this.isMemberNameValid=!0,this.memberTooltip="MEMBER.USERNAME_IS_REQUIRED",this.nameChecker=new _.x,this.searcher=new _.x,this.checkOnGoing=!1,this.searchedUserLists=[],this.btnStatus=i.xp5.DEFAULT,this.roleId=1}ngOnInit(){let t,r=this.route.snapshot.parent.parent.data;r&&(t=r.projectResolver.has_project_admin_role),t&&(this.searcherSub||(this.searcherSub=this.searcher.pipe((0,A.b)(500),(0,v.w)(n=>n?this.userService.searchUsers({page:1,pageSize:10,username:n}):(0,M.of)([]))).subscribe(n=>{n&&(this.searchedUserLists=n)})),this.nameCheckerSub||(this.nameCheckerSub=this.nameChecker.pipe((0,A.b)(500),(0,v.w)(n=>n?(this.checkOnGoing=!0,this.memberService.listProjectMembers({page:1,pageSize:10,projectNameOrId:this.projectId.toString(),entityname:n}).pipe((0,O.x)(()=>this.checkOnGoing=!1))):(0,M.of)([]))).subscribe(n=>{n&&n.length&&n.filter(s=>s.entity_name===this.member.username).length>0&&(this.isMemberNameValid=!1,this.memberTooltip="MEMBER.USERNAME_ALREADY_EXISTS")})))}ngOnDestroy(){this.nameCheckerSub&&(this.nameCheckerSub.unsubscribe(),this.nameCheckerSub=null),this.searcherSub&&(this.searcherSub.unsubscribe(),this.searcherSub=null)}onSubmit(){!this.member.username||0===this.member.username.length||(this.btnStatus=i.xp5.LOADING,this.memberService.createProjectMember({projectNameOrId:this.projectId.toString(),projectMember:{role_id:this.roleId,member_user:this.member}}).subscribe(()=>{this.addMemberOpened=!1,this.btnStatus=i.xp5.SUCCESS,this.messageHandlerService.showSuccess("MEMBER.ADDED_SUCCESS"),this.added.emit(!0)},r=>{this.btnStatus=i.xp5.ERROR,this.inlineAlert.showInlineError(r)}))}selectedName(r){this.member.username=r,this.nameChecker.next(r),this.searchedUserLists=[]}onCancel(){this.addMemberOpened=!1}leaveInput(){this.searchedUserLists=[]}openAddMemberModal(){this.currentForm.reset({member_role:1}),this.inlineAlert.close(),this.member={},this.addMemberOpened=!0,this.member.username="",this.isMemberNameValid=!0,this.memberTooltip="MEMBER.USERNAME_IS_REQUIRED",this.searchedUserLists=[]}handleValidation(){this.nameChecker.next(this.member.username),this.searcher.next(this.member.username),this.member.username?this.isMemberNameValid=!0:(this.searchedUserLists=[],this.isMemberNameValid=!1,this.memberTooltip="MEMBER.USERNAME_IS_REQUIRED")}isValid(){return this.currentForm&&this.currentForm.valid&&this.isMemberNameValid&&!this.checkOnGoing}}return(l=c).\u0275fac=function(r){return new(r||l)(e.Y36(g.n),e.Y36(L.K),e.Y36(y.d),e.Y36(d.gz))},l.\u0275cmp=e.Xpm({type:l,selectors:[["add-member"]],viewQuery:function(r,t){if(1&r&&(e.Gf(j,7),e.Gf(u.l,5)),2&r){let n;e.iGM(n=e.CRH())&&(t.currentForm=n.first),e.iGM(n=e.CRH())&&(t.inlineAlert=n.first)}},inputs:{projectId:"projectId"},outputs:{added:"added"},decls:62,vars:56,consts:[[3,"clrModalOpen","clrModalStaticBackdrop","clrModalClosable","clrModalOpenChange"],[1,"modal-title"],[1,"modal-body"],[1,"clr-form","clr-form-horizontal"],["memberForm","ngForm"],[1,"clr-form-control"],[1,"required","clr-control-label"],[1,"clr-control-container"],[1,"clr-input-wrapper",3,"mouseleave"],["type","text","id","member_name","name","member_name","required","","autocomplete","off",1,"clr-input",3,"ngModel","ngModelChange","keyup"],["memberName","ngModel"],["shape","exclamation-circle",1,"clr-validate-icon"],[1,"spinner","spinner-inline",3,"hidden"],[1,"selectBox"],[3,"click",4,"ngFor","ngForOf"],["class","tooltip-content",4,"ngIf"],[1,"clr-control-label"],["clrRadio","","type","radio","name","member_role","id","checkrads_project_admin",3,"value","ngModel","ngModelChange"],["for","checkrads_project_admin"],["clrRadio","","type","radio","name","member_role","id","checkrads_project_maintainer",3,"value","ngModel","ngModelChange"],["for","checkrads_project_maintainer"],["clrRadio","","type","radio","name","member_role","id","checkrads_developer",3,"value","ngModel","ngModelChange"],["for","checkrads_developer"],["clrRadio","","type","radio","name","member_role","id","checkrads_guest",3,"value","ngModel","ngModelChange"],["for","checkrads_guest"],["clrRadio","","type","radio","name","member_role","id","checkrads_limited_guest",3,"value","ngModel","ngModelChange"],["for","checkrads_limited_guest"],[1,"modal-footer"],["type","button",1,"btn","btn-outline",3,"click"],["type","button",1,"btn","btn-primary",3,"clrLoading","disabled","click"],[3,"click"],[1,"tooltip-content"]],template:function(r,t){if(1&r&&(e.TgZ(0,"clr-modal",0),e.NdJ("clrModalOpenChange",function(s){return t.addMemberOpened=s}),e.TgZ(1,"h3",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"inline-alert",1),e.TgZ(6,"label"),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"form",3,4)(11,"div",5)(12,"label",6),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"div",7)(16,"div",8),e.NdJ("mouseleave",function(){return t.leaveInput()}),e.TgZ(17,"input",9,10),e.NdJ("ngModelChange",function(s){return t.member.username=s})("keyup",function(){return t.handleValidation()}),e.qZA(),e._UZ(19,"clr-icon",11)(20,"span",12),e.TgZ(21,"div",13)(22,"ul"),e.YNc(23,F,2,1,"li",14),e.qZA()()(),e.YNc(24,q,3,3,"clr-control-error",15),e.qZA()(),e.TgZ(25,"div",5)(26,"label",16),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"div",7)(30,"clr-radio-wrapper")(31,"input",17),e.NdJ("ngModelChange",function(s){return t.roleId=s}),e.qZA(),e.TgZ(32,"label",18),e._uU(33),e.ALo(34,"translate"),e.qZA()(),e.TgZ(35,"clr-radio-wrapper")(36,"input",19),e.NdJ("ngModelChange",function(s){return t.roleId=s}),e.qZA(),e.TgZ(37,"label",20),e._uU(38),e.ALo(39,"translate"),e.qZA()(),e.TgZ(40,"clr-radio-wrapper")(41,"input",21),e.NdJ("ngModelChange",function(s){return t.roleId=s}),e.qZA(),e.TgZ(42,"label",22),e._uU(43),e.ALo(44,"translate"),e.qZA()(),e.TgZ(45,"clr-radio-wrapper")(46,"input",23),e.NdJ("ngModelChange",function(s){return t.roleId=s}),e.qZA(),e.TgZ(47,"label",24),e._uU(48),e.ALo(49,"translate"),e.qZA()(),e.TgZ(50,"clr-radio-wrapper")(51,"input",25),e.NdJ("ngModelChange",function(s){return t.roleId=s}),e.qZA(),e.TgZ(52,"label",26),e._uU(53),e.ALo(54,"translate"),e.qZA()()()()()(),e.TgZ(55,"div",27)(56,"button",28),e.NdJ("click",function(){return t.onCancel()}),e._uU(57),e.ALo(58,"translate"),e.qZA(),e.TgZ(59,"button",29),e.NdJ("click",function(){return t.onSubmit()}),e._uU(60),e.ALo(61,"translate"),e.qZA()()()),2&r){const n=e.MAs(18);e.Q6J("clrModalOpen",t.addMemberOpened)("clrModalStaticBackdrop",t.staticBackdrop)("clrModalClosable",t.closable),e.xp6(2),e.Oqu(e.lcZ(3,34,"MEMBER.NEW_MEMBER")),e.xp6(5),e.Oqu(e.lcZ(8,36,"MEMBER.NEW_USER_INFO")),e.xp6(6),e.Oqu(e.lcZ(14,38,"MEMBER.NAME")),e.xp6(2),e.ekj("clr-error",n.invalid&&(n.touched||n.dirty)||!t.isMemberNameValid),e.xp6(2),e.Q6J("ngModel",t.member.username),e.xp6(3),e.Q6J("hidden",!t.checkOnGoing),e.xp6(1),e.Udp("display",t.searchedUserLists.length?"block":"none"),e.xp6(2),e.Q6J("ngForOf",t.searchedUserLists),e.xp6(1),e.Q6J("ngIf",n.invalid&&(n.touched||n.dirty)||!t.isMemberNameValid),e.xp6(3),e.Oqu(e.lcZ(28,40,"MEMBER.ROLE")),e.xp6(4),e.Q6J("value",1)("ngModel",t.roleId),e.xp6(2),e.Oqu(e.lcZ(34,42,"MEMBER.PROJECT_ADMIN")),e.xp6(3),e.Q6J("value",4)("ngModel",t.roleId),e.xp6(2),e.Oqu(e.lcZ(39,44,"MEMBER.PROJECT_MAINTAINER")),e.xp6(3),e.Q6J("value",2)("ngModel",t.roleId),e.xp6(2),e.Oqu(e.lcZ(44,46,"MEMBER.DEVELOPER")),e.xp6(3),e.Q6J("value",3)("ngModel",t.roleId),e.xp6(2),e.Oqu(e.lcZ(49,48,"MEMBER.GUEST")),e.xp6(3),e.Q6J("value",5)("ngModel",t.roleId),e.xp6(2),e.Oqu(e.lcZ(54,50,"MEMBER.LIMITED_GUEST")),e.xp6(4),e.hij(" ",e.lcZ(58,52,"BUTTON.CANCEL")," "),e.xp6(2),e.Q6J("clrLoading",t.btnStatus)("disabled",!t.isValid()),e.xp6(1),e.hij(" ",e.lcZ(61,54,"BUTTON.OK")," ")}},dependencies:[h._Y,h.Fj,h._,h.JJ,h.JL,h.Q7,h.On,h.F,i.qvL,i.qAN,i.VLi,i.cCV,i.MPb,i.MgK,i.VqA,i.asN,i.EeQ,T.sg,T.O5,u.l,P.X$],styles:[".form-group-label-override[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.selectBox[_ngcontent-%COMP%]{position:absolute;width:173px;height:auto;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-right-width:2px;border-bottom-width:2px;border-radius:6px;box-shadow:0 5px 10px #0003;z-index:100}.selectBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:3px 20px;cursor:pointer}.selectBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#262626;background-image:linear-gradient(180deg,#f5f5f5 0,#e8e8e8);background-repeat:repeat-x}.modal-body[_ngcontent-%COMP%]{overflow:visible}"]}),c})();var f=a(2141),b=a(6126),R=a(27),Q=a(3924),Y=a(6266),N=a(1691),k=a(6682),V=a(3344);const H=["groupForm"];function z(l,c){if(1&l){const o=e.EpF();e.TgZ(0,"li",21),e.NdJ("click",function(){const n=e.CHM(o).$implicit,s=e.oxw();return e.KtG(s.selectGroup(n.group_name))}),e._uU(1),e.qZA()}if(2&l){const o=c.$implicit;e.xp6(1),e.hij(" ",o.group_name," ")}}function K(l,c){if(1&l&&(e.TgZ(0,"clr-control-error",22),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&l){const o=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,o.groupTooltip)," ")}}function W(l,c){if(1&l){const o=e.EpF();e.TgZ(0,"clr-radio-wrapper")(1,"input",23),e.NdJ("ngModelChange",function(t){e.CHM(o);const n=e.oxw();return e.KtG(n.roleId=t)}),e.qZA(),e.TgZ(2,"label",24),e._uU(3),e.ALo(4,"translate"),e.qZA()()}if(2&l){const o=c.$implicit,r=e.oxw();e.xp6(1),e.s9C("id","check_root_project_"+o.NAME),e.Q6J("value",o.VALUE)("ngModel",r.roleId),e.xp6(1),e.s9C("for","check_root_project_"+o.NAME),e.xp6(1),e.Oqu(e.lcZ(4,5,o.LABEL))}}let J=(()=>{var l;class c{constructor(r,t,n,s){this.memberService=r,this.appConfigService=t,this.messageHandlerService=n,this.userGroupService=s,this.projectRoots=R.wU,this.memberGroup={group_name:""},this.roleId=1,this.addGroupOpened=!1,this.staticBackdrop=!0,this.closable=!1,this.added=new e.vpe,this.checkOnGoing=!1,this.searchedGroups=[],this.groupChecker=new _.x,this.groupSearcher=new _.x,this.btnStatus=i.xp5.DEFAULT,this.isGroupNameValid=!0,this.groupTooltip="MEMBER.GROUP_NAME_REQUIRED",this.isNameChecked=!1}ngOnInit(){this.groupCheckerSub||(this.groupCheckerSub=this.groupChecker.pipe((0,A.b)(500),(0,v.w)(r=>{if(r){this.checkOnGoing=!0;const t={projectNameOrId:this.projectId.toString(),page:1,pageSize:10,entityname:r};return this.memberService.listProjectMembers(t).pipe((0,O.x)(()=>this.checkOnGoing=!1))}return(0,M.of)([])})).subscribe(r=>{r&&r.length&&r.filter(t=>t.entity_name===this.memberGroup.group_name).length>0&&(this.isGroupNameValid=!1,this.groupTooltip="MEMBER.GROUP_ALREADY_ADDED")})),this.groupSearcherSub||(this.groupSearcherSub=this.groupSearcher.pipe((0,A.b)(500),(0,v.w)(r=>r?this.userGroupService.searchUserGroups({page:1,pageSize:10,groupname:r}):(0,M.of)([]))).subscribe(r=>{if(r&&(this.searchedGroups=r),this.appConfigService.isLdapMode()&&this.memberGroup.group_name){let t=!1;this.searchedGroups.forEach(n=>{n.group_name===this.memberGroup.group_name&&(t=!0)}),t?this.isNameChecked=!0:(this.isGroupNameValid=!1,this.groupTooltip="MEMBER.NON_EXISTENT_GROUP")}}))}ngOnDestroy(){this.groupCheckerSub&&(this.groupCheckerSub.unsubscribe(),this.groupCheckerSub=null),this.groupSearcherSub&&(this.groupSearcherSub.unsubscribe(),this.groupSearcherSub=null)}createGroupAsMember(){this.btnStatus=i.xp5.LOADING,this.appConfigService.isHttpAuthMode()&&(this.memberGroup.group_type=R.YT.HTTP_TYPE),this.appConfigService.isLdapMode()&&(this.memberGroup.group_type=R.YT.LDAP_TYPE),this.appConfigService.isOidcMode()&&(this.memberGroup.group_type=R.YT.OIDC_TYPE),this.memberService.createProjectMember({projectNameOrId:this.projectId.toString(),projectMember:{role_id:this.roleId,member_group:this.memberGroup}}).subscribe(r=>{this.messageHandlerService.showSuccess("MEMBER.ADDED_SUCCESS"),this.btnStatus=i.xp5.SUCCESS,this.addGroupOpened=!1,this.added.emit(!0)},r=>{this.btnStatus=i.xp5.ERROR,this.inlineAlert.showInlineError(r),this.added.emit(!1)})}onSubmit(){this.createGroupAsMember()}onCancel(){this.addGroupOpened=!1}openAddGroupModal(){this.currentForm.reset({member_role:1}),this.addGroupOpened=!0,this.inlineAlert.close(),this.memberGroup={group_name:""},this.isGroupNameValid=!0,this.groupTooltip="MEMBER.GROUP_NAME_REQUIRED",this.searchedGroups=[]}isValid(){return!(this.appConfigService.isLdapMode()&&!this.isNameChecked)&&this.isGroupNameValid&&this.currentForm&&this.currentForm.valid&&!this.checkOnGoing}selectGroup(r){this.appConfigService.isLdapMode()&&(this.isNameChecked=!0,this.isGroupNameValid=!0),this.memberGroup.group_name=r,this.groupChecker.next(r),this.searchedGroups=[]}leaveInput(){this.searchedGroups=[]}input(){this.appConfigService.isLdapMode()&&(this.isNameChecked=!1),this.groupChecker.next(this.memberGroup.group_name),this.groupSearcher.next(this.memberGroup.group_name),this.memberGroup.group_name?this.isGroupNameValid=!0:(this.searchedGroups=[],this.isGroupNameValid=!1,this.groupTooltip="MEMBER.GROUP_NAME_REQUIRED")}}return(l=c).\u0275fac=function(r){return new(r||l)(e.Y36(g.n),e.Y36(k._),e.Y36(y.d),e.Y36(V.o))},l.\u0275cmp=e.Xpm({type:l,selectors:[["add-group"]],viewQuery:function(r,t){if(1&r&&(e.Gf(H,7),e.Gf(u.l,5)),2&r){let n;e.iGM(n=e.CRH())&&(t.currentForm=n.first),e.iGM(n=e.CRH())&&(t.inlineAlert=n.first)}},inputs:{projectId:"projectId"},outputs:{added:"added"},decls:39,vars:35,consts:[[3,"clrModalOpen","clrModalStaticBackdrop","clrModalClosable","clrModalOpenChange"],[1,"modal-title"],[1,"modal-body"],[1,"clr-form","clr-form-horizontal"],["groupForm","ngForm"],[1,"clr-form-control"],[1,"required","clr-control-label"],[1,"clr-control-container"],[1,"clr-input-wrapper",3,"mouseleave"],["type","text","id","group-name","name","groupName","required","","autocomplete","off",1,"clr-input",3,"ngModel","ngModelChange","keyup"],["groupName","ngModel"],["shape","exclamation-circle",1,"clr-validate-icon"],[1,"spinner","spinner-inline",3,"hidden"],[1,"selectBox"],[3,"click",4,"ngFor","ngForOf"],["class","tooltip-content",4,"ngIf"],[1,"clr-control-label"],[4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline",3,"click"],["type","button",1,"btn","btn-primary",3,"clrLoading","disabled","click"],[3,"click"],[1,"tooltip-content"],["clrRadio","","type","radio","name","member_role",3,"id","value","ngModel","ngModelChange"],[3,"for"]],template:function(r,t){if(1&r&&(e.TgZ(0,"clr-modal",0),e.NdJ("clrModalOpenChange",function(s){return t.addGroupOpened=s}),e.TgZ(1,"h3",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"inline-alert",1),e.TgZ(6,"label"),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"form",3,4)(11,"div",5)(12,"label",6),e._uU(13),e.ALo(14,"translate"),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"div",7)(17,"div",8),e.NdJ("mouseleave",function(){return t.leaveInput()}),e.TgZ(18,"input",9,10),e.NdJ("ngModelChange",function(s){return t.memberGroup.group_name=s})("keyup",function(){return t.input()}),e.qZA(),e._UZ(20,"clr-icon",11)(21,"span",12),e.TgZ(22,"div",13)(23,"ul"),e.YNc(24,z,2,1,"li",14),e.qZA()()(),e.YNc(25,K,3,3,"clr-control-error",15),e.qZA()(),e.TgZ(26,"div",5)(27,"label",16),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"div",7),e.YNc(31,W,5,7,"clr-radio-wrapper",17),e.qZA()()()(),e.TgZ(32,"div",18)(33,"button",19),e.NdJ("click",function(){return t.onCancel()}),e._uU(34),e.ALo(35,"translate"),e.qZA(),e.TgZ(36,"button",20),e.NdJ("click",function(){return t.onSubmit()}),e._uU(37),e.ALo(38,"translate"),e.qZA()()()),2&r){const n=e.MAs(19);e.Q6J("clrModalOpen",t.addGroupOpened)("clrModalStaticBackdrop",t.staticBackdrop)("clrModalClosable",t.closable),e.xp6(2),e.Oqu(e.lcZ(3,21,"GROUP.NEW_MEMBER")),e.xp6(5),e.Oqu(e.lcZ(8,23,"GROUP.NEW_USER_INFO")),e.xp6(6),e.AsE("",e.lcZ(14,25,"GROUP.GROUP")," ",e.lcZ(15,27,"GROUP.NAME"),""),e.xp6(3),e.ekj("clr-error",n.invalid&&(n.touched||n.dirty)||!t.isGroupNameValid),e.xp6(2),e.Q6J("ngModel",t.memberGroup.group_name),e.xp6(3),e.Q6J("hidden",!t.checkOnGoing),e.xp6(1),e.Udp("display",t.searchedGroups.length?"block":"none"),e.xp6(2),e.Q6J("ngForOf",t.searchedGroups),e.xp6(1),e.Q6J("ngIf",n.invalid&&(n.touched||n.dirty)||!t.isGroupNameValid),e.xp6(3),e.Oqu(e.lcZ(29,29,"GROUP.ROLE")),e.xp6(3),e.Q6J("ngForOf",t.projectRoots),e.xp6(3),e.hij(" ",e.lcZ(35,31,"BUTTON.CANCEL")," "),e.xp6(2),e.Q6J("clrLoading",t.btnStatus)("disabled",!t.isValid()),e.xp6(1),e.hij(" ",e.lcZ(38,33,"BUTTON.OK")," ")}},dependencies:[h._Y,h.Fj,h._,h.JJ,h.JL,h.Q7,h.On,h.F,i.qvL,i.qAN,i.VLi,i.cCV,i.MPb,i.MgK,i.VqA,i.asN,i.EeQ,T.sg,T.O5,u.l,P.X$],styles:[".form-group-label-override[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.selectBox[_ngcontent-%COMP%]{position:absolute;width:173px;height:auto;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-right-width:2px;border-bottom-width:2px;border-radius:6px;box-shadow:0 5px 10px #0003;z-index:100}.selectBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:3px 20px;cursor:pointer}.selectBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#262626;background-image:linear-gradient(180deg,#f5f5f5 0,#e8e8e8);background-repeat:repeat-x}"]}),c})();var $=a(3612),X=a(1575),ee=a(7546),te=a(7655),re=a(927);function ne(l,c){if(1&l){const o=e.EpF();e.TgZ(0,"clr-dropdown-menu")(1,"label",21),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",22),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.changeMembersRole(t.selectedRow,1))}),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"button",22),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.changeMembersRole(t.selectedRow,4))}),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"button",22),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.changeMembersRole(t.selectedRow,2))}),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"button",22),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.changeMembersRole(t.selectedRow,3))}),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"button",22),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.changeMembersRole(t.selectedRow,5))}),e._uU(17),e.ALo(18,"translate"),e.qZA(),e._UZ(19,"div",23),e.TgZ(20,"button",22),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.openDeleteMembersDialog(t.selectedRow))}),e._uU(21),e.ALo(22,"translate"),e.qZA()()}if(2&l){const o=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,13,"MEMBER.SET_ROLE")),e.xp6(2),e.Q6J("disabled",!(o.selectedRow.length&&o.hasUpdateMemberPermission)||o.onlySelf),e.xp6(1),e.hij(" ",e.lcZ(6,15,"MEMBER.PROJECT_ADMIN")," "),e.xp6(2),e.Q6J("disabled",!(o.selectedRow.length&&o.hasUpdateMemberPermission)||o.onlySelf),e.xp6(1),e.hij(" ",e.lcZ(9,17,"MEMBER.PROJECT_MAINTAINER")," "),e.xp6(2),e.Q6J("disabled",!(o.selectedRow.length&&o.hasUpdateMemberPermission)||o.onlySelf),e.xp6(1),e.hij(" ",e.lcZ(12,19,"MEMBER.DEVELOPER")," "),e.xp6(2),e.Q6J("disabled",!(o.selectedRow.length&&o.hasUpdateMemberPermission)||o.onlySelf),e.xp6(1),e.hij(" ",e.lcZ(15,21,"MEMBER.GUEST")," "),e.xp6(2),e.Q6J("disabled",!(o.selectedRow.length&&o.hasUpdateMemberPermission)||o.onlySelf),e.xp6(1),e.hij(" ",e.lcZ(18,23,"MEMBER.LIMITED_GUEST")," "),e.xp6(3),e.Q6J("disabled",!(o.selectedRow.length&&o.hasDeleteMemberPermission)||o.onlySelf),e.xp6(1),e.hij(" ",e.lcZ(22,25,"MEMBER.REMOVE")," ")}}function oe(l,c){1&l&&e._UZ(0,"span",26)}function ie(l,c){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&l){const o=e.oxw().$implicit,r=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,r.roleInfo[o.role_id]))}}function se(l,c){if(1&l&&(e.TgZ(0,"clr-dg-row",24)(1,"clr-dg-cell"),e._uU(2),e.qZA(),e.TgZ(3,"clr-dg-cell"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"clr-dg-cell"),e.YNc(7,oe,1,0,"span",25),e.YNc(8,ie,3,3,"span",19),e.qZA()()),2&l){const o=c.$implicit,r=e.oxw();e.Q6J("clrDgItem",o),e.xp6(2),e.Oqu(o.entity_name),e.xp6(2),e.Oqu(e.lcZ(5,5,r.member_type_toString(o.entity_type))),e.xp6(3),e.Q6J("ngIf",r.ChangeRoleOngoing(o.id)),e.xp6(1),e.Q6J("ngIf",!r.ChangeRoleOngoing(o.id))}}function le(l,c){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&l){e.oxw();const o=e.MAs(40);e.xp6(1),e.lnq("",o.firstItem+1," - ",o.lastItem+1," ",e.lcZ(2,3,"MEMBER.OF")," ")}}const ae=function(){return[15,25,50]},de=[{path:"",component:(()=>{var l;class c{constructor(r,t,n,s,p,m,E,D,pe,ue,he){this.route=r,this.router=t,this.memberService=n,this.translate=s,this.messageHandlerService=p,this.OperateDialogService=m,this.session=E,this.operationService=D,this.appConfigService=pe,this.userPermissionService=ue,this.errorHandlerEntity=he,this.roleInfo=R.Hp,this.batchOps="delete",this.selectedRow=[],this.isDelete=!1,this.isChangeRole=!1,this.loading=!0,this.isChangingRole=!1,this.batchChangeRoleInfos={},this.page=1,this.pageSize=(0,N.tb)(N.V2.MEMBER_COMPONENT),this.total=0,this.delSub=m.confirmationConfirm$.subscribe(G=>{G&&1===G.state&&2===G.source&&"delete"===this.batchOps&&this.deleteMembers(G.data)})}ngOnDestroy(){this.delSub&&this.delSub.unsubscribe()}ngOnInit(){this.projectId=+this.route.snapshot.parent.parent.params.id,this.currentUser=this.session.getCurrentUser(),this.getMemberPermissionRule(this.projectId),this.appConfigService.isLdapMode()&&(this.isLdapMode=!0),this.appConfigService.isHttpAuthMode()&&(this.isHttpAuthMode=!0),this.appConfigService.isOidcMode()&&(this.isOidcMode=!0)}doSearch(r){this.searchMember=r,this.retrieve(this.searchMember)}refresh(){this.page=1,this.total=0,this.selectedRow=[],this.searchMember=null,this.retrieve("")}clrDgRefresh(r){this.retrieve("",r)}retrieve(r,t){t&&t.page&&(this.pageSize=t.page.size,(0,N.Pe)(N.V2.MEMBER_COMPONENT,this.pageSize)),this.loading=!0,this.selectedRow=[],this.memberService.listProjectMembersResponse({entityname:r,page:this.page,pageSize:this.pageSize,projectNameOrId:this.projectId.toString()}).pipe((0,O.x)(()=>{this.loading=!1})).subscribe(n=>{if(n.headers){let s=n.headers.get("X-Total-Count");s&&(this.total=parseInt(s,0))}this.members=n.body||[]},n=>{this.messageHandlerService.handleError(n)})}get onlySelf(){return 1===this.selectedRow.length&&"u"===this.selectedRow[0].entity_type&&this.selectedRow[0].entity_id===this.currentUser.user_id}member_type_toString(r){return"u"===r?"MEMBER.USER_TYPE":"MEMBER.GROUP_TYPE"}openAddMemberModal(){this.addMemberComponent.openAddMemberModal()}addedMember(r){this.refresh()}openAddGroupModal(){this.addGroupComponent.openAddGroupModal()}addedGroup(r){this.searchMember="",this.retrieve("")}changeMembersRole(r,t){if(!r)return;let n=(p,m)=>this.memberService.updateProjectMember({projectNameOrId:this.projectId.toString(),mid:m.id,role:{role_id:t}}).pipe((0,C.U)(()=>this.batchChangeRoleInfos[m.id]="done"),(0,x.K)(E=>(this.messageHandlerService.handleError(E),(0,U._)(E))));this.batchChangeRoleInfos={};let s=[];r.forEach(p=>{"u"===p.entity_type&&p.entity_id===this.currentUser.user_id||(this.batchChangeRoleInfos[p.id]="pending",s.push(n(0,p)))}),(0,Z.D)(...s).subscribe(()=>{this.refresh()})}ChangeRoleOngoing(r){return"pending"===this.batchChangeRoleInfos[r]}openDeleteMembersDialog(r){this.batchOps="delete";let t=[];if(r&&r.length){r.forEach(s=>{t.push(s.entity_name)});let n=new Y.c("MEMBER.DELETION_TITLE","MEMBER.DELETION_SUMMARY",t.join(","),r,2,2);this.OperateDialogService.openComfirmDialog(n)}}deleteMembers(r){if(!r)return;let t=[],n=s=>{let p=new b.gB;return p.name="u"===s.entity_type?"OPERATION.DELETE_MEMBER":"OPERATION.DELETE_GROUP",p.data.id=s.id,p.state=b.yb.progressing,p.data.name=s.entity_name,this.operationService.publishInfo(p),"u"===s.entity_type&&s.entity_id===this.currentUser.user_id?(this.translate.get("BATCH.DELETED_FAILURE").subscribe(m=>{(0,b.hm)(p,b.yb.failure,m)}),null):this.memberService.deleteProjectMember({projectNameOrId:this.projectId.toString(),mid:s.id}).pipe((0,C.U)(m=>{this.translate.get("BATCH.DELETED_SUCCESS").subscribe(E=>{(0,b.hm)(p,b.yb.success)})}),(0,x.K)(m=>{const E=(0,Q.Po)(m);return this.translate.get(E).subscribe(D=>(0,b.hm)(p,b.yb.failure,D)),(0,U._)(m)}))};r.forEach(s=>t.push(n(s))),(0,Z.D)(...t).subscribe(()=>{this.batchOps="idle",this.refresh()},s=>{this.errorHandlerEntity.error(s)})}getMemberPermissionRule(r){let t=this.userPermissionService.getPermission(r,f._W.MEMBER.KEY,f._W.MEMBER.VALUE.CREATE),n=this.userPermissionService.getPermission(r,f._W.MEMBER.KEY,f._W.MEMBER.VALUE.UPDATE),s=this.userPermissionService.getPermission(r,f._W.MEMBER.KEY,f._W.MEMBER.VALUE.DELETE);(0,Z.D)(t,n,s).subscribe(p=>{this.hasCreateMemberPermission=p[0],this.hasUpdateMemberPermission=p[1],this.hasDeleteMemberPermission=p[2]},p=>this.errorHandlerEntity.error(p))}}return(l=c).\u0275fac=function(r){return new(r||l)(e.Y36(d.gz),e.Y36(d.F0),e.Y36(g.n),e.Y36(P.sK),e.Y36(y.d),e.Y36($.O),e.Y36(X.m),e.Y36(ee.f9),e.Y36(k._),e.Y36(f.Hx),e.Y36(te.q))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],viewQuery:function(r,t){if(1&r&&(e.Gf(w,5),e.Gf(J,5)),2&r){let n;e.iGM(n=e.CRH())&&(t.addMemberComponent=n.first),e.iGM(n=e.CRH())&&(t.addGroupComponent=n.first)}},decls:49,vars:44,consts:[[1,"row","content-space"],[1,"row","flex-items-xs-between","rightPos"],[1,"flex-xs-middle","option-left"],[1,"flex-xs-middle","option-right"],[3,"withDivider","filterPlaceholder","currentValue","filterEvt"],[1,"refresh-btn",3,"click"],["shape","refresh"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"btn","btn-secondary",3,"disabled","click"],["shape","plus","size","16"],["clrDropdownTrigger","",1,"btn","btn-link",3,"clrCloseMenuOnItemClick"],["id","member-action"],["shape","caret down"],[4,"clrIfOpen"],[1,"datagrid-pt",3,"clrDgSelected","clrDgLoading","clrDgRefresh","clrDgSelectedChange"],[3,"clrDgItem",4,"ngFor","ngForOf"],[3,"clrDgPageSize","clrDgPage","clrDgTotalItems","clrDgPageChange"],["pagination",""],[3,"clrPageSizeOptions"],[4,"ngIf"],[3,"projectId","added"],[1,"dropdown-header"],["clrDropdownItem","",3,"disabled","click"],[1,"dropdown-divider"],[3,"clrDgItem"],["class","spinner spinner-inline",4,"ngIf"],[1,"spinner","spinner-inline"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div")(2,"div",1),e._UZ(3,"div",2),e.TgZ(4,"div",3)(5,"hbr-filter",4),e.NdJ("filterEvt",function(s){return t.doSearch(s)}),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"span",5),e.NdJ("click",function(){return t.refresh()}),e._UZ(8,"clr-icon",6),e.qZA()()()(),e.TgZ(9,"div",7)(10,"clr-dg-action-bar")(11,"button",8),e.NdJ("click",function(){return t.openAddMemberModal()}),e.TgZ(12,"span"),e._UZ(13,"clr-icon",9),e._uU(14),e.ALo(15,"translate"),e.qZA()(),e.TgZ(16,"button",8),e.NdJ("click",function(){return t.openAddGroupModal()}),e.TgZ(17,"span"),e._UZ(18,"clr-icon",9),e._uU(19),e.ALo(20,"translate"),e.qZA()(),e.TgZ(21,"clr-dropdown",10)(22,"span",11),e._uU(23),e.ALo(24,"translate"),e._UZ(25,"clr-icon",12),e.qZA(),e.YNc(26,ne,23,27,"clr-dropdown-menu",13),e.qZA()(),e.TgZ(27,"clr-datagrid",14),e.NdJ("clrDgRefresh",function(s){return t.clrDgRefresh(s)})("clrDgSelectedChange",function(s){return t.selectedRow=s}),e.TgZ(28,"clr-dg-column"),e._uU(29),e.ALo(30,"translate"),e.qZA(),e.TgZ(31,"clr-dg-column"),e._uU(32),e.ALo(33,"translate"),e.qZA(),e.TgZ(34,"clr-dg-column"),e._uU(35),e.ALo(36,"translate"),e.qZA(),e.YNc(37,se,9,7,"clr-dg-row",15),e.TgZ(38,"clr-dg-footer")(39,"clr-dg-pagination",16,17),e.NdJ("clrDgPageChange",function(s){return t.page=s}),e.TgZ(41,"clr-dg-page-size",18),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.YNc(44,le,3,5,"span",19),e._uU(45),e.ALo(46,"translate"),e.qZA()()()(),e.TgZ(47,"add-member",20),e.NdJ("added",function(s){return t.addedMember(s)}),e.qZA(),e.TgZ(48,"add-group",20),e.NdJ("added",function(s){return t.addedGroup(s)}),e.qZA()()),2&r&&(e.xp6(5),e.s9C("filterPlaceholder",e.lcZ(6,25,"MEMBER.FILTER_PLACEHOLDER")),e.Q6J("withDivider",!0)("currentValue",t.searchMember),e.xp6(6),e.Q6J("disabled",!t.hasCreateMemberPermission),e.xp6(3),e.hij("\xa0",e.lcZ(15,27,"MEMBER.USER"),""),e.xp6(2),e.Q6J("disabled",!t.hasCreateMemberPermission||!(t.isLdapMode||t.isHttpAuthMode||t.isOidcMode)),e.xp6(3),e.hij("\xa0",e.lcZ(20,29,"MEMBER.LDAP_GROUP"),""),e.xp6(2),e.Q6J("clrCloseMenuOnItemClick",!1),e.xp6(2),e.Oqu(e.lcZ(24,31,"MEMBER.ACTION")),e.xp6(4),e.Q6J("clrDgSelected",t.selectedRow)("clrDgLoading",t.loading),e.xp6(2),e.Oqu(e.lcZ(30,33,"MEMBER.NAME")),e.xp6(3),e.Oqu(e.lcZ(33,35,"MEMBER.MEMBER_TYPE")),e.xp6(3),e.Oqu(e.lcZ(36,37,"MEMBER.ROLE")),e.xp6(2),e.Q6J("ngForOf",t.members),e.xp6(2),e.Q6J("clrDgPageSize",t.pageSize)("clrDgPage",t.page)("clrDgTotalItems",t.total),e.xp6(2),e.Q6J("clrPageSizeOptions",e.DdM(43,ae)),e.xp6(1),e.Oqu(e.lcZ(43,39,"PAGINATION.PAGE_SIZE")),e.xp6(2),e.Q6J("ngIf",t.total),e.xp6(1),e.AsE(" ",t.total," ",e.lcZ(46,41,"MEMBER.ITEMS")," "),e.xp6(2),e.Q6J("projectId",t.projectId),e.xp6(1),e.Q6J("projectId",t.projectId))},dependencies:[i.C9t,i.Gwl,i.fv_,i.m4W,i.dRQ,i.YYR,i.Ltv,i.Z4N,i.jND,i.KHL,i.PDs,i.Gcc,i.dml,i.Nh1,i.K8c,i.qvL,i.nqY,i.MgK,i.f_W,i.zwp,i.ZUS,i.lU3,T.sg,T.O5,re.z,w,J,P.X$],styles:[".option-left[_ngcontent-%COMP%]{padding-left:16px;position:relative;top:10px}.option-right[_ngcontent-%COMP%]{padding-right:16px}.refresh-btn[_ngcontent-%COMP%]{cursor:pointer}.refresh-btn[_ngcontent-%COMP%]:hover{color:#007cbb}[_nghost-%COMP%]  .btn-group-overflow .dropdown-toggle{line-height:24px;height:24px}.rightPos[_ngcontent-%COMP%]{position:absolute;z-index:100;right:35px;margin-top:4px}clr-datagrid[_ngcontent-%COMP%]     clr-checkbox{position:inherit}[_nghost-%COMP%]  clr-checkbox.checkbox.datagrid-foot-select{position:inherit}.content-space[_ngcontent-%COMP%]{margin-top:28px;position:relative}.datagrid-pt[_ngcontent-%COMP%]{padding-top:0}.dropdown-header[_ngcontent-%COMP%]{text-transform:none;font-size:13px}"]}),c})()}];let ce=(()=>{var l;class c{}return(l=c).\u0275fac=function(r){return new(r||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[d.Bz.forChild(de),I.m]}),c})()},927:(B,S,a)=>{a.d(S,{z:()=>v});var d=a(5879),I=a(8645),O=a(3620),C=a(6223),x=a(6814),U=a(8280);const Z=["inputElement"];function A(e,_){1&e&&d._UZ(0,"span",4)}let v=(()=>{var e;class _{set filterPlaceholder(u){this.placeHolder=u}constructor(u){this.cd=u,this.placeHolder="",this.filterTerms=new I.x,this.isExpanded=!1,this.filterEvt=new d.vpe,this.openFlag=new d.vpe,this.readonly=null,this.expandMode=!1,this.withDivider=!1}ngOnInit(){this.filterTerms.pipe((0,O.b)(500)).subscribe(u=>{this.filterEvt.emit(u)})}valueChange(){this.filterTerms.next(this.currentValue&&this.currentValue.trim())}inputFocus(){this.openFlag.emit(this.isExpanded)}onClick(){this.expandMode||(this.isExpanded=!this.isExpanded,this.isExpanded&&(this.cd.detectChanges(),this.inputElement.nativeElement.focus()),this.openFlag.emit(this.isExpanded))}get isShowSearchBox(){return this.expandMode||!this.expandMode&&this.isExpanded}}return(e=_).\u0275fac=function(u){return new(u||e)(d.Y36(d.sBO))},e.\u0275cmp=d.Xpm({type:e,selectors:[["hbr-filter"]],viewQuery:function(u,i){if(1&u&&d.Gf(Z,5),2&u){let g;d.iGM(g=d.CRH())&&(i.inputElement=g.first)}},inputs:{readonly:"readonly",currentValue:"currentValue",filterPlaceholder:"filterPlaceholder",expandMode:"expandMode",withDivider:"withDivider",width:"width"},outputs:{filterEvt:"filterEvt",openFlag:"openFlag"},decls:5,vars:9,consts:[["shape","search","size","20",1,"search-btn",3,"click"],["type","text","autofocus","",1,"filter-input","clr-input",3,"hidden","placeholder","ngModel","keyup","focus","ngModelChange"],["inputElement",""],["class","filter-divider",4,"ngIf"],[1,"filter-divider"]],template:function(u,i){1&u&&(d.TgZ(0,"span")(1,"clr-icon",0),d.NdJ("click",function(){return i.onClick()}),d.qZA(),d.TgZ(2,"input",1,2),d.NdJ("keyup",function(){return i.valueChange()})("focus",function(){return i.inputFocus()})("ngModelChange",function(L){return i.currentValue=L}),d.qZA(),d.YNc(4,A,1,0,"span",3),d.qZA()),2&u&&(d.xp6(1),d.ekj("filter-icon",i.isShowSearchBox),d.xp6(1),d.Udp("width",i.width,"px"),d.s9C("placeholder",i.placeHolder),d.Q6J("hidden",!i.isShowSearchBox)("ngModel",i.currentValue),d.uIk("readOnly",i.readonly),d.xp6(2),d.Q6J("ngIf",i.withDivider))},dependencies:[C.Fj,C.JJ,C.On,x.O5,U.qvL],styles:[".filter-icon[_ngcontent-%COMP%]{position:relative;right:-20px}.filter-divider[_ngcontent-%COMP%]{display:inline-block;height:16px;width:1px;padding-top:12px;padding-bottom:12px;position:relative;top:9px;margin-right:6px;margin-left:6px}.search-btn[_ngcontent-%COMP%]{cursor:pointer}.search-btn[_ngcontent-%COMP%]:hover{color:#007cbb}.filter-input[_ngcontent-%COMP%]{padding-left:24px}"]}),_})()}}]);