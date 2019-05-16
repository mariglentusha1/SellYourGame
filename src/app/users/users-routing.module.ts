import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SecureInnerPagesGuard} from '../shared/guard/secure-inner-pages.guard.ts.guard';
import {SignUpComponent} from './sign-up/sign-up.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from '../shared/guard/auth.guard';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';


const routes: Routes = [

  {path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
