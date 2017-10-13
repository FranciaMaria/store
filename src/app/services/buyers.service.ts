import { Injectable } from '@angular/core';
import { Product } from '../components/products/products';
import { Buyer } from '../components/buyers/buyers';

@Injectable()
export class BuyersService {

  productsList = [  

      	new Product (1, 'banana', 500),

      	new Product (2, 'bread', 100),

      	new Product (3, 'eggs', 1000),

      	new Product (4, 'milk', 50)	
  ];

  constructor() { }

  getBuyers(){

  	return [

  		new Buyer(1, 'Maja', 'Mikic', 'majamikic@gmail.com', this.productsList[0]),

		new Buyer(2, 'Dejan', 'Rakic', 'dejanrakic@yahoo.com', this.productsList[0]),

		new Buyer(3, 'Miodrag', "Savic", 'miodragsavic@live.com', this.productsList[0]),

		new Buyer(4,'Jana', 'Janic', 'janajanic@yahoo.com', this.productsList[0]),

		new Buyer(5, 'Petra', 'Pepic', 'petrapepic@gmail.com', this.productsList[0])


  	];

}

}
