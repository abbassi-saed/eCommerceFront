import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../services/token.service';
import { AccountService } from '../../services/account.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup !: FormGroup;
  formGroup1 !: FormGroup;
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
      nameUser : new FormControl('', [Validators.required]),
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(4)])
    })
  }





  // register(){
  //   console.log(this.formGroup)
  //   this.authService.register(this.formGroup.value).subscribe(data =>{
  //     alert('Success User is ')
  //   },error=>alert('not create'))
  // }


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



  register() {
    this.authService
    .register(this.formGroup.value).subscribe(data => {
      this.toastr.success(
        `Votre compte bien creer `,
        'check your mail !',
        {
          timeOut: 3000,
          positionClass: 'toast-bottom-left'
        }
      );
      this.router.navigate(['/login']);
    },
    error => console.log(error));
  }

  login() {
    this.authService.login(this.formGroup.get(['email','password'])?.value)
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

}
