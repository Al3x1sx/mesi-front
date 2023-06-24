import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  templateUrl: './region.component.html',
  selector: 'app-region',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {

  region: string = '';

  constructor(private router: Router) {
    this.region = this.router.url.slice(8, this.router.url.length);
  }



}
