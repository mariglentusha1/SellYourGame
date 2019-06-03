import {Component, OnInit} from '@angular/core';
import {GamesService} from '../../../shared/services/games.service';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  constructor(private gameService: GamesService, private authService: AuthService) {}

  ngOnInit() {
    this.gameService.game$ = this.gameService.getAllGames();
  }

}
