import { Component, OnInit } from '@angular/core';
import { Buyer } from './buyers';
import { Product } from '../products/products';
import { BuyersService } from '../../services/buyers.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})

export class BuyersComponent implements OnInit {

  //Buyer : any[];
  buyers: Array<Object>;

  //productsList = [];

  constructor(private buyersService:BuyersService) {
    this.buyers = buyersService.getBuyers();
  }


  deleteBuyer(index){

    	this.buyers.splice(index, 1);
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
