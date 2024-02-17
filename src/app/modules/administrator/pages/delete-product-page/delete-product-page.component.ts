import { Component, OnInit } from '@angular/core';
import { AdminActionsService } from '../../services/admin-actions.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-delete-product-page',
  templateUrl: './delete-product-page.component.html',
  styleUrls: ['./delete-product-page.component.css']
})
export class DeleteProductPageComponent implements OnInit {

  productList: any[] = []

  constructor(private adminActionsService: AdminActionsService) {}
  
  ngOnInit(): any {
    this.adminActionsService.getProducts().subscribe({
      next: (response: any) => {
        console.log(response);
        this.productList = response
      },
      error: (error) => {
        console.log(error);
      }
    })
  };

  deleteProduct(id:string){
    this.adminActionsService.deleteProduct(id).subscribe({
      next: (deletedProduct: any) => {
        this.productList = this.productList.filter((originalProduct => {
          return originalProduct._id! == deletedProduct._id
        } ))
      },
      error: (error) =>{
        console.log(error);
    
      }
    })
  }
  
}
