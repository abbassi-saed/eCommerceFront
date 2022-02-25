import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product/product.component';


import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AcueilComponent } from './acueil/acueil.component';
import { AdministrateurComponent } from './administrateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';




const routes: Routes = [
  {
    path: '',
    component: AdministrateurComponent,
    children: [

      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AcueilComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductComponent },
      { path: 'add', component: NewProductComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrateurRoutingModule {}
