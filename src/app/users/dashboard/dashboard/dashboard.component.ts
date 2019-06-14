import {Component, OnInit} from '@angular/core';
import {GamesService} from '../../../shared/services/games.service';
import {AuthService} from '../../../shared/services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {CommentsService} from '../../../shared/services/comments.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  gameId: string;
  commentData: any;

  constructor(private gameService: GamesService, private route: ActivatedRoute,
              private authService: AuthService, private db: AngularFirestore,
              private commentService: CommentsService,
              private fb: FormBuilder) {
  }

  deleteGame = data => this.gameService.deleteGame(data);

  ngOnInit() {
    this.gameService.game$ = this.gameService.getAllGames();

  }

}
