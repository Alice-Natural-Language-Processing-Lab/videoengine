function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2uHY":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL"),s=n("nD3/"),r=n("1pjZ"),o=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.coreService=t,this.config=n;var i=n.getConfig("host");this.apiOptions={load_roles:i+"api/role/load",load_objects:i+"api/roleobject/load",getinfo:i+"api/role/getinfo",add_role:i+"api/role/proc",add_object:i+"api/roleobject/proc",delete_role:i+"api/role/action",delete_object:i+"api/roleobject/action",update_permission:i+"api/rolepermission/proc"},this.init_search_options()}return _createClass(e,[{key:"init_search_options",value:function(){this.searchOptions={showpanel:!0,showSearchPanel:!0,showAdvanceSearchLink:!1,term:"",topselectioncheck:!0,navList:this.coreService.getSettingsNavList(),filters:[],dropdownFilters:[],checkFilters:[],categories:[],selectedcategory:"",singleaction:!0,actions:[]}}},{key:"getApiOptions",value:function(){return this.apiOptions}},{key:"getUploadOptions",value:function(){return this.uploadOptions}},{key:"getToolbarOptions",value:function(){return this.toolbarOptions}},{key:"getSearchOptions",value:function(){return this.searchOptions}},{key:"getInitRoleObject",value:function(){return{id:0,rolename:""}}},{key:"getInitRoleObjectObject",value:function(){return{id:0,objectname:"",description:"",uniqueid:""}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.ac(s.a),i.ac(r.a))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac}),e}()},"7NWl":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("fXoL"),s=n("zwrK"),r=n("tk/3"),o=n("5zJ1"),a=n("LEd3"),c=function(){var e=function(){function e(t,n,i,s){_classCallCheck(this,e),this.settings=t,this.http=n,this.actions=i,this.coreActions=s}return _createClass(e,[{key:"LoadRecords",value:function(e){var t=this,n=this.settings.getApiOptions().load;this.actions.loadStarted(),this.http.post(n,JSON.stringify(e)).subscribe((function(n){t.actions.loadSucceeded(n),n.categories.length>0&&t.actions.updateCategories(n.categories),t.coreActions.refreshListStats({totalrecords:n.records,pagesize:e.pagesize,pagenumber:e.pagenumber})}),(function(e){t.actions.loadFailed(e)}))}},{key:"AddRecord",value:function(e){var t="";switch(e.viewType){case 1:case 2:t=this.settings.getApiOptions().proc;break;case 3:t=this.settings.getApiOptions().cemail;break;case 4:t=this.settings.getApiOptions().chpass;break;case 5:t=this.settings.getApiOptions().ctype}return 2===e.viewType?(e.settings.userid=e.id,e.account.userid=e.id,this.http.post(t,JSON.stringify({id:e.id,firstname:e.firstname,lastname:e.lastname,attr_values:e.attr_values,settings:e.settings,account:e.account}))):this.http.post(t,JSON.stringify(e))}},{key:"UpdateThumb",value:function(e,t){var n=this,i=this.settings.getApiOptions().updatethumb,s={};s.Id=e.id;var r=!0,o=!1,a=void 0;try{for(var c,l=t[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value;s.picturename=u.fname}}catch(d){o=!0,a=d}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}this.http.post(i,JSON.stringify(s)).subscribe((function(e){"error"===e.status?n.coreActions.Notify({title:e.message,text:"",css:"bg-danger"}):(n.actions.UpdateThumb(e.record),n.coreActions.Notify({title:"Profile Photo Updated",text:"",css:"bg-success"}))}),(function(e){n.coreActions.Notify({title:e,text:"",css:"bg-danger"})}))}},{key:"UpdateAvator",value:function(e){var t=this,n=this.settings.getApiOptions().updateavator;this.http.post(n,JSON.stringify(e)).subscribe((function(e){"error"===e.status?t.coreActions.Notify({title:e.message,text:"",css:"bg-danger"}):(t.actions.UpdateThumb(e.record),t.coreActions.Notify({title:"Avator Updated Successfully",text:"",css:"bg-success"}))}),(function(e){t.coreActions.Notify({title:e,text:"",css:"bg-danger"})}))}},{key:"GetInfo",value:function(e){var t=this.settings.getApiOptions().getinfo;return this.http.post(t,JSON.stringify({id:e}))}},{key:"LoadReports",value:function(e){return this.http.post(this.settings.getApiOptions().load_reports,JSON.stringify(e))}},{key:"Authenticate",value:function(e){var t=this.settings.getApiOptions().authenticate;return this.http.post(t,JSON.stringify(e))}},{key:"UpdateRole",value:function(e){var t=this.settings.getApiOptions().updaterole;return this.http.post(t,JSON.stringify(e))}},{key:"GetUserLog",value:function(e){var t=this.settings.getApiOptions().userlog;return this.http.post(t,JSON.stringify({userid:e}))}},{key:"DeleteAccount",value:function(e){var t=this.settings.getApiOptions().archive;return this.http.post(t,JSON.stringify(e))}},{key:"DeleteRecord",value:function(e,t){e.actionstatus="delete";var n=[];n.push(e),this.ProcessActions(n,"delete")}},{key:"ProcessActions",value:function(e,t){var n=this;this.actions.applyChanges({SelectedItems:e,isenabled:t});var i=[],s=!0,r=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(s=(a=c.next()).done);s=!0){var l=a.value;i.push({id:l.id,actionstatus:l.actionstatus})}}catch(u){r=!0,o=u}finally{try{s||null==c.return||c.return()}finally{if(r)throw o}}this.http.post(this.settings.getApiOptions().action,JSON.stringify(i)).subscribe((function(e){var i="Operation Performed";"delete"===t&&(i="Record Removed"),n.coreActions.Notify({title:i,text:"",css:"bg-success"})}),(function(e){n.coreActions.Notify({title:"Error Occured",text:"",css:"bg-danger"})}))}},{key:"ProcessLogActions",value:function(e,t){this.coreActions.Notify({title:"Feature not yet implemented",text:"",css:"bg-success"})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.ac(s.a),i.ac(r.b),i.ac(o.a),i.ac(a.a))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac}),e}()},KJAg:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("fXoL"),s=n("2uHY"),r=n("tk/3"),o=n("JgvU"),a=n("LEd3"),c=function(){var e=function(){function e(t,n,i,s){_classCallCheck(this,e),this.settings=t,this.http=n,this.actions=i,this.coreActions=s}return _createClass(e,[{key:"LoadRoles",value:function(){var e=this,t=this.settings.getApiOptions().load_roles;this.actions.loadStarted(),this.http.post(t,{}).subscribe((function(t){e.actions.loadSucceeded(t)}),(function(t){e.actions.loadFailed(t)}))}},{key:"LoadObjects",value:function(){var e=this,t=this.settings.getApiOptions().load_objects;this.actions.loadObjectStarted(),this.http.post(t,{}).subscribe((function(t){e.actions.loadObjectSucceeded(t)}),(function(t){e.actions.loadObjectFailed(t)}))}},{key:"AddRole",value:function(e){var t=this;console.log(this.settings.getApiOptions().add_role),this.http.post(this.settings.getApiOptions().add_role,JSON.stringify(e)).subscribe((function(e){t.actions.addRole(e.record)}),(function(e){t.actions.loadObjectFailed(e)}))}},{key:"AddObject",value:function(e){var t=this;this.http.post(this.settings.getApiOptions().add_object,JSON.stringify(e)).subscribe((function(n){e.id>0?t.actions.updateObject(n.record):t.actions.addObject(n.record)}),(function(e){t.actions.loadObjectFailed(e)}))}},{key:"GetInfo",value:function(e){var t=this.settings.getApiOptions().getinfo;return this.http.post(t,JSON.stringify({id:e}))}},{key:"UpdatePermission",value:function(e){var t=this.settings.getApiOptions().update_permission;return this.http.post(t,JSON.stringify(e))}},{key:"DeleteRecord",value:function(e,t,n,i){e.actionstatus="delete";var s=[];s.push(e),this.ProcessActions(s,"delete",n,i)}},{key:"ProcessActions",value:function(e,t,n,i){var s=this;1===i?this.actions.applyRoleChanges({SelectedItems:e,isenabled:t}):this.actions.applyObjectChanges({SelectedItems:e,isenabled:t}),this.http.post(n,JSON.stringify(e)).subscribe((function(e){var n="Operation Performed";"delete"===t&&(n="Record Removed"),s.coreActions.Notify({title:n,text:"",css:"bg-success"})}),(function(e){s.coreActions.Notify({title:"Error Occured",text:"",css:"bg-danger"})}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.ac(s.a),i.ac(r.b),i.ac(o.a),i.ac(a.a))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac}),e}()},TzxA:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL"),s=n("My7I"),r=n("1kSV"),o=function(){var e=function(){function e(t){_classCallCheck(this,e),this.modalService=t,this.OnCropped=new i.n,this.showUploadBtn=!0,this.CropOption=0,this.showLoader=!1}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"save",value:function(){var e={id:this.Info.id,picturename:this.Info.cropped_picture};console.log(e),this.OnCropped.emit(e)}},{key:"cancel",value:function(){this.showUploadBtn=!0,this.Info.cropped_picture=this.Info.original_picture}},{key:"deleteImage",value:function(e){this.Info.cropped_picture="",this.Info.original_picture="",this.showLoader=!0,e.stopPropagation()}},{key:"changeListener",value:function(e){this.readThis(e.target),this.showUploadBtn=!1}},{key:"readThis",value:function(e){var t=e.files[0],n=new FileReader,i=this;n.onloadend=function(e){i.Info.original_picture=n.result.toString(),i.Info.cropped_picture=n.result.toString(),i.editThumbnail()},n.readAsDataURL(t)}},{key:"editThumbnail",value:function(){var e=this,t=this.modalService.open(s.a,{backdrop:!1});t.componentInstance.Info={title:"Editor",data:this.Info,cropoption:this.CropOption,settings:this.MediaSettings,scroller:!1},t.result.then((function(t){e.Info.cropped_picture=t.data.image,e.Info.img_url=t.data.image,e.save()}),(function(e){console.log("dismissed")}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Mb(r.b))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-banneruploader"]],inputs:{Info:"Info",MediaSettings:"MediaSettings"},outputs:{OnCropped:"OnCropped"},decls:7,vars:1,consts:[[1,""],["alt","",1,"img-responsive","img-thumbnail",3,"src"],[1,"m-t-10"],["for","file-upload"],[1,"btn","btn-primary","text-center"],["id","file-upload","type","file",2,"display","none",3,"change"]],template:function(e,t){1&e&&(i.Sb(0,"div",0),i.Nb(1,"img",1),i.Sb(2,"div",2),i.Sb(3,"label",3),i.Sb(4,"span",4),i.Ic(5,"Change"),i.Rb(),i.Sb(6,"input",5),i.ec("change",(function(e){return t.changeListener(e)})),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&e&&(i.zb(1),i.oc("src",t.Info.img_url,i.Bc))},encapsulation:2}),e}()},aIzJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("fXoL"),s=function(){var e=function e(){_classCallCheck(this,e),void 0!==this.message&&""!==this.message||(this.message="No Record Found!")};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["app-norecord"]],inputs:{message:"message"},decls:4,vars:1,consts:[[1,"card","text-center"],[1,"card-body"],[1,"card-title","m-b-30","m-t-30"]],template:function(e,t){1&e&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"h3",2),i.Ic(3),i.Rb(),i.Rb(),i.Rb()),2&e&&(i.zb(3),i.Jc(t.message))},encapsulation:2}),e}()},fo5a:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n("ofXK"),s=n("3Pt+"),r=n("tyNb"),o=n("o+qO"),a=n("zwrK"),c=n("7NWl"),l=n("pz8m"),u=n("5zJ1"),d=n("fXoL"),p=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},providers:[a.a,c.a,l.a,u.a],imports:[[i.c,o.a,r.g,s.i,s.u]]}),e}()},pz8m:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("dNLF"),s=n("/4iV"),r=n("fXoL"),o=n("nD3/"),a=function(){var e=function(){function e(t){_classCallCheck(this,e),this.coreService=t}return _createClass(e,[{key:"getControls",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(t){case 1:return this.CreateAccountControls(e);case 2:return this.EditProfileControls(e,n);case 3:return this.ChangeEmailControls(e,n);case 4:return this.ChangePasswordControls(e,n);case 5:return this.ChangeUserTypeControls(e)}return this.CreateAccountControls(e)}},{key:"CreateAccountControls",value:function(e){var t=[],n=[],r=!0,o=!1,a=void 0;try{for(var c,l=s.b.USER_TYPES[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value;n.push({key:u.value,value:u.title})}}catch(d){o=!0,a=d}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t.push(new i.b({key:"role_name",label:"Select Role",value:e.role_name.toString(),options:n,order:0})),t.push(new i.i({key:"firstname",label:"",value:e.firstname,placeholder:"First Name",minLength:3,maxLength:50,order:1})),t.push(new i.i({key:"lastname",label:"",value:e.lastname,placeholder:"Last Name",minLength:3,maxLength:50,order:2})),t.push(new i.i({key:"username",label:"",value:e.username,placeholder:"User Name",minLength:5,maxLength:15,required:!0,pattern:s.d.USERNAME_REGEX,order:3})),t.push(new i.i({key:"password",type:"password",label:"",value:e.password,placeholder:"Password",minLength:5,maxLength:20,required:!0,pattern:s.d.PASSWORD_REGEX,order:4})),t.push(new i.i({key:"cpassword",type:"password",label:"",placeholder:"Confirm Password",value:e.cpassword,minLength:5,maxLength:20,required:!0,order:5})),t.push(new i.i({key:"email",label:"",placeholder:"Email",value:e.email,required:!0,email:!0,order:6})),t.sort((function(e,t){return e.order-t.order}))}},{key:"getLoginControls",value:function(e){var t=[];return t.push(new i.i({key:"username",label:"",value:e.username,placeholder:"User Name",required:!0,minLength:5,maxLength:20,order:1})),t.push(new i.i({key:"password",type:"password",label:"",value:e.password,placeholder:"Password",required:!0,minLength:5,maxLength:20,order:2})),t.push(new i.a({key:"rememberme",label:"Remember Me",value:e.rememberme,checked:e.rememberme,required:!0,order:3})),t.sort((function(e,t){return e.order-t.order}))}},{key:"EditProfileControls",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[];n.push(new i.i({key:"firstname",label:"First Name",value:e.firstname,placeholder:"First Name",minLength:3,maxLength:50,order:0})),n.push(new i.i({key:"lastname",label:"Last Name",value:e.lastname,placeholder:"Last Name",minLength:3,maxLength:50,order:1}));var s=!1;if(""!==e.id&&(s=!0),this.coreService.renderDynamicControls(n,e.options,s),t){n.push(new i.g({key:"config_section_01",label:"Settings",order:1001}));var r=!1;1===e.settings.isemail&&(r=!0),n.push(new i.a({key:"isemail",label:"Receiving Emails",value:e.settings.isemail,checked:r,helpblock:"Toggle on | off receiving emails",order:1002}));var o=!1;1===e.settings.issendmessages&&(o=!0),n.push(new i.a({key:"issendmessages",label:"Receiving Messages",value:e.settings.issendmessages,checked:o,helpblock:"Toggle on | off receiving internal messages within website",order:1003})),n.push(new i.g({key:"config_section_01",label:"Account",order:1004})),n.push(new i.i({key:"credits",label:"Credits",value:e.account.credits.toString(),colsize:"col-md-12",pattern:"[0-9]+",required:!0,helpblock:"Update user account credits manually",order:1005}));var a=!1;1===e.account.islifetimerenewal&&(a=!0),n.push(new i.a({key:"islifetimerenewal",label:"Lifetime Renewal",value:e.account.islifetimerenewal,checked:a,helpblock:"Toggle on | off enforcing lifetime renewal (paid) account",order:1006}))}return n.sort((function(e,t){return e.order-t.order}))}},{key:"ChangeEmailControls",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[];return n.push(new i.i({key:"email",label:"Email Address",placeholder:"Email",value:e.email,required:!0,email:!0,order:0})),t||n.push(new i.i({key:"password",type:"password",pattern:s.d.PASSWORD_REGEX,label:"",placeholder:"Password",value:e.password,minLength:5,maxLength:20,required:!0,order:1})),n.sort((function(e,t){return e.order-t.order}))}},{key:"ChangePasswordControls",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[];return t||n.push(new i.i({key:"opassword",type:"password",label:"Current Password",value:e.opassword,placeholder:"Old Password",minLength:5,maxLength:20,required:!0,order:0})),n.push(new i.i({key:"password",type:"password",label:"New Password",value:e.password,placeholder:"Password",minLength:5,maxLength:20,required:!0,pattern:s.d.PASSWORD_REGEX,order:4})),n.push(new i.i({key:"cpassword",type:"password",label:"Confirm Password",placeholder:"Confirm Password",value:e.cpassword,minLength:5,maxLength:20,required:!0,order:5})),n.sort((function(e,t){return e.order-t.order}))}},{key:"ChangeUserTypeControls",value:function(e){var t=[],n=[],r=!0,o=!1,a=void 0;try{for(var c,l=s.b.USER_TYPES[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value;n.push({key:u.value,value:u.title})}}catch(d){o=!0,a=d}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t.push(new i.b({key:"role_name",label:"Select Role",value:e.role_name,options:n,order:0})),t.sort((function(e,t){return e.order-t.order}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.ac(o.a))},e.\u0275prov=r.Ib({token:e,factory:e.\u0275fac}),e}()}}]);