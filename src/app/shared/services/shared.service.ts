import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private HttpClient: HttpClient) {}

  // editable
  cartItemsLength = new BehaviorSubject(0);
  cartItemsLength$ = this.cartItemsLength.asObservable();

  addToCart(amount: number) {
    if (!amount) {
      amount = 1;
    }
    let currentLength = this.cartItemsLength.getValue();
    this.cartItemsLength.next(currentLength + amount);

    localStorage.setItem('CartCount', JSON.stringify(amount));
  }

  // ---------------------------------------------------------
  // isAdmin = new BehaviorSubject(false); // for write/update
  // isAdmin$ = this.cartItemsLength.asObservable(); // for read only

  // getIsAdmin() {
  //   let url = 'assets/isAdmin.json';
  //   return this.HttpClient.get(url);
  // }

  // updateIsAdmin(value: boolean) {
  //   this.isAdmin.next(value);
  // }
}
