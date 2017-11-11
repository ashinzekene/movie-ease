webpackJsonp([3],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actors__ = __webpack_require__(296);
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

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_actors_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_actors_api__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
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
    function Actors(navCtrl, navParams, toastCtrl, api, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.store = store;
        this._pageNo = 2;
    }
    Actors.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Actors');
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
        this.api.popular(this._pageNo).subscribe(function (res) {
            _this.popular = res.results;
        }, function (err) { return _this.getOffline(); });
    };
    Actors.prototype.getOffline = function (msg) {
        var _this = this;
        this.presentToast(msg || "You are currently offline, serving you cached content");
        this.store.getPopular().then(function (res) {
            console.log("rec", res);
            _this.popular = res.results;
        });
    };
    Actors.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("async operation started");
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
    return Actors;
}());
Actors = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-actors',template:/*ion-inline-start:"C:\Users\ekene\code\ionic\movie-ease\src\pages\actors\actors.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ACTORS</ion-title>\n    <ion-buttons end (click)="search()">\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col *ngFor="let actor of popular" col-12 col-md-6 col-lg-4>\n      <ion-card  (click)="goToDetailsPage(actor)" >\n        <img [src]="\'https://image.tmdb.org/t/p/w500\' + actor.profile_path" [alt]="actor.name">\n        <!-- <ion-card-title text-center>{{ actor.title }}</ion-card-title> -->\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingText="Getting more actors... Hold on" loadingSpinner="bubbles" ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\ekene\code\ionic\movie-ease\src\pages\actors\actors.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_actors_api__["a" /* ActorsApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_actors_api__["a" /* ActorsApi */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_storage_actors_storage__["a" /* ActorsStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_storage_actors_storage__["a" /* ActorsStorage */]) === "function" && _e || Object])
], Actors);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=actors.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map