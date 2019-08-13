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

module.exports = "<app-header-modal titulo=\"Productos\"></app-header-modal>\n<ion-content>\n  <div class=\"busqueda\">\n    <form>\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col>\n            <div #list>\n              <ion-item>\n                <ion-icon slot=\"end\"\n                          name=\"search\"\n                          color=\"#f4f4f4\">\n                </ion-icon>\n                <ion-input type=\"text\"\n                           placeholder=\"Buscar\"\n                           clearInput\n                           [(ngModel)]='textSearch'\n                           (ionChange)='busqueda($event.target.value)'\n                           (input)='busqueda($event.target.value)'\n                           >\n                </ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n  <div text-center>\n    <h5>Productos</h5>\n  </div>\n  <ion-item lines=\"none\">\n    <ion-grid class=\"separador\">\n      <ion-row no-lines>\n        <ion-col class=\"col\" size=\"9\"> Producto </ion-col>\n        <ion-col class=\"col\" size=\"2\"> Cant. </ion-col>\n        <ion-col class=\"col\" size=\"1\"></ion-col>\n      </ion-row>\n      <ion-row align-items-center  no-lines *ngFor=\"let item of productos\">\n        <ion-col size=\"9\" text-left>\n          <ion-label> {{item.descripcion}} </ion-label>\n          <ion-badge *ngIf=\"item.tipo_consumo == 'Unidad'\" color=\"primary\">{{item.tipo_consumo}}</ion-badge>\n          <ion-badge *ngIf=\"item.tipo_consumo == 'Porcentaje'\" color=\"tertiary\">{{item.tipo_consumo}}</ion-badge>\n        </ion-col>\n        <ion-col size=\"2\" text-center>\n          <ion-input  class=\"inputCant\"\n                      name=\"phone\"\n                      maxlength=\"3\"\n                      minlength=\"3\"\n                      type=\"tel\"\n                      pattern=\"\\d*\"\n                      [(ngModel)]=\"item.cantidad\"></ion-input>\n        </ion-col>\n        <ion-col  size=\"1\">\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"item.is_check\"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-button class=\"button\"\n                (click)=\"guardarProductos()\"\n                color=\"primary\"\n                size=\"default\"\n                shape=\"round\">Guardar<ion-icon slot=\"end\" name=\"save\"></ion-icon></ion-button>\n\n    <ion-button class=\"buttonExit\"\n                (click)=\"Salir()\"\n                color=\"medium\"\n                size=\"default\"\n                shape=\"round\">Cancelar<ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Modals/productos-servicios/productos-servicios.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Modals/productos-servicios/productos-servicios.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.busqueda {\n  background: #3880ff; }\n\n.col {\n  color: gray;\n  border-top: 1px solid #dedede;\n  border-bottom: 1px solid #dedede; }\n\n.inputCant {\n  border: solid 1px #dedede;\n  border-radius: 25px; }\n\n.separador {\n  margin-bottom: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvTW9kYWxzL3Byb2R1Y3Rvcy1zZXJ2aWNpb3MvcHJvZHVjdG9zLXNlcnZpY2lvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFlBQVk7RUFDWixRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNBLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsZ0NBQWdDLEVBQUE7O0FBR2hDO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvTW9kYWxzL3Byb2R1Y3Rvcy1zZXJ2aWNpb3MvcHJvZHVjdG9zLXNlcnZpY2lvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDUwMDtcbn1cblxuLmJ1dHRvbkV4aXR7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA1MDA7XG59XG5cbi5idXNxdWVkYXtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcbn1cblxuLmNvbHtcbmNvbG9yOiBncmF5O1xuYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWRlZGU7XG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbn1cblxuLmlucHV0Q2FudHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2RlZGVkZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnNlcGFyYWRvcntcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbiJdfQ== */"

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

module.exports = "<app-header-in titulo=\"Configuracion de Servicio\"></app-header-in>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                            pullingText=\"Hale para recargar\"\n                            refreshingSpinner=\"circles\"\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-item lines=\"none\">\n    <ion-label text-right>Eliminar</ion-label>\n      <ion-icon color=\"danger\" name=\"trash\" (click)=\"servicioDelete()\"></ion-icon>\n  </ion-item>\n  <ion-item lines=\"none\">\n      <ion-label text-wrap class=\"label\">{{servicio.encabezado.descripcion}}</ion-label>\n    <div slot=\"end\" text-center>\n      <ion-icon name=\"create\" (click)=\"updadeServicio('UPDATE')\"></ion-icon>\n    </div>\n  </ion-item>\n  <div text-center>\n    <h5>Productos</h5>\n  </div>\n  <ion-item lines=\"none\">\n    <ion-grid>\n      <ion-row no-lines>\n        <ion-col class=\"col\" size=\"10\"> Producto </ion-col>\n        <ion-col class=\"col\" size=\"2\"> Cant. </ion-col>\n      </ion-row>\n      <ion-row no-lines *ngFor=\"let item of productos\">\n        <ion-col size=\"10\" text-left>\n          <ion-label> {{item.descripcion}} </ion-label>\n          <ion-badge *ngIf=\"item.tipo_consumo == 'Unidad'\" color=\"primary\">{{item.tipo_consumo}}</ion-badge>\n          <ion-badge *ngIf=\"item.tipo_consumo == 'Porcentaje'\" color=\"tertiary\">{{item.tipo_consumo}}</ion-badge>\n        </ion-col>\n        <ion-col size=\"2\" text-center> {{item.cantidad}} </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-button class=\"button\"\n                (click)=\"presentModal()\"\n                color=\"primary\"\n                size=\"default\"\n                shape=\"round\">Editar productos<ion-icon slot=\"end\" name=\"add-circle\"></ion-icon></ion-button>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/servicio-config/servicio-config.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/servicio-config/servicio-config.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\n.button {\n  position: fixed;\n  left: 0;\n  bottom: 20px;\n  right: 0; }\n\n.col {\n  color: gray;\n  border-top: 1px solid #dedede;\n  border-bottom: 1px solid #dedede; }\n\n.label {\n  font-size: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvUGFnZXMvc2VydmljaW8tY29uZmlnL3NlcnZpY2lvLWNvbmZpZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBUSxFQUFBOztBQUdaO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUSxFQUFBOztBQUVWO0VBQ0EsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixnQ0FBZ0MsRUFBQTs7QUFHaEM7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9zZXJ2aWNpby1jb25maWcvc2VydmljaW8tY29uZmlnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0tY29sb3I6ICM2ZTYzNjg7XG59XG5cbi5idXR0b257XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMDtcbn1cbi5jb2x7XG5jb2xvcjogZ3JheTtcbmJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZWRlO1xuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuIl19 */"

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