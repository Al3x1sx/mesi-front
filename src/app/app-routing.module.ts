import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../components/pages/home/home.component";
import {PlanComponent} from "../components/pages/plan/plan.component";
import {PostsComponent} from "../components/pages/posts/posts.component";
import {RegionComponent} from "../components/pages/Region/region.component";
import {SpeciesComponent} from "../components/pages/species/species.component";
import {SpeciesDetailsComponent} from "../components/pages/species-details/species-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'region/:name', component: RegionComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'species/:id', component: SpeciesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
