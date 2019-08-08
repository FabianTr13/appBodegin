(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-nuevo-producto-nuevo-producto-module"],{

/***/ "./src/app/Pages/nuevo-producto/nuevo-producto.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/nuevo-producto/nuevo-producto.module.ts ***!
  \***************************************************************/
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nuevo_producto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nuevo-producto.page */ "./src/app/Pages/nuevo-producto/nuevo-producto.page.ts");








var routes = [
    {
        path: '',
        component: _nuevo_producto_page__WEBPACK_IMPORTED_MODULE_7__["NuevoProductoPage"]
    }
];
var NuevoProductoPageModule = /** @class */ (function () {
    function NuevoProductoPageModule() {
    }
    NuevoProductoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_nuevo_producto_page__WEBPACK_IMPORTED_MODULE_7__["NuevoProductoPage"]]
        })
    ], NuevoProductoPageModule);
    return NuevoProductoPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/nuevo-producto/nuevo-producto.page.html":
/*!***************************************************************!*\
  !*** ./src/app/Pages/nuevo-producto/nuevo-producto.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Nuevo Producto\"></app-header-in>\r\n<ion-content>\r\n  <div text-center>\r\n    <img class=\"image\"\r\n         (click)=\"presentActionSheet()\"\r\n         [src]=\"Pro_producto.foto[0]\"\r\n         alt=\"Agregar imagen\">\r\n  </div>\r\n  <input #fileInput hidden (change)=\"fileUpload()\" type=\"file\" name=\"pic\" accept=\"image/*\">\r\n  <form #form=\"ngForm\" (ngSubmit)=\"guardar()\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre</ion-label>\r\n            <ion-input name=\"nombre\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.nombre\"\r\n                       required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Codigo de Producto</ion-label>\r\n            <ion-input name=\"codigo\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.codigo\"\r\n                       required>\r\n             </ion-input>\r\n            <img text-center (click)=\"barCodeScanner()\"\r\n                 slot=\"end\"\r\n                 class=\"buttonScanner\"\r\n                 src=\"assets/img/barcode.png\"\r\n                 alt=\"leerQR\">\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descripcion (Opcional)</ion-label>\r\n            <ion-input name=\"descripcion\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.descripcion\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Categorias</ion-label>\r\n            <ion-select [(ngModel)]=\"id_categoria\" (ionChange)=\"categroriaGet($event)\" placeholder=\"Seleccione una\">\r\n              <ion-select-option *ngFor=\"let item of categorias\"\r\n\r\n                                  value=\"{{item.id_categoria}}\">{{item.descripcion}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div padding>\r\n            <ion-button shape=\"round\"\r\n                        size=\"large\"\r\n                        type=\"submit\"\r\n                        [disabled]=\"form.invalid\"\r\n                        expand=\"block\"><ion-ripple-effect></ion-ripple-effect>Guardar</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/nuevo-producto/nuevo-producto.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/Pages/nuevo-producto/nuevo-producto.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\nion-content form ion-grid ion-row ion-item ion-label {\n  --position:floating; }\n\n.image {\n  width: 20%;\n  height: 200px; }\n\n.buttonScanner {\n  height: 27px;\n  width: 27px;\n  margin: auto; }\n\n.minMax {\n  padding: 5px; }\n\n@media (max-width: 2000px) {\n  .image {\n    width: 20%;\n    height: 180px; } }\n\n@media (max-width: 1000px) {\n  .image {\n    width: 40%;\n    height: 180px; } }\n\n@media (max-width: 500px) {\n  .image {\n    width: 100%;\n    height: 180px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvbnVldm8tcHJvZHVjdG8vQzpcXFVzZXJzXFxGYWJpYW5cXERvY3VtZW50c1xcYm9kZWdpblxcYXBwQm9kZWdpbi9zcmNcXGFwcFxcUGFnZXNcXG51ZXZvLXByb2R1Y3RvXFxudWV2by1wcm9kdWN0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBUSxFQUFBOztBQUdaO0VBTVksbUJBQVcsRUFBQTs7QUFRdkI7RUFDRSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYSxFQUFBLEVBQ2Q7O0FBRUg7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvbnVldm8tcHJvZHVjdG8vbnVldm8tcHJvZHVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWNvbG9yOiAjNmU2MzY4O1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBmb3Jte1xyXG4gICAgaW9uLWdyaWR7XHJcbiAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIC0tcG9zaXRpb246ZmxvYXRpbmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uU2Nhbm5lcntcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWluTWF4e1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDIwMDBweCkge1xyXG4gIC5pbWFnZXtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmltYWdle1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuaW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/nuevo-producto/nuevo-producto.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/nuevo-producto/nuevo-producto.page.ts ***!
  \*************************************************************/
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
/* harmony import */ var resize_base64__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! resize-base64 */ "./node_modules/resize-base64/index.js");
/* harmony import */ var resize_base64__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(resize_base64__WEBPACK_IMPORTED_MODULE_9__);










var NuevoProductoPage = /** @class */ (function () {
    function NuevoProductoPage(camera, actionSheetController, barcodeScanner, Pro_productos, Pro_categorias, storage) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.barcodeScanner = barcodeScanner;
        this.Pro_productos = Pro_productos;
        this.Pro_categorias = Pro_categorias;
        this.storage = storage;
        this.Pro_producto = {
            foto: [
                'assets/nuevo/camera.png'
            ],
            nombre: null,
            codigo: null,
            descripcion: null,
            id_categoria: null
        };
        this.categorias = [];
    }
    NuevoProductoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_categorias.obtenerCategorias(token).subscribe(function (data) {
                _this.categorias = data;
            });
        });
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
    NuevoProductoPage.prototype.loadImage = function () {
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
            var filePath;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filePath = this.Pro_producto.foto[0];
                        this.Pro_producto.foto[0] = resize_base64__WEBPACK_IMPORTED_MODULE_9__(filePath, 500, 450);
                        return [4 /*yield*/, this.Pro_productos.nuevoProducto(this.Pro_producto).catch(function (err) {
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
    ], NuevoProductoPage.prototype, "el", void 0);
    NuevoProductoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nuevo-producto',
            template: __webpack_require__(/*! ./nuevo-producto.page.html */ "./src/app/Pages/nuevo-producto/nuevo-producto.page.html"),
            styles: [__webpack_require__(/*! ./nuevo-producto.page.scss */ "./src/app/Pages/nuevo-producto/nuevo-producto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
            _Services_productos_service__WEBPACK_IMPORTED_MODULE_6__["ProductosService"],
            _Services_categorias_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
    ], NuevoProductoPage);
    return NuevoProductoPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-nuevo-producto-nuevo-producto-module.js.map