import { Component, OnInit } from '@angular/core';
import {GamesService} from '../../shared/services/games.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {

  constructor(private gs: GamesService) { }

  ngOnInit() {
  }

}
