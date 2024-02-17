import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopProductComponent } from './components/product/shop-product.component';
import { ShopProductListComponent } from './components/shop-product-list/shop-product-list.component';




@NgModule({
  declarations: [
    ShopProductComponent,
    ShopProductListComponent,
    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
   
  ]
})
export class ShopModule { }
