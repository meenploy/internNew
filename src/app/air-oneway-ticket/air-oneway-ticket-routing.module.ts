import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirOnewayTicketPage } from './air-oneway-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: AirOnewayTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirOnewayTicketPageRoutingModule {}
