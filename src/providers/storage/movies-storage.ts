import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";

@Injectable()
export class MoviesStorage {

  constructor(public https: Http, public store: Storage) {
    console.log('Hello MoviesStorage Provider');
  }
  setUpcoming(res) {
    return this.store.set("upcomingMovies",res)
  }
  getUpcoming() {
    return this.store.get("upcomingMovies").then(res => {
      if(!res) return {results: []};
      else{
        return JSON.parse(res)
      }
    })
  }
  
  setLatest(res) {
    return this.store.set("latestMovies",res)
  }
  getLatest() {
    return this.store.get("latestMovies").then(res => {
      if(!res) return {results: []};
      else return res
    })
  }

  setPopular(res) {
    return this.store.set("popularMovies",res)
  }
  getPopular() {
    return this.store.get("popularMovies").then(res => {
      if(!res) return {results: []};
      else return JSON.parse(res)
    })
  }

  setTopRated(res) {
    return this.store.set("topRatedMovies",res)
  }
  getTopRated() {
    return this.store.get("topRatedMovies").then(res => {
      if(!res) return {results: []};
      else return JSON.parse(res)
    })
  }
}
