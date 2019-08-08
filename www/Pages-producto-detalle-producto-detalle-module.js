(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-producto-detalle-producto-detalle-module"],{

/***/ "./src/app/Pages/producto-detalle/producto-detalle.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/producto-detalle/producto-detalle.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductoDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDetallePageModule", function() { return ProductoDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _producto_detalle_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./producto-detalle.page */ "./src/app/Pages/producto-detalle/producto-detalle.page.ts");








var routes = [
    {
        path: '',
        component: _producto_detalle_page__WEBPACK_IMPORTED_MODULE_7__["ProductoDetallePage"]
    }
];
var ProductoDetallePageModule = /** @class */ (function () {
    function ProductoDetallePageModule() {
    }
    ProductoDetallePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_producto_detalle_page__WEBPACK_IMPORTED_MODULE_7__["ProductoDetallePage"]]
        })
    ], ProductoDetallePageModule);
    return ProductoDetallePageModule;
}());



/***/ }),

/***/ "./src/app/Pages/producto-detalle/producto-detalle.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/producto-detalle/producto-detalle.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Nuevo Producto\"></app-header-in>\r\n<ion-content>\r\n  <ion-item lines=\"none\" (click)=\"deleteProducto()\">\r\n    <ion-label text-right>Eliminar</ion-label>\r\n      <ion-icon color=\"danger\" name=\"trash\"></ion-icon>\r\n  </ion-item>\r\n  <div text-center>\r\n    <img class=\"image\"\r\n         (click)=\"presentActionSheet()\"\r\n         [src]=\"Pro_producto.foto[0]\"\r\n         alt=\"Agregar imagen\">\r\n  </div>\r\n  <input #fileInput hidden (change)=\"fileUpload()\" type=\"file\" name=\"pic\" accept=\"image/*\">\r\n  <form #form=\"ngForm\" (ngSubmit)=\"guardar()\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre</ion-label>\r\n            <ion-input name=\"nombre\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.nombre\"\r\n                       required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Codigo de Producto</ion-label>\r\n            <ion-input name=\"codigo\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.codigo\"\r\n                       required>\r\n             </ion-input>\r\n            <img text-center (click)=\"barCodeScanner()\"\r\n                 slot=\"end\"\r\n                 class=\"buttonScanner\"\r\n                 src=\"assets/img/barcode.png\"\r\n                 alt=\"leerQR\">\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descripcion (Opcional)</ion-label>\r\n            <ion-input name=\"descripcion\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.descripcion\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Categorias</ion-label>\r\n            <ion-select value=\"{{id_categoria}}\" [(ngModel)]=\"id_categoria\" (ionChange)=\"categroriaGet($event)\" placeholder=\"Seleccione una\">\r\n              <ion-select-option *ngFor=\"let item of categorias\"\r\n                                  value=\"{{item.id_categoria}}\">{{item.descripcion}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div padding>\r\n            <ion-button shape = \"round\"\r\n                        size = \"default\"\r\n                        type = \"submit\"\r\n                        [disabled] = \"form.invalid\"\r\n                        expand = \"block\">Guardar <ion-icon name=\"save\"></ion-icon></ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n  <ion-item color=\"primary\" (click)=\"sucursalesSelect()\">\r\n    {{sucursal.nombre_corto}}\r\n    <ion-img slot=\"start\" class=\"active\" src=\"/assets/side/point_side.png\"></ion-img>\r\n    <ion-item color=\"primary\">\r\n      <p slot=\"end\">Historial</p>\r\n    </ion-item>\r\n    <ion-icon slot=\"end\" name=\"list-box\"></ion-icon>\r\n  </ion-item>\r\n  <div padding >\r\n    <ion-list >\r\n        <ion-item *ngFor=\"let item of inventarios\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{item.imagen}}\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2 class=\"transaccion\">{{item.transaccion}}</h2>\r\n            <h4>Fecha creada: {{item.fecha}}</h4>\r\n          </ion-label>\r\n          <ion-label text-end slot=\"end\">\r\n            <h2 class=\"transaccion\">Cant.</h2>\r\n            <h4>{{item.cantidad}}</h4>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/producto-detalle/producto-detalle.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/producto-detalle/producto-detalle.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\nion-content form ion-grid ion-row ion-item ion-label {\n  --position:floating; }\n\n.inv-in {\n  color: #6e6368 !important; }\n\n.inv-out {\n  color: red !important; }\n\n.image {\n  width: 20%;\n  height: 200px; }\n\n.buttonScanner {\n  height: 27px;\n  width: 27px;\n  margin: auto; }\n\n.active {\n  margin-right: 10%;\n  width: 10px;\n  height: 10px; }\n\n.minMax {\n  padding: 5px; }\n\n.transaccion {\n  font-size: 0.9em !important;\n  color: #3880ff;\n  font-weight: bold; }\n\n@media (max-width: 2000px) {\n  .image {\n    width: 20%;\n    height: 180px; } }\n\n@media (max-width: 1000px) {\n  .image {\n    width: 40%;\n    height: 180px; } }\n\n@media (max-width: 500px) {\n  .image {\n    width: 100%;\n    height: 180px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcHJvZHVjdG8tZGV0YWxsZS9DOlxcVXNlcnNcXEZhYmlhblxcRG9jdW1lbnRzXFxib2RlZ2luXFxhcHBCb2RlZ2luL3NyY1xcYXBwXFxQYWdlc1xccHJvZHVjdG8tZGV0YWxsZVxccHJvZHVjdG8tZGV0YWxsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBUSxFQUFBOztBQUdaO0VBTVksbUJBQVcsRUFBQTs7QUFRdkI7RUFDQyx5QkFBeUIsRUFBQTs7QUFFMUI7RUFDQyxxQkFBcUIsRUFBQTs7QUFHdEI7RUFDRSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWEsRUFBQSxFQUNkOztBQUVIO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3Byb2R1Y3RvLWRldGFsbGUvcHJvZHVjdG8tZGV0YWxsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIC0tY29sb3I6ICM2ZTYzNjg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIGZvcm17XHJcbiAgICBpb24tZ3JpZHtcclxuICAgICAgaW9uLXJvd3tcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgLS1wb3NpdGlvbjpmbG9hdGluZztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbnYtaW57XHJcblx0Y29sb3I6ICM2ZTYzNjggIWltcG9ydGFudDtcclxufVxyXG4uaW52LW91dHtcclxuXHRjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5idXR0b25TY2FubmVye1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubWluTWF4e1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9ue1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjogIzM4ODBmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDIwMDBweCkge1xyXG4gIC5pbWFnZXtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmltYWdle1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuaW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/producto-detalle/producto-detalle.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/producto-detalle/producto-detalle.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProductoDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDetallePage", function() { return ProductoDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Config_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Config/configuration */ "./src/app/Config/configuration.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _Services_categorias_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var resize_base64__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! resize-base64 */ "./node_modules/resize-base64/index.js");
/* harmony import */ var resize_base64__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(resize_base64__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_sucursales_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/sucursales.service */ "./src/app/Services/sucursales.service.ts");














var ProductoDetallePage = /** @class */ (function () {
    function ProductoDetallePage(camera, actionSheetController, barcodeScanner, Pro_productos, Pro_categorias, storage, route, Pro_sucursales, alertController, router) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.barcodeScanner = barcodeScanner;
        this.Pro_productos = Pro_productos;
        this.Pro_categorias = Pro_categorias;
        this.storage = storage;
        this.route = route;
        this.Pro_sucursales = Pro_sucursales;
        this.alertController = alertController;
        this.router = router;
        this.Pro_producto = {
            id_producto: null,
            foto: [
                'assets/nuevo/camera.png'
            ],
            nombre: null,
            codigo: null,
            descripcion: null,
            id_categoria: null
        };
        this.categorias = [];
        this.inventarios = [];
    }
    ProductoDetallePage.prototype.ngOnInit = function () {
        this.iniciar();
    };
    ProductoDetallePage.prototype.iniciar = function () {
        var _this = this;
        var id_producto = this.route.snapshot.params["id_producto"];
        this.Pro_productos.getProducto(id_producto).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a, inventario_list, categorias_list;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.Pro_producto = data;
                        this.Pro_producto.foto = [];
                        this.Pro_producto.foto.push(data.fotografia);
                        this.id_categoria = this.Pro_producto.id_categoria;
                        _a = this;
                        return [4 /*yield*/, this.Pro_sucursales.obtenerSucursalSelecciondaAsync().catch(function (err) {
                            })];
                    case 1:
                        _a.sucursal =
                            _b.sent();
                        return [4 /*yield*/, this.Pro_productos.inventarioTransacciones(data.id_producto, this.sucursal).catch(function (err) {
                            })];
                    case 2:
                        inventario_list = _b.sent();
                        this.inventarios = Array.isArray(inventario_list) ? inventario_list : [];
                        return [4 /*yield*/, this.Pro_categorias.obtenerCategoriasAsync().catch(function (err) {
                            })];
                    case 3:
                        categorias_list = _b.sent();
                        this.categorias = Array.isArray(categorias_list) ? categorias_list : [];
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ProductoDetallePage.prototype.barCodeScanner = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.Pro_producto.codigo = barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    ProductoDetallePage.prototype.take = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = "data:image/jpeg;base64," + imageData;
            _this.Pro_producto.foto = [];
            _this.Pro_producto.foto.push(base64Image);
        });
    };
    ProductoDetallePage.prototype.loadImage = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = "data:image/jpeg;base64," + imageData;
            _this.Pro_producto.foto = [];
            _this.Pro_producto.foto.push(base64Image);
        });
    };
    ProductoDetallePage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet, event_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_Config_configuration__WEBPACK_IMPORTED_MODULE_4__["isApp"]) return [3 /*break*/, 3];
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
    ProductoDetallePage.prototype.categroriaGet = function (p_sls) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.Pro_producto.id_categoria = p_sls.target.value;
                return [2 /*return*/];
            });
        });
    };
    ProductoDetallePage.prototype.fileUpload = function () {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(this.el.nativeElement.files[0]);
        reader.onload = function (_event) {
            _this.Pro_producto.foto = [];
            _this.Pro_producto.foto.push(reader.result.toString());
        };
    };
    ProductoDetallePage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sucursal, inventario_list;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Pro_sucursales.obtenerSucursalSelecciondaAsync().catch(function (err) {
                        })];
                    case 1:
                        sucursal = _a.sent();
                        return [4 /*yield*/, this.Pro_productos.inventarioTransacciones(this.Pro_producto.id_producto, sucursal).catch(function (err) {
                            })];
                    case 2:
                        inventario_list = _a.sent();
                        this.inventarios = Array.isArray(inventario_list) ? inventario_list : [];
                        event.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductoDetallePage.prototype.sucursalesSelect = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sucursales, sucursales_list, i, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sucursales = [];
                        return [4 /*yield*/, this.Pro_sucursales.sucursalesListUsuario()];
                    case 1:
                        sucursales_list = _a.sent();
                        if (Array.isArray(sucursales_list)) {
                            for (i = 0; i < sucursales_list.length; i++) {
                                sucursales.push({
                                    type: 'radio',
                                    label: sucursales_list[i].descripcion,
                                    value: sucursales_list[i].id_sucursal
                                });
                            }
                        }
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Sucursales',
                                inputs: sucursales,
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                        }
                                    }, {
                                        text: 'Cambiar',
                                        handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var inventario_list;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!Array.isArray(sucursales_list)) return [3 /*break*/, 2];
                                                        this.sucursal = sucursales_list.filter(function (item) { return item.id_sucursal == data; })[0];
                                                        return [4 /*yield*/, this.Pro_productos.inventarioTransacciones(this.Pro_producto.id_producto, this.sucursal).catch(function (err) {
                                                            })];
                                                    case 1:
                                                        inventario_list = _a.sent();
                                                        this.inventarios = Array.isArray(inventario_list) ? inventario_list : [];
                                                        _a.label = 2;
                                                    case 2: return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 2:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductoDetallePage.prototype.deleteProducto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Eliminar Producto',
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
                                                case 0: return [4 /*yield*/, this.Pro_productos.deleteProducto(this.Pro_producto.id_producto).catch(function (err) { })];
                                                case 1:
                                                    _a.sent();
                                                    this.router.navigate(['']).then(function () {
                                                        window.location.reload();
                                                    });
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
    ProductoDetallePage.prototype.guardar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filePath;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filePath = this.Pro_producto.foto[0];
                        this.Pro_producto.foto[0] = resize_base64__WEBPACK_IMPORTED_MODULE_9__(filePath, 500, 450);
                        return [4 /*yield*/, this.Pro_productos.updateProducto(this.Pro_producto).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductoDetallePage.prototype, "el", void 0);
    ProductoDetallePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto-detalle',
            template: __webpack_require__(/*! ./producto-detalle.page.html */ "./src/app/Pages/producto-detalle/producto-detalle.page.html"),
            styles: [__webpack_require__(/*! ./producto-detalle.page.scss */ "./src/app/Pages/producto-detalle/producto-detalle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
            _Services_productos_service__WEBPACK_IMPORTED_MODULE_6__["ProductosService"],
            _Services_categorias_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _Services_sucursales_service__WEBPACK_IMPORTED_MODULE_11__["SucursalesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], ProductoDetallePage);
    return ProductoDetallePage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-producto-detalle-producto-detalle-module.js.map