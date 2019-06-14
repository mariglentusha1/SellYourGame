import {Action} from '@ngrx/store';
import {Game} from '../../shared/models/game';

export const CREATE_GAME = '[Create Game] Create A New Game';
export const CREATE_GAME_SUCCESS = '[Create Game] Game Created';
export const CREATE_GAME_ERROR = '[Create Game] Game Not Created';
export const GET_GAMES = '[Get All Games] Get All Games';
export const GET_GAMES_SUCCESS = '[Get All Games] Get All Games Success';
export const GET_GAMES_ERROR = '[Get All Games] Get All Games Error';

export const UPLOAD_GAME = '[Upload] Upload File';

export class UploadGame {
  readonly type = UPLOAD_GAME;

  constructor(public payload: any) {
  }

}
export class AddNewGame implements Action {
  readonly type = CREATE_GAME;

  constructor(public payload: Game) {
  }
}

export class AddGameSuccess implements Action {
  readonly type = CREATE_GAME_SUCCESS;

  constructor(public payload: any) {
  }
}

export class AddGameError implements Action {
  readonly type = CREATE_GAME_ERROR;

  constructor(public payload: Error) {
  }
}

export class GetAllGames implements Action {
  readonly type = GET_GAMES;
}

export class GetAllGamesSuccess implements Action {
  readonly type = GET_GAMES_SUCCESS;

  constructor(public payload: Game[]) {
  }
}

export class GetAllGamesError implements Action {
  readonly type = GET_GAMES_ERROR;

  constructor(public payload: Error) {
  }
}
