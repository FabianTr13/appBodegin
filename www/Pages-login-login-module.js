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

module.exports = "<ion-content color=\"primary\" padding>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\r\n    <ion-grid>\r\n      <ion-row color=\"primary\" justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div text-center>\r\n            <h3>Bienvenido</h3>\r\n            <ion-avatar class=\"avatar\">\r\n              <img src=\"assets/img/splash.png\">\r\n            </ion-avatar>\r\n          </div>\r\n\r\n          <div padding>\r\n            <ion-item>\r\n              <ion-input name=\"user\" type=\"text\" placeholder=\"Usuario\" [(ngModel)]=\"usuario\" required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Contraseña\" ngModel required (keyup.enter)=\"login(form)\"></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <ion-label routerLink=\"/reset-pass\" class=\"label-font\" text-right>Olvidaste tu contraseña?</ion-label>\r\n          <div padding>\r\n            <ion-button class=\"button-aling\" size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Iniciar</ion-button>\r\n          </div>\r\n          <div class=\"padding-aling\">\r\n            <ion-button size=\"large\"\r\n                        expand=\"block\"\r\n                        routerLink=\"/register\">Registrarse  <ion-ripple-effect></ion-ripple-effect></ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n\nion-button {\n  --background: #062f77; }\n\n.button-aling {\n  margin-top: 8px;\n  padding-bottom: 0px !important; }\n\n.padding-aling {\n  padding-top: 0px;\n  padding-right: 16px;\n  padding-left: 16px; }\n\n.avatar {\n  margin: auto; }\n\n.label-font {\n  font-size: 0.9em;\n  position: absolute;\n  right: 0;\n  border-bottom: 5px;\n  cursor: pointer;\n  text-decoration: underline;\n  padding-right: 17px !important;\n  padding-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvbG9naW4vQzpcXFVzZXJzXFxGYWJpYW5cXERvY3VtZW50c1xcYm9kZWdpblxcYXBwQm9kZWdpbi9zcmNcXGFwcFxcUGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUNiLGFBQVEsRUFBQTs7QUFFWjtFQUNJLHFCQUFhLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0csWUFBWSxFQUFBOztBQUVmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixRQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjJmNzc7XHJcbn1cclxuLmJ1dHRvbi1hbGluZ3tcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWRkaW5nLWFsaW5ne1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn1cclxuLmF2YXRhcntcclxuICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sYWJlbC1mb250IHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHJpZ2h0OjA7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4iXX0= */"

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







var LoginPage = /** @class */ (function () {
    function LoginPage(Pro_user, router, storage, toastController, loadingController) {
        var _this = this;
        this.Pro_user = Pro_user;
        this.router = router;
        this.storage = storage;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.isLoading = false;
        this.usuario = null;
        this.storage.get('usuario').then(function (resp) {
            _this.usuario = resp;
            _this.storage.remove('usuario').then(function (rr) { });
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.present()];
                    case 1:
                        _a.sent();
                        this.Pro_user.login(form.form.value.user, form.form.value.password).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(resp != null)) return [3 /*break*/, 4];
                                        if (!resp.token) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.storage.set('token', resp.token)];
                                    case 1:
                                        _a.sent();
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
                                        a.dismiss().then(function () { return console.log('abort presenting'); });
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
                        return [4 /*yield*/, this.loadingController.dismiss().then(function () { return console.log('dismissed'); })];
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-login-login-module.js.map