var express = require('express')
var path = require("path")
var app = express()

var moviesRoute = require('./routes/movies-route')
var actorsRoute = require('./routes/actors-route')
var seriesRoute = require('./routes/series-route')
var imagesRoute = require('./routes/images-route')
var appendResponseRoute = require('./routes/append-response-route')
var port = process.env.PORT || 4400

app.use(express.static("www"))
app.listen(port, function(err){
  if(err) console.log(err)
  console.log('It is happening at port ', port)
})
app.get('/', function(req, res){
  res.status(200).sendFile(path.join(__dirname, "www", "index.html" ))
})

app.use('/movies', moviesRoute)
app.use('/actors', actorsRoute)
app.use('/series', seriesRoute)
app.use('/a2r', appendResponseRoute)
app.use('/images', imagesRoute)

app.get('*', function(req, res){
  res.status(400).json({result: 'Bad url '+ req.url})
})