import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BancairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bancaire',
  templateUrl: 'bancaire.html',
})
export class BancairePage {

  pages: Array<{title: string, img: string, component: any}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Banque', img:'../assets/imgs/debit-card.png',component: BancairePage },
      { title: "Agence de transfert d'argent", img:'../assets/imgs/money-transfer.png',component: BancairePage }
    ];
  }
  OpenPage(page){
    this.navCtrl.push(page.component);
   }
  addActor(){
    this.pages.push({ title: 'test', img:'../assets/imgs/debit-card.png',component: BancairePage });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BancairePage');
  }

}
