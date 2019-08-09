(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-home-home-module~Pages-inventarios-inventarios-module"],{

/***/ "./src/app/Modals/nuevo-producto/nuevo-producto.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Modals/nuevo-producto/nuevo-producto.module.ts ***!
  \****************************************************************/
/*! exports provided: NuevoProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoProductoPageModule", function() { return NuevoProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nuevo_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevo-producto.page */ "./src/app/Modals/nuevo-producto/nuevo-producto.page.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");








var NuevoProductoPageModule = /** @class */ (function () {
    function NuevoProductoPageModule() {
    }
    NuevoProductoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_nuevo_producto_page__WEBPACK_IMPORTED_MODULE_6__["NuevoProductoPage"]],
            exports: []
        })
    ], NuevoProductoPageModule);
    return NuevoProductoPageModule;
}());



/***/ }),

/***/ "./src/app/Modals/nuevo-producto/nuevo-producto.page.html":
/*!****************************************************************!*\
  !*** ./src/app/Modals/nuevo-producto/nuevo-producto.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-modal titulo=\"Nuevo Producto\"></app-header-modal>\r\n<ion-content>\r\n  <div text-center>\r\n    <img class=\"image\"\r\n         (click)=\"presentActionSheet()\"\r\n         [src]=\"Pro_producto.foto[1] | domSanitizer\"\r\n         alt=\"Agregar imagen\">\r\n  </div>\r\n  <input #fileInput hidden (change)=\"fileUpload()\" type=\"file\" name=\"pic\" accept=\"image/*\">\r\n  <form #form=\"ngForm\" (ngSubmit)=\"guardar()\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre</ion-label>\r\n            <ion-input name=\"nombre\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.nombre\"\r\n                       required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Codigo de Producto</ion-label>\r\n            <ion-input name=\"codigo\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.codigo\"\r\n                       required>\r\n             </ion-input>\r\n            <img text-center (click)=\"barCodeScanner()\"\r\n                 slot=\"end\"\r\n                 class=\"buttonScanner\"\r\n                 src=\"assets/img/barcode.png\"\r\n                 alt=\"leerQR\">\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descripcion (Opcional)</ion-label>\r\n            <ion-input name=\"descripcion\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.descripcion\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Tipo de Consumo</ion-label>\r\n            <ion-select [(ngModel)]=\"id_consumo\" (ionChange)=\"consumoGet($event)\" placeholder=\"Seleccione un tipo\">\r\n              <ion-select-option *ngFor=\"let item of tiposConsumo\"\r\n                                  value=\"{{item.id_tipo_consumo}}\">{{item.descripcion}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Categorias</ion-label>\r\n            <ion-select [(ngModel)]=\"id_categoria\" (ionChange)=\"categroriaGet($event)\" placeholder=\"Seleccione una\">\r\n              <ion-select-option *ngFor=\"let item of categorias\"\r\n                                  value=\"{{item.id_categoria}}\">{{item.descripcion}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div padding>\r\n            <ion-button shape=\"round\"\r\n                        size=\"default\"\r\n                        type=\"submit\"\r\n                        [disabled]=\"form.invalid\"\r\n                        expand=\"block\">Guardar <ion-icon slot=\"end\" name=\"save\"></ion-icon></ion-button>\r\n            <ion-button shape=\"round\"\r\n                        size=\"default\"\r\n                        (click)=\"Salir()\"\r\n                        color=\"medium\"\r\n                        expand=\"block\">Cancelar <ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Modals/nuevo-producto/nuevo-producto.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/Modals/nuevo-producto/nuevo-producto.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\nion-content form ion-grid ion-row ion-item ion-label {\n  --position:floating; }\n\n.image {\n  width: 20%;\n  height: 200px; }\n\n.buttonScanner {\n  height: 27px;\n  width: 27px;\n  margin: auto; }\n\n.minMax {\n  padding: 5px; }\n\n@media (max-width: 2000px) {\n  .image {\n    width: 20%;\n    height: 180px; } }\n\n@media (max-width: 1000px) {\n  .image {\n    width: 40%;\n    height: 180px; } }\n\n@media (max-width: 500px) {\n  .image {\n    width: 100%;\n    height: 180px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kYWxzL251ZXZvLXByb2R1Y3RvL0M6XFxVc2Vyc1xcRmFiaWFuXFxEb2N1bWVudHNcXGJvZGVnaW5cXGFwcEJvZGVnaW4vc3JjXFxhcHBcXE1vZGFsc1xcbnVldm8tcHJvZHVjdG9cXG51ZXZvLXByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFRLEVBQUE7O0FBR1o7RUFNWSxtQkFBVyxFQUFBOztBQVF2QjtFQUNFLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhLEVBQUEsRUFDZDs7QUFFSDtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYSxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9Nb2RhbHMvbnVldm8tcHJvZHVjdG8vbnVldm8tcHJvZHVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWNvbG9yOiAjNmU2MzY4O1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBmb3Jte1xyXG4gICAgaW9uLWdyaWR7XHJcbiAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIC0tcG9zaXRpb246ZmxvYXRpbmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uU2Nhbm5lcntcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWluTWF4e1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDIwMDBweCkge1xyXG4gIC5pbWFnZXtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmltYWdle1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuaW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Modals/nuevo-producto/nuevo-producto.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/Modals/nuevo-producto/nuevo-producto.page.ts ***!
  \**************************************************************/
