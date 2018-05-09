
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
  var cast = res.credits.cast.filter((actor, i) => i < 5).map(actor => `${actor.name} acted as ${actor.character}`)
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
