import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../models/product. model";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  productService: ProductService = inject(ProductService);

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  trackByItems(index: number, item: ProductModel): string { return item.name }
}
