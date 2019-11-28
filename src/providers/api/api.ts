import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActorsApi } from './actors-api';
import { MoviesApi } from './movies-api';
import { SeriesApi } from './series-api';
import { APIResponse } from '../../models/APIResponse';
import { Movie } from '../../models/Movie';
import { Serie } from '../../models/Serie';
import { Actor } from '../../models/Actor';

@Injectable()
export class Api {

  public moviesObservable: Observable<APIResponse<Movie>>;
  public seriesObservable: Observable<APIResponse<Serie>>;
  public actorsObservable: Observable<APIResponse<Actor>>;

  constructor(public http: HttpClient, public actors: ActorsApi, public movies: MoviesApi, public series: SeriesApi) {
    console.log('Hello ApiProvider Provider');
  }
  
  search(text, types): Observable<APIResponse<any>> {
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

}
