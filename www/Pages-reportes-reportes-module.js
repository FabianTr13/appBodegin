(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-reportes-reportes-module"],{

/***/ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.module.ts ***!
  \****************************************************************************/
/*! exports provided: ReportePuntoPedidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportePuntoPedidoPageModule", function() { return ReportePuntoPedidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reporte_punto_pedido_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporte-punto-pedido.page */ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");








var ReportePuntoPedidoPageModule = /** @class */ (function () {
    function ReportePuntoPedidoPageModule() {
    }
    ReportePuntoPedidoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
            ],
            declarations: [
                _reporte_punto_pedido_page__WEBPACK_IMPORTED_MODULE_5__["ReportePuntoPedidoPage"]
            ]
        })
    ], ReportePuntoPedidoPageModule);
    return ReportePuntoPedidoPageModule;
}());



/***/ }),

/***/ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-modal titulo=\"Punto de pedido\"></app-header-modal>\n<ion-content class=\"contenedor\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                          pullingText=\"Hale para recargar\"\n                          refreshingSpinner=\"circles\"\n                          refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=\"car\" *ngFor=\"let item of reporte\">\n    <ion-item class=\"car-head\" lines=\"none\">\n     <ion-avatar>\n       <img [src]=\"item.fotografia | domSanitizer\" />\n     </ion-avatar>\n     <p>&nbsp;{{item.nombre}}</p>\n     <ion-avatar slot=\"end\">\n       <img [src]=\"item.estado | domSanitizer\" />\n     </ion-avatar>\n    </ion-item>\n    <ion-card-content>\n      <ion-label>\n        <ion-badge *ngIf=\"item.id_tipo_consumo == 1\" color=\"primary\">Unidad</ion-badge>\n        <ion-badge *ngIf=\"item.id_tipo_consumo == 2\" color=\"tertiary\">Porcentaje&nbsp;{{item.porcentaje_actual}}%</ion-badge>\n      </ion-label>\n      <ion-row>\n        <ion-badge color=\"primary\">Sucursal: {{item.sucursal}}</ion-badge>\n      </ion-row>\n      <ion-row>\n        En inventario: {{item.cantidad}}\n      </ion-row>\n      <ion-row>\n        Punto de pedido: {{item.punto_pedido}}\n      </ion-row>\n      <ion-row>\n        Cantidad recomendada a pedir: {{item.cantidad_pedir}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"border\"></div>\n  <ion-button shape=\"round\"\n              class=\"buttonExit\"\n              size=\"default\"\n              (click)=\"Salir()\"\n              color=\"medium\"\n              expand=\"block\">Salir <ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car {\n  border: solid 1px #cacaca;\n  --background: white; }\n\n.precio {\n  font-size: 1.4em;\n  color: #52f450;\n  font-weight: bold; }\n\n.border {\n  height: 50px; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.center-boton {\n  text-align: center; }\n\n.car-head {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #6e6368;\n  border-top: solid 4px #3880ff; }\n\n@media (min-width: 600px) {\n  .boton {\n    width: 45%;\n    float: right; } }\n\n@media (min-width: 700px) {\n  .boton {\n    width: 33%;\n    float: right; } }\n\n@media (min-width: 900px) {\n  .boton {\n    width: 25%;\n    float: right; } }\n\n@media (min-width: 1100px) {\n  .boton {\n    width: 20%;\n    float: right; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kYWxzL3JlcG9ydGUtcHVudG8tcGVkaWRvL0M6XFxVc2Vyc1xcRmFiaWFuXFxEb2N1bWVudHNcXGJvZGVnaW5cXGFwcEJvZGVnaW4vc3JjXFxhcHBcXE1vZGFsc1xccmVwb3J0ZS1wdW50by1wZWRpZG9cXHJlcG9ydGUtcHVudG8tcGVkaWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBYSxFQUFBOztBQUdmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWSxFQUFBLEVBQ2I7O0FBRUg7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZLEVBQUEsRUFDYjs7QUFFSDtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVksRUFBQSxFQUNiOztBQUVIO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9Nb2RhbHMvcmVwb3J0ZS1wdW50by1wZWRpZG8vcmVwb3J0ZS1wdW50by1wZWRpZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250ZW5lZG9ye1xyXG4gIC8vLS1iYWNrZ3JvdW5kOiNlMGUwZTA7XHJcbn1cclxuXHJcbi5jYXJ7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NhY2FjYTtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJlY2lve1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgY29sb3I6ICM1MmY0NTA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ib3JkZXJ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYnV0dG9uRXhpdHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDVweDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA1MDA7XHJcbn1cclxuXHJcbi5jZW50ZXItYm90b257XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyLWhlYWR7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM2ZTYzNjg7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgNHB4ICMzODgwZmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5ib3RvbntcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gIC5ib3RvbntcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gIC5ib3RvbntcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAuYm90b257XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.ts ***!
  \**************************************************************************/
