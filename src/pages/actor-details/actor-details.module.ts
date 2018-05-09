import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActorDetails } from './actor-details';

@NgModule({
  declarations: [
    ActorDetails,
  ],
  imports: [
    IonicPageModule.forChild(ActorDetails),
  ],
  exports: [
    ActorDetails
  ]
})
export class ActorDetailsModule {}
