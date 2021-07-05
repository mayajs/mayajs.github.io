(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/home/home.component */
      "./src/app/components/home/home.component.ts");
      /* harmony import */


      var _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/getting-started/getting-started.component */
      "./src/app/components/getting-started/getting-started.component.ts");
      /* harmony import */


      var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/introduction/introduction.component */
      "./src/app/components/introduction/introduction.component.ts");
      /* harmony import */


      var _components_routes_routes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/routes/routes.component */
      "./src/app/components/routes/routes.component.ts");
      /* harmony import */


      var _components_why_mayajs_why_mayajs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/why-mayajs/why-mayajs.component */
      "./src/app/components/why-mayajs/why-mayajs.component.ts"); // COMPONENTS


      var routes = [{
        path: "get-started",
        component: _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedComponent"],
        children: [{
          path: "introduction",
          component: _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_4__["IntroductionComponent"]
        }, {
          path: "why-mayajs",
          component: _components_why_mayajs_why_mayajs_component__WEBPACK_IMPORTED_MODULE_6__["WhyMayajsComponent"]
        }, {
          path: "components",
          component: _components_routes_routes_component__WEBPACK_IMPORTED_MODULE_5__["RoutesComponent"]
        }, {
          path: "",
          redirectTo: "introduction",
          pathMatch: "full"
        }, {
          path: "**",
          redirectTo: "introduction",
          pathMatch: "full"
        }]
      }, {
        path: "",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
      }];
      var router = {
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
        scrollOffset: [0, 10]
      };

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, router)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, router)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'mayajs';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/sidenav/sidenav.component */
      "./src/app/components/sidenav/sidenav.component.ts");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/home/home.component */
      "./src/app/components/home/home.component.ts");
      /* harmony import */


      var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/introduction/introduction.component */
      "./src/app/components/introduction/introduction.component.ts");
      /* harmony import */


      var _components_mission_mission_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/mission/mission.component */
      "./src/app/components/mission/mission.component.ts");
      /* harmony import */


      var _components_vision_vision_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/vision/vision.component */
      "./src/app/components/vision/vision.component.ts");
      /* harmony import */


      var _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/getting-started/getting-started.component */
      "./src/app/components/getting-started/getting-started.component.ts");
      /* harmony import */


      var _components_routes_routes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/routes/routes.component */
      "./src/app/components/routes/routes.component.ts");
      /* harmony import */


      var _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/gist/gist.component */
      "./src/app/components/gist/gist.component.ts");
      /* harmony import */


      var _components_why_mayajs_why_mayajs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/why-mayajs/why-mayajs.component */
      "./src/app/components/why-mayajs/why-mayajs.component.ts"); // COMPONENTS


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"], _components_mission_mission_component__WEBPACK_IMPORTED_MODULE_7__["MissionComponent"], _components_vision_vision_component__WEBPACK_IMPORTED_MODULE_8__["VisionComponent"], _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedComponent"], _components_routes_routes_component__WEBPACK_IMPORTED_MODULE_10__["RoutesComponent"], _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_11__["GistComponent"], _components_why_mayajs_why_mayajs_component__WEBPACK_IMPORTED_MODULE_12__["WhyMayajsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"], _components_mission_mission_component__WEBPACK_IMPORTED_MODULE_7__["MissionComponent"], _components_vision_vision_component__WEBPACK_IMPORTED_MODULE_8__["VisionComponent"], _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedComponent"], _components_routes_routes_component__WEBPACK_IMPORTED_MODULE_10__["RoutesComponent"], _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_11__["GistComponent"], _components_why_mayajs_why_mayajs_component__WEBPACK_IMPORTED_MODULE_12__["WhyMayajsComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/getting-started/getting-started.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/getting-started/getting-started.component.ts ***!
      \*************************************************************************/

    /*! exports provided: GettingStartedComponent */

    /***/
    function srcAppComponentsGettingStartedGettingStartedComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function () {
        return GettingStartedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function GettingStartedComponent_li_7_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GettingStartedComponent_li_7_ul_4_li_1_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var sub_r4 = ctx.$implicit;

            var navItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.gotoFragment(navItem_r1.url, sub_r4.url);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sub_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r4.title);
        }
      }

      function GettingStartedComponent_li_7_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GettingStartedComponent_li_7_ul_4_li_1_Template, 4, 1, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var navItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", navItem_r1.sub);
        }
      }

      function GettingStartedComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GettingStartedComponent_li_7_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var navItem_r1 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.gotoPage(navItem_r1.url);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GettingStartedComponent_li_7_ul_4_Template, 2, 1, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var navItem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", navItem_r1.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", navItem_r1.sub);
        }
      }

      var GettingStartedComponent = /*#__PURE__*/function () {
        function GettingStartedComponent(router) {
          _classCallCheck(this, GettingStartedComponent);

          this.router = router;
          this.navItems = [{
            title: "Introduction",
            url: "introduction",
            sub: [{
              title: "Getting Started",
              url: "getting-started"
            }, {
              title: "Overview",
              url: "overview"
            }, {
              title: "Installation",
              url: "installation"
            }, {
              title: "Imports",
              url: "imports"
            }, {
              title: "Development",
              url: "development"
            }]
          }, {
            title: "Why Mayajs?",
            url: "why-mayajs",
            sub: [{
              title: "Easy to use",
              url: "easy"
            }, {
              title: "Simple",
              url: "simplicity"
            }, {
              title: "Typescript",
              url: "typescript"
            }, {
              title: "In between",
              url: "inbetween"
            }, {
              title: "Who uses MayaJS?",
              url: "users"
            }]
          }, {
            title: "Components",
            url: "components",
            sub: [{
              title: "Controllers",
              url: "controllers"
            }, {
              title: "Models",
              url: "models"
            }, {
              title: "Service",
              url: "services"
            }, {
              title: "Routes",
              url: "routes"
            }]
          }, {
            title: "Methods",
            url: "methods",
            sub: [{
              title: "GET",
              url: "get"
            }, {
              title: "POST",
              url: "post"
            }, {
              title: "PUT",
              url: "put"
            }, {
              title: "PATCH",
              url: "patch"
            }, {
              title: "DELETE",
              url: "delte"
            }]
          }, {
            title: "Databases",
            url: "databases",
            sub: [{
              title: "Mongodb",
              url: "mongo"
            }, {
              title: "SQL",
              url: "sql"
            }, {
              title: "Postgres",
              url: "postgres"
            }]
          }, {
            title: "Routing",
            url: "routing"
          }, {
            title: "Middlewares",
            url: "middlewares"
          }, {
            title: "Validation",
            url: "validation"
          }, {
            itle: "FAQs",
            url: "faqs"
          }];
        }

        _createClass(GettingStartedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "gotoFragment",
          value: function gotoFragment(value, fragment) {
            this.router.navigate(["/get-started/".concat(value)], {
              fragment: fragment
            });
          }
        }, {
          key: "gotoPage",
          value: function gotoPage(value) {
            this.router.navigate(["/get-started/".concat(value)]);
          }
        }]);

        return GettingStartedComponent;
      }();

      GettingStartedComponent.ɵfac = function GettingStartedComponent_Factory(t) {
        return new (t || GettingStartedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      GettingStartedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GettingStartedComponent,
        selectors: [["app-getting-started"]],
        decls: 10,
        vars: 1,
        consts: [[1, "page"], [1, "sidenav"], [1, "text-center"], ["href", "", 1, "text-center", "mayajs"], [1, "nav", "flex-column"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "main"], [1, "nav-item"], [1, "nav-link", "main-menu"], [3, "click"], ["class", "sub-link", 4, "ngIf"], [1, "sub-link"], [4, "ngFor", "ngForOf"], [1, "nav-link", "sub-menu"]],
        template: function GettingStartedComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 250px 6fr;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #eeeeee;\n  cursor: pointer;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #eeeeee;\n}\n\n.sidenav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  background-color: #ffc1c1;\n  width: 0.3em;\n}\n\n.sidenav[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(129, 129, 129, 0.3);\n}\n\n.sidenav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 50px;\n  border-radius: 10px;\n  background-color: #ff7b7b;\n  outline: 1px solid slategrey;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #fff;\n  overflow-x: hidden;\n  padding-top: 3rem;\n  border-right: 0.5px solid #dddddd;\n  position: sticky;\n  top: 0;\n}\n\n.sidenav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-indent: -25px;\n  font-weight: 300;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.sidenav[_ngcontent-%COMP%]   a.main-menu[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 600;\n}\n\n.sidenav[_ngcontent-%COMP%]   a.main-menu[_ngcontent-%COMP%]:hover {\n  text-decoration-line: underline;\n}\n\n.sub-link[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding-left: 1rem;\n}\n\n.sub-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-indent: -5px;\n}\n\n.sub-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #5e5e5e;\n}\n\n.sub-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.sub-menu[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.sub-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.sub-menu[_ngcontent-%COMP%]:hover {\n  border-radius: 5px;\n  color: #dd1f02;\n  font-weight: 600;\n  background-color: #ffc1c159;\n  text-decoration-line: underline;\n}\n\n.sub-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  text-indent: 10px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 0px 1rem;\n  text-align: left;\n}\n\n.mayajs[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #dd1f02;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBMkJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUF4QkY7O0FBMEJFO0VBQ0UsY0FBQTtBQXhCSjs7QUE0QkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usa0RBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQXpCRjs7QUE2QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLE1BQUE7QUExQkY7O0FBNEJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQTFCSjs7QUE2QkU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBM0JKOztBQTZCSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQTNCTjs7QUE2Qk07RUFDRSwrQkFBQTtBQTNCUjs7QUFpQ0E7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQTlCRjs7QUFnQ0U7RUFDRSxpQkFBQTtBQTlCSjs7QUFnQ0k7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUE5Qk47O0FBZ0NNO0VBQ0UsZ0JBQUE7QUE5QlI7O0FBZ0NRO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FBOUJWOztBQW1DSTtFQUNFLGlCQUFBO0FBakNOOztBQXNDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBbkNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCA2ZnI7XHJcbn1cclxuXHJcbiRjb2xvcnM6IChwcmltYXJ5OiAjZGQxZjAyLFxyXG4gIHNlY29uZGFyeTogIzAwMCxcclxuICBwYXJhZ3JhcGhzOiAjNWU1ZTVlLFxyXG4gIGxpZ2h0OiAjZWVlZWVlLFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxufVxyXG5cclxuJHRhYmxldDogODQwcHg7XHJcbiRkZXNrdG9wOiAxMjgwcHg7XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0fSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IGNvbG9yKGxpZ2h0KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IGNvbG9yKGxpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzFjMTtcclxuICB3aWR0aDogLjNlbTtcclxufVxyXG5cclxuLnNpZGVuYXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMTI5LCAxMjksIDEyOSwgMC4zKTtcclxufVxyXG5cclxuLnNpZGVuYXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YjdiO1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbn1cclxuXHJcbi8vIFNpZGUgTmF2aWdhdGlvbiBhbmQgTWFpblxyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG5cclxuICBoMyB7XHJcbiAgICB0ZXh0LWluZGVudDogLTI1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAmLm1haW4tbWVudSB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcihzZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN1Yi1saW5rIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuXHJcbiAgbGkge1xyXG4gICAgdGV4dC1pbmRlbnQ6IC01cHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6IGNvbG9yKHBhcmFncmFwaHMpO1xyXG5cclxuICAgICAgJi5zdWItbWVudSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzFjMTU5O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhOmJlZm9yZSB7XHJcbiAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIHBhZGRpbmc6IDBweCAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5tYXlhanMge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GettingStartedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-getting-started",
            templateUrl: "./getting-started.component.html",
            styleUrls: ["./getting-started.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/gist/gist.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/gist/gist.component.ts ***!
      \***************************************************/

    /*! exports provided: GistComponent */

    /***/
    function srcAppComponentsGistGistComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GistComponent", function () {
        return GistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var GistComponent = /*#__PURE__*/function () {
        function GistComponent() {
          _classCallCheck(this, GistComponent);
        }

        _createClass(GistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GistComponent;
      }();

      GistComponent.ɵfac = function GistComponent_Factory(t) {
        return new (t || GistComponent)();
      };

      GistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GistComponent,
        selectors: [["app-gist"]],
        decls: 2,
        vars: 0,
        template: function GistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gist works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2lzdC9naXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gist',
            templateUrl: './gist.component.html',
            styleUrls: ['./gist.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/home.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 18,
        vars: 0,
        consts: [[1, "homepage"], [1, "container"], [1, "home-top"], ["src", "assets/svg/Group 195.svg", "alt", "Maya Logo", 1, "maya-logo", "mb-5"], [1, "landing-text"], [1, "text-primary"], [1, "subheading"], [1, "home-bottom"], ["routerLink", "/get-started"], [1, "btn", "btn-get-started"], ["href", "https://github.com/mayajs/maya"], [1, "btn", "btn-github"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".container[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n}\n\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #9C1804;\n  color: #fff;\n  padding: 1rem 1rem;\n  width: 90%;\n  font-weight: 100;\n}\n\n.bg-copyboard[_ngcontent-%COMP%] {\n  background-color: #e7e7e7;\n  padding: 1.5rem 1rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 90%;\n  color: #5e5e5e;\n}\n\na[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-decoration: none;\n  color: #fff;\n  font-weight: 100;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #9C1804;\n}\n\n.homepage[_ngcontent-%COMP%] {\n  text-align: center;\n  background: url(\"/assets/svg/bg2.svg\") no-repeat;\n  background-size: cover;\n  max-width: 100%;\n  height: 100%;\n}\n\n@media (min-width: 1280px) {\n  .homepage[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n    padding-bottom: 4rem;\n  }\n}\n\n.maya-logo[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  width: 80%;\n}\n\n@media (min-width: 1280px) {\n  .maya-logo[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    width: 80%;\n  }\n}\n\n.landing-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n@media (min-width: 1280px) {\n  .landing-text[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n    padding: 0.3rem 1rem;\n  }\n}\n\n.subheading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n@media (min-width: 1280px) {\n  .subheading[_ngcontent-%COMP%] {\n    padding-left: 3rem;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid;\n  background: black;\n  color: white;\n  text-align: center;\n  font-size: 1rem;\n  border-radius: 30px;\n  cursor: pointer;\n  margin-bottom: 2%;\n  width: 80%;\n}\n\n@media (min-width: 1280px) {\n  button[_ngcontent-%COMP%] {\n    width: 15%;\n    margin-top: 0.3rem;\n    margin-right: 1rem;\n  }\n}\n\n.btn-get-started[_ngcontent-%COMP%] {\n  background: #9C1804;\n  padding: 1.3em;\n  color: #eeeeee;\n  font-weight: bold;\n}\n\n.btn-get-started[_ngcontent-%COMP%]:hover {\n  background: #eeeeee;\n  color: #9C1804;\n}\n\n.btn-github[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 1.3em;\n  color: #000;\n  border: 1px solid;\n  font-weight: bold;\n}\n\n.btn-github[_ngcontent-%COMP%]:hover {\n  background: #000;\n  color: #eeeeee;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 33%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  overflow-x: hidden;\n  padding-top: 5rem;\n  padding-left: 2rem;\n  border-right: 0.5px solid #000;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-bottom: 3rem;\n  text-decoration: none;\n  font-size: 25px;\n  color: #5e5e5e;\n  display: block;\n  text-align: left;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #9C1804;\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-left: 33rem;\n  padding: 0px 1rem;\n  text-align: left;\n}\n\n.upper-intro[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.welcome-maya[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n}\n\n.text-welcome[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 3rem;\n}\n\n.import[_ngcontent-%COMP%] {\n  width: 94%;\n}\n\n.sections[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQTJCQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBeEJGOztBQTRCQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBekJGOztBQTRCQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQXpCRjs7QUE0QkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBekJGOztBQTRCQTtFQUNFLGNBQUE7QUF6QkY7O0FBNEJBO0VBTUUsa0JBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUE5QkY7O0FBckJFO0VBeUNGO0lBRUksaUJBQUE7SUFDQSxvQkFBQTtFQWxCRjtBQUNGOztBQTJCQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQXhCRjs7QUFoQ0U7RUFzREY7SUFLSSxnQkFBQTtJQUNBLFVBQUE7RUF2QkY7QUFDRjs7QUEwQkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF2QkY7O0FBNUNFO0VBZ0VGO0lBTUksaUJBQUE7SUFDQSxvQkFBQTtFQXRCRjtBQUNGOztBQTBCQTtFQUNFLGVBQUE7QUF2QkY7O0FBdERFO0VBNEVGO0lBSUksa0JBQUE7RUF0QkY7QUFDRjs7QUF5QkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQXRCRjs7QUF2RUU7RUFvRkY7SUFZSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQXJCRjtBQUNGOztBQXdCQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXJCRjs7QUF1QkU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFyQko7O0FBeUJBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0QkY7O0FBd0JFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBdEJKOztBQTRCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBekJGOztBQTRCQTtFQUNFLGNBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBekJGOztBQThCQTtFQUNFLGFBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxVQUFBO0FBM0JGOztBQThCQTtFQUNFLGdCQUFBO0FBM0JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAuOXJlbSAxcmVtO1xyXG59XHJcblxyXG4kY29sb3JzOiAocHJpbWFyeTogIzlDMTgwNCxcclxuICBzZWNvbmRhcnk6ICMwMDAsXHJcbiAgcGFyYWdyYXBoczogIzVlNWU1ZSxcclxuICBsaWdodDogI2VlZWVlZSxcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSlcclxufVxyXG5cclxuJHRhYmxldDogODQwcHg7XHJcbiRkZXNrdG9wOiAxMjgwcHg7XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEobWluLXdpZHRoOiAjeyR0YWJsZXR9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICBAbWVkaWEobWluLXdpZHRoOiAjeyRkZXNrdG9wfSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuXHJcbn1cclxuXHJcbi5iZy1jb3B5Ym9hcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XHJcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBjb2xvcjogY29sb3IocGFyYWdyYXBocyk7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxufVxyXG5cclxuLmhvbWVwYWdlIHtcclxuICBAaW5jbHVkZSBkZXNrdG9wIHtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbiAgfVxyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmcvYmcyLnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWF5YS1sb2dvIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIHdpZHRoOiA4MCU7XHJcblxyXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubGFuZGluZy10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zdWJoZWFkaW5nIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB3aWR0aDogODAlO1xyXG5cclxuICBAaW5jbHVkZSBkZXNrdG9wIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAuM3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tZ2V0LXN0YXJ0ZWQge1xyXG4gIGJhY2tncm91bmQ6IGNvbG9yKHByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDEuM2VtO1xyXG4gIGNvbG9yOiBjb2xvcihsaWdodCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogY29sb3IobGlnaHQpO1xyXG4gICAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1naXRodWIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDEuM2VtO1xyXG4gIGNvbG9yOiBjb2xvcihzZWNvbmRhcnkpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGNvbG9yKHNlY29uZGFyeSk7XHJcbiAgICBjb2xvcjogY29sb3IobGlnaHQpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU2lkZSBOYXZpZ2F0aW9uIGFuZCBNYWluXHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIGJvcmRlci1yaWdodDogLjVweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiBjb2xvcihwYXJhZ3JhcGhzKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBtYXJnaW4tbGVmdDogMzNyZW07XHJcbiAgcGFkZGluZzogMHB4IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLy9JbnRyb2R1Y3Rpb25cclxuXHJcbi51cHBlci1pbnRybyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLndlbGNvbWUtbWF5YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udGV4dC13ZWxjb21lIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG4uaW1wb3J0IHtcclxuICB3aWR0aDogOTQlO1xyXG59XHJcblxyXG4uc2VjdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-home",
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/introduction/introduction.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/introduction/introduction.component.ts ***!
      \*******************************************************************/

    /*! exports provided: IntroductionComponent */

    /***/
    function srcAppComponentsIntroductionIntroductionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function () {
        return IntroductionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function IntroductionComponent_li_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var package_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", package_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r1.description);
        }
      }

      var IntroductionComponent = /*#__PURE__*/function () {
        function IntroductionComponent() {
          _classCallCheck(this, IntroductionComponent);

          this["import"] = "import { MayaJS } from \"@mayajs/core\";";
          this.packages = [{
            name: "@mayajs/core",
            url: "https://www.npmjs.com/package/@mayajs/core",
            description: "Core library"
          }, {
            name: "@mayajs/common",
            url: "https://www.npmjs.com/package/@mayajs/common",
            description: "Common modules"
          }, {
            name: "@mayajs/router",
            url: "https://www.npmjs.com/package/@mayajs/router",
            description: "Routing library"
          }, {
            name: "@mayajs/cli",
            url: "https://www.npmjs.com/package/@mayajs/cli",
            description: "Project scaffolding"
          }, {
            name: "@mayajs/mongo",
            url: "https://www.npmjs.com/package/@mayajs/mongo",
            description: "MongoDB Plugin"
          }, {
            name: "@mayajs/sql",
            url: "https://www.npmjs.com/package/@mayajs/sql",
            description: "SQL Plugin"
          }];
        }

        _createClass(IntroductionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IntroductionComponent;
      }();

      IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) {
        return new (t || IntroductionComponent)();
      };

      IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IntroductionComponent,
        selectors: [["app-introduction"]],
        decls: 81,
        vars: 2,
        consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "getting-started", 1, "mb-3"], [1, "notice", "notice-danger"], ["href", "https://nodejs.org/en/", 1, "link"], ["href", "https://www.typescriptlang.org/", 1, "link"], ["href", "https://angular.io/", 1, "link"], ["id", "overview", 1, "mb-3"], [1, "content"], ["href", "", 1, "link"], [4, "ngFor", "ngForOf"], ["id", "installation", 1, "mb-3"], [1, "content", "code"], ["id", "imports", 1, "mb-3"], ["id", "development", 1, "mb-3"], [1, "row", "justify-content-end", "pr-2", "mb-5"], [1, "col-md-2", "text-right"], [1, "m-0"], [1, "text-right"], ["routerLink", "/get-started/why-mayajs", 1, "next"], [1, "link", 3, "href"]],
        template: function IntroductionComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.packages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx["import"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["section[_ngcontent-%COMP%] {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.topic[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #eeeeee;\n  border-left: 6px solid #7f7f84;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);\n}\n\n.notice-danger[_ngcontent-%COMP%] {\n  border-color: #d73814;\n}\n\n.notice-danger[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d73814;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #d6d6d64d;\n  margin: 1.5rem 2rem;\n  padding: 1.75rem;\n  border-radius: 0.1rem;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 600;\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n\n.next[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVlBO0VBQ0Usc0JBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBR0EsNkNBQUE7QUFURjs7QUFZQTtFQUNFLHFCQUFBO0FBVEY7O0FBV0U7RUFDRSxjQUFBO0FBVEo7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBVkY7O0FBYUE7RUFDRSwrQkFBQTtFQUNBLGNBQUE7QUFWRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChwcmltYXJ5OiAjZGQxZjAyLFxyXG4gIHNlY29uZGFyeTogIzAwMCxcclxuICBwYXJhZ3JhcGhzOiAjNWU1ZTVlLFxyXG4gIGxpZ2h0OiAjZWVlZWVlLFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi50b3BpYyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLm5vdGljZSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzdmN2Y4NDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICBib3gtc2hhZG93OiAwIDVweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG5cclxuLm5vdGljZS1kYW5nZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2Q3MzgxNDtcclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGNvbG9yOiAjZDczODE0O1xyXG4gIH1cclxufVxyXG5cclxuLmNvZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY0ZDtcclxuICBtYXJnaW46IDEuNXJlbSAycmVtO1xyXG4gIHBhZGRpbmc6IDEuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxufVxyXG5cclxuLm5leHQge1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-introduction",
            templateUrl: "./introduction.component.html",
            styleUrls: ["./introduction.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/mission/mission.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/mission/mission.component.ts ***!
      \*********************************************************/

    /*! exports provided: MissionComponent */

    /***/
    function srcAppComponentsMissionMissionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MissionComponent", function () {
        return MissionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MissionComponent = /*#__PURE__*/function () {
        function MissionComponent() {
          _classCallCheck(this, MissionComponent);

          this.svg = "../../../../assets/svg/mission.svg";
        }

        _createClass(MissionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MissionComponent;
      }();

      MissionComponent.ɵfac = function MissionComponent_Factory(t) {
        return new (t || MissionComponent)();
      };

      MissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MissionComponent,
        selectors: [["app-mission"]],
        decls: 8,
        vars: 1,
        consts: [[1, "content"], [1, "card"], ["alt", "mission", "width", "223", 1, "mission-svg", 3, "src"], [1, "statement"], [1, "mission-title"], [1, "mission-text"]],
        template: function MissionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mission");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA0\xA0\xA0\xA0We begin with determination to understand your brand and the intricate details of each unique project. We are trying to make MayaJS as simple as possible for every type developer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.svg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  height: 90%;\n  width: 100%;\n  background-color: #e4e4e4;\n  justify-content: end;\n  align-self: center;\n  border-radius: 5px;\n  border: 1px solid #e4e4e4;\n  box-shadow: -14px 15px 40px -15px #b3b1b3;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .mission-svg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 60%;\n  justify-self: center;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%]   .mission-title[_ngcontent-%COMP%] {\n  justify-self: center;\n  font-size: 4rem;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%]   .mission-text[_ngcontent-%COMP%] {\n  justify-items: end;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9taXNzaW9uL21pc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUdBLHlDQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFDTjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBQU47QUFFTTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUFSO0FBR007RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21pc3Npb24vbWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xNHB4IDE1cHggNDBweCAtMTVweCByZ2JhKDE3OSwgMTc3LCAxNzksIDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAtMTRweCAxNXB4IDQwcHggLTE1cHggcmdiYSgxNzksIDE3NywgMTc5LCAxKTtcclxuICAgIGJveC1zaGFkb3c6IC0xNHB4IDE1cHggNDBweCAtMTVweCByZ2JhKDE3OSwgMTc3LCAxNzksIDEpO1xyXG5cclxuICAgIC5taXNzaW9uLXN2ZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXRlbWVudCB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xyXG5cclxuICAgICAgLm1pc3Npb24tdGl0bGUge1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1pc3Npb24tdGV4dCB7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogZW5kO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MissionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-mission",
            templateUrl: "./mission.component.html",
            styleUrls: ["./mission.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/routes/routes.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/routes/routes.component.ts ***!
      \*******************************************************/

    /*! exports provided: RoutesComponent */

    /***/
    function srcAppComponentsRoutesRoutesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutesComponent", function () {
        return RoutesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = ["controller"];
      var _c1 = ["modelMongo"];
      var _c2 = ["modelSql"];
      var _c3 = ["services"];

      var RoutesComponent = /*#__PURE__*/function () {
        function RoutesComponent() {
          _classCallCheck(this, RoutesComponent);

          this.controllerId = "https://gist.github.com/Mackignacio/4d4efa1579130a8409879cb1ddac07f0.js";
          this.modelMongoId = "https://gist.github.com/Mackignacio/2587f6b71372e2f60e447c9924706add.js";
          this.modelSqlId = "https://gist.github.com/Mackignacio/065efa2426d875f2d6d0bf623bc5344e.js";
          this.serviceslId = "https://gist.github.com/Mackignacio/a30c285fae14a50cdb5986b515a9a55e.js";
        }

        _createClass(RoutesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            var codes = [{
              iframe: this.controllerFrame,
              id: this.controllerId
            }, {
              iframe: this.mongoFrame,
              id: this.modelMongoId
            }, {
              iframe: this.sqlFrame,
              id: this.modelSqlId
            }, {
              iframe: this.servicesFrame,
              id: this.serviceslId
            }];
            codes.forEach(function (code) {
              return _this.createCode(code);
            });
          }
        }, {
          key: "createCode",
          value: function createCode(code) {
            code.iframe.nativeElement.id = "gist-" + code.id;
            var doc = code.iframe.nativeElement.contentDocument || code.iframe.nativeElement.contentElement.contentWindow;
            var content = "\n        <html>\n        <head>\n          <base target=\"_parent\">\n        </head>\n        <script type=\"text/javascript\" src=\"".concat(code.id, "\"></script>\n        </body>\n      </html>\n    ");
            doc.open();
            doc.write(content);
            doc.close();
          }
        }]);

        return RoutesComponent;
      }();

      RoutesComponent.ɵfac = function RoutesComponent_Factory(t) {
        return new (t || RoutesComponent)();
      };

      RoutesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RoutesComponent,
        selectors: [["app-routes"]],
        viewQuery: function RoutesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.controllerFrame = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mongoFrame = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sqlFrame = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.servicesFrame = _t.first);
          }
        },
        decls: 111,
        vars: 0,
        consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "components", 1, "mb-3"], [1, "notice", "notice-danger"], ["id", "controllers", 1, "mb-3"], [1, "content"], [1, "content", "code"], ["type", "text/javascript", "width", "95%", "frameborder", "0", 2, "height", "300px", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["controller", ""], ["id", "models", 1, "mb-3"], ["type", "text/javascript", "width", "95%", "frameborder", "0", 2, "height", "240px", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["modelMongo", ""], ["type", "text/javascript", "width", "95%", "frameborder", "0", 2, "height", "220px", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["modelSql", ""], ["id", "services", 1, "mb-3"], ["type", "text/javascript", "width", "95%", "frameborder", "0", 2, "height", "200px", "margin-left", "auto", "margin-right", "auto", "display", "block"], ["services", ""], ["id", "routes", 1, "mb-3"], [1, "row", "justify-content-between", "pr-2", "mb-5"], [1, "col-md-2", "text-left", "previous"], [1, "m-0"], [1, "text-left"], ["routerLink", "/get-started/why-mayajs"], [1, "col-md-2", "text-right", "next"], [1, "text-right"], ["routerLink", "/get-started/methods"]],
        template: function RoutesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Components");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Components are the building blocks for creating a MayaJS application. Each component plays a vital part for your application to run smoothly. Our framework uses dependency injection to provide classes in a component where it needed. You can compose these components to create more robust and complex routes without sacrificing maintainability of your codes. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Controllers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A controller acts a route that has its own sub-routes which handles all the incoming request from the client. You can define a sub-routes using method decorators that describe what kind of request it will accepts. You can also add middlewares and validations inside of these method decorators. See method section for more information on how to implement middlewares and validation. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "To generate a controller you can run this command on your terminal.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "maya generate controllers \"controller-path\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Short hand command.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "maya g c \"controller-path\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "This command will create a controller file based on the controller-path provided.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Below shows a codeblock generated inside the controller file.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "iframe", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Models");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " This will define the model that a controller can use to communicate to a database. This model is also mapped the data/fields to be save or modified to a database. Our framework support both MongoDB and Sql database. See database section for more informations on how to implement these databases. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "To generate a model you can run this command on your terminal.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "maya generate model \"model-path\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Short hand command.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "maya g m \"model-path\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "This command will create a model file based on the model-path provided.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Below shows a codeblock generated inside the model file.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Model for MongoDB Databases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "iframe", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Model for Sql Databases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "iframe", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Services can make your code shareable accross your application. A service can be injected inside of a controller or another service inside a class constructor. You can seperate your business logic inside your routes using a service and share it across different services. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "To generate a service you can run this command on your terminal.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "maya generate services \"service-path\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Short hand command.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "maya g s \"service-path\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "This command will create a service file based on the service-path provided.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Below shows a codeblock generated inside the service file.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "iframe", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Routes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Adding and creating controllers, models and services separately can be tiring task if you do it repeatedly. We created this command to help users generate these 3 files and put them on one folder. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "To generate a route you can run this command on your terminal.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "maya generate route \"route-name\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Short hand command.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "maya g r \"route-name\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " This will creates a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "controller");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "model");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, ". This will also create a folder from the given route-name and put all the created files inside. Each created files will have the same naming convention based on the route-name. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "< PREVIOUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Why Mayajs?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "NEXT >");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Methods");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["section[_ngcontent-%COMP%] {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.topic[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ffa9a967;\n  margin: 1.5rem 2rem;\n  padding: 1rem;\n  border-radius: 0.25rem;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #d6d6d64d;\n  margin: 1.5rem 2rem;\n  padding: 1.75rem;\n  border-radius: 0.1rem;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 600;\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.previous[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n.previous[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #eeeeee;\n  border-left: 6px solid #7f7f84;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);\n}\n\n.notice-danger[_ngcontent-%COMP%] {\n  border-color: #d73814;\n}\n\n.notice-danger[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d73814;\n}\n\n.list[_ngcontent-%COMP%] {\n  text-indent: 3rem;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px !important;\n  max-height: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvcm91dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVlBO0VBQ0Usc0JBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFjRTtFQUNFLCtCQUFBO0FBWEo7O0FBYUk7RUFDRSxjQUFBO0FBWE47O0FBZ0JBO0VBQ0UsY0FBQTtBQWJGOztBQWVFO0VBQ0UsK0JBQUE7QUFiSjs7QUFlSTtFQUNFLGNBQUE7QUFiTjs7QUFpQkU7RUFDRSxjQUFBO0FBZko7O0FBa0JNO0VBQ0UsY0FBQTtBQWhCUjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBR0EsNkNBQUE7QUFuQkY7O0FBc0JBO0VBQ0UscUJBQUE7QUFuQkY7O0FBcUJFO0VBQ0UsY0FBQTtBQW5CSjs7QUF1QkE7RUFDRSxpQkFBQTtBQXBCRjs7QUF3QkU7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0FBckJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXMvcm91dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKHByaW1hcnk6ICNkZDFmMDIsXHJcbiAgc2Vjb25kYXJ5OiAjMDAwLFxyXG4gIHBhcmFncmFwaHM6ICM1ZTVlNWUsXHJcbiAgbGlnaHQ6ICNlZWVlZWUsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcclxufVxyXG5cclxuLnRvcGljIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOWE5Njc7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjRkO1xyXG4gIG1hcmdpbjogMS41cmVtIDJyZW07XHJcbiAgcGFkZGluZzogMS43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xyXG59XHJcblxyXG4ubmV4dCB7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcmV2aW91cyB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5vdGljZSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzdmN2Y4NDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICBib3gtc2hhZG93OiAwIDVweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG5cclxuLm5vdGljZS1kYW5nZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2Q3MzgxNDtcclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGNvbG9yOiAjZDczODE0O1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIHRleHQtaW5kZW50OiAzcmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-routes",
            templateUrl: "./routes.component.html",
            styleUrls: ["./routes.component.scss"]
          }]
        }], function () {
          return [];
        }, {
          controllerFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["controller"]
          }],
          mongoFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["modelMongo"]
          }],
          sqlFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["modelSql"]
          }],
          servicesFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["services"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/sidenav/sidenav.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/sidenav/sidenav.component.ts ***!
      \*********************************************************/

    /*! exports provided: SidenavComponent */

    /***/
    function srcAppComponentsSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
        return SidenavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SidenavComponent = /*#__PURE__*/function () {
        function SidenavComponent() {
          _classCallCheck(this, SidenavComponent);
        }

        _createClass(SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidenavComponent;
      }();

      SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
        return new (t || SidenavComponent)();
      };

      SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidenavComponent,
        selectors: [["app-sidenav"]],
        decls: 2,
        vars: 0,
        template: function SidenavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sidenav works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-sidenav",
            templateUrl: "./sidenav.component.html",
            styleUrls: ["./sidenav.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/vision/vision.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/vision/vision.component.ts ***!
      \*******************************************************/

    /*! exports provided: VisionComponent */

    /***/
    function srcAppComponentsVisionVisionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisionComponent", function () {
        return VisionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VisionComponent = /*#__PURE__*/function () {
        function VisionComponent() {
          _classCallCheck(this, VisionComponent);

          this.svg = "../../../../assets/svg/vision.svg";
        }

        _createClass(VisionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VisionComponent;
      }();

      VisionComponent.ɵfac = function VisionComponent_Factory(t) {
        return new (t || VisionComponent)();
      };

      VisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VisionComponent,
        selectors: [["app-vision"]],
        decls: 8,
        vars: 1,
        consts: [[1, "content"], [1, "card"], [1, "statement"], [1, "vision-title"], [1, "vision-text"], ["alt", "vision", 1, "vision-svg", 3, "src"]],
        template: function VisionComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.svg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  height: 90%;\n  width: 100%;\n  background-color: #e4e4e4;\n  justify-content: start;\n  align-self: center;\n  border-radius: 5px;\n  border: 1px solid #e4e4e4;\n  box-shadow: 15px 15px 40px -15px #b3b1b3;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .vision-svg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 60%;\n  justify-self: center;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%]   .vision-title[_ngcontent-%COMP%] {\n  justify-self: center;\n  font-size: 4rem;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%]   .vision-text[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aXNpb24vdmlzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFHQSx3Q0FBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBQ047QUFFSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQUFOO0FBRU07RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUdNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXNpb24vdmlzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNXB4IDE1cHggNDBweCAtMTVweCByZ2JhKDE3OSwgMTc3LCAxNzksIDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxNXB4IDE1cHggNDBweCAtMTVweCByZ2JhKDE3OSwgMTc3LCAxNzksIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMTVweCAxNXB4IDQwcHggLTE1cHggcmdiYSgxNzksIDE3NywgMTc5LCAxKTtcclxuXHJcbiAgICAudmlzaW9uLXN2ZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXRlbWVudCB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xyXG5cclxuICAgICAgLnZpc2lvbi10aXRsZSB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmlzaW9uLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-vision",
            templateUrl: "./vision.component.html",
            styleUrls: ["./vision.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/why-mayajs/why-mayajs.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/why-mayajs/why-mayajs.component.ts ***!
      \***************************************************************/

    /*! exports provided: WhyMayajsComponent */

    /***/
    function srcAppComponentsWhyMayajsWhyMayajsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhyMayajsComponent", function () {
        return WhyMayajsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function WhyMayajsComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var easy_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](easy_r4);
        }
      }

      function WhyMayajsComponent_li_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var simple_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](simple_r5);
        }
      }

      function WhyMayajsComponent_li_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ts_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ts_r6);
        }
      }

      function WhyMayajsComponent_div_43_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var company_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", company_r9.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", company_r9.alt);
        }
      }

      function WhyMayajsComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WhyMayajsComponent_div_43_div_1_Template, 2, 2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r7);
        }
      }

      var WhyMayajsComponent = /*#__PURE__*/function () {
        function WhyMayajsComponent() {
          _classCallCheck(this, WhyMayajsComponent);

          this.easyList = ["Beginner-friendly and accessible for any skill level.", "Assists in making complex routes through built-in CLI."];
          this.simpleList = ["Gives declarative ways of defining routes.", "Simplifies adding route files through our CLI.", "Enables sharing business logic using services.", "Creates routes using method declaration.", "Near-independent from typescript declarations unlike most frameworks."];
          this.tsList = ["Declarations for defining methods, controllers and services.", "Dependency injection and meta-programming.", "Safer codes for development and production.", "Uses latest and upcoming javascript features.", "Type checking while coding not on runtime.", "Less runtime errors."];
          this.companyList = [{
            alt: "Racket Studios",
            src: "http://racketstudios.com/wp-content/uploads/2018/07/Racket_Studios_logo.png"
          }, {
            alt: "Summit Trampoline",
            src: "http://summittrampolinepark.com/wp-content/uploads/2016/08/Summit-logo-1.png"
          }, {
            alt: "Cranium POS",
            src: "https://craniumpos.com/wp-content/uploads/2020/03/Asset-1.png"
          }, {
            alt: "Shaktiman",
            src: "http://shaktimancomretro.com/assets/img/shaktiman.png"
          }, {
            alt: "DitoSoft",
            src: "https://cdn.ditosoft.com/assets/logo/banner-black.png"
          }, {
            alt: "Techcellar",
            src: "https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.0-9/17498974_1581711865176433_5362628510647016160_n.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_ohc=fcmanWJz7kEAX-ngwzU&_nc_ht=scontent.fmnl4-5.fna&oh=b2ff15f1d31627aa1e159a8d836b7b1c&oe=5F6B37B8"
          }, {
            alt: "PromdiFarm",
            src: "http://cdn.ditosoft.com/promdifarm/logo-hori-01.svg"
          }, {
            alt: "Telos Health Solution",
            src: "https://www.teloshealthsolutions.com/wp-content/uploads/2019/08/title_telos.png"
          }];
        }

        _createClass(WhyMayajsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getCompanyList",
          value: function getCompanyList() {
            var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
            var count = 0;
            var current = 0;
            return this.companyList.reduce(function (acc, company) {
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
        }]);

        return WhyMayajsComponent;
      }();

      WhyMayajsComponent.ɵfac = function WhyMayajsComponent_Factory(t) {
        return new (t || WhyMayajsComponent)();
      };

      WhyMayajsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WhyMayajsComponent,
        selectors: [["app-why-mayajs"]],
        decls: 65,
        vars: 4,
        consts: [[1, "introduction", "mt-5"], [1, "topic"], ["id", "easy", 1, "mb-3"], [1, "notice", "notice-danger"], [1, "content"], [1, "list"], [4, "ngFor", "ngForOf"], ["id", "simplicity", 1, "mb-3"], ["id", "typescript", 1, "mb-3"], ["id", "inbetween", 1, "mb-3"], ["id", "users", 1, "mb-3"], ["class", "card-deck m-3 h-200", 4, "ngFor", "ngForOf"], [1, "card-deck", "m-3", 2, "max-width", "fit-content"], [1, "card", "p-3"], ["src", "http://cdn.ditosoft.com/assets/svelte-ph-banner.png", "alt", "Svelte Society PH", 1, "img-responsive"], [1, "row", "justify-content-between", "pr-2", "mb-5"], [1, "col-md-2", "text-left", "previous"], [1, "m-0"], [1, "text-left"], ["routerLink", "/get-started/introduction"], [1, "col-md-2", "text-right", "next"], [1, "text-right"], ["routerLink", "/get-started/components"], [1, "card-deck", "m-3", "h-200"], ["class", "card p-3 h-200", 4, "ngFor", "ngForOf"], [1, "card", "p-3", "h-200"], [1, "img-responsive", 3, "src", "alt"]],
        template: function WhyMayajsComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.easyList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.simpleList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tsList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getCompanyList());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["section[_ngcontent-%COMP%] {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.topic[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ffa9a967;\n  margin: 1.5rem 2rem;\n  padding: 1rem;\n  border-radius: 0.25rem;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #d6d6d64d;\n  margin: 1.5rem 2rem;\n  padding: 1.75rem;\n  border-radius: 0.1rem;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 600;\n  text-decoration-line: underline;\n  color: #dd1f02;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.next[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.previous[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n\n.previous[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n\n.previous[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n.previous[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dd1f02;\n}\n\n.notice[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #eeeeee;\n  border-left: 6px solid #7f7f84;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);\n}\n\n.notice-danger[_ngcontent-%COMP%] {\n  border-color: #d73814;\n}\n\n.notice-danger[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d73814;\n}\n\n.list[_ngcontent-%COMP%] {\n  text-indent: 3rem;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px !important;\n  max-height: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aHktbWF5YWpzL3doeS1tYXlhanMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxzQkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7QUFURjs7QUFZQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQWNFO0VBQ0UsK0JBQUE7QUFYSjs7QUFhSTtFQUNFLGNBQUE7QUFYTjs7QUFnQkE7RUFDRSxjQUFBO0FBYkY7O0FBZUU7RUFDRSwrQkFBQTtBQWJKOztBQWVJO0VBQ0UsY0FBQTtBQWJOOztBQWlCRTtFQUNFLGNBQUE7QUFmSjs7QUFrQk07RUFDRSxjQUFBO0FBaEJSOztBQXNCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFHQSw2Q0FBQTtBQW5CRjs7QUFzQkE7RUFDRSxxQkFBQTtBQW5CRjs7QUFxQkU7RUFDRSxjQUFBO0FBbkJKOztBQXVCQTtFQUNFLGlCQUFBO0FBcEJGOztBQXdCRTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUFyQkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3doeS1tYXlhanMvd2h5LW1heWFqcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChwcmltYXJ5OiAjZGQxZjAyLFxyXG4gIHNlY29uZGFyeTogIzAwMCxcclxuICBwYXJhZ3JhcGhzOiAjNWU1ZTVlLFxyXG4gIGxpZ2h0OiAjZWVlZWVlLFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi50b3BpYyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTlhOTY3O1xyXG4gIG1hcmdpbjogMS41cmVtIDJyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNvZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY0ZDtcclxuICBtYXJnaW46IDEuNXJlbSAycmVtO1xyXG4gIHBhZGRpbmc6IDEuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcclxufVxyXG5cclxuLm5leHQge1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJldmlvdXMge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogI2NjY2NjYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ub3RpY2Uge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM3ZjdmODQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDhweCAtNnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcbi5ub3RpY2UtZGFuZ2VyIHtcclxuICBib3JkZXItY29sb3I6ICNkNzM4MTQ7XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBjb2xvcjogI2Q3MzgxNDtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICB0ZXh0LWluZGVudDogM3JlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhyMayajsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-why-mayajs",
            templateUrl: "./why-mayajs.component.html",
            styleUrls: ["./why-mayajs.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\@MAYAJS\@REPOS\mayajs.io\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map