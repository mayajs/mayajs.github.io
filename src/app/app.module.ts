import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

// COMPONENTS
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HomeComponent } from "./components/home/home.component";
import { IntroductionComponent } from "./components/introduction/introduction.component";
import { MissionComponent } from "./components/home/mission/mission.component";
import { VisionComponent } from "./components/vision/vision.component";
import { KeyFeaturesComponent } from "./components/home/key-features/key-features.component";
import { SubscribedComponent } from "./components/home/subscribed/subscribed.component";
import { DescriptionComponent } from "./components/home/description/description.component";
import { GettingStartedComponent } from "./components/getting-started/getting-started.component";
import { RoutesComponent } from "./components/routes/routes.component";
import { ControllersComponent } from "./components/controllers/controllers.component";
import { ModelsComponent } from "./components/models/models.component";
import { ServicesComponent } from "./components/services/services.component";
import { GistComponent } from "./components/gist/gist.component";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    IntroductionComponent,
    MissionComponent,
    VisionComponent,
    KeyFeaturesComponent,
    SubscribedComponent,
    DescriptionComponent,
    GettingStartedComponent,
    RoutesComponent,
    ControllersComponent,
    ModelsComponent,
    ServicesComponent,
    GistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
