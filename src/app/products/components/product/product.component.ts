import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

import {ProductModel} from "../../models/product. model";
import {HighlightDirective} from "../../directives/highlight.directive";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, HighlightDirective],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input({
    required: true
  }) product: ProductModel;
  @Output() onAddToCart = new EventEmitter();
}
