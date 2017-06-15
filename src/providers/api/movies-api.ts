import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { MoviesStorage } from "../storage/movies-storage";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class MoviesApi {

  constructor(public http: Http, public store: MoviesStorage) {
    console.log('Hello MoviesApi Provider');
  }
  one(id) {
    return this.http.get(`http://localhost:4400/movies/one/${id}`).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  search(query) {
    return this.http.get(`http://localhost:4400/movies/search/${query}`).map((res)=> {
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  popular(n=1) {
    console.log("Getting popular")
    return this.http.get('http://localhost:4400/movies/popular/'+n).map((res)=> {
      if(n === 1) this.store.setPopular(res.json())
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  latest(n=1) {
    console.log("Getting latest")
    return this.http.get('http://localhost:4400/movies/latest/'+n).map((res)=> {
      if(n === 1) this.store.setLatest(res.json())
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  upcoming(n=1) {
    console.log("Getting upcoming")
    return this.http.get('http://localhost:4400/movies/upcoming/'+n).map((res)=> {
      if(n === 1) this.store.setUpcoming(res.json())
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  topRated(n=1) {
    console.log("Getting topRated")
    return this.http.get('http://localhost:4400/movies/top-rated/'+n).map((res)=> {
      if(n === 1) this.store.setTopRated(res.json())
      return JSON.parse(res.json())
    }).catch(this._handleError)
  }
  getAll() {
    this.topRated(1).subscribe(dat=>console.log(dat));
    this.latest(1).subscribe(dat=>console.log(dat));
    this.upcoming(1).subscribe(dat=>console.log(dat));
    this.popular(1).subscribe(dat=>console.log(dat));
  }
  private _handleError(err) {
    return Observable.throw("Network Error occured")
  }
}
