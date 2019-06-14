import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './effects';
import {gameReducers} from './reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(gameReducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(effects)
  ]
})
export class GameStateModule { }
