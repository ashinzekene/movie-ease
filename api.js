//http://www.omdbapi.com/?t=fast+and+furious&plot=full
var date = Date.now()
Imdb = {
  rootUrl : "https://api.themoviedb.org/3/",
  imgRootUrl : "https://image.tmdb.org/t/p/",
  apiKey : "api_key=18a56dee58d57bd2a91d7909b636f836",
  en : "&language=en",
  discoverMovie : "discover/movie?",
  discoverTv : "discover/tv?",
  sort : "sort_by=",
  region : "&region=en",
  aToR : "&append_to_response=",
  multiSearch : "search/multi?",
  search : "search/movie?",
  query : "&query="
}

module.exports = {
  searchMovie : `${Imdb.rootUrl}search/movie?${Imdb.apiKey+Imdb.en+Imdb.query}`,
  searchPerson : `${Imdb.rootUrl}search/person?${Imdb.apiKey+Imdb.en+Imdb.query}`,
  searchTv : `${Imdb.rootUrl}search/tv?${Imdb.apiKey+Imdb.en+Imdb.query}`,
  topRatedMovies  :  `${Imdb.rootUrl}discover/movie?${Imdb.apiKey+Imdb.en}&sort_by=vote_average.desc`,
  popularMovies : `${Imdb.rootUrl}movie/popular?${Imdb.apiKey+Imdb.en}&page=1`,
  latestMovies :  `${Imdb.rootUrl}discover/movie?${Imdb.apiKey+Imdb.en}&sort_by=release_date.desc&primary_release_date.lte=${date}`,
  upcomingMovies : `${Imdb.rootUrl}discover/movie?${Imdb.apiKey+Imdb.en}&sort_by=popularity.desc&primary_release_date.gte=${date}`,
  popularTvs : `${Imdb.rootUrl}discover/tv?${Imdb.apiKey+Imdb.en}&sort_by=popularity.desc`,
  topRatedTvs : `${Imdb.rootUrl}discover/tv?${Imdb.apiKey+Imdb.en}&sort_by=vote_average.desc`,
  latestTvs :  `${Imdb.rootUrl}discover/tv?${Imdb.apiKey+Imdb.en}&air_date.lte=${date}&sort_by=popularity.desc`,
  upcomingTvs :  `${Imdb.rootUrl}discover/tv?${Imdb.apiKey+Imdb.en}&air_date.gte=${date}&sort_by=popularity.desc`,
  popularPeople : `${Imdb.rootUrl}person/popular?${Imdb.apiKey+Imdb.en}`,
  getMovie : `${Imdb.rootUrl}movie/`,
  getPerson : `${Imdb.rootUrl}person/`,
  getTv : `${Imdb.rootUrl}tv/`,
  image: Imdb.imgRootUrl,
  imdb : Imdb
}



/*
APPEND TO RESPONSE
Movies - account_states, credits, alternative_titles, recommendations, images, videos, reviews, release_dates, similar, external_ids

Series - account_states, credits, alternative_titles, content_ratings, external_ids, recommendations, translation, similar, videos, images

People - movie_credits, tv_credits, combined_credits, images, external_ids, tagged_images
*/
//tv details

//popular paople ------------  https://api.themoviedb.org/3/person/popular?api_key=18a56dee58d57bd2a91d7909b636f836&language=en-US&page=1

//person images ----- /person/{person_id}/images

//person combined credits ----- /person/{person_id}/combined_credits

//Get movies by genre ---------  https://api.themoviedb.org/3/genre/{genre_id}/movies?api_key=18a56dee58d57bd2a91d7909b636f836&language=en-US&include_adult=false&sort_by=created_at.asc

//Get movies that came out today and lower ordering by date ---------- https://api.themoviedb.org/3/discover/movie?api_key=18a56dee58d57bd2a91d7909b636f836&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.lte=2017-06-09T20%3A28%3A05.681Z

//Highest Revenue movies ------------- https://api.themoviedb.org/3/discover/movie?api_key=18a56dee58d57bd2a91d7909b636f836&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1

//multi search  :  https://api.themoviedb.org/3/search/multi?api_key=18a56dee58d57bd2a91d7909b636f836&language=en-US&query=stallon&page=1&include_adult=false       
//https://api.themoviedb.org/3/discover/movie?api_key=18a56dee58d57bd2a91d7909b636f836&language=en-US&sort_by=popularity.desc