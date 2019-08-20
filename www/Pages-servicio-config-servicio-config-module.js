(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-servicio-config-servicio-config-module"],{

/***/ "./src/app/Modals/productos-servicios/productos-servicios.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Modals/productos-servicios/productos-servicios.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProductosServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosServiciosPageModule", function() { return ProductosServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productos_servicios_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos-servicios.page */ "./src/app/Modals/productos-servicios/productos-servicios.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");







var ProductosServiciosPageModule = /** @class */ (function () {
    function ProductosServiciosPageModule() {
    }
    ProductosServiciosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_productos_servicios_page__WEBPACK_IMPORTED_MODULE_5__["ProductosServiciosPage"]],
            exports: []
        })
    ], ProductosServiciosPageModule);
    return ProductosServiciosPageModule;
}());



/***/ }),

/***/ "./src/app/Modals/productos-servicios/productos-servicios.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/Modals/productos-servicios/productos-servicios.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-modal titulo=\"Productos\"></app-header-modal>\r\n<ion-content>\r\n  <div class=\"busqueda\">\r\n    <form>\r\n      <ion-grid>\r\n        <ion-row color=\"primary\" justify-content-center>\r\n          <ion-col>\r\n            <div #list>\r\n              <ion-item>\r\n                <ion-icon slot=\"end\"\r\n                          name=\"search\"\r\n                          color=\"#f4f4f4\">\r\n                </ion-icon>\r\n                <ion-input type=\"text\"\r\n                           placeholder=\"Buscar\"\r\n                           clearInput\r\n                           [(ngModel)]='textSearch'\r\n                           (ionChange)='busqueda($event.target.value)'\r\n                           (input)='busqueda($event.target.value)'\r\n                           >\r\n                </ion-input>\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </div>\r\n  <div text-center>\r\n    <h5>Productos</h5>\r\n  </div>\r\n  <ion-item lines=\"none\">\r\n    <ion-grid class=\"separador\">\r\n      <ion-row no-lines>\r\n        <ion-col class=\"col\" size=\"9\"> Producto </ion-col>\r\n        <ion-col class=\"col\" size=\"2\"> Cant. </ion-col>\r\n        <ion-col class=\"col\" size=\"1\"></ion-col>\r\n      </ion-row>\r\n      <ion-row align-items-center  no-lines *ngFor=\"let item of productos\">\r\n        <ion-col size=\"9\" text-left>\r\n          <ion-label> {{item.descripcion}} </ion-label>\r\n          <ion-badge *ngIf=\"item.tipo_consumo == 'Unidad'\" color=\"primary\">{{item.tipo_consumo}}</ion-badge>\r\n          <ion-badge *ngIf=\"item.tipo_consumo == 'Porcentaje'\" color=\"tertiary\">{{item.tipo_consumo}}</ion-badge>\r\n        </ion-col>\r\n        <ion-col size=\"2\" text-center>\r\n          <ion-input  class=\"inputCant\"\r\n                      name=\"phone\"\r\n                      maxlength=\"3\"\r\n                      minlength=\"3\"\r\n                      type=\"tel\"\r\n                      pattern=\"\\d*\"\r\n                      [(ngModel)]=\"item.cantidad\"></ion-input>\r\n        </ion-col>\r\n        <ion-col  size=\"1\">\r\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"item.is_check\"></ion-checkbox>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-button class=\"button\"\r\n                (click)=\"guardarProductos()\"\r\n                color=\"primary\"\r\n                size=\"default\"\r\n                shape=\"round\">Guardar<ion-icon slot=\"end\" name=\"save\"></ion-icon></ion-button>\r\n\r\n    <ion-button class=\"buttonExit\"\r\n                (click)=\"Salir()\"\r\n                color=\"medium\"\r\n                size=\"default\"\r\n                shape=\"round\">Cancelar<ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\r\n  </ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Modals/productos-servicios/productos-servicios.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Modals/productos-servicios/productos-servicios.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.busqueda {\n  background: #3880ff; }\n\n.col {\n  color: gray;\n  border-top: 1px solid #dedede;\n  border-bottom: 1px solid #dedede; }\n\n.inputCant {\n  border: solid 1px #dedede;\n  border-radius: 25px; }\n\n.separador {\n  margin-bottom: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kYWxzL3Byb2R1Y3Rvcy1zZXJ2aWNpb3MvQzpcXFVzZXJzXFxGYWJpYW5cXERvY3VtZW50c1xcYm9kZWdpblxcYXBwQm9kZWdpbi9zcmNcXGFwcFxcTW9kYWxzXFxwcm9kdWN0b3Mtc2VydmljaW9zXFxwcm9kdWN0b3Mtc2VydmljaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsWUFBWTtFQUNaLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0EsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixnQ0FBZ0MsRUFBQTs7QUFHaEM7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Nb2RhbHMvcHJvZHVjdG9zLXNlcnZpY2lvcy9wcm9kdWN0b3Mtc2VydmljaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b257XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDUwMDtcclxufVxyXG5cclxuLmJ1dHRvbkV4aXR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogNTAwO1xyXG59XHJcblxyXG4uYnVzcXVlZGF7XHJcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcclxufVxyXG5cclxuLmNvbHtcclxuY29sb3I6IGdyYXk7XHJcbmJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG5cclxuLmlucHV0Q2FudHtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZGVkZWRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5zZXBhcmFkb3J7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Modals/productos-servicios/productos-servicios.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/Modals/productos-servicios/productos-servicios.page.ts ***!
  \************************************************************************/
