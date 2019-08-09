(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-sucursales-sucursales-module"],{

/***/ "./src/app/Modals/sucursal-create/sucursal-create.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/Modals/sucursal-create/sucursal-create.module.ts ***!
  \******************************************************************/
/*! exports provided: SucursalCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalCreatePageModule", function() { return SucursalCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sucursal_create_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sucursal-create.page */ "./src/app/Modals/sucursal-create/sucursal-create.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");







var SucursalCreatePageModule = /** @class */ (function () {
    function SucursalCreatePageModule() {
    }
    SucursalCreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_sucursal_create_page__WEBPACK_IMPORTED_MODULE_5__["SucursalCreatePage"]],
            exports: []
        })
    ], SucursalCreatePageModule);
    return SucursalCreatePageModule;
}());



/***/ }),

/***/ "./src/app/Modals/sucursal-create/sucursal-create.page.html":
/*!******************************************************************!*\
  !*** ./src/app/Modals/sucursal-create/sucursal-create.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-modal *ngIf=\"accion=='INSERT'\"\r\n                  titulo=\"Nueva Sucursal\">\r\n</app-header-modal>\r\n<app-header-modal *ngIf=\"accion=='UPDATE'\"\r\n                  titulo=\"Editar Sucursal\">\r\n</app-header-modal>\r\n<ion-content>\r\n  <form #form=\"ngForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre</ion-label>\r\n            <ion-input name=\"descripcion\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"sucursal.descripcion\"\r\n                       required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre Corto</ion-label>\r\n            <ion-input name=\"nombre_corto\"\r\n                       type=\"text\"\r\n                       [(ngModel)]=\"sucursal.nombre_corto\"\r\n                       required>\r\n             </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n  <div text-center class=\"separador\">\r\n    <h3>Usuarios &nbsp;&nbsp;<ion-icon name=\"person-add\"></ion-icon></h3>\r\n  </div>\r\n  <ion-list class=\"gridBorder\">\r\n    <ion-item *ngFor=\"let item of usuarios\">\r\n      <ion-label>{{item.nombre}}</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"item.seleccionado\"\r\n                    color=\"primary\"\r\n                    checked=\"{{item.seleccionado}}\"\r\n                    name=\"seleccionado\"\r\n                    slot=\"end\">\r\n      </ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-item lines=\"none\">\r\n    <ion-button class=\"button\"\r\n                [disabled]=\"form.invalid\"\r\n                color=\"primary\"\r\n                size=\"default\"\r\n                (click)=\"InsertUpdateSucursal()\"\r\n                shape=\"round\">Guardar<ion-icon slot=\"end\" name=\"save\"></ion-icon></ion-button>\r\n\r\n    <ion-button class=\"buttonExit\"\r\n                (click)=\"Salir()\"\r\n                color=\"medium\"\r\n                size=\"default\"\r\n                shape=\"round\">Cancelar<ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\r\n  </ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Modals/sucursal-create/sucursal-create.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/Modals/sucursal-create/sucursal-create.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\nion-content form ion-grid ion-row ion-item ion-label {\n  --position:floating; }\n\n.separador {\n  background: #3880ff;\n  color: #FFFFFF; }\n\n.gridBorder {\n  margin-bottom: 35px; }\n\n.icon {\n  height: 100%;\n  display: block;\n  vertical-align: middle; }\n\n.button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kYWxzL3N1Y3Vyc2FsLWNyZWF0ZS9DOlxcVXNlcnNcXEZhYmlhblxcRG9jdW1lbnRzXFxib2RlZ2luXFxhcHBCb2RlZ2luL3NyY1xcYXBwXFxNb2RhbHNcXHN1Y3Vyc2FsLWNyZWF0ZVxcc3VjdXJzYWwtY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFRLEVBQUE7O0FBR1o7RUFNWSxtQkFBVyxFQUFBOztBQVF2QjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0MsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0IsRUFBQTs7QUFHdkI7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFlBQVk7RUFDWixRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL01vZGFscy9zdWN1cnNhbC1jcmVhdGUvc3VjdXJzYWwtY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgLS1jb2xvcjogIzZlNjM2ODtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgZm9ybXtcclxuICAgIGlvbi1ncmlke1xyXG4gICAgICBpb24tcm93e1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAtLXBvc2l0aW9uOmZsb2F0aW5nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlcGFyYWRvcntcclxuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5ncmlkQm9yZGVye1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLmljb257XHJcbiBoZWlnaHQ6IDEwMCU7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDUwMDtcclxufVxyXG5cclxuLmJ1dHRvbkV4aXR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogNTAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Modals/sucursal-create/sucursal-create.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/Modals/sucursal-create/sucursal-create.page.ts ***!
  \****************************************************************/
