import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CafePage } from './cafe';

@NgModule({
  declarations: [
    CafePage,
  ],
  imports: [
    IonicPageModule.forChild(CafePage),
  ],
})
export class CafePageModule {}
