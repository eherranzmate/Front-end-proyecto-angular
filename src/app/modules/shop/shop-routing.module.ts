import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductListComponent } from './components/shop-product-list/shop-product-list.component';

const routes: Routes = [
  {
    path: '',  children: [
      {
        path: 'products', component: ShopProductListComponent
      },
      {
        path: '**', redirectTo: 'products', pathMatch: 'full'
      }
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
