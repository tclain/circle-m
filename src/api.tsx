import Axios from "axios";
import { MoviesResponse } from "./types";

const client = Axios.create({ baseURL: "https://api.themoviedb.org/3/" });

export const searchMovies = ({
  query,
  page,
}: {
  query: string;
  page: number;
}) =>
  client
    .get<MoviesResponse>(
      `/search/movie?query=${query}&page=${page}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    )
    .then((response) => response.data);
