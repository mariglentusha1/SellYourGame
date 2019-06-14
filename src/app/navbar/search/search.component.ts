import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../shared/models/game';
import {GamesService} from '../../shared/services/games.service';
import {Store} from '@ngrx/store';
import {GameStateActions} from '../../shared/store/game-state.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  game$: Observable<Game[]>;

  constructor(private gameService: GamesService, private store: Store<GameStateActions>) {

  }
  ngOnInit() {
    this.game$ = this.gameService.searchGames(this.gameService.startAt);
    this.gameService.oldGame$ = this.gameService.getAllOldGames()
  }
}
