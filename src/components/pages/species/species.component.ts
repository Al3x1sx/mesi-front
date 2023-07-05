import {Component} from "@angular/core";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent {
species: any[] = [
  {id: 1, name: 'Tigre de Sunda'},
  {id: 1, name: 'Elephant de Sumatra'},
  {id: 1, name: 'Orang-outan de Bornéo'},
  {id: 1, name: 'Gorille des plaines orientales'},
  {id: 1, name: 'Marsoin aptère du Yangtsé'},
  {id: 1, name: 'Rinocéros de Sumatra'},
  {id: 1, name: 'Elephant de forêt africain'},
  {id: 1, name: 'Gorille du fleuve Cross'},
  {id: 1, name: 'Vaquita'},
  {id: 1, name: 'Saola'}];
}
