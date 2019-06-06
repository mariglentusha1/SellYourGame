import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Comments} from '../Models/comments';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {GamesService} from './games.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  constructor(private db: AngularFirestore) {
  }


  getComment(id) {
    return this.db.collection('comment', ref => ref.where('gameTitle', '==', id)
      .orderBy('createdAt', 'desc')).valueChanges();
  }
}
