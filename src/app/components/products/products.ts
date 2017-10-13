export class Product {

	id: number;

	name: string;

	quantityInStock: number;

	constructor(id: number, name: string, quantityInStock: number) {

		this.id = id;

		this.name = name;
		
		this.quantityInStock = quantityInStock;
	}
}