(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-inventario-transacciones-inventario-transacciones-module"],{

/***/ "./src/app/Modals/productos-list/productos-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Modals/productos-list/productos-list.module.ts ***!
  \****************************************************************/
/*! exports provided: ProductosListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosListPageModule", function() { return ProductosListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productos_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos-list.page */ "./src/app/Modals/productos-list/productos-list.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");








var ProductosListPageModule = /** @class */ (function () {
    function ProductosListPageModule() {
    }
    ProductosListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            declarations: [_productos_list_page__WEBPACK_IMPORTED_MODULE_5__["ProductosListPage"]]
        })
    ], ProductosListPageModule);
    return ProductosListPageModule;
}());



/***/ }),

/***/ "./src/app/Modals/productos-list/productos-list.page.html":
/*!****************************************************************!*\
  !*** ./src/app/Modals/productos-list/productos-list.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-modal titulo=\"Productos\"></app-header-modal>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                            pullingText=\"Hale para recargar\"\n                            refreshingSpinner=\"circles\"\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"busqueda\">\n    <form #form=\"ngForm\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col>\n            <div #list>\n              <ion-item>\n                <ion-icon slot=\"end\"\n                          name=\"search\"\n                          color=\"#f4f4f4\">\n                </ion-icon>\n                <ion-input type=\"text\"\n                          name=\"smartSearch\"\n                           placeholder=\"Buscar\"\n                           clearInput\n                           [(ngModel)]='textSearch'\n                           (ionChange)='busqueda($event.target.value)'\n                           (input)='busqueda($event.target.value)'\n                           >\n                </ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n\n  <div padding >\n    <ion-list >\n      <ion-radio-group>\n        <ion-item *ngFor=\"let item of productos\" (click)=\"productoDetalle(item)\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"item.imagen | domSanitizer\">\n          </ion-avatar>\n          <ion-label>\n            <h2 class=\"nombreProducto\">{{item.nombre | uppercase}}</h2>\n            <h4>{{item.descripcion}}</h4>\n          </ion-label>\n          <ion-radio text-end\n                     slot=\"end\"\n                     mode=\"md\">\n          </ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n  </div>\n\n  <ion-button (click)=\"Salir()\"\n              color=\"medium\"\n              size=\"default\"\n              expand=\"block\"\n              shape=\"round\">Salir<ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Modals/productos-list/productos-list.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/Modals/productos-list/productos-list.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n\n.image {\n  width: 20%;\n  height: 200px; }\n\n.busqueda {\n  background: #3880ff; }\n\n.nombreProducto {\n  font-size: 0.9em !important;\n  color: #3880ff;\n  font-weight: bold; }\n\n.tipoConsumo {\n  color: #3880ff; }\n\n.buttonExit {\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvTW9kYWxzL3Byb2R1Y3Rvcy1saXN0L3Byb2R1Y3Rvcy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdRLHFCQUFhO0VBQ2IsYUFBUSxFQUFBOztBQUtoQjtFQUNFLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQ0YsRUFBQTs7QUFFQTtFQUVFLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL01vZGFscy9wcm9kdWN0b3MtbGlzdC9wcm9kdWN0b3MtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb2x7XG4gIGRpdntcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxufVxuXG4uaW1hZ2V7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5idXNxdWVkYXtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcbn1cbi5ub21icmVQcm9kdWN0b3tcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzM4ODBmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXBvQ29uc3Vtb3tcbiAgY29sb3I6ICMzODgwZmZcbn1cblxuLmJ1dHRvbkV4aXR7XG4gIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA1MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Modals/productos-list/productos-list.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/Modals/productos-list/productos-list.page.ts ***!
  \**************************************************************/
/*! exports provided: ProductosListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosListPage", function() { return ProductosListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/productos.service */ "./src/app/Services/productos.service.ts");





