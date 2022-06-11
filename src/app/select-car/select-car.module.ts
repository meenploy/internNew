import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCarPageRoutingModule } from './select-car-routing.module';

import { SelectCarPage } from './select-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCarPageRoutingModule
  ],
  declarations: [SelectCarPage]
})
export class SelectCarPageModule {}
