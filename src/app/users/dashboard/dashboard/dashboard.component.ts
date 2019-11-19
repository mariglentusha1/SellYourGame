import {Component, OnInit} from '@angular/core';
import {GamesService} from '../../../shared/services/games.service';
import {AuthService} from '../../../shared/services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {CommentsService} from '../../../shared/services/comments.service';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {GameStateActions} from '../../../shared/store/game-state.actions';
import {GetUser} from '../../store/user.actions';
import {Observable} from 'rxjs';
import {getUser, getUserData} from '../../store/user.selector';
import {User} from '../../../shared/models/user';
import {GameStateModel} from '../../../shared/store/game-state.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  gameId: string;
  commentData: any;
  // tslint:disable-next-line:ban-types
  user: any;
  res: string;

  constructor(private gameService: GamesService, private route: ActivatedRoute,
              private authService: AuthService, private db: AngularFirestore,
              private commentService: CommentsService,
              private fb: FormBuilder, private store: Store<GameStateModel>) {

  }

  deleteGame = data => this.gameService.deleteGame(data);

  ngOnInit() {

    this.gameService.game$ = this.gameService.getAllGames();
    this.user = this.getUserId();
    this.store.select(getUserData()).subscribe(res => {
      this.user = [];
      this.user.push(res);
      console.log(this.user);
      this.res = this.user.toString().replaceAll('[\\]\\[, ]', '');
      console.log(res);
    });

  }

  getUserId() {
    this.store.dispatch(new GetUser());
  }
}
