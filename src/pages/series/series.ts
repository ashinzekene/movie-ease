import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeriesStorage } from "../../providers/storage/series-storage";
import { SeriesApi } from "../../providers/api/series-api";
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class Series {
  public topRated;
  public upcoming;
  public latest;
  public popular;
  private _pageNo: number = 1
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SeriesApi, public store: SeriesStorage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Series');
    // this.getPopular();
    // this.getTopRated();
    // this.getLatest();
    this.getUpcoming();
  }
  goToDetailsPage(serie) {
    this.navCtrl.push("SerieDetails", {id: serie.id, data: serie})
  }
  search() {
    this.navCtrl.push("Search", {type: "series"})
  }
  getTopRated(){
    this.store.getTopRated().then(res=> {
      this.topRated = res.results;
    })
    this.api.topRated(this._pageNo).subscribe(res => {
      this.topRated = res.results;
    });
  }
  getPopular(){
    console.log("getting popular")
    this.store.getPopular().then(res=> {
      this.popular = res.results;
    })
    this.api.popular(this._pageNo).subscribe(res => {
      this.popular = res.results;
    });
  }
  getLatest(){
    this.store.getLatest().then(res=> {
      this.latest = res.results;
    })
    this.api.latest(this._pageNo).subscribe(res => {
      this.latest = res.results;
    });
  }
  getUpcoming(){
    this.store.getUpcoming().then(res=> {
      this.upcoming = res.results;
    })
    this.api.upcoming(this._pageNo).subscribe(res => {
      this.upcoming = res.results;
      this._pageNo++
    });
  }
  doInfinite(e) {
    console.log("async operation started")
    this.api.upcoming(this._pageNo).toPromise().then( res => {
      if(res.results) {
        this.upcoming = this.upcoming.concat(res.results)
        this._pageNo++
        e.complete()
        console.log("async operation ended")
      }
    })
  }
}