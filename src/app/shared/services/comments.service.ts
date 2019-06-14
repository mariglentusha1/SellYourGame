import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Comments} from '../models/comments';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {GamesService} from './games.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  constructor(private db: AngularFirestore, private authService: AuthService) {
  }


  getComment(id) {
    return this.db.collection('comment', ref => ref.where('gameTitle', '==', id)
      .orderBy('createdAt', 'desc')).valueChanges();
  }
  deleteComment(id) {
    if (confirm('Your comment will be deleted!')) {
      this.db.collection('comment', ref => ref.where('commentId', '==', id))
        .doc(id).delete();
    }
  }
  }
