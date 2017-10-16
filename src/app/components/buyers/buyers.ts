//import { Product } from '../products/products';


export class Buyer {

  		id:number; 

  		firstName:string; 

  		lastName:string;

  		email: string;

      productsList:Array<string>;

  		constructor(id:number, firstName:string, lastName:string, email: string, []){

  		  this.id = id;

  			this.firstName = firstName;

  			this.lastName = lastName;
        
  			this.email = email;

        this.productsList = ['milk, sugar', 'eggs'];
  		}
}