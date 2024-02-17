import { Component, Input } from '@angular/core';
import { Character } from '../../character.enviroment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Input () character! : Character 

  constructor(private router: Router) {}

  navigateToDetails(id: string) {
    this.router.navigate(['/detail', id]);
  }


}
