import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActorsStorage } from "../storage/actors-storage";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ActorsApi {

  constructor(public http: HttpClient, public store: ActorsStorage) {
  }
  one(id) {
    return this.http.get(`https://movie-ease.herokuapp.com/actors/one/${id}`)
      .map(this.transformObject)
      .catch(this._handleError)
  }
  search(query) {
    return this.http.get(`https://movie-ease.herokuapp.com/actors/search/${query}`)
      .map(this.transformObject)
      .catch(this._handleError)
  }
  popular(n=1) {
    return this.http.get('https://movie-ease.herokuapp.com/actors/popular/'+n)
      .map(this.transformObject)
      .map((res)=> {
      if(n === 1) this.store.setPopular(res);
      return res
    }).catch(this._handleError)
  }
  
  private _handleError(err) {
    return Observable.throw("Network Error occured")
  }
  private transformObject(str) {
    return typeof str === "object" ? str : JSON.parse(str) 
  }
}