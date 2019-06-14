import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GamesService} from '../../shared/services/games.service';
import {AuthService} from '../../shared/services/auth.service';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {CommentsService} from '../../shared/services/comments.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Game} from '../../shared/models/game';
import {Comments} from '../../shared/models/comments';
import {Observable} from 'rxjs';
import {ISubscription} from 'rxjs-compat/Subscription';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  title = 'Details Game';
  gameData: any;
  gameId: string;
  result: any;
  private subscription: ISubscription;
  constructor(private gameService: GamesService, public fb: FormBuilder, private route: ActivatedRoute, private authService: AuthService, private db: AngularFirestore, private commentService: CommentsService) {


  }

  ngOnInit() {
    this.gameId = this.route.snapshot.params['id'];
    this.subscription = this.gameService.getById(this.gameId).subscribe(params => {
      this.gameData = params;
    });

  }

  onSubmit() {

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
