(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0fld":function(n,e,l){"use strict";l.d(e,"a",function(){return a});var t=l("mrSG"),o=l("t/Na"),i=l("9Xff"),u=l("67Y/"),r=l("gRf5"),c=l("CcnG"),s=l("iw74"),a=function(){function n(n,e,l){this.Pro_http=n,this.storage=e,this.fileTransfer=l}return n.prototype.nuevoProducto=function(n){return t.b(this,void 0,void 0,function(){var e,l;return t.e(this,function(t){switch(t.label){case 0:return e=new o.g(i.a),l={},[4,this.storage.get("token")];case 1:return l.token=t.sent(),l.nombre=n.nombre,l.descripcion=n.descripcion,l.codigobarra=n.codigo,l.id_categoria=n.id_categoria,l.fotografia="p_form.foto[0]",l.id_tipo_consumo=n.id_tipo_consumo,[4,this.Pro_http.post(i.b+"api/productos/nuevoProducto",l,{headers:e}).toPromise()];case 2:return[2,t.sent()]}})})},n.prototype.updateProducto=function(n){return t.b(this,void 0,void 0,function(){var e,l;return t.e(this,function(t){switch(t.label){case 0:return e=new o.g(i.a),l={},[4,this.storage.get("token")];case 1:return l.token=t.sent(),l.id_producto=n.id_producto,l.nombre=n.nombre,l.descripcion=n.descripcion,l.codigobarra=n.codigo,l.id_categoria=n.id_categoria,l.fotografia=null,l.id_tipo_consumo=n.id_tipo_consumo,[4,this.Pro_http.post(i.b+"api/productos/updateProducto",l,{headers:e}).toPromise()];case 2:return[2,t.sent()]}})})},n.prototype.listaProductos=function(n,e){var l=new o.g(i.a);return this.Pro_http.post(i.b+"api/productos/productosList",{id_servicio:e,token:n},{headers:l}).pipe(Object(u.a)(function(n){return n}))},n.prototype.inventarioList=function(n){var e=new o.g(i.a);return this.Pro_http.post(i.b+"api/productos/inventarioList",{token:n},{headers:e}).pipe(Object(u.a)(function(n){return n}))},n.prototype.inventarioListAsync=function(){return t.b(this,void 0,void 0,function(){var n,e;return t.e(this,function(l){switch(l.label){case 0:return n=new o.g(i.a),e={},[4,this.storage.get("token")];case 1:return e.token=l.sent(),[4,this.Pro_http.post(i.b+"api/productos/inventarioList",e,{headers:n}).toPromise()];case 2:return[2,l.sent()]}})})},n.prototype.deleteProducto=function(n){return t.b(this,void 0,void 0,function(){var e,l;return t.e(this,function(t){switch(t.label){case 0:return e=new o.g(i.a),l={},[4,this.storage.get("token")];case 1:return l.token=t.sent(),l.id_producto=n,[4,this.Pro_http.post(i.b+"api/productos/deleteProducto",l,{headers:e}).toPromise()];case 2:return[2,t.sent()]}})})},n.prototype.inventarioTransacciones=function(n,e){return t.b(this,void 0,void 0,function(){var l;return t.e(this,function(t){switch(t.label){case 0:return l=new o.g(i.a),[4,this.Pro_http.post(i.b+"api/productos/inventarioTransacciones",{id_producto:n,id_sucursal:e.id_sucursal},{headers:l}).toPromise()];case 1:return[2,t.sent()]}})})},n.prototype.getTiposConsumo=function(n){var e=new o.g(i.a);return this.Pro_http.post(i.b+"api/productos/tiposConsumo",{token:n},{headers:e}).pipe(Object(u.a)(function(n){return n}))},n.prototype.getProducto=function(n){var e=new o.g(i.a);return this.Pro_http.post(i.b+"api/productos/getProducto",{id_producto:n},{headers:e}).pipe(Object(u.a)(function(n){return n}))},n.prototype.subirImagen=function(n,e){var l=new o.g(i.a);if(null!=n||!n.includes("www.bodegin.com"))if(i.c){var t={fileKey:"image",headers:l,params:{id_producto:e}};this.fileTransfer.create().upload(n,i.b+"api/productos/upload",t).then(function(n){console.log("leoeoeooe"),console.log(n)}).catch(function(n){console.log("leoeoeooe")})}else{var u=new FormData;u.append("image",n,"image"),u.append("id_producto",String(e)),this.Pro_http.post(i.b+"api/productos/upload",u).subscribe(function(n){console.log(n)})}},n.ngInjectableDef=c.defineInjectable({factory:function(){return new n(c.inject(o.c),c.inject(s.b),c.inject(r.a))},token:n,providedIn:"root"}),n}()},"7G/b":function(n,e,l){"use strict";l.d(e,"a",function(){return t});var t=function(){function n(){this.titulo=""}return n.prototype.ngOnInit=function(){},n}()},Detk:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),o=l("mrSG"),i=l("6rJV"),u=l("ZZ/e"),r=l("0fld"),c=function(){function n(n,e,l,t,o){this.Pro_productos=n,this.storage=e,this.Pro_service=l,this.modalController=t,this.toastController=o,this.productos=[],this.productos_backup=[],this.textSearch=null}return n.prototype.ngOnInit=function(){var n=this;this.storage.get("token").then(function(e){n.Pro_productos.listaProductos(e,n.id_servicio).subscribe(function(e){n.productos=n.productos_backup=e})})},n.prototype.busqueda=function(n){return o.b(this,void 0,void 0,function(){var e=this;return o.e(this,function(l){return this.productos=[],this.productos_backup.forEach(function(l){l.descripcion.toLowerCase().includes(n.toLowerCase())&&e.productos.push(l)}),[2]})})},n.prototype.validador=function(){return o.b(this,void 0,void 0,function(){var n;return o.e(this,function(e){switch(e.label){case 0:n=0,e.label=1;case 1:return n<this.productos.length?this.productos[n].cantidad<=0&&this.productos[n].is_check?[4,this.showToast("Producto con cantidad invalida")]:[3,3]:[3,4];case 2:return e.sent(),[2,!1];case 3:return n++,[3,1];case 4:return[2,!0]}})})},n.prototype.showToast=function(n,e){return void 0===e&&(e=3e3),o.b(this,void 0,void 0,function(){return o.e(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:n,duration:e,position:"middle",showCloseButton:!0,closeButtonText:"Cerrar"})];case 1:return l.sent().present(),[2]}})})},n.prototype.guardarProductos=function(){return o.b(this,void 0,void 0,function(){var n;return o.e(this,function(e){switch(e.label){case 0:return[4,this.validador()];case 1:return e.sent()?[4,this.Pro_service.updateProductos(this.id_servicio,this.productos)]:[3,3];case 2:n=e.sent(),this.modalController.dismiss({productos:n}),e.label=3;case 3:return[2]}})})},n.prototype.Salir=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){return this.modalController.dismiss(),[2]})})},n}(),s=function(){function n(n,e,l,t,o,i){var u=this;this.Pro_servicios=n,this.modalController=l,this.alertController=t,this.toastController=o,this.Pro_router=i,this.productos=[],this.servicio={encabezado:{descripcion:null,id_servicio:null}},this.servicio.encabezado.id_servicio=e.snapshot.params.id_servicio,this.Pro_servicios.servicioDetalle(this.servicio.encabezado.id_servicio).subscribe(function(n){u.servicio=n,u.productos=[],u.productos=n.productos})}return n.prototype.ngOnInit=function(){},n.prototype.presentModal=function(){return o.b(this,void 0,void 0,function(){var n,e;return o.e(this,function(l){switch(l.label){case 0:return[4,this.modalController.create({component:c,componentProps:{id_servicio:this.servicio.encabezado.id_servicio}})];case 1:return[4,(n=l.sent()).present()];case 2:return l.sent(),[4,n.onDidDismiss()];case 3:return null!=(e=l.sent()).data&&(this.productos=[],this.productos=e.data.productos),[2]}})})},n.prototype.updadeServicio=function(n){return o.b(this,void 0,void 0,function(){var e=this;return o.e(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"Cambiar nombre",inputs:[{name:"input",type:"text",value:this.servicio.encabezado.descripcion,placeholder:"Nombre"}],buttons:[{text:"Cancelar",cssClass:"secondary"},{text:"Cambiar",handler:function(l){return o.b(e,void 0,void 0,function(){return o.e(this,function(e){switch(e.label){case 0:return null!=l.input&&l.input.trim().length?[4,this.Pro_servicios.updateNombre(this.servicio.encabezado.id_servicio,n,l.input).catch(function(n){})]:[3,2];case 1:return e.sent(),this.servicio.encabezado.descripcion=l.input,[3,4];case 2:return[4,this.showToast("Nombre vacio")];case 3:e.sent(),e.label=4;case 4:return[2]}})})}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n.prototype.servicioDelete=function(){return o.b(this,void 0,void 0,function(){var n=this;return o.e(this,function(e){switch(e.label){case 0:return[4,this.alertController.create({header:"Eliminar Servicio",message:"Esta seguro que desea eliminar "+this.servicio.encabezado.descripcion,buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(n){}},{text:"Eliminar",handler:function(e){return o.b(n,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return[4,this.Pro_servicios.updateNombre(this.servicio.encabezado.id_servicio,"DELETE",null).catch(function(n){})];case 1:return n.sent(),this.Pro_router.navigate(["/servicios"]).then(function(){window.location.reload()}),[2]}})})}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},n.prototype.showToast=function(n,e){return void 0===e&&(e=3e3),o.b(this,void 0,void 0,function(){return o.e(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:n,duration:e,position:"middle",showCloseButton:!0,closeButtonText:"Cerrar"})];case 1:return l.sent().present(),[2]}})})},n.prototype.doRefresh=function(n){return o.b(this,void 0,void 0,function(){var e=this;return o.e(this,function(l){return this.Pro_servicios.servicioDetalle(this.servicio.encabezado.id_servicio).subscribe(function(l){e.servicio=l,n.target.complete()},function(e){n.target.complete()}),[2]})})},n}(),a=function(){return function(){}}(),d=l("pMnS"),p=l("oBZk"),h=l("njMu"),f=l("+sC5"),g=l("ZYCi"),m=l("Ip0R"),v=t["\u0275crt"]({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--color:#6e6368}.button[_ngcontent-%COMP%]{position:fixed;left:0;bottom:20px;right:0}.col[_ngcontent-%COMP%]{color:gray;border-top:1px solid #dedede;border-bottom:1px solid #dedede}.label[_ngcontent-%COMP%]{font-size:2em}"]],data:{}});function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"ion-row",[["no-lines",""]],null,null,null,p.kb,p.C)),t["\u0275did"](1,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,2,"ion-col",[["size","10"],["text-left",""]],null,null,null,p.Q,p.i)),t["\u0275did"](3,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],{size:[0,"size"]},null),(n()(),t["\u0275ted"](4,0,[" "," "])),(n()(),t["\u0275eld"](5,0,null,0,2,"ion-col",[["size","2"],["text-center",""]],null,null,null,p.Q,p.i)),t["\u0275did"](6,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],{size:[0,"size"]},null),(n()(),t["\u0275ted"](7,0,[" "," "]))],function(n,e){n(e,3,0,"10"),n(e,6,0,"2")},function(n,e){n(e,4,0,e.context.$implicit.descripcion),n(e,7,0,e.context.$implicit.cantidad)})}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-header-in",[["titulo","Configuracion de Servicio"]],null,null,null,h.b,h.a)),t["\u0275did"](1,114688,null,0,f.a,[g.m,t.ChangeDetectorRef],{titulo:[0,"titulo"]},null),(n()(),t["\u0275eld"](2,0,null,null,44,"ion-content",[],null,null,null,p.R,p.j)),t["\u0275did"](3,49152,null,0,u.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](4,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,e,l){var t=!0;return"ionRefresh"===e&&(t=!1!==n.component.doRefresh(l)&&t),t},p.ib,p.z)),t["\u0275did"](5,49152,null,0,u.db,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Hale para recargar"],["refreshingSpinner","circles"],["refreshingText","Recargando..."]],null,null,null,p.hb,p.A)),t["\u0275did"](7,49152,null,0,u.eb,[t.ChangeDetectorRef,t.ElementRef],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),t["\u0275eld"](8,0,null,0,6,"ion-item",[["lines","none"]],null,null,null,p.cb,p.r)),t["\u0275did"](9,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-label",[["text-right",""]],null,null,null,p.db,p.v)),t["\u0275did"](11,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,0,["Eliminar"])),(n()(),t["\u0275eld"](13,0,null,0,1,"ion-icon",[["color","danger"],["name","trash"]],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.servicioDelete()&&t),t},p.W,p.o)),t["\u0275did"](14,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],name:[1,"name"]},null),(n()(),t["\u0275eld"](15,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,p.cb,p.r)),t["\u0275did"](16,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](17,0,null,0,2,"ion-label",[["class","label"],["text-wrap",""]],null,null,null,p.db,p.v)),t["\u0275did"](18,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](19,0,["",""])),(n()(),t["\u0275eld"](20,0,null,0,2,"div",[["slot","end"],["text-center",""]],null,null,null,null,null)),(n()(),t["\u0275eld"](21,0,null,null,1,"ion-icon",[["name","create"]],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.updadeServicio("UPDATE")&&t),t},p.W,p.o)),t["\u0275did"](22,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(n()(),t["\u0275eld"](23,0,null,0,2,"div",[["text-center",""]],null,null,null,null,null)),(n()(),t["\u0275eld"](24,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Productos"])),(n()(),t["\u0275eld"](26,0,null,0,13,"ion-item",[["lines","none"]],null,null,null,p.cb,p.r)),t["\u0275did"](27,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](28,0,null,0,11,"ion-grid",[],null,null,null,p.U,p.m)),t["\u0275did"](29,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](30,0,null,0,7,"ion-row",[["no-lines",""]],null,null,null,p.kb,p.C)),t["\u0275did"](31,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](32,0,null,0,2,"ion-col",[["class","col"],["size","10"]],null,null,null,p.Q,p.i)),t["\u0275did"](33,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],{size:[0,"size"]},null),(n()(),t["\u0275ted"](-1,0,[" Producto "])),(n()(),t["\u0275eld"](35,0,null,0,2,"ion-col",[["class","col"],["size","2"]],null,null,null,p.Q,p.i)),t["\u0275did"](36,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],{size:[0,"size"]},null),(n()(),t["\u0275ted"](-1,0,[" Cant. "])),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](39,278528,null,0,m.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](40,0,null,0,6,"ion-item",[["lines","none"]],null,null,null,p.cb,p.r)),t["\u0275did"](41,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](42,0,null,0,4,"ion-button",[["class","button"],["color","primary"],["shape","round"],["size","default"]],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.presentModal()&&t),t},p.M,p.e)),t["\u0275did"](43,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),t["\u0275ted"](-1,0,["Editar productos"])),(n()(),t["\u0275eld"](45,0,null,0,1,"ion-icon",[["name","add-circle"],["slot","end"]],null,null,null,p.W,p.o)),t["\u0275did"](46,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(n,e){var l=e.component;n(e,1,0,"Configuracion de Servicio"),n(e,7,0,"arrow-dropdown","Hale para recargar","circles","Recargando..."),n(e,9,0,"none"),n(e,14,0,"danger","trash"),n(e,16,0,"none"),n(e,22,0,"create"),n(e,27,0,"none"),n(e,33,0,"10"),n(e,36,0,"2"),n(e,39,0,l.productos),n(e,41,0,"none"),n(e,43,0,"primary","round","default"),n(e,46,0,"add-circle")},function(n,e){n(e,19,0,e.component.servicio.encabezado.descripcion)})}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-servicio-config",[],null,null,null,C,v)),t["\u0275did"](1,114688,null,0,s,[i.a,g.a,u.Hb,u.b,u.Ob,g.m],null,null)],function(n,e){n(e,1,0)},null)}var _=t["\u0275ccf"]("app-servicio-config",s,R,{},{},[]),P=l("gIcY"),D=l("Mc8v"),E=l("7G/b"),x=l("iw74"),y=t["\u0275crt"]({encapsulation:0,styles:[[".button[_ngcontent-%COMP%]{position:fixed;left:0;bottom:50px;right:0;z-index:500}.buttonExit[_ngcontent-%COMP%]{position:fixed;left:0;bottom:5px;right:0;z-index:500}.busqueda[_ngcontent-%COMP%]{background:#3880ff}.col[_ngcontent-%COMP%]{color:gray;border-top:1px solid #dedede;border-bottom:1px solid #dedede}.inputCant[_ngcontent-%COMP%]{border:1px solid #dedede;border-radius:25px}.separador[_ngcontent-%COMP%]{margin-bottom:35px}"]],data:{}});function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,26,"ion-row",[["align-items-center",""],["no-lines",""]],null,null,null,p.kb,p.C)),t["\u0275did"](1,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,2,"ion-col",[["size","9"],["text-left",""]],null,null,null,p.Q,p.i)),t["\u0275did"](3,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],{size:[0,"size"]},null),(n()(),t["\u0275ted"](4,0,[" "," "])),(n()(),t["\u0275eld"](5,0,null,0,12,"ion-col",[["size","2"],["text-center",""]],null,null,null,p.Q,p.i)),t["\u0275did"](6,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],{size:[0,"size"]},null),(n()(),t["\u0275eld"](7,0,null,0,10,"ion-input",[["class","inputCant"],["maxlength","3"],["minlength","3"],["name","phone"],["pattern","\\d*"],["type","tel"]],[[1,"minlength",0],[1,"maxlength",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,e,l){var o=!0;return"ionBlur"===e&&(o=!1!==t["\u0275nov"](n,12)._handleBlurEvent()&&o),"ionChange"===e&&(o=!1!==t["\u0275nov"](n,12)._handleInputEvent(l.target.value)&&o),"ngModelChange"===e&&(o=!1!==(n.context.$implicit.cantidad=l)&&o),o},p.Y,p.q)),t["\u0275did"](8,540672,null,0,P.d,[],{minlength:[0,"minlength"]},null),t["\u0275did"](9,540672,null,0,P.c,[],{maxlength:[0,"maxlength"]},null),t["\u0275did"](10,540672,null,0,P.l,[],{pattern:[0,"pattern"]},null),t["\u0275prd"](1024,null,P.e,function(n,e,l){return[n,e,l]},[P.d,P.c,P.l]),t["\u0275did"](12,16384,null,0,u.Nb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,P.f,function(n){return[n]},[u.Nb]),t["\u0275did"](14,671744,null,0,P.k,[[8,null],[6,P.e],[8,null],[6,P.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,P.g,null,[P.k]),t["\u0275did"](16,16384,null,0,P.h,[[4,P.g]],null,null),t["\u0275did"](17,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{maxlength:[0,"maxlength"],minlength:[1,"minlength"],name:[2,"name"],pattern:[3,"pattern"],type:[4,"type"]},null),(n()(),t["\u0275eld"](18,0,null,0,8,"ion-col",[["size","1"]],null,null,null,p.Q,p.i)),t["\u0275did"](19,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],{size:[0,"size"]},null),(n()(),t["\u0275eld"](20,0,null,0,6,"ion-checkbox",[["color","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,e,l){var o=!0;return"ionBlur"===e&&(o=!1!==t["\u0275nov"](n,21)._handleBlurEvent()&&o),"ionChange"===e&&(o=!1!==t["\u0275nov"](n,21)._handleIonChange(l.target.checked)&&o),"ngModelChange"===e&&(o=!1!==(n.context.$implicit.is_check=l)&&o),o},p.P,p.h)),t["\u0275did"](21,16384,null,0,u.d,[t.ElementRef],null,null),t["\u0275prd"](1024,null,P.f,function(n){return[n]},[u.d]),t["\u0275did"](23,671744,null,0,P.k,[[8,null],[8,null],[8,null],[6,P.f]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,P.g,null,[P.k]),t["\u0275did"](25,16384,null,0,P.h,[[4,P.g]],null,null),t["\u0275did"](26,49152,null,0,u.s,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null)],function(n,e){n(e,3,0,"9"),n(e,6,0,"2"),n(e,8,0,"3"),n(e,9,0,"3"),n(e,10,0,"\\d*"),n(e,14,0,"phone",e.context.$implicit.cantidad),n(e,17,0,"3","3","phone","\\d*","tel"),n(e,19,0,"1"),n(e,23,0,e.context.$implicit.is_check),n(e,26,0,"primary")},function(n,e){n(e,4,0,e.context.$implicit.descripcion),n(e,7,0,t["\u0275nov"](e,8).minlength?t["\u0275nov"](e,8).minlength:null,t["\u0275nov"](e,9).maxlength?t["\u0275nov"](e,9).maxlength:null,t["\u0275nov"](e,10).pattern?t["\u0275nov"](e,10).pattern:null,t["\u0275nov"](e,16).ngClassUntouched,t["\u0275nov"](e,16).ngClassTouched,t["\u0275nov"](e,16).ngClassPristine,t["\u0275nov"](e,16).ngClassDirty,t["\u0275nov"](e,16).ngClassValid,t["\u0275nov"](e,16).ngClassInvalid,t["\u0275nov"](e,16).ngClassPending),n(e,20,0,t["\u0275nov"](e,25).ngClassUntouched,t["\u0275nov"](e,25).ngClassTouched,t["\u0275nov"](e,25).ngClassPristine,t["\u0275nov"](e,25).ngClassDirty,t["\u0275nov"](e,25).ngClassValid,t["\u0275nov"](e,25).ngClassInvalid,t["\u0275nov"](e,25).ngClassPending)})}function z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-header-modal",[["titulo","Productos"]],null,null,null,D.b,D.a)),t["\u0275did"](1,114688,null,0,E.a,[],{titulo:[0,"titulo"]},null),(n()(),t["\u0275eld"](2,0,null,null,56,"ion-content",[],null,null,null,p.R,p.j)),t["\u0275did"](3,49152,null,0,u.v,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](4,0,null,0,23,"div",[["class","busqueda"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,22,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,e,l){var o=!0;return"submit"===e&&(o=!1!==t["\u0275nov"](n,7).onSubmit(l)&&o),"reset"===e&&(o=!1!==t["\u0275nov"](n,7).onReset()&&o),o},null,null)),t["\u0275did"](6,16384,null,0,P.o,[],null,null),t["\u0275did"](7,4210688,null,0,P.j,[[8,null],[8,null]],null,null),t["\u0275prd"](2048,null,P.a,null,[P.j]),t["\u0275did"](9,16384,null,0,P.i,[[4,P.a]],null,null),(n()(),t["\u0275eld"](10,0,null,null,17,"ion-grid",[],null,null,null,p.U,p.m)),t["\u0275did"](11,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](12,0,null,0,15,"ion-row",[["color","primary"],["justify-content-center",""]],null,null,null,p.kb,p.C)),t["\u0275did"](13,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](14,0,null,0,13,"ion-col",[],null,null,null,p.Q,p.i)),t["\u0275did"](15,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](16,0,[["list",1]],0,11,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](17,0,null,null,10,"ion-item",[],null,null,null,p.cb,p.r)),t["\u0275did"](18,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](19,0,null,0,1,"ion-icon",[["color","#f4f4f4"],["name","search"],["slot","end"]],null,null,null,p.W,p.o)),t["\u0275did"](20,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],name:[1,"name"]},null),(n()(),t["\u0275eld"](21,0,null,0,6,"ion-input",[["clearInput",""],["placeholder","Buscar"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"input"],[null,"ionBlur"]],function(n,e,l){var o=!0,i=n.component;return"ionBlur"===e&&(o=!1!==t["\u0275nov"](n,22)._handleBlurEvent()&&o),"ionChange"===e&&(o=!1!==t["\u0275nov"](n,22)._handleInputEvent(l.target.value)&&o),"ngModelChange"===e&&(o=!1!==(i.textSearch=l)&&o),"ionChange"===e&&(o=!1!==i.busqueda(l.target.value)&&o),"input"===e&&(o=!1!==i.busqueda(l.target.value)&&o),o},p.Y,p.q)),t["\u0275did"](22,16384,null,0,u.Nb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,P.f,function(n){return[n]},[u.Nb]),t["\u0275did"](24,671744,null,0,P.k,[[2,P.a],[8,null],[8,null],[6,P.f]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,P.g,null,[P.k]),t["\u0275did"](26,16384,null,0,P.h,[[4,P.g]],null,null),t["\u0275did"](27,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),t["\u0275eld"](28,0,null,0,2,"div",[["text-center",""]],null,null,null,null,null)),(n()(),t["\u0275eld"](29,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Productos"])),(n()(),t["\u0275eld"](31,0,null,0,15,"ion-item",[["lines","none"]],null,null,null,p.cb,p.r)),t["\u0275did"](32,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](33,0,null,0,13,"ion-grid",[["class","separador"]],null,null,null,p.U,p.m)),t["\u0275did"](34,49152,null,0,u.B,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](35,0,null,0,9,"ion-row",[["no-lines",""]],null,null,null,p.kb,p.C)),t["\u0275did"](36,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](37,0,null,0,2,"ion-col",[["class","col"],["size","9"]],null,null,null,p.Q,p.i)),t["\u0275did"](38,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],{size:[0,"size"]},null),(n()(),t["\u0275ted"](-1,0,[" Producto "])),(n()(),t["\u0275eld"](40,0,null,0,2,"ion-col",[["class","col"],["size","2"]],null,null,null,p.Q,p.i)),t["\u0275did"](41,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],{size:[0,"size"]},null),(n()(),t["\u0275ted"](-1,0,[" Cant. "])),(n()(),t["\u0275eld"](43,0,null,0,1,"ion-col",[["class","col"],["size","1"]],null,null,null,p.Q,p.i)),t["\u0275did"](44,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef],{size:[0,"size"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](46,278528,null,0,m.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](47,0,null,0,11,"ion-item",[["lines","none"]],null,null,null,p.cb,p.r)),t["\u0275did"](48,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](49,0,null,0,4,"ion-button",[["class","button"],["color","primary"],["shape","round"],["size","default"]],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.guardarProductos()&&t),t},p.M,p.e)),t["\u0275did"](50,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),t["\u0275ted"](-1,0,["Guardar"])),(n()(),t["\u0275eld"](52,0,null,0,1,"ion-icon",[["name","save"],["slot","end"]],null,null,null,p.W,p.o)),t["\u0275did"](53,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(n()(),t["\u0275eld"](54,0,null,0,4,"ion-button",[["class","buttonExit"],["color","medium"],["shape","round"],["size","default"]],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.Salir()&&t),t},p.M,p.e)),t["\u0275did"](55,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),t["\u0275ted"](-1,0,["Cancelar"])),(n()(),t["\u0275eld"](57,0,null,0,1,"ion-icon",[["name","exit"],["slot","end"]],null,null,null,p.W,p.o)),t["\u0275did"](58,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null)],function(n,e){var l=e.component;n(e,1,0,"Productos"),n(e,20,0,"#f4f4f4","search"),n(e,24,0,l.textSearch),n(e,27,0,"","Buscar","text"),n(e,32,0,"none"),n(e,38,0,"9"),n(e,41,0,"2"),n(e,44,0,"1"),n(e,46,0,l.productos),n(e,48,0,"none"),n(e,50,0,"primary","round","default"),n(e,53,0,"save"),n(e,55,0,"medium","round","default"),n(e,58,0,"exit")},function(n,e){n(e,5,0,t["\u0275nov"](e,9).ngClassUntouched,t["\u0275nov"](e,9).ngClassTouched,t["\u0275nov"](e,9).ngClassPristine,t["\u0275nov"](e,9).ngClassDirty,t["\u0275nov"](e,9).ngClassValid,t["\u0275nov"](e,9).ngClassInvalid,t["\u0275nov"](e,9).ngClassPending),n(e,21,0,t["\u0275nov"](e,26).ngClassUntouched,t["\u0275nov"](e,26).ngClassTouched,t["\u0275nov"](e,26).ngClassPristine,t["\u0275nov"](e,26).ngClassDirty,t["\u0275nov"](e,26).ngClassValid,t["\u0275nov"](e,26).ngClassInvalid,t["\u0275nov"](e,26).ngClassPending)})}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-productos-servicios",[],null,null,null,z,y)),t["\u0275did"](1,114688,null,0,c,[r.a,x.b,i.a,u.Hb,u.Ob],null,null)],function(n,e){n(e,1,0)},null)}var M=t["\u0275ccf"]("app-productos-servicios",c,k,{id_servicio:"id_servicio"},{},[]),O=l("j1ZV"),I=function(){return function(){}}();l.d(e,"ServicioConfigPageModuleNgFactory",function(){return T});var T=t["\u0275cmf"](a,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,_,M]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[t.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,P.p,P.p,[]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Hb,u.Hb,[u.c,t.ComponentFactoryResolver,t.Injector,m.DOCUMENT]),t["\u0275mpd"](4608,u.Kb,u.Kb,[u.c,t.ComponentFactoryResolver,t.Injector,m.DOCUMENT]),t["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),t["\u0275mpd"](1073742336,P.n,P.n,[]),t["\u0275mpd"](1073742336,P.b,P.b,[]),t["\u0275mpd"](1073742336,u.Eb,u.Eb,[]),t["\u0275mpd"](1073742336,O.a,O.a,[]),t["\u0275mpd"](1073742336,I,I,[]),t["\u0275mpd"](1073742336,g.o,g.o,[[2,g.u],[2,g.m]]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,g.k,function(){return[[{path:"",component:s}]]},[])])})},Mc8v:function(n,e,l){"use strict";var t=l("CcnG"),o=l("oBZk"),i=l("ZZ/e");l("7G/b"),l.d(e,"a",function(){return u}),l.d(e,"b",function(){return r});var u=t["\u0275crt"]({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin-right:10%;width:10px;height:10px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.2em!important}.heider[_ngcontent-%COMP%]{background:#3880ff;height:12px}"]],data:{}});function r(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"ion-header",[["no-border",""]],null,null,null,o.V,o.n)),t["\u0275did"](1,49152,null,0,i.C,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,0,0,"div",[["class","heider"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,0,6,"ion-toolbar",[["color","primary"]],null,null,null,o.pb,o.H)),t["\u0275did"](4,49152,null,0,i.Cb,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"]},null),(n()(),t["\u0275eld"](5,0,null,0,4,"ion-item",[["color","primary"],["lines","none"],["text-center",""]],null,null,null,o.cb,o.r)),t["\u0275did"](6,49152,null,0,i.I,[t.ChangeDetectorRef,t.ElementRef],{color:[0,"color"],lines:[1,"lines"]},null),(n()(),t["\u0275eld"](7,0,null,0,2,"ion-label",[],null,null,null,o.db,o.v)),t["\u0275did"](8,49152,null,0,i.O,[t.ChangeDetectorRef,t.ElementRef],null,null),(n()(),t["\u0275ted"](9,0,["",""]))],function(n,e){n(e,4,0,"primary"),n(e,6,0,"primary","none")},function(n,e){n(e,9,0,e.component.titulo)})}}}]);