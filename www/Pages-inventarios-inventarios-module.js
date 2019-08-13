(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-inventarios-inventarios-module"],{

/***/ "./src/app/Modals/producto-detalle/producto-detalle.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/Modals/producto-detalle/producto-detalle.module.ts ***!
  \********************************************************************/
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _producto_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto-detalle.page */ "./src/app/Modals/producto-detalle/producto-detalle.page.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");








var ProductoDetallePageModule = /** @class */ (function () {
    function ProductoDetallePageModule() {
    }
    ProductoDetallePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_producto_detalle_page__WEBPACK_IMPORTED_MODULE_6__["ProductoDetallePage"]],
            exports: []
        })
    ], ProductoDetallePageModule);
    return ProductoDetallePageModule;
}());



/***/ }),

/***/ "./src/app/Modals/producto-detalle/producto-detalle.page.html":
/*!********************************************************************!*\
  !*** ./src/app/Modals/producto-detalle/producto-detalle.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-modal titulo=\"Editar Producto\"></app-header-modal>\r\n<ion-content>\r\n  <ion-item lines=\"none\" (click)=\"deleteProducto()\">\r\n    <ion-label text-right>Eliminar</ion-label>\r\n      <ion-icon color=\"danger\" name=\"trash\"></ion-icon>\r\n  </ion-item>\r\n  <div text-center>\r\n    <img class=\"image\"\r\n         (click)=\"presentActionSheet()\"\r\n         [src]=\"Pro_producto.foto[1] | domSanitizer\"\r\n         alt=\"Agregar imagen\">\r\n  </div>\r\n  <input #fileInput hidden (change)=\"fileUpload()\" type=\"file\" name=\"pic\" accept=\"image/*\">\r\n  <form #form=\"ngForm\" (ngSubmit)=\"guardar()\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre</ion-label>\r\n            <ion-input name=\"nombre\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.nombre\"\r\n                       required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Codigo de Producto</ion-label>\r\n            <ion-input name=\"codigo\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.codigo\"\r\n                       required>\r\n             </ion-input>\r\n            <img text-center (click)=\"barCodeScanner()\"\r\n                 slot=\"end\"\r\n                 class=\"buttonScanner\"\r\n                 src=\"assets/img/barcode.png\"\r\n                 alt=\"leerQR\">\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descripcion (Opcional)</ion-label>\r\n            <ion-input name=\"descripcion\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.descripcion\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Tipo de consumo</ion-label>\r\n            <ion-select value=\"{{id_tipo_consumo}}\" [(ngModel)]=\"id_tipo_consumo\" (ionChange)=\"consumoGet($event)\" placeholder=\"Seleccione una\">\r\n              <ion-select-option *ngFor=\"let item of tiposConsumo\"\r\n                                  value=\"{{item.id_tipo_consumo}}\">{{item.descripcion}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Categorias</ion-label>\r\n            <ion-select value=\"{{id_categoria}}\" [(ngModel)]=\"id_categoria\" (ionChange)=\"categroriaGet($event)\" placeholder=\"Seleccione una\">\r\n              <ion-select-option *ngFor=\"let item of categorias\"\r\n                                  value=\"{{item.id_categoria}}\">{{item.descripcion}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div padding>\r\n            <ion-button shape = \"round\"\r\n                        size = \"default\"\r\n                        type = \"submit\"\r\n                        [disabled] = \"form.invalid\"\r\n                        expand = \"block\">Guardar <ion-icon name=\"save\"></ion-icon></ion-button>\r\n            <ion-button (click)=\"Salir()\"\r\n                        color=\"medium\"\r\n                        size=\"default\"\r\n                        expand=\"block\"\r\n                        shape=\"round\">Salir<ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n  <ion-item color=\"primary\" (click)=\"sucursalesSelect()\">\r\n    {{sucursal.nombre_corto}}\r\n    <ion-img slot=\"start\" class=\"active\" src=\"/assets/side/point_side.png\"></ion-img>\r\n    <ion-item color=\"primary\">\r\n      <p slot=\"end\">Historial</p>\r\n    </ion-item>\r\n    <ion-icon slot=\"end\" name=\"list-box\"></ion-icon>\r\n  </ion-item>\r\n  <div padding >\r\n    <ion-list >\r\n        <ion-item *ngFor=\"let item of inventarios\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{item.imagen}}\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2 class=\"transaccion\">{{item.transaccion}}</h2>\r\n            <h4>Fecha creada: {{item.fecha}}</h4>\r\n          </ion-label>\r\n          <ion-label text-end slot=\"end\">\r\n            <h2 class=\"transaccion\">Cant.</h2>\r\n            <h4>{{item.cantidad}}</h4>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Modals/producto-detalle/producto-detalle.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/Modals/producto-detalle/producto-detalle.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\nion-content form ion-grid ion-row ion-item ion-label {\n  --position:floating; }\n\n.button {\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.inv-in {\n  color: #6e6368 !important; }\n\n.inv-out {\n  color: red !important; }\n\n.image {\n  width: 20%;\n  height: 200px; }\n\n.buttonScanner {\n  height: 27px;\n  width: 27px;\n  margin: auto; }\n\n.active {\n  margin-right: 10%;\n  width: 10px;\n  height: 10px; }\n\n.minMax {\n  padding: 5px; }\n\n.transaccion {\n  font-size: 0.9em !important;\n  color: #3880ff;\n  font-weight: bold; }\n\n@media (max-width: 2000px) {\n  .image {\n    width: 20%;\n    height: 180px; } }\n\n@media (max-width: 1000px) {\n  .image {\n    width: 40%;\n    height: 180px; } }\n\n@media (max-width: 500px) {\n  .image {\n    width: 100%;\n    height: 180px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kYWxzL3Byb2R1Y3RvLWRldGFsbGUvQzpcXFVzZXJzXFxGYWJpYW5cXERvY3VtZW50c1xcYm9kZWdpblxcYXBwQm9kZWdpbi9zcmNcXGFwcFxcTW9kYWxzXFxwcm9kdWN0by1kZXRhbGxlXFxwcm9kdWN0by1kZXRhbGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFRLEVBQUE7O0FBR1o7RUFNWSxtQkFBVyxFQUFBOztBQVF2QjtFQUVFLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUTtFQUNSLFlBQVksRUFBQTs7QUFHZDtFQUVFLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVksRUFBQTs7QUFHZDtFQUNDLHlCQUF5QixFQUFBOztBQUUxQjtFQUNDLHFCQUFxQixFQUFBOztBQUd0QjtFQUNFLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYSxFQUFBLEVBQ2Q7O0FBRUg7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvTW9kYWxzL3Byb2R1Y3RvLWRldGFsbGUvcHJvZHVjdG8tZGV0YWxsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIC0tY29sb3I6ICM2ZTYzNjg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIGZvcm17XHJcbiAgICBpb24tZ3JpZHtcclxuICAgICAgaW9uLXJvd3tcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgLS1wb3NpdGlvbjpmbG9hdGluZztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDUwMDtcclxufVxyXG5cclxuLmJ1dHRvbkV4aXR7XHJcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogNTAwO1xyXG59XHJcblxyXG4uaW52LWlue1xyXG5cdGNvbG9yOiAjNmU2MzY4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmludi1vdXR7XHJcblx0Y29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uU2Nhbm5lcntcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG5cclxuLm1pbk1heHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi50cmFuc2FjY2lvbntcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAyMDAwcHgpIHtcclxuICAuaW1hZ2V7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5pbWFnZXtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmltYWdle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Modals/producto-detalle/producto-detalle.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/Modals/producto-detalle/producto-detalle.page.ts ***!
  \******************************************************************/
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
/* harmony import */ var _Services_sucursales_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/sucursales.service */ "./src/app/Services/sucursales.service.ts");













