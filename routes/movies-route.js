var api = require('../api')
var crawl = require('../crawl')
var express = require('express')
var request = require('request');
var cheerio = require('cheerio');
var rq = require('request-promise')
route = express.Router()


route.get('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.originalUrl)
  next()
})
route.get('/', function(req, res, next) {
  res.status(200).json({result: 'You requested for movies'})
})
route.get('/one/:id', function(req, res, next) {
  let id = req.params.id
  rq.get(api.getMovie + id + "?"+ api.imdb.apiKey+ api.imdb.aToR + "credits,reviews,similar").then((resp) => {
    res.status(200).json(resp)
  }).catch((err)=>{
    console.log(err)
    res.status(503).json({result: `an error occured so could not load movie ${id}`})
  })
})
route.get('/popular/:page', function(req, res) {
  let pageNo = req.params.page
  rq.get(api.popularMovies+`&page=${pageNo}`).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', req.originalUrl)
    res.status(503).json({result: 'An erorr occured'+err})
  })
})
route.get('/top-rated/:page', function(req, res) {
  let pageNo= req.params.page
  rq.get(api.topRatedMovies+`&page=${pageNo}`).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', req.originalUrl)
    res.status(503).json({result: 'An erorr occured'+err})
  })
})
route.get('/latest/:page', function(req, res) {
  let pageNo= req.params.page
  rq.get(api.latestMovies+`&page=${pageNo}`).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', req.originalUrl)
    res.status(503).json({result: 'An erorr occured'+api.latestMovies})
  })
})
route.get('/upcoming/:page', function(req, res) {
  let pageNo= req.params.page
  rq.get(api.upcomingMovies+`&page=${pageNo}`).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', req.originalUrl)
    res.status(503).json({result: 'An erorr occured'+err})
  })
})
route.get('/search/:query', function(req, res) {
  let query = req.params.query
  rq.get(api.searchMovie+query).then((resp)=> {
    res.status(200).json(resp)
  }).catch((err)=> {
    console.log('err', req.originalUrl)
    res.status(503).json({result: `${api.searchMovie+query} ${err}`})
  })
})
route.get('/ozone', function(req, res) {
  console.log(crawl.ozone())
})

route.get('*', function(req, res) {
  res.status(400).json({response : 'Bad url'})
})

module.exports = route

// var options = {
//     uri: 'https://api.github.com/user/repos',
//     qs: {
//         access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx' 
//     },
//     headers: {
//         'User-Agent': 'Request-Promise'
//     },
//     status().json: true // Automatically parses the status().JSON string in the response 
// };
 
// rp(options)
//     .then(function (repos) {
//         console.log('User has %d repos', repos.length);
//     })
//     .catch(function (err) {
//         // API call failed... 
//     });

getOzoneMovies = function() {
  var url = "http://ozonecinemas.com/now_showing.php";
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (!error) {reject(error) }
      var $ = cheerio.load(body, {normalizeWhitespace: true})
      var title = $('header div div.col.span_1_of_2 font').text();
      var nowShowings = $('header div ul li div.clearfix > b > font')
      var stories = $('header div ul li .post_text p')
      var showTimes = $('header div ul li .post_text')
      var trailerUrls = $("body > header > div.menu_wrap > div > div > div.content > div > div > div.col-lg-8.col-md-8.col-sm-12 > div.section.read_post_list > ul > li > div.col-lg-5.col-md-6.col-sm-6 > div > div.iframe_video_container > iframe")
      console.log(title)
      var result=[]
      for (let x in nowShowings) {
        if (x < nowShowings.length)
        // console.log(nowShowings.eq(x).text()+ ' || SHOW TIMES '+showTimes.eq(x).text().match(/\d{1,2}:\d{2}(AM|PM)/g)+'>>|| \n \n'+ trailerUrl.eq(x).attr("src"))
        result.push({
          title: nowShowings.eq(x).text().trim(), 
          showTime: showTimes.eq(x).text().match(/\d{1,2}:\d{2}(AM|PM)/g), 
          synopsi: showTimes.eq(x).text(),
          trailerUrl: trailerUrls.eq(x).attr("src")
        })
      }
      console.log('LOGGED', result)
      resolve(result)
    })
  })
}