import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() data!: Product;
  @Output() addToCart = new EventEmitter();

  addButton: boolean = false;
  amount: number = 1;
  sent: boolean = false;

  constructor(private _Router: Router) {}

  add() {
    this.addToCart.emit({
      item: this.data,
      quantity: this.amount
    });
    // alert('Added to Cart');
    this.sent = true;

    setTimeout(() => {
      this._Router.navigate(['/carts']);
    }, 500);
  }

}
