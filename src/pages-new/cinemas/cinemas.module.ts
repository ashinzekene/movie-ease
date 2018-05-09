import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CinemasPage } from './cinemas';

@NgModule({
  declarations: [
    CinemasPage,
  ],
  imports: [
    IonicPageModule.forChild(CinemasPage),
  ],
  exports: [
    CinemasPage
  ]
})
export class CinemasPageModule {}
