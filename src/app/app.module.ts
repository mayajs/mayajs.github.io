import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { GoalsComponent } from "./components/contents/goals/goals.component";
import { FeaturesComponent } from "./components/features/features.component";

// COMPONENTS
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SectionComponent } from "./components/section/section.component";
import { HomeComponent } from "./components/home/home.component";
import { IntroductionComponent } from "./components/home/introduction/introduction.component";
import { SetupInstallationComponent } from "./components/section/setup-installation/setup-installation.component";
import { BasicConceptsComponent } from "./components/contents/sidenav/fundementals/maya-concept/basic-concepts/basic-concepts.component";
import { ModulesSectionComponent } from "./components/section/sidenav/fundementals/maya-concept/modules-section/modules-section.component";
import { ModulesContentComponent } from "./components/contents/sidenav/fundementals/maya-concept/modules-content/modules-content.component";
import { FaqComponent } from "./components/faq/faq.component";
import { GuidesComponent } from "./components/guides/guides.component";
import { LearnMoreComponent } from "./components/learn-more/learn-more.component";
import { MissionComponent } from "./components/home/mission/mission.component";
import { VisionComponent } from "./components/home/vision/vision.component";
import { KeyFeaturesComponent } from "./components/home/key-features/key-features.component";
import { SubscribedComponent } from "./components/home/subscribed/subscribed.component";
import { DescriptionComponent } from "./components/home/description/description.component";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NotFoundComponent,
    SectionComponent,
    HomeComponent,
    GoalsComponent,
    FeaturesComponent,
    BasicConceptsComponent,
    ModulesSectionComponent,
    ModulesContentComponent,
    FeaturesComponent,
    IntroductionComponent,
    SetupInstallationComponent,
    FaqComponent,
    GuidesComponent,
    LearnMoreComponent,
    MissionComponent,
    VisionComponent,
    KeyFeaturesComponent,
    SubscribedComponent,
    DescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
