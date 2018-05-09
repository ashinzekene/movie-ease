import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActorsApi } from '../../providers/api/actors-api';
import { ActorsStorage } from '../../providers/storage/actors-storage';

@IonicPage({
  segment: "actors/:id",
  defaultHistory: ['Actors']
})
@Component({
  selector: 'page-actor-details',
  templateUrl: 'actor-details.html',
})
export class ActorDetails {
  public data= {profile_path: ""};
  public actorDetail = "info";
  public obj = {}
  public loader;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: ActorsApi, private _storage: ActorsStorage) {
    if(this.navParams.data.data) {
      this.data = this.navParams.data.data
    }
    this._api.one(this.navParams.data.id).subscribe(res => {
      res.movie_credits.cast.sort((a, b) => a.release_date > b.release_date ? -1: 1)
      res.tv_credits.cast.sort((a, b) => a.first_air_date > b.first_air_date ? -1: 1)
      this.data = res;
      console.log(res)
    });
  }
  navMovie(movie) {
    this.navCtrl.push("MovieDetails", {data: movie, id: movie.id})
  }
  navSerie(serie) {
    this.navCtrl.push("SerieDetails", {data: serie, id: serie.id})
  }

}
