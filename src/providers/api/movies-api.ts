import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { MoviesStorage } from "../storage/movies-storage";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { APIResponse } from "../../models/APIResponse";
import { Movie } from '../../models/movie';

@Injectable()
export class MoviesApi {
  url = "http://localhost:4000/api/movies/"//"https://movie-ease.herokuapp.com/api/movies/";
  
  constructor(public http: HttpClient, public store: MoviesStorage) {}
  
  one(id): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}one/${id}`)
    .catch(this.handleError)
  }
  
  search(query): Observable<APIResponse<Movie>> {
    return this.http.get<APIResponse<Movie>>(`${this.url}search/${query}`)
    .catch(this.handleError)
  }

  popular(n=1): Observable<APIResponse<Movie>> {
    return this.http.get<APIResponse<Movie>>(`${this.url}popular/${n}`)
    .map(res => {
      if(n === 1) this.store.setPopular(res.results)
      return res
    }).catch(this.handleError)
  }

  latest(n=1): Observable<APIResponse<Movie>> {
    return this.http.get<APIResponse<Movie>>(`${this.url}latest/${n}`)
    .map(res => {
      if(n < 2 && res.results) this.store.setLatest(res.results)
      return res
    }).catch(this.handleError)
  }

  upcoming(n=1): Observable<APIResponse<Movie>> {
    return this.http.get<APIResponse<Movie>>(`${this.url}upcoming/${n}`)
    .map(res => {
      if(n === 1) this.store.setUpcoming(res.results)
      return res
    }).catch(this.handleError)
  }

  topRated(n=1): Observable<APIResponse<Movie>> {
    return this.http.get<APIResponse<Movie>>(`${this.url}top-rated/${n}`)
    .map(res => {
      if(n === 1) this.store.setTopRated(res.results)
      return res
    }).catch(this.handleError)
  }

  private handleError() {
    return Observable.throw("A Network Error Occured")
  }
  
}
