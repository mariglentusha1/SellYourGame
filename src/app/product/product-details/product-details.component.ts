import {Component, OnInit, ViewChild} from '@angular/core';
import {GamesService} from '../../shared/services/games.service';
import {AuthService} from '../../shared/services/auth.service';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {CommentsService} from '../../shared/services/comments.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Game} from '../../shared/Models/game';
import {Comments} from '../../shared/Models/comments';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  gameData: any;
  gameId: string;
  result: any;

  constructor(private gameService: GamesService, public fb: FormBuilder, private route: ActivatedRoute, private authService: AuthService, private db: AngularFirestore, private commentService: CommentsService) {


  }

  ngOnInit() {

    this.gameId = this.route.snapshot.params['id'];
    this.gameService.getById(this.gameId).subscribe(params => {
      this.gameData = params;
    });

  }


  onSubmit() {

  }
}
