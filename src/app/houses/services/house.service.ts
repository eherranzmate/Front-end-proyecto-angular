import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }

  getHouses() {
    return this.http.get('https://back-end-proyecto-angular.vercel.app/api/houses');
  }
}
