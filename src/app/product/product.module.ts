import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductDescriptionComponent} from './product-description/product-description.component';
import {ProductPriceInfoComponent} from './product-price-info/product-price-info.component';
import {ProductReviewComponent} from './product-review/product-review.component';
import {WriteProductReviewComponent} from './write-product-review/write-product-review.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductComponent} from './product.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateNewGameComponent} from './create-new-game/create-new-game.component';
import {MatProgressBar} from '@angular/material';
import { EditGameComponent } from './edit-game/edit-game.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [ProductDescriptionComponent, ProductPriceInfoComponent,
    ProductReviewComponent,
    WriteProductReviewComponent,
    ProductDetailsComponent,
    ProductComponent,
    CreateNewGameComponent,
    //MatProgressBar,
    EditGameComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [RouterModule, ProductDetailsComponent]
})
export class ProductModule {
}
