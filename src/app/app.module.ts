import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from "@ionic/storage";
import { PhotoViewer } from "@ionic-native/photo-viewer";


import { MoviesApi } from "../providers/api/movies-api";
import { SeriesApi } from "../providers/api/series-api";
import { ActorsApi } from "../providers/api/actors-api";
import { Api } from "../providers/api/api";

import { MoviesStorage } from "../providers/storage/movies-storage";
import { SeriesStorage } from "../providers/storage/series-storage";
import { ActorsStorage } from "../providers/storage/actors-storage";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    MoviesApi,
    ActorsApi,
    SeriesApi,
    MoviesStorage,
    ActorsStorage,
    SeriesStorage,
    Api,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
