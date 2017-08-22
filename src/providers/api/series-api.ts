import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SeriesStorage } from "../storage/series-storage";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class SeriesApi {

  constructor(public http: Http, public store: SeriesStorage) {
    console.log('Hello SeriesApi Provider');
  }
  one(id) {
    return this.http.get(`https://movie-ease.herokuapp.com/series/one/${id}`).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  search(query) {
    return this.http.get(`https://movie-ease.herokuapp.com/series/search/${query}`).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  popular(n=1) {
    console.log("Getting popular")
    return this.http.get('https://movie-ease.herokuapp.com/series/popular/'+n).map((res)=> {
      if(n === 1) this.store.setPopular(res.json())
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  latest(n=1) {
    console.log("Getting latest")
    return this.http.get('https://movie-ease.herokuapp.com/series/latest/'+n).map((res)=> {
      if(n === 1) this.store.setLatest(res.json())
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  upcoming(n=1) {
    console.log("Getting upcoming")
    return this.http.get('https://movie-ease.herokuapp.com/series/upcoming/'+n).map((res)=> {
      if(n === 1) this.store.setUpcoming(res.json())
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  topRated(n=1) {
    console.log("Getting topRated")
    return this.http.get('https://movie-ease.herokuapp.com/series/top-rated/'+n).map((res)=> {
      if(n === 1) this.store.setTopRated(res.json())
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  private _handleError(){
    return Observable.throw("Network Error")
  }
}
