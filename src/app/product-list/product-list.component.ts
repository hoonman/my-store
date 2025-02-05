import { Component, OnInit } from '@angular/core';
import { products } from 'src/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = products;

  share(event: Event) {
    console.log("event: " + event);
    const button = event.target as HTMLButtonElement;
    alert(`The product has been shared! Button text: ${button.innerText}`);
  }

  onNotify() {
    alert('you will be notified when the product goes on sale');
  }

  onNotifier() {
    console.log("on notifier clicked");
    window.alert("on notifier was clicked!!");
  }
}
