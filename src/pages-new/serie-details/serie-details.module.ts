import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerieDetails } from './serie-details';

@NgModule({
  declarations: [
    SerieDetails,
  ],
  imports: [
    IonicPageModule.forChild(SerieDetails),
  ],
  exports: [
    SerieDetails
  ]
})
export class SerieDetailsModule {}