/*! exports provided: SucursalCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalCreatePage", function() { return SucursalCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Services_sucursales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/sucursales.service */ "./src/app/Services/sucursales.service.ts");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var SucursalCreatePage = /** @class */ (function () {
    function SucursalCreatePage(Pro_sucursales, modalController, Pro_usuarios, storage) {
        this.Pro_sucursales = Pro_sucursales;
        this.modalController = modalController;
        this.Pro_usuarios = Pro_usuarios;
        this.storage = storage;
        this.sucursal = {
            id_sucursal: null,
            descripcion: null,
            nombre_corto: null
        };
        this.usuarios = [
            {
                id_usuario: null,
                id_perfil: null,
                usuario: null,
                celular: null,
                fecha_creado: null,
                activo: null,
                nombre: null,
                seleccionado: null
            }
        ];
    }
    SucursalCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_usuarios.getUsuariosList(token, _this.sucursal.id_sucursal).subscribe(function (data) {
                _this.usuarios = data;
                console.log(data);
            });
        });
    };
    SucursalCreatePage.prototype.InsertUpdateSucursal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.Pro_sucursales.InserUpdateDeleteSucursal(this.sucursal.id_sucursal, this.sucursal.descripcion, this.sucursal.nombre_corto, this.accion);
                        console.log(this.usuarios);
                        return [4 /*yield*/, this.Pro_sucursales.insertSucursalUsuario(this.usuarios, this.sucursal.id_sucursal)];
                    case 1:
                        _a.sent();
                        this.modalController.dismiss(this.sucursal);
                        return [2 /*return*/];
                }
            });
        });
    };
    SucursalCreatePage.prototype.Salir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SucursalCreatePage.prototype, "sucursal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SucursalCreatePage.prototype, "accion", void 0);
    SucursalCreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sucursal-create',
            template: __webpack_require__(/*! ./sucursal-create.page.html */ "./src/app/Modals/sucursal-create/sucursal-create.page.html"),
            styles: [__webpack_require__(/*! ./sucursal-create.page.scss */ "./src/app/Modals/sucursal-create/sucursal-create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_sucursales_service__WEBPACK_IMPORTED_MODULE_3__["SucursalesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _Services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], SucursalCreatePage);
    return SucursalCreatePage;
}());



/***/ }),

/***/ "./src/app/Pages/sucursales/sucursales.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/sucursales/sucursales.module.ts ***!
  \*******************************************************/
/*! exports provided: SucursalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalesPageModule", function() { return SucursalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sucursales_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sucursales.page */ "./src/app/Pages/sucursales/sucursales.page.ts");
/* harmony import */ var _Modals_sucursal_create_sucursal_create_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modals/sucursal-create/sucursal-create.page */ "./src/app/Modals/sucursal-create/sucursal-create.page.ts");
/* harmony import */ var _Modals_sucursal_create_sucursal_create_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Modals/sucursal-create/sucursal-create.module */ "./src/app/Modals/sucursal-create/sucursal-create.module.ts");










var routes = [
    {
        path: '',
        component: _sucursales_page__WEBPACK_IMPORTED_MODULE_7__["SucursalesPage"]
    }
];
var SucursalesPageModule = /** @class */ (function () {
    function SucursalesPageModule() {
    }
    SucursalesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _Modals_sucursal_create_sucursal_create_page__WEBPACK_IMPORTED_MODULE_8__["SucursalCreatePage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _Modals_sucursal_create_sucursal_create_module__WEBPACK_IMPORTED_MODULE_9__["SucursalCreatePageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
            ],
            declarations: [_sucursales_page__WEBPACK_IMPORTED_MODULE_7__["SucursalesPage"]]
        })
    ], SucursalesPageModule);
    return SucursalesPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/sucursales/sucursales.page.html":
