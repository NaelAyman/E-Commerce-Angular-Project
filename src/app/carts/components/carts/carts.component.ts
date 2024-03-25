import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  cartProducts: any[] = [];
  total: any = 0;

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    if('Cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('Cart') !);
    }
    console.log(this.cartProducts);
    this.getCartTotalPrice();
  }

  getCartTotalPrice() {
    this.total = 0;
    for(let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

}
