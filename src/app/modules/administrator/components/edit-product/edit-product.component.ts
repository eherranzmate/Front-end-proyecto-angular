import { Component, OnInit } from '@angular/core';
import { AdminActionsService } from '../../services/admin-actions.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

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

}
