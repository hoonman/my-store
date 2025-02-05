// we are defining a instance of a class
// defining data that can be shared across any part of your app
import { Injectable } from '@angular/core';
import { Product } from 'src/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  printItems() {
    // console log the this.items Product array.
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }

  constructor(private http: HttpClient) { }
}
