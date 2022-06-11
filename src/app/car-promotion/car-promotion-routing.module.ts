import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarPromotionPage } from './car-promotion.page';

const routes: Routes = [
  {
    path: '',
    component: CarPromotionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarPromotionPageRoutingModule {}
