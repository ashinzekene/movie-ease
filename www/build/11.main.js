webpackJsonp([11],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__series__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesModule", function() { return SeriesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeriesModule = (function () {
    function SeriesModule() {
    }
    return SeriesModule;
}());
SeriesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__series__["a" /* Series */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__series__["a" /* Series */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__series__["a" /* Series */]
        ]
    })
], SeriesModule);

//# sourceMappingURL=series.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_series_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_series_api__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Series; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Series = (function () {
    function Series(navCtrl, navParams, api, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.store = store;
        this._pageNo = 1;
    }
    Series.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Series');
        // this.getPopular();
        // this.getTopRated();
        // this.getLatest();
        this.getUpcoming();
    };
    Series.prototype.goToDetailsPage = function (serie) {
        this.navCtrl.push("SerieDetails", { id: serie.id, data: serie });
    };
    Series.prototype.search = function () {
        this.navCtrl.push("Search", { type: "series" });
    };
    Series.prototype.getTopRated = function () {
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
    Series.prototype.getPopular = function () {
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
    Series.prototype.getLatest = function () {
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
    Series.prototype.getUpcoming = function () {
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
    Series.prototype.doInfinite = function (e, type) {
        var _this = this;
        console.log("async operation started");
        this.api.upcoming(this._pageNo).toPromise().then(function (res) {
            if (res.results) {
                _this.upcoming = _this.upcoming.concat(res.results);
                _this._pageNo++;
                e.complete();
                console.log("async operation ended");
            }
        });
    };
    return Series;
}());
Series = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-series',template:/*ion-inline-start:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\series\series.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SERIES</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col *ngFor="let serie of upcoming" col-12 col-md-6 col-lg-4>\n      <ion-card  (click)="goToDetailsPage(serie)" >\n        <img [src]="\'https://image.tmdb.org/t/p/w500\' + serie.poster_path" [alt]="serie.title">\n        <!-- <ion-card-title text-center>{{ serie.title }}</ion-card-title> -->\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content loadingText="Getting more series... Hold on" loadingSpinner="bubbles" ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\series\series.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_series_api__["a" /* SeriesApi */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_series_storage__["a" /* SeriesStorage */]])
], Series);

//# sourceMappingURL=series.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map