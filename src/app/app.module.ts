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
import { BasicConceptsComponent } from './components/contents/sidenav/fundementals/maya-concept/basic-concepts/basic-concepts.component';
import { MayaConceptSectionComponent } from './components/section/sidenav/fundementals/maya-concept/maya-concept-section/maya-concept-section.component';
import { ModulesSectionComponent } from './components/section/sidenav/fundementals/maya-concept/modules-section/modules-section.component';
import { ModulesContentComponent } from './components/contents/sidenav/fundementals/maya-concept/modules-content/modules-content.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    FeaturesComponent,
    BasicConceptsComponent,
    MayaConceptSectionComponent,
    ModulesSectionComponent,
    ModulesContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
