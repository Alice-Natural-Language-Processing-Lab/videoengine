function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{w7Ho:function(e,t,o){"use strict";o.r(t);var r=o("ofXK"),s=o("3Pt+"),i=o("tyNb"),n=o("mrSG"),a=o("Usal"),c=o("pz8m"),l=o("7NWl"),u=o("zwrK"),d=o("nD3/"),h=o("5zJ1"),f=o("ReVU"),b=o("fXoL"),p=o("LEd3"),m=o("RDfn"),v=o("+kG/");function w(e,t){1&e&&b.Nb(0,"app-loader")}function y(e,t){if(1&e){var o=b.Tb();b.Sb(0,"dynamic-modal-form",8),b.ec("OnSubmit",(function(e){return b.yc(o),b.gc().SubmitForm(e)})),b.Rb()}if(2&e){var r=b.gc();b.nc("controls",r.controls)("showLoader",r.showLoader)("showCancel",!1)("showModal",!1)("submitText",r.submitText)}}var S,g=((S=function(){function e(t,o,r,s,i){_classCallCheck(this,e),this.dataService=t,this.coreActions=o,this.formService=r,this.router=s,this.coreService=i,this.controls=[],this.showLoader=!0,this.submitText="Save Changes",this.User={},this.uploadedFiles=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.auth$.subscribe((function(t){e.LoadInfo(t.User.id)}))}},{key:"LoadInfo",value:function(e){var t=this;this.showLoader=!0,this.dataService.GetInfo(e).subscribe((function(e){"error"===e.status?(t.coreActions.Notify({title:e.message,text:"",css:"bg-success"}),t.router.navigate(["/"])):(t.User=e.post,t.coreService.prepareDynamicControlData(t.User),t.initializeControls(t.User)),t.showLoader=!1}))}},{key:"initializeControls",value:function(e){this.controls=this.formService.getControls(e,2,!1)}},{key:"SubmitForm",value:function(e){for(var t=this,o=0,r=Object.keys(this.User);o<r.length;o++)for(var s=r[o],i=0,n=Object.keys(e);i<n.length;i++){var a=n[i];s===a&&(this.User[s]=e[a])}this.User.attr_values=this.coreService.processDynamicControlsData(e,this.User),this.User.isadmin=!1,this.User.viewType=2,this.showLoader=!0,this.dataService.AddRecord(this.User).subscribe((function(e){"error"===e.status?t.coreActions.Notify({title:e.message,text:"",css:"bg-danger"}):(t.coreActions.Notify({title:"Profile Updated",text:"",css:"bg-success"}),t.router.navigate(["/"])),t.showLoader=!1}),(function(e){t.showLoader=!1,t.coreActions.Notify({title:"Error Occured",text:"",css:"bg-danger"})}))}}]),e}()).\u0275fac=function(e){return new(e||S)(b.Mb(l.a),b.Mb(p.a),b.Mb(c.a),b.Mb(i.c),b.Mb(d.a))},S.\u0275cmp=b.Gb({type:S,selectors:[["app-profilesetup"]],features:[b.yb([l.a,u.a,h.a,c.a,f.a,d.a])],decls:9,vars:2,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"m-b-0"],[1,"card-body"],[4,"ngIf"],[3,"controls","showLoader","showCancel","showModal","submitText","OnSubmit",4,"ngIf"],[3,"controls","showLoader","showCancel","showModal","submitText","OnSubmit"]],template:function(e,t){1&e&&(b.Sb(0,"div",0),b.Sb(1,"div",1),b.Sb(2,"div",2),b.Sb(3,"div",3),b.Sb(4,"h4",4),b.Ic(5,"Update Profile"),b.Rb(),b.Rb(),b.Sb(6,"div",5),b.Gc(7,w,1,0,"app-loader",6),b.Gc(8,y,1,5,"dynamic-modal-form",7),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&e&&(b.zb(7),b.nc("ngIf",t.showLoader),b.zb(1),b.nc("ngIf",!t.showLoader&&t.controls.length>0))},directives:[r.o,m.a,v.a],encapsulation:2}),Object(n.a)([Object(a.e)(["users","auth"])],S.prototype,"auth$",void 0),S),C=o("o+qO"),U=o("/4iV");o.d(t,"ProfileSetupModule",(function(){return T}));var L,I=[{path:"",data:{topmenuIndex:U.c.TOPMENU_SETTINGS_INDEX,leftmenuIndex:U.c.SETTINGS_PROFILE_SETUP_INDEX,title:"My Account",urls:[{title:"My Account",url:"/"},{title:"Profile Setup"}]},component:g}],T=((L=function e(){_classCallCheck(this,e)}).\u0275mod=b.Kb({type:L}),L.\u0275inj=b.Jb({factory:function(e){return new(e||L)},imports:[[s.i,r.c,C.a,i.g.forChild(I)]]}),L)}}]);