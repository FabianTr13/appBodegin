(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-ordenes-ordenes-module"],{

/***/ "./src/app/Modals/ordenes-compra/ordenes-compra.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Modals/ordenes-compra/ordenes-compra.module.ts ***!
  \****************************************************************/
/*! exports provided: OrdenesCompraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesCompraPageModule", function() { return OrdenesCompraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ordenes_compra_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordenes-compra.page */ "./src/app/Modals/ordenes-compra/ordenes-compra.page.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");







var OrdenesCompraPageModule = /** @class */ (function () {
    function OrdenesCompraPageModule() {
    }
    OrdenesCompraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
            ],
            declarations: [_ordenes_compra_page__WEBPACK_IMPORTED_MODULE_5__["OrdenesCompraPage"]]
        })
    ], OrdenesCompraPageModule);
    return OrdenesCompraPageModule;
}());



/***/ }),

/***/ "./src/app/Modals/ordenes-compra/ordenes-compra.page.html":
/*!****************************************************************!*\
  !*** ./src/app/Modals/ordenes-compra/ordenes-compra.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"heider\"></div>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n        <ion-icon slot=\"icon-only\" name=\"close\" (click)=\"Salir()\"></ion-icon>\n      </ion-buttons>\n    <ion-item color =\"primary\" lines=\"none\" text-center>\n      <ion-label>Orden de compra</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\" text-center>\n        <h6 class=\"titulo\" text-center>{{orden.nombre_legal}}</h6>\n        <p class=\"subtitulo\" text-center>Direccion: {{orden.direccion}}</p>\n        <p class=\"subtitulo\" text-center>TEL: {{orden.telefono}}</p>\n        <p class=\"subtitulo\" text-center>Correo: {{orden.correo}}</p>\n        <p class=\"subtitulo\" text-center>R.T.N {{orden.rtn}}</p>\n    </ion-col>\n    <ion-col size='4'>\n      <p class=\"subtitulo_left\" >Fecha: {{orden.fecha}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <b>Orden de compra</b>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"borde_titulo\">\n    <ion-col size=\"5\" class=\"titulo_tabla \">\n      <b>Producto</b>\n    </ion-col>\n    <ion-col size=\"2\" class=\"titulo_tabla \">\n      <b>Cant</b>\n    </ion-col>\n    <ion-col size=\"3\" class=\"titulo_tabla \">\n      <b>Precio Ant.</b>\n    </ion-col>\n    <ion-col size=\"2\" class=\"titulo_tabla \">\n      <b>Total</b>\n    </ion-col>\n  </ion-row>\n  <span>\n  <ion-row class=\"item_tabla\">\n    <ion-col size=\"5\" >\n      {{orden.nombre}}\n    </ion-col>\n    <ion-col size=\"2\" class=\"borde\" >\n      {{orden.cantidad_pedir}}\n    </ion-col>\n    <ion-col size=\"3\"  >\n      L. {{orden.costo}}\n    </ion-col>\n    <ion-col size=\"2\" >\n       {{orden.costo * orden.cantidad_pedir}}\n    </ion-col>\n  </ion-row>\n</span>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button>\n    <ion-icon name=\"share\" (click)=\"downloadPdf()\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n</ion-content>\n<p id=\"print\"></p>\n"

/***/ }),

