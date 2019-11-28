import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeriesStorage } from "../storage/series-storage";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Serie } from '../../models/Serie';
import { APIResponse } from '../../models/APIResponse';


@Injectable()
export class SeriesApi {
  url = "http://localhost:4000/api/series/"//"https://movie-ease.herokuapp.com/api/series/";

  constructor(public http: HttpClient, public store: SeriesStorage) {}

  one(id): Observable<Serie> {
    return this.http.get<Serie>(`${this.url}one/${id}`)
    .catch(this._handleError)
  }
  
  search(query): Observable<APIResponse<Serie>> {
    return this.http.get<APIResponse<Serie>>(`${this.url}search/${query}`)
    .catch(this._handleError)
  }
  
  popular(n=1): Observable<APIResponse<Serie>> {
    return this.http.get<APIResponse<Serie>>(`${this.url}popular/${n}`)
    .catch(this._handleError)
  }
  
  latest(n=1): Observable<APIResponse<Serie>> {
    return this.http.get<APIResponse<Serie>>(`${this.url}latest/${n}`)
    .map(res => {
      if(n < 2 && res.results) this.store.setLatest(res.results)
      return res
    }).catch(this._handleError)
  }
  
  upcoming(n=1): Observable<APIResponse<Serie>> {
    return this.http.get<APIResponse<Serie>>(`${this.url}upcoming/${n}`)
    .map(res => {
      if(n === 1) this.store.setUpcoming(res.results)
      return res
    }).catch(this._handleError)
  }
  
  topRated(n=1): Observable<APIResponse<Serie>> {
    return this.http.get<APIResponse<Serie>>(`${this.url}top-rated/${n}`)
    .map(res => {
      if(n === 1) this.store.setTopRated(res.results)
      return res
    }).catch(this._handleError)
  }

  private _handleError(){
    return Observable.throw("Network Error")
  }
}
