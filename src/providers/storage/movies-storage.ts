import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Movie } from "../../models/Movie";

@Injectable()
export class MoviesStorage {
  constructor() {
    console.log("Hello MoviesStorage Provider");
  }
  setUpcoming(res: Movie[]) {
    return window.localStorage.setItem("upcomingMovies", JSON.stringify(res));
  }
  getUpcoming(): Promise<Movie[]> {
    const upcomingMovies = window.localStorage.getItem("upcomingMovies");
    if (!upcomingMovies) return Promise.resolve([]);
    return Promise.resolve(JSON.parse(upcomingMovies));
  }

  setLatest(res: Movie[]) {
    return window.localStorage.setItem("latestMovies", JSON.stringify(res));
  }

  getLatest(): Promise<Movie[]> {
    const latestMovies = window.localStorage.getItem("latestMovies");
    if (!latestMovies) return Promise.resolve([]);
    return Promise.resolve(JSON.parse(latestMovies));
  }

  setPopular(res: Movie[]) {
    return window.localStorage.setItem("popularMovies", JSON.stringify(res));
  }

  getPopular(): Promise<Movie[]> {
    const popularMovies = window.localStorage.getItem("popularMovies");
    if (!popularMovies) return Promise.resolve([]);
    return Promise.resolve(JSON.parse(popularMovies));
  }

  setTopRated(res: Movie[]) {
    return window.localStorage.setItem("topRatedMovies", JSON.stringify(res));
  }

  getTopRated(): Promise<Movie[]> {
    const topRatedMovies = window.localStorage.getItem("topRatedMovies");
    if (!topRatedMovies) return Promise.resolve([]);
    return Promise.resolve(JSON.parse(topRatedMovies));
  }
}
