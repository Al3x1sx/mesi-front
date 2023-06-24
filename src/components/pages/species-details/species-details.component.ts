import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.scss']
})
export class SpeciesDetailsComponent {

  specieId: string = '';

  constructor(private router: Router) {
    this.specieId = this.router.url.slice(9, this.router.url.length);
    console.debug(this.specieId);
  }
}
