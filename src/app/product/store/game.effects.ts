import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {GamesService} from '../../shared/services/games.service';
import {
  AddGameError,
  AddGameSuccess,
  AddNewGame,
  CREATE_GAME,
  GET_GAMES,
  GetAllGamesError,
  GetAllGamesSuccess, UPLOAD_GAME, UploadGame
} from './game.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()

export class GameEffects {
  constructor(private action$: Actions, private gameService: GamesService) {
  }

  @Effect()
  createGame$ = this.action$.pipe(ofType(CREATE_GAME),
    map((action: AddNewGame) => action.payload),
    switchMap(newGame => this.gameService.createGame(newGame)),
    map((response) => new AddGameSuccess(response)),
    catchError((err) => [new AddGameError(err)]));


  @Effect()
  getAllGames$: Observable<Action> = this.action$.pipe(ofType(GET_GAMES),
    switchMap(() => this.gameService.getAllGames()),
    map((games) => new GetAllGamesSuccess(games),
      catchError((error) => [new GetAllGamesError(error)]
      )));

  @Effect()
  uploadGame$ = this.action$.pipe(
    ofType(UPLOAD_GAME),
    map((action: UploadGame) => action.payload),

    // @ts-ignore
    switchMap(res => this.gameService.uploadGame(res)),
    map(p => new UploadGame(p)));


}
