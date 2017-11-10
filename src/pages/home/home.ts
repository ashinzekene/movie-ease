import { Component, ViewChild } from '@angular/core';
import { IonicPage, ToastController,  NavController, Content } from 'ionic-angular';
import { MoviesStorage } from '../../providers/storage/movies-storage'
import { MoviesApi } from "../../providers/api/movies-api";
import { MovieDetails } from '../movie-details/movie-details'
import 'rxjs/add/operator/toPromise'

declare var window;

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
  public upcomingMovies= [];
  cannotLoadContent: boolean = true;
  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private store: MoviesStorage, private movies: MoviesApi) {
    this.movies.latest().subscribe(res => {
      console.log(res)
      this.store.setLatest(res)
      this.upcomingMovies = res.results
    }, err => {
      this.getOffline()
    })
  }
  goToDetailsPage(movie) {
    this.navCtrl.push(MovieDetails, {id: movie.id, data: movie, imgSize: this.size})
  }
  getOffline() {
    this.showToast("You are currently offline, serving you cached content")
    this.store.getLatest().then(res => {
      this.upcomingMovies = res.results
    })
  }
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: "bottom"
    })
    toast.present()
  }
  doInfinite(e) {
    console.log('Begin async operation');
    return this.movies.latest(this._pageNo).toPromise().then(res => {
      this.upcomingMovies = this.upcomingMovies.concat(res.results)
      this._pageNo++
      console.log('Async operation ended'); 
      e.complete()
    })
  }
  search() {
    this.navCtrl.push("Search")
  }
  doRefresh(refresher) {
    //this.ionViewDidLoad()
  }
  ionViewDidLoad() {
    // this.slides.slideTo(this.slideIndex || 0)
    let width = this.content.getContentDimensions().contentWidth;
    if ( width >= 530) {
      console.log("Tablet")
      this.size = 500
    }
  }
}
