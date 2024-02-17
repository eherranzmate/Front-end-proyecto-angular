import { Component } from '@angular/core';
import { Character } from '../../character.enviroment';
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  characterList: Character [] = []

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data:any) => {
      this.characterList = data;
      console.log(this.characterList);
    })
  }
    navigateToDetails(id: string) {
      this.router.navigate(['/detail', id]);
    } 
  
}
