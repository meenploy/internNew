import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirTicketPageRoutingModule } from './air-ticket-routing.module';

import { AirTicketPage } from './air-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirTicketPageRoutingModule
  ],
  declarations: [AirTicketPage]
})
export class AirTicketPageModule {}
