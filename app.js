const express = require('express')
const path = require("path")
const http = require("http")
const bodyParser = require("body-parser")
require('dotenv').config()
const app = express()
const cors = require('cors')

const server = http.createServer(app)

const moviesRoute = require('./routes/new-movies')
const actorsRoute = require('./routes/new-actors')
const seriesRoute = require('./routes/new-series')
const imagesRoute = require('./routes/images-route')
const botRoute = require('./routes/bot-route')
const appendResponseRoute = require('./routes/append-response-route')
const port = process.env.PORT || 5400

// app.use(cors({ origin: ["https://http://ashinzekene.github.io/movie-ease-bot"], credentials: ["https://http://ashinzekene.github.io/movie-ease-bot"] }))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", [ "https://http://ashinzekene.github.io/movie-ease-bot"])
  res.setHeader("Access-Control-Allow-Credentials", "true")
  next()
})
app.get('/', function(req, res){
  res.status(200).sendFile(path.join(__dirname, "www", "index.html" ))
})
app.use('/movies', moviesRoute)
app.use('/actors', actorsRoute)
app.use('/series', seriesRoute)
app.use('/bot', botRoute)
app.use('/a2r', appendResponseRoute)
app.use('/images', imagesRoute)

module.exports = app.listen(port, function(err) {
  if(err) console.log(err)
  console.log('It is happening at port ', port)
})

require("./routes/bot")