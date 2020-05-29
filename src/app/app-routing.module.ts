import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddProductsComponent} from "./add-products/add-products.component";
import {AllProductsComponent} from "./all-products/all-products.component";


const routes: Routes = [
  {
    path: '',
    component: AllProductsComponent
  },
  {
    path: 'all-products',
    component: AllProductsComponent
  },
  {
    path: 'add-product',
    component: AddProductsComponent
  },
  {
    path: '**',
    component: AllProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
