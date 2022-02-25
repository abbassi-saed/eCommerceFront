import { ToastrService } from 'ngx-toastr';
import { TokenService } from './../../services/token.service';
import { AccountService } from './../../services/account.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  currentUser!:null;
  public userInfos: any = null;


  constructor(
    private router: Router,
    private accountService:AccountService,
    private tokenService :TokenService,
    private toastr: ToastrService,
    ) {}

  ngOnInit(): void {

    this.accountService.authStatus.subscribe(res=>{
      this.currentUser = this.tokenService.getInfos();
    })

    this.userInfos = this.tokenService.getInfos();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
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
