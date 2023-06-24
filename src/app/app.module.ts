import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {HttpClientModule} from "@angular/common/http";
import {FranceMapModule} from "../components/shared/france-map/france-map.module";
import {NavbarModule} from "../components/shared/navbar/navbar.module";
import {HomeComponent} from "../components/pages/home/home.component";
import {PlanModule} from "../components/pages/plan/plan.module";
import {CommonModule} from "@angular/common";
import {SpeciesModule} from "../components/pages/species/species.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    FranceMapModule,
    NavbarModule,
    PlanModule,
    SpeciesModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
