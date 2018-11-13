import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrandTaxiPage } from './grand-taxi';

@NgModule({
  declarations: [
    GrandTaxiPage,
  ],
  imports: [
    IonicPageModule.forChild(GrandTaxiPage),
  ],
})
export class GrandTaxiPageModule {}
