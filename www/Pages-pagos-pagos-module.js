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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pagos_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagos.page */ "./src/app/Pages/pagos/pagos.page.ts");









var routes = [
    {
        path: '',
        component: _pagos_page__WEBPACK_IMPORTED_MODULE_8__["PagosPage"]
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
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pagos_page__WEBPACK_IMPORTED_MODULE_8__["PagosPage"]]
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

module.exports = "<app-header-in titulo=\"Pagos\"></app-header-in>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                            pullingText=\"Hale para recargar\"\n                            refreshingSpinner=\"circles\"\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"2\" size-lg=\"2\" size-xs=\"6\">\n        <ion-label text-center class=\"restante\">Dias Restantes</ion-label>\n      </ion-col>\n      <ion-col align-self-center size-md=\"2\" size-lg=\"1\" size-xs=\"5\"></ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"2\" size-lg=\"1\" size-xs=\"4\">\n        <ion-label class=\"counter\">{{pagos.dias_restantes}}</ion-label>\n      </ion-col>\n      <ion-col align-self-center size-md=\"2\" size-lg=\"2\" size-xs=\"6\">\n        <ion-button color=\"warning\"\n                    (click)=\"pagar()\"\n                    *ngIf=\"es_movil\"\n                    expand=\"full\">Pagar &nbsp;<ion-icon color=\"success\"\n                                                        name=\"ios-cash\">\n                                              </ion-icon>\n        </ion-button>\n        <div id=\"paypal-checkout-btn\" [hidden]=\"es_movil\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg=\"4\" size-xs=\"12\">\n        <ion-item color=\"primary\">\n          <ion-item color=\"primary\">\n            <p slot=\"end\" class=\"historial\">Historial de facturas</p>\n          </ion-item>\n          <ion-icon slot=\"end\" name=\"list-box\"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row  justify-content-center\n              class=\"row_historial\"\n              *ngFor=\"let item of pagos.historial\">\n      <ion-col align-self-center size-md=\"5\" size-lg=\"3\" size-xs=\"10\">\n        <ion-label>\n          <h2 class=\"id_pago\">{{item.id}}</h2>\n          <h4 class=\"fecha_pago\">Fecha: {{item.fecha}}</h4>\n        </ion-label>\n      </ion-col>\n      <ion-col align-self-center size-md=\"1\" size-lg=\"1\" size-xs=\"2\">\n        <p class=\"monto\">{{item.monto | currency:\"USD\":true:\"1.2\"}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/pagos/pagos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Pages/pagos/pagos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counter {\n  font-size: 3.0rem;\n  font-weight: bold;\n  color: green; }\n\n.restante {\n  font-size: 0.7rem; }\n\n.historial {\n  font-size: 0.9rem;\n  font-weight: bold; }\n\n.monto {\n  font-size: 1.0rem;\n  font-weight: bold;\n  color: green; }\n\n.fecha_pago {\n  font-size: 0.7rem; }\n\n.id_pago {\n  font-size: 0.9rem;\n  color: #3880ff !important;\n  font-weight: bold; }\n\n.row_historial {\n  border-top: solid 1px #b7b7b7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvUGFnZXMvcGFnb3MvcGFnb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvcGFnb3MvcGFnb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZXJ7XG4gIGZvbnQtc2l6ZTogMy4wcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucmVzdGFudGV7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuXG4uaGlzdG9yaWFse1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tb250b3tcbiAgZm9udC1zaXplOiAxLjByZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mZWNoYV9wYWdve1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLmlkX3BhZ297XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzM4ODBmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJvd19oaXN0b3JpYWx7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjYjdiN2I3O1xufVxuIl19 */"

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
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _Services_pagos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/pagos.service */ "./src/app/Services/pagos.service.ts");
/* harmony import */ var _Config_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Config/configuration */ "./src/app/Config/configuration.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var PagosPage = /** @class */ (function () {
    function PagosPage(payPal1, Pro_pagos, storage, loadingController) {
        var _this = this;
        this.payPal1 = payPal1;
        this.Pro_pagos = Pro_pagos;
        this.storage = storage;
        this.loadingController = loadingController;
        this.addScript = false;
        this.monto = '0';
        this.pagos = {
            dias_restantes: 0,
            historial: []
        };
        this.es_movil = false;
        this.isLoading = false;
        this.paypalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AWx9vd7DrXzsMzwbAKBkqgfY4nUDfsc-cSmtg-b2GJeGDcWJs1mtNTqdiUAakKenVMHrsqnQ1gHoCcK_',
                production: '<your-production-key here>'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: _this.monto, currency: 'USD' } }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.Pro_pagos.insertPago(payment, payment.id, this.monto)];
                            case 1:
                                _a.sent();
                                this.reload();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        };
    }
    PagosPage.prototype.ngOnInit = function () {
        this.reload();
        this.es_movil = _Config_configuration__WEBPACK_IMPORTED_MODULE_5__["isApp"];
    };
    PagosPage.prototype.reload = function () {
        var _this = this;
        this.present();
        this.storage.get('token').then(function (token) {
            _this.Pro_pagos.getPagos(token).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.pagos = data;
                            this.monto = data.monto;
                            return [4 /*yield*/, this.dismiss()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    PagosPage.prototype.pagar = function () {
        var _this = this;
        this.payPal1.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AWx9vd7DrXzsMzwbAKBkqgfY4nUDfsc-cSmtg-b2GJeGDcWJs1mtNTqdiUAakKenVMHrsqnQ1gHoCcK_'
        }).then(function () {
            _this.payPal1.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalConfiguration"]({})).then(function () {
                var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalPayment"](_this.monto, 'USD', 'Description', 'sale');
                _this.payPal1.renderSinglePaymentUI(payment).then(function (respose) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.Pro_pagos.insertPago(respose, respose.response.id, this.monto)];
                            case 1:
                                _a.sent();
                                this.reload();
                                return [2 /*return*/];
                        }
                    });
                }); }, function () { });
            }, function () { });
        }, function () { });
    };
    PagosPage.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-checkout-btn');
            });
        }
    };
    PagosPage.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    PagosPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.reload();
                event.target.complete();
                return [2 /*return*/];
            });
        });
    };
    PagosPage.prototype.present = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                                duration: 5000
                            }).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PagosPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController.dismiss().then(function () { })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PagosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagos',
            template: __webpack_require__(/*! ./pagos.page.html */ "./src/app/Pages/pagos/pagos.page.html"),
            styles: [__webpack_require__(/*! ./pagos.page.scss */ "./src/app/Pages/pagos/pagos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPal"],
            _Services_pagos_service__WEBPACK_IMPORTED_MODULE_4__["PagosService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
    ], PagosPage);
    return PagosPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-pagos-pagos-module.js.map