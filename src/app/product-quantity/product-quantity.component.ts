import { Product } from './../interfaces/product';
//import { ShoppingCartService } from './../services/shopping-cart/shopping-cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'product-quantity',
	templateUrl: './product-quantity.component.html',
	styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

	@Input('product') product;
	// tslint:disable-next-line:no-input-rename
	@Input('shopping-cart') shoppingCartList;
	@Output() shoppingCartEvent: EventEmitter<any> = new EventEmitter<any>();

	constructor() { }

	//Method call to add quantity of product in cart
	addToCart(product, task) {
		console.log("addToCart");
		for (var i = 0; i < this.shoppingCartList.length; i++) {
			if (this.shoppingCartList[i].$id == this.product.id) {

				this.shoppingCartList[i].quantity += 1;
			}
		}

	}

	//Method call to reduce quantity of product in cart
	removeFromCart(product, task) {
		console.log("removeFromCart");

		for (var i = 0; i < this.shoppingCartList.length; i++) {
			if (this.shoppingCartList[i].$id == this.product.id) {
				if (this.shoppingCartList[i].quantity > 0) {
					if (this.shoppingCartList[i].quantity == 1) {
						this.shoppingCartList[i].quantity -= 1;
						var index = i;
						this.shoppingCartList.splice(index, 1);
					}
					else {
						this.shoppingCartList[i].quantity -= 1;
					}

				}
			}
		}

		this.shoppingCartEvent.emit(product);
	}

	//Call to check the quantity of product in cart
	getQuantity(product) {

		for (var i = 0; i < this.shoppingCartList.length; i++) {
			if (this.shoppingCartList[i].$id == product.id) {
				return this.shoppingCartList[i].quantity
			}
		}
	}


}
