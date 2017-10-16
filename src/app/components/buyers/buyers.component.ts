import { Component, OnInit } from '@angular/core';
import { Buyer } from './buyers';
import { Product } from '../products/products';
import { BuyersService } from '../../services/buyers.service';
import { ProductsService } from '../../services/products.service';

/*import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule} from '@angular/core'; 
import {BrowserModule} from '@angular/platform-browser';*/


@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})

export class BuyersComponent implements OnInit {

  //Buyer : any[];
  product: Product[];
  buyers: Array<Object>;
  //product: Product = new Product(0, '', 0);
  newBuyer: Buyer = new Buyer(0,'','', '', this.product);

  constructor(private buyersService:BuyersService, private produtcsService:ProductsService) {
    this.buyers = buyersService.getBuyers();
    //this.products = produtcsService.getProducts();
  }

  

  deleteBuyer(index){

    	this.buyers.splice(index, 1);
  }


   addBuyer() {

    	this.buyers.push(this.newBuyer);

    	//this.products.push(this.product);

    	//this.product = new Product(0, '', 0);

    	this.newBuyer = new Buyer(0,'','','', this.product);
  }


   ngOnInit() {}

  /*productsList = [  

      		new Product (1, 'banana', 500),

      		new Product (2, 'bread', 100),

      		new Product (3, 'eggs', 1000),

      		new Product (4, 'milk', 50)	
	];

  BuyerList = [

			new Buyer(1, 'Maja', 'Mikic', 'majamikic@gmail.com', this.productsList[0]),

			new Buyer(2, 'Dejan', 'Rakic', 'dejanrakic@yahoo.com', this.productsList[0]),

			new Buyer(3, 'Miodrag', "Savic", 'miodragsavic@live.com', this.productsList[0]),

			new Buyer(4,'Jana', 'Janic', 'janajanic@yahoo.com', this.productsList[0]),

			new Buyer(5, 'Petra', 'Pepic', 'petrapepic@gmail.com', this.productsList[0]),

	];
*/

}
