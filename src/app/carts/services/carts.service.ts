import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  baseAPI: any = 'https://fakestoreapi.com/';

  constructor(private _HttpClient: HttpClient) { }

  createNewCart(model: any) {
    return this._HttpClient.post(this.baseAPI + 'carts', model);
  }
}
