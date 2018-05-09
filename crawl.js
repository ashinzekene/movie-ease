var fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');

var ozone  = () => {
  var url = "http://ozonecinemas.com/now_showing.php";
  return new Promise((resolve, reject) => {
    request(url, function (error, res, body) {
      if (!error) {
        var $ = cheerio.load(body, {normalizeWhitespace: true})
        var title = $('header div div.col.span_1_of_2 font').text();
        var nowShowings = $('header div ul li div.clearfix > b > font')
        var stories = $('header div ul li .post_text p')
        var showTimes = $('header div ul li .post_text')
        var trailerUrls = $("body > header > div.menu_wrap > div > div > div.content > div > div > div.col-lg-8.col-md-8.col-sm-12 > div.section.read_post_list > ul > li > div.col-lg-5.col-md-6.col-sm-6 > div > div.iframe_video_container > iframe")
        var result=[]
        for (let x in nowShowings) {
          if (x < nowShowings.length)
          // console.log(nowShowings.eq(x).text()+ ' || SHOW TIMES '+showTimes.eq(x).text().match(/\d{1,2}:\d{2}(AM|PM)/g)+'>>|| \n \n'+ trailerUrl.eq(x).attr("src"))
          result.push({
            title: nowShowings.eq(x).text().trim().replace(/\n +/g, ""), 
            showTime: showTimes.eq(x).text().match(/\d{1,2}:\d{2}(AM|PM)/g), 
            synopsis: showTimes.eq(x).text().replace(/\n +/g,"") ,
            trailerUrl: trailerUrls.eq(x).attr("src")
          })
        }
        resolve(result)
      } else {
        reject(error)
      }
    })
  })
}


var filmhouseSurulere  = () => {
  var url = 'http://www.filmhouseng.com/surulere.html';
  return new Promise((resolve, reject) => {
    request(url, function (error, res, body) {
      if (!error) {
        var $ = cheerio.load(body, {normalizeWhitespace: true})
        var list = $("ul.vertical_list li.clearfix");
        var result=[]
        // var title = $('header div div.col.span_1_of_2 font').text();
        // var movieInfo = list.eq(x).children("div").eq(1);
        // var trailer = list.eq(x).children("div").eq(1);
        for (let x in list) {
          if (x < list.length && list.eq(x).children("div")[0]){
              showTime = list.eq(x).children("div").eq(1).find(".post_text > div p").eq(1).text().match(/\d{1,2}:\d{1,2}(AM|PM|am|pm)/g) || []
            result.push({
              title: list.eq(x).children("div").eq(1).find("font").eq(0).text(),
              movieLength: list.eq(x).children("div").eq(0).find(".section_title").text().substr(13).replace(/\n +/g,""), 
              showTime: showTime.join(), //list.eq(x).children("div").eq(1).find(".post_text > div p").eq(1).text().match(/\d{1,2}:\d{1,2}(AM|PM|am|pm)/g),
              synopsis: list.eq(x).children("div").eq(1).find(".post_text > p").text() ,
              trailerUrl: list.eq(x).children("div").eq(0).find("iframe").attr("src") 
            })
          }
        }
        resolve(result)
      } else {
        reject(error)
      }
    })
  })
}


var genesisCinemasLagos  = () => {
  var url = 'http://www.genesiscinemas.com/lagos.html';
  return new Promise((resolve, reject) => {
    request(url, function (error, res, body) {
      if (!error) {
        var $ = cheerio.load(body, {normalizeWhitespace: true})
        var list = $(".movie.movie--preview.release")
        var result=[]
        for (let x = 0;x< list.length;x++) {
            var showTime=[]
            console.log(list.eq(x).find("br").nextAll(".movie__option").length)
            for (let y=0;y<list.eq(x).find("br").nextAll(".movie__option").length;y++) {
              // console.log(list.eq(x).find("br").nextAll(".movie__option").eq(y).text())
              showTime.push(list.eq(x).find("br").nextAll(".movie__option").eq(y).text())
            }
           showTimeString= showTime.join("")
          result.push({
            title: list.eq(x).find("a.movie__title").text(),
            movieLength: list.eq(x).find(".movie__time").text().replace(/\n +/g,""), 
            genre: list.eq(x).find(".movie__option").eq(0).text().split(","),
            rating: list.eq(x).find(".movie__option").eq(1).text(),
            starring: list.eq(x).find(".movie__option").eq(2).text().split(","),
            synopsis: list.eq(x).find(".movie__option").eq(3).text() ,
            showTime: showTimeString,//{ friday :list.eq(x).find(".movie__option").eq(4).text().match(/\d{1,2}:\d{1,2}(AM|PM|am|pm)/g), "saturday" : list.eq(x).find(".movie__option").eq(5).text().match(/\d{1,2}:\d{1,2}(AM|PM|am|pm)/g) },
            posterUrl: "http://www.genesiscinemas.com/"+list.eq(x).find(".movie__images > img").attr("src") 
          })
        }
        resolve(result)
      } else {
        reject(error)
      }
    })
  })
}

module.exports = {
  ozone,
  filmhouseSurulere,
  genesisCinemasLagos
}

filmhouseSurulere().then(res => {
  fs.writeFile("results", JSON.stringify(res), (err, res) => {
    if (err) console.log(err)
    console.log("Done")
  })
}) 

// movie.find("br").nextAll(".movie__option").text().match(/^/)

//find("br").nextAll(".movie__option").eq(2).text()