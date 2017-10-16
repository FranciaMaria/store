import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

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

}
