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

module.exports = "<app-header-in titulo=\"Categorías\"></app-header-in>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\r\n                            pullingText=\"Hale para recargar\"\r\n                            refreshingSpinner=\"circles\"\r\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"busqueda\">\r\n    <form #form=\"ngForm\">\r\n      <ion-grid>\r\n        <ion-row color=\"primary\" justify-content-center>\r\n          <ion-col>\r\n            <div #list>\r\n              <ion-item>\r\n                <ion-icon slot=\"end\"\r\n                          name=\"search\"\r\n                          color=\"#f4f4f4\">\r\n                </ion-icon>\r\n                <ion-input type=\"text\"\r\n                           name=\"smartSearch\"\r\n                           placeholder=\"Buscar\"\r\n                           clearInput\r\n                           [(ngModel)]=\"textSearch\"\r\n                           (ionChange)='busqueda($event.target.value)'\r\n                           (input)='busqueda($event.target.value)'\r\n                           >\r\n                </ion-input>\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </div>\r\n\r\n  <ion-list *ngIf=\"categorias.length > 0\">\r\n    <ion-item-sliding *ngFor=\"let item of categorias\">\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option color=\"danger\"\r\n           (click)=\"categoriaDelete(item.id_categoria, item.descripcion)\">Eliminar<ion-icon slot=\"end\" name=\"trash\"></ion-icon>\r\n      </ion-item-option>\r\n      </ion-item-options>\r\n      <ion-item>\r\n        <ion-label>{{item.descripcion}}</ion-label>\r\n        <ion-icon slot=\"end\" name=\"create\" (click)=\"categoriaInsertUpdate(item.id_categoria, 'UPDATE', item.descripcion)\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" #fab>\r\n    <ion-fab-button (click)=\"categoriaInsertUpdate(null,'INSERT', '')\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/categorias/categorias.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/categorias/categorias.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n  ion-col div ion-item ion-label {\n    font-size: 1.5em !important; }\n  .busqueda {\n  background: #3880ff; }\n  .footer {\n  position: fixed;\n  bottom: 20px;\n  z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvY2F0ZWdvcmlhcy9DOlxcVXNlcnNcXEZhYmlhblxcRG9jdW1lbnRzXFxib2RlZ2luXFxhcHBCb2RlZ2luL3NyY1xcYXBwXFxQYWdlc1xcY2F0ZWdvcmlhc1xcY2F0ZWdvcmlhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxxQkFBYTtFQUNiLGFBQVEsRUFBQTtFQUpoQjtJQU1VLDJCQUEyQixFQUFBO0VBS3JDO0VBQ0UsbUJBQW1CLEVBQUE7RUFHckI7RUFDRyxlQUFjO0VBQ2QsWUFBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29se1xyXG4gIGRpdntcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgICAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idXNxdWVkYXtcclxuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgIGJvdHRvbToyMHB4O1xyXG4gICB6LWluZGV4OiAxMDA7XHJcbn1cclxuIl19 */"

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
        this.categorias = [];
        this.categorias_backup = [];
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
            var categorias_result, event;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Pro_categorias.obtenerCategoriasAsync()];
                    case 1:
                        categorias_result = _a.sent();
                        this.categorias = this.categorias_backup = Array.isArray(categorias_result) ? categorias_result : [];
                        event = new MouseEvent('click', { bubbles: false });
                        return [4 /*yield*/, this.el.nativeElement.dispatchEvent(event)];
                    case 2:
                        _a.sent();
                        this.textSearch = '';
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



/***/ })

}]);
//# sourceMappingURL=Pages-categorias-categorias-module.js.map