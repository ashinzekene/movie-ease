import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActorsStorage } from "../storage/actors-storage";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Actor } from '../../models/Actor';
import { APIResponse } from '../../models/APIResponse';

@Injectable()
export class ActorsApi {

  url = "http://localhost:4000/api/actors/"//"https://movie-ease.herokuapp.com/api/actors/";
  
  constructor(public http: HttpClient, public store: ActorsStorage) {}

  
  one(id): Observable<Actor> {
    return this.http.get<Actor>(`${this.url}one/${id}`)
      .catch(this._handleError)
  }
  
  search(query): Observable<APIResponse<Actor>> {
    return this.http.get<APIResponse<Actor>>(`${this.url}search/${query}`)
      .catch(this._handleError)
  }
  
  popular(n=1): Observable<APIResponse<Actor>> {
    return this.http.get<APIResponse<Actor>>(`${this.url}popular/${n}`)
      .map(res => {
      if(n === 1) this.store.setPopular(res.results);
      return res
    }).catch(this._handleError)
  }

  private _handleError() {
    return Observable.throw("Network Error occured")
  }

}