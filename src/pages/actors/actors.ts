import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { ActorsStorage } from "../../providers/storage/actors-storage";
import { ActorsApi } from "../../providers/api/actors-api";
import 'rxjs/add/operator/toPromise';
import { Actor } from '../../models/Actor';

@IonicPage()
@Component({
  selector: 'page-actors',
  templateUrl: 'actors.html',
})
export class Actors {
  public popular: Actor[];
  public isOffline: Boolean = true
  private _pageNo: number = 1;
  constructor(private navCtrl: NavController, private toastCtrl: ToastController, private api:ActorsApi, private store: ActorsStorage) {
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
    this.api.popular(this._pageNo).subscribe(res => {
      this.isOffline = false
      this._pageNo++
      this.popular = res.results;
    }, err => this.getOffline());
  }

  getOffline(msg?: string) {
    this.isOffline = true
    this.store.getPopular().then(res=> {
      if (!res[0]) {
        this.presentToast("You are offline and there's nothing in the cache. Guess we'd just have to be looking at ourselves")
      } else {
        this.presentToast("You are currently offline, serving you cached content")
        this.popular = res
      }
    })
  }

  doInfinite(e) {
    console.log("async operation started")
    if (this.isOffline) {
      e.complete()
    }
    this.api.popular(this._pageNo).toPromise().then( res => {
      if(res.results) {
        this.popular = this.popular.concat(res.results)
        this._pageNo++
        e.complete()
        console.log("async operation ended")
      }
    }).catch(err => {
      this.presentToast("Can't fetch you more actors. There seems to be something wrong with the network 😥📵")
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