/***/ "./src/app/Modals/ordenes-compra/ordenes-compra.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/Modals/ordenes-compra/ordenes-compra.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-item ion-img {\n  margin-right: 10%;\n  width: 10px;\n  height: 10px; }\n\nion-header ion-toolbar ion-item ion-label {\n  font-size: 1.2em !important; }\n\n.heider {\n  background: #3880ff;\n  height: 25px; }\n\n.borde {\n  border: 1px solid #000000; }\n\n.titulo {\n  font-size: 0.75rem; }\n\n.subtitulo {\n  font-size: 0.5rem; }\n\n.subtitulo_left {\n  font-size: 0.48rem; }\n\n.nombre_cliente {\n  font-size: 0.9rem;\n  margin-top: 10px; }\n\n.titulo_tabla {\n  font-size: 0.8rem; }\n\n.borde_titulo {\n  margin-left: 5px;\n  margin-right: 5px;\n  border-bottom: 2px solid #000000; }\n\n.borde_vehiculo {\n  margin-left: 5px;\n  margin-right: 5px;\n  border-top: 2px dashed #000000;\n  border-bottom: 2px dashed #000000; }\n\n.item_tabla {\n  font-size: 0.6rem; }\n\n.descripcion_item {\n  font-size: 0.7rem; }\n\n@media only screen and (min-width: 700px) {\n  .titulo {\n    font-size: 1.5rem; }\n  .subtitulo {\n    font-size: 1rem; }\n  .subtitulo_left {\n    font-size: 1rem; }\n  .nombre_cliente {\n    font-size: 1rem;\n    margin-top: 10px; }\n  .titulo_tabla {\n    font-size: 1rem; }\n  .item_tabla {\n    font-size: 1rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kYWxzL29yZGVuZXMtY29tcHJhL0M6XFxVc2Vyc1xcRmFiaWFuXFxEb2N1bWVudHNcXGJvZGVnaW5cXGFwcEJvZGVnaW4vc3JjXFxhcHBcXE1vZGFsc1xcb3JkZW5lcy1jb21wcmFcXG9yZGVuZXMtY29tcHJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQU5wQjtFQVNRLDJCQUEyQixFQUFBOztBQUtuQztFQUNFLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxrQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBRWpCLDhCQUE4QjtFQUM5QixpQ0FBaUMsRUFBQTs7QUFLbkM7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFJbkI7RUFDRTtJQUNFLGlCQUFpQixFQUFBO0VBRW5CO0lBQ0UsZUFBYyxFQUFBO0VBRWhCO0lBQ0UsZUFBYyxFQUFBO0VBRWhCO0lBQ0UsZUFBYztJQUNkLGdCQUFnQixFQUFBO0VBRWxCO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvTW9kYWxzL29yZGVuZXMtY29tcHJhL29yZGVuZXMtY29tcHJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgaW9uLWltZ3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uaGVpZGVye1xyXG4gIGJhY2tncm91bmQ6ICMzODgwZmY7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uYm9yZGV7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjMDAwMDAwO1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxufVxyXG5cclxuLnN1YnRpdHVsb3tcclxuICBmb250LXNpemU6MC41cmVtO1xyXG5cclxufVxyXG5cclxuLnN1YnRpdHVsb19sZWZ0e1xyXG4gIGZvbnQtc2l6ZTowLjQ4cmVtO1xyXG59XHJcblxyXG4ubm9tYnJlX2NsaWVudGV7XHJcbiAgZm9udC1zaXplOjAuOXJlbTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGl0dWxvX3RhYmxhe1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uYm9yZGVfdGl0dWxve1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDA7XHJcbn1cclxuXHJcbi5ib3JkZV92ZWhpY3Vsb3tcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIC8vIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCAjMDAwMDAwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDAwMDtcclxufVxyXG5cclxuXHJcblxyXG4uaXRlbV90YWJsYXtcclxuICBmb250LXNpemU6IDAuNnJlbTtcclxufVxyXG4uZGVzY3JpcGNpb25faXRlbXtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDcwMHB4KSB7XHJcbiAgLnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICAuc3VidGl0dWxve1xyXG4gICAgZm9udC1zaXplOjFyZW07XHJcbiAgfVxyXG4gIC5zdWJ0aXR1bG9fbGVmdHtcclxuICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gIH1cclxuICAubm9tYnJlX2NsaWVudGV7XHJcbiAgICBmb250LXNpemU6MXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC50aXR1bG9fdGFibGF7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuaXRlbV90YWJsYXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Modals/ordenes-compra/ordenes-compra.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/Modals/ordenes-compra/ordenes-compra.page.ts ***!
  \**************************************************************/
/*! exports provided: OrdenesCompraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesCompraPage", function() { return OrdenesCompraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_inventarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/inventarios.service */ "./src/app/Services/inventarios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");








pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;


