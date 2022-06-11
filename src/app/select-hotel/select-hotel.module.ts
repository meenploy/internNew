import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectHotelPageRoutingModule } from './select-hotel-routing.module';

import { SelectHotelPage } from './select-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectHotelPageRoutingModule
  ],
  declarations: [SelectHotelPage]
})
export class SelectHotelPageModule {}
