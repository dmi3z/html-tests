(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <img class=\"header__logo\" alt=\"Angular\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n  <ng-container *ngIf=\"isLogin then user else guest\"></ng-container>\n</div>\n\n<ng-template #guest>\n  <span class=\"header__guest\">\n    Гость\n  </span>\n</ng-template>\n\n<ng-template #user>\n  <div class=\"header__user\">\n    {{ userName }}\n    <div class=\"header__user-logout\" (click)=\"logout()\">Выход</div>\n  </div>\n</ng-template>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth-page/auth-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth-page/auth-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page auth\">\n    <span class=\"background\">HTML <span [innerText]=\"'</>'\"></span></span>\n\n    <form novalidate [formGroup]=\"userForm\" class=\"auth__form\">\n        <input class=\"auth__form-field\" [class.error]=\"user.errors\" type=\"text\" formControlName=\"user\" placeholder=\"Ваше имя\">\n        <input class=\"auth__form-field\" [class.error]=\"password.errors\" type=\"password\" formControlName=\"password\" placeholder=\"Пароль\">\n        <input class=\"auth__form-button\" type=\"submit\" value=\"Войти\" (click)=\"login()\">\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test-page/test-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-page/test-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <div class=\"questions\">\n        <div class=\"questions__item\">\n            <h2 class=\"questions__item-title\">{{ questions[step].text }}</h2>\n            <img src=\"assets/{{ questions[step].image }}\" alt=\"\">\n        </div>\n\n        <div class=\"questions__answer\" *ngFor=\"let answer of questions[step].answers\" [innerHtml]=\"answer?.text\" (click)=\"goNext(answer)\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  width: 100%;\n  height: 70px;\n  background-color: lightblue;\n  display: -webkit-box;\n  display: flex;\n  padding: 0 40px;\n  box-sizing: border-box;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header__logo {\n  height: 60px;\n}\n.header__guest {\n  color: white;\n  font-size: 1.3rem;\n}\n.header__user {\n  display: -webkit-box;\n  display: flex;\n  font-weight: bold;\n  color: white;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header__user-logout {\n  margin-left: 2rem;\n  padding: 5px;\n  border: 1px solid lightgray;\n  font-weight: normal;\n  color: black;\n  background-color: lightsteelblue;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RtaXRyeS9EZXZlbG9wbWVudC9odG1sLXRlc3RzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FERUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREdJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RSO0FER1E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmX19sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cblxuICAgICZfX2d1ZXN0IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG5cbiAgICAmX191c2VyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAmLWxvZ291dCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn0iLCIuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uaGVhZGVyX19ndWVzdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uaGVhZGVyX191c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX3VzZXItbG9nb3V0IHtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    get isLogin() {
        return this.dataService.isLogin;
    }
    get userName() {
        return this.dataService.user;
    }
    logout() {
        this.dataService.user = null;
        this.router.navigate(['']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-page/auth-page.component */ "./src/app/auth-page/auth-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-page/test-page.component */ "./src/app/test-page/test-page.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_5__["AuthPageComponent"],
            _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__["TestPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_5__["AuthPageComponent"]
                },
                {
                    path: 'test',
                    component: _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__["TestPageComponent"]
                }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth-page/auth-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/auth-page/auth-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  width: 90%;\n  height: 100%;\n  position: absolute;\n  font-size: 180px;\n  color: rgba(0, 0, 0, 0.1);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-weight: bold;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.auth {\n  width: 100%;\n  height: calc(100vh - 170px);\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.auth__form {\n  padding: 2rem;\n  border: 1px solid lightblue;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n}\n\n.auth__form .error {\n  border: 1px solid red;\n}\n\n.auth__form-field {\n  height: 2rem;\n  padding-left: 10px;\n  font-size: 1.3rem;\n  width: 15rem;\n  margin-right: 1rem;\n  border: 1px solid lightgray;\n  background-color: white;\n  outline: none;\n}\n\n.auth__form-button {\n  width: 5rem;\n  height: 2.1rem;\n  background-color: lightblue;\n  border: 1px solid lightblue;\n  outline: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RtaXRyeS9EZXZlbG9wbWVudC9odG1sLXRlc3RzL3NyYy9hcHAvYXV0aC1wYWdlL2F1dGgtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC1wYWdlL2F1dGgtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NSOztBRENRO0VBQ0kscUJBQUE7QUNDWjs7QURFUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNBWjs7QURHUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9hdXRoLXBhZ2UvYXV0aC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDE4MHB4O1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLCAuMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYXV0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcwcHgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmX19mb3JtIHtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1maWVsZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjFyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTgwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5hdXRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE3MHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYXV0aF9fZm9ybSB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uYXV0aF9fZm9ybSAuZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4uYXV0aF9fZm9ybS1maWVsZCB7XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgd2lkdGg6IDE1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYXV0aF9fZm9ybS1idXR0b24ge1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiAyLjFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth-page/auth-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/auth-page/auth-page.component.ts ***!
  \**************************************************/
/*! exports provided: AuthPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageComponent", function() { return AuthPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AuthPageComponent = class AuthPageComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    ngOnInit() {
        this.createFormFields();
        this.createForm();
    }
    createFormFields() {
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[a-zа-я ]+/gmi)]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]);
    }
    createForm() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            user: this.user,
            password: this.password
        });
    }
    login() {
        if (this.userForm.valid) {
            if (this.password.value === 'po47tests') {
                this.dataService.user = this.user.value;
                console.log(this.user.value);
                this.router.navigate(['test']);
            }
        }
    }
};
AuthPageComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-page',
        template: __webpack_require__(/*! raw-loader!./auth-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth-page/auth-page.component.html"),
        styles: [__webpack_require__(/*! ./auth-page.component.scss */ "./src/app/auth-page/auth-page.component.scss")]
    })
], AuthPageComponent);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataService = class DataService {
    constructor() { }
    get isLogin() {
        return !!this._user;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DataService);



/***/ }),

