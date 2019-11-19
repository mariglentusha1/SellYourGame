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
  show: boolean = false;
  searchBoxSize: any;

  constructor(public authService: AuthService, private  gameService: GamesService) {
  }

  ngOnInit() {

  }

  toggleCollapse() {
    this.show = !this.show;
  }

  searchBoxSetSize() {
    this.searchBoxSize = document.getElementById('searchBox').getAttribute('size');

  }

}
