(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2uHY":function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var i=s("fXoL"),o=s("nD3/"),r=s("1pjZ");let n=(()=>{class e{constructor(e,t){this.coreService=e,this.config=t;const s=t.getConfig("host");this.apiOptions={load_roles:s+"api/role/load",load_objects:s+"api/roleobject/load",getinfo:s+"api/role/getinfo",add_role:s+"api/role/proc",add_object:s+"api/roleobject/proc",delete_role:s+"api/role/action",delete_object:s+"api/roleobject/action",update_permission:s+"api/rolepermission/proc"},this.init_search_options()}init_search_options(){this.searchOptions={showpanel:!0,showSearchPanel:!0,showAdvanceSearchLink:!1,term:"",topselectioncheck:!0,navList:this.coreService.getSettingsNavList(),filters:[],dropdownFilters:[],checkFilters:[],categories:[],selectedcategory:"",singleaction:!0,actions:[]}}getApiOptions(){return this.apiOptions}getUploadOptions(){return this.uploadOptions}getToolbarOptions(){return this.toolbarOptions}getSearchOptions(){return this.searchOptions}getInitRoleObject(){return{id:0,rolename:""}}getInitRoleObjectObject(){return{id:0,objectname:"",description:"",uniqueid:""}}}return e.\u0275fac=function(t){return new(t||e)(i.ac(o.a),i.ac(r.a))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac}),e})()},"7NWl":function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var i=s("fXoL"),o=s("zwrK"),r=s("tk/3"),n=s("5zJ1"),a=s("LEd3");let c=(()=>{class e{constructor(e,t,s,i){this.settings=e,this.http=t,this.actions=s,this.coreActions=i}LoadRecords(e){const t=this.settings.getApiOptions().load;this.actions.loadStarted(),this.http.post(t,JSON.stringify(e)).subscribe(t=>{this.actions.loadSucceeded(t),t.categories.length>0&&this.actions.updateCategories(t.categories),this.coreActions.refreshListStats({totalrecords:t.records,pagesize:e.pagesize,pagenumber:e.pagenumber})},e=>{this.actions.loadFailed(e)})}AddRecord(e){let t="";switch(e.viewType){case 1:case 2:t=this.settings.getApiOptions().proc;break;case 3:t=this.settings.getApiOptions().cemail;break;case 4:t=this.settings.getApiOptions().chpass;break;case 5:t=this.settings.getApiOptions().ctype}return 2===e.viewType?(e.settings.userid=e.id,e.account.userid=e.id,this.http.post(t,JSON.stringify({id:e.id,firstname:e.firstname,lastname:e.lastname,attr_values:e.attr_values,settings:e.settings,account:e.account}))):this.http.post(t,JSON.stringify(e))}UpdateThumb(e,t){const s=this.settings.getApiOptions().updatethumb,i={};i.Id=e.id;for(const o of t)i.picturename=o.fname;this.http.post(s,JSON.stringify(i)).subscribe(e=>{"error"===e.status?this.coreActions.Notify({title:e.message,text:"",css:"bg-danger"}):(this.actions.UpdateThumb(e.record),this.coreActions.Notify({title:"Profile Photo Updated",text:"",css:"bg-success"}))},e=>{this.coreActions.Notify({title:e,text:"",css:"bg-danger"})})}UpdateAvator(e){const t=this.settings.getApiOptions().updateavator;this.http.post(t,JSON.stringify(e)).subscribe(e=>{"error"===e.status?this.coreActions.Notify({title:e.message,text:"",css:"bg-danger"}):(this.actions.UpdateThumb(e.record),this.coreActions.Notify({title:"Avator Updated Successfully",text:"",css:"bg-success"}))},e=>{this.coreActions.Notify({title:e,text:"",css:"bg-danger"})})}GetInfo(e){const t=this.settings.getApiOptions().getinfo;return this.http.post(t,JSON.stringify({id:e}))}LoadReports(e){return this.http.post(this.settings.getApiOptions().load_reports,JSON.stringify(e))}Authenticate(e){const t=this.settings.getApiOptions().authenticate;return this.http.post(t,JSON.stringify(e))}UpdateRole(e){const t=this.settings.getApiOptions().updaterole;return this.http.post(t,JSON.stringify(e))}GetUserLog(e){const t=this.settings.getApiOptions().userlog;return this.http.post(t,JSON.stringify({userid:e}))}DeleteAccount(e){const t=this.settings.getApiOptions().archive;return this.http.post(t,JSON.stringify(e))}DeleteRecord(e,t){e.actionstatus="delete";const s=[];s.push(e),this.ProcessActions(s,"delete")}ProcessActions(e,t){this.actions.applyChanges({SelectedItems:e,isenabled:t});const s=[];for(const i of e)s.push({id:i.id,actionstatus:i.actionstatus});this.http.post(this.settings.getApiOptions().action,JSON.stringify(s)).subscribe(e=>{let s="Operation Performed";"delete"===t&&(s="Record Removed"),this.coreActions.Notify({title:s,text:"",css:"bg-success"})},e=>{this.coreActions.Notify({title:"Error Occured",text:"",css:"bg-danger"})})}ProcessLogActions(e,t){this.coreActions.Notify({title:"Feature not yet implemented",text:"",css:"bg-success"})}}return e.\u0275fac=function(t){return new(t||e)(i.ac(o.a),i.ac(r.b),i.ac(n.a),i.ac(a.a))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac}),e})()},KJAg:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var i=s("fXoL"),o=s("2uHY"),r=s("tk/3"),n=s("JgvU"),a=s("LEd3");let c=(()=>{class e{constructor(e,t,s,i){this.settings=e,this.http=t,this.actions=s,this.coreActions=i}LoadRoles(){const e=this.settings.getApiOptions().load_roles;this.actions.loadStarted(),this.http.post(e,{}).subscribe(e=>{this.actions.loadSucceeded(e)},e=>{this.actions.loadFailed(e)})}LoadObjects(){const e=this.settings.getApiOptions().load_objects;this.actions.loadObjectStarted(),this.http.post(e,{}).subscribe(e=>{this.actions.loadObjectSucceeded(e)},e=>{this.actions.loadObjectFailed(e)})}AddRole(e){console.log(this.settings.getApiOptions().add_role),this.http.post(this.settings.getApiOptions().add_role,JSON.stringify(e)).subscribe(e=>{this.actions.addRole(e.record)},e=>{this.actions.loadObjectFailed(e)})}AddObject(e){this.http.post(this.settings.getApiOptions().add_object,JSON.stringify(e)).subscribe(t=>{e.id>0?this.actions.updateObject(t.record):this.actions.addObject(t.record)},e=>{this.actions.loadObjectFailed(e)})}GetInfo(e){const t=this.settings.getApiOptions().getinfo;return this.http.post(t,JSON.stringify({id:e}))}UpdatePermission(e){const t=this.settings.getApiOptions().update_permission;return this.http.post(t,JSON.stringify(e))}DeleteRecord(e,t,s,i){e.actionstatus="delete";const o=[];o.push(e),this.ProcessActions(o,"delete",s,i)}ProcessActions(e,t,s,i){1===i?this.actions.applyRoleChanges({SelectedItems:e,isenabled:t}):this.actions.applyObjectChanges({SelectedItems:e,isenabled:t}),this.http.post(s,JSON.stringify(e)).subscribe(e=>{let s="Operation Performed";"delete"===t&&(s="Record Removed"),this.coreActions.Notify({title:s,text:"",css:"bg-success"})},e=>{this.coreActions.Notify({title:"Error Occured",text:"",css:"bg-danger"})})}}return e.\u0275fac=function(t){return new(t||e)(i.ac(o.a),i.ac(r.b),i.ac(n.a),i.ac(a.a))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac}),e})()},TzxA:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var i=s("fXoL"),o=s("My7I"),r=s("1kSV");let n=(()=>{class e{constructor(e){this.modalService=e,this.OnCropped=new i.n,this.showUploadBtn=!0,this.CropOption=0,this.showLoader=!1}ngOnInit(){}save(){const e={id:this.Info.id,picturename:this.Info.cropped_picture};console.log(e),this.OnCropped.emit(e)}cancel(){this.showUploadBtn=!0,this.Info.cropped_picture=this.Info.original_picture}deleteImage(e){this.Info.cropped_picture="",this.Info.original_picture="",this.showLoader=!0,e.stopPropagation()}changeListener(e){this.readThis(e.target),this.showUploadBtn=!1}readThis(e){const t=e.files[0],s=new FileReader,i=this;s.onloadend=function(e){i.Info.original_picture=s.result.toString(),i.Info.cropped_picture=s.result.toString(),i.editThumbnail()},s.readAsDataURL(t)}editThumbnail(){const e=this.modalService.open(o.a,{backdrop:!1});e.componentInstance.Info={title:"Editor",data:this.Info,cropoption:this.CropOption,settings:this.MediaSettings,scroller:!1},e.result.then(e=>{this.Info.cropped_picture=e.data.image,this.Info.img_url=e.data.image,this.save()},e=>{console.log("dismissed")})}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(r.b))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-banneruploader"]],inputs:{Info:"Info",MediaSettings:"MediaSettings"},outputs:{OnCropped:"OnCropped"},decls:7,vars:1,consts:[[1,""],["alt","",1,"img-responsive","img-thumbnail",3,"src"],[1,"m-t-10"],["for","file-upload"],[1,"btn","btn-primary","text-center"],["id","file-upload","type","file",2,"display","none",3,"change"]],template:function(e,t){1&e&&(i.Sb(0,"div",0),i.Nb(1,"img",1),i.Sb(2,"div",2),i.Sb(3,"label",3),i.Sb(4,"span",4),i.Ic(5,"Change"),i.Rb(),i.Sb(6,"input",5),i.ec("change",(function(e){return t.changeListener(e)})),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&e&&(i.zb(1),i.oc("src",t.Info.img_url,i.Bc))},encapsulation:2}),e})()},aIzJ:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var i=s("fXoL");let o=(()=>{class e{constructor(){void 0!==this.message&&""!==this.message||(this.message="No Record Found!")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["app-norecord"]],inputs:{message:"message"},decls:4,vars:1,consts:[[1,"card","text-center"],[1,"card-body"],[1,"card-title","m-b-30","m-t-30"]],template:function(e,t){1&e&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"h3",2),i.Ic(3),i.Rb(),i.Rb(),i.Rb()),2&e&&(i.zb(3),i.Jc(t.message))},encapsulation:2}),e})()},fo5a:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var i=s("ofXK"),o=s("3Pt+"),r=s("tyNb"),n=s("o+qO"),a=s("zwrK"),c=s("7NWl"),l=s("pz8m"),d=s("5zJ1"),p=s("fXoL");let h=(()=>{class e{}return e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({factory:function(t){return new(t||e)},providers:[a.a,c.a,l.a,d.a],imports:[[i.c,n.a,r.g,o.i,o.u]]}),e})()},pz8m:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var i=s("dNLF"),o=s("/4iV"),r=s("fXoL"),n=s("nD3/");let a=(()=>{class e{constructor(e){this.coreService=e}getControls(e,t,s=!0){switch(t){case 1:return this.CreateAccountControls(e);case 2:return this.EditProfileControls(e,s);case 3:return this.ChangeEmailControls(e,s);case 4:return this.ChangePasswordControls(e,s);case 5:return this.ChangeUserTypeControls(e)}return this.CreateAccountControls(e)}CreateAccountControls(e){const t=[],s=[];for(const i of o.b.USER_TYPES)s.push({key:i.value,value:i.title});return t.push(new i.b({key:"role_name",label:"Select Role",value:e.role_name.toString(),options:s,order:0})),t.push(new i.i({key:"firstname",label:"",value:e.firstname,placeholder:"First Name",minLength:3,maxLength:50,order:1})),t.push(new i.i({key:"lastname",label:"",value:e.lastname,placeholder:"Last Name",minLength:3,maxLength:50,order:2})),t.push(new i.i({key:"username",label:"",value:e.username,placeholder:"User Name",minLength:5,maxLength:15,required:!0,pattern:o.d.USERNAME_REGEX,order:3})),t.push(new i.i({key:"password",type:"password",label:"",value:e.password,placeholder:"Password",minLength:5,maxLength:20,required:!0,pattern:o.d.PASSWORD_REGEX,order:4})),t.push(new i.i({key:"cpassword",type:"password",label:"",placeholder:"Confirm Password",value:e.cpassword,minLength:5,maxLength:20,required:!0,order:5})),t.push(new i.i({key:"email",label:"",placeholder:"Email",value:e.email,required:!0,email:!0,order:6})),t.sort((e,t)=>e.order-t.order)}getLoginControls(e){const t=[];return t.push(new i.i({key:"username",label:"",value:e.username,placeholder:"User Name",required:!0,minLength:5,maxLength:20,order:1})),t.push(new i.i({key:"password",type:"password",label:"",value:e.password,placeholder:"Password",required:!0,minLength:5,maxLength:20,order:2})),t.push(new i.a({key:"rememberme",label:"Remember Me",value:e.rememberme,checked:e.rememberme,required:!0,order:3})),t.sort((e,t)=>e.order-t.order)}EditProfileControls(e,t=!0){const s=[];s.push(new i.i({key:"firstname",label:"First Name",value:e.firstname,placeholder:"First Name",minLength:3,maxLength:50,order:0})),s.push(new i.i({key:"lastname",label:"Last Name",value:e.lastname,placeholder:"Last Name",minLength:3,maxLength:50,order:1}));let o=!1;if(""!==e.id&&(o=!0),this.coreService.renderDynamicControls(s,e.options,o),t){s.push(new i.g({key:"config_section_01",label:"Settings",order:1001}));let t=!1;1===e.settings.isemail&&(t=!0),s.push(new i.a({key:"isemail",label:"Receiving Emails",value:e.settings.isemail,checked:t,helpblock:"Toggle on | off receiving emails",order:1002}));let o=!1;1===e.settings.issendmessages&&(o=!0),s.push(new i.a({key:"issendmessages",label:"Receiving Messages",value:e.settings.issendmessages,checked:o,helpblock:"Toggle on | off receiving internal messages within website",order:1003})),s.push(new i.g({key:"config_section_01",label:"Account",order:1004})),s.push(new i.i({key:"credits",label:"Credits",value:e.account.credits.toString(),colsize:"col-md-12",pattern:"[0-9]+",required:!0,helpblock:"Update user account credits manually",order:1005}));let r=!1;1===e.account.islifetimerenewal&&(r=!0),s.push(new i.a({key:"islifetimerenewal",label:"Lifetime Renewal",value:e.account.islifetimerenewal,checked:r,helpblock:"Toggle on | off enforcing lifetime renewal (paid) account",order:1006}))}return s.sort((e,t)=>e.order-t.order)}ChangeEmailControls(e,t=!0){const s=[];return s.push(new i.i({key:"email",label:"Email Address",placeholder:"Email",value:e.email,required:!0,email:!0,order:0})),t||s.push(new i.i({key:"password",type:"password",pattern:o.d.PASSWORD_REGEX,label:"",placeholder:"Password",value:e.password,minLength:5,maxLength:20,required:!0,order:1})),s.sort((e,t)=>e.order-t.order)}ChangePasswordControls(e,t=!0){const s=[];return t||s.push(new i.i({key:"opassword",type:"password",label:"Current Password",value:e.opassword,placeholder:"Old Password",minLength:5,maxLength:20,required:!0,order:0})),s.push(new i.i({key:"password",type:"password",label:"New Password",value:e.password,placeholder:"Password",minLength:5,maxLength:20,required:!0,pattern:o.d.PASSWORD_REGEX,order:4})),s.push(new i.i({key:"cpassword",type:"password",label:"Confirm Password",placeholder:"Confirm Password",value:e.cpassword,minLength:5,maxLength:20,required:!0,order:5})),s.sort((e,t)=>e.order-t.order)}ChangeUserTypeControls(e){const t=[],s=[];for(const i of o.b.USER_TYPES)s.push({key:i.value,value:i.title});return t.push(new i.b({key:"role_name",label:"Select Role",value:e.role_name,options:s,order:0})),t.sort((e,t)=>e.order-t.order)}}return e.\u0275fac=function(t){return new(t||e)(r.ac(n.a))},e.\u0275prov=r.Ib({token:e,factory:e.\u0275fac}),e})()}}]);