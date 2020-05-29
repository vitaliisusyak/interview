import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {IProduct} from "../../shared/interfaces/product.interface";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  addNewProductForm: FormGroup;
  allProducts: IProduct[];

  constructor(private productsService: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getData()
    this.createForm();
  }

  /* Get all products */
  getData() {
    this.route.data.subscribe((data : Data) => {
      this.allProducts = data['products'];
    })
  }

  /* Create form */
  createForm() {
    this.addNewProductForm = new FormGroup({
      productInfo: new FormGroup({
        title: new FormControl('', Validators.required),
        category: new FormControl('', [Validators.required]),
      }, {
        validators: this.isProductExist.bind(this),
        updateOn: "blur"
      }),
      price: new FormControl('', [
        Validators.required,
        Validators.max(1000),
        Validators.min(1)
      ])
    })
  }

  /* Getters to use in template */
  get productInfo() {
    return this.addNewProductForm.get('productInfo');
  }

  get title() {
    return this.productInfo.get('title');
  }

  get category() {
    return this.productInfo.get('category');
  }

  get price() {
    return this.addNewProductForm.get('price');
  }

  /* Add new product */
  onAddProduct(form: FormGroup) {
    const newProduct = {...form.value.productInfo, price: form.value.price};
    this.productsService.addNewProduct(newProduct)
    this.addNewProductForm.reset();
    this.router.navigate(['all-product'])
  }

  /* Check if product with such title and category exists */
  isProductExist(group: AbstractControl): { [error: string]: boolean } {
    const title = group.get('title').value;
    const category = group.get('category').value;

    const checkIfExist = this.allProducts.find(product => product.title === title && product.category === category)
    return checkIfExist ? {productExist: true} : null
  }
}
