import { CartService } from './../../services/cart.service';
import { Component, Output } from '@angular/core';
import { ShopProduct } from '../../shop-product.enviroment';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shop-product-list',
  templateUrl: './shop-product-list.component.html',
  styleUrls: ['./shop-product-list.component.css']
})
export class ShopProductListComponent {

  productList: ShopProduct [] = []
  private cart: ShopProduct[] = [];

  constructor(private shopService: ShopService, public cartService:CartService) {}

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((data:any) => {
      console.log(data);
      this.productList = data;
      console.log(this.productList); 
    })
  }

  addToCartHandler(product: ShopProduct): void {
    this.cartService.addToCart(product);
  }

  CartDown(): void {
    const currentVisibility = this.cartService.getCartVisibility();
    this.cartService.setCartVisibility(!currentVisibility);
  }

  clearProduct(product: ShopProduct): void {
    this.cartService.removeFromCart(product);
  }

  clearCart(): void {
    this.cartService.clearCart() 
    
  }

}
