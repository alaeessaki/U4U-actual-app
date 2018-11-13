import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PharmaciesPage } from './pharmacies';

@NgModule({
  declarations: [
    PharmaciesPage,
  ],
  imports: [
    IonicPageModule.forChild(PharmaciesPage),
  ],
})
export class PharmaciesPageModule {}
