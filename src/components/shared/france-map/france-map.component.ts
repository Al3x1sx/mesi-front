import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-france-map',
  templateUrl: './france-map.component.html',
  styleUrls: ['./france-map.component.scss']
})
export class FranceMapComponent {
  @Input() page: string = '';
}
