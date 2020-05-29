import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddProductsComponent} from './components/add-products/add-products.component';
import {AllProductsComponent} from './components/all-products/all-products.component';
import {UniqueCategoryPipe} from './shared/pipes/unique-category.pipe';
import {ProductsResolver} from './services/products-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    AllProductsComponent,
    UniqueCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductsResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
