import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Actors } from './actors';

@NgModule({
  declarations: [
    Actors,
  ],
  imports: [
    IonicPageModule.forChild(Actors),
  ],
  exports: [
    Actors
  ]
})
export class ActorsModule {}
