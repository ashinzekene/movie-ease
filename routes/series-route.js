var api = require('../api')
var express = require('express')
var rq = require('request-promise')
route = express.Router()

route.get('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.originalUrl+ ' - '+ req.ips)
  next()
})
route.get('/', function(req, res, next) {
  res.status(200).json({result: 'You requested for Tv series'})
})
route.get('/one/:id', function(req, res, next) {
  let id = req.params.id
  rq.get(api.getTv + id + "?"+ api.imdb.apiKey+ api.imdb.aToR + "credits,reviews,similar").then((resp) => {
    res.status(200).json(resp)
  }).catch((err) => {
    res.status(503).json({result: `an error occured so could not load movie ${id}`})
  })
})
route.get('/popular/:page', function(req, res) {
  let pageNo = req.params.page
  rq.get(api.popularTvs+`&page=${pageNo}`).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', req.originalUrl)
    res.status(503).json({result: 'An erorr occured'})
  })
})
route.get('/top-rated/:page', function(req, res) {
  let pageNo = req.params.page
  rq.get(api.topRatedTvs+`&page=${pageNo}`).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', req.originalUrl)
    res.status(503).json({result: 'An erorr occured'})
  })
})
route.get('/latest/:page', function(req, res) {
  let pageNo = req.params.page
  rq.get(api.latestTvs+`&page=${pageNo}`).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', req.originalUrl)
    res.status(503).json({result: 'An erorr occured'})
  })
})
route.get('/upcoming/:page', function(req, res) {
  let pageNo = req.params.page
  rq.get(api.upcomingTvs+`&page=${pageNo}`).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', req.originalUrl)
    res.status(503).json({result: 'An erorr occured'})
  })
})
route.get('/search/:query', function(req, res) {
  let query = req.params.query
  rq.get(api.searchTv + query).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', api.searchTv + query)
    res.status(503).json({result: `An erorr occured while getting movie ${query}`})
  })
})
route.get('*', function(req, res) {
  res.status(400).json({response : 'Bad url'})
})  
module.exports = route