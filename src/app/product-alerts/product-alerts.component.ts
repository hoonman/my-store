import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!:Product;
  @Output() notify = new EventEmitter();
  @Output() notifier = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }



}
