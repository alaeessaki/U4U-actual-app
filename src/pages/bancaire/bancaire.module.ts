import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BancairePage } from './bancaire';

@NgModule({
  declarations: [
    BancairePage,
  ],
  imports: [
    IonicPageModule.forChild(BancairePage),
  ],
})
export class BancairePageModule {}
