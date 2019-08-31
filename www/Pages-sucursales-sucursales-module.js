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

module.exports = "<app-header-modal *ngIf=\"accion=='INSERT'\"\n                  titulo=\"Nueva Sucursal\">\n</app-header-modal>\n<app-header-modal *ngIf=\"accion=='UPDATE'\"\n                  titulo=\"Editar Sucursal\">\n</app-header-modal>\n<ion-content>\n  <form #form=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Nombre</ion-label>\n            <ion-input name=\"descripcion\"\n                       type=\"text\"\n                       [(ngModel)]=\"sucursal.descripcion\"\n                       required>\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Nombre Corto</ion-label>\n            <ion-input name=\"nombre_corto\"\n                       type=\"text\"\n                       [(ngModel)]=\"sucursal.nombre_corto\"\n                       minlength=\"3\"\n                       maxlength=\"3\"\n                       required>\n             </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <div text-center class=\"separador\">\n    <h3>Usuarios &nbsp;&nbsp;<ion-icon name=\"person-add\"></ion-icon></h3>\n  </div>\n  <ion-list class=\"gridBorder\">\n    <ion-item *ngFor=\"let item of usuarios\">\n      <ion-label>{{item.nombre}}</ion-label>\n      <ion-checkbox [(ngModel)]=\"item.seleccionado\"\n                    color=\"primary\"\n                    checked=\"{{item.seleccionado}}\"\n                    name=\"seleccionado\"\n                    mode=\"ios\"\n                    slot=\"end\">\n      </ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-item lines=\"none\">\n    <ion-button class=\"button\"\n                [disabled]=\"form.invalid\"\n                color=\"primary\"\n                size=\"default\"\n                (click)=\"InsertUpdateSucursal()\"\n                shape=\"round\">Guardar<ion-icon slot=\"end\" name=\"save\"></ion-icon></ion-button>\n\n    <ion-button class=\"buttonExit\"\n                (click)=\"Salir()\"\n                color=\"medium\"\n                size=\"default\"\n                shape=\"round\">Cancelar<ion-icon slot=\"end\" name=\"exit\"></ion-icon></ion-button>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Modals/sucursal-create/sucursal-create.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/Modals/sucursal-create/sucursal-create.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --color: #6e6368; }\n\nion-content form ion-grid ion-row ion-item ion-label {\n  --position:floating; }\n\n.separador {\n  background: #3880ff;\n  color: #FFFFFF; }\n\n.gridBorder {\n  margin-bottom: 35px; }\n\n.icon {\n  height: 100%;\n  display: block;\n  vertical-align: middle; }\n\n.button {\n  position: fixed;\n  left: 0;\n  bottom: 50px;\n  right: 0;\n  z-index: 500; }\n\n.buttonExit {\n  position: fixed;\n  left: 0;\n  bottom: 5px;\n  right: 0;\n  z-index: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvTW9kYWxzL3N1Y3Vyc2FsLWNyZWF0ZS9zdWN1cnNhbC1jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQVEsRUFBQTs7QUFHWjtFQU1ZLG1CQUFXLEVBQUE7O0FBUXZCO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDQyxZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQixFQUFBOztBQUd2QjtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsWUFBWTtFQUNaLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvTW9kYWxzL3N1Y3Vyc2FsLWNyZWF0ZS9zdWN1cnNhbC1jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgLS1jb2xvcjogIzZlNjM2ODtcbn1cblxuaW9uLWNvbnRlbnR7XG4gIGZvcm17XG4gICAgaW9uLWdyaWR7XG4gICAgICBpb24tcm93e1xuICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAtLXBvc2l0aW9uOmZsb2F0aW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2VwYXJhZG9ye1xuICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5ncmlkQm9yZGVye1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLmljb257XG4gaGVpZ2h0OiAxMDAlO1xuIGRpc3BsYXk6IGJsb2NrO1xuIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5idXR0b257XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMDtcbiAgei1pbmRleDogNTAwO1xufVxuXG4uYnV0dG9uRXhpdHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDUwMDtcbn1cbiJdfQ== */"

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

module.exports = "<app-header-in titulo=\"Sucursales\"></app-header-in>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content  pullingIcon=\"arrow-dropdown\"\n                            pullingText=\"Hale para recargar\"\n                            refreshingSpinner=\"circles\"\n                            refreshingText=\"Recargando...\"></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"busqueda\">\n    <form #form=\"ngForm\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col>\n            <div #list>\n              <ion-item>\n                <ion-icon slot=\"end\"\n                          name=\"search\"\n                          color=\"#f4f4f4\">\n                </ion-icon>\n                <ion-input type=\"text\"\n                           name=\"sucursal\"\n                           placeholder=\"Buscar\"\n                           clearInput\n                           [(ngModel)]='textSearch'\n                           (ionChange)='busqueda($event.target.value)'\n                           (input)='busqueda($event.target.value)'\n                           >\n                </ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of sucursales\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\"\n           (click)=\"SucursalDelete(item.id_sucursal, item.descripcion)\">Eliminar<ion-icon slot=\"end\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n      </ion-item-options>\n      <ion-item>\n        <ion-label>{{item.nombre_corto | uppercase}} &nbsp;-&nbsp; {{item.descripcion}}\n        </ion-label>\n        <ion-icon slot=\"end\" name=\"create\" (click)=\"presentModal('UPDATE',item)\"></ion-icon>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" #fab>\n    <ion-fab-button (click)=\"presentModal('INSERT')\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/sucursales/sucursales.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/sucursales/sucursales.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n  ion-col div ion-item ion-label {\n    font-size: 1.5em !important; }\n  .busqueda {\n  background: #3880ff; }\n  .footer {\n  position: fixed;\n  bottom: 20px;\n  z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpYW4vRG9jdW1lbnRzL2JvZGVnaW4vYXBwL3NyYy9hcHAvUGFnZXMvc3VjdXJzYWxlcy9zdWN1cnNhbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLHFCQUFhO0VBQ2IsYUFBUSxFQUFBO0VBSmhCO0lBTVUsMkJBQTJCLEVBQUE7RUFLckM7RUFDRSxtQkFBbUIsRUFBQTtFQUdyQjtFQUNHLGVBQWM7RUFDZCxZQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvc3VjdXJzYWxlcy9zdWN1cnNhbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2x7XG4gIGRpdntcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICB9XG59XG4uYnVzcXVlZGF7XG4gIGJhY2tncm91bmQ6ICMzODgwZmY7XG59XG5cbi5mb290ZXIge1xuICAgcG9zaXRpb246Zml4ZWQ7XG4gICBib3R0b206MjBweDtcbiAgIHotaW5kZXg6IDEwMDtcbn1cbiJdfQ== */"

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