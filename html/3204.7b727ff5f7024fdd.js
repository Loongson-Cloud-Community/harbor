"use strict";(self.webpackChunkharbor_portal=self.webpackChunkharbor_portal||[]).push([[3204],{3204:(Oe,E,u)=>{u.r(E),u.d(E,{ClearingJobModule:()=>be});var A=u(2787),x=u(6177),C=u(4716),h=u(27),D=u(9315),L=u(4825),p=u(1691),c=u(6652),U=u(6266),e=u(5879),y=u(2462),Z=u(7655),R=u(3612),s=u(8280),f=u(6814),S=u(9515),b=u(4410);const I=function(r,l,i){return{blob:r,manifest:l,size:i}};function j(r,l){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r){const i=e.oxw(2).$implicit,n=e.oxw();e.xp6(1),e.Oqu(e.xi3(2,1,"GC.DELETE_DETAIL",e.kEZ(4,I,n.getBlobs(null==i?null:i.job_parameters),n.getManifest(null==i?null:i.job_parameters),n.getSize(null==i?null:i.job_parameters))))}}function M(r,l){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r){const i=e.oxw(2).$implicit,n=e.oxw();e.xp6(1),e.Oqu(e.xi3(2,1,"GC.DELETE_DETAIL_DRY_RUN",e.kEZ(4,I,n.getBlobs(null==i?null:i.job_parameters),n.getManifest(null==i?null:i.job_parameters),n.getSize(null==i?null:i.job_parameters))))}}function w(r,l){if(1&r&&(e.ynx(0),e.YNc(1,j,3,8,"span",14),e.YNc(2,M,3,8,"span",14),e.BQk()),2&r){const i=e.oxw().$implicit,n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.isDryRun(null==i?null:i.job_parameters)===n.NO),e.xp6(1),e.Q6J("ngIf",n.isDryRun(null==i?null:i.job_parameters)===n.YES)}}function H(r,l){if(1&r&&(e.TgZ(0,"clr-dg-row",15)(1,"clr-dg-cell"),e._uU(2),e.qZA(),e.TgZ(3,"clr-dg-cell"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"clr-dg-cell"),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"clr-dg-cell"),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"clr-dg-cell"),e.YNc(13,w,3,2,"ng-container",14),e.qZA(),e.TgZ(14,"clr-dg-cell"),e._uU(15),e.ALo(16,"harborDatetime"),e.qZA(),e.TgZ(17,"clr-dg-cell"),e._uU(18),e.ALo(19,"harborDatetime"),e.qZA(),e.TgZ(20,"clr-dg-cell")(21,"a",16),e._UZ(22,"clr-icon",17),e.qZA()()()),2&r){const i=l.$implicit,n=e.oxw();e.Q6J("clrDgItem",i),e.xp6(2),e.Oqu(i.id),e.xp6(2),e.Oqu(e.lcZ(5,9,null!=i.schedule&&i.schedule.type?"SCHEDULE."+(null==i.schedule?null:i.schedule.type.toUpperCase()):"")),e.xp6(3),e.Oqu(e.lcZ(8,11,n.isDryRun(null==i?null:i.job_parameters))),e.xp6(3),e.Oqu(e.lcZ(11,13,i.job_status.toUpperCase())),e.xp6(3),e.Q6J("ngIf",n.shouldShowDetails(null==i?null:i.job_status)),e.xp6(2),e.Oqu(e.xi3(16,15,i.creation_time,"medium")),e.xp6(3),e.Oqu(e.xi3(19,18,i.update_time,"medium")),e.xp6(3),e.Q6J("href",n.getLogLink(i.id),e.LSH)}}function Y(r,l){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r){e.oxw();const i=e.MAs(41);e.xp6(1),e.lnq("",i.firstItem+1," - ",i.lastItem+1," ",e.lcZ(2,3,"DESTINATION.OF"),"")}}const Q=function(){return[5,25,50]};let G=(()=>{var r;class l{constructor(n,t,o){this.gcService=n,this.errorHandler=t,this.confirmationDialogService=o,this.jobs=[],this.loading=!0,this.pageSize=(0,p.tb)(p.V2.GC_HISTORY_COMPONENT,5),this.page=1,this.total=0,this.selectedRow=[],this.isStopOnGoing=!1,this.NO=c.NO,this.YES=c.gT}ngOnInit(){this.subscription||(this.subscription=this.confirmationDialogService.confirmationConfirm$.subscribe(n=>{n&&1===n.state&&27===n.source&&this.stopGc(n.data)}))}ngOnDestroy(){this.timerDelay&&(this.timerDelay.unsubscribe(),this.timerDelay=null),this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}stopGc(n){this.isStopOnGoing=!0,(0,D.D)(n.map(t=>this.gcService.stopGC({gcId:t.id}))).pipe((0,C.x)(()=>this.isStopOnGoing=!1)).subscribe({next:t=>{this.errorHandler.info("CLEARANCES.STOP_GC_SUCCESS")},error:t=>{this.errorHandler.error(t)}})}refresh(){this.page=1,this.total=0,this.getJobs(!0)}getJobs(n,t){let o,a;t&&(this.state=t),t&&t.page&&(this.pageSize=t.page.size,(0,p.Pe)(p.V2.GC_HISTORY_COMPONENT,this.pageSize)),t&&t.filters&&t.filters.length&&(o=encodeURIComponent(`${t.filters[0].property}=~${t.filters[0].value}`)),t&&t.sort&&t.sort.by&&(a=(0,p.td)(t)),n&&(this.loading=!0),this.gcService.getGCHistoryResponse({page:this.page,pageSize:this.pageSize,q:o,sort:a}).pipe((0,C.x)(()=>this.loading=!1)).subscribe(d=>{if(d.headers){const m=d.headers.get("X-Total-Count");m&&(this.total=parseInt(m,0)),n?(this.selectedRow=[],this.jobs=d.body):d?.body?.length&&d.body.forEach(_=>{this.jobs.forEach(T=>{T.id===_.id&&(T.job_status=_.job_status,T.update_time=_.update_time,T.job_parameters=_.job_parameters)})})}this.timerDelay||(this.timerDelay=(0,L.H)(c.wz,c.wz).subscribe(()=>{let m=0;this.jobs.forEach(_=>{(_.job_status===c.jf.PENDING||_.job_status===c.jf.RUNNING)&&m++}),m>0?this.getJobs(!1,this.state):(this.timerDelay.unsubscribe(),this.timerDelay=null)}))},d=>{this.errorHandler.error(d),this.loading=!1})}isDryRun(n){if(n){const t=JSON.parse(n);if(t&&t.dry_run)return c.gT}return c.NO}getBlobs(n){if(n){const t=JSON.parse(n);if(t&&t.purged_blobs)return t.purged_blobs}return 0}getManifest(n){if(n){const t=JSON.parse(n);if(t&&t.purged_manifests)return t.purged_manifests}return 0}getSize(n){if(n){const t=JSON.parse(n);if(t&&t.freed_space)return(0,p.BU)(t.freed_space)}return"0"}getLogLink(n){return`${p.S$}/system/gc/${n}/log`}canStop(){return!this.isStopOnGoing&&!!this.selectedRow?.length&&this.selectedRow.filter(n=>n.job_status===c.jf.PENDING||n.job_status===c.jf.RUNNING)?.length>0}openStopExecutionsDialog(){const n=this.selectedRow.map(o=>o.id).join(",");let t=new U.c("REPLICATION.STOP_TITLE","REPLICATION.STOP_SUMMARY",n,this.selectedRow,27,0);this.confirmationDialogService.openComfirmDialog(t)}shouldShowDetails(n){return n!==c.jf.PENDING&&n!==c.jf.RUNNING}}return(r=l).\u0275fac=function(n){return new(n||r)(e.Y36(y.b),e.Y36(Z.q),e.Y36(R.O))},r.\u0275cmp=e.Xpm({type:r,selectors:[["gc-history"]],decls:48,vars:52,consts:[["id","history-header",1,"history-header","mt-3","font-style"],[3,"clrDgSelected","clrDgLoading","clrDgSelectedChange","clrDgRefresh"],[1,"action-bar"],[1,"btn-group"],["id","stop-gc","type","button",1,"btn","btn-secondary",3,"disabled","click"],[1,"refresh-btn",3,"click"],["shape","refresh"],[3,"clrDgField"],[1,"detail"],[3,"clrDgSortBy"],[3,"clrDgItem",4,"ngFor","ngForOf"],[3,"clrDgPageSize","clrDgPage","clrDgTotalItems","clrDgPageChange"],["pagination",""],[3,"clrPageSizeOptions"],[4,"ngIf"],[3,"clrDgItem"],["rel","noopener noreferrer","target","_blank",3,"href"],["shape","list"]],template:function(n,t){1&n&&(e.TgZ(0,"h5",0),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"clr-datagrid",1),e.NdJ("clrDgSelectedChange",function(a){return t.selectedRow=a})("clrDgRefresh",function(a){return t.getJobs(!0,a)}),e.TgZ(4,"clr-dg-action-bar",2)(5,"div",3)(6,"button",4),e.NdJ("click",function(){return t.openStopExecutionsDialog()}),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"span",5),e.NdJ("click",function(){return t.refresh()}),e._UZ(10,"clr-icon",6),e.qZA()(),e.TgZ(11,"clr-dg-column",7),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"clr-dg-column"),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"clr-dg-column"),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.TgZ(20,"clr-dg-column"),e._uU(21),e.ALo(22,"translate"),e.qZA(),e.TgZ(23,"clr-dg-column",8),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"clr-dg-column"),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"clr-dg-column",9),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"clr-dg-column"),e._uU(33),e.ALo(34,"translate"),e.qZA(),e.TgZ(35,"clr-dg-placeholder"),e._uU(36),e.ALo(37,"translate"),e.qZA(),e.YNc(38,H,23,21,"clr-dg-row",10),e.TgZ(39,"clr-dg-footer")(40,"clr-dg-pagination",11,12),e.NdJ("clrDgPageChange",function(a){return t.page=a}),e.TgZ(42,"clr-dg-page-size",13),e._uU(43),e.ALo(44,"translate"),e.qZA(),e.YNc(45,Y,3,5,"span",14),e._uU(46),e.ALo(47,"translate"),e.qZA()()()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,25,"GC.JOB_HISTORY"),"\n"),e.xp6(2),e.Q6J("clrDgSelected",t.selectedRow)("clrDgLoading",t.loading),e.xp6(3),e.Q6J("disabled",!t.canStop()),e.xp6(1),e.hij(" ",e.lcZ(8,27,"REPLICATION.STOPJOB")," "),e.xp6(4),e.Q6J("clrDgField","id"),e.xp6(1),e.Oqu(e.lcZ(13,29,"REPLICATION.TASK_ID")),e.xp6(3),e.Oqu(e.lcZ(16,31,"GC.TRIGGER_TYPE")),e.xp6(3),e.Oqu(e.lcZ(19,33,"TAG_RETENTION.DRY_RUN")),e.xp6(3),e.Oqu(e.lcZ(22,35,"STATUS")),e.xp6(3),e.Oqu(e.lcZ(25,37,"TAG_RETENTION.DETAILS")),e.xp6(3),e.Oqu(e.lcZ(28,39,"CREATION_TIME")),e.xp6(2),e.Q6J("clrDgSortBy","update_time"),e.xp6(1),e.Oqu(e.lcZ(31,41,"UPDATE_TIME")),e.xp6(3),e.Oqu(e.lcZ(34,43,"LOGS")),e.xp6(3),e.Oqu(e.lcZ(37,45,"CLEARANCES.NO_GC_RECORDS")),e.xp6(2),e.Q6J("ngForOf",t.jobs),e.xp6(2),e.Q6J("clrDgPageSize",t.pageSize)("clrDgPage",t.page)("clrDgTotalItems",t.total),e.xp6(2),e.Q6J("clrPageSizeOptions",e.DdM(51,Q)),e.xp6(1),e.Oqu(e.lcZ(44,47,"PAGINATION.PAGE_SIZE")),e.xp6(2),e.Q6J("ngIf",t.total),e.xp6(1),e.AsE(" ",t.total," ",e.lcZ(47,49,"DESTINATION.ITEMS")," "))},dependencies:[s.C9t,s.Gwl,s.fv_,s.m4W,s.dRQ,s.YYR,s.Ltv,s.F7K,s.Z4N,s.jND,s.KHL,s.PDs,s.Gcc,s.dml,s.Nh1,s.K8c,s.qvL,f.sg,f.O5,S.X$,b.Z],styles:[".history-header[_ngcontent-%COMP%]{margin:20px 0 6px;display:inline-block;width:97%}.action-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.refresh-btn[_ngcontent-%COMP%]{margin-right:2rem;cursor:pointer}.refresh-btn[_ngcontent-%COMP%]:hover{color:#007cbb}.detail[_ngcontent-%COMP%]{min-width:12rem!important}"]}),l})();var g=u(6223),v=u(575);function z(r,l){1&r&&e._UZ(0,"span",29)}function k(r,l){1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"SCHEDULE.NONE")))}function F(r,l){1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij("(",e.lcZ(2,1,"TAG_RETENTION.DRY_RUN"),")"))}function $(r,l){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"harborDatetime"),e.YNc(3,F,3,3,"span",11),e.qZA()),2&r){const i=e.oxw(2);e.xp6(1),e.Oqu(e.lcZ(2,2,i.lastCompletedTime)),e.xp6(2),e.Q6J("ngIf",i.isDryRun)}}function K(r,l){if(1&r&&(e.ynx(0),e.YNc(1,k,3,3,"span",11),e.YNc(2,$,4,4,"span",11),e.BQk()),2&r){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",!i.lastCompletedTime),e.xp6(1),e.Q6J("ngIf",i.lastCompletedTime)}}function B(r,l){1&r&&(e.TgZ(0,"span",8),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"CLEARANCES.NEXT_SCHEDULED_TIME")))}function X(r,l){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"harborDatetime"),e.qZA()),2&r){const i=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,i.nextScheduledTime))}}function V(r,l){1&r&&(e.TgZ(0,"clr-tooltip-content",30)(1,"span"),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&r&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"GC.WORKERS_TOOLTIP")))}function W(r,l){if(1&r&&(e.TgZ(0,"option",31),e._uU(1),e.qZA()),2&r){const i=l.$implicit;e.s9C("value",i),e.xp6(1),e.hij(" ",i," ")}}let N=(()=>{var r;class l{constructor(n,t){this.gcService=n,this.errorHandler=t,this.disableGC=!1,this.getLabelCurrent="GC.CURRENT_SCHEDULE",this.loadingGcStatus=!1,this.workerNum=1,this.workerOptions=(0,p.d9)(c.sp),this.dryRunOnGoing=!1,this.loadingLastCompletedTime=!1,this.isDryRun=!1}ngOnInit(){this.getCurrentSchedule(!0),this.getStatus()}ngOnDestroy(){this.statusTimeout&&(clearTimeout(this.statusTimeout),this.statusTimeout=null)}getStatus(){this.loadingLastCompletedTime=!0,this.gcService.getGCHistory({page:1,pageSize:1,sort:"-update_time"}).subscribe(n=>{n?.length&&(this.isDryRun=JSON.parse(n[0]?.job_parameters).dry_run,this.lastCompletedTime=n[0]?.update_time,n[0]?.job_status===c.jf.RUNNING||n[0]?.job_status===c.jf.PENDING)?this.statusTimeout=setTimeout(()=>{this.getStatus()},c.wz):this.loadingLastCompletedTime=!1})}getCurrentSchedule(n){n&&(this.loadingGcStatus=!0),this.gcService.getGCSchedule().pipe((0,C.x)(()=>{this.loadingGcStatus=!1})).subscribe(t=>{this.initSchedule(t)},t=>{this.errorHandler.error(t)})}initSchedule(n){this.nextScheduledTime=n?.schedule?.next_scheduled_time?n?.schedule?.next_scheduled_time:null,this.originCron=n&&n.schedule?{type:n.schedule.type,cron:n.schedule.cron}:{type:h.Ix.NONE,cron:""},n&&n.job_parameters?(this.shouldDeleteUntagged=JSON.parse(n.job_parameters).delete_untagged,this.workerNum=+JSON.parse(n.job_parameters).workers):(this.shouldDeleteUntagged=!1,this.workerNum=1)}gcNow(){this.disableGC=!0,setTimeout(()=>{this.enableGc()},6e4),this.gcService.createGCSchedule({schedule:{parameters:{delete_untagged:this.shouldDeleteUntagged,workers:+this.workerNum,dry_run:!1},schedule:{type:h.Ix.MANUAL}}}).subscribe({next:n=>{this.errorHandler.info("GC.MSG_SUCCESS"),this.refresh()},error:n=>{this.errorHandler.error(n)}})}dryRun(){this.dryRunOnGoing=!0,this.gcService.createGCSchedule({schedule:{parameters:{delete_untagged:this.shouldDeleteUntagged,workers:+this.workerNum,dry_run:!0},schedule:{type:h.Ix.MANUAL}}}).pipe((0,C.x)(()=>this.dryRunOnGoing=!1)).subscribe({next:n=>{this.errorHandler.info("GC.DRY_RUN_SUCCESS"),this.refresh()},error:n=>{this.errorHandler.error(n)}})}enableGc(){this.disableGC=!1}saveGcSchedule(n){this.originCron&&this.originCron.type===h.Ix.NONE?this.gcService.createGCSchedule({schedule:{parameters:{delete_untagged:this.shouldDeleteUntagged,workers:+this.workerNum,dry_run:!1},schedule:{type:l.getScheduleType(n),cron:n}}}).subscribe(t=>{this.errorHandler.info("GC.MSG_SCHEDULE_RESET"),this.cronScheduleComponent.resetSchedule(),this.getCurrentSchedule(!1)},t=>{this.errorHandler.error(t)}):this.gcService.updateGCSchedule({schedule:{parameters:{delete_untagged:this.shouldDeleteUntagged,workers:+this.workerNum,dry_run:!1},schedule:{type:l.getScheduleType(n),cron:n}}}).subscribe(t=>{this.errorHandler.info("GC.MSG_SCHEDULE_RESET"),this.cronScheduleComponent.resetSchedule(),this.getCurrentSchedule(!1)},t=>{this.errorHandler.error(t)})}static getScheduleType(n){return n?"0 0 * * * *"===n?h.Ix.HOURLY:"0 0 0 * * *"===n?h.Ix.DAILY:"0 0 0 * * 0"===n?h.Ix.WEEKLY:h.Ix.CUSTOM:h.Ix.NONE}refresh(){this.getStatus(),this.gcHistoryComponent?.refresh()}}return(r=l).\u0275fac=function(n){return new(n||r)(e.Y36(y.b),e.Y36(Z.q))},r.\u0275cmp=e.Xpm({type:r,selectors:[["gc-config"]],viewQuery:function(n,t){if(1&n&&(e.Gf(x.xp,5),e.Gf(G,5)),2&n){let o;e.iGM(o=e.CRH())&&(t.cronScheduleComponent=o.first),e.iGM(o=e.CRH())&&(t.gcHistoryComponent=o.first)}},decls:63,vars:38,consts:[[1,"clr-row","mt-2","center",3,"hidden"],[1,"spinner","spinner-md"],[3,"hidden"],[1,"clr-row","mt-1"],[1,"clr-col-2","flex-200","font-style"],[1,"clr-col"],[1,"clr-row"],[1,"p-06","mr-2"],[1,"mr-1","font-style"],[1,"mr-3"],["class","spinner spinner-inline",4,"ngIf"],[4,"ngIf"],[1,"p-06"],["class","mr-1 font-style",4,"ngIf"],[1,"cron-selection"],[1,"w-100",3,"labelCurrent","labelEdit","originCron","inputvalue"],[1,"clr-row","mb-1"],["clrTooltipTrigger","","shape","info-circle","size","24"],["clrPosition","top-right","clrSize","lg",4,"clrIfOpen"],[1,"clr-select-wrapper"],["id","workers",1,"clr-select","worker-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"clr-col-2","flex-200"],[1,"explain"],[1,"mt-05"],["type","checkbox","clrToggle","","name","delete_untagged","id","delete_untagged",3,"ngModel","ngModelChange"],["for","delete_untagged",1,"font-weight-400"],["id","gc-now",1,"btn","btn-primary","gc-start-btn",3,"disabled","click"],["id","gc-dry-run",1,"btn","btn-outline","gc-start-btn",3,"disabled","click"],[1,"spinner","spinner-inline"],["clrPosition","top-right","clrSize","lg"],[3,"value"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"span",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"span",8),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"span",9),e.YNc(14,z,1,0,"span",10),e.YNc(15,K,3,2,"ng-container",11),e.qZA()(),e.TgZ(16,"div",12),e.YNc(17,B,3,3,"span",13),e.YNc(18,X,3,3,"span",11),e.qZA()()()(),e.TgZ(19,"div",14)(20,"cron-selection",15),e.NdJ("inputvalue",function(a){return t.saveGcSchedule(a)}),e.qZA()(),e.TgZ(21,"div",16)(22,"div",4),e._uU(23),e.ALo(24,"translate"),e.TgZ(25,"clr-tooltip"),e._UZ(26,"clr-icon",17),e.YNc(27,V,4,3,"clr-tooltip-content",18),e.qZA()(),e.TgZ(28,"div",5)(29,"div",19)(30,"select",20),e.NdJ("ngModelChange",function(a){return t.workerNum=a}),e.YNc(31,W,2,2,"option",21),e.qZA()()()(),e.TgZ(32,"div",6),e._UZ(33,"div",22),e.TgZ(34,"div",5)(35,"span",23),e._uU(36),e.ALo(37,"translate"),e.qZA()()(),e.TgZ(38,"div",6),e._UZ(39,"div",22),e.TgZ(40,"div",5)(41,"span",23),e._uU(42),e.ALo(43,"translate"),e.qZA()()(),e.TgZ(44,"div",6),e._UZ(45,"div",22),e.TgZ(46,"div",5)(47,"clr-toggle-container",24)(48,"clr-toggle-wrapper")(49,"input",25),e.NdJ("ngModelChange",function(a){return t.shouldDeleteUntagged=a}),e.qZA(),e.TgZ(50,"label",26),e._uU(51),e.ALo(52,"translate"),e.qZA()()()()(),e.TgZ(53,"div",6)(54,"div",22)(55,"button",27),e.NdJ("click",function(){return t.gcNow()}),e._uU(56),e.ALo(57,"translate"),e.qZA()(),e.TgZ(58,"div",5)(59,"button",28),e.NdJ("click",function(){return t.dryRun()}),e._uU(60),e.ALo(61,"translate"),e.qZA()()(),e._UZ(62,"gc-history"),e.qZA()),2&n&&(e.Q6J("hidden",!t.loadingGcStatus),e.xp6(2),e.Q6J("hidden",t.loadingGcStatus),e.xp6(3),e.hij(" ",e.lcZ(6,22,"WEBHOOK.STATUS")," "),e.xp6(6),e.Oqu(e.lcZ(12,24,"CLEARANCES.LAST_COMPLETED")),e.xp6(3),e.Q6J("ngIf",t.loadingLastCompletedTime),e.xp6(1),e.Q6J("ngIf",!t.loadingLastCompletedTime),e.xp6(2),e.Q6J("ngIf",t.nextScheduledTime),e.xp6(1),e.Q6J("ngIf",t.nextScheduledTime),e.xp6(2),e.Q6J("labelCurrent",t.getLabelCurrent)("labelEdit",t.getLabelCurrent)("originCron",t.originCron),e.xp6(3),e.hij(" ",e.lcZ(24,26,"JOB_SERVICE_DASHBOARD.WORKERS"),""),e.xp6(7),e.Q6J("ngModel",t.workerNum),e.xp6(1),e.Q6J("ngForOf",t.workerOptions),e.xp6(5),e.Oqu(e.lcZ(37,28,"GC.EXPLAIN")),e.xp6(6),e.Oqu(e.lcZ(43,30,"GC.EXPLAIN_TIME_WINDOW")),e.xp6(7),e.Q6J("ngModel",t.shouldDeleteUntagged),e.xp6(2),e.Oqu(e.lcZ(52,32,"GC.DELETE_UNTAGGED")),e.xp6(4),e.Q6J("disabled",t.disableGC),e.xp6(1),e.hij(" ",e.lcZ(57,34,"GC.GC_NOW")," "),e.xp6(3),e.Q6J("disabled",t.dryRunOnGoing),e.xp6(1),e.hij(" ",e.lcZ(61,36,"TAG_RETENTION.WHAT_IF_RUN")," "))},dependencies:[g.YN,g.Kr,g.Wl,g.EJ,g.JJ,g.On,s.qvL,s.nqY,s.MgK,s.KKC,s.Y_4,s.PEh,s.Jmj,s.bMv,s.zDF,f.sg,f.O5,v.x,G,S.X$,b.Z],styles:[".cron-selection[_ngcontent-%COMP%]{display:flex;align-items:center}.gc-start-btn[_ngcontent-%COMP%]{width:150px;margin-top:35px}.flex-200[_ngcontent-%COMP%]{flex:0 0 200px;max-width:200px}.mt-05[_ngcontent-%COMP%]{margin-top:.5rem}.font-weight-400[_ngcontent-%COMP%]{font-weight:400}.explain[_ngcontent-%COMP%]{font-weight:100;font-size:10px}.center[_ngcontent-%COMP%]{justify-content:center;align-items:center}.p-06[_ngcontent-%COMP%]{padding-left:.6rem;padding-right:.6rem}.worker-select[_ngcontent-%COMP%]{width:4.5rem}"]}),l})();var te=u(4554),q=u(3539);function ne(r,l){if(1&r&&(e.TgZ(0,"clr-dg-row",14)(1,"clr-dg-cell"),e._uU(2),e.qZA(),e.TgZ(3,"clr-dg-cell"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"clr-dg-cell"),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"clr-dg-cell"),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"clr-dg-cell"),e._uU(13),e.ALo(14,"harborDatetime"),e.qZA(),e.TgZ(15,"clr-dg-cell"),e._uU(16),e.ALo(17,"harborDatetime"),e.qZA(),e.TgZ(18,"clr-dg-cell")(19,"a",15),e._UZ(20,"clr-icon",16),e.qZA()()()),2&r){const i=l.$implicit,n=e.oxw();e.Q6J("clrDgItem",i),e.xp6(2),e.Oqu(i.id),e.xp6(2),e.Oqu(e.lcZ(5,8,null!=i.schedule&&i.schedule.type?"SCHEDULE."+(null==i.schedule?null:i.schedule.type.toUpperCase()):"")),e.xp6(3),e.Oqu(e.lcZ(8,10,n.isDryRun(null==i?null:i.job_parameters))),e.xp6(3),e.Oqu(e.lcZ(11,12,i.job_status.toUpperCase())),e.xp6(3),e.Oqu(e.xi3(14,14,i.creation_time,"medium")),e.xp6(3),e.Oqu(e.xi3(17,17,i.update_time,"medium")),e.xp6(3),e.Q6J("href",n.getLogLink(i.id),e.LSH)}}function re(r,l){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r){e.oxw();const i=e.MAs(38);e.xp6(1),e.lnq("",i.firstItem+1," - ",i.lastItem+1," ",e.lcZ(2,3,"DESTINATION.OF"),"")}}const ie=function(){return[5,25,50]};let J=(()=>{var r;class l{constructor(n,t,o){this.purgeService=n,this.errorHandler=t,this.confirmationDialogService=o,this.jobs=[],this.loading=!0,this.pageSize=(0,p.tb)(p.V2.GC_HISTORY_COMPONENT,5),this.page=1,this.total=0,this.selectedRow=[],this.isStopOnGoing=!1}ngOnInit(){this.subscription||(this.subscription=this.confirmationDialogService.confirmationConfirm$.subscribe(n=>{n&&1===n.state&&28===n.source&&this.stopRotation(n.data)}))}ngOnDestroy(){this.timerDelay&&(this.timerDelay.unsubscribe(),this.timerDelay=null),this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}stopRotation(n){this.isStopOnGoing=!0,(0,D.D)(n.map(t=>this.purgeService.stopPurge({purgeId:t.id}))).pipe((0,C.x)(()=>this.isStopOnGoing=!1)).subscribe({next:t=>{this.errorHandler.info("CLEARANCES.STOP_PURGE_SUCCESS")},error:t=>{this.errorHandler.error(t)}})}refresh(){this.page=1,this.total=0,this.getJobs(!0)}getJobs(n,t){let o,a;t&&(this.state=t),t&&t.page&&(this.pageSize=t.page.size,(0,p.Pe)(p.V2.GC_HISTORY_COMPONENT,this.pageSize)),t&&t.filters&&t.filters.length&&(o=encodeURIComponent(`${t.filters[0].property}=~${t.filters[0].value}`)),t&&t.sort&&t.sort.by&&(a=(0,p.td)(t)),n&&(this.loading=!0),this.purgeService.getPurgeHistoryResponse({page:this.page,pageSize:this.pageSize,q:o,sort:a}).pipe((0,C.x)(()=>this.loading=!1)).subscribe(d=>{if(d.headers){const m=d.headers.get("X-Total-Count");m&&(this.total=parseInt(m,0)),n?(this.selectedRow=[],this.jobs=d.body):d?.body?.length&&d.body.forEach(_=>{this.jobs.forEach(T=>{T.id===_.id&&(T.job_status=_.job_status,T.update_time=_.update_time)})})}this.timerDelay||(this.timerDelay=(0,L.H)(c.wz,c.wz).subscribe(()=>{let m=0;this.jobs.forEach(_=>{(_.job_status===c.jf.PENDING||_.job_status===c.jf.RUNNING)&&m++}),m>0?this.getJobs(!1,this.state):(this.timerDelay.unsubscribe(),this.timerDelay=null)}))},d=>{this.errorHandler.error(d),this.loading=!1})}isDryRun(n){if(n){const t=JSON.parse(n);if(t&&t.dry_run)return c.gT}return c.NO}getLogLink(n){return`${p.S$}/system/purgeaudit/${n}/log`}canStop(){return!this.isStopOnGoing&&!!this.selectedRow?.length&&this.selectedRow.filter(n=>n.job_status===c.jf.PENDING||n.job_status===c.jf.RUNNING)?.length>0}openStopExecutionsDialog(){const n=this.selectedRow.map(o=>o.id).join(",");let t=new U.c("REPLICATION.STOP_TITLE","REPLICATION.STOP_SUMMARY",n,this.selectedRow,28,0);this.confirmationDialogService.openComfirmDialog(t)}}return(r=l).\u0275fac=function(n){return new(n||r)(e.Y36(q.X),e.Y36(Z.q),e.Y36(R.O))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-purge-history"]],decls:45,vars:49,consts:[["id","history-header",1,"history-header","font-style","mt-3"],[3,"clrDgSelected","clrDgLoading","clrDgSelectedChange","clrDgRefresh"],[1,"action-bar"],[1,"btn-group"],["id","stop-purge","type","button",1,"btn","btn-secondary",3,"disabled","click"],[1,"refresh-btn",3,"click"],["shape","refresh"],[3,"clrDgField"],[3,"clrDgSortBy"],[3,"clrDgItem",4,"ngFor","ngForOf"],[3,"clrDgPageSize","clrDgPage","clrDgTotalItems","clrDgPageChange"],["pagination",""],[3,"clrPageSizeOptions"],[4,"ngIf"],[3,"clrDgItem"],["rel","noopener noreferrer","target","_blank",3,"href"],["shape","list"]],template:function(n,t){1&n&&(e.TgZ(0,"h5",0),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"clr-datagrid",1),e.NdJ("clrDgSelectedChange",function(a){return t.selectedRow=a})("clrDgRefresh",function(a){return t.getJobs(!0,a)}),e.TgZ(4,"clr-dg-action-bar",2)(5,"div",3)(6,"button",4),e.NdJ("click",function(){return t.openStopExecutionsDialog()}),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"span",5),e.NdJ("click",function(){return t.refresh()}),e._UZ(10,"clr-icon",6),e.qZA()(),e.TgZ(11,"clr-dg-column",7),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"clr-dg-column"),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"clr-dg-column"),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.TgZ(20,"clr-dg-column"),e._uU(21),e.ALo(22,"translate"),e.qZA(),e.TgZ(23,"clr-dg-column"),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"clr-dg-column",8),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"clr-dg-column"),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"clr-dg-placeholder"),e._uU(33),e.ALo(34,"translate"),e.qZA(),e.YNc(35,ne,21,20,"clr-dg-row",9),e.TgZ(36,"clr-dg-footer")(37,"clr-dg-pagination",10,11),e.NdJ("clrDgPageChange",function(a){return t.page=a}),e.TgZ(39,"clr-dg-page-size",12),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.YNc(42,re,3,5,"span",13),e._uU(43),e.ALo(44,"translate"),e.qZA()()()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,24,"CLEARANCES.PURGE_HISTORY"),"\n"),e.xp6(2),e.Q6J("clrDgSelected",t.selectedRow)("clrDgLoading",t.loading),e.xp6(3),e.Q6J("disabled",!t.canStop()),e.xp6(1),e.hij(" ",e.lcZ(8,26,"REPLICATION.STOPJOB")," "),e.xp6(4),e.Q6J("clrDgField","id"),e.xp6(1),e.Oqu(e.lcZ(13,28,"REPLICATION.TASK_ID")),e.xp6(3),e.Oqu(e.lcZ(16,30,"GC.TRIGGER_TYPE")),e.xp6(3),e.Oqu(e.lcZ(19,32,"TAG_RETENTION.DRY_RUN")),e.xp6(3),e.Oqu(e.lcZ(22,34,"STATUS")),e.xp6(3),e.Oqu(e.lcZ(25,36,"CREATION_TIME")),e.xp6(2),e.Q6J("clrDgSortBy","update_time"),e.xp6(1),e.Oqu(e.lcZ(28,38,"UPDATE_TIME")),e.xp6(3),e.Oqu(e.lcZ(31,40,"LOGS")),e.xp6(3),e.Oqu(e.lcZ(34,42,"CLEARANCES.NO_PURGE_RECORDS")),e.xp6(2),e.Q6J("ngForOf",t.jobs),e.xp6(2),e.Q6J("clrDgPageSize",t.pageSize)("clrDgPage",t.page)("clrDgTotalItems",t.total),e.xp6(2),e.Q6J("clrPageSizeOptions",e.DdM(48,ie)),e.xp6(1),e.Oqu(e.lcZ(41,44,"PAGINATION.PAGE_SIZE")),e.xp6(2),e.Q6J("ngIf",t.total),e.xp6(1),e.AsE(" ",t.total," ",e.lcZ(44,46,"DESTINATION.ITEMS")," "))},dependencies:[s.C9t,s.Gwl,s.fv_,s.m4W,s.dRQ,s.YYR,s.Ltv,s.F7K,s.Z4N,s.jND,s.KHL,s.PDs,s.Gcc,s.dml,s.Nh1,s.K8c,s.qvL,f.sg,f.O5,S.X$,b.Z],styles:[".history-header[_ngcontent-%COMP%]{margin:20px 0 6px;display:inline-block;width:97%}.action-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.refresh-btn[_ngcontent-%COMP%]{margin-right:2rem;cursor:pointer}.refresh-btn[_ngcontent-%COMP%]:hover{color:#007cbb}"]}),l})();const oe=["purgeForm"];function le(r,l){1&r&&e._UZ(0,"span",41)}function se(r,l){1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"SCHEDULE.NONE")))}function ae(r,l){1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij("(",e.lcZ(2,1,"TAG_RETENTION.DRY_RUN"),")"))}function ce(r,l){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"harborDatetime"),e.YNc(3,ae,3,3,"span",11),e.qZA()),2&r){const i=e.oxw(2);e.xp6(1),e.Oqu(e.lcZ(2,2,i.lastCompletedTime)),e.xp6(2),e.Q6J("ngIf",i.isDryRun)}}function ue(r,l){if(1&r&&(e.ynx(0),e.YNc(1,se,3,3,"span",11),e.YNc(2,ce,4,4,"span",11),e.BQk()),2&r){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",!i.lastCompletedTime),e.xp6(1),e.Q6J("ngIf",i.lastCompletedTime)}}function pe(r,l){1&r&&(e.TgZ(0,"span",8),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"CLEARANCES.NEXT_SCHEDULED_TIME")))}function ge(r,l){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"harborDatetime"),e.qZA()),2&r){const i=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,i.nextScheduledTime))}}function de(r,l){1&r&&(e.TgZ(0,"clr-tooltip-content",42)(1,"span"),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&r&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"CLEARANCES.KEEP_IN_TOOLTIP")))}function he(r,l){1&r&&(e.TgZ(0,"clr-control-error",43),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"CLEARANCES.KEEP_IN_ERROR")," "))}function _e(r,l){1&r&&(e.TgZ(0,"clr-tooltip-content",42)(1,"span"),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&r&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"CLEARANCES.INCLUDED_OPERATION_TOOLTIP")))}function me(r,l){if(1&r){const i=e.EpF();e.TgZ(0,"div",44)(1,"input",45),e.NdJ("change",function(){const o=e.CHM(i).$implicit,a=e.oxw();return e.KtG(a.setOperation(o))}),e.qZA(),e.TgZ(2,"label",46),e._uU(3),e.ALo(4,"translate"),e.qZA()()}if(2&r){const i=l.$implicit,n=e.oxw();e.xp6(1),e.s9C("id",i),e.s9C("value",i),e.Q6J("checked",n.hasOperation(i)),e.xp6(1),e.s9C("for",i),e.xp6(1),e.Oqu(e.lcZ(4,5,n.operationsToText(i)))}}function fe(r,l){1&r&&(e.TgZ(0,"div",47),e._UZ(1,"clr-icon",27),e.TgZ(2,"span",48),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&r&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"CLEARANCES.INCLUDED_OPERATION_ERROR")))}const Ce=function(r){return{pt:r}},Te=function(){return{standalone:!0}},Se=function(r){return{"mt-08":r}},Ze=[{path:"",component:(()=>{var r;class l{constructor(){this.inProgress=!0}}return(r=l).\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-clearing-job"]],decls:14,vars:9,consts:[["sub-header-title","",1,"custom-h2"],[1,"mt-1"],[1,"nav"],[1,"nav-item"],["routerLink","gc","routerLinkActive","active",1,"nav-link"],["routerLink","audit-log-purge","routerLinkActive","active",1,"nav-link"]],template:function(n,t){1&n&&(e.TgZ(0,"h2",0),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"nav",1)(4,"ul",2)(5,"li",3)(6,"a",4),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"li",3)(10,"a",5),e._uU(11),e.ALo(12,"translate"),e.qZA()()()(),e._UZ(13,"router-outlet")),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,3,"CLEARANCES.CLEARANCES"),"\n"),e.xp6(6),e.Oqu(e.lcZ(8,5,"CONFIG.GC")),e.xp6(4),e.Oqu(e.lcZ(12,7,"CLEARANCES.AUDIT_LOG")))},dependencies:[A.lC,A.rH,A.Od,S.X$]}),l})(),children:[{path:"gc",component:N},{path:"audit-log-purge",component:(()=>{var r;class l{constructor(n,t){this.purgeService=n,this.errorHandler=t,this.disableGC=!1,this.getLabelCurrent="CLEARANCES.SCHEDULE_TO_PURGE",this.loadingGcStatus=!1,this.dryRunOnGoing=!1,this.loadingLastCompletedTime=!1,this.isDryRun=!1,this.retentionUnit=c.zN.DAYS,this.operations=(0,p.d9)(c.CZ),this.selectedOperations=(0,p.d9)(c.CZ)}ngOnInit(){this.getCurrentSchedule(!0),this.getStatus()}ngOnDestroy(){this.statusTimeout&&(clearTimeout(this.statusTimeout),this.statusTimeout=null)}getStatus(){this.loadingLastCompletedTime=!0,this.purgeService.getPurgeHistory({page:1,pageSize:1,sort:"-update_time"}).subscribe(n=>{n?.length&&(this.isDryRun=JSON.parse(n[0]?.job_parameters).dry_run,this.lastCompletedTime=n[0]?.update_time,n[0]?.job_status===c.jf.RUNNING||n[0]?.job_status===c.jf.PENDING)?this.statusTimeout=setTimeout(()=>{this.getStatus()},c.wz):this.loadingLastCompletedTime=!1})}getCurrentSchedule(n){n&&(this.loadingGcStatus=!0),this.purgeService.getPurgeSchedule().pipe((0,C.x)(()=>{this.loadingGcStatus=!1})).subscribe({next:t=>{this.initSchedule(t)},error:t=>{this.errorHandler.error(t)}})}initSchedule(n){if(this.nextScheduledTime=n?.schedule?.next_scheduled_time?n?.schedule?.next_scheduled_time:null,n&&n.schedule)if(this.originCron={type:n.schedule.type,cron:n.schedule.cron},n&&n.job_parameters){const t=JSON.parse(n.job_parameters);this.selectedOperations=t?.include_operations?t?.include_operations?.split(","):[],t?.audit_retention_hour>24&&t?.audit_retention_hour%24==0?(this.retentionTime=t?.audit_retention_hour/24,this.retentionUnit=c.zN.DAYS):(this.retentionTime=t?.audit_retention_hour,this.retentionUnit=c.zN.HOURS)}else this.retentionTime=null,this.selectedOperations=(0,p.d9)(c.CZ),this.retentionUnit=c.zN.DAYS;else this.originCron={type:h.Ix.NONE,cron:""}}gcNow(){this.disableGC=!0,setTimeout(()=>{this.enableGc()},6e4),this.purgeService.createPurgeSchedule({schedule:{parameters:{audit_retention_hour:+(this.retentionUnit===c.zN.DAYS?24*this.retentionTime:this.retentionTime),include_operations:this.selectedOperations.join(","),dry_run:!1},schedule:{type:h.Ix.MANUAL}}}).subscribe({next:t=>{this.errorHandler.info("CLEARANCES.PURGE_NOW_SUCCESS"),this.refresh()},error:t=>{this.errorHandler.error(t)}})}dryRun(){this.dryRunOnGoing=!0,this.purgeService.createPurgeSchedule({schedule:{parameters:{audit_retention_hour:+(this.retentionUnit===c.zN.DAYS?24*this.retentionTime:this.retentionTime),include_operations:this.selectedOperations.join(","),dry_run:!0},schedule:{type:h.Ix.MANUAL}}}).pipe((0,C.x)(()=>this.dryRunOnGoing=!1)).subscribe({next:t=>{this.errorHandler.info("GC.DRY_RUN_SUCCESS"),this.refresh()},error:t=>{this.errorHandler.error(t)}})}enableGc(){this.disableGC=!1}saveGcSchedule(n){const t=this.retentionUnit===c.zN.DAYS?24*this.retentionTime:this.retentionTime;this.originCron&&this.originCron.type===h.Ix.NONE?this.purgeService.createPurgeSchedule({schedule:{parameters:{audit_retention_hour:+t,include_operations:this.selectedOperations.join(","),dry_run:!1},schedule:{type:N.getScheduleType(n),cron:n}}}).subscribe({next:o=>{this.errorHandler.info("CLEARANCES.PURGE_SCHEDULE_RESET"),this.cronScheduleComponent.resetSchedule(),this.getCurrentSchedule(!1)},error:o=>{this.errorHandler.error(o)}}):this.purgeService.updatePurgeSchedule({schedule:{parameters:{audit_retention_hour:+t,include_operations:this.selectedOperations.join(","),dry_run:!1},schedule:{type:N.getScheduleType(n),cron:n}}}).subscribe({next:o=>{this.errorHandler.info("CLEARANCES.PURGE_SCHEDULE_RESET"),this.cronScheduleComponent.resetSchedule(),this.getCurrentSchedule(!1)},error:o=>{this.errorHandler.error(o)}})}hasOperation(n){return-1!==this.selectedOperations?.indexOf(n)}operationsToText(n){return c.CV[n]?c.CV[n]:n}setOperation(n){-1===this.selectedOperations.indexOf(n)?this.selectedOperations.push(n):this.selectedOperations.splice(this.selectedOperations.findIndex(t=>t===n),1)}refresh(){this.getStatus(),this.purgeHistoryComponent?.refresh()}isValid(){return this.cronScheduleComponent?.scheduleType===h.Ix.NONE||!(this.purgeForm?.invalid||!(this.selectedOperations?.length>0))}isRetentionTimeValid(){return this.retentionUnit===c.zN.DAYS?this.retentionTime>0&&this.retentionTime<=1e4:this.retentionTime>0&&this.retentionTime<=24e4}}return(r=l).\u0275fac=function(n){return new(n||r)(e.Y36(q.X),e.Y36(Z.q))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-set-job"]],viewQuery:function(n,t){if(1&n&&(e.Gf(x.xp,5),e.Gf(J,5),e.Gf(oe,5)),2&n){let o;e.iGM(o=e.CRH())&&(t.cronScheduleComponent=o.first),e.iGM(o=e.CRH())&&(t.purgeHistoryComponent=o.first),e.iGM(o=e.CRH())&&(t.purgeForm=o.first)}},decls:65,vars:54,consts:[[1,"clr-row","mt-2","center",3,"hidden"],[1,"spinner","spinner-md"],[3,"hidden"],[1,"clr-row","mt-1"],[1,"clr-col-2","flex-200","font-style"],[1,"clr-col"],[1,"clr-row"],[1,"p-06","mr-2"],[1,"mr-1","font-style"],[1,"mr-3"],["class","spinner spinner-inline",4,"ngIf"],[4,"ngIf"],[1,"p-06"],["class","mr-1 font-style",4,"ngIf"],[1,"cron-selection"],[1,"w-100",3,"externalValidation","labelCurrent","labelEdit","originCron","inputvalue"],[1,"clr-form","clr-form-horizontal","p-0"],["purgeForm","ngForm"],[1,"clr-form-control","mt-0"],[1,"required","font-style","flex-200"],["clrTooltipTrigger","","shape","info-circle","size","24"],["clrPosition","top-right","clrSize","lg",4,"clrIfOpen"],[1,"clr-control-container","input-width"],[1,"flex"],[1,"clr-input-wrapper"],["name","retentionTime","type","text","autocomplete","off","required","","pattern","^[\\-1-9]{1}[0-9]*$","id","retentionTime","size","20",1,"clr-input",3,"disabled","ngModel","ngModelChange"],["retentionTimeNgModel","ngModel"],["shape","exclamation-circle",1,"clr-validate-icon"],["class","max-width-2rem",4,"ngIf"],[1,"clr-select-wrapper","unit-select",3,"ngClass"],["id","expiration-type",1,"clr-select",3,"ngModel","ngModelOptions","ngModelChange"],["value","days"],["value","hours"],[1,"clr-form-control",3,"ngClass"],[1,"font-style","required","flex-200"],[1,"clr-control-container","clr-control-inline"],["class","clr-checkbox-wrapper",4,"ngFor","ngForOf"],["class","clr-subtext-wrapper",4,"ngIf"],[1,"clr-col-2","flex-200"],["id","gc-now",1,"btn","btn-primary","gc-start-btn",3,"disabled","click"],["id","gc-dry-run",1,"btn","btn-outline","gc-start-btn",3,"disabled","click"],[1,"spinner","spinner-inline"],["clrPosition","top-right","clrSize","lg"],[1,"max-width-2rem"],[1,"clr-checkbox-wrapper"],["type","checkbox","name","operations",1,"clr-checkbox",3,"id","value","checked","change"],[1,"clr-control-label",3,"for"],[1,"clr-subtext-wrapper"],[1,"clr-subtext"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0),e._UZ(1,"span",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"span",8),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"span",9),e.YNc(14,le,1,0,"span",10),e.YNc(15,ue,3,2,"ng-container",11),e.qZA()(),e.TgZ(16,"div",12),e.YNc(17,pe,3,3,"span",13),e.YNc(18,ge,3,3,"span",11),e.qZA()()()(),e.TgZ(19,"div",14)(20,"cron-selection",15),e.NdJ("inputvalue",function(a){return t.saveGcSchedule(a)}),e.qZA()(),e.TgZ(21,"form",16,17)(23,"div",18)(24,"span",19),e._uU(25),e.ALo(26,"translate"),e.TgZ(27,"clr-tooltip"),e._UZ(28,"clr-icon",20),e.YNc(29,de,4,3,"clr-tooltip-content",21),e.qZA()(),e.TgZ(30,"div",22)(31,"div",23)(32,"div",24)(33,"input",25,26),e.NdJ("ngModelChange",function(a){return t.retentionTime=a}),e.qZA(),e._UZ(35,"clr-icon",27),e.YNc(36,he,3,3,"clr-control-error",28),e.qZA(),e.TgZ(37,"div",29)(38,"select",30),e.NdJ("ngModelChange",function(a){return t.retentionUnit=a}),e.TgZ(39,"option",31),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.TgZ(42,"option",32),e._uU(43),e.ALo(44,"translate"),e.qZA()()()()()(),e.TgZ(45,"div",33)(46,"span",34),e._uU(47),e.ALo(48,"translate"),e.TgZ(49,"clr-tooltip"),e._UZ(50,"clr-icon",20),e.YNc(51,_e,4,3,"clr-tooltip-content",21),e.qZA()(),e.TgZ(52,"div",35),e.YNc(53,me,5,7,"div",36),e.YNc(54,fe,5,3,"div",37),e.qZA()()(),e.TgZ(55,"div",6)(56,"div",38)(57,"button",39),e.NdJ("click",function(){return t.gcNow()}),e._uU(58),e.ALo(59,"translate"),e.qZA()(),e.TgZ(60,"div",5)(61,"button",40),e.NdJ("click",function(){return t.dryRun()}),e._uU(62),e.ALo(63,"translate"),e.qZA()()(),e._UZ(64,"app-purge-history"),e.qZA()),2&n){const o=e.MAs(22),a=e.MAs(34);e.Q6J("hidden",!t.loadingGcStatus),e.xp6(2),e.Q6J("hidden",t.loadingGcStatus),e.xp6(3),e.hij(" ",e.lcZ(6,33,"WEBHOOK.STATUS")," "),e.xp6(6),e.Oqu(e.lcZ(12,35,"CLEARANCES.LAST_COMPLETED")),e.xp6(3),e.Q6J("ngIf",t.loadingLastCompletedTime),e.xp6(1),e.Q6J("ngIf",!t.loadingLastCompletedTime),e.xp6(2),e.Q6J("ngIf",t.nextScheduledTime),e.xp6(1),e.Q6J("ngIf",t.nextScheduledTime),e.xp6(2),e.Q6J("externalValidation",t.isValid())("labelCurrent",t.getLabelCurrent)("labelEdit",t.getLabelCurrent)("originCron",t.originCron),e.xp6(5),e.Oqu(e.lcZ(26,37,"CLEARANCES.KEEP_IN")),e.xp6(5),e.ekj("clr-error",(a.dirty||a.touched)&&(a.invalid||!t.isRetentionTimeValid())),e.xp6(3),e.Q6J("disabled",t.dryRunOnGoing)("ngModel",t.retentionTime),e.xp6(3),e.Q6J("ngIf",(a.dirty||a.touched)&&(a.invalid||!t.isRetentionTimeValid())),e.xp6(1),e.Q6J("ngClass",e.VKq(49,Ce,(a.dirty||a.touched)&&(a.invalid||!t.isRetentionTimeValid()))),e.xp6(1),e.Q6J("ngModel",t.retentionUnit)("ngModelOptions",e.DdM(51,Te)),e.xp6(2),e.hij(" ",e.lcZ(41,39,"CLEARANCES.DAYS")," "),e.xp6(3),e.hij(" ",e.lcZ(44,41,"CLEARANCES.HOURS")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(52,Se,!((a.dirty||a.touched)&&a.invalid))),e.xp6(2),e.Oqu(e.lcZ(48,43,"CLEARANCES.INCLUDED_OPERATIONS")),e.xp6(5),e.ekj("clr-error",!((null==t.selectedOperations?null:t.selectedOperations.length)>0)),e.xp6(1),e.Q6J("ngForOf",t.operations),e.xp6(1),e.Q6J("ngIf",!((null==t.selectedOperations?null:t.selectedOperations.length)>0)),e.xp6(3),e.Q6J("disabled",t.disableGC||o.invalid||!((null==t.selectedOperations?null:t.selectedOperations.length)>0)),e.xp6(1),e.hij(" ",e.lcZ(59,45,"CLEARANCES.PURGE_NOW")," "),e.xp6(3),e.Q6J("disabled",t.dryRunOnGoing||o.invalid||!((null==t.selectedOperations?null:t.selectedOperations.length)>0)),e.xp6(1),e.hij(" ",e.lcZ(63,47,"TAG_RETENTION.WHAT_IF_RUN")," ")}},dependencies:[g._Y,g.YN,g.Kr,g.Fj,g.EJ,g.JJ,g.JL,g.Q7,g.c5,g.On,g.F,s.qvL,s.nqY,s.MgK,s.VqA,s.Jmj,s.bMv,s.zDF,f.mk,f.sg,f.O5,v.x,J,S.X$,b.Z],styles:[".cron-selection[_ngcontent-%COMP%]{display:flex;align-items:center}.gc-start-btn[_ngcontent-%COMP%]{width:150px;margin-top:35px}.flex-200[_ngcontent-%COMP%]{flex:0 0 200px;max-width:200px}.mt-05[_ngcontent-%COMP%]{margin-top:.5rem}.font-weight-400[_ngcontent-%COMP%]{font-weight:400}.center[_ngcontent-%COMP%]{justify-content:center;align-items:center}.flex[_ngcontent-%COMP%]{display:flex}.mt-08[_ngcontent-%COMP%]{margin-top:.8rem}.unit-select[_ngcontent-%COMP%]{padding-top:1px;margin-left:2rem}.max-width-2rem[_ngcontent-%COMP%]{max-width:2rem}.pt[_ngcontent-%COMP%]{padding-right:1rem}.p-06[_ngcontent-%COMP%]{padding-left:.6rem;padding-right:.6rem}"]}),l})()},{path:"",redirectTo:"gc",pathMatch:"full"}]}];let be=(()=>{var r;class l{}return(r=l).\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[te.m,A.Bz.forChild(Ze)]}),l})()}}]);