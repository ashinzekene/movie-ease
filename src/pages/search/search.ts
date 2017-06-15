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
      this._api.search(this.queryText, this._type).subscribe(res => this.result = res.results)
      console.info("Sending request")
    }, 1500)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Search');
  }

}
