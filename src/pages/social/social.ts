import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  pages: Array<{title: string, img: string, component: any}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Association', img:'../assets/imgs/teamwork.png',component: SocialPage }
    ];
  }
  OpenPage(page){
    this.navCtrl.push(page.component);
   }
  addActor(){
    this.pages.push({ title: 'test', img:'../assets/imgs/teamwork.png',component: SocialPage });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialPage');
  }

}