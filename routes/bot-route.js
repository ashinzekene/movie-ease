var express = require('express')
var route = express.Router()
var io= require('socket.io')(route)

var movies = require("../functions/movies")
var rq = require('request-promise')
var actors = require("../functions/actors")
var series = require("../functions/series")
var apiai = require('apiai')
var sessionId = Math.random() * 10000000
var clientAccessToken ="e5fd4070d9e8491eb7bffe6a581e49dc"
var developerAccessToken ="ddc9be9877f84670ab4b391a71fec8de"
var app = apiai(clientAccessToken)

io.on('connection', function(client) {  
  console.log('Client connected...');
    var request
    client.on('userMessage', data => {
      console.log(data, "GOTTEN")
      request = app.textRequest(data, { sessionId });
    })
    
    request.on('response', response => {
      console.log(response, "RECIEVED")
      client.emit('AIMessage', response)
    });
    
    request.on('error', function(error) {
      console.log("ERROR", error);
    });
    
    request.end();
})

// route.post("/", (req, res) => {
//   res.setHeader("Content-Type","application/json")
//   const { parameters, action } = req.body.result
//   console.log("Paramteres and action", parameters, action )
//   rq.get(api.searchMovie+parameters.movie_name ).then((data)=> {
//       sendDataToBot(res, data)
//     }).catch((err)=> {
//         console.log('ERROR DEY', err.message)
//         sendErrorToBot(res)
//     })
// })

route.post("/", (req, res) => {
  const { parameters, action } = req.body.result
  switch (action) {
    case 'movie.details': {
      return movies.search(parameters.movie_name)
        .then(getMovie)
        .then(movieSearch)
        .then(result => res.json(result))
        .catch(e => handleError(parameters.movie_name, res, e))
    };
    case 'actor.details': {
      return actors.search(parameters.actor_name)
        .then(getActor)
        .then(actorSearch)
        .then(result => res.json(result))
        .catch(e => handleError(parameters.actor_name, res, e))
    };
    case 'serie.details': {
      return series.search(parameters.serie_name)
        .then(getSerie)
        .then(serieSearch)
        .then(result => res.json(result))
        .catch(e => handleError(parameters.serie_name, res, e))
    }
    default: {
      movies.search(parameters.movie_name)
        .then(movieSearch)
        .then(result => res.json(result))
        .catch(handleError)
    }
  }
})


function movieSearch(data) {
  const res = JSON.parse(data)
  var cast = res.credits.cast.map(actor => `${actor.name} acted as ${actor.character}`)
    .filter(detail => detail.indexOf("uncredited") === -1).join(", ")
    return {
      speech: `In ${res.title}, ${res.overview}. It was released on ${res.release_date}. In the movie ${cast}`,
      displayText: `In ${res.title}, ${res.overview}. It was released on ${res.release_date}. In the movie ${cast}😄😄`
    }    
  } 
  
  function actorSearch(data) {
    const res = JSON.parse(data)
    var movies = res.credits.cast.map(movie => movie.title).join(", ")
    return {
      speech: `${res.name}. ${res.biography}. ${res.name} was born on ${res.birthday}, ${res.name} has starred in ${movies}`,
      displayText: `${res.name}. ${res.biography}. ${res.name} was born on ${res.birthday}, ${res.name} has starred in ${movies}`
    }
  }
  
  function serieSearch(data) {
    const res = JSON.parse(data)
    var cast = res.credits.cast.map(actor => `${actor.name} acted as ${actor.character}`)
      .filter(detail => detail.indexOf("uncredited") === -1).join(", ")
  return {
    speech: `In ${res.name}, ${res.overview}. It was first released on ${res.first_air_date} and was last aired on ${res.last_air_date}, ${cast}.
     There are ${res.number_of_seasons} seasons and ${res.number_of_episodes} episodes`,
    displayText: `In ${res.name}, ${res.overview}. It was first released on ${res.first_air_date} and was last aired on ${res.last_air_date}, ${cast}.
     There are ${res.number_of_seasons} seasons and ${res.number_of_episodes} episodes 😄😄`
  }
}
  
function getActor(data) {
  return actors.one(JSON.parse(data).results[0].id)
}  

function getSerie(data) {
  return series.one(JSON.parse(data).results[0].id)
}  

function getMovie(data) {
  return movies.one(JSON.parse(data).results[0].id)
}  



function handleError(that, res, error) {
  return () => {
    console.log(error)
    res.json({
      speech: `Is there anything like ${that}? 😵😵`,
      displayText: `Is there anything like ${that}? 😵😵`
    })
  }
}

function sendDataToBot(res, data) {
  data = JSON.parse(data)
  if(data.results[0]) {
    response = {
      speech: `Title: ${data.results[0].title} \nOverview: ${data.results[0].overview} \n Release Date: ${data.results[0].release_date}.\nI have about ${data.total_reslts} movies with almost the same name 😄😄`,
      displayText: `Title: ${data.results[0].title} \nOverview: ${data.results[0].overview} \n Release Date: ${data.results[0].release_date}.\nI have about ${data.total_reslts} movies with almost the same name 😄😄`
    }
    console.log(data.results[0])
    res.json(response)
  } else {
    sendErrorToBot(res)
  }
}
module.exports= route


var sampleRequest = {
  "lang": "en", 
  "status": {
      "errorType": "success", 
      "code": 200
  }, 
  "timestamp": "2017-02-09T16:06:01.908Z", 
  "sessionId": "1486656220806", 
  "result": {
      "parameters": {
          "city": "Rome", 
          "name": "Ana"
      }, 
      "contexts": [], 
      "resolvedQuery": "my name is Ana and I live in Rome", 
      "source": "agent", 
      "score": 1.0, 
      "speech": "", 
      "fulfillment": {
          "messages": [
              {
                  "speech": "Hi Ana! Nice to meet you!", 
                  "type": 0
              }
          ], 
          "speech": "Hi Ana! Nice to meet you!"
      }, 
      "actionIncomplete": false, 
      "action": "greetings", 
      "metadata": {
          "intentId": "9f41ef7c-82fa-42a7-9a30-49a93e2c14d0", 
          "webhookForSlotFillingUsed": "false", 
          "intentName": "greetings", 
          "webhookUsed": "true"
      }
  }, 
  "id": "ab30d214-f4bb-4cdd-ae36-31caac7a6693", 
  "originalRequest": {
      "source": "google", 
      "data": {
          "inputs": [
              {
                  "raw_inputs": [
                      {
                          "query": "my name is Ana and I live in Rome", 
                          "input_type": 2
                      }
                  ], 
                  "intent": "assistant.intent.action.TEXT", 
                  "arguments": [
                      {
                          "text_value": "my name is Ana and I live in Rome", 
                          "raw_text": "my name is Ana and I live in Rome", 
                          "name": "text"
                      }
                  ]
              }
          ], 
          "user": {
              "user_id": "PuQndWs1OMjUYwVJMYqwJv0/KT8satJHAUQGiGPDQ7A="
          }, 
          "conversation": {
              "conversation_id": "1486656220806", 
              "type": 2, 
              "conversation_token": "[]"
          }
      }
  }
}
