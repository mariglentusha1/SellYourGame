import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './game.reducer';


export const getGamesState = createFeatureSelector<State>('games');

export const getAllGames =  createSelector(getGamesState, (state: State) => state.data);

