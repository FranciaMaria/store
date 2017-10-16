import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Object>;
  searchTerm:string;
  
  constructor(private productsService:ProductsService) {
    this.products = productsService.getProducts();
  }

  ngOnInit() {

    this.productsService.getSearchTerm().subscribe(searchTerm => {
      //console.log(searchTerm);
      this.searchTerm = searchTerm;
    })

  }

  public addQuantity(product) {
    this.productsService.addQuantity(product);
  }

  public removeQuantity(product) {
    this.productsService.removeQuantity(product);
  }




}
