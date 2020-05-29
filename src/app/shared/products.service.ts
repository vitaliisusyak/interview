import { Injectable } from '@angular/core';
import {IProduct} from "./product.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  addProductSubject = new Subject()
  constructor() { }

  getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  addNewProduct(newProduct: IProduct) {
    const products = this.getProducts();
    products.push(newProduct);
    this.addProductSubject.next(products);

    return localStorage.setItem('products', JSON.stringify(products));
  }
}
