(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-nuevo-producto-nuevo-producto-module~Pages-producto-detalle-producto-detalle-module"],{

/***/ "./node_modules/resize-base64/index.js":
/*!*********************************************!*\
  !*** ./node_modules/resize-base64/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(base64, maxWidth, maxHeight){


// Max size for thumbnail
  if(typeof(maxWidth) === 'undefined')  maxWidth = 500;
  if(typeof(maxHeight) === 'undefined')  maxHeight = 500;

  // Create and initialize two canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var canvasCopy = document.createElement("canvas");
  var copyContext = canvasCopy.getContext("2d");

  // Create original image
  var img = new Image();
  img.src = base64;

  // Determine new ratio based on max size
  var ratio = 1;
  if(img.width > maxWidth)
    ratio = maxWidth / img.width;
  else if(img.height > maxHeight)
    ratio = maxHeight / img.height;

  // Draw original image in second canvas
  canvasCopy.width = img.width;
  canvasCopy.height = img.height;
  copyContext.drawImage(img, 0, 0);

  // Copy and resize second canvas to first canvas
  canvas.width = img.width * ratio;
  canvas.height = img.height * ratio;
  ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL();



}

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






var ProductosService = /** @class */ (function () {
    function ProductosService(Pro_http, storage) {
        this.Pro_http = Pro_http;
        this.storage = storage;
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
                            _a.fotografia = p_form.foto[0],
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
                            _a.fotografia = p_form.foto[0],
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
    ProductosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], ProductosService);
    return ProductosService;
}());



/***/ })

}]);
//# sourceMappingURL=default~Pages-nuevo-producto-nuevo-producto-module~Pages-producto-detalle-producto-detalle-module.js.map