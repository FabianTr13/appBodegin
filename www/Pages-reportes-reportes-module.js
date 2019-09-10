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

module.exports = "<app-header-modal titulo=\"Punto de pedido\"></app-header-modal>\n<ion-content class=\"contenedor\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                          pullingText=\"Hale para recargar\"\n                          refreshingSpinner=\"circles\"\n                          refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=\"car\" *ngFor=\"let item of reporte\">\n    <ion-item class=\"car-head\" lines=\"none\">\n     <ion-avatar>\n       <img [src]=\"item.fotografia | domSanitizer\" />\n     </ion-avatar>\n     <p>&nbsp;{{item.nombre}}</p>\n     <ion-avatar slot=\"end\">\n       <img [src]=\"item.estado | domSanitizer\" />\n     </ion-avatar>\n    </ion-item>\n    <ion-card-content>\n      <ion-label>\n        <ion-badge *ngIf=\"item.id_tipo_consumo == 1\" color=\"primary\">Unidad</ion-badge>\n        <ion-badge *ngIf=\"item.id_tipo_consumo == 2\" color=\"tertiary\">Porcentaje&nbsp;{{item.porcentaje_actual}}%</ion-badge>\n      </ion-label>\n      <ion-row>\n        En inventario: {{item.cantidad}}\n      </ion-row>\n      <ion-row>\n        Punto de pedido: {{item.punto_pedido}}\n      </ion-row>\n      <ion-row>\n        Cantidad recomendada a pedir: {{item.cantidad_pedir}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"border\"></div>\n  <ion-button shape=\"round\"\n              class=\"buttonExit\"\n              size=\"default\"\n              (click)=\"Salir()\"\n              color=\"medium\"\n              expand=\"block\">Salir <ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Modals/reporte-punto-pedido/reporte-punto-pedido.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car {\n  border: solid 1px #cacaca;\n  --background: white; }\n\n.precio {\n  font-size: 1.4em;\n  color: #52f450;\n  font-weight: bold; }\n\n.border {\n  height: 50px; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.center-boton {\n  text-align: center; }\n\n.car-head {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #6e6368;\n  border-top: solid 4px #3880ff; }\n\n@media (min-width: 600px) {\n  .boton {\n    width: 45%;\n    float: right; } }\n\n@media (min-width: 700px) {\n  .boton {\n    width: 33%;\n    float: right; } }\n\n@media (min-width: 900px) {\n  .boton {\n    width: 25%;\n    float: right; } }\n\n@media (min-width: 1100px) {\n  .boton {\n    width: 20%;\n    float: right; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvTW9kYWxzL3JlcG9ydGUtcHVudG8tcGVkaWRvL3JlcG9ydGUtcHVudG8tcGVkaWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBYSxFQUFBOztBQUdmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWSxFQUFBLEVBQ2I7O0FBRUg7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZLEVBQUEsRUFDYjs7QUFFSDtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVksRUFBQSxFQUNiOztBQUVIO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9Nb2RhbHMvcmVwb3J0ZS1wdW50by1wZWRpZG8vcmVwb3J0ZS1wdW50by1wZWRpZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGVuZWRvcntcbiAgLy8tLWJhY2tncm91bmQ6I2UwZTBlMDtcbn1cblxuLmNhcntcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NhY2FjYTtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnByZWNpb3tcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgY29sb3I6ICM1MmY0NTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9yZGVye1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5idXR0b25FeGl0e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogMDtcbiAgei1pbmRleDogNTAwO1xufVxuXG4uY2VudGVyLWJvdG9ue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXItaGVhZHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzZlNjM2ODtcbiAgYm9yZGVyLXRvcDogc29saWQgNHB4ICMzODgwZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuYm90b257XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAuYm90b257XG4gICAgd2lkdGg6IDMzJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuYm90b257XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcbiAgLmJvdG9ue1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG4iXX0= */"

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

