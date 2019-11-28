import { Cast, Crew, Video, Image, Review } from "./AppendToResponse";
import { APIResponse } from "./APIResponse";

interface Entity {
  id: number
  name: string
}

interface ProductionCompany {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

export interface Movie {
    movie_id: number,
    api_key: string,
    language: string,
    adult: boolean,
    backdrop_path: string|null,
    belongs_to_collection: null|object,
    budget: number,
    genres: Entity[],
    homepage: string|null,
    id: number,
    imdb_id: string|null,
    original_language: string,
    original_title: string,
    overview: string|null,
    popularity: number,
    poster_path: string|null,
    production_companies?: ProductionCompany[],
    logo_path: string|null,
    origin_country: string,
    production_countries: {iso_3166_1: string, name: string}[],
    release_date: string,
    revenue: number,
    runtime: number|null,
    spoken_languages: {iso_639_1: string,name: string}[],
    status: "Rumored"|"Planned"|"In Production"|"Post Production"|"Released"|"Canceled"
    tagline: string|null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
    credits ?: {
      cast: Cast[],
      crew: Crew[]
    }
    videos?: {
      results: Video[],
    }
    images?: {
      backdrops: Image[],
      posters: Image[]
    }
    reviews?: APIResponse<Review>
    similar?: APIResponse<Movie>
}