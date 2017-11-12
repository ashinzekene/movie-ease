import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Api } from "../../providers/api/api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';

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
  gsearch() {
    clearTimeout(this._req)
    this._req = setTimeout(()=> {
      this._api.search(this.queryText, this._type).subscribe(res => {
        console.log(res)
        this.result = res.results
      })
      console.info("Sending request")
    }, 1000)
  }
  search() {
    Observable.of(this.queryText)
      .debounceTime(1000)
      .distinctUntilChanged()
      .filter(x => x.length > 3)
      .switchMap(res => this._api.search(res, this._type))
      .subscribe(res => {
        // console.log(res)
        this.result = res.results
      })
  }
  nav(data) {
    console.log(data)
    switch (this._type) {
      case "movies": return this.navMovie(data)
      case "actors": return this.navActor(data)
      case "series": return this.navSerie(data)
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
