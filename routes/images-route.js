var api = require('../api')
var express = require('express')
var rq = require('request-promise')
const router = express.Router()

router.get('*', function(req, res, next) {
  res.set({
  	'Access-Control-Allow-Origin':'*',
	  'Content-Type': 'image/jpg',
	  'X-Powered-By': 'Ekene'
	})
  console.log(req.originalUrl)
  next()
})

router.get('/', function(req, res, next) {
  res.status(200).json({result: 'You requested for images'})
})

router.get('/w92/:image', function(req, res) {
	let image = req.params.image
  rq.get(api.image + 'w92' + image).then((resp) => {
    res.status(200).send(resp)
  }).catch((err)=>{
    console.log(err)
    res.status(503).json({result: `an error occured so could not load movie ${image}`})
  })
})

router.get('/w185/:image', function(req, res) {
	let image = req.params.image
  rq.get(api.image + 'w185' + image).then((resp) => {
    res.status(200).send(resp)
  }).catch((err)=>{
    console.log(err)
    res.status(503).json({result: `an error occured so could not load movie ${image}`})
  })
})

router.get('/w300/:image', function(req, res) {
	let image = req.params.image
  rq.get(api.image + 'w300' + image).then((resp) => {
    res.status(200).send(resp)
  }).catch((err)=>{
    console.log(err)
    res.status(503).json({result: `an error occured so could not load movie ${image}`})
  })
})

router.get('/w342/:image', function(req, res) {
	let image = req.params.image
  rq.get(api.image + 'w342/' + image).then((resp) => {
    res.status(200).send(resp)
  }).catch((err)=>{
    console.log(err)
    res.status(503).json({result: `an error occured so could not load movie ${image}`})
  })
})

router.get('/w500/:image', function(req, res) {
	let image = req.params.image
  rq.get(api.image + 'w500' + image).then((resp) => {
    res.status(200).send(resp)
  }).catch((err)=>{
    console.log(err)
    res.status(503).json({result: `an error occured so could not load movie ${image}`})
  })
})
module.exports = router