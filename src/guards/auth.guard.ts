import { ToastrService } from 'ngx-toastr';

import { AccountService } from './../services/account.service';
import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(!this.tokenService.loggedIn()) {

        this.tokenService.remove();
        this.router.navigateByUrl("/login");
        this.toastr.warning(
          `Attention vous pouvez pas acceder a ce chemin`,
          'Vous êtes déconnecter !',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
      )
      this.router.navigateByUrl('/login');
        return false;
     }

     return true;
  }

}
