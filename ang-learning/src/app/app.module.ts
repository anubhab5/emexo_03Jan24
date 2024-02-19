import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DemoPPipe } from './demo-p.pipe';
import { DemoDirDirective } from './demo-dir.directive';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { HeaderComponent } from './header/header.component';
import { TruncatePipe } from './common/truncate.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DemoPPipe,
    DemoDirDirective,
    ProductsComponent,
    AddProductsComponent,
    HeaderComponent,
    TruncatePipe,
    AboutUsComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
