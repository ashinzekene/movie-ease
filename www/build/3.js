webpackJsonp([3],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoviesModule = (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movies__["a" /* Movies */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movies__["a" /* Movies */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__movies__["a" /* Movies */]
            ]
        })
    ], MoviesModule);
    return MoviesModule;
}());

//# sourceMappingURL=movies.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movies; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_movies_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_movies_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
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
    function Movies(toastCtrl, navCtrl, navParams, api, store) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.store = store;
        this._pageNo = 2;
        this.getUpcoming();
    }
    Movies.prototype.goToDetailsPage = function (movie) {
        this.navCtrl.push("MovieDetails", { id: movie.id, data: movie });
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
        // this.store.getLatest().then(res=> {
        //   this.latest = res.results;
        // })
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
    Movies.prototype.loadOffline = function (msg) {
        var _this = this;
        this.presentToast(msg || "You are currently offline, serving you cached content");
        this.store.getUpcoming().then(function (res) {
            if (!res.results[0]) {
                _this.presentToast("You are offline and there's nothing in the cache. Guess we'd just have to be looking at ourselves");
            }
            else {
                _this.presentToast("You are currently offline, serving you cached content");
                _this.upcoming = res.results;
            }
        });
    };
    Movies.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("async operation started");
        this.api.upcoming(this._pageNo).toPromise().then(function (res) {
            if (res.results) {
                _this.upcoming = _this.upcoming.concat(res.results);
                _this._pageNo++;
                e.complete();
                console.log("async operation ended");
            }
        }).catch(function (err) {
            _this.presentToast("Can't fetch you more movies. There seems to be something wrong with the network 😥📵");
        });
    };
    Movies.prototype.presentToast = function (message) {
        this.toastCtrl.create({
            position: "bottom",
            duration: 4000,
            message: message,
        }).present();
    };
    Movies = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movies',template:/*ion-inline-start:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\movies\movies.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MOVIES</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col *ngFor="let movie of upcoming" col-12 col-md-6 col-lg-4>\n      <ion-card  (click)="goToDetailsPage(movie)" >\n        <img [src]="\'https://image.tmdb.org/t/p/w500\' + movie.poster_path" [alt]="movie.title">\n        <!-- <ion-card-title text-center>{{ movie.title }}</ion-card-title> -->\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingText="Getting more movies... Hold on" loadingSpinner="bubbles" ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\movies\movies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_movies_api__["a" /* MoviesApi */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_movies_storage__["a" /* MoviesStorage */]])
    ], Movies);
    return Movies;
}());

//# sourceMappingURL=movies.js.map

/***/ })

});
//# sourceMappingURL=3.js.map