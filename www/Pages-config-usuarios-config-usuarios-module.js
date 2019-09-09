(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-config-usuarios-config-usuarios-module"],{

/***/ "./src/app/Pages/config-usuarios/config-usuarios.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/config-usuarios/config-usuarios.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConfigUsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUsuariosPageModule", function() { return ConfigUsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_usuarios_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config-usuarios.page */ "./src/app/Pages/config-usuarios/config-usuarios.page.ts");









var routes = [
    {
        path: '',
        component: _config_usuarios_page__WEBPACK_IMPORTED_MODULE_8__["ConfigUsuariosPage"]
    }
];
var ConfigUsuariosPageModule = /** @class */ (function () {
    function ConfigUsuariosPageModule() {
    }
    ConfigUsuariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_config_usuarios_page__WEBPACK_IMPORTED_MODULE_8__["ConfigUsuariosPage"]]
        })
    ], ConfigUsuariosPageModule);
    return ConfigUsuariosPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/config-usuarios/config-usuarios.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/config-usuarios/config-usuarios.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Cambio\"></app-header-in>\r\n<ion-content>\r\n  <input #fileInput hidden (change)=\"fileUpload()\" type=\"file\" name=\"pic\" accept=\"image/*\">\r\n  <form *ngIf=\"cliente.id_cliente!=null\"  #form=\"ngForm\" (ngSubmit)=\"updateUsuario()\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"6\" size-xs=\"12\">\r\n          <div text-center>\r\n            <ion-avatar class=\"avatar\">\r\n              <img [src]=\"cliente.foto[1] | domSanitizer\"\r\n                   (click)=\"presentActionSheet()\">\r\n            </ion-avatar>\r\n          </div>\r\n          <div padding>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Nombre Comercial</ion-label>\r\n              <ion-input name=\"nombreComercial\"\r\n                         type=\"text\"\r\n                         [(ngModel)]=\"cliente.nombre_comercial\"\r\n                         required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Nombre legal</ion-label>\r\n              <ion-input name=\"nombreLegal\"\r\n                         type=\"text\"\r\n                         [(ngModel)]=\"cliente.nombre_legal\"\r\n                         required>\r\n               </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Rtn</ion-label>\r\n              <ion-input name=\"rtn\"\r\n                         type=\"text\"\r\n                         pattern=\"\\d*\"\r\n                         [(ngModel)]=\"cliente.rtn\"\r\n                         required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Teléfono</ion-label>\r\n              <ion-input name=\"phone\"\r\n                         maxlength=\"8\"\r\n                         minlength=\"8\"\r\n                         type=\"tel\"\r\n                         pattern=\"\\d*\"\r\n                         [(ngModel)]=\"cliente.telefono\"\r\n                         required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Correo</ion-label>\r\n              <ion-input name=\"correo\"\r\n                         type=\"text\" [(ngModel)]=\"cliente.correo\"\r\n                        required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Dirección</ion-label>\r\n              <ion-input name=\"direccion\"\r\n                         type=\"text\" [(ngModel)]=\"cliente.direccion\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Usuario</ion-label>\r\n              <ion-input name=\"user\"\r\n                         type=\"text\"\r\n                         [(ngModel)]=\"cliente.usuario\"\r\n                         required>\r\n               </ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <ion-item lines=\"none\">\r\n            <ion-button class=\"button\"\r\n                        type=\"submit\"\r\n                        size=\"default\"\r\n                        shape=\"round\">Guardar<ion-icon slot=\"end\" name=\"save\"></ion-icon></ion-button>\r\n\r\n            <ion-button class=\"buttonExit\"\r\n                        (click)=\"configUsuarios()\"\r\n                        size=\"default\"\r\n                        shape=\"round\">Configurar Usuarios<ion-icon slot=\"end\" name=\"cog\"></ion-icon></ion-button>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/config-usuarios/config-usuarios.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/config-usuarios/config-usuarios.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\nion-label {\n  --color: #3880ff !important; }\n\n.avatar {\n  margin: auto; }\n\n.button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvY29uZmlnLXVzdWFyaW9zL0M6XFxVc2Vyc1xcRmFiaWFuXFxEb2N1bWVudHNcXGJvZGVnaW5cXGFwcEJvZGVnaW4vc3JjXFxhcHBcXFBhZ2VzXFxjb25maWctdXN1YXJpb3NcXGNvbmZpZy11c3Vhcmlvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBUSxFQUFBOztBQUVaO0VBQ0UsMkJBQVEsRUFBQTs7QUFFVjtFQUNHLFlBQVksRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsWUFBWTtFQUNaLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvY29uZmlnLXVzdWFyaW9zL2NvbmZpZy11c3Vhcmlvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIC0tY29sb3I6ICM2ZTYzNjg7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gIC0tY29sb3I6ICMzODgwZmYgIWltcG9ydGFudDtcclxufVxyXG4uYXZhdGFye1xyXG4gICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDUwMDtcclxufVxyXG5cclxuLmJ1dHRvbkV4aXR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogNTAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/config-usuarios/config-usuarios.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/config-usuarios/config-usuarios.page.ts ***!
  \***************************************************************/
