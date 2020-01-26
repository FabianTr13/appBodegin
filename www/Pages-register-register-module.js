(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-register-register-module"],{

/***/ "./src/app/Pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register.page */ "./src/app/Pages/register/register.page.ts");









var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"].forRoot()
            ],
            exports: [
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/Pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in></app-header-in>\r\n<ion-content padding>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"registrarUsuario(form)\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div text-center>\r\n            <h3>Bienvenido</h3>\r\n            <ion-avatar class=\"avatar\">\r\n              <img [src]=\"logo\">\r\n            </ion-avatar>\r\n          </div>\r\n\r\n          <div padding>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Nombre Comercial</ion-label>\r\n              <ion-input name=\"nombreComercial\" type=\"text\"  ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Nombre legal</ion-label>\r\n              <ion-input name=\"nombreLegal\" type=\"text\"  ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Rtn</ion-label>\r\n              <ion-input name=\"rtn\" type=\"text\"  pattern=\"\\d*\"  ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Teléfono</ion-label>\r\n              <ion-input name=\"phone\" maxlength=\"8\" minlength=\"8\" type=\"tel\" pattern=\"\\d*\" ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Correo</ion-label>\r\n              <ion-input name=\"correo\" type=\"email\" ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Dirección</ion-label>\r\n              <ion-input name=\"direccion\" type=\"text\" ngModel></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Usuario</ion-label>\r\n              <ion-input name=\"user\" type=\"text\"  ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Clave</ion-label>\r\n              <ion-input name=\"password\" minlength=\"8\" type=\"password\"  ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Repetir Clave</ion-label>\r\n              <ion-input name=\"passwordRepeat\" minlength=\"8\" type=\"password\" ngModel required></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div padding>\r\n            <re-captcha (resolved)=\"captchaResolved($event)\" siteKey=\"6Lf1160UAAAAAAJEp0oDnFN1jnQURXzUUYyzmPcG\"></re-captcha>\r\n            <ion-button size=\"large\" type=\"submit\" disabled=\"{{form.invalid  ||  !this.captchaPassed}}\" expand=\"block\">Registrar</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #3880ff; }\n\n.avatar {\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxGYWJpYW5cXERvY3VtZW50c1xcYm9kZWdpblxcYXBwQm9kZWdpbi9zcmNcXGFwcFxcUGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBUSxFQUFBOztBQUVaO0VBQ0csWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWNvbG9yOiAjMzg4MGZmO1xyXG59XHJcbi5hdmF0YXJ7XHJcbiAgIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/client.service */ "./src/app/Services/client.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var RegisterPage = /** @class */ (function () {
    function RegisterPage(Pro_cliente, toastController, Pro_router, Pro_user, storage, loadingController, zone) {
        this.Pro_cliente = Pro_cliente;
        this.toastController = toastController;
        this.Pro_router = Pro_router;
        this.Pro_user = Pro_user;
        this.storage = storage;
        this.loadingController = loadingController;
        this.zone = zone;
        this.logo = "assets/img/splash.png";
        this.isLoading = false;
        this.captchaPassed = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.registrarUsuario = function (p_form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(p_form.form.value.password != p_form.form.value.passwordRepeat)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.showToast('las contraseñas no coinciden', 3000)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.present()];
                    case 3:
                        _a.sent();
                        this.Pro_cliente.validarNuevoCliente(p_form.form.value).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(resp != null)) return [3 /*break*/, 5];
                                        if (!(resp == true)) return [3 /*break*/, 1];
                                        this.Pro_cliente.registraUsuario(p_form.form.value).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var id_onesignal;
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.storage.get('id_onesignal')];
                                                    case 1:
                                                        id_onesignal = _a.sent();
                                                        this.Pro_user.login(p_form.form.value.user, p_form.form.value.password, id_onesignal).subscribe(function (respAuth) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        if (!(respAuth != null)) return [3 /*break*/, 5];
                                                                        if (!respAuth.token) return [3 /*break*/, 5];
                                                                        return [4 /*yield*/, this.storage.set('token', respAuth.token)];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [4 /*yield*/, this.dismiss()];
                                                                    case 2:
                                                                        _a.sent();
                                                                        return [4 /*yield*/, this.login(p_form.form.value.user, p_form.form.value.password)];
                                                                    case 3:
                                                                        _a.sent();
                                                                        return [4 /*yield*/, this.showToast('Bienvenido')];
                                                                    case 4:
                                                                        _a.sent();
                                                                        _a.label = 5;
                                                                    case 5: return [2 /*return*/];
                                                                }
                                                            });
                                                        }); });
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
                                        return [3 /*break*/, 4];
                                    case 1: return [4 /*yield*/, this.showToast('El usuario ya existe')];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.dismiss()];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [3 /*break*/, 7];
                                    case 5: return [4 /*yield*/, this.dismiss()];
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
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.showToast = function (p_mensaje, p_duration) {
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
    RegisterPage.prototype.present = function () {
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
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegisterPage.prototype.dismiss = function () {
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
    RegisterPage.prototype.login = function (p_usuario, p_password) {
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
                        this.Pro_user.login(p_usuario, p_password, id_onesignal).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
    RegisterPage.prototype.captchaResolved = function (response) {
        var _this = this;
        this.zone.run(function () {
            _this.captchaPassed = true;
            _this.captchaResponse = response;
        });
    };
    RegisterPage.prototype.formValid = function () {
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/Pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/Pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-register-register-module.js.map