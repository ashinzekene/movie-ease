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
  public obj = {'background-image': 'url(https://image.tmdb.org/t/p/w500' + this.data.profile_path + ')' }

  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: ActorsApi, private _storage: ActorsStorage) {
    if(this.navParams.data.data) {
      this.data = this.navParams.data.data
    }
    this._api.one(this.navParams.data.id).subscribe(res => {
      this.data = res;
    });
  }
  ionViewCanEnter() {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActorsDetails');
  }

}
