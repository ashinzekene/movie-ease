webpackJsonp([2],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_movies_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_movies_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Home = (function () {
    function Home(toastCtrl, navCtrl, store, movies) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.store = store;
        this.movies = movies;
        this._pageNo = 2;
        this.size = 342;
        this.items = [];
        this.upcomingMovies = [];
        this.cannotLoadContent = true;
        this.movies.latest().subscribe(function (res) {
            console.log(res);
            _this.store.setLatest(res);
            _this.upcomingMovies = res.results;
        }, function (err) {
            _this.getOffline();
        });
    }
    Home.prototype.goToDetailsPage = function (movie) {
        this.navCtrl.push("MovieDetails", { id: movie.id, data: movie, imgSize: this.size });
    };
    Home.prototype.getOffline = function () {
        var _this = this;
        this.showToast("You are currently offline, serving you cached content");
        this.store.getLatest().then(function (res) {
            _this.upcomingMovies = res.results;
        });
    };
    Home.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: "bottom"
        });
        toast.present();
    };
    Home.prototype.doInfinite = function (e) {
        var _this = this;
        console.log('Begin async operation');
        return this.movies.latest(this._pageNo).toPromise().then(function (res) {
            _this.upcomingMovies = _this.upcomingMovies.concat(res.results);
            _this._pageNo++;
            console.log('Async operation ended');
            e.complete();
        });
    };
    Home.prototype.search = function () {
        this.navCtrl.push("Search");
    };
    Home.prototype.doRefresh = function (refresher) {
        //this.ionViewDidLoad()
    };
    Home.prototype.ionViewDidLoad = function () {
        // this.slides.slideTo(this.slideIndex || 0)
        var width = this.content.getContentDimensions().contentWidth;
        if (width >= 530) {
            console.log("Tablet");
            this.size = 500;
        }
    };
    return Home;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Content */])
], Home.prototype, "content", void 0);
Home = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\ekene\code\ionic\movie-ease\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MOVIE EASE</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col *ngFor="let movie of upcomingMovies" col-12 col-md-6 col-lg-4>\n      <ion-card  (click)="goToDetailsPage(movie)" >\n        <img [src]="\'https://image.tmdb.org/t/p/w\'+ size + movie.poster_path" [alt]="movie.title">\n        <!-- <ion-card-title text-center>{{ movie.title }}</ion-card-title> -->\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content loadingText="Getting more movies..." loadingSpinner="bubbles" ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ekene\code\ionic\movie-ease\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_movies_storage__["a" /* MoviesStorage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_movies_api__["a" /* MoviesApi */]])
], Home);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map