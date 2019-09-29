(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-login-login-module"],{

/***/ "./src/app/Pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/Pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>Bienvenido</h3>\n            <ion-avatar class=\"avatar\">\n              <img src=\"assets/img/splash.png\">\n            </ion-avatar>\n          </div>\n\n          <div padding>\n            <ion-item>\n              <ion-input name=\"user\" type=\"text\" placeholder=\"Usuario\" [(ngModel)]=\"usuario\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Contraseña\" ngModel required (keyup.enter)=\"login(form)\"></ion-input>\n            </ion-item>\n          </div>\n          <ion-label routerLink=\"/reset-pass\" class=\"label-font\" text-right>Olvidaste tu contraseña?</ion-label>\n          <div padding>\n            <ion-button class=\"button-aling\" size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Iniciar</ion-button>\n          </div>\n          <div class=\"padding-aling\">\n            <ion-button size=\"large\"\n                        expand=\"block\"\n                        routerLink=\"/register\">Registrarse<ion-ripple-effect></ion-ripple-effect></ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row color=\"primary\" justify-content-center *ngIf=\"is_app\">\n        <ion-col align-self-center size-md=\"1\" size-lg=\"1\" size-xs=\"2\">\n          <ion-icon name=\"finger-print\" class=\"icon-size\" (click)=\"loginFinger()\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n\nion-button {\n  --background: #062f77; }\n\n.button-aling {\n  margin-top: 8px;\n  padding-bottom: 0px !important; }\n\n.padding-aling {\n  padding-top: 0px;\n  padding-right: 16px;\n  padding-left: 16px; }\n\n.avatar {\n  margin: auto; }\n\n.icon-size {\n  font-size: 64px;\n  margin: auto; }\n\n.label-font {\n  font-size: 0.9em;\n  position: absolute;\n  right: 0;\n  border-bottom: 5px;\n  cursor: pointer;\n  text-decoration: underline;\n  padding-right: 17px !important;\n  padding-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvUGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7RUFDYixhQUFRLEVBQUE7O0FBRVo7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUNFLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUVwQjtFQUNHLFlBQVksRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgLS1jb2xvcjogI2ZmZjtcbn1cbmlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDYyZjc3O1xufVxuLmJ1dHRvbi1hbGluZ3tcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucGFkZGluZy1hbGluZ3tcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmF2YXRhcntcbiAgIG1hcmdpbjogYXV0bztcbn1cblxuLmljb24tc2l6ZXtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sYWJlbC1mb250IHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHJpZ2h0OjA7XG4gIGJvcmRlci1ib3R0b206IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcGFkZGluZy1yaWdodDogMTdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _Config_configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Config/configuration */ "./src/app/Config/configuration.js");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js");










var LoginPage = /** @class */ (function () {
    function LoginPage(Pro_user, router, storage, toastController, loadingController, vibration, faio) {
        var _this = this;
        this.Pro_user = Pro_user;
        this.router = router;
        this.storage = storage;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.vibration = vibration;
        this.faio = faio;
        this.isLoading = false;
        this.usuario = null;
        this.is_app = null;
        this.storage.get('usuario').then(function (resp) {
            _this.usuario = resp;
            _this.storage.remove('usuario').then(function (rr) { });
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.is_app = _Config_configuration__WEBPACK_IMPORTED_MODULE_7__["isApp"];
        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.loginFinger()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); }); }, 2000);
    };
    LoginPage.prototype.login = function (form, kind, p_finger) {
        if (kind === void 0) { kind = 1; }
        if (p_finger === void 0) { p_finger = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var credential, id_onesignal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        credential = {
                            user: kind == 1 ? form.form.value.user : p_finger.usuario,
                            pass: kind == 1 ? form.form.value.password : p_finger.password
                        };
                        return [4 /*yield*/, this.present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('id_onesignal')];
                    case 2:
                        id_onesignal = _a.sent();
                        this.Pro_user.login(credential.user, credential.pass, id_onesignal).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(resp != null)) return [3 /*break*/, 4];
                                        if (!resp.token) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.storage.set('token', resp.token)];
                                    case 1:
                                        _a.sent();
                                        this.vibration.vibrate(500);
                                        return [4 /*yield*/, this.dismiss()];
                                    case 2:
                                        _a.sent();
                                        this.router.navigate(['/home']);
                                        _a.label = 3;
                                    case 3: return [3 /*break*/, 7];
                                    case 4: return [4 /*yield*/, this.dismiss()];
                                    case 5:
                                        _a.sent();
                                        return [4 /*yield*/, this.showToast('Credenciales no validas')];
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
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginFinger = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get('finger').then(function (finger) {
                    if (finger == 'on') {
                        _this.faio.show({
                            clientId: 'FingerprintCredential',
                            clientSecret: 'o7aoOMYUbyxaD23oFAnJ',
                            disableBackup: true,
                        })
                            .then(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var finger;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.Pro_user.loginFinger()];
                                    case 1:
                                        finger = _a.sent();
                                        console.log(finger);
                                        this.login(null, 2, finger);
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function (error) { return console.log(error); });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.present = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                                duration: 2000
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
    LoginPage.prototype.showToast = function (p_mensaje, p_duration) {
        if (p_duration === void 0) { p_duration = 2000; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: p_mensaje,
                            duration: p_duration,
                            position: 'top',
                            showCloseButton: true,
                            closeButtonText: 'Cerrar'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.dismiss = function () {
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/Pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/Pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__["Vibration"],
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_8__["FingerprintAIO"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-login-login-module.js.map