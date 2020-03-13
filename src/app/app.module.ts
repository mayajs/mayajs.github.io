import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// MODULES
import { AppRoutingModule } from "./app-routing.module";

// COMPONENTS
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SectionComponent } from "./components/section/section.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NotFoundComponent,
    SectionComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
