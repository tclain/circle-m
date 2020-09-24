process.env.NEXT_PUBLIC_TMDB_API_KEY = "test_api_key";

import React from "react";
import { MovieSearch } from "./MoviesSearch";
import { renderInTestMode } from "../lib/tests";
import nock from "nock";
import { exampleApiResponse } from "../fixtures";
import { fireEvent, screen } from "@testing-library/react";

describe("[integration] MoviesSearch", () => {
  nock("https://api.themoviedb.org/3/")
    .defaultReplyHeaders({
      "access-control-allow-origin": "*",
      "access-control-allow-credentials": "true",
    })
    .get("/search/movie?query=Avenger&page=1&api_key=test_api_key")
    .reply(200, exampleApiResponse);
  it("should query the tmdb api with the value in the search box", async () => {
    renderInTestMode(<MovieSearch />);
    const input = screen.getByRole("input");

    fireEvent.change(input, {
      target: {
        value: "Avenger",
      },
    });

    const renderedMovies = await screen.findAllByTestId("movie");

    expect(renderedMovies).toHaveLength(exampleApiResponse.results.length);
  });
});
