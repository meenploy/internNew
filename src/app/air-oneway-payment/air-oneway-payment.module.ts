import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirOnewayPaymentPageRoutingModule } from './air-oneway-payment-routing.module';

import { AirOnewayPaymentPage } from './air-oneway-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirOnewayPaymentPageRoutingModule
  ],
  declarations: [AirOnewayPaymentPage]
})
export class AirOnewayPaymentPageModule {}
