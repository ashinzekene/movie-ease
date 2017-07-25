import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ActorsStorage } from "../../providers/storage/actors-storage";
import { ActorsApi } from "../../providers/api/actors-api";


@IonicPage()
@Component({
  selector: 'page-actors',
  templateUrl: 'actors.html',
})
export class Actors {
  public popular;
  private _pageNo;
  constructor(private navCtrl: NavController, private navParams: NavParams, private menuCtrl: MenuController, private api:ActorsApi, private store: ActorsStorage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Actors');
    this.setMenu()
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
  setMenu() {
    this.menuCtrl.enable(true, "actors")
  }
  loadMore() {
    
  }
}
