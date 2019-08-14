import {Game} from '../../shared/models/game';
import * as gameActions from './game.actions';
import {GameStateActions} from '../../shared/store/game-state.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import { UPLOAD_GAME} from './game.actions';

export interface State {
  data: Game[];
  selected: Game;
  action: string;
  done: boolean;
  error: Error;
}

const initialState: State = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
};

export function gameReducer(state = initialState, action: GameStateActions): State {
  switch (action.type) {
    case gameActions.CREATE_GAME:
      return {
        ...state,
        action: gameActions.CREATE_GAME,
        done: false,
        error: null
      };
    case gameActions.CREATE_GAME_SUCCESS:
      return {
        action: '',
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null
      };
    case gameActions.CREATE_GAME_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };
    case gameActions.GET_GAMES:
      return {
        ...state,
        action: gameActions.GET_GAMES,
        done: false,
        selected: null,
        error: null
      };
    case gameActions.GET_GAMES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null,
      };
    case gameActions.GET_GAMES_ERROR:
      return {
        ...state,
        done: false,
        selected: null,
        error: action.payload
      };
    case UPLOAD_GAME:
      return {
        ...state,
        data: action.payload,
        done: true,
      };
    default:
      return state;
  }
}

