import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
        { title: 'Petit-Taxi', img:'../assets/imgs/taxi.png',component: TransportPage },
        { title: 'Grand-taxi', img:'../assets/imgs/taxi (1).png',component: TransportPage },
        { title: 'Train', img:'../assets/imgs/icon.png',component: TransportPage },
        { title: "Bus", img:'../assets/imgs/bus.png',component: TransportPage },
      
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
