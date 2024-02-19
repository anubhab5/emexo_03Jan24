import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from './Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  productList: Product[] = [];

  ngOnInit() {
    this.getProducts();
  }

  constructor(private prodSvc: ProductService) {
    /** */
  }

  getProducts() {
    this.prodSvc.fetchProductList().subscribe((resp: Product[]) => {
      this.productList = resp;
    });
  }
}
