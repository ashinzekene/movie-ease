import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Settings {

  constructor(public https: Http) {
    console.log('Hello Settings Provider');
  }

}
