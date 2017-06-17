webpackJsonp([5],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(294);
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_movies_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_movies_api__ = __webpack_require__(107);
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
    function Home(navCtrl, store, movies) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.movies = movies;
        this._pageNo = 1;
        this.upcomingMovies = [];
        this.getUpcomingMovies();
    }
    Home.prototype.goToDetailsPage = function (movie) {
        this.navCtrl.push('MovieDetails', { id: movie.id, data: movie });
    };
    Home.prototype.loadUpcoming = function () {
        var _this = this;
        this.movies.upcoming(this._pageNo).subscribe(function (res) {
            if (_this._pageNo === 1)
                _this.upcomingMovies = res.results;
            else
                _this.upcomingMovies = _this.upcomingMovies.concat(res.results);
            _this._pageNo++;
        });
    };
    Home.prototype.getUpcomingMovies = function () {
        var _this = this;
        this.store.getUpcoming().then(function (res) {
            _this.upcomingMovies = res.results;
            console.log("On page", res);
        });
    };
    Home.prototype.changeSlide = function (sym) {
        sym === "+" ? this.slides.slideNext() : this.slides.slidePrev();
    };
    Home.prototype.search = function () {
        this.navCtrl.push("Search");
    };
    Home.prototype.doRefresh = function (refresher) {
        //this.ionViewDidLoad()
    };
    Home.prototype.slideChange = function (e) {
        // this.slideIndex = this.slides.getActiveIndex()
        var slidesRemaining = this.slides.length() - this.slides.getActiveIndex();
        var scrollForward = this.slides.getActiveIndex() > this.slides.getPreviousIndex();
        if (slidesRemaining === 3 && scrollForward) {
            this.loadUpcoming();
        }
    };
    Home.prototype.ionViewDidLoad = function () {
        // this.slides.slideTo(this.slideIndex || 0)
        var width = this.content.getContentDimensions().contentWidth;
        if (width <= 420) {
            console.log("Small screen");
            this.slidesPerPage = 1;
        }
        else if (width <= 530) {
            console.log("Tablet");
            this.slidesPerPage = 2;
        }
        else if (width <= 650) {
            console.log("Tablet");
            this.slidesPerPage = 3;
        }
        else if (width > 770) {
            console.log("Big screen");
            this.slidesPerPage = 4;
        }
        else {
            console.log("Cannot get Screen size");
            this.slidesPerPage = 2;
        }
    };
    return Home;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Content */])
], Home.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], Home.prototype, "slides", void 0);
Home = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        segment: "/"
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MOVIE EASE</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content refreshingText="Fetching new movies"></ion-refresher-content>\n  </ion-refresher>\n  <div>\n    <ion-fab right middle>\n      <button ion-fab (click)="changeSlide(\'+\')" color="half-transparent"><ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-fab>\n    <ion-fab left middle>\n      <button ion-fab (click)="changeSlide(\'-\')" color="half-transparent"><ion-icon name="arrow-back"></ion-icon></button>\n    </ion-fab>\n    <ion-slides class="slider" slidesPerView="{{ slidesPerPage }}" speed="800" (ionSlideWillChange)="slideChange($event)" >\n\n      <ion-slide (click)="goToDetailsPage(movie)" *ngFor="let movie of upcomingMovies" [ngStyle]=\'{"background-image": "url(https://image.tmdb.org/t/p/w342"+ movie.poster_path +")"}\' (ionSlideWillChange)="slideCheck()">\n        <div class="wrapper">\n          <div text-capitalize text-underline class="movie-text">{{ movie.title }}</div>\n        </div>\n      </ion-slide>\n      \n    </ion-slides>\n  </div>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_movies_storage__["a" /* MoviesStorage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_movies_api__["a" /* MoviesApi */]])
], Home);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map