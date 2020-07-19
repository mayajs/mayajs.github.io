import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// COMPONENTS
import { HomeComponent } from "./components/home/home.component";
import { LearnMoreComponent } from "./components/learn-more/learn-more.component";
import { FaqComponent } from "./components/faq/faq.component";
import { GettingStartedComponent } from "./components/learn-more/getting-started/getting-started.component";

const routes: Routes = [
  { path: "learn-more", component: LearnMoreComponent },
  { path: "faq", component: FaqComponent },
  { path: "get-started", component: GettingStartedComponent },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
