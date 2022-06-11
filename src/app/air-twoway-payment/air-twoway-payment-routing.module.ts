import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirTwowayPaymentPage } from './air-twoway-payment.page';

const routes: Routes = [
  {
    path: '',
    component: AirTwowayPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirTwowayPaymentPageRoutingModule {}
