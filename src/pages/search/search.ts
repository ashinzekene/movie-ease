import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Api } from "../../providers/api/api";
/**
 * Generated class for the Search page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory:["Home"]
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {
  public _type;
  public queryText;
  public result;
  private _req;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popCtrl: PopoverController, private _api: Api) {
    console.log(this.navParams.data.type)
    this._type = this.navParams.data.type || "movies"
  }
  search() {
    clearTimeout(this._req)
    this._req = setTimeout(()=> {
      this._api.search(this.queryText, this._type).subscribe(res => {
        console.log(res)
        this.result = res.results
      })
      console.info("Sending request")
    }, 1000)
  }
  nav(data) {
    console.log(data)
    if(data.first_air_date) {
      console.log("series")
      this.navSerie(data)
    } else if (data.title) {
      console.log("movies")
      this.navSerie(data)
    } else if (data.name) {
      console.log("actors")
      this.navActor(data)
    }
  }
  navActor(actor) {
    this.navCtrl.push("ActorDetails", {data: actor, id: actor.id})
  }
  navMovie(movie) {
    this.navCtrl.push("MovieDetails", {data: movie, id: movie.id})
  }
  navSerie(serie) {
    this.navCtrl.push("SerieDetails", {data: serie, id: serie.id})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Search');
  }

}
