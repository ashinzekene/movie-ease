var rq = require("request-promise")
var api = require("../api")

module.exports = {
  one(id) {
    return   rq.get(api.getTv + id + "?"+ api.imdb.apiKey+ api.imdb.aToR + "credits,videos,images,reviews,similar").catch(catchError)
  },
  popular(page=1) {
    return rq.get(api.popularTvs+`&page=${page}`).catch(catchError)
  },
  top(page=1) {
    return rq.get(api.topRatedTvs+`&page=${page}`).catch(catchError)
  },
  latest(page=1) {
    return rq.get(api.latestTvs+`&page=${page}`).catch(catchError)
  },
  upcoming(page=1) {
    return rq.get(api.upcomingTvs+`&page=${page}`).catch(catchError)
  },
  search(query) {
    return rq.get(api.searchTv+query).catch(catchError)
  }
}

function catchError(err) {
  console.log(err)
}