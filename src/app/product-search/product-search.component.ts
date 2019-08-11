import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  searchText: string = "";
  @Output() search: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  //EventEmitter call to search product 
  searchProducts($event) {
    this.search.emit($event);
  }

}
