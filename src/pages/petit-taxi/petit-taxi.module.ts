import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetitTaxiPage } from './petit-taxi';

@NgModule({
  declarations: [
    PetitTaxiPage,
  ],
  imports: [
    IonicPageModule.forChild(PetitTaxiPage),
  ],
})
export class PetitTaxiPageModule {}
