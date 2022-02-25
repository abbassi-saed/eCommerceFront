import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthentificationComponent } from './authentification.component';




const routes: Routes = [
  {
    path: '',
    component: AuthentificationComponent,
    // children: [
     // { path: '', redirectTo: 'home', pathMatch: 'full' },
     // { path: 'home', component: AcueilComponent },


      //{ path: 'accueil', component: AuthentificationComponent },

    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificationRoutingModule {}
