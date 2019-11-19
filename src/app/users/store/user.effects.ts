import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {GamesService} from '../../shared/services/games.service';
import { GET_USER, GetUserErr, GetUserSucces
} from './user.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthService} from '../../shared/services/auth.service';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()

export class UserEffects {
  constructor(private action$: Actions, private authService: AuthService) {
  }

  @Effect()
  getUser$: Observable<Action> = this.action$.pipe(ofType(GET_USER),
    switchMap(() => this.authService.getCurrentUser()),
    map((user) => new GetUserSucces(user)),
    catchError((error) => [new GetUserErr(error)]));
}
