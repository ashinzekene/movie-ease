webpackJsonp([9],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorDetailsModule", function() { return ActorDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actor_details__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActorDetailsModule = /** @class */ (function () {
    function ActorDetailsModule() {
    }
    ActorDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__actor_details__["a" /* ActorDetails */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__actor_details__["a" /* ActorDetails */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__actor_details__["a" /* ActorDetails */]
            ]
        })
    ], ActorDetailsModule);
    return ActorDetailsModule;
}());

//# sourceMappingURL=actor-details.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_actors_api__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_actors_storage__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActorDetails = /** @class */ (function () {
    function ActorDetails(navCtrl, navParams, _api, _storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._api = _api;
        this._storage = _storage;
        this.data = { profile_path: "" };
        this.actorDetail = "info";
        this.obj = {};
        if (this.navParams.data.data) {
            this.data = this.navParams.data.data;
        }
        this._api.one(this.navParams.data.id).subscribe(function (res) {
            res.movie_credits.cast.sort(function (a, b) { return a.release_date > b.release_date ? -1 : 1; });
            res.tv_credits.cast.sort(function (a, b) { return a.first_air_date > b.first_air_date ? -1 : 1; });
            _this.data = res;
            console.log(res);
        });
    }
    ActorDetails.prototype.navMovie = function (movie) {
        this.navCtrl.push("MovieDetails", { data: movie, id: movie.id });
    };
    ActorDetails.prototype.navSerie = function (serie) {
        this.navCtrl.push("SerieDetails", { data: serie, id: serie.id });
    };
    ActorDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actor-details',template:/*ion-inline-start:"/home/ekene/code/personal-projects/new-movie-ease/src/pages/actor-details/actor-details.html"*/'<ion-header>\n\n  <ion-navbar class="gradient-header">\n    <ion-title>{{ data.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="details" [ngStyle]="{\'background-image\': \'url(https://image.tmdb.org/t/p/w500\' + data.profile_path + \')\'}">\n  <div class="wrapper">\n    <h1 class="title">{{ data.name }}</h1>\n  </div>\n  <ion-toolbar no-border>\n    <ion-segment color="light" [(ngModel)]="actorDetail">\n      <ion-segment-button value="series">\n        Series\n      </ion-segment-button>\n      <ion-segment-button value="info">\n        Info\n      </ion-segment-button>\n      <ion-segment-button value="movies">\n        Movies\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div [ngSwitch]="actorDetail">\n    <ion-item>\n      <ion-chip *ngFor="let genre of data.genre_ids" item-end color="danger">\n        <ion-icon name="information-circle"></ion-icon>\n        <ion-label>{{ genre }}</ion-label>\n      </ion-chip>\n    </ion-item>\n    \n    <ion-list *ngSwitchCase="\'info\'">\n\n      <ion-item text-wrap>Also known as  <p ion-text color="light" *ngFor="let aka of data.also_known_as">{{ aka }}</p></ion-item>\n      <ion-item text-wrap>Birthday:  {{ data.birthday }}</ion-item>\n      <ion-item text-wrap>Biography: {{ data.biography }}</ion-item>\n      <ion-item text-wrap>Popularity: {{ data.popularity }}</ion-item>\n      <ion-item text-wrap>Place of Birth: {{ data.place_of_birth }}</ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'series\'">\n      <ion-item (click)="navSerie(serie)" text-wrap *ngFor="let serie of data.tv_credits?.cast" >\n        <ion-thumbnail item-left>\n          <img src="https://image.tmdb.org/t/p/w92{{serie.poster_path}}">\n        </ion-thumbnail>\n        <h2>{{ serie.name }}</h2>\n        <p ion-text color="light">Acted as {{ serie.character }}</p>\n        <p ion-text color="light">First Air Date: {{ serie.first_air_date }}</p>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'movies\'">\n      <ion-item (click)="navMovie(movie)" text-wrap *ngFor="let movie of data.movie_credits?.cast" >\n          <ion-thumbnail item-left>\n            <img src="https://image.tmdb.org/t/p/w92{{movie.poster_path}}">\n          </ion-thumbnail>\n          <h2>{{ movie.title }}</h2>\n          <p ion-text color="light">Acted as {{ movie.character }}</p>\n          <p ion-text color="light">Release Date: {{ movie.release_date }}</p>\n        </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ekene/code/personal-projects/new-movie-ease/src/pages/actor-details/actor-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_actors_api__["a" /* ActorsApi */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_actors_storage__["a" /* ActorsStorage */]])
    ], ActorDetails);
    return ActorDetails;
}());

//# sourceMappingURL=actor-details.js.map

/***/ })

});
//# sourceMappingURL=9.js.map