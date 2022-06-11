import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourFormPageRoutingModule } from './tour-form-routing.module';

import { TourFormPage } from './tour-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourFormPageRoutingModule
  ],
  declarations: [TourFormPage]
})
export class TourFormPageModule {}
