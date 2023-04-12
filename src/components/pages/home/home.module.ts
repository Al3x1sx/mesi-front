import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../../app/app-routing.module";
import {FranceMapModule} from "../../shared/france-map/france-map.module";
import {FranceMapComponent} from "../../shared/france-map/france-map.component";

@NgModule({
  declarations: [
    HomeComponent,
    FranceMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FranceMapModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
