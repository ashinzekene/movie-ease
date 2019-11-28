import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Api } from '../providers/api/api';
import { MoviesApi } from '../providers/api/movies-api';
import { ActorsApi } from '../providers/api/actors-api';
import { SeriesApi } from '../providers/api/series-api';
import { MoviesStorage } from '../providers/storage/movies-storage';
import { ActorsStorage } from '../providers/storage/actors-storage';
import { SeriesStorage } from '../providers/storage/series-storage';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
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
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api
  ]
})
export class AppModule {}
