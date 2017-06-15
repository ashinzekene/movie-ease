webpackJsonp([0],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serie_details__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerieDetailsModule", function() { return SerieDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SerieDetailsModule = (function () {
    function SerieDetailsModule() {
    }
    return SerieDetailsModule;
}());
SerieDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__serie_details__["a" /* SerieDetails */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__serie_details__["a" /* SerieDetails */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__serie_details__["a" /* SerieDetails */]
        ]
    })
], SerieDetailsModule);

//# sourceMappingURL=serie-details.module.js.map

/***/ }),

/***/ 290:
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_series_api__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_series_storage__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_genres__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SerieDetails = (function () {
    function SerieDetails(navCtrl, navParams, _api, _storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._api = _api;
        this._storage = _storage;
        this.data = {};
        this.serieDetail = "info";
        this._genres = __WEBPACK_IMPORTED_MODULE_4__providers_data_genres__["a" /* MovieGenres */];
        if (this.navParams.data.data) {
            this.data = this.navParams.data.data;
        }
        this._api.one(this.navParams.data.id).subscribe(function (res) {
            _this.data = res;
        });
    }
    SerieDetails.prototype.getGenre = function (id) {
        this._genres.find(function (genre) {
            return genre.id === id;
        });
    };
    SerieDetails.prototype.navActor = function (actor) {
        this.navCtrl.push("ActorDetails", { data: actor, id: actor.id });
    };
    SerieDetails.prototype.navSerie = function (serie) {
        this.navCtrl.push("SerieDetails", { data: serie, id: serie.id });
    };
    SerieDetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeriesDetails');
    };
    return SerieDetails;
}());
SerieDetails = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        segment: "series/:id",
        defaultHistory: ["Series"]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-serie-details',template:/*ion-inline-start:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\serie-details\serie-details.html"*/'<ion-header>\n\n  <ion-navbar color="gradient">\n    <ion-title>{{ data.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="details" [ngStyle]="{\'background-image\': \'url(https://image.tmdb.org/t/p/w500\' + data.poster_path + \')\' }">\n  <div class="wrapper">\n    <div>\n      <h1 class="title">{{ data.name }}</h1>\n    </div>\n  </div>\n  <ion-toolbar no-border>\n    <ion-segment color="light" [(ngModel)]="serieDetail">\n      <ion-segment-button value="episode">\n        Episodes\n      </ion-segment-button>\n      <ion-segment-button value="info">\n        Info\n      </ion-segment-button>\n      <ion-segment-button value="cast">\n        Cast\n      </ion-segment-button>\n      <ion-segment-button value="similar">\n        Similar\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div [ngSwitch]="serieDetail">\n    <ion-item>\n      <ion-chip *ngFor="let genre of data.genres">\n        <ion-icon name="information-circle"></ion-icon>\n        <ion-label color="light">{{ genre.name }}</ion-label>\n      </ion-chip>\n    </ion-item>\n    <ion-list *ngSwitchCase="\'info\'">\n      <ion-item text-wrap>Status: {{ data.status }}</ion-item>\n      <ion-item text-wrap>First Aired: {{ data.first_air_date }}</ion-item>\n      <ion-item text-wrap>Last Aired: {{ data.last_air_date }}</ion-item>\n      <ion-item text-wrap>Episode Run Time: {{ data.episode_run_time }}</ion-item>\n      <ion-item text-wrap>Overview: {{ data.overview }}</ion-item>\n      <ion-item text-wrap>{{ data.in_production ? "In production" : "Not in production" }}</ion-item>\n      <ion-item text-wrap>Type: {{ data.type }}</ion-item>\n      <ion-item text-wrap>Vote Average: {{ data.vote_average }}</ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'episode\'">\n      <ion-item *ngFor="let season of data.seasons">\n        <ion-thumbnail item-left>\n          <img src="https://image.tmdb.org/t/p/w92{{season.poster_path}}" alt="data.name, season {{ season?.season_number }}">\n        </ion-thumbnail>\n        <h3>Season {{ season?.season_number }}</h3>\n        <p>No of episodes: {{ season?.episode_count }} </p>\n        <p>Air date: {{ season?.air_date }} </p>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'similar\'">\n      <ion-item text-wrap (click)="navSerie(similar)" *ngFor="let similar of data.similar?.results" >\n        <ion-thumbnail item-left>\n          <img src="https://image.tmdb.org/t/p/w92{{similar.poster_path}}">\n        </ion-thumbnail>\n        <h2>{{ similar.name }}</h2>\n        <p>First Air Date {{ similar.first_air_date }}</p>\n        \n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'cast\'">\n      <!--<ion-item text-wrap *ngFor="let cast of data.credits?.cast" (click)="showPerson(cast.id)" >{{ cast.name + " as " + cast.character }}</ion-item>-->\n      <ion-item *ngFor="let cast of data.credits?.cast" (click)="navActor(cast)">\n        <ion-avatar item-left>\n          <img src="https://image.tmdb.org/t/p/w92{{cast.profile_path}}">\n        </ion-avatar>\n        <h2>{{ cast.name }}</h2>\n        <p>Acted as {{ cast.character }}</p>\n      </ion-item>\n      \n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\serie-details\serie-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_series_api__["a" /* SeriesApi */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_series_storage__["a" /* SeriesStorage */]])
], SerieDetails);

//# sourceMappingURL=serie-details.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map