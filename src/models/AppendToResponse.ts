export interface Cast {
  cast_id: number
  character: string
  credit_id: string
  gender: number|null
  id: number
  name: string
  order: number
  profile_path: string|null
}

export interface Crew {
  credit_id: string
  department: string
  gender: number|null
  id: number
  job: string
  name: string
  profile_path: string|null
}

export interface Video {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  site: string
  size: 360|480|720|1080
  type: "Trailer"|"Teaser"|"Clip"|"Featurette"|"Behind the Scenes"|"Bloopers"
}

export interface Image {
  aspect_ratio: number
  file_path: string
  height: number
  iso_639_1: string|null
  vote_average: number
  vote_count: number
  width: number
}

export interface Review {
  author: string,
  content: string,
  id: number
  url: string
}