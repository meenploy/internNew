import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarPromotionPageRoutingModule } from './car-promotion-routing.module';

import { CarPromotionPage } from './car-promotion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarPromotionPageRoutingModule
  ],
  declarations: [CarPromotionPage]
})
export class CarPromotionPageModule {}
