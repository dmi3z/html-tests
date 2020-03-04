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

/***/ "./node_modules/raw-loader/index.js!./src/app/complete-page/complete-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/complete-page/complete-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page complete\">\n    Ваш результат: <b> {{ percents }}%</b>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test-page/test-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-page/test-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <div class=\"questions\">\n        <div class=\"questions__item\">\n            <h2 class=\"questions__item-title\">{{ currentQestion?.text }}</h2>\n            <img src=\"assets/{{ currentQestion?.image }}\" alt=\"\">\n        </div>\n\n        <div class=\"questions__answer\" *ngFor=\"let answer of currentQestion?.answers\" [innerHtml]=\"answer?.text\" (click)=\"goNext(answer)\"></div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    Object.defineProperty(AppComponent.prototype, "isLogin", {
        get: function () {
            return this.dataService.isLogin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "userName", {
        get: function () {
            return this.dataService.user;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logout = function () {
        this.dataService.user = null;
        this.router.navigate(['']);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-page/auth-page.component */ "./src/app/auth-page/auth-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-page/test-page.component */ "./src/app/test-page/test-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _complete_page_complete_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./complete-page/complete-page.component */ "./src/app/complete-page/complete-page.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_5__["AuthPageComponent"],
                _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__["TestPageComponent"],
                _complete_page_complete_page_component__WEBPACK_IMPORTED_MODULE_10__["CompletePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_5__["AuthPageComponent"]
                    },
                    {
                        path: 'test',
                        component: _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__["TestPageComponent"],
                        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
                    },
                    {
                        path: 'complete',
                        component: _complete_page_complete_page_component__WEBPACK_IMPORTED_MODULE_10__["CompletePageComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthPageComponent = /** @class */ (function () {
    function AuthPageComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    AuthPageComponent.prototype.ngOnInit = function () {
        this.createFormFields();
        this.createForm();
    };
    AuthPageComponent.prototype.createFormFields = function () {
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[a-zа-я ]+/gmi)]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]);
    };
    AuthPageComponent.prototype.createForm = function () {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            user: this.user,
            password: this.password
        });
    };
    AuthPageComponent.prototype.login = function () {
        if (this.userForm.valid) {
            if (this.password.value === 'po47tests') {
                this.dataService.user = this.user.value;
                console.log(this.user.value);
                this.router.navigate(['test']);
            }
        }
    };
    AuthPageComponent.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-page',
            template: __webpack_require__(/*! raw-loader!./auth-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth-page/auth-page.component.html"),
            styles: [__webpack_require__(/*! ./auth-page.component.scss */ "./src/app/auth-page/auth-page.component.scss")]
        })
    ], AuthPageComponent);
    return AuthPageComponent;
}());



/***/ }),

/***/ "./src/app/complete-page/complete-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/complete-page/complete-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".complete {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RtaXRyeS9EZXZlbG9wbWVudC9odG1sLXRlc3RzL3NyYy9hcHAvY29tcGxldGUtcGFnZS9jb21wbGV0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wbGV0ZS1wYWdlL2NvbXBsZXRlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wbGV0ZS1wYWdlL2NvbXBsZXRlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGxldGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEyMHB4O1xufSIsIi5jb21wbGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/complete-page/complete-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/complete-page/complete-page.component.ts ***!
  \**********************************************************/
/*! exports provided: CompletePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletePageComponent", function() { return CompletePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CompletePageComponent = /** @class */ (function () {
    function CompletePageComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    CompletePageComponent.prototype.ngOnInit = function () {
        this.total = this.dataService.total;
        if (!this.total) {
            return this.router.navigate(['']);
        }
        this.percents = Math.round(this.total * 100 / 78);
    };
    CompletePageComponent.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CompletePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complete-page',
            template: __webpack_require__(/*! raw-loader!./complete-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/complete-page/complete-page.component.html"),
            styles: [__webpack_require__(/*! ./complete-page.component.scss */ "./src/app/complete-page/complete-page.component.scss")]
        })
    ], CompletePageComponent);
    return CompletePageComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.dataService.isLogin && !this.dataService.total) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.BASE_URL = 'https://html-tests-node.herokuapp.com/';
    }
    Object.defineProperty(DataService.prototype, "isLogin", {
        get: function () {
            return !!this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.getQuestions = function () {
        return this.http.get(this.BASE_URL.concat('questions'));
    };
    DataService.prototype.saveResult = function (result) {
        this.http.post(this.BASE_URL.concat('result'), result).toPromise();
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], DataService);
    return DataService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TestPageComponent = /** @class */ (function () {
    function TestPageComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.step = 0;
        this.total = 0;
        this.questions = [];
        this.userAnswers = {
            name: '',
            answers: []
        };
    }
    TestPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getQuestions().subscribe(function (res) {
            _this.questions = res;
            _this.questionsLength = res.length;
            _this.currentQestion = _this.questions[_this.step];
        });
        this.userAnswers.name = this.dataService.user;
    };
    TestPageComponent.prototype.goNext = function (answer) {
        this.total += answer.cost;
        if (this.step < this.questionsLength - 1) {
            this.step++;
            this.userAnswers.answers.push(answer);
            this.currentQestion = this.questions[this.step];
        }
        else {
            this.dataService.saveResult(this.userAnswers);
            this.dataService.total = this.total;
            this.router.navigate(['complete']);
        }
    };
    TestPageComponent.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TestPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-page',
            template: __webpack_require__(/*! raw-loader!./test-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/test-page/test-page.component.html"),
            styles: [__webpack_require__(/*! ./test-page.component.scss */ "./src/app/test-page/test-page.component.scss")]
        })
    ], TestPageComponent);
    return TestPageComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map