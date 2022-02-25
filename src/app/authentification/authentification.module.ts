import { AuthentificationComponent } from './authentification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AuthentificationComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    AuthentificationRoutingModule
  ]
})
export class AuthentificationModule { }
