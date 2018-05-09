import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Movies } from './movies';

@NgModule({
  declarations: [
    Movies,
  ],
  imports: [
    IonicPageModule.forChild(Movies),
  ],
  exports: [
    Movies
  ]
})
export class MoviesModule {}
