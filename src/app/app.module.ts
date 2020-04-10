import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FeaturesComponent } from "./components/features/features.component";

// COMPONENTS
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { IntroductionComponent } from "./components/home/introduction/introduction.component";
import { FaqComponent } from "./components/faq/faq.component";
import { GuidesComponent } from "./components/guides/guides.component";
import { LearnMoreComponent } from "./components/learn-more/learn-more.component";
import { MissionComponent } from "./components/home/mission/mission.component";
import { VisionComponent } from "./components/home/vision/vision.component";
import { KeyFeaturesComponent } from "./components/home/key-features/key-features.component";
import { SubscribedComponent } from "./components/home/subscribed/subscribed.component";
import { DescriptionComponent } from "./components/home/description/description.component";
import { GettingStartedComponent } from "./components/learn-more/getting-started/getting-started.component";
import { RequirementsComponent } from "./components/learn-more/requirements/requirements.component";
import { InstallationComponent } from "./components/learn-more/installation/installation.component";
import { RoutesComponent } from "./components/learn-more/routes/routes.component";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NotFoundComponent,
    HomeComponent,
    FeaturesComponent,
    FeaturesComponent,
    IntroductionComponent,
    FaqComponent,
    GuidesComponent,
    LearnMoreComponent,
    MissionComponent,
    VisionComponent,
    KeyFeaturesComponent,
    SubscribedComponent,
    DescriptionComponent,
    GettingStartedComponent,
    RequirementsComponent,
    InstallationComponent,
    RoutesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
