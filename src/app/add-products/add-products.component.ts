import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../shared/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  addNewProductForm: FormGroup;

  constructor(private productsService: ProductsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
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
  }

  /* Check if product with such title and category exists */
  isProductExist(group: AbstractControl): { [error: string]: boolean } {
    const title = group.get('title').value;
    const category = group.get('category').value;
    const allProducts = this.productsService.getProducts();

    const checkIfExist = allProducts.find(product => product.title === title && product.category === category)
    return checkIfExist ? {productExist: true} : null
  }
}
