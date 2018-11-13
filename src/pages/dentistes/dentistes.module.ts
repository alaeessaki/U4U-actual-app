import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DentistesPage } from './dentistes';

@NgModule({
  declarations: [
    DentistesPage,
  ],
  imports: [
    IonicPageModule.forChild(DentistesPage),
  ],
})
export class DentistesPageModule {}
