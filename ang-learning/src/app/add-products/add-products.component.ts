import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private prodSvc: ProductService) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.min(1), Validators.max(99), Validators.required]],
      description: [''],
    });
  }

  ngOnDestroy() {
    console.log('ng on destroy of add product page');
  }

  onSubmit(): void {
    debugger;
    this.prodSvc.addProduct(this.productForm.value).subscribe((resp) => {
      debugger;
    });
  }
}
