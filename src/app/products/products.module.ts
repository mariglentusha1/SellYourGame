import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WriteProductReviewComponent } from './write-product-review/write-product-review.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductPriceInfoComponent } from './product-price-info/product-price-info.component';

@NgModule({
  declarations: [ProductDetailsComponent, WriteProductReviewComponent, ProductReviewComponent, ProductDescriptionComponent, ProductPriceInfoComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
