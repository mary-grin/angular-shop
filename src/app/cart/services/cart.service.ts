import { Injectable } from '@angular/core';
import {CartItemModel} from "../models/cart-item.model";
import {ProductModel} from "../../products/models/product. model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: CartItemModel[] = [];

  get totalPrice(): number {
    return this.cartList
      .map(item => item.price)
      .reduce((prev, acc) => prev + acc);
  }

  get cartItems(): CartItemModel[] {
    return this.cartList;
  }

  addItemToCart(item: ProductModel) {
    const existingProduct = this.cartList.find(el => item.name === el.name)

    if (existingProduct) {
      existingProduct.amount++;
      existingProduct.price = existingProduct.price + item.price
    } else {
      const newItem = {
        name: item.name,
        price: item.price,
        amount: 1
      }
      this.cartList = [...this.cartList, newItem]
    }
  }
}
