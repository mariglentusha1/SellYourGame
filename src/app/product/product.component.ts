import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesService} from '../shared/services/games.service';
import {Store} from '@ngrx/store';
import {GameStateActions} from '../shared/store/game-state.actions';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {ISubscription} from 'rxjs-compat/Subscription';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  gameData: any;
  gameId: string;
  private subscription: ISubscription;
  constructor(private gameService: GamesService, private db: AngularFirestore, private store: Store<GameStateActions>, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.gameId = this.route.snapshot.params['id'];
    this.gameService.game$ = this.gameService.getAllGames();
    this.gameService.oldGame$ = this.gameService.getAllOldGames();
    this.subscription = this.getAllGames().subscribe(res => {
      this.gameData = res;
      console.log(this.gameData)
    });
  }

  getAllGames() {
    switch (this.gameId) {
      case 'new':
        return this.db.collection('game', ref => ref.orderBy('createdAt', 'desc')).valueChanges();
      case 'topgames':
        return this.db.collection('game', ref => ref.orderBy('gameTitle', 'asc')).valueChanges();
      case 'recommended':
        return this.db.collection('game', ref => ref.orderBy('createdAt', 'asc')).valueChanges();

    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
