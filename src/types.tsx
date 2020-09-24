export interface TmdbResponse<Payload> {
  page: number;
  total_results: number;
  total_pages: number;
  results: Payload;
}

export interface Movie {
  original_title: string;
  poster_path: string;
  overview: string;
  id: number;

  popularity: number;
  vote_count: number;
  video: boolean;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  release_date: string;
}

export type MoviesResponse = TmdbResponse<Movie[]>;
