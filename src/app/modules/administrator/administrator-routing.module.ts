import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { DeleteProductPageComponent } from './pages/delete-product-page/delete-product-page.component';
import { AdministratorMainPageComponent } from './pages/administrator-main-page/administrator-main-page.component';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',  children: [
      {
        path: '', component: AdministratorMainPageComponent
      },
      {
        path: 'create-product', component: CreateProductPageComponent
      },
      {
        path: 'delete-product', component: DeleteProductPageComponent
      },
      {
        path: 'edit-product', component: EditProductComponent
      },
      {
        path: 'edit-product/:id', component: EditProductPageComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
