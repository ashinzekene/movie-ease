var rq = require("request-promise")
var api = require("../api")

module.exports = {
  one(id) {
    return   rq.get(api.getPerson + id + "?"+ api.imdb.apiKey+ api.imdb.aToR + "credits,reviews,similar").catch(catchError)
  },
  popular(page=1) {
    return rq.get(api.popularPeople +`&page=${page}`).catch(catchError)
  },
  search(query) {
    return rq.get(api.searchPerson+query).catch(catchError)
  }
}

function catchError(err) {
  console.log(err)
}