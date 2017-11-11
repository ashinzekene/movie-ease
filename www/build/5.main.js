webpackJsonp([5],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_details__ = __webpack_require__(294);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsModule", function() { return MovieDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovieDetailsModule = (function () {
    function MovieDetailsModule() {
    }
    return MovieDetailsModule;
}());
MovieDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetails */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetails */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetails */]
        ]
    })
], MovieDetailsModule);

//# sourceMappingURL=movie-details.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieGenres; });
var MovieGenres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
];
//# sourceMappingURL=genres.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_movies_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_movies_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_genres__ = __webpack_require__(293);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieDetails = (function () {
    function MovieDetails(navCtrl, navParams, _store, _api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._store = _store;
        this._api = _api;
        this.data = {};
        this.movieDetail = 'info';
        this._genres = __WEBPACK_IMPORTED_MODULE_4__providers_data_genres__["a" /* MovieGenres */];
        if (this.navParams.data.data) {
            this.data = this.navParams.data.data;
        }
        this._api.one(this.navParams.data.id).subscribe(function (res) {
            _this.data = res;
            console.log(res);
        });
    }
    MovieDetails.prototype.getGenre = function (id) {
        this._genres.find(function (genre) {
            return genre.id === id;
        });
    };
    MovieDetails.prototype.navActor = function (actor) {
        this.navCtrl.push("ActorDetails", { data: actor, id: actor.id });
    };
    MovieDetails.prototype.navMovie = function (movie) {
        this.navCtrl.push("MovieDetails", { data: movie, id: movie.id });
    };
    MovieDetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MovieDetails');
    };
    MovieDetails.prototype.ionViewWillEnter = function () {
    };
    MovieDetails.prototype.save = function () {
        //add ability to save film for viewing later
    };
    return MovieDetails;
}());
MovieDetails = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        segment: "movies/:id",
        defaultHistory: ['Movies']
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-movie-details',template:/*ion-inline-start:"C:\Users\ekene\code\ionic\movie-ease\src\pages\movie-details\movie-details.html"*/'<ion-header>\n\n  <ion-navbar class="gradient-header">\n    <ion-title>{{ data.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="details" [ngStyle]="{\'background-image\': \'url(https://image.tmdb.org/t/p/w780\' + data.backdrop_path + \')\' }">\n    <div class="wrapper">\n      <div ion-text text-center class="tagline">\n        {{ data.tagline }}\n      </div>\n    </div>\n\n    <ion-toolbar no-border>\n      <ion-segment [(ngModel)]="movieDetail">\n        <ion-segment-button value="reviews">\n          Reviews\n        </ion-segment-button>\n        <ion-segment-button value="info">\n          Info\n        </ion-segment-button>\n        <ion-segment-button value="cast">\n          Cast\n        </ion-segment-button>\n        <ion-segment-button value="similar">\n          Similar\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n\n    <div [ngSwitch]="movieDetail">\n      <ion-item text-wrap>\n        <ion-chip *ngFor="let genre of data.genres">\n          <ion-icon name="information-circle"></ion-icon>\n          <ion-label color="light">{{ genre.name }}</ion-label>\n        </ion-chip>\n      </ion-item>\n      <ion-list *ngSwitchCase="\'info\'">\n        <ion-item text-wrap>Release Date: {{ data.release_date }}</ion-item>\n        <ion-item text-wrap>Status: {{ data.status }}</ion-item>\n        <ion-item text-wrap>Overview: {{ data.overview }}</ion-item>\n        <ion-item text-wrap>Revenue: {{ data.revenue }}</ion-item>\n        <ion-item text-wrap>Popularity: {{ data.popularity }}</ion-item>\n        <ion-item text-wrap>Vote Average: {{ data.vote_average }}</ion-item>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'reviews\'">\n        <ion-item *ngIf="!data.reviews"><h3>No Reviews available yet</h3></ion-item>\n        <ion-item *ngFor="let review of data.reviews?.results">\n          <h2>{{ review.author }}</h2>\n          <p ion-text text-wrap>{{ review.content }}</p>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'similar\'">\n        <ion-item text-wrap (click)="navMovie(similar)" *ngFor="let similar of data.similar?.results" >\n          <ion-thumbnail item-left>\n            <img src="https://image.tmdb.org/t/p/w92{{similar.poster_path}}">\n          </ion-thumbnail>\n          <h2>{{ similar.title }}</h2>\n          <p>Release Date {{ similar.release_date }}</p>\n          \n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'cast\'">\n        <ion-item *ngFor="let cast of data.credits?.cast" (click)="navActor(cast)">\n          <ion-avatar item-left>\n            <img src="https://image.tmdb.org/t/p/w92{{cast.profile_path}}">\n          </ion-avatar>\n          <h2>{{ cast.name }}</h2>\n          <p>Acted as {{ cast.character }}</p>\n        </ion-item>\n        \n      </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ekene\code\ionic\movie-ease\src\pages\movie-details\movie-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_movies_storage__["a" /* MoviesStorage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_movies_api__["a" /* MoviesApi */]])
], MovieDetails);

//# sourceMappingURL=movie-details.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map