import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchQuery: string = '';
  items: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();

  }
  initializeItems() {
    this.items = [ 
      {title:"Café 1" ,component:SearchPage },
      {title:"Café 2" ,component:SearchPage },
      {title:"Café 3" ,component:SearchPage },
      {title:"Café 4" ,component:SearchPage },
      {title:"Café 5" ,component:SearchPage },
      {title:"Café 6" ,component:SearchPage },
      {title:"restaurant 1" ,component:SearchPage },
      {title:"restaurant 2" ,component:SearchPage },
      {title:"restaurant 3" ,component:SearchPage },
      {title:"restaurant 4" ,component:SearchPage },
      {title:"restaurant 5" ,component:SearchPage },
      {title:"restaurant 6" ,component:SearchPage },
      {title:"Hotel 1" ,component:SearchPage },
      {title:"Hotel 2" ,component:SearchPage },
      {title:"Pharmacie 1" ,component:SearchPage },
      {title:"Pharmacie 2" ,component:SearchPage },
      {title:"Pharmacie 3" ,component:SearchPage },
      {title:"Pharmacie 4" ,component:SearchPage },
      {title:"Pharmacie 5" ,component:SearchPage },


    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  itemSelected(item){
    this.navCtrl.push(item.component);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
