(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3yYE":function(t,s,e){"use strict";e.r(s);var o=e("ofXK"),r=e("3Pt+"),c=e("tyNb"),i=e("mrSG"),n=e("Usal"),a=e("pz8m"),d=e("7NWl"),h=e("zwrK"),b=e("5zJ1"),u=e("ReVU"),l=e("fXoL"),w=e("nD3/"),m=e("LEd3"),f=e("RDfn"),g=e("+kG/");function p(t,s){1&t&&l.Nb(0,"app-loader")}function S(t,s){if(1&t){const t=l.Tb();l.Sb(0,"dynamic-modal-form",11),l.ec("OnSubmit",(function(s){return l.yc(t),l.gc().SubmitForm(s)})),l.Rb()}if(2&t){const t=l.gc();l.nc("controls",t.controls)("showLoader",t.showLoader)("showCancel",!1)("showModal",!1)("submitText",t.submitText)}}let v=(()=>{class t{constructor(t,s,e,o,r,c,i,n){this.settingService=t,this.dataService=s,this.coreService=e,this.coreActions=o,this.actions=r,this.formService=c,this.router=i,this.cookieService=n,this.controls=[],this.showLoader=!0,this.submitText="Save Changes",this.User={}}ngOnInit(){this.auth$.subscribe(t=>{this.User=t.User,this.initializeControls(t.User),this.showLoader=!1})}initializeControls(t){this.controls=this.formService.getControls(t,4,!1)}deleteAccount(){!0===confirm("Are you sure you want to delete your account?")&&this.dataService.DeleteAccount(this.User).subscribe(t=>{"error"===t.status?this.coreActions.Notify({title:t.message,text:"",css:"bg-danger"}):(this.coreActions.Notify({title:"Account Deleted",text:"",css:"bg-success"}),this.router.navigate(["/"])),this.showLoader=!1},t=>{this.showLoader=!1,this.coreActions.Notify({title:"Error Occured",text:"",css:"bg-danger"})})}SubmitForm(t){this.User.cpassword=t.cpassword,this.User.opassword=t.opassword,this.User.password=t.password,this.User.viewType=4,this.User.password===this.User.cpassword?(this.User.isadmin=!1,this.showLoader=!0,this.dataService.AddRecord(this.User).subscribe(t=>{"error"===t.status?this.coreActions.Notify({title:t.message,text:"",css:"bg-danger"}):(this.coreActions.Notify({title:"Password changed successfully",text:"",css:"bg-success"}),this.router.navigate(["/"])),this.showLoader=!1},t=>{this.showLoader=!1,this.coreActions.Notify({title:"Error Occured",text:"",css:"bg-danger"})})):this.coreActions.Notify({title:"Confirm Password Not Matched",text:"",css:"bg-danger"})}}return t.\u0275fac=function(s){return new(s||t)(l.Mb(h.a),l.Mb(d.a),l.Mb(w.a),l.Mb(m.a),l.Mb(b.a),l.Mb(a.a),l.Mb(c.c),l.Mb(u.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-manageaccount"]],features:[l.yb([d.a,h.a,b.a,a.a,u.a])],decls:14,vars:2,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"m-b-0"],[1,"card-body"],[4,"ngIf"],[3,"controls","showLoader","showCancel","showModal","submitText","OnSubmit",4,"ngIf"],[1,"card","m-t-20"],[1,"m-t-20","m-b-20","text-center"],[1,"btn","btn-danger",3,"click"],[3,"controls","showLoader","showCancel","showModal","submitText","OnSubmit"]],template:function(t,s){1&t&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Sb(3,"div",3),l.Sb(4,"h4",4),l.Ic(5,"Change Password"),l.Rb(),l.Rb(),l.Sb(6,"div",5),l.Gc(7,p,1,0,"app-loader",6),l.Gc(8,S,1,5,"dynamic-modal-form",7),l.Rb(),l.Rb(),l.Sb(9,"div",8),l.Sb(10,"div",5),l.Sb(11,"div",9),l.Sb(12,"button",10),l.ec("click",(function(){return s.deleteAccount()})),l.Ic(13," Delete Account "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&t&&(l.zb(7),l.nc("ngIf",s.showLoader),l.zb(1),l.nc("ngIf",!s.showLoader&&s.controls.length>0))},directives:[o.o,f.a,g.a],encapsulation:2}),Object(i.a)([Object(n.e)(["users","auth"])],t.prototype,"auth$",void 0),t})();var y=e("o+qO"),A=e("/4iV");e.d(s,"ManageAccountModule",(function(){return N}));const M=[{path:"",data:{topmenuIndex:A.c.TOPMENU_SETTINGS_INDEX,leftmenuIndex:A.c.SETTINGS_MANAGE_ACCOUNT_INDEX,title:"My Account",urls:[{title:"My Account",url:"/"},{title:"Manage Account"}]},component:v}];let N=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(s){return new(s||t)},imports:[[r.i,o.c,y.a,c.g.forChild(M)]]}),t})()}}]);