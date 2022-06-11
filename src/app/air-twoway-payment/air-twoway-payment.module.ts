import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirTwowayPaymentPageRoutingModule } from './air-twoway-payment-routing.module';

import { AirTwowayPaymentPage } from './air-twoway-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirTwowayPaymentPageRoutingModule
  ],
  declarations: [AirTwowayPaymentPage]
})
export class AirTwowayPaymentPageModule {}
