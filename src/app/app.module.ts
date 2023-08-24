import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {FirstComponent} from "./components/first/first.component";
import {ProductListComponent} from "./products/components/product-list/product-list.component";
import {CartListComponent} from "./cart/components/cart-list/cart-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FirstComponent,
    ProductListComponent,
    CartListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// ok
