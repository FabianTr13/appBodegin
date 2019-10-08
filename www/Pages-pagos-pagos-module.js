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

module.exports = "<app-header-in titulo=\"Pagos\"></app-header-in>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\r\n                            pullingText=\"Hale para recargar\"\r\n                            refreshingSpinner=\"circles\"\r\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid>\r\n    <ion-row justify-content-center>\r\n      <ion-col align-self-center size-md=\"2\" size-lg=\"2\" size-xs=\"6\">\r\n        <ion-label text-center class=\"restante\">Dias Restantes</ion-label>\r\n      </ion-col>\r\n      <ion-col align-self-center size-md=\"2\" size-lg=\"1\" size-xs=\"5\"></ion-col>\r\n    </ion-row>\r\n    <ion-row justify-content-center>\r\n      <ion-col align-self-center size-md=\"2\" size-lg=\"1\" size-xs=\"4\">\r\n        <ion-label class=\"counter\">{{pagos.dias_restantes}}</ion-label>\r\n      </ion-col>\r\n      <ion-col align-self-center size-md=\"2\" size-lg=\"2\" size-xs=\"6\">\r\n        <ion-button color=\"warning\"\r\n                    (click)=\"pagar()\"\r\n                    *ngIf=\"es_movil\"\r\n                    expand=\"full\">Pagar &nbsp;<ion-icon color=\"success\"\r\n                                                        name=\"ios-cash\">\r\n                                              </ion-icon>\r\n        </ion-button>\r\n        <div id=\"paypal-checkout-btn\" [hidden]=\"es_movil\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row justify-content-center>\r\n      <ion-col align-self-center size-md=\"6\" size-lg=\"4\" size-xs=\"12\">\r\n        <ion-item color=\"primary\">\r\n          <ion-item color=\"primary\">\r\n            <p slot=\"end\" class=\"historial\">Historial de facturas</p>\r\n          </ion-item>\r\n          <ion-icon slot=\"end\" name=\"list-box\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row  justify-content-center\r\n              class=\"row_historial\"\r\n              *ngFor=\"let item of pagos.historial\" (click)=\"downloadPdf(item.id_pago)\">\r\n      <ion-col align-self-center size-md=\"5\" size-lg=\"3\" size-xs=\"10\">\r\n        <ion-label>\r\n          <h2 class=\"id_pago\">{{item.id}}</h2>\r\n          <h4 class=\"fecha_pago\">Fecha: {{item.fecha}}</h4>\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col align-self-center size-md=\"1\" size-lg=\"1\" size-xs=\"2\">\r\n        <p class=\"monto\">{{item.monto | currency:\"USD\":true:\"1.2\"}}</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/pagos/pagos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Pages/pagos/pagos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counter {\n  font-size: 3.0rem;\n  font-weight: bold;\n  color: green; }\n\n.restante {\n  font-size: 0.7rem; }\n\n.historial {\n  font-size: 0.9rem;\n  font-weight: bold; }\n\n.monto {\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: green; }\n\n.fecha_pago {\n  font-size: 0.7rem; }\n\n.id_pago {\n  font-size: 0.9rem;\n  color: #3880ff !important;\n  font-weight: bold; }\n\n.row_historial {\n  border-top: solid 1px #b7b7b7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcGFnb3MvQzpcXFVzZXJzXFxGYWJpYW5cXERvY3VtZW50c1xcYm9kZWdpblxcYXBwQm9kZWdpbi9zcmNcXGFwcFxcUGFnZXNcXHBhZ29zXFxwYWdvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9wYWdvcy9wYWdvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRlcntcclxuICBmb250LXNpemU6IDMuMHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZXN0YW50ZXtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLmhpc3RvcmlhbHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm1vbnRve1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmZlY2hhX3BhZ297XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi5pZF9wYWdve1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiAjMzg4MGZmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yb3dfaGlzdG9yaWFse1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjYjdiN2I3O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;


var PagosPage = /** @class */ (function () {
    function PagosPage(payPal1, Pro_pagos, storage, loadingController, file, fileOpener, plt) {
        var _this = this;
        this.payPal1 = payPal1;
        this.Pro_pagos = Pro_pagos;
        this.storage = storage;
        this.loadingController = loadingController;
        this.file = file;
        this.fileOpener = fileOpener;
        this.plt = plt;
        this.addScript = false;
        this.monto = '0';
        this.pagos = {
            dias_restantes: 0,
            historial: []
        };
        this.es_movil = false;
        this.isLoading = false;
        this.pdfObj = null;
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
    //----------------------------------------------------------------------------
    PagosPage.prototype.share = function (id_pago) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pagos, docDefinition;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Pro_pagos.getFactura(id_pago)];
                    case 1:
                        pagos = _a.sent();
                        docDefinition = {
                            content: [
                                { text: 'Factura', style: 'header' },
                                { text: pagos['bodegin_nombre'], alignment: 'center' },
                                { text: 'RTN: ' + pagos['bodegin_rtn'], alignment: 'center' },
                                { text: 'CAI: ' + pagos['cai'], alignment: 'center' },
                                { text: 'Direccion: ' + pagos['bodegin_direccion'], alignment: 'center' },
                                { text: 'Telefono: ' + pagos['bodegin_telefono'], alignment: 'center' },
                                { text: 'Fecha: ' + pagos['fecha'], alignment: 'left' },
                                { text: 'Cliente:' + pagos['nombre_legal'], style: 'subheader' },
                                { text: 'RTN:' + pagos['rtn'], style: 'subheader' },
                                { text: 'Numero factura:' + pagos['numero_factura'], style: 'subheader' },
                                { text: 'Detalle', style: 'subheader' },
                                { text: '', style: 'story', margin: [0, 20, 0, 20] },
                                {
                                    layout: 'lightHorizontalLines',
                                    table: {
                                        headerRows: 1,
                                        widths: ['*', 'auto', 100, '*'],
                                        body: [
                                            ['Producto', 'Cant.', 'Precio Ant.', 'Total'],
                                            [pagos['descripcion'],
                                                '1',
                                                'L. ' + pagos['monto'],
                                                'L. ' + pagos['monto']
                                            ],
                                        ]
                                    }
                                }
                            ],
                            styles: {
                                header: {
                                    fontSize: 18,
                                    bold: true,
                                    alignment: 'center'
                                },
                                subheader: {
                                    fontSize: 14,
                                    bold: true,
                                    margin: [0, 15, 0, 0]
                                },
                                story: {
                                    italic: true,
                                    alignment: 'center',
                                    width: '50%',
                                }
                            }
                        };
                        this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.createPdf(docDefinition);
                        return [2 /*return*/];
                }
            });
        });
    };
    PagosPage.prototype.downloadPdf = function (id_pago) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.share(id_pago)];
                    case 1:
                        _a.sent();
                        if (this.plt.is('cordova')) {
                            this.pdfObj.getBuffer(function (buffer) {
                                var blob = new Blob([buffer], { type: 'application/pdf' });
                                _this.file.writeFile(_this.file.dataDirectory, 'mifactura.pdf', blob, { replace: true }).then(function (fileEntry) {
                                    _this.fileOpener.open(_this.file.dataDirectory + 'mifactura.pdf', 'application/pdf');
                                });
                            });
                        }
                        else {
                            this.pdfObj.download();
                        }
                        return [2 /*return*/];
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__["FileOpener"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
    ], PagosPage);
    return PagosPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-pagos-pagos-module.js.map