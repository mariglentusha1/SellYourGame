import {ActionReducerMap} from '@ngrx/store';
import {GameStateModel} from './game-state.model';
import {gameReducer} from '../../product/store/game.reducer';
import {userReducer} from '../../users/store/user.reducer';

export const gameReducers: ActionReducerMap<GameStateModel> = {
  games: gameReducer,
  user: userReducer
}
