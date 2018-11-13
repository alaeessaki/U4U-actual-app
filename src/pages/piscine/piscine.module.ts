import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PiscinePage } from './piscine';

@NgModule({
  declarations: [
    PiscinePage,
  ],
  imports: [
    IonicPageModule.forChild(PiscinePage),
  ],
})
export class PiscinePageModule {}
