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

module.exports = "<app-header-modal titulo=\"Editar Producto\"></app-header-modal>\n<ion-content>\n  <ion-item lines=\"none\" (click)=\"deleteProducto()\">\n    <ion-label text-right>Eliminar</ion-label>\n      <ion-icon color=\"danger\" name=\"trash\"></ion-icon>\n  </ion-item>\n  <div text-center>\n    <img class=\"image\"\n         (click)=\"presentActionSheet()\"\n         [src]=\"Pro_producto.foto[1] | domSanitizer\"\n         alt=\"Agregar imagen\">\n  </div>\n  <input #fileInput hidden (change)=\"fileUpload()\" type=\"file\" name=\"pic\" accept=\"image/*\">\n  <form #form=\"ngForm\" (ngSubmit)=\"guardar()\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">Nombre</ion-label>\n            <ion-input name=\"nombre\"\n                       type=\"text\"\n                       [(ngModel)]=\"Pro_producto.nombre\"\n                       required>\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Codigo de Producto</ion-label>\n            <ion-input name=\"codigo\"\n                       type=\"text\"\n                       [(ngModel)]=\"Pro_producto.codigo\"\n                       required>\n             </ion-input>\n            <img text-center (click)=\"barCodeScanner()\"\n                 slot=\"end\"\n                 class=\"buttonScanner\"\n                 src=\"assets/img/barcode.png\"\n                 alt=\"leerQR\">\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Descripcion (Opcional)</ion-label>\n            <ion-input name=\"descripcion\"\n                       type=\"text\"\n                       [(ngModel)]=\"Pro_producto.descripcion\">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Tipo de consumo</ion-label>\n            <ion-select value=\"{{id_tipo_consumo}}\" [(ngModel)]=\"id_tipo_consumo\" (ionChange)=\"consumoGet($event)\" placeholder=\"Seleccione una\">\n              <ion-select-option *ngFor=\"let item of tiposConsumo\"\n                                  value=\"{{item.id_tipo_consumo}}\">{{item.descripcion}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Categorias</ion-label>\n            <ion-select value=\"{{id_categoria}}\" [(ngModel)]=\"id_categoria\" (ionChange)=\"categroriaGet($event)\" placeholder=\"Seleccione una\">\n              <ion-select-option *ngFor=\"let item of categorias\"\n                                  value=\"{{item.id_categoria}}\">{{item.descripcion}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div padding>\n            <ion-button shape = \"round\"\n                        size = \"default\"\n                        type = \"submit\"\n                        [disabled] = \"form.invalid\"\n                        expand = \"block\">Guardar <ion-icon name=\"save\"></ion-icon></ion-button>\n            <ion-button (click)=\"Salir()\"\n                        color=\"medium\"\n                        size=\"default\"\n                        expand=\"block\"\n                        shape=\"round\">Salir<ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <ion-item color=\"primary\" (click)=\"sucursalesSelect()\">\n    {{sucursal.nombre_corto}}\n    <ion-img slot=\"start\" class=\"active\" src=\"/assets/side/point_side.png\"></ion-img>\n    <ion-item color=\"primary\">\n      <p slot=\"end\">Historial</p>\n    </ion-item>\n    <ion-icon slot=\"end\" name=\"list-box\"></ion-icon>\n  </ion-item>\n  <div padding >\n    <ion-list >\n        <ion-item *ngFor=\"let item of inventarios\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{item.imagen}}\">\n          </ion-avatar>\n          <ion-label>\n            <h2 class=\"transaccion\">{{item.transaccion}}</h2>\n            <h4>Fecha creada: {{item.fecha}}</h4>\n          </ion-label>\n          <ion-label text-end slot=\"end\">\n            <h2 class=\"transaccion\">Cant.</h2>\n            <h4>{{item.cantidad}}</h4>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Modals/producto-detalle/producto-detalle.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/Modals/producto-detalle/producto-detalle.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\nion-content form ion-grid ion-row ion-item ion-label {\n  --position:floating; }\n\n.button {\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.inv-in {\n  color: #6e6368 !important; }\n\n.inv-out {\n  color: red !important; }\n\n.image {\n  width: 20%;\n  height: 200px; }\n\n.buttonScanner {\n  height: 27px;\n  width: 27px;\n  margin: auto; }\n\n.active {\n  margin-right: 10%;\n  width: 10px;\n  height: 10px; }\n\n.minMax {\n  padding: 5px; }\n\n.transaccion {\n  font-size: 0.9em !important;\n  color: #3880ff;\n  font-weight: bold; }\n\n@media (max-width: 2000px) {\n  .image {\n    width: 20%;\n    height: 180px; } }\n\n@media (max-width: 1000px) {\n  .image {\n    width: 40%;\n    height: 180px; } }\n\n@media (max-width: 500px) {\n  .image {\n    width: 100%;\n    height: 180px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvTW9kYWxzL3Byb2R1Y3RvLWRldGFsbGUvcHJvZHVjdG8tZGV0YWxsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBUSxFQUFBOztBQUdaO0VBTVksbUJBQVcsRUFBQTs7QUFRdkI7RUFFRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFFRSxPQUFPO0VBQ1AsV0FBVztFQUNYLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFDQyx5QkFBeUIsRUFBQTs7QUFFMUI7RUFDQyxxQkFBcUIsRUFBQTs7QUFHdEI7RUFDRSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWEsRUFBQSxFQUNkOztBQUVIO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL01vZGFscy9wcm9kdWN0by1kZXRhbGxlL3Byb2R1Y3RvLWRldGFsbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgLS1jb2xvcjogIzZlNjM2ODtcbn1cblxuaW9uLWNvbnRlbnR7XG4gIGZvcm17XG4gICAgaW9uLWdyaWR7XG4gICAgICBpb24tcm93e1xuICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAtLXBvc2l0aW9uOmZsb2F0aW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYnV0dG9ue1xuICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDUwMDtcbn1cblxuLmJ1dHRvbkV4aXR7XG4gIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA1MDA7XG59XG5cbi5pbnYtaW57XG5cdGNvbG9yOiAjNmU2MzY4ICFpbXBvcnRhbnQ7XG59XG4uaW52LW91dHtcblx0Y29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2V7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5idXR0b25TY2FubmVye1xuICAgIGhlaWdodDogMjdweDtcbiAgICB3aWR0aDogMjdweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5hY3RpdmV7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG4ubWluTWF4e1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50cmFuc2FjY2lvbntcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzM4ODBmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAyMDAwcHgpIHtcbiAgLmltYWdle1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuaW1hZ2V7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaW1hZ2V7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgfVxufVxuIl19 */"

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

module.exports = "<app-header-in titulo=\"Inventario\"></app-header-in>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                            pullingText=\"Hale para recargar\"\n                            refreshingSpinner=\"circles\"\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"busqueda\">\n    <form #form=\"ngForm\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col>\n            <div #list>\n              <ion-item>\n                <ion-icon slot=\"end\"\n                          name=\"search\"\n                          color=\"#f4f4f4\">\n                </ion-icon>\n                <ion-input type=\"text\"\n                           placeholder=\"Buscar\"\n                           clearInput\n                           [(ngModel)]='textSearch'\n                           (ionChange)='busqueda($event.target.value)'\n                           (input)='busqueda($event.target.value)'\n                           >\n                </ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n\n  <div padding >\n    <ion-list >\n        <ion-item *ngFor=\"let item of productos\" (click)=\"productoDetalle(item.id_producto)\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"item.imagen | domSanitizer\">\n          </ion-avatar>\n          <ion-label>\n            <h2 class=\"nombreProducto\">{{item.nombre | uppercase}}</h2>\n            <h4>{{item.descripcion}}</h4>\n            <ion-badge *ngIf=\"item.tipo_consumo == 'Unidad'\" color=\"primary\">{{item.tipo_consumo}}</ion-badge>\n            <ion-badge *ngIf=\"item.tipo_consumo == 'Porcentaje'\" color=\"tertiary\">{{item.tipo_consumo}}</ion-badge>\n          </ion-label>\n          <ion-label text-end slot=\"end\">\n            <h2 class=\"nombreProducto\">Cant.</h2>\n            <h4>{{item.cantidad}}</h4>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" #fab>\n    <ion-fab-button (click)=\"crearProducto()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/inventarios/inventarios.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/Pages/inventarios/inventarios.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n\n.busqueda {\n  background: #3880ff; }\n\n.nombreProducto {\n  font-size: 0.9em !important;\n  color: #3880ff;\n  font-weight: bold; }\n\n.tipoConsumo {\n  color: #3880ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvUGFnZXMvaW52ZW50YXJpb3MvaW52ZW50YXJpb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR1EscUJBQWE7RUFDYixhQUFRLEVBQUE7O0FBSWhCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9pbnZlbnRhcmlvcy9pbnZlbnRhcmlvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb2x7XG4gIGRpdntcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxufVxuLmJ1c3F1ZWRhe1xuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xufVxuLm5vbWJyZVByb2R1Y3Rve1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpcG9Db25zdW1ve1xuICBjb2xvcjogIzM4ODBmZlxufVxuIl19 */"

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