var ProductosListPage = /** @class */ (function () {
    function ProductosListPage(modalController, storage, Pro_productos) {
        this.modalController = modalController;
        this.storage = storage;
        this.Pro_productos = Pro_productos;
        this.textSearch = '';
    }
    ProductosListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_productos.inventarioList(token).subscribe(function (data) {
                _this.productos = _this.productos_backup = data;
                console.log(_this.productos);
            });
        });
    };
    ProductosListPage.prototype.busqueda = function (p_busqueda) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.productos = [];
                this.productos_backup.forEach(function (variable) {
                    if (variable.nombre.toLowerCase().includes(p_busqueda.toLowerCase())) {
                        _this.productos.push(variable);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ProductosListPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        _b = this;
                        return [4 /*yield*/, this.Pro_productos.inventarioListAsync()];
                    case 1:
                        _a.productos = _b.productos_backup = _c.sent();
                        event.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductosListPage.prototype.productoDetalle = function (p_item) {
        this.modalController.dismiss({ producto: p_item });
    };
    ProductosListPage.prototype.Salir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    ProductosListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos-list',
            template: __webpack_require__(/*! ./productos-list.page.html */ "./src/app/Modals/productos-list/productos-list.page.html"),
            styles: [__webpack_require__(/*! ./productos-list.page.scss */ "./src/app/Modals/productos-list/productos-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _Services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"]])
    ], ProductosListPage);
    return ProductosListPage;
}());



/***/ }),

/***/ "./src/app/Pages/inventario-transacciones/inventario-transacciones.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Pages/inventario-transacciones/inventario-transacciones.module.ts ***!
  \***********************************************************************************/
/*! exports provided: InventarioTransaccionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioTransaccionesPageModule", function() { return InventarioTransaccionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inventario_transacciones_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventario-transacciones.page */ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");
/* harmony import */ var _Modals_productos_list_productos_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Modals/productos-list/productos-list.module */ "./src/app/Modals/productos-list/productos-list.module.ts");
/* harmony import */ var _Modals_productos_list_productos_list_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Modals/productos-list/productos-list.page */ "./src/app/Modals/productos-list/productos-list.page.ts");











