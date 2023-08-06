import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

enum Category {
  FOOD = "Food",
  CLOTHES = "Clothes",
  TECHNIC = "Technic"
}

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name: string = 'T-shirt';
  description: string = 'Perfect t-shirt with phrase'
  price: number = 10;
  category: Category = Category.CLOTHES;
  isAvailable: boolean = true;
}
