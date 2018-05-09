var request = require("request");
var fs = require('fs')
var { StringDecoder } = require("string_decoder")
var decoder = new StringDecoder('utf-8')

var options = {
  "method": "GET",
  "url": "https://hotels.ng/hotel/autocomplete_request_proxy/hotel?api_key=so_you_think_you_can_snoop&data%5Bquery%5D=c",
  "headers": {
    "cookie": "PHPSESSID=8uedj3fk5gpmjekqjoimcpi513; _hng=59fa9fe7bddb6; _ga=GA1.2.1085254976.1509597167; _gid=GA1.2.659578866.1509597167; pnctest=1; _gat=1",
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.8",
    "connection": "keep-alive",
    "host": "hotels.ng",
    "referer": "https://hotels.ng/",
    "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Mobile Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
  }
};

request.get(options, (err, res, body) => {
  if(err || res.statusCode !== 200) {
    console.log(err || "Network Error")
    return
  }
  console.log(res.headers)
  var buff = Buffer.from(body)
  console.log(decoder.write(buff))
})


function addToFile(string) {
  fs.writeFile("hotelsng-hotels.json", string , (err, data) => {
    console.log("GO and check")
  })
}