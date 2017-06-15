var api = require('../api')
var express = require('express')
var rq = require('request-promise')
route = express.Router()


route.get('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.originalUrl)
  next()
})
route.get('/', function(req, res, next) {
  res.status(200).json({result: 'append to response'})
})
module.exports = route