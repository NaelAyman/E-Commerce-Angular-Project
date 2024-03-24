import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {

  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;

  constructor(private service: ProductsService) {}

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

}
