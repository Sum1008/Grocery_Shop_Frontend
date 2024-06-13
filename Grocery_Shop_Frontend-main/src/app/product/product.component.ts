import { Component,OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../ProductService';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }
}
