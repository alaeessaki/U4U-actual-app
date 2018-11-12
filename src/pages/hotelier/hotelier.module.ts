import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelierPage } from './hotelier';

@NgModule({
  declarations: [
    HotelierPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelierPage),
  ],
})
export class HotelierPageModule {}
