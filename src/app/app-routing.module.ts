import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';



const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
  },
  {path: 'users', loadChildren: './users/users.module#UsersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routing = RouterModule.forRoot(routes);

