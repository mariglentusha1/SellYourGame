import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {GamesService} from '../../shared/services/games.service';
import {AuthService} from '../../shared/services/auth.service';
import {Game} from '../../shared/models/game';
import {Store} from '@ngrx/store';
import {GameStateActions} from '../../shared/store/game-state.actions';
import {Platform} from '@angular/cdk/platform';
import {AddNewGame} from '../store/game.actions';

@Component({
  selector: 'app-create-new-game',
  templateUrl: './create-new-game.component.html',
  styleUrls: ['./create-new-game.component.scss']
})


export class CreateNewGameComponent implements OnInit {
  title = 'Create new game';
  gameForm: FormGroup;

  constructor(public authService: AuthService, private db: AngularFirestore,
              private gameService: GamesService, public fb: FormBuilder, private store: Store<GameStateActions>) {
  }

  ngOnInit() {
    this.gameOfForm();
  }


  gameOfForm() {
    this.gameForm = this.fb.group({
      gameTitle: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      gameDetails: new FormControl('', [Validators.maxLength(5000)]),
      gamePrice: new FormControl('', [Validators.max(1000), Validators.min(0), Validators.required]),
      gameCategory: new FormControl(Validators.required),
      gameCoverImage: new FormControl('', Validators.required),
      gameFileUpload: new FormControl('', [Validators.required]),
      gameVideoUpload: new FormControl('', [Validators.required])
    })
    ;
  }

  onSubmit() {
    //this.store.dispatch(new AddNewGame(game));
  }
z
  onSubmit1(game) {
    //this.gameService.createGame(game);
    this.store.dispatch(new AddNewGame(game));
  }
}
