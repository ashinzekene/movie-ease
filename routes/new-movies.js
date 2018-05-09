var express = require("express")
var movies = require("../functions/movies")
var router = express.Router()


router.get('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.originalUrl)
  next()
})
router.get('/', function(req, res, next) {
  res.status(200).json({result: 'You requested for movies'})
})
router.get('/one/:id', function(req, res, next) {
  movies.one(req.params.id).then(result => res.status(200).json(result))
})
router.get('/popular/:page', function(req, res) {
  movies.popular(req.params.page).then(result => res.status(200).json(result))
})
router.get('/top-rated/:page', function(req, res) {
  movies.top(req.params.page).then(result => res.status(200).json(result))
})
router.get('/latest/:page', function(req, res) {
  movies.latest(req.params.page).then(result => res.status(200).json(result))
})
router.get('/upcoming/:page', function(req, res) {
  movies.upcoming(req.params.page).then(result => res.status(200).json(result))
})
router.get('/search/:query', function(req, res) {
  movies.search(req.params.query).then(result => res.status(200).json(result))
})


router.get('*', function(req, res) {
  res.status(400).json({response : 'Bad url'})
})

module.exports = router
