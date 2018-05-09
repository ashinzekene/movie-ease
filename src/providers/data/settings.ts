import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Settings {

  constructor() {
    console.log('Hello Settings Provider');
  }

}
