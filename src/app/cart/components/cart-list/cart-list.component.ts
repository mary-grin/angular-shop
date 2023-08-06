import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartItemModel} from "../../models/cart-item.model";
import {CartService} from "../../services/cart.service";
import {CartItemComponent} from "../cart-item/cart-item.component";

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
}
