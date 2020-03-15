import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { GoalsComponent } from "./components/contents/goals/goals.component";
import { FeaturesComponent } from "./components/contents/features/features.component";

// COMPONENTS
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SectionComponent } from "./components/section/section.component";
import { HomeComponent } from "./components/home/home.component";
import { IntroductionComponent } from './components/sidenav/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    FeaturesComponent,
    BasicConceptsComponent,
    MayaConceptSectionComponent,
    ModulesSectionComponent,
    ModulesContentComponent,
    FeaturesComponent,
    IntroductionComponent,

  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
