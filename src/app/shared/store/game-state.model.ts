
import {State as fromGames} from '../../product/store/game.reducer';
import {State as Users} from '../../users/store/user.reducer';

export interface GameStateModel {
  games: fromGames;
  user: Users;
}
