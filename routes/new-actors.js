var express = require("express")
var actors = require("../functions/actors")
var router = express.Router()


route.get('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.originalUrl)
  next()
})
route.get('/', function(req, res, next) {
  res.status(200).json({result: 'You requested for actors'})
})
route.get('/one/:id', function(req, res, next) {
  actors.one(req.params.id).then(result => res.status(200).json(result))
})
route.get('/popular/:page', function(req, res) {
  actors.popular(req.params.page).then(result => res.status(200).json(result))
})
route.get('/search/:query', function(req, res) {
  actors.search(req.params.query).then(result => res.status(200).json(result))
})


route.get('*', function(req, res) {
  res.status(400).json({response : 'Bad url'})
})

module.exports = route