/*!*******************************************************!*\
  !*** ./src/app/Pages/sucursales/sucursales.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-in titulo=\"Sucursales\"></app-header-in>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\r\n                            pullingText=\"Hale para recargar\"\r\n                            refreshingSpinner=\"circles\"\r\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"busqueda\">\r\n    <form #form=\"ngForm\">\r\n      <ion-grid>\r\n        <ion-row color=\"primary\" justify-content-center>\r\n          <ion-col>\r\n            <div #list>\r\n              <ion-item>\r\n                <ion-icon slot=\"end\"\r\n                          name=\"search\"\r\n                          color=\"#f4f4f4\">\r\n                </ion-icon>\r\n                <ion-input type=\"text\"\r\n                           placeholder=\"Buscar\"\r\n                           clearInput\r\n                           [(ngModel)]='textSearch'\r\n                           (ionChange)='busqueda($event.target.value)'\r\n                           (input)='busqueda($event.target.value)'\r\n                           >\r\n                </ion-input>\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item-sliding *ngFor=\"let item of sucursales\">\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option color=\"danger\"\r\n           (click)=\"SucursalDelete(item.id_sucursal, item.descripcion)\">Eliminar<ion-icon slot=\"end\" name=\"trash\"></ion-icon>\r\n      </ion-item-option>\r\n      </ion-item-options>\r\n      <ion-item>\r\n        <ion-label>{{item.nombre_corto | uppercase}} &nbsp;-&nbsp; {{item.descripcion}}\r\n        </ion-label>\r\n        <ion-icon slot=\"end\" name=\"create\" (click)=\"presentModal('UPDATE',item)\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" #fab>\r\n    <ion-fab-button (click)=\"presentModal('INSERT')\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/Pages/sucursales/sucursales.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/sucursales/sucursales.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n  ion-col div ion-item ion-label {\n    font-size: 1.5em !important; }\n  .busqueda {\n  background: #3880ff; }\n  .footer {\n  position: fixed;\n  bottom: 20px;\n  z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvc3VjdXJzYWxlcy9DOlxcVXNlcnNcXEZhYmlhblxcRG9jdW1lbnRzXFxib2RlZ2luXFxhcHBCb2RlZ2luL3NyY1xcYXBwXFxQYWdlc1xcc3VjdXJzYWxlc1xcc3VjdXJzYWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxxQkFBYTtFQUNiLGFBQVEsRUFBQTtFQUpoQjtJQU1VLDJCQUEyQixFQUFBO0VBS3JDO0VBQ0UsbUJBQW1CLEVBQUE7RUFHckI7RUFDRyxlQUFjO0VBQ2QsWUFBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3N1Y3Vyc2FsZXMvc3VjdXJzYWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29se1xyXG4gIGRpdntcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgICAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idXNxdWVkYXtcclxuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgIGJvdHRvbToyMHB4O1xyXG4gICB6LWluZGV4OiAxMDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/sucursales/sucursales.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/sucursales/sucursales.page.ts ***!
  \*****************************************************/
/*! exports provided: SucursalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalesPage", function() { return SucursalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Services_sucursales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/sucursales.service */ "./src/app/Services/sucursales.service.ts");
/* harmony import */ var _Modals_sucursal_create_sucursal_create_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Modals/sucursal-create/sucursal-create.page */ "./src/app/Modals/sucursal-create/sucursal-create.page.ts");









var SucursalesPage = /** @class */ (function () {
    function SucursalesPage(Pro_sucursales, storage, modalController, alertController, loadingController, toastController) {
        this.Pro_sucursales = Pro_sucursales;
        this.storage = storage;
        this.modalController = modalController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.textSearch = '';
    }
    SucursalesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this.Pro_sucursales.obtenerSucursales(token).subscribe(function (data) {
                _this.sucursales = _this.sucursales_backup = data;
            });
        });
    };
    SucursalesPage.prototype.presentModal = function (p_accion, p_sucursal) {
        if (p_sucursal === void 0) { p_sucursal = undefined; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var suc, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        suc = {
                            id_sucursal: p_sucursal ? p_sucursal.id_sucursal : null,
                            descripcion: p_sucursal ? p_sucursal.descripcion : null,
                            nombre_corto: p_sucursal ? p_sucursal.nombre_corto : null
                        };
                        return [4 /*yield*/, this.modalController.create({
                                component: _Modals_sucursal_create_sucursal_create_page__WEBPACK_IMPORTED_MODULE_5__["SucursalCreatePage"],
                                componentProps: {
                                    'sucursal': suc,
                                    'accion': p_accion
                                }
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
                            this.refreshUpdate();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SucursalesPage.prototype.SucursalDelete = function (p_id_sucursal, p_descripcion) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Eliminar Sucursal',
                            message: "Eliminar " + p_descripcion,
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
                                                case 0: return [4 /*yield*/, this.Pro_sucursales.InserUpdateDeleteSucursal(p_id_sucursal, data, '', 'DELETE')];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, this.refreshUpdate()];
                                                case 2:
                                                    _a.sent();
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
    SucursalesPage.prototype.refreshUpdate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, event;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('caimos al refresh');
                        _a = this;
                        _b = this;
                        return [4 /*yield*/, this.Pro_sucursales.obtenerSucursalesAsync()];
                    case 1:
                        _a.sucursales = _b.sucursales_backup = _c.sent();
                        event = new MouseEvent('click', { bubbles: false });
                        return [4 /*yield*/, this.el.nativeElement.dispatchEvent(event)];
                    case 2:
                        _c.sent();
                        this.textSearch = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    SucursalesPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.refreshUpdate()];
                    case 1:
                        _a.sent();
                        event.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    SucursalesPage.prototype.busqueda = function (p_busqueda) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.sucursales = [];
                this.sucursales_backup.forEach(function (variable) {
                    if (variable.descripcion.toLowerCase().includes(p_busqueda.toLowerCase())) {
                        _this.sucursales.push(variable);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('list'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SucursalesPage.prototype, "el", void 0);
    SucursalesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sucursales',
            template: __webpack_require__(/*! ./sucursales.page.html */ "./src/app/Pages/sucursales/sucursales.page.html"),
            styles: [__webpack_require__(/*! ./sucursales.page.scss */ "./src/app/Pages/sucursales/sucursales.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_sucursales_service__WEBPACK_IMPORTED_MODULE_4__["SucursalesService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], SucursalesPage);
    return SucursalesPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-sucursales-sucursales-module.js.map