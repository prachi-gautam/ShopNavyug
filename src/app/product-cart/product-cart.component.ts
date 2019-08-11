import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {
  @Input('product') product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCartList;
  @Input('productsList') productsList;
  @Input('wishList') wishList;
  @Output() wishlistEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() shoppingCartEvent: EventEmitter<any> = new EventEmitter<any>();


  //Component call to update Cart
  addToCart(product) {
    this.shoppingCartEvent.emit(product);

  }

  //call to get Quantity of particular product
  getProductQuantity(product) {
    if (this.shoppingCartList.length > 0) {
      for (var i = 0; i < this.shoppingCartList.length; i++) {
        if (this.shoppingCartList[i].$id == product.id) {
          if (this.shoppingCartList[i].quantity > 0) {
            return false;
          }
        }
      }
    }
    return true;
  }

  //Component call to add to wishlist
  addToWishlist(product) {
    this.wishlistEvent.emit(product);
  }

  //Method to check whether product is wishlisted
  isWishlisted(product) {
    for (var i = 0; i < this.wishList.length; i++) {
      if (product.id == this.wishList[i].id) {
        return true;
      }
    }
    return false;
  }


}
