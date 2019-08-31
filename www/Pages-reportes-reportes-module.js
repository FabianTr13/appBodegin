(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-reportes-reportes-module"],{

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
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
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

module.exports = "<app-header-in titulo=\"Reportes\"></app-header-in>\n<ion-content>\n\n<ion-list>\n  <ion-item detail>\n    <ion-label>\n      Stock minimo de inventarios\n    </ion-label>\n  </ion-item>\n  <ion-item detail>\n    <ion-label>\n      puntos de pedidos\n    </ion-label>\n  </ion-item>\n  <ion-item detail>\n    <ion-label>\n      Ganancias de servicios mensual\n    </ion-label>\n  </ion-item>\n  <ion-item detail>\n    <ion-label>\n      Movimientos de inventario mensual\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n\n\n\n</ion-content>\n"

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


var ReportesPage = /** @class */ (function () {
    function ReportesPage() {
    }
    ReportesPage.prototype.ngOnInit = function () {
    };
    ReportesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reportes',
            template: __webpack_require__(/*! ./reportes.page.html */ "./src/app/Pages/reportes/reportes.page.html"),
            styles: [__webpack_require__(/*! ./reportes.page.scss */ "./src/app/Pages/reportes/reportes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportesPage);
    return ReportesPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-reportes-reportes-module.js.map