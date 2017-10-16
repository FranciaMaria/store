import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../../services/products.service';
import { BuyersService } from '../../../services/buyers.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any = {};
  buyers: any[] = [];
  selectBuyerId: number;

  constructor(private route: ActivatedRoute,
              private productsServices: ProductsService,
              private buyersServices: BuyersService) { }

  ngOnInit() {
  	let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsServices.getProductById(id);
    // this.buyers = this.buyersServices.getBuyers();
  }

  public buyerPurchase(product){
    if(this.selectBuyerId){
      this.buyersServices.buyerPurchase(product, this.selectBuyerId);
    }else {
      alert('You need to select the customers');
    }
  }


}
