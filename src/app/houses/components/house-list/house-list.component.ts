import { Component } from '@angular/core';
import { House } from '../../house.enviroment';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent {

  houseList: House [] = []

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houseService.getHouses().subscribe((data:any) => {
      this.houseList = data;
      console.log(this.houseList);
      
    })

  }
}
