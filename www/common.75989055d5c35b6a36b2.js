(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+sC5":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this.titulo=""}return t.prototype.ngOnInit=function(){},t}()},"0fld":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("mrSG"),i=n("t/Na"),o=n("9Xff"),u=n("67Y/"),a=n("CcnG"),c=n("iw74"),s=function(){function t(t,e){this.Pro_http=t,this.storage=e}return t.prototype.nuevoProducto=function(t){return r.b(this,void 0,void 0,function(){var e,n;return r.e(this,function(r){switch(r.label){case 0:return e=new i.g(o.a),n={},[4,this.storage.get("token")];case 1:return n.token=r.sent(),n.nombre=t.nombre,n.descripcion=t.descripcion,n.codigobarra=t.codigo,n.id_categoria=t.id_categoria,n.fotografia=t.foto[0],[4,this.Pro_http.post(o.b+"api/productos/nuevoProducto",n,{headers:e}).toPromise()];case 2:return[2,r.sent()]}})})},t.prototype.updateProducto=function(t){return r.b(this,void 0,void 0,function(){var e,n;return r.e(this,function(r){switch(r.label){case 0:return e=new i.g(o.a),n={},[4,this.storage.get("token")];case 1:return n.token=r.sent(),n.id_producto=t.id_producto,n.nombre=t.nombre,n.descripcion=t.descripcion,n.codigobarra=t.codigo,n.id_categoria=t.id_categoria,n.fotografia=t.foto[0],[4,this.Pro_http.post(o.b+"api/productos/updateProducto",n,{headers:e}).toPromise()];case 2:return[2,r.sent()]}})})},t.prototype.listaProductos=function(t,e){var n=new i.g(o.a);return this.Pro_http.post(o.b+"api/productos/productosList",{id_servicio:e,token:t},{headers:n}).pipe(Object(u.a)(function(t){return t}))},t.prototype.inventarioList=function(t){var e=new i.g(o.a);return this.Pro_http.post(o.b+"api/productos/inventarioList",{token:t},{headers:e}).pipe(Object(u.a)(function(t){return t}))},t.prototype.inventarioListAsync=function(){return r.b(this,void 0,void 0,function(){var t,e;return r.e(this,function(n){switch(n.label){case 0:return t=new i.g(o.a),e={},[4,this.storage.get("token")];case 1:return e.token=n.sent(),[4,this.Pro_http.post(o.b+"api/productos/inventarioList",e,{headers:t}).toPromise()];case 2:return[2,n.sent()]}})})},t.prototype.deleteProducto=function(t){return r.b(this,void 0,void 0,function(){var e,n;return r.e(this,function(r){switch(r.label){case 0:return e=new i.g(o.a),n={},[4,this.storage.get("token")];case 1:return n.token=r.sent(),n.id_producto=t,[4,this.Pro_http.post(o.b+"api/productos/deleteProducto",n,{headers:e}).toPromise()];case 2:return[2,r.sent()]}})})},t.prototype.inventarioTransacciones=function(t,e){return r.b(this,void 0,void 0,function(){var n;return r.e(this,function(r){switch(r.label){case 0:return n=new i.g(o.a),[4,this.Pro_http.post(o.b+"api/productos/inventarioTransacciones",{id_producto:t,id_sucursal:e.id_sucursal},{headers:n}).toPromise()];case 1:return[2,r.sent()]}})})},t.prototype.getProducto=function(t){var e=new i.g(o.a);return this.Pro_http.post(o.b+"api/productos/getProducto",{id_producto:t},{headers:e}).pipe(Object(u.a)(function(t){return t}))},t.ngInjectableDef=a.defineInjectable({factory:function(){return new t(a.inject(i.c),a.inject(c.b))},token:t,providedIn:"root"}),t}()},"3wVm":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("t/Na"),i=n("9Xff"),o=n("67Y/"),u=n("CcnG"),a=function(){function t(t){this.Pro_http=t}return t.prototype.login=function(t,e){var n=new r.g(i.a);return this.Pro_http.post(i.b+"api/usuarios/login",{usuario:t,password:e},{headers:n}).pipe(Object(o.a)(function(t){return t}))},t.prototype.confirmarCelular=function(t){var e=new r.g(i.a);return this.Pro_http.post(i.b+"api/usuarios/validaCelular",{celular:t},{headers:e}).pipe(Object(o.a)(function(t){return t}))},t.prototype.cambiarPassword=function(t,e){var n=new r.g(i.a);return this.Pro_http.post(i.b+"api/usuarios/cambiarPassword",{id_usuario:t,password:e},{headers:n}).pipe(Object(o.a)(function(t){return t}))},t.prototype.getUsuariosList=function(t,e){var n=new r.g(i.a);return this.Pro_http.post(i.b+"api/usuarios/usuariosList",{token:t,id_sucursal:e},{headers:n}).pipe(Object(o.a)(function(t){return t}))},t.ngInjectableDef=u.defineInjectable({factory:function(){return new t(u.inject(r.c))},token:t,providedIn:"root"}),t}()},"6rJV":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("mrSG"),i=n("t/Na"),o=n("9Xff"),u=n("67Y/"),a=n("CcnG"),c=n("iw74"),s=function(){function t(t,e){this.Pro_http=t,this.storage=e}return t.prototype.serviciosList=function(t){var e=new i.g(o.a);return this.Pro_http.post(o.b+"api/servicios/serviciosList",{token:t},{headers:e}).pipe(Object(u.a)(function(t){return t}))},t.prototype.serviciosListAsync=function(){return r.b(this,void 0,void 0,function(){var t,e;return r.e(this,function(n){switch(n.label){case 0:return t=new i.g(o.a),e={},[4,this.storage.get("token")];case 1:return e.token=n.sent(),[4,this.Pro_http.post(o.b+"api/servicios/serviciosList",e,{headers:t}).toPromise()];case 2:return[2,n.sent()]}})})},t.prototype.servicioDetalle=function(t){var e=new i.g(o.a);return this.Pro_http.post(o.b+"api/servicios/serviciosDetalle",{id_servicio:t},{headers:e}).pipe(Object(u.a)(function(t){return t}))},t.prototype.updateProductos=function(t,e){return r.b(this,void 0,void 0,function(){var n;return r.e(this,function(r){switch(r.label){case 0:return n=new i.g(o.a),[4,this.Pro_http.post(o.b+"api/servicios/updateProductosServicios",{id_servicio:t,productos:e},{headers:n}).toPromise()];case 1:return[2,r.sent()]}})})},t.prototype.updateNombre=function(t,e,n){return r.b(this,void 0,void 0,function(){var u;return r.e(this,function(r){switch(r.label){case 0:return u=new i.g(o.a),[4,this.Pro_http.post(o.b+"api/servicios/updateNombre",{id_servicio:t,accion:e,descripcion:n},{headers:u}).toPromise()];case 1:return[2,r.sent()]}})})},t.prototype.insertServicio=function(t){return r.b(this,void 0,void 0,function(){var e,n;return r.e(this,function(r){switch(r.label){case 0:return e=new i.g(o.a),n={},[4,this.storage.get("token")];case 1:return n.token=r.sent(),n.nombre=t,[2,this.Pro_http.post(o.b+"api/servicios/insertServicio",n,{headers:e}).toPromise()]}})})},t.prototype.updateServicio=function(){var t=new i.g(o.a);return this.Pro_http.post(o.b+"api/servicios/updateServicio",{token:"",nombre:"",id_servicio:1,productos:[{id_producto:1,id_servicio:1,id_accion:1}]},{headers:t}).pipe(Object(u.a)(function(t){return t}))},t.prototype.deleteServicio=function(){var t=new i.g(o.a);return this.Pro_http.post(o.b+"api/servicios/deleteServicio",{token:"",id_servicio:1},{headers:t}).pipe(Object(u.a)(function(t){return t}))},t.ngInjectableDef=a.defineInjectable({factory:function(){return new t(a.inject(i.c),a.inject(c.b))},token:t,providedIn:"root"}),t}()},"7G/b":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this.titulo=""}return t.prototype.ngOnInit=function(){},t}()},"7ut9":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("mrSG"),i=n("t/Na"),o=n("9Xff"),u=n("67Y/"),a=n("CcnG"),c=n("iw74"),s=function(){function t(t,e){this.Pro_http=t,this.storage=e}return t.prototype.obtenerSucursales=function(t){var e=new i.g(o.a);return this.Pro_http.post(o.b+"api/sucursales/sucursalesList",{token:t},{headers:e}).pipe(Object(u.a)(function(t){return t}))},t.prototype.obtenerSucursalesAsync=function(){return r.b(this,void 0,void 0,function(){var t,e;return r.e(this,function(n){switch(n.label){case 0:return t=new i.g(o.a),e={},[4,this.storage.get("token")];case 1:return e.token=n.sent(),[2,this.Pro_http.post(o.b+"api/sucursales/sucursalesList",e,{headers:t}).toPromise()]}})})},t.prototype.InserUpdateDeleteSucursal=function(t,e,n,u){return r.b(this,void 0,void 0,function(){var a,c;return r.e(this,function(r){switch(r.label){case 0:return a=new i.g(o.a),c={},[4,this.storage.get("token")];case 1:return c.token=r.sent(),c.id_sucursal=t,c.nombre=e,c.nombre_corto=n,c.accion=u,[4,this.Pro_http.post(o.b+"api/sucursales/insertUpdateDeleteSucursales",c,{headers:a}).toPromise()];case 2:return[2,r.sent()]}})})},t.prototype.obtenerSucursalSeleccionda=function(t){var e=new i.g(o.a);return this.Pro_http.post(o.b+"api/sucursales/obtenerSucursalSeleccionada",{token:t},{headers:e}).pipe(Object(u.a)(function(t){return t}))},t.prototype.obtenerSucursalSelecciondaAsync=function(){return r.b(this,void 0,void 0,function(){var t,e;return r.e(this,function(n){switch(n.label){case 0:return t=new i.g(o.a),e={},[4,this.storage.get("token")];case 1:return e.token=n.sent(),[4,this.Pro_http.post(o.b+"api/sucursales/obtenerSucursalSeleccionada",e,{headers:t}).toPromise()];case 2:return[2,n.sent()]}})})},t.prototype.sucursalesListUsuario=function(){return r.b(this,void 0,void 0,function(){var t,e;return r.e(this,function(n){switch(n.label){case 0:return t=new i.g(o.a),e={},[4,this.storage.get("token")];case 1:return e.token=n.sent(),[2,this.Pro_http.post(o.b+"api/sucursales/sucursalesListUsuario",e,{headers:t}).toPromise()]}})})},t.prototype.insertSucursalUsuario=function(t,e){return r.b(this,void 0,void 0,function(){var n;return r.e(this,function(r){return n=new i.g(o.a),[2,this.Pro_http.post(o.b+"api/sucursales/sucursalesInsertUsuarios",{usuarios:t,id_sucursal:e},{headers:n}).toPromise()]})})},t.prototype.updateSucursalSeleccionda=function(t){return r.b(this,void 0,void 0,function(){var e,n;return r.e(this,function(r){switch(r.label){case 0:return e=new i.g(o.a),n={},[4,this.storage.get("token")];case 1:return n.token=r.sent(),n.id_sucursal=t,[4,this.Pro_http.post(o.b+"api/sucursales/updateSucursalSeleccionada",n,{headers:e}).toPromise()];case 2:return[2,r.sent()]}})})},t.ngInjectableDef=a.defineInjectable({factory:function(){return new t(a.inject(i.c),a.inject(c.b))},token:t,providedIn:"root"}),t}()},"8Ueg":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("CcnG"),i=(n("15PL"),n("p4DR"),n("wrqk"),r["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function o(t){return r["\u0275vid"](0,[],null,null)}},B5Ai:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return u});var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e,n,r){return new(n||(n=Promise))(function(i,o){function u(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(u,a)}c((r=r.apply(t,e||[])).next())})}function u(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}},DQ87:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return p}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return f}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return a});var r=n("B5Ai"),i=0;function o(t,e){var n=t.ownerDocument;(function(t){0===i&&(i=1,t.addEventListener("focusin",function(e){var n=a(t);if(n&&n.backdropDismiss&&!function(t,e){for(;e;){if(e===t)return!0;e=e.parentElement}return!1}(n,e.target)){var r=n.querySelector("input,button");r&&r.focus()}}),t.addEventListener("ionBackButton",function(e){var n=a(t);n&&n.backdropDismiss&&e.detail.register(100,function(){return n.dismiss(void 0,h)})}),t.addEventListener("keyup",function(e){if("Escape"===e.key){var n=a(t);n&&n.backdropDismiss&&n.dismiss(void 0,h)}}))})(n),Object.assign(t,e),t.classList.add("overlay-hidden");var r=i++;return t.overlayIndex=r,t.hasAttribute("id")||(t.id="ion-overlay-"+r),l(n).appendChild(t),t.componentOnReady()}function u(t,e,n,r,i){var o=a(t,r,i);return o?o.dismiss(e,n):Promise.reject("overlay does not exist")}function a(t,e,n){var r=function(t,e){var n=Array.from(l(t).children).filter(function(t){return t.overlayIndex>0});return void 0===e?n:(e=e.toUpperCase(),n.filter(function(t){return t.tagName===e}))}(t,e);return void 0===n?r[r.length-1]:r.find(function(t){return t.id===n})}function c(t,e,n,i,o){return r.a(this,void 0,void 0,function(){var u;return r.c(this,function(r){switch(r.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),u=t.enterAnimation?t.enterAnimation:t.config.get(e,"ios"===t.mode?n:i),[4,d(t,u,t.el,o)]);case 1:return r.sent()&&t.didPresent.emit(),[2]}})})}function s(t,e,n,i,o,u,a){return r.a(this,void 0,void 0,function(){var c,s;return r.c(this,function(r){switch(r.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),t.willDismiss.emit({data:e,role:n}),c=t.leaveAnimation?t.leaveAnimation:t.config.get(i,"ios"===t.mode?o:u),[4,d(t,c,t.el,a)];case 2:return r.sent(),t.didDismiss.emit({data:e,role:n}),[3,4];case 3:return s=r.sent(),console.error(s),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function l(t){return t.querySelector("ion-app")||t.body}function d(t,e,i,o){return r.a(this,void 0,void 0,function(){var u,a,c,s;return r.c(this,function(r){switch(r.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),u=i.shadowRoot||t.el,c=t,[4,n.e(2).then(n.bind(null,"ohUv")).then(function(t){return t.create(e,u,o)})]);case 1:return a=c.animation=r.sent(),t.animation=a,t.animated&&t.config.getBoolean("animated",!0)||a.duration(0),t.keyboardClose&&a.beforeAddWrite(function(){var t=i.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,a.playAsync()];case 2:return r.sent(),s=a.hasCompleted,a.destroy(),t.animation=void 0,[2,s]}})})}function f(t,e){var n,r=new Promise(function(t){return n=t});return function(t,e,n){var r=function(i){t.removeEventListener(e,r),n(i)};t.addEventListener(e,r)}(t,e,function(t){n(t.detail)}),r}function p(t){return"cancel"===t||t===h}var h="backdrop"},JvIM:function(t,e,n){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function u(t,e,n,r,o){if(t||i(e)){var u=e.querySelector("input.aux-input");u||((u=e.ownerDocument.createElement("input")).type="hidden",u.classList.add("aux-input"),e.appendChild(u)),u.disabled=o,u.name=n,u.value=r||""}}function a(t,e,n){return Math.max(t,Math.min(e,n))}function c(t){return t.timeStamp||Date.now()}function s(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,e){var n=t._original||t;return{_original:t,emit:f(n.emit.bind(n),e)}}function f(t,e){var n;return void 0===e&&(e=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(r))}}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return u}),n.d(e,"f",function(){return d}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return a}),n.d(e,"i",function(){return f}),n.d(e,"j",function(){return s})},Mc8v:function(t,e,n){"use strict";var r=n("CcnG"),i=n("oBZk"),o=n("ZZ/e");n("7G/b"),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a});var u=r["\u0275crt"]({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin-right:10%;width:10px;height:10px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.2em!important}"]],data:{}});function a(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,8,"ion-header",[["no-border",""]],null,null,null,i.U,i.m)),r["\u0275did"](1,49152,null,0,o.C,[r.ChangeDetectorRef,r.ElementRef],null,null),(t()(),r["\u0275eld"](2,0,null,0,6,"ion-toolbar",[["color","primary"]],null,null,null,i.pb,i.H)),r["\u0275did"](3,49152,null,0,o.Cb,[r.ChangeDetectorRef,r.ElementRef],{color:[0,"color"]},null),(t()(),r["\u0275eld"](4,0,null,0,4,"ion-item",[["color","primary"],["lines","none"],["text-center",""]],null,null,null,i.bb,i.q)),r["\u0275did"](5,49152,null,0,o.I,[r.ChangeDetectorRef,r.ElementRef],{color:[0,"color"],lines:[1,"lines"]},null),(t()(),r["\u0275eld"](6,0,null,0,2,"ion-label",[],null,null,null,i.cb,i.u)),r["\u0275did"](7,49152,null,0,o.O,[r.ChangeDetectorRef,r.ElementRef],null,null),(t()(),r["\u0275ted"](8,0,["",""]))],function(t,e){t(e,3,0,"primary"),t(e,5,0,"primary","none")},function(t,e){t(e,8,0,e.component.titulo)})}},R5Yi:function(t,e,n){"use strict";n.r(e),n.d(e,"createGesture",function(){return f}),n.d(e,"GESTURE_CONTROLLER",function(){return c});var r,i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new u(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===n){this.capturedId=e,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(a)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(a)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,e,n,r,i){this.id=e,this.name=n,this.disableScroll=i,this.priority=1e6*r+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),u=function(){function t(t,e,n,r){this.id=e,this.disable=n,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),a="backdrop-no-scroll",c=new i(document);function s(t,e,n,i){var o,u,a=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){r=!1}return!!r}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",u="__zone_symbol__removeEventListener"):(o="addEventListener",u="removeEventListener"),t[o](e,n,a),function(){t[u](e,n,a)}}var l=2e3;function d(t){return t instanceof Document?t:t.ownerDocument}function f(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=e.canStart,r=e.onWillStart,i=e.onStart,o=e.onEnd,u=e.notCaptured,a=e.onMove,f=e.threshold,b=e.queue,m={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},g=function(t,e,n,r,i){var o,u,a,c,f,p,h,v=0;function b(r){v=Date.now()+l,e(r)&&(!u&&n&&(u=s(t,"touchmove",n,i)),a||(a=s(t,"touchend",g,i)),c||(c=s(t,"touchcancel",g,i)))}function m(r){v>Date.now()||e(r)&&(!p&&n&&(p=s(d(t),"mousemove",n,i)),h||(h=s(d(t),"mouseup",y,i)))}function g(t){w(),r&&r(t)}function y(t){P(),r&&r(t)}function w(){u&&u(),a&&a(),c&&c(),u=a=c=void 0}function P(){p&&p(),h&&h(),p=h=void 0}function _(){w(),P()}function S(e){e?(o&&o(),f&&f(),o=f=void 0,_()):(o||(o=s(t,"touchstart",b,i)),f||(f=s(t,"mousedown",m,i)))}return{setDisabled:S,stop:_,destroy:function(){S(!0),r=n=e=void 0}}}(e.el,function(t){var e=v(t);return!(_||!S)&&(h(t,m),m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp=e,m.velocityX=m.velocityY=m.deltaX=m.deltaY=0,m.event=t,(!n||!1!==n(m))&&(w.release(),!!w.start()&&(_=!0,0===f?E():(y.start(m.startX,m.startY),!0))))},function(t){P?!k&&S&&(k=!0,p(m,t),b.write(C)):(p(m,t),y.detect(m.currentX,m.currentY)&&(y.isGesture()&&E()||(O(),g.stop(),u&&u(m))))},L,{capture:!1}),y=function(t,e,n){var r=n*(Math.PI/180),i="x"===t,o=Math.cos(r),u=e*e,a=0,c=0,s=!1,l=0;return{start:function(t,e){a=t,c=e,l=0,s=!0},detect:function(t,e){if(!s)return!1;var n=t-a,r=e-c,d=n*n+r*r;if(d<u)return!1;var f=Math.sqrt(d),p=(i?n:r)/f;return l=p>o?1:p<-o?-1:0,s=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(e.direction,e.threshold,e.maxAngle),w=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),P=!1,_=!1,S=!0,k=!1;function C(){P&&(k=!1,a&&a(m))}function E(){return!(w&&!w.capture()||(P=!0,S=!1,m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp,r?r(m).then(D):D(),0))}function D(){i&&i(m),S=!0}function O(){P=!1,_=!1,k=!1,S=!0,w.release()}function L(t){var e=P,n=S;O(),n&&(p(m,t),e?o&&o(m):u&&u(m))}return{setDisabled:function(t){t&&P&&L(void 0),g.setDisabled(t)},destroy:function(){w.destroy(),g.destroy()}}}function p(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.timeStamp;h(e,t);var o=t.currentX,u=t.currentY,a=(t.timeStamp=v(e))-i;if(a>0&&a<100){var c=(u-r)/a;t.velocityX=(o-n)/a*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=u-t.startY,t.event=e}}function h(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r}function v(t){return t.timeStamp||Date.now()}},TvpC:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("mrSG"),i=n("t/Na"),o=n("9Xff"),u=n("67Y/"),a=n("CcnG"),c=n("iw74"),s=function(){function t(t,e){this.Pro_http=t,this.storage=e}return t.prototype.obtenerCategorias=function(t){var e=new i.g(o.a);return this.Pro_http.post(o.b+"api/categorias/categoriasList",{token:t},{headers:e}).pipe(Object(u.a)(function(t){return t}))},t.prototype.obtenerCategoriasAsync=function(){return r.b(this,void 0,void 0,function(){var t,e;return r.e(this,function(n){switch(n.label){case 0:return t=new i.g(o.a),e={},[4,this.storage.get("token")];case 1:return e.token=n.sent(),[2,this.Pro_http.post(o.b+"api/categorias/categoriasList",e,{headers:t}).toPromise()]}})})},t.prototype.InsertUpdateDeleteCategoria=function(t,e,n){return r.b(this,void 0,void 0,function(){var u,a;return r.e(this,function(r){switch(r.label){case 0:return u=new i.g(o.a),a={},[4,this.storage.get("token")];case 1:return a.token=r.sent(),a.id_categoria=t,a.nombre=e,a.accion=n,[4,this.Pro_http.post(o.b+"api/categorias/insertUpdateDeleteCategoria",a,{headers:u}).toPromise()];case 2:return[2,r.sent()]}})})},t.ngInjectableDef=a.defineInjectable({factory:function(){return new t(a.inject(i.c),a.inject(c.b))},token:t,providedIn:"root"}),t}()},Vppa:function(t,e){t.exports=function(t,e,n){void 0===e&&(e=500),void 0===n&&(n=500);var r=document.createElement("canvas"),i=r.getContext("2d"),o=document.createElement("canvas"),u=o.getContext("2d"),a=new Image;a.src=t;var c=1;return a.width>e?c=e/a.width:a.height>n&&(c=n/a.height),o.width=a.width,o.height=a.height,u.drawImage(a,0,0),r.width=a.width*c,r.height=a.height*c,i.drawImage(o,0,0,o.width,o.height,0,0,r.width,r.height),r.toDataURL()}},WmWN:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var u=n[r];u.parentNode?u.parentNode.removeChild(u):e.removeChild(u);for(var a=o(u),c=0;c<a.length;c++)i(a[c])}});for(var r=o(e),u=0;u<r.length;u++)i(r[u]);var c=document.createElement("div");c.appendChild(e);var s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(t){return console.error(t),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var n=t.attributes[e],r=n.name;if(u.includes(r.toLowerCase())){var a=n.value;null!=a&&a.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var c=o(t);for(e=0;e<c.length;e++)i(c[e])}},o=function(t){return null!=t.children?t.children:t.childNodes},u=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},awvO:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return a});var r="ionViewWillEnter",i="ionViewDidEnter",o="ionViewWillLeave",u="ionViewDidLeave",a="ionViewWillUnload"},cDAM:function(t,e,n){"use strict";n.d(e,"a",function(){return y}),n.d(e,"b",function(){return m}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return w});var r=n("B5Ai"),i=n("awvO"),o=function(){return n.e(66).then(n.bind(null,"rSHd"))},u=function(){return n.e(67).then(n.bind(null,"NJz6"))};function a(t){return new Promise(function(e,n){t.queue.write(function(){(function(t){var e=t.enteringEl,n=t.leavingEl;(function(t,e,n){void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")})(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),n&&w(n,!1)})(t),function(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return[4,s(t)];case 1:return[2,(e=n.sent())?l(e,t):d(t)]}})})}(t).then(function(n){n.animation&&n.animation.destroy(),c(t),e(n)},function(e){c(t),n(e)})})})}function c(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function s(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return e=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,u()];case 3:e=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,e]}})})}function l(t,e){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,f(e,!0)];case 1:return r.sent(),[4,n.e(2).then(n.bind(null,"ohUv")).then(function(n){return n.create(t,e.baseEl,e)})];case 2:return i=r.sent(),v(e.enteringEl,e.leavingEl),[4,h(i,e)];case 3:return r.sent(),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&b(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function d(t){return r.a(this,void 0,void 0,function(){var e,n;return r.c(this,function(r){switch(r.label){case 0:return e=t.enteringEl,n=t.leavingEl,[4,f(t,!1)];case 1:return r.sent(),v(e,n),b(e,n),[2,{hasCompleted:!0}]}})})}function f(t,e){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(r){switch(r.label){case 0:return n=(void 0!==t.deepWait?t.deepWait:e)?[y(t.enteringEl),y(t.leavingEl)]:[g(t.enteringEl),g(t.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,p(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function p(t,e){return r.a(this,void 0,void 0,function(){return r.c(this,function(n){switch(n.label){case 0:return t?[4,t(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function h(t,e){var n=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return n?(t.progressStart(),n(t)):t.play(),r}function v(t,e){m(e,i.a),m(t,i.b)}function b(t,e){m(t,i.c),m(e,i.d)}function m(t,e){if(t){var n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}}function g(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function y(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(y))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function w(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}},d6Vy:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i});var r=n("B5Ai");function i(t,e){return null!==e.closest(t)}function o(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function u(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var a=/^[a-z][a-z0-9+\-.]*:/;function c(t,e,n,i){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==e||"#"===e[0]||a.test(e)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(e,i)];case 2:return[2,!1]}})})}},jT1R:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("B5Ai");function i(t,e,n,i,o){return r.a(this,void 0,void 0,function(){var u;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,i&&i.forEach(function(t){return u.classList.add(t)}),o&&Object.assign(u,o),e.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}})})}function o(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},jmAt:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){return function(t){return i(t)}(t).indexOf(e)>-1},i=function(t){t.Ionic=t.Ionic||{};var e=t.Ionic.platforms;return null==e&&(e=t.Ionic.platforms=o(t)).forEach(function(e){return t.document.documentElement.classList.add("plt-"+e)}),e},o=function(t){return Object.keys(h).filter(function(e){return h[e](t)})},u=function(t){return f(t,/iPad/i)},a=function(t){return f(t,/android|sink/i)},c=function(t){return p(t,"(any-pointer:coarse)")},s=function(t){return l(t)||d(t)},l=function(t){return!!(t.cordova||t.phonegap||t.PhoneGap)},d=function(t){var e=t.Capacitor;return!(!e||!e.isNative)},f=function(t,e){return!(!t.navigator||!t.navigator.userAgent)&&e.test(t.navigator.userAgent)},p=function(t,e){return!!t.matchMedia&&t.matchMedia(e).matches},h={ipad:u,iphone:function(t){return f(t,/iPhone/i)},ios:function(t){return f(t,/iPad|iPhone|iPod/i)},android:a,phablet:function(t){var e=t.innerWidth,n=t.innerHeight,r=Math.min(e,n),i=Math.max(e,n);return r>390&&r<520&&i>620&&i<800},tablet:function(t){var e=t.innerWidth,n=t.innerHeight,r=Math.min(e,n),i=Math.max(e,n);return u(t)||function(t){return a(t)&&!f(t,/mobile/i)}(t)||r>460&&r<820&&i>780&&i<1400},cordova:l,capacitor:d,electron:function(t){return f(t,/electron/)},pwa:function(t){return!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)},mobile:c,mobileweb:function(t){return c(t)&&!s(t)},desktop:function(t){return!c(t)},hybrid:s}},njMu:function(t,e,n){"use strict";var r=n("CcnG"),i=n("oBZk"),o=n("ZZ/e");n("+sC5"),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a});var u=r["\u0275crt"]({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin-right:10%;width:10px;height:10px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.2em!important}"]],data:{}});function a(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,13,"ion-header",[["no-border",""]],null,null,null,i.U,i.m)),r["\u0275did"](1,49152,null,0,o.C,[r.ChangeDetectorRef,r.ElementRef],null,null),(t()(),r["\u0275eld"](2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,i.pb,i.H)),r["\u0275did"](3,49152,null,0,o.Cb,[r.ChangeDetectorRef,r.ElementRef],{color:[0,"color"]},null),(t()(),r["\u0275eld"](4,0,null,0,4,"ion-item",[["color","primary"],["lines","none"],["text-center",""]],null,null,null,i.bb,i.q)),r["\u0275did"](5,49152,null,0,o.I,[r.ChangeDetectorRef,r.ElementRef],{color:[0,"color"],lines:[1,"lines"]},null),(t()(),r["\u0275eld"](6,0,null,0,2,"ion-label",[],null,null,null,i.cb,i.u)),r["\u0275did"](7,49152,null,0,o.O,[r.ChangeDetectorRef,r.ElementRef],null,null),(t()(),r["\u0275ted"](8,0,["",""])),(t()(),r["\u0275eld"](9,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.M,i.e)),r["\u0275did"](10,49152,null,0,o.m,[r.ChangeDetectorRef,r.ElementRef],null,null),(t()(),r["\u0275eld"](11,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==r["\u0275nov"](t,13).onClick(n)&&i),i},i.K,i.c)),r["\u0275did"](12,49152,null,0,o.h,[r.ChangeDetectorRef,r.ElementRef],{defaultHref:[0,"defaultHref"]},null),r["\u0275did"](13,16384,null,0,o.i,[[2,o.ib],o.Ib],{defaultHref:[0,"defaultHref"]},null)],function(t,e){t(e,3,0,"primary"),t(e,5,0,"primary","none"),t(e,12,0,"home"),t(e,13,0,"home")},function(t,e){t(e,8,0,e.component.titulo)})}},ySCp:function(t,e,n){"use strict";function r(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function u(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return r})}}]);