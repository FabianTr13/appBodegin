(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-categorias-categorias-module"],{

/***/ "./src/app/Pages/categorias/categorias.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/categorias/categorias.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categorias.page */ "./src/app/Pages/categorias/categorias.page.ts");








var routes = [
    {
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_7__["CategoriasPage"]
    }
];
var CategoriasPageModule = /** @class */ (function () {
    function CategoriasPageModule() {
    }
    CategoriasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_7__["CategoriasPage"]]
        })
    ], CategoriasPageModule);
    return CategoriasPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/categorias/categorias.page.html":
/*!*******************************************************!*\
  !*** ./src/app/Pages/categorias/categorias.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Categorías\"></app-header-in>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                            pullingText=\"Hale para recargar\"\n                            refreshingSpinner=\"circles\"\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"busqueda\">\n    <form #form=\"ngForm\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col>\n            <div #list>\n              <ion-item>\n                <ion-icon slot=\"end\"\n                          name=\"search\"\n                          color=\"#f4f4f4\">\n                </ion-icon>\n                <ion-input type=\"text\"\n                           placeholder=\"Buscar\"\n                           clearInput\n                           [(ngModel)]='textSearch'\n                           (ionChange)='busqueda($event.target.value)'\n                           (input)='busqueda($event.target.value)'\n                           >\n                </ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of categorias\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\"\n           (click)=\"categoriaDelete(item.id_categoria, item.descripcion)\">Eliminar<ion-icon slot=\"end\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n      </ion-item-options>\n      <ion-item>\n        <ion-label>{{item.descripcion}}</ion-label>\n        <ion-icon slot=\"end\" name=\"create\" (click)=\"categoriaInsertUpdate(item.id_categoria, 'UPDATE', item.descripcion)\"></ion-icon>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" #fab>\n    <ion-fab-button (click)=\"categoriaInsertUpdate(null,'INSERT', '')\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/categorias/categorias.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/categorias/categorias.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n  ion-col div ion-item ion-label {\n    font-size: 1.5em !important; }\n  .busqueda {\n  background: #3880ff; }\n  .footer {\n  position: fixed;\n  bottom: 20px;\n  z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvUGFnZXMvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLHFCQUFhO0VBQ2IsYUFBUSxFQUFBO0VBSmhCO0lBTVUsMkJBQTJCLEVBQUE7RUFLckM7RUFDRSxtQkFBbUIsRUFBQTtFQUdyQjtFQUNHLGVBQWM7RUFDZCxZQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2x7XG4gIGRpdntcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICB9XG59XG4uYnVzcXVlZGF7XG4gIGJhY2tncm91bmQ6ICMzODgwZmY7XG59XG5cbi5mb290ZXIge1xuICAgcG9zaXRpb246Zml4ZWQ7XG4gICBib3R0b206MjBweDtcbiAgIHotaW5kZXg6IDEwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/categorias/categorias.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/categorias/categorias.page.ts ***!
  \*****************************************************/
/*! exports provided: CategoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPage", function() { return CategoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _Services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var CategoriasPage = /** @class */ (function () {
    function CategoriasPage(Pro_categorias, storage, alertController, loadingController) {
        this.Pro_categorias = Pro_categorias;
        this.storage = storage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.textSearch = '';
    }
    CategoriasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_categorias.obtenerCategorias(token).subscribe(function (data) {
                _this.categorias = _this.categorias_backup = data;
            });
        });
    };
    CategoriasPage.prototype.categoriaInsertUpdate = function (p_id_categoria, p_accion, p_value) {
        if (p_value === void 0) { p_value = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var header, boton, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        header = p_accion == 'INSERT' ? 'Nueva Categoria' : 'Actualizar Categoria';
                        boton = p_accion == 'INSERT' ? 'Crear' : 'Actualizar';
                        return [4 /*yield*/, this.alertController.create({
                                header: header,
                                inputs: [
                                    {
                                        name: 'input',
                                        type: 'text',
                                        value: p_value,
                                        placeholder: 'Nombre'
                                    }
                                ],
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        cssClass: 'secondary'
                                    }, {
                                        text: boton,
                                        handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.Pro_categorias.InsertUpdateDeleteCategoria(p_id_categoria, data.input, p_accion).catch(function (err) { })];
                                                    case 1:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.refreshUpdate()];
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
    CategoriasPage.prototype.categoriaDelete = function (p_id_categoria, p_descripcion) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Eliminar Categoria',
                            message: "Eliminar " + p_descripcion,
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
                                                case 0: return [4 /*yield*/, this.Pro_categorias.InsertUpdateDeleteCategoria(p_id_categoria, data, 'DELETE')];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, this.refreshUpdate()];
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
    CategoriasPage.prototype.refreshUpdate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, event;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        _b = this;
                        return [4 /*yield*/, this.Pro_categorias.obtenerCategoriasAsync()];
                    case 1:
                        _a.categorias = _b.categorias_backup = _c.sent();
                        event = new MouseEvent('click', { bubbles: false });
                        return [4 /*yield*/, this.el.nativeElement.dispatchEvent(event)];
                    case 2:
                        _c.sent();
                        this.textSearch = 'HOLA';
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriasPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.refreshUpdate()];
                    case 1:
                        _a.sent();
                        event.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriasPage.prototype.busqueda = function (p_busqueda) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.categorias = [];
                this.categorias_backup.forEach(function (variable) {
                    if (variable.descripcion.toLowerCase().includes(p_busqueda.toLowerCase())) {
                        _this.categorias.push(variable);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('list'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CategoriasPage.prototype, "el", void 0);
    CategoriasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categorias',
            template: __webpack_require__(/*! ./categorias.page.html */ "./src/app/Pages/categorias/categorias.page.html"),
            styles: [__webpack_require__(/*! ./categorias.page.scss */ "./src/app/Pages/categorias/categorias.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], CategoriasPage);
    return CategoriasPage;
}());



/***/ }),

/***/ "./src/app/Services/categorias.service.ts":
/*!************************************************!*\
  !*** ./src/app/Services/categorias.service.ts ***!
  \************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Config_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config/configuration */ "./src/app/Config/configuration.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var CategoriasService = /** @class */ (function () {
    function CategoriasService(Pro_http, storage) {
        this.Pro_http = Pro_http;
        this.storage = storage;
    }
    CategoriasService.prototype.obtenerCategorias = function (p_token) {
        //Preparacion de header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](_Config_configuration__WEBPACK_IMPORTED_MODULE_3__["Header"]);
        //Preparacion de body
        var body = {
            token: p_token
        };
        var url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/categorias/categoriasList";
        return this.Pro_http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }));
    };
    CategoriasService.prototype.obtenerCategoriasAsync = function () {
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
                            _a);
                        url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/categorias/categoriasList";
                        return [2 /*return*/, this.Pro_http.post(url, body, { headers: headers }).toPromise()];
                }
            });
        });
    };
    CategoriasService.prototype.InsertUpdateDeleteCategoria = function (p_id_categoria, p_descripcion, p_accion) {
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
                            _a.id_categoria = p_id_categoria,
                            _a.nombre = p_descripcion,
                            _a.accion = p_accion,
                            _a);
                        url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/categorias/insertUpdateDeleteCategoria";
                        return [4 /*yield*/, this.Pro_http.post(url, body, { headers: headers }).toPromise()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    CategoriasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], CategoriasService);
    return CategoriasService;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-categorias-categorias-module.js.map