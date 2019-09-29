(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-reset-pass-reset-pass-module"],{

/***/ "./src/app/Pages/reset-pass/reset-pass.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/reset-pass/reset-pass.module.ts ***!
  \*******************************************************/
/*! exports provided: ResetPassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPageModule", function() { return ResetPassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_pass_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-pass.page */ "./src/app/Pages/reset-pass/reset-pass.page.ts");









var routes = [
    {
        path: '',
        component: _reset_pass_page__WEBPACK_IMPORTED_MODULE_8__["ResetPassPage"]
    }
];
var ResetPassPageModule = /** @class */ (function () {
    function ResetPassPageModule() {
    }
    ResetPassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"].forRoot(),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            exports: [
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"]
            ],
            declarations: [_reset_pass_page__WEBPACK_IMPORTED_MODULE_8__["ResetPassPage"]]
        })
    ], ResetPassPageModule);
    return ResetPassPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/reset-pass/reset-pass.page.html":
/*!*******************************************************!*\
  !*** ./src/app/Pages/reset-pass/reset-pass.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in></app-header-in>\n<ion-content padding>\n  <ion-text class=\"ion-text-center\"color=\"dark\">\n    <h3>Restablece tu contraseña</h3>\n  </ion-text>\n  <div text-center [hidden]=\"!usuario\">\n    <ion-avatar class=\"avatar\">\n      <img [src]=\"logo\">\n    </ion-avatar>\n    <h3>Bienvenido: {{usuario}}</h3>\n  </div>\n  <form #form=\"ngForm\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">Telefono</ion-label>\n            <ion-input name=\"celular\" maxlength=\"8\" minlength=\"8\" type=\"tel\" pattern=\"\\d*\" ngModel required></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"celularConfirmado\">\n            <ion-label position=\"floating\">Codigo</ion-label>\n            <ion-input name=\"codigo\" type=\"text\" placeholder=\"Codigo\" ngModel required></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"codigoConfirmado\">\n            <ion-label position=\"floating\">Nueva Contraseña</ion-label>\n            <ion-input name=\"nuevaPass\" type=\"password\" minlength=\"8\" placeholder=\"Nueva Contraseña\" ngModel required></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"codigoConfirmado\">\n            <ion-label position=\"floating\">Nueva Contraseña</ion-label>\n            <ion-input name=\"nuevaPassC\" type=\"password\" minlength=\"8\" placeholder=\"Nueva Contraseña\" ngModel required></ion-input>\n          </ion-item>\n          <div padding>\n            <re-captcha [hidden]=\"captchaPassed\" (resolved)=\"captchaResolved($event)\" siteKey=\"6Lf1160UAAAAAAJEp0oDnFN1jnQURXzUUYyzmPcG\"></re-captcha>\n            <ion-button (click)=\"botonAvance(form)\"\n                        disabled=\"{{form.invalid  ||  !this.captchaPassed}}\"\n                        size=\"large\"\n                        expand=\"block\"><ion-ripple-effect></ion-ripple-effect>{{ textBoton }}</ion-button>\n          </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/reset-pass/reset-pass.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/reset-pass/reset-pass.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #3880ff; }\n\n.avatar {\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvUGFnZXMvcmVzZXQtcGFzcy9yZXNldC1wYXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFRLEVBQUE7O0FBRVo7RUFDRyxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9yZXNldC1wYXNzL3Jlc2V0LXBhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgLS1jb2xvcjogIzM4ODBmZjtcbn1cbi5hdmF0YXJ7XG4gICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Pages/reset-pass/reset-pass.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/reset-pass/reset-pass.page.ts ***!
  \*****************************************************/
