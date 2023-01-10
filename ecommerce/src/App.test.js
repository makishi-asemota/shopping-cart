import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders home page", () => {
  // render app
  render(<App />, { wrapper: BrowserRouter });

  // assert that home page is rendered
  const home = screen.getByText(/What is Makishimota?/i);
  expect(home).toBeInTheDocument();
});
