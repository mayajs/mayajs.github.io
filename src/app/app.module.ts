import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

// COMPONENTS
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HomeComponent } from "./components/home/home.component";
import { IntroductionComponent } from "./components/introduction/introduction.component";
import { MissionComponent } from "./components/mission/mission.component";
import { VisionComponent } from "./components/vision/vision.component";
import { GettingStartedComponent } from "./components/getting-started/getting-started.component";
import { RoutesComponent } from "./components/routes/routes.component";
import { GistComponent } from "./components/gist/gist.component";
import { WhyMayajsComponent } from "./components/why-mayajs/why-mayajs.component";
import { MethodsComponent } from './components/methods/methods.component';
import { DatabasesComponent } from './components/databases/databases.component';
import { ValidationComponent } from './components/validation/validation.component';
import { RouterComponent } from './components/router/router.component';
import { MiddlewareComponent } from './components/middleware/middleware.component';
import { HighlightJsModule } from 'ngx-highlight-js';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    IntroductionComponent,
    MissionComponent,
    VisionComponent,
    GettingStartedComponent,
    RoutesComponent,
    GistComponent,
    WhyMayajsComponent,
    MethodsComponent,
    DatabasesComponent,
    ValidationComponent,
    RouterComponent,
    MiddlewareComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HighlightJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
