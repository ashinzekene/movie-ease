import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SeriesStorage } from "../../providers/storage/series-storage";
import { SeriesApi } from "../../providers/api/series-api";
import 'rxjs/add/operator/toPromise';
import { Serie } from '../../models/Serie';

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class Series {
  public topRated: Serie[];
  public upcoming: Serie[];
  public latest: Serie[];
  public popular: Serie[];
  private _pageNo: number = 1
  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public api: SeriesApi, public store: SeriesStorage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Series');
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
      this.topRated = res;
    })
    this.api.topRated(this._pageNo).subscribe(res => {
      this.topRated = res.results;
    });
  }
  getPopular(){
    this.store.getPopular().then(res=> {
      this.popular = res;
    })
    this.api.popular(this._pageNo).subscribe(res => {
      this.popular = res.results;
    });
  }
  getLatest(){
    this.store.getLatest().then(res=> {
      this.latest = res;
    })
    this.api.latest(this._pageNo).subscribe(res => {
      this.latest = res.results;
    });
  }

  getUpcoming(){
    this.api.upcoming(this._pageNo).subscribe(res => {
      this.upcoming = res.results;
      this._pageNo++
    }, err => {
      this.getOffline()
    });
  }

  getOffline() {
    this.presentToast("You are currently offline, serving you cached content")
    this.store.getUpcoming().then(res=> {
      if (!res[0]) {
        this.presentToast("You are offline and there's nothing in the cache. Guess we'd just have to be looking at ourselves")
      } else {
        this.presentToast("You are currently offline, serving you cached content")
        this.upcoming = res
      }
    })
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
    }).catch(err  => {
      this.presentToast("Can't fetch you more series. There seems to be something wrong with the network 😥📵")
    })
  }

  presentToast(message) {
    this.toastCtrl.create({
      position: "bottom",
      duration: 3000,
      message,
    }).present()
  }
}