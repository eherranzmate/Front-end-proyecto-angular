
import { Injectable } from '@angular/core';
import { ShopProduct } from '../shop-product.enviroment';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: ShopProduct[] = [];
  private cartVisible: boolean = false
  

  getCart(): ShopProduct[] {
    return this.cart;
  }

  addToCart(product: ShopProduct): void {
    this.cart.push(product);
    this.cartVisible = true
    console.log('Producto añadido al carrito:', product);
    console.log('Contenido del carrito:', this.cart);
  }

  getCartVisibility(): boolean {
    return this.cartVisible;
  }

  setCartVisibility(visible: boolean): void {
    this.cartVisible = visible;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  clearCart(): void {
    this.cart = []; 
    this.cartVisible = false;  
  }

  
}

