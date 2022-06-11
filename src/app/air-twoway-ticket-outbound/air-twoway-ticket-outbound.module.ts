import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirTwowayTicketOutboundPageRoutingModule } from './air-twoway-ticket-outbound-routing.module';

import { AirTwowayTicketOutboundPage } from './air-twoway-ticket-outbound.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirTwowayTicketOutboundPageRoutingModule
  ],
  declarations: [AirTwowayTicketOutboundPage]
})
export class AirTwowayTicketOutboundPageModule {}
