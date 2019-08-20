(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-inventario-transacciones-inventario-transacciones-module"],{

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
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
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

module.exports = "<app-header-modal titulo=\"Inventario\"></app-header-modal>\r\n<ion-content padding>\r\n  <ion-grid>\r\n    <ion-row justify-content-center>\r\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n        <ion-item lines=\"none\" color=\"primary\">\r\n            <ion-label text-wrap class=\"label\">{{producto.descripcion}}</ion-label>\r\n          <div slot=\"end\" text-center>\r\n            <ion-icon name=\"md-list-box\" (click)=\"seleccionarProducto()\"></ion-icon>\r\n          </div>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row justify-content-center>\r\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"floating\">Fecha</ion-label>\r\n          <ion-input type=\"date\"\r\n                     min=\"2000-01-01\"\r\n                     [max]=\"today\"\r\n                     [(ngModel)]=\"fecha\"\r\n                     [value]=\"fecha\"\r\n                     required>\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row justify-content-center>\r\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n        <ion-segment mode=\"ios\">\r\n          <ion-segment-button class=\"salida\"\r\n                              layout=\"icon-bottom\"\r\n                              (click)=\"salidaEntrada(2)\"\r\n                              mode=\"ios\">\r\n            <ion-icon name=\"remove\"></ion-icon>\r\n            <ion-label>Salida</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button class=\"entrada\"\r\n                              layout=\"icon-bottom\"\r\n                              (click)=\"salidaEntrada(1)\"\r\n                              mode=\"ios\"\r\n                              checked>\r\n            <ion-icon name=\"add\"></ion-icon>\r\n            <ion-label>Entrada</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row justify-content-center>\r\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n        <ion-segment mode=\"ios\">\r\n          <ion-segment-button class=\"plus-minus\"\r\n                              layout=\"icon-bottom\"\r\n                              (click)=\"sumaRestar(2)\"\r\n                              mode=\"ios\">\r\n            <ion-icon name=\"remove\"></ion-icon>\r\n            <ion-label></ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button class=\"input\"\r\n                              layout=\"icon-bottom\"\r\n                              mode=\"ios\">\r\n              <ion-input type=\"tel\"\r\n                         class=\"round\"\r\n                         name=\"phone\"\r\n                         maxlength=\"3\"\r\n                         minlength=\"1\"\r\n                         min=\"1\"\r\n                         pattern=\"\\d*\"\r\n                         [(ngModel)]=\"cantidad\"\r\n                         text-center>\r\n             </ion-input>\r\n          </ion-segment-button>\r\n          <ion-segment-button class=\"plus-minus\"\r\n                              layout=\"icon-bottom\"\r\n                              (click)=\"sumaRestar(1)\"\r\n                              mode=\"ios\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n            <ion-label></ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row justify-content-center>\r\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"floating\">Costo unitario</ion-label>\r\n          <ion-input type=\"tel\"\r\n                     name=\"phone\"\r\n                     maxlength=\"8\"\r\n                     minlength=\"1\"\r\n                     pattern=\"\\d*\"\r\n                     placeholder=\"00.00\"\r\n                     [(ngModel)]=\"costo\">\r\n         </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n <ion-button class=\"button\"\r\n             (click)=\"guardar()\"\r\n             color=\"primary\"\r\n             size=\"default\"\r\n             shape=\"round\">Guardar Transaccion<ion-icon slot=\"end\" name=\"save\"></ion-icon>\r\n  </ion-button>\r\n  <ion-button class=\"buttonExit\"\r\n              (click)=\"Salir()\"\r\n              color=\"medium\"\r\n              size=\"default\"\r\n              shape=\"round\">Cancelar<ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/Pages/inventario-transacciones/inventario-transacciones.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plus-minus {\n  --background: white !important;\n  --background-activated: #3880ff;\n  --background-checked: #3880ff !important; }\n\n.input {\n  --background: white !important;\n  --background-activated: white;\n  --background-checked: white !important;\n  --color: black; }\n\n.round {\n  border: solid 2px;\n  border-color: #3880ff;\n  border-radius: 15px;\n  background: white;\n  color: black;\n  font-size: 1.3em;\n  width: 60%; }\n\n.salida {\n  --background: white !important;\n  --background-activated: #f04141;\n  --background-checked: #f04141 !important; }\n\n.entrada {\n  --background: white !important;\n  --background-activated: #10dc60;\n  --background-checked: #10dc60 !important; }\n\n.label {\n  font-size: 2em; }\n\n.button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaW52ZW50YXJpby10cmFuc2FjY2lvbmVzL0M6XFxVc2Vyc1xcRmFiaWFuXFxEb2N1bWVudHNcXGJvZGVnaW5cXGFwcEJvZGVnaW4vc3JjXFxhcHBcXFBhZ2VzXFxpbnZlbnRhcmlvLXRyYW5zYWNjaW9uZXNcXGludmVudGFyaW8tdHJhbnNhY2Npb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBYTtFQUNiLCtCQUF1QjtFQUN2Qix3Q0FBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBYTtFQUNiLDZCQUF1QjtFQUN2QixzQ0FBcUI7RUFDckIsY0FBUSxFQUFBOztBQUdWO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBUyxFQUFBOztBQUdYO0VBQ0UsOEJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsd0NBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsOEJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsd0NBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsWUFBWTtFQUNaLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvaW52ZW50YXJpby10cmFuc2FjY2lvbmVzL2ludmVudGFyaW8tdHJhbnNhY2Npb25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGx1cy1taW51c3tcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzM4ODBmZjtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzM4ODBmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucm91bmR7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzg4MGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgd2lkdGg6NjAlO1xyXG59XHJcblxyXG4uc2FsaWRhe1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZjA0MTQxO1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZjA0MTQxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lbnRyYWRhe1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMTBkYzYwO1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMTBkYzYwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDUwMDtcclxufVxyXG5cclxuLmJ1dHRvbkV4aXR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogNTAwO1xyXG59XHJcbiJdfQ== */"

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



var InventarioTransaccionesPage = /** @class */ (function () {
    function InventarioTransaccionesPage(alertController) {
        this.alertController = alertController;
        this.producto = {
            id_producto: 1,
            descripcion: "zapatito cochinito",
            imagen: [
                'assets/nuevo/camera.png'
            ],
            codigo: "01-04-07-0000"
        };
        this.cantidad = 1;
        this.today = new Date().toISOString().slice(0, 10);
        this.fecha = new Date().toISOString().slice(0, 10);
        this.costo = null;
    }
    InventarioTransaccionesPage.prototype.ngOnInit = function () {
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
    InventarioTransaccionesPage.prototype.salidaEntrada = function (p_valor) {
        this.tipoTransaccion = p_valor;
    };
    InventarioTransaccionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventario-transacciones',
            template: __webpack_require__(/*! ./inventario-transacciones.page.html */ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.html"),
            styles: [__webpack_require__(/*! ./inventario-transacciones.page.scss */ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], InventarioTransaccionesPage);
    return InventarioTransaccionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-inventario-transacciones-inventario-transacciones-module.js.map