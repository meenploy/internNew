import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelBookingFormPageRoutingModule } from './hotel-booking-form-routing.module';

import { HotelBookingFormPage } from './hotel-booking-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelBookingFormPageRoutingModule
  ],
  declarations: [HotelBookingFormPage]
})
export class HotelBookingFormPageModule {}
