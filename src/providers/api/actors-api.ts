import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActorsStorage } from "../storage/actors-storage";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ActorsApi {

  constructor(public http: Http, public store: ActorsStorage) {
    console.log('Hello ActorsApi Provider');
  }
  one(id) {
    return this.http.get(`http://localhost:4400/actors/one/${id}`).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  search(query) {
    return this.http.get(`http://localhost:4400/actors/search/${query}`).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  popular(n=1) {
    console.log("Getting popular")
    return this.http.get('http://localhost:4400/actors/popular/'+n).map((res)=> {
      if(n === 1) this.store.setPopular(res.json())
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  
  private _handleError(err) {
    return Observable.throw("Network Error occured")
  }
}