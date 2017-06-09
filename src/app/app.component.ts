import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from "../providers/storage";
import { Api } from "../providers/api";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = "Home";
  pages = [
    {name: "Home", component: "Home"},
    {name: "Movies", component: "Movies"},
    {name: "Series", component: "Series"},
    {name: "Actors", component: "Actors"}
  ]

  openPage(p) {
    this.nav.setRoot(p.component)
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public api: Api) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.api.getAll();
    });
  }
}
