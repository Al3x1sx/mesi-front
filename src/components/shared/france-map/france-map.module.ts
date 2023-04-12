import {NgModule} from "@angular/core";
import {FranceMapComponent} from "./france-map.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../../app/app-routing.module";

@NgModule({
  declarations: [
    FranceMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    FranceMapComponent
  ],
  providers: [
    FranceMapComponent
  ]
})
export class FranceMapModule{}
