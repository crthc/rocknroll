import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginformComponent } from 'src/app/components/loginform/loginform.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, LoginformComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
