import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input('wishList') wishList;
  @Input('shoppingCartList') shoppingCartList;
  @Input('showWishList') showWishList;
  @Output() showWishListEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() showCartListEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() goToListEvent: EventEmitter<any> = new EventEmitter<any>();


  noOfWishListItems = 0;
  noOfshopCartItems = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    if (this.wishList != undefined) {
      this.noOfWishListItems = this.wishList.length;
    }
  }

  ngOnInit() {

  }
  goToCart() {
    this.showCartListEvent.emit();
  }

  goToWishlist() {
    this.showWishListEvent.emit();

  }
  //Method to navigate to ProductsList
  goToList() {
    this.goToListEvent.emit();
  }

  //Method to update  Wishlist in nav-bar
  updateWishList(wishList) {
    this.wishList = wishList;
    this.noOfWishListItems = wishList.length;
  }

  //Method to update shoppingCartList in nav-bar
  updateshopCartList(shoppingCartList) {
    this.noOfshopCartItems = shoppingCartList.length;
  }

}
