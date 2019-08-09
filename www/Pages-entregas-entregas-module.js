(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-entregas-entregas-module"],{

/***/ "./src/app/Pages/entregas/entregas.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/entregas/entregas.module.ts ***!
  \***************************************************/
/*! exports provided: EntregasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregasPageModule", function() { return EntregasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entregas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entregas.page */ "./src/app/Pages/entregas/entregas.page.ts");








var routes = [
    {
        path: '',
        component: _entregas_page__WEBPACK_IMPORTED_MODULE_7__["EntregasPage"]
    }
];
var EntregasPageModule = /** @class */ (function () {
    function EntregasPageModule() {
    }
    EntregasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_entregas_page__WEBPACK_IMPORTED_MODULE_7__["EntregasPage"]]
        })
    ], EntregasPageModule);
    return EntregasPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/entregas/entregas.page.html":
/*!***************************************************!*\
  !*** ./src/app/Pages/entregas/entregas.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Entrega\"></app-header-in>\n"

/***/ }),

/***/ "./src/app/Pages/entregas/entregas.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Pages/entregas/entregas.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2VudHJlZ2FzL2VudHJlZ2FzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/entregas/entregas.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/entregas/entregas.page.ts ***!
  \*************************************************/
/*! exports provided: EntregasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregasPage", function() { return EntregasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntregasPage = /** @class */ (function () {
    function EntregasPage() {
    }
    EntregasPage.prototype.ngOnInit = function () {
    };
    EntregasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entregas',
            template: __webpack_require__(/*! ./entregas.page.html */ "./src/app/Pages/entregas/entregas.page.html"),
            styles: [__webpack_require__(/*! ./entregas.page.scss */ "./src/app/Pages/entregas/entregas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntregasPage);
    return EntregasPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-entregas-entregas-module.js.map