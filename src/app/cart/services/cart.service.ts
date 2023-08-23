import {computed, Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {CartItemModel} from "../models/cart-item.model";
import {ProductModel} from "../../products/models/product. model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: WritableSignal<CartItemModel[]> = signal<CartItemModel[]>([]);

  totalPrice: Signal<number> = computed(() =>
    this.cartList()
      .map(item => item.price * item.amount)
      .reduce((prev, acc) => prev + acc))

  totalAmount: Signal<number> = computed(() =>
    this.cartList()
      .map(item => item.amount)
      .reduce((prev, acc) => prev + acc)
  )

  get cartItems(): CartItemModel[] {
    return this.cartList();
  }

  addItemToCart(item: ProductModel) {
    const existingProduct = this.cartList().findIndex(el => item.name === el.name)

    if (existingProduct !== -1) {
      this.increaseAmount(item)
    } else {
      const newItem = {
        name: item.name,
        price: item.price,
        amount: 1
      }
      this.cartList.update(value => [...value, newItem])
    }
  }

  increaseAmount(cartItem: ProductModel) {
    this.cartList.update(value =>
      value.map(el => (el.name === cartItem.name)
        ? { ...el, amount: el.amount + 1 }
        : el
      )
    );
  }

  decreaseAmount(cartItem: ProductModel) {
      this.cartList.update(value =>
        value.map(el => (el.name === cartItem.name)
          ? { ...el, amount: el.amount - 1 }
          : el
        )
      );
  }

  deleteItem(cartName: string) {
    this.cartList.update(value =>
      value.filter(el => el.name !== cartName)
    )
  }

}