var OrdenesCompraPage = /** @class */ (function () {
    function OrdenesCompraPage(Pro_inventario, modalController, socialSharing, navCtrl, plt, file, fileOpener, base64) {
        this.Pro_inventario = Pro_inventario;
        this.modalController = modalController;
        this.socialSharing = socialSharing;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.base64 = base64;
        this.letterObj = {
            to: '',
            from: '',
            text: ''
        };
        this.orden = {
            nombre_legal: null,
            direccion: null,
            telefono: null,
            correo: null,
            rtn: null,
            fecha: null,
            nombre: null,
            id_sucursal: null,
            sucursal: null,
            cantidad_pedir: null,
            costo: null,
            logo: null
        };
        this.pdfObj = null;
    }
    OrdenesCompraPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Pro_inventario.getOrdenCompra(this.id_producto, this.id_sucursal).subscribe(function (data) {
            _this.orden = data;
        });
    };
    OrdenesCompraPage.prototype.share = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var docDefinition;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                docDefinition = {
                    content: [
                        { text: 'Orden de compra', style: 'header' },
                        { text: this.orden.nombre_legal, alignment: 'center' },
                        { text: 'RTN: ' + this.orden.rtn, alignment: 'center' },
                        { text: 'Direccion: ' + this.orden.direccion, alignment: 'center' },
                        { text: 'Correo: ' + this.orden.correo, alignment: 'center' },
                        { text: 'Telefono: ' + this.orden.telefono, alignment: 'center' },
                        { text: 'Fecha: ' + this.orden.fecha, alignment: 'left' },
                        { text: 'Detalle', style: 'subheader' },
                        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },
                        {
                            layout: 'lightHorizontalLines',
                            table: {
                                headerRows: 1,
                                widths: ['*', 'auto', 100, '*'],
                                body: [
                                    ['Producto', 'Cant.', 'Precio Ant.', 'Total'],
                                    [this.orden.nombre,
                                        this.orden.cantidad_pedir,
                                        this.orden.costo,
                                        (this.orden.costo * this.orden.cantidad_pedir)
                                    ],
                                ]
                            }
                        }
                    ],
                    styles: {
                        header: {
                            fontSize: 18,
                            bold: true,
                            alignment: 'center'
                        },
                        subheader: {
                            fontSize: 14,
                            bold: true,
                            margin: [0, 15, 0, 0]
                        },
                        story: {
                            italic: true,
                            alignment: 'center',
                            width: '50%',
                        }
                    }
                };
                this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(docDefinition);
                return [2 /*return*/];
            });
        });
    };
    OrdenesCompraPage.prototype.downloadPdf = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.share()];
                    case 1:
                        _a.sent();
                        if (this.plt.is('cordova')) {
                            this.pdfObj.getBuffer(function (buffer) {
                                var blob = new Blob([buffer], { type: 'application/pdf' });
                                _this.file.writeFile(_this.file.dataDirectory, 'miorden.pdf', blob, { replace: true }).then(function (fileEntry) {
                                    _this.fileOpener.open(_this.file.dataDirectory + 'miorden.pdf', 'application/pdf');
                                });
                            });
                        }
                        else {
                            this.pdfObj.download();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdenesCompraPage.prototype.Salir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], OrdenesCompraPage.prototype, "id_producto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], OrdenesCompraPage.prototype, "id_sucursal", void 0);
    OrdenesCompraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ordenes-compra',
            template: __webpack_require__(/*! ./ordenes-compra.page.html */ "./src/app/Modals/ordenes-compra/ordenes-compra.page.html"),
            styles: [__webpack_require__(/*! ./ordenes-compra.page.scss */ "./src/app/Modals/ordenes-compra/ordenes-compra.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_inventarios_service__WEBPACK_IMPORTED_MODULE_2__["InventariosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_5__["Base64"]])
    ], OrdenesCompraPage);
    return OrdenesCompraPage;
}());



/***/ }),

/***/ "./src/app/Pages/ordenes/ordenes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/ordenes/ordenes.module.ts ***!
  \*************************************************/
/*! exports provided: OrdenesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesPageModule", function() { return OrdenesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");
/* harmony import */ var _Modals_ordenes_compra_ordenes_compra_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modals/ordenes-compra/ordenes-compra.module */ "./src/app/Modals/ordenes-compra/ordenes-compra.module.ts");
/* harmony import */ var _Modals_ordenes_compra_ordenes_compra_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modals/ordenes-compra/ordenes-compra.page */ "./src/app/Modals/ordenes-compra/ordenes-compra.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ordenes_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ordenes.page */ "./src/app/Pages/ordenes/ordenes.page.ts");











var routes = [
    {
        path: '',
        component: _ordenes_page__WEBPACK_IMPORTED_MODULE_10__["OrdenesPage"]
    }
];
var OrdenesPageModule = /** @class */ (function () {
    function OrdenesPageModule() {
    }
    OrdenesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _Modals_ordenes_compra_ordenes_compra_page__WEBPACK_IMPORTED_MODULE_8__["OrdenesCompraPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _Modals_ordenes_compra_ordenes_compra_module__WEBPACK_IMPORTED_MODULE_7__["OrdenesCompraPageModule"]
            ],
            declarations: [_ordenes_page__WEBPACK_IMPORTED_MODULE_10__["OrdenesPage"]]
        })
    ], OrdenesPageModule);
    return OrdenesPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/ordenes/ordenes.page.html":
