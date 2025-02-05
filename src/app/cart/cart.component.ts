import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // going to inject the cartService data here and use it to display it here.
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
}
