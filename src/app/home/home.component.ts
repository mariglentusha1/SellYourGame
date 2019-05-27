import {Component, OnInit} from '@angular/core';
import {GamesService} from '../shared/services/games.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

export interface Game {
  title?: string;
  description?: string;
  price?: number;
  image?: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  game$: Observable<Game[]>;

  constructor(private gameService: GamesService, private router: Router) {
  }

  ngOnInit() {
    this.game$ = this.gameService.getAllGames();
  }
  getNavigation(link, id) {
    if (id === '') {
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }
}
