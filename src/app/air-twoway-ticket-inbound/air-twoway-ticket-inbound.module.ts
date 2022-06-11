import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirTwowayTicketInboundPageRoutingModule } from './air-twoway-ticket-inbound-routing.module';

import { AirTwowayTicketInboundPage } from './air-twoway-ticket-inbound.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirTwowayTicketInboundPageRoutingModule
  ],
  declarations: [AirTwowayTicketInboundPage]
})
export class AirTwowayTicketInboundPageModule {}
