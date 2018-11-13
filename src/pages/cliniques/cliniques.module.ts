import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CliniquesPage } from './cliniques';

@NgModule({
  declarations: [
    CliniquesPage,
  ],
  imports: [
    IonicPageModule.forChild(CliniquesPage),
  ],
})
export class CliniquesPageModule {}
