import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get('http://localhost:8084/api/characters');
  }
  getOne(id: string){
    return this.http.get(`http://localhost:8084/api/characters/${id}`)
  }
}
