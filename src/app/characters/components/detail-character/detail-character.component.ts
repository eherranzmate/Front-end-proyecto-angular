import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../character.enviroment';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit {
  character: Character = {
    _id: '', name: '', description: '', actor: '', picture: '',
    createdAt: '',
    updatedAt: '',
    __v: 0
  };
  id: string = "";

  constructor(private characterService: CharacterService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];

      
      this.characterService.getOne(this.id).subscribe((data: any) => {
        this.character = data;
      });
    });
  }
}

