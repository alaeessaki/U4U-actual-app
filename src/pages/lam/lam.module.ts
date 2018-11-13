import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LamPage } from './lam';

@NgModule({
  declarations: [
    LamPage,
  ],
  imports: [
    IonicPageModule.forChild(LamPage),
  ],
})
export class LamPageModule {}
