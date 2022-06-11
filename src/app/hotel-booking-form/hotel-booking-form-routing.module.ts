import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelBookingFormPage } from './hotel-booking-form.page';

const routes: Routes = [
  {
    path: '',
    component: HotelBookingFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelBookingFormPageRoutingModule {}
