import { CartService } from './../../../services/site/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from './../../../services/token.service';
import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  currentUser!:null;

  constructor(
    private accountService:AccountService,
    private tokenSerive:TokenService,
    private router : Router,
    private tokenService :TokenService,
    private toastr: ToastrService,
    private cartService:CartService) { }

    public totalItem:number=0;

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem=res.length;
    })
    this.accountService.authStatus.subscribe(res=>{
      this.currentUser = this.tokenSerive.getInfos();
    })

  }

  logout(){

    // this.accountService.changeStatus(false);
    // this.tokenSerive.remove();
    // this.router.navigateByUrl("/login");
    // this.toastr.warning(
    //   `au revoir `,
    //   // ${ this.tokenService.getInfos().name }
    //   'Vous êtes déconnecté !',
    //   {
    //     timeOut: 3000,
    //     positionClass: 'toast-top-right'
    //   }
    // );
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.toastr.warning(
        `Déconnexion`,
        'Vous êtes déconnecter !',
        {
          timeOut: 3000,
          positionClass: 'toast-bottom-left'
        }
    )
    this.router.navigateByUrl('/');
  }


  }


