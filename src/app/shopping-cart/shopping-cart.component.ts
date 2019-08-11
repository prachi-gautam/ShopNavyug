import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input('shoppingCartList') shoppingCartList;
  headElements = ['Name', 'Price', 'Quantity', 'Amount'];

  constructor() { }

  ngOnInit() {
  }

  //Method for Total Cart Amount
  getTotal() {
    var total = 0;
    this.shoppingCartList.forEach(function (item) {
      total += item.price * item.quantity;
    });

    return total;
  }


}
