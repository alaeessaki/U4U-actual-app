import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FastFoodPage } from './fast-food';

@NgModule({
  declarations: [
    FastFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(FastFoodPage),
  ],
})
export class FastFoodPageModule {}
