import { useState } from "react";
import { searchMovies } from "../api";
import { MoviesResponse } from "../types";
import debounce from "lodash.debounce";

export const useSearchMovies = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [error, setError] = useState();
  const [data, setData] = useState<MoviesResponse | null>(null);

  const execute = debounce(async (opts: { query: string; page: number }) => {
    console.log("accessed the API");
    try {
      setStatus("loading");
      const data = await searchMovies(opts);
      setData(data);
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError(e);
    }
  }, 300);

  return {
    execute,
    data,
    error,
    status,
    loading: status === "loading",
  };
};
