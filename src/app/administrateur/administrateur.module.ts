import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { AdministrateurRoutingModule } from './administrateur-routing.module';
import { SidenavComponent } from './../sidenav/sidenav.component';
import { AcueilComponent } from './acueil/acueil.component';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrateurComponent } from './administrateur.component';
////////////////////////////////////////////////////////////////////
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewProductComponent } from './new-product/new-product.component';
// import { AdministrateurComponent } from './administrateur/administrateur.component';



@NgModule({
  declarations: [
    AdministrateurComponent,
    HeaderComponent,
    AcueilComponent,
    SidenavComponent,
    ProductComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    AdministrateurRoutingModule
  ]
})
export class AdministrateurModule { }