/*! exports provided: NuevoProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoProductoPage", function() { return NuevoProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Config_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Config/configuration */ "./src/app/Config/configuration.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _Services_productos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/productos.service */ "./src/app/Services/productos.service.ts");
/* harmony import */ var _Services_categorias_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/categorias.service */ "./src/app/Services/categorias.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");










var NuevoProductoPage = /** @class */ (function () {
    function NuevoProductoPage(camera, actionSheetController, barcodeScanner, Pro_productos, Pro_categorias, storage, modalController) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.barcodeScanner = barcodeScanner;
        this.Pro_productos = Pro_productos;
        this.Pro_categorias = Pro_categorias;
        this.storage = storage;
        this.modalController = modalController;
        this.Pro_producto = {
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
        this.tiposConsumo = [];
        this.id_consumo = 1;
    }
    NuevoProductoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.Pro_categorias.obtenerCategorias(token).subscribe(function (data) {
                    _this.categorias = data;
                });
                this.Pro_productos.getTiposConsumo(token).subscribe(function (data) {
                    _this.tiposConsumo = data;
                });
                return [2 /*return*/];
            });
        }); });
    };
    NuevoProductoPage.prototype.barCodeScanner = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.Pro_producto.codigo = barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    NuevoProductoPage.prototype.take = function () {
        var _this = this;
        var options = {
            quality: 50,
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
    NuevoProductoPage.prototype.loadImage = function () {
        var _this = this;
        var options = {
            quality: 50,
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
    NuevoProductoPage.prototype.presentActionSheet = function () {
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
    NuevoProductoPage.prototype.categroriaGet = function (p_sls) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.Pro_producto.id_categoria = p_sls.target.value;
                return [2 /*return*/];
            });
        });
    };
    NuevoProductoPage.prototype.consumoGet = function (p_tipo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.Pro_producto.id_tipo_consumo = p_tipo.target.value;
                return [2 /*return*/];
            });
        });
    };
    NuevoProductoPage.prototype.fileUpload = function () {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(this.el.nativeElement.files[0]);
        reader.onload = function (_event) {
            _this.Pro_producto.foto = [];
            _this.Pro_producto.foto.push(reader.result.toString());
        };
    };
    NuevoProductoPage.prototype.guardar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filePath, producto_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.Pro_producto.foto[0] != 'assets/nuevo/camera.png') {
                            filePath = this.Pro_producto.foto[0];
                            this.Pro_producto.foto[0] = filePath;
                        }
                        else {
                            this.Pro_producto.foto[0] = null;
                        }
                        return [4 /*yield*/, this.Pro_productos.nuevoProducto(this.Pro_producto).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        producto_id = _a.sent();
                        return [4 /*yield*/, this.Pro_productos.subirImagen(this.Pro_producto.foto[0], producto_id)];
                    case 2:
                        _a.sent();
                        this.modalController.dismiss({ id_producto: producto_id });
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevoProductoPage.prototype.Salir = function () {
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
    ], NuevoProductoPage.prototype, "el", void 0);
    NuevoProductoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nuevo-producto',
            template: __webpack_require__(/*! ./nuevo-producto.page.html */ "./src/app/Modals/nuevo-producto/nuevo-producto.page.html"),
            styles: [__webpack_require__(/*! ./nuevo-producto.page.scss */ "./src/app/Modals/nuevo-producto/nuevo-producto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
            _Services_productos_service__WEBPACK_IMPORTED_MODULE_6__["ProductosService"],
            _Services_categorias_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], NuevoProductoPage);
    return NuevoProductoPage;
}());