/*! exports provided: ProductosServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosServiciosPage", function() { return ProductosServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _Services_servicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/servicios.service */ "./src/app/Services/servicios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ProductosServiciosPage = /** @class */ (function () {
    function ProductosServiciosPage(Pro_productos, storage, Pro_service, modalController, toastController) {
        this.Pro_productos = Pro_productos;
        this.storage = storage;
        this.Pro_service = Pro_service;
        this.modalController = modalController;
        this.toastController = toastController;
        this.productos = [];
        this.productos_backup = [];
        this.textSearch = null;
    }
    ProductosServiciosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_productos.listaProductos(token, _this.id_servicio).subscribe(function (data) {
                _this.productos = _this.productos_backup = data;
            });
        });
    };
    ProductosServiciosPage.prototype.busqueda = function (p_busqueda) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.productos = [];
                this.productos_backup.forEach(function (variable) {
                    if (variable.descripcion.toLowerCase().includes(p_busqueda.toLowerCase())) {
                        _this.productos.push(variable);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ProductosServiciosPage.prototype.validador = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.productos.length)) return [3 /*break*/, 4];
                        if (!(this.productos[i].cantidad <= 0 && this.productos[i].is_check)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showToast('Producto con cantidad invalida')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    ProductosServiciosPage.prototype.showToast = function (p_mensaje, p_duration) {
        if (p_duration === void 0) { p_duration = 3000; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: p_mensaje,
                            duration: p_duration,
                            position: 'middle',
                            showCloseButton: true,
                            closeButtonText: 'Cerrar'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductosServiciosPage.prototype.guardarProductos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var productos_save;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validador()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.Pro_service.updateProductos(this.id_servicio, this.productos)];
                    case 2:
                        productos_save = _a.sent();
                        this.modalController.dismiss({ productos: productos_save });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductosServiciosPage.prototype.Salir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductosServiciosPage.prototype, "id_servicio", void 0);
    ProductosServiciosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos-servicios',
            template: __webpack_require__(/*! ./productos-servicios.page.html */ "./src/app/Modals/productos-servicios/productos-servicios.page.html"),
            styles: [__webpack_require__(/*! ./productos-servicios.page.scss */ "./src/app/Modals/productos-servicios/productos-servicios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _Services_servicios_service__WEBPACK_IMPORTED_MODULE_4__["ServiciosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], ProductosServiciosPage);
    return ProductosServiciosPage;
}());



/***/ }),

/***/ "./src/app/Pages/servicio-config/servicio-config.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/servicio-config/servicio-config.module.ts ***!
  \*****************************************************************/
