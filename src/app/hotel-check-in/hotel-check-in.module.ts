import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelCheckInPageRoutingModule } from './hotel-check-in-routing.module';

import { HotelCheckInPage } from './hotel-check-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelCheckInPageRoutingModule
  ],
  declarations: [HotelCheckInPage]
})
export class HotelCheckInPageModule {}
