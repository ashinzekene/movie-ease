webpackJsonp([14],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies__ = __webpack_require__(296);
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

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_movies_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_movies_storage__ = __webpack_require__(108);
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
        this._pageNo = 1;
    }
    Movies.prototype.goToDetailsPage = function (movie) {
        this.navCtrl.push("MovieDetails", { id: movie.id, data: movie });
    };
    Movies.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Movies');
        this.getPopular();
        this.getTopRated();
        this.getLatest();
        this.getUpcoming();
        if (this.content.getContentDimensions().contentWidth < 415) {
            this.smallScreen = true;
            console.log(this.content.getContentDimensions().contentWidth);
        }
        else {
            this.smallScreen = false;
            console.log(this.content.getContentDimensions().contentWidth);
        }
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
            _this.topRated = res.results;
            //else this.topRated = this.topRated.concat(res.results)
            // this._pageNo++
        });
    };
    Movies.prototype.getPopular = function () {
        var _this = this;
        console.log("getting popular");
        this.store.getPopular().then(function (res) {
            _this.popular = res.results;
        });
        this.api.popular(this._pageNo).subscribe(function (res) {
            _this.popular = res.results;
            //else this.popular = this.popular.concat(res.results)
            // this._pageNo++
        });
    };
    Movies.prototype.getLatest = function () {
        var _this = this;
        this.store.getLatest().then(function (res) {
            _this.latest = res.results;
        });
        this.api.latest(this._pageNo).subscribe(function (res) {
            _this.latest = res.results;
            //else this.latest = this.latest.concat(res.results)
            // this._pageNo++
        });
    };
    Movies.prototype.getUpcoming = function () {
        var _this = this;
        this.store.getUpcoming().then(function (res) {
            _this.upcoming = res.results;
        });
        this.api.upcoming(this._pageNo).subscribe(function (res) {
            _this.upcoming = res.results;
            //else this.upcoming = this.upcoming.concat(res.results)
            // this._pageNo++
        });
    };
    Movies.prototype.loadMore = function () {
        var dimension = this.content.getContentDimensions();
        var scrollTop = dimension.scrollTop;
        var scrollHeight = dimension.scrollHeight;
        var contentHeight = dimension.contentHeight;
        if (scrollHeight < (scrollTop + 2 * contentHeight)) {
            console.log(this.content.getContentDimensions());
        }
    };
    return Movies;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Content */])
], Movies.prototype, "content", void 0);
Movies = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-movies',template:/*ion-inline-start:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\movies\movies.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MOVIES</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding (ionScrollEnd)="loadMore()">\n  <div class="full">\n    <ion-card (click)="goToDetailsPage(movie)" *ngFor="let movie of popular">\n      <div class="wrapper">\n        <img [src]="\'https://image.tmdb.org/t/p/w342\'+ movie.poster_path" alt="{{movie.title }}">\n        <div class="text">\n          <div text-capitalize text-underline class="title">{{ movie.title }}</div>\n          <div text-capitalize text-underline class="subtitle">{{ movie.release_date }}</div>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\movies\movies.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_movies_api__["a" /* MoviesApi */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_movies_storage__["a" /* MoviesStorage */]])
], Movies);

//# sourceMappingURL=movies.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map