import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShopProduct } from '../../shop-product.enviroment';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent {

  @Input () product! : ShopProduct
  @Output() addToCart: EventEmitter<ShopProduct> = new EventEmitter()

  enviarProducto(product: ShopProduct): void{
    this.addToCart.emit(product)
  }

}
