webpackJsonp([0],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies__ = __webpack_require__(300);
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

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var toPromise_1 = __webpack_require__(292);
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(30);
/* tslint:disable:max-line-length */
/**
 * Converts an Observable sequence to a ES2015 compliant promise.
 *
 * @example
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .just(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Rejected Promise
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .throw(new Error('woops'))
 *   .toPromise();
 *
 * source
 *   .then((value) => console.log('Value: %s', value))
 *   .catch((err) => console.log('Error: %s', err));
 * // => Error: Error: woops
 *
 * // Setting via the config
 * Rx.config.Promise = RSVP.Promise;
 *
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Setting via the method
 * let source = Rx.Observable
 *   .just(42)
 *   .toPromise(RSVP.Promise);
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * @param PromiseCtor promise The constructor of the promise. If not provided,
 * it will look for a constructor first in Rx.config.Promise then fall back to
 * the native Promise constructor if available.
 * @return {Promise<T>} An ES2015 compatible promise with the last value from
 * the observable sequence.
 * @method toPromise
 * @owner Observable
 */
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_movies_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_movies_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
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
            _this.upcoming = res.results;
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
    return Movies;
}());
Movies = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-movies',template:/*ion-inline-start:"C:\Users\ekene\code\ionic\movie-ease\src\pages\movies\movies.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MOVIES</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col *ngFor="let movie of upcoming" col-12 col-md-6 col-lg-4>\n      <ion-card  (click)="goToDetailsPage(movie)" >\n        <img [src]="\'https://image.tmdb.org/t/p/w500\' + movie.poster_path" [alt]="movie.title">\n        <!-- <ion-card-title text-center>{{ movie.title }}</ion-card-title> -->\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingText="Getting more movies... Hold on" loadingSpinner="bubbles" ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ekene\code\ionic\movie-ease\src\pages\movies\movies.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_movies_api__["a" /* MoviesApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_movies_api__["a" /* MoviesApi */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_storage_movies_storage__["a" /* MoviesStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_storage_movies_storage__["a" /* MoviesStorage */]) === "function" && _e || Object])
], Movies);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=movies.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map