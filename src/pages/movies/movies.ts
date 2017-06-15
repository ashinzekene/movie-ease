import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { MoviesApi } from "../../providers/api/movies-api";
import { MoviesStorage } from "../../providers/storage/movies-storage";


@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class Movies {
  @ViewChild(Content) content: Content;
  public popular;
  public topRated;
  public latest;
  public upcoming
  public smallScreen:boolean
  private _pageNo: number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: MoviesApi, public store: MoviesStorage) {}

  goToDetailsPage(movie) {
    this.navCtrl.push("MovieDetails", {id: movie.id, data: movie})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Movies');
    this.getPopular();
    this.getTopRated();
    this.getLatest();
    this.getUpcoming();
     if(this.content.getContentDimensions().contentWidth < 415) {
      this.smallScreen = true
      console.log(this.content.getContentDimensions().contentWidth)
    } else {
      this.smallScreen=false
      console.log(this.content.getContentDimensions().contentWidth)
    }
  }
  search() {
    this.navCtrl.push("Search", {type: "movies"})
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
  loadMore() {
    let dimension = this.content.getContentDimensions()
    let scrollTop = dimension.scrollTop
    let scrollHeight = dimension.scrollHeight
    let contentHeight = dimension.contentHeight
    if(scrollHeight < (scrollTop + 2*contentHeight)) {
      console.log(this.content.getContentDimensions())
    }
  }

}
