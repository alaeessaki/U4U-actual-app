import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppartementPage } from './appartement';

@NgModule({
  declarations: [
    AppartementPage,
  ],
  imports: [
    IonicPageModule.forChild(AppartementPage),
  ],
})
export class AppartementPageModule {}
