import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SantéPage } from '../santé/santé';
import { RéstaurationPage } from '../réstauration/réstauration';
import { TransportPage } from '../transport/transport';
import { BancairePage } from '../bancaire/bancaire';
import { HotelierPage } from '../hotelier/hotelier';
import { SocialPage } from '../social/social';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  pages: Array<{title: string, img: string, description: string, component: any}>;


  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Santé', img:'../assets/imgs/health-care.png', description: 'Hopitaux,Pharmacies,Dentistes...' ,component: SantéPage },
      { title: 'Réstauration', img:'../assets/imgs/restaurant.png', description: 'Restaurants, Fast-Food, Café...' ,component: RéstaurationPage },
      { title: 'Transport', img:'../assets/imgs/sports-car.png', description: 'Train, Grand-Taxi, Petit-Taxi...' ,component: TransportPage },
      { title: 'Bancaire', img:'../assets/imgs/payment-method.png', description: 'Banques, Agences, Assurances...' ,component: BancairePage },
      { title: 'Hôtelier', img:'../assets/imgs/bed.png', description: 'Hotels, Appartements,... ' ,component: HotelierPage },
      { title: 'Social', img:'../assets/imgs/group.png', description: 'Associations,...' ,component: SocialPage },

    ];
  }
OpenPage(page){
 this.navCtrl.push(page.component);
}
}
