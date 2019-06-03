import {Injectable,} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Game} from '../Models/game';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {User} from '../Models/user';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  game$: Observable<Game[]>;
  url: any;
  gameUrl: any;
  reader: any;
  user: User;
  gameId: string;
  id: any = [];
  navId: any;
  constructor(private db: AngularFirestore,
              private router: Router, private route: ActivatedRoute, private afDb: AngularFireDatabase, private authService: AuthService, private storage: AngularFireStorage
  ) {

  }
uploadGame(event){
    const file = event.target.files[0];
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
  deleteGame(game){
    return this.db.collection('game').doc(game.payload.doc.id).delete();

  }

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
      gameFile: this.gameUrl
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
    this.navId = id;
    return this.navId;
  }
  getGameId(gid: string): string {
    this.db.collection('game').get().subscribe((snapshot) => {
      snapshot.forEach(doc => {
        gid = doc.id;
        this.id.push(gid);
      });
    });
    console.log(this.id);
    return this.id;
  }

}
