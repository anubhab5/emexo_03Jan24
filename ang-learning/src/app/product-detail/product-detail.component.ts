import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../products/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService],
})
export class ProductDetailComponent {
  productId: number;

  product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productSvc: ProductService
  ) {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.productSvc.fetchProductById(this.productId).subscribe((resp: any) => {
      this.product = resp;
    });
  }
}
