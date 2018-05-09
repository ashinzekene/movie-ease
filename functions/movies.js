var rq = require("request-promise")
var api = require("../api")

module.exports = {
  one(id) {
    return rq.get(api.getMovie + id + "?"+ api.imdb.apiKey+ api.imdb.aToR + "credits,videos,images,reviews,similar").catch(catchError)
  },
  popular(page=1) {
    return rq.get(api.popularMovies+`&page=${page}`).catch(catchError)
  },
  top(page=1) {
    return rq.get(api.topRatedMovies+`&page=${page}`).catch(catchError)
  },
  latest(page=1) {
    return rq.get(api.latestMovies+`&page=${page}`).catch(catchError)
  },
  upcoming(page=1) {
    return rq.get(api.upcomingMovies+`&page=${page}`).catch(catchError)
  },
  search(query) {
    return rq.get(api.searchMovie+query).catch(catchError)
  }
}

function catchError(err) {
  console.log(err)
}