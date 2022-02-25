import { NavbarComponent } from './../partials/navbar/navbar.component';

import { IndexComponent } from './index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [IndexComponent,
    CartComponent,
    NavbarComponent,
  ProductsComponent
  ]
  ,
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