/*! exports provided: ResetPassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPage", function() { return ResetPassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var ResetPassPage = /** @class */ (function () {
    function ResetPassPage(Pro_user, loadingController, toastController, Pro_router, storage, zone) {
        this.Pro_user = Pro_user;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.Pro_router = Pro_router;
        this.storage = storage;
        this.zone = zone;
        this.celularConfirmado = false;
        this.codigoConfirmado = false;
        this.textBoton = "Siguiente";
        this.codigoEnviado = null;
        this.isLoading = false;
        this.usuario = null;
        this.logo = "assets/img/splash.png";
        this.captchaPassed = false;
    }
    ResetPassPage.prototype.ngOnInit = function () {
    };
    ResetPassPage.prototype.botonAvance = function (p_valor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.present()];
                    case 1:
                        _a.sent();
                        if (!!this.celularConfirmado) return [3 /*break*/, 2];
                        this.Pro_user.confirmarCelular(p_valor.form.value.celular).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(resp != null)) return [3 /*break*/, 4];
                                        if (!(resp.codigo != null)) return [3 /*break*/, 3];
                                        this.codigoEnviado = resp.codigo;
                                        this.id_usuario = resp.id_usuario;
                                        this.celularConfirmado = true;
                                        this.usuario = resp.usuario;
                                        this.textBoton = "Confirmar Codigo";
                                        console.log(this.codigoEnviado);
                                        return [4 /*yield*/, this.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.showToast('Te enviamos un mensaje de confirmacion', 4000)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [3 /*break*/, 7];
                                    case 4: return [4 /*yield*/, this.showToast('Celular no registrado', 5000)];
                                    case 5:
                                        _a.sent();
                                        return [4 /*yield*/, this.dismiss()];
                                    case 6:
                                        _a.sent();
                                        _a.label = 7;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 12];
                    case 2:
                        if (!(this.celularConfirmado && !this.codigoConfirmado)) return [3 /*break*/, 8];
                        if (!(p_valor.form.value.codigo == this.codigoEnviado)) return [3 /*break*/, 4];
                        this.codigoConfirmado = true;
                        this.textBoton = "Cambiar Contraseña";
                        return [4 /*yield*/, this.dismiss()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.dismiss()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.showToast('Verifica tu numero de celular', 4000)];
                    case 6:
                        _a.sent();
                        this.celularConfirmado = false;
                        this.textBoton = 'Siguiente';
                        _a.label = 7;
                    case 7: return [3 /*break*/, 12];
                    case 8:
                        if (!(this.celularConfirmado && this.codigoConfirmado)) return [3 /*break*/, 12];
                        if (!(p_valor.form.value.nuevaPassC != null && p_valor.form.value.nuevaPass != null)) return [3 /*break*/, 12];
                        if (!(p_valor.form.value.nuevaPassC == p_valor.form.value.nuevaPass)) return [3 /*break*/, 9];
                        this.Pro_user.cambiarPassword(this.id_usuario, p_valor.form.value.nuevaPass).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.login(p_valor.form.value.nuevaPass)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.dismiss()];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 12];
                    case 9: return [4 /*yield*/, this.showToast('Tus contraeñas no coinciden', 5000)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.dismiss()];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    ResetPassPage.prototype.present = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                                duration: 5000,
                            }).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { return console.log('abort presenting'); });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ResetPassPage.prototype.dismiss = function () {
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
    ResetPassPage.prototype.showToast = function (p_mensaje, p_duration) {
        if (p_duration === void 0) { p_duration = 2000; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: p_mensaje,
                            duration: p_duration
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ResetPassPage.prototype.login = function (p_password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id_onesignal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('id_onesignal')];
                    case 2:
                        id_onesignal = _a.sent();
                        this.Pro_user.login(this.usuario, p_password, id_onesignal).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(resp != null)) return [3 /*break*/, 3];
                                        if (!resp.token) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.storage.set('token', resp.token)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.dismiss()];
                                    case 2:
                                        _a.sent();
                                        this.Pro_router.navigate(['/home']);
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ResetPassPage.prototype.captchaResolved = function (response) {
        var _this = this;
        this.zone.run(function () {
            _this.captchaPassed = true;
            _this.captchaResponse = response;
        });
    };
    ResetPassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-reset-pass',
            template: __webpack_require__(/*! ./reset-pass.page.html */ "./src/app/Pages/reset-pass/reset-pass.page.html"),
            styles: [__webpack_require__(/*! ./reset-pass.page.scss */ "./src/app/Pages/reset-pass/reset-pass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
    ], ResetPassPage);
    return ResetPassPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-reset-pass-reset-pass-module.js.map