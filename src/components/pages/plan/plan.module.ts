import {NgModule} from "@angular/core";
import {PlanComponent} from "./plan.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../../app/app-routing.module";
import {FranceMapModule} from "../../shared/france-map/france-map.module";
import {FranceMapComponent} from "../../shared/france-map/france-map.component";
import {HomeComponent} from "../home/home.component";

@NgModule({
  declarations: [
    PlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FranceMapModule
  ],
  exports: [
    PlanComponent
  ]
})
export class PlanModule {

}
