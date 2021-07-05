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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/getting-started/getting-started.component */ "./src/app/components/getting-started/getting-started.component.ts");
/* harmony import */ var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/introduction/introduction.component */ "./src/app/components/introduction/introduction.component.ts");
/* harmony import */ var _components_routes_routes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/routes/routes.component */ "./src/app/components/routes/routes.component.ts");
/* harmony import */ var _components_why_mayajs_why_mayajs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/why-mayajs/why-mayajs.component */ "./src/app/components/why-mayajs/why-mayajs.component.ts");
/* harmony import */ var _components_methods_methods_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/methods/methods.component */ "./src/app/components/methods/methods.component.ts");
/* harmony import */ var _components_databases_databases_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/databases/databases.component */ "./src/app/components/databases/databases.component.ts");
/* harmony import */ var _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/validation/validation.component */ "./src/app/components/validation/validation.component.ts");
/* harmony import */ var _components_router_router_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/router/router.component */ "./src/app/components/router/router.component.ts");
/* harmony import */ var _components_middleware_middleware_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/middleware/middleware.component */ "./src/app/components/middleware/middleware.component.ts");


// COMPONENTS












const routes = [
    {
        path: "get-started",
        component: _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedComponent"],
        children: [
            { path: "introduction", component: _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_4__["IntroductionComponent"] },
            { path: "why-mayajs", component: _components_why_mayajs_why_mayajs_component__WEBPACK_IMPORTED_MODULE_6__["WhyMayajsComponent"] },
            { path: "components", component: _components_routes_routes_component__WEBPACK_IMPORTED_MODULE_5__["RoutesComponent"] },
            { path: "methods", component: _components_methods_methods_component__WEBPACK_IMPORTED_MODULE_7__["MethodsComponent"] },
            { path: "databases", component: _components_databases_databases_component__WEBPACK_IMPORTED_MODULE_8__["DatabasesComponent"] },
            { path: "validation", component: _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_9__["ValidationComponent"] },
            { path: "routing", component: _components_router_router_component__WEBPACK_IMPORTED_MODULE_10__["RouterComponent"] },
            { path: "middlewares", component: _components_middleware_middleware_component__WEBPACK_IMPORTED_MODULE_11__["MiddlewareComponent"] },
            { path: "", redirectTo: "introduction", pathMatch: "full" },
            { path: "**", redirectTo: "introduction", pathMatch: "full" },
        ],
    },
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "**", redirectTo: "", pathMatch: "full" },
];
const router = {
    scrollPositionRestoration: "enabled",
    anchorScrolling: "enabled",
    scrollOffset: [0, 10],
};
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, router)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, router)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'mayajs';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/introduction/introduction.component */ "./src/app/components/introduction/introduction.component.ts");
/* harmony import */ var _components_mission_mission_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mission/mission.component */ "./src/app/components/mission/mission.component.ts");
/* harmony import */ var _components_vision_vision_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/vision/vision.component */ "./src/app/components/vision/vision.component.ts");
/* harmony import */ var _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/getting-started/getting-started.component */ "./src/app/components/getting-started/getting-started.component.ts");
/* harmony import */ var _components_routes_routes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/routes/routes.component */ "./src/app/components/routes/routes.component.ts");
/* harmony import */ var _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/gist/gist.component */ "./src/app/components/gist/gist.component.ts");
/* harmony import */ var _components_why_mayajs_why_mayajs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/why-mayajs/why-mayajs.component */ "./src/app/components/why-mayajs/why-mayajs.component.ts");
/* harmony import */ var _components_methods_methods_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/methods/methods.component */ "./src/app/components/methods/methods.component.ts");
/* harmony import */ var _components_databases_databases_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/databases/databases.component */ "./src/app/components/databases/databases.component.ts");
/* harmony import */ var _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/validation/validation.component */ "./src/app/components/validation/validation.component.ts");
/* harmony import */ var _components_router_router_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/router/router.component */ "./src/app/components/router/router.component.ts");
/* harmony import */ var _components_middleware_middleware_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/middleware/middleware.component */ "./src/app/components/middleware/middleware.component.ts");
/* harmony import */ var ngx_highlight_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-highlight-js */ "./node_modules/ngx-highlight-js/__ivy_ngcc__/fesm2015/ngx-highlight-js.js");



