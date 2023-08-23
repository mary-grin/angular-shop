import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartItemModel} from "../../models/cart-item.model";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input({
    required: true
  }) cartItem: CartItemModel
  @Output() onQuantityIncrease = new EventEmitter();
  @Output() onQuantityDecrease = new EventEmitter();
  @Output() onDeleteItem = new EventEmitter();
}
