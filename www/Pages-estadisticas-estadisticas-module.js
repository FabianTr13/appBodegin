(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-estadisticas-estadisticas-module"],{

/***/ "./src/app/Pages/estadisticas/estadisticas.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/Pages/estadisticas/estadisticas.module.ts ***!
  \***********************************************************/
/*! exports provided: EstadisticasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasPageModule", function() { return EstadisticasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _estadisticas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./estadisticas.page */ "./src/app/Pages/estadisticas/estadisticas.page.ts");








var routes = [
    {
        path: '',
        component: _estadisticas_page__WEBPACK_IMPORTED_MODULE_7__["EstadisticasPage"]
    }
];
var EstadisticasPageModule = /** @class */ (function () {
    function EstadisticasPageModule() {
    }
    EstadisticasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_estadisticas_page__WEBPACK_IMPORTED_MODULE_7__["EstadisticasPage"]]
        })
    ], EstadisticasPageModule);
    return EstadisticasPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/estadisticas/estadisticas.page.html":
/*!***********************************************************!*\
  !*** ./src/app/Pages/estadisticas/estadisticas.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Estadistica\"></app-header-in>\n"

/***/ }),

/***/ "./src/app/Pages/estadisticas/estadisticas.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/Pages/estadisticas/estadisticas.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2VzdGFkaXN0aWNhcy9lc3RhZGlzdGljYXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/estadisticas/estadisticas.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/Pages/estadisticas/estadisticas.page.ts ***!
  \*********************************************************/
/*! exports provided: EstadisticasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasPage", function() { return EstadisticasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EstadisticasPage = /** @class */ (function () {
    function EstadisticasPage() {
    }
    EstadisticasPage.prototype.ngOnInit = function () {
    };
    EstadisticasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estadisticas',
            template: __webpack_require__(/*! ./estadisticas.page.html */ "./src/app/Pages/estadisticas/estadisticas.page.html"),
            styles: [__webpack_require__(/*! ./estadisticas.page.scss */ "./src/app/Pages/estadisticas/estadisticas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EstadisticasPage);
    return EstadisticasPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-estadisticas-estadisticas-module.js.map