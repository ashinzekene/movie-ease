import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MoviesApi } from "./movies-api";
import { SeriesApi } from "./series-api";
import { ActorsApi } from "./actors-api";

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {
  public moviesObservable: Observable<[any]>;
  public seriesObservable: Observable<[any]>;
  public actorsObservable: Observable<[any]>;
  
  constructor(public https: Http, public actors: ActorsApi, public movies: MoviesApi, public series: SeriesApi) {
  }
  getAll() {
    
  }
  search(text, types) {
    if (types === 'movies') {
      this.moviesObservable = this.movies.search(text)
      return this.movies.search(text)
    }
    if (types === 'actors') {
      this.actorsObservable = this.actors.search(text)
      return this.actors.search(text)
    }
    if (types === 'series') {
      this.seriesObservable = this.series.search(text)
      return this.series.search(text)
    }
  }
  // computeResult(arr) {
  //   let res = Observable.merge(this.moviesObservable, this.actorsObservable, this. seriesObservable)
  // }
  
}
