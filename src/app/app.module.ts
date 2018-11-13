import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SantéPage } from '../pages/santé/santé';
import { RéstaurationPage } from '../pages/réstauration/réstauration';
import { TransportPage } from '../pages/transport/transport';
import { BancairePage } from '../pages/bancaire/bancaire';
import { HotelierPage } from '../pages/hotelier/hotelier';
import { SocialPage } from '../pages/social/social';
import { SearchPage } from '../pages/search/search';
import { CliniquesPage } from '../pages/cliniques/cliniques';
import { DentistesPage } from '../pages/dentistes/dentistes';
import { HopitauxPage } from '../pages/hopitaux/hopitaux';
import { LamPage } from '../pages/lam/lam';
import { PharmaciesPage } from '../pages/pharmacies/pharmacies';
import { CafePage } from '../pages/cafe/cafe';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { FastFoodPage } from '../pages/fast-food/fast-food';
import { ClubDeLoisirsPage } from '../pages/club-de-loisirs/club-de-loisirs';
import { PiscinePage } from '../pages/piscine/piscine';
import { PetitTaxiPage } from '../pages/petit-taxi/petit-taxi';
import { GrandTaxiPage } from '../pages/grand-taxi/grand-taxi';
import { TrainPage } from '../pages/train/train';
import { BusPage } from '../pages/bus/bus';
import { AtdaPage } from '../pages/atda/atda';
import { BanquePage } from '../pages/banque/banque';
import { AssociationsPage } from '../pages/associations/associations';
import { HotelPage } from '../pages/hotel/hotel';
import { AppartementPage } from '../pages/appartement/appartement';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SantéPage,
    RéstaurationPage,
    TransportPage,
    BancairePage,
    HotelierPage,
    SocialPage,
    SearchPage,
    CliniquesPage,
    DentistesPage,
    HopitauxPage,
    LamPage,
    PharmaciesPage,
    CafePage,
    RestaurantsPage,
    FastFoodPage,
    ClubDeLoisirsPage,
    PiscinePage,
    PetitTaxiPage,
    GrandTaxiPage,
    TrainPage,
    BusPage,
    AtdaPage,
    BanquePage,
    AssociationsPage,
    HotelPage,
    AppartementPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SantéPage,
    RéstaurationPage,
    TransportPage,
    BancairePage,
    HotelierPage,
    SocialPage,
    SearchPage,
    CliniquesPage,
    DentistesPage,
    HopitauxPage,
    LamPage,
    PharmaciesPage,
    CafePage,
    RestaurantsPage,
    FastFoodPage,
    ClubDeLoisirsPage,
    PiscinePage,
    PetitTaxiPage,
    GrandTaxiPage,
    TrainPage,
    BusPage,
    AtdaPage,
    BanquePage,
    AssociationsPage,
    HotelPage,
    AppartementPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
