import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
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

  moviePages = [
    {name: "Top Movies", component: ""},
    {name: "Upcoming Movies", component: ""},
    {name: "Popular Movies", component: ""},
    {name: "Latest Movies", component: ""},
  ]

  seriePages = [
    {name: "Top Series", component: ""},
    {name: "Upcoming Series", component: ""},
    {name: "Popular Series", component: ""},
    {name: "Latest Series", component: ""},
  ]

  actorPages = [
    {name: "Top Actors", component: ""}
  ]
  openPage(p) {
    this.nav.setRoot(p.component)
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private api: Api) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.api.getAll();
      this.menuCtrl.enable(true, 'series')
      this.menuCtrl.enable(false, 'movies')
    });
  }
}
