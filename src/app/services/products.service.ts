import { Injectable } from '@angular/core';
import { Product } from '../components/products/products';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ProductsService {

  searchData = new BehaviorSubject('');

  constructor() { }

  private products: Product[] = [
    {
      id: 1,
      name: "milk",
      quantityInStock: 150,
    },
    {
      id: 2,
      name: "eggs",
      quantityInStock: 220,
    },
    {
      id: 3,
      name: "bread",
      quantityInStock: 50,
    },
    {
      id: 4,
      name: "chocolate",
      quantityInStock: 100,
    }
  ];


  getProducts(){
    return this.products;
  }

  search(term){

  	this.searchData.next(term);
  }


  getSearchTerm() {

  	return this.searchData;

  }

}
