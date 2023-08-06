export interface ProductModel {
  name: string
  description: string
  price: number
  category: Category
  isAvailable: boolean
}

export enum Category {
  FOOD = "Food",
  CLOTHES = "Clothes",
  TECHNIC = "Technic"
}

export class Product implements ProductModel {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public isAvailable: boolean
  ) {}
}
