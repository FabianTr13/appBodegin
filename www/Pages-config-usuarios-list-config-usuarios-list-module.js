(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-config-usuarios-list-config-usuarios-list-module"],{

/***/ "./src/app/Modals/config-edit-usuarios/config-edit-usuarios.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Modals/config-edit-usuarios/config-edit-usuarios.module.ts ***!
  \****************************************************************************/
/*! exports provided: ConfigEditUsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditUsuariosPageModule", function() { return ConfigEditUsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_edit_usuarios_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-edit-usuarios.page */ "./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");







var ConfigEditUsuariosPageModule = /** @class */ (function () {
    function ConfigEditUsuariosPageModule() {
    }
    ConfigEditUsuariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            ],
            declarations: [_config_edit_usuarios_page__WEBPACK_IMPORTED_MODULE_5__["ConfigEditUsuariosPage"]],
            exports: []
        })
    ], ConfigEditUsuariosPageModule);
    return ConfigEditUsuariosPageModule;
}());



/***/ }),

/***/ "./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-modal titulo=\"Usuarios\"></app-header-modal>\n<ion-content>\n  <ion-item *ngIf=\"accion=='UPDATE'\" lines=\"none\" (click)=\"InhabilitarUsuario()\">\n    <ion-label text-right>Eliminar</ion-label>\n      <ion-icon color=\"danger\" name=\"person\"></ion-icon>\n  </ion-item>\n  <form #form=\"ngForm\" (ngSubmit)=\"InsertUpdateUsuario()\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div padding>\n            <ion-item>\n                <ion-label position=\"floating\">Nombre</ion-label>\n              <ion-input name=\"nombre\"\n                         type=\"text\"\n                         [(ngModel)]=\"usuario.nombre\"\n                         required>\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Tipo de consumo</ion-label>\n              <ion-select value=\"{{id_perfil}}\" [(ngModel)]=\"id_perfil\" (ionChange)=\"perfilget($event)\" placeholder=\"Seleccione un perfil\">\n                <ion-select-option *ngFor=\"let item of perfiles\"\n                                    value=\"{{item.id_perfil}}\">{{item.descripcion}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Teléfono</ion-label>\n              <ion-input name=\"phone\"\n                         maxlength=\"8\"\n                         minlength=\"8\"\n                         type=\"tel\"\n                         pattern=\"\\d*\"\n                         [(ngModel)]=\"usuario.telefono\"\n                         required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Usuario</ion-label>\n              <ion-input name=\"usuario\"\n                         type=\"text\"\n                         [(ngModel)]=\"usuario.usuario\"\n                         required>\n              </ion-input>\n            </ion-item>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div padding>\n      <ion-button class=\"button\"\n                  [disabled]=\"form.invalid\"\n                  color=\"primary\"\n                  size=\"default\"\n                  type=\"submit\"\n                  shape=\"round\">Guardar<ion-icon slot=\"end\" name=\"save\"></ion-icon></ion-button>\n\n      <ion-button class=\"buttonExit\"\n                  (click)=\"Salir()\"\n                  color=\"medium\"\n                  size=\"default\"\n                  shape=\"round\">Salir<ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\n    </div>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kYWxzL2NvbmZpZy1lZGl0LXVzdWFyaW9zL0M6XFxVc2Vyc1xcRmFiaWFuXFxEb2N1bWVudHNcXGJvZGVnaW5cXGFwcEJvZGVnaW4vc3JjXFxhcHBcXE1vZGFsc1xcY29uZmlnLWVkaXQtdXN1YXJpb3NcXGNvbmZpZy1lZGl0LXVzdWFyaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsWUFBWTtFQUNaLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvTW9kYWxzL2NvbmZpZy1lZGl0LXVzdWFyaW9zL2NvbmZpZy1lZGl0LXVzdWFyaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b257XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDUwMDtcclxufVxyXG5cclxuLmJ1dHRvbkV4aXR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogNTAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.ts ***!
  \**************************************************************************/
/*! exports provided: ConfigEditUsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditUsuariosPage", function() { return ConfigEditUsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _Services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/client.service */ "./src/app/Services/client.service.ts");









