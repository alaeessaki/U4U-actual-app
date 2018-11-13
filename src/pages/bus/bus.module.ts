import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusPage } from './bus';

@NgModule({
  declarations: [
    BusPage,
  ],
  imports: [
    IonicPageModule.forChild(BusPage),
  ],
})
export class BusPageModule {}
