import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductImageComponent } from './products-list/product-image/product-image.component';
import { ProductPriceComponent } from './products-list/product-price/product-price.component';
import { ProductDepartmentComponent } from './products-list/product-department/product-department.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductImageComponent,
    ProductPriceComponent,
    ProductDepartmentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
