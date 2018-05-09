import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";

@Injectable()
export class SeriesStorage {

  constructor(public https: Http, public store: Storage) {
    console.log('Hello SeriesStorage Provider');
  }
  setUpcoming(res) {
    return this.store.set("upcomingSeries", res)
  }
  getUpcoming() {
    return this.store.get("upcomingSeries").then(res => {
      if(!res) return {results: []};
      else return JSON.parse(res)
    })
  }
  
  setLatest(res) {
    return this.store.set("latestSeries", res)
  }
  getLatest() {
    return this.store.get("latestSeries").then(res => {
      if(!res) return {results: []};
      else return JSON.parse(res)
    })
  }

  setPopular(res) {
    return this.store.set("popularSeries", res)
  }
  getPopular() {
    return this.store.get("popularSeries").then(res => {
      if(!res) return {results: []};
      else return JSON.parse(res)
    })
  }

  setTopRated(res) {
    return this.store.set("topRatedSeries", res)
  }
  getTopRated() {
    return this.store.get("topRatedSeries").then(res => {
      if(!res) return {results: []};
      else return JSON.parse(res)
    })
  }
}
