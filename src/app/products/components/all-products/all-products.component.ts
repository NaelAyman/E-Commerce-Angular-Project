import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {

  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  sent: boolean = false;
  cartProducts: any[] = [];

  constructor(private service: ProductsService, private _Router: Router) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe( 
      (response: any) => {
        this.products = response;
        console.log(response);
        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
        alert('Error: ' + error.message);
      }
    )
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (response: any) => {
        this.categories = response;
        console.log(response);
        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
        alert('Error: ' + error.message);
      }
    )
  }

  filterCategory(event: any) {
    let value = event.target.value;
    console.log(value);

    if(value == 'all') {
      this.getProducts();
    } else {
      this.ProductByCategory(value);
    }
  }

  ProductByCategory(category: string) {
    this.loading = true;
    this.service.getProductByCategory(category).subscribe(
      (response: any) => {
        this.products = response;
        this.loading = false;
      },
      error => {
        this.loading = false;
        alert('Error: ' + error.message);
      }
    )
  }

  addToCart(event: any) {
    if(localStorage.getItem('Cart') == null) {
      this.cartProducts.push(event);
      localStorage.setItem('Cart', JSON.stringify(this.cartProducts));
    } else {
      this.cartProducts = JSON.parse(localStorage.getItem('Cart')!);

      let existItem = this.cartProducts.find(item => item.item.id == event.item.id);
      
      if(existItem) {
        alert('This Item Already Existed');
      } else {
        this.sent = true

        this.cartProducts.push(event);
        localStorage.setItem('Cart', JSON.stringify(this.cartProducts));
        
        setTimeout(() => {
          this._Router.navigate(['/carts']);
        }, 500);
      }
    }
  }

}
