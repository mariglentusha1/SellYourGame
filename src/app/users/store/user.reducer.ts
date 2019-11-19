import {GameStateActions} from '../../shared/store/game-state.actions';
import {GET_USER, GET_USER_ERROR, GET_USER_SUCCESS} from './user.actions';
import {User} from '../../shared/models/user';

export interface State {
  data: User[];
  selected: User;
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

export function userReducer(state = initialState, action: GameStateActions): State {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        action: GET_USER,
        done: false,
        selected: null,
        error: null
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        done: false,
        selected: null,
        error: action.payload
      };
    default :
      return state;
  }
}

