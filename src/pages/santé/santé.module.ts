import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SantéPage } from './santé';

@NgModule({
  declarations: [
    SantéPage,
  ],
  imports: [
    IonicPageModule.forChild(SantéPage),
  ],
})
export class SantéPageModule {}
