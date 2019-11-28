import { Serie } from "./Serie";
import { Movie } from "./movie";
import { Image } from "./AppendToResponse";

export interface Actor {
  birthday: string|null
  known_for_department: string
  deathday: null|string
  id: number
  name: string
  also_known_as: string[]
  gender: 0|1|2
  biography: string
  popularity: number
  place_of_birth: string|null
  profile_path: string|null
  adult: boolean
  imdb_id: string
  homepage: null|string
  images?: {
    profiles: Image[]
  }
  movie_credits?: {
    cast: Movie[]
    crew: Movie[]
  }
  tv_credits?: {
    cast: Serie[]
    crew: Serie[]
  }
}