/*! exports provided: ServicioConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioConfigPageModule", function() { return ServicioConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicio_config_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servicio-config.page */ "./src/app/Pages/servicio-config/servicio-config.page.ts");
/* harmony import */ var _Modals_productos_servicios_productos_servicios_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modals/productos-servicios/productos-servicios.page */ "./src/app/Modals/productos-servicios/productos-servicios.page.ts");
/* harmony import */ var _Modals_productos_servicios_productos_servicios_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Modals/productos-servicios/productos-servicios.module */ "./src/app/Modals/productos-servicios/productos-servicios.module.ts");










var routes = [
    {
        path: '',
        component: _servicio_config_page__WEBPACK_IMPORTED_MODULE_7__["ServicioConfigPage"]
    }
];
var ServicioConfigPageModule = /** @class */ (function () {
    function ServicioConfigPageModule() {
    }
    ServicioConfigPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _Modals_productos_servicios_productos_servicios_page__WEBPACK_IMPORTED_MODULE_8__["ProductosServiciosPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _Modals_productos_servicios_productos_servicios_module__WEBPACK_IMPORTED_MODULE_9__["ProductosServiciosPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
            ],
            declarations: [_servicio_config_page__WEBPACK_IMPORTED_MODULE_7__["ServicioConfigPage"]]
        })
    ], ServicioConfigPageModule);
    return ServicioConfigPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/servicio-config/servicio-config.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/servicio-config/servicio-config.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Configuracion de Servicio\"></app-header-in>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\r\n                            pullingText=\"Hale para recargar\"\r\n                            refreshingSpinner=\"circles\"\r\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-item lines=\"none\">\r\n    <ion-label text-right>Eliminar</ion-label>\r\n      <ion-icon color=\"danger\" name=\"trash\" (click)=\"servicioDelete()\"></ion-icon>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n      <ion-label text-wrap class=\"label\">{{servicio.encabezado.descripcion}}</ion-label>\r\n    <div slot=\"end\" text-center>\r\n      <ion-icon name=\"create\" (click)=\"updadeServicio('UPDATE')\"></ion-icon>\r\n    </div>\r\n  </ion-item>\r\n  <div text-center>\r\n    <h5>Productos</h5>\r\n  </div>\r\n  <ion-item lines=\"none\">\r\n    <ion-grid>\r\n      <ion-row no-lines>\r\n        <ion-col class=\"col\" size=\"10\"> Producto </ion-col>\r\n        <ion-col class=\"col\" size=\"2\"> Cant. </ion-col>\r\n      </ion-row>\r\n      <ion-row no-lines *ngFor=\"let item of productos\">\r\n        <ion-col size=\"10\" text-left>\r\n          <ion-label> {{item.descripcion}} </ion-label>\r\n          <ion-badge *ngIf=\"item.tipo_consumo == 'Unidad'\" color=\"primary\">{{item.tipo_consumo}}</ion-badge>\r\n          <ion-badge *ngIf=\"item.tipo_consumo == 'Porcentaje'\" color=\"tertiary\">{{item.tipo_consumo}}</ion-badge>\r\n        </ion-col>\r\n        <ion-col size=\"2\" text-center> {{item.cantidad}} </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-button class=\"button\"\r\n                (click)=\"presentModal()\"\r\n                color=\"primary\"\r\n                size=\"default\"\r\n                shape=\"round\">Editar productos<ion-icon slot=\"end\" name=\"add-circle\"></ion-icon></ion-button>\r\n  </ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/servicio-config/servicio-config.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/servicio-config/servicio-config.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\n.button {\n  position: fixed;\n  left: 0;\n  bottom: 20px;\n  right: 0; }\n\n.col {\n  color: gray;\n  border-top: 1px solid #dedede;\n  border-bottom: 1px solid #dedede; }\n\n.label {\n  font-size: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvc2VydmljaW8tY29uZmlnL0M6XFxVc2Vyc1xcRmFiaWFuXFxEb2N1bWVudHNcXGJvZGVnaW5cXGFwcEJvZGVnaW4vc3JjXFxhcHBcXFBhZ2VzXFxzZXJ2aWNpby1jb25maWdcXHNlcnZpY2lvLWNvbmZpZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBUSxFQUFBOztBQUdaO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUSxFQUFBOztBQUVWO0VBQ0EsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixnQ0FBZ0MsRUFBQTs7QUFHaEM7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9zZXJ2aWNpby1jb25maWcvc2VydmljaW8tY29uZmlnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgLS1jb2xvcjogIzZlNjM2ODtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLmNvbHtcclxuY29sb3I6IGdyYXk7XHJcbmJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Pages/servicio-config/servicio-config.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/servicio-config/servicio-config.page.ts ***!
  \***************************************************************/
