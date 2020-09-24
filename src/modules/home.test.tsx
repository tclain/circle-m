import React from "react";
import { Home } from "./home";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should display hello world", () => {
    render(<Home />);
    expect(screen.getByText("hello world"));
  });
});
