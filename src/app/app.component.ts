import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Api } from "../providers/api/api";

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

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private api: Api) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.api.getAll();
    });
  }

  openPage(p) {
    this.nav.setRoot(p.component)
  }

}

