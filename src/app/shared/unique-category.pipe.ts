import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from "./product.interface";

@Pipe({
  name: 'uniqueCategory'
})
export class UniqueCategoryPipe implements PipeTransform {

  transform(allProducts: IProduct[]): String[] {
    const allCategories = allProducts.map(product => product.category)
    const uniqueCategories = [...new Set(allCategories)];
    return uniqueCategories
  }
}
