import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../../App";

test("Navigate to product details", () => {
  // Render shop component
  render(
    <MemoryRouter initialEntries={["/shop"]}>
      <App />
    </MemoryRouter>
  );

  // click details
  const allButtons = screen.getAllByRole("button", { name: /Details/i });
  const oneButton = allButtons[0];
  userEvent.click(oneButton);

  // expect product details page
  const destination = screen.getByRole("button", { name: /Add to Cart/i });
  expect(destination).toBeInTheDocument();
});
