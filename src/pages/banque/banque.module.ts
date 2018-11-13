import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BanquePage } from './banque';

@NgModule({
  declarations: [
    BanquePage,
  ],
  imports: [
    IonicPageModule.forChild(BanquePage),
  ],
})
export class BanquePageModule {}