/*!*************************************************!*\
  !*** ./src/app/Pages/ordenes/ordenes.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Ordenes de compra\"></app-header-in>\n<ion-content class=\"contenedor\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                          pullingText=\"Hale para recargar\"\n                          refreshingSpinner=\"circles\"\n                          refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=\"car\" *ngFor=\"let item of reporte\" (click)=\"verOrden(item)\">\n    <ion-item class=\"car-head\" lines=\"none\">\n     <ion-avatar>\n       <img [src]=\"item.fotografia | domSanitizer\" />\n     </ion-avatar>\n     <p>&nbsp;{{item.nombre}}</p>\n     <ion-avatar slot=\"end\">\n       <ion-icon name=\"ios-cart\" color=\"primary\" size=\"large\"></ion-icon>\n     </ion-avatar>\n    </ion-item>\n    <ion-card-content>\n      <ion-label>\n        <ion-badge color=\"primary\">Sucursal {{item.sucursal}}</ion-badge>\n      </ion-label>\n      <ion-row>\n        Cantidad recomendada a pedir: {{item.cantidad_pedir}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"border\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/ordenes/ordenes.page.scss":
/*!*************************************************!*\
  !*** ./src/app/Pages/ordenes/ordenes.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car {\n  border: solid 1px #cacaca;\n  --background: white; }\n\n.precio {\n  font-size: 1.4em;\n  color: #52f450;\n  font-weight: bold; }\n\n.border {\n  height: 50px; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.center-boton {\n  text-align: center; }\n\n.car-head {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #6e6368;\n  border-top: solid 4px #3880ff; }\n\n@media (min-width: 600px) {\n  .boton {\n    width: 45%;\n    float: right; } }\n\n@media (min-width: 700px) {\n  .boton {\n    width: 33%;\n    float: right; } }\n\n@media (min-width: 900px) {\n  .boton {\n    width: 25%;\n    float: right; } }\n\n@media (min-width: 1100px) {\n  .boton {\n    width: 20%;\n    float: right; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvb3JkZW5lcy9DOlxcVXNlcnNcXEZhYmlhblxcRG9jdW1lbnRzXFxib2RlZ2luXFxhcHBCb2RlZ2luL3NyY1xcYXBwXFxQYWdlc1xcb3JkZW5lc1xcb3JkZW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVksRUFBQSxFQUNiOztBQUVIO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWSxFQUFBLEVBQ2I7O0FBRUg7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZLEVBQUEsRUFDYjs7QUFFSDtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvb3JkZW5lcy9vcmRlbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVuZWRvcntcclxuICAvLy0tYmFja2dyb3VuZDojZTBlMGUwO1xyXG59XHJcblxyXG4uY2Fye1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNjYWNhY2E7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLnByZWNpb3tcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGNvbG9yOiAjNTJmNDUwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmJ1dHRvbkV4aXR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogNTAwO1xyXG59XHJcblxyXG4uY2VudGVyLWJvdG9ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhci1oZWFke1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNmU2MzY4O1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDRweCAjMzg4MGZmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAuYm90b257XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAuYm90b257XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAuYm90b257XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgLmJvdG9ue1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/ordenes/ordenes.page.ts":
/*!***********************************************!*\
  !*** ./src/app/Pages/ordenes/ordenes.page.ts ***!
  \***********************************************/
/*! exports provided: OrdenesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesPage", function() { return OrdenesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _Services_inventarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/inventarios.service */ "./src/app/Services/inventarios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Modals_ordenes_compra_ordenes_compra_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Modals/ordenes-compra/ordenes-compra.page */ "./src/app/Modals/ordenes-compra/ordenes-compra.page.ts");






var OrdenesPage = /** @class */ (function () {
    function OrdenesPage(storage, Pro_inventario, modalController) {
        this.storage = storage;
        this.Pro_inventario = Pro_inventario;
        this.modalController = modalController;
        this.reporte = [];
    }
    OrdenesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_inventario.ordenesCompra(token).subscribe(function (report) {
                _this.reporte = report;
            });
        });
    };
    OrdenesPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get('token').then(function (token) {
                    _this.Pro_inventario.ordenesCompra(token).subscribe(function (data) {
                        _this.reporte = data;
                        event.target.complete();
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    OrdenesPage.prototype.verOrden = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _Modals_ordenes_compra_ordenes_compra_page__WEBPACK_IMPORTED_MODULE_5__["OrdenesCompraPage"],
                            componentProps: {
                                id_producto: item.id_producto,
                                id_sucursal: item.id_sucursal
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdenesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ordenes',
            template: __webpack_require__(/*! ./ordenes.page.html */ "./src/app/Pages/ordenes/ordenes.page.html"),
            styles: [__webpack_require__(/*! ./ordenes.page.scss */ "./src/app/Pages/ordenes/ordenes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _Services_inventarios_service__WEBPACK_IMPORTED_MODULE_3__["InventariosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], OrdenesPage);
    return OrdenesPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-ordenes-ordenes-module.js.map