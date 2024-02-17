import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminActionsService } from '../../services/admin-actions.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent {

  createProductForm!: FormGroup
  selectedFile!: File | null

  constructor(private fb: FormBuilder, private adminActions: AdminActionsService){
    this.createProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.email]],
      category: ['', [Validators.required]],
      picture: [null]
    })
  }

    // Función para manejar el cambio en el input de tipo archivo
    onFileChange(event: Event): void {
      const inputElement = event.target as HTMLInputElement;

      if (inputElement.files && inputElement.files.length > 0) {
        this.selectedFile = inputElement.files[0];
      } else {
        this.selectedFile = null;
      }

    }

  createProduct(){
    const formData = new FormData();

    // Obtén los valores del formulario
    const { name, description, category, price } = this.createProductForm.value;

    // Agrega los valores al FormData
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price); // Convierte a cadena si es necesario
    formData.append('picture', this.selectedFile!);

    this.adminActions.createProduct(formData).subscribe({
      next: (response) => {
          console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

}
