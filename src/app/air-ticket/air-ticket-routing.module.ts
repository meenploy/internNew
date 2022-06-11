import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirTicketPage } from './air-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: AirTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirTicketPageRoutingModule {}
