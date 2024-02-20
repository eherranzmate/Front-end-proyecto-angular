import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopProduct } from '../../shop/shop-product.enviroment';

@Injectable({
  providedIn: 'root'
})
export class AdminActionsService {

constructor(private http: HttpClient) { }

createProduct(product: any){
  return this.http.post('https://back-end-proyecto-angular.vercel.app/api/products/post', product)
}
getProducts(){
  return this.http.get<ShopProduct[]>('https://back-end-proyecto-angular.vercel.app/api/products');
}

deleteProduct(id: any){
  return this.http.delete(`https://back-end-proyecto-angular.vercel.app/api/products/delete/${id}`)
}

getProductById(id: string){
  return this.http.get(`https://back-end-proyecto-angular.vercel.app/api/products/${id}`)
}

editProduct(id: string, productToEdit: FormData){
  return this.http.patch<ShopProduct>(`https://back-end-proyecto-angular.vercel.app/api/products/edit/${id}`, productToEdit)
}
}
