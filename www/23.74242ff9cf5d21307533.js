(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{TvpC:function(n,e,l){"use strict";l.d(e,"a",function(){return c});var t=l("mrSG"),o=l("t/Na"),r=l("9Xff"),i=l("67Y/"),u=l("CcnG"),a=l("iw74"),c=function(){function n(n,e){this.Pro_http=n,this.storage=e}return n.prototype.obtenerCategorias=function(n){var e=new o.g(r.a);return this.Pro_http.post(r.b+"api/categorias/categoriasList",{token:n},{headers:e}).pipe(Object(i.a)(function(n){return n}))},n.prototype.obtenerCategoriasAsync=function(){return t.b(this,void 0,void 0,function(){var n,e;return t.e(this,function(l){switch(l.label){case 0:return n=new o.g(r.a),e={},[4,this.storage.get("token")];case 1:return e.token=l.sent(),[2,this.Pro_http.post(r.b+"api/categorias/categoriasList",e,{headers:n}).toPromise()]}})})},n.prototype.InsertUpdateDeleteCategoria=function(n,e,l){return t.b(this,void 0,void 0,function(){var i,u;return t.e(this,function(t){switch(t.label){case 0:return i=new o.g(r.a),u={},[4,this.storage.get("token")];case 1:return u.token=t.sent(),u.id_categoria=n,u.nombre=e,u.accion=l,[4,this.Pro_http.post(r.b+"api/categorias/insertUpdateDeleteCategoria",u,{headers:i}).toPromise()];case 2:return[2,t.sent()]}})})},n.ngInjectableDef=u.defineInjectable({factory:function(){return new n(u.inject(o.c),u.inject(a.b))},token:n,providedIn:"root"}),n}()},gXD0:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),o=l("mrSG"),r=l("TvpC"),i=l("ZZ/e"),u=function(){function n(n,e,l,t){this.Pro_categorias=n,this.storage=e,this.alertController=l,this.loadingController=t,this.categorias=[],this.categorias_backup=[],this.textSearch=""}return n.prototype.ngOnInit=function(){var n=this;this.storage.get("token").then(function(e){n.Pro_categorias.obtenerCategorias(e).subscribe(function(e){n.categorias=n.categorias_backup=e})})},n.prototype.categoriaInsertUpdate=function(n,e,l){return void 0===l&&(l=null),o.b(this,void 0,void 0,function(){var t=this;return o.e(this,function(r){switch(r.label){case 0:return[4,this.alertController.create({header:"INSERT"==e?"Nueva Categoria":"Actualizar Categoria",inputs:[{name:"input",type:"text",value:l,placeholder:"Nombre"}],buttons:[{text:"Cancelar",cssClass:"secondary"},{text:"INSERT"==e?"Crear":"Actualizar",handler:function(l){return o.b(t,void 0,void 0,function(){return o.e(this,function(t){switch(t.label){case 0:return[4,this.Pro_categorias.InsertUpdateDeleteCategoria(n,l.input,e).catch(function(n){})];case 1:return t.sent(),[4,this.refreshUpdate()];case 2:return t.sent(),[2]}})})}}]})];case 1:return[4,r.sent().present()];case 2:return r.sent(),[2]}})})},n.prototype.categoriaDelete=function(n,e){return o.b(this,void 0,void 0,function(){var l=this;return o.e(this,function(t){switch(t.label){case 0:return[4,this.alertController.create({header:"Eliminar Categoria",message:"Eliminar "+e,buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(n){}},{text:"Eliminar",handler:function(e){return o.b(l,void 0,void 0,function(){return o.e(this,function(l){switch(l.label){case 0:return[4,this.Pro_categorias.InsertUpdateDeleteCategoria(n,e,"DELETE")];case 1:return l.sent(),[4,this.refreshUpdate()];case 2:return l.sent(),[2]}})})}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},n.prototype.refreshUpdate=function(){return o.b(this,void 0,void 0,function(){var n,e;return o.e(this,function(l){switch(l.label){case 0:return[4,this.Pro_categorias.obtenerCategoriasAsync()];case 1:return n=l.sent(),this.categorias=this.categorias_backup=Array.isArray(n)?n:[],e=new MouseEvent("click",{bubbles:!1}),[4,this.el.nativeElement.dispatchEvent(e)];case 2:return l.sent(),this.textSearch="",[2]}})})},n.prototype.doRefresh=function(n){return o.b(this,void 0,void 0,function(){return o.e(this,function(e){switch(e.label){case 0:return[4,this.refreshUpdate()];case 1:return e.sent(),n.target.complete(),[2]}})})},n.prototype.busqueda=function(n){return o.b(this,void 0,void 0,function(){var e=this;return o.e(this,function(l){return this.categorias=[],this.categorias_backup.forEach(function(l){l.descripcion.toLowerCase().includes(n.toLowerCase())&&e.categorias.push(l)}),[2]})})},n}(),a=function(){return function(){}}(),c=l("pMnS"),s=l("oBZk"),d=l("Ip0R"),g=l("njMu"),f=l("+sC5"),p=l("ZYCi"),h=l("gIcY"),m=l("iw74"),b=t["\u0275crt"]({encapsulation:0,styles:[["ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#3880ff;--color:#fff}ion-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.5em!important}.busqueda[_ngcontent-%COMP%]{background:#3880ff}.footer[_ngcontent-%COMP%]{position:fixed;bottom:20px;z-index:100}"]],data:{}});function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,15,"ion-item-sliding",[],null,null,null,s.mb,s.x)),t["\u0275did"](1,49152,null,0,i.N,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,6,"ion-item-options",[["side","start"]],null,null,null,s.lb,s.w)),t["\u0275did"](3,49152,null,0,i.M,[t.ChangeDetectorRef,t.ElementRef],{side:[0,"side"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"ion-item-option",[["color","danger"]],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.categoriaDelete(n.context.$implicit.id_categoria,n.context.$implicit.descripcion)&&t),t},s.kb,s.v)),t["\u0275did"](5,49152,null,0,i.L,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["Eliminar"])),(n()(),t["\u0275eld"](7,0,null,0,1,"ion-icon",[["name","trash"],["slot","end"]],null,null,null,s.hb,s.r)),t["\u0275did"](8,49152,null,0,i.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(n()(),t["\u0275eld"](9,0,null,0,6,"ion-item",[],null,null,null,s.nb,s.u)),t["\u0275did"](10,49152,null,0,i.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](11,0,null,0,2,"ion-label",[],null,null,null,s.ob,s.y)),t["\u0275did"](12,49152,null,0,i.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](13,0,["",""])),(n()(),t["\u0275eld"](14,0,null,0,1,"ion-icon",[["name","create"],["slot","end"]],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.categoriaInsertUpdate(n.context.$implicit.id_categoria,"UPDATE",n.context.$implicit.descripcion)&&t),t},s.hb,s.r)),t["\u0275did"](15,49152,null,0,i.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(n,e){n(e,3,0,"start"),n(e,5,0,"danger"),n(e,8,0,"trash"),n(e,15,0,"create")},function(n,e){n(e,13,0,e.context.$implicit.descripcion)})}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-list",[],null,null,null,s.pb,s.z)),t["\u0275did"](1,49152,null,0,i.P,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](3,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,3,0,e.component.categorias)},null)}function R(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{el:0}),(n()(),t["\u0275eld"](1,0,null,null,1,"app-header-in",[["titulo","Categor\xedas"]],null,null,null,g.b,g.a)),t["\u0275did"](2,114688,null,0,f.a,[p.m,t.ChangeDetectorRef],{titulo:[0,"titulo"]},null),(n()(),t["\u0275eld"](3,0,null,null,37,"ion-content",[],null,null,null,s.cb,s.m)),t["\u0275did"](4,49152,null,0,i.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](5,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,e,l){var t=!0;return"ionRefresh"===e&&(t=!1!==n.component.doRefresh(l)&&t),t},s.vb,s.E)),t["\u0275did"](6,49152,null,0,i.db,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](7,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Hale para recargar"],["refreshingSpinner","circles"],["refreshingText","Recargando..."]],null,null,null,s.ub,s.F)),t["\u0275did"](8,49152,null,0,i.eb,[t.ChangeDetectorRef,t.ElementRef],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),t["\u0275eld"](9,0,null,0,23,"div",[["class","busqueda"]],null,null,null,null,null)),(n()(),t["\u0275eld"](10,0,null,null,22,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,e,l){var o=!0;return"submit"===e&&(o=!1!==t["\u0275nov"](n,12).onSubmit(l)&&o),"reset"===e&&(o=!1!==t["\u0275nov"](n,12).onReset()&&o),o},null,null)),t["\u0275did"](11,16384,null,0,h.o,[],null,null),t["\u0275did"](12,4210688,[["form",4]],0,h.j,[[8,null],[8,null]],null,null),t["\u0275prd"](2048,null,h.a,null,[h.j]),t["\u0275did"](14,16384,null,0,h.i,[[4,h.a]],null,null),(n()(),t["\u0275eld"](15,0,null,null,17,"ion-grid",[],null,null,null,s.fb,s.p)),t["\u0275did"](16,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](17,0,null,0,15,"ion-row",[["color","primary"],["justify-content-center",""]],null,null,null,s.xb,s.H)),t["\u0275did"](18,49152,null,0,i.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](19,0,null,0,13,"ion-col",[],null,null,null,s.bb,s.l)),t["\u0275did"](20,49152,null,0,i.u,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](21,0,[[1,0],["list",1]],0,11,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](22,0,null,null,10,"ion-item",[],null,null,null,s.nb,s.u)),t["\u0275did"](23,49152,null,0,i.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](24,0,null,0,1,"ion-icon",[["color","#f4f4f4"],["name","search"],["slot","end"]],null,null,null,s.hb,s.r)),t["\u0275did"](25,49152,null,0,i.D,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],name:[1,"name"]},null),(n()(),t["\u0275eld"](26,0,null,0,6,"ion-input",[["clearInput",""],["name","smartSearch"],["placeholder","Buscar"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"input"],[null,"ionBlur"]],function(n,e,l){var o=!0,r=n.component;return"ionBlur"===e&&(o=!1!==t["\u0275nov"](n,27)._handleBlurEvent()&&o),"ionChange"===e&&(o=!1!==t["\u0275nov"](n,27)._handleInputEvent(l.target.value)&&o),"ngModelChange"===e&&(o=!1!==(r.textSearch=l)&&o),"ionChange"===e&&(o=!1!==r.busqueda(l.target.value)&&o),"input"===e&&(o=!1!==r.busqueda(l.target.value)&&o),o},s.jb,s.t)),t["\u0275did"](27,16384,null,0,i.Ob,[t.ElementRef],null,null),t["\u0275prd"](1024,null,h.f,function(n){return[n]},[i.Ob]),t["\u0275did"](29,671744,null,0,h.k,[[2,h.a],[8,null],[8,null],[6,h.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,h.g,null,[h.k]),t["\u0275did"](31,16384,null,0,h.h,[[4,h.g]],null,null),t["\u0275did"](32,49152,null,0,i.H,[t.ChangeDetectorRef,t.ElementRef],{clearInput:[0,"clearInput"],name:[1,"name"],placeholder:[2,"placeholder"],type:[3,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](34,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](35,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,s.eb,s.n)),t["\u0275did"](36,49152,[["fab",4]],0,i.x,[t.ChangeDetectorRef,t.ElementRef],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t["\u0275eld"](37,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.categoriaInsertUpdate(null,"INSERT","")&&t),t},s.db,s.o)),t["\u0275did"](38,49152,null,0,i.y,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](39,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,s.hb,s.r)),t["\u0275did"](40,49152,null,0,i.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(n,e){var l=e.component;n(e,2,0,"Categor\xedas"),n(e,8,0,"arrow-dropdown","Hale para recargar","circles","Recargando..."),n(e,25,0,"#f4f4f4","search"),n(e,29,0,"smartSearch",l.textSearch),n(e,32,0,"","smartSearch","Buscar","text"),n(e,34,0,l.categorias.length>0),n(e,36,0,"end","bottom"),n(e,40,0,"add")},function(n,e){n(e,10,0,t["\u0275nov"](e,14).ngClassUntouched,t["\u0275nov"](e,14).ngClassTouched,t["\u0275nov"](e,14).ngClassPristine,t["\u0275nov"](e,14).ngClassDirty,t["\u0275nov"](e,14).ngClassValid,t["\u0275nov"](e,14).ngClassInvalid,t["\u0275nov"](e,14).ngClassPending),n(e,26,0,t["\u0275nov"](e,31).ngClassUntouched,t["\u0275nov"](e,31).ngClassTouched,t["\u0275nov"](e,31).ngClassPristine,t["\u0275nov"](e,31).ngClassDirty,t["\u0275nov"](e,31).ngClassValid,t["\u0275nov"](e,31).ngClassInvalid,t["\u0275nov"](e,31).ngClassPending)})}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-categorias",[],null,null,null,R,b)),t["\u0275did"](1,114688,null,0,u,[r.a,m.b,i.b,i.Gb],null,null)],function(n,e){n(e,1,0)},null)}var D=t["\u0275ccf"]("app-categorias",u,E,{},{},[]),y=l("HsBR"),I=l("j1ZV");l.d(e,"CategoriasPageModuleNgFactory",function(){return _});var _=t["\u0275cmf"](a,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,D]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,h.p,h.p,[]),t["\u0275mpd"](4608,i.c,i.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.Hb,i.Hb,[i.c,t.ComponentFactoryResolver,t.Injector,d.DOCUMENT]),t["\u0275mpd"](4608,i.Kb,i.Kb,[i.c,t.ComponentFactoryResolver,t.Injector,d.DOCUMENT]),t["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),t["\u0275mpd"](1073742336,h.n,h.n,[]),t["\u0275mpd"](1073742336,h.b,h.b,[]),t["\u0275mpd"](1073742336,i.Eb,i.Eb,[]),t["\u0275mpd"](1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),t["\u0275mpd"](1073742336,y.a,y.a,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,p.k,function(){return[[{path:"",component:u}]]},[])])})}}]);