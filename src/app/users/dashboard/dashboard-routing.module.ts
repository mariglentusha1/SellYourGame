import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateNewGameComponent} from './create-new-game/create-new-game.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
  },
  {path: 'new', component: CreateNewGameComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
