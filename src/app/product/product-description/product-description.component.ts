import {Component, Input, OnInit} from '@angular/core';
import {GamesService} from '../../shared/services/games.service';



@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  constructor(private gs: GamesService) { }

  ngOnInit() {
  }

}
