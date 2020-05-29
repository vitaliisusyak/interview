import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddProductsComponent} from './add-products/add-products.component';
import {AllProductsComponent} from './all-products/all-products.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UniqueCategoryPipe} from './shared/unique-category.pipe';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
