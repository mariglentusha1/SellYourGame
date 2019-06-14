import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './navbar/search/search.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent, pathMatch: 'full'
  },
  {path: 'games/:id', component: ProductComponent},
  {path: 'users', loadChildren: './users/users.module#UsersModule'},
  {path: 'product', loadChildren: './product/product.module#ProductModule'},
  {path: 'search', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}


