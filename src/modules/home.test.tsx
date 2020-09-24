import React from "react";
import { Home } from "./home";
import { screen } from "@testing-library/react";
import { renderInTestMode } from "../lib/tests";

describe("Home", () => {
  it("should display hello world", () => {
    renderInTestMode(<Home />);
    expect(screen.getByText("hello world"));
  });
});
