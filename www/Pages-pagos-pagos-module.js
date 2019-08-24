(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-pagos-pagos-module"],{

/***/ "./src/app/Pages/pagos/pagos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/pagos/pagos.module.ts ***!
  \*********************************************/
/*! exports provided: PagosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosPageModule", function() { return PagosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pagos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagos.page */ "./src/app/Pages/pagos/pagos.page.ts");







var routes = [
    {
        path: '',
        component: _pagos_page__WEBPACK_IMPORTED_MODULE_6__["PagosPage"]
    }
];
var PagosPageModule = /** @class */ (function () {
    function PagosPageModule() {
    }
    PagosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pagos_page__WEBPACK_IMPORTED_MODULE_6__["PagosPage"]]
        })
    ], PagosPageModule);
    return PagosPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/pagos/pagos.page.html":
/*!*********************************************!*\
  !*** ./src/app/Pages/pagos/pagos.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>pagos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <button type=\"button\" (click)=\"pagar()\" name=\"button\">Pagar</button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/pagos/pagos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Pages/pagos/pagos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3BhZ29zL3BhZ29zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/pagos/pagos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/pagos/pagos.page.ts ***!
  \*******************************************/
/*! exports provided: PagosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosPage", function() { return PagosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _Services_pagos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/pagos.service */ "./src/app/Services/pagos.service.ts");




var PagosPage = /** @class */ (function () {
    function PagosPage(payPal, Pro_pagos) {
        this.payPal = payPal;
        this.Pro_pagos = Pro_pagos;
        this.monto = '1';
    }
    PagosPage.prototype.ngOnInit = function () {
    };
    PagosPage.prototype.pagar = function () {
        var _this = this;
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AWx9vd7DrXzsMzwbAKBkqgfY4nUDfsc-cSmtg-b2GJeGDcWJs1mtNTqdiUAakKenVMHrsqnQ1gHoCcK_'
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalConfiguration"]({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(function () {
                var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalPayment"](_this.monto, 'USD', 'Description', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function (respose) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(respose);
                                return [4 /*yield*/, this.Pro_pagos.insertPago(respose, this.monto)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, function () {
                    // Error or render dialog closed without being successful
                    console.log('error el se salio');
                });
            }, function () {
                // Error in configuration
                console.log('esta mal confiruado');
            });
        }, function () {
            // Error in initialization, maybe PayPal isn't supported or something else
            console.log('paypal is not supported');
        });
    };
    PagosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagos',
            template: __webpack_require__(/*! ./pagos.page.html */ "./src/app/Pages/pagos/pagos.page.html"),
            styles: [__webpack_require__(/*! ./pagos.page.scss */ "./src/app/Pages/pagos/pagos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPal"],
            _Services_pagos_service__WEBPACK_IMPORTED_MODULE_3__["PagosService"]])
    ], PagosPage);
    return PagosPage;
}());



/***/ }),

/***/ "./src/app/Services/pagos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/pagos.service.ts ***!
  \*******************************************/
/*! exports provided: PagosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosService", function() { return PagosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Config_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config/configuration */ "./src/app/Config/configuration.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var PagosService = /** @class */ (function () {
    function PagosService(Pro_http, storage) {
        this.Pro_http = Pro_http;
        this.storage = storage;
    }
    PagosService.prototype.insertPago = function (p_response, p_monto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, body, _a, url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](_Config_configuration__WEBPACK_IMPORTED_MODULE_3__["Header"]);
                        _a = {};
                        return [4 /*yield*/, this.storage.get('token')];
                    case 1:
                        body = (_a.token = _b.sent(),
                            _a.id = p_response.response.id,
                            _a.monto = p_monto,
                            _a.response = JSON.stringify(p_response),
                            _a);
                        url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/pagos/insertPago";
                        return [2 /*return*/, this.Pro_http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                                return result;
                            }))];
                }
            });
        });
    };
    PagosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], PagosService);
    return PagosService;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-pagos-pagos-module.js.map