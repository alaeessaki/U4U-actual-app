import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CafePage } from '../cafe/cafe';
import { RestaurantsPage } from '../restaurants/restaurants';
import { FastFoodPage } from '../fast-food/fast-food';
import { ClubDeLoisirsPage } from '../club-de-loisirs/club-de-loisirs';
import { PiscinePage } from '../piscine/piscine';


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
      { title: 'Café', img:'../assets/imgs/café.png',component: CafePage },
      { title: 'Réstaurant', img:'../assets/imgs/resto.png',component: RestaurantsPage },
      { title: 'Fast-Food', img:'../assets/imgs/stand.png',component: FastFoodPage },
      { title: "Club de loisirs", img:'../assets/imgs/loisirs.png',component: ClubDeLoisirsPage },
      { title: 'Piscine', img:'../assets/imgs/swimming-pool.png',component: PiscinePage }

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
