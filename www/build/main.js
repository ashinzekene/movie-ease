webpackJsonp([10],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesStorage = /** @class */ (function () {
    function MoviesStorage(store) {
        this.store = store;
        console.log('Hello MoviesStorage Provider');
    }
    MoviesStorage.prototype.setUpcoming = function (res) {
        return this.store.set("upcomingMovies", res);
    };
    MoviesStorage.prototype.getUpcoming = function () {
        return this.store.get("upcomingMovies").then(function (res) {
            if (!res)
                return { results: [] };
            else {
                return JSON.parse(res);
            }
        });
    };
    MoviesStorage.prototype.setLatest = function (res) {
        return this.store.set("latestMovies", res);
    };
    MoviesStorage.prototype.getLatest = function () {
        return this.store.get("latestMovies").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return res;
        });
    };
    MoviesStorage.prototype.setPopular = function (res) {
        return this.store.set("popularMovies", res);
    };
    MoviesStorage.prototype.getPopular = function () {
        return this.store.get("popularMovies").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return JSON.parse(res);
        });
    };
    MoviesStorage.prototype.setTopRated = function (res) {
        return this.store.set("topRatedMovies", res);
    };
    MoviesStorage.prototype.getTopRated = function () {
        return this.store.get("topRatedMovies").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return JSON.parse(res);
        });
    };
    MoviesStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], MoviesStorage);
    return MoviesStorage;
}());

//# sourceMappingURL=movies-storage.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_movies_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MoviesApi = /** @class */ (function () {
    function MoviesApi(http, store) {
        this.http = http;
        this.store = store;
    }
    MoviesApi.prototype.one = function (id) {
        return this.http.get("https://movie-ease.herokuapp.com/movies/one/" + id)
            .map(this.transformObject)
            .catch(this._handleError);
    };
    MoviesApi.prototype.search = function (query) {
        return this.http.get("https://movie-ease.herokuapp.com/movies/search/" + query)
            .map(this.transformObject)
            .catch(this._handleError);
    };
    MoviesApi.prototype.popular = function (n) {
        var _this = this;
        if (n === void 0) { n = 1; }
        console.log("Getting popular");
        return this.http.get('https://movie-ease.herokuapp.com/movies/popular/' + n)
            .map(this.transformObject)
            .map(function (res) {
            if (n === 1)
                _this.store.setPopular(res);
            return res;
        }).catch(this._handleError);
    };
    MoviesApi.prototype.latest = function (n) {
        var _this = this;
        if (n === void 0) { n = 1; }
        console.log("Getting latest");
        return this.http.get('https://movie-ease.herokuapp.com/movies/latest/' + n)
            .map(this.transformObject)
            .map(function (res) {
            if (n < 2 && res.results)
                _this.store.setLatest(res);
            return res;
        }).catch(this._handleError);
    };
    MoviesApi.prototype.upcoming = function (n) {
        var _this = this;
        if (n === void 0) { n = 1; }
        console.log("Getting upcoming");
        return this.http.get('https://movie-ease.herokuapp.com/movies/upcoming/' + n)
            .map(this.transformObject)
            .map(function (res) {
            if (n === 1)
                _this.store.setUpcoming(res);
            return res;
        }).catch(this._handleError);
    };
    MoviesApi.prototype.topRated = function (n) {
        var _this = this;
        if (n === void 0) { n = 1; }
        console.log("Getting topRated");
        return this.http.get('https://movie-ease.herokuapp.com/movies/top-rated/' + n)
            .map(this.transformObject)
            .map(function (res) {
            if (n === 1)
                _this.store.setTopRated(res);
            return res;
        }).catch(this._handleError);
    };
    MoviesApi.prototype.ozone = function () {
        return this.http.get('https://movie-ease.herokuapp.com/movies/ozone')
            .map(this.transformObject)
            .map(function (res) {
            console.log(res);
            return res;
        }).catch(this._handleError);
    };
    MoviesApi.prototype.getAll = function () {
        this.topRated(1).subscribe(function (dat) { return console.log(dat); });
        this.latest(1).subscribe(function (dat) { return console.log(dat); });
        this.upcoming(1).subscribe(function (dat) { return console.log(dat); });
        this.popular(1).subscribe(function (dat) { return console.log(dat); });
    };
    MoviesApi.prototype._handleError = function (err) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("A Network Error Occured");
    };
    MoviesApi.prototype.transformObject = function (str) {
        return typeof str === "object" ? str : JSON.parse(str);
    };
    MoviesApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__storage_movies_storage__["a" /* MoviesStorage */]])
    ], MoviesApi);
    return MoviesApi;
}());

