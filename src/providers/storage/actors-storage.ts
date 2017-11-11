import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";

@Injectable()
export class ActorsStorage {

  constructor(public https: Http, public store: Storage) {
    console.log('Hello ActorsStorage Provider');
  }
  setUpcoming(res) {
    return this.store.set("upcomingActors", res)
  }
  getUpcoming() {
    return this.store.get("upcomingActors").then(res => {
      if(!res) return {results: []};
      else return JSON.parse(res)
    })
  }
  
  setLatest(res) {
    return this.store.set("latestActors", res)
  }
  getLatest() {
    return this.store.get("latestActors").then(res => {
      if(!res) return {results: []};
      else return JSON.parse(res)
    })
  }
  
  setPopular(res) {
    return this.store.set("popularActors", res)
  }
  getPopular() {
    return this.store.get("popularActors").then(res => {
      if(!res) return {results: []};
      else return JSON.parse(res)
    })
  }

  setTopRated(res) {
    return this.store.set("topRatedActors", res)
  }
  getTopRated() {
    return this.store.get("topRatedActors").then(res => {
      if(!res) return {results: []};
      else return JSON.parse(res)
    })
  }
}
