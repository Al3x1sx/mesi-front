import { NgModule } from '@angular/core';
import {NavbarComponent} from "./navbar.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../../app/app-routing.module";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule {}
