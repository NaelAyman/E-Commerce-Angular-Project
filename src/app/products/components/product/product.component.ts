import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() data: any = {};
  @Output() addToCart = new EventEmitter();

  addButton: boolean = false;
  amount: number = 0;

  add() {
    this.addToCart.emit({
      item: this.data,
      quantity: this.amount
    });
    alert('Added to Cart');
  }

}
