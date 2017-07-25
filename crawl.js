// // var fs = require('fs');
// var request = require('request');
// var cheerio = require('cheerio');
// var url = "http://ozonecinemas.com/now_showing.php";
// ozone()
// ozone  = function() {
//   request(url, function (error, response, body) {
//     if (!error) {
//       var $ = cheerio.load(body, {normalizeWhitespace: true})
//       var title = $('header div div.col.span_1_of_2 font').text();
//       var nowShowings = $('header div ul li div.clearfix > b > font')
//       var stories = $('header div ul li .post_text p')
//       var showTimes = $('header div ul li .post_text')
//       var trailerUrls = $("body > header > div.menu_wrap > div > div > div.content > div > div > div.col-lg-8.col-md-8.col-sm-12 > div.section.read_post_list > ul > li > div.col-lg-5.col-md-6.col-sm-6 > div > div.iframe_video_container > iframe")
//       console.log(title)
//       var result=[]
//       for (let x in nowShowings) {
//         if (x < nowShowings.length)
//         // console.log(nowShowings.eq(x).text()+ ' || SHOW TIMES '+showTimes.eq(x).text().match(/\d{1,2}:\d{2}(AM|PM)/g)+'>>|| \n \n'+ trailerUrl.eq(x).attr("src"))
//         result.push({
//           title: nowShowings.eq(x).text().trim(), 
//           showTime: showTimes.eq(x).text().match(/\d{1,2}:\d{2}(AM|PM)/g), 
//           synopsi: showTimes.eq(x).text(),
//           trailerUrl: trailerUrls.eq(x).attr("src")
//         })
//         // return 
//       console.log(result)
//       }
//     } else {
//       console.log(error)
//     }
//   })
// }