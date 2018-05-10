import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeriesStorage } from "../storage/series-storage";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class SeriesApi {

  constructor(public http: HttpClient, public store: SeriesStorage) {}
  
  one(id) {
    return this.http.get(`https://movie-ease.herokuapp.com/api/series/one/${id}`)
    .map(this.transformObject)
    .map((res)=> {
      return res
    }).catch(this._handleError)
  }
  search(query) {
    return this.http.get(`https://movie-ease.herokuapp.com/api/series/search/${query}`)
    .map(this.transformObject)
    .map((res)=> {
      return res
    }).catch(this._handleError)
  }
  popular(n=1) {
    return this.http.get('https://movie-ease.herokuapp.com/api/series/popular/'+n)
    .map(this.transformObject)
    .map((res)=> {
      return res
    }).catch(this._handleError)
  }
  latest(n=1) {
    return this.http.get('https://movie-ease.herokuapp.com/api/series/latest/'+n)
    .map(this.transformObject)
    .map((res)=> {
      return res
    }).catch(this._handleError)
  }
  upcoming(n=1) {
    return this.http.get('https://movie-ease.herokuapp.com/api/series/upcoming/'+n)
    .map(this.transformObject)
    .map((res)=> {
      return res
    }).catch(this._handleError)
  }
  topRated(n=1) {
    return this.http.get('https://movie-ease.herokuapp.com/api/series/top-rated/'+n)
    .map(this.transformObject)
    .map((res)=> {
      return res
    }).catch(this._handleError)
  } 
  private _handleError(){
    return Observable.throw("Network Error")
  }
  private transformObject(str) {
    return typeof str === "object" ? str : JSON.parse(str) 
  }
}