var ConfigEditUsuariosPage = /** @class */ (function () {
    function ConfigEditUsuariosPage(modalController, storage, Pro_usuarios, loadingController, Pro_cliente, toastController, alertController) {
        this.modalController = modalController;
        this.storage = storage;
        this.Pro_usuarios = Pro_usuarios;
        this.loadingController = loadingController;
        this.Pro_cliente = Pro_cliente;
        this.toastController = toastController;
        this.alertController = alertController;
        this.usuario = {
            id_usuario: null,
            nombre: null,
            telefono: null,
            id_perfil: 2,
            usuario: null
        };
        this.perfiles = [];
        this.id_perfil = 2;
        this.isLoading = false;
    }
    ConfigEditUsuariosPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id_usuario && this.id_usuario != null) {
            this.Pro_usuarios.getUsuario(this.id_usuario).subscribe(function (data) {
                _this.usuario = data;
                _this.id_perfil = _this.usuario.id_perfil;
            });
        }
        this.Pro_usuarios.getUPerfiles().subscribe(function (data) {
            _this.perfiles = data;
        });
    };
    ConfigEditUsuariosPage.prototype.perfilget = function (p_id_consumo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.usuario.id_perfil = p_id_consumo.target.value;
                return [2 /*return*/];
            });
        });
    };
    ConfigEditUsuariosPage.prototype.showToast = function (p_mensaje, p_duration) {
        if (p_duration === void 0) { p_duration = 3000; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: p_mensaje,
                            duration: p_duration,
                            position: 'middle',
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
    ConfigEditUsuariosPage.prototype.InsertUpdateUsuario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.present()];
                    case 1:
                        _a.sent();
                        this.Pro_usuarios;
                        this.Pro_usuarios.validaUsuario(this.usuario.usuario, this.usuario.id_usuario).subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(result);
                                        if (!result) return [3 /*break*/, 6];
                                        if (!(result == true)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.Pro_usuarios.InsertUpdateUsuario(this.usuario, this.accion).catch(function (err) { })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.dismiss()];
                                    case 2:
                                        _a.sent();
                                        this.modalController.dismiss();
                                        return [3 /*break*/, 5];
                                    case 3:
                                        this.showToast('Usuario no esta disponible');
                                        return [4 /*yield*/, this.dismiss()];
                                    case 4:
                                        _a.sent();
                                        _a.label = 5;
                                    case 5: return [3 /*break*/, 8];
                                    case 6:
                                        this.showToast('Usuario no esta disponible');
                                        return [4 /*yield*/, this.dismiss()];
                                    case 7:
                                        _a.sent();
                                        _a.label = 8;
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.showToast('Usuario no esta disponible');
                                        return [4 /*yield*/, this.dismiss()];
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
    ConfigEditUsuariosPage.prototype.present = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                                duration: 10000
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
    ConfigEditUsuariosPage.prototype.InhabilitarUsuario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Eliminar usuario',
                            message: "Esta seguro que desea eliminar",
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Eliminar',
                                    handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.Pro_usuarios.eliminarUsuario(this.usuario.id_usuario)];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, this.modalController.dismiss()];
                                                case 2:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigEditUsuariosPage.prototype.dismiss = function () {
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
    ConfigEditUsuariosPage.prototype.Salir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfigEditUsuariosPage.prototype, "accion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfigEditUsuariosPage.prototype, "id_usuario", void 0);
    ConfigEditUsuariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config-edit-usuarios',
            template: __webpack_require__(/*! ./config-edit-usuarios.page.html */ "./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.html"),
            styles: [__webpack_require__(/*! ./config-edit-usuarios.page.scss */ "./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _Services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _Services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ConfigEditUsuariosPage);
    return ConfigEditUsuariosPage;
}());



/***/ }),

/***/ "./src/app/Pages/config-usuarios-list/config-usuarios-list.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Pages/config-usuarios-list/config-usuarios-list.module.ts ***!
  \***************************************************************************/
/*! exports provided: ConfigUsuariosListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUsuariosListPageModule", function() { return ConfigUsuariosListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_usuarios_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-usuarios-list.page */ "./src/app/Pages/config-usuarios-list/config-usuarios-list.page.ts");
/* harmony import */ var _Modals_config_edit_usuarios_config_edit_usuarios_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modals/config-edit-usuarios/config-edit-usuarios.module */ "./src/app/Modals/config-edit-usuarios/config-edit-usuarios.module.ts");
/* harmony import */ var _Modals_config_edit_usuarios_config_edit_usuarios_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Modals/config-edit-usuarios/config-edit-usuarios.page */ "./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.ts");










