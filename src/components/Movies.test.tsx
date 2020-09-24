import React from "react";
import { exampleApiResponse } from "../fixtures";
import { renderInTestMode } from "../lib/tests";
import { Movies } from "./Movies";

describe("Movies", () => {
  it("should render a list of movies", () => {
    expect(
      // FIXME: fix the types
      renderInTestMode(<Movies movies={exampleApiResponse.results as any} />)
    ).toMatchSnapshot();
  });
});
