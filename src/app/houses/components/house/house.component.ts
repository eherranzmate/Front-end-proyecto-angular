import { House } from './../../house.enviroment';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {

  @Input() house!: House


}
