import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductService } from './../services/product/product.service';

@Component({
  selector: 'product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent implements OnInit {
  sortValue: string = "";
  @Output() sortType: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private productService: ProductService

  ) { }

  ngOnInit() {
  }

  //EventEmitter Call to sort products
  private sortByPrice(value) {
    this.sortType.emit(value);
  }
}
