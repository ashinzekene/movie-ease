var express = require("express")
var series = require("../functions/series")
var router = express.Router()


route.get('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.originalUrl)
  next()
})
route.get('/', function(req, res, next) {
  res.status(200).json({result: 'You requested for series'})
})
route.get('/one/:id', function(req, res, next) {
  series.one(req.params.id).then(result => res.status(200).json(result))
})
route.get('/popular/:page', function(req, res) {
  series.popular(req.params.page).then(result => res.status(200).json(result))
})
route.get('/top-rated/:page', function(req, res) {
  series.top(req.params.page).then(result => res.status(200).json(result))
})
route.get('/latest/:page', function(req, res) {
  series.latest(req.params.page).then(result => res.status(200).json(result))
})
route.get('/upcoming/:page', function(req, res) {
  series.upcoming(req.params.page).then(result => res.status(200).json(result))
})
route.get('/search/:query', function(req, res) {
  series.search(req.params.query).then(result => res.status(200).json(result))
})


route.get('*', function(req, res) {
  res.status(400).json({response : 'Bad url'})
})

module.exports = route
