var api = require('../api')
var rq = require('request-promise')
var express = require('express')
route = express.Router()
var clientAccessToken ="e5fd4070d9e8491eb7bffe6a581e49dc"
var developerAccessToken ="ddc9be9877f84670ab4b391a71fec8de"

route.post("/", (req, res) => {
  res.setHeader("Content-Type","application/json")
  const { parameters, action } = req.body.result
  console.log("Paramteres and action", parameters, action )
  rq.get(api.searchMovie+parameters.movie_name ).then((data)=> {
    sendDataToBot(res, data)
  }).catch((err)=> {
    console.log('ERROR DEY', err.message)
    sendErrorToBot(res)
  })
})


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
function sendErrorToBot(res) {
  response = Object.assign({}, sampleReponse, {
    speech: `What movie?`,
    displayText: `I didn't really get the movie. What movie?`
  })
  res.json(response)
}
module.exports= route

var sampleReponse = {
  "speech": "Barack Hussein Obama II was the 44th and current President of the United States.",
  "displayText": "Barack Hussein Obama II was the 44th and current President of the United States, and the first African American to hold the office. Born in Honolulu, Hawaii, Obama is a graduate of Columbia University  and Harvard Law School, where ",
  "source": "movie-ease"
  }
      
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
