import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetails } from './movie-details';

@NgModule({
  declarations: [
    MovieDetails,
  ],
  imports: [
    IonicPageModule.forChild(MovieDetails),
  ],
  exports: [
    MovieDetails
  ]
})
export class MovieDetailsModule {}
