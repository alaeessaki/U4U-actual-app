import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CliniquesPage } from '../cliniques/cliniques';
import { DentistesPage } from '../dentistes/dentistes';
import { HopitauxPage } from '../hopitaux/hopitaux';
import { LamPage } from '../lam/lam';
import { PharmaciesPage } from '../pharmacies/pharmacies';


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
      { title: 'Hopital', img:'../assets/imgs/hospital-buildings.png',component: HopitauxPage },
      { title: 'Clinique', img:'../assets/imgs/bed (1).png',component: CliniquesPage },
      { title: 'Pharmacie', img:'../assets/imgs/medicine.png',component: PharmaciesPage },
      { title: "Laboratoire d'analyse médicale", img:'../assets/imgs/blood-sample.png',component: LamPage },
      { title: 'Dentiste', img:'../assets/imgs/tooth.png',component: DentistesPage }

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
