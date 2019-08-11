import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //Service call to fetch List of products from Json File
  getAll(): Observable<any> {
    return this.http.get<Product[]>("./assets/product.json");

  }

}
