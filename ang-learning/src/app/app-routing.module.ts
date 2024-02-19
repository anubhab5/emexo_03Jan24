import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './products/Product';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    component: ProductsComponent,
    path: 'home',
  },
  {
    component: AboutUsComponent,
    path: 'about-us',
  },
  {
    component: AddProductsComponent,
    path: 'add-product',
  },
  {
    component: ProductDetailComponent,
    path: 'product/:id',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
