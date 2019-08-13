(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-servicios-servicios-module"],{

/***/ "./src/app/Pages/servicios/servicios.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/servicios/servicios.module.ts ***!
  \*****************************************************/
/*! exports provided: ServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPageModule", function() { return ServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servicios.page */ "./src/app/Pages/servicios/servicios.page.ts");








var routes = [
    {
        path: '',
        component: _servicios_page__WEBPACK_IMPORTED_MODULE_7__["ServiciosPage"]
    }
];
var ServiciosPageModule = /** @class */ (function () {
    function ServiciosPageModule() {
    }
    ServiciosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_servicios_page__WEBPACK_IMPORTED_MODULE_7__["ServiciosPage"]]
        })
    ], ServiciosPageModule);
    return ServiciosPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/servicios/servicios.page.html":
/*!*****************************************************!*\
  !*** ./src/app/Pages/servicios/servicios.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Servicios\"></app-header-in>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                            pullingText=\"Hale para recargar\"\n                            refreshingSpinner=\"circles\"\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"busqueda\">\n    <form>\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col>\n            <div #list>\n              <ion-item>\n                <ion-icon slot=\"end\"\n                          name=\"search\"\n                          color=\"#f4f4f4\">\n                </ion-icon>\n                <ion-input type=\"text\"\n                           placeholder=\"Buscar\"\n                           clearInput\n                           [(ngModel)]='textSearch'\n                           (ionChange)='busqueda($event.target.value)'\n                           (input)='busqueda($event.target.value)'\n                           >\n                </ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of servicios\" (click)=\"editarServicio(item.id_servicio)\">\n      <ion-item>\n        <ion-label>{{item.descripcion}}</ion-label>\n        <ion-icon slot=\"end\" name=\"create\"></ion-icon>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" #fab>\n    <ion-fab-button (click)=\"insertServicio()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/servicios/servicios.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/Pages/servicios/servicios.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n  ion-col div ion-item ion-label {\n    font-size: 1.5em !important; }\n  .busqueda {\n  background: #3880ff; }\n  .footer {\n  position: fixed;\n  bottom: 20px;\n  z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvUGFnZXMvc2VydmljaW9zL3NlcnZpY2lvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxxQkFBYTtFQUNiLGFBQVEsRUFBQTtFQUpoQjtJQU1VLDJCQUEyQixFQUFBO0VBS3JDO0VBQ0UsbUJBQW1CLEVBQUE7RUFHckI7RUFDRyxlQUFjO0VBQ2QsWUFBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3NlcnZpY2lvcy9zZXJ2aWNpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbHtcbiAgZGl2e1xuICAgIGlvbi1pdGVte1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5idXNxdWVkYXtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcbn1cblxuLmZvb3RlciB7XG4gICBwb3NpdGlvbjpmaXhlZDtcbiAgIGJvdHRvbToyMHB4O1xuICAgei1pbmRleDogMTAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/servicios/servicios.page.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/servicios/servicios.page.ts ***!
  \***************************************************/
/*! exports provided: ServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPage", function() { return ServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _Services_servicios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/servicios.service */ "./src/app/Services/servicios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ServiciosPage = /** @class */ (function () {
    function ServiciosPage(Pro_servicios, storage, alertController, loadingController, router, toastController) {
        this.Pro_servicios = Pro_servicios;
        this.storage = storage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.toastController = toastController;
        this.textSearch = '';
    }
    ServiciosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_servicios.serviciosList(token).subscribe(function (data) {
                _this.servicios = _this.servicios_backup = data;
            });
        });
    };
    ServiciosPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        _b = this;
                        return [4 /*yield*/, this.Pro_servicios.serviciosListAsync()];
                    case 1:
                        _a.servicios = _b.servicios_backup = _c.sent();
                        event.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiciosPage.prototype.busqueda = function (p_busqueda) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.servicios = [];
                this.servicios_backup.forEach(function (variable) {
                    if (variable.descripcion.toLowerCase().includes(p_busqueda.toLowerCase())) {
                        _this.servicios.push(variable);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ServiciosPage.prototype.insertServicio = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Nuevo servicio',
                            inputs: [
                                {
                                    name: 'input',
                                    type: 'text',
                                    value: null,
                                    placeholder: 'Nombre'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    cssClass: 'secondary'
                                }, {
                                    text: 'Cambiar',
                                    handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var id_servicio, _a, _b;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    if (!(data.input != null && data.input.trim().length)) return [3 /*break*/, 3];
                                                    return [4 /*yield*/, this.Pro_servicios.insertServicio(data.input).catch(function (err) { })];
                                                case 1:
                                                    id_servicio = _c.sent();
                                                    _a = this;
                                                    _b = this;
                                                    return [4 /*yield*/, this.Pro_servicios.serviciosListAsync()];
                                                case 2:
                                                    _a.servicios = _b.servicios_backup = _c.sent();
                                                    this.editarServicio(id_servicio);
                                                    return [3 /*break*/, 5];
                                                case 3: return [4 /*yield*/, this.showToast('Nombre vacio')];
                                                case 4:
                                                    _c.sent();
                                                    _c.label = 5;
                                                case 5: return [2 /*return*/];
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
    ServiciosPage.prototype.showToast = function (p_mensaje, p_duration) {
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
    ServiciosPage.prototype.editarServicio = function (p_id_servicio) {
        this.router.navigate(['/servicio-config', p_id_servicio]);
    };
    ServiciosPage.prototype.nuevoServicio = function () {
        this.router.navigate(['/servicio-config', 0]);
    };
    ServiciosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicios',
            template: __webpack_require__(/*! ./servicios.page.html */ "./src/app/Pages/servicios/servicios.page.html"),
            styles: [__webpack_require__(/*! ./servicios.page.scss */ "./src/app/Pages/servicios/servicios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_servicios_service__WEBPACK_IMPORTED_MODULE_3__["ServiciosService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], ServiciosPage);
    return ServiciosPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-servicios-servicios-module.js.map