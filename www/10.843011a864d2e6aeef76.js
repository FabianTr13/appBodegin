(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0fld":function(n,e,t){"use strict";t.d(e,"a",function(){return c});var o=t("mrSG"),l=t("t/Na"),i=t("9Xff"),u=t("67Y/"),r=t("gRf5"),a=t("CcnG"),s=t("iw74"),c=function(){function n(n,e,t){this.Pro_http=n,this.storage=e,this.fileTransfer=t}return n.prototype.nuevoProducto=function(n){return o.b(this,void 0,void 0,function(){var e,t;return o.e(this,function(o){switch(o.label){case 0:return e=new l.g(i.a),t={},[4,this.storage.get("token")];case 1:return t.token=o.sent(),t.nombre=n.nombre,t.descripcion=n.descripcion,t.codigobarra=n.codigo,t.id_categoria=n.id_categoria,t.fotografia="p_form.foto[0]",t.id_tipo_consumo=n.id_tipo_consumo,[4,this.Pro_http.post(i.b+"api/productos/nuevoProducto",t,{headers:e}).toPromise()];case 2:return[2,o.sent()]}})})},n.prototype.updateProducto=function(n){return o.b(this,void 0,void 0,function(){var e,t;return o.e(this,function(o){switch(o.label){case 0:return e=new l.g(i.a),t={},[4,this.storage.get("token")];case 1:return t.token=o.sent(),t.id_producto=n.id_producto,t.nombre=n.nombre,t.descripcion=n.descripcion,t.codigobarra=n.codigo,t.id_categoria=n.id_categoria,t.fotografia=null,t.id_tipo_consumo=n.id_tipo_consumo,[4,this.Pro_http.post(i.b+"api/productos/updateProducto",t,{headers:e}).toPromise()];case 2:return[2,o.sent()]}})})},n.prototype.listaProductos=function(n,e){var t=new l.g(i.a);return this.Pro_http.post(i.b+"api/productos/productosList",{id_servicio:e,token:n},{headers:t}).pipe(Object(u.a)(function(n){return n}))},n.prototype.inventarioList=function(n){var e=new l.g(i.a);return this.Pro_http.post(i.b+"api/productos/inventarioList",{token:n},{headers:e}).pipe(Object(u.a)(function(n){return n}))},n.prototype.inventarioListAsync=function(){return o.b(this,void 0,void 0,function(){var n,e;return o.e(this,function(t){switch(t.label){case 0:return n=new l.g(i.a),e={},[4,this.storage.get("token")];case 1:return e.token=t.sent(),[4,this.Pro_http.post(i.b+"api/productos/inventarioList",e,{headers:n}).toPromise()];case 2:return[2,t.sent()]}})})},n.prototype.deleteProducto=function(n){return o.b(this,void 0,void 0,function(){var e,t;return o.e(this,function(o){switch(o.label){case 0:return e=new l.g(i.a),t={},[4,this.storage.get("token")];case 1:return t.token=o.sent(),t.id_producto=n,[4,this.Pro_http.post(i.b+"api/productos/deleteProducto",t,{headers:e}).toPromise()];case 2:return[2,o.sent()]}})})},n.prototype.inventarioTransacciones=function(n,e){return o.b(this,void 0,void 0,function(){var t;return o.e(this,function(o){switch(o.label){case 0:return t=new l.g(i.a),[4,this.Pro_http.post(i.b+"api/productos/inventarioTransacciones",{id_producto:n,id_sucursal:e.id_sucursal},{headers:t}).toPromise()];case 1:return[2,o.sent()]}})})},n.prototype.getTiposConsumo=function(n){var e=new l.g(i.a);return this.Pro_http.post(i.b+"api/productos/tiposConsumo",{token:n},{headers:e}).pipe(Object(u.a)(function(n){return n}))},n.prototype.getProducto=function(n){var e=new l.g(i.a);return this.Pro_http.post(i.b+"api/productos/getProducto",{id_producto:n},{headers:e}).pipe(Object(u.a)(function(n){return n}))},n.prototype.subirImagen=function(n,e){var t=this;return new Promise(function(u,r){return o.b(t,void 0,void 0,function(){var t,u,a,s;return o.e(this,function(o){switch(o.label){case 0:return t=new l.g(i.a),u=!0,"string"==typeof n&&n.includes("www.bodegin.com")&&(u=!1),null!=n&&null!=n&&u?i.c?[3,1]:((a=new FormData).append("image",n,"image"),a.append("id_producto",String(e)),this.Pro_http.post(i.b+"api/productos/upload",a).subscribe(function(n){r(!0)},function(n){r(!0)}),[3,3]):[3,4];case 1:return s={fileKey:"image",headers:t,params:{id_producto:e}},[4,this.fileTransfer.create().upload(n,i.b+"api/productos/upload",s).then(function(n){console.log("subida"),r(!0)}).catch(function(n){r(!0)})];case 2:o.sent(),o.label=3;case 3:return[3,5];case 4:r(!0),o.label=5;case 5:return[2]}})})})},n.ngInjectableDef=a.defineInjectable({factory:function(){return new n(a.inject(l.c),a.inject(s.b),a.inject(r.a))},token:n,providedIn:"root"}),n}()},"1FLp":function(n,e,t){"use strict";t.d(e,"a",function(){return o});var o=function(){function n(n){this.domSanitizer=n}return n.prototype.transform=function(n){return n&&null!=n?this.domSanitizer.bypassSecurityTrustUrl(n):"assets/img/camera.png"},n}()},"7G/b":function(n,e,t){"use strict";t.d(e,"a",function(){return l});var o=t("9Xff"),l=function(){function n(){this.titulo=""}return n.prototype.ngOnInit=function(){this.es_app=o.c},n}()},"7ut9":function(n,e,t){"use strict";t.d(e,"a",function(){return s});var o=t("mrSG"),l=t("t/Na"),i=t("9Xff"),u=t("67Y/"),r=t("CcnG"),a=t("iw74"),s=function(){function n(n,e){this.Pro_http=n,this.storage=e}return n.prototype.obtenerSucursales=function(n){var e=new l.g(i.a);return this.Pro_http.post(i.b+"api/sucursales/sucursalesList",{token:n},{headers:e}).pipe(Object(u.a)(function(n){return n}))},n.prototype.obtenerSucursalesAsync=function(){return o.b(this,void 0,void 0,function(){var n,e;return o.e(this,function(t){switch(t.label){case 0:return n=new l.g(i.a),e={},[4,this.storage.get("token")];case 1:return e.token=t.sent(),[2,this.Pro_http.post(i.b+"api/sucursales/sucursalesList",e,{headers:n}).toPromise()]}})})},n.prototype.InserUpdateDeleteSucursal=function(n,e,t,u,r,a){return o.b(this,void 0,void 0,function(){var s,c;return o.e(this,function(o){switch(o.label){case 0:return s=new l.g(i.a),c={},[4,this.storage.get("token")];case 1:return c.token=o.sent(),c.id_sucursal=n,c.nombre=e,c.nombre_corto=t,c.direccion=u,c.telefono=r,c.accion=a,[4,this.Pro_http.post(i.b+"api/sucursales/insertUpdateDeleteSucursales",c,{headers:s}).toPromise()];case 2:return[2,o.sent()]}})})},n.prototype.obtenerSucursalSeleccionda=function(n){var e=new l.g(i.a);return this.Pro_http.post(i.b+"api/sucursales/obtenerSucursalSeleccionada",{token:n},{headers:e}).pipe(Object(u.a)(function(n){return n}))},n.prototype.obtenerSucursalSelecciondaAsync=function(){return o.b(this,void 0,void 0,function(){var n,e;return o.e(this,function(t){switch(t.label){case 0:return n=new l.g(i.a),e={},[4,this.storage.get("token")];case 1:return e.token=t.sent(),[4,this.Pro_http.post(i.b+"api/sucursales/obtenerSucursalSeleccionada",e,{headers:n}).toPromise()];case 2:return[2,t.sent()]}})})},n.prototype.sucursalesListUsuario=function(){return o.b(this,void 0,void 0,function(){var n,e;return o.e(this,function(t){switch(t.label){case 0:return n=new l.g(i.a),e={},[4,this.storage.get("token")];case 1:return e.token=t.sent(),[2,this.Pro_http.post(i.b+"api/sucursales/sucursalesListUsuario",e,{headers:n}).toPromise()]}})})},n.prototype.insertSucursalUsuario=function(n,e){return o.b(this,void 0,void 0,function(){var t;return o.e(this,function(o){return t=new l.g(i.a),[2,this.Pro_http.post(i.b+"api/sucursales/sucursalesInsertUsuarios",{usuarios:n,id_sucursal:e},{headers:t}).toPromise()]})})},n.prototype.updateSucursalSeleccionda=function(n){return o.b(this,void 0,void 0,function(){var e,t;return o.e(this,function(o){switch(o.label){case 0:return e=new l.g(i.a),t={},[4,this.storage.get("token")];case 1:return t.token=o.sent(),t.id_sucursal=n,[4,this.Pro_http.post(i.b+"api/sucursales/updateSucursalSeleccionada",t,{headers:e}).toPromise()];case 2:return[2,o.sent()]}})})},n.ngInjectableDef=r.defineInjectable({factory:function(){return new n(r.inject(l.c),r.inject(a.b))},token:n,providedIn:"root"}),n}()},Mc8v:function(n,e,t){"use strict";var o=t("CcnG"),l=t("oBZk"),i=t("ZZ/e");t("7G/b"),t.d(e,"a",function(){return u}),t.d(e,"b",function(){return r});var u=o["\u0275crt"]({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin-right:10%;width:10px;height:10px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.2em!important}.heider[_ngcontent-%COMP%]{background:#3880ff;height:20px}"]],data:{}});function r(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,9,"ion-header",[["no-border",""]],null,null,null,l.fb,l.q)),o["\u0275did"](1,49152,null,0,i.C,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](2,0,null,0,0,"div",[["class","heider"]],null,null,null,null,null)),(n()(),o["\u0275eld"](3,0,null,0,6,"ion-toolbar",[["color","primary"]],null,null,null,l.Db,l.O)),o["\u0275did"](4,49152,null,0,i.Cb,[o.ChangeDetectorRef,o.ElementRef],{color:[0,"color"]},null),(n()(),o["\u0275eld"](5,0,null,0,4,"ion-item",[["color","primary"],["lines","none"],["text-center",""]],null,null,null,l.mb,l.u)),o["\u0275did"](6,49152,null,0,i.I,[o.ChangeDetectorRef,o.ElementRef],{color:[0,"color"],lines:[1,"lines"]},null),(n()(),o["\u0275eld"](7,0,null,0,2,"ion-label",[],null,null,null,l.nb,l.y)),o["\u0275did"](8,49152,null,0,i.O,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275ted"](9,0,["",""]))],function(n,e){n(e,4,0,"primary"),n(e,6,0,"primary","none")},function(n,e){n(e,9,0,e.component.titulo)})}},TvpC:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var o=t("mrSG"),l=t("t/Na"),i=t("9Xff"),u=t("67Y/"),r=t("CcnG"),a=t("iw74"),s=function(){function n(n,e){this.Pro_http=n,this.storage=e}return n.prototype.obtenerCategorias=function(n){var e=new l.g(i.a);return this.Pro_http.post(i.b+"api/categorias/categoriasList",{token:n},{headers:e}).pipe(Object(u.a)(function(n){return n}))},n.prototype.obtenerCategoriasAsync=function(){return o.b(this,void 0,void 0,function(){var n,e;return o.e(this,function(t){switch(t.label){case 0:return n=new l.g(i.a),e={},[4,this.storage.get("token")];case 1:return e.token=t.sent(),[2,this.Pro_http.post(i.b+"api/categorias/categoriasList",e,{headers:n}).toPromise()]}})})},n.prototype.InsertUpdateDeleteCategoria=function(n,e,t){return o.b(this,void 0,void 0,function(){var u,r;return o.e(this,function(o){switch(o.label){case 0:return u=new l.g(i.a),r={},[4,this.storage.get("token")];case 1:return r.token=o.sent(),r.id_categoria=n,r.nombre=e,r.accion=t,[4,this.Pro_http.post(i.b+"api/categorias/insertUpdateDeleteCategoria",r,{headers:u}).toPromise()];case 2:return[2,o.sent()]}})})},n.ngInjectableDef=r.defineInjectable({factory:function(){return new n(r.inject(l.c),r.inject(a.b))},token:n,providedIn:"root"}),n}()},oJga:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var o=function(){return function(){}}()},"st+f":function(n,e,t){"use strict";var o=t("CcnG"),l=t("oBZk"),i=t("ZZ/e"),u=t("1FLp"),r=t("ZYjt"),a=t("Mc8v"),s=t("7G/b"),c=t("gIcY"),d=t("Ip0R"),p=t("w2TK"),g=t("Pn9U"),h=t("zA0m"),f=t("0fld"),m=t("TvpC"),v=t("iw74");t.d(e,"a",function(){return w});var b=o["\u0275crt"]({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--color:#6e6368}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--position:floating}.image[_ngcontent-%COMP%]{width:20%;height:200px}.buttonScanner[_ngcontent-%COMP%]{height:27px;width:27px;margin:auto}.minMax[_ngcontent-%COMP%]{padding:5px}@media (max-width:2000px){.image[_ngcontent-%COMP%]{width:20%;height:180px}}@media (max-width:1000px){.image[_ngcontent-%COMP%]{width:40%;height:180px}}@media (max-width:500px){.image[_ngcontent-%COMP%]{width:100%;height:180px}}"]],data:{}});function C(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,l.zb,l.L)),o["\u0275did"](1,49152,null,0,i.ob,[o.ChangeDetectorRef,o.ElementRef],{value:[0,"value"]},null),(n()(),o["\u0275ted"](2,0,["",""]))],function(n,e){n(e,1,0,o["\u0275inlineInterpolate"](1,"",e.context.$implicit.id_tipo_consumo,""))},function(n,e){n(e,2,0,e.context.$implicit.descripcion)})}function _(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,l.zb,l.L)),o["\u0275did"](1,49152,null,0,i.ob,[o.ChangeDetectorRef,o.ElementRef],{value:[0,"value"]},null),(n()(),o["\u0275ted"](2,0,["",""]))],function(n,e){n(e,1,0,o["\u0275inlineInterpolate"](1,"",e.context.$implicit.id_categoria,""))},function(n,e){n(e,2,0,e.context.$implicit.descripcion)})}function P(n){return o["\u0275vid"](0,[o["\u0275pid"](0,u.a,[r.b]),o["\u0275qud"](402653184,1,{el:0}),(n()(),o["\u0275eld"](2,0,null,null,1,"app-header-modal",[["titulo","Nuevo Producto"]],null,null,null,a.b,a.a)),o["\u0275did"](3,114688,null,0,s.a,[],{titulo:[0,"titulo"]},null),(n()(),o["\u0275eld"](4,0,null,null,96,"ion-content",[],null,null,null,l.bb,l.m)),o["\u0275did"](5,49152,null,0,i.v,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](6,0,null,0,2,"div",[["text-center",""]],null,null,null,null,null)),(n()(),o["\u0275eld"](7,0,null,null,1,"img",[["alt","Agregar imagen"],["class","image"]],[[8,"src",4]],[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.presentActionSheet()&&o),o},null,null)),o["\u0275ppd"](8,1),(n()(),o["\u0275eld"](9,0,[[1,0],["fileInput",1]],0,0,"input",[["accept","image/*"],["hidden",""],["name","pic"],["type","file"]],null,[[null,"change"]],function(n,e,t){var o=!0;return"change"===e&&(o=!1!==n.component.fileUpload()&&o),o},null,null)),(n()(),o["\u0275eld"](10,0,null,0,90,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,e,t){var l=!0,i=n.component;return"submit"===e&&(l=!1!==o["\u0275nov"](n,12).onSubmit(t)&&l),"reset"===e&&(l=!1!==o["\u0275nov"](n,12).onReset()&&l),"ngSubmit"===e&&(l=!1!==i.guardar()&&l),l},null,null)),o["\u0275did"](11,16384,null,0,c.o,[],null,null),o["\u0275did"](12,4210688,[["form",4]],0,c.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,c.a,null,[c.j]),o["\u0275did"](14,16384,null,0,c.i,[[4,c.a]],null,null),(n()(),o["\u0275eld"](15,0,null,null,85,"ion-grid",[],null,null,null,l.eb,l.p)),o["\u0275did"](16,49152,null,0,i.B,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](17,0,null,0,83,"ion-row",[["justify-content-center",""]],null,null,null,l.wb,l.H)),o["\u0275did"](18,49152,null,0,i.jb,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](19,0,null,0,81,"ion-col",[["align-self-center",""],["size-lg","10"],["size-md","10"],["size-xs","12"]],null,null,null,l.ab,l.l)),o["\u0275did"](20,49152,null,0,i.u,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](21,0,null,0,13,"ion-item",[],null,null,null,l.mb,l.u)),o["\u0275did"](22,49152,null,0,i.I,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](23,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,l.nb,l.y)),o["\u0275did"](24,49152,null,0,i.O,[o.ChangeDetectorRef,o.ElementRef],{position:[0,"position"]},null),(n()(),o["\u0275ted"](-1,0,["Nombre"])),(n()(),o["\u0275eld"](26,0,null,0,8,"ion-input",[["name","nombre"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,e,t){var l=!0,i=n.component;return"ionBlur"===e&&(l=!1!==o["\u0275nov"](n,29)._handleBlurEvent()&&l),"ionChange"===e&&(l=!1!==o["\u0275nov"](n,29)._handleInputEvent(t.target.value)&&l),"ngModelChange"===e&&(l=!1!==(i.Pro_producto.nombre=t)&&l),l},l.ib,l.t)),o["\u0275did"](27,16384,null,0,c.m,[],{required:[0,"required"]},null),o["\u0275prd"](1024,null,c.e,function(n){return[n]},[c.m]),o["\u0275did"](29,16384,null,0,i.Ob,[o.ElementRef],null,null),o["\u0275prd"](1024,null,c.f,function(n){return[n]},[i.Ob]),o["\u0275did"](31,671744,null,0,c.k,[[2,c.a],[6,c.e],[8,null],[6,c.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,c.g,null,[c.k]),o["\u0275did"](33,16384,null,0,c.h,[[4,c.g]],null,null),o["\u0275did"](34,49152,null,0,i.H,[o.ChangeDetectorRef,o.ElementRef],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(n()(),o["\u0275eld"](35,0,null,0,14,"ion-item",[],null,null,null,l.mb,l.u)),o["\u0275did"](36,49152,null,0,i.I,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](37,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,l.nb,l.y)),o["\u0275did"](38,49152,null,0,i.O,[o.ChangeDetectorRef,o.ElementRef],{position:[0,"position"]},null),(n()(),o["\u0275ted"](-1,0,["Codigo de Producto"])),(n()(),o["\u0275eld"](40,0,null,0,8,"ion-input",[["name","codigo"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,e,t){var l=!0,i=n.component;return"ionBlur"===e&&(l=!1!==o["\u0275nov"](n,43)._handleBlurEvent()&&l),"ionChange"===e&&(l=!1!==o["\u0275nov"](n,43)._handleInputEvent(t.target.value)&&l),"ngModelChange"===e&&(l=!1!==(i.Pro_producto.codigo=t)&&l),l},l.ib,l.t)),o["\u0275did"](41,16384,null,0,c.m,[],{required:[0,"required"]},null),o["\u0275prd"](1024,null,c.e,function(n){return[n]},[c.m]),o["\u0275did"](43,16384,null,0,i.Ob,[o.ElementRef],null,null),o["\u0275prd"](1024,null,c.f,function(n){return[n]},[i.Ob]),o["\u0275did"](45,671744,null,0,c.k,[[2,c.a],[6,c.e],[8,null],[6,c.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,c.g,null,[c.k]),o["\u0275did"](47,16384,null,0,c.h,[[4,c.g]],null,null),o["\u0275did"](48,49152,null,0,i.H,[o.ChangeDetectorRef,o.ElementRef],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(n()(),o["\u0275eld"](49,0,null,0,0,"img",[["alt","leerQR"],["class","buttonScanner"],["slot","end"],["src","assets/img/barcode.png"],["text-center",""]],null,[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.barCodeScanner()&&o),o},null,null)),(n()(),o["\u0275eld"](50,0,null,0,11,"ion-item",[],null,null,null,l.mb,l.u)),o["\u0275did"](51,49152,null,0,i.I,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](52,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,l.nb,l.y)),o["\u0275did"](53,49152,null,0,i.O,[o.ChangeDetectorRef,o.ElementRef],{position:[0,"position"]},null),(n()(),o["\u0275ted"](-1,0,["Descripcion (Opcional)"])),(n()(),o["\u0275eld"](55,0,null,0,6,"ion-input",[["name","descripcion"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,e,t){var l=!0,i=n.component;return"ionBlur"===e&&(l=!1!==o["\u0275nov"](n,56)._handleBlurEvent()&&l),"ionChange"===e&&(l=!1!==o["\u0275nov"](n,56)._handleInputEvent(t.target.value)&&l),"ngModelChange"===e&&(l=!1!==(i.Pro_producto.descripcion=t)&&l),l},l.ib,l.t)),o["\u0275did"](56,16384,null,0,i.Ob,[o.ElementRef],null,null),o["\u0275prd"](1024,null,c.f,function(n){return[n]},[i.Ob]),o["\u0275did"](58,671744,null,0,c.k,[[2,c.a],[8,null],[8,null],[6,c.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,c.g,null,[c.k]),o["\u0275did"](60,16384,null,0,c.h,[[4,c.g]],null,null),o["\u0275did"](61,49152,null,0,i.H,[o.ChangeDetectorRef,o.ElementRef],{name:[0,"name"],type:[1,"type"]},null),(n()(),o["\u0275eld"](62,0,null,0,13,"ion-item",[],null,null,null,l.mb,l.u)),o["\u0275did"](63,49152,null,0,i.I,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](64,0,null,0,2,"ion-label",[],null,null,null,l.nb,l.y)),o["\u0275did"](65,49152,null,0,i.O,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275ted"](-1,0,["Tipo de Consumo"])),(n()(),o["\u0275eld"](67,0,null,0,8,"ion-select",[["name","consumo"],["placeholder","Seleccione un tipo"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,e,t){var l=!0,i=n.component;return"ionBlur"===e&&(l=!1!==o["\u0275nov"](n,68)._handleBlurEvent()&&l),"ionChange"===e&&(l=!1!==o["\u0275nov"](n,68)._handleChangeEvent(t.target.value)&&l),"ngModelChange"===e&&(l=!1!==(i.id_consumo=t)&&l),"ionChange"===e&&(l=!1!==i.consumoGet(t)&&l),l},l.Ab,l.K)),o["\u0275did"](68,16384,null,0,i.Nb,[o.ElementRef],null,null),o["\u0275prd"](1024,null,c.f,function(n){return[n]},[i.Nb]),o["\u0275did"](70,671744,null,0,c.k,[[2,c.a],[8,null],[8,null],[6,c.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,c.g,null,[c.k]),o["\u0275did"](72,16384,null,0,c.h,[[4,c.g]],null,null),o["\u0275did"](73,49152,null,0,i.nb,[o.ChangeDetectorRef,o.ElementRef],{placeholder:[0,"placeholder"],name:[1,"name"]},null),(n()(),o["\u0275and"](16777216,null,0,1,null,C)),o["\u0275did"](75,278528,null,0,d.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),o["\u0275eld"](76,0,null,0,13,"ion-item",[],null,null,null,l.mb,l.u)),o["\u0275did"](77,49152,null,0,i.I,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](78,0,null,0,2,"ion-label",[],null,null,null,l.nb,l.y)),o["\u0275did"](79,49152,null,0,i.O,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275ted"](-1,0,["Categorias"])),(n()(),o["\u0275eld"](81,0,null,0,8,"ion-select",[["name","categoria"],["placeholder","Seleccione una"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,e,t){var l=!0,i=n.component;return"ionBlur"===e&&(l=!1!==o["\u0275nov"](n,82)._handleBlurEvent()&&l),"ionChange"===e&&(l=!1!==o["\u0275nov"](n,82)._handleChangeEvent(t.target.value)&&l),"ngModelChange"===e&&(l=!1!==(i.id_categoria=t)&&l),"ionChange"===e&&(l=!1!==i.categroriaGet(t)&&l),l},l.Ab,l.K)),o["\u0275did"](82,16384,null,0,i.Nb,[o.ElementRef],null,null),o["\u0275prd"](1024,null,c.f,function(n){return[n]},[i.Nb]),o["\u0275did"](84,671744,null,0,c.k,[[2,c.a],[8,null],[8,null],[6,c.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,c.g,null,[c.k]),o["\u0275did"](86,16384,null,0,c.h,[[4,c.g]],null,null),o["\u0275did"](87,49152,null,0,i.nb,[o.ChangeDetectorRef,o.ElementRef],{placeholder:[0,"placeholder"],name:[1,"name"]},null),(n()(),o["\u0275and"](16777216,null,0,1,null,_)),o["\u0275did"](89,278528,null,0,d.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),o["\u0275eld"](90,0,null,0,10,"div",[["padding",""]],null,null,null,null,null)),(n()(),o["\u0275eld"](91,0,null,null,4,"ion-button",[["expand","block"],["shape","round"],["size","default"],["type","submit"]],null,null,null,l.T,l.e)),o["\u0275did"](92,49152,null,0,i.l,[o.ChangeDetectorRef,o.ElementRef],{disabled:[0,"disabled"],expand:[1,"expand"],shape:[2,"shape"],size:[3,"size"],type:[4,"type"]},null),(n()(),o["\u0275ted"](-1,0,["Guardar "])),(n()(),o["\u0275eld"](94,0,null,0,1,"ion-icon",[["name","save"],["slot","end"]],null,null,null,l.gb,l.r)),o["\u0275did"](95,49152,null,0,i.D,[o.ChangeDetectorRef,o.ElementRef],{name:[0,"name"]},null),(n()(),o["\u0275eld"](96,0,null,null,4,"ion-button",[["color","medium"],["expand","block"],["shape","round"],["size","default"]],null,[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.Salir()&&o),o},l.T,l.e)),o["\u0275did"](97,49152,null,0,i.l,[o.ChangeDetectorRef,o.ElementRef],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"],size:[3,"size"]},null),(n()(),o["\u0275ted"](-1,0,["Cancelar "])),(n()(),o["\u0275eld"](99,0,null,0,1,"ion-icon",[["name","exit"],["slot","end"]],null,null,null,l.gb,l.r)),o["\u0275did"](100,49152,null,0,i.D,[o.ChangeDetectorRef,o.ElementRef],{name:[0,"name"]},null)],function(n,e){var t=e.component;n(e,3,0,"Nuevo Producto"),n(e,24,0,"floating"),n(e,27,0,""),n(e,31,0,"nombre",t.Pro_producto.nombre),n(e,34,0,"nombre","","text"),n(e,38,0,"floating"),n(e,41,0,""),n(e,45,0,"codigo",t.Pro_producto.codigo),n(e,48,0,"codigo","","text"),n(e,53,0,"floating"),n(e,58,0,"descripcion",t.Pro_producto.descripcion),n(e,61,0,"descripcion","text"),n(e,70,0,"consumo",t.id_consumo),n(e,73,0,"Seleccione un tipo","consumo"),n(e,75,0,t.tiposConsumo),n(e,84,0,"categoria",t.id_categoria),n(e,87,0,"Seleccione una","categoria"),n(e,89,0,t.categorias),n(e,92,0,o["\u0275nov"](e,12).invalid,"block","round","default","submit"),n(e,95,0,"save"),n(e,97,0,"medium","block","round","default"),n(e,100,0,"exit")},function(n,e){var t=e.component,l=o["\u0275unv"](e,7,0,n(e,8,0,o["\u0275nov"](e,0),t.Pro_producto.foto[1]));n(e,7,0,l),n(e,10,0,o["\u0275nov"](e,14).ngClassUntouched,o["\u0275nov"](e,14).ngClassTouched,o["\u0275nov"](e,14).ngClassPristine,o["\u0275nov"](e,14).ngClassDirty,o["\u0275nov"](e,14).ngClassValid,o["\u0275nov"](e,14).ngClassInvalid,o["\u0275nov"](e,14).ngClassPending),n(e,26,0,o["\u0275nov"](e,27).required?"":null,o["\u0275nov"](e,33).ngClassUntouched,o["\u0275nov"](e,33).ngClassTouched,o["\u0275nov"](e,33).ngClassPristine,o["\u0275nov"](e,33).ngClassDirty,o["\u0275nov"](e,33).ngClassValid,o["\u0275nov"](e,33).ngClassInvalid,o["\u0275nov"](e,33).ngClassPending),n(e,40,0,o["\u0275nov"](e,41).required?"":null,o["\u0275nov"](e,47).ngClassUntouched,o["\u0275nov"](e,47).ngClassTouched,o["\u0275nov"](e,47).ngClassPristine,o["\u0275nov"](e,47).ngClassDirty,o["\u0275nov"](e,47).ngClassValid,o["\u0275nov"](e,47).ngClassInvalid,o["\u0275nov"](e,47).ngClassPending),n(e,55,0,o["\u0275nov"](e,60).ngClassUntouched,o["\u0275nov"](e,60).ngClassTouched,o["\u0275nov"](e,60).ngClassPristine,o["\u0275nov"](e,60).ngClassDirty,o["\u0275nov"](e,60).ngClassValid,o["\u0275nov"](e,60).ngClassInvalid,o["\u0275nov"](e,60).ngClassPending),n(e,67,0,o["\u0275nov"](e,72).ngClassUntouched,o["\u0275nov"](e,72).ngClassTouched,o["\u0275nov"](e,72).ngClassPristine,o["\u0275nov"](e,72).ngClassDirty,o["\u0275nov"](e,72).ngClassValid,o["\u0275nov"](e,72).ngClassInvalid,o["\u0275nov"](e,72).ngClassPending),n(e,81,0,o["\u0275nov"](e,86).ngClassUntouched,o["\u0275nov"](e,86).ngClassTouched,o["\u0275nov"](e,86).ngClassPristine,o["\u0275nov"](e,86).ngClassDirty,o["\u0275nov"](e,86).ngClassValid,o["\u0275nov"](e,86).ngClassInvalid,o["\u0275nov"](e,86).ngClassPending)})}function y(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-nuevo-producto",[],null,null,null,P,b)),o["\u0275did"](1,114688,null,0,p.a,[g.a,i.a,h.a,f.a,m.a,v.b,i.Hb,i.Gb],null,null)],function(n,e){n(e,1,0)},null)}var w=o["\u0275ccf"]("app-nuevo-producto",p.a,y,{},{},[])},w2TK:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var o=t("mrSG"),l=(t("Pn9U"),t("ZZ/e"),t("9Xff")),i=(t("zA0m"),t("0fld"),t("TvpC"),function(){function n(n,e,t,o,l,i,u,r){this.camera=n,this.actionSheetController=e,this.barcodeScanner=t,this.Pro_productos=o,this.Pro_categorias=l,this.storage=i,this.modalController=u,this.loadingController=r,this.Pro_producto={foto:["assets/nuevo/camera.png","assets/nuevo/camera.png"],nombre:null,codigo:null,descripcion:null,id_categoria:null,id_tipo_consumo:null},this.categorias=[],this.tiposConsumo=[],this.id_consumo=1,this.isLoading=!1}return n.prototype.ngOnInit=function(){var n=this;this.storage.get("token").then(function(e){return o.b(n,void 0,void 0,function(){var n=this;return o.e(this,function(t){return this.Pro_categorias.obtenerCategorias(e).subscribe(function(e){n.categorias=e}),this.Pro_productos.getTiposConsumo(e).subscribe(function(e){n.tiposConsumo=e}),[2]})})})},n.prototype.barCodeScanner=function(){var n=this;this.barcodeScanner.scan().then(function(e){n.Pro_producto.codigo=e.text}).catch(function(n){console.log("Error",n)})},n.prototype.take=function(){var n=this;this.camera.getPicture({quality:20,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,correctOrientation:!0,sourceType:this.camera.PictureSourceType.CAMERA}).then(function(e){var t=window.Ionic.WebView.convertFileSrc(e);n.Pro_producto.foto=[],n.Pro_producto.foto.push(e),n.Pro_producto.foto.push(t)})},n.prototype.loadImage=function(){var n=this;this.camera.getPicture({quality:20,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,correctOrientation:!0,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY}).then(function(e){n.Pro_producto.foto=[];var t=window.Ionic.WebView.convertFileSrc(e);n.Pro_producto.foto.push(e),n.Pro_producto.foto.push(t)})},n.prototype.presentActionSheet=function(){return o.b(this,void 0,void 0,function(){var n,e=this;return o.e(this,function(t){switch(t.label){case 0:return l.c?[4,this.actionSheetController.create({header:"Imagen",buttons:[{text:"Fotografiar",handler:function(){e.take()}},{text:"Elegir",handler:function(){e.loadImage()}},{text:"Cancelar",icon:"close",role:"cancel",handler:function(){}}]})]:[3,3];case 1:return[4,t.sent().present()];case 2:return t.sent(),[3,5];case 3:return n=new MouseEvent("click",{bubbles:!1}),[4,this.el.nativeElement.dispatchEvent(n)];case 4:t.sent(),t.label=5;case 5:return[2]}})})},n.prototype.categroriaGet=function(n){return o.b(this,void 0,void 0,function(){return o.e(this,function(e){return this.Pro_producto.id_categoria=n.target.value,[2]})})},n.prototype.consumoGet=function(n){return o.b(this,void 0,void 0,function(){return o.e(this,function(e){return this.Pro_producto.id_tipo_consumo=n.target.value,[2]})})},n.prototype.fileUpload=function(){var n=this,e=new FileReader;e.readAsDataURL(this.el.nativeElement.files[0]),e.onload=function(t){n.Pro_producto.foto=[],n.Pro_producto.foto.push(e.result.toString()),n.Pro_producto.foto.push(e.result.toString())}},n.prototype.present=function(){return o.b(this,void 0,void 0,function(){var n=this;return o.e(this,function(e){switch(e.label){case 0:return this.isLoading=!0,[4,this.loadingController.create({duration:1e4}).then(function(e){e.present().then(function(){n.isLoading||e.dismiss().then(function(){return console.log("abort presenting")})})})];case 1:return[2,e.sent()]}})})},n.prototype.dismiss=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return this.isLoading=!1,[4,this.loadingController.dismiss().then(function(){return console.log("dismissed")})];case 1:return[2,n.sent()]}})})},n.prototype.guardar=function(){return o.b(this,void 0,void 0,function(){var n;return o.e(this,function(e){switch(e.label){case 0:return[4,this.present()];case 1:return e.sent(),this.Pro_producto.foto[0]="assets/nuevo/camera.png"!=this.Pro_producto.foto[0]?this.Pro_producto.foto[0]:null,l.c||(this.Pro_producto.foto[0]=this.el.nativeElement.files[0]),[4,this.Pro_productos.nuevoProducto(this.Pro_producto).catch(function(n){console.log(n)})];case 2:return n=e.sent(),[4,this.Pro_productos.subirImagen(this.Pro_producto.foto[0],n).catch(function(n){})];case 3:return e.sent(),[4,this.dismiss()];case 4:return e.sent(),this.modalController.dismiss({id_producto:n}),[2]}})})},n.prototype.Salir=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){return this.modalController.dismiss(),[2]})})},n}())}}]);