var ProductoDetallePage = /** @class */ (function () {
    function ProductoDetallePage(camera, actionSheetController, barcodeScanner, Pro_productos, Pro_categorias, storage, Pro_sucursales, alertController, modalController, loadingController) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.barcodeScanner = barcodeScanner;
        this.Pro_productos = Pro_productos;
        this.Pro_categorias = Pro_categorias;
        this.storage = storage;
        this.Pro_sucursales = Pro_sucursales;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.Pro_producto = {
            id_producto: null,
            foto: [
                'assets/nuevo/camera.png',
                'assets/nuevo/camera.png'
            ],
            nombre: null,
            codigo: null,
            descripcion: null,
            id_categoria: null,
            id_tipo_consumo: null
        };
        this.categorias = [];
        this.inventarios = [];
        this.tiposConsumo = [];
        this.isLoading = false;
    }
    ProductoDetallePage.prototype.ngOnInit = function () {
        this.iniciar();
    };
    ProductoDetallePage.prototype.iniciar = function () {
        var _this = this;
        this.Pro_productos.getProducto(this.id_producto).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a, inventario_list, categorias_list;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.Pro_producto = data;
                        this.Pro_producto.foto = [];
                        this.Pro_producto.foto.push(data.fotografia);
                        this.Pro_producto.foto.push(data.fotografia);
                        this.id_categoria = this.Pro_producto.id_categoria;
                        this.id_tipo_consumo = this.Pro_producto.id_tipo_consumo;
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
                        this.storage.get('token').then(function (token) {
                            _this.Pro_productos.getTiposConsumo(token).subscribe(function (tipos) {
                                _this.tiposConsumo = tipos;
                            });
                        });
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
            quality: 20,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then(function (imageData) {
            var img = window.Ionic.WebView.convertFileSrc(imageData);
            _this.Pro_producto.foto = [];
            _this.Pro_producto.foto.push(imageData);
            _this.Pro_producto.foto.push(img);
        });
    };
    ProductoDetallePage.prototype.loadImage = function () {
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
            _this.Pro_producto.foto = [];
            var img = window.Ionic.WebView.convertFileSrc(imageData);
            _this.Pro_producto.foto.push(imageData);
            _this.Pro_producto.foto.push(img);
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
    ProductoDetallePage.prototype.consumoGet = function (p_id_consumo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.Pro_producto.id_tipo_consumo = p_id_consumo.target.value;
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
                                                    this.modalController.dismiss({ productos: 1 });
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
    ProductoDetallePage.prototype.present = function () {
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
                                        a.dismiss().then(function () { return console.log('abort presenting'); });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductoDetallePage.prototype.dismiss = function () {
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
    ProductoDetallePage.prototype.guardar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filePath;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.present()];
                    case 1:
                        _a.sent();
                        if (this.Pro_producto.foto[0] != 'assets/nuevo/camera.png') {
                            filePath = this.Pro_producto.foto[0];
                            this.Pro_producto.foto[0] = filePath;
                        }
                        if (!_Config_configuration__WEBPACK_IMPORTED_MODULE_4__["isApp"]) {
                            this.Pro_producto.foto[0] = this.el.nativeElement.files[0];
                        }
                        return [4 /*yield*/, this.Pro_productos.updateProducto(this.Pro_producto).catch(function (err) {
                                console.log(err);
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.Pro_productos.subirImagen(this.Pro_producto.foto[0], this.Pro_producto.id_producto).catch(function (err) { })];
                    case 3:
                        _a.sent();
                        this.modalController.dismiss({ productos: 1 });
                        return [4 /*yield*/, this.dismiss()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductoDetallePage.prototype.Salir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductoDetallePage.prototype, "el", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductoDetallePage.prototype, "id_producto", void 0);
    ProductoDetallePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto-detalle',
            template: __webpack_require__(/*! ./producto-detalle.page.html */ "./src/app/Modals/producto-detalle/producto-detalle.page.html"),
            styles: [__webpack_require__(/*! ./producto-detalle.page.scss */ "./src/app/Modals/producto-detalle/producto-detalle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
            _Services_productos_service__WEBPACK_IMPORTED_MODULE_6__["ProductosService"],
            _Services_categorias_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _Services_sucursales_service__WEBPACK_IMPORTED_MODULE_9__["SucursalesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], ProductoDetallePage);
    return ProductoDetallePage;
}());



/***/ }),

/***/ "./src/app/Pages/inventarios/inventarios.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Pages/inventarios/inventarios.module.ts ***!
  \*********************************************************/
/*! exports provided: InventariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventariosPageModule", function() { return InventariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Modals_nuevo_producto_nuevo_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Modals/nuevo-producto/nuevo-producto.page */ "./src/app/Modals/nuevo-producto/nuevo-producto.page.ts");
/* harmony import */ var _Modals_nuevo_producto_nuevo_producto_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modals/nuevo-producto/nuevo-producto.module */ "./src/app/Modals/nuevo-producto/nuevo-producto.module.ts");
/* harmony import */ var _Modals_producto_detalle_producto_detalle_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modals/producto-detalle/producto-detalle.page */ "./src/app/Modals/producto-detalle/producto-detalle.page.ts");
/* harmony import */ var _Modals_producto_detalle_producto_detalle_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Modals/producto-detalle/producto-detalle.module */ "./src/app/Modals/producto-detalle/producto-detalle.module.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inventarios_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inventarios.page */ "./src/app/Pages/inventarios/inventarios.page.ts");













var routes = [
    {
        path: '',
        component: _inventarios_page__WEBPACK_IMPORTED_MODULE_12__["InventariosPage"]
    }
];
var InventariosPageModule = /** @class */ (function () {
    function InventariosPageModule() {
    }
    InventariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [
                _Modals_nuevo_producto_nuevo_producto_page__WEBPACK_IMPORTED_MODULE_6__["NuevoProductoPage"],
                _Modals_producto_detalle_producto_detalle_page__WEBPACK_IMPORTED_MODULE_8__["ProductoDetallePage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
                _Modals_producto_detalle_producto_detalle_module__WEBPACK_IMPORTED_MODULE_9__["ProductoDetallePageModule"],
                _Modals_nuevo_producto_nuevo_producto_module__WEBPACK_IMPORTED_MODULE_7__["NuevoProductoPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_inventarios_page__WEBPACK_IMPORTED_MODULE_12__["InventariosPage"]]
        })
    ], InventariosPageModule);
    return InventariosPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/inventarios/inventarios.page.html":
/*!*********************************************************!*\
  !*** ./src/app/Pages/inventarios/inventarios.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Inventario\"></app-header-in>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\r\n                            pullingText=\"Hale para recargar\"\r\n                            refreshingSpinner=\"circles\"\r\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"busqueda\">\r\n    <form #form=\"ngForm\">\r\n      <ion-grid>\r\n        <ion-row color=\"primary\" justify-content-center>\r\n          <ion-col>\r\n            <div #list>\r\n              <ion-item>\r\n                <ion-icon slot=\"end\"\r\n                          name=\"search\"\r\n                          color=\"#f4f4f4\">\r\n                </ion-icon>\r\n                <ion-input type=\"text\"\r\n                           placeholder=\"Buscar\"\r\n                           clearInput\r\n                           [(ngModel)]='textSearch'\r\n                           (ionChange)='busqueda($event.target.value)'\r\n                           (input)='busqueda($event.target.value)'\r\n                           >\r\n                </ion-input>\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </div>\r\n\r\n  <div padding >\r\n    <ion-list >\r\n        <ion-item *ngFor=\"let item of productos\" (click)=\"productoDetalle(item.id_producto)\">\r\n          <ion-avatar slot=\"start\">\r\n            <img [src]=\"item.imagen | domSanitizer\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2 class=\"nombreProducto\">{{item.nombre | uppercase}}</h2>\r\n            <h4>{{item.descripcion}}</h4>\r\n            <ion-badge *ngIf=\"item.tipo_consumo == 'Unidad'\" color=\"primary\">{{item.tipo_consumo}}</ion-badge>\r\n            <ion-badge *ngIf=\"item.tipo_consumo == 'Porcentaje'\" color=\"tertiary\">{{item.tipo_consumo}}</ion-badge>\r\n          </ion-label>\r\n          <ion-label text-end slot=\"end\">\r\n            <h2 class=\"nombreProducto\">Cant.</h2>\r\n            <h4>{{item.cantidad}}</h4>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" #fab>\r\n    <ion-fab-button (click)=\"crearProducto()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/inventarios/inventarios.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/Pages/inventarios/inventarios.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n\n.busqueda {\n  background: #3880ff; }\n\n.nombreProducto {\n  font-size: 0.9em !important;\n  color: #3880ff;\n  font-weight: bold; }\n\n.tipoConsumo {\n  color: #3880ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaW52ZW50YXJpb3MvQzpcXFVzZXJzXFxGYWJpYW5cXERvY3VtZW50c1xcYm9kZWdpblxcYXBwQm9kZWdpbi9zcmNcXGFwcFxcUGFnZXNcXGludmVudGFyaW9zXFxpbnZlbnRhcmlvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHUSxxQkFBYTtFQUNiLGFBQVEsRUFBQTs7QUFJaEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2ludmVudGFyaW9zL2ludmVudGFyaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29se1xyXG4gIGRpdntcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgICAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYnVzcXVlZGF7XHJcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcclxufVxyXG4ubm9tYnJlUHJvZHVjdG97XHJcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMzg4MGZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGlwb0NvbnN1bW97XHJcbiAgY29sb3I6ICMzODgwZmZcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Pages/inventarios/inventarios.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/inventarios/inventarios.page.ts ***!
  \*******************************************************/
/*! exports provided: InventariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventariosPage", function() { return InventariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Modals_nuevo_producto_nuevo_producto_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Modals/nuevo-producto/nuevo-producto.page */ "./src/app/Modals/nuevo-producto/nuevo-producto.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Modals_producto_detalle_producto_detalle_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modals/producto-detalle/producto-detalle.page */ "./src/app/Modals/producto-detalle/producto-detalle.page.ts");








var InventariosPage = /** @class */ (function () {
    function InventariosPage(Pro_productos, storage, router, modalController) {
        this.Pro_productos = Pro_productos;
        this.storage = storage;
        this.router = router;
        this.modalController = modalController;
        this.textSearch = '';
    }
    InventariosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_productos.inventarioList(token).subscribe(function (data) {
                _this.productos = _this.productos_backup = data;
            });
        });
    };
    InventariosPage.prototype.busqueda = function (p_busqueda) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.productos = [];
                this.productos_backup.forEach(function (variable) {
                    if (variable.nombre.toLowerCase().includes(p_busqueda.toLowerCase())) {
                        _this.productos.push(variable);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    InventariosPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        _b = this;
                        return [4 /*yield*/, this.Pro_productos.inventarioListAsync()];
                    case 1:
                        _a.productos = _b.productos_backup = _c.sent();
                        event.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    InventariosPage.prototype.productoDetalle = function (p_id_producto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _Modals_producto_detalle_producto_detalle_page__WEBPACK_IMPORTED_MODULE_7__["ProductoDetallePage"],
                            componentProps: {
                                id_producto: p_id_producto
                            }
                        })];
                    case 1:
                        modal = _c.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = _c.sent();
                        if (!(data.data != undefined)) return [3 /*break*/, 5];
                        _a = this;
                        _b = this;
                        return [4 /*yield*/, this.Pro_productos.inventarioListAsync()];
                    case 4:
                        _a.productos = _b.productos_backup = _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    InventariosPage.prototype.crearProducto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _Modals_nuevo_producto_nuevo_producto_page__WEBPACK_IMPORTED_MODULE_5__["NuevoProductoPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _c.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = _c.sent();
                        if (!(data.data != undefined)) return [3 /*break*/, 5];
                        _a = this;
                        _b = this;
                        return [4 /*yield*/, this.Pro_productos.inventarioListAsync()];
                    case 4:
                        _a.productos = _b.productos_backup = _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    InventariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventarios',
            template: __webpack_require__(/*! ./inventarios.page.html */ "./src/app/Pages/inventarios/inventarios.page.html"),
            styles: [__webpack_require__(/*! ./inventarios.page.scss */ "./src/app/Pages/inventarios/inventarios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], InventariosPage);
    return InventariosPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-inventarios-inventarios-module.js.map