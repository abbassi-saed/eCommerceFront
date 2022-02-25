import { ToastrService } from 'ngx-toastr';
import { TokenService } from './../../services/token.service';
import { AccountService } from './../../services/account.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  formGroup !: FormGroup;
  //tokenService: any;
  constructor(
              private authService : AuthService,
              private tokenService :TokenService,
              private accoutService : AccountService,
              private router:Router,
              private toastr: ToastrService
              ) { }


  ngOnInit(): void {

    this.initForm();
  }


  initForm(){
    this.formGroup = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(4)])
    })
  }

  // login(){
  //   this.authService.login(this.formGroup.value).subscribe(res => this.handleResponse(res))
  // }


  login() {
    this.authService.login(this.formGroup.value)
        .subscribe(
          res => this.handleResponse(res),
          err => this.toastr.error(
              `Erreur`,
              'Merci de Vérifier votre email ou mot de passe !',
              {
                timeOut: 3000,
                positionClass: 'toast-bottom-left'
              }
          ))
  }



  handleResponse(res:any) {
    this.tokenService.handle(res);
    this.accoutService.changeStatus(true);
    this.toastr.success(
      `Bienvenu : ${ this.tokenService.getInfos().name }`,
      'Vous êtes connectés !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
    );
    this.router.navigateByUrl('/env');
  }
}
