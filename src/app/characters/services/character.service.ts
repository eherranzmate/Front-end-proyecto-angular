import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get('https://back-end-proyecto-angular.vercel.app/api/characters');
  }
  getOne(id: string){
    return this.http.get(`https://back-end-proyecto-angular.vercel.app/api/characters/${id}`)
  }
}
