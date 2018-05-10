import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesStorage } from "../../providers/storage/movies-storage";
import { MoviesApi } from "../../providers/api/movies-api";
import { MovieGenres } from "../../providers/data/genres";

// interface movie {
//   poster_path?: string,
//   adult?: false,
//   overview?: string,
//   release_date?: string,
//   genre_ids?: number[],
//   id?: number,
//   original_title?: string,
//   original_language?: string,
//   title?: string,
//   backdrop_path?: string,
//   popularity?:  number,
//   vote_count?:  number,
//   video?:  boolean
//   vote_average?: number
// }

@IonicPage({
  segment: "movies/:id",
  defaultHistory: ['Movies']
})
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetails {
  public data:any = {}
  public movieDetail = 'info'
  private _genres = MovieGenres
  private shouldPlayTrailer:boolean = false
  private movieUrl: SafeResourceUrl
  private iconName: string = 'play';

  constructor(public navCtrl: NavController, private sanitizer: DomSanitizer, public navParams: NavParams, private _store: MoviesStorage, private _api: MoviesApi) {
    if(this.navParams.data.data) {
      this.data = this.navParams.data.data
      this.data.backdrop_path = this.navParams.data.data.poster_path
    }
    this._api.one(this.navParams.data.id).subscribe(res => {
      this.data = res;
      console.log("Result is", res)
      if (!res.backdrop_path) {
        this.data.backdrop_path = res.poster_path
      }
      this.movieUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+res.videos.results[0].key)
    });
  }
  getGenre(id) {
    this._genres.find(genre => {
      return genre.id === id
    })
  }
  toggleTrailer() {
    this.shouldPlayTrailer = !this.shouldPlayTrailer
    this.iconName = this.shouldPlayTrailer ? "close" : "play";
  }
  navActor(actor) {
    this.navCtrl.push("ActorDetails", {data: actor, id: actor.id})
  }
  navMovie(movie) {
    this.navCtrl.push("MovieDetails", {data: movie, id: movie.id})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetails');
  }
  ionViewWillEnter() {
  }
  playTrailer() {
    console.log("Will play ", this.data.videos.results[0].key)
  }
  save() {
    //add ability to save film for viewing later
  }
}
