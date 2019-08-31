(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-home-home-module"],{

/***/ "./src/app/Pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Modals_nuevo_producto_nuevo_producto_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Modals/nuevo-producto/nuevo-producto.module */ "./src/app/Modals/nuevo-producto/nuevo-producto.module.ts");
/* harmony import */ var _Modals_nuevo_producto_nuevo_producto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modals/nuevo-producto/nuevo-producto.page */ "./src/app/Modals/nuevo-producto/nuevo-producto.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.page */ "./src/app/Pages/home/home.page.ts");










var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [
                _Modals_nuevo_producto_nuevo_producto_page__WEBPACK_IMPORTED_MODULE_7__["NuevoProductoPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _Modals_nuevo_producto_nuevo_producto_module__WEBPACK_IMPORTED_MODULE_6__["NuevoProductoPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/Pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header  titulo=\"sucursal\"></app-header>\n<ion-content id=\"content1\" main>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card text-center padding (click)=\"crearProducto()\">\n          <ion-img src=\"/assets/icones/producto.png\"></ion-img>\n          <h2>Nuevo</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card text-center padding (click)=\"navegar('/entregas')\">\n          <ion-img src=\"/assets/icones/servicio.png\"></ion-img>\n          <h2>Entrega</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card text-center padding (click)=\"navegar('transacciones')\">\n          <ion-img src=\"/assets/icones/transacciones.png\"></ion-img>\n          <h2>Transacciones</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card text-center padding (click)=\"navegar('/inventarios')\">\n          <ion-img src=\"/assets/icones/inventario.png\"></ion-img>\n          <h2>Inventario</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card text-center padding (click)=\"navegar('estadisticas')\">\n          <ion-img src=\"/assets/icones/estadisticas.png\"></ion-img>\n          <h2>Estadistica</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card text-center padding (click)=\"navegar('/reportes')\">\n          <ion-img src=\"/assets/icones/reportes.png\"></ion-img>\n          <h2>Reportes</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card text-center padding (click)=\"navegar('/categorias')\">\n          <ion-img src=\"/assets/icones/producto.png\"></ion-img>\n          <h2>Categorias</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card text-center padding (click)=\"navegar('/servicios')\">\n          <ion-img src=\"/assets/icones/servicios.png\"></ion-img>\n          <h2>Servicios</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-home ion-icon {\n  font-size: 3em; }\n\nion-grid ion-row ion-col ion-card {\n  background-color: #3880ff;\n  box-shadow: none;\n  color: #FFFFFF;\n  border-radius: 5px;\n  margin: 0px; }\n\nion-grid ion-row ion-col ion-card ion-img {\n    height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvUGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGNBQWMsRUFBQTs7QUFJdEI7RUFJUSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQVJuQjtJQVVVLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWhvbWUge1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgfVxufVxuXG5pb24tZ3JpZHtcbiAgaW9uLXJvd3tcbiAgICBpb24tY29se1xuICAgICAgaW9uLWNhcmR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBpb24taW1ne1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Modals_nuevo_producto_nuevo_producto_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Modals/nuevo-producto/nuevo-producto.page */ "./src/app/Modals/nuevo-producto/nuevo-producto.page.ts");





var HomePage = /** @class */ (function () {
    function HomePage(Pro_router, modalController) {
        this.Pro_router = Pro_router;
        this.modalController = modalController;
        this.sucursal = "NINGUNA";
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.navegar = function (pRuta) {
        this.Pro_router.navigate([pRuta]);
    };
    HomePage.prototype.crearProducto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _Modals_nuevo_producto_nuevo_producto_page__WEBPACK_IMPORTED_MODULE_4__["NuevoProductoPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = _a.sent();
                        if (data.data != undefined) {
                            this.navegar('inventarios');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/Pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/Pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-home-home-module.js.map