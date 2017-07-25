webpackJsonp([4],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(297);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* Search */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* Search */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* Search */]
        ]
    })
], SearchModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Search page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Search = (function () {
    function Search(navCtrl, navParams, popCtrl, _api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popCtrl = popCtrl;
        this._api = _api;
        console.log(this.navParams.data.type);
        this._type = this.navParams.data.type || "movies";
    }
    Search.prototype.search = function () {
        var _this = this;
        clearTimeout(this._req);
        this._req = setTimeout(function () {
            _this._api.search(_this.queryText, _this._type).subscribe(function (res) {
                console.log(res);
                _this.result = res.results;
            });
            console.info("Sending request");
        }, 1000);
    };
    Search.prototype.nav = function (data) {
        if (data.first_air_date) {
            this.navSerie(data);
        }
        else if (data.title) {
            this.navSerie(data);
        }
        else if (data.name) {
            this.navActor(data);
        }
    };
    Search.prototype.navActor = function (actor) {
        this.navCtrl.push("ActorDetails", { data: actor, id: actor.id });
    };
    Search.prototype.navMovie = function (movie) {
        this.navCtrl.push("MovieDetails", { data: movie, id: movie.id });
    };
    Search.prototype.navSerie = function (serie) {
        this.navCtrl.push("SerieDetails", { data: serie, id: serie.id });
    };
    Search.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Search');
    };
    return Search;
}());
Search = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        defaultHistory: ["Home"]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="search()"\n                   placeholder="Search">\n    </ion-searchbar>\n  </ion-navbar>\n  \n    <ion-item>\n      <ion-label>Type</ion-label>\n      <ion-select [(ngModel)]="_type" interface="popover" cancelText="Nah" okText="Yeah!">\n        <ion-option value="movies">Movies</ion-option>\n        <ion-option value="series">Series</ion-option>\n        <ion-option value="actors">Actors</ion-option>\n      </ion-select>\n    </ion-item>\n\n</ion-header>\n\n<ion-content>\n  <div class="full">\n    <ion-card (click)="nav(data)" *ngFor="let data of result">\n      <div class="wrapper">\n        <img [src]="\'https://image.tmdb.org/t/p/w342\'+ (data.poster_path || data.profile_path)" alt="{{data.title }}">\n        <div class="text">\n          <div text-capitalize text-underline class="title">{{ data.name }}</div>\n          <div text-capitalize text-underline class="subtitle">{{ data.status || data.release_date  }}</div>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n\n<!--\n<ion-content padding>\n  <div class="listings">\n    <ion-card (click)="nav(data)"  *ngFor="let data of result" [ngStyle]=\'{"background-image": "url(https://image.tmdb.org/t/p/w342"+ data.poster_path || data.profile_path +")"}\'>\n      <div class="wrapper">\n        <div text-capitalize text-underlineclass="card-subtitle">{{ data.title || data.name}}</div>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>-->\n'/*ion-inline-end:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */]])
], Search);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map