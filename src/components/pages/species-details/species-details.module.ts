import {NgModule} from "@angular/core";
import {SpeciesDetailsComponent} from "./species-details.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    SpeciesDetailsComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    SpeciesDetailsComponent
  ]
})
export class SpeciesDetailsModule {}
