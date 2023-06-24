import {NgModule} from "@angular/core";
import {SpeciesComponent} from "./species.component";
import {CommonModule, NgForOf} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    SpeciesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SpeciesComponent
  ]
})
export class SpeciesModule {}
