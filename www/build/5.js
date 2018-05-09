webpackJsonp([5],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_movies_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_movies_api__ = __webpack_require__(105);
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
        this.store.getLatest().then(function (res) {
            if (!res.results[0]) {
                _this.presentToast("You are offline and there's nothing in the cache. Guess we'd just have to be looking at ourselves");
            }
            else {
                _this.presentToast("You are currently offline, serving you cached content");
                _this.upcomingMovies = res.results;
            }
        });
    };
    Home.prototype.presentToast = function (msg) {
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
        }).catch(function (err) {
            _this.presentToast("Can't fetch you more movies. There seems to be something wrong with the network 😥📵");
        });
    };
    Home.prototype.search = function () {
        this.navCtrl.push("Search");
    };
    Home.prototype.ionViewDidLoad = function () {
        // this.slides.slideTo(this.slideIndex || 0)
        var width = this.content.getContentDimensions().contentWidth;
        if (width >= 530) {
            console.log("Tablet");
            this.size = 500;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], Home.prototype, "content", void 0);
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MOVIE EASE</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col *ngFor="let movie of upcomingMovies" col-12 col-md-6 col-lg-4>\n      <ion-card  (click)="goToDetailsPage(movie)" >\n        <img [src]="\'https://image.tmdb.org/t/p/w\'+ size + movie.poster_path" [alt]="movie.title">\n        <!-- <ion-card-title text-center>{{ movie.title }}</ion-card-title> -->\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content loadingText="Getting more movies..." loadingSpinner="bubbles" ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_movies_storage__["a" /* MoviesStorage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_movies_api__["a" /* MoviesApi */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=5.js.map