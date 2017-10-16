import { Injectable } from '@angular/core';
import { Product } from '../components/products/products';
import { Buyer } from '../components/buyers/buyers';
import { ProductsService } from '../services/products.service';


@Injectable()
export class BuyersService {


  /*productsList = [  

      	new Product (1, 'banana', 500),

      	new Product (2, 'bread', 100),

      	new Product (3, 'eggs', 1000),

      	new Product (4, 'milk', 50)	
  ];*/

  //product: Product = new Product(0, '', 0);

  products: any;//Array<Object>;

  constructor(private productsService:ProductsService) {
    this.products = productsService.getProducts();
  }

  getBuyers(){

  	return [

  	/*new Buyer(1, 'Maja', 'Mikic', 'majamikic@gmail.com', this.products[1]),

		new Buyer(2, 'Dejan', 'Rakic', 'dejanrakic@yahoo.com', this.products[2]),

		new Buyer(3, 'Miodrag', "Savic", 'miodragsavic@live.com', this.products[3]),

		new Buyer(4,'Jana', 'Janic', 'janajanic@yahoo.com', this.products[0]),

		new Buyer(5, 'Petra', 'Pepic', 'petrapepic@gmail.com', this.products[1])
*/
    {
      id: 1,
      firstName: "Nikola",  
      lastName: "Nikolic",
      email: "nikolic@gmail.com",
      products: [
        { name : 'milk' },
        { name : 'eggs' },
        { name : 'sugar' }
      ]
    },
    {
      id: 2,
      firstName: "Milan",
      lastName: "Miovanovic",
      email: "milovanovic@gmail.com",
      products: [
        { name : 'chocolate' },
        { name : 'bread' },
        { name : 'milk' }
      ]
    },
    {
      id: 3,
      firstName: "Petar",
      lastName: "Petrovic",
      email: "petrovic@gmail.com",
      products: [
        { name : 'apples' },
        { name : 'chips' },
        { name : 'milk' }
      ]
    },
    {
      id: 4,
      firstName: "Ivan",
      lastName: "Ivanovic",
      email: "ivanovic@gmail.com",
      products: [
        { name : 'honey' },
        { name : 'bread' },
        { name : 'juice' }
      ]
    }


  	];

  }

 

}
