import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { SignUpComponent } from './sign-up/sign-up.component';

import { VerifyEmailComponent } from './verify-email/verify-email.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {SignInComponent} from './sign-in/sign-in.component';

import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent, SignInComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class UsersModule {
}
