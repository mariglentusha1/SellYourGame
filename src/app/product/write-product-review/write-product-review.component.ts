import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {GamesService} from '../../shared/services/games.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {CommentsService} from '../../shared/services/comments.service';
import {Comments} from '../../shared/models/comments';
import {ISubscription} from 'rxjs-compat/Subscription';

@Component({
  selector: 'app-write-product-review',
  templateUrl: './write-product-review.component.html',
  styleUrls: ['./write-product-review.component.scss']
})
export class WriteProductReviewComponent implements OnInit, OnDestroy {
  //@Input() comments: Game[];
  gameId: string;
  commentData: any;
  commentForm: FormGroup;
  private subscription: ISubscription;
  constructor(private gameService: GamesService, private route: ActivatedRoute,
              private authService: AuthService, private db: AngularFirestore,
              private commentService: CommentsService,
              private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.commentFormBuild();

    this.gameId = this.route.snapshot.params['id'];
    this.subscription = this.commentService.getComment(this.gameId).subscribe(res => {
      this.commentData = res;
    });
  }
  deleteComment = data => this.commentService.deleteComment(data);
  commentFormBuild() {
    this.commentForm = this.fb.group({
      comment: new FormControl('', [Validators.maxLength(20)]),
      replay: new FormControl('', [Validators.maxLength(20)]),
    });
  }

  setComment(c) {
    const commentID = this.db.createId();
    const commentRef: AngularFirestoreDocument<any> = this.db.doc(`comment/${commentID}`);


    const commentData: Comments = {
      comment: c.comment,
      gameTitle: this.gameId,
      userName: this.authService.getUserName(),
      userId: this.authService.getCurrentUser(),
      photoUser: this.authService.getProfilePhoto(),
      commentId: commentID,
      // @ts-ignore
      createdAt: new Date()
    };
    return commentRef.set(commentData, {
      merge: true
    });
  }

  editComment(id, gameID) {
    return this.db
      .collection('comment', ref => ref.where('commentId', '==', gameID)).doc(gameID)
      .set({
        // @ts-ignore
        comment: id.comment,
        gameTitle: this.gameId,
        userName: this.authService.getUserName(),
        userId: this.authService.getCurrentUser(),
        photoUser: this.authService.getProfilePhoto(),
        // @ts-ignore
        createdAt: new Date()
      }, {merge: true});
  }

  comment(comment) {
    this.setComment(comment);
  }

  onSubmit() {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
