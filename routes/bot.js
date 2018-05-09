const http = require("http")
const apiai = require('apiai');
const path = require("path")
const excuse = require("huh")
const express = require("express")
const AI = apiai(process.env.CLIENT_ACCESS_TOKEN);
const sessionId = "1000789980"
const app = express.Router()
let io = require('socket.io')(require("../app"));

io.use(function(socket, next) {
  var token = socket.response.setHeader("Access-Control-Allow-Origin", ["https://http://ashinzekene.github.io/movie-ease-bot"])
  next();
});

io.origins(['https://http://ashinzekene.github.io/movie-ease-bot'])

io.on("connection", client => {
  console.log("Client connected")

  client.on("userMessage", message => {
    console.log("Recieved message ", message)
    var apiaiReq = AI.textRequest(message, {
      sessionId
    });
    console.log("Waiting for response")

    apiaiReq.on('response', (response) => {
      let aiText = response.result.fulfillment.speech || excuse.get('en')
      console.log("responding with ", aiText)
      client.emit('AIMessage', aiText); // Send the result back to the browser!
    });

    apiaiReq.on('error', (error) => {
      console.log("Error", error);
      client.emit('AIMessage', "I don't know. Ask me later"); // Send the result back to the browser!
    });

    apiaiReq.end()
  })
})
// io.
// io.listen(process.env.PORT || 4400)
