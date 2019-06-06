import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductPriceInfoComponent } from './product-price-info/product-price-info.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { WriteProductReviewComponent } from './write-product-review/write-product-review.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [ProductDescriptionComponent, ProductPriceInfoComponent,
    ProductReviewComponent, WriteProductReviewComponent, ProductDetailsComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule, ProductDetailsComponent]
})
export class ProductModule { }