/*! exports provided: ReportePuntoPedidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportePuntoPedidoPage", function() { return ReportePuntoPedidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_inventarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/inventarios.service */ "./src/app/Services/inventarios.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ReportePuntoPedidoPage = /** @class */ (function () {
    function ReportePuntoPedidoPage(Pro_inventario, storage, modalController) {
        this.Pro_inventario = Pro_inventario;
        this.storage = storage;
        this.modalController = modalController;
        this.reporte = [];
    }
    ReportePuntoPedidoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_inventario.reportePedido(token).subscribe(function (report) {
                _this.reporte = report;
            });
        });
    };
    ReportePuntoPedidoPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get('token').then(function (token) {
                    _this.Pro_inventario.reportePedido(token).subscribe(function (data) {
                        _this.reporte = data;
                        event.target.complete();
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ReportePuntoPedidoPage.prototype.Salir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    ReportePuntoPedidoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reporte-punto-pedido',
            template: __webpack_require__(/*! ./reporte-punto-pedido.page.html */ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.html"),
            styles: [__webpack_require__(/*! ./reporte-punto-pedido.page.scss */ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_inventarios_service__WEBPACK_IMPORTED_MODULE_2__["InventariosService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ReportePuntoPedidoPage);
    return ReportePuntoPedidoPage;
}());



/***/ }),

/***/ "./src/app/Modals/reporte-stock/reporte-stock.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Modals/reporte-stock/reporte-stock.module.ts ***!
  \**************************************************************/
/*! exports provided: ReporteStockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteStockPageModule", function() { return ReporteStockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reporte_stock_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporte-stock.page */ "./src/app/Modals/reporte-stock/reporte-stock.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");








var ReporteStockPageModule = /** @class */ (function () {
    function ReporteStockPageModule() {
    }
    ReporteStockPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
            ],
            declarations: [_reporte_stock_page__WEBPACK_IMPORTED_MODULE_5__["ReporteStockPage"]]
        })
    ], ReporteStockPageModule);
    return ReporteStockPageModule;
}());



/***/ }),

