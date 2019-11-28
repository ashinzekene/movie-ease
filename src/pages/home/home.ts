import { Component, ViewChild } from '@angular/core';
import { IonicPage, ToastController,  NavController, Content } from 'ionic-angular';
import { MoviesStorage } from '../../providers/storage/movies-storage'
import { MoviesApi } from "../../providers/api/movies-api";
import 'rxjs/add/operator/toPromise'
import { Movie } from '../../models/movie';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  @ViewChild(Content) content: Content;

  public contentWidth;
  private _pageNo: number = 2;
  private size = 342;
  items = [];
  public upcomingMovies: Movie[] = [];
  cannotLoadContent: boolean = true;

  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private store: MoviesStorage, private movies: MoviesApi) {
    this.movies.latest().subscribe(res => {
      this.upcomingMovies = res.results
    }, () => this.getOffline()
    )
  }

  goToDetailsPage(movie) {
    this.navCtrl.push("MovieDetails", {id: movie.id, data: movie, imgSize: this.size})
  }

  getOffline() {
    this.store.getLatest().then(res => {
      if (!res[0]) {
        this.presentToast("You are offline and there's nothing in the cache. Guess we'd just have to be looking at ourselves")
      } else {
        this.presentToast("You are currently offline, serving you cached content")
        this.upcomingMovies = res;
      }
    })
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: "bottom"
    })
    toast.present()
  }

  doInfinite(e) {
    return this.movies.latest(this._pageNo).toPromise().then(res => {
      this.upcomingMovies = this.upcomingMovies.concat(res.results)
      this._pageNo++
      e.complete()
    }).catch(err => {
      this.presentToast("Can't fetch you more movies. There seems to be something wrong with the network 😥📵")
    })
  }

  search() {
    this.navCtrl.push("Search")
  }

  ionViewDidLoad() {
    let width = this.content.getContentDimensions().contentWidth;
    if ( width >= 530) {
      this.size = 500
    }
  }
}