var routes = [
    {
        path: '',
        component: _config_usuarios_list_page__WEBPACK_IMPORTED_MODULE_7__["ConfigUsuariosListPage"]
    }
];
var ConfigUsuariosListPageModule = /** @class */ (function () {
    function ConfigUsuariosListPageModule() {
    }
    ConfigUsuariosListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _Modals_config_edit_usuarios_config_edit_usuarios_page__WEBPACK_IMPORTED_MODULE_9__["ConfigEditUsuariosPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _Modals_config_edit_usuarios_config_edit_usuarios_module__WEBPACK_IMPORTED_MODULE_8__["ConfigEditUsuariosPageModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_config_usuarios_list_page__WEBPACK_IMPORTED_MODULE_7__["ConfigUsuariosListPage"]]
        })
    ], ConfigUsuariosListPageModule);
    return ConfigUsuariosListPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/config-usuarios-list/config-usuarios-list.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/Pages/config-usuarios-list/config-usuarios-list.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Usuarios\"></app-header-in>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                            pullingText=\"Hale para recargar\"\n                            refreshingSpinner=\"circles\"\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor=\"let item of usuarios\">\n    <ion-item color=\"primary\">\n      <ion-label>{{item.nombre | uppercase}}</ion-label>\n      <ion-icon (click)=\"configUsuarios(item.id_usuario, 'UPDATE')\"\n                slot=\"end\"\n                name=\"create\"></ion-icon>\n    </ion-item>\n    <ion-card-content>\n      <ion-label><ion-icon name=\"contact\"></ion-icon> {{item.perfil}}</ion-label><br>\n      <ion-label><ion-icon name=\"at\"></ion-icon> Usuario: {{item.usuario | uppercase}}</ion-label><br>\n      <ion-label><ion-icon name=\"call\"></ion-icon> Telefono: {{item.celular}}</ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" #fab>\n    <ion-fab-button (click)=\"configUsuarios(null, 'INSERT')\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/config-usuarios-list/config-usuarios-list.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Pages/config-usuarios-list/config-usuarios-list.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2NvbmZpZy11c3Vhcmlvcy1saXN0L2NvbmZpZy11c3Vhcmlvcy1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/config-usuarios-list/config-usuarios-list.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/config-usuarios-list/config-usuarios-list.page.ts ***!
  \*************************************************************************/
/*! exports provided: ConfigUsuariosListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUsuariosListPage", function() { return ConfigUsuariosListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _Modals_config_edit_usuarios_config_edit_usuarios_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Modals/config-edit-usuarios/config-edit-usuarios.page */ "./src/app/Modals/config-edit-usuarios/config-edit-usuarios.page.ts");






var ConfigUsuariosListPage = /** @class */ (function () {
    function ConfigUsuariosListPage(storage, Pro_usuarios, modalController) {
        this.storage = storage;
        this.Pro_usuarios = Pro_usuarios;
        this.modalController = modalController;
        this.usuarios = [];
    }
    ConfigUsuariosListPage.prototype.ngOnInit = function () {
        this.loads();
    };
    ConfigUsuariosListPage.prototype.configUsuarios = function (p_id_usuario, p_accion) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _Modals_config_edit_usuarios_config_edit_usuarios_page__WEBPACK_IMPORTED_MODULE_5__["ConfigEditUsuariosPage"],
                            componentProps: {
                                id_usuario: p_id_usuario,
                                accion: p_accion
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        _a.sent();
                        this.loads();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigUsuariosListPage.prototype.loads = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_usuarios.getUsuariosConfigList(token).subscribe(function (data) {
                _this.usuarios = data;
            });
        });
    };
    ConfigUsuariosListPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loads();
                event.target.complete();
                return [2 /*return*/];
            });
        });
    };
    ConfigUsuariosListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config-usuarios-list',
            template: __webpack_require__(/*! ./config-usuarios-list.page.html */ "./src/app/Pages/config-usuarios-list/config-usuarios-list.page.html"),
            styles: [__webpack_require__(/*! ./config-usuarios-list.page.scss */ "./src/app/Pages/config-usuarios-list/config-usuarios-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _Services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ConfigUsuariosListPage);
    return ConfigUsuariosListPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-config-usuarios-list-config-usuarios-list-module.js.map