var routes = [
    {
        path: '',
        component: _inventario_transacciones_page__WEBPACK_IMPORTED_MODULE_7__["InventarioTransaccionesPage"]
    }
];
var InventarioTransaccionesPageModule = /** @class */ (function () {
    function InventarioTransaccionesPageModule() {
    }
    InventarioTransaccionesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _Modals_productos_list_productos_list_page__WEBPACK_IMPORTED_MODULE_10__["ProductosListPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _Modals_productos_list_productos_list_module__WEBPACK_IMPORTED_MODULE_9__["ProductosListPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inventario_transacciones_page__WEBPACK_IMPORTED_MODULE_7__["InventarioTransaccionesPage"]]
        })
    ], InventarioTransaccionesPageModule);
    return InventarioTransaccionesPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Pages/inventario-transacciones/inventario-transacciones.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Inventario\"></app-header-in>\n<ion-content padding>\n  <ion-grid class=\"separador\">\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"6\">\n        <div text-center>\n          <ion-avatar class=\"avatar\">\n            <img [src]=\"producto.imagen | domSanitizer\">\n          </ion-avatar>\n          <ion-label text-wrap class=\"label\">{{producto.nombre}}</ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"6\">\n        <ion-button class=\"font_button\"\n                    color=\"primary\"\n                    size=\"small\"\n                    expand=\"full\"\n                    (click)=\"seleccionarProducto()\"\n                    shape=\"round\">Seleccionar<ion-icon slot=\"end\" name=\"create\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"3\" size-lg=\"2\" size-xs=\"6\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\">Fecha</ion-label>\n          <ion-input type=\"date\"\n                     name=\"fecha\"\n                     min=\"2000-01-01\"\n                     [max]=\"today\"\n                     [(ngModel)]=\"fecha\"\n                     [value]=\"fecha\"\n                     required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col align-self-center size-md=\"3\" size-lg=\"2\" size-xs=\"6\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\">Costo unitario LPS</ion-label>\n          <ion-input type=\"tel\"\n                     name=\"costo\"\n                     maxlength=\"8\"\n                     minlength=\"1\"\n                     (keydown)=\"validateNumber($event, true)\"\n                     pattern=\"\\d*\"\n                     placeholder=\"00.00\"\n                     [(ngModel)]=\"costo\">\n         </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <ion-item>\n          <ion-label>Sucursal</ion-label>\n          <ion-select name=\"sucursal\"\n                      value=\"{{id_sucursal}}\"\n                      [(ngModel)]=\"id_sucursal\"\n                      (ionChange)=\"sucursalGet($event)\"\n                      placeholder=\"Seleccionar\">\n            <ion-select-option *ngFor=\"let item of sucursales\"\n                                value=\"{{item.id_sucursal}}\">{{item.descripcion}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n      </ion-item>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <ion-segment mode=\"ios\">\n          <ion-segment-button class=\"salida\"\n                              layout=\"icon-bottom\"\n                              (click)=\"salidaEntrada(2)\"\n                              mode=\"ios\">\n            <ion-icon name=\"remove\"></ion-icon>\n            <ion-label>Salida</ion-label>\n          </ion-segment-button>\n          <ion-segment-button class=\"entrada\"\n                              layout=\"icon-bottom\"\n                              (click)=\"salidaEntrada(1)\"\n                              mode=\"ios\"\n                              checked>\n            <ion-icon name=\"add\"></ion-icon>\n            <ion-label>Entrada</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n      </ion-item>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <ion-segment mode=\"ios\">\n          <ion-segment-button class=\"plus-minus\"\n                              layout=\"icon-bottom\"\n                              (click)=\"sumaRestar(2)\"\n                              mode=\"ios\">\n            <ion-icon name=\"remove\"></ion-icon>\n            <ion-label></ion-label>\n          </ion-segment-button>\n          <ion-segment-button class=\"input\"\n                              layout=\"icon-bottom\"\n                              mode=\"ios\">\n              <ion-input type=\"tel\"\n                         class=\"round\"\n                         name=\"cantidad\"\n                         maxlength=\"3\"\n                         minlength=\"1\"\n                         min=\"1\"\n                         pattern=\"[0-9.]+\"\n                         (keydown)=\"validateNumber($event)\"\n                         [(ngModel)]=\"cantidad\"\n                         text-center>\n             </ion-input>\n          </ion-segment-button>\n          <ion-segment-button class=\"plus-minus\"\n                              layout=\"icon-bottom\"\n                              (click)=\"sumaRestar(1)\"\n                              mode=\"ios\">\n            <ion-icon name=\"add\"></ion-icon>\n            <ion-label></ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n <ion-button class=\"buttone\"\n             (click)=\"guardar()\"\n             color=\"primary\"\n             size=\"default\"\n             shape=\"round\">Guardar Transaccion<ion-icon slot=\"end\" name=\"save\"></ion-icon>\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/Pages/inventario-transacciones/inventario-transacciones.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plus-minus {\n  --background: white !important;\n  --background-activated: #3880ff;\n  --background-checked: #3880ff !important; }\n\n.input {\n  --background: white !important;\n  --background-activated: white;\n  --background-checked: white !important;\n  --color: black; }\n\n.round {\n  border: solid 2px;\n  border-color: #3880ff;\n  border-radius: 15px;\n  background: white;\n  color: black;\n  font-size: 1.3em;\n  width: 60%; }\n\n.avatar {\n  margin: auto; }\n\n.salida {\n  --background: white !important;\n  --background-activated: #f04141;\n  --background-checked: #f04141 !important; }\n\n.entrada {\n  --background: white !important;\n  --background-activated: #10dc60;\n  --background-checked: #10dc60 !important; }\n\n.label {\n  font-size: 1.2em; }\n\n.font_button {\n  font-size: 0.7rem; }\n\n.boder {\n  border: solid 1px #000000; }\n\n.buttone {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.separador {\n  margin-bottom: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvUGFnZXMvaW52ZW50YXJpby10cmFuc2FjY2lvbmVzL2ludmVudGFyaW8tdHJhbnNhY2Npb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBYTtFQUNiLCtCQUF1QjtFQUN2Qix3Q0FBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBYTtFQUNiLDZCQUF1QjtFQUN2QixzQ0FBcUI7RUFDckIsY0FBUSxFQUFBOztBQUdWO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBUyxFQUFBOztBQUdYO0VBQ0csWUFBWSxFQUFBOztBQUlmO0VBQ0UsOEJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsd0NBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsOEJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsd0NBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUTtFQUNSLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsV0FBVztFQUNYLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2ludmVudGFyaW8tdHJhbnNhY2Npb25lcy9pbnZlbnRhcmlvLXRyYW5zYWNjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsdXMtbWludXN7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzM4ODBmZjtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMzODgwZmYgIWltcG9ydGFudDtcbn1cblxuLmlucHV0e1xuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cbi5yb3VuZHtcbiAgYm9yZGVyOiBzb2xpZCAycHg7XG4gIGJvcmRlci1jb2xvcjogIzM4ODBmZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgd2lkdGg6NjAlO1xufVxuXG4uYXZhdGFye1xuICAgbWFyZ2luOiBhdXRvO1xufVxuXG5cbi5zYWxpZGF7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2YwNDE0MTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmMDQxNDEgIWltcG9ydGFudDtcbn1cblxuLmVudHJhZGF7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzEwZGM2MDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxMGRjNjAgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmZvbnRfYnV0dG9ue1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLmJvZGVye1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDAwMDAwO1xufVxuXG4uYnV0dG9uZXtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA1MDA7XG59XG5cbi5idXR0b25FeGl0e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogMDtcbiAgei1pbmRleDogNTAwO1xufVxuXG4uc2VwYXJhZG9ye1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Pages/inventario-transacciones/inventario-transacciones.page.ts ***!
  \*********************************************************************************/
