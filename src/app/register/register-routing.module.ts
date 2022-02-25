import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';




const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
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
export class RegisterRoutingModule {}