//# sourceMappingURL=movies-api.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorsApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_actors_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActorsApi = /** @class */ (function () {
    function ActorsApi(http, store) {
        this.http = http;
        this.store = store;
    }
    ActorsApi.prototype.one = function (id) {
        return this.http.get("https://movie-ease.herokuapp.com/actors/one/" + id)
            .map(this.transformObject)
            .catch(this._handleError);
    };
    ActorsApi.prototype.search = function (query) {
        return this.http.get("https://movie-ease.herokuapp.com/actors/search/" + query)
            .map(this.transformObject)
            .catch(this._handleError);
    };
    ActorsApi.prototype.popular = function (n) {
        var _this = this;
        if (n === void 0) { n = 1; }
        return this.http.get('https://movie-ease.herokuapp.com/actors/popular/' + n)
            .map(this.transformObject)
            .map(function (res) {
            if (n === 1)
                _this.store.setPopular(res);
            return res;
        }).catch(this._handleError);
    };
    ActorsApi.prototype._handleError = function (err) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Network Error occured");
    };
    ActorsApi.prototype.transformObject = function (str) {
        return typeof str === "object" ? str : JSON.parse(str);
    };
    ActorsApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__storage_actors_storage__["a" /* ActorsStorage */]])
    ], ActorsApi);
    return ActorsApi;
}());

//# sourceMappingURL=actors-api.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorsStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActorsStorage = /** @class */ (function () {
    function ActorsStorage(store) {
        this.store = store;
        console.log('Hello ActorsStorage Provider');
    }
    ActorsStorage.prototype.setUpcoming = function (res) {
        return this.store.set("upcomingActors", res);
    };
    ActorsStorage.prototype.getUpcoming = function () {
        return this.store.get("upcomingActors").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return JSON.parse(res);
        });
    };
    ActorsStorage.prototype.setLatest = function (res) {
        return this.store.set("latestActors", res);
    };
    ActorsStorage.prototype.getLatest = function () {
        return this.store.get("latestActors").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return JSON.parse(res);
        });
    };
    ActorsStorage.prototype.setPopular = function (res) {
        return this.store.set("popularActors", res);
    };
    ActorsStorage.prototype.getPopular = function () {
        return this.store.get("popularActors").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return JSON.parse(res);
        });
    };
    ActorsStorage.prototype.setTopRated = function (res) {
        return this.store.set("topRatedActors", res);
    };
    ActorsStorage.prototype.getTopRated = function () {
        return this.store.get("topRatedActors").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return JSON.parse(res);
        });
    };
    ActorsStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ActorsStorage);
    return ActorsStorage;
}());

//# sourceMappingURL=actors-storage.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_series_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SeriesApi = /** @class */ (function () {
    function SeriesApi(http, store) {
        this.http = http;
        this.store = store;
    }
    SeriesApi.prototype.one = function (id) {
        return this.http.get("https://movie-ease.herokuapp.com/series/one/" + id)
            .map(this.transformObject)
            .map(function (res) {
            return res;
        }).catch(this._handleError);
    };
    SeriesApi.prototype.search = function (query) {
        return this.http.get("https://movie-ease.herokuapp.com/series/search/" + query)
            .map(this.transformObject)
            .map(function (res) {
            return res;
        }).catch(this._handleError);
    };
    SeriesApi.prototype.popular = function (n) {
        if (n === void 0) { n = 1; }
        return this.http.get('https://movie-ease.herokuapp.com/series/popular/' + n)
            .map(this.transformObject)
            .map(function (res) {
            return res;
        }).catch(this._handleError);
    };
    SeriesApi.prototype.latest = function (n) {
        if (n === void 0) { n = 1; }
        return this.http.get('https://movie-ease.herokuapp.com/series/latest/' + n)
            .map(this.transformObject)
            .map(function (res) {
            return res;
        }).catch(this._handleError);
    };
    SeriesApi.prototype.upcoming = function (n) {
        if (n === void 0) { n = 1; }
        return this.http.get('https://movie-ease.herokuapp.com/series/upcoming/' + n)
            .map(this.transformObject)
            .map(function (res) {
            return res;
        }).catch(this._handleError);
    };
    SeriesApi.prototype.topRated = function (n) {
        if (n === void 0) { n = 1; }
        return this.http.get('https://movie-ease.herokuapp.com/series/top-rated/' + n)
            .map(this.transformObject)
            .map(function (res) {
            return res;
        }).catch(this._handleError);
    };
    SeriesApi.prototype._handleError = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Network Error");
    };
    SeriesApi.prototype.transformObject = function (str) {
        return typeof str === "object" ? str : JSON.parse(str);
    };
    SeriesApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__storage_series_storage__["a" /* SeriesStorage */]])
    ], SeriesApi);
    return SeriesApi;
}());

//# sourceMappingURL=series-api.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeriesStorage = /** @class */ (function () {
    function SeriesStorage(store) {
        this.store = store;
        console.log('Hello SeriesStorage Provider');
    }
    SeriesStorage.prototype.setUpcoming = function (res) {
        return this.store.set("upcomingSeries", res);
    };
    SeriesStorage.prototype.getUpcoming = function () {
        return this.store.get("upcomingSeries").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return JSON.parse(res);
        });
    };
    SeriesStorage.prototype.setLatest = function (res) {
        return this.store.set("latestSeries", res);
    };
    SeriesStorage.prototype.getLatest = function () {
        return this.store.get("latestSeries").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return JSON.parse(res);
        });
    };
    SeriesStorage.prototype.setPopular = function (res) {
        return this.store.set("popularSeries", res);
    };
    SeriesStorage.prototype.getPopular = function () {
        return this.store.get("popularSeries").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return JSON.parse(res);
        });
    };
    SeriesStorage.prototype.setTopRated = function (res) {
        return this.store.set("topRatedSeries", res);
    };
    SeriesStorage.prototype.getTopRated = function () {
        return this.store.get("topRatedSeries").then(function (res) {
            if (!res)
                return { results: [] };
            else
                return JSON.parse(res);
        });
    };
    SeriesStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], SeriesStorage);
    return SeriesStorage;
}());

