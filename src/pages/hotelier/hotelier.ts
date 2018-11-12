import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HotelierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotelier',
  templateUrl: 'hotelier.html',
})
export class HotelierPage {
  pages: Array<{title: string, img: string, component: any}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Hôtel', img:'../assets/imgs/bed.png',component: HotelierPage },
      { title: 'Apartement', img:'../assets/imgs/house.png',component: HotelierPage }

    ];
  }
  OpenPage(page){
    this.navCtrl.push(page.component);
   }
  addActor(){
    this.pages.push({ title: 'test', img:'../assets/imgs/house.png',component: HotelierPage });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelierPage');
  }

}
