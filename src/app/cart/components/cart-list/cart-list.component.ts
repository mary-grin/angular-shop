import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartItemModel} from "../../models/cart-item.model";
import {CartService} from "../../services/cart.service";
import {CartItemComponent} from "../cart-item/cart-item.component";
import {ProductModel} from "../../../products/models/product. model";

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  cartService: CartService = inject(CartService)

  trackByItems(index: number, item: CartItemModel): string { return item.name }

  onQuantityIncrease(cartItem: ProductModel) {
    this.cartService.increaseAmount(cartItem);
  }

  onQuantityDecrease(cartItem: ProductModel) {
    this.cartService.decreaseAmount(cartItem);
  }

  onDeleteItem(cartName: string) {
    this.cartService.deleteItem(cartName)
  }
}