/*! exports provided: InventarioTransaccionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioTransaccionesPage", function() { return InventarioTransaccionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Modals_productos_list_productos_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Modals/productos-list/productos-list.page */ "./src/app/Modals/productos-list/productos-list.page.ts");
/* harmony import */ var _Services_inventarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/inventarios.service */ "./src/app/Services/inventarios.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _Services_sucursales_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/sucursales.service */ "./src/app/Services/sucursales.service.ts");









var InventarioTransaccionesPage = /** @class */ (function () {
    function InventarioTransaccionesPage(alertController, modalController, toastController, Pro_inventarios, storage, Pro_sucursales) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.toastController = toastController;
        this.Pro_inventarios = Pro_inventarios;
        this.storage = storage;
        this.Pro_sucursales = Pro_sucursales;
        this.sucursales = [];
        this.producto = {
            id_producto: null,
            nombre: "Seleccione un producto",
            imagen: 'assets/img/splash.png',
            codigo: null
        };
        this.cantidad = 1;
        this.today = new Date().toISOString().slice(0, 10);
        this.fecha = new Date().toISOString().slice(0, 10);
        this.id_tipo_transaccion = 1;
        this.costo = null;
    }
    InventarioTransaccionesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.Pro_sucursales.obtenerSucursalSeleccionda(token).subscribe(function (sucursal) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var suc;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.id_sucursal = sucursal.id_sucursal.toString();
                                return [4 /*yield*/, this.Pro_sucursales.sucursalesListUsuario()];
                            case 1:
                                suc = _a.sent();
                                this.sucursales = Array.isArray(suc) ? suc : [];
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    };
    InventarioTransaccionesPage.prototype.sumaRestar = function (p_valor) {
        if (p_valor == '1') {
            this.cantidad++;
        }
        else {
            this.cantidad--;
            if (this.cantidad == 0) {
                this.cantidad = 1;
            }
        }
    };
    InventarioTransaccionesPage.prototype.showToast = function (p_mensaje, p_duration) {
        if (p_duration === void 0) { p_duration = 2000; }
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
    InventarioTransaccionesPage.prototype.salidaEntrada = function (p_valor) {
        this.id_tipo_transaccion = p_valor;
    };
    InventarioTransaccionesPage.prototype.seleccionarProducto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _Modals_productos_list_productos_list_page__WEBPACK_IMPORTED_MODULE_3__["ProductosListPage"],
                            componentProps: {}
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
                            this.producto = data.data.producto;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InventarioTransaccionesPage.prototype.sucursalGet = function (p_sucursal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.id_sucursal = p_sucursal.target.value;
                return [2 /*return*/];
            });
        });
    };
    InventarioTransaccionesPage.prototype.guardar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var transaccion, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validador()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 7];
                        transaccion = {
                            id_producto: this.producto.id_producto,
                            cantidad: this.cantidad,
                            costo: this.costo,
                            fecha: this.fecha,
                            id_tipo_transaccion: this.id_tipo_transaccion,
                            id_sucursal: this.id_sucursal
                        };
                        return [4 /*yield*/, this.Pro_inventarios.insertTransaccion(transaccion).catch(function (err) { })
                            // console.log(result)
                        ];
                    case 2:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 7];
                        if (!(result == 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.showToast('No se aceptan invetarios en 0', 3500)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.showToast('Transaccion exitosa', 1000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.limpiar()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    InventarioTransaccionesPage.prototype.limpiar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.producto = {
                    id_producto: null,
                    nombre: "Seleccione un producto",
                    imagen: 'assets/img/splash.png',
                    codigo: null
                };
                this.cantidad = 1;
                this.today = new Date().toISOString().slice(0, 10);
                this.fecha = new Date().toISOString().slice(0, 10);
                this.costo = null;
                return [2 /*return*/];
            });
        });
    };
    InventarioTransaccionesPage.prototype.validador = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.producto.id_producto == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.showToast('Seleccione un producto')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 2:
                        if (!(this.cantidad <= 0 || this.cantidad.toString().trim() == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.showToast('Ingrese un cantidad')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4:
                        if (!(this.fecha.trim() == '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.showToast('Ingrese un fecha')];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/, true];
                }
            });
        });
    };
    InventarioTransaccionesPage.prototype.validateNumber = function (evt, valida_punto) {
        if (valida_punto === void 0) { valida_punto = false; }
        var e = evt || window.event;
        var key = e.keyCode || e.which;
        if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
            // numbers
            key >= 48 && key <= 57 ||
            // Numeric keypad
            key >= 96 && key <= 105 ||
            // Backspace and Tab and Enter
            key == 8 || key == 9 || key == 13 ||
            // Home and End
            key == 35 || key == 36 ||
            // left and right arrows
            key == 37 || key == 39 ||
            // Del and Ins
            key == 46 || key == 45 || (valida_punto && key == 190)) {
        }
        else {
            e.returnValue = false;
            if (e.preventDefault)
                e.preventDefault();
        }
    };
    InventarioTransaccionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventario-transacciones',
            template: __webpack_require__(/*! ./inventario-transacciones.page.html */ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.html"),
            styles: [__webpack_require__(/*! ./inventario-transacciones.page.scss */ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _Services_inventarios_service__WEBPACK_IMPORTED_MODULE_4__["InventariosService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _Services_sucursales_service__WEBPACK_IMPORTED_MODULE_6__["SucursalesService"]])
    ], InventarioTransaccionesPage);
    return InventarioTransaccionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-inventario-transacciones-inventario-transacciones-module.js.map