import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './user.reducer';


export const getGamesState = createFeatureSelector<State>('user');

export const getUser =  createSelector(getGamesState, (state: State) => state.data);


export function getUserData() {
  return createSelector( getGamesState, (state: State) => state.data);
}
