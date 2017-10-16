import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Object>;
  //newBuyer: Buyer = new Buyer(0,'','', '', ['milk', 'eggs', 'choclate']);

  //productsList = [];

  constructor(private productsService:ProductsService) {
    this.products = productsService.getProducts();
  }


  ngOnInit() {
  }

}
