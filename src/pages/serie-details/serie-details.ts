import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeriesApi } from "../../providers/api/series-api";
import { SeriesStorage } from "../../providers/storage/series-storage";
import { MovieGenres } from "../../providers/data/genres";

@IonicPage({
  segment: "series/:id",
  defaultHistory: ["Series"]
})
@Component({
  selector: 'page-serie-details',
  templateUrl: 'serie-details.html',
})
export class SerieDetails {
  public data = {};
  public serieDetail = "info";
  private _genres = MovieGenres;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: SeriesApi, private _storage: SeriesStorage) {
    if(this.navParams.data.data) {
      this.data = this.navParams.data.data
    }
    this._api.one(this.navParams.data.id).subscribe(res => {
      this.data = res;
    });
  }
  getGenre(id) {
    this._genres.find(genre => {
      return genre.id === id
    })
  }
  navActor(actor) {
    this.navCtrl.push("ActorDetails", {data: actor, id: actor.id})
  }
  navSerie(serie) {
    this.navCtrl.push("SerieDetails", {data: serie, id: serie.id})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriesDetails');
  }

}
