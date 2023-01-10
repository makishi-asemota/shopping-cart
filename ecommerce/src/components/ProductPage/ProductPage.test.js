import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../../App";

test("Correctly adds to cart", () => {
  // Render product details component
  render(
    <MemoryRouter initialEntries={["/shop/2"]}>
      <App />
    </MemoryRouter>
  );

  // click add to cart
  userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));

  // assert that product is added to cart
  expect(screen.getByText("Cart(1)")).toBeInTheDocument();
});

test("if add to cart is clicked twice, alert pops up", () => {
  // Render product details component
  render(
    <MemoryRouter initialEntries={["/shop/2"]}>
      <App />
    </MemoryRouter>
  );

  // double click add to cart
  userEvent.dblClick(screen.getByRole("button", { name: /Add to Cart/i }));

  // Find the alert element
  const alert = screen.getByText(/Error!/i);

  // Assert that the alert is visible
  expect(alert).toBeVisible();
});
