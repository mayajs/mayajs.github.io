import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";

// COMPONENTS
import { HomeComponent } from "./components/home/home.component";
import { GettingStartedComponent } from "./components/getting-started/getting-started.component";
import { IntroductionComponent } from "./components/introduction/introduction.component";
import { RoutesComponent } from "./components/routes/routes.component";

const routes: Routes = [
  {
    path: "get-started",
    component: GettingStartedComponent,
    children: [
      { path: "introduction", component: IntroductionComponent },
      { path: "why", component: HomeComponent },
      { path: "route", component: RoutesComponent },
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
