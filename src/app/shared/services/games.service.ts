import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Game} from '../models/game';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {User} from '../models/user';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Input} from '@angular/core';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  @Input() game: Game;
  game$: Observable<Game[]>;
  oldGame$: Observable<Game[]>;
  url: any;
  gameUrl: any;
  reader: any;
  user: User;
  gameId: string;
  uploadProgressFile: Observable<number>;
  uploadProgressVideo: Observable<number>;
  task: AngularFireUploadTask;
  gameTitle: any;
  videoUrl;

  startAt: BehaviorSubject<string | null> = new BehaviorSubject('');

  constructor(private db: AngularFirestore,
              private router: Router, private route: ActivatedRoute, private afDb: AngularFireDatabase, private authService: AuthService, private storage: AngularFireStorage
  ) {
  }

  uploadGame(event) {
    const file = event.target.files[0];
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.storage.ref(randomId);
    this.task = ref.put(event.target.files[0]);
    this.uploadProgressFile = this.task.percentageChanges();
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

  uploadVideo(event) {
    const file = event.target.files[0];
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.storage.ref(randomId);
    this.task = ref.put(event.target.files[0]);
    this.uploadProgressVideo = this.task.percentageChanges();
    this.storage.upload('/Game/Videos/' + file.name, file).then(res => {
      res.ref.getDownloadURL().then(url => this.videoUrl = url);
    });
  }

  getUsers() {
    return this.db.collection('users').valueChanges();
    // return this.http.get<any[]>('assets/mocks/users.json').pipe(map(res => res));
  }

  deleteGame(id) {
    if (confirm('Your game will be deleted !')) {
      this.db.collection('game', ref => ref.where('gameId', '==', id))
        .doc(id).delete();
    }
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
      gameId: a,
      // @ts-ignore
      createdAt: new Date(),
      user: this.authService.getCurrentUser(),
      gameTitle: game.gameTitle,
      gameCategory: game.gameCategory,
      gamePrice: game.gamePrice,
      gameDetails: game.gameDetails,
      gameCoverImage: this.url,
      gameFile: this.gameUrl,
      video: this.videoUrl,
    };
    return gameRef.set(gameData, {
      merge: true
    }).then(() => window.alert('Game Created'))
      .catch(error => window.alert(error));
  }
  getAllGames() {
    return this.db.collection('game', ref => ref.orderBy('createdAt', 'desc')).valueChanges();
  }

  getAllNewGames() {
    return this.db.collection('game', ref => ref.orderBy('createdAt', 'desc').limit(8)).valueChanges();
  }

  getAllOldGames() {
    return this.db.collection('game', ref => ref.orderBy('createdAt', 'asc').limit(8)).valueChanges();
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
    return this.db.collection('game', ref => ref.where('gameId', '==', id)).valueChanges();
  }


  editGame(id, gameID) {
    return this.db
      .collection('game', ref => ref.where('gameId', '==', gameID)).doc(gameID)
      .set({
        // @ts-ignore
        createdAt: new Date(),
        user: this.authService.getCurrentUser(),
        gameTitle: id.gameTitle,
        gameCategory: id.gameCategory,
        gamePrice: id.gamePrice,
        gameDetails: id.gameDetails,
        gameCoverImage: this.url,
        gameFile: this.gameUrl,
        video: this.videoUrl,
      }, {merge: true});
  }

  search(searchText) {
    this.startAt.next(searchText.toString().toLowerCase());
  }
  searchGames(start: BehaviorSubject<string>): Observable<any[]> {
    return start.pipe(
      switchMap(startText => {
        const endText = startText + '\uf8ff';
        return this.db
          .collection('game', ref =>
            ref
              .orderBy('gameTitle')
              .startAt(startText)
              .endAt(endText)
          )
          .snapshotChanges()
          .pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(changes => {
              return changes.map(c => {
                return {key: c.payload.doc.id, ...c.payload.doc.data()};
              });
            })
          );
      })
    );
  }
}
