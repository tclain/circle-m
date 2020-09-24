import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { render } from "@testing-library/react";

export const renderInTestMode = (fragment: React.ReactElement<any>) => {
  return render(<ThemeProvider>{fragment}</ThemeProvider>);
};
