import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Game} from '../../shared/models/game';
import {AuthService} from '../../shared/services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {GamesService} from '../../shared/services/games.service';
import {Store} from '@ngrx/store';
import {GameStateActions} from '../../shared/store/game-state.actions';
import {AddNewGame} from '../store/game.actions';
import {ActivatedRoute} from '@angular/router';
import {error} from '@angular/compiler/src/util';
import {ISubscription} from 'rxjs-compat/Subscription';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit, OnDestroy {

  title = 'Create new game';
  gameForm: FormGroup;
  // tslint:disable-next-line:new-parens
  gameData: any;
  gameId: string;
  private subscription: ISubscription;
  constructor(public authService: AuthService, private db: AngularFirestore,
              private gameService: GamesService, public fb: FormBuilder, private store: Store<GameStateActions>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.gameOfForm();
    this.gameId = this.route.snapshot.params['id'];
    this.subscription = this.gameService.getById(this.gameId).subscribe(params => {
      this.gameData = params;})
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

  onSubmit1(game) {
    //this.gameService.createGame(game);
    this.store.dispatch(new AddNewGame(game));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
