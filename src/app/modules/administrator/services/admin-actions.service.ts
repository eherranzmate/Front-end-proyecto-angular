import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopProduct } from '../../shop/shop-product.enviroment';

@Injectable({
  providedIn: 'root'
})
export class AdminActionsService {

constructor(private http: HttpClient) { }

createProduct(product: any){
  return this.http.post('http://localhost:8084/api/products/post', product)
}
getProducts(){
  return this.http.get<ShopProduct[]>('http://localhost:8084/api/products');
}

deleteProduct(id: any){
  return this.http.delete(`http://localhost:8084/api/products/delete/${id}`)
}

getProductById(id: string){
  return this.http.get(`http://localhost:8084/api/products/${id}`)
}

editProduct(id: string, productToEdit: FormData){
  return this.http.patch<ShopProduct>(`http://localhost:8084/api/products/edit/${id}`, productToEdit)
}
}
