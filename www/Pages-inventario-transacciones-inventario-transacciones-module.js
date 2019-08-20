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

module.exports = "<app-header-in titulo=\"Inventario\"></app-header-in>\r\n<ion-content padding>\r\n  <ion-item>\r\n\r\n  </ion-item>\r\n <ion-segment mode=\"ios\">\r\n   <ion-segment-button class=\"plus-minus\"\r\n                       layout=\"icon-bottom\"\r\n                       mode=\"ios\">\r\n     <ion-icon name=\"remove\"></ion-icon>\r\n     <ion-label>Menos</ion-label>\r\n   </ion-segment-button>\r\n   <ion-segment-button class=\"input\"\r\n                       layout=\"icon-bottom\"\r\n                       mode=\"ios\">\r\n       <ion-input class=\"round\"\r\n                  name=\"phone\"\r\n                  maxlength=\"3\"\r\n                  minlength=\"1\"\r\n                  type=\"tel\"\r\n                  pattern=\"\\d*\"\r\n                  [(ngModel)]=\"cantidad\"\r\n                  text-center>\r\n      </ion-input>\r\n   </ion-segment-button>\r\n   <ion-segment-button class=\"plus-minus\"\r\n                       layout=\"icon-bottom\"\r\n                       mode=\"ios\">\r\n     <ion-icon name=\"add\"></ion-icon>\r\n     <ion-label>Mas</ion-label>\r\n   </ion-segment-button>\r\n </ion-segment>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/Pages/inventario-transacciones/inventario-transacciones.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plus-minus {\n  --background: white !important;\n  --background-activated: #3880ff;\n  --background-checked: #3880ff !important; }\n\n.input {\n  --background: white !important;\n  --background-activated: white;\n  --background-checked: white !important;\n  --color: black; }\n\n.round {\n  border: solid 2px;\n  border-color: #3880ff;\n  border-radius: 15px;\n  background: white;\n  color: black;\n  font-size: 1.3em;\n  width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaW52ZW50YXJpby10cmFuc2FjY2lvbmVzL0M6XFxVc2Vyc1xcRmFiaWFuXFxEb2N1bWVudHNcXGJvZGVnaW5cXGFwcEJvZGVnaW4vc3JjXFxhcHBcXFBhZ2VzXFxpbnZlbnRhcmlvLXRyYW5zYWNjaW9uZXNcXGludmVudGFyaW8tdHJhbnNhY2Npb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBYTtFQUNiLCtCQUF1QjtFQUN2Qix3Q0FBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBYTtFQUNiLDZCQUF1QjtFQUN2QixzQ0FBcUI7RUFDckIsY0FBUSxFQUFBOztBQUdWO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvaW52ZW50YXJpby10cmFuc2FjY2lvbmVzL2ludmVudGFyaW8tdHJhbnNhY2Npb25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGx1cy1taW51c3tcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzM4ODBmZjtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzM4ODBmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucm91bmR7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzg4MGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgd2lkdGg6NjAlO1xyXG59XHJcbiJdfQ== */"

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


var InventarioTransaccionesPage = /** @class */ (function () {
    function InventarioTransaccionesPage() {
    }
    InventarioTransaccionesPage.prototype.ngOnInit = function () {
    };
    InventarioTransaccionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventario-transacciones',
            template: __webpack_require__(/*! ./inventario-transacciones.page.html */ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.html"),
            styles: [__webpack_require__(/*! ./inventario-transacciones.page.scss */ "./src/app/Pages/inventario-transacciones/inventario-transacciones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InventarioTransaccionesPage);
    return InventarioTransaccionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-inventario-transacciones-inventario-transacciones-module.js.map