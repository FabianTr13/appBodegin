(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-config-usuarios-config-usuarios-module"],{

/***/ "./src/app/Pages/config-usuarios/config-usuarios.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/config-usuarios/config-usuarios.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConfigUsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUsuariosPageModule", function() { return ConfigUsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipe/pipes.module */ "./src/app/Pipe/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_usuarios_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config-usuarios.page */ "./src/app/Pages/config-usuarios/config-usuarios.page.ts");









var routes = [
    {
        path: '',
        component: _config_usuarios_page__WEBPACK_IMPORTED_MODULE_8__["ConfigUsuariosPage"]
    }
];
var ConfigUsuariosPageModule = /** @class */ (function () {
    function ConfigUsuariosPageModule() {
    }
    ConfigUsuariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _Pipe_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_config_usuarios_page__WEBPACK_IMPORTED_MODULE_8__["ConfigUsuariosPage"]]
        })
    ], ConfigUsuariosPageModule);
    return ConfigUsuariosPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/config-usuarios/config-usuarios.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/config-usuarios/config-usuarios.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Configuracion\"></app-header-in>\r\n<ion-content>\r\n  <!-- <div text-center>\r\n    <img class=\"image\"\r\n         (click)=\"presentActionSheet()\"\r\n         [src]=\"Pro_producto.foto[1] | domSanitizer\"\r\n         alt=\"Agregar imagen\">\r\n  </div>\r\n  <input #fileInput hidden (change)=\"fileUpload()\" type=\"file\" name=\"pic\" accept=\"image/*\">\r\n  <form #form=\"ngForm\" (ngSubmit)=\"guardar()\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre</ion-label>\r\n            <ion-input name=\"nombre\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.nombre\"\r\n                       required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre Legal</ion-label>\r\n            <ion-input name=\"codigo\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.codigo\"\r\n                       required>\r\n             </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">RTN</ion-label>\r\n            <ion-input name=\"descripcion\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.descripcion\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Telefono</ion-label>\r\n            <ion-input name=\"descripcion\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.descripcion\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Usuario</ion-label>\r\n            <ion-input name=\"descripcion\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.descripcion\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Contraseña</ion-label>\r\n            <ion-input name=\"descripcion\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"Pro_producto.descripcion\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <div padding>\r\n            <ion-button shape = \"round\"\r\n                        size = \"default\"\r\n                        type = \"submit\"\r\n                        [disabled] = \"form.invalid\"\r\n                        expand = \"block\">Guardar <ion-icon name=\"save\"></ion-icon></ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form> -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/config-usuarios/config-usuarios.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/config-usuarios/config-usuarios.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\nion-content form ion-grid ion-row ion-item ion-label {\n  --position:floating; }\n\n.button {\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n.inv-in {\n  color: #6e6368 !important; }\n\n.inv-out {\n  color: red !important; }\n\n.image {\n  width: 20%;\n  height: 200px; }\n\n.buttonScanner {\n  height: 27px;\n  width: 27px;\n  margin: auto; }\n\n.active {\n  margin-right: 10%;\n  width: 10px;\n  height: 10px; }\n\n.minMax {\n  padding: 5px; }\n\n.transaccion {\n  font-size: 0.9em !important;\n  color: #3880ff;\n  font-weight: bold; }\n\n@media (max-width: 2000px) {\n  .image {\n    width: 20%;\n    height: 180px; } }\n\n@media (max-width: 1000px) {\n  .image {\n    width: 40%;\n    height: 180px; } }\n\n@media (max-width: 500px) {\n  .image {\n    width: 100%;\n    height: 180px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvY29uZmlnLXVzdWFyaW9zL0M6XFxVc2Vyc1xcRmFiaWFuXFxEb2N1bWVudHNcXGJvZGVnaW5cXGFwcEJvZGVnaW4vc3JjXFxhcHBcXFBhZ2VzXFxjb25maWctdXN1YXJpb3NcXGNvbmZpZy11c3Vhcmlvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBUSxFQUFBOztBQUdaO0VBTVksbUJBQVcsRUFBQTs7QUFRdkI7RUFFRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFFRSxPQUFPO0VBQ1AsV0FBVztFQUNYLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFDQyx5QkFBeUIsRUFBQTs7QUFFMUI7RUFDQyxxQkFBcUIsRUFBQTs7QUFHdEI7RUFDRSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWEsRUFBQSxFQUNkOztBQUVIO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2NvbmZpZy11c3Vhcmlvcy9jb25maWctdXN1YXJpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWNvbG9yOiAjNmU2MzY4O1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBmb3Jte1xyXG4gICAgaW9uLWdyaWR7XHJcbiAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIC0tcG9zaXRpb246ZmxvYXRpbmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA1MDA7XHJcbn1cclxuXHJcbi5idXR0b25FeGl0e1xyXG4gIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogNXB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDUwMDtcclxufVxyXG5cclxuLmludi1pbntcclxuXHRjb2xvcjogIzZlNjM2OCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnYtb3V0e1xyXG5cdGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltYWdle1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmJ1dHRvblNjYW5uZXJ7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5taW5NYXh7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4udHJhbnNhY2Npb257XHJcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMzg4MGZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMjAwMHB4KSB7XHJcbiAgLmltYWdle1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuaW1hZ2V7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5pbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/config-usuarios/config-usuarios.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/config-usuarios/config-usuarios.page.ts ***!
  \***************************************************************/
/*! exports provided: ConfigUsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUsuariosPage", function() { return ConfigUsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigUsuariosPage = /** @class */ (function () {
    function ConfigUsuariosPage() {
    }
    ConfigUsuariosPage.prototype.ngOnInit = function () {
    };
    ConfigUsuariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config-usuarios',
            template: __webpack_require__(/*! ./config-usuarios.page.html */ "./src/app/Pages/config-usuarios/config-usuarios.page.html"),
            styles: [__webpack_require__(/*! ./config-usuarios.page.scss */ "./src/app/Pages/config-usuarios/config-usuarios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigUsuariosPage);
    return ConfigUsuariosPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-config-usuarios-config-usuarios-module.js.map