/*! exports provided: ServicioConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioConfigPage", function() { return ServicioConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_servicios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/servicios.service */ "./src/app/Services/servicios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Modals_productos_servicios_productos_servicios_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Modals/productos-servicios/productos-servicios.page */ "./src/app/Modals/productos-servicios/productos-servicios.page.ts");









var ServicioConfigPage = /** @class */ (function () {
    function ServicioConfigPage(Pro_servicios, route, modalController, alertController, toastController, Pro_router) {
        var _this = this;
        this.Pro_servicios = Pro_servicios;
        this.modalController = modalController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.Pro_router = Pro_router;
        this.productos = [];
        this.servicio = {
            encabezado: {
                descripcion: null,
                id_servicio: null
            }
        };
        this.servicio.encabezado.id_servicio = route.snapshot.params["id_servicio"];
        this.Pro_servicios.servicioDetalle(this.servicio.encabezado.id_servicio).subscribe(function (data) {
            _this.servicio = data;
            _this.productos = [];
            _this.productos = data.productos;
        });
    }
    ServicioConfigPage.prototype.ngOnInit = function () {
    };
    ServicioConfigPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _Modals_productos_servicios_productos_servicios_page__WEBPACK_IMPORTED_MODULE_5__["ProductosServiciosPage"],
                            componentProps: {
                                'id_servicio': this.servicio.encabezado.id_servicio
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = _a.sent();
                        if (data.data != undefined) {
                            this.productos = [];
                            this.productos = data.data.productos;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ServicioConfigPage.prototype.updadeServicio = function (p_accion) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cambiar nombre',
                            inputs: [
                                {
                                    name: 'input',
                                    type: 'text',
                                    value: this.servicio.encabezado.descripcion,
                                    placeholder: 'Nombre'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    cssClass: 'secondary'
                                }, {
                                    text: 'Cambiar',
                                    handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!(data.input != null && data.input.trim().length)) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, this.Pro_servicios.updateNombre(this.servicio.encabezado.id_servicio, p_accion, data.input).catch(function (err) { })];
                                                case 1:
                                                    _a.sent();
                                                    this.servicio.encabezado.descripcion = data.input;
                                                    return [3 /*break*/, 4];
                                                case 2: return [4 /*yield*/, this.showToast('Nombre vacio')];
                                                case 3:
                                                    _a.sent();
                                                    _a.label = 4;
                                                case 4: return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServicioConfigPage.prototype.servicioDelete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Eliminar Servicio',
                            message: "Esta seguro que desea eliminar " + this.servicio.encabezado.descripcion,
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Eliminar',
                                    handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.Pro_servicios.updateNombre(this.servicio.encabezado.id_servicio, 'DELETE', null).catch(function (err) { })];
                                                case 1:
                                                    _a.sent();
                                                    this.Pro_router.navigate(['/servicios']).then(function () {
                                                        window.location.reload();
                                                    });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServicioConfigPage.prototype.showToast = function (p_mensaje, p_duration) {
        if (p_duration === void 0) { p_duration = 3000; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: p_mensaje,
                            duration: p_duration,
                            position: 'middle',
                            showCloseButton: true,
                            closeButtonText: 'Cerrar'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServicioConfigPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.Pro_servicios.servicioDetalle(this.servicio.encabezado.id_servicio).subscribe(function (data) {
                    _this.servicio = data;
                    event.target.complete();
                }, function (err) {
                    event.target.complete();
                });
                return [2 /*return*/];
            });
        });
    };
    ServicioConfigPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicio-config',
            template: __webpack_require__(/*! ./servicio-config.page.html */ "./src/app/Pages/servicio-config/servicio-config.page.html"),
            styles: [__webpack_require__(/*! ./servicio-config.page.scss */ "./src/app/Pages/servicio-config/servicio-config.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ServiciosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ServicioConfigPage);
    return ServicioConfigPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-servicio-config-servicio-config-module.js.map