// COMPONENTS

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HighlightJsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"],
        _components_mission_mission_component__WEBPACK_IMPORTED_MODULE_7__["MissionComponent"],
        _components_vision_vision_component__WEBPACK_IMPORTED_MODULE_8__["VisionComponent"],
        _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedComponent"],
        _components_routes_routes_component__WEBPACK_IMPORTED_MODULE_10__["RoutesComponent"],
        _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_11__["GistComponent"],
        _components_why_mayajs_why_mayajs_component__WEBPACK_IMPORTED_MODULE_12__["WhyMayajsComponent"],
        _components_methods_methods_component__WEBPACK_IMPORTED_MODULE_13__["MethodsComponent"],
        _components_databases_databases_component__WEBPACK_IMPORTED_MODULE_14__["DatabasesComponent"],
        _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_15__["ValidationComponent"],
        _components_router_router_component__WEBPACK_IMPORTED_MODULE_16__["RouterComponent"],
        _components_middleware_middleware_component__WEBPACK_IMPORTED_MODULE_17__["MiddlewareComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HighlightJsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"],
                    _components_mission_mission_component__WEBPACK_IMPORTED_MODULE_7__["MissionComponent"],
                    _components_vision_vision_component__WEBPACK_IMPORTED_MODULE_8__["VisionComponent"],
                    _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedComponent"],
                    _components_routes_routes_component__WEBPACK_IMPORTED_MODULE_10__["RoutesComponent"],
                    _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_11__["GistComponent"],
                    _components_why_mayajs_why_mayajs_component__WEBPACK_IMPORTED_MODULE_12__["WhyMayajsComponent"],
                    _components_methods_methods_component__WEBPACK_IMPORTED_MODULE_13__["MethodsComponent"],
                    _components_databases_databases_component__WEBPACK_IMPORTED_MODULE_14__["DatabasesComponent"],
                    _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_15__["ValidationComponent"],
                    _components_router_router_component__WEBPACK_IMPORTED_MODULE_16__["RouterComponent"],
                    _components_middleware_middleware_component__WEBPACK_IMPORTED_MODULE_17__["MiddlewareComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HighlightJsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/databases/databases.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/databases/databases.component.ts ***!
  \*************************************************************/
/*! exports provided: DatabasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabasesComponent", function() { return DatabasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class DatabasesComponent {
    constructor() { }
    ngOnInit() {
    }
}
DatabasesComponent.ɵfac = function DatabasesComponent_Factory(t) { return new (t || DatabasesComponent)(); };
DatabasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatabasesComponent, selectors: [["app-databases"]], decls: 174, vars: 30, consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "components", 1, "mb-3"], ["id", "mongo", 1, "mb-3"], [1, "content"], [1, "notice", "notice-danger"], ["href", "https://mongoosejs.com/docs/api/model.html", "target", "_blank"], [1, "content", "code"], [1, "tab"], ["href", "https://mongoosejs.com/docs/connections.html#options", "target", "_blank"], [1, "tab-1"], ["id", "sql", 1, "mb-3"], [1, "tab-2"], [1, ""], [1, "next"], [1, "row", "justify-content-between", "pr-2", "mb-5"], [1, "col-md-2", "text-left", "previous"], [1, "m-0"], [1, "text-left"], ["routerLink", "/get-started/methods"], [1, "col-md-2", "text-right", "next"], [1, "text-right"], ["routerLink", "/get-started/routing"]], template: function DatabasesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This is a MayaJS library that deals with Mongodb drivers. It uses mongoose to connect to any mongodb database. It also use mongoose Schema and Model for its model creation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Models");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Creates a model intance based on the name passed on the parameter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "MayaJS collect and store all the models defined on the @Controller decorators to a single object. Everytime the @Models decorator is attached to a variable it replace its value with a model instance. This model instance is based on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "mongoose model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ". All of mongoose functionality is available for this model instance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pseudo Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " @Models(model_name:string) varaiable_name; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sample Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " @Models(\"sample\") model; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " A wrapper for mongoose that MayaJS use to connect to MongoDB. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Mongo accepts an object settings that will set the connection for MongoDB. MayaJS will automatically connect to the specified settings whenever the server starts. It will also set the models using the models function. It typically used inside the @App decorator on the options paramater. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "connectionString: string; // Connection string ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "options?: ConnectionOptions; // Mongoose connect options OPTIONAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "schemas?: SchemaObject; // Mongoose schema object OPTIONAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "NOTE: See full documentation of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " ConnectionOptions here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sample Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "connectionString: \"your-connection-string-here\", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "schemas: [], // Add mongoose schema here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " This will creates a MySql Database that will be consume on AppModule class. It accepts an object of settings for mysql connection. This database will be consume by Mayajs in compilation and automatically connects the database when the start function is called. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " name: \"database-name\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "database: \"sql-database\", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "username: \"sql-username\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "password: \"sql-password\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "host: \"localhost\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "dialect: \"mysql\" /* one of 'mariadb' | 'postgres' | 'mssql' */, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "schemas: [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "sample, // Sequelize Schema here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "],");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Adding Sql on App Decorator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "import Sql from \"./databases/sql\"; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "databases: [Sql],");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Schema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " An interface for table fields. Can be used when creating tables for type checking. Every Schema is an object of fields. Each field has its type and options. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Implementation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "type: DataTypes.STRING,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "allowNull: false,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "< PREVIOUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "NEXT >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Routing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @App(", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("database: Mongo(", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("options: ", "{}", ", // Define Mongodb options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", "),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" export class AppModule ", "{}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Sql ", "}", " from \"@mayajs/sql\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sql (", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("options: ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("options: ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@App(", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("export class AppModule ", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Schema ", "}", " from \"@mayajs/sql\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " DataTypes ", "}", " from \"sequelize\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " SqlModel ", "}", " from \"@mayajs/sql\"; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("const schema = ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" name: ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("export default SqlModel(\"User\", schema, ", "{}", ");");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["section[_ngcontent-%COMP%] {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.topic[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ffa9a967;\n  margin: 1.5rem 2rem;\n  padding: 1rem;\n  border-radius: 0.25rem;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #d6d6d64d;\n  margin: 1.5rem 2rem;\n  padding: 1.75rem;\n  border-radius: 0.1rem;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 600;\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.previous[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n.previous[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #eeeeee;\n  border-left: 6px solid #7f7f84;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);\n}\n\n.notice-danger[_ngcontent-%COMP%] {\n  border-color: #d73814;\n}\n\n.notice-danger[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d73814;\n}\n\n.list[_ngcontent-%COMP%] {\n  text-indent: 3rem;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px !important;\n  max-height: 100px !important;\n}\n\n.tab[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  display: block;\n}\n\n.tab-1[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  display: block;\n}\n\n.tab-2[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXRhYmFzZXMvZGF0YWJhc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVlBO0VBQ0Usc0JBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFjRTtFQUNFLCtCQUFBO0FBWEo7O0FBYUk7RUFDRSxjQUFBO0FBWE47O0FBZ0JBO0VBQ0UsY0FBQTtBQWJGOztBQWVFO0VBQ0UsK0JBQUE7QUFiSjs7QUFlSTtFQUNFLGNBQUE7QUFiTjs7QUFpQkU7RUFDRSxjQUFBO0FBZko7O0FBa0JNO0VBQ0UsY0FBQTtBQWhCUjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBR0EsNkNBQUE7QUFuQkY7O0FBc0JBO0VBQ0UscUJBQUE7QUFuQkY7O0FBcUJFO0VBQ0UsY0FBQTtBQW5CSjs7QUF1QkE7RUFDRSxpQkFBQTtBQXBCRjs7QUF3QkU7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0FBckJKOztBQXlCQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBdEJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXRhYmFzZXMvZGF0YWJhc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKHByaW1hcnk6ICNkZDFmMDIsXHJcbiAgc2Vjb25kYXJ5OiAjMDAwLFxyXG4gIHBhcmFncmFwaHM6ICM1ZTVlNWUsXHJcbiAgbGlnaHQ6ICNlZWVlZWUsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcclxufVxyXG5cclxuLnRvcGljIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOWE5Njc7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjRkO1xyXG4gIG1hcmdpbjogMS41cmVtIDJyZW07XHJcbiAgcGFkZGluZzogMS43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xyXG59XHJcblxyXG4ubmV4dCB7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcmV2aW91cyB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5vdGljZSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzdmN2Y4NDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICBib3gtc2hhZG93OiAwIDVweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG5cclxuLm5vdGljZS1kYW5nZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2Q3MzgxNDtcclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGNvbG9yOiAjZDczODE0O1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIHRleHQtaW5kZW50OiAzcmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udGFiIHsgXHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGFiLTEgeyBcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRhYi0yIHsgXHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatabasesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-databases',
                templateUrl: './databases.component.html',
                styleUrls: ['./databases.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/getting-started/getting-started.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/getting-started/getting-started.component.ts ***!
  \*************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function GettingStartedComponent_li_7_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GettingStartedComponent_li_7_ul_4_li_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const sub_r4 = ctx.$implicit; const navItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.gotoFragment(navItem_r1.url, sub_r4.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r4.title);
} }
function GettingStartedComponent_li_7_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GettingStartedComponent_li_7_ul_4_li_1_Template, 4, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", navItem_r1.sub);
} }
function GettingStartedComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GettingStartedComponent_li_7_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const navItem_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.gotoPage(navItem_r1.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GettingStartedComponent_li_7_ul_4_Template, 2, 1, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", navItem_r1.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", navItem_r1.sub);
} }
class GettingStartedComponent {
    constructor(router) {
        this.router = router;
        this.navItems = [
            {
                title: "Introduction",
                url: "introduction",
                sub: [
                    { title: "Getting Started", url: "getting-started" },
                    { title: "Overview", url: "overview" },
                    { title: "Installation", url: "installation" },
                    { title: "Imports", url: "imports" },
                    { title: "Development", url: "development" },
                ],
            },
            {
                title: "Why Mayajs?",
                url: "why-mayajs",
                sub: [
                    { title: "Easy to use", url: "easy" },
                    { title: "Simple", url: "simplicity" },
                    { title: "Typescript", url: "typescript" },
                    { title: "In between", url: "inbetween" },
                    { title: "Who uses MayaJS?", url: "users" },
                ],
            },
            {
                title: "Components",
                url: "components",
                sub: [
                    { title: "Controllers", url: "controllers" },
                    { title: "Models", url: "models" },
                    { title: "Service", url: "services" },
                    { title: "Routes", url: "routes" },
                ],
            },
            {
                title: "Methods",
                url: "methods",
                sub: [
                    { title: "GET", url: "get" },
                    { title: "POST", url: "post" },
                    { title: "PUT", url: "put" },
                    { title: "PATCH", url: "patch" },
                    { title: "DELETE", url: "delte" },
                ],
            },
            {
                title: "Databases",
                url: "databases",
                sub: [
                    { title: "Mongodb", url: "mongo" },
                    { title: "SQL", url: "sql" },
                    { title: "Postgres", url: "postgres" },
                ],
            },
            { title: "Router", url: "routing" },
            { title: "Middlewares", url: "middlewares" },
            { title: "Validation", url: "validation" },
            { itle: "FAQs", url: "faqs" },
        ];
    }
    ngOnInit() { }
    gotoFragment(value, fragment) {
        this.router.navigate([`/get-started/${value}`], { fragment });
    }
    gotoPage(value) {
        this.router.navigate([`/get-started/${value}`]);
    }
}
GettingStartedComponent.ɵfac = function GettingStartedComponent_Factory(t) { return new (t || GettingStartedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GettingStartedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GettingStartedComponent, selectors: [["app-getting-started"]], decls: 10, vars: 1, consts: [[1, "page"], [1, "sidenav"], [1, "text-center"], ["href", "", 1, "text-center", "mayajs"], [1, "nav", "flex-column"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "main"], [1, "nav-item"], [1, "nav-link", "main-menu"], [3, "click"], ["class", "sub-link", 4, "ngIf"], [1, "sub-link"], [4, "ngFor", "ngForOf"], [1, "nav-link", "sub-menu"]], template: function GettingStartedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MayaJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GettingStartedComponent_li_7_Template, 5, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 250px 6fr;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #eeeeee;\n  cursor: pointer;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #eeeeee;\n}\n\n.sidenav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  background-color: #ffc1c1;\n  width: 0.3em;\n}\n\n.sidenav[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(129, 129, 129, 0.3);\n}\n\n.sidenav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 50px;\n  border-radius: 10px;\n  background-color: #ff7b7b;\n  outline: 1px solid slategrey;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #fff;\n  overflow-x: hidden;\n  padding-top: 3rem;\n  border-right: 0.5px solid #dddddd;\n  position: sticky;\n  top: 0;\n}\n\n.sidenav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-indent: -25px;\n  font-weight: 300;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.sidenav[_ngcontent-%COMP%]   a.main-menu[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 600;\n}\n\n.sidenav[_ngcontent-%COMP%]   a.main-menu[_ngcontent-%COMP%]:hover {\n  text-decoration-line: underline;\n}\n\n.sub-link[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding-left: 1rem;\n}\n\n.sub-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-indent: -5px;\n}\n\n.sub-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #5e5e5e;\n}\n\n.sub-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.sub-menu[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.sub-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.sub-menu[_ngcontent-%COMP%]:hover {\n  border-radius: 5px;\n  color: #dd1f02;\n  font-weight: 600;\n  background-color: #ffc1c159;\n  text-decoration-line: underline;\n}\n\n.sub-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  text-indent: 10px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 0px 1rem;\n  text-align: left;\n}\n\n.mayajs[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #dd1f02;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBMkJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUF4QkY7O0FBMEJFO0VBQ0UsY0FBQTtBQXhCSjs7QUE0QkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usa0RBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQXpCRjs7QUE2QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLE1BQUE7QUExQkY7O0FBNEJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQTFCSjs7QUE2QkU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBM0JKOztBQTZCSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQTNCTjs7QUE2Qk07RUFDRSwrQkFBQTtBQTNCUjs7QUFpQ0E7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQTlCRjs7QUFnQ0U7RUFDRSxpQkFBQTtBQTlCSjs7QUFnQ0k7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUE5Qk47O0FBZ0NNO0VBQ0UsZ0JBQUE7QUE5QlI7O0FBZ0NRO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FBOUJWOztBQW1DSTtFQUNFLGlCQUFBO0FBakNOOztBQXNDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBbkNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCA2ZnI7XHJcbn1cclxuXHJcbiRjb2xvcnM6IChwcmltYXJ5OiAjZGQxZjAyLFxyXG4gIHNlY29uZGFyeTogIzAwMCxcclxuICBwYXJhZ3JhcGhzOiAjNWU1ZTVlLFxyXG4gIGxpZ2h0OiAjZWVlZWVlLFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxufVxyXG5cclxuJHRhYmxldDogODQwcHg7XHJcbiRkZXNrdG9wOiAxMjgwcHg7XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0fSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IGNvbG9yKGxpZ2h0KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IGNvbG9yKGxpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzFjMTtcclxuICB3aWR0aDogLjNlbTtcclxufVxyXG5cclxuLnNpZGVuYXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMTI5LCAxMjksIDEyOSwgMC4zKTtcclxufVxyXG5cclxuLnNpZGVuYXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YjdiO1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbn1cclxuXHJcbi8vIFNpZGUgTmF2aWdhdGlvbiBhbmQgTWFpblxyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG5cclxuICBoMyB7XHJcbiAgICB0ZXh0LWluZGVudDogLTI1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAmLm1haW4tbWVudSB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcihzZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN1Yi1saW5rIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuXHJcbiAgbGkge1xyXG4gICAgdGV4dC1pbmRlbnQ6IC01cHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6IGNvbG9yKHBhcmFncmFwaHMpO1xyXG5cclxuICAgICAgJi5zdWItbWVudSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzFjMTU5O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhOmJlZm9yZSB7XHJcbiAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIHBhZGRpbmc6IDBweCAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5tYXlhanMge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GettingStartedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-getting-started",
                templateUrl: "./getting-started.component.html",
                styleUrls: ["./getting-started.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/gist/gist.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/gist/gist.component.ts ***!
  \***************************************************/
/*! exports provided: GistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GistComponent", function() { return GistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GistComponent {
    constructor() { }
    ngOnInit() {
    }
}
GistComponent.ɵfac = function GistComponent_Factory(t) { return new (t || GistComponent)(); };
GistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GistComponent, selectors: [["app-gist"]], decls: 2, vars: 0, template: function GistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gist works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2lzdC9naXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gist',
                templateUrl: './gist.component.html',
                styleUrls: ['./gist.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 0, consts: [[1, "homepage"], [1, "container"], [1, "home-top"], ["src", "assets/svg/Group 195.svg", "alt", "Maya Logo", 1, "maya-logo", "mb-5"], [1, "landing-text"], [1, "text-primary"], [1, "subheading"], [1, "home-bottom"], ["routerLink", "/get-started"], [1, "btn", "btn-get-started"], ["href", "https://github.com/mayajs/maya"], [1, "btn", "btn-github"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A simple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Framework for creating REST API server side applications using typescript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MayaJS is designed for simplicity and ease of use for beginners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n}\n\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #9C1804;\n  color: #fff;\n  padding: 1rem 1rem;\n  width: 90%;\n  font-weight: 100;\n}\n\n.bg-copyboard[_ngcontent-%COMP%] {\n  background-color: #e7e7e7;\n  padding: 1.5rem 1rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 90%;\n  color: #5e5e5e;\n}\n\na[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-decoration: none;\n  color: #fff;\n  font-weight: 100;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #9C1804;\n}\n\n.homepage[_ngcontent-%COMP%] {\n  text-align: center;\n  background: url(\"/assets/svg/bg2.svg\") no-repeat;\n  background-size: cover;\n  max-width: 100%;\n  height: 100%;\n}\n\n@media (min-width: 1280px) {\n  .homepage[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n    padding-bottom: 4rem;\n  }\n}\n\n.maya-logo[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  width: 80%;\n}\n\n@media (min-width: 1280px) {\n  .maya-logo[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    width: 80%;\n  }\n}\n\n.landing-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n@media (min-width: 1280px) {\n  .landing-text[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n    padding: 0.3rem 1rem;\n  }\n}\n\n.subheading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n@media (min-width: 1280px) {\n  .subheading[_ngcontent-%COMP%] {\n    padding-left: 3rem;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid;\n  background: black;\n  color: white;\n  text-align: center;\n  font-size: 1rem;\n  border-radius: 30px;\n  cursor: pointer;\n  margin-bottom: 2%;\n  width: 80%;\n}\n\n@media (min-width: 1280px) {\n  button[_ngcontent-%COMP%] {\n    width: 15%;\n    margin-top: 0.3rem;\n    margin-right: 1rem;\n  }\n}\n\n.btn-get-started[_ngcontent-%COMP%] {\n  background: #9C1804;\n  padding: 1.3em;\n  color: #eeeeee;\n  font-weight: bold;\n}\n\n.btn-get-started[_ngcontent-%COMP%]:hover {\n  background: #eeeeee;\n  color: #9C1804;\n}\n\n.btn-github[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 1.3em;\n  color: #000;\n  border: 1px solid;\n  font-weight: bold;\n}\n\n.btn-github[_ngcontent-%COMP%]:hover {\n  background: #000;\n  color: #eeeeee;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 33%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  overflow-x: hidden;\n  padding-top: 5rem;\n  padding-left: 2rem;\n  border-right: 0.5px solid #000;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-bottom: 3rem;\n  text-decoration: none;\n  font-size: 25px;\n  color: #5e5e5e;\n  display: block;\n  text-align: left;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #9C1804;\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-left: 33rem;\n  padding: 0px 1rem;\n  text-align: left;\n}\n\n.upper-intro[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.welcome-maya[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n}\n\n.text-welcome[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 3rem;\n}\n\n.import[_ngcontent-%COMP%] {\n  width: 94%;\n}\n\n.sections[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQTJCQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBeEJGOztBQTRCQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBekJGOztBQTRCQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQXpCRjs7QUE0QkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBekJGOztBQTRCQTtFQUNFLGNBQUE7QUF6QkY7O0FBNEJBO0VBTUUsa0JBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUE5QkY7O0FBckJFO0VBeUNGO0lBRUksaUJBQUE7SUFDQSxvQkFBQTtFQWxCRjtBQUNGOztBQTJCQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQXhCRjs7QUFoQ0U7RUFzREY7SUFLSSxnQkFBQTtJQUNBLFVBQUE7RUF2QkY7QUFDRjs7QUEwQkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF2QkY7O0FBNUNFO0VBZ0VGO0lBTUksaUJBQUE7SUFDQSxvQkFBQTtFQXRCRjtBQUNGOztBQTBCQTtFQUNFLGVBQUE7QUF2QkY7O0FBdERFO0VBNEVGO0lBSUksa0JBQUE7RUF0QkY7QUFDRjs7QUF5QkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQXRCRjs7QUF2RUU7RUFvRkY7SUFZSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQXJCRjtBQUNGOztBQXdCQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXJCRjs7QUF1QkU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFyQko7O0FBeUJBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0QkY7O0FBd0JFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBdEJKOztBQTRCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBekJGOztBQTRCQTtFQUNFLGNBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBekJGOztBQThCQTtFQUNFLGFBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxVQUFBO0FBM0JGOztBQThCQTtFQUNFLGdCQUFBO0FBM0JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAuOXJlbSAxcmVtO1xyXG59XHJcblxyXG4kY29sb3JzOiAocHJpbWFyeTogIzlDMTgwNCxcclxuICBzZWNvbmRhcnk6ICMwMDAsXHJcbiAgcGFyYWdyYXBoczogIzVlNWU1ZSxcclxuICBsaWdodDogI2VlZWVlZSxcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSlcclxufVxyXG5cclxuJHRhYmxldDogODQwcHg7XHJcbiRkZXNrdG9wOiAxMjgwcHg7XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEobWluLXdpZHRoOiAjeyR0YWJsZXR9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICBAbWVkaWEobWluLXdpZHRoOiAjeyRkZXNrdG9wfSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuXHJcbn1cclxuXHJcbi5iZy1jb3B5Ym9hcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XHJcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBjb2xvcjogY29sb3IocGFyYWdyYXBocyk7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxufVxyXG5cclxuLmhvbWVwYWdlIHtcclxuICBAaW5jbHVkZSBkZXNrdG9wIHtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbiAgfVxyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmcvYmcyLnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWF5YS1sb2dvIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIHdpZHRoOiA4MCU7XHJcblxyXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubGFuZGluZy10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zdWJoZWFkaW5nIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB3aWR0aDogODAlO1xyXG5cclxuICBAaW5jbHVkZSBkZXNrdG9wIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAuM3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tZ2V0LXN0YXJ0ZWQge1xyXG4gIGJhY2tncm91bmQ6IGNvbG9yKHByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDEuM2VtO1xyXG4gIGNvbG9yOiBjb2xvcihsaWdodCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogY29sb3IobGlnaHQpO1xyXG4gICAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1naXRodWIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDEuM2VtO1xyXG4gIGNvbG9yOiBjb2xvcihzZWNvbmRhcnkpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGNvbG9yKHNlY29uZGFyeSk7XHJcbiAgICBjb2xvcjogY29sb3IobGlnaHQpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU2lkZSBOYXZpZ2F0aW9uIGFuZCBNYWluXHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIGJvcmRlci1yaWdodDogLjVweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiBjb2xvcihwYXJhZ3JhcGhzKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBtYXJnaW4tbGVmdDogMzNyZW07XHJcbiAgcGFkZGluZzogMHB4IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLy9JbnRyb2R1Y3Rpb25cclxuXHJcbi51cHBlci1pbnRybyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLndlbGNvbWUtbWF5YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udGV4dC13ZWxjb21lIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG4uaW1wb3J0IHtcclxuICB3aWR0aDogOTQlO1xyXG59XHJcblxyXG4uc2VjdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/introduction/introduction.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/introduction/introduction.component.ts ***!
  \*******************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function IntroductionComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", package_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r1.description);
} }
class IntroductionComponent {
    constructor() {
        this.import = `import { MayaJS } from "@mayajs/core";`;
        this.packages = [
            {
                name: "@mayajs/core",
                url: "https://www.npmjs.com/package/@mayajs/core",
                description: "Core library",
            },
            {
                name: "@mayajs/common",
                url: "https://www.npmjs.com/package/@mayajs/common",
                description: "Common modules",
            },
            {
                name: "@mayajs/router",
                url: "https://www.npmjs.com/package/@mayajs/router",
                description: "Routing library",
            },
            {
                name: "@mayajs/cli",
                url: "https://www.npmjs.com/package/@mayajs/cli",
                description: "Project scaffolding",
            },
            {
                name: "@mayajs/mongo",
                url: "https://www.npmjs.com/package/@mayajs/mongo",
                description: "MongoDB Plugin",
            },
            {
                name: "@mayajs/sql",
                url: "https://www.npmjs.com/package/@mayajs/sql",
                description: "SQL Plugin",
            },
        ];
    }
    ngOnInit() { }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 81, vars: 2, consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "getting-started", 1, "mb-3"], [1, "notice", "notice-danger"], ["href", "https://nodejs.org/en/", "target", "_blank", 1, "link"], ["href", "https://www.typescriptlang.org/", "target", "_blank", 1, "link"], ["href", "https://angular.io/", "target", "_blank", 1, "link"], ["id", "overview", 1, "mb-3"], [1, "content"], ["href", "", 1, "link"], [4, "ngFor", "ngForOf"], ["id", "installation", 1, "mb-3"], [1, "content", "code"], ["id", "imports", 1, "mb-3"], ["id", "development", 1, "mb-3"], [1, "row", "justify-content-end", "pr-2", "mb-5"], [1, "col-md-2", "text-right"], [1, "m-0"], [1, "text-right"], ["routerLink", "/get-started/why-mayajs", 1, "next"], [1, "link", 3, "href"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Getting Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " In order to start using mayajs you must install the latest stable version of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nodejs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " on your local machine. Having a prior knowledge in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " will help you alot. Like angular, mayajs uses typescript and much of the syntax implemented are heavily inspired from it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Mayajs is an ecosystem consist of several npm packages. All this packages are maintained by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mayajs Core Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, IntroductionComponent_li_24_Template, 6, 3, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " The first thing we need to do is to install mayajs CLI globally in your local machine for project scaffolding. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "npm i @mayajs/cli -g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " After installing the CLI we need to check if mayajs is recognized by the machine. This command will show the current version of mayajs installed in your machine. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "maya -v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " This command will show all the available commands that can be use for your mayajs app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "maya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Now mayajs is properly installed to your machine. It is time to create a basic mayajs project. For this purpose we will use mayajs CLI commands to generate the files necessary for you to run your first mayajs application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "maya new \"name-of-your-app\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Imports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "To import mayajs to your existing project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " You have created your first mayajs app but you don't know how to run it. Using the CLI commands you can run your app. But first you need to navigate to your app folder. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "cd \"directory-of-your-app\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " After you navigated to your app folder we can run the command to serve your mayajs app. The app will run on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "PORT:3333");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " by default. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "maya serve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " To change the port you can just add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "--port=\"port-number\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " as a flag with the command above. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "maya serve --port=4444");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "NEXT >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Why Mayajs?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.packages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.import);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["section[_ngcontent-%COMP%] {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.topic[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #eeeeee;\n  border-left: 6px solid #7f7f84;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);\n}\n\n.notice-danger[_ngcontent-%COMP%] {\n  border-color: #d73814;\n}\n\n.notice-danger[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d73814;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #d6d6d64d;\n  margin: 1.5rem 2rem;\n  padding: 1.75rem;\n  border-radius: 0.1rem;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 600;\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n\n.next[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVlBO0VBQ0Usc0JBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBR0EsNkNBQUE7QUFURjs7QUFZQTtFQUNFLHFCQUFBO0FBVEY7O0FBV0U7RUFDRSxjQUFBO0FBVEo7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBVkY7O0FBYUE7RUFDRSwrQkFBQTtFQUNBLGNBQUE7QUFWRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChwcmltYXJ5OiAjZGQxZjAyLFxyXG4gIHNlY29uZGFyeTogIzAwMCxcclxuICBwYXJhZ3JhcGhzOiAjNWU1ZTVlLFxyXG4gIGxpZ2h0OiAjZWVlZWVlLFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi50b3BpYyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLm5vdGljZSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzdmN2Y4NDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICBib3gtc2hhZG93OiAwIDVweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG5cclxuLm5vdGljZS1kYW5nZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2Q3MzgxNDtcclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGNvbG9yOiAjZDczODE0O1xyXG4gIH1cclxufVxyXG5cclxuLmNvZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY0ZDtcclxuICBtYXJnaW46IDEuNXJlbSAycmVtO1xyXG4gIHBhZGRpbmc6IDEuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxufVxyXG5cclxuLm5leHQge1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-introduction",
                templateUrl: "./introduction.component.html",
                styleUrls: ["./introduction.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/methods/methods.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/methods/methods.component.ts ***!
  \*********************************************************/
/*! exports provided: MethodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodsComponent", function() { return MethodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MethodsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MethodsComponent.ɵfac = function MethodsComponent_Factory(t) { return new (t || MethodsComponent)(); };
MethodsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MethodsComponent, selectors: [["app-methods"]], decls: 124, vars: 25, consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "methods", 1, "mb-3"], [1, "content"], [1, "content", "code"], ["id", "get", 1, "mb-3"], [1, "tab"], ["id", "post", 1, "mb-3"], ["id", "put", 1, "mb-3"], ["id", "patch", 1, "mb-3"], ["id", "delete", 1, "mb-3"], [1, "row", "justify-content-between", "pr-2", "mb-5"], [1, "col-md-2", "text-left", "previous"], [1, "m-0"], [1, "text-left"], ["routerLink", "/get-started/components"], [1, "col-md-2", "text-right", "next"], [1, "text-right"], ["routerLink", "/get-started/databases"]], template: function MethodsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "npm i @mayajs/common");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This is a decorator function is for creating a GET METHOD ROUTE. GET request is used to retreive data from a server at the specified resource. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "// Do some GET stuff here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " This is a decorator function is for creating a POST METHOD ROUTE. POST requests are used to send data to the API sever to create or udpate a resource. The data sent to the server is stored in the request body of the HTTP request. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "// Do some POST stuff here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Put");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " This is a decorator function is for creating a Put METHOD ROUTE. Is similar to POST but it's usage is to update a specific resource. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "// Do some PUT stuff here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Patch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " This is a decorator function is for creating a PATCH METHOD ROUTE. Is similar to POST and PUT but used only apply partial modifications to the resource. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "// Do some PATCH stuff here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " This is a decorator function is for creating a DELETE METHOD ROUTE. DELETE request is used to delete the resource at the specified URL. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "// Do some DELETE stuff here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "< PREVIOUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "NEXT >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Get ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("@Get(", "{", " path: \"/\", middlewares: [] ", "}", ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("function()", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Post ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("@Post(", "{", " path: \"/\", middlewares: [] ", "}", ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("function()", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Put ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("@Put(", "{", " path: \"/\", middlewares: [] ", "}", ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("function()", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Patch ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("@Patch(", "{", " path: \"/\", middlewares: [] ", "}", ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("function()", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Delete ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("@Delete(", "{", " path: \"/\", middlewares: [] ", "}", ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("function()", "{", "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["section[_ngcontent-%COMP%] {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.topic[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ffa9a967;\n  margin: 1.5rem 2rem;\n  padding: 1rem;\n  border-radius: 0.25rem;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #d6d6d64d;\n  margin: 1.5rem 2rem;\n  padding: 1.75rem;\n  border-radius: 0.1rem;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 600;\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.previous[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n.previous[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #eeeeee;\n  border-left: 6px solid #7f7f84;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);\n}\n\n.notice-danger[_ngcontent-%COMP%] {\n  border-color: #d73814;\n}\n\n.notice-danger[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d73814;\n}\n\n.list[_ngcontent-%COMP%] {\n  text-indent: 3rem;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px !important;\n  max-height: 100px !important;\n}\n\n.tab[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  display: block;\n}\n\n.tab-1[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  display: block;\n}\n\n.tab-2[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXRob2RzL21ldGhvZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxzQkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7QUFURjs7QUFZQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQWNFO0VBQ0UsK0JBQUE7QUFYSjs7QUFhSTtFQUNFLGNBQUE7QUFYTjs7QUFnQkE7RUFDRSxjQUFBO0FBYkY7O0FBZUU7RUFDRSwrQkFBQTtBQWJKOztBQWVJO0VBQ0UsY0FBQTtBQWJOOztBQWlCRTtFQUNFLGNBQUE7QUFmSjs7QUFrQk07RUFDRSxjQUFBO0FBaEJSOztBQXNCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFHQSw2Q0FBQTtBQW5CRjs7QUFzQkE7RUFDRSxxQkFBQTtBQW5CRjs7QUFxQkU7RUFDRSxjQUFBO0FBbkJKOztBQXVCQTtFQUNFLGlCQUFBO0FBcEJGOztBQXdCRTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUFyQko7O0FBeUJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBdEJGOztBQXlCQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUF0QkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21ldGhvZHMvbWV0aG9kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChwcmltYXJ5OiAjZGQxZjAyLFxyXG4gIHNlY29uZGFyeTogIzAwMCxcclxuICBwYXJhZ3JhcGhzOiAjNWU1ZTVlLFxyXG4gIGxpZ2h0OiAjZWVlZWVlLFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi50b3BpYyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTlhOTY3O1xyXG4gIG1hcmdpbjogMS41cmVtIDJyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNvZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY0ZDtcclxuICBtYXJnaW46IDEuNXJlbSAycmVtO1xyXG4gIHBhZGRpbmc6IDEuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxufVxyXG5cclxuLm5leHQge1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJldmlvdXMge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogI2NjY2NjYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ub3RpY2Uge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM3ZjdmODQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDhweCAtNnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcbi5ub3RpY2UtZGFuZ2VyIHtcclxuICBib3JkZXItY29sb3I6ICNkNzM4MTQ7XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBjb2xvcjogI2Q3MzgxNDtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICB0ZXh0LWluZGVudDogM3JlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRhYiB7IFxyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4OyBcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRhYi0xIHsgXHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50YWItMiB7IFxyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MethodsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-methods',
                templateUrl: './methods.component.html',
                styleUrls: ['./methods.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/middleware/middleware.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/middleware/middleware.component.ts ***!
  \***************************************************************/
/*! exports provided: MiddlewareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlewareComponent", function() { return MiddlewareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MiddlewareComponent {
    constructor() { }
    ngOnInit() {
    }
}
MiddlewareComponent.ɵfac = function MiddlewareComponent_Factory(t) { return new (t || MiddlewareComponent)(); };
MiddlewareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiddlewareComponent, selectors: [["app-middleware"]], decls: 4, vars: 0, consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "middleware", 1, "mb-3"]], template: function MiddlewareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Middlewares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWlkZGxld2FyZS9taWRkbGV3YXJlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiddlewareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-middleware',
                templateUrl: './middleware.component.html',
                styleUrls: ['./middleware.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/mission/mission.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/mission/mission.component.ts ***!
  \*********************************************************/
/*! exports provided: MissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionComponent", function() { return MissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MissionComponent {
    constructor() {
        this.svg = "../../../../assets/svg/mission.svg";
    }
    ngOnInit() { }
}
MissionComponent.ɵfac = function MissionComponent_Factory(t) { return new (t || MissionComponent)(); };
MissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MissionComponent, selectors: [["app-mission"]], decls: 8, vars: 1, consts: [[1, "content"], [1, "card"], ["alt", "mission", "width", "223", 1, "mission-svg", 3, "src"], [1, "statement"], [1, "mission-title"], [1, "mission-text"]], template: function MissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0\u00A0\u00A0\u00A0We begin with determination to understand your brand and the intricate details of each unique project. We are trying to make MayaJS as simple as possible for every type developer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.svg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".content[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  height: 90%;\n  width: 100%;\n  background-color: #e4e4e4;\n  justify-content: end;\n  align-self: center;\n  border-radius: 5px;\n  border: 1px solid #e4e4e4;\n  box-shadow: -14px 15px 40px -15px #b3b1b3;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .mission-svg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 60%;\n  justify-self: center;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%]   .mission-title[_ngcontent-%COMP%] {\n  justify-self: center;\n  font-size: 4rem;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%]   .mission-text[_ngcontent-%COMP%] {\n  justify-items: end;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9taXNzaW9uL21pc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUdBLHlDQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFDTjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBQU47QUFFTTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUFSO0FBR007RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21pc3Npb24vbWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xNHB4IDE1cHggNDBweCAtMTVweCByZ2JhKDE3OSwgMTc3LCAxNzksIDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAtMTRweCAxNXB4IDQwcHggLTE1cHggcmdiYSgxNzksIDE3NywgMTc5LCAxKTtcclxuICAgIGJveC1zaGFkb3c6IC0xNHB4IDE1cHggNDBweCAtMTVweCByZ2JhKDE3OSwgMTc3LCAxNzksIDEpO1xyXG5cclxuICAgIC5taXNzaW9uLXN2ZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXRlbWVudCB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xyXG5cclxuICAgICAgLm1pc3Npb24tdGl0bGUge1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1pc3Npb24tdGV4dCB7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogZW5kO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MissionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-mission",
                templateUrl: "./mission.component.html",
                styleUrls: ["./mission.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/router/router.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/router/router.component.ts ***!
  \*******************************************************/
/*! exports provided: RouterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterComponent", function() { return RouterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function RouterComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r27.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r27.spacing ? " " : " ", " ");
} }
function RouterComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r28.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r28.spacing ? " " : " ", " ");
} }
function RouterComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r29.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r29.spacing ? " " : " ", " ");
} }
function RouterComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r30.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r30.spacing ? " " : " ", " ");
} }
function RouterComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r31.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r31.spacing ? " " : " ", " ");
} }
function RouterComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r32.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r32.spacing ? " " : " ", " ");
} }
function RouterComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r33.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r33.spacing ? " " : " ", " ");
} }
function RouterComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r34.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r34.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r34.spacing ? " " : " ", " ");
} }
function RouterComponent_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r35.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r35.spacing ? " " : " ", " ");
} }
function RouterComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r36.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.spacing ? " " : " ", " ");
} }
function RouterComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r37.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r37.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r37.spacing ? " " : " ", " ");
} }
function RouterComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r38.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r38.spacing ? " " : " ", " ");
} }
function RouterComponent_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r39.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r39.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r39.spacing ? " " : " ", " ");
} }
function RouterComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r40.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r40.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r40.spacing ? " " : " ", " ");
} }
function RouterComponent_span_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r41.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r41.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.spacing ? " " : " ", " ");
} }
function RouterComponent_span_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r42.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r42.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r42.spacing ? " " : " ", " ");
} }
function RouterComponent_span_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r43.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r43.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r43.spacing ? " " : " ", " ");
} }
function RouterComponent_span_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r44.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r44.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r44.spacing ? " " : " ", " ");
} }
function RouterComponent_span_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r45.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r45.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r45.spacing ? " " : " ", " ");
} }
function RouterComponent_span_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r46.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r46.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r46.spacing ? " " : " ", " ");
} }
function RouterComponent_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r47.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r47.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r47.spacing ? " " : " ", " ");
} }
function RouterComponent_span_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r48.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r48.spacing ? " " : " ", " ");
} }
function RouterComponent_span_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r49.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r49.spacing ? " " : " ", " ");
} }
function RouterComponent_span_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r50.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r50.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r50.spacing ? " " : " ", " ");
} }
function RouterComponent_span_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r51.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r51.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r51.spacing ? " " : " ", " ");
} }
function RouterComponent_span_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r52.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r52.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r52.spacing ? " " : " ", " ");
} }
function RouterComponent_span_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r53.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r53.spacing ? " " : " ", " ");
} }
class RouterComponent {
    constructor() {
        this.firstRow = [
            { name: "import", style: "red", spacing: true },
            { name: "maya", style: "" },
            { name: "from", style: "red" },
            { name: "maya", style: "" },
            { name: '"@mayajs/router"', style: "blue" },
            { name: ";", style: "" },
        ];
        this.secondRow = [
            { name: "import", style: "red", spacing: true },
            { name: "http", style: "", spacing: true },
            { name: "from", style: "red", spacing: true },
            { name: '"http"', style: "blue", spacing: true },
            { name: ";", style: "", spacing: true },
        ];
        this.thirdRow = [
            { name: "const", style: "red", spacing: true },
            { name: "port", style: "", spacing: true },
            { name: "=", style: "blue", spacing: true },
            { name: '"3000"', style: "blue", spacing: true },
            { name: ";", style: "", spacing: true },
        ];
        this.fourthRow = [
            { name: "const", style: "red", spacing: true },
            { name: "app", style: "", spacing: true },
            { name: "=", style: "blue", spacing: true },
            { name: '"maya()"', style: "purple", spacing: true },
            { name: ";", style: "", spacing: true },
        ];
        this.fifthRow = [
            { name: "app.", style: "", spacing: true },
            { name: "add", style: "purple", spacing: true },
            { name: "(", style: "", spacing: false },
            { name: '[', style: "", spacing: false },
        ];
        this.sixthRow = [
            { name: "path", style: "blue", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: '"/"', style: "lightBlue", spacing: true },
            { name: ",", style: "", spacing: true },
        ];
        this.seventhRow = [
            { name: "GET", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: '"Hello, World"', style: "lightBlue", spacing: true },
            { name: ",", style: "", spacing: true },
        ];
        this.eightRow = [
            { name: "http.", style: "", spacing: true },
            { name: "createServer", style: "purple", spacing: true },
            { name: "(app).", style: "", spacing: true },
            { name: "listen", style: "purple", spacing: true },
            { name: "(PORT, ()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "console.", style: "", spacing: true },
            { name: "log", style: "purple", spacing: true },
            { name: "(", style: "", spacing: true },
            { name: "'Server listening on port", style: "lightBlue", spacing: true },
            { name: "${PORT}", style: "", spacing: true },
            { name: ".'", style: "lightBlue", spacing: true },
            { name: "));", style: "", spacing: true },
        ];
        this.ninthRow = [
            { name: "const", style: "red", spacing: true },
            { name: "user", style: "", spacing: true },
            { name: "=", style: "lightBlue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.tenthRow = [
            { name: "path", style: "blue", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: '"user"', style: "lightBlue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.eleventhRow = [
            { name: "GET", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.twelveRow = [
            { name: "POST", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.thirteenRow = [
            { name: "PUT", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.fourteenRow = [
            { name: "PATCH", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.fifteenRow = [
            { name: "DELETE", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.sixteenRow = [
            { name: "OPTIONS", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.seventeenRow = [
            { name: "const", style: "red", spacing: true },
            { name: "route", style: "", spacing: true },
            { name: "=", style: "lightBlue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.eighteenRow = [
            { name: "path", style: "blue", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: '"user"', style: "lightBlue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.nineteenRow = [
            { name: "GET", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.twentyRow = [
            { name: "// This will return `undefined`", style: "gray", spacing: true },
        ];
        this.twentyOneRow = [
            { name: '// This will have a content-type of "text/plain"', style: "gray", spacing: true },
        ];
        this.twentytwoRow = [
            { name: "POST", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.twentythreeRow = [
            { name: 'return "Hello"; // This will have a content-type of "text/plain"', style: "gray", spacing: true },
        ];
        this.twentyfourRow = [
            { name: "PUT", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.twentyfiveRow = [
            { name: 'return { message: "Hello" }; // This will have a content-type of "application/json"', style: "gray", spacing: true },
        ];
        this.twentysixRow = [
            { name: "PATCH", style: "purple", spacing: true },
            { name: ":", style: "", spacing: true },
            { name: "()", style: "", spacing: true },
            { name: "=>", style: "blue", spacing: true },
            { name: "{", style: "", spacing: true },
        ];
        this.twentysevenRow = [
            { name: 'return "<h1>Hello</h1>"; // This will have a content-type of "text/html"', style: "gray", spacing: true },
        ];
    }
    ngOnInit() {
    }
}
RouterComponent.ɵfac = function RouterComponent_Factory(t) { return new (t || RouterComponent)(); };
RouterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RouterComponent, selectors: [["app-router"]], decls: 508, vars: 120, consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "routing", 1, "mb-3"], [1, "notice", "notice-danger"], ["href", "https://github.com/mayajs/router", "target", "_blank"], [1, "content"], [1, "content", "code"], ["id", "quick-start", 1, "mb-3"], [4, "ngFor", "ngForOf"], [1, "tab-1"], [1, "tab-2"], ["id", "route", 1, "mb-3"], [1, "tab"], ["id", "params", 1, "mb-3"], ["id", "query-string", 1, "mb-3"], ["id", "body", 1, "mb-3"], ["href", "https://www.npmjs.com/package/body-parser", "target", "_blank"], ["id", "middleware", 1, "mb-3"], ["href", "https://expressjs.com/en/resources/middleware.html", "target", "_blank"], ["id", "child-route", 1, "mb-3"], ["id", "services", 1, "md-3"], ["id", "module", 1, "mb-3"], ["id", "custom-module", 1, "mb-3"]], template: function RouterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Router");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We know that this is another Express JS like project. We develop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "@mayajs/router");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " not to compete but to have our own router for our other projects like @mayajs/core. As much as possible we don't want to rely on other framework/library to create our own projects. This is just for maintainability and ease of transition for future updates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Installation via command-line ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " npm i @mayajs/router ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quick start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The easiest way to get started is to create a simple route ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RouterComponent_span_20_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RouterComponent_span_22_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RouterComponent_span_25_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RouterComponent_span_27_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RouterComponent_span_30_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RouterComponent_span_35_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RouterComponent_span_37_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "]);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RouterComponent_span_45_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Route");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Defining routes in MayaJs is like creating a JSON object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RouterComponent_span_53_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, RouterComponent_span_56_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, RouterComponent_span_58_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "// ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, RouterComponent_span_64_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "// ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, RouterComponent_span_70_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "// ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, RouterComponent_span_76_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "// ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, RouterComponent_span_82_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "// ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, RouterComponent_span_88_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "// ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "As seen above each method name has a callback function. Mayajs will set the correct content-type based on what the method callback will return.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, RouterComponent_span_97_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, RouterComponent_span_100_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, RouterComponent_span_103_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, RouterComponent_span_106_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, RouterComponent_span_108_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, RouterComponent_span_113_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, RouterComponent_span_116_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, RouterComponent_span_121_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, RouterComponent_span_124_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, RouterComponent_span_129_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, RouterComponent_span_132_Template, 4, 5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Incase you need to use a middleware for an specific route method you need to create a route object instead.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "P", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "path: \"user\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "middlewares: [middleware],");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "// ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Params");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "MayaJs passes a context object on each route method. You can acces the route params by destructuring the context object on the callback method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "path: \"user/:id\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "// `params` object contains the value of `id` define on the path above e.g. `user/hello`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "return params.id; // This has a value of \"hello\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Query string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "You can also access the query string using the context object provided by MayaJs on your route method callback function.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "path: \"user\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "// `query` object contains all the value on your query string e.g. `user?id=1`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "return query.id; // This has a value of 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Request body is also accessible in the context but you need a middleware before you can actually uses. There is a popular middleware called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "body-parser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " that we can use to achieve this. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " import maya from \"@mayajs/router\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " // Third party middleware you need to install");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " import bodyParser from \"body-parser\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "const app = maya();");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "// Initialize body parser for mayajs to use it internally");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " app.use(bodyParser.json());");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "path: \"user\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "// `body` object contains all the value from the request body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "return body; // This has a value of req.body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " }; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Middlewares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "As seen above how we used third party middlewares to parse the request body. We can also create our own middlewares. Although MayaJs supports all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " ExpressJs Middlewares,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "we also can create a MayaJsMiddleware of our own. The context is where you can access params, query and body objects.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "// This `error` variable comes from the previous middleware ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " console.log(error);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "// The `next` function will trigger the end of this callback function ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "// and execute the next middleware in the list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "next(\"Error message or any value that you want to pass to the next middleware\"); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Child routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "A child route is a route that appended to its parent route. It can be added using the children property from the route object. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " path: \"child\", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " GET: () => \"This is from a child route\", // You can call this route by `users/child` ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " path: \"user\", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " children: [child], // This is a list of routes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "app.add([parent]); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "A controller is a class that act as a replacement for the route method objects. It can be used to make your code more modular and manageable when your code base get bigger. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "return \"Hello form UsersController\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "// You can also add additional route method like this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "// ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "// Other routes available are PUT, PATCH, DELETE and OPTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, " app.add([ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "path: \"user\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " controller: UsersController, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " ]); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "If you want to add middleware a middleware to a specific method you can add the middleware property in a controller. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "GET: [middleware], // This middleware will be added to the `GET` method below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "// ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "NOTE: A controller has no `children` property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "A service is an injectable class that can be used inside of a controller or another service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " // Every function inside the service can be accessed by the class its injected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "// All public properties are also accessible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "// A service is instatiated once and making it a singleton ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "// ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "super();");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " // This `add` function coming from the `UsersService`. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "// It is accessible on this controller via dependency injection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "// MayaJs automatically instantiated it and created it singleton instance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "this.userServices.add(); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "NOTE: A `child` route can also have its own `children`.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "A module is a like a container of routes, controller and services that act on its own. This will allow your code to modular and shareable accross all routes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " // List of `module` or `services` that this module will use for its controllers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, " imports = [];");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, " // List of controllers that this module will use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, " declarations = [];");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, " // List of services that can be use inside this module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, " providers = [];");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, " // List of services that this module will exports that can be used by other modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, " exports = [];");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, " // List of dependencies that will be injected to this module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " dependencies = []; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "As you can see when we create a module we dont have any way to add routes on it. Below is an example of implementation of how to add a RouterModule for this module to add routes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, " // Define the routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, " const routes = [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, " path: \"/\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, " controller: UsersController, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, " path: \":id\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, " controller: UsersIdController, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, " ];");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, " // User `RouterModule.forRoot` to inject the routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, " imports = [RouterModule.forRoot(routes)];");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, " // Declare the controllers that will be used inside the routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, " declarations = [UsersIdController, UsersController]; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Custom module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Unlike the common mayajs module, custom modules provide other functionality aside from managing your controllers. One example of this the RouterModule that is reponsible for adding routes to your module. A key concept of a custom module is it has an invoke and forRoot function that provides additional functionalities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "// This function will run after an instance of this module is created ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](463, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "// But the providers will stay singleton on each instance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](468, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, " module: UsersModule, // Returns the current module reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, " providers: [], // List of providers that this module will use on its controllers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, " Now we know how to create a module but how we can call it on our routes. We are now introducing to loadChildren property of our route object. MayaJs will automatically resolve the module asynchronously when the path is added on the route list. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, " import maya from \"@mayajs/router\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, " import http from \"http\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "const app = maya();");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "app.add([");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, " path: \"users\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, " // We are using dynamic importing so we don't need it to manually import the module in the file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, " // MayaJs will resolve the module asynchronously");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, " loadChildren: () => import(\"./users.module\").then((m) => m.UsersModule), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, " ]); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.firstRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.secondRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thirdRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fourthRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fifthRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sixthRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seventhRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.eightRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ninthRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tenthRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.eleventhRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.twelveRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thirteenRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fourteenRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fifteenRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sixteenRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seventeenRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.eighteenRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nineteenRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.twentyRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.twentyOneRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.twentytwoRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.twentythreeRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.twentyfourRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.twentyfiveRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.twentysixRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.twentysevenRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" const route = ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GET: () => ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("callback: () => ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" const route = ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("GET: (", "{", " params ", "}", ") => ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" const route = ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("GET: (", "{", " query ", "}", ") => ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" app.use(bodyParser.urlencoded(", "{", " extended: false ", "}", "));");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("const route = ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("POST: (", "{", " body ", "}", ") => ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" router.use((context, next, error) => ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", "); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" const child = ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("const child = ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" class UsersController extends Controller ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GET() ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("POST() ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" class UsersController extends Controller ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("middleware = ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GET() ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" export class UsersServices extends Services ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("add() ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("class UsersController extends Controller ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("constructor(userServices: UsersServices) ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("addUser() ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" class UsersModule extends MayaJsModule ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" import ", "{", " UsersController, UsersIdController ", "}", " from \"./controller\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" import ", "{", " RouterModule ", "}", " from \"@mayajs/router\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" import ", "{", " UsersServices ", "}", " from \"./services\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("export class UsersModule extends MayaJsModule ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" export class UsersModule extends CustomModule ", "{", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("invoke() ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("static forRoot(options: any) ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("return ", "{", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ",");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["section[_ngcontent-%COMP%] {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.topic[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ffa9a967;\n  margin: 1.5rem 2rem;\n  padding: 1rem;\n  border-radius: 0.25rem;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #d6d6d64d;\n  margin: 1.5rem 2rem;\n  padding: 1.75rem;\n  border-radius: 0.1rem;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 600;\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.previous[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n.previous[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #eeeeee;\n  border-left: 6px solid #7f7f84;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);\n}\n\n.notice-danger[_ngcontent-%COMP%] {\n  border-color: #d73814;\n}\n\n.notice-danger[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d73814;\n}\n\n.list[_ngcontent-%COMP%] {\n  text-indent: 3rem;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px !important;\n  max-height: 100px !important;\n}\n\n.tab[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  display: block;\n}\n\n.tab-1[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  display: block;\n}\n\n.tab-2[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  display: block;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #ff7b72;\n}\n\n.blue[_ngcontent-%COMP%] {\n  color: #1E90FF;\n}\n\n.purple[_ngcontent-%COMP%] {\n  color: #7B68EE;\n}\n\n.lightBlue[_ngcontent-%COMP%] {\n  color: #87CEFA;\n}\n\n.gray[_ngcontent-%COMP%] {\n  color: #8b949e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXIvcm91dGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVlBO0VBQ0Usc0JBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFjRTtFQUNFLCtCQUFBO0FBWEo7O0FBYUk7RUFDRSxjQUFBO0FBWE47O0FBZ0JBO0VBQ0UsY0FBQTtBQWJGOztBQWVFO0VBQ0UsK0JBQUE7QUFiSjs7QUFlSTtFQUNFLGNBQUE7QUFiTjs7QUFpQkU7RUFDRSxjQUFBO0FBZko7O0FBa0JNO0VBQ0UsY0FBQTtBQWhCUjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBR0EsNkNBQUE7QUFuQkY7O0FBc0JBO0VBQ0UscUJBQUE7QUFuQkY7O0FBcUJFO0VBQ0UsY0FBQTtBQW5CSjs7QUF1QkE7RUFDRSxpQkFBQTtBQXBCRjs7QUF3QkU7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0FBckJKOztBQXlCQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBdEJGOztBQXdCQTtFQUNFLGNBQUE7QUFyQkY7O0FBdUJBO0VBQ0UsY0FBQTtBQXBCRjs7QUFzQkE7RUFDRSxjQUFBO0FBbkJGOztBQXFCQTtFQUNFLGNBQUE7QUFsQkY7O0FBb0JBO0VBQ0UsY0FBQTtBQWpCRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGVyL3JvdXRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChwcmltYXJ5OiAjZGQxZjAyLFxyXG4gIHNlY29uZGFyeTogIzAwMCxcclxuICBwYXJhZ3JhcGhzOiAjNWU1ZTVlLFxyXG4gIGxpZ2h0OiAjZWVlZWVlLFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi50b3BpYyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTlhOTY3O1xyXG4gIG1hcmdpbjogMS41cmVtIDJyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNvZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY0ZDtcclxuICBtYXJnaW46IDEuNXJlbSAycmVtO1xyXG4gIHBhZGRpbmc6IDEuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxufVxyXG5cclxuLm5leHQge1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJldmlvdXMge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogI2NjY2NjYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ub3RpY2Uge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM3ZjdmODQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDhweCAtNnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcbi5ub3RpY2UtZGFuZ2VyIHtcclxuICBib3JkZXItY29sb3I6ICNkNzM4MTQ7XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBjb2xvcjogI2Q3MzgxNDtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICB0ZXh0LWluZGVudDogM3JlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRhYiB7IFxyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4OyBcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRhYi0xIHsgXHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50YWItMiB7IFxyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5yZWQge1xyXG4gIGNvbG9yOiAjZmY3YjcyO1xyXG59XHJcbi5ibHVlIHtcclxuICBjb2xvcjogIzFFOTBGRjtcclxufVxyXG4ucHVycGxlIHtcclxuICBjb2xvcjogIzdCNjhFRTtcclxufVxyXG4ubGlnaHRCbHVlIHtcclxuICBjb2xvcjogIzg3Q0VGQTtcclxufVxyXG4uZ3JheSB7XHJcbiAgY29sb3I6ICM4Yjk0OWU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-router',
                templateUrl: './router.component.html',
                styleUrls: ['./router.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/routes/routes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/routes/routes.component.ts ***!
  \*******************************************************/
/*! exports provided: RoutesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesComponent", function() { return RoutesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = ["controller"];
const _c1 = ["modelMongo"];
const _c2 = ["modelSql"];
const _c3 = ["services"];
class RoutesComponent {
    constructor() {
        this.controllerId = "https://gist.github.com/Mackignacio/4d4efa1579130a8409879cb1ddac07f0.js";
        this.modelMongoId = "https://gist.github.com/Mackignacio/2587f6b71372e2f60e447c9924706add.js";
        this.modelSqlId = "https://gist.github.com/Mackignacio/065efa2426d875f2d6d0bf623bc5344e.js";
        this.serviceslId = "https://gist.github.com/Mackignacio/a30c285fae14a50cdb5986b515a9a55e.js";
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const codes = [
            { iframe: this.controllerFrame, id: this.controllerId },
            { iframe: this.mongoFrame, id: this.modelMongoId },
            { iframe: this.sqlFrame, id: this.modelSqlId },
            { iframe: this.servicesFrame, id: this.serviceslId },
        ];
        codes.forEach(code => this.createCode(code));
    }
    createCode(code) {
        code.iframe.nativeElement.id = "gist-" + code.id;
        const doc = code.iframe.nativeElement.contentDocument || code.iframe.nativeElement.contentElement.contentWindow;
        const content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <script type="text/javascript" src="${code.id}"></script>
        </body>
      </html>
    `;
        doc.open();
        doc.write(content);
        doc.close();
    }
}
RoutesComponent.ɵfac = function RoutesComponent_Factory(t) { return new (t || RoutesComponent)(); };
RoutesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoutesComponent, selectors: [["app-routes"]], viewQuery: function RoutesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.controllerFrame = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mongoFrame = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sqlFrame = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.servicesFrame = _t.first);
    } }, decls: 113, vars: 0, consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "components", 1, "mb-3"], [1, "notice", "notice-danger"], ["id", "controllers", 1, "mb-3"], [1, "content"], [1, "content", "code"], ["type", "text/javascript", "width", "95%", "frameborder", "0", 2, "height", "300px", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["controller", ""], ["id", "models", 1, "mb-3"], ["type", "text/javascript", "width", "95%", "frameborder", "0", 2, "height", "240px", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["modelMongo", ""], ["type", "text/javascript", "width", "95%", "frameborder", "0", 2, "height", "220px", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["modelSql", ""], ["id", "services", 1, "mb-3"], ["type", "text/javascript", "width", "95%", "frameborder", "0", 2, "height", "200px", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["services", ""], ["id", "routes", 1, "mb-3"], [1, "row", "justify-content-between", "pr-2", "mb-5"], [1, "col-md-2", "text-left", "previous"], [1, "m-0"], [1, "text-left"], ["routerLink", "/get-started/why-mayajs"], [1, "col-md-2", "text-right", "next"], [1, "text-right"], ["routerLink", "/get-started/methods"]], template: function RoutesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " are the building blocks for creating a MayaJS application. Each component plays a vital part for your application to run smoothly. Our framework uses dependency injection to provide classes in a component where it needed. You can compose these components to create more robust and complex routes without sacrificing maintainability of your codes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Controllers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " A controller acts a route that has its own sub-routes which handles all the incoming request from the client. You can define a sub-routes using method decorators that describe what kind of request it will accepts. You can also add middlewares and validations inside of these method decorators. See method section for more information on how to implement middlewares and validation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "To generate a controller you can run this command on your terminal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "maya generate controllers \"controller-path\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Short hand command.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "maya g c \"controller-path\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "This command will create a controller file based on the controller-path provided.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Below shows a codeblock generated inside the controller file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "iframe", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Models");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " This will define the model that a controller can use to communicate to a database. This model is also mapped the data/fields to be save or modified to a database. Our framework support both MongoDB and Sql database. See database section for more informations on how to implement these databases. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "To generate a model you can run this command on your terminal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "maya generate model \"model-path\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Short hand command.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "maya g m \"model-path\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "This command will create a model file based on the model-path provided.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Below shows a codeblock generated inside the model file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Model for MongoDB Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "iframe", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Model for Sql Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "iframe", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Services can make your code shareable accross your application. A service can be injected inside of a controller or another service inside a class constructor. You can seperate your business logic inside your routes using a service and share it across different services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "To generate a service you can run this command on your terminal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "maya generate services \"service-path\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Short hand command.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "maya g s \"service-path\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "This command will create a service file based on the service-path provided.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Below shows a codeblock generated inside the service file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "iframe", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Adding and creating controllers, models and services separately can be tiring task if you do it repeatedly. We created this command to help users generate these 3 files and put them on one folder. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "To generate a route you can run this command on your terminal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "maya generate route \"route-name\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Short hand command.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "maya g r \"route-name\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " This will creates a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ". This will also create a folder from the given route-name and put all the created files inside. Each created files will have the same naming convention based on the route-name. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "< PREVIOUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Why Mayajs?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "NEXT >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["section[_ngcontent-%COMP%] {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.topic[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ffa9a967;\n  margin: 1.5rem 2rem;\n  padding: 1rem;\n  border-radius: 0.25rem;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #d6d6d64d;\n  margin: 1.5rem 2rem;\n  padding: 1.75rem;\n  border-radius: 0.1rem;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 600;\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.previous[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n.previous[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #eeeeee;\n  border-left: 6px solid #7f7f84;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);\n}\n\n.notice-danger[_ngcontent-%COMP%] {\n  border-color: #d73814;\n}\n\n.notice-danger[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d73814;\n}\n\n.list[_ngcontent-%COMP%] {\n  text-indent: 3rem;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px !important;\n  max-height: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvcm91dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVlBO0VBQ0Usc0JBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFjRTtFQUNFLCtCQUFBO0FBWEo7O0FBYUk7RUFDRSxjQUFBO0FBWE47O0FBZ0JBO0VBQ0UsY0FBQTtBQWJGOztBQWVFO0VBQ0UsK0JBQUE7QUFiSjs7QUFlSTtFQUNFLGNBQUE7QUFiTjs7QUFpQkU7RUFDRSxjQUFBO0FBZko7O0FBa0JNO0VBQ0UsY0FBQTtBQWhCUjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBR0EsNkNBQUE7QUFuQkY7O0FBc0JBO0VBQ0UscUJBQUE7QUFuQkY7O0FBcUJFO0VBQ0UsY0FBQTtBQW5CSjs7QUF1QkE7RUFDRSxpQkFBQTtBQXBCRjs7QUF3QkU7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0FBckJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvcm91dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKHByaW1hcnk6ICNkZDFmMDIsXHJcbiAgc2Vjb25kYXJ5OiAjMDAwLFxyXG4gIHBhcmFncmFwaHM6ICM1ZTVlNWUsXHJcbiAgbGlnaHQ6ICNlZWVlZWUsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcclxufVxyXG5cclxuLnRvcGljIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOWE5Njc7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjRkO1xyXG4gIG1hcmdpbjogMS41cmVtIDJyZW07XHJcbiAgcGFkZGluZzogMS43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xyXG59XHJcblxyXG4ubmV4dCB7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcmV2aW91cyB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5vdGljZSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzdmN2Y4NDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICBib3gtc2hhZG93OiAwIDVweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG5cclxuLm5vdGljZS1kYW5nZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2Q3MzgxNDtcclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGNvbG9yOiAjZDczODE0O1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIHRleHQtaW5kZW50OiAzcmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-routes",
                templateUrl: "./routes.component.html",
                styleUrls: ["./routes.component.scss"],
            }]
    }], function () { return []; }, { controllerFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["controller"]
        }], mongoFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["modelMongo"]
        }], sqlFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["modelSql"]
        }], servicesFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["services"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SidenavComponent {
    constructor() { }
    ngOnInit() { }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 2, vars: 0, template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sidenav works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-sidenav",
                templateUrl: "./sidenav.component.html",
                styleUrls: ["./sidenav.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/validation/validation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/validation/validation.component.ts ***!
  \***************************************************************/
/*! exports provided: ValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return ValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ValidationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ValidationComponent.ɵfac = function ValidationComponent_Factory(t) { return new (t || ValidationComponent)(); };
ValidationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidationComponent, selectors: [["app-validation"]], decls: 284, vars: 76, consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "validation", 1, "mb-3"], [1, "mb-3"], [1, "content"], [1, "content", "code"], [1, "tab"]], template: function ValidationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This is a function used for validating fields for BODY and PARAMS of a request. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check(\"age\") // Name of the fields to be checked. `defaults` to check the `body` of the request.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ".isNumber() // Checks if the field is a number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ".minLength(5) // Checks if the field has a minimum length of 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ".maxLength(10) // Checks if the field has a maximum length of 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ".notEmpty() // Checks if the field is not empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".required(), // Checks if the field is present or not undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "isNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "This is a validation function that is used along with Check. This function checks if the field is a number and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Check(\"age\").isNumber(),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "isBoolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "This is a validation function that is used along with Check. This function checks if the field is a boolean and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Check(\"islogin\").isBoolean(),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "isString");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "This is a validation function that is used along with Check. This function checks if the field is a string and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Check(\"password\").isString(),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "isAddress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "This is a validation function that is used along with Check. This function checks if the field is a valid address and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Check(\"address\").address(),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "isRegExp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "This is a validation function that is used along with Check. This function accepts a RegExp and checks if the field will match the regex. If the test fails it will send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Check(\"password\").isRegExp(/^[A-Za-z0-9.,\\s]*$/),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "minLength");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "This is a validation function that is used along with Check. This function accepts an argument which is a number and checks if the field length is greater than or equal to the parameter. If the field length is not greater than or equal to the parameter it will send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Check(\"password\").minLength(5),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "maxLength");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "This is a validation function that is used along with Check. This function accepts an argument which is a number and checks if the field length is less than or equal to the parameter. If the field length is not less than or equal to the parameter it will send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Check(\"password\").minLength(10),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "isDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "This is a validation function that is used along with Check. This function checks if the field is a valid date and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Check(\"date\").isDate(),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "isEmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "This is a validation function that is used along with Check. This function checks if the field is a valid email and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Check(\"email\").isEmail(),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "isPassword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "This is a validation function that is used along with Check. This function checks if the field is a valid password and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Check(\"password\").isPassword(),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "notEmpty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "This is a validation function that is used along with Check. This function checks if the field is not empty and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Check(\"password\").notEmpty(),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "This is a validation function that is used along with Check. This function checks if the field is not undefined and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Check(\"user\").required(),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "isArray");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "This is a validation function that is used along with Check. This function checks if the field is an array and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Check(\"user\").isArray(),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "includes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "This is a validation function that is used along with Check. This function accepts an array of values and checks if the field or fields items values is included on the array and send a validation error response if its not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("import ", "{", " Check ", "}", " from \"@mayajs/common\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @Post(", "{", " path: \"/\", middlewares: [ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Check(\"user\").includes<", "string", ">([\"cats\", \"dogs\"]),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("] ", "}", ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" function()", "{}", "");
    } }, styles: ["section[_ngcontent-%COMP%] {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.topic[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ffa9a967;\n  margin: 1.5rem 2rem;\n  padding: 1rem;\n  border-radius: 0.25rem;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #d6d6d64d;\n  margin: 1.5rem 2rem;\n  padding: 1.75rem;\n  border-radius: 0.1rem;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 600;\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.previous[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n.previous[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #eeeeee;\n  border-left: 6px solid #7f7f84;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);\n}\n\n.notice-danger[_ngcontent-%COMP%] {\n  border-color: #d73814;\n}\n\n.notice-danger[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d73814;\n}\n\n.list[_ngcontent-%COMP%] {\n  text-indent: 3rem;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px !important;\n  max-height: 100px !important;\n}\n\n.tab[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  display: block;\n}\n\n.tab-1[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  display: block;\n}\n\n.tab-2[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92YWxpZGF0aW9uL3ZhbGlkYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxzQkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7QUFURjs7QUFZQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQWNFO0VBQ0UsK0JBQUE7QUFYSjs7QUFhSTtFQUNFLGNBQUE7QUFYTjs7QUFnQkE7RUFDRSxjQUFBO0FBYkY7O0FBZUU7RUFDRSwrQkFBQTtBQWJKOztBQWVJO0VBQ0UsY0FBQTtBQWJOOztBQWlCRTtFQUNFLGNBQUE7QUFmSjs7QUFrQk07RUFDRSxjQUFBO0FBaEJSOztBQXNCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFHQSw2Q0FBQTtBQW5CRjs7QUFzQkE7RUFDRSxxQkFBQTtBQW5CRjs7QUFxQkU7RUFDRSxjQUFBO0FBbkJKOztBQXVCQTtFQUNFLGlCQUFBO0FBcEJGOztBQXdCRTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUFyQko7O0FBeUJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBdEJGOztBQXlCQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUF0QkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChwcmltYXJ5OiAjZGQxZjAyLFxyXG4gIHNlY29uZGFyeTogIzAwMCxcclxuICBwYXJhZ3JhcGhzOiAjNWU1ZTVlLFxyXG4gIGxpZ2h0OiAjZWVlZWVlLFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi50b3BpYyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTlhOTY3O1xyXG4gIG1hcmdpbjogMS41cmVtIDJyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNvZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY0ZDtcclxuICBtYXJnaW46IDEuNXJlbSAycmVtO1xyXG4gIHBhZGRpbmc6IDEuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxufVxyXG5cclxuLm5leHQge1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJldmlvdXMge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogI2NjY2NjYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ub3RpY2Uge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM3ZjdmODQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDhweCAtNnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcbi5ub3RpY2UtZGFuZ2VyIHtcclxuICBib3JkZXItY29sb3I6ICNkNzM4MTQ7XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBjb2xvcjogI2Q3MzgxNDtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICB0ZXh0LWluZGVudDogM3JlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRhYiB7IFxyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4OyBcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRhYi0xIHsgXHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50YWItMiB7IFxyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validation',
                templateUrl: './validation.component.html',
                styleUrls: ['./validation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/vision/vision.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/vision/vision.component.ts ***!
  \*******************************************************/
/*! exports provided: VisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionComponent", function() { return VisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VisionComponent {
    constructor() {
        this.svg = "../../../../assets/svg/vision.svg";
    }
    ngOnInit() { }
}
VisionComponent.ɵfac = function VisionComponent_Factory(t) { return new (t || VisionComponent)(); };
VisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisionComponent, selectors: [["app-vision"]], decls: 8, vars: 1, consts: [[1, "content"], [1, "card"], [1, "statement"], [1, "vision-title"], [1, "vision-text"], ["alt", "vision", 1, "vision-svg", 3, "src"]], template: function VisionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " We begin with determination to understand your brand and the intricate details of each unique project. We are trying to make MayaJS as simple as possible for every type developer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.svg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".content[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  height: 90%;\n  width: 100%;\n  background-color: #e4e4e4;\n  justify-content: start;\n  align-self: center;\n  border-radius: 5px;\n  border: 1px solid #e4e4e4;\n  box-shadow: 15px 15px 40px -15px #b3b1b3;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .vision-svg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 60%;\n  justify-self: center;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%]   .vision-title[_ngcontent-%COMP%] {\n  justify-self: center;\n  font-size: 4rem;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%]   .vision-text[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aXNpb24vdmlzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFHQSx3Q0FBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBQ047QUFFSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQUFOO0FBRU07RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUdNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXNpb24vdmlzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNXB4IDE1cHggNDBweCAtMTVweCByZ2JhKDE3OSwgMTc3LCAxNzksIDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxNXB4IDE1cHggNDBweCAtMTVweCByZ2JhKDE3OSwgMTc3LCAxNzksIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMTVweCAxNXB4IDQwcHggLTE1cHggcmdiYSgxNzksIDE3NywgMTc5LCAxKTtcclxuXHJcbiAgICAudmlzaW9uLXN2ZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXRlbWVudCB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xyXG5cclxuICAgICAgLnZpc2lvbi10aXRsZSB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmlzaW9uLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-vision",
                templateUrl: "./vision.component.html",
                styleUrls: ["./vision.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/why-mayajs/why-mayajs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/why-mayajs/why-mayajs.component.ts ***!
  \***************************************************************/
/*! exports provided: WhyMayajsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyMayajsComponent", function() { return WhyMayajsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function WhyMayajsComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const easy_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](easy_r4);
} }
function WhyMayajsComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const simple_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](simple_r5);
} }
function WhyMayajsComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ts_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ts_r6);
} }
function WhyMayajsComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", company_r9.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", company_r9.alt);
} }
function WhyMayajsComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WhyMayajsComponent_div_43_div_1_Template, 2, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r7);
} }
class WhyMayajsComponent {
    constructor() {
        this.easyList = [
            "Beginner-friendly and accessible for any skill level.",
            "Assists in making complex routes through built-in CLI.",
        ];
        this.simpleList = [
            "Gives declarative ways of defining routes.",
            "Simplifies adding route files through our CLI.",
            "Enables sharing business logic using services.",
            "Creates routes using method declaration.",
            "Near-independent from typescript declarations unlike most frameworks.",
        ];
        this.tsList = [
            "Declarations for defining methods, controllers and services.",
            "Dependency injection and meta-programming.",
            "Safer codes for development and production.",
            "Uses latest and upcoming javascript features.",
            "Type checking while coding not on runtime.",
            "Less runtime errors.",
        ];
        this.companyList = [
            { alt: "Racket Studios", src: "http://racketstudios.com/wp-content/uploads/2018/07/Racket_Studios_logo.png" },
            { alt: "Summit Trampoline", src: "http://summittrampolinepark.com/wp-content/uploads/2016/08/Summit-logo-1.png" },
            { alt: "Cranium POS", src: "https://craniumpos.com/wp-content/uploads/2020/03/Asset-1.png" },
            { alt: "Shaktiman", src: "http://shaktimancomretro.com/assets/img/shaktiman.png" },
            { alt: "DitoSoft", src: "https://cdn.ditosoft.com/assets/logo/banner-black.png" },
            {
                alt: "Techcellar",
                src: "https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.0-9/17498974_1581711865176433_5362628510647016160_n.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_ohc=fcmanWJz7kEAX-ngwzU&_nc_ht=scontent.fmnl4-5.fna&oh=b2ff15f1d31627aa1e159a8d836b7b1c&oe=5F6B37B8",
            },
            { alt: "PromdiFarm", src: "http://cdn.ditosoft.com/promdifarm/logo-hori-01.svg" },
            {
                alt: "Telos Health Solution",
                src: "https://www.teloshealthsolutions.com/wp-content/uploads/2019/08/title_telos.png",
            },
        ];
    }
    ngOnInit() { }
    getCompanyList(rows = 4) {
        let count = 0;
        let current = 0;
        return this.companyList.reduce((acc, company) => {
            if (count >= rows) {
                acc.push([]);
                count = 0;
                current++;
            }
            acc[current].push(company);
            count++;
            return acc;
        }, [[]]);
    }
}
WhyMayajsComponent.ɵfac = function WhyMayajsComponent_Factory(t) { return new (t || WhyMayajsComponent)(); };
WhyMayajsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhyMayajsComponent, selectors: [["app-why-mayajs"]], decls: 65, vars: 4, consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "easy", 1, "mb-3"], [1, "notice", "notice-danger"], [1, "content"], [1, "list"], [4, "ngFor", "ngForOf"], ["id", "simplicity", 1, "mb-3"], ["id", "typescript", 1, "mb-3"], ["id", "inbetween", 1, "mb-3"], ["id", "users", 1, "mb-3"], ["class", "card-deck m-3 h-200", 4, "ngFor", "ngForOf"], [1, "card-deck", "m-3", 2, "max-width", "fit-content"], [1, "card", "p-3"], ["src", "http://cdn.ditosoft.com/assets/svelte-ph-banner.png", "alt", "Svelte Society PH", 1, "img-responsive"], [1, "row", "justify-content-between", "pr-2", "mb-5"], [1, "col-md-2", "text-left", "previous"], [1, "m-0"], [1, "text-left"], ["routerLink", "/get-started/introduction"], [1, "col-md-2", "text-right", "next"], [1, "text-right"], ["routerLink", "/get-started/components"], [1, "card-deck", "m-3", "h-200"], ["class", "card p-3 h-200", 4, "ngFor", "ngForOf"], [1, "card", "p-3", "h-200"], [1, "img-responsive", 3, "src", "alt"]], template: function WhyMayajsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Why MayaJS?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MayaJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " makes it easy to build complex RESTful api, maintainable routing, easy API versioning, shareable services, and reusable logic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Easy to use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "We developed this framework with adaptability as the priority.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WhyMayajsComponent_li_14_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Simple yet Powerful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " When building production quality RESTful applications, managing your routes becomes the priority. We as developers want to simplify our workflow. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "What does Mayajs do that makes this simple development possible:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WhyMayajsComponent_li_23_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Mayajs is built with Typescript. With its vast support from the community, we believe that Typescript will be the best language for us moving into the future. Typescript's type checking feature also increases development efficiency. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "What are the benefits with using Typescript for MayaJS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, WhyMayajsComponent_li_32_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "In Between");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " As seen here, Mayajs is the combination of both Express and Nestjs. Like Express we utilize middlewares, which means all middlewares created using express can be used inside Mayajs. For Nestjs we also utilize declarations, dependency injections, and reflections. With this you can have the benefits of both frameworks in one package. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Who uses MayaJS?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Companies that uses our framework.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, WhyMayajsComponent_div_43_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Organizations that uses our framework.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "< PREVIOUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "NEXT >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.easyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.simpleList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getCompanyList());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["section[_ngcontent-%COMP%] {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.topic[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ffa9a967;\n  margin: 1.5rem 2rem;\n  padding: 1rem;\n  border-radius: 0.25rem;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #d6d6d64d;\n  margin: 1.5rem 2rem;\n  padding: 1.75rem;\n  border-radius: 0.1rem;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 600;\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.previous[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n.previous[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #eeeeee;\n  border-left: 6px solid #7f7f84;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);\n}\n\n.notice-danger[_ngcontent-%COMP%] {\n  border-color: #d73814;\n}\n\n.notice-danger[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d73814;\n}\n\n.list[_ngcontent-%COMP%] {\n  text-indent: 3rem;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px !important;\n  max-height: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aHktbWF5YWpzL3doeS1tYXlhanMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxzQkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7QUFURjs7QUFZQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQWNFO0VBQ0UsK0JBQUE7QUFYSjs7QUFhSTtFQUNFLGNBQUE7QUFYTjs7QUFnQkE7RUFDRSxjQUFBO0FBYkY7O0FBZUU7RUFDRSwrQkFBQTtBQWJKOztBQWVJO0VBQ0UsY0FBQTtBQWJOOztBQWlCRTtFQUNFLGNBQUE7QUFmSjs7QUFrQk07RUFDRSxjQUFBO0FBaEJSOztBQXNCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFHQSw2Q0FBQTtBQW5CRjs7QUFzQkE7RUFDRSxxQkFBQTtBQW5CRjs7QUFxQkU7RUFDRSxjQUFBO0FBbkJKOztBQXVCQTtFQUNFLGlCQUFBO0FBcEJGOztBQXdCRTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUFyQkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3doeS1tYXlhanMvd2h5LW1heWFqcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChwcmltYXJ5OiAjZGQxZjAyLFxyXG4gIHNlY29uZGFyeTogIzAwMCxcclxuICBwYXJhZ3JhcGhzOiAjNWU1ZTVlLFxyXG4gIGxpZ2h0OiAjZWVlZWVlLFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi50b3BpYyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTlhOTY3O1xyXG4gIG1hcmdpbjogMS41cmVtIDJyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNvZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY0ZDtcclxuICBtYXJnaW46IDEuNXJlbSAycmVtO1xyXG4gIHBhZGRpbmc6IDEuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxufVxyXG5cclxuLm5leHQge1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJldmlvdXMge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogI2NjY2NjYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ub3RpY2Uge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM3ZjdmODQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDhweCAtNnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcbi5ub3RpY2UtZGFuZ2VyIHtcclxuICBib3JkZXItY29sb3I6ICNkNzM4MTQ7XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBjb2xvcjogI2Q3MzgxNDtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICB0ZXh0LWluZGVudDogM3JlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhyMayajsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-why-mayajs",
                templateUrl: "./why-mayajs.component.html",
                styleUrls: ["./why-mayajs.component.scss"],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\@MAYAJS\@REPOS\mayajs.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map