/*! exports provided: ConfigUsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUsuariosPage", function() { return ConfigUsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/client.service */ "./src/app/Services/client.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Config_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Config/configuration */ "./src/app/Config/configuration.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var ConfigUsuariosPage = /** @class */ (function () {
    function ConfigUsuariosPage(Pro_cliente, storage, toastController, actionSheetController, camera, loadingController, router) {
        this.Pro_cliente = Pro_cliente;
        this.storage = storage;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.loadingController = loadingController;
        this.router = router;
        this.cliente = {
            id_cliente: null,
            nombre_legal: null,
            nombre_comercial: null,
            rtn: null,
            telefono: null,
            direccion: null,
            usuario: null,
            foto: [],
            correo: null
        };
        this.isLoading = false;
    }
    ConfigUsuariosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_cliente.recuperarCliente(token).subscribe(function (data) {
                _this.cliente = data;
                _this.cliente.foto = [];
                _this.cliente.foto.push(data.logo);
                _this.cliente.foto.push(data.logo);
            });
        });
    };
    ConfigUsuariosPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet, event_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_Config_configuration__WEBPACK_IMPORTED_MODULE_5__["isApp"]) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Imagen',
                                buttons: [{
                                        text: 'Fotografiar',
                                        handler: function () {
                                            _this.take();
                                        }
                                    },
                                    {
                                        text: 'Elegir',
                                        handler: function () {
                                            _this.loadImage();
                                        }
                                    },
                                    {
                                        text: 'Cancelar',
                                        icon: 'close',
                                        role: 'cancel',
                                        handler: function () {
                                        }
                                    }]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        event_1 = new MouseEvent('click', { bubbles: false });
                        return [4 /*yield*/, this.el.nativeElement.dispatchEvent(event_1)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ConfigUsuariosPage.prototype.take = function () {
        var _this = this;
        var options = {
            quality: 20,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then(function (imageData) {
            var img = window.Ionic.WebView.convertFileSrc(imageData);
            _this.cliente.foto = [];
            _this.cliente.foto.push(imageData);
            _this.cliente.foto.push(img);
        });
    };
    ConfigUsuariosPage.prototype.loadImage = function () {
        var _this = this;
        var options = {
            quality: 20,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cliente.foto = [];
            var img = window.Ionic.WebView.convertFileSrc(imageData);
            _this.cliente.foto.push(imageData);
            _this.cliente.foto.push(img);
        });
    };
    ConfigUsuariosPage.prototype.fileUpload = function () {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(this.el.nativeElement.files[0]);
        reader.onload = function (_event) {
            _this.cliente.foto = [];
            _this.cliente.foto.push(reader.result.toString());
            _this.cliente.foto.push(reader.result.toString());
        };
    };
    ConfigUsuariosPage.prototype.showToast = function (p_mensaje, p_duration) {
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
    ConfigUsuariosPage.prototype.configUsuarios = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigate(['configUsuariosList'])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigUsuariosPage.prototype.present = function () {
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
    ConfigUsuariosPage.prototype.dismiss = function () {
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
    ConfigUsuariosPage.prototype.guardarImagen = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filePath;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.cliente.foto[0] != 'assets/nuevo/camera.png') {
                            filePath = this.cliente.foto[0];
                            this.cliente.foto[0] = filePath;
                        }
                        if (!_Config_configuration__WEBPACK_IMPORTED_MODULE_5__["isApp"]) {
                            this.cliente.foto[0] = this.el.nativeElement.files[0];
                        }
                        return [4 /*yield*/, this.Pro_cliente.subirImagen(this.cliente.foto[0], this.cliente.id_cliente).catch(function (err) { })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigUsuariosPage.prototype.updateUsuario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.present()];
                    case 1:
                        _a.sent();
                        this.Pro_cliente.validaUsuario(this.cliente.id_cliente, this.cliente.usuario)
                            .subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(resp != null)) return [3 /*break*/, 5];
                                        if (!(resp == true)) return [3 /*break*/, 1];
                                        this.Pro_cliente.updateCliente(this.cliente).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.guardarImagen()];
                                                    case 1:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.dismiss()];
                                                    case 2:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.showToast('Cambios guardados con exito', 5000)];
                                                    case 3:
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
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ConfigUsuariosPage.prototype, "el", void 0);
    ConfigUsuariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config-usuarios',
            template: __webpack_require__(/*! ./config-usuarios.page.html */ "./src/app/Pages/config-usuarios/config-usuarios.page.html"),
            styles: [__webpack_require__(/*! ./config-usuarios.page.scss */ "./src/app/Pages/config-usuarios/config-usuarios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ConfigUsuariosPage);
    return ConfigUsuariosPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-config-usuarios-config-usuarios-module.js.map