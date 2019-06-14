import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {GamesService} from '../shared/services/games.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  results: any;

  constructor(public authService: AuthService, private  gameService: GamesService) {
  }

  ngOnInit() {

  }


}
