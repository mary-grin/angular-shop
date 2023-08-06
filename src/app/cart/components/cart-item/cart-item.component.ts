import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartItemModel} from "../../models/cart-item.model";

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input({
    required: true
  }) cartItem: CartItemModel
}
