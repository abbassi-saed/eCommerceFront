import { AfterAuthGuard } from './../guards/after-auth.guard';
import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'auth', pathMatch: 'full'},
  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), },
  //{ path: '', redirectTo: 'frontoffice', pathMatch: 'full'},
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),canActivate:[AfterAuthGuard] },
  { path: 'login', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule),canActivate:[AfterAuthGuard] },
   { path: 'env', loadChildren: () => import('./administrateur/administrateur.module').then(m => m.AdministrateurModule),canActivate:[AuthGuard] },
   { path: '', loadChildren: () => import('./Site/index.module').then(m => m.IndexModule) },
 //{ path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule), },


  // tslint:disable-next-line:max-line-length
  //{ path: 'administrateur', loadChildren: () => import('./administrateur/administrateur.module').then(m => m.AdministrateurModule), canActivate: [MyGuard]},
  // tslint:disable-next-line:max-line-length
  //{ path: 'utilisateur', loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule), canActivate: [MyGuard]},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
