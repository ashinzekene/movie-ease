var express = require("express")
var actors = require("../functions/actors")
var router = express.Router()


router.get('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.originalUrl)
  next()
})
router.get('/', function(req, res, next) {
  res.status(200).json({result: 'You requested for actors'})
})
router.get('/one/:id', function(req, res, next) {
  actors.one(req.params.id).then(result => res.status(200).json(result))
})
router.get('/popular/:page', function(req, res) {
  actors.popular(req.params.page).then(result => res.status(200).json(result))
})
router.get('/search/:query', function(req, res) {
  actors.search(req.params.query).then(result => res.status(200).json(result))
})


router.get('*', function(req, res) {
  res.status(400).json({response : 'Bad url'})
})

module.exports = router
