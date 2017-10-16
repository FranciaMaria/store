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


  /*private buyers: Buyer[] = [

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


]*/

private buyers: Buyer[] = [
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
  ]


  getBuyers(){
    return this.buyers;
  }

  public newBuyerId() {
    return this.buyers.length + 1;
  }

  public getBuyerById(id) {
    return this.buyers.find( buyer => {
      return buyer['id'] == id;
    })
  }

  public buyerPurchase(product, id){
    let buyer = this.getBuyerById(id);
    this.addProduct(buyer, product);   
  }

  public addProduct(buyer, product) {
     buyer.products.push(product);
     this.productsService.removeQuantity(product.quantity)
  }


 

}
