import {ActionReducerMap} from '@ngrx/store';
import {GameStateModel} from './game-state.model';
import {gameReducer} from '../../product/store/game.reducer';

export const gameReducers: ActionReducerMap<GameStateModel> = {
  games: gameReducer
}
