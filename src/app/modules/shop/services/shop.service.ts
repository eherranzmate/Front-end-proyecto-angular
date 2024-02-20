import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://back-end-proyecto-angular.vercel.app/api/products')
  }
}
