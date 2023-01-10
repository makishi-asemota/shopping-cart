import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "./Home";

test("Renders shop button", () => {
  // Render home component
  render(<Home />);

  // Make sure shop button is rendered
  const destination = screen.getByRole("button");
  expect(destination).toBeInTheDocument();
});

test("Navigates to shop page", () => {
  // render app
  render(<App />, { wrapper: BrowserRouter });

  // navigate to shop page
  userEvent.click(screen.getByRole("button", { name: /Shop now/i }));

  // expect shop page
  const destination = screen.getByText(/Shop/i);
  expect(destination).toBeInTheDocument();
});
