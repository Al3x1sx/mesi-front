import {NgModule} from "@angular/core";
import {RegionComponent} from "./region.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    RegionComponent
  ],
  providers: [
    RouterModule
  ],
  exports: [
    RegionComponent
  ]
})
export class RegionModule {

}
