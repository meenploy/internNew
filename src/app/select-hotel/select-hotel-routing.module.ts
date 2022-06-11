import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectHotelPage } from './select-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: SelectHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectHotelPageRoutingModule {}
