(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"1FLp":function(n,e,l){"use strict";l.d(e,"a",function(){return t});var t=function(){function n(n){this.domSanitizer=n}return n.prototype.transform=function(n){return n&&null!=n?this.domSanitizer.bypassSecurityTrustUrl(n):"assets/img/camera.png"},n}()},rQZB:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),o=l("mrSG"),r=l("t/Na"),i=l("9Xff"),u=l("67Y/"),c=l("iw74"),a=function(){function n(n,e){this.Pro_http=n,this.storage=e}return n.prototype.getSetvicios=function(n){var e=new r.g(i.a);return this.Pro_http.post(i.b+"api/entregas/getServicios",{token:n},{headers:e}).pipe(Object(u.a)(function(n){return n}))},n.prototype.realizarEntrega=function(n){return o.b(this,void 0,void 0,function(){var e,l;return o.e(this,function(t){switch(t.label){case 0:return e=new r.g(i.a),l={},[4,this.storage.get("token")];case 1:return l.token=t.sent(),l.id_servicio=n,[4,this.Pro_http.post(i.b+"api/entregas/realizarEntrega",l,{headers:e}).toPromise()];case 2:return[2,t.sent()]}})})},n.ngInjectableDef=t.defineInjectable({factory:function(){return new n(t.inject(r.c),t.inject(c.b))},token:n,providedIn:"root"}),n}(),d=l("ZZ/e"),s=function(){function n(n,e,l){this.Pro_entregas=n,this.storage=e,this.toastController=l,this.servicios=[]}return n.prototype.ngOnInit=function(){var n=this;this.storage.get("token").then(function(e){n.Pro_entregas.getSetvicios(e).subscribe(function(e){n.servicios=e})})},n.prototype.doRefresh=function(n){return o.b(this,void 0,void 0,function(){var e=this;return o.e(this,function(l){return this.storage.get("token").then(function(l){e.Pro_entregas.getSetvicios(l).subscribe(function(l){e.servicios=l,n.target.complete()},function(e){n.target.complete()})}),[2]})})},n.prototype.entregarServicio=function(n){return o.b(this,void 0,void 0,function(){var e;return o.e(this,function(l){switch(l.label){case 0:return[4,this.Pro_entregas.realizarEntrega(n)];case 1:return e=l.sent(),console.log(e),0!=e?[3,3]:[4,this.showToast("El inventario no es sufuciente",4e3)];case 2:return l.sent(),[3,5];case 3:return[4,this.showToast("Entrega realizada con exito",1500)];case 4:l.sent(),l.label=5;case 5:return[2]}})})},n.prototype.showToast=function(n,e){return void 0===e&&(e=2e3),o.b(this,void 0,void 0,function(){return o.e(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:n,duration:e,position:"middle",showCloseButton:!0,closeButtonText:"Cerrar"})];case 1:return l.sent().present(),[2]}})})},n}(),f=function(){return function(){}}(),p=l("pMnS"),g=l("oBZk"),m=l("Ip0R"),h=l("1FLp"),b=l("ZYjt"),R=l("njMu"),v=l("+sC5"),C=l("ZYCi"),w=t["\u0275crt"]({encapsulation:0,styles:[[".car[_ngcontent-%COMP%]{border:1px solid #cacaca;--background:white}.precio[_ngcontent-%COMP%]{font-size:1.4em;color:#52f450;font-weight:700}.center-boton[_ngcontent-%COMP%]{text-align:center}.car-head[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:#6e6368;border-top:4px solid #3880ff}@media (min-width:600px){.boton[_ngcontent-%COMP%]{width:45%;float:right}}@media (min-width:700px){.boton[_ngcontent-%COMP%]{width:33%;float:right}}@media (min-width:900px){.boton[_ngcontent-%COMP%]{width:25%;float:right}}@media (min-width:1100px){.boton[_ngcontent-%COMP%]{width:20%;float:right}}"]],data:{}});function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","medium"]],null,null,null,g.T,g.d)),t["\u0275did"](1,49152,null,0,d.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](2,0,["",""]))],function(n,e){n(e,1,0,"medium")},function(n,e){n(e,2,0,e.parent.context.$implicit.cantidad)})}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","medium"]],null,null,null,g.T,g.d)),t["\u0275did"](1,49152,null,0,d.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](2,0,["","%"]))],function(n,e){n(e,1,0,"medium")},function(n,e){n(e,2,0,e.parent.context.$implicit.porcentaje)})}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"ion-chip",[],null,null,null,g.ab,g.k)),t["\u0275did"](1,49152,null,0,d.t,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,3,"ion-avatar",[],null,null,null,g.R,g.b)),t["\u0275did"](3,49152,null,0,d.g,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](4,0,null,0,1,"img",[],[[8,"src",4]],null,null,null,null)),t["\u0275ppd"](5,1),(n()(),t["\u0275eld"](6,0,null,0,2,"ion-label",[],null,null,null,g.ob,g.y)),t["\u0275did"](7,49152,null,0,d.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](8,0,[""," \xa0"])),(n()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](10,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,x)),t["\u0275did"](12,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,10,0,1==e.context.$implicit.id_tipo_consumo),n(e,12,0,2==e.context.$implicit.id_tipo_consumo)},function(n,e){var l=t["\u0275unv"](e,4,0,n(e,5,0,t["\u0275nov"](e.parent.parent,0),e.context.$implicit.fotografia));n(e,4,0,l),n(e,8,0,e.context.$implicit.nombre)})}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,20,"ion-card",[["class","car"]],null,null,null,g.Y,g.g)),t["\u0275did"](1,49152,null,0,d.n,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,5,"ion-item",[["class","car-head"],["lines","none"]],null,null,null,g.nb,g.u)),t["\u0275did"](3,49152,null,0,d.I,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](4,0,null,0,1,"ion-icon",[["name","md-basket"],["slot","start"]],null,null,null,g.hb,g.r)),t["\u0275did"](5,49152,null,0,d.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(n()(),t["\u0275eld"](6,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](7,null,["",""])),(n()(),t["\u0275eld"](8,0,null,0,3,"ion-card-content",[],null,null,null,g.W,g.h)),t["\u0275did"](9,49152,null,0,d.o,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](11,278528,null,0,m.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](12,0,null,0,8,"div",[["class","center-boton"]],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,7,"ion-button",[["class","boton"],["color","primary"],["expand","full"],["shape","round"]],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.entregarServicio(n.context.$implicit.id_servicio)&&t),t},g.U,g.e)),t["\u0275did"](14,49152,null,0,d.l,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(n()(),t["\u0275ted"](-1,0,[" Entregar"])),(n()(),t["\u0275eld"](16,0,null,0,2,"ion-label",[["class","precio"]],null,null,null,g.ob,g.y)),t["\u0275did"](17,49152,null,0,d.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](18,0,["\xa0L. ",""])),(n()(),t["\u0275eld"](19,0,null,0,1,"ion-icon",[["name","arrow-round-forward"],["slot","end"]],null,null,null,g.hb,g.r)),t["\u0275did"](20,49152,null,0,d.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(n,e){n(e,3,0,"none"),n(e,5,0,"md-basket"),n(e,11,0,e.context.$implicit.productos),n(e,14,0,"primary","full","round"),n(e,20,0,"arrow-round-forward")},function(n,e){n(e,7,0,e.context.$implicit.descripcion),n(e,18,0,e.context.$implicit.precio)})}function y(n){return t["\u0275vid"](0,[t["\u0275pid"](0,h.a,[b.b]),(n()(),t["\u0275eld"](1,0,null,null,1,"app-header-in",[["titulo","Entrega"]],null,null,null,R.b,R.a)),t["\u0275did"](2,114688,null,0,v.a,[C.m,t.ChangeDetectorRef],{titulo:[0,"titulo"]},null),(n()(),t["\u0275eld"](3,0,null,null,7,"ion-content",[["class","contenedor"]],null,null,null,g.cb,g.m)),t["\u0275did"](4,49152,null,0,d.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](5,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,e,l){var t=!0;return"ionRefresh"===e&&(t=!1!==n.component.doRefresh(l)&&t),t},g.vb,g.E)),t["\u0275did"](6,49152,null,0,d.db,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](7,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Hale para recargar"],["refreshingSpinner","circles"],["refreshingText","Recargando..."]],null,null,null,g.ub,g.F)),t["\u0275did"](8,49152,null,0,d.eb,[t.ChangeDetectorRef,t.ElementRef],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,D)),t["\u0275did"](10,278528,null,0,m.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){var l=e.component;n(e,2,0,"Entrega"),n(e,8,0,"arrow-dropdown","Hale para recargar","circles","Recargando..."),n(e,10,0,l.servicios)},null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-entregas",[],null,null,null,y,w)),t["\u0275did"](1,114688,null,0,s,[a,c.b,d.Pb],null,null)],function(n,e){n(e,1,0)},null)}var O=t["\u0275ccf"]("app-entregas",s,I,{},{},[]),k=l("gIcY"),T=l("HsBR"),P=l("j1ZV");l.d(e,"EntregasPageModuleNgFactory",function(){return M});var M=t["\u0275cmf"](f,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,O]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[t.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,k.p,k.p,[]),t["\u0275mpd"](4608,d.c,d.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,d.Hb,d.Hb,[d.c,t.ComponentFactoryResolver,t.Injector,m.DOCUMENT]),t["\u0275mpd"](4608,d.Kb,d.Kb,[d.c,t.ComponentFactoryResolver,t.Injector,m.DOCUMENT]),t["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),t["\u0275mpd"](1073742336,k.n,k.n,[]),t["\u0275mpd"](1073742336,k.b,k.b,[]),t["\u0275mpd"](1073742336,d.Eb,d.Eb,[]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,C.o,C.o,[[2,C.u],[2,C.m]]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,f,f,[]),t["\u0275mpd"](1024,C.k,function(){return[[{path:"",component:s}]]},[])])})}}]);