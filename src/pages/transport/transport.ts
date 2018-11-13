import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetitTaxiPage } from '../petit-taxi/petit-taxi';
import { GrandTaxiPage } from '../grand-taxi/grand-taxi';
import { TrainPage } from '../train/train';
import { BusPage } from '../bus/bus';
/**
 * Generated class for the TransportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html',
})
export class TransportPage {
    pages: Array<{title: string, img: string, component: any}>;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.pages = [
        { title: 'Petit-Taxi', img:'../assets/imgs/taxi.png',component: PetitTaxiPage },
        { title: 'Grand-taxi', img:'../assets/imgs/taxi (1).png',component: GrandTaxiPage },
        { title: 'Train', img:'../assets/imgs/icon.png',component: TrainPage },
        { title: "Bus", img:'../assets/imgs/bus.png',component: BusPage },
      
      ];
    }
    OpenPage(page){
      this.navCtrl.push(page.component);
     }
    addActor(){
      this.pages.push({ title: 'test', img:'../assets/imgs/bus.png',component: TransportPage });
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad TransportPage');
    }
  
  }
