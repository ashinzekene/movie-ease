import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesApi } from "../../providers/movies-api";
/**
 * Generated class for the Movies page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class Movies {
  public popular;
  public topRated;
  public latest;
  public upcoming
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: MoviesApi) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Movies');
    this.getPopular();
    this.getTopRated();
    this.getLatest();
    this.getUpcoming();
  }
  search() {
    this.navCtrl.push("Search")
  }
  getTopRated(){
    this.api.topRated(2).subscribe(res => {
      console.log(res)
      this.topRated = res.results
    })
  }
  getPopular(){
    this.api.popular(2).subscribe(res => {
      console.log(res)
      this.popular = res.results
    })
  }
  getLatest(){
    this.api.latest(2).subscribe(res => {
      console.log(res)
      this.latest = res.results
    })
  }
  getUpcoming(){
    this.api.upcoming(2).subscribe(res => {
      console.log(res)
      this.upcoming = res.results
    })
  }

}
