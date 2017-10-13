import { Product } from '../products/products';


export class Buyer {

  		id:number; 

  		firstName:string; 

  		lastName:string;

  		email: string;

      productsList: Product;

  		constructor(id:number, firstName:string, lastName:string, email: string, productsList: Product){

  		  this.id = id;

  			this.firstName = firstName;

  			this.lastName = lastName;
        
  			this.email = email;

        this.productsList = productsList;
  		}
}