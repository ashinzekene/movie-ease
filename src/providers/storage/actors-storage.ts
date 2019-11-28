import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Actor } from "../../models/Actor";

@Injectable()
export class ActorsStorage {
  constructor() {
    console.log("Hello ActorsStorage Provider");
  }

  setPopular(res: Actor[]) {
    return window.localStorage.setItem("popularActors", JSON.stringify(res));
  }
  
  getPopular(): Promise<Actor[]> {
    const popularActors = window.localStorage.getItem("popularActors");
    if (!popularActors) return Promise.resolve([])
    return Promise.resolve(JSON.parse(popularActors));
  }

}
