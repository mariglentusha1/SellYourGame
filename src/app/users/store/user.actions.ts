import {Action} from '@ngrx/store';
import {User} from '../../shared/models/user';

export const GET_USER = '[Get User] Get User';
export const GET_USER_SUCCESS = '[Get User] Get User Success';
export const GET_USER_ERROR = '[Get User] Get User Error';


export class GetUser implements Action {
  readonly type = GET_USER;

}

export class GetUserSucces implements Action {
  readonly type = GET_USER_SUCCESS;

  constructor(public payload: User) {
  }

}

export class GetUserErr implements Action {
  readonly type = GET_USER_ERROR;

  constructor(private payload: Error) {
  }
}
