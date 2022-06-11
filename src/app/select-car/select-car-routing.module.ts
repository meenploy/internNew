import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCarPage } from './select-car.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCarPageRoutingModule {}