/***/ }),

/***/ "./src/app/Pipe/dom-sanitizer.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/Pipe/dom-sanitizer.pipe.ts ***!
  \********************************************/
/*! exports provided: DomSanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomSanitizerPipe", function() { return DomSanitizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var DomSanitizerPipe = /** @class */ (function () {
    function DomSanitizerPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    DomSanitizerPipe.prototype.transform = function (img) {
        // console.log(this.domSanitizer.bypassSecurityTrustUrl( img ))
        return this.domSanitizer.bypassSecurityTrustUrl(img);
    };
    DomSanitizerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'domSanitizer'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DomSanitizerPipe);
    return DomSanitizerPipe;
}());



/***/ }),

/***/ "./src/app/Pipe/image-sanitizer.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/Pipe/image-sanitizer.pipe.ts ***!
  \**********************************************/
/*! exports provided: ImageSanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSanitizerPipe", function() { return ImageSanitizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ImageSanitizerPipe = /** @class */ (function () {
    function ImageSanitizerPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    ImageSanitizerPipe.prototype.transform = function (img) {
        return this.domSanitizer.bypassSecurityTrustUrl(img);
    };
    ImageSanitizerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'imageSanitizer'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ImageSanitizerPipe);
    return ImageSanitizerPipe;
}());



/***/ }),

/***/ "./src/app/Pipe/imagen.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/Pipe/imagen.pipe.ts ***!
  \*************************************/
/*! exports provided: ImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenPipe", function() { return ImagenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImagenPipe = /** @class */ (function () {
    function ImagenPipe() {
    }
    ImagenPipe.prototype.transform = function (img) {
        return img;
    };
    ImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'imagen'
        })
    ], ImagenPipe);
    return ImagenPipe;
}());



/***/ }),

/***/ "./src/app/Pipe/pipes.module.ts":
/*!**************************************!*\
  !*** ./src/app/Pipe/pipes.module.ts ***!
  \**************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-sanitizer.pipe */ "./src/app/Pipe/dom-sanitizer.pipe.ts");
/* harmony import */ var _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-sanitizer.pipe */ "./src/app/Pipe/image-sanitizer.pipe.ts");
/* harmony import */ var _imagen_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imagen.pipe */ "./src/app/Pipe/imagen.pipe.ts");





var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__["DomSanitizerPipe"],
                _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__["ImageSanitizerPipe"],
                _imagen_pipe__WEBPACK_IMPORTED_MODULE_4__["ImagenPipe"]
            ],
            exports: [
                _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__["DomSanitizerPipe"],
                _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__["ImageSanitizerPipe"],
                _imagen_pipe__WEBPACK_IMPORTED_MODULE_4__["ImagenPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
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



/***/ }),

/***/ "./src/app/Services/productos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/productos.service.ts ***!
  \***********************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Config_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config/configuration */ "./src/app/Config/configuration.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");







