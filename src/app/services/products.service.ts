import { Injectable } from '@angular/core';
import { Product } from '../components/products/products';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ProductsService {

  searchData = new BehaviorSubject('');

  constructor() { }

  getProducts(){

  	return [

      		new Product (1, 'banana', 500),

      		new Product (2, 'bread', 100),

      		new Product (3, 'eggs', 1000),

      		new Product (4, 'milk', 50)

  	];

  }

  search(term){

  	this.searchData.next(term);
  }


  getSearchTerm() {

  	return this.searchData;

  }

}