/***/ "./src/app/test-page/data.ts":
/*!***********************************!*\
  !*** ./src/app/test-page/data.ts ***!
  \***********************************/
/*! exports provided: questions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questions", function() { return questions; });
const questions = [
    {
        id: 0,
        isTrue: false,
        point: 0,
        text: 'Выберите правильный набор свойств для получения такого квадрата?',
        image: '0.jpg',
        answers: [
            {
                id: 1,
                cost: 0,
                text: '<b>width:</b> 100px;<br><b>height:</b> 150px;<br><b>background: </b> red;',
            },
            {
                id: 2,
                cost: 0,
                text: '<b>width:</b> 100px;<br><b>height:</b> 100px;<br><b>border: </b> red;',
            },
            {
                id: 3,
                cost: 3,
                text: '<b>width:</b> 100px;<br><b>height:</b> 100px;<br><b>background: </b> red;',
            },
            {
                id: 4,
                cost: 0,
                text: '<b>width:</b> 100px;<br><b>height:</b> 100px;<br><b>color: </b> red;',
            }
        ]
    },
    {
        id: 1,
        isTrue: false,
        point: 0,
        text: 'Выберите правильный набор свойств для получения такого круга?',
        image: '1.jpg',
        answers: [
            {
                id: 1,
                cost: 0,
                text: '<b>width:</b> 200px;<br><b>height:</b> 200px;<br><b>radius:</b> 50%;<br><b>background: </b> green;',
            },
            {
                id: 2,
                cost: 4,
                text: '<b>width:</b> 200px;<br><b>height:</b> 200px;<br><b>border-radius: </b> 100%;<br>    <b>background: </b> green;',
            },
            {
                id: 3,
                cost: 0,
                text: '<b>width:</b> 200px;<br><b>height:</b> 250px;<br><b>border-radius: </b> 50%;<br><b>background: </b> green;',
            },
            {
                id: 4,
                cost: 0,
                text: '<b>width:</b> 200px;<br><b>height:</b> 200px;<br><b>border: </b> 100px;<br><b>background: </b> green;',
            }
        ]
    },
    {
        id: 2,
        isTrue: false,
        point: 0,
        text: 'К какому типу относится тег <div>?',
        image: null,
        answers: [
            {
                id: 1,
                cost: 1,
                text: 'Блочный',
            },
            {
                id: 2,
                cost: 0,
                text: 'Квадратный',
            },
            {
                id: 3,
                cost: 0,
                text: 'Строчный',
            },
            {
                id: 4,
                cost: 0,
                text: 'Прямоугольный',
            }
        ]
    },
    {
        id: 3,
        isTrue: false,
        point: 0,
        text: 'Какие теги являются важнейшими для СЕО?',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: 'span, div, input',
            },
            {
                id: 2,
                cost: 0,
                text: 'br, html, textarea',
            },
            {
                id: 3,
                cost: 0,
                text: 'span, head',
            },
            {
                id: 4,
                cost: 2,
                text: 'title, h.., meta',
            }
        ]
    },
    {
        id: 4,
        isTrue: false,
        point: 0,
        text: 'Какие свойства CSS нужно применить к тегу span, чтобы ему можно было установить размеры (высоту и ширину)',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: 'Ничего не нужно делать, достаточно задать <b>width</b> и <b>height</b>',
            },
            {
                id: 2,
                cost: 3,
                text: 'задать <b>display: block</b> или <b>display: inline-block</b>',
            },
            {
                id: 3,
                cost: 0,
                text: 'задать <b>display: inline;</b>',
            },
            {
                id: 4,
                cost: 6,
                text: 'задать <b>display: block</b> или <b>display: inline-block</b> или <b>display: flex;</b>',
            }
        ]
    },
    {
        id: 5,
        isTrue: false,
        point: 0,
        text: 'Сместится ли зеленый блок на 50px вниз, если к синему блоку применить margin-top:50px ?',
        image: '5.jpg',
        answers: [
            {
                id: 1,
                cost: 5,
                text: 'Да, они оба сместяться вниз на 50px (при условии что ни один из блоков не установлен в position: fixed или absolute)',
            },
            {
                id: 2,
                cost: 0,
                text: 'Да, они оба сместяться вниз на 50px (при условии что каждый из блоков установлен в position: fixed или absolute)',
            },
            {
                id: 3,
                cost: 0,
                text: 'Нет, не сместится ни при каких условиях',
            },
            {
                id: 4,
                cost: 0,
                text: 'Да, сместится. При этом синий блок останется на месте',
            }
        ]
    },
    {
        id: 6,
        isTrue: false,
        point: 0,
        text: 'К какому типу относятся теги группы <h>?',
        image: null,
        answers: [
            {
                id: 1,
                cost: 2,
                text: 'Блочный',
            },
            {
                id: 2,
                cost: 0,
                text: 'Квадратный',
            },
            {
                id: 3,
                cost: 0,
                text: 'Строчный',
            },
            {
                id: 4,
                cost: 0,
                text: 'Прямоугольный',
            }
        ]
    },
    {
        id: 7,
        isTrue: false,
        point: 0,
        text: 'Для чего используется свойство z-index ?',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: 'Для нумерации элементов',
            },
            {
                id: 2,
                cost: 0,
                text: 'Для отступов при использовании flex',
            },
            {
                id: 3,
                cost: 0,
                text: 'Для поворота элемента на определенный угол',
            },
            {
                id: 4,
                cost: 2,
                text: 'Для визуального расположения элементов друг над другом',
            }
        ]
    },
    {
        id: 8,
        isTrue: false,
        point: 0,
        text: 'Чтобы свойство z-index сработало, какое важное свойство должно быть установлено у элемента?',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: '<b>position: static</b>',
            },
            {
                id: 2,
                cost: 0,
                text: 'Сработает и без дополнительных свойств',
            },
            {
                id: 3,
                cost: 2,
                text: '<b>position: relative</b>',
            },
            {
                id: 4,
                cost: 2,
                text: '<b>position: absolute</b>',
            },
            {
                id: 4,
                cost: 5,
                text: '<b>position: absolute</b> или <b>position: relative</b> или <b>position: fixed</b>',
            }
        ]
    },
    {
        id: 9,
        isTrue: false,
        point: 0,
        text: 'Для чего нужен псевдокласс :hover',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: 'Для создания копии существующего элемента',
            },
            {
                id: 2,
                cost: 0,
                text: 'Такого псевдокласса нет',
            },
            {
                id: 3,
                cost: 2,
                text: 'Для изменения внешнего вида элемента при наведении курсора мыши',
            },
            {
                id: 4,
                cost: 0,
                text: 'Для изменения прозрачности элемента',
            }
        ]
    },
    {
        id: 10,
        isTrue: false,
        point: 0,
        text: 'Сместится ли зеленый блок на 50px вниз, если к синему блоку применить transform:translateY(50px) ?',
        image: '5.jpg',
        answers: [
            {
                id: 1,
                cost: 0,
                text: 'Да, они оба сместяться вниз на 50px (при условии что ни один из блоков не установлен в position: fixed или absolute)',
            },
            {
                id: 2,
                cost: 0,
                text: 'Да, они оба сместяться вниз на 50px (при условии что каждый из блоков установлен в position: fixed или absolute)',
            },
            {
                id: 3,
                cost: 5,
                text: 'Нет, не сместится ни при каких условиях',
            },
            {
                id: 4,
                cost: 0,
                text: 'Да, сместится. При этом синий блок останется на месте',
            }
        ]
    },
    {
        id: 11,
        isTrue: false,
        point: 0,
        text: 'На картинке сверху текущий результат, снизу - ожидаемый. Какого свойства (свойств) не хватает желтому блоку?',
        image: '10.jpg',
        answers: [
            {
                id: 1,
                cost: 0,
                text: '<b>position:</b> absolute;<br><b>width:</b> 50%;',
            },
            {
                id: 2,
                cost: 3,
                text: '<b>overflow:</b> hidden;',
            },
            {
                id: 3,
                cost: 0,
                text: '<b>opacity:</b> 0',
            },
            {
                id: 4,
                cost: 0,
                text: '<b>text-decoration:</b> none;<br><b>white-space:</b> no-wrap;',
            }
        ]
    },
    {
        id: 12,
        isTrue: false,
        point: 0,
        text: 'Для чего нужен псевдокласс :active',
        image: null,
        answers: [
            {
                id: 1,
                cost: 3,
                text: 'Для настройкой внешнего вида тега <a> на которую по ссылке ранее уже осуществлялся переход',
            },
            {
                id: 2,
                cost: 0,
                text: 'Такого псевдокласса нет',
            },
            {
                id: 3,
                cost: 0,
                text: 'Для изменения внешнего вида элемента при наведении курсора мыши',
            },
            {
                id: 4,
                cost: 0,
                text: 'Для активации кнопки <button>',
            }
        ]
    },
    {
        id: 13,
        isTrue: false,
        point: 0,
        text: 'Укажите в каком из ответов правильно настроен текстовый блок для замены текста который не влез на троеточие?',
        image: '14.jpg',
        answers: [
            {
                id: 1,
                cost: 0,
                text: '<b>overflow:</b> hidden;<br><b>display:</b> block;<br><b>text-overflow:</b> ellipsis;',
            },
            {
                id: 2,
                cost: 0,
                text: '<b>width:</b> 200px;<br><b>overflow:</b> hidden;<br><b>display:</b> block;<br>',
            },
            {
                id: 3,
                cost: 0,
                text: '<b>width:</b> 200px;<br><b>display:</b> block;',
            },
            {
                id: 4,
                cost: 7,
                text: '<b>width:</b> 200px;<br><b>overflow:</b> hidden;<br><b>display:</b> block;<br><b>text-overflow:</b> ellipsis;',
            },
            {
                id: 5,
                cost: 0,
                text: 'Не нужно свойств, браузер все сделает за меня',
            }
        ]
    },
    {
        id: 13,
        isTrue: false,
        point: 0,
        text: 'Найдите ответ, в котором нет ошибок в html коде',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: '&lt;span klass="test"&gt;My text&lt;/span&gt;',
            },
            {
                id: 2,
                cost: 0,
                text: '&lt;img src="test.jpg"&gt;',
            },
            {
                id: 3,
                cost: 5,
                text: '&lt;p class="paragraph"&gt;Hello my friends&lt;/p&gt;',
            },
            {
                id: 4,
                cost: 0,
                text: '&lt;img src="test.jpg"&gt;&lt;/img&gt;',
            },
            {
                id: 5,
                cost: 0,
                text: '&lt;img src="test.jpg&gt;',
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/test-page/test-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/test-page/test-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".questions__item {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.questions__item-title {\n  max-width: 60%;\n  white-space: pre-wrap;\n}\n.questions__answer {\n  padding: 3rem;\n  border-bottom: 1px solid lightgray;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.questions__answer:last-child {\n  border-bottom: none;\n}\n.questions__answer:hover {\n  background-color: rgba(255, 160, 122, 0.486);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RtaXRyeS9EZXZlbG9wbWVudC9odG1sLXRlc3RzL3NyYy9hcHAvdGVzdC1wYWdlL3Rlc3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVzdC1wYWdlL3Rlc3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FSO0FERVE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNBWjtBRElJO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FES1E7RUFDSSxtQkFBQTtBQ0haO0FETVE7RUFDSSw0Q0FBQTtBQ0paIiwiZmlsZSI6InNyYy9hcHAvdGVzdC1wYWdlL3Rlc3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbnMge1xuICAgICZfX2l0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICYtdGl0bGUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAmX19hbnN3ZXIge1xuICAgICAgICBwYWRkaW5nOiAzcmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2MCwgMTIyLCAwLjQ4Nik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnF1ZXN0aW9uc19faXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucXVlc3Rpb25zX19pdGVtLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5xdWVzdGlvbnNfX2Fuc3dlciB7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucXVlc3Rpb25zX19hbnN3ZXI6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ucXVlc3Rpb25zX19hbnN3ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTYwLCAxMjIsIDAuNDg2KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/test-page/test-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-page/test-page.component.ts ***!
  \**************************************************/
/*! exports provided: TestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageComponent", function() { return TestPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/test-page/data.ts");



let TestPageComponent = class TestPageComponent {
    constructor() {
        this.step = 0;
        this.total = 0;
        this.questions = _data__WEBPACK_IMPORTED_MODULE_2__["questions"];
    }
    goNext(answer) {
        this.total += answer.cost;
        if (this.step < this.questions.length - 1) {
            this.step++;
        }
        else {
            console.log(this.total);
        }
    }
};
TestPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-page',
        template: __webpack_require__(/*! raw-loader!./test-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/test-page/test-page.component.html"),
        styles: [__webpack_require__(/*! ./test-page.component.scss */ "./src/app/test-page/test-page.component.scss")]
    })
], TestPageComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dmitry/Development/html-tests/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map