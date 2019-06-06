import {Component, OnInit} from '@angular/core';
import {GamesService} from '../shared/services/games.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gameService: GamesService) {
  }
  ngOnInit() {
    this.gameService.game$ = this.gameService.getAllGames();
  }

}
