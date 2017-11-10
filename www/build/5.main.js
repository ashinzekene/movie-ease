webpackJsonp([5],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actors__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorsModule", function() { return ActorsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActorsModule = (function () {
    function ActorsModule() {
    }
    return ActorsModule;
}());
ActorsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__actors__["a" /* Actors */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__actors__["a" /* Actors */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__actors__["a" /* Actors */]
        ]
    })
], ActorsModule);

//# sourceMappingURL=actors.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_actors_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_actors_api__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actors; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Actors = (function () {
    function Actors(navCtrl, navParams, menuCtrl, api, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.api = api;
        this.store = store;
    }
    Actors.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Actors');
        this.setMenu();
        this.getPopular();
    };
    Actors.prototype.goToDetailsPage = function (actor) {
        this.navCtrl.push("ActorDetails", { data: actor, id: actor.id });
    };
    Actors.prototype.search = function () {
        this.navCtrl.push("Search", { type: "actors" });
    };
    Actors.prototype.getPopular = function () {
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
    Actors.prototype.setMenu = function () {
        this.menuCtrl.enable(true, "actors");
    };
    Actors.prototype.loadMore = function () {
    };
    return Actors;
}());
Actors = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-actors',template:/*ion-inline-start:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\actors\actors.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ACTORS</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col *ngFor="let actor of popular" col-12 col-md-6 col-lg-4>\n      <ion-card  (click)="goToDetailsPage(actor)" >\n        <img [src]="\'https://image.tmdb.org/t/p/w500\' + actor.profile_path" [alt]="actor.title">\n        <!-- <ion-card-title text-center>{{ actor.title }}</ion-card-title> -->\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content loadingText="Getting more actors... Hold on" loadingSpinner="bubbles" ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\actors\actors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_actors_api__["a" /* ActorsApi */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_actors_storage__["a" /* ActorsStorage */]])
], Actors);

//# sourceMappingURL=actors.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map