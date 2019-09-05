(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-entregas-entregas-module"],{

/***/ "./src/app/Pages/entregas/entregas.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/entregas/entregas.module.ts ***!
  \***************************************************/
/*! exports provided: EntregasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregasPageModule", function() { return EntregasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entregas_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entregas.page */ "./src/app/Pages/entregas/entregas.page.ts");









var routes = [
    {
        path: '',
        component: _entregas_page__WEBPACK_IMPORTED_MODULE_8__["EntregasPage"]
    }
];
var EntregasPageModule = /** @class */ (function () {
    function EntregasPageModule() {
    }
    EntregasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_entregas_page__WEBPACK_IMPORTED_MODULE_8__["EntregasPage"]]
        })
    ], EntregasPageModule);
    return EntregasPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/entregas/entregas.page.html":
/*!***************************************************!*\
  !*** ./src/app/Pages/entregas/entregas.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Entrega\"></app-header-in>\r\n<ion-content class=\"contenedor\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n  <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\r\n                          pullingText=\"Hale para recargar\"\r\n                          refreshingSpinner=\"circles\"\r\n                          refreshingText=\"Recargando...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card class=\"car\" *ngFor=\"let item of servicios\">\r\n    <ion-item class=\"car-head\" lines=\"none\">\r\n      <ion-icon name=\"md-basket\" slot=\"start\"></ion-icon>\r\n      <p>{{item.descripcion}}</p>\r\n    </ion-item>\r\n    <ion-card-content>\r\n      <ion-chip *ngFor=\"let item_productos of item.productos\">\r\n        <ion-avatar>\r\n          <img [src]=\"item_productos.fotografia | domSanitizer\">\r\n        </ion-avatar>\r\n        <ion-label>{{item_productos.nombre}} &nbsp;</ion-label>\r\n        <ion-badge color=\"medium\" *ngIf=\"item_productos.id_tipo_consumo == 1\">{{item_productos.cantidad}}</ion-badge>\r\n        <ion-badge color=\"medium\" *ngIf=\"item_productos.id_tipo_consumo == 2\">{{item_productos.porcentaje}}%</ion-badge>\r\n      </ion-chip>\r\n    </ion-card-content>\r\n    <div class=\"center-boton\">\r\n      <ion-button expand=\"full\"\r\n                  color=\"primary\"\r\n                  shape=\"round\"\r\n                  (click)=\"entregarServicio(item.id_servicio)\"\r\n                  class=\"boton\">\r\n                  Entregar<ion-label class=\"precio\">&nbsp;L. {{item.precio}}</ion-label>\r\n                  <ion-icon name=\"arrow-round-forward\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/entregas/entregas.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Pages/entregas/entregas.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car {\n  border: solid 1px #cacaca;\n  --background: white; }\n\n.precio {\n  font-size: 1.4em;\n  color: #52f450;\n  font-weight: bold; }\n\n.center-boton {\n  text-align: center; }\n\n.car-head {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #6e6368;\n  border-top: solid 4px #3880ff; }\n\n@media (min-width: 600px) {\n  .boton {\n    width: 45%;\n    float: right; } }\n\n@media (min-width: 700px) {\n  .boton {\n    width: 33%;\n    float: right; } }\n\n@media (min-width: 900px) {\n  .boton {\n    width: 25%;\n    float: right; } }\n\n@media (min-width: 1100px) {\n  .boton {\n    width: 20%;\n    float: right; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvZW50cmVnYXMvQzpcXFVzZXJzXFxGYWJpYW5cXERvY3VtZW50c1xcYm9kZWdpblxcYXBwQm9kZWdpbi9zcmNcXGFwcFxcUGFnZXNcXGVudHJlZ2FzXFxlbnRyZWdhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBT25CO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWSxFQUFBLEVBQ2I7O0FBRUg7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZLEVBQUEsRUFDYjs7QUFFSDtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVksRUFBQSxFQUNiOztBQUVIO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9lbnRyZWdhcy9lbnRyZWdhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbmVkb3J7XHJcbiAgLy8tLWJhY2tncm91bmQ6I2UwZTBlMDtcclxufVxyXG5cclxuLmNhcntcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2FjYWNhO1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5wcmVjaW97XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBjb2xvcjogIzUyZjQ1MDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJvdG9ue1xyXG5cclxufVxyXG5cclxuLmNlbnRlci1ib3RvbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXItaGVhZHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzZlNjM2ODtcclxuICBib3JkZXItdG9wOiBzb2xpZCA0cHggIzM4ODBmZjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLmJvdG9ue1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgLmJvdG9ue1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgLmJvdG9ue1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xyXG4gIC5ib3RvbntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/entregas/entregas.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/entregas/entregas.page.ts ***!
  \*************************************************/
/*! exports provided: EntregasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregasPage", function() { return EntregasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_entregas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/entregas.service */ "./src/app/Services/entregas.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EntregasPage = /** @class */ (function () {
    function EntregasPage(Pro_entregas, storage, toastController) {
        this.Pro_entregas = Pro_entregas;
        this.storage = storage;
        this.toastController = toastController;
        this.servicios = [];
    }
    EntregasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_entregas.getSetvicios(token).subscribe(function (data) {
                _this.servicios = data;
            });
        });
    };
    EntregasPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get('token').then(function (token) {
                    _this.Pro_entregas.getSetvicios(token).subscribe(function (data) {
                        _this.servicios = data;
                        event.target.complete();
                    }, function (err) {
                        event.target.complete();
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    EntregasPage.prototype.entregarServicio = function (p_id_servicio) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Pro_entregas.realizarEntrega(p_id_servicio)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (!(result == false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showToast('El inventario no es sufuciente', 4000)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.showToast('Entrega realizada con exito', 1500)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EntregasPage.prototype.showToast = function (p_mensaje, p_duration) {
        if (p_duration === void 0) { p_duration = 2000; }
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
    EntregasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entregas',
            template: __webpack_require__(/*! ./entregas.page.html */ "./src/app/Pages/entregas/entregas.page.html"),
            styles: [__webpack_require__(/*! ./entregas.page.scss */ "./src/app/Pages/entregas/entregas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_entregas_service__WEBPACK_IMPORTED_MODULE_2__["EntregasService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], EntregasPage);
    return EntregasPage;
}());



/***/ }),

/***/ "./src/app/Services/entregas.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/entregas.service.ts ***!
  \**********************************************/
/*! exports provided: EntregasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregasService", function() { return EntregasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Config_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config/configuration */ "./src/app/Config/configuration.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var EntregasService = /** @class */ (function () {
    function EntregasService(Pro_http, storage) {
        this.Pro_http = Pro_http;
        this.storage = storage;
    }
    EntregasService.prototype.getSetvicios = function (p_token) {
        //Preparacion de header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](_Config_configuration__WEBPACK_IMPORTED_MODULE_3__["Header"]);
        //Preparacion de body
        var body = {
            token: p_token
        };
        var url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/entregas/getServicios";
        return this.Pro_http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }));
    };
    EntregasService.prototype.realizarEntrega = function (p_id_servicio) {
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
                            _a.id_servicio = p_id_servicio,
                            _a);
                        url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/entregas/realizarEntrega";
                        return [4 /*yield*/, this.Pro_http.post(url, body, { headers: headers }).toPromise()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    EntregasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], EntregasService);
    return EntregasService;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-entregas-entregas-module.js.map