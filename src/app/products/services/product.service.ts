import {Injectable} from '@angular/core';
import {Category, Product, ProductModel} from "../models/product. model";

const products = [
  new Product('T-Shirt', 'Perfect t-shirt for women', 10, Category.CLOTHES, true),
  new Product('Apple', 'The tastiest apple in the world', 2, Category.FOOD, true),
  new Product('Mac Book', 'Great laptop for your daily work', 1200, Category.TECHNIC, false),
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): ProductModel[] {
    return products;
  }
}
