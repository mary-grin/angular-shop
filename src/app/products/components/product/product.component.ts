import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

import {ProductModel} from "../../models/product. model";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input({
    required: true
  }) product: ProductModel;

  cartService: CartService = inject(CartService);

  onAddToCard() {
    console.log(`${this.product.name} was added to your card!`)
    this.cartService.addItemToCart(this.product)
  }
}
