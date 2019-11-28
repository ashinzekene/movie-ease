require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const moviesRouter = require('./routes/new-movies')
const actorsRouter = require('./routes/new-actors')
const seriesRouter = require('./routes/new-series')
const imagesRouter = require('./routes/images-route')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/movies', moviesRouter)
app.use('/api/actors', actorsRouter)
app.use('/api/series', seriesRouter)
app.use('/api/images', imagesRouter)

app.use('/', express.static('www'))
app.get('*', (req, res) => {
  res.sendFile('./www/index.html')
})

app.all("*", (err, req, res, next) => {
  res.status(500).send("An error occurred")
})

module.exports = app;
