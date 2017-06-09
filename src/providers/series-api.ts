import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the SeriesApi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SeriesApi {

  constructor(public http: Http) {
    console.log('Hello SeriesApi Provider');
  }
  one(id) {
    return this.http.get(`http://localhost:4400/movies/one/${id}`).map((res)=> {
      return JSON.parse(res.json())
    }).catch((err)=> {
      console.log(err)
      return [{res: 'A network error occured'}]
    })
  }
  search(query) {
    return this.http.get(`http://localhost:4400/movies/search/${query}`).map((res)=> {
      return JSON.parse(res.json())
    }).catch((err)=> {
      console.log(err)
      return [{res: 'A network error occured'}]
    })
  }
  popular(n) {
    return this.http.get('http://localhost:4400/movies/popular?'+n).map((res)=> {
      return JSON.parse(res.json())
    }).catch((err)=> {
      return [{result: 'A network error occured'}]
    })
  }
  latest(n) {
    return this.http.get('http://localhost:4400/movies/latest?'+n).map((res)=> {
      return JSON.parse(res.json())
    }).catch((err)=> {
      return [{result: 'A network error occured'}]
    })
  }
  upcoming(n) {
    return this.http.get('http://localhost:4400/movies/upcoming?'+n).map((res)=> {
      return JSON.parse(res.json())
    }).catch((err)=> {
      return [{result: 'A network error occured'}]
    })
  }
  topRated(n) {
    return this.http.get('http://localhost:4400/movies/top-rated?'+n).map((res)=> {
      return JSON.parse(res.json())
    }).catch((err)=> {
      return [{result: 'A network error occured'}]
    })
  }
}
