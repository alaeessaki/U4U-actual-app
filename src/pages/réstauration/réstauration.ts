import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RéstaurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-réstauration',
  templateUrl: 'réstauration.html',
})
export class RéstaurationPage {
  pages: Array<{title: string, img: string, component: any}>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Café', img:'../assets/imgs/café.png',component: RéstaurationPage },
      { title: 'Réstaurant', img:'../assets/imgs/resto.png',component: RéstaurationPage },
      { title: 'Fast-Food', img:'../assets/imgs/stand.png',component: RéstaurationPage },
      { title: "Club de loisirs", img:'../assets/imgs/loisirs.png',component: RéstaurationPage },
      { title: 'Piscine', img:'../assets/imgs/swimming-pool.png',component: RéstaurationPage }

    ];
  }
  OpenPage(page){
    this.navCtrl.push(page.component);
   }
  addActor(){
    this.pages.push({ title: 'test', img:'../assets/imgs/café.png',component: RéstaurationPage });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RéstaurationPage');
  }

}
