import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../models/product. model";
import {ProductComponent} from "../product/product.component";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  @ViewChild('productListTitle') title: ElementRef<HTMLHeadingElement>

  products: ProductModel[];

  productService: ProductService = inject(ProductService);
  cartService: CartService = inject(CartService);

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit() {
    this.title.nativeElement.innerText = 'Product list'
  }

  trackByItems(index: number, item: ProductModel): string { return item.name }

  addToCart(product: ProductModel) {
    console.log(`${product.name} was added to your card!`)
    this.cartService.addItemToCart(product)
  }
}
