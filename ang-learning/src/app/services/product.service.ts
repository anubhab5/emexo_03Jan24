import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  fetchProductList(): any {
    return this.http.get('http://localhost:3000/products');
  }

  fetchProductById(id: number) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  addProduct(newProd: Product) {
    return this.http.post('http://localhost:3000/products', newProd);
  }
}