/***/ "./src/app/Modals/reporte-stock/reporte-stock.page.html":
/*!**************************************************************!*\
  !*** ./src/app/Modals/reporte-stock/reporte-stock.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-modal titulo=\"Inventario de seguridad\"></app-header-modal>\n<ion-content class=\"contenedor\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                          pullingText=\"Hale para recargar\"\n                          refreshingSpinner=\"circles\"\n                          refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=\"car\" *ngFor=\"let item of reporte\">\n    <ion-item class=\"car-head\" lines=\"none\">\n     <ion-avatar>\n       <img [src]=\"item.fotografia | domSanitizer\" />\n     </ion-avatar>\n     <p>&nbsp;{{item.nombre}}</p>\n     <ion-avatar slot=\"end\">\n       <img [src]=\"item.estado | domSanitizer\" />\n     </ion-avatar>\n    </ion-item>\n    <ion-card-content>\n      <ion-label>\n        <ion-badge *ngIf=\"item.id_tipo_consumo == 1\" color=\"primary\">Unidad</ion-badge>\n        <ion-badge *ngIf=\"item.id_tipo_consumo == 2\" color=\"tertiary\">Porcentaje&nbsp;{{item.porcentaje_actual}}%</ion-badge>\n      </ion-label>\n      <ion-row>\n        <ion-badge color=\"primary\">Sucursal: {{item.sucursal}}</ion-badge>\n      </ion-row>\n      <ion-row>\n        En inventario: {{item.cantidad}}\n      </ion-row>\n      <ion-row>\n        Minimo de inventario: {{item.minimo}}\n      </ion-row>\n      <ion-row>\n        Promedio de venta diario: {{item.promedio_venta_diaria}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"border\"></div>\n  <ion-button shape=\"round\"\n              class=\"buttonExit\"\n              size=\"default\"\n              (click)=\"Salir()\"\n              color=\"medium\"\n              expand=\"block\">Salir <ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Modals/reporte-stock/reporte-stock.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/Modals/reporte-stock/reporte-stock.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car {\n  border: solid 1px #cacaca;\n  --background: white; }\n\n.border {\n  height: 50px; }\n\n.precio {\n  font-size: 1.4em;\n  color: #52f450;\n  font-weight: bold; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.center-boton {\n  text-align: center; }\n\n.car-head {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #6e6368;\n  border-top: solid 4px #3880ff; }\n\n@media (min-width: 600px) {\n  .boton {\n    width: 45%;\n    float: right; } }\n\n@media (min-width: 700px) {\n  .boton {\n    width: 33%;\n    float: right; } }\n\n@media (min-width: 900px) {\n  .boton {\n    width: 25%;\n    float: right; } }\n\n@media (min-width: 1100px) {\n  .boton {\n    width: 20%;\n    float: right; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kYWxzL3JlcG9ydGUtc3RvY2svQzpcXFVzZXJzXFxGYWJpYW5cXERvY3VtZW50c1xcYm9kZWdpblxcYXBwQm9kZWdpbi9zcmNcXGFwcFxcTW9kYWxzXFxyZXBvcnRlLXN0b2NrXFxyZXBvcnRlLXN0b2NrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWSxFQUFBLEVBQ2I7O0FBRUg7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZLEVBQUEsRUFDYjs7QUFFSDtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVksRUFBQSxFQUNiOztBQUVIO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9Nb2RhbHMvcmVwb3J0ZS1zdG9jay9yZXBvcnRlLXN0b2NrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVuZWRvcntcclxuICAvLy0tYmFja2dyb3VuZDojZTBlMGUwO1xyXG59XHJcblxyXG4uY2Fye1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNjYWNhY2E7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5wcmVjaW97XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBjb2xvcjogIzUyZjQ1MDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ1dHRvbkV4aXR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogNTAwO1xyXG59XHJcblxyXG4uY2VudGVyLWJvdG9ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhci1oZWFke1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNmU2MzY4O1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDRweCAjMzg4MGZmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAuYm90b257XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAuYm90b257XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAuYm90b257XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgLmJvdG9ue1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Modals/reporte-stock/reporte-stock.page.ts":
/*!************************************************************!*\
  !*** ./src/app/Modals/reporte-stock/reporte-stock.page.ts ***!
  \************************************************************/
/*! exports provided: ReporteStockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteStockPage", function() { return ReporteStockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Services_inventarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/inventarios.service */ "./src/app/Services/inventarios.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var ReporteStockPage = /** @class */ (function () {
    function ReporteStockPage(modalController, storage, Pro_inventario) {
        this.modalController = modalController;
        this.storage = storage;
        this.Pro_inventario = Pro_inventario;
        this.reporte = [];
    }
    ReporteStockPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_inventario.reporteStock(token).subscribe(function (data) {
                _this.reporte = data;
            });
        });
    };
    ReporteStockPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get('token').then(function (token) {
                    _this.Pro_inventario.reporteStock(token).subscribe(function (data) {
                        _this.reporte = data;
                        event.target.complete();
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ReporteStockPage.prototype.Salir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    ReporteStockPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reporte-stock',
            template: __webpack_require__(/*! ./reporte-stock.page.html */ "./src/app/Modals/reporte-stock/reporte-stock.page.html"),
            styles: [__webpack_require__(/*! ./reporte-stock.page.scss */ "./src/app/Modals/reporte-stock/reporte-stock.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _Services_inventarios_service__WEBPACK_IMPORTED_MODULE_3__["InventariosService"]])
    ], ReporteStockPage);
    return ReporteStockPage;
}());



/***/ }),

/***/ "./src/app/Pages/reportes/reportes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/reportes/reportes.module.ts ***!
  \***************************************************/
