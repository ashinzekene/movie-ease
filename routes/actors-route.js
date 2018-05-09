var api = require('../api')
var rq = require('request-promise')
var express = require('express')
route = express.Router()

route.get('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.originalUrl+ ' - '+ req.ips)
  next()
})
route.get('/', function(req, res) {
  res.status(200).json('You requested for actors and actresses')
})
route.get('/one/:id', function(req, res, next) {
  let id = req.params.id
  rq.get(api.getPerson + id + "?"+ api.imdb.apiKey+ api.imdb.aToR+'movie_credits,tv_credits').then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=>{
    console.log('err', req.originalUrl)
    res.status(503).json(`an error occured so could not load movie ${id}`)
  })
})
route.get('/search/:query', function(req, res, next) {
  let query = req.params.query
  rq.get(api.searchPerson + query).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=>{
    console.log('err', api.searchPerson + query)
    res.status(503).json(`an error occured so could not load movie ${query}`)
  })
})

route.get('/popular/:page', function(req, res) {
  let pageNo = req.params.page
  rq.get(api.popularPeople+`&page=${pageNo}`).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', req.originalUrl)
    res.status(503).json({result: 'An erorr occured'})
  })
})

module.exports = route
