import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { MoviesApi } from "../../providers/api/movies-api";
import { MoviesStorage } from "../../providers/storage/movies-storage";
import 'rxjs/add/operator/toPromise'
import { Movie } from '../../models/Movie';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class Movies {
  private upcoming: Movie[]
  private _pageNo: number = 2;
  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private api: MoviesApi, private store: MoviesStorage) {
    this.getUpcoming()
  }

  goToDetailsPage(movie) {
    this.navCtrl.push("MovieDetails", {id: movie.id, data: movie})
  }
  search() {
    this.navCtrl.push("Search", {type: "movies"})
  }
  // getTopRated(){
  //   this.store.getTopRated().then(res=> {
  //     this.topRated = res;
  //   })

  //   this.api.topRated(this._pageNo).subscribe(res => {
  //     if(res.results) this.topRated = res.results;
  //   });
  // }

  // getPopular(){
  //   console.log("getting popular")
  //   this.store.getPopular().then(res=> {
  //     this.popular = res;
  //   })
  //   this.api.popular(this._pageNo).subscribe(res => {
  //     if(res.results) this.popular = res.results;
  //   });
  // }

  // getLatest(){
  //   this.store.getLatest().then(res=> {
  //     this.latest = res;
  //   })
  //   this.api.latest(this._pageNo).subscribe(res => {
  //     if(res.results) this.latest = res.results;
  //   });
  // }

  getUpcoming(){
    this.api.upcoming().subscribe(res => {
      this.upcoming = res.results;
    }, err=> {
      this.loadOffline()
    });
  }

  loadOffline(msg?) {
    this.presentToast(msg || "You are currently offline, serving you cached content")    
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
    }).catch(() => {
      this.presentToast("Can't fetch you more movies. There seems to be something wrong with the network 😥📵")
    })
  }
  presentToast(message) {
    this.toastCtrl.create({
      position: "bottom",
      duration: 4000,
      message,
    }).present()
  }
}