module.exports = "<app-header-modal titulo=\"Inventario de seguridad\"></app-header-modal>\n<ion-content class=\"contenedor\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                          pullingText=\"Hale para recargar\"\n                          refreshingSpinner=\"circles\"\n                          refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=\"car\" *ngFor=\"let item of reporte\">\n    <ion-item class=\"car-head\" lines=\"none\">\n     <ion-avatar>\n       <img [src]=\"item.fotografia | domSanitizer\" />\n     </ion-avatar>\n     <p>&nbsp;{{item.nombre}}</p>\n     <ion-avatar slot=\"end\">\n       <img [src]=\"item.estado | domSanitizer\" />\n     </ion-avatar>\n    </ion-item>\n    <ion-card-content>\n      <ion-label>\n        <ion-badge *ngIf=\"item.id_tipo_consumo == 1\" color=\"primary\">Unidad</ion-badge>\n        <ion-badge *ngIf=\"item.id_tipo_consumo == 2\" color=\"tertiary\">Porcentaje&nbsp;{{item.porcentaje_actual}}%</ion-badge>\n      </ion-label>\n      <ion-row>\n        En inventario: {{item.cantidad}}\n      </ion-row>\n      <ion-row>\n        Minimo de inventario: {{item.minimo}}\n      </ion-row>\n      <ion-row>\n        Promedio de venta diario: {{item.promedio_venta_diaria}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"border\"></div>\n  <ion-button shape=\"round\"\n              class=\"buttonExit\"\n              size=\"default\"\n              (click)=\"Salir()\"\n              color=\"medium\"\n              expand=\"block\">Salir <ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Modals/reporte-stock/reporte-stock.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/Modals/reporte-stock/reporte-stock.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car {\n  border: solid 1px #cacaca;\n  --background: white; }\n\n.border {\n  height: 50px; }\n\n.precio {\n  font-size: 1.4em;\n  color: #52f450;\n  font-weight: bold; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.center-boton {\n  text-align: center; }\n\n.car-head {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #6e6368;\n  border-top: solid 4px #3880ff; }\n\n@media (min-width: 600px) {\n  .boton {\n    width: 45%;\n    float: right; } }\n\n@media (min-width: 700px) {\n  .boton {\n    width: 33%;\n    float: right; } }\n\n@media (min-width: 900px) {\n  .boton {\n    width: 25%;\n    float: right; } }\n\n@media (min-width: 1100px) {\n  .boton {\n    width: 20%;\n    float: right; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvTW9kYWxzL3JlcG9ydGUtc3RvY2svcmVwb3J0ZS1zdG9jay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVksRUFBQSxFQUNiOztBQUVIO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWSxFQUFBLEVBQ2I7O0FBRUg7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZLEVBQUEsRUFDYjs7QUFFSDtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvTW9kYWxzL3JlcG9ydGUtc3RvY2svcmVwb3J0ZS1zdG9jay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250ZW5lZG9ye1xuICAvLy0tYmFja2dyb3VuZDojZTBlMGUwO1xufVxuXG4uY2Fye1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2FjYWNhO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYm9yZGVye1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5wcmVjaW97XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGNvbG9yOiAjNTJmNDUwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbkV4aXR7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA1MDA7XG59XG5cbi5jZW50ZXItYm90b257XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhci1oZWFke1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNmU2MzY4O1xuICBib3JkZXItdG9wOiBzb2xpZCA0cHggIzM4ODBmZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5ib3RvbntcbiAgICB3aWR0aDogNDUlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5ib3RvbntcbiAgICB3aWR0aDogMzMlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5ib3RvbntcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xuICAuYm90b257XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "<app-header-in titulo=\"Reportes\"></app-header-in>\n<ion-content>\n\n<ion-list>\n  <ion-item detail (click)=\"openStock()\">\n    <ion-label>\n      Stock minimo de inventarios\n    </ion-label>\n  </ion-item>\n  <ion-item detail (click)=\"openPedidos()\">\n    <ion-label>\n      puntos de pedidos\n    </ion-label>\n  </ion-item>\n  <!-- <ion-item detail>\n    <ion-label>\n      Ganancias de servicios mensual\n    </ion-label>\n  </ion-item>\n  <ion-item detail>\n    <ion-label>\n      Movimientos de inventario mensual\n    </ion-label>\n  </ion-item> -->\n  <!-- <> -->\n</ion-list>\n\n\n\n\n</ion-content>\n"

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