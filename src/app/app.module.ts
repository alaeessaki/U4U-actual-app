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
    SearchPage
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
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
