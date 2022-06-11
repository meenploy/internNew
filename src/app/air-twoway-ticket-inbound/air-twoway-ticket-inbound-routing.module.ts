import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirTwowayTicketInboundPage } from './air-twoway-ticket-inbound.page';

const routes: Routes = [
  {
    path: '',
    component: AirTwowayTicketInboundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirTwowayTicketInboundPageRoutingModule {}
