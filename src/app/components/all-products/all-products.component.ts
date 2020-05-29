import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../shared/interfaces/product.interface";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allProducts: IProduct[];
  filteredProducts: IProduct[];
  totalPrice: number;

  constructor(private router: Router,
              private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  /* Get all products*/
  getProducts() {
    /*this.productsService.addProductSubject.subscribe(data => console.log(data))*/
    this.allProducts = this.productsService.getProducts();
    this.filteredProducts = this.allProducts;
    this.totalPrice = this.totalPriceCounter(this.allProducts);
  }

  /* Filter products */
  filterProducts(categoryToFilter) {
    if (categoryToFilter.target.value) {
      this.filteredProducts = this.allProducts.filter(item => item.category === categoryToFilter.target.value)
      this.totalPrice = this.totalPriceCounter(this.filteredProducts);
      return this.filteredProducts
    } else {
      this.totalPrice = this.totalPriceCounter(this.allProducts);
      return this.filteredProducts = this.allProducts
    }
  }

  /* Count total price of products selected */
  totalPriceCounter(productsArray) {
    return productsArray.map(item => +item.price).reduce((acc, val) => acc + val);
  }

  /*Navigate to Add Product page*/
  onAddProductNavigate() {
    this.router.navigate(['add-product'])
  }
}
