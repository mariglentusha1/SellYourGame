import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Game} from '../../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private db: AngularFirestore) {
  }

  getAllGames() {
    return this.db.collection('Game', ref => ref.orderBy('createdAt', 'desc')).valueChanges();
  }
}
