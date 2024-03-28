import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  cartProducts: any[] = [];
  total: any = 0;

  constructor(private _CartsService: CartsService) {}

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
  
  minusAmount(index: number) {
    if(this.cartProducts[index].quantity <= 1) {
      this.cartProducts[index].quantity = 1;
    } else {
      this.cartProducts[index].quantity--;
      this.getCartTotalPrice();
      localStorage.setItem('Cart', JSON.stringify(this.cartProducts));
    }
  }
  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotalPrice();
    localStorage.setItem('Cart', JSON.stringify(this.cartProducts));
  }
  detectChanges() {
    this.getCartTotalPrice();
    localStorage.setItem('Cart', JSON.stringify(this.cartProducts));
  }

  deleteCartProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotalPrice();
    localStorage.setItem('Cart', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    this.getCartTotalPrice();
    localStorage.setItem('Cart', JSON.stringify(this.cartProducts));
  }

  addCart() {
    let products = this.cartProducts.map(item => {
      return { productId: item.item.id, quantity: item.quantity }
    });

    let Model = {
      userId: 5,
      date: new Date(),
      products: products
    }

    // this._CartsService.createNewCart(Model)

    console.log(Model);
  }

}
