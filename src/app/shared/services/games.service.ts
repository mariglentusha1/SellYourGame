import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Game} from '../Models/game';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {User} from '../Models/user';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Input} from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  @Input() game: Game;
  game$: Observable<Game[]>;
  url: any;
  gameUrl: any;
  reader: any;
  user: User;
  gameId: string;
  uploadProgress: Observable<number>;
  task: AngularFireUploadTask;
  gameTitle: any;

  constructor(private db: AngularFirestore,
              private router: Router, private route: ActivatedRoute, private afDb: AngularFireDatabase, private authService: AuthService, private storage: AngularFireStorage
  ) {
  }

  uploadGame(event) {
    const file = event.target.files[0];
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.storage.ref(randomId);
    this.task = ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.storage.upload('/Game/Games/' + file.name, file).then(res => {
      res.ref.getDownloadURL().then(url => this.gameUrl = url);
    });
  }

  upload(event: any) {
    const file = event.target.files[0];
    this.storage.upload('/Game/Img' + file.name, file).then(rst => {
      rst.ref.getDownloadURL().then(url => this.url = url);
    });
    if (event.target.files && event.target.files[0]) {
      this.reader = new FileReader();

      this.reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      this.reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

  deleteGame(id) {
    this.db.collection('game', ref => ref.where('gameTitle', '==', id))
      .doc(id).delete();
  }

 /* editGame(id) {
    return this.db.collection('game', ref => ref.where('gameTitle', '==', id))
      .doc(id).set( {merge: true});
  }*/

  idGenerator() {
    return this.gameId = this.db.createId();
  }

  createGame(game) {
    const a = this.idGenerator();
    const gameRef: AngularFirestoreDocument<any> = this.db.doc(`game/${a}`);

    const gameData: Game = {
      $gameId: a,
      // @ts-ignore
      createdAt: new Date(),
      user: this.authService.getCurrentUser(),
      gameTitle: game.gameTitle,
      gameCategory: game.gameCategory,
      gamePrice: game.gamePrice,
      gameDetails: game.gameDetails,
      gameCoverImage: this.url,
      gameFile: this.gameUrl,
    };
    return gameRef.set(gameData, {
      merge: true
    });
  }

  getAllGames() {
    return this.db.collection('game', ref => ref.orderBy('createdAt', 'desc')).valueChanges();
  }

  getNavigation(link, id) {
    if (id === '') {
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }

  /*
    getGameId(): string {
      this.db.collection('game').get().subscribe((snapshot) => {
        snapshot.forEach(doc => {
           = doc.id;
          //this.id.push(this.a);
        });
      });
      console.log(this.id);
      return this.a;
    }
  */
  getGameTitle() {

  }

  getById(id) {
    return this.db.collection('game', ref => ref.where('gameTitle', '==', id)).valueChanges();
  }
}
