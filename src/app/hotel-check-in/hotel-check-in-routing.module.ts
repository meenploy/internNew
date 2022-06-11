import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelCheckInPage } from './hotel-check-in.page';

const routes: Routes = [
  {
    path: '',
    component: HotelCheckInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelCheckInPageRoutingModule {}
