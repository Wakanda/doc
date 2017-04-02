import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Wakanda } from './wakanda.service';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html',
  providers: [Wakanda]
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform, public wakanda: Wakanda) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
     
  }
}
