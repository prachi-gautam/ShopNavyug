import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  @Input('wishList') wishList;
  @Input('shoppingCartList') shoppingCartList;
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.shoppingCartList = [];
  }

}
