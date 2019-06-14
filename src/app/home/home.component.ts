import { Component, OnInit} from '@angular/core';
import {GamesService} from '../shared/services/games.service';
import {Store} from '@ngrx/store';
import {GameStateActions} from '../shared/store/game-state.actions';
import {getAllGames} from '../product/store/game.selector';
import {Observable} from 'rxjs';
import {Game} from '../shared/models/game';
import {GetAllGames} from '../product/store/game.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private gameService: GamesService, private store: Store<GameStateActions>) {

  }
  ngOnInit() {
    this.gameService.game$ = this.gameService.getAllNewGames();
    this.gameService.oldGame$ = this.gameService.getAllOldGames()
  }

}
