import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActorsStorage } from "../../providers/storage/actors-storage";
import { ActorsApi } from "../../providers/api/actors-api";

/**
 * Generated class for the Actors page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-actors',
  templateUrl: 'actors.html',
})
export class Actors {
  public popular;
  private _pageNo;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ActorsApi, public store: ActorsStorage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Actors');
    this.getPopular()
  }
  goToDetailsPage(actor) {
    this.navCtrl.push("ActorDetails", {data: actor, id: actor.id})
  }
  search() {
    this.navCtrl.push("Search", {type: "actors"})
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

}
