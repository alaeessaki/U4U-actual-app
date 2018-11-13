import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SantéPage } from '../santé/santé';
import { RéstaurationPage } from '../réstauration/réstauration';
import { TransportPage } from '../transport/transport';
import { BancairePage } from '../bancaire/bancaire';
import { HotelierPage } from '../hotelier/hotelier';
import { SocialPage } from '../social/social';
import { SearchPage } from '../search/search';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  pages: Array<{title: string, img: string, description: string, component: any}>;
  public isSearchbarOpened = false;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Santé', img:'../assets/imgs/health-care.png', description: 'Hopitaux,Pharmacies,Dentistes...' ,component: SantéPage },
      { title: 'Réstauration', img:'../assets/imgs/restaurant.png', description: 'Restaurants, Fast-Food, Café...' ,component: RéstaurationPage },
      { title: 'Transport', img:'../assets/imgs/sports-car.png', description: 'Train, Grand-Taxi, Petit-Taxi...' ,component: TransportPage },
      { title: 'Finance', img:'../assets/imgs/payment-method.png', description: 'Banques, Agences, Assurances...' ,component: BancairePage },
      { title: 'Hôtelier', img:'../assets/imgs/bed.png', description: 'Hotels, Appartements,... ' ,component: HotelierPage },
      { title: 'Social', img:'../assets/imgs/group.png', description: 'Associations,...' ,component: SocialPage },

    ];
  }
  onSearch(event){
    console.log(event.target.value);
    }
OpenPage(page){
 this.navCtrl.push(page.component);
}
goToSearch(){
  this.navCtrl.push(SearchPage,{},{animate:false});
}
}
