import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesApi } from "../../providers/api/movies-api";
import { MovieDetails } from "../movie-details/movie-details";
import { MoviesStorage } from "../../providers/storage/movies-storage";
import 'rxjs/add/operator/toPromise'

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class Movies {
  private popular;
  private topRated;
  private latest;
  private upcoming
  private _pageNo: number = 2;
  constructor(private navCtrl: NavController, private navParams: NavParams, private api: MoviesApi, private store: MoviesStorage) {
    this.getUpcoming()
  }

  goToDetailsPage(movie) {
    this.navCtrl.push(MovieDetails, {id: movie.id, data: movie})
  }
  search() {
    this.navCtrl.push("Search", {type: "movies"})
  }
  getTopRated(){
    this.store.getTopRated().then(res=> {
      this.topRated = res.results;
    })
    this.api.topRated(this._pageNo).subscribe(res => {
      if(res.results) this.topRated = res.results;
    });
  }
  getPopular(){
    console.log("getting popular")
    this.store.getPopular().then(res=> {
      this.popular = res.results;
    })
    this.api.popular(this._pageNo).subscribe(res => {
      if(res.results) this.popular = res.results;
    });
  }
  getLatest(){
    this.store.getLatest().then(res=> {
      this.latest = res.results;
    })
    this.api.latest(this._pageNo).subscribe(res => {
      if(res.results) this.latest = res.results;
    });
  }
  getUpcoming(){
    this.api.upcoming().subscribe(res => {
      console.log("recieved upcoming")
      this.store.setLatest(res)
      this.upcoming = res.results;
    }, err=> {
      this.loadOffline()
    });
  }
  loadOffline() {
    this.store.getUpcoming().then(res=> {
      this.upcoming = res.results;
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
    })
  }
}
