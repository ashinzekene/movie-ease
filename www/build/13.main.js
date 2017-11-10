webpackJsonp([13],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies__ = __webpack_require__(301);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoviesModule = (function () {
    function MoviesModule() {
    }
    return MoviesModule;
}());
MoviesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__movies__["a" /* Movies */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movies__["a" /* Movies */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__movies__["a" /* Movies */]
        ]
    })
], MoviesModule);

//# sourceMappingURL=movies.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_movies_api__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_movies_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movies; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Movies = (function () {
    function Movies(navCtrl, navParams, api, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.store = store;
        this._pageNo = 2;
        this.getUpcoming();
    }
    Movies.prototype.goToDetailsPage = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__["a" /* MovieDetails */], { id: movie.id, data: movie });
    };
    Movies.prototype.search = function () {
        this.navCtrl.push("Search", { type: "movies" });
    };
    Movies.prototype.getTopRated = function () {
        var _this = this;
        this.store.getTopRated().then(function (res) {
            _this.topRated = res.results;
        });
        this.api.topRated(this._pageNo).subscribe(function (res) {
            if (res.results)
                _this.topRated = res.results;
        });
    };
    Movies.prototype.getPopular = function () {
        var _this = this;
        console.log("getting popular");
        this.store.getPopular().then(function (res) {
            _this.popular = res.results;
        });
        this.api.popular(this._pageNo).subscribe(function (res) {
            if (res.results)
                _this.popular = res.results;
        });
    };
    Movies.prototype.getLatest = function () {
        var _this = this;
        this.store.getLatest().then(function (res) {
            _this.latest = res.results;
        });
        this.api.latest(this._pageNo).subscribe(function (res) {
            if (res.results)
                _this.latest = res.results;
        });
    };
    Movies.prototype.getUpcoming = function () {
        var _this = this;
        this.api.upcoming().subscribe(function (res) {
            console.log("recieved upcoming");
            _this.store.setLatest(res);
            _this.upcoming = res.results;
        }, function (err) {
            _this.loadOffline();
        });
    };
    Movies.prototype.loadOffline = function () {
        var _this = this;
        this.store.getUpcoming().then(function (res) {
            _this.upcoming = res.results;
        });
    };
    Movies.prototype.doInfinite = function () {
        var _this = this;
        console.log("async operation started");
        this.api.upcoming(this._pageNo).toPromise().then(function (res) {
            if (res.results) {
                _this.upcoming = _this.upcoming.concat(res.results);
                _this._pageNo++;
                console.log("async operation ended");
            }
        });
    };
    return Movies;
}());
Movies = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-movies',template:/*ion-inline-start:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\movies\movies.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MOVIES</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col *ngFor="let movie of upcoming" col-12 col-md-6 col-lg-4>\n      <ion-card  (click)="goToDetailsPage(movie)" >\n        <img [src]="\'https://image.tmdb.org/t/p/w500\' + movie.poster_path" [alt]="movie.title">\n        <!-- <ion-card-title text-center>{{ movie.title }}</ion-card-title> -->\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content loadingText="Getting more movies... Hold on" loadingSpinner="bubbles" ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\movies\movies.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_movies_api__["a" /* MoviesApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_movies_api__["a" /* MoviesApi */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_storage_movies_storage__["a" /* MoviesStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_storage_movies_storage__["a" /* MoviesStorage */]) === "function" && _d || Object])
], Movies);

var _a, _b, _c, _d;
//# sourceMappingURL=movies.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map