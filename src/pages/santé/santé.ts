import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SantéPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-santé',
  templateUrl: 'santé.html',
})
export class SantéPage {
  pages: Array<{title: string, img: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Hopital', img:'../assets/imgs/hospital-buildings.png',component: SantéPage },
      { title: 'Clinique', img:'../assets/imgs/medicine.png',component: SantéPage },
      { title: 'Pharmacie', img:'../assets/imgs/medicine.png',component: SantéPage },
      { title: "Laboratoire d'analyse médicale", img:'../assets/imgs/blood-sample.png',component: SantéPage },
      { title: 'Dentiste', img:'../assets/imgs/tooth.png',component: SantéPage }

    ];
  }
  OpenPage(page){
    this.navCtrl.push(page.component);
   }
  addActor(){
    this.pages.push({ title: 'test', img:'../assets/imgs/health-care.png',component: SantéPage });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SantéPage');
  }

}
