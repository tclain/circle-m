import React from "react";
import { screen } from "@testing-library/react";
import { exampleApiResponse } from "../fixtures";
import { renderInTestMode } from "../lib/tests";
import { Movie } from "./Movie";

const exampleMovie = exampleApiResponse.results[0];

describe("Movie", () => {
  it("should render a list of movies", () => {
    const wrapper = renderInTestMode(<Movie movie={exampleMovie} />);
    expect(screen.getByText("The Avengers")).toBeDefined();
    expect(
      screen.getByText(
        "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!"
      )
    ).toBeDefined();

    const posterImage = wrapper.container.querySelector("img");

    expect(posterImage).toBeDefined();
    screen.debug();
    // FIXME: use the correct origin

    expect(posterImage.src).toBe(
      "https://image.tmdb.org/t/p/w300/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
    );
  });
});
