import {NgModule} from "@angular/core";
import {SharedGoogleMapComponent} from "./shared-google-map.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../../app/app-routing.module";
import {GoogleMapsModule} from "@angular/google-maps";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    SharedGoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  exports: [
    SharedGoogleMapComponent
  ]
})
export class SharedGoogleMapModule{}