var ProductosService = /** @class */ (function () {
    function ProductosService(Pro_http, storage, fileTransfer) {
        this.Pro_http = Pro_http;
        this.storage = storage;
        this.fileTransfer = fileTransfer;
    }
    ProductosService.prototype.nuevoProducto = function (p_form) {
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
                            _a.nombre = p_form.nombre,
                            _a.descripcion = p_form.descripcion,
                            _a.codigobarra = p_form.codigo,
                            _a.id_categoria = p_form.id_categoria,
                            _a.fotografia = 'p_form.foto[0]',
                            _a.id_tipo_consumo = p_form.id_tipo_consumo,
                            _a);
                        url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/nuevoProducto";
                        return [4 /*yield*/, this.Pro_http.post(url, body, { headers: headers }).toPromise()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ProductosService.prototype.updateProducto = function (p_form) {
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
                            _a.id_producto = p_form.id_producto,
                            _a.nombre = p_form.nombre,
                            _a.descripcion = p_form.descripcion,
                            _a.codigobarra = p_form.codigo,
                            _a.id_categoria = p_form.id_categoria,
                            _a.fotografia = null,
                            _a.id_tipo_consumo = p_form.id_tipo_consumo,
                            _a);
                        url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/updateProducto";
                        return [4 /*yield*/, this.Pro_http.post(url, body, { headers: headers }).toPromise()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ProductosService.prototype.listaProductos = function (p_token, p_idServicio) {
        //Preparacion de header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](_Config_configuration__WEBPACK_IMPORTED_MODULE_3__["Header"]);
        //Preparacion de body
        var body = {
            id_servicio: p_idServicio,
            token: p_token
        };
        var url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/productosList";
        return this.Pro_http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }));
    };
    ProductosService.prototype.inventarioList = function (p_token) {
        //Preparacion de header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](_Config_configuration__WEBPACK_IMPORTED_MODULE_3__["Header"]);
        //Preparacion de body
        var body = {
            token: p_token
        };
        var url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/inventarioList";
        return this.Pro_http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }));
    };
    ProductosService.prototype.inventarioListAsync = function () {
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
                        url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/inventarioList";
                        return [4 /*yield*/, this.Pro_http.post(url, body, { headers: headers }).toPromise()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ProductosService.prototype.deleteProducto = function (p_id_producto) {
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
                            _a.id_producto = p_id_producto,
                            _a);
                        url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/deleteProducto";
                        return [4 /*yield*/, this.Pro_http.post(url, body, { headers: headers }).toPromise()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ProductosService.prototype.inventarioTransacciones = function (p_id_producto, p_sucursal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, body, url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](_Config_configuration__WEBPACK_IMPORTED_MODULE_3__["Header"]);
                        body = {
                            id_producto: p_id_producto,
                            id_sucursal: p_sucursal.id_sucursal
                        };
                        url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/inventarioTransacciones";
                        return [4 /*yield*/, this.Pro_http.post(url, body, { headers: headers }).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductosService.prototype.getTiposConsumo = function (p_token) {
        //Preparacion de header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](_Config_configuration__WEBPACK_IMPORTED_MODULE_3__["Header"]);
        //Preparacion de body
        var body = {
            token: p_token
        };
        var url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/tiposConsumo";
        return this.Pro_http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }));
    };
    ProductosService.prototype.getProducto = function (p_id_producto) {
        //Preparacion de header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](_Config_configuration__WEBPACK_IMPORTED_MODULE_3__["Header"]);
        //Preparacion de body
        var body = {
            id_producto: p_id_producto
        };
        var url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/getProducto";
        return this.Pro_http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }));
    };
    ProductosService.prototype.subirImagen = function (img, p_id_producto) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](_Config_configuration__WEBPACK_IMPORTED_MODULE_3__["Header"]);
        if (!_Config_configuration__WEBPACK_IMPORTED_MODULE_3__["isApp"]) {
            // this.fileToUpload = files.item(0);
            var formData = new FormData();
            formData.append('image', img, 'image');
            formData.append('id_producto', String(p_id_producto));
            var url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/upload";
            this.Pro_http.post(url, formData).subscribe(function (val) {
                console.log(val);
            });
        }
        else {
            var options = {
                fileKey: 'image',
                headers: headers,
                params: {
                    id_producto: p_id_producto
                }
            };
            var fileTransfer = this.fileTransfer.create();
            var url = _Config_configuration__WEBPACK_IMPORTED_MODULE_3__["WEB_SERVICE"] + "api/productos/upload";
            fileTransfer.upload(img, url, options).then(function (data) {
                console.log('leoeoeooe');
                console.log(data);
            }).catch(function (err) {
                console.log('leoeoeooe');
            });
        }
    };
    ProductosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"]])
    ], ProductosService);
    return ProductosService;
}());



/***/ })

}]);
//# sourceMappingURL=default~Pages-home-home-module~Pages-inventarios-inventarios-module.js.map