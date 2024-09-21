import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the card content correctly", () => {
  render(<App />);

  // Test the title rendered in the CardContentMolecule
  const titleElement = screen.getByText(
    (content, element) =>
      content.includes("Launch a new Cash Kick") &&
      element?.tagName.toLowerCase() === "h5"
  );
  expect(titleElement).toBeInTheDocument();

  // Test the description rendered in the CardContentMolecule
  const descriptionElement = screen.getByText(
    (content, element) =>
      content.includes("You have upto $0 available for a new cash advance") &&
      element?.tagName.toLowerCase() === "p"
  );
  expect(descriptionElement).toBeInTheDocument();

  // Test the button rendered in the CardContentMolecule
  const buttonElement = screen.getByRole("button", { name: /new cash kick/i });
  expect(buttonElement).toBeInTheDocument();
});
