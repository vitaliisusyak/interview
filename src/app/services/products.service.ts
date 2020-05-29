import { Injectable } from '@angular/core';

import {IProduct} from "../shared/interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  addNewProduct(newProduct: IProduct) {
    const products = this.getProducts();
    products.push(newProduct);

    return localStorage.setItem('products', JSON.stringify(products));
  }
}
