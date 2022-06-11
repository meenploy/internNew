import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirTwowayTicketOutboundPage } from './air-twoway-ticket-outbound.page';

const routes: Routes = [
  {
    path: '',
    component: AirTwowayTicketOutboundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirTwowayTicketOutboundPageRoutingModule {}
