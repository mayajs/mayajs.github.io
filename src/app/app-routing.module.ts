import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";

// COMPONENTS
import { HomeComponent } from "./components/home/home.component";
import { LearnMoreComponent } from "./components/learn-more/learn-more.component";
import { FaqComponent } from "./components/faq/faq.component";
import { GettingStartedComponent } from "./components/getting-started/getting-started.component";

const routes: Routes = [
  { path: "learn-more", component: LearnMoreComponent },
  { path: "faq", component: FaqComponent },
  { path: "get-started", component: GettingStartedComponent },
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