//# sourceMappingURL=series-storage.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movies_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__series_api__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actors_api__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Api = /** @class */ (function () {
    function Api(actors, movies, series) {
        this.actors = actors;
        this.movies = movies;
        this.series = series;
    }
    Api.prototype.getAll = function () {
    };
    Api.prototype.search = function (text, types) {
        if (types === 'movies') {
            this.moviesObservable = this.movies.search(text);
            return this.movies.search(text);
        }
        if (types === 'actors') {
            this.actorsObservable = this.actors.search(text);
            return this.actors.search(text);
        }
        if (types === 'series') {
            this.seriesObservable = this.series.search(text);
            return this.series.search(text);
        }
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__actors_api__["a" /* ActorsApi */], __WEBPACK_IMPORTED_MODULE_1__movies_api__["a" /* MoviesApi */], __WEBPACK_IMPORTED_MODULE_2__series_api__["a" /* SeriesApi */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/actor-details/actor-details.module": [
		295,
		9
	],
	"../pages/actors/actors.module": [
		296,
		6
	],
	"../pages/cinemas/cinemas.module": [
		297,
		8
	],
	"../pages/discover/discover.module": [
		298,
		7
	],
	"../pages/home/home.module": [
		299,
		5
	],
	"../pages/movie-details/movie-details.module": [
		300,
		4
	],
	"../pages/movies/movies.module": [
		304,
		3
	],
	"../pages/search/search.module": [
		302,
		0
	],
	"../pages/serie-details/serie-details.module": [
		301,
		2
	],
	"../pages/series/series.module": [
		303,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_movies_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_series_api__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_actors_api__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_storage_movies_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_storage_series_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_storage_actors_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/actor-details/actor-details.module#ActorDetailsModule', name: 'ActorDetails', segment: 'actors/:id', priority: 'low', defaultHistory: ['Actors'] },
                        { loadChildren: '../pages/actors/actors.module#ActorsModule', name: 'Actors', segment: 'actors', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cinemas/cinemas.module#CinemasPageModule', name: 'CinemasPage', segment: 'cinemas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discover/discover.module#DiscoverModule', name: 'Discover', segment: 'discover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'Home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsModule', name: 'MovieDetails', segment: 'movies/:id', priority: 'low', defaultHistory: ['Movies'] },
                        { loadChildren: '../pages/serie-details/serie-details.module#SerieDetailsModule', name: 'SerieDetails', segment: 'series/:id', priority: 'low', defaultHistory: ['Series'] },
                        { loadChildren: '../pages/search/search.module#SearchModule', name: 'Search', segment: 'search', priority: 'low', defaultHistory: ['Home'] },
                        { loadChildren: '../pages/series/series.module#SeriesModule', name: 'Series', segment: 'series', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movies/movies.module#MoviesModule', name: 'Movies', segment: 'movies', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__providers_api_movies_api__["a" /* MoviesApi */],
                __WEBPACK_IMPORTED_MODULE_7__providers_api_actors_api__["a" /* ActorsApi */],
                __WEBPACK_IMPORTED_MODULE_6__providers_api_series_api__["a" /* SeriesApi */],
                __WEBPACK_IMPORTED_MODULE_9__providers_storage_movies_storage__["a" /* MoviesStorage */],
                __WEBPACK_IMPORTED_MODULE_11__providers_storage_actors_storage__["a" /* ActorsStorage */],
                __WEBPACK_IMPORTED_MODULE_10__providers_storage_series_storage__["a" /* SeriesStorage */],
                __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* Api */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, api) {
        var _this = this;
        this.api = api;
        this.rootPage = "Home";
        this.pages = [
            { name: "Home", component: "Home" },
            { name: "Movies", component: "Movies" },
            { name: "Series", component: "Series" },
            { name: "Actors", component: "Actors" }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.api.getAll();
        });
    }
    MyApp.prototype.openPage = function (p) {
        this.nav.setRoot(p.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ekene/code/personal-projects/new-movie-ease/src/app/app.html"*/'<ion-split-pane when="lg">\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content color="primary" class="sidebar">\n      <ion-list no-lines>\n        <button ion-item menuClose (click)="openPage(p)" *ngFor="let p of pages">\n          {{p.name}}\n        </button>\n      </ion-list>\n    </ion-content>\n    \n  </ion-menu>\n\n  <ion-nav #content main swipeBackEnabled=false [root]="rootPage"></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/home/ekene/code/personal-projects/new-movie-ease/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* Api */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map