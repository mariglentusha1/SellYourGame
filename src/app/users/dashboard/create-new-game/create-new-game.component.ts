import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {GamesService} from '../../../shared/services/games.service';
import {AuthService} from '../../../shared/services/auth.service';
import {Game} from '../../../shared/Models/game';


@Component({
  selector: 'app-create-new-game',
  templateUrl: './create-new-game.component.html',
  styleUrls: ['./create-new-game.component.scss']
})


export class CreateNewGameComponent implements OnInit {

  gameForm: FormGroup;
  game: Game;

  constructor(public authService: AuthService, private db: AngularFirestore,
              private gameService: GamesService, public fb: FormBuilder) {
  }

  ngOnInit() {
    this.gameOfForm();
  }


  gameOfForm() {
    this.gameForm = this.fb.group({
      gameTitle: new FormControl('', [Validators.required]),
      gameDetails: new FormControl('', [Validators.maxLength(20)]),
      gamePrice: new FormControl('', [Validators.max(500), Validators.min(0), Validators.required]),
      gameCategory: new FormControl(Validators.required),
      gameCoverImage: new FormControl('', Validators.required),
      gameFileUpload: new FormControl('', [Validators.required])
    })
    ;
  }

  onSubmit() {
  }

  onSubmit1(game) {
    this.gameService.createGame(game);
  }
}
