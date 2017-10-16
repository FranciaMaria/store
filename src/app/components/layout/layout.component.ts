import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private productsService:ProductsService) { 
  	this.productsService = productsService;
  }

  ngOnInit() {
  }

  handleSearch(search){
  	this.productsService.search(search);

	}

}