/*! exports provided: ReportesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesPageModule", function() { return ReportesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reportes_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reportes.page */ "./src/app/Pages/reportes/reportes.page.ts");
/* harmony import */ var _Modals_reporte_punto_pedido_reporte_punto_pedido_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modals/reporte-punto-pedido/reporte-punto-pedido.module */ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.module.ts");
/* harmony import */ var _Modals_reporte_punto_pedido_reporte_punto_pedido_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Modals/reporte-punto-pedido/reporte-punto-pedido.page */ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.ts");
/* harmony import */ var _Modals_reporte_stock_reporte_stock_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Modals/reporte-stock/reporte-stock.module */ "./src/app/Modals/reporte-stock/reporte-stock.module.ts");
/* harmony import */ var _Modals_reporte_stock_reporte_stock_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Modals/reporte-stock/reporte-stock.page */ "./src/app/Modals/reporte-stock/reporte-stock.page.ts");












var routes = [
    {
        path: '',
        component: _reportes_page__WEBPACK_IMPORTED_MODULE_7__["ReportesPage"]
    }
];
var ReportesPageModule = /** @class */ (function () {
    function ReportesPageModule() {
    }
    ReportesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [
                _Modals_reporte_punto_pedido_reporte_punto_pedido_page__WEBPACK_IMPORTED_MODULE_9__["ReportePuntoPedidoPage"],
                _Modals_reporte_stock_reporte_stock_page__WEBPACK_IMPORTED_MODULE_11__["ReporteStockPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
                _Modals_reporte_punto_pedido_reporte_punto_pedido_module__WEBPACK_IMPORTED_MODULE_8__["ReportePuntoPedidoPageModule"],
                _Modals_reporte_stock_reporte_stock_module__WEBPACK_IMPORTED_MODULE_10__["ReporteStockPageModule"]
            ],
            declarations: [_reportes_page__WEBPACK_IMPORTED_MODULE_7__["ReportesPage"]]
        })
    ], ReportesPageModule);
    return ReportesPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/reportes/reportes.page.html":
/*!***************************************************!*\
  !*** ./src/app/Pages/reportes/reportes.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Reportes\"></app-header-in>\r\n<ion-content>\r\n\r\n<ion-list>\r\n  <ion-item detail (click)=\"openStock()\">\r\n    <ion-label>\r\n      Stock minimo de inventarios\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item detail (click)=\"openPedidos()\">\r\n    <ion-label>\r\n      puntos de pedidos\r\n    </ion-label>\r\n  </ion-item>\r\n  <!-- <ion-item detail>\r\n    <ion-label>\r\n      Ganancias de servicios mensual\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item detail>\r\n    <ion-label>\r\n      Movimientos de inventario mensual\r\n    </ion-label>\r\n  </ion-item> -->\r\n  <!-- <> -->\r\n</ion-list>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/reportes/reportes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Pages/reportes/reportes.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3JlcG9ydGVzL3JlcG9ydGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/reportes/reportes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/reportes/reportes.page.ts ***!
  \*************************************************/
/*! exports provided: ReportesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesPage", function() { return ReportesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Modals_reporte_punto_pedido_reporte_punto_pedido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Modals/reporte-punto-pedido/reporte-punto-pedido.page */ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.ts");
/* harmony import */ var _Modals_reporte_stock_reporte_stock_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Modals/reporte-stock/reporte-stock.page */ "./src/app/Modals/reporte-stock/reporte-stock.page.ts");





var ReportesPage = /** @class */ (function () {
    function ReportesPage(modalController) {
        this.modalController = modalController;
    }
    ReportesPage.prototype.ngOnInit = function () {
    };
    ReportesPage.prototype.openStock = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _Modals_reporte_stock_reporte_stock_page__WEBPACK_IMPORTED_MODULE_4__["ReporteStockPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportesPage.prototype.openPedidos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _Modals_reporte_punto_pedido_reporte_punto_pedido_page__WEBPACK_IMPORTED_MODULE_3__["ReportePuntoPedidoPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reportes',
            template: __webpack_require__(/*! ./reportes.page.html */ "./src/app/Pages/reportes/reportes.page.html"),
            styles: [__webpack_require__(/*! ./reportes.page.scss */ "./src/app/Pages/reportes/reportes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ReportesPage);
    return ReportesPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-reportes-reportes-module.js.map