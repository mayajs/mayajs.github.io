import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";

// COMPONENTS
import { HomeComponent } from "./components/home/home.component";
import { GettingStartedComponent } from "./components/getting-started/getting-started.component";
import { IntroductionComponent } from "./components/introduction/introduction.component";
import { RoutesComponent } from "./components/routes/routes.component";
import { WhyMayajsComponent } from "./components/why-mayajs/why-mayajs.component";
import { MethodsComponent } from "./components/methods/methods.component";
import { DatabasesComponent } from "./components/databases/databases.component";
import { ValidationComponent } from "./components/validation/validation.component";
import { RouterComponent } from "./components/router/router.component";
import { MiddlewareComponent } from "./components/middleware/middleware.component";

const routes: Routes = [
  {
    path: "get-started",
    component: GettingStartedComponent,
    children: [
      { path: "introduction", component: IntroductionComponent },
      { path: "why-mayajs", component: WhyMayajsComponent },
      { path: "components", component: RoutesComponent },
      { path: "methods", component: MethodsComponent },
      { path: "databases", component: DatabasesComponent },
      { path: "validation", component: ValidationComponent },
      { path: "routing", component: RouterComponent },
      { path: "middlewares", component: MiddlewareComponent },
      { path: "", redirectTo: "introduction", pathMatch: "full" },
      { path: "**", redirectTo: "introduction", pathMatch: "full" },
    ],
  },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

const router: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  scrollOffset: [0, 10],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
