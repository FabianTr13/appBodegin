(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+sC5":function(n,l,e){"use strict";e.d(l,"a",function(){return o});var t=e("9Xff"),o=function(){function n(n,l){this.router=n,this.reload=l,this.titulo=""}return n.prototype.ngOnInit=function(){this.es_app=t.c},n.prototype.refresh=function(){this.reload.detectChanges()},n}()},"1FLp":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(n){this.domSanitizer=n}return n.prototype.transform=function(n){return n&&null!=n?this.domSanitizer.bypassSecurityTrustUrl(n):"assets/img/camera.png"},n}()},"7G/b":function(n,l,e){"use strict";e.d(l,"a",function(){return o});var t=e("9Xff"),o=function(){function n(){this.titulo=""}return n.prototype.ngOnInit=function(){this.es_app=t.c},n}()},MEI3:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=e("mrSG"),u=e("ZZ/e"),i=e("TCXU"),r=function(){function n(n,l,e){this.Pro_inventario=n,this.storage=l,this.modalController=e,this.reporte=[]}return n.prototype.ngOnInit=function(){var n=this;this.storage.get("token").then(function(l){n.Pro_inventario.reportePedido(l).subscribe(function(l){n.reporte=l})})},n.prototype.doRefresh=function(n){return o.b(this,void 0,void 0,function(){var l=this;return o.e(this,function(e){return this.storage.get("token").then(function(e){l.Pro_inventario.reportePedido(e).subscribe(function(e){l.reporte=e,n.target.complete()})}),[2]})})},n.prototype.Salir=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){return this.modalController.dismiss(),[2]})})},n}(),d=function(){function n(n,l,e){this.modalController=n,this.storage=l,this.Pro_inventario=e,this.reporte=[]}return n.prototype.ngOnInit=function(){var n=this;this.storage.get("token").then(function(l){n.Pro_inventario.reporteStock(l).subscribe(function(l){n.reporte=l})})},n.prototype.doRefresh=function(n){return o.b(this,void 0,void 0,function(){var l=this;return o.e(this,function(e){return this.storage.get("token").then(function(e){l.Pro_inventario.reporteStock(e).subscribe(function(e){l.reporte=e,n.target.complete()})}),[2]})})},n.prototype.Salir=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){return this.modalController.dismiss(),[2]})})},n}(),c=function(){function n(n){this.modalController=n}return n.prototype.ngOnInit=function(){},n.prototype.openStock=function(){return o.b(this,void 0,void 0,function(){var n;return o.e(this,function(l){switch(l.label){case 0:return[4,this.modalController.create({component:d,componentProps:{}})];case 1:return[4,(n=l.sent()).present()];case 2:return l.sent(),[4,n.onDidDismiss()];case 3:return l.sent(),[2]}})})},n.prototype.openPedidos=function(){return o.b(this,void 0,void 0,function(){var n;return o.e(this,function(l){switch(l.label){case 0:return[4,this.modalController.create({component:r,componentProps:{}})];case 1:return[4,(n=l.sent()).present()];case 2:return l.sent(),[4,n.onDidDismiss()];case 3:return l.sent(),[2]}})})},n}(),a=function(){return function(){}}(),f=e("pMnS"),p=e("njMu"),s=e("+sC5"),m=e("ZYCi"),g=e("oBZk"),h=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-header-in",[["titulo","Reportes"]],null,null,null,p.b,p.a)),t["\u0275did"](1,114688,null,0,s.a,[m.m,t.ChangeDetectorRef],{titulo:[0,"titulo"]},null),(n()(),t["\u0275eld"](2,0,null,null,13,"ion-content",[],null,null,null,g.bb,g.m)),t["\u0275did"](3,49152,null,0,u.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](4,0,null,0,11,"ion-list",[],null,null,null,g.ob,g.z)),t["\u0275did"](5,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](6,0,null,0,4,"ion-item",[["detail",""]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openStock()&&t),t},g.mb,g.u)),t["\u0275did"](7,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{detail:[0,"detail"]},null),(n()(),t["\u0275eld"](8,0,null,0,2,"ion-label",[],null,null,null,g.nb,g.y)),t["\u0275did"](9,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,[" Stock minimo de inventarios "])),(n()(),t["\u0275eld"](11,0,null,0,4,"ion-item",[["detail",""]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openPedidos()&&t),t},g.mb,g.u)),t["\u0275did"](12,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{detail:[0,"detail"]},null),(n()(),t["\u0275eld"](13,0,null,0,2,"ion-label",[],null,null,null,g.nb,g.y)),t["\u0275did"](14,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,[" puntos de pedidos "]))],function(n,l){n(l,1,0,"Reportes"),n(l,7,0,""),n(l,12,0,"")},null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-reportes",[],null,null,null,b,h)),t["\u0275did"](1,114688,null,0,c,[u.Hb],null,null)],function(n,l){n(l,1,0)},null)}var C=t["\u0275ccf"]("app-reportes",c,R,{},{},[]),v=e("Ip0R"),x=e("1FLp"),D=e("ZYjt"),E=e("Mc8v"),_=e("7G/b"),w=e("iw74"),O=t["\u0275crt"]({encapsulation:0,styles:[[".car[_ngcontent-%COMP%]{border:1px solid #cacaca;--background:white}.precio[_ngcontent-%COMP%]{font-size:1.4em;color:#52f450;font-weight:700}.border[_ngcontent-%COMP%]{height:50px}.buttonExit[_ngcontent-%COMP%]{position:fixed;left:0;bottom:5px;right:0;z-index:500}.center-boton[_ngcontent-%COMP%]{text-align:center}.car-head[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:#6e6368;border-top:4px solid #3880ff}@media (min-width:600px){.boton[_ngcontent-%COMP%]{width:45%;float:right}}@media (min-width:700px){.boton[_ngcontent-%COMP%]{width:33%;float:right}}@media (min-width:900px){.boton[_ngcontent-%COMP%]{width:25%;float:right}}@media (min-width:1100px){.boton[_ngcontent-%COMP%]{width:20%;float:right}}"]],data:{}});function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","primary"]],null,null,null,g.S,g.d)),t["\u0275did"](1,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["Unidad"]))],function(n,l){n(l,1,0,"primary")},null)}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","tertiary"]],null,null,null,g.S,g.d)),t["\u0275did"](1,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](2,0,["Porcentaje\xa0","%"]))],function(n,l){n(l,1,0,"tertiary")},function(n,l){n(l,2,0,l.parent.context.$implicit.porcentaje_actual)})}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,35,"ion-card",[["class","car"]],null,null,null,g.X,g.g)),t["\u0275did"](1,49152,null,0,u.n,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,11,"ion-item",[["class","car-head"],["lines","none"]],null,null,null,g.mb,g.u)),t["\u0275did"](3,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](4,0,null,0,3,"ion-avatar",[],null,null,null,g.Q,g.b)),t["\u0275did"](5,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"img",[],[[8,"src",4]],null,null,null,null)),t["\u0275ppd"](7,1),(n()(),t["\u0275eld"](8,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](9,null,["\xa0",""])),(n()(),t["\u0275eld"](10,0,null,0,3,"ion-avatar",[["slot","end"]],null,null,null,g.Q,g.b)),t["\u0275did"](11,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](12,0,null,0,1,"img",[],[[8,"src",4]],null,null,null,null)),t["\u0275ppd"](13,1),(n()(),t["\u0275eld"](14,0,null,0,21,"ion-card-content",[],null,null,null,g.V,g.h)),t["\u0275did"](15,49152,null,0,u.o,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](16,0,null,0,5,"ion-label",[],null,null,null,g.nb,g.y)),t["\u0275did"](17,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,P)),t["\u0275did"](19,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](21,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](22,0,null,0,4,"ion-row",[],null,null,null,g.wb,g.H)),t["\u0275did"](23,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](24,0,null,0,2,"ion-badge",[["color","primary"]],null,null,null,g.S,g.d)),t["\u0275did"](25,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](26,0,["Sucursal: ",""])),(n()(),t["\u0275eld"](27,0,null,0,2,"ion-row",[],null,null,null,g.wb,g.H)),t["\u0275did"](28,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](29,0,[" En inventario: "," "])),(n()(),t["\u0275eld"](30,0,null,0,2,"ion-row",[],null,null,null,g.wb,g.H)),t["\u0275did"](31,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](32,0,[" Punto de pedido: "," "])),(n()(),t["\u0275eld"](33,0,null,0,2,"ion-row",[],null,null,null,g.wb,g.H)),t["\u0275did"](34,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](35,0,[" Cantidad recomendada a pedir: "," "]))],function(n,l){n(l,3,0,"none"),n(l,19,0,1==l.context.$implicit.id_tipo_consumo),n(l,21,0,2==l.context.$implicit.id_tipo_consumo),n(l,25,0,"primary")},function(n,l){var e=t["\u0275unv"](l,6,0,n(l,7,0,t["\u0275nov"](l.parent,0),l.context.$implicit.fotografia));n(l,6,0,e),n(l,9,0,l.context.$implicit.nombre);var o=t["\u0275unv"](l,12,0,n(l,13,0,t["\u0275nov"](l.parent,0),l.context.$implicit.estado));n(l,12,0,o),n(l,26,0,l.context.$implicit.sucursal),n(l,29,0,l.context.$implicit.cantidad),n(l,32,0,l.context.$implicit.punto_pedido),n(l,35,0,l.context.$implicit.cantidad_pedir)})}function k(n){return t["\u0275vid"](0,[t["\u0275pid"](0,x.a,[D.b]),(n()(),t["\u0275eld"](1,0,null,null,1,"app-header-modal",[["titulo","Punto de pedido"]],null,null,null,E.b,E.a)),t["\u0275did"](2,114688,null,0,_.a,[],{titulo:[0,"titulo"]},null),(n()(),t["\u0275eld"](3,0,null,null,13,"ion-content",[["class","contenedor"]],null,null,null,g.bb,g.m)),t["\u0275did"](4,49152,null,0,u.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](5,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,e){var t=!0;return"ionRefresh"===l&&(t=!1!==n.component.doRefresh(e)&&t),t},g.ub,g.E)),t["\u0275did"](6,49152,null,0,u.db,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](7,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Hale para recargar"],["refreshingSpinner","circles"],["refreshingText","Recargando..."]],null,null,null,g.tb,g.F)),t["\u0275did"](8,49152,null,0,u.eb,[t.ChangeDetectorRef,t.ElementRef],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,M)),t["\u0275did"](10,278528,null,0,v.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](11,0,null,0,0,"div",[["class","border"]],null,null,null,null,null)),(n()(),t["\u0275eld"](12,0,null,0,4,"ion-button",[["class","buttonExit"],["color","medium"],["expand","block"],["shape","round"],["size","default"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.Salir()&&t),t},g.T,g.e)),t["\u0275did"](13,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"],size:[3,"size"]},null),(n()(),t["\u0275ted"](-1,0,["Salir "])),(n()(),t["\u0275eld"](15,0,null,0,1,"ion-icon",[["name","exit"],["slot","end"]],null,null,null,g.gb,g.r)),t["\u0275did"](16,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(n,l){var e=l.component;n(l,2,0,"Punto de pedido"),n(l,8,0,"arrow-dropdown","Hale para recargar","circles","Recargando..."),n(l,10,0,e.reporte),n(l,13,0,"medium","block","round","default"),n(l,16,0,"exit")},null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-reporte-punto-pedido",[],null,null,null,k,O)),t["\u0275did"](1,114688,null,0,r,[i.a,w.b,u.Hb],null,null)],function(n,l){n(l,1,0)},null)}var S=t["\u0275ccf"]("app-reporte-punto-pedido",r,I,{},{},[]),T=t["\u0275crt"]({encapsulation:0,styles:[[".car[_ngcontent-%COMP%]{border:1px solid #cacaca;--background:white}.border[_ngcontent-%COMP%]{height:50px}.precio[_ngcontent-%COMP%]{font-size:1.4em;color:#52f450;font-weight:700}.buttonExit[_ngcontent-%COMP%]{position:fixed;left:0;bottom:5px;right:0;z-index:500}.center-boton[_ngcontent-%COMP%]{text-align:center}.car-head[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:#6e6368;border-top:4px solid #3880ff}@media (min-width:600px){.boton[_ngcontent-%COMP%]{width:45%;float:right}}@media (min-width:700px){.boton[_ngcontent-%COMP%]{width:33%;float:right}}@media (min-width:900px){.boton[_ngcontent-%COMP%]{width:25%;float:right}}@media (min-width:1100px){.boton[_ngcontent-%COMP%]{width:20%;float:right}}"]],data:{}});function H(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","primary"]],null,null,null,g.S,g.d)),t["\u0275did"](1,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["Unidad"]))],function(n,l){n(l,1,0,"primary")},null)}function $(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-badge",[["color","tertiary"]],null,null,null,g.S,g.d)),t["\u0275did"](1,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](2,0,["Porcentaje\xa0","%"]))],function(n,l){n(l,1,0,"tertiary")},function(n,l){n(l,2,0,l.parent.context.$implicit.porcentaje_actual)})}function z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,35,"ion-card",[["class","car"]],null,null,null,g.X,g.g)),t["\u0275did"](1,49152,null,0,u.n,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,11,"ion-item",[["class","car-head"],["lines","none"]],null,null,null,g.mb,g.u)),t["\u0275did"](3,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](4,0,null,0,3,"ion-avatar",[],null,null,null,g.Q,g.b)),t["\u0275did"](5,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"img",[],[[8,"src",4]],null,null,null,null)),t["\u0275ppd"](7,1),(n()(),t["\u0275eld"](8,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](9,null,["\xa0",""])),(n()(),t["\u0275eld"](10,0,null,0,3,"ion-avatar",[["slot","end"]],null,null,null,g.Q,g.b)),t["\u0275did"](11,49152,null,0,u.g,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](12,0,null,0,1,"img",[],[[8,"src",4]],null,null,null,null)),t["\u0275ppd"](13,1),(n()(),t["\u0275eld"](14,0,null,0,21,"ion-card-content",[],null,null,null,g.V,g.h)),t["\u0275did"](15,49152,null,0,u.o,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](16,0,null,0,5,"ion-label",[],null,null,null,g.nb,g.y)),t["\u0275did"](17,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,H)),t["\u0275did"](19,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,$)),t["\u0275did"](21,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](22,0,null,0,4,"ion-row",[],null,null,null,g.wb,g.H)),t["\u0275did"](23,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](24,0,null,0,2,"ion-badge",[["color","primary"]],null,null,null,g.S,g.d)),t["\u0275did"](25,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275ted"](26,0,["Sucursal: ",""])),(n()(),t["\u0275eld"](27,0,null,0,2,"ion-row",[],null,null,null,g.wb,g.H)),t["\u0275did"](28,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](29,0,[" En inventario: "," "])),(n()(),t["\u0275eld"](30,0,null,0,2,"ion-row",[],null,null,null,g.wb,g.H)),t["\u0275did"](31,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](32,0,[" Minimo de inventario: "," "])),(n()(),t["\u0275eld"](33,0,null,0,2,"ion-row",[],null,null,null,g.wb,g.H)),t["\u0275did"](34,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](35,0,[" Promedio de venta diario: "," "]))],function(n,l){n(l,3,0,"none"),n(l,19,0,1==l.context.$implicit.id_tipo_consumo),n(l,21,0,2==l.context.$implicit.id_tipo_consumo),n(l,25,0,"primary")},function(n,l){var e=t["\u0275unv"](l,6,0,n(l,7,0,t["\u0275nov"](l.parent,0),l.context.$implicit.fotografia));n(l,6,0,e),n(l,9,0,l.context.$implicit.nombre);var o=t["\u0275unv"](l,12,0,n(l,13,0,t["\u0275nov"](l.parent,0),l.context.$implicit.estado));n(l,12,0,o),n(l,26,0,l.context.$implicit.sucursal),n(l,29,0,l.context.$implicit.cantidad),n(l,32,0,l.context.$implicit.minimo),n(l,35,0,l.context.$implicit.promedio_venta_diaria)})}function j(n){return t["\u0275vid"](0,[t["\u0275pid"](0,x.a,[D.b]),(n()(),t["\u0275eld"](1,0,null,null,1,"app-header-modal",[["titulo","Inventario de seguridad"]],null,null,null,E.b,E.a)),t["\u0275did"](2,114688,null,0,_.a,[],{titulo:[0,"titulo"]},null),(n()(),t["\u0275eld"](3,0,null,null,13,"ion-content",[["class","contenedor"]],null,null,null,g.bb,g.m)),t["\u0275did"](4,49152,null,0,u.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](5,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,e){var t=!0;return"ionRefresh"===l&&(t=!1!==n.component.doRefresh(e)&&t),t},g.ub,g.E)),t["\u0275did"](6,49152,null,0,u.db,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](7,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Hale para recargar"],["refreshingSpinner","circles"],["refreshingText","Recargando..."]],null,null,null,g.tb,g.F)),t["\u0275did"](8,49152,null,0,u.eb,[t.ChangeDetectorRef,t.ElementRef],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,z)),t["\u0275did"](10,278528,null,0,v.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](11,0,null,0,0,"div",[["class","border"]],null,null,null,null,null)),(n()(),t["\u0275eld"](12,0,null,0,4,"ion-button",[["class","buttonExit"],["color","medium"],["expand","block"],["shape","round"],["size","default"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.Salir()&&t),t},g.T,g.e)),t["\u0275did"](13,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"],size:[3,"size"]},null),(n()(),t["\u0275ted"](-1,0,["Salir "])),(n()(),t["\u0275eld"](15,0,null,0,1,"ion-icon",[["name","exit"],["slot","end"]],null,null,null,g.gb,g.r)),t["\u0275did"](16,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(n,l){var e=l.component;n(l,2,0,"Inventario de seguridad"),n(l,8,0,"arrow-dropdown","Hale para recargar","circles","Recargando..."),n(l,10,0,e.reporte),n(l,13,0,"medium","block","round","default"),n(l,16,0,"exit")},null)}function F(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-reporte-stock",[],null,null,null,j,T)),t["\u0275did"](1,114688,null,0,d,[u.Hb,w.b,i.a],null,null)],function(n,l){n(l,1,0)},null)}var Z=t["\u0275ccf"]("app-reporte-stock",d,F,{},{},[]),N=e("gIcY"),V=e("HsBR"),G=e("j1ZV"),L=function(){return function(){}}(),U=function(){return function(){}}();e.d(l,"ReportesPageModuleNgFactory",function(){return X});var X=t["\u0275cmf"](a,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[f.a,C,S,Z]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[t.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,N.p,N.p,[]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Hb,u.Hb,[u.c,t.ComponentFactoryResolver,t.Injector,v.DOCUMENT]),t["\u0275mpd"](4608,u.Kb,u.Kb,[u.c,t.ComponentFactoryResolver,t.Injector,v.DOCUMENT]),t["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),t["\u0275mpd"](1073742336,N.n,N.n,[]),t["\u0275mpd"](1073742336,N.b,N.b,[]),t["\u0275mpd"](1073742336,u.Eb,u.Eb,[]),t["\u0275mpd"](1073742336,m.o,m.o,[[2,m.u],[2,m.m]]),t["\u0275mpd"](1073742336,V.a,V.a,[]),t["\u0275mpd"](1073742336,G.a,G.a,[]),t["\u0275mpd"](1073742336,L,L,[]),t["\u0275mpd"](1073742336,U,U,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,m.k,function(){return[[{path:"",component:c}]]},[])])})},Mc8v:function(n,l,e){"use strict";var t=e("CcnG"),o=e("oBZk"),u=e("ZZ/e");e("7G/b"),e.d(l,"a",function(){return i}),e.d(l,"b",function(){return r});var i=t["\u0275crt"]({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin-right:10%;width:10px;height:10px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.2em!important}.heider[_ngcontent-%COMP%]{background:#3880ff;height:25px}"]],data:{}});function r(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"ion-header",[["no-border",""]],null,null,null,o.fb,o.q)),t["\u0275did"](1,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,0,"div",[["class","heider"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,0,6,"ion-toolbar",[["color","primary"]],null,null,null,o.Db,o.O)),t["\u0275did"](4,49152,null,0,u.Cb,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275eld"](5,0,null,0,4,"ion-item",[["color","primary"],["lines","none"],["text-center",""]],null,null,null,o.mb,o.u)),t["\u0275did"](6,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],lines:[1,"lines"]},null),(n()(),t["\u0275eld"](7,0,null,0,2,"ion-label",[],null,null,null,o.nb,o.y)),t["\u0275did"](8,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](9,0,["",""]))],function(n,l){n(l,4,0,"primary"),n(l,6,0,"primary","none")},function(n,l){n(l,9,0,l.component.titulo)})}},njMu:function(n,l,e){"use strict";var t=e("CcnG"),o=e("oBZk"),u=e("ZZ/e");e("+sC5"),e("ZYCi"),e.d(l,"a",function(){return i}),e.d(l,"b",function(){return r});var i=t["\u0275crt"]({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:10%;width:10px;height:10px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.2em!important}.heider[_ngcontent-%COMP%]{background:#3880ff;height:25px}"]],data:{}});function r(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,15,"ion-header",[["no-border",""]],null,null,null,o.fb,o.q)),t["\u0275did"](1,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,0,"div",[["class","heider"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,0,12,"ion-toolbar",[["color","primary"]],null,null,null,o.Db,o.O)),t["\u0275did"](4,49152,null,0,u.Cb,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275eld"](5,0,null,0,5,"ion-item",[["color","primary"],["lines","none"],["text-center",""]],null,null,null,o.mb,o.u)),t["\u0275did"](6,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],lines:[1,"lines"]},null),(n()(),t["\u0275eld"](7,0,null,0,2,"ion-label",[],null,null,null,o.nb,o.y)),t["\u0275did"](8,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](9,0,["",""])),(n()(),t["\u0275eld"](10,0,null,0,0,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](11,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.U,o.f)),t["\u0275did"](12,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](13,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,15).onClick(e)&&o),o},o.R,o.c)),t["\u0275did"](14,49152,null,0,u.h,[t.ChangeDetectorRef,t.ElementRef],{defaultHref:[0,"defaultHref"]},null),t["\u0275did"](15,16384,null,0,u.i,[[2,u.ib],u.Ib],{defaultHref:[0,"defaultHref"]},null)],function(n,l){n(l,4,0,"primary"),n(l,6,0,"primary","none"),n(l,14,0,"home"),n(l,15,0,"home")},function(n,l){n(l,9,0,l.component.titulo)})}}}]);