import {Component, Input, OnInit} from '@angular/core';
import {GamesService} from '../../shared/services/games.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {CommentsService} from '../../shared/services/comments.service';
import {Comments} from '../../shared/Models/comments';
import {Game} from '../../shared/Models/game';

@Component({
  selector: 'app-write-product-review',
  templateUrl: './write-product-review.component.html',
  styleUrls: ['./write-product-review.component.scss']
})
export class WriteProductReviewComponent implements OnInit {
  @Input() comments: Game[];
  gameId: string;
  commentData: any;
  commentForm: FormGroup;
  constructor(private gameService: GamesService, private route: ActivatedRoute,
              private authService: AuthService, private db: AngularFirestore,
              private commentService: CommentsService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.commentFormBuild();
    this.gameId = this.route.snapshot.params['id'];
    this.commentService.getComment(this.gameId).subscribe(res => {
      this.commentData = res;
    });
  }
  commentFormBuild() {
    this.commentForm = this.fb.group({
      comment: new FormControl('', [Validators.maxLength(20)]),
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
      commentId: commentID,
      // @ts-ignore
      createdAt: new Date()
    };
    return commentRef.set(commentData, {
      merge: true
    });
  }

  comment(comment) {
    this.setComment(comment);
  }
onSubmit(){
}

}
