import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../../App";

test("Renders shopping cart with no items", () => {
  // Render home component
  render(
    <MemoryRouter initialEntries={["/cart"]}>
      <App />
    </MemoryRouter>
  );

  // Find the alert element
  const emptyCart = screen.getByText(/Nothing to see here/i);

  // Assert that the alert is visible
  expect(emptyCart).toBeVisible();
});

test("Product is visible in cart", () => {
  // Render product details component
  render(
    <MemoryRouter initialEntries={["/shop/2"]}>
      <App />
    </MemoryRouter>
  );

  // click add to cart
  userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));

  // navigate to shop page
  userEvent.click(screen.getByText("Cart(1)", { name: /Cart(1)/i }));

  // Assert that the product is visible in the cart
  expect(screen.getByText("Total: $40")).toBeInTheDocument();
});

test("Product is removed from cart", () => {
  // Render product details component
  render(
    <MemoryRouter initialEntries={["/shop/2"]}>
      <App />
    </MemoryRouter>
  );

  // click add to cart
  userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));

  // navigate to shop page
  userEvent.click(screen.getByText("Cart(1)", { name: /Cart(1)/i }));

  // click remove button
  userEvent.click(screen.getByRole("button", { name: /Remove/i }));

  // Assert that the product is visible in the cart
  expect(screen.getByText(/Nothing to see here/i)).toBeInTheDocument();
});
