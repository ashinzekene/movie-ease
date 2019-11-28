import { Injectable } from "@angular/core";
import { Serie } from "../../models/Serie";

@Injectable()
export class SeriesStorage {

  constructor() {
    console.log("Hello SeriesStorage Provider");
  }

  setUpcoming(res : Serie[]) {
    return window.localStorage.setItem("upcomingSeries", JSON.stringify(res));
  }

  getUpcoming(): Promise<Serie[]> {
    const upcomingSeries = window.localStorage.getItem("upcomingSeries");
    if (!upcomingSeries) return Promise.resolve([]);
    return Promise.resolve(JSON.parse(upcomingSeries));
  }

  setLatest(res : Serie[]) {
    return window.localStorage.setItem("latestSeries", JSON.stringify(res));
  }

  getLatest(): Promise<Serie[]> {
    const latestSeries = window.localStorage.getItem("latestSeries");
    if (!latestSeries) return Promise.resolve([]);
    return Promise.resolve(JSON.parse(latestSeries));
  }

  setPopular(res : Serie[]) {
    return window.localStorage.setItem("popularSeries", JSON.stringify(res));
  }

  getPopular(): Promise<Serie[]> {
    const popularSeries = window.localStorage.getItem("popularSeries");
    if (!popularSeries) return Promise.resolve([]);
    return Promise.resolve(JSON.parse(popularSeries));
  }

  setTopRated(res : Serie[]) {
    return window.localStorage.setItem("topRatedSeries", JSON.stringify(res));
  }

  getTopRated(): Promise<Serie[]> {
    const topRatedSeries = window.localStorage.getItem("topRatedSeries");
    if (!topRatedSeries) return Promise.resolve([]);
    return Promise.resolve(JSON.parse(topRatedSeries));
  }
}
