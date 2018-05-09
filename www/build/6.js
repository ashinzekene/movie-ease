webpackJsonp([6],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorsModule", function() { return ActorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actors__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActorsModule = /** @class */ (function () {
    function ActorsModule() {
    }
    ActorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__actors__["a" /* Actors */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__actors__["a" /* Actors */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__actors__["a" /* Actors */]
            ]
        })
    ], ActorsModule);
    return ActorsModule;
}());

//# sourceMappingURL=actors.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_actors_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_actors_api__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(305);
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





var Actors = /** @class */ (function () {
    function Actors(navCtrl, navParams, toastCtrl, api, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.store = store;
        this.isOffline = true;
        this._pageNo = 1;
        this.getPopular();
    }
    Actors.prototype.goToDetailsPage = function (actor) {
        this.navCtrl.push("ActorDetails", { data: actor, id: actor.id });
    };
    Actors.prototype.search = function () {
        this.navCtrl.push("Search", { type: "actors" });
    };
    Actors.prototype.getPopular = function () {
        var _this = this;
        console.log("getting popular");
        this.api.popular(this._pageNo).subscribe(function (res) {
            _this.isOffline = false;
            _this._pageNo++;
            _this.popular = res.results;
        }, function (err) { return _this.getOffline(); });
    };
    Actors.prototype.getOffline = function (msg) {
        var _this = this;
        this.isOffline = true;
        this.store.getPopular().then(function (res) {
            if (!res.results[0]) {
                _this.presentToast("You are offline and there's nothing in the cache. Guess we'd just have to be looking at ourselves");
            }
            else {
                _this.presentToast("You are currently offline, serving you cached content");
                _this.popular = res.results;
            }
        });
    };
    Actors.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("async operation started");
        if (this.isOffline) {
            e.complete();
            // return this.presentToast("Can't fetch you more actors. There seems to be something wrong with the network 😥📵")
        }
        this.api.popular(this._pageNo).toPromise().then(function (res) {
            if (res.results) {
                _this.popular = _this.popular.concat(res.results);
                _this._pageNo++;
                e.complete();
                console.log("async operation ended");
            }
        }).catch(function (err) {
            _this.presentToast("Can't fetch you more actors. There seems to be something wrong with the network 😥📵");
        });
    };
    Actors.prototype.presentToast = function (message) {
        this.toastCtrl.create({
            position: "bottom",
            duration: 4000,
            message: message,
        }).present();
    };
    Actors = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actors',template:/*ion-inline-start:"/home/ekene/code/personal-projects/new-movie-ease/src/pages/actors/actors.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ACTORS</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col *ngFor="let actor of popular" col-12 col-md-6 col-lg-4>\n      <ion-card  (click)="goToDetailsPage(actor)" >\n        <img [src]="\'https://image.tmdb.org/t/p/w500\' + actor.profile_path" [alt]="actor.name">\n        <!-- <ion-card-title text-center>{{ actor.title }}</ion-card-title> -->\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingText="Getting more actors... Hold on" loadingSpinner="bubbles" ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/home/ekene/code/personal-projects/new-movie-ease/src/pages/actors/actors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_actors_api__["a" /* ActorsApi */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_actors_storage__["a" /* ActorsStorage */]])
    ], Actors);
    return Actors;
}());

//# sourceMappingURL=actors.js.map

/***/ })

});
//# sourceMappingURL=6.js.map