
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { IndexComponent } from './index.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';




const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [

      { path:"", component: ProductsComponent},
      { path:"cart", component: CartComponent},
     { path: '', redirectTo: 'products', pathMatch: 'full' },
     // { path: 'home', component: AcueilComponent },


      //{ path: 'accueil', component: AuthentificationComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
