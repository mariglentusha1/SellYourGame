import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CreateNewGameComponent} from './create-new-game/create-new-game.component';
import {AuthGuard} from '../shared/guard/auth.guard';
import {EditGameComponent} from './edit-game/edit-game.component';


const routes: Routes = [
  {path: 'details/:id', component: ProductDetailsComponent},
  {path: 'new', component: CreateNewGameComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditGameComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule {
}
