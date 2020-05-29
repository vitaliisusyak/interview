import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddProductsComponent} from "./components/add-products/add-products.component";
import {AllProductsComponent} from "./components/all-products/all-products.component";
import {ProductsResolver} from "./services/products-resolver.service";


const routes: Routes = [
  {
    path: '',
    component: AllProductsComponent,
    resolve: { products: ProductsResolver }
  },
  {
    path: 'add-product',
    component: AddProductsComponent,
    resolve: { products: ProductsResolver },
  },
  {
    path: '**',
    component: AllProductsComponent,
    resolve: { products: ProductsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
