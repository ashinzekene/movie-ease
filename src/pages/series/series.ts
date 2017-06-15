import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeriesStorage } from "../../providers/storage/series-storage";
import { SeriesApi } from "../../providers/api/series-api";

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
  private _pageNo: number =1
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SeriesApi, public store: SeriesStorage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Series');
    this.getPopular();
    this.getTopRated();
    this.getLatest();
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
      //else this.topRated = this.topRated.concat(res.results)
      // this._pageNo++
    });
  }
  getPopular(){
    console.log("getting popular")
    this.store.getPopular().then(res=> {
      this.popular = res.results;
    })
    this.api.popular(this._pageNo).subscribe(res => {
      this.popular = res.results;
      //else this.popular = this.popular.concat(res.results)
      // this._pageNo++
    });
  }
  getLatest(){
    this.store.getLatest().then(res=> {
      this.latest = res.results;
    })
    this.api.latest(this._pageNo).subscribe(res => {
      this.latest = res.results;
      //else this.latest = this.latest.concat(res.results)
      // this._pageNo++
    });
  }
  getUpcoming(){
    this.store.getUpcoming().then(res=> {
      this.upcoming = res.results;
    })
    this.api.upcoming(this._pageNo).subscribe(res => {
      this.upcoming = res.results;
      //else this.upcoming = this.upcoming.concat(res.results)
      // this._pageNo++
    });
  }
  // loadMore() {
  //   let dimension = this.content.getContentDimensions()
  //   let scrollTop = dimension.scrollTop
  //   let scrollHeight = dimension.scrollHeight
  //   let contentHeight = dimension.contentHeight
  //   if(scrollHeight < (scrollTop + 2*contentHeight)) {
  //     console.log(this.content.getContentDimensions())
  //   }
  }