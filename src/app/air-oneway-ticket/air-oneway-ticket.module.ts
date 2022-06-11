import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirOnewayTicketPageRoutingModule } from './air-oneway-ticket-routing.module';

import { AirOnewayTicketPage } from './air-oneway-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirOnewayTicketPageRoutingModule
  ],
  declarations: [AirOnewayTicketPage]
})
export class AirOnewayTicketPageModule {}
