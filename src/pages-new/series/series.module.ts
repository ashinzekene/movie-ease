import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Series } from './series';

@NgModule({
  declarations: [
    Series,
  ],
  imports: [
    IonicPageModule.forChild(Series),
  ],
  exports: [
    Series
  ]
})
export class SeriesModule {}
