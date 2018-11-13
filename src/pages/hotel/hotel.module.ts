import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelPage } from './hotel';

@NgModule({
  declarations: [
    HotelPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelPage),
  ],
})
export class HotelPageModule {}
