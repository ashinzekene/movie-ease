import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { MoviesStorage } from "../storage/movies-storage";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class MoviesApi {

  constructor(public http: HttpClient, public store: MoviesStorage) {}

  one(id) {
    return this.http.get(`https://movie-ease.herokuapp.com/movies/one/${id}`)
    .map(this.transformObject)    
    .catch(this._handleError)
  }
  search(query) {
    return this.http.get(`https://movie-ease.herokuapp.com/movies/search/${query}`)
    .map(this.transformObject)    
    .catch(this._handleError)
  }
  popular(n=1) {
    console.log("Getting popular")
    return this.http.get('https://movie-ease.herokuapp.com/movies/popular/'+n)
    .map(this.transformObject)
    .map(res => {
      if(n === 1) this.store.setPopular(res)
      return res
    }).catch(this._handleError)
  }
  latest(n=1) {
    console.log("Getting latest")
    return this.http.get('https://movie-ease.herokuapp.com/movies/latest/'+n)
    .map(this.transformObject)
    .map((res: any)=> {
      if(n < 2 && res.results) this.store.setLatest(res)
      return res
    }).catch(this._handleError)
  }
  upcoming(n=1) {
    console.log("Getting upcoming")
    return this.http.get('https://movie-ease.herokuapp.com/movies/upcoming/'+n)
    .map(this.transformObject)
    .map((res)=> {
      if(n === 1) this.store.setUpcoming(res)
      return res
    }).catch(this._handleError)
  }
  
  topRated(n=1) {
    console.log("Getting topRated")
    return this.http.get('https://movie-ease.herokuapp.com/movies/top-rated/'+n)
    .map(this.transformObject)
    .map((res)=> {
      if(n === 1) this.store.setTopRated(res)
      return res
    }).catch(this._handleError)
  }
  ozone() {
    return this.http.get('https://movie-ease.herokuapp.com/movies/ozone')
    .map(this.transformObject)
    .map(res => {
      console.log(res)
      return res
    }).catch(this._handleError)
  }
  getAll() {
    this.topRated(1).subscribe(dat=>console.log(dat));
    this.latest(1).subscribe(dat=>console.log(dat));
    this.upcoming(1).subscribe(dat=>console.log(dat));
    this.popular(1).subscribe(dat=>console.log(dat));
  }
  private _handleError(err) {
    return Observable.throw("A Network Error Occured")
  }
  private transformObject(str) {
    return typeof str === "object" ? str : JSON.parse(str) 
  }
}
