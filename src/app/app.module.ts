import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MoviesApi } from "../providers/api/movies-api";
import { SeriesApi } from "../providers/api/series-api";
import { ActorsApi } from "../providers/api/actors-api";
import { Api } from "../providers/api/api";

import { MoviesStorage } from "../providers/storage/movies-storage";
import { SeriesStorage } from "../providers/storage/series-storage";
import { ActorsStorage } from "../providers/storage/actors-storage";

import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
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
