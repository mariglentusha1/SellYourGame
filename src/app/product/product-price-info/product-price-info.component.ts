import { Component, OnInit } from '@angular/core';
import {GamesService} from '../../shared/services/games.service';

@Component({
  selector: 'app-product-price-info',
  templateUrl: './product-price-info.component.html',
  styleUrls: ['./product-price-info.component.scss']
})
export class ProductPriceInfoComponent implements OnInit {

  constructor(private gs: GamesService) { }

  ngOnInit() {
  }

}
