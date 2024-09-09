"use strict";(self.webpackChunkharbor_portal=self.webpackChunkharbor_portal||[]).push([[6809],{6637:(M,R,l)=>{l.d(R,{b:()=>Z});var a=l(9862),g=l(3586),e=l(2181),d=l(7398),I=l(5879),v=l(9462);let Z=(()=>{var _;class y extends g.b{constructor(n,r){super(n,r)}listAllRepositoriesResponse(n){let r=this.newParams(),m=new a.WM;null!=n.sort&&(r=r.set("sort",n.sort.toString())),null!=n.q&&(r=r.set("q",n.q.toString())),null!=n.pageSize&&(r=r.set("page_size",n.pageSize.toString())),null!=n.page&&(r=r.set("page",n.page.toString())),null!=n.XRequestId&&(m=m.set("X-Request-Id",n.XRequestId.toString()));let h=new a.aW("GET",this.rootUrl+"/repositories",null,{headers:m,params:r,responseType:"json"});return this.http.request(h).pipe((0,e.h)(u=>u instanceof a.Zn),(0,d.U)(u=>u))}listAllRepositories(n){return this.listAllRepositoriesResponse(n).pipe((0,d.U)(r=>r.body))}listRepositoriesResponse(n){let r=this.newParams(),m=new a.WM;null!=n.sort&&(r=r.set("sort",n.sort.toString())),null!=n.q&&(r=r.set("q",n.q.toString())),null!=n.pageSize&&(r=r.set("page_size",n.pageSize.toString())),null!=n.page&&(r=r.set("page",n.page.toString())),null!=n.XRequestId&&(m=m.set("X-Request-Id",n.XRequestId.toString()));let h=new a.aW("GET",this.rootUrl+`/projects/${n.projectName}/repositories`,null,{headers:m,params:r,responseType:"json"});return this.http.request(h).pipe((0,e.h)(u=>u instanceof a.Zn),(0,d.U)(u=>u))}listRepositories(n){return this.listRepositoriesResponse(n).pipe((0,d.U)(r=>r.body))}getRepositoryResponse(n){let r=this.newParams(),m=new a.WM;null!=n.XRequestId&&(m=m.set("X-Request-Id",n.XRequestId.toString()));let h=new a.aW("GET",this.rootUrl+`/projects/${n.projectName}/repositories/${n.repositoryName}`,null,{headers:m,params:r,responseType:"json"});return this.http.request(h).pipe((0,e.h)(u=>u instanceof a.Zn),(0,d.U)(u=>u))}getRepository(n){return this.getRepositoryResponse(n).pipe((0,d.U)(r=>r.body))}updateRepositoryResponse(n){let r=this.newParams(),m=new a.WM,f=null;f=n.repository,null!=n.XRequestId&&(m=m.set("X-Request-Id",n.XRequestId.toString()));let h=new a.aW("PUT",this.rootUrl+`/projects/${n.projectName}/repositories/${n.repositoryName}`,f,{headers:m,params:r,responseType:"json"});return this.http.request(h).pipe((0,e.h)(u=>u instanceof a.Zn),(0,d.U)(u=>u))}updateRepository(n){return this.updateRepositoryResponse(n).pipe((0,d.U)(r=>r.body))}deleteRepositoryResponse(n){let r=this.newParams(),m=new a.WM;null!=n.XRequestId&&(m=m.set("X-Request-Id",n.XRequestId.toString()));let h=new a.aW("DELETE",this.rootUrl+`/projects/${n.projectName}/repositories/${n.repositoryName}`,null,{headers:m,params:r,responseType:"json"});return this.http.request(h).pipe((0,e.h)(u=>u instanceof a.Zn),(0,d.U)(u=>u))}deleteRepository(n){return this.deleteRepositoryResponse(n).pipe((0,d.U)(r=>r.body))}}return(_=y).listAllRepositoriesPath="/repositories",_.listRepositoriesPath="/projects/{project_name}/repositories",_.getRepositoryPath="/projects/{project_name}/repositories/{repository_name}",_.updateRepositoryPath="/projects/{project_name}/repositories/{repository_name}",_.deleteRepositoryPath="/projects/{project_name}/repositories/{repository_name}",_.\u0275fac=function(n){return new(n||_)(I.LFG(v.p),I.LFG(a.eN))},_.\u0275prov=I.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),y})()},6809:(M,R,l)=>{l.r(R),l.d(R,{SummaryModule:()=>q});var a=l(2141),g=l(27),e=l(5879),d=l(7655),I=l(6682),v=l(2787),Z=l(6637),_=l(8280),y=l(6814),T=l(9515),n=l(4410);function r(o,p){1&o&&(e.TgZ(0,"div",7),e._UZ(1,"span",8),e.qZA())}function m(o,p){if(1&o&&(e.TgZ(0,"div",10)(1,"h4",11),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"ul",12)(5,"li",13),e._uU(6),e.qZA()()()),2&o){const t=e.oxw(3);e.xp6(2),e.hij(" ",e.lcZ(3,3,"PROJECT.PROXY_CACHE_ENDPOINT")," "),e.xp6(4),e.AsE(" ",null==t.summaryInformation||null==t.summaryInformation.registry?null:t.summaryInformation.registry.name,"-",null==t.summaryInformation||null==t.summaryInformation.registry?null:t.summaryInformation.registry.url," ")}}function f(o,p){if(1&o&&(e.TgZ(0,"div",10)(1,"h4",11),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"ul",12)(5,"li"),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"li"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"li"),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"li"),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"li"),e._uU(18),e.ALo(19,"translate"),e.qZA()()()),2&o){const t=e.oxw(3);e.xp6(2),e.hij(" ",e.lcZ(3,11,"SUMMARY.PROJECT_MEMBER")," "),e.xp6(4),e.AsE(" ",null!=t.summaryInformation&&t.summaryInformation.project_admin_count?null==t.summaryInformation?null:t.summaryInformation.project_admin_count:0," ",e.lcZ(7,13,"SUMMARY.ADMIN")," "),e.xp6(3),e.AsE(" ",null!=t.summaryInformation&&t.summaryInformation.maintainer_count?null==t.summaryInformation?null:t.summaryInformation.maintainer_count:0," ",e.lcZ(10,15,"SUMMARY.MAINTAINER")," "),e.xp6(3),e.AsE(" ",null!=t.summaryInformation&&t.summaryInformation.developer_count?null==t.summaryInformation?null:t.summaryInformation.developer_count:0," ",e.lcZ(13,17,"SUMMARY.DEVELOPER")," "),e.xp6(3),e.AsE(" ",null!=t.summaryInformation&&t.summaryInformation.guest_count?null==t.summaryInformation?null:t.summaryInformation.guest_count:0," ",e.lcZ(16,19,"SUMMARY.GUEST")," "),e.xp6(3),e.AsE(" ",null!=t.summaryInformation&&t.summaryInformation.limited_guest_count?null==t.summaryInformation?null:t.summaryInformation.limited_guest_count:0," ",e.lcZ(19,21,"SUMMARY.LIMITED_GUEST")," ")}}function h(o,p){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,m,7,5,"div",9),e.TgZ(2,"div",10)(3,"h4",11),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"ul",12)(7,"li"),e._uU(8),e.qZA()()(),e.YNc(9,f,20,23,"div",9),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==t.summaryInformation?null:t.summaryInformation.registry),e.xp6(3),e.hij(" ",e.lcZ(5,4,"SUMMARY.PROJECT_REPOSITORY")," "),e.xp6(4),e.hij(" ",null!=t.summaryInformation&&t.summaryInformation.repo_count?null==t.summaryInformation?null:t.summaryInformation.repo_count:0," "),e.xp6(1),e.Q6J("ngIf",t.showProjectMemberInfo)}}function u(o,p){if(1&o&&(e.ynx(0),e.YNc(1,h,10,6,"div",6),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.summaryInformation)}}function x(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"div",19)(1,"div",26)(2,"a",27),e.NdJ("click",function(){const c=e.CHM(t).$implicit,A=e.oxw(3);return e.KtG(A.goIntoRepo(c))}),e._uU(3),e.qZA()(),e.TgZ(4,"div",28),e._uU(5),e.qZA(),e.TgZ(6,"div",28),e._uU(7),e.qZA(),e.TgZ(8,"div",26),e._uU(9),e.ALo(10,"harborDatetime"),e.qZA()()}if(2&o){const t=p.$implicit;e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.artifact_count?t.artifact_count:0," "),e.xp6(2),e.hij(" ",t.pull_count?t.pull_count:0," "),e.xp6(2),e.hij(" ",e.xi3(10,4,t.update_time,"short")," ")}}function U(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17)(2,"div"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",18),e._uU(6),e.qZA(),e.TgZ(7,"div",19)(8,"div",20),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"div",21),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"div",21),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"div",20),e._uU(18),e.ALo(19,"translate"),e.qZA()()(),e.TgZ(20,"div",22),e.YNc(21,x,11,7,"div",23),e.qZA(),e.TgZ(22,"div",24)(23,"button",25),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.goToRepos())}),e._uU(24),e.ALo(25,"translate"),e.qZA()()()}if(2&o){const t=e.oxw(2);e.xp6(3),e.Oqu(e.lcZ(4,8,"PROJECT_DETAIL.REPOSITORIES")),e.xp6(3),e.hij(" ",null!=t.summaryInformation&&t.summaryInformation.repo_count?null==t.summaryInformation?null:t.summaryInformation.repo_count:0," "),e.xp6(3),e.hij(" ",e.lcZ(10,10,"REPOSITORY.NAME")," "),e.xp6(3),e.hij(" ",e.lcZ(13,12,"REPOSITORY.ARTIFACTS_COUNT")," "),e.xp6(3),e.hij(" ",e.lcZ(16,14,"REPOSITORY.PULL_COUNT")," "),e.xp6(3),e.hij(" ",e.lcZ(19,16,"REPOSITORY.LAST_MODIFIED")," "),e.xp6(3),e.Q6J("ngForOf",t.repos),e.xp6(3),e.hij(" ",e.lcZ(25,18,"SUMMARY.SEE_ALL")," ")}}function C(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",29)(2,"div"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",18),e._uU(6),e.qZA()(),e.TgZ(7,"div",22)(8,"div",19)(9,"div",20),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"div",30),e._uU(13),e.qZA()(),e.TgZ(14,"div",19)(15,"div",20),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"div",30),e._uU(19),e.qZA()(),e.TgZ(20,"div",19)(21,"div",20),e._uU(22),e.ALo(23,"translate"),e.qZA(),e.TgZ(24,"div",30),e._uU(25),e.qZA()(),e.TgZ(26,"div",19)(27,"div",20),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"div",30),e._uU(31),e.qZA()(),e.TgZ(32,"div",19)(33,"div",20),e._uU(34),e.ALo(35,"translate"),e.qZA(),e.TgZ(36,"div",30),e._uU(37),e.qZA()()(),e.TgZ(38,"div",24)(39,"button",25),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.goToMembers())}),e._uU(40),e.ALo(41,"translate"),e.qZA()()()}if(2&o){const t=e.oxw(2);e.xp6(3),e.Oqu(e.lcZ(4,13,"PROJECT_DETAIL.USERS")),e.xp6(3),e.Oqu(t.getTotalMembers()),e.xp6(4),e.hij(" ",e.lcZ(11,15,"SUMMARY.ADMIN")," "),e.xp6(3),e.hij(" ",null!=t.summaryInformation&&t.summaryInformation.project_admin_count?null==t.summaryInformation?null:t.summaryInformation.project_admin_count:0," "),e.xp6(3),e.hij(" ",e.lcZ(17,17,"SUMMARY.MAINTAINER")," "),e.xp6(3),e.hij(" ",null!=t.summaryInformation&&t.summaryInformation.maintainer_count?null==t.summaryInformation?null:t.summaryInformation.maintainer_count:0," "),e.xp6(3),e.hij(" ",e.lcZ(23,19,"SUMMARY.DEVELOPER")," "),e.xp6(3),e.hij(" ",null!=t.summaryInformation&&t.summaryInformation.developer_count?null==t.summaryInformation?null:t.summaryInformation.developer_count:0," "),e.xp6(3),e.hij(" ",e.lcZ(29,21,"SUMMARY.GUEST")," "),e.xp6(3),e.hij(" ",null!=t.summaryInformation&&t.summaryInformation.guest_count?null==t.summaryInformation?null:t.summaryInformation.guest_count:0," "),e.xp6(3),e.hij(" ",e.lcZ(35,23,"SUMMARY.LIMITED_GUEST")," "),e.xp6(3),e.hij(" ",null!=t.summaryInformation&&t.summaryInformation.limited_guest_count?null==t.summaryInformation?null:t.summaryInformation.limited_guest_count:0," "),e.xp6(3),e.hij(" ",e.lcZ(41,25,"SUMMARY.SEE_ALL")," ")}}function E(o,p){if(1&o&&(e.ynx(0),e.TgZ(1,"div",14),e.YNc(2,U,26,20,"div",15),e.YNc(3,C,42,27,"div",15),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",t.hasReadRepoPermission),e.xp6(1),e.Q6J("ngIf",t.showProjectMemberInfo)}}const S=function(o){return{"is-highlight":o}};let j=(()=>{var o;class p{constructor(i,s,c,A,w,L,Y){this.projectService=i,this.userPermissionService=s,this.errorHandler=c,this.appConfigService=A,this.route=w,this.repoService=L,this.router=Y,this.showProjectMemberInfo=!1,this.hasReadRepoPermission=!1,this.isCardView=!0,this.cardHover=!1,this.listHover=!1,this.repos=[],localStorage&&(localStorage.getItem(g.Z6)||localStorage.setItem(g.Z6,g.rz),this.isCardView=localStorage.getItem(g.Z6)===g.sN)}ngOnInit(){this.projectId=this.route.parent.parent.snapshot.params.id;const i=this.route.snapshot.parent.parent.data;i&&(this.projectName=i.projectResolver.name),this.userPermissionService.hasProjectPermissions(this.projectId,[{resource:a._W.MEMBER.KEY,action:a._W.MEMBER.VALUE.LIST},{resource:a._W.REPOSITORY.KEY,action:a._W.REPOSITORY.VALUE.LIST}]).subscribe(c=>{this.showProjectMemberInfo=c[0],this.hasReadRepoPermission=c[1]}),this.projectService.getProjectSummary(this.projectId).subscribe(c=>{this.summaryInformation=c},c=>{this.errorHandler.error(c)}),this.isCardView&&this.getDataForCardView()}showCard(i){this.isCardView!==i&&(this.isCardView=i,localStorage&&(this.isCardView?localStorage.setItem(g.Z6,g.sN):localStorage.setItem(g.Z6,g.rz)),this.isCardView&&this.getDataForCardView())}mouseEnter(i){"card"===i?this.cardHover=!0:this.listHover=!0}mouseLeave(i){"card"===i?this.cardHover=!1:this.listHover=!1}isHovering(i){return"card"===i?this.cardHover:this.listHover}getDataForCardView(){this.getTop4Repos()}getTop4Repos(){this.hasReadRepoPermission&&this.repoService.listRepositories({projectName:this.projectName,page:1,pageSize:4}).subscribe(i=>{this.repos=i})}goIntoRepo(i){const s=["harbor","projects",i.project_id,"repositories",i.name.substr(this.projectName.length+1)];this.router.navigate(s)}goToRepos(){this.router.navigate(["harbor","projects",this.projectId,"repositories"])}goToMembers(){this.router.navigate(["harbor","projects",this.projectId,"members"])}getTotalMembers(){return this.summaryInformation?+(this.summaryInformation.project_admin_count?this.summaryInformation.project_admin_count:0)+ +(this.summaryInformation.maintainer_count?this.summaryInformation.maintainer_count:0)+ +(this.summaryInformation.developer_count?this.summaryInformation.developer_count:0)+ +(this.summaryInformation.guest_count?this.summaryInformation.guest_count:0)+ +(this.summaryInformation.limited_guest_count?this.summaryInformation.limited_guest_count:0):0}}return(o=p).\u0275fac=function(i){return new(i||o)(e.Y36(a.Y4),e.Y36(a.Hx),e.Y36(d.q),e.Y36(I._),e.Y36(v.gz),e.Y36(Z.b),e.Y36(v.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["summary"]],decls:8,vars:9,consts:[[1,"clr-row","card-row","mt-1"],[1,"card-btn","mr-5px",3,"click","mouseenter","mouseleave"],["size","24","shape","view-cards",3,"ngClass"],[1,"list-btn",3,"click","mouseenter","mouseleave"],["size","24","shape","view-list",3,"ngClass"],["class","clr-row mt-2 center",4,"ngIf"],[4,"ngIf"],[1,"clr-row","mt-2","center"],[1,"spinner","spinner-md"],["class","pt-05 flex",4,"ngIf"],[1,"pt-05","flex"],[1,"mt-0","title-width"],[1,"list-unstyled"],["id","endpoint"],[1,"container"],["class","card clickable",4,"ngIf"],[1,"card","clickable"],[1,"card-header"],[1,"clr-row","number"],[1,"clr-row"],[1,"clr-col-4","column"],[1,"clr-col-2","column"],[1,"card-block"],["class","clr-row",4,"ngFor","ngForOf"],[1,"card-footer"],[1,"btn","btn-link",3,"click"],[1,"clr-col-4","ellipsis"],["href","javascript:void(0)",3,"click"],[1,"clr-col-2"],[1,"card-header","no-underline"],[1,"clr-col-8"]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"span",1),e.NdJ("click",function(){return s.showCard(!0)})("mouseenter",function(){return s.mouseEnter("card")})("mouseleave",function(){return s.mouseLeave("card")}),e._UZ(2,"clr-icon",2),e.qZA(),e.TgZ(3,"span",3),e.NdJ("click",function(){return s.showCard(!1)})("mouseenter",function(){return s.mouseEnter("list")})("mouseleave",function(){return s.mouseLeave("list")}),e._UZ(4,"clr-icon",4),e.qZA()(),e.YNc(5,r,2,0,"div",5),e.YNc(6,u,2,1,"ng-container",6),e.YNc(7,E,4,2,"ng-container",6)),2&i&&(e.xp6(2),e.Q6J("ngClass",e.VKq(5,S,s.isCardView||s.isHovering("card"))),e.xp6(2),e.Q6J("ngClass",e.VKq(7,S,!s.isCardView||s.isHovering("list"))),e.xp6(1),e.Q6J("ngIf",!s.summaryInformation),e.xp6(1),e.Q6J("ngIf",!s.isCardView),e.xp6(1),e.Q6J("ngIf",s.isCardView&&s.summaryInformation))},dependencies:[_.qvL,y.mk,y.sg,y.O5,T.X$,n.Z],styles:[".title-width[_ngcontent-%COMP%]{width:12rem}.pt-05[_ngcontent-%COMP%]{padding-top:1rem}.flex[_ngcontent-%COMP%]{display:flex}.card-row[_ngcontent-%COMP%]{justify-content:flex-end;padding-right:2rem}.mr-5px[_ngcontent-%COMP%]{margin-right:5px}.container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.card[_ngcontent-%COMP%]{width:24rem;margin-right:1rem;flex-grow:0;flex-shrink:0}.number[_ngcontent-%COMP%]{align-items:center;justify-content:center;font-size:3rem;color:#266aac;height:4rem}.column[_ngcontent-%COMP%]{font-size:10px;font-weight:bolder;text-transform:uppercase}.card-header[_ngcontent-%COMP%]{padding-bottom:0}.ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card-block[_ngcontent-%COMP%]{min-height:6rem}.size-24[_ngcontent-%COMP%]{width:20px;height:20px}.chart-name[_ngcontent-%COMP%]{display:flex;align-items:center}.no-underline[_ngcontent-%COMP%]{border-bottom-style:none}.center[_ngcontent-%COMP%]{justify-content:center;align-items:center}"]}),p})();var P=l(4554);const O=[{path:"",component:j}];let q=(()=>{var o;class p{}return(o=p).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[v.Bz.forChild(O),P.m]}),p})()}}]);