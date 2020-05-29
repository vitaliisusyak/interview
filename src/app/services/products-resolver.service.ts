import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {ProductsService} from "./products.service";

@Injectable()
export class ProductsResolver implements Resolve<any> {
  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.productsService.getProducts()
  }
}
