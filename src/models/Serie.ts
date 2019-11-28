import { Cast, Crew, Video, Image, Review } from "./AppendToResponse";
import { APIResponse } from "./APIResponse";

export interface Serie {
  original_name: string,
  genre_ids: number[],
  name: string,
  popularity: number,
  origin_country: string[],
  vote_count: number,
  id: number,
  vote_average: number,
  first_air_date: string
  backdrop_path: string
  original_language: string|"en"
  overview: string
  poster_path: string
  credits ?: {
    cast: Cast[],
    crew: Crew[]
  }
  videos?: Video[],
  images?: {
    backdrops: Image[],
    posters: Image[]
  }
  reviews?: APIResponse<Review>
  similar?: APIResponse<Serie>
}